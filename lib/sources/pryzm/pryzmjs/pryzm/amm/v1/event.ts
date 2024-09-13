import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { DisabledOrderPair, DisabledOrderPairAmino, DisabledOrderPairSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { WeightedToken, WeightedTokenAmino, WeightedTokenSDKType } from "./weighted_token";
import { WeightUpdateTiming, WeightUpdateTimingAmino, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ScheduleOrder, ScheduleOrderAmino, ScheduleOrderSDKType } from "./schedule_order";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenAmino, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { ExitSummary, ExitSummaryAmino, ExitSummarySDKType, JoinSummary, JoinSummaryAmino, JoinSummarySDKType, SwapSummary, SwapSummaryAmino, SwapSummarySDKType, ExitType, JoinType, SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, exitTypeFromJSON, exitTypeToJSON, joinTypeFromJSON, joinTypeToJSON, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionAmino, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export enum RemoveOrderReason {
  ORDER_CANCELED = 0,
  ORDER_DEPOSIT_FAILED = 1,
  ORDER_FINISHED = 3,
  UNRECOGNIZED = -1,
}
export const RemoveOrderReasonSDKType = RemoveOrderReason;
export const RemoveOrderReasonAmino = RemoveOrderReason;
export function removeOrderReasonFromJSON(object: any): RemoveOrderReason {
  switch (object) {
    case 0:
    case "ORDER_CANCELED":
      return RemoveOrderReason.ORDER_CANCELED;
    case 1:
    case "ORDER_DEPOSIT_FAILED":
      return RemoveOrderReason.ORDER_DEPOSIT_FAILED;
    case 3:
    case "ORDER_FINISHED":
      return RemoveOrderReason.ORDER_FINISHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RemoveOrderReason.UNRECOGNIZED;
  }
}
export function removeOrderReasonToJSON(object: RemoveOrderReason): string {
  switch (object) {
    case RemoveOrderReason.ORDER_CANCELED:
      return "ORDER_CANCELED";
    case RemoveOrderReason.ORDER_DEPOSIT_FAILED:
      return "ORDER_DEPOSIT_FAILED";
    case RemoveOrderReason.ORDER_FINISHED:
      return "ORDER_FINISHED";
    case RemoveOrderReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface EventSetPool {
  pool: Pool;
}
export interface EventSetPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetPool";
  value: Uint8Array;
}
export interface EventSetPoolAmino {
  pool?: PoolAmino;
}
export interface EventSetPoolAminoMsg {
  type: "/pryzm.amm.v1.EventSetPool";
  value: EventSetPoolAmino;
}
export interface EventSetPoolSDKType {
  pool: PoolSDKType;
}
export interface EventSetPoolCount {
  poolCount: bigint;
}
export interface EventSetPoolCountProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetPoolCount";
  value: Uint8Array;
}
export interface EventSetPoolCountAmino {
  pool_count?: string;
}
export interface EventSetPoolCountAminoMsg {
  type: "/pryzm.amm.v1.EventSetPoolCount";
  value: EventSetPoolCountAmino;
}
export interface EventSetPoolCountSDKType {
  pool_count: bigint;
}
export interface EventSetOrderPairDisabled {
  /**
   * note token_in and token_out are bi-directional
   * meaning disabling token_in=x,token_out=y is
   * disabling token_in=y,token_out=x at the same time.
   */
  pair: DisabledOrderPair;
  disabled: boolean;
}
export interface EventSetOrderPairDisabledProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetOrderPairDisabled";
  value: Uint8Array;
}
export interface EventSetOrderPairDisabledAmino {
  /**
   * note token_in and token_out are bi-directional
   * meaning disabling token_in=x,token_out=y is
   * disabling token_in=y,token_out=x at the same time.
   */
  pair?: DisabledOrderPairAmino;
  disabled?: boolean;
}
export interface EventSetOrderPairDisabledAminoMsg {
  type: "/pryzm.amm.v1.EventSetOrderPairDisabled";
  value: EventSetOrderPairDisabledAmino;
}
export interface EventSetOrderPairDisabledSDKType {
  pair: DisabledOrderPairSDKType;
  disabled: boolean;
}
export interface EventSetLpTokenSupply {
  poolId: bigint;
  supply: string;
}
export interface EventSetLpTokenSupplyProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetLpTokenSupply";
  value: Uint8Array;
}
export interface EventSetLpTokenSupplyAmino {
  pool_id?: string;
  supply?: string;
}
export interface EventSetLpTokenSupplyAminoMsg {
  type: "/pryzm.amm.v1.EventSetLpTokenSupply";
  value: EventSetLpTokenSupplyAmino;
}
export interface EventSetLpTokenSupplySDKType {
  pool_id: bigint;
  supply: string;
}
export interface EventSetPoolToken {
  poolToken: PoolToken;
}
export interface EventSetPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetPoolToken";
  value: Uint8Array;
}
export interface EventSetPoolTokenAmino {
  pool_token?: PoolTokenAmino;
}
export interface EventSetPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventSetPoolToken";
  value: EventSetPoolTokenAmino;
}
export interface EventSetPoolTokenSDKType {
  pool_token: PoolTokenSDKType;
}
export interface EventRemovePoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemovePoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemovePoolToken";
  value: Uint8Array;
}
export interface EventRemovePoolTokenAmino {
  pool_id?: string;
  denom?: string;
}
export interface EventRemovePoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventRemovePoolToken";
  value: EventRemovePoolTokenAmino;
}
export interface EventRemovePoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetWeightedToken {
  weightedToken: WeightedToken;
}
export interface EventSetWeightedTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetWeightedToken";
  value: Uint8Array;
}
export interface EventSetWeightedTokenAmino {
  weighted_token?: WeightedTokenAmino;
}
export interface EventSetWeightedTokenAminoMsg {
  type: "/pryzm.amm.v1.EventSetWeightedToken";
  value: EventSetWeightedTokenAmino;
}
export interface EventSetWeightedTokenSDKType {
  weighted_token: WeightedTokenSDKType;
}
export interface EventRemoveWeightedToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveWeightedTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveWeightedToken";
  value: Uint8Array;
}
export interface EventRemoveWeightedTokenAmino {
  pool_id?: string;
  denom?: string;
}
export interface EventRemoveWeightedTokenAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveWeightedToken";
  value: EventRemoveWeightedTokenAmino;
}
export interface EventRemoveWeightedTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetWeightUpdateTiming {
  weightUpdateTiming: WeightUpdateTiming;
}
export interface EventSetWeightUpdateTimingProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetWeightUpdateTiming";
  value: Uint8Array;
}
export interface EventSetWeightUpdateTimingAmino {
  weight_update_timing?: WeightUpdateTimingAmino;
}
export interface EventSetWeightUpdateTimingAminoMsg {
  type: "/pryzm.amm.v1.EventSetWeightUpdateTiming";
  value: EventSetWeightUpdateTimingAmino;
}
export interface EventSetWeightUpdateTimingSDKType {
  weight_update_timing: WeightUpdateTimingSDKType;
}
export interface EventSetWhitelistedRoute {
  whitelistedRoute: WhitelistedRoute;
}
export interface EventSetWhitelistedRouteProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetWhitelistedRoute";
  value: Uint8Array;
}
export interface EventSetWhitelistedRouteAmino {
  whitelisted_route?: WhitelistedRouteAmino;
}
export interface EventSetWhitelistedRouteAminoMsg {
  type: "/pryzm.amm.v1.EventSetWhitelistedRoute";
  value: EventSetWhitelistedRouteAmino;
}
export interface EventSetWhitelistedRouteSDKType {
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface EventSetYammConfiguration {
  yammConfiguration: YammConfiguration;
}
export interface EventSetYammConfigurationProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetYammConfiguration";
  value: Uint8Array;
}
export interface EventSetYammConfigurationAmino {
  yamm_configuration?: YammConfigurationAmino;
}
export interface EventSetYammConfigurationAminoMsg {
  type: "/pryzm.amm.v1.EventSetYammConfiguration";
  value: EventSetYammConfigurationAmino;
}
export interface EventSetYammConfigurationSDKType {
  yamm_configuration: YammConfigurationSDKType;
}
export interface EventSetOrder {
  order: Order;
}
export interface EventSetOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetOrder";
  value: Uint8Array;
}
export interface EventSetOrderAmino {
  order?: OrderAmino;
}
export interface EventSetOrderAminoMsg {
  type: "/pryzm.amm.v1.EventSetOrder";
  value: EventSetOrderAmino;
}
export interface EventSetOrderSDKType {
  order: OrderSDKType;
}
export interface EventSetOrderCount {
  orderCount: bigint;
}
export interface EventSetOrderCountProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetOrderCount";
  value: Uint8Array;
}
export interface EventSetOrderCountAmino {
  order_count?: string;
}
export interface EventSetOrderCountAminoMsg {
  type: "/pryzm.amm.v1.EventSetOrderCount";
  value: EventSetOrderCountAmino;
}
export interface EventSetOrderCountSDKType {
  order_count: bigint;
}
export interface EventRemoveOrder {
  id: bigint;
  reason: RemoveOrderReason;
}
export interface EventRemoveOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveOrder";
  value: Uint8Array;
}
export interface EventRemoveOrderAmino {
  id?: string;
  reason?: RemoveOrderReason;
}
export interface EventRemoveOrderAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveOrder";
  value: EventRemoveOrderAmino;
}
export interface EventRemoveOrderSDKType {
  id: bigint;
  reason: RemoveOrderReason;
}
export interface EventCancelOrder {
  id: bigint;
  withdrawnAmount: Coin;
}
export interface EventCancelOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventCancelOrder";
  value: Uint8Array;
}
export interface EventCancelOrderAmino {
  id?: string;
  withdrawn_amount?: CoinAmino;
}
export interface EventCancelOrderAminoMsg {
  type: "/pryzm.amm.v1.EventCancelOrder";
  value: EventCancelOrderAmino;
}
export interface EventCancelOrderSDKType {
  id: bigint;
  withdrawn_amount: CoinSDKType;
}
export interface EventSetScheduleOrder {
  scheduleOrder: ScheduleOrder;
}
export interface EventSetScheduleOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetScheduleOrder";
  value: Uint8Array;
}
export interface EventSetScheduleOrderAmino {
  schedule_order?: ScheduleOrderAmino;
}
export interface EventSetScheduleOrderAminoMsg {
  type: "/pryzm.amm.v1.EventSetScheduleOrder";
  value: EventSetScheduleOrderAmino;
}
export interface EventSetScheduleOrderSDKType {
  schedule_order: ScheduleOrderSDKType;
}
export interface EventRemoveScheduleOrder {
  orderId: bigint;
  timeMillis: bigint;
}
export interface EventRemoveScheduleOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveScheduleOrder";
  value: Uint8Array;
}
export interface EventRemoveScheduleOrderAmino {
  order_id?: string;
  time_millis?: string;
}
export interface EventRemoveScheduleOrderAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveScheduleOrder";
  value: EventRemoveScheduleOrderAmino;
}
export interface EventRemoveScheduleOrderSDKType {
  order_id: bigint;
  time_millis: bigint;
}
export interface EventSetExecutableOrder {
  orderId: bigint;
}
export interface EventSetExecutableOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetExecutableOrder";
  value: Uint8Array;
}
export interface EventSetExecutableOrderAmino {
  order_id?: string;
}
export interface EventSetExecutableOrderAminoMsg {
  type: "/pryzm.amm.v1.EventSetExecutableOrder";
  value: EventSetExecutableOrderAmino;
}
export interface EventSetExecutableOrderSDKType {
  order_id: bigint;
}
export interface EventRemoveExecutableOrder {
  orderId: bigint;
}
export interface EventRemoveExecutableOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveExecutableOrder";
  value: Uint8Array;
}
export interface EventRemoveExecutableOrderAmino {
  order_id?: string;
}
export interface EventRemoveExecutableOrderAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveExecutableOrder";
  value: EventRemoveExecutableOrderAmino;
}
export interface EventRemoveExecutableOrderSDKType {
  order_id: bigint;
}
export interface EventSetIntroducingPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken;
}
export interface EventSetIntroducingPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetIntroducingPoolToken";
  value: Uint8Array;
}
export interface EventSetIntroducingPoolTokenAmino {
  virtual_balance_token?: VirtualBalancePoolTokenAmino;
}
export interface EventSetIntroducingPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventSetIntroducingPoolToken";
  value: EventSetIntroducingPoolTokenAmino;
}
export interface EventSetIntroducingPoolTokenSDKType {
  virtual_balance_token: VirtualBalancePoolTokenSDKType;
}
export interface EventRemoveIntroducingPoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveIntroducingPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveIntroducingPoolToken";
  value: Uint8Array;
}
export interface EventRemoveIntroducingPoolTokenAmino {
  pool_id?: string;
  denom?: string;
}
export interface EventRemoveIntroducingPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveIntroducingPoolToken";
  value: EventRemoveIntroducingPoolTokenAmino;
}
export interface EventRemoveIntroducingPoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetExpiringPoolToken {
  virtualBalanceToken: VirtualBalancePoolToken;
}
export interface EventSetExpiringPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetExpiringPoolToken";
  value: Uint8Array;
}
export interface EventSetExpiringPoolTokenAmino {
  virtual_balance_token?: VirtualBalancePoolTokenAmino;
}
export interface EventSetExpiringPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventSetExpiringPoolToken";
  value: EventSetExpiringPoolTokenAmino;
}
export interface EventSetExpiringPoolTokenSDKType {
  virtual_balance_token: VirtualBalancePoolTokenSDKType;
}
export interface EventRemoveExpiringPoolToken {
  poolId: bigint;
  denom: string;
}
export interface EventRemoveExpiringPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveExpiringPoolToken";
  value: Uint8Array;
}
export interface EventRemoveExpiringPoolTokenAmino {
  pool_id?: string;
  denom?: string;
}
export interface EventRemoveExpiringPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveExpiringPoolToken";
  value: EventRemoveExpiringPoolTokenAmino;
}
export interface EventRemoveExpiringPoolTokenSDKType {
  pool_id: bigint;
  denom: string;
}
export interface EventSetYammPoolForAssetId {
  poolId: bigint;
  assetId: string;
}
export interface EventSetYammPoolForAssetIdProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetYammPoolForAssetId";
  value: Uint8Array;
}
export interface EventSetYammPoolForAssetIdAmino {
  pool_id?: string;
  asset_id?: string;
}
export interface EventSetYammPoolForAssetIdAminoMsg {
  type: "/pryzm.amm.v1.EventSetYammPoolForAssetId";
  value: EventSetYammPoolForAssetIdAmino;
}
export interface EventSetYammPoolForAssetIdSDKType {
  pool_id: bigint;
  asset_id: string;
}
export interface EventSetVaultPaused {
  paused: boolean;
}
export interface EventSetVaultPausedProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetVaultPaused";
  value: Uint8Array;
}
export interface EventSetVaultPausedAmino {
  paused?: boolean;
}
export interface EventSetVaultPausedAminoMsg {
  type: "/pryzm.amm.v1.EventSetVaultPaused";
  value: EventSetVaultPausedAmino;
}
export interface EventSetVaultPausedSDKType {
  paused: boolean;
}
export interface EventExecuteOrder {
  orderId: bigint;
  tradeAmount: string;
  matchAmount: string;
  outputAmount: string;
}
export interface EventExecuteOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExecuteOrder";
  value: Uint8Array;
}
export interface EventExecuteOrderAmino {
  order_id?: string;
  trade_amount?: string;
  match_amount?: string;
  output_amount?: string;
}
export interface EventExecuteOrderAminoMsg {
  type: "/pryzm.amm.v1.EventExecuteOrder";
  value: EventExecuteOrderAmino;
}
export interface EventExecuteOrderSDKType {
  order_id: bigint;
  trade_amount: string;
  match_amount: string;
  output_amount: string;
}
export interface EventExecuteOrdersForPair {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  buyPrice: string;
  sellPrice: string;
  buyOrders: EventExecuteOrder[];
  sellOrders: EventExecuteOrder[];
  buyTradeAmount: string;
  buyMatchAmount: string;
  sellTradeAmount: string;
  sellMatchAmount: string;
  sellTradeOutput: string;
  buyTradeOutput: string;
}
export interface EventExecuteOrdersForPairProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExecuteOrdersForPair";
  value: Uint8Array;
}
export interface EventExecuteOrdersForPairAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  buy_price?: string;
  sell_price?: string;
  buy_orders?: EventExecuteOrderAmino[];
  sell_orders?: EventExecuteOrderAmino[];
  buy_trade_amount?: string;
  buy_match_amount?: string;
  sell_trade_amount?: string;
  sell_match_amount?: string;
  sell_trade_output?: string;
  buy_trade_output?: string;
}
export interface EventExecuteOrdersForPairAminoMsg {
  type: "/pryzm.amm.v1.EventExecuteOrdersForPair";
  value: EventExecuteOrdersForPairAmino;
}
export interface EventExecuteOrdersForPairSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  buy_price: string;
  sell_price: string;
  buy_orders: EventExecuteOrderSDKType[];
  sell_orders: EventExecuteOrderSDKType[];
  buy_trade_amount: string;
  buy_match_amount: string;
  sell_trade_amount: string;
  sell_match_amount: string;
  sell_trade_output: string;
  buy_trade_output: string;
}
export interface EventExecuteMatchProposalOrder {
  /**
   * Note that if virtual=true, order_id is set to zero and should be ignored,
   * otherwise we still might have order_id=0 referring to an actual order
   */
  orderId: bigint;
  matchAmount: string;
  outputAmount: string;
  virtual: boolean;
}
export interface EventExecuteMatchProposalOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalOrder";
  value: Uint8Array;
}
export interface EventExecuteMatchProposalOrderAmino {
  /**
   * Note that if virtual=true, order_id is set to zero and should be ignored,
   * otherwise we still might have order_id=0 referring to an actual order
   */
  order_id?: string;
  match_amount?: string;
  output_amount?: string;
  virtual?: boolean;
}
export interface EventExecuteMatchProposalOrderAminoMsg {
  type: "/pryzm.amm.v1.EventExecuteMatchProposalOrder";
  value: EventExecuteMatchProposalOrderAmino;
}
export interface EventExecuteMatchProposalOrderSDKType {
  order_id: bigint;
  match_amount: string;
  output_amount: string;
  virtual: boolean;
}
export interface EventExecuteMatchProposalPair {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  buyPrice: string;
  sellPrice: string;
  buyOrders: EventExecuteMatchProposalOrder[];
  sellOrders: EventExecuteMatchProposalOrder[];
  buyMatchAmount: string;
  sellMatchAmount: string;
}
export interface EventExecuteMatchProposalPairProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalPair";
  value: Uint8Array;
}
export interface EventExecuteMatchProposalPairAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  buy_price?: string;
  sell_price?: string;
  buy_orders?: EventExecuteMatchProposalOrderAmino[];
  sell_orders?: EventExecuteMatchProposalOrderAmino[];
  buy_match_amount?: string;
  sell_match_amount?: string;
}
export interface EventExecuteMatchProposalPairAminoMsg {
  type: "/pryzm.amm.v1.EventExecuteMatchProposalPair";
  value: EventExecuteMatchProposalPairAmino;
}
export interface EventExecuteMatchProposalPairSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  buy_price: string;
  sell_price: string;
  buy_orders: EventExecuteMatchProposalOrderSDKType[];
  sell_orders: EventExecuteMatchProposalOrderSDKType[];
  buy_match_amount: string;
  sell_match_amount: string;
}
export interface EventExecuteMatchProposal {
  proposer: string;
  pairs: EventExecuteMatchProposalPair[];
  proposerReward: Coin[];
}
export interface EventExecuteMatchProposalProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposal";
  value: Uint8Array;
}
export interface EventExecuteMatchProposalAmino {
  proposer?: string;
  pairs?: EventExecuteMatchProposalPairAmino[];
  proposer_reward?: CoinAmino[];
}
export interface EventExecuteMatchProposalAminoMsg {
  type: "/pryzm.amm.v1.EventExecuteMatchProposal";
  value: EventExecuteMatchProposalAmino;
}
export interface EventExecuteMatchProposalSDKType {
  proposer: string;
  pairs: EventExecuteMatchProposalPairSDKType[];
  proposer_reward: CoinSDKType[];
}
export interface EventExitPool {
  poolId: bigint;
  summary: ExitSummary;
}
export interface EventExitPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExitPool";
  value: Uint8Array;
}
export interface EventExitPoolAmino {
  pool_id?: string;
  summary?: ExitSummaryAmino;
}
export interface EventExitPoolAminoMsg {
  type: "/pryzm.amm.v1.EventExitPool";
  value: EventExitPoolAmino;
}
export interface EventExitPoolSDKType {
  pool_id: bigint;
  summary: ExitSummarySDKType;
}
export interface EventJoinPool {
  poolId: bigint;
  summary: JoinSummary;
}
export interface EventJoinPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventJoinPool";
  value: Uint8Array;
}
export interface EventJoinPoolAmino {
  pool_id?: string;
  summary?: JoinSummaryAmino;
}
export interface EventJoinPoolAminoMsg {
  type: "/pryzm.amm.v1.EventJoinPool";
  value: EventJoinPoolAmino;
}
export interface EventJoinPoolSDKType {
  pool_id: bigint;
  summary: JoinSummarySDKType;
}
export interface EventSwap {
  poolId: bigint;
  summary: SwapSummary;
}
export interface EventSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSwap";
  value: Uint8Array;
}
export interface EventSwapAmino {
  pool_id?: string;
  summary?: SwapSummaryAmino;
}
export interface EventSwapAminoMsg {
  type: "/pryzm.amm.v1.EventSwap";
  value: EventSwapAmino;
}
export interface EventSwapSDKType {
  pool_id: bigint;
  summary: SwapSummarySDKType;
}
export interface EventExitPoolRequest {
  creator: string;
  poolId: bigint;
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
  exitType: ExitType;
}
export interface EventExitPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventExitPoolRequest";
  value: Uint8Array;
}
export interface EventExitPoolRequestAmino {
  creator?: string;
  pool_id?: string;
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
  exit_type?: ExitType;
}
export interface EventExitPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.EventExitPoolRequest";
  value: EventExitPoolRequestAmino;
}
export interface EventExitPoolRequestSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
  exit_type: ExitType;
}
export interface EventJoinPoolRequest {
  creator: string;
  poolId: bigint;
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
  joinType: JoinType;
}
export interface EventJoinPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventJoinPoolRequest";
  value: Uint8Array;
}
export interface EventJoinPoolRequestAmino {
  creator?: string;
  pool_id?: string;
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
  join_type?: JoinType;
}
export interface EventJoinPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.EventJoinPoolRequest";
  value: EventJoinPoolRequestAmino;
}
export interface EventJoinPoolRequestSDKType {
  creator: string;
  pool_id: bigint;
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
  join_type: JoinType;
}
export interface EventSingleSwapRequest {
  creator: string;
  poolId: bigint;
  amountOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
  swapType: SwapType;
}
export interface EventSingleSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSingleSwapRequest";
  value: Uint8Array;
}
export interface EventSingleSwapRequestAmino {
  creator?: string;
  pool_id?: string;
  amount_out?: CoinAmino;
  amount_in?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
  swap_type?: SwapType;
}
export interface EventSingleSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.EventSingleSwapRequest";
  value: EventSingleSwapRequestAmino;
}
export interface EventSingleSwapRequestSDKType {
  creator: string;
  pool_id: bigint;
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
  swap_type: SwapType;
}
export interface EventBatchSwapRequest {
  creator: string;
  steps: SwapStep[];
  amountsIn: Coin[];
  amountsOut: Coin[];
  swapProtocolFee: Coin[];
  joinExitProtocolFee: Coin[];
  swapFee: Coin[];
  swapType: SwapType;
}
export interface EventBatchSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventBatchSwapRequest";
  value: Uint8Array;
}
export interface EventBatchSwapRequestAmino {
  creator?: string;
  steps?: SwapStepAmino[];
  amounts_in?: CoinAmino[];
  amounts_out?: CoinAmino[];
  swap_protocol_fee?: CoinAmino[];
  join_exit_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
  swap_type?: SwapType;
}
export interface EventBatchSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.EventBatchSwapRequest";
  value: EventBatchSwapRequestAmino;
}
export interface EventBatchSwapRequestSDKType {
  creator: string;
  steps: SwapStepSDKType[];
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
  swap_type: SwapType;
}
export interface EventYAssetSwapRefractorAction {
  yAmount: string;
  cAmountAfterFee: string;
  feeAmount: string;
}
export interface EventYAssetSwapRefractorActionProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventYAssetSwapRefractorAction";
  value: Uint8Array;
}
export interface EventYAssetSwapRefractorActionAmino {
  y_amount?: string;
  c_amount_after_fee?: string;
  fee_amount?: string;
}
export interface EventYAssetSwapRefractorActionAminoMsg {
  type: "/pryzm.amm.v1.EventYAssetSwapRefractorAction";
  value: EventYAssetSwapRefractorActionAmino;
}
export interface EventYAssetSwapRefractorActionSDKType {
  y_amount: string;
  c_amount_after_fee: string;
  fee_amount: string;
}
export interface EventYAssetSwap {
  poolId: bigint;
  summary: SwapSummary;
  refractorAction: EventYAssetSwapRefractorAction;
  fee?: Coin;
}
export interface EventYAssetSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventYAssetSwap";
  value: Uint8Array;
}
export interface EventYAssetSwapAmino {
  pool_id?: string;
  summary?: SwapSummaryAmino;
  refractor_action?: EventYAssetSwapRefractorActionAmino;
  fee?: CoinAmino;
}
export interface EventYAssetSwapAminoMsg {
  type: "/pryzm.amm.v1.EventYAssetSwap";
  value: EventYAssetSwapAmino;
}
export interface EventYAssetSwapSDKType {
  pool_id: bigint;
  summary: SwapSummarySDKType;
  refractor_action: EventYAssetSwapRefractorActionSDKType;
  fee?: CoinSDKType;
}
export interface EventSetOraclePricePair {
  oraclePricePair: OraclePricePair;
}
export interface EventSetOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetOraclePricePair";
  value: Uint8Array;
}
export interface EventSetOraclePricePairAmino {
  oracle_price_pair?: OraclePricePairAmino;
}
export interface EventSetOraclePricePairAminoMsg {
  type: "/pryzm.amm.v1.EventSetOraclePricePair";
  value: EventSetOraclePricePairAmino;
}
export interface EventSetOraclePricePairSDKType {
  oracle_price_pair: OraclePricePairSDKType;
}
export interface EventRemoveOraclePricePair {
  assetId: string;
}
export interface EventRemoveOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemoveOraclePricePair";
  value: Uint8Array;
}
export interface EventRemoveOraclePricePairAmino {
  asset_id?: string;
}
export interface EventRemoveOraclePricePairAminoMsg {
  type: "/pryzm.amm.v1.EventRemoveOraclePricePair";
  value: EventRemoveOraclePricePairAmino;
}
export interface EventRemoveOraclePricePairSDKType {
  asset_id: string;
}
export interface EventSetPendingTokenIntroduction {
  pendingTokenIntroduction: PendingTokenIntroduction;
}
export interface EventSetPendingTokenIntroductionProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetPendingTokenIntroduction";
  value: Uint8Array;
}
export interface EventSetPendingTokenIntroductionAmino {
  pending_token_introduction?: PendingTokenIntroductionAmino;
}
export interface EventSetPendingTokenIntroductionAminoMsg {
  type: "/pryzm.amm.v1.EventSetPendingTokenIntroduction";
  value: EventSetPendingTokenIntroductionAmino;
}
export interface EventSetPendingTokenIntroductionSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType;
}
export interface EventRemovePendingTokenIntroduction {
  assetId: string;
  targetPoolId: bigint;
}
export interface EventRemovePendingTokenIntroductionProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventRemovePendingTokenIntroduction";
  value: Uint8Array;
}
export interface EventRemovePendingTokenIntroductionAmino {
  asset_id?: string;
  target_pool_id?: string;
}
export interface EventRemovePendingTokenIntroductionAminoMsg {
  type: "/pryzm.amm.v1.EventRemovePendingTokenIntroduction";
  value: EventRemovePendingTokenIntroductionAmino;
}
export interface EventRemovePendingTokenIntroductionSDKType {
  asset_id: string;
  target_pool_id: bigint;
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.amm.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.amm.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
function createBaseEventSetPool(): EventSetPool {
  return {
    pool: Pool.fromPartial({})
  };
}
export const EventSetPool = {
  typeUrl: "/pryzm.amm.v1.EventSetPool",
  is(o: any): o is EventSetPool {
    return o && (o.$typeUrl === EventSetPool.typeUrl || Pool.is(o.pool));
  },
  isSDK(o: any): o is EventSetPoolSDKType {
    return o && (o.$typeUrl === EventSetPool.typeUrl || Pool.isSDK(o.pool));
  },
  isAmino(o: any): o is EventSetPoolAmino {
    return o && (o.$typeUrl === EventSetPool.typeUrl || Pool.isAmino(o.pool));
  },
  encode(message: EventSetPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPool {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: EventSetPool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPool>): EventSetPool {
    const message = createBaseEventSetPool();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: EventSetPoolAmino): EventSetPool {
    const message = createBaseEventSetPool();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: EventSetPool, useInterfaces: boolean = true): EventSetPoolAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPoolAminoMsg): EventSetPool {
    return EventSetPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPoolProtoMsg, useInterfaces: boolean = true): EventSetPool {
    return EventSetPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetPool): Uint8Array {
    return EventSetPool.encode(message).finish();
  },
  toProtoMsg(message: EventSetPool): EventSetPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetPool",
      value: EventSetPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPool.typeUrl, EventSetPool);
function createBaseEventSetPoolCount(): EventSetPoolCount {
  return {
    poolCount: BigInt(0)
  };
}
export const EventSetPoolCount = {
  typeUrl: "/pryzm.amm.v1.EventSetPoolCount",
  is(o: any): o is EventSetPoolCount {
    return o && (o.$typeUrl === EventSetPoolCount.typeUrl || typeof o.poolCount === "bigint");
  },
  isSDK(o: any): o is EventSetPoolCountSDKType {
    return o && (o.$typeUrl === EventSetPoolCount.typeUrl || typeof o.pool_count === "bigint");
  },
  isAmino(o: any): o is EventSetPoolCountAmino {
    return o && (o.$typeUrl === EventSetPoolCount.typeUrl || typeof o.pool_count === "bigint");
  },
  encode(message: EventSetPoolCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetPoolCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPoolCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPoolCount {
    return {
      poolCount: isSet(object.poolCount) ? BigInt(object.poolCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetPoolCount): unknown {
    const obj: any = {};
    message.poolCount !== undefined && (obj.poolCount = (message.poolCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetPoolCount>): EventSetPoolCount {
    const message = createBaseEventSetPoolCount();
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? BigInt(object.poolCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSetPoolCountAmino): EventSetPoolCount {
    const message = createBaseEventSetPoolCount();
    if (object.pool_count !== undefined && object.pool_count !== null) {
      message.poolCount = BigInt(object.pool_count);
    }
    return message;
  },
  toAmino(message: EventSetPoolCount, useInterfaces: boolean = true): EventSetPoolCountAmino {
    const obj: any = {};
    obj.pool_count = message.poolCount ? message.poolCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPoolCountAminoMsg): EventSetPoolCount {
    return EventSetPoolCount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPoolCountProtoMsg, useInterfaces: boolean = true): EventSetPoolCount {
    return EventSetPoolCount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetPoolCount): Uint8Array {
    return EventSetPoolCount.encode(message).finish();
  },
  toProtoMsg(message: EventSetPoolCount): EventSetPoolCountProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetPoolCount",
      value: EventSetPoolCount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPoolCount.typeUrl, EventSetPoolCount);
function createBaseEventSetOrderPairDisabled(): EventSetOrderPairDisabled {
  return {
    pair: DisabledOrderPair.fromPartial({}),
    disabled: false
  };
}
export const EventSetOrderPairDisabled = {
  typeUrl: "/pryzm.amm.v1.EventSetOrderPairDisabled",
  is(o: any): o is EventSetOrderPairDisabled {
    return o && (o.$typeUrl === EventSetOrderPairDisabled.typeUrl || DisabledOrderPair.is(o.pair) && typeof o.disabled === "boolean");
  },
  isSDK(o: any): o is EventSetOrderPairDisabledSDKType {
    return o && (o.$typeUrl === EventSetOrderPairDisabled.typeUrl || DisabledOrderPair.isSDK(o.pair) && typeof o.disabled === "boolean");
  },
  isAmino(o: any): o is EventSetOrderPairDisabledAmino {
    return o && (o.$typeUrl === EventSetOrderPairDisabled.typeUrl || DisabledOrderPair.isAmino(o.pair) && typeof o.disabled === "boolean");
  },
  encode(message: EventSetOrderPairDisabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pair !== undefined) {
      DisabledOrderPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(16).bool(message.disabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetOrderPairDisabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrderPairDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = DisabledOrderPair.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOrderPairDisabled {
    return {
      pair: isSet(object.pair) ? DisabledOrderPair.fromJSON(object.pair) : undefined,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false
    };
  },
  toJSON(message: EventSetOrderPairDisabled): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? DisabledOrderPair.toJSON(message.pair) : undefined);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },
  fromPartial(object: Partial<EventSetOrderPairDisabled>): EventSetOrderPairDisabled {
    const message = createBaseEventSetOrderPairDisabled();
    message.pair = object.pair !== undefined && object.pair !== null ? DisabledOrderPair.fromPartial(object.pair) : undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
  fromAmino(object: EventSetOrderPairDisabledAmino): EventSetOrderPairDisabled {
    const message = createBaseEventSetOrderPairDisabled();
    if (object.pair !== undefined && object.pair !== null) {
      message.pair = DisabledOrderPair.fromAmino(object.pair);
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    return message;
  },
  toAmino(message: EventSetOrderPairDisabled, useInterfaces: boolean = true): EventSetOrderPairDisabledAmino {
    const obj: any = {};
    obj.pair = message.pair ? DisabledOrderPair.toAmino(message.pair, useInterfaces) : undefined;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    return obj;
  },
  fromAminoMsg(object: EventSetOrderPairDisabledAminoMsg): EventSetOrderPairDisabled {
    return EventSetOrderPairDisabled.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOrderPairDisabledProtoMsg, useInterfaces: boolean = true): EventSetOrderPairDisabled {
    return EventSetOrderPairDisabled.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetOrderPairDisabled): Uint8Array {
    return EventSetOrderPairDisabled.encode(message).finish();
  },
  toProtoMsg(message: EventSetOrderPairDisabled): EventSetOrderPairDisabledProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetOrderPairDisabled",
      value: EventSetOrderPairDisabled.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetOrderPairDisabled.typeUrl, EventSetOrderPairDisabled);
function createBaseEventSetLpTokenSupply(): EventSetLpTokenSupply {
  return {
    poolId: BigInt(0),
    supply: ""
  };
}
export const EventSetLpTokenSupply = {
  typeUrl: "/pryzm.amm.v1.EventSetLpTokenSupply",
  is(o: any): o is EventSetLpTokenSupply {
    return o && (o.$typeUrl === EventSetLpTokenSupply.typeUrl || typeof o.poolId === "bigint" && typeof o.supply === "string");
  },
  isSDK(o: any): o is EventSetLpTokenSupplySDKType {
    return o && (o.$typeUrl === EventSetLpTokenSupply.typeUrl || typeof o.pool_id === "bigint" && typeof o.supply === "string");
  },
  isAmino(o: any): o is EventSetLpTokenSupplyAmino {
    return o && (o.$typeUrl === EventSetLpTokenSupply.typeUrl || typeof o.pool_id === "bigint" && typeof o.supply === "string");
  },
  encode(message: EventSetLpTokenSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.supply !== "") {
      writer.uint32(18).string(message.supply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetLpTokenSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetLpTokenSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.supply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetLpTokenSupply {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      supply: isSet(object.supply) ? String(object.supply) : ""
    };
  },
  toJSON(message: EventSetLpTokenSupply): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },
  fromPartial(object: Partial<EventSetLpTokenSupply>): EventSetLpTokenSupply {
    const message = createBaseEventSetLpTokenSupply();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.supply = object.supply ?? "";
    return message;
  },
  fromAmino(object: EventSetLpTokenSupplyAmino): EventSetLpTokenSupply {
    const message = createBaseEventSetLpTokenSupply();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    }
    return message;
  },
  toAmino(message: EventSetLpTokenSupply, useInterfaces: boolean = true): EventSetLpTokenSupplyAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.supply = message.supply === "" ? undefined : message.supply;
    return obj;
  },
  fromAminoMsg(object: EventSetLpTokenSupplyAminoMsg): EventSetLpTokenSupply {
    return EventSetLpTokenSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetLpTokenSupplyProtoMsg, useInterfaces: boolean = true): EventSetLpTokenSupply {
    return EventSetLpTokenSupply.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetLpTokenSupply): Uint8Array {
    return EventSetLpTokenSupply.encode(message).finish();
  },
  toProtoMsg(message: EventSetLpTokenSupply): EventSetLpTokenSupplyProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetLpTokenSupply",
      value: EventSetLpTokenSupply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetLpTokenSupply.typeUrl, EventSetLpTokenSupply);
function createBaseEventSetPoolToken(): EventSetPoolToken {
  return {
    poolToken: PoolToken.fromPartial({})
  };
}
export const EventSetPoolToken = {
  typeUrl: "/pryzm.amm.v1.EventSetPoolToken",
  is(o: any): o is EventSetPoolToken {
    return o && (o.$typeUrl === EventSetPoolToken.typeUrl || PoolToken.is(o.poolToken));
  },
  isSDK(o: any): o is EventSetPoolTokenSDKType {
    return o && (o.$typeUrl === EventSetPoolToken.typeUrl || PoolToken.isSDK(o.pool_token));
  },
  isAmino(o: any): o is EventSetPoolTokenAmino {
    return o && (o.$typeUrl === EventSetPoolToken.typeUrl || PoolToken.isAmino(o.pool_token));
  },
  encode(message: EventSetPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken = PoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPoolToken {
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: EventSetPoolToken): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPoolToken>): EventSetPoolToken {
    const message = createBaseEventSetPoolToken();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  },
  fromAmino(object: EventSetPoolTokenAmino): EventSetPoolToken {
    const message = createBaseEventSetPoolToken();
    if (object.pool_token !== undefined && object.pool_token !== null) {
      message.poolToken = PoolToken.fromAmino(object.pool_token);
    }
    return message;
  },
  toAmino(message: EventSetPoolToken, useInterfaces: boolean = true): EventSetPoolTokenAmino {
    const obj: any = {};
    obj.pool_token = message.poolToken ? PoolToken.toAmino(message.poolToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPoolTokenAminoMsg): EventSetPoolToken {
    return EventSetPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPoolTokenProtoMsg, useInterfaces: boolean = true): EventSetPoolToken {
    return EventSetPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetPoolToken): Uint8Array {
    return EventSetPoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventSetPoolToken): EventSetPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetPoolToken",
      value: EventSetPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPoolToken.typeUrl, EventSetPoolToken);
function createBaseEventRemovePoolToken(): EventRemovePoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemovePoolToken = {
  typeUrl: "/pryzm.amm.v1.EventRemovePoolToken",
  is(o: any): o is EventRemovePoolToken {
    return o && (o.$typeUrl === EventRemovePoolToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is EventRemovePoolTokenSDKType {
    return o && (o.$typeUrl === EventRemovePoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventRemovePoolTokenAmino {
    return o && (o.$typeUrl === EventRemovePoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: EventRemovePoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemovePoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemovePoolToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemovePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemovePoolToken>): EventRemovePoolToken {
    const message = createBaseEventRemovePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemovePoolTokenAmino): EventRemovePoolToken {
    const message = createBaseEventRemovePoolToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemovePoolToken, useInterfaces: boolean = true): EventRemovePoolTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemovePoolTokenAminoMsg): EventRemovePoolToken {
    return EventRemovePoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemovePoolTokenProtoMsg, useInterfaces: boolean = true): EventRemovePoolToken {
    return EventRemovePoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemovePoolToken): Uint8Array {
    return EventRemovePoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventRemovePoolToken): EventRemovePoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemovePoolToken",
      value: EventRemovePoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemovePoolToken.typeUrl, EventRemovePoolToken);
function createBaseEventSetWeightedToken(): EventSetWeightedToken {
  return {
    weightedToken: WeightedToken.fromPartial({})
  };
}
export const EventSetWeightedToken = {
  typeUrl: "/pryzm.amm.v1.EventSetWeightedToken",
  is(o: any): o is EventSetWeightedToken {
    return o && (o.$typeUrl === EventSetWeightedToken.typeUrl || WeightedToken.is(o.weightedToken));
  },
  isSDK(o: any): o is EventSetWeightedTokenSDKType {
    return o && (o.$typeUrl === EventSetWeightedToken.typeUrl || WeightedToken.isSDK(o.weighted_token));
  },
  isAmino(o: any): o is EventSetWeightedTokenAmino {
    return o && (o.$typeUrl === EventSetWeightedToken.typeUrl || WeightedToken.isAmino(o.weighted_token));
  },
  encode(message: EventSetWeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetWeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken = WeightedToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetWeightedToken {
    return {
      weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined
    };
  },
  toJSON(message: EventSetWeightedToken): unknown {
    const obj: any = {};
    message.weightedToken !== undefined && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWeightedToken>): EventSetWeightedToken {
    const message = createBaseEventSetWeightedToken();
    message.weightedToken = object.weightedToken !== undefined && object.weightedToken !== null ? WeightedToken.fromPartial(object.weightedToken) : undefined;
    return message;
  },
  fromAmino(object: EventSetWeightedTokenAmino): EventSetWeightedToken {
    const message = createBaseEventSetWeightedToken();
    if (object.weighted_token !== undefined && object.weighted_token !== null) {
      message.weightedToken = WeightedToken.fromAmino(object.weighted_token);
    }
    return message;
  },
  toAmino(message: EventSetWeightedToken, useInterfaces: boolean = true): EventSetWeightedTokenAmino {
    const obj: any = {};
    obj.weighted_token = message.weightedToken ? WeightedToken.toAmino(message.weightedToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetWeightedTokenAminoMsg): EventSetWeightedToken {
    return EventSetWeightedToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetWeightedTokenProtoMsg, useInterfaces: boolean = true): EventSetWeightedToken {
    return EventSetWeightedToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetWeightedToken): Uint8Array {
    return EventSetWeightedToken.encode(message).finish();
  },
  toProtoMsg(message: EventSetWeightedToken): EventSetWeightedTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetWeightedToken",
      value: EventSetWeightedToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetWeightedToken.typeUrl, EventSetWeightedToken);
function createBaseEventRemoveWeightedToken(): EventRemoveWeightedToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveWeightedToken = {
  typeUrl: "/pryzm.amm.v1.EventRemoveWeightedToken",
  is(o: any): o is EventRemoveWeightedToken {
    return o && (o.$typeUrl === EventRemoveWeightedToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is EventRemoveWeightedTokenSDKType {
    return o && (o.$typeUrl === EventRemoveWeightedToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventRemoveWeightedTokenAmino {
    return o && (o.$typeUrl === EventRemoveWeightedToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: EventRemoveWeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveWeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveWeightedToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveWeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveWeightedToken>): EventRemoveWeightedToken {
    const message = createBaseEventRemoveWeightedToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveWeightedTokenAmino): EventRemoveWeightedToken {
    const message = createBaseEventRemoveWeightedToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemoveWeightedToken, useInterfaces: boolean = true): EventRemoveWeightedTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveWeightedTokenAminoMsg): EventRemoveWeightedToken {
    return EventRemoveWeightedToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveWeightedTokenProtoMsg, useInterfaces: boolean = true): EventRemoveWeightedToken {
    return EventRemoveWeightedToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveWeightedToken): Uint8Array {
    return EventRemoveWeightedToken.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveWeightedToken): EventRemoveWeightedTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveWeightedToken",
      value: EventRemoveWeightedToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveWeightedToken.typeUrl, EventRemoveWeightedToken);
function createBaseEventSetWeightUpdateTiming(): EventSetWeightUpdateTiming {
  return {
    weightUpdateTiming: WeightUpdateTiming.fromPartial({})
  };
}
export const EventSetWeightUpdateTiming = {
  typeUrl: "/pryzm.amm.v1.EventSetWeightUpdateTiming",
  is(o: any): o is EventSetWeightUpdateTiming {
    return o && (o.$typeUrl === EventSetWeightUpdateTiming.typeUrl || WeightUpdateTiming.is(o.weightUpdateTiming));
  },
  isSDK(o: any): o is EventSetWeightUpdateTimingSDKType {
    return o && (o.$typeUrl === EventSetWeightUpdateTiming.typeUrl || WeightUpdateTiming.isSDK(o.weight_update_timing));
  },
  isAmino(o: any): o is EventSetWeightUpdateTimingAmino {
    return o && (o.$typeUrl === EventSetWeightUpdateTiming.typeUrl || WeightUpdateTiming.isAmino(o.weight_update_timing));
  },
  encode(message: EventSetWeightUpdateTiming, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetWeightUpdateTiming {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWeightUpdateTiming();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetWeightUpdateTiming {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined
    };
  },
  toJSON(message: EventSetWeightUpdateTiming): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWeightUpdateTiming>): EventSetWeightUpdateTiming {
    const message = createBaseEventSetWeightUpdateTiming();
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    return message;
  },
  fromAmino(object: EventSetWeightUpdateTimingAmino): EventSetWeightUpdateTiming {
    const message = createBaseEventSetWeightUpdateTiming();
    if (object.weight_update_timing !== undefined && object.weight_update_timing !== null) {
      message.weightUpdateTiming = WeightUpdateTiming.fromAmino(object.weight_update_timing);
    }
    return message;
  },
  toAmino(message: EventSetWeightUpdateTiming, useInterfaces: boolean = true): EventSetWeightUpdateTimingAmino {
    const obj: any = {};
    obj.weight_update_timing = message.weightUpdateTiming ? WeightUpdateTiming.toAmino(message.weightUpdateTiming, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetWeightUpdateTimingAminoMsg): EventSetWeightUpdateTiming {
    return EventSetWeightUpdateTiming.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetWeightUpdateTimingProtoMsg, useInterfaces: boolean = true): EventSetWeightUpdateTiming {
    return EventSetWeightUpdateTiming.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetWeightUpdateTiming): Uint8Array {
    return EventSetWeightUpdateTiming.encode(message).finish();
  },
  toProtoMsg(message: EventSetWeightUpdateTiming): EventSetWeightUpdateTimingProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetWeightUpdateTiming",
      value: EventSetWeightUpdateTiming.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetWeightUpdateTiming.typeUrl, EventSetWeightUpdateTiming);
function createBaseEventSetWhitelistedRoute(): EventSetWhitelistedRoute {
  return {
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const EventSetWhitelistedRoute = {
  typeUrl: "/pryzm.amm.v1.EventSetWhitelistedRoute",
  is(o: any): o is EventSetWhitelistedRoute {
    return o && (o.$typeUrl === EventSetWhitelistedRoute.typeUrl || WhitelistedRoute.is(o.whitelistedRoute));
  },
  isSDK(o: any): o is EventSetWhitelistedRouteSDKType {
    return o && (o.$typeUrl === EventSetWhitelistedRoute.typeUrl || WhitelistedRoute.isSDK(o.whitelisted_route));
  },
  isAmino(o: any): o is EventSetWhitelistedRouteAmino {
    return o && (o.$typeUrl === EventSetWhitelistedRoute.typeUrl || WhitelistedRoute.isAmino(o.whitelisted_route));
  },
  encode(message: EventSetWhitelistedRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetWhitelistedRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetWhitelistedRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetWhitelistedRoute {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: EventSetWhitelistedRoute): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetWhitelistedRoute>): EventSetWhitelistedRoute {
    const message = createBaseEventSetWhitelistedRoute();
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  },
  fromAmino(object: EventSetWhitelistedRouteAmino): EventSetWhitelistedRoute {
    const message = createBaseEventSetWhitelistedRoute();
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = WhitelistedRoute.fromAmino(object.whitelisted_route);
    }
    return message;
  },
  toAmino(message: EventSetWhitelistedRoute, useInterfaces: boolean = true): EventSetWhitelistedRouteAmino {
    const obj: any = {};
    obj.whitelisted_route = message.whitelistedRoute ? WhitelistedRoute.toAmino(message.whitelistedRoute, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetWhitelistedRouteAminoMsg): EventSetWhitelistedRoute {
    return EventSetWhitelistedRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetWhitelistedRouteProtoMsg, useInterfaces: boolean = true): EventSetWhitelistedRoute {
    return EventSetWhitelistedRoute.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetWhitelistedRoute): Uint8Array {
    return EventSetWhitelistedRoute.encode(message).finish();
  },
  toProtoMsg(message: EventSetWhitelistedRoute): EventSetWhitelistedRouteProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetWhitelistedRoute",
      value: EventSetWhitelistedRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetWhitelistedRoute.typeUrl, EventSetWhitelistedRoute);
function createBaseEventSetYammConfiguration(): EventSetYammConfiguration {
  return {
    yammConfiguration: YammConfiguration.fromPartial({})
  };
}
export const EventSetYammConfiguration = {
  typeUrl: "/pryzm.amm.v1.EventSetYammConfiguration",
  is(o: any): o is EventSetYammConfiguration {
    return o && (o.$typeUrl === EventSetYammConfiguration.typeUrl || YammConfiguration.is(o.yammConfiguration));
  },
  isSDK(o: any): o is EventSetYammConfigurationSDKType {
    return o && (o.$typeUrl === EventSetYammConfiguration.typeUrl || YammConfiguration.isSDK(o.yamm_configuration));
  },
  isAmino(o: any): o is EventSetYammConfigurationAmino {
    return o && (o.$typeUrl === EventSetYammConfiguration.typeUrl || YammConfiguration.isAmino(o.yamm_configuration));
  },
  encode(message: EventSetYammConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetYammConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration = YammConfiguration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetYammConfiguration {
    return {
      yammConfiguration: isSet(object.yammConfiguration) ? YammConfiguration.fromJSON(object.yammConfiguration) : undefined
    };
  },
  toJSON(message: EventSetYammConfiguration): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration ? YammConfiguration.toJSON(message.yammConfiguration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetYammConfiguration>): EventSetYammConfiguration {
    const message = createBaseEventSetYammConfiguration();
    message.yammConfiguration = object.yammConfiguration !== undefined && object.yammConfiguration !== null ? YammConfiguration.fromPartial(object.yammConfiguration) : undefined;
    return message;
  },
  fromAmino(object: EventSetYammConfigurationAmino): EventSetYammConfiguration {
    const message = createBaseEventSetYammConfiguration();
    if (object.yamm_configuration !== undefined && object.yamm_configuration !== null) {
      message.yammConfiguration = YammConfiguration.fromAmino(object.yamm_configuration);
    }
    return message;
  },
  toAmino(message: EventSetYammConfiguration, useInterfaces: boolean = true): EventSetYammConfigurationAmino {
    const obj: any = {};
    obj.yamm_configuration = message.yammConfiguration ? YammConfiguration.toAmino(message.yammConfiguration, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetYammConfigurationAminoMsg): EventSetYammConfiguration {
    return EventSetYammConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetYammConfigurationProtoMsg, useInterfaces: boolean = true): EventSetYammConfiguration {
    return EventSetYammConfiguration.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetYammConfiguration): Uint8Array {
    return EventSetYammConfiguration.encode(message).finish();
  },
  toProtoMsg(message: EventSetYammConfiguration): EventSetYammConfigurationProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetYammConfiguration",
      value: EventSetYammConfiguration.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetYammConfiguration.typeUrl, EventSetYammConfiguration);
function createBaseEventSetOrder(): EventSetOrder {
  return {
    order: Order.fromPartial({})
  };
}
export const EventSetOrder = {
  typeUrl: "/pryzm.amm.v1.EventSetOrder",
  is(o: any): o is EventSetOrder {
    return o && (o.$typeUrl === EventSetOrder.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is EventSetOrderSDKType {
    return o && (o.$typeUrl === EventSetOrder.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is EventSetOrderAmino {
    return o && (o.$typeUrl === EventSetOrder.typeUrl || Order.isAmino(o.order));
  },
  encode(message: EventSetOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOrder {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: EventSetOrder): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetOrder>): EventSetOrder {
    const message = createBaseEventSetOrder();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: EventSetOrderAmino): EventSetOrder {
    const message = createBaseEventSetOrder();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: EventSetOrder, useInterfaces: boolean = true): EventSetOrderAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetOrderAminoMsg): EventSetOrder {
    return EventSetOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOrderProtoMsg, useInterfaces: boolean = true): EventSetOrder {
    return EventSetOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetOrder): Uint8Array {
    return EventSetOrder.encode(message).finish();
  },
  toProtoMsg(message: EventSetOrder): EventSetOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetOrder",
      value: EventSetOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetOrder.typeUrl, EventSetOrder);
function createBaseEventSetOrderCount(): EventSetOrderCount {
  return {
    orderCount: BigInt(0)
  };
}
export const EventSetOrderCount = {
  typeUrl: "/pryzm.amm.v1.EventSetOrderCount",
  is(o: any): o is EventSetOrderCount {
    return o && (o.$typeUrl === EventSetOrderCount.typeUrl || typeof o.orderCount === "bigint");
  },
  isSDK(o: any): o is EventSetOrderCountSDKType {
    return o && (o.$typeUrl === EventSetOrderCount.typeUrl || typeof o.order_count === "bigint");
  },
  isAmino(o: any): o is EventSetOrderCountAmino {
    return o && (o.$typeUrl === EventSetOrderCount.typeUrl || typeof o.order_count === "bigint");
  },
  encode(message: EventSetOrderCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetOrderCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOrderCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOrderCount {
    return {
      orderCount: isSet(object.orderCount) ? BigInt(object.orderCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetOrderCount): unknown {
    const obj: any = {};
    message.orderCount !== undefined && (obj.orderCount = (message.orderCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetOrderCount>): EventSetOrderCount {
    const message = createBaseEventSetOrderCount();
    message.orderCount = object.orderCount !== undefined && object.orderCount !== null ? BigInt(object.orderCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSetOrderCountAmino): EventSetOrderCount {
    const message = createBaseEventSetOrderCount();
    if (object.order_count !== undefined && object.order_count !== null) {
      message.orderCount = BigInt(object.order_count);
    }
    return message;
  },
  toAmino(message: EventSetOrderCount, useInterfaces: boolean = true): EventSetOrderCountAmino {
    const obj: any = {};
    obj.order_count = message.orderCount ? message.orderCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetOrderCountAminoMsg): EventSetOrderCount {
    return EventSetOrderCount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOrderCountProtoMsg, useInterfaces: boolean = true): EventSetOrderCount {
    return EventSetOrderCount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetOrderCount): Uint8Array {
    return EventSetOrderCount.encode(message).finish();
  },
  toProtoMsg(message: EventSetOrderCount): EventSetOrderCountProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetOrderCount",
      value: EventSetOrderCount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetOrderCount.typeUrl, EventSetOrderCount);
function createBaseEventRemoveOrder(): EventRemoveOrder {
  return {
    id: BigInt(0),
    reason: 0
  };
}
export const EventRemoveOrder = {
  typeUrl: "/pryzm.amm.v1.EventRemoveOrder",
  is(o: any): o is EventRemoveOrder {
    return o && (o.$typeUrl === EventRemoveOrder.typeUrl || typeof o.id === "bigint" && isSet(o.reason));
  },
  isSDK(o: any): o is EventRemoveOrderSDKType {
    return o && (o.$typeUrl === EventRemoveOrder.typeUrl || typeof o.id === "bigint" && isSet(o.reason));
  },
  isAmino(o: any): o is EventRemoveOrderAmino {
    return o && (o.$typeUrl === EventRemoveOrder.typeUrl || typeof o.id === "bigint" && isSet(o.reason));
  },
  encode(message: EventRemoveOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.reason !== 0) {
      writer.uint32(16).int32(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.reason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveOrder {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      reason: isSet(object.reason) ? removeOrderReasonFromJSON(object.reason) : -1
    };
  },
  toJSON(message: EventRemoveOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.reason !== undefined && (obj.reason = removeOrderReasonToJSON(message.reason));
    return obj;
  },
  fromPartial(object: Partial<EventRemoveOrder>): EventRemoveOrder {
    const message = createBaseEventRemoveOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.reason = object.reason ?? 0;
    return message;
  },
  fromAmino(object: EventRemoveOrderAmino): EventRemoveOrder {
    const message = createBaseEventRemoveOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: EventRemoveOrder, useInterfaces: boolean = true): EventRemoveOrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.reason = message.reason === 0 ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: EventRemoveOrderAminoMsg): EventRemoveOrder {
    return EventRemoveOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveOrderProtoMsg, useInterfaces: boolean = true): EventRemoveOrder {
    return EventRemoveOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveOrder): Uint8Array {
    return EventRemoveOrder.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveOrder): EventRemoveOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveOrder",
      value: EventRemoveOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveOrder.typeUrl, EventRemoveOrder);
function createBaseEventCancelOrder(): EventCancelOrder {
  return {
    id: BigInt(0),
    withdrawnAmount: Coin.fromPartial({})
  };
}
export const EventCancelOrder = {
  typeUrl: "/pryzm.amm.v1.EventCancelOrder",
  is(o: any): o is EventCancelOrder {
    return o && (o.$typeUrl === EventCancelOrder.typeUrl || typeof o.id === "bigint" && Coin.is(o.withdrawnAmount));
  },
  isSDK(o: any): o is EventCancelOrderSDKType {
    return o && (o.$typeUrl === EventCancelOrder.typeUrl || typeof o.id === "bigint" && Coin.isSDK(o.withdrawn_amount));
  },
  isAmino(o: any): o is EventCancelOrderAmino {
    return o && (o.$typeUrl === EventCancelOrder.typeUrl || typeof o.id === "bigint" && Coin.isAmino(o.withdrawn_amount));
  },
  encode(message: EventCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.withdrawnAmount !== undefined) {
      Coin.encode(message.withdrawnAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventCancelOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.withdrawnAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCancelOrder {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      withdrawnAmount: isSet(object.withdrawnAmount) ? Coin.fromJSON(object.withdrawnAmount) : undefined
    };
  },
  toJSON(message: EventCancelOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.withdrawnAmount !== undefined && (obj.withdrawnAmount = message.withdrawnAmount ? Coin.toJSON(message.withdrawnAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventCancelOrder>): EventCancelOrder {
    const message = createBaseEventCancelOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.withdrawnAmount = object.withdrawnAmount !== undefined && object.withdrawnAmount !== null ? Coin.fromPartial(object.withdrawnAmount) : undefined;
    return message;
  },
  fromAmino(object: EventCancelOrderAmino): EventCancelOrder {
    const message = createBaseEventCancelOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.withdrawn_amount !== undefined && object.withdrawn_amount !== null) {
      message.withdrawnAmount = Coin.fromAmino(object.withdrawn_amount);
    }
    return message;
  },
  toAmino(message: EventCancelOrder, useInterfaces: boolean = true): EventCancelOrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.withdrawn_amount = message.withdrawnAmount ? Coin.toAmino(message.withdrawnAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelOrderAminoMsg): EventCancelOrder {
    return EventCancelOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelOrderProtoMsg, useInterfaces: boolean = true): EventCancelOrder {
    return EventCancelOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventCancelOrder): Uint8Array {
    return EventCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelOrder): EventCancelOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventCancelOrder",
      value: EventCancelOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCancelOrder.typeUrl, EventCancelOrder);
function createBaseEventSetScheduleOrder(): EventSetScheduleOrder {
  return {
    scheduleOrder: ScheduleOrder.fromPartial({})
  };
}
export const EventSetScheduleOrder = {
  typeUrl: "/pryzm.amm.v1.EventSetScheduleOrder",
  is(o: any): o is EventSetScheduleOrder {
    return o && (o.$typeUrl === EventSetScheduleOrder.typeUrl || ScheduleOrder.is(o.scheduleOrder));
  },
  isSDK(o: any): o is EventSetScheduleOrderSDKType {
    return o && (o.$typeUrl === EventSetScheduleOrder.typeUrl || ScheduleOrder.isSDK(o.schedule_order));
  },
  isAmino(o: any): o is EventSetScheduleOrderAmino {
    return o && (o.$typeUrl === EventSetScheduleOrder.typeUrl || ScheduleOrder.isAmino(o.schedule_order));
  },
  encode(message: EventSetScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder = ScheduleOrder.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetScheduleOrder {
    return {
      scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined
    };
  },
  toJSON(message: EventSetScheduleOrder): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetScheduleOrder>): EventSetScheduleOrder {
    const message = createBaseEventSetScheduleOrder();
    message.scheduleOrder = object.scheduleOrder !== undefined && object.scheduleOrder !== null ? ScheduleOrder.fromPartial(object.scheduleOrder) : undefined;
    return message;
  },
  fromAmino(object: EventSetScheduleOrderAmino): EventSetScheduleOrder {
    const message = createBaseEventSetScheduleOrder();
    if (object.schedule_order !== undefined && object.schedule_order !== null) {
      message.scheduleOrder = ScheduleOrder.fromAmino(object.schedule_order);
    }
    return message;
  },
  toAmino(message: EventSetScheduleOrder, useInterfaces: boolean = true): EventSetScheduleOrderAmino {
    const obj: any = {};
    obj.schedule_order = message.scheduleOrder ? ScheduleOrder.toAmino(message.scheduleOrder, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetScheduleOrderAminoMsg): EventSetScheduleOrder {
    return EventSetScheduleOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetScheduleOrderProtoMsg, useInterfaces: boolean = true): EventSetScheduleOrder {
    return EventSetScheduleOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetScheduleOrder): Uint8Array {
    return EventSetScheduleOrder.encode(message).finish();
  },
  toProtoMsg(message: EventSetScheduleOrder): EventSetScheduleOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetScheduleOrder",
      value: EventSetScheduleOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetScheduleOrder.typeUrl, EventSetScheduleOrder);
function createBaseEventRemoveScheduleOrder(): EventRemoveScheduleOrder {
  return {
    orderId: BigInt(0),
    timeMillis: BigInt(0)
  };
}
export const EventRemoveScheduleOrder = {
  typeUrl: "/pryzm.amm.v1.EventRemoveScheduleOrder",
  is(o: any): o is EventRemoveScheduleOrder {
    return o && (o.$typeUrl === EventRemoveScheduleOrder.typeUrl || typeof o.orderId === "bigint" && typeof o.timeMillis === "bigint");
  },
  isSDK(o: any): o is EventRemoveScheduleOrderSDKType {
    return o && (o.$typeUrl === EventRemoveScheduleOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.time_millis === "bigint");
  },
  isAmino(o: any): o is EventRemoveScheduleOrderAmino {
    return o && (o.$typeUrl === EventRemoveScheduleOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.time_millis === "bigint");
  },
  encode(message: EventRemoveScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.timeMillis !== BigInt(0)) {
      writer.uint32(16).int64(message.timeMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.timeMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveScheduleOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      timeMillis: isSet(object.timeMillis) ? BigInt(object.timeMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveScheduleOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveScheduleOrder>): EventRemoveScheduleOrder {
    const message = createBaseEventRemoveScheduleOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? BigInt(object.timeMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRemoveScheduleOrderAmino): EventRemoveScheduleOrder {
    const message = createBaseEventRemoveScheduleOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.time_millis !== undefined && object.time_millis !== null) {
      message.timeMillis = BigInt(object.time_millis);
    }
    return message;
  },
  toAmino(message: EventRemoveScheduleOrder, useInterfaces: boolean = true): EventRemoveScheduleOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.time_millis = message.timeMillis ? message.timeMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRemoveScheduleOrderAminoMsg): EventRemoveScheduleOrder {
    return EventRemoveScheduleOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveScheduleOrderProtoMsg, useInterfaces: boolean = true): EventRemoveScheduleOrder {
    return EventRemoveScheduleOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveScheduleOrder): Uint8Array {
    return EventRemoveScheduleOrder.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveScheduleOrder): EventRemoveScheduleOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveScheduleOrder",
      value: EventRemoveScheduleOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveScheduleOrder.typeUrl, EventRemoveScheduleOrder);
function createBaseEventSetExecutableOrder(): EventSetExecutableOrder {
  return {
    orderId: BigInt(0)
  };
}
export const EventSetExecutableOrder = {
  typeUrl: "/pryzm.amm.v1.EventSetExecutableOrder",
  is(o: any): o is EventSetExecutableOrder {
    return o && (o.$typeUrl === EventSetExecutableOrder.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is EventSetExecutableOrderSDKType {
    return o && (o.$typeUrl === EventSetExecutableOrder.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is EventSetExecutableOrderAmino {
    return o && (o.$typeUrl === EventSetExecutableOrder.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: EventSetExecutableOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetExecutableOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetExecutableOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventSetExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSetExecutableOrder>): EventSetExecutableOrder {
    const message = createBaseEventSetExecutableOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSetExecutableOrderAmino): EventSetExecutableOrder {
    const message = createBaseEventSetExecutableOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: EventSetExecutableOrder, useInterfaces: boolean = true): EventSetExecutableOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetExecutableOrderAminoMsg): EventSetExecutableOrder {
    return EventSetExecutableOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetExecutableOrderProtoMsg, useInterfaces: boolean = true): EventSetExecutableOrder {
    return EventSetExecutableOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetExecutableOrder): Uint8Array {
    return EventSetExecutableOrder.encode(message).finish();
  },
  toProtoMsg(message: EventSetExecutableOrder): EventSetExecutableOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetExecutableOrder",
      value: EventSetExecutableOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetExecutableOrder.typeUrl, EventSetExecutableOrder);
function createBaseEventRemoveExecutableOrder(): EventRemoveExecutableOrder {
  return {
    orderId: BigInt(0)
  };
}
export const EventRemoveExecutableOrder = {
  typeUrl: "/pryzm.amm.v1.EventRemoveExecutableOrder",
  is(o: any): o is EventRemoveExecutableOrder {
    return o && (o.$typeUrl === EventRemoveExecutableOrder.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is EventRemoveExecutableOrderSDKType {
    return o && (o.$typeUrl === EventRemoveExecutableOrder.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is EventRemoveExecutableOrderAmino {
    return o && (o.$typeUrl === EventRemoveExecutableOrder.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: EventRemoveExecutableOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveExecutableOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExecutableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveExecutableOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemoveExecutableOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemoveExecutableOrder>): EventRemoveExecutableOrder {
    const message = createBaseEventRemoveExecutableOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRemoveExecutableOrderAmino): EventRemoveExecutableOrder {
    const message = createBaseEventRemoveExecutableOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: EventRemoveExecutableOrder, useInterfaces: boolean = true): EventRemoveExecutableOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRemoveExecutableOrderAminoMsg): EventRemoveExecutableOrder {
    return EventRemoveExecutableOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveExecutableOrderProtoMsg, useInterfaces: boolean = true): EventRemoveExecutableOrder {
    return EventRemoveExecutableOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveExecutableOrder): Uint8Array {
    return EventRemoveExecutableOrder.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveExecutableOrder): EventRemoveExecutableOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveExecutableOrder",
      value: EventRemoveExecutableOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveExecutableOrder.typeUrl, EventRemoveExecutableOrder);
function createBaseEventSetIntroducingPoolToken(): EventSetIntroducingPoolToken {
  return {
    virtualBalanceToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const EventSetIntroducingPoolToken = {
  typeUrl: "/pryzm.amm.v1.EventSetIntroducingPoolToken",
  is(o: any): o is EventSetIntroducingPoolToken {
    return o && (o.$typeUrl === EventSetIntroducingPoolToken.typeUrl || VirtualBalancePoolToken.is(o.virtualBalanceToken));
  },
  isSDK(o: any): o is EventSetIntroducingPoolTokenSDKType {
    return o && (o.$typeUrl === EventSetIntroducingPoolToken.typeUrl || VirtualBalancePoolToken.isSDK(o.virtual_balance_token));
  },
  isAmino(o: any): o is EventSetIntroducingPoolTokenAmino {
    return o && (o.$typeUrl === EventSetIntroducingPoolToken.typeUrl || VirtualBalancePoolToken.isAmino(o.virtual_balance_token));
  },
  encode(message: EventSetIntroducingPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetIntroducingPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetIntroducingPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualBalanceToken = VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetIntroducingPoolToken {
    return {
      virtualBalanceToken: isSet(object.virtualBalanceToken) ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken) : undefined
    };
  },
  toJSON(message: EventSetIntroducingPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetIntroducingPoolToken>): EventSetIntroducingPoolToken {
    const message = createBaseEventSetIntroducingPoolToken();
    message.virtualBalanceToken = object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken) : undefined;
    return message;
  },
  fromAmino(object: EventSetIntroducingPoolTokenAmino): EventSetIntroducingPoolToken {
    const message = createBaseEventSetIntroducingPoolToken();
    if (object.virtual_balance_token !== undefined && object.virtual_balance_token !== null) {
      message.virtualBalanceToken = VirtualBalancePoolToken.fromAmino(object.virtual_balance_token);
    }
    return message;
  },
  toAmino(message: EventSetIntroducingPoolToken, useInterfaces: boolean = true): EventSetIntroducingPoolTokenAmino {
    const obj: any = {};
    obj.virtual_balance_token = message.virtualBalanceToken ? VirtualBalancePoolToken.toAmino(message.virtualBalanceToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetIntroducingPoolTokenAminoMsg): EventSetIntroducingPoolToken {
    return EventSetIntroducingPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetIntroducingPoolTokenProtoMsg, useInterfaces: boolean = true): EventSetIntroducingPoolToken {
    return EventSetIntroducingPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetIntroducingPoolToken): Uint8Array {
    return EventSetIntroducingPoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventSetIntroducingPoolToken): EventSetIntroducingPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetIntroducingPoolToken",
      value: EventSetIntroducingPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetIntroducingPoolToken.typeUrl, EventSetIntroducingPoolToken);
function createBaseEventRemoveIntroducingPoolToken(): EventRemoveIntroducingPoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveIntroducingPoolToken = {
  typeUrl: "/pryzm.amm.v1.EventRemoveIntroducingPoolToken",
  is(o: any): o is EventRemoveIntroducingPoolToken {
    return o && (o.$typeUrl === EventRemoveIntroducingPoolToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is EventRemoveIntroducingPoolTokenSDKType {
    return o && (o.$typeUrl === EventRemoveIntroducingPoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventRemoveIntroducingPoolTokenAmino {
    return o && (o.$typeUrl === EventRemoveIntroducingPoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: EventRemoveIntroducingPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveIntroducingPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveIntroducingPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveIntroducingPoolToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveIntroducingPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveIntroducingPoolToken>): EventRemoveIntroducingPoolToken {
    const message = createBaseEventRemoveIntroducingPoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveIntroducingPoolTokenAmino): EventRemoveIntroducingPoolToken {
    const message = createBaseEventRemoveIntroducingPoolToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemoveIntroducingPoolToken, useInterfaces: boolean = true): EventRemoveIntroducingPoolTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveIntroducingPoolTokenAminoMsg): EventRemoveIntroducingPoolToken {
    return EventRemoveIntroducingPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveIntroducingPoolTokenProtoMsg, useInterfaces: boolean = true): EventRemoveIntroducingPoolToken {
    return EventRemoveIntroducingPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveIntroducingPoolToken): Uint8Array {
    return EventRemoveIntroducingPoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveIntroducingPoolToken): EventRemoveIntroducingPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveIntroducingPoolToken",
      value: EventRemoveIntroducingPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveIntroducingPoolToken.typeUrl, EventRemoveIntroducingPoolToken);
function createBaseEventSetExpiringPoolToken(): EventSetExpiringPoolToken {
  return {
    virtualBalanceToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const EventSetExpiringPoolToken = {
  typeUrl: "/pryzm.amm.v1.EventSetExpiringPoolToken",
  is(o: any): o is EventSetExpiringPoolToken {
    return o && (o.$typeUrl === EventSetExpiringPoolToken.typeUrl || VirtualBalancePoolToken.is(o.virtualBalanceToken));
  },
  isSDK(o: any): o is EventSetExpiringPoolTokenSDKType {
    return o && (o.$typeUrl === EventSetExpiringPoolToken.typeUrl || VirtualBalancePoolToken.isSDK(o.virtual_balance_token));
  },
  isAmino(o: any): o is EventSetExpiringPoolTokenAmino {
    return o && (o.$typeUrl === EventSetExpiringPoolToken.typeUrl || VirtualBalancePoolToken.isAmino(o.virtual_balance_token));
  },
  encode(message: EventSetExpiringPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.virtualBalanceToken !== undefined) {
      VirtualBalancePoolToken.encode(message.virtualBalanceToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetExpiringPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetExpiringPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.virtualBalanceToken = VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetExpiringPoolToken {
    return {
      virtualBalanceToken: isSet(object.virtualBalanceToken) ? VirtualBalancePoolToken.fromJSON(object.virtualBalanceToken) : undefined
    };
  },
  toJSON(message: EventSetExpiringPoolToken): unknown {
    const obj: any = {};
    message.virtualBalanceToken !== undefined && (obj.virtualBalanceToken = message.virtualBalanceToken ? VirtualBalancePoolToken.toJSON(message.virtualBalanceToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetExpiringPoolToken>): EventSetExpiringPoolToken {
    const message = createBaseEventSetExpiringPoolToken();
    message.virtualBalanceToken = object.virtualBalanceToken !== undefined && object.virtualBalanceToken !== null ? VirtualBalancePoolToken.fromPartial(object.virtualBalanceToken) : undefined;
    return message;
  },
  fromAmino(object: EventSetExpiringPoolTokenAmino): EventSetExpiringPoolToken {
    const message = createBaseEventSetExpiringPoolToken();
    if (object.virtual_balance_token !== undefined && object.virtual_balance_token !== null) {
      message.virtualBalanceToken = VirtualBalancePoolToken.fromAmino(object.virtual_balance_token);
    }
    return message;
  },
  toAmino(message: EventSetExpiringPoolToken, useInterfaces: boolean = true): EventSetExpiringPoolTokenAmino {
    const obj: any = {};
    obj.virtual_balance_token = message.virtualBalanceToken ? VirtualBalancePoolToken.toAmino(message.virtualBalanceToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetExpiringPoolTokenAminoMsg): EventSetExpiringPoolToken {
    return EventSetExpiringPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetExpiringPoolTokenProtoMsg, useInterfaces: boolean = true): EventSetExpiringPoolToken {
    return EventSetExpiringPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetExpiringPoolToken): Uint8Array {
    return EventSetExpiringPoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventSetExpiringPoolToken): EventSetExpiringPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetExpiringPoolToken",
      value: EventSetExpiringPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetExpiringPoolToken.typeUrl, EventSetExpiringPoolToken);
function createBaseEventRemoveExpiringPoolToken(): EventRemoveExpiringPoolToken {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const EventRemoveExpiringPoolToken = {
  typeUrl: "/pryzm.amm.v1.EventRemoveExpiringPoolToken",
  is(o: any): o is EventRemoveExpiringPoolToken {
    return o && (o.$typeUrl === EventRemoveExpiringPoolToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is EventRemoveExpiringPoolTokenSDKType {
    return o && (o.$typeUrl === EventRemoveExpiringPoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventRemoveExpiringPoolTokenAmino {
    return o && (o.$typeUrl === EventRemoveExpiringPoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: EventRemoveExpiringPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveExpiringPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveExpiringPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveExpiringPoolToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveExpiringPoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveExpiringPoolToken>): EventRemoveExpiringPoolToken {
    const message = createBaseEventRemoveExpiringPoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveExpiringPoolTokenAmino): EventRemoveExpiringPoolToken {
    const message = createBaseEventRemoveExpiringPoolToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemoveExpiringPoolToken, useInterfaces: boolean = true): EventRemoveExpiringPoolTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveExpiringPoolTokenAminoMsg): EventRemoveExpiringPoolToken {
    return EventRemoveExpiringPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveExpiringPoolTokenProtoMsg, useInterfaces: boolean = true): EventRemoveExpiringPoolToken {
    return EventRemoveExpiringPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveExpiringPoolToken): Uint8Array {
    return EventRemoveExpiringPoolToken.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveExpiringPoolToken): EventRemoveExpiringPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveExpiringPoolToken",
      value: EventRemoveExpiringPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveExpiringPoolToken.typeUrl, EventRemoveExpiringPoolToken);
function createBaseEventSetYammPoolForAssetId(): EventSetYammPoolForAssetId {
  return {
    poolId: BigInt(0),
    assetId: ""
  };
}
export const EventSetYammPoolForAssetId = {
  typeUrl: "/pryzm.amm.v1.EventSetYammPoolForAssetId",
  is(o: any): o is EventSetYammPoolForAssetId {
    return o && (o.$typeUrl === EventSetYammPoolForAssetId.typeUrl || typeof o.poolId === "bigint" && typeof o.assetId === "string");
  },
  isSDK(o: any): o is EventSetYammPoolForAssetIdSDKType {
    return o && (o.$typeUrl === EventSetYammPoolForAssetId.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset_id === "string");
  },
  isAmino(o: any): o is EventSetYammPoolForAssetIdAmino {
    return o && (o.$typeUrl === EventSetYammPoolForAssetId.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset_id === "string");
  },
  encode(message: EventSetYammPoolForAssetId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetYammPoolForAssetId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetYammPoolForAssetId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetYammPoolForAssetId {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventSetYammPoolForAssetId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventSetYammPoolForAssetId>): EventSetYammPoolForAssetId {
    const message = createBaseEventSetYammPoolForAssetId();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: EventSetYammPoolForAssetIdAmino): EventSetYammPoolForAssetId {
    const message = createBaseEventSetYammPoolForAssetId();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: EventSetYammPoolForAssetId, useInterfaces: boolean = true): EventSetYammPoolForAssetIdAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: EventSetYammPoolForAssetIdAminoMsg): EventSetYammPoolForAssetId {
    return EventSetYammPoolForAssetId.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetYammPoolForAssetIdProtoMsg, useInterfaces: boolean = true): EventSetYammPoolForAssetId {
    return EventSetYammPoolForAssetId.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetYammPoolForAssetId): Uint8Array {
    return EventSetYammPoolForAssetId.encode(message).finish();
  },
  toProtoMsg(message: EventSetYammPoolForAssetId): EventSetYammPoolForAssetIdProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetYammPoolForAssetId",
      value: EventSetYammPoolForAssetId.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetYammPoolForAssetId.typeUrl, EventSetYammPoolForAssetId);
function createBaseEventSetVaultPaused(): EventSetVaultPaused {
  return {
    paused: false
  };
}
export const EventSetVaultPaused = {
  typeUrl: "/pryzm.amm.v1.EventSetVaultPaused",
  is(o: any): o is EventSetVaultPaused {
    return o && (o.$typeUrl === EventSetVaultPaused.typeUrl || typeof o.paused === "boolean");
  },
  isSDK(o: any): o is EventSetVaultPausedSDKType {
    return o && (o.$typeUrl === EventSetVaultPaused.typeUrl || typeof o.paused === "boolean");
  },
  isAmino(o: any): o is EventSetVaultPausedAmino {
    return o && (o.$typeUrl === EventSetVaultPaused.typeUrl || typeof o.paused === "boolean");
  },
  encode(message: EventSetVaultPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetVaultPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetVaultPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetVaultPaused {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: EventSetVaultPaused): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<EventSetVaultPaused>): EventSetVaultPaused {
    const message = createBaseEventSetVaultPaused();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: EventSetVaultPausedAmino): EventSetVaultPaused {
    const message = createBaseEventSetVaultPaused();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: EventSetVaultPaused, useInterfaces: boolean = true): EventSetVaultPausedAmino {
    const obj: any = {};
    obj.paused = message.paused === false ? undefined : message.paused;
    return obj;
  },
  fromAminoMsg(object: EventSetVaultPausedAminoMsg): EventSetVaultPaused {
    return EventSetVaultPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetVaultPausedProtoMsg, useInterfaces: boolean = true): EventSetVaultPaused {
    return EventSetVaultPaused.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetVaultPaused): Uint8Array {
    return EventSetVaultPaused.encode(message).finish();
  },
  toProtoMsg(message: EventSetVaultPaused): EventSetVaultPausedProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetVaultPaused",
      value: EventSetVaultPaused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetVaultPaused.typeUrl, EventSetVaultPaused);
function createBaseEventExecuteOrder(): EventExecuteOrder {
  return {
    orderId: BigInt(0),
    tradeAmount: "",
    matchAmount: "",
    outputAmount: ""
  };
}
export const EventExecuteOrder = {
  typeUrl: "/pryzm.amm.v1.EventExecuteOrder",
  is(o: any): o is EventExecuteOrder {
    return o && (o.$typeUrl === EventExecuteOrder.typeUrl || typeof o.orderId === "bigint" && typeof o.tradeAmount === "string" && typeof o.matchAmount === "string" && typeof o.outputAmount === "string");
  },
  isSDK(o: any): o is EventExecuteOrderSDKType {
    return o && (o.$typeUrl === EventExecuteOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.trade_amount === "string" && typeof o.match_amount === "string" && typeof o.output_amount === "string");
  },
  isAmino(o: any): o is EventExecuteOrderAmino {
    return o && (o.$typeUrl === EventExecuteOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.trade_amount === "string" && typeof o.match_amount === "string" && typeof o.output_amount === "string");
  },
  encode(message: EventExecuteOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.tradeAmount !== "") {
      writer.uint32(18).string(message.tradeAmount);
    }
    if (message.matchAmount !== "") {
      writer.uint32(26).string(message.matchAmount);
    }
    if (message.outputAmount !== "") {
      writer.uint32(34).string(message.outputAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExecuteOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.tradeAmount = reader.string();
          break;
        case 3:
          message.matchAmount = reader.string();
          break;
        case 4:
          message.outputAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      tradeAmount: isSet(object.tradeAmount) ? String(object.tradeAmount) : "",
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : "",
      outputAmount: isSet(object.outputAmount) ? String(object.outputAmount) : ""
    };
  },
  toJSON(message: EventExecuteOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.tradeAmount !== undefined && (obj.tradeAmount = message.tradeAmount);
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    message.outputAmount !== undefined && (obj.outputAmount = message.outputAmount);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteOrder>): EventExecuteOrder {
    const message = createBaseEventExecuteOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.tradeAmount = object.tradeAmount ?? "";
    message.matchAmount = object.matchAmount ?? "";
    message.outputAmount = object.outputAmount ?? "";
    return message;
  },
  fromAmino(object: EventExecuteOrderAmino): EventExecuteOrder {
    const message = createBaseEventExecuteOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.trade_amount !== undefined && object.trade_amount !== null) {
      message.tradeAmount = object.trade_amount;
    }
    if (object.match_amount !== undefined && object.match_amount !== null) {
      message.matchAmount = object.match_amount;
    }
    if (object.output_amount !== undefined && object.output_amount !== null) {
      message.outputAmount = object.output_amount;
    }
    return message;
  },
  toAmino(message: EventExecuteOrder, useInterfaces: boolean = true): EventExecuteOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.trade_amount = message.tradeAmount === "" ? undefined : message.tradeAmount;
    obj.match_amount = message.matchAmount === "" ? undefined : message.matchAmount;
    obj.output_amount = message.outputAmount === "" ? undefined : message.outputAmount;
    return obj;
  },
  fromAminoMsg(object: EventExecuteOrderAminoMsg): EventExecuteOrder {
    return EventExecuteOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteOrderProtoMsg, useInterfaces: boolean = true): EventExecuteOrder {
    return EventExecuteOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExecuteOrder): Uint8Array {
    return EventExecuteOrder.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteOrder): EventExecuteOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExecuteOrder",
      value: EventExecuteOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExecuteOrder.typeUrl, EventExecuteOrder);
function createBaseEventExecuteOrdersForPair(): EventExecuteOrdersForPair {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyPrice: "",
    sellPrice: "",
    buyOrders: [],
    sellOrders: [],
    buyTradeAmount: "",
    buyMatchAmount: "",
    sellTradeAmount: "",
    sellMatchAmount: "",
    sellTradeOutput: "",
    buyTradeOutput: ""
  };
}
export const EventExecuteOrdersForPair = {
  typeUrl: "/pryzm.amm.v1.EventExecuteOrdersForPair",
  is(o: any): o is EventExecuteOrdersForPair {
    return o && (o.$typeUrl === EventExecuteOrdersForPair.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.buyPrice === "string" && typeof o.sellPrice === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || EventExecuteOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || EventExecuteOrder.is(o.sellOrders[0])) && typeof o.buyTradeAmount === "string" && typeof o.buyMatchAmount === "string" && typeof o.sellTradeAmount === "string" && typeof o.sellMatchAmount === "string" && typeof o.sellTradeOutput === "string" && typeof o.buyTradeOutput === "string");
  },
  isSDK(o: any): o is EventExecuteOrdersForPairSDKType {
    return o && (o.$typeUrl === EventExecuteOrdersForPair.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_price === "string" && typeof o.sell_price === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || EventExecuteOrder.isSDK(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || EventExecuteOrder.isSDK(o.sell_orders[0])) && typeof o.buy_trade_amount === "string" && typeof o.buy_match_amount === "string" && typeof o.sell_trade_amount === "string" && typeof o.sell_match_amount === "string" && typeof o.sell_trade_output === "string" && typeof o.buy_trade_output === "string");
  },
  isAmino(o: any): o is EventExecuteOrdersForPairAmino {
    return o && (o.$typeUrl === EventExecuteOrdersForPair.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_price === "string" && typeof o.sell_price === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || EventExecuteOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || EventExecuteOrder.isAmino(o.sell_orders[0])) && typeof o.buy_trade_amount === "string" && typeof o.buy_match_amount === "string" && typeof o.sell_trade_amount === "string" && typeof o.sell_match_amount === "string" && typeof o.sell_trade_output === "string" && typeof o.buy_trade_output === "string");
  },
  encode(message: EventExecuteOrdersForPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.buyPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.buyPrice, 18).atomics);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.sellPrice, 18).atomics);
    }
    for (const v of message.buyOrders) {
      EventExecuteOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      EventExecuteOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyTradeAmount !== "") {
      writer.uint32(74).string(message.buyTradeAmount);
    }
    if (message.buyMatchAmount !== "") {
      writer.uint32(82).string(message.buyMatchAmount);
    }
    if (message.sellTradeAmount !== "") {
      writer.uint32(90).string(message.sellTradeAmount);
    }
    if (message.sellMatchAmount !== "") {
      writer.uint32(98).string(message.sellMatchAmount);
    }
    if (message.sellTradeOutput !== "") {
      writer.uint32(106).string(message.sellTradeOutput);
    }
    if (message.buyTradeOutput !== "") {
      writer.uint32(114).string(message.buyTradeOutput);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExecuteOrdersForPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteOrdersForPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.buyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.sellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.buyOrders.push(EventExecuteOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.sellOrders.push(EventExecuteOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.buyTradeAmount = reader.string();
          break;
        case 10:
          message.buyMatchAmount = reader.string();
          break;
        case 11:
          message.sellTradeAmount = reader.string();
          break;
        case 12:
          message.sellMatchAmount = reader.string();
          break;
        case 13:
          message.sellTradeOutput = reader.string();
          break;
        case 14:
          message.buyTradeOutput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteOrdersForPair {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => EventExecuteOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => EventExecuteOrder.fromJSON(e)) : [],
      buyTradeAmount: isSet(object.buyTradeAmount) ? String(object.buyTradeAmount) : "",
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellTradeAmount: isSet(object.sellTradeAmount) ? String(object.sellTradeAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : "",
      sellTradeOutput: isSet(object.sellTradeOutput) ? String(object.sellTradeOutput) : "",
      buyTradeOutput: isSet(object.buyTradeOutput) ? String(object.buyTradeOutput) : ""
    };
  },
  toJSON(message: EventExecuteOrdersForPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? EventExecuteOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? EventExecuteOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.buyTradeAmount !== undefined && (obj.buyTradeAmount = message.buyTradeAmount);
    message.buyMatchAmount !== undefined && (obj.buyMatchAmount = message.buyMatchAmount);
    message.sellTradeAmount !== undefined && (obj.sellTradeAmount = message.sellTradeAmount);
    message.sellMatchAmount !== undefined && (obj.sellMatchAmount = message.sellMatchAmount);
    message.sellTradeOutput !== undefined && (obj.sellTradeOutput = message.sellTradeOutput);
    message.buyTradeOutput !== undefined && (obj.buyTradeOutput = message.buyTradeOutput);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteOrdersForPair>): EventExecuteOrdersForPair {
    const message = createBaseEventExecuteOrdersForPair();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map(e => EventExecuteOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => EventExecuteOrder.fromPartial(e)) || [];
    message.buyTradeAmount = object.buyTradeAmount ?? "";
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellTradeAmount = object.sellTradeAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    message.sellTradeOutput = object.sellTradeOutput ?? "";
    message.buyTradeOutput = object.buyTradeOutput ?? "";
    return message;
  },
  fromAmino(object: EventExecuteOrdersForPairAmino): EventExecuteOrdersForPair {
    const message = createBaseEventExecuteOrdersForPair();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.buy_price !== undefined && object.buy_price !== null) {
      message.buyPrice = object.buy_price;
    }
    if (object.sell_price !== undefined && object.sell_price !== null) {
      message.sellPrice = object.sell_price;
    }
    message.buyOrders = object.buy_orders?.map(e => EventExecuteOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => EventExecuteOrder.fromAmino(e)) || [];
    if (object.buy_trade_amount !== undefined && object.buy_trade_amount !== null) {
      message.buyTradeAmount = object.buy_trade_amount;
    }
    if (object.buy_match_amount !== undefined && object.buy_match_amount !== null) {
      message.buyMatchAmount = object.buy_match_amount;
    }
    if (object.sell_trade_amount !== undefined && object.sell_trade_amount !== null) {
      message.sellTradeAmount = object.sell_trade_amount;
    }
    if (object.sell_match_amount !== undefined && object.sell_match_amount !== null) {
      message.sellMatchAmount = object.sell_match_amount;
    }
    if (object.sell_trade_output !== undefined && object.sell_trade_output !== null) {
      message.sellTradeOutput = object.sell_trade_output;
    }
    if (object.buy_trade_output !== undefined && object.buy_trade_output !== null) {
      message.buyTradeOutput = object.buy_trade_output;
    }
    return message;
  },
  toAmino(message: EventExecuteOrdersForPair, useInterfaces: boolean = true): EventExecuteOrdersForPairAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.buy_price = padDecimal(message.buyPrice) === "" ? undefined : padDecimal(message.buyPrice);
    obj.sell_price = padDecimal(message.sellPrice) === "" ? undefined : padDecimal(message.sellPrice);
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? EventExecuteOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? EventExecuteOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    obj.buy_trade_amount = message.buyTradeAmount === "" ? undefined : message.buyTradeAmount;
    obj.buy_match_amount = message.buyMatchAmount === "" ? undefined : message.buyMatchAmount;
    obj.sell_trade_amount = message.sellTradeAmount === "" ? undefined : message.sellTradeAmount;
    obj.sell_match_amount = message.sellMatchAmount === "" ? undefined : message.sellMatchAmount;
    obj.sell_trade_output = message.sellTradeOutput === "" ? undefined : message.sellTradeOutput;
    obj.buy_trade_output = message.buyTradeOutput === "" ? undefined : message.buyTradeOutput;
    return obj;
  },
  fromAminoMsg(object: EventExecuteOrdersForPairAminoMsg): EventExecuteOrdersForPair {
    return EventExecuteOrdersForPair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteOrdersForPairProtoMsg, useInterfaces: boolean = true): EventExecuteOrdersForPair {
    return EventExecuteOrdersForPair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExecuteOrdersForPair): Uint8Array {
    return EventExecuteOrdersForPair.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteOrdersForPair): EventExecuteOrdersForPairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExecuteOrdersForPair",
      value: EventExecuteOrdersForPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExecuteOrdersForPair.typeUrl, EventExecuteOrdersForPair);
function createBaseEventExecuteMatchProposalOrder(): EventExecuteMatchProposalOrder {
  return {
    orderId: BigInt(0),
    matchAmount: "",
    outputAmount: "",
    virtual: false
  };
}
export const EventExecuteMatchProposalOrder = {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalOrder",
  is(o: any): o is EventExecuteMatchProposalOrder {
    return o && (o.$typeUrl === EventExecuteMatchProposalOrder.typeUrl || typeof o.orderId === "bigint" && typeof o.matchAmount === "string" && typeof o.outputAmount === "string" && typeof o.virtual === "boolean");
  },
  isSDK(o: any): o is EventExecuteMatchProposalOrderSDKType {
    return o && (o.$typeUrl === EventExecuteMatchProposalOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.match_amount === "string" && typeof o.output_amount === "string" && typeof o.virtual === "boolean");
  },
  isAmino(o: any): o is EventExecuteMatchProposalOrderAmino {
    return o && (o.$typeUrl === EventExecuteMatchProposalOrder.typeUrl || typeof o.order_id === "bigint" && typeof o.match_amount === "string" && typeof o.output_amount === "string" && typeof o.virtual === "boolean");
  },
  encode(message: EventExecuteMatchProposalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.matchAmount !== "") {
      writer.uint32(26).string(message.matchAmount);
    }
    if (message.outputAmount !== "") {
      writer.uint32(34).string(message.outputAmount);
    }
    if (message.virtual === true) {
      writer.uint32(40).bool(message.virtual);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExecuteMatchProposalOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 3:
          message.matchAmount = reader.string();
          break;
        case 4:
          message.outputAmount = reader.string();
          break;
        case 5:
          message.virtual = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteMatchProposalOrder {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      matchAmount: isSet(object.matchAmount) ? String(object.matchAmount) : "",
      outputAmount: isSet(object.outputAmount) ? String(object.outputAmount) : "",
      virtual: isSet(object.virtual) ? Boolean(object.virtual) : false
    };
  },
  toJSON(message: EventExecuteMatchProposalOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.matchAmount !== undefined && (obj.matchAmount = message.matchAmount);
    message.outputAmount !== undefined && (obj.outputAmount = message.outputAmount);
    message.virtual !== undefined && (obj.virtual = message.virtual);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposalOrder>): EventExecuteMatchProposalOrder {
    const message = createBaseEventExecuteMatchProposalOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.matchAmount = object.matchAmount ?? "";
    message.outputAmount = object.outputAmount ?? "";
    message.virtual = object.virtual ?? false;
    return message;
  },
  fromAmino(object: EventExecuteMatchProposalOrderAmino): EventExecuteMatchProposalOrder {
    const message = createBaseEventExecuteMatchProposalOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.match_amount !== undefined && object.match_amount !== null) {
      message.matchAmount = object.match_amount;
    }
    if (object.output_amount !== undefined && object.output_amount !== null) {
      message.outputAmount = object.output_amount;
    }
    if (object.virtual !== undefined && object.virtual !== null) {
      message.virtual = object.virtual;
    }
    return message;
  },
  toAmino(message: EventExecuteMatchProposalOrder, useInterfaces: boolean = true): EventExecuteMatchProposalOrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.match_amount = message.matchAmount === "" ? undefined : message.matchAmount;
    obj.output_amount = message.outputAmount === "" ? undefined : message.outputAmount;
    obj.virtual = message.virtual === false ? undefined : message.virtual;
    return obj;
  },
  fromAminoMsg(object: EventExecuteMatchProposalOrderAminoMsg): EventExecuteMatchProposalOrder {
    return EventExecuteMatchProposalOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteMatchProposalOrderProtoMsg, useInterfaces: boolean = true): EventExecuteMatchProposalOrder {
    return EventExecuteMatchProposalOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExecuteMatchProposalOrder): Uint8Array {
    return EventExecuteMatchProposalOrder.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteMatchProposalOrder): EventExecuteMatchProposalOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalOrder",
      value: EventExecuteMatchProposalOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExecuteMatchProposalOrder.typeUrl, EventExecuteMatchProposalOrder);
function createBaseEventExecuteMatchProposalPair(): EventExecuteMatchProposalPair {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyPrice: "",
    sellPrice: "",
    buyOrders: [],
    sellOrders: [],
    buyMatchAmount: "",
    sellMatchAmount: ""
  };
}
export const EventExecuteMatchProposalPair = {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalPair",
  is(o: any): o is EventExecuteMatchProposalPair {
    return o && (o.$typeUrl === EventExecuteMatchProposalPair.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.buyPrice === "string" && typeof o.sellPrice === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || EventExecuteMatchProposalOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || EventExecuteMatchProposalOrder.is(o.sellOrders[0])) && typeof o.buyMatchAmount === "string" && typeof o.sellMatchAmount === "string");
  },
  isSDK(o: any): o is EventExecuteMatchProposalPairSDKType {
    return o && (o.$typeUrl === EventExecuteMatchProposalPair.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_price === "string" && typeof o.sell_price === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || EventExecuteMatchProposalOrder.isSDK(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || EventExecuteMatchProposalOrder.isSDK(o.sell_orders[0])) && typeof o.buy_match_amount === "string" && typeof o.sell_match_amount === "string");
  },
  isAmino(o: any): o is EventExecuteMatchProposalPairAmino {
    return o && (o.$typeUrl === EventExecuteMatchProposalPair.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_price === "string" && typeof o.sell_price === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || EventExecuteMatchProposalOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || EventExecuteMatchProposalOrder.isAmino(o.sell_orders[0])) && typeof o.buy_match_amount === "string" && typeof o.sell_match_amount === "string");
  },
  encode(message: EventExecuteMatchProposalPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.buyPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.buyPrice, 18).atomics);
    }
    if (message.sellPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.sellPrice, 18).atomics);
    }
    for (const v of message.buyOrders) {
      EventExecuteMatchProposalOrder.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      EventExecuteMatchProposalOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.buyMatchAmount !== "") {
      writer.uint32(74).string(message.buyMatchAmount);
    }
    if (message.sellMatchAmount !== "") {
      writer.uint32(82).string(message.sellMatchAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExecuteMatchProposalPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposalPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.buyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.sellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.buyOrders.push(EventExecuteMatchProposalOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.sellOrders.push(EventExecuteMatchProposalOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.buyMatchAmount = reader.string();
          break;
        case 10:
          message.sellMatchAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteMatchProposalPair {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyPrice: isSet(object.buyPrice) ? String(object.buyPrice) : "",
      sellPrice: isSet(object.sellPrice) ? String(object.sellPrice) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => EventExecuteMatchProposalOrder.fromJSON(e)) : [],
      buyMatchAmount: isSet(object.buyMatchAmount) ? String(object.buyMatchAmount) : "",
      sellMatchAmount: isSet(object.sellMatchAmount) ? String(object.sellMatchAmount) : ""
    };
  },
  toJSON(message: EventExecuteMatchProposalPair): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyPrice !== undefined && (obj.buyPrice = message.buyPrice);
    message.sellPrice !== undefined && (obj.sellPrice = message.sellPrice);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? EventExecuteMatchProposalOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.buyMatchAmount !== undefined && (obj.buyMatchAmount = message.buyMatchAmount);
    message.sellMatchAmount !== undefined && (obj.sellMatchAmount = message.sellMatchAmount);
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposalPair>): EventExecuteMatchProposalPair {
    const message = createBaseEventExecuteMatchProposalPair();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyPrice = object.buyPrice ?? "";
    message.sellPrice = object.sellPrice ?? "";
    message.buyOrders = object.buyOrders?.map(e => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => EventExecuteMatchProposalOrder.fromPartial(e)) || [];
    message.buyMatchAmount = object.buyMatchAmount ?? "";
    message.sellMatchAmount = object.sellMatchAmount ?? "";
    return message;
  },
  fromAmino(object: EventExecuteMatchProposalPairAmino): EventExecuteMatchProposalPair {
    const message = createBaseEventExecuteMatchProposalPair();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.buy_price !== undefined && object.buy_price !== null) {
      message.buyPrice = object.buy_price;
    }
    if (object.sell_price !== undefined && object.sell_price !== null) {
      message.sellPrice = object.sell_price;
    }
    message.buyOrders = object.buy_orders?.map(e => EventExecuteMatchProposalOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => EventExecuteMatchProposalOrder.fromAmino(e)) || [];
    if (object.buy_match_amount !== undefined && object.buy_match_amount !== null) {
      message.buyMatchAmount = object.buy_match_amount;
    }
    if (object.sell_match_amount !== undefined && object.sell_match_amount !== null) {
      message.sellMatchAmount = object.sell_match_amount;
    }
    return message;
  },
  toAmino(message: EventExecuteMatchProposalPair, useInterfaces: boolean = true): EventExecuteMatchProposalPairAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.buy_price = padDecimal(message.buyPrice) === "" ? undefined : padDecimal(message.buyPrice);
    obj.sell_price = padDecimal(message.sellPrice) === "" ? undefined : padDecimal(message.sellPrice);
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? EventExecuteMatchProposalOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? EventExecuteMatchProposalOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    obj.buy_match_amount = message.buyMatchAmount === "" ? undefined : message.buyMatchAmount;
    obj.sell_match_amount = message.sellMatchAmount === "" ? undefined : message.sellMatchAmount;
    return obj;
  },
  fromAminoMsg(object: EventExecuteMatchProposalPairAminoMsg): EventExecuteMatchProposalPair {
    return EventExecuteMatchProposalPair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteMatchProposalPairProtoMsg, useInterfaces: boolean = true): EventExecuteMatchProposalPair {
    return EventExecuteMatchProposalPair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExecuteMatchProposalPair): Uint8Array {
    return EventExecuteMatchProposalPair.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteMatchProposalPair): EventExecuteMatchProposalPairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposalPair",
      value: EventExecuteMatchProposalPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExecuteMatchProposalPair.typeUrl, EventExecuteMatchProposalPair);
function createBaseEventExecuteMatchProposal(): EventExecuteMatchProposal {
  return {
    proposer: "",
    pairs: [],
    proposerReward: []
  };
}
export const EventExecuteMatchProposal = {
  typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposal",
  is(o: any): o is EventExecuteMatchProposal {
    return o && (o.$typeUrl === EventExecuteMatchProposal.typeUrl || typeof o.proposer === "string" && Array.isArray(o.pairs) && (!o.pairs.length || EventExecuteMatchProposalPair.is(o.pairs[0])) && Array.isArray(o.proposerReward) && (!o.proposerReward.length || Coin.is(o.proposerReward[0])));
  },
  isSDK(o: any): o is EventExecuteMatchProposalSDKType {
    return o && (o.$typeUrl === EventExecuteMatchProposal.typeUrl || typeof o.proposer === "string" && Array.isArray(o.pairs) && (!o.pairs.length || EventExecuteMatchProposalPair.isSDK(o.pairs[0])) && Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isSDK(o.proposer_reward[0])));
  },
  isAmino(o: any): o is EventExecuteMatchProposalAmino {
    return o && (o.$typeUrl === EventExecuteMatchProposal.typeUrl || typeof o.proposer === "string" && Array.isArray(o.pairs) && (!o.pairs.length || EventExecuteMatchProposalPair.isAmino(o.pairs[0])) && Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isAmino(o.proposer_reward[0])));
  },
  encode(message: EventExecuteMatchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    for (const v of message.pairs) {
      EventExecuteMatchProposalPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExecuteMatchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecuteMatchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.pairs.push(EventExecuteMatchProposalPair.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.proposerReward.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExecuteMatchProposal {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => EventExecuteMatchProposalPair.fromJSON(e)) : [],
      proposerReward: Array.isArray(object?.proposerReward) ? object.proposerReward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: EventExecuteMatchProposal): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? EventExecuteMatchProposalPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EventExecuteMatchProposal>): EventExecuteMatchProposal {
    const message = createBaseEventExecuteMatchProposal();
    message.proposer = object.proposer ?? "";
    message.pairs = object.pairs?.map(e => EventExecuteMatchProposalPair.fromPartial(e)) || [];
    message.proposerReward = object.proposerReward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventExecuteMatchProposalAmino): EventExecuteMatchProposal {
    const message = createBaseEventExecuteMatchProposal();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.pairs = object.pairs?.map(e => EventExecuteMatchProposalPair.fromAmino(e)) || [];
    message.proposerReward = object.proposer_reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventExecuteMatchProposal, useInterfaces: boolean = true): EventExecuteMatchProposalAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? EventExecuteMatchProposalPair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    if (message.proposerReward) {
      obj.proposer_reward = message.proposerReward.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposer_reward = message.proposerReward;
    }
    return obj;
  },
  fromAminoMsg(object: EventExecuteMatchProposalAminoMsg): EventExecuteMatchProposal {
    return EventExecuteMatchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecuteMatchProposalProtoMsg, useInterfaces: boolean = true): EventExecuteMatchProposal {
    return EventExecuteMatchProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExecuteMatchProposal): Uint8Array {
    return EventExecuteMatchProposal.encode(message).finish();
  },
  toProtoMsg(message: EventExecuteMatchProposal): EventExecuteMatchProposalProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExecuteMatchProposal",
      value: EventExecuteMatchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExecuteMatchProposal.typeUrl, EventExecuteMatchProposal);
function createBaseEventExitPool(): EventExitPool {
  return {
    poolId: BigInt(0),
    summary: ExitSummary.fromPartial({})
  };
}
export const EventExitPool = {
  typeUrl: "/pryzm.amm.v1.EventExitPool",
  is(o: any): o is EventExitPool {
    return o && (o.$typeUrl === EventExitPool.typeUrl || typeof o.poolId === "bigint" && ExitSummary.is(o.summary));
  },
  isSDK(o: any): o is EventExitPoolSDKType {
    return o && (o.$typeUrl === EventExitPool.typeUrl || typeof o.pool_id === "bigint" && ExitSummary.isSDK(o.summary));
  },
  isAmino(o: any): o is EventExitPoolAmino {
    return o && (o.$typeUrl === EventExitPool.typeUrl || typeof o.pool_id === "bigint" && ExitSummary.isAmino(o.summary));
  },
  encode(message: EventExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      ExitSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.summary = ExitSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExitPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? ExitSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventExitPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? ExitSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventExitPool>): EventExitPool {
    const message = createBaseEventExitPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? ExitSummary.fromPartial(object.summary) : undefined;
    return message;
  },
  fromAmino(object: EventExitPoolAmino): EventExitPool {
    const message = createBaseEventExitPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = ExitSummary.fromAmino(object.summary);
    }
    return message;
  },
  toAmino(message: EventExitPool, useInterfaces: boolean = true): EventExitPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.summary = message.summary ? ExitSummary.toAmino(message.summary, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExitPoolAminoMsg): EventExitPool {
    return EventExitPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExitPoolProtoMsg, useInterfaces: boolean = true): EventExitPool {
    return EventExitPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExitPool): Uint8Array {
    return EventExitPool.encode(message).finish();
  },
  toProtoMsg(message: EventExitPool): EventExitPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExitPool",
      value: EventExitPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExitPool.typeUrl, EventExitPool);
function createBaseEventJoinPool(): EventJoinPool {
  return {
    poolId: BigInt(0),
    summary: JoinSummary.fromPartial({})
  };
}
export const EventJoinPool = {
  typeUrl: "/pryzm.amm.v1.EventJoinPool",
  is(o: any): o is EventJoinPool {
    return o && (o.$typeUrl === EventJoinPool.typeUrl || typeof o.poolId === "bigint" && JoinSummary.is(o.summary));
  },
  isSDK(o: any): o is EventJoinPoolSDKType {
    return o && (o.$typeUrl === EventJoinPool.typeUrl || typeof o.pool_id === "bigint" && JoinSummary.isSDK(o.summary));
  },
  isAmino(o: any): o is EventJoinPoolAmino {
    return o && (o.$typeUrl === EventJoinPool.typeUrl || typeof o.pool_id === "bigint" && JoinSummary.isAmino(o.summary));
  },
  encode(message: EventJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      JoinSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventJoinPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.summary = JoinSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventJoinPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? JoinSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventJoinPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? JoinSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventJoinPool>): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? JoinSummary.fromPartial(object.summary) : undefined;
    return message;
  },
  fromAmino(object: EventJoinPoolAmino): EventJoinPool {
    const message = createBaseEventJoinPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = JoinSummary.fromAmino(object.summary);
    }
    return message;
  },
  toAmino(message: EventJoinPool, useInterfaces: boolean = true): EventJoinPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.summary = message.summary ? JoinSummary.toAmino(message.summary, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventJoinPoolAminoMsg): EventJoinPool {
    return EventJoinPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventJoinPoolProtoMsg, useInterfaces: boolean = true): EventJoinPool {
    return EventJoinPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventJoinPool): Uint8Array {
    return EventJoinPool.encode(message).finish();
  },
  toProtoMsg(message: EventJoinPool): EventJoinPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventJoinPool",
      value: EventJoinPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventJoinPool.typeUrl, EventJoinPool);
function createBaseEventSwap(): EventSwap {
  return {
    poolId: BigInt(0),
    summary: SwapSummary.fromPartial({})
  };
}
export const EventSwap = {
  typeUrl: "/pryzm.amm.v1.EventSwap",
  is(o: any): o is EventSwap {
    return o && (o.$typeUrl === EventSwap.typeUrl || typeof o.poolId === "bigint" && SwapSummary.is(o.summary));
  },
  isSDK(o: any): o is EventSwapSDKType {
    return o && (o.$typeUrl === EventSwap.typeUrl || typeof o.pool_id === "bigint" && SwapSummary.isSDK(o.summary));
  },
  isAmino(o: any): o is EventSwapAmino {
    return o && (o.$typeUrl === EventSwap.typeUrl || typeof o.pool_id === "bigint" && SwapSummary.isAmino(o.summary));
  },
  encode(message: EventSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      SwapSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.summary = SwapSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSwap {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined
    };
  },
  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? SwapSummary.fromPartial(object.summary) : undefined;
    return message;
  },
  fromAmino(object: EventSwapAmino): EventSwap {
    const message = createBaseEventSwap();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = SwapSummary.fromAmino(object.summary);
    }
    return message;
  },
  toAmino(message: EventSwap, useInterfaces: boolean = true): EventSwapAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.summary = message.summary ? SwapSummary.toAmino(message.summary, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSwapAminoMsg): EventSwap {
    return EventSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSwapProtoMsg, useInterfaces: boolean = true): EventSwap {
    return EventSwap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSwap): Uint8Array {
    return EventSwap.encode(message).finish();
  },
  toProtoMsg(message: EventSwap): EventSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSwap",
      value: EventSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSwap.typeUrl, EventSwap);
function createBaseEventExitPoolRequest(): EventExitPoolRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: [],
    exitType: 0
  };
}
export const EventExitPoolRequest = {
  typeUrl: "/pryzm.amm.v1.EventExitPoolRequest",
  is(o: any): o is EventExitPoolRequest {
    return o && (o.$typeUrl === EventExitPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.protocolFee) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && isSet(o.exitType));
  },
  isSDK(o: any): o is EventExitPoolRequestSDKType {
    return o && (o.$typeUrl === EventExitPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && isSet(o.exit_type));
  },
  isAmino(o: any): o is EventExitPoolRequestAmino {
    return o && (o.$typeUrl === EventExitPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && isSet(o.exit_type));
  },
  encode(message: EventExitPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.exitType !== 0) {
      writer.uint32(56).int32(message.exitType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventExitPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExitPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.lptIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.exitType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExitPoolRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      exitType: isSet(object.exitType) ? exitTypeFromJSON(object.exitType) : -1
    };
  },
  toJSON(message: EventExitPoolRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.exitType !== undefined && (obj.exitType = exitTypeToJSON(message.exitType));
    return obj;
  },
  fromPartial(object: Partial<EventExitPoolRequest>): EventExitPoolRequest {
    const message = createBaseEventExitPoolRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.exitType = object.exitType ?? 0;
    return message;
  },
  fromAmino(object: EventExitPoolRequestAmino): EventExitPoolRequest {
    const message = createBaseEventExitPoolRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.exit_type !== undefined && object.exit_type !== null) {
      message.exitType = object.exit_type;
    }
    return message;
  },
  toAmino(message: EventExitPoolRequest, useInterfaces: boolean = true): EventExitPoolRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn, useInterfaces) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    obj.exit_type = message.exitType === 0 ? undefined : message.exitType;
    return obj;
  },
  fromAminoMsg(object: EventExitPoolRequestAminoMsg): EventExitPoolRequest {
    return EventExitPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExitPoolRequestProtoMsg, useInterfaces: boolean = true): EventExitPoolRequest {
    return EventExitPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventExitPoolRequest): Uint8Array {
    return EventExitPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: EventExitPoolRequest): EventExitPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventExitPoolRequest",
      value: EventExitPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventExitPoolRequest.typeUrl, EventExitPoolRequest);
function createBaseEventJoinPoolRequest(): EventJoinPoolRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: [],
    joinType: 0
  };
}
export const EventJoinPoolRequest = {
  typeUrl: "/pryzm.amm.v1.EventJoinPoolRequest",
  is(o: any): o is EventJoinPoolRequest {
    return o && (o.$typeUrl === EventJoinPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && isSet(o.joinType));
  },
  isSDK(o: any): o is EventJoinPoolRequestSDKType {
    return o && (o.$typeUrl === EventJoinPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && isSet(o.join_type));
  },
  isAmino(o: any): o is EventJoinPoolRequestAmino {
    return o && (o.$typeUrl === EventJoinPoolRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && isSet(o.join_type));
  },
  encode(message: EventJoinPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.joinType !== 0) {
      writer.uint32(56).int32(message.joinType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventJoinPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.joinType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventJoinPoolRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinType: isSet(object.joinType) ? joinTypeFromJSON(object.joinType) : -1
    };
  },
  toJSON(message: EventJoinPoolRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.protocolFee) {
      obj.protocolFee = message.protocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.protocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.joinType !== undefined && (obj.joinType = joinTypeToJSON(message.joinType));
    return obj;
  },
  fromPartial(object: Partial<EventJoinPoolRequest>): EventJoinPoolRequest {
    const message = createBaseEventJoinPoolRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinType = object.joinType ?? 0;
    return message;
  },
  fromAmino(object: EventJoinPoolRequestAmino): EventJoinPoolRequest {
    const message = createBaseEventJoinPoolRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.join_type !== undefined && object.join_type !== null) {
      message.joinType = object.join_type;
    }
    return message;
  },
  toAmino(message: EventJoinPoolRequest, useInterfaces: boolean = true): EventJoinPoolRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut, useInterfaces) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    if (message.protocolFee) {
      obj.protocol_fee = message.protocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.protocol_fee = message.protocolFee;
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    obj.join_type = message.joinType === 0 ? undefined : message.joinType;
    return obj;
  },
  fromAminoMsg(object: EventJoinPoolRequestAminoMsg): EventJoinPoolRequest {
    return EventJoinPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventJoinPoolRequestProtoMsg, useInterfaces: boolean = true): EventJoinPoolRequest {
    return EventJoinPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventJoinPoolRequest): Uint8Array {
    return EventJoinPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: EventJoinPoolRequest): EventJoinPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventJoinPoolRequest",
      value: EventJoinPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventJoinPoolRequest.typeUrl, EventJoinPoolRequest);
function createBaseEventSingleSwapRequest(): EventSingleSwapRequest {
  return {
    creator: "",
    poolId: BigInt(0),
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({}),
    swapType: 0
  };
}
export const EventSingleSwapRequest = {
  typeUrl: "/pryzm.amm.v1.EventSingleSwapRequest",
  is(o: any): o is EventSingleSwapRequest {
    return o && (o.$typeUrl === EventSingleSwapRequest.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Coin.is(o.amountOut) && Coin.is(o.amountIn) && Coin.is(o.protocolFee) && Coin.is(o.swapFee) && isSet(o.swapType));
  },
  isSDK(o: any): o is EventSingleSwapRequestSDKType {
    return o && (o.$typeUrl === EventSingleSwapRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isSDK(o.amount_out) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee) && isSet(o.swap_type));
  },
  isAmino(o: any): o is EventSingleSwapRequestAmino {
    return o && (o.$typeUrl === EventSingleSwapRequest.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Coin.isAmino(o.amount_out) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee) && isSet(o.swap_type));
  },
  encode(message: EventSingleSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.swapType !== 0) {
      writer.uint32(56).int32(message.swapType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSingleSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.swapFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.swapType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSingleSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1
    };
  },
  toJSON(message: EventSingleSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    return obj;
  },
  fromPartial(object: Partial<EventSingleSwapRequest>): EventSingleSwapRequest {
    const message = createBaseEventSingleSwapRequest();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    message.swapType = object.swapType ?? 0;
    return message;
  },
  fromAmino(object: EventSingleSwapRequestAmino): EventSingleSwapRequest {
    const message = createBaseEventSingleSwapRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.amount_in !== undefined && object.amount_in !== null) {
      message.amountIn = Coin.fromAmino(object.amount_in);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    return message;
  },
  toAmino(message: EventSingleSwapRequest, useInterfaces: boolean = true): EventSingleSwapRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    return obj;
  },
  fromAminoMsg(object: EventSingleSwapRequestAminoMsg): EventSingleSwapRequest {
    return EventSingleSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSingleSwapRequestProtoMsg, useInterfaces: boolean = true): EventSingleSwapRequest {
    return EventSingleSwapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSingleSwapRequest): Uint8Array {
    return EventSingleSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: EventSingleSwapRequest): EventSingleSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSingleSwapRequest",
      value: EventSingleSwapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSingleSwapRequest.typeUrl, EventSingleSwapRequest);
function createBaseEventBatchSwapRequest(): EventBatchSwapRequest {
  return {
    creator: "",
    steps: [],
    amountsIn: [],
    amountsOut: [],
    swapProtocolFee: [],
    joinExitProtocolFee: [],
    swapFee: [],
    swapType: 0
  };
}
export const EventBatchSwapRequest = {
  typeUrl: "/pryzm.amm.v1.EventBatchSwapRequest",
  is(o: any): o is EventBatchSwapRequest {
    return o && (o.$typeUrl === EventBatchSwapRequest.typeUrl || typeof o.creator === "string" && Array.isArray(o.steps) && (!o.steps.length || SwapStep.is(o.steps[0])) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Array.isArray(o.swapProtocolFee) && (!o.swapProtocolFee.length || Coin.is(o.swapProtocolFee[0])) && Array.isArray(o.joinExitProtocolFee) && (!o.joinExitProtocolFee.length || Coin.is(o.joinExitProtocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && isSet(o.swapType));
  },
  isSDK(o: any): o is EventBatchSwapRequestSDKType {
    return o && (o.$typeUrl === EventBatchSwapRequest.typeUrl || typeof o.creator === "string" && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isSDK(o.steps[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isSDK(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isSDK(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && isSet(o.swap_type));
  },
  isAmino(o: any): o is EventBatchSwapRequestAmino {
    return o && (o.$typeUrl === EventBatchSwapRequest.typeUrl || typeof o.creator === "string" && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isAmino(o.steps[0])) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isAmino(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isAmino(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && isSet(o.swap_type));
  },
  encode(message: EventBatchSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapProtocolFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.joinExitProtocolFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.swapType !== 0) {
      writer.uint32(64).int32(message.swapType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventBatchSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.swapProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.joinExitProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.swapType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBatchSwapRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1
    };
  },
  toJSON(message: EventBatchSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    if (message.swapProtocolFee) {
      obj.swapProtocolFee = message.swapProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapProtocolFee = [];
    }
    if (message.joinExitProtocolFee) {
      obj.joinExitProtocolFee = message.joinExitProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinExitProtocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    return obj;
  },
  fromPartial(object: Partial<EventBatchSwapRequest>): EventBatchSwapRequest {
    const message = createBaseEventBatchSwapRequest();
    message.creator = object.creator ?? "";
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapType = object.swapType ?? 0;
    return message;
  },
  fromAmino(object: EventBatchSwapRequestAmino): EventBatchSwapRequest {
    const message = createBaseEventBatchSwapRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    return message;
  },
  toAmino(message: EventBatchSwapRequest, useInterfaces: boolean = true): EventBatchSwapRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    if (message.swapProtocolFee) {
      obj.swap_protocol_fee = message.swapProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_protocol_fee = message.swapProtocolFee;
    }
    if (message.joinExitProtocolFee) {
      obj.join_exit_protocol_fee = message.joinExitProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.join_exit_protocol_fee = message.joinExitProtocolFee;
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    return obj;
  },
  fromAminoMsg(object: EventBatchSwapRequestAminoMsg): EventBatchSwapRequest {
    return EventBatchSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBatchSwapRequestProtoMsg, useInterfaces: boolean = true): EventBatchSwapRequest {
    return EventBatchSwapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventBatchSwapRequest): Uint8Array {
    return EventBatchSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: EventBatchSwapRequest): EventBatchSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventBatchSwapRequest",
      value: EventBatchSwapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBatchSwapRequest.typeUrl, EventBatchSwapRequest);
function createBaseEventYAssetSwapRefractorAction(): EventYAssetSwapRefractorAction {
  return {
    yAmount: "",
    cAmountAfterFee: "",
    feeAmount: ""
  };
}
export const EventYAssetSwapRefractorAction = {
  typeUrl: "/pryzm.amm.v1.EventYAssetSwapRefractorAction",
  is(o: any): o is EventYAssetSwapRefractorAction {
    return o && (o.$typeUrl === EventYAssetSwapRefractorAction.typeUrl || typeof o.yAmount === "string" && typeof o.cAmountAfterFee === "string" && typeof o.feeAmount === "string");
  },
  isSDK(o: any): o is EventYAssetSwapRefractorActionSDKType {
    return o && (o.$typeUrl === EventYAssetSwapRefractorAction.typeUrl || typeof o.y_amount === "string" && typeof o.c_amount_after_fee === "string" && typeof o.fee_amount === "string");
  },
  isAmino(o: any): o is EventYAssetSwapRefractorActionAmino {
    return o && (o.$typeUrl === EventYAssetSwapRefractorAction.typeUrl || typeof o.y_amount === "string" && typeof o.c_amount_after_fee === "string" && typeof o.fee_amount === "string");
  },
  encode(message: EventYAssetSwapRefractorAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yAmount !== "") {
      writer.uint32(10).string(message.yAmount);
    }
    if (message.cAmountAfterFee !== "") {
      writer.uint32(18).string(message.cAmountAfterFee);
    }
    if (message.feeAmount !== "") {
      writer.uint32(26).string(message.feeAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYAssetSwapRefractorAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYAssetSwapRefractorAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yAmount = reader.string();
          break;
        case 2:
          message.cAmountAfterFee = reader.string();
          break;
        case 3:
          message.feeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventYAssetSwapRefractorAction {
    return {
      yAmount: isSet(object.yAmount) ? String(object.yAmount) : "",
      cAmountAfterFee: isSet(object.cAmountAfterFee) ? String(object.cAmountAfterFee) : "",
      feeAmount: isSet(object.feeAmount) ? String(object.feeAmount) : ""
    };
  },
  toJSON(message: EventYAssetSwapRefractorAction): unknown {
    const obj: any = {};
    message.yAmount !== undefined && (obj.yAmount = message.yAmount);
    message.cAmountAfterFee !== undefined && (obj.cAmountAfterFee = message.cAmountAfterFee);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    return obj;
  },
  fromPartial(object: Partial<EventYAssetSwapRefractorAction>): EventYAssetSwapRefractorAction {
    const message = createBaseEventYAssetSwapRefractorAction();
    message.yAmount = object.yAmount ?? "";
    message.cAmountAfterFee = object.cAmountAfterFee ?? "";
    message.feeAmount = object.feeAmount ?? "";
    return message;
  },
  fromAmino(object: EventYAssetSwapRefractorActionAmino): EventYAssetSwapRefractorAction {
    const message = createBaseEventYAssetSwapRefractorAction();
    if (object.y_amount !== undefined && object.y_amount !== null) {
      message.yAmount = object.y_amount;
    }
    if (object.c_amount_after_fee !== undefined && object.c_amount_after_fee !== null) {
      message.cAmountAfterFee = object.c_amount_after_fee;
    }
    if (object.fee_amount !== undefined && object.fee_amount !== null) {
      message.feeAmount = object.fee_amount;
    }
    return message;
  },
  toAmino(message: EventYAssetSwapRefractorAction, useInterfaces: boolean = true): EventYAssetSwapRefractorActionAmino {
    const obj: any = {};
    obj.y_amount = message.yAmount === "" ? undefined : message.yAmount;
    obj.c_amount_after_fee = message.cAmountAfterFee === "" ? undefined : message.cAmountAfterFee;
    obj.fee_amount = message.feeAmount === "" ? undefined : message.feeAmount;
    return obj;
  },
  fromAminoMsg(object: EventYAssetSwapRefractorActionAminoMsg): EventYAssetSwapRefractorAction {
    return EventYAssetSwapRefractorAction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYAssetSwapRefractorActionProtoMsg, useInterfaces: boolean = true): EventYAssetSwapRefractorAction {
    return EventYAssetSwapRefractorAction.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYAssetSwapRefractorAction): Uint8Array {
    return EventYAssetSwapRefractorAction.encode(message).finish();
  },
  toProtoMsg(message: EventYAssetSwapRefractorAction): EventYAssetSwapRefractorActionProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventYAssetSwapRefractorAction",
      value: EventYAssetSwapRefractorAction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYAssetSwapRefractorAction.typeUrl, EventYAssetSwapRefractorAction);
function createBaseEventYAssetSwap(): EventYAssetSwap {
  return {
    poolId: BigInt(0),
    summary: SwapSummary.fromPartial({}),
    refractorAction: EventYAssetSwapRefractorAction.fromPartial({}),
    fee: undefined
  };
}
export const EventYAssetSwap = {
  typeUrl: "/pryzm.amm.v1.EventYAssetSwap",
  is(o: any): o is EventYAssetSwap {
    return o && (o.$typeUrl === EventYAssetSwap.typeUrl || typeof o.poolId === "bigint" && SwapSummary.is(o.summary) && EventYAssetSwapRefractorAction.is(o.refractorAction));
  },
  isSDK(o: any): o is EventYAssetSwapSDKType {
    return o && (o.$typeUrl === EventYAssetSwap.typeUrl || typeof o.pool_id === "bigint" && SwapSummary.isSDK(o.summary) && EventYAssetSwapRefractorAction.isSDK(o.refractor_action));
  },
  isAmino(o: any): o is EventYAssetSwapAmino {
    return o && (o.$typeUrl === EventYAssetSwap.typeUrl || typeof o.pool_id === "bigint" && SwapSummary.isAmino(o.summary) && EventYAssetSwapRefractorAction.isAmino(o.refractor_action));
  },
  encode(message: EventYAssetSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.summary !== undefined) {
      SwapSummary.encode(message.summary, writer.uint32(18).fork()).ldelim();
    }
    if (message.refractorAction !== undefined) {
      EventYAssetSwapRefractorAction.encode(message.refractorAction, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYAssetSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYAssetSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.summary = SwapSummary.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.refractorAction = EventYAssetSwapRefractorAction.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventYAssetSwap {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      summary: isSet(object.summary) ? SwapSummary.fromJSON(object.summary) : undefined,
      refractorAction: isSet(object.refractorAction) ? EventYAssetSwapRefractorAction.fromJSON(object.refractorAction) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYAssetSwap): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.summary !== undefined && (obj.summary = message.summary ? SwapSummary.toJSON(message.summary) : undefined);
    message.refractorAction !== undefined && (obj.refractorAction = message.refractorAction ? EventYAssetSwapRefractorAction.toJSON(message.refractorAction) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYAssetSwap>): EventYAssetSwap {
    const message = createBaseEventYAssetSwap();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.summary = object.summary !== undefined && object.summary !== null ? SwapSummary.fromPartial(object.summary) : undefined;
    message.refractorAction = object.refractorAction !== undefined && object.refractorAction !== null ? EventYAssetSwapRefractorAction.fromPartial(object.refractorAction) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventYAssetSwapAmino): EventYAssetSwap {
    const message = createBaseEventYAssetSwap();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = SwapSummary.fromAmino(object.summary);
    }
    if (object.refractor_action !== undefined && object.refractor_action !== null) {
      message.refractorAction = EventYAssetSwapRefractorAction.fromAmino(object.refractor_action);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventYAssetSwap, useInterfaces: boolean = true): EventYAssetSwapAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.summary = message.summary ? SwapSummary.toAmino(message.summary, useInterfaces) : undefined;
    obj.refractor_action = message.refractorAction ? EventYAssetSwapRefractorAction.toAmino(message.refractorAction, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventYAssetSwapAminoMsg): EventYAssetSwap {
    return EventYAssetSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYAssetSwapProtoMsg, useInterfaces: boolean = true): EventYAssetSwap {
    return EventYAssetSwap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYAssetSwap): Uint8Array {
    return EventYAssetSwap.encode(message).finish();
  },
  toProtoMsg(message: EventYAssetSwap): EventYAssetSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventYAssetSwap",
      value: EventYAssetSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYAssetSwap.typeUrl, EventYAssetSwap);
function createBaseEventSetOraclePricePair(): EventSetOraclePricePair {
  return {
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const EventSetOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.EventSetOraclePricePair",
  is(o: any): o is EventSetOraclePricePair {
    return o && (o.$typeUrl === EventSetOraclePricePair.typeUrl || OraclePricePair.is(o.oraclePricePair));
  },
  isSDK(o: any): o is EventSetOraclePricePairSDKType {
    return o && (o.$typeUrl === EventSetOraclePricePair.typeUrl || OraclePricePair.isSDK(o.oracle_price_pair));
  },
  isAmino(o: any): o is EventSetOraclePricePairAmino {
    return o && (o.$typeUrl === EventSetOraclePricePair.typeUrl || OraclePricePair.isAmino(o.oracle_price_pair));
  },
  encode(message: EventSetOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOraclePricePair {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: EventSetOraclePricePair): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetOraclePricePair>): EventSetOraclePricePair {
    const message = createBaseEventSetOraclePricePair();
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  },
  fromAmino(object: EventSetOraclePricePairAmino): EventSetOraclePricePair {
    const message = createBaseEventSetOraclePricePair();
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: EventSetOraclePricePair, useInterfaces: boolean = true): EventSetOraclePricePairAmino {
    const obj: any = {};
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetOraclePricePairAminoMsg): EventSetOraclePricePair {
    return EventSetOraclePricePair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetOraclePricePairProtoMsg, useInterfaces: boolean = true): EventSetOraclePricePair {
    return EventSetOraclePricePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetOraclePricePair): Uint8Array {
    return EventSetOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: EventSetOraclePricePair): EventSetOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetOraclePricePair",
      value: EventSetOraclePricePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetOraclePricePair.typeUrl, EventSetOraclePricePair);
function createBaseEventRemoveOraclePricePair(): EventRemoveOraclePricePair {
  return {
    assetId: ""
  };
}
export const EventRemoveOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.EventRemoveOraclePricePair",
  is(o: any): o is EventRemoveOraclePricePair {
    return o && (o.$typeUrl === EventRemoveOraclePricePair.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is EventRemoveOraclePricePairSDKType {
    return o && (o.$typeUrl === EventRemoveOraclePricePair.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is EventRemoveOraclePricePairAmino {
    return o && (o.$typeUrl === EventRemoveOraclePricePair.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: EventRemoveOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemoveOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveOraclePricePair {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventRemoveOraclePricePair): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveOraclePricePair>): EventRemoveOraclePricePair {
    const message = createBaseEventRemoveOraclePricePair();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: EventRemoveOraclePricePairAmino): EventRemoveOraclePricePair {
    const message = createBaseEventRemoveOraclePricePair();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: EventRemoveOraclePricePair, useInterfaces: boolean = true): EventRemoveOraclePricePairAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: EventRemoveOraclePricePairAminoMsg): EventRemoveOraclePricePair {
    return EventRemoveOraclePricePair.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveOraclePricePairProtoMsg, useInterfaces: boolean = true): EventRemoveOraclePricePair {
    return EventRemoveOraclePricePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemoveOraclePricePair): Uint8Array {
    return EventRemoveOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveOraclePricePair): EventRemoveOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemoveOraclePricePair",
      value: EventRemoveOraclePricePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemoveOraclePricePair.typeUrl, EventRemoveOraclePricePair);
function createBaseEventSetPendingTokenIntroduction(): EventSetPendingTokenIntroduction {
  return {
    pendingTokenIntroduction: PendingTokenIntroduction.fromPartial({})
  };
}
export const EventSetPendingTokenIntroduction = {
  typeUrl: "/pryzm.amm.v1.EventSetPendingTokenIntroduction",
  is(o: any): o is EventSetPendingTokenIntroduction {
    return o && (o.$typeUrl === EventSetPendingTokenIntroduction.typeUrl || PendingTokenIntroduction.is(o.pendingTokenIntroduction));
  },
  isSDK(o: any): o is EventSetPendingTokenIntroductionSDKType {
    return o && (o.$typeUrl === EventSetPendingTokenIntroduction.typeUrl || PendingTokenIntroduction.isSDK(o.pending_token_introduction));
  },
  isAmino(o: any): o is EventSetPendingTokenIntroductionAmino {
    return o && (o.$typeUrl === EventSetPendingTokenIntroduction.typeUrl || PendingTokenIntroduction.isAmino(o.pending_token_introduction));
  },
  encode(message: EventSetPendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetPendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction = PendingTokenIntroduction.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetPendingTokenIntroduction {
    return {
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction) ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction) : undefined
    };
  },
  toJSON(message: EventSetPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetPendingTokenIntroduction>): EventSetPendingTokenIntroduction {
    const message = createBaseEventSetPendingTokenIntroduction();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction) : undefined;
    return message;
  },
  fromAmino(object: EventSetPendingTokenIntroductionAmino): EventSetPendingTokenIntroduction {
    const message = createBaseEventSetPendingTokenIntroduction();
    if (object.pending_token_introduction !== undefined && object.pending_token_introduction !== null) {
      message.pendingTokenIntroduction = PendingTokenIntroduction.fromAmino(object.pending_token_introduction);
    }
    return message;
  },
  toAmino(message: EventSetPendingTokenIntroduction, useInterfaces: boolean = true): EventSetPendingTokenIntroductionAmino {
    const obj: any = {};
    obj.pending_token_introduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toAmino(message.pendingTokenIntroduction, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetPendingTokenIntroductionAminoMsg): EventSetPendingTokenIntroduction {
    return EventSetPendingTokenIntroduction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPendingTokenIntroductionProtoMsg, useInterfaces: boolean = true): EventSetPendingTokenIntroduction {
    return EventSetPendingTokenIntroduction.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetPendingTokenIntroduction): Uint8Array {
    return EventSetPendingTokenIntroduction.encode(message).finish();
  },
  toProtoMsg(message: EventSetPendingTokenIntroduction): EventSetPendingTokenIntroductionProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetPendingTokenIntroduction",
      value: EventSetPendingTokenIntroduction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPendingTokenIntroduction.typeUrl, EventSetPendingTokenIntroduction);
function createBaseEventRemovePendingTokenIntroduction(): EventRemovePendingTokenIntroduction {
  return {
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const EventRemovePendingTokenIntroduction = {
  typeUrl: "/pryzm.amm.v1.EventRemovePendingTokenIntroduction",
  is(o: any): o is EventRemovePendingTokenIntroduction {
    return o && (o.$typeUrl === EventRemovePendingTokenIntroduction.typeUrl || typeof o.assetId === "string" && typeof o.targetPoolId === "bigint");
  },
  isSDK(o: any): o is EventRemovePendingTokenIntroductionSDKType {
    return o && (o.$typeUrl === EventRemovePendingTokenIntroduction.typeUrl || typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  isAmino(o: any): o is EventRemovePendingTokenIntroductionAmino {
    return o && (o.$typeUrl === EventRemovePendingTokenIntroduction.typeUrl || typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  encode(message: EventRemovePendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventRemovePendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemovePendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.targetPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemovePendingTokenIntroduction {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventRemovePendingTokenIntroduction): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventRemovePendingTokenIntroduction>): EventRemovePendingTokenIntroduction {
    const message = createBaseEventRemovePendingTokenIntroduction();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventRemovePendingTokenIntroductionAmino): EventRemovePendingTokenIntroduction {
    const message = createBaseEventRemovePendingTokenIntroduction();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.target_pool_id !== undefined && object.target_pool_id !== null) {
      message.targetPoolId = BigInt(object.target_pool_id);
    }
    return message;
  },
  toAmino(message: EventRemovePendingTokenIntroduction, useInterfaces: boolean = true): EventRemovePendingTokenIntroductionAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.target_pool_id = message.targetPoolId ? message.targetPoolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRemovePendingTokenIntroductionAminoMsg): EventRemovePendingTokenIntroduction {
    return EventRemovePendingTokenIntroduction.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemovePendingTokenIntroductionProtoMsg, useInterfaces: boolean = true): EventRemovePendingTokenIntroduction {
    return EventRemovePendingTokenIntroduction.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventRemovePendingTokenIntroduction): Uint8Array {
    return EventRemovePendingTokenIntroduction.encode(message).finish();
  },
  toProtoMsg(message: EventRemovePendingTokenIntroduction): EventRemovePendingTokenIntroductionProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventRemovePendingTokenIntroduction",
      value: EventRemovePendingTokenIntroduction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRemovePendingTokenIntroduction.typeUrl, EventRemovePendingTokenIntroduction);
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.amm.v1.EventSetParams",
  is(o: any): o is EventSetParams {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is EventSetParamsSDKType {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is EventSetParamsAmino {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isAmino(o.params));
  },
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams, useInterfaces: boolean = true): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg, useInterfaces: boolean = true): EventSetParams {
    return EventSetParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);