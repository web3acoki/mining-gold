# H5 PRD · §14.2 我的矿机 / §14.3 收益明细（细化交付稿）

依据 xAgent Exchange《AI矿机 / 动态奖励 / CEX手续费分红》主 PRD（Lark §14.2、§14.3、§18.1、§18.3）整理，供 H5（[src/App.tsx](../src/App.tsx)）对齐实现与后端 §17 对表。

---

## §14.2 我的矿机（Mine record）

### 字段表（必选）

| 字段 | 说明 |
|------|------|
| `miner_id` | 矿机实例 ID |
| `level` | L1–L6，与 §3.1 配置一致 |
| `name_key` | 展示名可由 level + 本地化名称拼接 |
| `status` | `active` \| `frozen` \| `expired` |
| `purchase_price` | CP，与购买金额 1:1 |
| `daily_rate` | 每日固定收益率（小数或百分比文案） |
| `daily_static` | `purchase_price × daily_rate` |
| `accumulated_reward` | 已累计收益（计入健康出局部分之 USDT 名义累计，与后端口径一致） |
| `health_target` | `purchase_price × 300%` |
| `health_remaining` | `health_target - accumulated_reward`（截断为非负） |
| `health_progress_pct` | `accumulated_reward / health_target × 100`（封顶 100） |
| `is_current_active_miner` | 是否为「当前有效权益矿机」（§2.2） |
| `purchased_at` | 激活/购买完成时间 ISO |
| `expired_at` | 可选，出局完成时间 |

### 状态机

- `active` → `expired`：累计收益达到健康出局目标（§4.3 发奖前截断）。
- `active` ↔ `frozen`：后台冻结/解冻（§15.1）；冻结时一般不产生新静态/动态资格（具体以后端为准）。
- 禁止物理删除矿机实例（§15.1.8）。

### 「当前有效权益矿机」展示规则（§2.2）

- 取用户**最高等级**、`active`、`未出局` 的 AI 矿机；优先级 L6 > … > L1。
- 同等级多台：取**最早激活**的一台。
- 卡片上必须用徽章强调「动态权益绑定本台」以免与「多台持仓」混淆。

### 空态

- 用户无任何矿机：说明「AI 矿机是收益资格凭证」+ CTA「去购买」（跳转矿机商城子视图）。
- 配套文案：**§18.3 收益资格说明**原文。

### 操作

- 「查看流水」：跳转收益明细 Tab，并按 `miner_id` 预选筛选。

---

## §14.3 收益明细（Reward ledger）

### 顶部 Summary（按月，与后端对账粒度一致）

- 本月已进入 **USDT 现货** 的金额合计（静态 50% U、动态 70% U、手续费全额 U、eco 解锁转 U 等按实际入账字段拆分）。
- 本月 **ecosystem_credit**（锁仓入账部分）增量合计。
- 本月 **$XGT** 解锁释放数量合计。

（H5 mock 可用固定「演示月」如 2026-05；接 API 后以接口字段为准。）

### 收益类型（筛选 Chip，对齐 §2.3 / §14.3）

1. `static` — 静态分红  
2. `referral` — 直推奖  
3. `team` — 团队代理奖  
4. `agency_fee` — V4/V5 代理全网手续费分红  
5. `founder_fee` — Founding 49ers 创世合伙人手续费分红  
6. `xgt_unlock` — $XGT 30 天锁仓释放  
7. `eco_credit_unlock` — ecosystem_credit 解锁转出  

另加「全部」筛选项。

### 单条记录字段（建议）

| 字段 | 说明 |
|------|------|
| `reward_id` | 流水 ID（幂等对账关键） |
| `type` | 上表枚举 |
| `created_at` | 结算完成时间 ISO |
| `gross_usdt_nominal` | 奖励毛额（USDT 名义，用于理解与 70/30） |
| `usdt_spot_credited` | 进入现货 USDT |
| `ecosystem_credit_locked` | 动态 30% 进入 ecosystem_credit |
| `xgt_nominal_usd` | 静态中 50% $XGT 折算名义 USD（可选，展示用） |
| `health_counted` | 计入健康出局额度（静态/直推/团队毛额 §4；手续费/创世手续费/锁仓不计 §11.5 §12.3） |
| `related_miner_id` | 若与本台权益矿机关联则填 |
| `status` | `settled` / `released` / `unlocked` 等 |

### 差异化展示

- **直推 / 团队**：主行突出 70% U + 30% credit；脚注「健康出局按毛额 100% 计入」（§18.4 相关说明与 §22.5）。
- **静态**：§5.4 — 展示 50% U + 50% $XGT 名义；健康出局按 `actual_static` 计入（§5.5）。
- **手续费分红 / 创世分红**：全额 U；不展示「健康出局计入」（§11.5、§12.3）。
- **$XGT 解锁 / eco 解锁**：主资产非 U 时使用对应单位展示。

### 异常态

- 账户风控冻结：**§18 风格提示**——「暂停参与静态/动态等收益」（与后端错误码对齐）。

---

## 与后端接口映射（占位）

| H5 | PRD §17 |
|-----|---------|
| 我的矿机列表 | `GET /nodes/my` |
| 收益明细 | `GET /rewards/daily`（分页、类型、区间 query 待补） |

替换 mock 数据源时保持不变更：视图只依赖上述字段语义。
