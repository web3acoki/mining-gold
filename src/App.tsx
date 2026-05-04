/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Cpu, 
  Users, 
  Wallet, 
  Zap, 
  ArrowLeft,
  ChevronLeft,
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CircleDollarSign,
  Trophy,
  History,
  Info,
  DollarSign,
  Receipt,
  Lock,
  Gift,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import goldTrustVisualUrl from './public/image/gold.png';
import aiComputeVisualUrl from './public/image/gold2.png';
import ecosystemOverviewVisualUrl from './public/image/gold3.jpg';
import miningPermitImgUrl from './public/image/mining permit.png';
import miningPermit2ImgUrl from './public/image/mining permit2.png';
import miningPermit3ImgUrl from './public/image/mining permit3.png';

// --- Constants & Types ---
const translations: Record<string, any> = {
  en: {
    home: "Home",
    mines: "Mines",
    market: "Market",
    assets: "Assets",
    totalYield: "Total Compute Yield",
    activePower: "Active Power",
    healthyLimit: "3x Healthy Out",
    marketIntelligence: "Market Intelligence",
    dailyDividend: "Daily Dividend Pool",
    estReward: "Est. Personal Reward",
    yieldDaily: "Yield ~1.2% Daily",
    networkPerformance: "Network Performance",
    leftZone: "Left Zone",
    rightZone: "Right Zone",
    matchupReward: "Matchup Reward",
    pendingSettlement: "Settlement pending",
    rewardHub: "Reward Intelligence Hub",
    mineRecruitment: "SELECT COMPUTE LEVEL",
    mineDesc: "Lease a “Compute Power Node” to activate daily Gold Rush production",
    initiate: "Initiate",
    foundingPartners: "Founding 49ers Partners",
    godTierNode: "God-Tier Elite Node",
    limitedSeats: "Limited: {remaining}/49 Seats",
    subscription: "Subscription",
    founderApplicationFeeLabel: "Application fee",
    founderApplyCta: "Apply for founding seat",
    stakeClaim: "Stake Claim",
    marketEngine: "MARKET ENGINE",
    invitationCode: "Invitation Code",
    directs: "Directs",
    total: "Total",
    bonus: "Bonus",
    networkScanning: "Network scanning active",
    globalGenealogy: "Global Genealogy",
    trustBacking: "Trust & Backing",
    strategyRules: "Strategy Rules",
    strategyDesc: "Matchup rewards settled daily based on node cap. Genesis partners have priority spillover positioning for maximum efficiency.",
    assetHub: "ASSET HUB",
    withdrawableBalance: "Withdrawable Balance (EQUIVALENT)",
    nodeSynced: "Node synced",
    withdrawableUsdt: "Withdrawable USDT",
    withdrawableXgt: "Withdrawable $XGT",
    lockedXgt: "Locked $XGT",
    usdtWallet: "USDT Wallet",
    stakedAsset: "$XGT (Staked)",
    withdrawFeeNote: "5% processing fee applies",
    withdrawalHistory: "Withdrawal history",
    withdrawalTabUsdt: "USDT",
    withdrawalTabXgt: "$XGT",
    withdrawalListEmpty: "No withdrawals in this tab.",
    withdrawalStatus_completed: "Completed",
    withdrawalStatus_pending: "Pending",
    withdrawalFeeLabel: "Fee",
    withdrawCtaUsdt: "Withdraw USDT",
    withdrawCtaXgt: "Withdraw $XGT",
    withdrawAmountLabel: "Amount",
    withdrawAmountPlaceholder: "Enter amount",
    withdrawAvailable: "Available",
    withdrawMax: "Max",
    withdrawConfirm: "Confirm withdrawal",
    withdrawFeePreview: "Fee (5%)",
    withdrawNetReceive: "You receive (est.)",
    withdrawExceedsBalance: "Exceeds available balance",
    withdrawInvalidAmount: "Enter a valid amount",
    withdrawSubmitted: "Withdrawal submitted",
    withdraw: "Withdraw",
    swap: "Swap $XGT",
    recentLedger: "Recent Ledger",
    nodeDividend: "Node Dividend",
    settled: "Settled",
    initializing: "Initializing Node...",
    liveNodes: "Live nodes",
    miningGold: "Every transaction is mining gold for you",
    myMiners: "My Miners",
    minerShop: "Shop",
    currentActiveMiner: "Active eligibility miner",
    minerStatusActive: "Active",
    minerStatusFrozen: "Frozen",
    minerStatusExpired: "Expired",
    healthOutShort: "300% Healthy out",
    healthOutProgressLabel: "Healthy out progress",
    accumulatedVsTarget: "{acc} / {target} USDT",
    viewRewardFlow: "View rewards",
    noMinersTitle: "No AI miner yet",
    noMinersDesc: "Purchase an AI miner to unlock static rewards and eligibility for dynamic rewards.",
    goBuyMiner: "Buy miner",
    dailyStaticShort: "Daily static",
    teamDailyCap: "Team daily cap",
    paybackDays: "Payback",
    daysUnit: "days",
    viewAllRewards: "View all",
    backToAssets: "Back to assets",
    rewardsDetail: "Rewards",
    filterAll: "All",
    rewardType_static: "Static dividend",
    rewardType_referral: "Direct referral",
    rewardType_team: "Team agency",
    rewardType_agency_fee: "Fee share (V4/V5)",
    rewardType_founder_fee: "Founding partner fee share",
    rewardType_xgt_unlock: "$XGT lock release",
    rewardType_eco_credit_unlock: "Ecosystem credit unlock",
    monthSummaryHint: "May 2026 (demo)",
    monthSummaryUsdt: "Month USDT (credited)",
    monthSummaryEco: "Month eco credit (+)",
    monthSummaryXgt: "Month $XGT released",
    split7030: "70% USDT · 30% ecosystem credit",
    split5050: "50% USDT · 50% $XGT (nominal)",
    healthCountedLabel: "Healthy-out counted gross",
    rewardStatusReleased: "Released",
    rewardStatusUnlocked: "Unlocked",
    dailyYieldRate: "Daily yield",
    monthEcoUnlockFoot: "eco unlock → USDT",
    rewardListEmpty: "No rewards in this filter.",
    riskFrozenBanner: "Account paused: no rewards until released from risk control.",
    purchasePriceShort: "Price",
    activatedAtShort: "Activated",
    minerFilterBadge: "Filtered by miner",
    clearMinerFilter: "Clear",
    linkedMiner: "Linked miner",
    gatedByMinerExplain: "Eligibility binds to active miner",

    minerLvlL1: "Explorer",
    minerLvlL2: "Pioneer",
    minerLvlL3: "Visionary",
    minerLvlL4: "Trailblazer",
    minerLvlL5: "Legend",
    minerLvlL6: "Supreme",

    healthyOutExplainShort: "Each miner has independent 300% ceiling. Static, referral & team gross counts.",
    eligibilityExplainShort: "No active miner — no static, referral, team or agency fee dividends.",

    // Home Project Introduction
    homeIntroTag: "Project Introduction",
    homeIntroTitle: "Wroko Tranga 2.0 Gold Compute Ecosystem",
    homeIntroCore: "Buy AI mining rigs to enjoy the double “digging” rewards: crypto upside plus physical gold protection.",
    homeIntroModelTitle: "1. Business Model: Dual Mining of Compute & Gold",
    homeIntroModelContent:
      "This is a disruptive ecosystem project. Customers purchase WT’s AI Mineral high-compute mining rigs to anchor dual asset values:\n\nDigital reward side (high growth): rigs run AI computation to mine specific crypto assets, giving customers immediate high-yield digital rewards.\n\nPhysical gold anchor side (extreme risk-off): rig holders’ asset values are anchored to the project’s physical gold mine output. Behind every compute reward, Tier-1 physical gold credit provides the risk-control base.",
    homeIntroBaseTitle: "2. Physical Base: Global Tier-1 Gold Belt (Verified Risk Control)",
    homeIntroBaseContent:
      "The project’s physical gold assets are not a distant promise. They are licensed core assets that provide real-world credit backing:\n\nBig neighbor: the mining zone is located in South America’s core greenstone gold belt, adjacent to Newmont’s Merian mine (NYSE: NEM) and IAMGOLD’s Rosebel mine.\n\n100% ownership & key permits: WT holds 100% rights to the 99.3 sq km mining-right area and has fully obtained a mining license (Permit for Gold Mining). It enables immediate development value and avoids early-stage exploration risk.\n\nPrimary logistics & risk control: a fully road-access route within ~2.5 hours to the capital is rare for South American mining projects. It reduces operational and deployment costs dramatically, while ensuring safe transport of physical gold.",
    homeIntroConclusionTitle: "3. Conclusion: A flagship asset allocation for the Web3 era",
    homeIntroConclusionContent:
      "Wroko Tranga 2.0 successfully transforms traditional gold allocation into Web3’s intelligent asset configuration. While investors capture the AI compute wave and high-growth crypto returns, they also gain a physical risk-off anchor from the world-class gold vein near Newmont.",

    backingMiningPermit: "Mining Permit",
    backingMiningLicense: "Mining License",
    backingPartnershipCred: "Partnership Credential",

    founderPerksTitle: "Member Benefits (tap to expand)",
    founderPerk1Title: "Agency Priority Slot",
    founderPerk1Desc: "Top priority placement within the agency hierarchy.",
    founderPerk2Title: "Listing Sponsorship",
    founderPerk2Desc: "Sponsor one token listing per month.",
    founderPerk3Title: "XAgent Fee Dividend",
    founderPerk3Desc: "Equal share of 10% of monthly CEX spot + futures trading fees.",
    founderPerk4Title: "V5 Authorization",
    founderPerk4Desc: "Directly grant V5 agency status to 1 user.",
    founderPerk5Title: "Withdrawal Fee Share",
    founderPerk5Desc: "Permanent +1% withdrawal-fee revenue share.",
    founderPerk6Title: "$XGT Token Allocation",
    founderPerk6Desc: "49 seats share 10% of total $XGT supply equally per seat.",
    founderPerk7Title: "VIP Concierge",
    founderPerk7Desc: "Dedicated support, operations and ticket handling.",
  },
  zh: {
    home: "首页",
    mines: "矿机",
    market: "顾问",
    assets: "资产",
    totalYield: "总算力收益",
    activePower: "当前算力",
    healthyLimit: "300% 健康出局",
    marketIntelligence: "市场情报",
    dailyDividend: "每日分红池",
    estReward: "预计个人收益",
    yieldDaily: "日收益约 1.2%",
    networkPerformance: "网体业绩",
    leftZone: "左区",
    rightZone: "右区",
    matchupReward: "对碰奖励",
    pendingSettlement: "等待结算",
    rewardHub: "收益情报中心",
    mineRecruitment: "选择算力等级",
    mineDesc: "租赁“计算算力节点”以激活每日金钻产出",
    initiate: "启动节点",
    foundingPartners: "创始 49人合伙人",
    godTierNode: "神级精英节点",
    limitedSeats: "限量: {remaining}/49 席位",
    subscription: "认购价格",
    founderApplicationFeeLabel: "申请费用",
    founderApplyCta: "申请创世席位",
    stakeClaim: "立即认领",
    marketEngine: "市场引擎",
    invitationCode: "邀请码",
    directs: "直推",
    total: "累计",
    bonus: "奖金",
    networkScanning: "网络扫描激活中",
    globalGenealogy: "全球谱系图",
    trustBacking: "战略背书与资质",
    strategyRules: "策略规则",
    strategyDesc: "对碰奖励根据节点上限每日结算。创始合伙人享有优先滑落排位，以实现效率最大化。",
    assetHub: "资产中心",
    withdrawableBalance: "可提现余额 (等值)",
    nodeSynced: "节点已同步",
    withdrawableUsdt: "可提现 USDT",
    withdrawableXgt: "可提现 $XGT",
    lockedXgt: "锁仓中 $XGT",
    usdtWallet: "USDT 钱包",
    stakedAsset: "$XGT (质押中)",
    withdrawFeeNote: "收取 5% 的手续费",
    withdrawalHistory: "提现记录",
    withdrawalTabUsdt: "USDT",
    withdrawalTabXgt: "$XGT",
    withdrawalListEmpty: "该分类下暂无提现记录。",
    withdrawalStatus_completed: "已完成",
    withdrawalStatus_pending: "处理中",
    withdrawalFeeLabel: "手续费",
    withdrawCtaUsdt: "提现 USDT",
    withdrawCtaXgt: "提现 $XGT",
    withdrawAmountLabel: "提现数量",
    withdrawAmountPlaceholder: "请输入数量",
    withdrawAvailable: "可提",
    withdrawMax: "全部",
    withdrawConfirm: "确认提现",
    withdrawFeePreview: "手续费（5%）",
    withdrawNetReceive: "预计到账",
    withdrawExceedsBalance: "超过可提余额",
    withdrawInvalidAmount: "请输入有效数量",
    withdrawSubmitted: "提现已提交",
    withdraw: "提现",
    swap: "兑换 $XGT",
    recentLedger: "最近账目",
    nodeDividend: "节点分红",
    settled: "已结算",
    initializing: "节点初始化中...",
    liveNodes: "在线节点",
    miningGold: "每笔交易都在为你挖金",
    myMiners: "我的矿机",
    minerShop: "商城",
    currentActiveMiner: "当前有效权益矿机",
    minerStatusActive: "进行中",
    minerStatusFrozen: "已冻结",
    minerStatusExpired: "已出局",
    healthOutShort: "300% 健康出局",
    healthOutProgressLabel: "健康出局进度",
    accumulatedVsTarget: "{acc} / {target} USDT",
    viewRewardFlow: "查看流水",
    noMinersTitle: "暂无 AI 矿机",
    noMinersDesc: "购买 AI 矿机后，即可获得每日静态分红与动态奖励资格。",
    goBuyMiner: "立即购买",
    dailyStaticShort: "每日固定收益",
    teamDailyCap: "团队日封顶",
    paybackDays: "回本周期",
    daysUnit: "天",
    viewAllRewards: "查看全部",
    backToAssets: "返回资产",
    rewardsDetail: "收益明细",
    filterAll: "全部",
    rewardType_static: "静态分红",
    rewardType_referral: "直推奖",
    rewardType_team: "团队代理奖",
    rewardType_agency_fee: "代理全网手续费分红",
    rewardType_founder_fee: "创世合伙人手续费分红",
    rewardType_xgt_unlock: "$XGT 锁仓释放",
    rewardType_eco_credit_unlock: "ecosystem_credit 解锁",
    monthSummaryHint: "2026 年 5 月（演示）",
    monthSummaryUsdt: "本月 USDT（已入账）",
    monthSummaryEco: "本月生态积分（入账）",
    monthSummaryXgt: "本月 $XGT 释放",
    split7030: "70% USDT · 30% ecosystem_credit",
    split5050: "50% USDT · 50% $XGT（名义）",
    healthCountedLabel: "健康出局计入（毛额）",
    rewardStatusReleased: "已发放",
    rewardStatusUnlocked: "已解锁",
    dailyYieldRate: "日化收益率",
    monthEcoUnlockFoot: "ecosystem_credit 解锁 → USDT",
    rewardListEmpty: "当前筛选下暂无流水。",
    riskFrozenBanner: "账户风控中：暂停参与收益，解冻后恢复。",
    purchasePriceShort: "购买金额",
    activatedAtShort: "激活时间",
    minerFilterBadge: "已筛选矿机",
    clearMinerFilter: "清除",
    linkedMiner: "关联矿机",
    gatedByMinerExplain: "动态奖励绑定当前有效权益矿机",

    minerLvlL1: "探索者",
    minerLvlL2: "拓荒者",
    minerLvlL3: "远见者",
    minerLvlL4: "开路先锋",
    minerLvlL5: "传奇者",
    minerLvlL6: "至尊者",

    healthyOutExplainShort: "每台矿机独立 300% 额度；静态、直推、团队奖励毛额计入。",
    eligibilityExplainShort: "无 active 矿机则无静态分红、直推奖、团队代理奖与代理全网手续费分红。",

    // Home Project Introduction
    homeIntroTag: "项目介绍",
    homeIntroTitle: "Wroko Tranga 2.0 黄金算力生态项目",
    homeIntroCore: "购买AI矿机，享加密货币与实物黄金的双重“挖掘”收益。",
    homeIntroModelTitle: "1. 商业模式：算力与黄金的“双重挖矿”",
    homeIntroModelContent:
      "这是一个颠覆性的生态项目。客户通过购买WT项目的AI Mineral高算力矿机，获得双重资产价值锚定：\n\n数字收益端（高增长）：矿机通过运行AI计算，挖取特定加密货币，客户获得即时的数字资产高收益。\n\n实物锚定端（极度避险）：矿机持有人其资产价值与项目持有的实物金矿产出相锚定。每一份算力收益背后，都有Tier-1级的实物黄金信用提供“风控底座”。",
    homeIntroBaseTitle: "2. 实物底座：全球顶级Tier-1金矿带（确定的风控）",
    homeIntroBaseContent:
      "该项目的实物金矿资产并非远期承诺，而是已获得规范许可的核心资产，为生态提供实体信用担保：\n\n巨头为邻：矿区位于南美洲核心绿岩金矿带，紧邻全球最大金矿公司Newmont（纽交所代码：NEM）的Merian矿山和IAMGOLD的Rosebel矿山。成矿地质条件与巨头完全一致，资源确定性极高。\n\n100%自主与关键许可：WT公司持有99.3平方公里采矿权区域的100%权益，且已完全取得采矿许可证（Permit for Gold Mining）。具备即时开发价值，规避初级勘探风险。\n\n一级物流与风控：全公路2.5小时直通首都，这在南美矿业项目中极其罕见。不仅极大地降低了金矿运营和算力设备部署成本，更确保了实物黄金运输的安全。",
    homeIntroConclusionTitle: "3. 结论：Web3时代的资产配置旗舰",
    homeIntroConclusionContent:
      "Wroko Tranga 2.0成功地将传统的黄金配置转化为Web3时代的数智资产：它让投资者在捕捉AI算力风口和加密资产高增长收益的同时，获得来自世界级黄金地脉（Newmont为邻）的实体避险锚定。",

    backingMiningPermit: "采矿证",
    backingMiningLicense: "采矿许可证",
    backingPartnershipCred: "合作背书资质",

    founderPerksTitle: "权益详情（点击展开）",
    founderPerk1Title: "代理优先卡位",
    founderPerk1Desc: "在代理体系中拥有最高优先级。",
    founderPerk2Title: "上币保荐权",
    founderPerk2Desc: "每月可保荐一个项目上币。",
    founderPerk3Title: "XAgent 手续费分红",
    founderPerk3Desc: "每月 CEX 现货手续费 + 合约手续费的 10% 平均分配。",
    founderPerk4Title: "V5 授权",
    founderPerk4Desc: "可直接授予 1 名用户 V5 代理资格。",
    founderPerk5Title: "提现手续费分红",
    founderPerk5Desc: "额外 1% 永久分成。",
    founderPerk6Title: "$XGT 筹码",
    founderPerk6Desc: "49 席合计获得总供应 10%，每席均分。",
    founderPerk7Title: "VIP 专属通道",
    founderPerk7Desc: "专属客服、运营、工单处理。",
  }
};

type MinerLevel = 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6';

interface NodeCatalogItem {
  id: string;
  level: MinerLevel;
  price: number;
  cp: number;
  dailyCap: number;
  dailyRate: number;
  dailyStatic: number;
  paybackDays: number;
  color: string;
}

/** Catalog aligned with PRD §3.1 (AI miner does not define agency matchup rate §8.2). */
const NODES: NodeCatalogItem[] = [
  { id: 'l1', level: 'L1', price: 500, cp: 500, dailyCap: 500, dailyRate: 0.01, dailyStatic: 5, paybackDays: 100, color: 'from-emerald-400 to-emerald-600' },
  { id: 'l2', level: 'L2', price: 2000, cp: 2000, dailyCap: 2000, dailyRate: 0.0125, dailyStatic: 25, paybackDays: 80, color: 'from-amber-400 to-amber-600' },
  { id: 'l3', level: 'L3', price: 6000, cp: 6000, dailyCap: 6000, dailyRate: 0.0158, dailyStatic: 95, paybackDays: 63, color: 'from-emerald-500 to-emerald-700' },
  { id: 'l4', level: 'L4', price: 20000, cp: 20000, dailyCap: 20000, dailyRate: 0.0195, dailyStatic: 390, paybackDays: 51, color: 'from-amber-500 to-amber-700' },
  { id: 'l5', level: 'L5', price: 50000, cp: 50000, dailyCap: 50000, dailyRate: 0.024, dailyStatic: 1200, paybackDays: 41, color: 'from-rose-400 to-orange-600' },
];

const GENESIS_NODE = {
  /** Founding partner application / seat fee (PRD-aligned with top-tier magnitude) */
  price: 600_000,
  spots: 49,
  remaining: 12,
  perks: [
    { titleKey: 'founderPerk1Title', descKey: 'founderPerk1Desc' },
    { titleKey: 'founderPerk2Title', descKey: 'founderPerk2Desc' },
    { titleKey: 'founderPerk3Title', descKey: 'founderPerk3Desc' },
    { titleKey: 'founderPerk4Title', descKey: 'founderPerk4Desc' },
    { titleKey: 'founderPerk5Title', descKey: 'founderPerk5Desc' },
    { titleKey: 'founderPerk6Title', descKey: 'founderPerk6Desc' },
    { titleKey: 'founderPerk7Title', descKey: 'founderPerk7Desc' },
  ],
};

const BANNERS = [
  { id: 1, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800", title: "Global Compute Network", sub: "Activate Nodes for Daily Rewards" },
  { id: 2, img: "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?auto=format&fit=crop&q=80&w=800", title: "Ecosystem Stability", sub: "Backed by $XGT Liquidity" },
  { id: 3, img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800", title: "Market Intelligence", sub: "Real-time Node Performance Tracking" }
];

const HOME_INTRO_IMAGES = [
  {
    src: goldTrustVisualUrl,
    alt: "Gold & trust visual",
  },
  {
    src: aiComputeVisualUrl,
    alt: "AI compute visual",
  },
  {
    src: ecosystemOverviewVisualUrl,
    alt: "Ecosystem overview visual",
  },
];

type LightboxImage = { src: string; alt: string };

const ImageLightboxOverlay: React.FC<{
  images: LightboxImage[];
  activeIndex: number | null;
  onActiveIndexChange: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ images, activeIndex, onActiveIndexChange }) => {
  const total = images.length;
  const isOpen = activeIndex !== null;
  const close = () => onActiveIndexChange(null);
  const goPrev = () =>
    onActiveIndexChange((prev) =>
      prev === null ? prev : (prev - 1 + total) % total
    );
  const goNext = () =>
    onActiveIndexChange((prev) =>
      prev === null ? prev : (prev + 1) % total
    );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onActiveIndexChange(null);
      else if (e.key === 'ArrowLeft') {
        onActiveIndexChange((prev) =>
          prev === null ? prev : (prev - 1 + total) % total
        );
      } else if (e.key === 'ArrowRight') {
        onActiveIndexChange((prev) =>
          prev === null ? prev : (prev + 1) % total
        );
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, total, onActiveIndexChange]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <AnimatePresence>
      {isOpen && active && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close image"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition"
          >
            <X size={20} />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt}
            className="object-contain max-h-[85vh] max-w-[92vw] rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />

          {total > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold tracking-wide">
              {(activeIndex ?? 0) + 1} / {total}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface HomeIntroImageGridProps {
  images: LightboxImage[];
}

const HomeIntroImageGrid: React.FC<HomeIntroImageGridProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src}
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${img.alt}`}
            className={`relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-brand-primary/40 ${
              i === 2 ? 'col-span-2' : ''
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-32 object-cover transition-all duration-500"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <ImageLightboxOverlay
        images={images}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
      />
    </>
  );
};

interface TrustBackingCard {
  src: string;
  alt: string;
  badge: string;
  objectContain?: boolean;
}

const TrustBackingStrip: React.FC<{ cards: TrustBackingCard[] }> = ({
  cards,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const slides = cards.map((c) => ({ src: c.src, alt: c.alt }));

  return (
    <>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 mb-12">
        {cards.map((card, i) => (
          <motion.div
            whileTap={{ scale: 0.95 }}
            key={`${card.badge}-${i}-${card.src}`}
            className="min-w-[140px] bg-white border border-neutral-100 rounded-3xl p-3 shadow-md relative overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Enlarge image: ${card.alt}`}
              className="w-full text-left rounded-2xl cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-brand-primary/35"
            >
              <div className="w-full h-20 bg-neutral-50 rounded-2xl mb-2 overflow-hidden border border-neutral-50">
                <img
                  src={card.src}
                  className={`w-full h-full grayscale hover:grayscale-0 transition-all pointer-events-none ${
                    card.objectContain
                      ? 'object-contain object-center opacity-95 bg-neutral-50'
                      : 'object-cover opacity-60'
                  }`}
                  alt=""
                  aria-hidden
                />
              </div>
            </button>
            <p className="text-[10px] font-black text-neutral-800 text-center uppercase tracking-tighter pointer-events-none">
              {card.alt}
            </p>
            <div className="absolute top-2 right-2 bg-brand-primary text-[6px] font-black px-1.5 py-0.5 rounded-full text-black">
              {card.badge}
            </div>
          </motion.div>
        ))}
      </div>
      <ImageLightboxOverlay
        images={slides}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
      />
    </>
  );
};

interface UserState {
  uid: string;
  refCode: string;
  balanceUSDT: number;
  /** Withdrawable $XGT balance */
  xgtWithdrawable: number;
  /** $XGT in lock / stake, not yet withdrawable */
  xgtLocked: number;
  power: number;
  totalEarned: number;
  healthLimit: number; // 300%
  leftVol: number;
  rightVol: number;
  /** Risk control freeze — paused reward eligibility when true */
  riskFrozen?: boolean;
}

interface MyMiner {
  id: string;
  level: MinerLevel;
  status: 'active' | 'frozen' | 'expired';
  price: number;
  dailyRate: number;
  dailyStatic: number;
  accumulated: number;
  healthTarget: number;
  purchasedAt: string;
  isCurrentActive?: boolean;
}

type RewardType =
  | 'static'
  | 'referral'
  | 'team'
  | 'agency_fee'
  | 'founder_fee'
  | 'xgt_unlock'
  | 'eco_credit_unlock';

interface RewardEntry {
  id: string;
  type: RewardType;
  createdAt: string;
  gross: number;
  usdtCredited: number;
  ecoCreditLocked: number;
  healthCounted: number;
  relatedMinerId?: string;
  status: 'settled' | 'released' | 'unlocked';
  /** Static split §5.4 — nominal USD for display */
  xgtNominalUsd?: number;
  /** $XGT lock release quantity */
  amountXgt?: number;
}

type WithdrawalAsset = 'usdt' | 'xgt';

interface WithdrawalEntry {
  id: string;
  asset: WithdrawalAsset;
  amount: number;
  fee?: number;
  status: 'completed' | 'pending';
  createdAt: string;
  remark?: string;
}

/** Demo withdrawals — swap for GET /wallet/withdrawals */
const MOCK_WITHDRAWALS: WithdrawalEntry[] = [
  { id: 'wd-u1', asset: 'usdt', amount: 500, fee: 25, status: 'completed', createdAt: '2026-05-04T10:22:00.000Z' },
  { id: 'wd-u2', asset: 'usdt', amount: 120, fee: 6, status: 'pending', createdAt: '2026-05-06T08:15:00.000Z' },
  { id: 'wd-u3', asset: 'usdt', amount: 88.5, fee: 4.43, status: 'completed', createdAt: '2026-05-01T14:00:00.000Z' },
  { id: 'wd-x1', asset: 'xgt', amount: 200, fee: 10, status: 'completed', createdAt: '2026-05-05T16:40:00.000Z' },
  { id: 'wd-x2', asset: 'xgt', amount: 50, status: 'pending', createdAt: '2026-05-06T12:00:00.000Z', remark: 'On-chain' },
  { id: 'wd-x3', asset: 'xgt', amount: 320, fee: 16, status: 'completed', createdAt: '2026-04-28T09:30:00.000Z' },
];

/** Demo miners — swap for GET /nodes/my */
const MOCK_MY_MINERS: MyMiner[] = [
  {
    id: 'm-l4-001',
    level: 'L4',
    status: 'active',
    price: 20000,
    dailyRate: 0.0195,
    dailyStatic: 390,
    accumulated: 12580,
    healthTarget: 60000,
    purchasedAt: '2026-03-01T08:00:00.000Z',
    isCurrentActive: true,
  },
  {
    id: 'm-l2-001',
    level: 'L2',
    status: 'active',
    price: 2000,
    dailyRate: 0.0125,
    dailyStatic: 25,
    accumulated: 420,
    healthTarget: 6000,
    purchasedAt: '2026-02-10T08:00:00.000Z',
    isCurrentActive: false,
  },
  {
    id: 'm-l1-001',
    level: 'L1',
    status: 'expired',
    price: 500,
    dailyRate: 0.01,
    dailyStatic: 5,
    accumulated: 1500,
    healthTarget: 1500,
    purchasedAt: '2025-12-01T08:00:00.000Z',
    isCurrentActive: false,
  },
];

/** Demo rewards — swap for GET /rewards/daily */
const MOCK_REWARDS: RewardEntry[] = [
  { id: 'rw001', type: 'static', createdAt: '2026-05-02T00:05:05.000Z', gross: 390, usdtCredited: 195, ecoCreditLocked: 0, healthCounted: 390, relatedMinerId: 'm-l4-001', status: 'settled', xgtNominalUsd: 195 },
  { id: 'rw002', type: 'referral', createdAt: '2026-05-02T14:22:00.000Z', gross: 1000, usdtCredited: 700, ecoCreditLocked: 300, healthCounted: 1000, relatedMinerId: 'm-l4-001', status: 'settled' },
  { id: 'rw003', type: 'team', createdAt: '2026-05-02T00:10:03.000Z', gross: 3200, usdtCredited: 2240, ecoCreditLocked: 960, healthCounted: 3200, relatedMinerId: 'm-l4-001', status: 'settled' },
  { id: 'rw004', type: 'agency_fee', createdAt: '2026-05-01T00:15:08.000Z', gross: 88.12, usdtCredited: 88.12, ecoCreditLocked: 0, healthCounted: 0, status: 'settled' },
  { id: 'rw005', type: 'founder_fee', createdAt: '2026-05-01T00:15:09.000Z', gross: 210.05, usdtCredited: 210.05, ecoCreditLocked: 0, healthCounted: 0, status: 'settled' },
  { id: 'rw006', type: 'xgt_unlock', createdAt: '2026-05-02T00:25:02.000Z', gross: 0, usdtCredited: 0, ecoCreditLocked: 0, healthCounted: 0, status: 'released', amountXgt: 4200 },
  { id: 'rw007', type: 'eco_credit_unlock', createdAt: '2026-05-03T09:41:00.000Z', gross: 260, usdtCredited: 260, ecoCreditLocked: 0, healthCounted: 0, status: 'unlocked' },
  { id: 'rw008', type: 'static', createdAt: '2026-05-03T00:05:06.000Z', gross: 25, usdtCredited: 12.5, ecoCreditLocked: 0, healthCounted: 25, relatedMinerId: 'm-l2-001', status: 'settled', xgtNominalUsd: 12.5 },
  { id: 'rw009', type: 'static', createdAt: '2026-05-04T00:05:07.000Z', gross: 390, usdtCredited: 195, ecoCreditLocked: 0, healthCounted: 390, relatedMinerId: 'm-l4-001', status: 'settled', xgtNominalUsd: 195 },
  { id: 'rw010', type: 'referral', createdAt: '2026-05-04T16:08:00.000Z', gross: 600, usdtCredited: 420, ecoCreditLocked: 180, healthCounted: 600, relatedMinerId: 'm-l4-001', status: 'settled' },
  { id: 'rw011', type: 'team', createdAt: '2026-05-05T00:10:03.000Z', gross: 1200, usdtCredited: 840, ecoCreditLocked: 360, healthCounted: 1200, relatedMinerId: 'm-l4-001', status: 'settled' },
  { id: 'rw012', type: 'agency_fee', createdAt: '2026-05-05T00:15:10.000Z', gross: 92.44, usdtCredited: 92.44, ecoCreditLocked: 0, healthCounted: 0, status: 'settled' },
  { id: 'rw013', type: 'xgt_unlock', createdAt: '2026-05-05T00:25:03.000Z', gross: 0, usdtCredited: 0, ecoCreditLocked: 0, healthCounted: 0, status: 'released', amountXgt: 800 },
  { id: 'rw014', type: 'eco_credit_unlock', createdAt: '2026-05-06T11:05:00.000Z', gross: 180, usdtCredited: 180, ecoCreditLocked: 0, healthCounted: 0, status: 'unlocked' },
];

function minerLevelNameKey(level: MinerLevel): string {
  const map: Record<MinerLevel, string> = {
    L1: 'minerLvlL1',
    L2: 'minerLvlL2',
    L3: 'minerLvlL3',
    L4: 'minerLvlL4',
    L5: 'minerLvlL5',
    L6: 'minerLvlL6',
  };
  return map[level];
}

// --- Components ---

const Card = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <div className={`bg-glass rounded-3xl overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const NavItem = ({ active, icon: Icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 flex-1 py-4 transition-all duration-300 relative ${active ? 'text-brand-primary' : 'text-neutral-500 hover:text-neutral-700'}`}
  >
    <Icon size={22} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[9px] font-extrabold uppercase tracking-widest">{label}</span>
    {active && (
      <motion.div 
        layoutId="activeNav"
        className="absolute -top-[1px] w-8 h-[2px] bg-brand-primary shadow-[0_0_8px_rgba(250,204,21,0.8)]"
      />
    )}
  </button>
);

const SectionTitle = ({ title }: any) => (
  <div className="flex items-center gap-3 mb-6 px-1">
    <div className="w-1 h-5 bg-brand-primary rounded-full shadow-sm" />
    <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">{title}</h2>
  </div>
);

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-44 overflow-hidden rounded-[2.5rem] shadow-lg shadow-neutral-200/50">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="absolute inset-0"
        >
          <img 
            src={BANNERS[current].img} 
            className="w-full h-full object-cover" 
            alt={BANNERS[current].title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-8">
            <motion.h4 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-primary font-serif font-bold text-2xl tracking-tight leading-tight"
            >
              {BANNERS[current].title}
            </motion.h4>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-[11px] font-medium tracking-wide mt-2"
            >
              {BANNERS[current].sub}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-6 flex gap-1.5 z-10">
        {BANNERS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/30'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState<UserState | null>(null);
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [mineSubView, setMineSubView] = useState<'myMiners' | 'shop'>('myMiners');
  const [walletView, setWalletView] = useState<'overview' | 'rewards' | 'withdrawals' | 'withdrawForm'>('overview');
  const [withdrawalAssetTab, setWithdrawalAssetTab] = useState<WithdrawalAsset>('usdt');
  const [withdrawFormAsset, setWithdrawFormAsset] = useState<WithdrawalAsset>('usdt');
  const [withdrawAmountStr, setWithdrawAmountStr] = useState('');
  const [withdrawalList, setWithdrawalList] = useState<WithdrawalEntry[]>(() => [...MOCK_WITHDRAWALS]);
  const [rewardFilter, setRewardFilter] = useState<RewardType | 'all'>('all');
  const [rewardMinerFilter, setRewardMinerFilter] = useState<string | null>(null);

  const handleReturnToCex = () => {
    // Prefer returning to the container (CEX) via browser history.
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    // Fallback: allow CEX to pass an explicit return URL.
    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get('returnUrl') || params.get('backUrl');
    if (returnUrl) {
      window.location.href = returnUrl;
      return;
    }

    // Last resort: stay in H5 and go to its home tab.
    setActiveTab('home');
  };

  const t = (key: string, data?: any) => {
    let text = translations[lang][key] || key;
    if (data) {
      Object.keys(data).forEach(k => {
        text = text.replace(`{${k}}`, data[k]);
      });
    }
    return text;
  };

  // Simulate CEX injection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mockUser: UserState = {
      uid: params.get('uid') || 'UX_88291',
      refCode: params.get('ref') || 'XGT_GOLD',
      balanceUSDT: 1240.50,
      xgtWithdrawable: 120.2,
      xgtLocked: 330.0,
      power: 20000,
      totalEarned: 12580,
      healthLimit: 60000,
      leftVol: 12500,
      rightVol: 8200,
      riskFrozen: false,
    };
    setUser(mockUser);
  }, []);

  if (!user) return <div className="min-h-screen bg-bg-main flex items-center justify-center text-brand-primary font-black italic tracking-tighter uppercase">{t('initializing')}</div>;

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-24"
    >
      {/* Wallet Summary */}
      <Card className="p-6 bg-white border-neutral-100 relative group shadow-xl shadow-neutral-100/50">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity" />
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{t('totalYield')}</p>
            <h3 className="text-5xl font-serif font-bold text-slate-900 flex items-baseline gap-2 tracking-tight">
              {user.balanceUSDT.toLocaleString()} <span className="text-sm font-sans font-semibold text-slate-400 uppercase tracking-widest">USDT</span>
            </h3>
          </div>
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] text-brand-primary font-bold tracking-[0.1em]">ID: {user.uid}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-emerald-50/20 p-5 border-emerald-100/50 shadow-none">
            <p className="text-emerald-800/60 text-[9px] uppercase font-bold mb-2 tracking-widest">{t('activePower')}</p>
            <div className="flex items-center gap-2">
              <Cpu size={16} className="text-brand-secondary" />
              <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">{user.power} <span className="text-xs font-sans text-slate-400">P</span></span>
            </div>
          </Card>
          <Card className="bg-amber-50/20 p-5 border-amber-100/50 shadow-none">
            <p className="text-amber-800/60 text-[9px] uppercase font-bold mb-2 tracking-widest">{t('healthyLimit')}</p>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-primary" />
              <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">{(user.totalEarned / (user.power * 3) * 100).toFixed(0)}%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${(user.totalEarned / (user.power * 3) * 100)}%` }}
                 className="bg-brand-primary h-full shadow-[0_0_8px_rgba(179,139,77,0.3)]" 
               />
            </div>
          </Card>
        </div>
      </Card>

      {/* Home Project Introduction */}
      <Card className="p-6 bg-white border-slate-100 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">{t('homeIntroTag')}</p>
            <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight leading-tight">{t('homeIntroTitle')}</h3>
          </div>
          <div className="hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-primary/10 border border-brand-primary/20">
            <CircleDollarSign size={18} className="text-brand-primary" />
          </div>
        </div>

        <div className="mt-4 p-4 rounded-3xl bg-brand-primary/5 border border-brand-primary/10">
          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.15em]">{t('homeIntroTag')}</p>
          <p className="mt-2 text-[12px] text-slate-600 leading-relaxed font-medium">{t('homeIntroCore')}</p>
        </div>

        <div className="mt-4">
          <HomeIntroImageGrid images={HOME_INTRO_IMAGES} />
        </div>

        <div className="mt-5 space-y-3">
          <details className="group rounded-3xl border border-slate-100 bg-white overflow-hidden">
            <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between gap-3">
              <span className="text-[12px] font-bold text-slate-900 tracking-tight">{t('homeIntroModelTitle')}</span>
              <ChevronRight size={16} className="text-brand-primary" />
            </summary>
            <div className="px-5 pb-4">
              <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-line">{t('homeIntroModelContent')}</p>
            </div>
          </details>

          <details className="group rounded-3xl border border-slate-100 bg-white overflow-hidden">
            <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between gap-3">
              <span className="text-[12px] font-bold text-slate-900 tracking-tight">{t('homeIntroBaseTitle')}</span>
              <ChevronRight size={16} className="text-brand-primary" />
            </summary>
            <div className="px-5 pb-4">
              <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-line">{t('homeIntroBaseContent')}</p>
            </div>
          </details>

          <details className="group rounded-3xl border border-slate-100 bg-white overflow-hidden">
            <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between gap-3">
              <span className="text-[12px] font-bold text-slate-900 tracking-tight">{t('homeIntroConclusionTitle')}</span>
              <ChevronRight size={16} className="text-brand-primary" />
            </summary>
            <div className="px-5 pb-4">
              <p className="text-[12px] text-slate-600 leading-relaxed font-medium whitespace-pre-line">{t('homeIntroConclusionContent')}</p>
            </div>
          </details>
        </div>
      </Card>

      <SectionTitle title={t('trustBacking')} />
      <TrustBackingStrip
        cards={[
          {
            src: miningPermitImgUrl,
            alt: t('backingMiningPermit'),
            badge: 'SECURED',
            objectContain: true,
          },
          {
            src: miningPermit2ImgUrl,
            alt: t('backingMiningLicense'),
            badge: 'LEGAL',
            objectContain: true,
          },
          {
            src: miningPermit3ImgUrl,
            alt: t('backingPartnershipCred'),
            badge: 'PARTNER',
            objectContain: true,
          },
        ]}
      />

    </motion.div>
  );

  const renderMyMiners = () => {
    const sorted = [...MOCK_MY_MINERS].sort((a, b) => {
      if (a.isCurrentActive) return -1;
      if (b.isCurrentActive) return 1;
      const rank: Record<MinerLevel, number> = { L6: 6, L5: 5, L4: 4, L3: 3, L2: 2, L1: 1 };
      return rank[b.level] - rank[a.level];
    });

    const openRewardsForMiner = (minerId: string) => {
      setRewardMinerFilter(minerId);
      setRewardFilter('all');
      setWalletView('rewards');
      setActiveTab('wallet');
    };

    return (
      <div className="space-y-5">
        <Card className="p-5 border-slate-100 bg-slate-50/80 shadow-sm">
          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{t('healthyOutExplainShort')}</p>
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium mt-2">{t('eligibilityExplainShort')}</p>
        </Card>

        {user?.riskFrozen ? (
          <Card className="p-4 border-amber-200 bg-amber-50/80">
            <p className="text-[11px] font-bold text-amber-900 uppercase tracking-widest">{t('riskFrozenBanner')}</p>
          </Card>
        ) : null}

        {sorted.length === 0 ? (
          <Card className="p-10 text-center border-dashed border-slate-200 bg-white">
            <Cpu size={36} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-serif font-bold text-slate-900">{t('noMinersTitle')}</h3>
            <p className="text-[12px] text-slate-500 mt-3 leading-relaxed px-4">{t('noMinersDesc')}</p>
            <button
              type="button"
              onClick={() => setMineSubView('shop')}
              className="mt-6 bg-slate-900 text-brand-primary px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-[0.12em]"
            >
              {t('goBuyMiner')}
            </button>
          </Card>
        ) : (
          sorted.map((miner) => {
            const pct = miner.healthTarget > 0 ? Math.min(100, (miner.accumulated / miner.healthTarget) * 100) : 0;
            const statusKey =
              miner.status === 'active' ? 'minerStatusActive' : miner.status === 'frozen' ? 'minerStatusFrozen' : 'minerStatusExpired';
            const purchaseLabel = `${new Date(miner.purchasedAt).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}`;

            return (
              <motion.div whileTap={{ scale: 0.99 }} key={miner.id}>
                <Card
                  className={`relative p-6 border bg-white shadow-lg border-slate-100 ${
                    miner.isCurrentActive ? 'ring-2 ring-brand-primary ring-offset-2' : ''
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] font-black bg-slate-900 text-brand-primary px-2 py-0.5 rounded-md uppercase">{miner.level}</span>
                        <span className="text-lg font-serif font-bold text-slate-900">{t(minerLevelNameKey(miner.level))}</span>
                        <span
                          className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                            miner.status === 'active'
                              ? 'bg-emerald-100 text-emerald-800'
                              : miner.status === 'frozen'
                                ? 'bg-amber-100 text-amber-900'
                                : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {t(statusKey)}
                        </span>
                      </div>
                      {miner.isCurrentActive ? (
                        <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">{t('currentActiveMiner')}</p>
                      ) : (
                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{t('gatedByMinerExplain')}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{t('purchasePriceShort')}</p>
                      <p className="text-xl font-serif font-bold text-slate-900">
                        {miner.price.toLocaleString()} <span className="text-xs font-sans text-slate-400">USDT</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('dailyStaticShort')}</p>
                      <p className="text-lg font-serif font-bold text-slate-900">
                        {miner.dailyStatic.toLocaleString()} <span className="text-[10px] font-sans text-slate-400">U/d</span>
                      </p>
                      <p className="text-[9px] text-slate-400 mt-1">{(miner.dailyRate * 100).toFixed(2)}% · CP</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('activatedAtShort')}</p>
                      <p className="text-sm font-bold text-slate-800">{purchaseLabel}</p>
                      <p className="text-[9px] text-slate-400 mt-1">{t('healthOutShort')}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      <span>{t('healthOutProgressLabel')}</span>
                      <span>{pct.toFixed(2)}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        className="bg-gradient-to-r from-brand-secondary to-brand-primary h-full rounded-full"
                      />
                    </div>
                    <p className="text-[11px] text-slate-600 font-semibold tracking-tight">
                      {t('accumulatedVsTarget', {
                        acc: miner.accumulated.toLocaleString(undefined, { maximumFractionDigits: 2 }),
                        target: miner.healthTarget.toLocaleString(),
                      })}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openRewardsForMiner(miner.id)}
                    className="w-full py-3.5 rounded-2xl border border-slate-200 bg-white text-[11px] font-bold uppercase tracking-[0.12em] text-slate-800 hover:bg-slate-50 flex items-center justify-center gap-2"
                  >
                    <Receipt size={16} />
                    {t('viewRewardFlow')}
                  </button>
                </Card>
              </motion.div>
            );
          })
        )}
      </div>
    );
  };

  const renderMinerShopInner = () => (
    <>
      <div className="text-center mb-10 pt-2">
        <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">{t('mineRecruitment')}</h2>
        <div className="w-12 h-0.5 bg-brand-primary mx-auto my-4 rounded-full" />
        <p className="text-slate-400 text-[11px] font-medium tracking-[0.1em]">{t('mineDesc')}</p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {NODES.map((node) => (
          <motion.div whileTap={{ scale: 0.98 }} key={node.id}>
            <Card className="relative p-7 group cursor-pointer border-slate-100 hover:border-brand-primary/30 transition-all shadow-xl shadow-slate-200/20 bg-white">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${node.color} opacity-5 rounded-full -mr-10 -mt-10 blur-3xl group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      {node.level} {t(minerLevelNameKey(node.level))}
                      <Zap size={14} className="text-brand-primary fill-brand-primary shrink-0" />
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">CP {node.cp.toLocaleString()}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
                      {node.price.toLocaleString()} <span className="text-xs font-sans font-bold text-slate-400">U</span>
                    </p>
                    <button
                      type="button"
                      className="mt-3 bg-slate-900 text-brand-primary px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] border border-slate-800 hover:bg-brand-primary hover:text-slate-900 transition-all shadow-lg"
                    >
                      {t('initiate')}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">{t('teamDailyCap')}</span>
                    <span className="text-sm font-bold text-slate-800">{node.dailyCap.toLocaleString()} U</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">{t('dailyStaticShort')}</span>
                    <span className="text-sm font-bold text-slate-800">{node.dailyStatic} U</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">{t('paybackDays')}</span>
                    <span className="text-sm font-bold text-slate-800">
                      {node.paybackDays} {t('daysUnit')}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">{t('dailyYieldRate')}</span>
                    <span className="text-sm font-bold text-brand-secondary">{(node.dailyRate * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="relative pt-4">
        <Card className="p-7 border-neutral-100 bg-white shadow-2xl shadow-brand-primary/10 relative overflow-hidden">
          <div className="absolute top-3 right-3">
            <span className="bg-brand-primary text-slate-900 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter">{t('limitedSeats', { remaining: GENESIS_NODE.remaining })}</span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-amber-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <Trophy size={28} className="text-black/80" />
            </div>
            <div>
              <h3 className="text-xl font-black text-neutral-900 italic tracking-tighter uppercase">{t('foundingPartners')}</h3>
              <p className="text-brand-primary text-[10px] uppercase font-black tracking-widest">{t('godTierNode')}</p>
            </div>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">
              {t('founderPerksTitle')}
            </p>
            {GENESIS_NODE.perks.map((perk) => (
              <details
                key={perk.titleKey}
                className="group rounded-2xl border border-neutral-100 bg-neutral-50 overflow-hidden"
              >
                <summary className="cursor-pointer select-none list-none px-3 py-3 flex items-center gap-3">
                  <ShieldCheck size={16} className="text-brand-secondary shrink-0" />
                  <span className="flex-1 text-[11px] font-bold tracking-tight text-neutral-800">
                    {t(perk.titleKey)}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-brand-primary transition-transform duration-200 group-open:rotate-90"
                  />
                </summary>
                <div className="px-3 pb-3 pl-9">
                  <p className="text-[11px] leading-relaxed text-neutral-600">
                    {t(perk.descKey)}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-neutral-100 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">{t('founderApplicationFeeLabel')}</p>
              <span className="text-2xl font-serif font-bold text-slate-900 tracking-tighter">
                {GENESIS_NODE.price.toLocaleString()} <span className="text-sm">USDT</span>
              </span>
            </div>
            <button
              type="button"
              className="bg-slate-900 text-brand-primary px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.12em] border border-slate-800 hover:bg-brand-primary hover:text-slate-900 transition-colors shadow-lg shrink-0"
            >
              {t('founderApplyCta')}
            </button>
          </div>
        </Card>
      </div>
    </>
  );

  const renderMining = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 pb-24">
      <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200">
        <button
          type="button"
          onClick={() => setMineSubView('myMiners')}
          className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            mineSubView === 'myMiners' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500'
          }`}
        >
          {t('myMiners')}
        </button>
        <button
          type="button"
          onClick={() => setMineSubView('shop')}
          className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            mineSubView === 'shop' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500'
          }`}
        >
          {t('minerShop')}
        </button>
      </div>

      {mineSubView === 'myMiners' ? renderMyMiners() : renderMinerShopInner()}
    </motion.div>
  );

  const renderNetwork = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-5 pb-16"
    >
      <div className="flex justify-between items-end pt-4">
        <div>
           <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight leading-none">{t('marketEngine')}</h2>
           <p className="text-slate-400 text-[11px] font-medium tracking-wide mt-3">
             {t('invitationCode')}: <span className="text-brand-primary font-bold">{user.refCode}</span>
           </p>
        </div>
        <button className="p-3.5 bg-white border border-slate-100 rounded-2xl text-slate-400 shadow-sm hover:text-brand-primary transition-all active:scale-95">
          <History size={20} />
        </button>
      </div>

      {/* Market & Network Overview (moved from Home) */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-3 px-1">
          <div className="w-1 h-5 bg-brand-primary rounded-full shadow-sm" />
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">{t('marketIntelligence')}</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Card className="p-5 border-l-4 border-l-brand-secondary bg-white shadow-md border-slate-100 min-h-[104px]">
            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest mb-1.5">{t('dailyDividend')}</p>
            <h4 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
              45,280 <span className="text-xs">U</span>
            </h4>
            <div className="mt-2 inline-flex items-center gap-1.5 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full px-3 py-1 text-brand-secondary font-bold">
              <TrendingUp size={12} />
              <span className="text-[10px] uppercase">+14.2% Growth</span>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-l-brand-primary bg-white shadow-md border-slate-100 min-h-[104px]">
            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest mb-1.5">{t('estReward')}</p>
            <h4 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
              {(user.power / 1000 * 45).toFixed(2)} <span className="text-xs">U</span>
            </h4>
            <p className="mt-2 text-[10px] text-brand-primary font-bold uppercase tracking-tighter italic">
              {t('yieldDaily')}
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-3 px-1">
          <div className="w-1 h-5 bg-brand-primary rounded-full shadow-sm" />
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            {t('networkPerformance')}
          </h2>
        </div>

        <Card className="p-6 bg-white border-slate-100 shadow-xl">
          {/* 顶部：左区 / 右区 */}
          <div className="flex flex-col sm:flex-row sm:items-stretch">
            <div className="flex-1 flex flex-col items-center justify-center py-3">
              <p className="text-slate-400 text-[9px] uppercase mb-1.5 tracking-widest font-bold">
                {t('leftZone')}
              </p>
              <span className="text-2xl font-serif font-bold text-emerald-700">
                {user.leftVol.toLocaleString()}
              </span>
            </div>

            <div className="hidden sm:block w-px bg-slate-100 mx-6" />
            <div className="block sm:hidden h-px bg-slate-100 mx-6" />

            <div className="flex-1 flex flex-col items-center justify-center py-3">
              <p className="text-slate-400 text-[9px] uppercase mb-1.5 tracking-widest font-bold">
                {t('rightZone')}
              </p>
              <span className="text-2xl font-serif font-bold text-brand-primary">
                {user.rightVol.toLocaleString()}
              </span>
            </div>
          </div>

          {/* 分割线 */}
          <div className="mt-4 h-px w-full bg-slate-100" />

          {/* 底部：对碰奖励 */}
          <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-2xl flex items-center justify-center border border-brand-primary/20">
                <Trophy size={20} className="text-brand-primary" />
              </div>
              <div>
                <p className="text-[9px] text-neutral-400 uppercase font-bold tracking-widest">
                  {t('matchupReward')}
                </p>
                <span className="text-xs font-black text-neutral-800 tracking-wider uppercase">
                  {t('pendingSettlement')}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-2xl font-black text-neutral-900 font-numeric tracking-tighter">
                {Math.min(user.leftVol, user.rightVol) * 0.09}
              </span>
              <span className="text-[10px] text-neutral-400 ml-1 font-bold">U</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Refer Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-6 flex flex-col items-center bg-white border-slate-50 shadow-sm">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{t('directs')}</span>
           <span className="text-2xl font-serif font-bold text-slate-900">12</span>
        </Card>
        <Card className="p-6 flex flex-col items-center bg-white border-slate-50 shadow-sm">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">{t('total')}</span>
           <span className="text-2xl font-serif font-bold text-slate-900">284</span>
        </Card>
        <Card className="p-6 flex flex-col items-center bg-emerald-50/30 border-emerald-100 shadow-sm">
           <span className="text-[10px] text-emerald-800/60 font-bold uppercase tracking-widest mb-2">{t('bonus')}</span>
           <span className="text-2xl font-serif font-bold text-emerald-700">10%</span>
        </Card>
      </div>

        <Card className="p-8 min-h-[300px] flex flex-col items-center justify-center relative bg-white overflow-hidden border-slate-50 shadow-xl shadow-slate-200/20">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="grid grid-cols-6 gap-2 w-full h-full">
               {Array.from({length: 36}).map((_, i) => <div key={i} className="border border-slate-900/10" />)}
            </div>
         </div>
         
         <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative z-10 group">
            <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-2xl border border-slate-800 transition-transform group-hover:scale-105 duration-500">
               <Users size={32} className="text-brand-primary" />
            </div>
            <div className="absolute -bottom-2 right-0 bg-brand-primary text-slate-900 text-[8px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">AGENT</div>
         </motion.div>
         
         <div className="w-px h-12 bg-gradient-to-b from-brand-primary/50 to-slate-200" />
         <div className="w-48 h-px bg-slate-200" />
         <div className="flex justify-between w-48">
            <div className="w-px h-8 bg-slate-200" />
            <div className="w-px h-8 bg-slate-200" />
         </div>
         
         <div className="flex gap-6 mt-2">
            <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-3xl text-center min-w-[140px] shadow-sm">
               <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest mb-2 opacity-60">{t('leftZone')}</p>
               <p className="text-xl font-serif font-bold text-slate-900">{user.leftVol.toLocaleString()} <span className="text-[10px] font-sans font-medium text-slate-400 ml-0.5">U</span></p>
            </div>
            <div className="bg-amber-50/50 border border-amber-100 p-5 rounded-3xl text-center min-w-[140px] shadow-sm">
               <p className="text-[10px] text-amber-800 font-bold uppercase tracking-widest mb-2 opacity-60">{t('rightZone')}</p>
               <p className="text-xl font-serif font-bold text-slate-900">{user.rightVol.toLocaleString()} <span className="text-[10px] font-sans font-medium text-slate-400 ml-0.5">U</span></p>
            </div>
         </div>
         
         <p className="mt-10 text-[10px] text-slate-400 text-center uppercase tracking-[0.4em] font-medium">{t('networkScanning')}</p>
         <button className="mt-6 text-[11px] text-brand-primary font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity flex items-center gap-2">
           {t('globalGenealogy')}
           <ChevronRight size={14} />
         </button>
      </Card>

      {/* Info Notice */}
      <Card className="bg-slate-50 border-slate-100 p-6 flex gap-5 shadow-sm">
         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
            <Info size={22} className="text-brand-secondary" />
         </div>
         <div>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-widest">{t('strategyRules')}</p>
            <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-medium italic tracking-tight">
              {t('strategyDesc')}
            </p>
         </div>
      </Card>
    </motion.div>
  );

  const renderRewardsDetail = () => {
    const demoStart = Date.parse('2026-05-01T00:00:00.000Z');
    const demoEnd = Date.parse('2026-06-01T00:00:00.000Z');
    const inDemoMonth = (iso: string) => {
      const x = Date.parse(iso);
      return x >= demoStart && x < demoEnd;
    };

    const monthRows = MOCK_REWARDS.filter((r) => inDemoMonth(r.createdAt));
    const monthUsdt = monthRows.reduce((s, r) => s + r.usdtCredited, 0);
    const monthEcoLocked = monthRows.reduce((s, r) => s + r.ecoCreditLocked, 0);
    const monthEcoUnlockUsdt = monthRows.filter((r) => r.type === 'eco_credit_unlock').reduce((s, r) => s + r.usdtCredited, 0);
    const monthXgt = monthRows.reduce((s, r) => s + (r.amountXgt || 0), 0);

    const chipTypes: Array<RewardType | 'all'> = ['all', 'static', 'referral', 'team', 'agency_fee', 'xgt_unlock'];

    let rows = MOCK_REWARDS.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    if (rewardFilter !== 'all') rows = rows.filter((r) => r.type === rewardFilter);
    if (rewardMinerFilter) rows = rows.filter((r) => r.relatedMinerId === rewardMinerFilter);

    const rewardTypeLabelFn = (ty: RewardType) => (translations[lang][`rewardType_${ty}`] as string) || ty;

    const rewardIconFor = (ty: RewardType) => {
      const base = 'w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0';
      switch (ty) {
        case 'static':
          return (
            <div className={`${base} bg-amber-50 border-amber-100`}>
              <Zap size={20} className="text-amber-700" />
            </div>
          );
        case 'referral':
          return (
            <div className={`${base} bg-sky-50 border-sky-100`}>
              <Users size={20} className="text-sky-700" />
            </div>
          );
        case 'team':
          return (
            <div className={`${base} bg-violet-50 border-violet-100`}>
              <Trophy size={20} className="text-violet-700" />
            </div>
          );
        case 'agency_fee':
          return (
            <div className={`${base} bg-emerald-50 border-emerald-100`}>
              <DollarSign size={20} className="text-emerald-700" />
            </div>
          );
        case 'founder_fee':
          return (
            <div className={`${base} bg-rose-50 border-rose-100`}>
              <Gift size={20} className="text-rose-700" />
            </div>
          );
        case 'xgt_unlock':
          return (
            <div className={`${base} bg-orange-50 border-orange-100`}>
              <Lock size={20} className="text-orange-800" />
            </div>
          );
        default:
          return (
            <div className={`${base} bg-slate-50 border-slate-200`}>
              <Receipt size={20} className="text-slate-700" />
            </div>
          );
      }
    };

    const statusLabelFn = (r: RewardEntry) => {
      if (r.status === 'settled') return t('settled');
      if (r.status === 'released') return t('rewardStatusReleased');
      return t('rewardStatusUnlocked');
    };

    const filteredMinerMeta = rewardMinerFilter ? MOCK_MY_MINERS.find((m) => m.id === rewardMinerFilter) : null;

    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-24">
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => {
              setWalletView('overview');
              setRewardMinerFilter(null);
            }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={18} />
            {t('backToAssets')}
          </button>
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">{t('rewardsDetail')}</span>
        </div>

        {user.riskFrozen ? (
          <Card className="p-4 border-amber-200 bg-amber-50/90">
            <p className="text-[11px] font-bold text-amber-950 uppercase tracking-wider">{t('riskFrozenBanner')}</p>
          </Card>
        ) : null}

        <Card className="p-6 bg-white border-slate-100 shadow-xl">
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-5">{t('monthSummaryHint')}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">{t('monthSummaryUsdt')}</p>
              <p className="text-2xl font-serif font-bold text-slate-900">{monthUsdt.toFixed(2)}</p>
              <span className="text-[10px] text-slate-400 uppercase font-bold">USDT</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">{t('monthSummaryEco')}</p>
              <p className="text-2xl font-serif font-bold text-slate-900">{monthEcoLocked.toFixed(2)}</p>
              <p className="text-[10px] text-emerald-700 font-bold mt-2">
                {t('monthEcoUnlockFoot')} {monthEcoUnlockUsdt.toFixed(2)} U
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 col-span-2">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">{t('monthSummaryXgt')}</p>
              <p className="text-2xl font-serif font-bold text-brand-primary">{monthXgt.toLocaleString()}</p>
              <span className="text-[10px] text-slate-400 uppercase font-bold">XGT</span>
            </div>
          </div>
        </Card>

        {rewardMinerFilter && filteredMinerMeta ? (
          <div className="flex items-center justify-between gap-3 bg-brand-primary/10 border border-brand-primary/30 px-4 py-3 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">
              {t('minerFilterBadge')} · {filteredMinerMeta.level} {t(minerLevelNameKey(filteredMinerMeta.level))}
            </span>
            <button
              type="button"
              className="text-[10px] font-black uppercase text-brand-primary"
              onClick={() => setRewardMinerFilter(null)}
            >
              {t('clearMinerFilter')}
            </button>
          </div>
        ) : null}

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scroll-smooth snap-x snap-mandatory no-scrollbar">
          {chipTypes.map((chip) => (
            <button
              type="button"
              key={chip}
              onClick={() => setRewardFilter(chip)}
              className={`shrink-0 snap-start px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all ${
                rewardFilter === chip
                  ? 'bg-slate-900 text-brand-primary border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-100'
              }`}
            >
              {chip === 'all' ? t('filterAll') : rewardTypeLabelFn(chip)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {rows.length === 0 ? (
            <Card className="p-8 text-center text-slate-500 text-sm border-dashed border-slate-200">{t('rewardListEmpty')}</Card>
          ) : (
            rows.map((r) => (
              <Card key={r.id} className="p-4 flex gap-4 border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow items-start">
                {rewardIconFor(r.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 tracking-tight">{rewardTypeLabelFn(r.type)}</p>
                  <p className="text-[9px] text-slate-400 font-medium uppercase mt-1">
                    {new Date(r.createdAt).toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {r.relatedMinerId ? (
                    <p className="text-[9px] text-slate-400 mt-1 font-medium">
                      {(() => {
                        const m = MOCK_MY_MINERS.find((mm) => mm.id === r.relatedMinerId);
                        return m ? `${t('linkedMiner')}: ${m.level} · ${t(minerLevelNameKey(m.level))}` : `${t('linkedMiner')}: ${r.relatedMinerId}`;
                      })()}
                    </p>
                  ) : null}
                  {(r.type === 'referral' || r.type === 'team') && (
                    <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                      {t('split7030')}
                      <span className="text-slate-400"> · Gross {r.gross.toLocaleString(undefined, { maximumFractionDigits: 2 })} U</span>
                    </p>
                  )}
                  {r.type === 'static' && r.xgtNominalUsd != null && (
                    <p className="text-[10px] text-slate-500 mt-2">{t('split5050')}</p>
                  )}
                  {(r.type === 'static' || r.type === 'referral' || r.type === 'team') && r.healthCounted > 0 ? (
                    <p className="text-[10px] font-bold text-slate-600 mt-2">
                      {t('healthCountedLabel')}: +{r.healthCounted.toLocaleString(undefined, { maximumFractionDigits: 2 })} U
                    </p>
                  ) : null}
                </div>
                <div className="text-right shrink-0">
                  {r.type === 'xgt_unlock' && r.amountXgt != null ? (
                    <p className="text-lg font-serif font-bold text-orange-900 tracking-tight">
                      +{r.amountXgt.toLocaleString()}
                      <span className="text-[10px] font-sans text-slate-400 ml-1">XGT</span>
                    </p>
                  ) : (
                    <p className="text-lg font-serif font-bold text-emerald-700 tracking-tight">
                      +{r.usdtCredited.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      <span className="text-[10px] font-sans text-slate-400 ml-0.5">U</span>
                    </p>
                  )}
                  <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{statusLabelFn(r)}</p>
                </div>
              </Card>
            ))
          )}
        </div>
      </motion.div>
    );
  };

  const renderWithdrawalHistory = () => {
    const rows = withdrawalList.filter((w) => w.asset === withdrawalAssetTab).sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt),
    );

    const statusLabel = (s: WithdrawalEntry['status']) =>
      s === 'completed' ? t('withdrawalStatus_completed') : t('withdrawalStatus_pending');

    const amountPrimary = (w: WithdrawalEntry) => {
      if (w.asset === 'usdt')
        return (
          <span className="text-emerald-800">
            −{w.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}{' '}
            <span className="text-[10px] font-sans text-slate-500">USDT</span>
          </span>
        );
      return (
        <span className="text-orange-900">
          −{w.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}{' '}
          <span className="text-[10px] font-sans text-slate-500">XGT</span>
        </span>
      );
    };

    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-24">
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => {
              setWalletView('overview');
              setWithdrawalAssetTab('usdt');
            }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={18} />
            {t('backToAssets')}
          </button>
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">{t('withdrawalHistory')}</span>
        </div>

        <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
          {(['usdt', 'xgt'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setWithdrawalAssetTab(tab)}
              className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                withdrawalAssetTab === tab
                  ? 'bg-white text-slate-900 shadow-md border border-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab === 'usdt' ? t('withdrawalTabUsdt') : t('withdrawalTabXgt')}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {rows.length === 0 ? (
            <Card className="p-8 text-center text-slate-500 text-sm border-dashed border-slate-200">{t('withdrawalListEmpty')}</Card>
          ) : (
            rows.map((w) => (
              <Card key={w.id} className="p-4 flex items-start justify-between gap-4 border-slate-100 bg-white shadow-sm">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shrink-0">
                    <History size={18} className={w.asset === 'usdt' ? 'text-emerald-700' : 'text-orange-800'} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-serif font-bold tracking-tight">{amountPrimary(w)}</p>
                    <p className="text-[9px] text-slate-400 font-medium uppercase mt-1">
                      {new Date(w.createdAt).toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    {w.fee != null && w.fee > 0 ? (
                      <p className="text-[9px] text-slate-500 mt-1">
                        {t('withdrawalFeeLabel')}: {w.fee.toLocaleString(undefined, { maximumFractionDigits: 4 })}{' '}
                        {w.asset === 'usdt' ? 'USDT' : 'XGT'}
                      </p>
                    ) : null}
                    {w.remark ? <p className="text-[9px] text-slate-400 mt-1">{w.remark}</p> : null}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p
                    className={`text-[9px] font-black uppercase tracking-wider ${
                      w.status === 'completed' ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    {statusLabel(w.status)}
                  </p>
                </div>
              </Card>
            ))
          )}
        </div>
      </motion.div>
    );
  };

  const renderWithdrawForm = () => {
    const maxAvailable = withdrawFormAsset === 'usdt' ? user.balanceUSDT : user.xgtWithdrawable;
    const normalized = withdrawAmountStr.replace(/,/g, '').trim();
    const parsed = normalized === '' ? NaN : Number.parseFloat(normalized);
    const hasInput = normalized !== '';
    const validNumber = !Number.isNaN(parsed) && parsed > 0;
    const withinBalance = validNumber && parsed <= maxAvailable + 1e-9;
    const valid = validNumber && withinBalance;
    const fee = valid ? parsed * 0.05 : 0;
    const net = valid ? parsed - fee : 0;

    let errorKey: string | null = null;
    if (hasInput && !validNumber) errorKey = 'withdrawInvalidAmount';
    else if (validNumber && !withinBalance) errorKey = 'withdrawExceedsBalance';

    const closeForm = () => {
      setWalletView('overview');
      setWithdrawAmountStr('');
    };

    const onAmountChange = (raw: string) => {
      let s = raw.replace(/[^\d.]/g, '');
      const firstDot = s.indexOf('.');
      if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, '');
      }
      setWithdrawAmountStr(s);
    };

    const submitWithdraw = () => {
      if (!valid || !user) return;
      const feeAmt = parsed * 0.05;
      setUser((u) =>
        !u
          ? u
          : {
              ...u,
              balanceUSDT: withdrawFormAsset === 'usdt' ? u.balanceUSDT - parsed : u.balanceUSDT,
              xgtWithdrawable: withdrawFormAsset === 'xgt' ? u.xgtWithdrawable - parsed : u.xgtWithdrawable,
            },
      );
      setWithdrawalList((prev) => [
        {
          id: `wd-${Date.now()}`,
          asset: withdrawFormAsset,
          amount: parsed,
          fee: feeAmt,
          status: 'pending',
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);
      closeForm();
      window.alert(t('withdrawSubmitted'));
    };

    const title = withdrawFormAsset === 'usdt' ? t('withdrawCtaUsdt') : t('withdrawCtaXgt');

    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-24">
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={closeForm}
            className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft size={18} />
            {t('backToAssets')}
          </button>
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] max-w-[55%] text-right leading-tight">
            {title}
          </span>
        </div>

        <Card className="p-6 bg-white border border-slate-200 shadow-xl space-y-5">
          <div className="flex justify-between items-baseline gap-3">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{t('withdrawAvailable')}</p>
            <p className="text-xl font-serif font-bold text-slate-900 tabular-nums">
              {maxAvailable.toLocaleString(undefined, { maximumFractionDigits: 8 })}{' '}
              <span className="text-[10px] font-sans font-bold text-slate-400">
                {withdrawFormAsset === 'usdt' ? 'USDT' : '$XGT'}
              </span>
            </p>
          </div>

          <div>
            <label htmlFor="withdraw-amt" className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block mb-2">
              {t('withdrawAmountLabel')}
            </label>
            <div className="flex gap-2">
              <input
                id="withdraw-amt"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                placeholder={t('withdrawAmountPlaceholder')}
                value={withdrawAmountStr}
                onChange={(e) => onAmountChange(e.target.value)}
                className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-serif font-bold text-slate-900 tabular-nums outline-none focus:ring-2 focus:ring-brand-primary/30"
              />
              <button
                type="button"
                onClick={() => setWithdrawAmountStr(String(maxAvailable))}
                className="shrink-0 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider bg-slate-900 text-brand-primary border border-slate-900 hover:bg-slate-800 transition-colors"
              >
                {t('withdrawMax')}
              </button>
            </div>
            {errorKey ? <p className="text-[11px] text-rose-600 font-medium mt-2">{t(errorKey)}</p> : null}
          </div>

          {valid ? (
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>{t('withdrawFeePreview')}</span>
                <span className="font-mono tabular-nums">
                  −{fee.toLocaleString(undefined, { maximumFractionDigits: 8 })}{' '}
                  {withdrawFormAsset === 'usdt' ? 'USDT' : 'XGT'}
                </span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>{t('withdrawNetReceive')}</span>
                <span className="font-mono tabular-nums text-emerald-800">
                  {net.toLocaleString(undefined, { maximumFractionDigits: 8 })}{' '}
                  {withdrawFormAsset === 'usdt' ? 'USDT' : 'XGT'}
                </span>
              </div>
            </div>
          ) : null}

          <p className="text-[9px] text-slate-400 text-center">{t('withdrawFeeNote')}</p>

          <button
            type="button"
            disabled={!valid}
            onClick={submitWithdraw}
            className="w-full bg-brand-primary text-slate-900 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-brand-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-brand-primary/20 disabled:opacity-40 disabled:pointer-events-none"
          >
            {t('withdrawConfirm')}
          </button>
        </Card>
      </motion.div>
    );
  };

  const renderLedgerPreviewIcon = (ty: RewardType) =>
    ({
      static: (
        <Zap size={18} className="text-amber-700" />
      ),
      referral: <Users size={18} className="text-sky-700" />,
      team: <Trophy size={18} className="text-violet-700" />,
      agency_fee: <DollarSign size={18} className="text-emerald-700" />,
      founder_fee: <Gift size={18} className="text-rose-700" />,
      xgt_unlock: <Lock size={18} className="text-orange-800" />,
      eco_credit_unlock: <Receipt size={18} className="text-slate-700" />,
    }[ty]);

  const renderWallet = () => {
    if (walletView === 'rewards') return renderRewardsDetail();
    if (walletView === 'withdrawals') return renderWithdrawalHistory();
    if (walletView === 'withdrawForm') return renderWithdrawForm();

    const previewRows = MOCK_REWARDS.slice().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).slice(0, 3);

    const rewardPreviewLabelFn = (ty: RewardType) => (translations[lang][`rewardType_${ty}`] as string) || ty;

    const previewPrimary = (r: RewardEntry) => {
      if (r.type === 'xgt_unlock' && r.amountXgt != null)
        return `+${r.amountXgt.toLocaleString()} XGT`;
      return `+${r.usdtCredited.toFixed(2)} U`;
    };

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 pb-24">
        <div className="pt-4 space-y-2">
          <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">{t('assetHub')}</h2>
          <p className="text-slate-400 text-[11px] font-medium tracking-wide uppercase">{t('nodeSynced')}</p>
        </div>

        <Card className="p-8 bg-white border border-slate-200 shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary opacity-5 blur-[120px] group-hover:opacity-10 transition-opacity duration-700" />
          <div className="relative z-10 space-y-0 divide-y divide-slate-100">
            <div className="flex items-end justify-between gap-4 pb-6">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-2">{t('withdrawableUsdt')}</p>
                <p className="text-4xl font-serif font-bold text-slate-900 tracking-tight tabular-nums">{user.balanceUSDT.toFixed(2)}</p>
              </div>
              <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest shrink-0 pb-1">USDT</span>
            </div>
            <div className="flex items-end justify-between gap-4 py-6">
              <div className="min-w-0">
                <p className="text-[10px] text-brand-primary/90 uppercase font-bold tracking-[0.2em] mb-2">{t('withdrawableXgt')}</p>
                <p className="text-4xl font-serif font-bold text-brand-primary tracking-tight tabular-nums">
                  {user.xgtWithdrawable.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <span className="text-[10px] font-sans font-bold text-brand-primary/80 uppercase tracking-widest shrink-0 pb-1">$XGT</span>
            </div>
            <div className="flex items-end justify-between gap-4 pt-6">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-2">{t('lockedXgt')}</p>
                <p className="text-3xl font-serif font-bold text-slate-700 tracking-tight tabular-nums">
                  {user.xgtLocked.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
              <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest shrink-0 pb-1">$XGT</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 border-slate-100 bg-white shadow-xl shadow-slate-200/20 space-y-4">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setWithdrawFormAsset('usdt');
                setWithdrawAmountStr('');
                setWalletView('withdrawForm');
              }}
              className="w-full bg-slate-50 text-slate-900 border border-slate-200 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-slate-100 transition-all active:scale-95 shadow-sm"
            >
              {t('withdrawCtaUsdt')}
            </button>
            <button
              type="button"
              onClick={() => {
                setWithdrawFormAsset('xgt');
                setWithdrawAmountStr('');
                setWalletView('withdrawForm');
              }}
              className="w-full bg-brand-primary text-slate-900 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-brand-primary/90 transition-all active:scale-95 shadow-xl shadow-brand-primary/20"
            >
              {t('withdrawCtaXgt')}
            </button>
          </div>
          <p className="text-center text-[8px] text-slate-400">{t('withdrawFeeNote')}</p>
          <button
            type="button"
            onClick={() => setWalletView('withdrawals')}
            className="w-full py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary border border-brand-primary/30 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors"
          >
            {t('withdrawalHistory')} →
          </button>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between pl-2 pr-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{t('recentLedger')}</p>
            <button
              type="button"
              className="text-[10px] font-black uppercase text-brand-primary tracking-widest hover:opacity-80"
              onClick={() => {
                setRewardMinerFilter(null);
                setRewardFilter('all');
                setWalletView('rewards');
              }}
            >
              {t('viewAllRewards')} →
            </button>
          </div>
          {previewRows.map((r) => (
            <Card
              key={r.id}
              className="p-4 flex items-center justify-between border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shrink-0">
                  {renderLedgerPreviewIcon(r.type)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-800 tracking-tight truncate">{rewardPreviewLabelFn(r.type)}</p>
                  <p className="text-[9px] text-slate-400 font-medium uppercase mt-1">
                    {new Date(r.createdAt).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US')}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-lg font-serif font-bold tracking-tight ${r.type === 'xgt_unlock' ? 'text-orange-900' : 'text-emerald-700'}`}>
                  {previewPrimary(r)}
                </p>
                <p className="text-[9px] text-slate-400 font-bold uppercase">{t('settled')}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-bg-main text-neutral-900 font-sans selection:bg-brand-primary/20 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between h-20 px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleReturnToCex}
            aria-label="返回CEX"
            className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center transition-all hover:bg-slate-100/70 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <ArrowLeft size={20} className="text-slate-900" />
          </button>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-bold tracking-tight text-slate-900 leading-none">Web3 AI Compute</span>
            <span className="text-[10px] font-bold text-brand-primary tracking-[0.25em] uppercase mt-0.5 leading-none">Gold Rush</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden xs:flex bg-emerald-50 border border-emerald-100/50 px-4 py-2 rounded-xl items-center gap-2">
             <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.4)]" />
             <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-[0.1em]">{t('liveNodes')}</span>
          </div>
          <motion.div 
            whileTap={{ scale: 0.9 }} 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-4 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shadow-sm cursor-pointer hover:bg-slate-100 transition-colors text-slate-600 text-[10px] font-bold uppercase tracking-widest"
          >
            {lang === 'en' ? 'EN' : '中'}
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="px-6 py-8 max-w-lg mx-auto min-h-[calc(100vh-160px)]">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <div key="home">{renderHome()}</div>}
          {activeTab === 'mining' && <div key="mining">{renderMining()}</div>}
          {activeTab === 'network' && <div key="network">{renderNetwork()}</div>}
          {activeTab === 'wallet' && <div key="wallet">{renderWallet()}</div>}
        </AnimatePresence>
      </main>

      {/* Tab Navigation Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-slate-100 px-6 h-24 flex items-center justify-between pb-6">
        <NavItem 
          active={activeTab === 'home'} 
          icon={TrendingUp} 
          label={t('home')} 
          onClick={() => setActiveTab('home')} 
        />
        <NavItem 
          active={activeTab === 'mining'} 
          icon={Cpu} 
          label={t('mines')} 
          onClick={() => setActiveTab('mining')} 
        />
        <NavItem 
          active={activeTab === 'network'} 
          icon={Users} 
          label={t('market')} 
          onClick={() => setActiveTab('network')} 
        />
        <NavItem 
          active={activeTab === 'wallet'} 
          icon={Wallet} 
          label={t('assets')} 
          onClick={() => setActiveTab('wallet')} 
        />
      </nav>



      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white">
         <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] bg-brand-primary/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] bg-brand-secondary/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
