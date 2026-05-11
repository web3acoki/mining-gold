/**
 * 与 H5 主站（echo2.0-h5）共享 token 的桥接：
 *  - 入口（/gold/ 子路径）支持 H5 通过 ?token=xxx 透传登录态
 *  - 同域部署下 localStorage 本就共享，但 query 透传更稳健（异域部署不需重写）
 *  - 写入 localStorage 后立即抹掉地址栏 token，避免分享/截屏泄露
 *
 * storage key 必须与 H5 一致：`${VITE_APP_ENV}_TOKEN`
 *  - H5 在 echo2.0-h5/src/config/dict.js 用相同前缀
 *  - 默认 'trustdefi'，build 时按 .env.production 覆盖
 */

const STORAGE_TOKEN_KEY = `${import.meta.env.VITE_APP_ENV || 'trustdefi'}_TOKEN`;

export function bootstrapTokenFromQuery(): void {
  if (typeof window === 'undefined') return;
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    return;
  }
  const token = params.get('token');
  if (!token) return;

  try {
    localStorage.setItem(STORAGE_TOKEN_KEY, token);
  } catch {
    // localStorage 不可用（如隐私模式 + iOS Safari）就静默放弃；不阻断渲染
  }

  // 抹掉地址栏 token，保留其它 query
  params.delete('token');
  const search = params.toString();
  const newUrl =
    window.location.pathname +
    (search ? `?${search}` : '') +
    window.location.hash;
  try {
    window.history.replaceState(null, '', newUrl);
  } catch {
    // history API 不可用就忽略；不影响登录态
  }
}

export function getStoredToken(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(STORAGE_TOKEN_KEY) || '';
  } catch {
    return '';
  }
}

export function clearStoredToken(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_TOKEN_KEY);
  } catch {
    // 忽略
  }
}
