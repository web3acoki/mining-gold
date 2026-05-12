/**
 * mining-gold 子站后端调用桥（PRD §17）
 *
 *  - baseURL：build 时从 VITE_APP_BASE_API 注入；缺省走当前 origin（同域 nginx 反代）
 *  - 鉴权：localStorage[<env>_TOKEN] → authorization + satoken 双 header（与 echo2-h5 同步）
 *  - 响应：RuoYi AjaxResult `{ code, msg, data }`，code === 200 才算成功
 *  - 401/Token 异常：清掉本地 token 并 reject；上层决定是否重定向回 H5
 *
 * 不要在此层做 toast，UI 决定怎么展示错误。
 */
import { clearStoredToken, getStoredToken } from './auth';

const BASE_URL: string = (import.meta.env.VITE_APP_BASE_API as string | undefined) || '';

export interface AjaxResult<T = unknown> {
  code: number;
  msg?: string;
  data?: T;
  [key: string]: unknown;
}

export class ApiError extends Error {
  code: number;
  raw: unknown;
  constructor(msg: string, code: number, raw: unknown) {
    super(msg);
    this.code = code;
    this.raw = raw;
  }
}

function buildHeaders(extra?: Record<string, string>): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(extra || {}),
  };
  const token = getStoredToken();
  if (token) {
    headers['authorization'] = token;
    headers['satoken'] = token;
  }
  return headers;
}

async function request<T>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
  const url = BASE_URL ? `${BASE_URL}${path}` : path;
  let res: Response;
  try {
    res = await fetch(url, {
      method,
      headers: buildHeaders(),
      body: body == null ? undefined : JSON.stringify(body),
    });
  } catch (e) {
    throw new ApiError((e as Error)?.message || 'network error', -1, e);
  }

  let json: AjaxResult<T>;
  try {
    json = (await res.json()) as AjaxResult<T>;
  } catch (e) {
    throw new ApiError(`invalid json (HTTP ${res.status})`, res.status, e);
  }

  const code = Number(json?.code ?? res.status);
  if (json && code === 200) {
    return (json.data as T) ?? (undefined as unknown as T);
  }

  // Token 失效：与 echo2-h5 保持一致，code=500 + msg 含 Token 关键字
  if (json?.msg && /token/i.test(json.msg)) {
    clearStoredToken();
  }
  throw new ApiError(json?.msg || `HTTP ${res.status}`, code, json);
}

export function apiGet<T>(path: string): Promise<T> {
  return request<T>('GET', path);
}

export function apiPost<T>(path: string, body?: unknown): Promise<T> {
  return request<T>('POST', path, body);
}
