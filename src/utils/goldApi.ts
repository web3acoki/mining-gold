/**
 * 金矿用户端接口（PRD §17）封装。
 *
 * 后端字段命名与本子站 interface 严格对齐，前端零字段映射；如需变更先改后端 VO。
 */
import { apiGet, apiPost } from './api';

// === my miners (GET /api/nodes/my) ===
export interface ApiMyMiner {
  id: number;
  level: string;
  status: string;
  price: number;
  dailyRate: number;
  dailyStatic: number;
  accumulated: number;
  healthTarget: number;
  purchasedAt: string;
  isCurrentActive: boolean;
}

export function fetchMyMiners(): Promise<ApiMyMiner[]> {
  return apiGet<ApiMyMiner[]>('/api/nodes/my');
}

// === node levels (GET /api/nodes/levels) ===
export interface ApiNodeLevel {
  id: number;
  levelCode: string;          // L1 / L2 / L3 / L4
  nameEn: string;
  nameZh: string;
  priceUsdt: number;
  dailyYieldRate: number;     // 0.0125 = 1.25%
  teamDailyCapUsdt: number;
  exitMultiplier: number;     // 3.0 = 300%
  enabled: number;            // 1=启用
  sort: number;
  remark?: string | null;
}

export function fetchNodeLevels(): Promise<ApiNodeLevel[]> {
  return apiGet<ApiNodeLevel[]>('/api/nodes/levels');
}

// === buy node (POST /api/nodes/buy) ===
export interface NodeBuyRequest {
  levelCode: string;       // L1 / L2 / L3 / L4
  fundPassword: string;    // 资金密码明文，HTTPS + 后端 BCrypt 比对
  idempotentKey: string;   // 客户端生成 UUID 防重复扣款
}

export interface ApiNodeBuyResult {
  instanceId: number;
  levelCode: string;
  priceUsdt: number;
  dailyYieldRate: number;
  exitTargetUsdt: number;
  status: string;
  activatedAt: string;
  idempotent: boolean;     // true = 幂等命中，未实际扣款
}

export function submitNodeBuy(body: NodeBuyRequest): Promise<ApiNodeBuyResult> {
  return apiPost<ApiNodeBuyResult>('/api/nodes/buy', body);
}

// === rewards/daily (POST /api/rewards/daily) ===
export interface RewardQueryRequest {
  rewardType?: string;
  relatedNodeInstanceId?: number;
  bizDateFrom?: string;
  bizDateTo?: string;
  pageNum?: number;
  pageSize?: number;
}

export interface ApiRewardEntry {
  id: number;
  type: string;
  createdAt: string;
  gross: number;
  usdtCredited: number;
  ecoCreditLocked: number;
  healthCounted: number;
  relatedMinerId?: number | null;
  status: string;
  xgtNominalUsd?: number | null;
  amountXgt?: number | null;
}

export interface RewardDailyResponse {
  rows: ApiRewardEntry[];
  total: number;
  pageNum: number;
  pageSize: number;
}

export function fetchRewardsDaily(query: RewardQueryRequest = {}): Promise<RewardDailyResponse> {
  return apiPost<RewardDailyResponse>('/api/rewards/daily', query);
}

// === xgt/locks/my (GET /api/xgt/locks/my) ===
export interface ApiXgtLock {
  id: number;
  sourceType: string;
  amountXgt: number;
  amountUsdNominal?: number | null;
  lockedAt: string;
  releaseAt: string;
  releasedAt?: string | null;
  status: 'locked' | 'releasable' | 'completed' | 'frozen';
}

export interface ApiMyXgtLocks {
  totalBalance: number;
  balanceLocked: number;
  balanceUnlocked: number;
  locks: ApiXgtLock[];
}

export function fetchMyXgtLocks(): Promise<ApiMyXgtLocks> {
  return apiGet<ApiMyXgtLocks>('/api/xgt/locks/my');
}

// === team/binary (GET /api/team/binary) ===
export interface ApiBinaryTeam {
  leftTodayVolume: number;
  rightTodayVolume: number;
  weakTodayVolume: number;
  leftTotalVolume: number;
  rightTotalVolume: number;
  leftCount: number;
  rightCount: number;
  directReferralCount: number;
  agentLevel: string;
  agentStatus: string;
  matchRate: number;
  globalDividendRate: number;
  teamDailyCap: number;
  hasActiveMiner: boolean;
  currentMinerLevel?: string | null;
  estimatedTodayReward: number;
  nextLevel?: string | null;
  nextLevelMatchRate?: number | null;
  nextLevelMinDirectReferralCount?: number | null;
  nextLevelMinLeftVolume?: number | null;
  nextLevelMinRightVolume?: number | null;
  nextLevelMinActiveNodeValue?: number | null;
  nextLevelEligible?: boolean | null;
}

export function fetchBinaryTeam(): Promise<ApiBinaryTeam> {
  return apiGet<ApiBinaryTeam>('/api/team/binary');
}

// === agency (GET /api/agency/me) ===
export interface ApiAgencyCondition {
  actual: number;
  target: number;
  met: boolean;
}

export interface ApiAgencyUpgradeOption {
  targetLevel: string;
  nameEn?: string;
  nameZh?: string;
  matchRate: number;
  globalDividendRate: number;
  minerValue: ApiAgencyCondition;
  directReferral: ApiAgencyCondition;
  leftVolume: ApiAgencyCondition;
  rightVolume: ApiAgencyCondition;
  eligible: boolean;
}

export interface ApiMyAgent {
  currentLevel: string;
  agentStatus: 'active' | 'frozen' | string;
  matchRate: number;
  globalDividendRate: number;
  activeNodeValueTotal: number;
  directReferralAgentV1Plus: number;
  leftVolumeTotal: number;
  rightVolumeTotal: number;
  hasPendingApplication: boolean;
  pendingTargetLevel?: string | null;
  pendingApplicationId?: number | null;
  upgradeOptions: ApiAgencyUpgradeOption[];
}

export interface ApiAgencyApplication {
  id: number;
  userId: number;
  fromLevel: string;
  targetLevel: string;
  reasonUser?: string | null;
  proofUrls?: string[] | null;
  directReferralCountSnap: number;
  leftVolumeTotalSnap: number;
  rightVolumeTotalSnap: number;
  activeNodeValueSnap: number;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  reviewAdminId?: number | null;
  reviewAt?: string | null;
  reviewRemark?: string | null;
  createTime: string;
  updateTime: string;
}

export interface AgencyApplyRequest {
  targetLevel: string;
  reasonUser?: string;
  proofUrls?: string[];
}

export function fetchMyAgent(): Promise<ApiMyAgent> {
  return apiGet<ApiMyAgent>('/api/agency/me');
}

export function submitAgencyApply(body: AgencyApplyRequest): Promise<void> {
  return apiPost<void>('/api/agency/apply', body);
}

export function fetchAgentApplications(): Promise<ApiAgencyApplication[]> {
  return apiGet<ApiAgencyApplication[]>('/api/agency/applications/my');
}

export function cancelAgencyApplication(id: number): Promise<void> {
  return apiPost<void>(`/api/agency/applications/${id}/cancel`);
}

// === founder (GET /api/founder/status / POST /api/founder/purchase) ===
export interface ApiFounderSeatBrief {
  seatNo: number;
  status: 'available' | 'owned' | 'frozen' | string;
  isMe: boolean;
}

export interface ApiFounderMySeat {
  id: number;
  seatNo: number;
  status: string;
  priceUsdt: number;
  paidAt?: string | null;
}

export interface ApiFounderStatus {
  totalSeats: number;
  availableCount: number;
  ownedCount: number;
  frozenCount: number;
  priceUsdt: number;
  mySeat?: ApiFounderMySeat | null;
  seats: ApiFounderSeatBrief[];
}

export interface FounderPurchaseRequest {
  fundPassword: string;
  idempotentKey: string;
}

export interface ApiFounderPurchaseResult {
  seatId: number;
  seatNo: number;
  amountUsdt: number;
  paidAt: string;
  idempotent: boolean;
}

export function fetchFounderStatus(): Promise<ApiFounderStatus> {
  return apiGet<ApiFounderStatus>('/api/founder/status');
}

export function submitFounderPurchase(body: FounderPurchaseRequest): Promise<ApiFounderPurchaseResult> {
  return apiPost<ApiFounderPurchaseResult>('/api/founder/purchase', body);
}

// === gold wallet (B 路线第一组：金矿子钱包 + 提现) ===

export interface ApiGoldWallet {
  usdtBalance: number;
  usdtTotalIn: number;
  usdtTotalOut: number;
  feeRate: number;            // 提现总费率（如 0.05）
  founderShareRate: number;   // 创世分成（如 0.01）
  platformFeeRate: number;    // 平台分成（feeRate - founderShareRate）
}

export function fetchMyGoldWallet(): Promise<ApiGoldWallet> {
  return apiGet<ApiGoldWallet>('/api/gold/wallet');
}

// 主现货 USDT 余额（GET /api/gold/spot-usdt）
// 专给"买矿机/49 席"弹窗 + 前置校验用，不是金矿子钱包余额。
export interface ApiSpotUsdt {
  availableAmount: number;
  totalAmount: number;
}

export function fetchMySpotUsdt(): Promise<ApiSpotUsdt> {
  return apiGet<ApiSpotUsdt>('/api/gold/spot-usdt');
}

export interface GoldWithdrawRequest {
  assetType?: string;     // 仅 USDT，留 undefined 后端默认 USDT
  amount: number;
  fundPassword: string;
  idempotentKey: string;
}

export interface ApiGoldWithdrawResult {
  orderId: number;
  assetType: string;
  grossAmount: number;
  feeAmount: number;
  founderShareAmount: number;
  platformFeeAmount: number;
  netAmount: number;
  feeRate: number;
  founderShareRate: number;
  status: 'pending' | 'completed' | 'cancelled' | 'failed';
  completedAt?: string;
  idempotent: boolean;
}

export function submitGoldWithdraw(body: GoldWithdrawRequest): Promise<ApiGoldWithdrawResult> {
  return apiPost<ApiGoldWithdrawResult>('/api/gold/withdraw', body);
}

export interface ApiGoldWithdrawOrder {
  id: number;
  userId: number;
  assetType: string;
  grossAmount: number;
  feeAmount: number;
  founderShareAmount: number;
  platformFeeAmount: number;
  netAmount: number;
  feeRateSnap: number;
  founderShareRateSnap: number;
  status: string;
  completedAt?: string | null;
  createTime: string;
}

export interface GoldWithdrawalsPage {
  records: ApiGoldWithdrawOrder[];
  total: number;
  current: number;
  size: number;
}

export function fetchMyGoldWithdrawals(pageNum = 1, pageSize = 20): Promise<GoldWithdrawalsPage> {
  return apiGet<GoldWithdrawalsPage>(`/api/gold/withdrawals?pageNum=${pageNum}&pageSize=${pageSize}`);
}

// === ecosystem_credit (PRD §10, C-2) ===

export interface ApiEcoCreditEntry {
  id: number;
  unlockType: 'trade_volume' | 'xgt_lock' | string;
  amountCredit: number;
  tradeVolumeRequired?: number | null;
  tradeVolumeCompleted?: number | null;
  xgtLockPlanId?: number | null;
  xgtLockReleaseAt?: string | null;
  xgtLockStatus?: string | null;
  status: 'in_progress' | 'completed' | 'cancelled' | string;
  startedAt: string;
  completedAt?: string | null;
  usdtCredited: number;
}

export interface ApiMyEcoCredit {
  balanceLocked: number;
  balanceUnlocked: number;
  balanceInProgress: number;
  balanceAvailable: number;
  entries: ApiEcoCreditEntry[];
}

export function fetchMyEcoCredit(): Promise<ApiMyEcoCredit> {
  return apiGet<ApiMyEcoCredit>('/api/ecosystem-credit/my');
}

export interface EcoCreditUnlockRequest {
  amountCredit: number;
  unlockType: 'trade_volume' | 'xgt_lock';
  idempotentKey?: string;
}

export interface ApiEcoCreditUnlockResult {
  unlockLogId: number;
  unlockType: string;
  amountCredit: number;
  tradeVolumeRequired?: number | null;
  xgtLockPlanId?: number | null;
  xgtLockReleaseAt?: string | null;
  status: string;
  startedAt: string;
  idempotent: boolean;
}

export function submitEcoCreditUnlock(body: EcoCreditUnlockRequest): Promise<ApiEcoCreditUnlockResult> {
  return apiPost<ApiEcoCreditUnlockResult>('/api/ecosystem-credit/unlock', body);
}
