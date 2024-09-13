import { Swap, SwapAmino, SwapSDKType, SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TokenWeight, TokenWeightAmino, TokenWeightSDKType } from "./token_weight";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { PairMatchProposal, PairMatchProposalAmino, PairMatchProposalSDKType } from "./pair_match_proposal";
import { TokenCircuitBreakerSettings, TokenCircuitBreakerSettingsAmino, TokenCircuitBreakerSettingsSDKType } from "./token_circuit_breaker_settings";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { GeneralPoolParameters, GeneralPoolParametersAmino, GeneralPoolParametersSDKType, YammParameters, YammParametersAmino, YammParametersSDKType, OrderParameters, OrderParametersAmino, OrderParametersSDKType, AuthorizationParameters, AuthorizationParametersAmino, AuthorizationParametersSDKType, GasParameters, GasParametersAmino, GasParametersSDKType } from "./params";
import { PoolPauseWindow, PoolPauseWindowAmino, PoolPauseWindowSDKType } from "./pool";
import { DisabledOrderPair, DisabledOrderPairAmino, DisabledOrderPairSDKType, Order, OrderAmino, OrderSDKType } from "./order";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface MsgSingleSwap {
  creator: string;
  swap: Swap;
  maxAmountIn?: string;
  minAmountOut?: string;
}
export interface MsgSingleSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwap";
  value: Uint8Array;
}
export interface MsgSingleSwapAmino {
  creator?: string;
  swap: SwapAmino;
  max_amount_in?: string;
  min_amount_out?: string;
}
export interface MsgSingleSwapAminoMsg {
  type: "pryzm/amm/v1/SingleSwap";
  value: MsgSingleSwapAmino;
}
export interface MsgSingleSwapSDKType {
  creator: string;
  swap: SwapSDKType;
  max_amount_in?: string;
  min_amount_out?: string;
}
export interface MsgSingleSwapResponse {
  amountOut: Coin;
  amountIn: Coin;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgSingleSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse";
  value: Uint8Array;
}
export interface MsgSingleSwapResponseAmino {
  amount_out?: CoinAmino;
  amount_in?: CoinAmino;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgSingleSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSingleSwapResponse";
  value: MsgSingleSwapResponseAmino;
}
export interface MsgSingleSwapResponseSDKType {
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinAllTokensExactLpt {
  creator: string;
  poolId: bigint;
  lptOut: string;
  /** is not casted to coins, to allow for zero limits */
  maxAmountsIn: Coin[];
}
export interface MsgJoinAllTokensExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt";
  value: Uint8Array;
}
export interface MsgJoinAllTokensExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_out?: string;
  /** is not casted to coins, to allow for zero limits */
  max_amounts_in: CoinAmino[];
}
export interface MsgJoinAllTokensExactLptAminoMsg {
  type: "pryzm/amm/v1/JoinAllTokensExactLpt";
  value: MsgJoinAllTokensExactLptAmino;
}
export interface MsgJoinAllTokensExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_out: string;
  max_amounts_in: CoinSDKType[];
}
export interface MsgJoinAllTokensExactLptResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgJoinAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface MsgJoinAllTokensExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface MsgJoinAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse";
  value: MsgJoinAllTokensExactLptResponseAmino;
}
export interface MsgJoinAllTokensExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgJoinTokenExactLpt {
  creator: string;
  poolId: bigint;
  lptOut: string;
  tokenIn: string;
  maxAmountIn?: string;
}
export interface MsgJoinTokenExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt";
  value: Uint8Array;
}
export interface MsgJoinTokenExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_out?: string;
  token_in?: string;
  max_amount_in?: string;
}
export interface MsgJoinTokenExactLptAminoMsg {
  type: "pryzm/amm/v1/JoinTokenExactLpt";
  value: MsgJoinTokenExactLptAmino;
}
export interface MsgJoinTokenExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_out: string;
  token_in: string;
  max_amount_in?: string;
}
export interface MsgJoinTokenExactLptResponse {
  lptOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgJoinTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse";
  value: Uint8Array;
}
export interface MsgJoinTokenExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amount_in?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgJoinTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse";
  value: MsgJoinTokenExactLptResponseAmino;
}
export interface MsgJoinTokenExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgJoinExactTokens {
  creator: string;
  poolId: bigint;
  amountsIn: Coin[];
  minLptOut?: string;
}
export interface MsgJoinExactTokensProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens";
  value: Uint8Array;
}
export interface MsgJoinExactTokensAmino {
  creator?: string;
  pool_id: string;
  amounts_in?: CoinAmino[];
  min_lpt_out?: string;
}
export interface MsgJoinExactTokensAminoMsg {
  type: "pryzm/amm/v1/JoinExactTokens";
  value: MsgJoinExactTokensAmino;
}
export interface MsgJoinExactTokensSDKType {
  creator: string;
  pool_id: bigint;
  amounts_in: CoinSDKType[];
  min_lpt_out?: string;
}
export interface MsgJoinExactTokensResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgJoinExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse";
  value: Uint8Array;
}
export interface MsgJoinExactTokensResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgJoinExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgJoinExactTokensResponse";
  value: MsgJoinExactTokensResponseAmino;
}
export interface MsgJoinExactTokensResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgZeroImpactJoinYamm {
  creator: string;
  cAmountIn: Coin;
  minLptOut?: string;
}
export interface MsgZeroImpactJoinYammProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm";
  value: Uint8Array;
}
export interface MsgZeroImpactJoinYammAmino {
  creator?: string;
  c_amount_in?: CoinAmino;
  min_lpt_out?: string;
}
export interface MsgZeroImpactJoinYammAminoMsg {
  type: "pryzm/amm/v1/ZeroImpactJoinYamm";
  value: MsgZeroImpactJoinYammAmino;
}
export interface MsgZeroImpactJoinYammSDKType {
  creator: string;
  c_amount_in: CoinSDKType;
  min_lpt_out?: string;
}
export interface MsgZeroImpactJoinYammResponse {
  lptOut: Coin;
  yOut: Coin[];
  refractFee: Coin;
  joinProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgZeroImpactJoinYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse";
  value: Uint8Array;
}
export interface MsgZeroImpactJoinYammResponseAmino {
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  refract_fee?: CoinAmino;
  join_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgZeroImpactJoinYammResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse";
  value: MsgZeroImpactJoinYammResponseAmino;
}
export interface MsgZeroImpactJoinYammResponseSDKType {
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  refract_fee: CoinSDKType;
  join_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgExitExactTokens {
  creator: string;
  poolId: bigint;
  amountsOut: Coin[];
  maxLptIn?: string;
}
export interface MsgExitExactTokensProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokens";
  value: Uint8Array;
}
export interface MsgExitExactTokensAmino {
  creator?: string;
  pool_id: string;
  amounts_out?: CoinAmino[];
  max_lpt_in?: string;
}
export interface MsgExitExactTokensAminoMsg {
  type: "pryzm/amm/v1/ExitExactTokens";
  value: MsgExitExactTokensAmino;
}
export interface MsgExitExactTokensSDKType {
  creator: string;
  pool_id: bigint;
  amounts_out: CoinSDKType[];
  max_lpt_in?: string;
}
export interface MsgExitExactTokensResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface MsgExitExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse";
  value: Uint8Array;
}
export interface MsgExitExactTokensResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
}
export interface MsgExitExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitExactTokensResponse";
  value: MsgExitExactTokensResponseAmino;
}
export interface MsgExitExactTokensResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface MsgExitTokenExactLpt {
  creator: string;
  poolId: bigint;
  lptIn: string;
  tokenOut: string;
  minAmountOut?: string;
}
export interface MsgExitTokenExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt";
  value: Uint8Array;
}
export interface MsgExitTokenExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  token_out?: string;
  min_amount_out?: string;
}
export interface MsgExitTokenExactLptAminoMsg {
  type: "pryzm/amm/v1/ExitTokenExactLpt";
  value: MsgExitTokenExactLptAmino;
}
export interface MsgExitTokenExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: string;
  token_out: string;
  min_amount_out?: string;
}
export interface MsgExitTokenExactLptResponse {
  lptIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface MsgExitTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse";
  value: Uint8Array;
}
export interface MsgExitTokenExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface MsgExitTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitTokenExactLptResponse";
  value: MsgExitTokenExactLptResponseAmino;
}
export interface MsgExitTokenExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface MsgExitAllTokensExactLpt {
  creator: string;
  poolId: bigint;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgExitAllTokensExactLptProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt";
  value: Uint8Array;
}
export interface MsgExitAllTokensExactLptAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  min_amounts_out: CoinAmino[];
}
export interface MsgExitAllTokensExactLptAminoMsg {
  type: "pryzm/amm/v1/ExitAllTokensExactLpt";
  value: MsgExitAllTokensExactLptAmino;
}
export interface MsgExitAllTokensExactLptSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgExitAllTokensExactLptResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
}
export interface MsgExitAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface MsgExitAllTokensExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
}
export interface MsgExitAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse";
  value: MsgExitAllTokensExactLptResponseAmino;
}
export interface MsgExitAllTokensExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
}
export interface CreateWeightedPoolToken {
  denom: string;
  normalizedWeight: string;
}
export interface CreateWeightedPoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken";
  value: Uint8Array;
}
export interface CreateWeightedPoolTokenAmino {
  denom?: string;
  normalized_weight?: string;
}
export interface CreateWeightedPoolTokenAminoMsg {
  type: "/pryzm.amm.v1.CreateWeightedPoolToken";
  value: CreateWeightedPoolTokenAmino;
}
export interface CreateWeightedPoolTokenSDKType {
  denom: string;
  normalized_weight: string;
}
export interface MsgCreateWeightedPool {
  creator: string;
  name: string;
  swapFeeRatio: string;
  pauseWindowDurationMillis: bigint;
  pauseBufferDurationMillis: bigint;
  tokens: CreateWeightedPoolToken[];
  /** if not empty, only these addresses can initialize the pool */
  initializationAllowList: string[];
  /**
   * if the creator is admin, they can create pools owned by governance
   * NOTE: when public pool creation is not allowed, admin must set this to true
   * NOTE: governance can leave this to false, as it already is the creator of the msg
   */
  forceGovOwner: boolean;
  admins: string[];
  pauseAllowList: string[];
}
export interface MsgCreateWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool";
  value: Uint8Array;
}
export interface MsgCreateWeightedPoolAmino {
  creator?: string;
  name?: string;
  swap_fee_ratio?: string;
  pause_window_duration_millis: string;
  pause_buffer_duration_millis: string;
  tokens?: CreateWeightedPoolTokenAmino[];
  /** if not empty, only these addresses can initialize the pool */
  initialization_allow_list: string[];
  /**
   * if the creator is admin, they can create pools owned by governance
   * NOTE: when public pool creation is not allowed, admin must set this to true
   * NOTE: governance can leave this to false, as it already is the creator of the msg
   */
  force_gov_owner?: boolean;
  admins: string[];
  pause_allow_list: string[];
}
export interface MsgCreateWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/CreateWeightedPool";
  value: MsgCreateWeightedPoolAmino;
}
export interface MsgCreateWeightedPoolSDKType {
  creator: string;
  name: string;
  swap_fee_ratio: string;
  pause_window_duration_millis: bigint;
  pause_buffer_duration_millis: bigint;
  tokens: CreateWeightedPoolTokenSDKType[];
  initialization_allow_list: string[];
  force_gov_owner: boolean;
  admins: string[];
  pause_allow_list: string[];
}
export interface MsgCreateWeightedPoolResponse {
  poolId: bigint;
}
export interface MsgCreateWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgCreateWeightedPoolResponseAmino {
  pool_id?: string;
}
export interface MsgCreateWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse";
  value: MsgCreateWeightedPoolResponseAmino;
}
export interface MsgCreateWeightedPoolResponseSDKType {
  pool_id: bigint;
}
export interface MsgUpdateSwapFee {
  creator: string;
  poolId: bigint;
  swapFeeRatio: string;
}
export interface MsgUpdateSwapFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee";
  value: Uint8Array;
}
export interface MsgUpdateSwapFeeAmino {
  creator?: string;
  pool_id: string;
  swap_fee_ratio?: string;
}
export interface MsgUpdateSwapFeeAminoMsg {
  type: "pryzm/amm/v1/UpdateSwapFee";
  value: MsgUpdateSwapFeeAmino;
}
export interface MsgUpdateSwapFeeSDKType {
  creator: string;
  pool_id: bigint;
  swap_fee_ratio: string;
}
export interface MsgUpdateSwapFeeResponse {}
export interface MsgUpdateSwapFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse";
  value: Uint8Array;
}
export interface MsgUpdateSwapFeeResponseAmino {}
export interface MsgUpdateSwapFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse";
  value: MsgUpdateSwapFeeResponseAmino;
}
export interface MsgUpdateSwapFeeResponseSDKType {}
export interface MsgInitializePool {
  creator: string;
  poolId: bigint;
  amountsIn: Coin[];
}
export interface MsgInitializePoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgInitializePool";
  value: Uint8Array;
}
export interface MsgInitializePoolAmino {
  creator?: string;
  pool_id: string;
  amounts_in?: CoinAmino[];
}
export interface MsgInitializePoolAminoMsg {
  type: "pryzm/amm/v1/InitializePool";
  value: MsgInitializePoolAmino;
}
export interface MsgInitializePoolSDKType {
  creator: string;
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface MsgInitializePoolResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface MsgInitializePoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse";
  value: Uint8Array;
}
export interface MsgInitializePoolResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface MsgInitializePoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgInitializePoolResponse";
  value: MsgInitializePoolResponseAmino;
}
export interface MsgInitializePoolResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface MsgUpdateWeights {
  creator: string;
  poolId: bigint;
  tokenWeights: TokenWeight[];
  startTimeUnixMillis: bigint;
  endTimeUnixMillis: bigint;
}
export interface MsgUpdateWeightsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeights";
  value: Uint8Array;
}
export interface MsgUpdateWeightsAmino {
  creator?: string;
  pool_id: string;
  token_weights?: TokenWeightAmino[];
  start_time_unix_millis: string;
  end_time_unix_millis: string;
}
export interface MsgUpdateWeightsAminoMsg {
  type: "pryzm/amm/v1/UpdateWeights";
  value: MsgUpdateWeightsAmino;
}
export interface MsgUpdateWeightsSDKType {
  creator: string;
  pool_id: bigint;
  token_weights: TokenWeightSDKType[];
  start_time_unix_millis: bigint;
  end_time_unix_millis: bigint;
}
export interface MsgUpdateWeightsResponse {}
export interface MsgUpdateWeightsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse";
  value: Uint8Array;
}
export interface MsgUpdateWeightsResponseAmino {}
export interface MsgUpdateWeightsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateWeightsResponse";
  value: MsgUpdateWeightsResponseAmino;
}
export interface MsgUpdateWeightsResponseSDKType {}
export interface MsgBatchSwap {
  creator: string;
  swapType: SwapType;
  steps: SwapStep[];
  minAmountsOut: Coin[];
  /** is not casted to coins, to allow for zero limits */
  maxAmountsIn: Coin[];
}
export interface MsgBatchSwapProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwap";
  value: Uint8Array;
}
export interface MsgBatchSwapAmino {
  creator?: string;
  swap_type: SwapType;
  steps?: SwapStepAmino[];
  min_amounts_out: CoinAmino[];
  /** is not casted to coins, to allow for zero limits */
  max_amounts_in: CoinAmino[];
}
export interface MsgBatchSwapAminoMsg {
  type: "pryzm/amm/v1/BatchSwap";
  value: MsgBatchSwapAmino;
}
export interface MsgBatchSwapSDKType {
  creator: string;
  swap_type: SwapType;
  steps: SwapStepSDKType[];
  min_amounts_out: CoinSDKType[];
  max_amounts_in: CoinSDKType[];
}
export interface MsgBatchSwapResponse {
  amountsIn: Coin[];
  amountsOut: Coin[];
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  swapProtocolFee: Coin[];
  joinExitProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface MsgBatchSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse";
  value: Uint8Array;
}
export interface MsgBatchSwapResponseAmino {
  amounts_in?: CoinAmino[];
  amounts_out?: CoinAmino[];
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  swap_protocol_fee?: CoinAmino[];
  join_exit_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface MsgBatchSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgBatchSwapResponse";
  value: MsgBatchSwapResponseAmino;
}
export interface MsgBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface MsgSetYammConfiguration {
  creator: string;
  configuration: YammConfiguration;
}
export interface MsgSetYammConfigurationProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration";
  value: Uint8Array;
}
export interface MsgSetYammConfigurationAmino {
  creator?: string;
  configuration: YammConfigurationAmino;
}
export interface MsgSetYammConfigurationAminoMsg {
  type: "pryzm/amm/v1/SetYammConfiguration";
  value: MsgSetYammConfigurationAmino;
}
export interface MsgSetYammConfigurationSDKType {
  creator: string;
  configuration: YammConfigurationSDKType;
}
export interface MsgSetYammConfigurationResponse {}
export interface MsgSetYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse";
  value: Uint8Array;
}
export interface MsgSetYammConfigurationResponseAmino {}
export interface MsgSetYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetYammConfigurationResponse";
  value: MsgSetYammConfigurationResponseAmino;
}
export interface MsgSetYammConfigurationResponseSDKType {}
export interface MsgWhitelistRoute {
  authority: string;
  whitelistedRoute: WhitelistedRoute;
}
export interface MsgWhitelistRouteProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute";
  value: Uint8Array;
}
export interface MsgWhitelistRouteAmino {
  authority?: string;
  whitelisted_route: WhitelistedRouteAmino;
}
export interface MsgWhitelistRouteAminoMsg {
  type: "pryzm/amm/v1/WhitelistRoute";
  value: MsgWhitelistRouteAmino;
}
export interface MsgWhitelistRouteSDKType {
  authority: string;
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface MsgWhitelistRouteResponse {}
export interface MsgWhitelistRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse";
  value: Uint8Array;
}
export interface MsgWhitelistRouteResponseAmino {}
export interface MsgWhitelistRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgWhitelistRouteResponse";
  value: MsgWhitelistRouteResponseAmino;
}
export interface MsgWhitelistRouteResponseSDKType {}
export interface MsgSetWhitelistedRouteEnabled {
  authority: string;
  tokenIn: string;
  tokenOut: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled";
  value: Uint8Array;
}
export interface MsgSetWhitelistedRouteEnabledAmino {
  authority?: string;
  token_in?: string;
  token_out?: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledAminoMsg {
  type: "pryzm/amm/v1/SetWhitelistedRouteEnabled";
  value: MsgSetWhitelistedRouteEnabledAmino;
}
export interface MsgSetWhitelistedRouteEnabledSDKType {
  authority: string;
  token_in: string;
  token_out: string;
  enabled: boolean;
}
export interface MsgSetWhitelistedRouteEnabledResponse {}
export interface MsgSetWhitelistedRouteEnabledResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse";
  value: Uint8Array;
}
export interface MsgSetWhitelistedRouteEnabledResponseAmino {}
export interface MsgSetWhitelistedRouteEnabledResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse";
  value: MsgSetWhitelistedRouteEnabledResponseAmino;
}
export interface MsgSetWhitelistedRouteEnabledResponseSDKType {}
export interface MsgSubmitOrder {
  creator: string;
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  allowMatching: boolean;
  amountPerStep: string;
  totalAmount: string;
  millisInterval: bigint;
  maxStepSpotPrice: string;
  maxMatchingSpotPrice?: string;
}
export interface MsgSubmitOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrder";
  value: Uint8Array;
}
export interface MsgSubmitOrderAmino {
  creator?: string;
  pool_id: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step?: string;
  total_amount?: string;
  millis_interval: string;
  max_step_spot_price?: string;
  max_matching_spot_price?: string;
}
export interface MsgSubmitOrderAminoMsg {
  type: "pryzm/amm/v1/SubmitOrder";
  value: MsgSubmitOrderAmino;
}
export interface MsgSubmitOrderSDKType {
  creator: string;
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  allow_matching: boolean;
  amount_per_step: string;
  total_amount: string;
  millis_interval: bigint;
  max_step_spot_price: string;
  max_matching_spot_price?: string;
}
export interface MsgSubmitOrderResponse {
  order: Order;
}
export interface MsgSubmitOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse";
  value: Uint8Array;
}
export interface MsgSubmitOrderResponseAmino {
  order?: OrderAmino;
}
export interface MsgSubmitOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSubmitOrderResponse";
  value: MsgSubmitOrderResponseAmino;
}
export interface MsgSubmitOrderResponseSDKType {
  order: OrderSDKType;
}
export interface MsgCancelOrder {
  creator: string;
  id: bigint;
}
export interface MsgCancelOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrder";
  value: Uint8Array;
}
export interface MsgCancelOrderAmino {
  creator?: string;
  id: string;
}
export interface MsgCancelOrderAminoMsg {
  type: "pryzm/amm/v1/CancelOrder";
  value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
  creator: string;
  id: bigint;
}
export interface MsgCancelOrderResponse {
  withdrawnDeposit: Coin;
}
export interface MsgCancelOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {
  withdrawn_deposit?: CoinAmino;
}
export interface MsgCancelOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCancelOrderResponse";
  value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {
  withdrawn_deposit: CoinSDKType;
}
export interface MsgProposeMatch {
  creator: string;
  pairs: PairMatchProposal[];
}
export interface MsgProposeMatchProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatch";
  value: Uint8Array;
}
export interface MsgProposeMatchAmino {
  creator?: string;
  pairs: PairMatchProposalAmino[];
}
export interface MsgProposeMatchAminoMsg {
  type: "pryzm/amm/v1/ProposeMatch";
  value: MsgProposeMatchAmino;
}
export interface MsgProposeMatchSDKType {
  creator: string;
  pairs: PairMatchProposalSDKType[];
}
export interface MsgProposeMatchResponse {
  proposerReward: Coin[];
}
export interface MsgProposeMatchResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse";
  value: Uint8Array;
}
export interface MsgProposeMatchResponseAmino {
  proposer_reward?: CoinAmino[];
}
export interface MsgProposeMatchResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgProposeMatchResponse";
  value: MsgProposeMatchResponseAmino;
}
export interface MsgProposeMatchResponseSDKType {
  proposer_reward: CoinSDKType[];
}
export interface MsgSetCircuitBreakers {
  creator: string;
  poolId: bigint;
  tokenCircuitBreakers: TokenCircuitBreakerSettings[];
}
export interface MsgSetCircuitBreakersProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers";
  value: Uint8Array;
}
export interface MsgSetCircuitBreakersAmino {
  creator?: string;
  pool_id: string;
  token_circuit_breakers: TokenCircuitBreakerSettingsAmino[];
}
export interface MsgSetCircuitBreakersAminoMsg {
  type: "pryzm/amm/v1/SetCircuitBreakers";
  value: MsgSetCircuitBreakersAmino;
}
export interface MsgSetCircuitBreakersSDKType {
  creator: string;
  pool_id: bigint;
  token_circuit_breakers: TokenCircuitBreakerSettingsSDKType[];
}
export interface MsgSetCircuitBreakersResponse {}
export interface MsgSetCircuitBreakersResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse";
  value: Uint8Array;
}
export interface MsgSetCircuitBreakersResponseAmino {}
export interface MsgSetCircuitBreakersResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse";
  value: MsgSetCircuitBreakersResponseAmino;
}
export interface MsgSetCircuitBreakersResponseSDKType {}
export interface MsgSetRecoveryMode {
  authority: string;
  poolId: bigint;
  recoveryMode: boolean;
}
export interface MsgSetRecoveryModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode";
  value: Uint8Array;
}
export interface MsgSetRecoveryModeAmino {
  authority?: string;
  pool_id: string;
  recovery_mode: boolean;
}
export interface MsgSetRecoveryModeAminoMsg {
  type: "pryzm/amm/v1/SetRecoveryMode";
  value: MsgSetRecoveryModeAmino;
}
export interface MsgSetRecoveryModeSDKType {
  authority: string;
  pool_id: bigint;
  recovery_mode: boolean;
}
export interface MsgSetRecoveryModeResponse {}
export interface MsgSetRecoveryModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse";
  value: Uint8Array;
}
export interface MsgSetRecoveryModeResponseAmino {}
export interface MsgSetRecoveryModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetRecoveryModeResponse";
  value: MsgSetRecoveryModeResponseAmino;
}
export interface MsgSetRecoveryModeResponseSDKType {}
export interface MsgRecoveryExit {
  creator: string;
  poolId: bigint;
  lptIn: string;
  minAmountsOut: Coin[];
}
export interface MsgRecoveryExitProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExit";
  value: Uint8Array;
}
export interface MsgRecoveryExitAmino {
  creator?: string;
  pool_id: string;
  lpt_in?: string;
  min_amounts_out: CoinAmino[];
}
export interface MsgRecoveryExitAminoMsg {
  type: "pryzm/amm/v1/RecoveryExit";
  value: MsgRecoveryExitAmino;
}
export interface MsgRecoveryExitSDKType {
  creator: string;
  pool_id: bigint;
  lpt_in: string;
  min_amounts_out: CoinSDKType[];
}
export interface MsgRecoveryExitResponse {
  lptIn: Coin;
  amountsOut: Coin[];
}
export interface MsgRecoveryExitResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse";
  value: Uint8Array;
}
export interface MsgRecoveryExitResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
}
export interface MsgRecoveryExitResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgRecoveryExitResponse";
  value: MsgRecoveryExitResponseAmino;
}
export interface MsgRecoveryExitResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
}
export interface MsgSetPauseMode {
  creator: string;
  poolId: bigint;
  pauseMode: boolean;
}
export interface MsgSetPauseModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseMode";
  value: Uint8Array;
}
export interface MsgSetPauseModeAmino {
  creator?: string;
  pool_id: string;
  pause_mode: boolean;
}
export interface MsgSetPauseModeAminoMsg {
  type: "pryzm/amm/v1/SetPauseMode";
  value: MsgSetPauseModeAmino;
}
export interface MsgSetPauseModeSDKType {
  creator: string;
  pool_id: bigint;
  pause_mode: boolean;
}
export interface MsgSetPauseModeResponse {}
export interface MsgSetPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse";
  value: Uint8Array;
}
export interface MsgSetPauseModeResponseAmino {}
export interface MsgSetPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseModeResponse";
  value: MsgSetPauseModeResponseAmino;
}
export interface MsgSetPauseModeResponseSDKType {}
export interface MsgSetVaultPauseMode {
  authority: string;
  pauseMode: boolean;
}
export interface MsgSetVaultPauseModeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode";
  value: Uint8Array;
}
export interface MsgSetVaultPauseModeAmino {
  authority?: string;
  pause_mode: boolean;
}
export interface MsgSetVaultPauseModeAminoMsg {
  type: "pryzm/amm/v1/SetVaultPauseMode";
  value: MsgSetVaultPauseModeAmino;
}
export interface MsgSetVaultPauseModeSDKType {
  authority: string;
  pause_mode: boolean;
}
export interface MsgSetVaultPauseModeResponse {}
export interface MsgSetVaultPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse";
  value: Uint8Array;
}
export interface MsgSetVaultPauseModeResponseAmino {}
export interface MsgSetVaultPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse";
  value: MsgSetVaultPauseModeResponseAmino;
}
export interface MsgSetVaultPauseModeResponseSDKType {}
export interface MsgCreateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgCreateOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair";
  value: Uint8Array;
}
export interface MsgCreateOraclePricePairAmino {
  authority?: string;
  oracle_price_pair: OraclePricePairAmino;
}
export interface MsgCreateOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/CreateOraclePricePair";
  value: MsgCreateOraclePricePairAmino;
}
export interface MsgCreateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgCreateOraclePricePairResponse {}
export interface MsgCreateOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgCreateOraclePricePairResponseAmino {}
export interface MsgCreateOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse";
  value: MsgCreateOraclePricePairResponseAmino;
}
export interface MsgCreateOraclePricePairResponseSDKType {}
export interface MsgUpdateOraclePricePair {
  authority: string;
  oraclePricePair: OraclePricePair;
}
export interface MsgUpdateOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair";
  value: Uint8Array;
}
export interface MsgUpdateOraclePricePairAmino {
  authority?: string;
  oracle_price_pair: OraclePricePairAmino;
}
export interface MsgUpdateOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/UpdateOraclePricePair";
  value: MsgUpdateOraclePricePairAmino;
}
export interface MsgUpdateOraclePricePairSDKType {
  authority: string;
  oracle_price_pair: OraclePricePairSDKType;
}
export interface MsgUpdateOraclePricePairResponse {}
export interface MsgUpdateOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgUpdateOraclePricePairResponseAmino {}
export interface MsgUpdateOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse";
  value: MsgUpdateOraclePricePairResponseAmino;
}
export interface MsgUpdateOraclePricePairResponseSDKType {}
export interface MsgDeleteOraclePricePair {
  authority: string;
  assetId: string;
}
export interface MsgDeleteOraclePricePairProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair";
  value: Uint8Array;
}
export interface MsgDeleteOraclePricePairAmino {
  authority?: string;
  asset_id?: string;
}
export interface MsgDeleteOraclePricePairAminoMsg {
  type: "pryzm/amm/v1/DeleteOraclePricePair";
  value: MsgDeleteOraclePricePairAmino;
}
export interface MsgDeleteOraclePricePairSDKType {
  authority: string;
  asset_id: string;
}
export interface MsgDeleteOraclePricePairResponse {}
export interface MsgDeleteOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse";
  value: Uint8Array;
}
export interface MsgDeleteOraclePricePairResponseAmino {}
export interface MsgDeleteOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse";
  value: MsgDeleteOraclePricePairResponseAmino;
}
export interface MsgDeleteOraclePricePairResponseSDKType {}
export interface MsgSetSwapProtocolFee {
  authority: string;
  poolId: bigint;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swapProtocolFee?: string;
}
export interface MsgSetSwapProtocolFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee";
  value: Uint8Array;
}
export interface MsgSetSwapProtocolFeeAmino {
  authority?: string;
  pool_id: string;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  swap_protocol_fee?: string;
}
export interface MsgSetSwapProtocolFeeAminoMsg {
  type: "pryzm/amm/v1/SetSwapProtocolFee";
  value: MsgSetSwapProtocolFeeAmino;
}
export interface MsgSetSwapProtocolFeeSDKType {
  authority: string;
  pool_id: bigint;
  swap_protocol_fee?: string;
}
export interface MsgSetSwapProtocolFeeResponse {}
export interface MsgSetSwapProtocolFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse";
  value: Uint8Array;
}
export interface MsgSetSwapProtocolFeeResponseAmino {}
export interface MsgSetSwapProtocolFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse";
  value: MsgSetSwapProtocolFeeResponseAmino;
}
export interface MsgSetSwapProtocolFeeResponseSDKType {}
export interface MsgSetJoinExitProtocolFee {
  authority: string;
  poolId: bigint;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  joinExitProtocolFee?: string;
}
export interface MsgSetJoinExitProtocolFeeProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee";
  value: Uint8Array;
}
export interface MsgSetJoinExitProtocolFeeAmino {
  authority?: string;
  pool_id: string;
  /** if protocol fee parameters are nil, then the values are read from treasury module parameters */
  join_exit_protocol_fee?: string;
}
export interface MsgSetJoinExitProtocolFeeAminoMsg {
  type: "pryzm/amm/v1/SetJoinExitProtocolFee";
  value: MsgSetJoinExitProtocolFeeAmino;
}
export interface MsgSetJoinExitProtocolFeeSDKType {
  authority: string;
  pool_id: bigint;
  join_exit_protocol_fee?: string;
}
export interface MsgSetJoinExitProtocolFeeResponse {}
export interface MsgSetJoinExitProtocolFeeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse";
  value: Uint8Array;
}
export interface MsgSetJoinExitProtocolFeeResponseAmino {}
export interface MsgSetJoinExitProtocolFeeResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse";
  value: MsgSetJoinExitProtocolFeeResponseAmino;
}
export interface MsgSetJoinExitProtocolFeeResponseSDKType {}
export interface MsgIntroduceYammLpToWeightedPool {
  creator: string;
  weightedPoolId: bigint;
  yammPoolId: bigint;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgIntroduceYammLpToWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool";
  value: Uint8Array;
}
export interface MsgIntroduceYammLpToWeightedPoolAmino {
  creator?: string;
  weighted_pool_id: string;
  yamm_pool_id: string;
  token_normalized_weight?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgIntroduceYammLpToWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/IntroYammLpToWeighted";
  value: MsgIntroduceYammLpToWeightedPoolAmino;
}
export interface MsgIntroduceYammLpToWeightedPoolSDKType {
  creator: string;
  weighted_pool_id: bigint;
  yamm_pool_id: bigint;
  token_normalized_weight: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgIntroduceYammLpToWeightedPoolResponse {}
export interface MsgIntroduceYammLpToWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgIntroduceYammLpToWeightedPoolResponseAmino {}
export interface MsgIntroduceYammLpToWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse";
  value: MsgIntroduceYammLpToWeightedPoolResponseAmino;
}
export interface MsgIntroduceYammLpToWeightedPoolResponseSDKType {}
export interface MsgIntroduceAssetBaseTokenToWeightedPool {
  creator: string;
  weightedPoolId: bigint;
  tokenDenom: string;
  assetId: string;
  tokenNormalizedWeight: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool";
  value: Uint8Array;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolAmino {
  creator?: string;
  weighted_pool_id: string;
  token_denom?: string;
  asset_id?: string;
  token_normalized_weight?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/IntroBaseTokenToWeighted";
  value: MsgIntroduceAssetBaseTokenToWeightedPoolAmino;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolSDKType {
  creator: string;
  weighted_pool_id: bigint;
  token_denom: string;
  asset_id: string;
  token_normalized_weight: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponse {}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino {}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse";
  value: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino;
}
export interface MsgIntroduceAssetBaseTokenToWeightedPoolResponseSDKType {}
export interface MsgCancelPendingTokenIntroduction {
  creator: string;
  assetId: string;
  targetPoolId: bigint;
}
export interface MsgCancelPendingTokenIntroductionProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction";
  value: Uint8Array;
}
export interface MsgCancelPendingTokenIntroductionAmino {
  creator?: string;
  asset_id?: string;
  target_pool_id: string;
}
export interface MsgCancelPendingTokenIntroductionAminoMsg {
  type: "pryzm/amm/v1/CancelPendingTokenIntro";
  value: MsgCancelPendingTokenIntroductionAmino;
}
export interface MsgCancelPendingTokenIntroductionSDKType {
  creator: string;
  asset_id: string;
  target_pool_id: bigint;
}
export interface MsgCancelPendingTokenIntroductionResponse {}
export interface MsgCancelPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface MsgCancelPendingTokenIntroductionResponseAmino {}
export interface MsgCancelPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse";
  value: MsgCancelPendingTokenIntroductionResponseAmino;
}
export interface MsgCancelPendingTokenIntroductionResponseSDKType {}
export interface MsgRemoveTokenFromWeightedPool {
  creator: string;
  poolId: bigint;
  tokenDenom: string;
  virtualBalanceIntervalMillis: bigint;
}
export interface MsgRemoveTokenFromWeightedPoolProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool";
  value: Uint8Array;
}
export interface MsgRemoveTokenFromWeightedPoolAmino {
  creator?: string;
  pool_id: string;
  token_denom?: string;
  virtual_balance_interval_millis: string;
}
export interface MsgRemoveTokenFromWeightedPoolAminoMsg {
  type: "pryzm/amm/v1/RemoveTokenFromWeighted";
  value: MsgRemoveTokenFromWeightedPoolAmino;
}
export interface MsgRemoveTokenFromWeightedPoolSDKType {
  creator: string;
  pool_id: bigint;
  token_denom: string;
  virtual_balance_interval_millis: bigint;
}
export interface MsgRemoveTokenFromWeightedPoolResponse {}
export interface MsgRemoveTokenFromWeightedPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse";
  value: Uint8Array;
}
export interface MsgRemoveTokenFromWeightedPoolResponseAmino {}
export interface MsgRemoveTokenFromWeightedPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse";
  value: MsgRemoveTokenFromWeightedPoolResponseAmino;
}
export interface MsgRemoveTokenFromWeightedPoolResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  generalPoolParameters?: GeneralPoolParameters;
  yammParameters?: YammParameters;
  orderParameters?: OrderParameters;
  authorizationParameters?: AuthorizationParameters;
  gasParameters?: GasParameters;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  general_pool_parameters?: GeneralPoolParametersAmino;
  yamm_parameters?: YammParametersAmino;
  order_parameters?: OrderParametersAmino;
  authorization_parameters?: AuthorizationParametersAmino;
  gas_parameters?: GasParametersAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/amm/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  general_pool_parameters?: GeneralPoolParametersSDKType;
  yamm_parameters?: YammParametersSDKType;
  order_parameters?: OrderParametersSDKType;
  authorization_parameters?: AuthorizationParametersSDKType;
  gas_parameters?: GasParametersSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgAddMaturityToYamm {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm";
  value: Uint8Array;
}
export interface MsgAddMaturityToYammAmino {
  authority?: string;
  assetId?: string;
  maturitySymbol?: string;
}
export interface MsgAddMaturityToYammAminoMsg {
  type: "pryzm/amm/v1/AddMaturityToYamm";
  value: MsgAddMaturityToYammAmino;
}
export interface MsgAddMaturityToYammSDKType {
  authority: string;
  assetId: string;
  maturitySymbol: string;
}
export interface MsgAddMaturityToYammResponse {}
export interface MsgAddMaturityToYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse";
  value: Uint8Array;
}
export interface MsgAddMaturityToYammResponseAmino {}
export interface MsgAddMaturityToYammResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgAddMaturityToYammResponse";
  value: MsgAddMaturityToYammResponseAmino;
}
export interface MsgAddMaturityToYammResponseSDKType {}
export interface MsgSetInitializationAllowList {
  creator: string;
  poolId: bigint;
  initializationAllowList: string[];
}
export interface MsgSetInitializationAllowListProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList";
  value: Uint8Array;
}
export interface MsgSetInitializationAllowListAmino {
  creator?: string;
  pool_id: string;
  initialization_allow_list: string[];
}
export interface MsgSetInitializationAllowListAminoMsg {
  type: "pryzm/amm/v1/SetInitializationAllowList";
  value: MsgSetInitializationAllowListAmino;
}
export interface MsgSetInitializationAllowListSDKType {
  creator: string;
  pool_id: bigint;
  initialization_allow_list: string[];
}
export interface MsgSetInitializationAllowListResponse {}
export interface MsgSetInitializationAllowListResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse";
  value: Uint8Array;
}
export interface MsgSetInitializationAllowListResponseAmino {}
export interface MsgSetInitializationAllowListResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse";
  value: MsgSetInitializationAllowListResponseAmino;
}
export interface MsgSetInitializationAllowListResponseSDKType {}
export interface MsgSetPoolAdmins {
  creator: string;
  poolId: bigint;
  admins: string[];
}
export interface MsgSetPoolAdminsProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins";
  value: Uint8Array;
}
export interface MsgSetPoolAdminsAmino {
  creator?: string;
  pool_id: string;
  admins: string[];
}
export interface MsgSetPoolAdminsAminoMsg {
  type: "pryzm/amm/v1/SetPoolAdmins";
  value: MsgSetPoolAdminsAmino;
}
export interface MsgSetPoolAdminsSDKType {
  creator: string;
  pool_id: bigint;
  admins: string[];
}
export interface MsgSetPoolAdminsResponse {}
export interface MsgSetPoolAdminsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse";
  value: Uint8Array;
}
export interface MsgSetPoolAdminsResponseAmino {}
export interface MsgSetPoolAdminsResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPoolAdminsResponse";
  value: MsgSetPoolAdminsResponseAmino;
}
export interface MsgSetPoolAdminsResponseSDKType {}
export interface MsgSetPauseAllowList {
  creator: string;
  poolId: bigint;
  pauseAllowList: string[];
}
export interface MsgSetPauseAllowListProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList";
  value: Uint8Array;
}
export interface MsgSetPauseAllowListAmino {
  creator?: string;
  pool_id: string;
  pause_allow_list: string[];
}
export interface MsgSetPauseAllowListAminoMsg {
  type: "pryzm/amm/v1/SetPauseAllowList";
  value: MsgSetPauseAllowListAmino;
}
export interface MsgSetPauseAllowListSDKType {
  creator: string;
  pool_id: bigint;
  pause_allow_list: string[];
}
export interface MsgSetPauseAllowListResponse {}
export interface MsgSetPauseAllowListResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse";
  value: Uint8Array;
}
export interface MsgSetPauseAllowListResponseAmino {}
export interface MsgSetPauseAllowListResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseAllowListResponse";
  value: MsgSetPauseAllowListResponseAmino;
}
export interface MsgSetPauseAllowListResponseSDKType {}
export interface MsgSetPauseWindow {
  authority: string;
  poolId: bigint;
  pauseWindow: PoolPauseWindow;
}
export interface MsgSetPauseWindowProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow";
  value: Uint8Array;
}
export interface MsgSetPauseWindowAmino {
  authority?: string;
  pool_id: string;
  pause_window: PoolPauseWindowAmino;
}
export interface MsgSetPauseWindowAminoMsg {
  type: "pryzm/amm/v1/SetPauseWindow";
  value: MsgSetPauseWindowAmino;
}
export interface MsgSetPauseWindowSDKType {
  authority: string;
  pool_id: bigint;
  pause_window: PoolPauseWindowSDKType;
}
export interface MsgSetPauseWindowResponse {}
export interface MsgSetPauseWindowResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse";
  value: Uint8Array;
}
export interface MsgSetPauseWindowResponseAmino {}
export interface MsgSetPauseWindowResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetPauseWindowResponse";
  value: MsgSetPauseWindowResponseAmino;
}
export interface MsgSetPauseWindowResponseSDKType {}
export interface MsgSetOrderPairDisabled {
  authority: string;
  pair: DisabledOrderPair;
  disabled: boolean;
}
export interface MsgSetOrderPairDisabledProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabled";
  value: Uint8Array;
}
export interface MsgSetOrderPairDisabledAmino {
  authority?: string;
  pair?: DisabledOrderPairAmino;
  disabled?: boolean;
}
export interface MsgSetOrderPairDisabledAminoMsg {
  type: "pryzm/amm/v1/SetOrderPairDisabled";
  value: MsgSetOrderPairDisabledAmino;
}
export interface MsgSetOrderPairDisabledSDKType {
  authority: string;
  pair: DisabledOrderPairSDKType;
  disabled: boolean;
}
export interface MsgSetOrderPairDisabledResponse {}
export interface MsgSetOrderPairDisabledResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabledResponse";
  value: Uint8Array;
}
export interface MsgSetOrderPairDisabledResponseAmino {}
export interface MsgSetOrderPairDisabledResponseAminoMsg {
  type: "/pryzm.amm.v1.MsgSetOrderPairDisabledResponse";
  value: MsgSetOrderPairDisabledResponseAmino;
}
export interface MsgSetOrderPairDisabledResponseSDKType {}
function createBaseMsgSingleSwap(): MsgSingleSwap {
  return {
    creator: "",
    swap: Swap.fromPartial({}),
    maxAmountIn: undefined,
    minAmountOut: undefined
  };
}
export const MsgSingleSwap = {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwap",
  aminoType: "pryzm/amm/v1/SingleSwap",
  is(o: any): o is MsgSingleSwap {
    return o && (o.$typeUrl === MsgSingleSwap.typeUrl || typeof o.creator === "string" && Swap.is(o.swap));
  },
  isSDK(o: any): o is MsgSingleSwapSDKType {
    return o && (o.$typeUrl === MsgSingleSwap.typeUrl || typeof o.creator === "string" && Swap.isSDK(o.swap));
  },
  isAmino(o: any): o is MsgSingleSwapAmino {
    return o && (o.$typeUrl === MsgSingleSwap.typeUrl || typeof o.creator === "string" && Swap.isAmino(o.swap));
  },
  encode(message: MsgSingleSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxAmountIn !== undefined) {
      writer.uint32(26).string(message.maxAmountIn);
    }
    if (message.minAmountOut !== undefined) {
      writer.uint32(34).string(message.minAmountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSingleSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swap = Swap.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.maxAmountIn = reader.string();
          break;
        case 4:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSingleSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined,
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : undefined
    };
  },
  toJSON(message: MsgSingleSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },
  fromPartial(object: Partial<MsgSingleSwap>): MsgSingleSwap {
    const message = createBaseMsgSingleSwap();
    message.creator = object.creator ?? "";
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    message.minAmountOut = object.minAmountOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgSingleSwapAmino): MsgSingleSwap {
    const message = createBaseMsgSingleSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = Swap.fromAmino(object.swap);
    }
    if (object.max_amount_in !== undefined && object.max_amount_in !== null) {
      message.maxAmountIn = object.max_amount_in;
    }
    if (object.min_amount_out !== undefined && object.min_amount_out !== null) {
      message.minAmountOut = object.min_amount_out;
    }
    return message;
  },
  toAmino(message: MsgSingleSwap, useInterfaces: boolean = true): MsgSingleSwapAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.swap = message.swap ? Swap.toAmino(message.swap, useInterfaces) : undefined;
    obj.max_amount_in = message.maxAmountIn === null ? undefined : message.maxAmountIn;
    obj.min_amount_out = message.minAmountOut === null ? undefined : message.minAmountOut;
    return obj;
  },
  fromAminoMsg(object: MsgSingleSwapAminoMsg): MsgSingleSwap {
    return MsgSingleSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSingleSwap, useInterfaces: boolean = true): MsgSingleSwapAminoMsg {
    return {
      type: "pryzm/amm/v1/SingleSwap",
      value: MsgSingleSwap.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSingleSwapProtoMsg, useInterfaces: boolean = true): MsgSingleSwap {
    return MsgSingleSwap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSingleSwap): Uint8Array {
    return MsgSingleSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgSingleSwap): MsgSingleSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSingleSwap",
      value: MsgSingleSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSingleSwap.typeUrl, MsgSingleSwap);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSingleSwap.aminoType, MsgSingleSwap.typeUrl);
function createBaseMsgSingleSwapResponse(): MsgSingleSwapResponse {
  return {
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgSingleSwapResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse",
  is(o: any): o is MsgSingleSwapResponse {
    return o && (o.$typeUrl === MsgSingleSwapResponse.typeUrl || Coin.is(o.amountOut) && Coin.is(o.amountIn) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is MsgSingleSwapResponseSDKType {
    return o && (o.$typeUrl === MsgSingleSwapResponse.typeUrl || Coin.isSDK(o.amount_out) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is MsgSingleSwapResponseAmino {
    return o && (o.$typeUrl === MsgSingleSwapResponse.typeUrl || Coin.isAmino(o.amount_out) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: MsgSingleSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSingleSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSingleSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSingleSwapResponse>): MsgSingleSwapResponse {
    const message = createBaseMsgSingleSwapResponse();
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSingleSwapResponseAmino): MsgSingleSwapResponse {
    const message = createBaseMsgSingleSwapResponse();
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
    return message;
  },
  toAmino(message: MsgSingleSwapResponse, useInterfaces: boolean = true): MsgSingleSwapResponseAmino {
    const obj: any = {};
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSingleSwapResponseAminoMsg): MsgSingleSwapResponse {
    return MsgSingleSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSingleSwapResponseProtoMsg, useInterfaces: boolean = true): MsgSingleSwapResponse {
    return MsgSingleSwapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSingleSwapResponse): Uint8Array {
    return MsgSingleSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSingleSwapResponse): MsgSingleSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSingleSwapResponse",
      value: MsgSingleSwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSingleSwapResponse.typeUrl, MsgSingleSwapResponse);
function createBaseMsgJoinAllTokensExactLpt(): MsgJoinAllTokensExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: "",
    maxAmountsIn: []
  };
}
export const MsgJoinAllTokensExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt",
  aminoType: "pryzm/amm/v1/JoinAllTokensExactLpt",
  is(o: any): o is MsgJoinAllTokensExactLpt {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.lptOut === "string" && Array.isArray(o.maxAmountsIn) && (!o.maxAmountsIn.length || Coin.is(o.maxAmountsIn[0])));
  },
  isSDK(o: any): o is MsgJoinAllTokensExactLptSDKType {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isSDK(o.max_amounts_in[0])));
  },
  isAmino(o: any): o is MsgJoinAllTokensExactLptAmino {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isAmino(o.max_amounts_in[0])));
  },
  encode(message: MsgJoinAllTokensExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinAllTokensExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLpt();
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
          message.lptOut = reader.string();
          break;
        case 4:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinAllTokensExactLpt>): MsgJoinAllTokensExactLpt {
    const message = createBaseMsgJoinAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgJoinAllTokensExactLptAmino): MsgJoinAllTokensExactLpt {
    const message = createBaseMsgJoinAllTokensExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinAllTokensExactLpt, useInterfaces: boolean = true): MsgJoinAllTokensExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut === "" ? undefined : message.lptOut;
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.max_amounts_in = message.maxAmountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinAllTokensExactLptAminoMsg): MsgJoinAllTokensExactLpt {
    return MsgJoinAllTokensExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinAllTokensExactLpt, useInterfaces: boolean = true): MsgJoinAllTokensExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinAllTokensExactLpt",
      value: MsgJoinAllTokensExactLpt.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgJoinAllTokensExactLptProtoMsg, useInterfaces: boolean = true): MsgJoinAllTokensExactLpt {
    return MsgJoinAllTokensExactLpt.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinAllTokensExactLpt): Uint8Array {
    return MsgJoinAllTokensExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinAllTokensExactLpt): MsgJoinAllTokensExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLpt",
      value: MsgJoinAllTokensExactLpt.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinAllTokensExactLpt.typeUrl, MsgJoinAllTokensExactLpt);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgJoinAllTokensExactLpt.aminoType, MsgJoinAllTokensExactLpt.typeUrl);
function createBaseMsgJoinAllTokensExactLptResponse(): MsgJoinAllTokensExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const MsgJoinAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse",
  is(o: any): o is MsgJoinAllTokensExactLptResponse {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLptResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])));
  },
  isSDK(o: any): o is MsgJoinAllTokensExactLptResponseSDKType {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLptResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])));
  },
  isAmino(o: any): o is MsgJoinAllTokensExactLptResponseAmino {
    return o && (o.$typeUrl === MsgJoinAllTokensExactLptResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])));
  },
  encode(message: MsgJoinAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinAllTokensExactLptResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<MsgJoinAllTokensExactLptResponse>): MsgJoinAllTokensExactLptResponse {
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgJoinAllTokensExactLptResponseAmino): MsgJoinAllTokensExactLptResponse {
    const message = createBaseMsgJoinAllTokensExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinAllTokensExactLptResponse, useInterfaces: boolean = true): MsgJoinAllTokensExactLptResponseAmino {
    const obj: any = {};
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
    return obj;
  },
  fromAminoMsg(object: MsgJoinAllTokensExactLptResponseAminoMsg): MsgJoinAllTokensExactLptResponse {
    return MsgJoinAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinAllTokensExactLptResponseProtoMsg, useInterfaces: boolean = true): MsgJoinAllTokensExactLptResponse {
    return MsgJoinAllTokensExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinAllTokensExactLptResponse): Uint8Array {
    return MsgJoinAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinAllTokensExactLptResponse): MsgJoinAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinAllTokensExactLptResponse",
      value: MsgJoinAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinAllTokensExactLptResponse.typeUrl, MsgJoinAllTokensExactLptResponse);
function createBaseMsgJoinTokenExactLpt(): MsgJoinTokenExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptOut: "",
    tokenIn: "",
    maxAmountIn: undefined
  };
}
export const MsgJoinTokenExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt",
  aminoType: "pryzm/amm/v1/JoinTokenExactLpt",
  is(o: any): o is MsgJoinTokenExactLpt {
    return o && (o.$typeUrl === MsgJoinTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.lptOut === "string" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is MsgJoinTokenExactLptSDKType {
    return o && (o.$typeUrl === MsgJoinTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is MsgJoinTokenExactLptAmino {
    return o && (o.$typeUrl === MsgJoinTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && typeof o.token_in === "string");
  },
  encode(message: MsgJoinTokenExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(26).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.maxAmountIn !== undefined) {
      writer.uint32(42).string(message.maxAmountIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinTokenExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLpt();
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
          message.lptOut = reader.string();
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.maxAmountIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined
    };
  },
  toJSON(message: MsgJoinTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinTokenExactLpt>): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    return message;
  },
  fromAmino(object: MsgJoinTokenExactLptAmino): MsgJoinTokenExactLpt {
    const message = createBaseMsgJoinTokenExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.max_amount_in !== undefined && object.max_amount_in !== null) {
      message.maxAmountIn = object.max_amount_in;
    }
    return message;
  },
  toAmino(message: MsgJoinTokenExactLpt, useInterfaces: boolean = true): MsgJoinTokenExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut === "" ? undefined : message.lptOut;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.max_amount_in = message.maxAmountIn === null ? undefined : message.maxAmountIn;
    return obj;
  },
  fromAminoMsg(object: MsgJoinTokenExactLptAminoMsg): MsgJoinTokenExactLpt {
    return MsgJoinTokenExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinTokenExactLpt, useInterfaces: boolean = true): MsgJoinTokenExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinTokenExactLpt",
      value: MsgJoinTokenExactLpt.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgJoinTokenExactLptProtoMsg, useInterfaces: boolean = true): MsgJoinTokenExactLpt {
    return MsgJoinTokenExactLpt.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinTokenExactLpt): Uint8Array {
    return MsgJoinTokenExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinTokenExactLpt): MsgJoinTokenExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLpt",
      value: MsgJoinTokenExactLpt.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinTokenExactLpt.typeUrl, MsgJoinTokenExactLpt);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgJoinTokenExactLpt.aminoType, MsgJoinTokenExactLpt.typeUrl);
function createBaseMsgJoinTokenExactLptResponse(): MsgJoinTokenExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgJoinTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse",
  is(o: any): o is MsgJoinTokenExactLptResponse {
    return o && (o.$typeUrl === MsgJoinTokenExactLptResponse.typeUrl || Coin.is(o.lptOut) && Coin.is(o.amountIn) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is MsgJoinTokenExactLptResponseSDKType {
    return o && (o.$typeUrl === MsgJoinTokenExactLptResponse.typeUrl || Coin.isSDK(o.lpt_out) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is MsgJoinTokenExactLptResponseAmino {
    return o && (o.$typeUrl === MsgJoinTokenExactLptResponse.typeUrl || Coin.isAmino(o.lpt_out) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: MsgJoinTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinTokenExactLptResponse>): MsgJoinTokenExactLptResponse {
    const message = createBaseMsgJoinTokenExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: MsgJoinTokenExactLptResponseAmino): MsgJoinTokenExactLptResponse {
    const message = createBaseMsgJoinTokenExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
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
    return message;
  },
  toAmino(message: MsgJoinTokenExactLptResponse, useInterfaces: boolean = true): MsgJoinTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut, useInterfaces) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgJoinTokenExactLptResponseAminoMsg): MsgJoinTokenExactLptResponse {
    return MsgJoinTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinTokenExactLptResponseProtoMsg, useInterfaces: boolean = true): MsgJoinTokenExactLptResponse {
    return MsgJoinTokenExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinTokenExactLptResponse): Uint8Array {
    return MsgJoinTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinTokenExactLptResponse): MsgJoinTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinTokenExactLptResponse",
      value: MsgJoinTokenExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinTokenExactLptResponse.typeUrl, MsgJoinTokenExactLptResponse);
function createBaseMsgJoinExactTokens(): MsgJoinExactTokens {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsIn: [],
    minLptOut: undefined
  };
}
export const MsgJoinExactTokens = {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens",
  aminoType: "pryzm/amm/v1/JoinExactTokens",
  is(o: any): o is MsgJoinExactTokens {
    return o && (o.$typeUrl === MsgJoinExactTokens.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is MsgJoinExactTokensSDKType {
    return o && (o.$typeUrl === MsgJoinExactTokens.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is MsgJoinExactTokensAmino {
    return o && (o.$typeUrl === MsgJoinExactTokens.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: MsgJoinExactTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.minLptOut !== undefined) {
      writer.uint32(34).string(message.minLptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinExactTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokens();
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
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : undefined
    };
  },
  toJSON(message: MsgJoinExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinExactTokens>): MsgJoinExactTokens {
    const message = createBaseMsgJoinExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.minLptOut = object.minLptOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgJoinExactTokensAmino): MsgJoinExactTokens {
    const message = createBaseMsgJoinExactTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    return message;
  },
  toAmino(message: MsgJoinExactTokens, useInterfaces: boolean = true): MsgJoinExactTokensAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    obj.min_lpt_out = message.minLptOut === null ? undefined : message.minLptOut;
    return obj;
  },
  fromAminoMsg(object: MsgJoinExactTokensAminoMsg): MsgJoinExactTokens {
    return MsgJoinExactTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinExactTokens, useInterfaces: boolean = true): MsgJoinExactTokensAminoMsg {
    return {
      type: "pryzm/amm/v1/JoinExactTokens",
      value: MsgJoinExactTokens.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgJoinExactTokensProtoMsg, useInterfaces: boolean = true): MsgJoinExactTokens {
    return MsgJoinExactTokens.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinExactTokens): Uint8Array {
    return MsgJoinExactTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinExactTokens): MsgJoinExactTokensProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinExactTokens",
      value: MsgJoinExactTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinExactTokens.typeUrl, MsgJoinExactTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgJoinExactTokens.aminoType, MsgJoinExactTokens.typeUrl);
function createBaseMsgJoinExactTokensResponse(): MsgJoinExactTokensResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: []
  };
}
export const MsgJoinExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse",
  is(o: any): o is MsgJoinExactTokensResponse {
    return o && (o.$typeUrl === MsgJoinExactTokensResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is MsgJoinExactTokensResponseSDKType {
    return o && (o.$typeUrl === MsgJoinExactTokensResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is MsgJoinExactTokensResponseAmino {
    return o && (o.$typeUrl === MsgJoinExactTokensResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: MsgJoinExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgJoinExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinExactTokensResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<MsgJoinExactTokensResponse>): MsgJoinExactTokensResponse {
    const message = createBaseMsgJoinExactTokensResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgJoinExactTokensResponseAmino): MsgJoinExactTokensResponse {
    const message = createBaseMsgJoinExactTokensResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgJoinExactTokensResponse, useInterfaces: boolean = true): MsgJoinExactTokensResponseAmino {
    const obj: any = {};
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
    return obj;
  },
  fromAminoMsg(object: MsgJoinExactTokensResponseAminoMsg): MsgJoinExactTokensResponse {
    return MsgJoinExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinExactTokensResponseProtoMsg, useInterfaces: boolean = true): MsgJoinExactTokensResponse {
    return MsgJoinExactTokensResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgJoinExactTokensResponse): Uint8Array {
    return MsgJoinExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinExactTokensResponse): MsgJoinExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgJoinExactTokensResponse",
      value: MsgJoinExactTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgJoinExactTokensResponse.typeUrl, MsgJoinExactTokensResponse);
function createBaseMsgZeroImpactJoinYamm(): MsgZeroImpactJoinYamm {
  return {
    creator: "",
    cAmountIn: Coin.fromPartial({}),
    minLptOut: undefined
  };
}
export const MsgZeroImpactJoinYamm = {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm",
  aminoType: "pryzm/amm/v1/ZeroImpactJoinYamm",
  is(o: any): o is MsgZeroImpactJoinYamm {
    return o && (o.$typeUrl === MsgZeroImpactJoinYamm.typeUrl || typeof o.creator === "string" && Coin.is(o.cAmountIn));
  },
  isSDK(o: any): o is MsgZeroImpactJoinYammSDKType {
    return o && (o.$typeUrl === MsgZeroImpactJoinYamm.typeUrl || typeof o.creator === "string" && Coin.isSDK(o.c_amount_in));
  },
  isAmino(o: any): o is MsgZeroImpactJoinYammAmino {
    return o && (o.$typeUrl === MsgZeroImpactJoinYamm.typeUrl || typeof o.creator === "string" && Coin.isAmino(o.c_amount_in));
  },
  encode(message: MsgZeroImpactJoinYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.minLptOut !== undefined) {
      writer.uint32(26).string(message.minLptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgZeroImpactJoinYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZeroImpactJoinYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cAmountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.minLptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgZeroImpactJoinYamm {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined,
      minLptOut: isSet(object.minLptOut) ? String(object.minLptOut) : undefined
    };
  },
  toJSON(message: MsgZeroImpactJoinYamm): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    message.minLptOut !== undefined && (obj.minLptOut = message.minLptOut);
    return obj;
  },
  fromPartial(object: Partial<MsgZeroImpactJoinYamm>): MsgZeroImpactJoinYamm {
    const message = createBaseMsgZeroImpactJoinYamm();
    message.creator = object.creator ?? "";
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    message.minLptOut = object.minLptOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgZeroImpactJoinYammAmino): MsgZeroImpactJoinYamm {
    const message = createBaseMsgZeroImpactJoinYamm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    if (object.min_lpt_out !== undefined && object.min_lpt_out !== null) {
      message.minLptOut = object.min_lpt_out;
    }
    return message;
  },
  toAmino(message: MsgZeroImpactJoinYamm, useInterfaces: boolean = true): MsgZeroImpactJoinYammAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn, useInterfaces) : undefined;
    obj.min_lpt_out = message.minLptOut === null ? undefined : message.minLptOut;
    return obj;
  },
  fromAminoMsg(object: MsgZeroImpactJoinYammAminoMsg): MsgZeroImpactJoinYamm {
    return MsgZeroImpactJoinYamm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgZeroImpactJoinYamm, useInterfaces: boolean = true): MsgZeroImpactJoinYammAminoMsg {
    return {
      type: "pryzm/amm/v1/ZeroImpactJoinYamm",
      value: MsgZeroImpactJoinYamm.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgZeroImpactJoinYammProtoMsg, useInterfaces: boolean = true): MsgZeroImpactJoinYamm {
    return MsgZeroImpactJoinYamm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgZeroImpactJoinYamm): Uint8Array {
    return MsgZeroImpactJoinYamm.encode(message).finish();
  },
  toProtoMsg(message: MsgZeroImpactJoinYamm): MsgZeroImpactJoinYammProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYamm",
      value: MsgZeroImpactJoinYamm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgZeroImpactJoinYamm.typeUrl, MsgZeroImpactJoinYamm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgZeroImpactJoinYamm.aminoType, MsgZeroImpactJoinYamm.typeUrl);
function createBaseMsgZeroImpactJoinYammResponse(): MsgZeroImpactJoinYammResponse {
  return {
    lptOut: Coin.fromPartial({}),
    yOut: [],
    refractFee: Coin.fromPartial({}),
    joinProtocolFee: [],
    swapFee: []
  };
}
export const MsgZeroImpactJoinYammResponse = {
  typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse",
  is(o: any): o is MsgZeroImpactJoinYammResponse {
    return o && (o.$typeUrl === MsgZeroImpactJoinYammResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.yOut) && (!o.yOut.length || Coin.is(o.yOut[0])) && Coin.is(o.refractFee) && Array.isArray(o.joinProtocolFee) && (!o.joinProtocolFee.length || Coin.is(o.joinProtocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is MsgZeroImpactJoinYammResponseSDKType {
    return o && (o.$typeUrl === MsgZeroImpactJoinYammResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isSDK(o.y_out[0])) && Coin.isSDK(o.refract_fee) && Array.isArray(o.join_protocol_fee) && (!o.join_protocol_fee.length || Coin.isSDK(o.join_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is MsgZeroImpactJoinYammResponseAmino {
    return o && (o.$typeUrl === MsgZeroImpactJoinYammResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isAmino(o.y_out[0])) && Coin.isAmino(o.refract_fee) && Array.isArray(o.join_protocol_fee) && (!o.join_protocol_fee.length || Coin.isAmino(o.join_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: MsgZeroImpactJoinYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.yOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.refractFee !== undefined) {
      Coin.encode(message.refractFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.joinProtocolFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgZeroImpactJoinYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgZeroImpactJoinYammResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.yOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.refractFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.joinProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgZeroImpactJoinYammResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      joinProtocolFee: Array.isArray(object?.joinProtocolFee) ? object.joinProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgZeroImpactJoinYammResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    if (message.yOut) {
      obj.yOut = message.yOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.yOut = [];
    }
    message.refractFee !== undefined && (obj.refractFee = message.refractFee ? Coin.toJSON(message.refractFee) : undefined);
    if (message.joinProtocolFee) {
      obj.joinProtocolFee = message.joinProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinProtocolFee = [];
    }
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgZeroImpactJoinYammResponse>): MsgZeroImpactJoinYammResponse {
    const message = createBaseMsgZeroImpactJoinYammResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.joinProtocolFee = object.joinProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgZeroImpactJoinYammResponseAmino): MsgZeroImpactJoinYammResponse {
    const message = createBaseMsgZeroImpactJoinYammResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.yOut = object.y_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.refract_fee !== undefined && object.refract_fee !== null) {
      message.refractFee = Coin.fromAmino(object.refract_fee);
    }
    message.joinProtocolFee = object.join_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgZeroImpactJoinYammResponse, useInterfaces: boolean = true): MsgZeroImpactJoinYammResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut, useInterfaces) : undefined;
    if (message.yOut) {
      obj.y_out = message.yOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.y_out = message.yOut;
    }
    obj.refract_fee = message.refractFee ? Coin.toAmino(message.refractFee, useInterfaces) : undefined;
    if (message.joinProtocolFee) {
      obj.join_protocol_fee = message.joinProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.join_protocol_fee = message.joinProtocolFee;
    }
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    return obj;
  },
  fromAminoMsg(object: MsgZeroImpactJoinYammResponseAminoMsg): MsgZeroImpactJoinYammResponse {
    return MsgZeroImpactJoinYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgZeroImpactJoinYammResponseProtoMsg, useInterfaces: boolean = true): MsgZeroImpactJoinYammResponse {
    return MsgZeroImpactJoinYammResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgZeroImpactJoinYammResponse): Uint8Array {
    return MsgZeroImpactJoinYammResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgZeroImpactJoinYammResponse): MsgZeroImpactJoinYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgZeroImpactJoinYammResponse",
      value: MsgZeroImpactJoinYammResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgZeroImpactJoinYammResponse.typeUrl, MsgZeroImpactJoinYammResponse);
function createBaseMsgExitExactTokens(): MsgExitExactTokens {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsOut: [],
    maxLptIn: undefined
  };
}
export const MsgExitExactTokens = {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokens",
  aminoType: "pryzm/amm/v1/ExitExactTokens",
  is(o: any): o is MsgExitExactTokens {
    return o && (o.$typeUrl === MsgExitExactTokens.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])));
  },
  isSDK(o: any): o is MsgExitExactTokensSDKType {
    return o && (o.$typeUrl === MsgExitExactTokens.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])));
  },
  isAmino(o: any): o is MsgExitExactTokensAmino {
    return o && (o.$typeUrl === MsgExitExactTokens.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])));
  },
  encode(message: MsgExitExactTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxLptIn !== undefined) {
      writer.uint32(34).string(message.maxLptIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitExactTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokens();
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
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.maxLptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitExactTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxLptIn: isSet(object.maxLptIn) ? String(object.maxLptIn) : undefined
    };
  },
  toJSON(message: MsgExitExactTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.maxLptIn !== undefined && (obj.maxLptIn = message.maxLptIn);
    return obj;
  },
  fromPartial(object: Partial<MsgExitExactTokens>): MsgExitExactTokens {
    const message = createBaseMsgExitExactTokens();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxLptIn = object.maxLptIn ?? undefined;
    return message;
  },
  fromAmino(object: MsgExitExactTokensAmino): MsgExitExactTokens {
    const message = createBaseMsgExitExactTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_lpt_in !== undefined && object.max_lpt_in !== null) {
      message.maxLptIn = object.max_lpt_in;
    }
    return message;
  },
  toAmino(message: MsgExitExactTokens, useInterfaces: boolean = true): MsgExitExactTokensAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.max_lpt_in = message.maxLptIn === null ? undefined : message.maxLptIn;
    return obj;
  },
  fromAminoMsg(object: MsgExitExactTokensAminoMsg): MsgExitExactTokens {
    return MsgExitExactTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitExactTokens, useInterfaces: boolean = true): MsgExitExactTokensAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitExactTokens",
      value: MsgExitExactTokens.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgExitExactTokensProtoMsg, useInterfaces: boolean = true): MsgExitExactTokens {
    return MsgExitExactTokens.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitExactTokens): Uint8Array {
    return MsgExitExactTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgExitExactTokens): MsgExitExactTokensProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitExactTokens",
      value: MsgExitExactTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitExactTokens.typeUrl, MsgExitExactTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExitExactTokens.aminoType, MsgExitExactTokens.typeUrl);
function createBaseMsgExitExactTokensResponse(): MsgExitExactTokensResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: []
  };
}
export const MsgExitExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse",
  is(o: any): o is MsgExitExactTokensResponse {
    return o && (o.$typeUrl === MsgExitExactTokensResponse.typeUrl || Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.protocolFee) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is MsgExitExactTokensResponseSDKType {
    return o && (o.$typeUrl === MsgExitExactTokensResponse.typeUrl || Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is MsgExitExactTokensResponseAmino {
    return o && (o.$typeUrl === MsgExitExactTokensResponse.typeUrl || Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: MsgExitExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitExactTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitExactTokensResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<MsgExitExactTokensResponse>): MsgExitExactTokensResponse {
    const message = createBaseMsgExitExactTokensResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExitExactTokensResponseAmino): MsgExitExactTokensResponse {
    const message = createBaseMsgExitExactTokensResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExitExactTokensResponse, useInterfaces: boolean = true): MsgExitExactTokensResponseAmino {
    const obj: any = {};
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
    return obj;
  },
  fromAminoMsg(object: MsgExitExactTokensResponseAminoMsg): MsgExitExactTokensResponse {
    return MsgExitExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitExactTokensResponseProtoMsg, useInterfaces: boolean = true): MsgExitExactTokensResponse {
    return MsgExitExactTokensResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitExactTokensResponse): Uint8Array {
    return MsgExitExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitExactTokensResponse): MsgExitExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitExactTokensResponse",
      value: MsgExitExactTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitExactTokensResponse.typeUrl, MsgExitExactTokensResponse);
function createBaseMsgExitTokenExactLpt(): MsgExitTokenExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    tokenOut: "",
    minAmountOut: undefined
  };
}
export const MsgExitTokenExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt",
  aminoType: "pryzm/amm/v1/ExitTokenExactLpt",
  is(o: any): o is MsgExitTokenExactLpt {
    return o && (o.$typeUrl === MsgExitTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.lptIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is MsgExitTokenExactLptSDKType {
    return o && (o.$typeUrl === MsgExitTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is MsgExitTokenExactLptAmino {
    return o && (o.$typeUrl === MsgExitTokenExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && typeof o.token_out === "string");
  },
  encode(message: MsgExitTokenExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.minAmountOut !== undefined) {
      writer.uint32(42).string(message.minAmountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitTokenExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLpt();
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
          message.lptIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.minAmountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitTokenExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      minAmountOut: isSet(object.minAmountOut) ? String(object.minAmountOut) : undefined
    };
  },
  toJSON(message: MsgExitTokenExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.minAmountOut !== undefined && (obj.minAmountOut = message.minAmountOut);
    return obj;
  },
  fromPartial(object: Partial<MsgExitTokenExactLpt>): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.minAmountOut = object.minAmountOut ?? undefined;
    return message;
  },
  fromAmino(object: MsgExitTokenExactLptAmino): MsgExitTokenExactLpt {
    const message = createBaseMsgExitTokenExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.min_amount_out !== undefined && object.min_amount_out !== null) {
      message.minAmountOut = object.min_amount_out;
    }
    return message;
  },
  toAmino(message: MsgExitTokenExactLpt, useInterfaces: boolean = true): MsgExitTokenExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn === "" ? undefined : message.lptIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.min_amount_out = message.minAmountOut === null ? undefined : message.minAmountOut;
    return obj;
  },
  fromAminoMsg(object: MsgExitTokenExactLptAminoMsg): MsgExitTokenExactLpt {
    return MsgExitTokenExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitTokenExactLpt, useInterfaces: boolean = true): MsgExitTokenExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitTokenExactLpt",
      value: MsgExitTokenExactLpt.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgExitTokenExactLptProtoMsg, useInterfaces: boolean = true): MsgExitTokenExactLpt {
    return MsgExitTokenExactLpt.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitTokenExactLpt): Uint8Array {
    return MsgExitTokenExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgExitTokenExactLpt): MsgExitTokenExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLpt",
      value: MsgExitTokenExactLpt.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitTokenExactLpt.typeUrl, MsgExitTokenExactLpt);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExitTokenExactLpt.aminoType, MsgExitTokenExactLpt.typeUrl);
function createBaseMsgExitTokenExactLptResponse(): MsgExitTokenExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const MsgExitTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse",
  is(o: any): o is MsgExitTokenExactLptResponse {
    return o && (o.$typeUrl === MsgExitTokenExactLptResponse.typeUrl || Coin.is(o.lptIn) && Coin.is(o.amountOut) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is MsgExitTokenExactLptResponseSDKType {
    return o && (o.$typeUrl === MsgExitTokenExactLptResponse.typeUrl || Coin.isSDK(o.lpt_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is MsgExitTokenExactLptResponseAmino {
    return o && (o.$typeUrl === MsgExitTokenExactLptResponse.typeUrl || Coin.isAmino(o.lpt_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: MsgExitTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitTokenExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.swapFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: MsgExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitTokenExactLptResponse>): MsgExitTokenExactLptResponse {
    const message = createBaseMsgExitTokenExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: MsgExitTokenExactLptResponseAmino): MsgExitTokenExactLptResponse {
    const message = createBaseMsgExitTokenExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = Coin.fromAmino(object.amount_out);
    }
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = Coin.fromAmino(object.swap_fee);
    }
    return message;
  },
  toAmino(message: MsgExitTokenExactLptResponse, useInterfaces: boolean = true): MsgExitTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitTokenExactLptResponseAminoMsg): MsgExitTokenExactLptResponse {
    return MsgExitTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitTokenExactLptResponseProtoMsg, useInterfaces: boolean = true): MsgExitTokenExactLptResponse {
    return MsgExitTokenExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitTokenExactLptResponse): Uint8Array {
    return MsgExitTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitTokenExactLptResponse): MsgExitTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitTokenExactLptResponse",
      value: MsgExitTokenExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitTokenExactLptResponse.typeUrl, MsgExitTokenExactLptResponse);
function createBaseMsgExitAllTokensExactLpt(): MsgExitAllTokensExactLpt {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgExitAllTokensExactLpt = {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt",
  aminoType: "pryzm/amm/v1/ExitAllTokensExactLpt",
  is(o: any): o is MsgExitAllTokensExactLpt {
    return o && (o.$typeUrl === MsgExitAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.lptIn === "string" && Array.isArray(o.minAmountsOut) && (!o.minAmountsOut.length || Coin.is(o.minAmountsOut[0])));
  },
  isSDK(o: any): o is MsgExitAllTokensExactLptSDKType {
    return o && (o.$typeUrl === MsgExitAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isSDK(o.min_amounts_out[0])));
  },
  isAmino(o: any): o is MsgExitAllTokensExactLptAmino {
    return o && (o.$typeUrl === MsgExitAllTokensExactLpt.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isAmino(o.min_amounts_out[0])));
  },
  encode(message: MsgExitAllTokensExactLpt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitAllTokensExactLpt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLpt();
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
          message.lptIn = reader.string();
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitAllTokensExactLpt {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitAllTokensExactLpt): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExitAllTokensExactLpt>): MsgExitAllTokensExactLpt {
    const message = createBaseMsgExitAllTokensExactLpt();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgExitAllTokensExactLptAmino): MsgExitAllTokensExactLpt {
    const message = createBaseMsgExitAllTokensExactLpt();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgExitAllTokensExactLpt, useInterfaces: boolean = true): MsgExitAllTokensExactLptAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn === "" ? undefined : message.lptIn;
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitAllTokensExactLptAminoMsg): MsgExitAllTokensExactLpt {
    return MsgExitAllTokensExactLpt.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitAllTokensExactLpt, useInterfaces: boolean = true): MsgExitAllTokensExactLptAminoMsg {
    return {
      type: "pryzm/amm/v1/ExitAllTokensExactLpt",
      value: MsgExitAllTokensExactLpt.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgExitAllTokensExactLptProtoMsg, useInterfaces: boolean = true): MsgExitAllTokensExactLpt {
    return MsgExitAllTokensExactLpt.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitAllTokensExactLpt): Uint8Array {
    return MsgExitAllTokensExactLpt.encode(message).finish();
  },
  toProtoMsg(message: MsgExitAllTokensExactLpt): MsgExitAllTokensExactLptProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLpt",
      value: MsgExitAllTokensExactLpt.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitAllTokensExactLpt.typeUrl, MsgExitAllTokensExactLpt);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExitAllTokensExactLpt.aminoType, MsgExitAllTokensExactLpt.typeUrl);
function createBaseMsgExitAllTokensExactLptResponse(): MsgExitAllTokensExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({})
  };
}
export const MsgExitAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse",
  is(o: any): o is MsgExitAllTokensExactLptResponse {
    return o && (o.$typeUrl === MsgExitAllTokensExactLptResponse.typeUrl || Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.protocolFee));
  },
  isSDK(o: any): o is MsgExitAllTokensExactLptResponseSDKType {
    return o && (o.$typeUrl === MsgExitAllTokensExactLptResponse.typeUrl || Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.protocol_fee));
  },
  isAmino(o: any): o is MsgExitAllTokensExactLptResponseAmino {
    return o && (o.$typeUrl === MsgExitAllTokensExactLptResponse.typeUrl || Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.protocol_fee));
  },
  encode(message: MsgExitAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.protocolFee !== undefined) {
      Coin.encode(message.protocolFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitAllTokensExactLptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.protocolFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined
    };
  },
  toJSON(message: MsgExitAllTokensExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitAllTokensExactLptResponse>): MsgExitAllTokensExactLptResponse {
    const message = createBaseMsgExitAllTokensExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    return message;
  },
  fromAmino(object: MsgExitAllTokensExactLptResponseAmino): MsgExitAllTokensExactLptResponse {
    const message = createBaseMsgExitAllTokensExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    return message;
  },
  toAmino(message: MsgExitAllTokensExactLptResponse, useInterfaces: boolean = true): MsgExitAllTokensExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn, useInterfaces) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitAllTokensExactLptResponseAminoMsg): MsgExitAllTokensExactLptResponse {
    return MsgExitAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitAllTokensExactLptResponseProtoMsg, useInterfaces: boolean = true): MsgExitAllTokensExactLptResponse {
    return MsgExitAllTokensExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitAllTokensExactLptResponse): Uint8Array {
    return MsgExitAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitAllTokensExactLptResponse): MsgExitAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgExitAllTokensExactLptResponse",
      value: MsgExitAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitAllTokensExactLptResponse.typeUrl, MsgExitAllTokensExactLptResponse);
function createBaseCreateWeightedPoolToken(): CreateWeightedPoolToken {
  return {
    denom: "",
    normalizedWeight: ""
  };
}
export const CreateWeightedPoolToken = {
  typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken",
  is(o: any): o is CreateWeightedPoolToken {
    return o && (o.$typeUrl === CreateWeightedPoolToken.typeUrl || typeof o.denom === "string" && typeof o.normalizedWeight === "string");
  },
  isSDK(o: any): o is CreateWeightedPoolTokenSDKType {
    return o && (o.$typeUrl === CreateWeightedPoolToken.typeUrl || typeof o.denom === "string" && typeof o.normalized_weight === "string");
  },
  isAmino(o: any): o is CreateWeightedPoolTokenAmino {
    return o && (o.$typeUrl === CreateWeightedPoolToken.typeUrl || typeof o.denom === "string" && typeof o.normalized_weight === "string");
  },
  encode(message: CreateWeightedPoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.normalizedWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.normalizedWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CreateWeightedPoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWeightedPoolToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateWeightedPoolToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedWeight: isSet(object.normalizedWeight) ? String(object.normalizedWeight) : ""
    };
  },
  toJSON(message: CreateWeightedPoolToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedWeight !== undefined && (obj.normalizedWeight = message.normalizedWeight);
    return obj;
  },
  fromPartial(object: Partial<CreateWeightedPoolToken>): CreateWeightedPoolToken {
    const message = createBaseCreateWeightedPoolToken();
    message.denom = object.denom ?? "";
    message.normalizedWeight = object.normalizedWeight ?? "";
    return message;
  },
  fromAmino(object: CreateWeightedPoolTokenAmino): CreateWeightedPoolToken {
    const message = createBaseCreateWeightedPoolToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.normalized_weight !== undefined && object.normalized_weight !== null) {
      message.normalizedWeight = object.normalized_weight;
    }
    return message;
  },
  toAmino(message: CreateWeightedPoolToken, useInterfaces: boolean = true): CreateWeightedPoolTokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.normalized_weight = padDecimal(message.normalizedWeight) === "" ? undefined : padDecimal(message.normalizedWeight);
    return obj;
  },
  fromAminoMsg(object: CreateWeightedPoolTokenAminoMsg): CreateWeightedPoolToken {
    return CreateWeightedPoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateWeightedPoolTokenProtoMsg, useInterfaces: boolean = true): CreateWeightedPoolToken {
    return CreateWeightedPoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CreateWeightedPoolToken): Uint8Array {
    return CreateWeightedPoolToken.encode(message).finish();
  },
  toProtoMsg(message: CreateWeightedPoolToken): CreateWeightedPoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.CreateWeightedPoolToken",
      value: CreateWeightedPoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateWeightedPoolToken.typeUrl, CreateWeightedPoolToken);
function createBaseMsgCreateWeightedPool(): MsgCreateWeightedPool {
  return {
    creator: "",
    name: "",
    swapFeeRatio: "",
    pauseWindowDurationMillis: BigInt(0),
    pauseBufferDurationMillis: BigInt(0),
    tokens: [],
    initializationAllowList: [],
    forceGovOwner: false,
    admins: [],
    pauseAllowList: []
  };
}
export const MsgCreateWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool",
  aminoType: "pryzm/amm/v1/CreateWeightedPool",
  is(o: any): o is MsgCreateWeightedPool {
    return o && (o.$typeUrl === MsgCreateWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.swapFeeRatio === "string" && typeof o.pauseWindowDurationMillis === "bigint" && typeof o.pauseBufferDurationMillis === "bigint" && Array.isArray(o.tokens) && (!o.tokens.length || CreateWeightedPoolToken.is(o.tokens[0])) && Array.isArray(o.initializationAllowList) && (!o.initializationAllowList.length || typeof o.initializationAllowList[0] === "string") && typeof o.forceGovOwner === "boolean" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string") && Array.isArray(o.pauseAllowList) && (!o.pauseAllowList.length || typeof o.pauseAllowList[0] === "string"));
  },
  isSDK(o: any): o is MsgCreateWeightedPoolSDKType {
    return o && (o.$typeUrl === MsgCreateWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.swap_fee_ratio === "string" && typeof o.pause_window_duration_millis === "bigint" && typeof o.pause_buffer_duration_millis === "bigint" && Array.isArray(o.tokens) && (!o.tokens.length || CreateWeightedPoolToken.isSDK(o.tokens[0])) && Array.isArray(o.initialization_allow_list) && (!o.initialization_allow_list.length || typeof o.initialization_allow_list[0] === "string") && typeof o.force_gov_owner === "boolean" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string") && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  isAmino(o: any): o is MsgCreateWeightedPoolAmino {
    return o && (o.$typeUrl === MsgCreateWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.swap_fee_ratio === "string" && typeof o.pause_window_duration_millis === "bigint" && typeof o.pause_buffer_duration_millis === "bigint" && Array.isArray(o.tokens) && (!o.tokens.length || CreateWeightedPoolToken.isAmino(o.tokens[0])) && Array.isArray(o.initialization_allow_list) && (!o.initialization_allow_list.length || typeof o.initialization_allow_list[0] === "string") && typeof o.force_gov_owner === "boolean" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string") && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  encode(message: MsgCreateWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFeeRatio, 18).atomics);
    }
    if (message.pauseWindowDurationMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.pauseWindowDurationMillis);
    }
    if (message.pauseBufferDurationMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.pauseBufferDurationMillis);
    }
    for (const v of message.tokens) {
      CreateWeightedPoolToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(98).string(v!);
    }
    if (message.forceGovOwner === true) {
      writer.uint32(104).bool(message.forceGovOwner);
    }
    for (const v of message.admins) {
      writer.uint32(114).string(v!);
    }
    for (const v of message.pauseAllowList) {
      writer.uint32(122).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.swapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.pauseWindowDurationMillis = reader.int64();
          break;
        case 5:
          message.pauseBufferDurationMillis = reader.int64();
          break;
        case 6:
          message.tokens.push(CreateWeightedPoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 12:
          message.initializationAllowList.push(reader.string());
          break;
        case 13:
          message.forceGovOwner = reader.bool();
          break;
        case 14:
          message.admins.push(reader.string());
          break;
        case 15:
          message.pauseAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : "",
      pauseWindowDurationMillis: isSet(object.pauseWindowDurationMillis) ? BigInt(object.pauseWindowDurationMillis.toString()) : BigInt(0),
      pauseBufferDurationMillis: isSet(object.pauseBufferDurationMillis) ? BigInt(object.pauseBufferDurationMillis.toString()) : BigInt(0),
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => CreateWeightedPoolToken.fromJSON(e)) : [],
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : [],
      forceGovOwner: isSet(object.forceGovOwner) ? Boolean(object.forceGovOwner) : false,
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : [],
      pauseAllowList: Array.isArray(object?.pauseAllowList) ? object.pauseAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgCreateWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    message.pauseWindowDurationMillis !== undefined && (obj.pauseWindowDurationMillis = (message.pauseWindowDurationMillis || BigInt(0)).toString());
    message.pauseBufferDurationMillis !== undefined && (obj.pauseBufferDurationMillis = (message.pauseBufferDurationMillis || BigInt(0)).toString());
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? CreateWeightedPoolToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    if (message.initializationAllowList) {
      obj.initializationAllowList = message.initializationAllowList.map(e => e);
    } else {
      obj.initializationAllowList = [];
    }
    message.forceGovOwner !== undefined && (obj.forceGovOwner = message.forceGovOwner);
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    if (message.pauseAllowList) {
      obj.pauseAllowList = message.pauseAllowList.map(e => e);
    } else {
      obj.pauseAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreateWeightedPool>): MsgCreateWeightedPool {
    const message = createBaseMsgCreateWeightedPool();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    message.pauseWindowDurationMillis = object.pauseWindowDurationMillis !== undefined && object.pauseWindowDurationMillis !== null ? BigInt(object.pauseWindowDurationMillis.toString()) : BigInt(0);
    message.pauseBufferDurationMillis = object.pauseBufferDurationMillis !== undefined && object.pauseBufferDurationMillis !== null ? BigInt(object.pauseBufferDurationMillis.toString()) : BigInt(0);
    message.tokens = object.tokens?.map(e => CreateWeightedPoolToken.fromPartial(e)) || [];
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    message.forceGovOwner = object.forceGovOwner ?? false;
    message.admins = object.admins?.map(e => e) || [];
    message.pauseAllowList = object.pauseAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgCreateWeightedPoolAmino): MsgCreateWeightedPool {
    const message = createBaseMsgCreateWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.swap_fee_ratio !== undefined && object.swap_fee_ratio !== null) {
      message.swapFeeRatio = object.swap_fee_ratio;
    }
    if (object.pause_window_duration_millis !== undefined && object.pause_window_duration_millis !== null) {
      message.pauseWindowDurationMillis = BigInt(object.pause_window_duration_millis);
    }
    if (object.pause_buffer_duration_millis !== undefined && object.pause_buffer_duration_millis !== null) {
      message.pauseBufferDurationMillis = BigInt(object.pause_buffer_duration_millis);
    }
    message.tokens = object.tokens?.map(e => CreateWeightedPoolToken.fromAmino(e)) || [];
    message.initializationAllowList = object.initialization_allow_list?.map(e => e) || [];
    if (object.force_gov_owner !== undefined && object.force_gov_owner !== null) {
      message.forceGovOwner = object.force_gov_owner;
    }
    message.admins = object.admins?.map(e => e) || [];
    message.pauseAllowList = object.pause_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgCreateWeightedPool, useInterfaces: boolean = true): MsgCreateWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.swap_fee_ratio = padDecimal(message.swapFeeRatio) === "" ? undefined : padDecimal(message.swapFeeRatio);
    obj.pause_window_duration_millis = message.pauseWindowDurationMillis ? message.pauseWindowDurationMillis.toString() : undefined;
    obj.pause_buffer_duration_millis = message.pauseBufferDurationMillis ? message.pauseBufferDurationMillis.toString() : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? CreateWeightedPoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    if (message.initializationAllowList) {
      obj.initialization_allow_list = message.initializationAllowList.map(e => e);
    } else {
      obj.initialization_allow_list = message.initializationAllowList;
    }
    obj.force_gov_owner = message.forceGovOwner === false ? undefined : message.forceGovOwner;
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = message.admins;
    }
    if (message.pauseAllowList) {
      obj.pause_allow_list = message.pauseAllowList.map(e => e);
    } else {
      obj.pause_allow_list = message.pauseAllowList;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateWeightedPoolAminoMsg): MsgCreateWeightedPool {
    return MsgCreateWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateWeightedPool, useInterfaces: boolean = true): MsgCreateWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/CreateWeightedPool",
      value: MsgCreateWeightedPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateWeightedPoolProtoMsg, useInterfaces: boolean = true): MsgCreateWeightedPool {
    return MsgCreateWeightedPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateWeightedPool): Uint8Array {
    return MsgCreateWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWeightedPool): MsgCreateWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPool",
      value: MsgCreateWeightedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateWeightedPool.typeUrl, MsgCreateWeightedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateWeightedPool.aminoType, MsgCreateWeightedPool.typeUrl);
function createBaseMsgCreateWeightedPoolResponse(): MsgCreateWeightedPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse",
  is(o: any): o is MsgCreateWeightedPoolResponse {
    return o && (o.$typeUrl === MsgCreateWeightedPoolResponse.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgCreateWeightedPoolResponseSDKType {
    return o && (o.$typeUrl === MsgCreateWeightedPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgCreateWeightedPoolResponseAmino {
    return o && (o.$typeUrl === MsgCreateWeightedPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: MsgCreateWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateWeightedPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateWeightedPoolResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateWeightedPoolResponse>): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateWeightedPoolResponseAmino): MsgCreateWeightedPoolResponse {
    const message = createBaseMsgCreateWeightedPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreateWeightedPoolResponse, useInterfaces: boolean = true): MsgCreateWeightedPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateWeightedPoolResponseAminoMsg): MsgCreateWeightedPoolResponse {
    return MsgCreateWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateWeightedPoolResponseProtoMsg, useInterfaces: boolean = true): MsgCreateWeightedPoolResponse {
    return MsgCreateWeightedPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateWeightedPoolResponse): Uint8Array {
    return MsgCreateWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateWeightedPoolResponse): MsgCreateWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateWeightedPoolResponse",
      value: MsgCreateWeightedPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateWeightedPoolResponse.typeUrl, MsgCreateWeightedPoolResponse);
function createBaseMsgUpdateSwapFee(): MsgUpdateSwapFee {
  return {
    creator: "",
    poolId: BigInt(0),
    swapFeeRatio: ""
  };
}
export const MsgUpdateSwapFee = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee",
  aminoType: "pryzm/amm/v1/UpdateSwapFee",
  is(o: any): o is MsgUpdateSwapFee {
    return o && (o.$typeUrl === MsgUpdateSwapFee.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.swapFeeRatio === "string");
  },
  isSDK(o: any): o is MsgUpdateSwapFeeSDKType {
    return o && (o.$typeUrl === MsgUpdateSwapFee.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.swap_fee_ratio === "string");
  },
  isAmino(o: any): o is MsgUpdateSwapFeeAmino {
    return o && (o.$typeUrl === MsgUpdateSwapFee.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.swap_fee_ratio === "string");
  },
  encode(message: MsgUpdateSwapFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapFeeRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFeeRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateSwapFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFee();
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
          message.swapFeeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateSwapFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      swapFeeRatio: isSet(object.swapFeeRatio) ? String(object.swapFeeRatio) : ""
    };
  },
  toJSON(message: MsgUpdateSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.swapFeeRatio !== undefined && (obj.swapFeeRatio = message.swapFeeRatio);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateSwapFee>): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapFeeRatio = object.swapFeeRatio ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSwapFeeAmino): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_fee_ratio !== undefined && object.swap_fee_ratio !== null) {
      message.swapFeeRatio = object.swap_fee_ratio;
    }
    return message;
  },
  toAmino(message: MsgUpdateSwapFee, useInterfaces: boolean = true): MsgUpdateSwapFeeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.swap_fee_ratio = padDecimal(message.swapFeeRatio) === "" ? undefined : padDecimal(message.swapFeeRatio);
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeAminoMsg): MsgUpdateSwapFee {
    return MsgUpdateSwapFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateSwapFee, useInterfaces: boolean = true): MsgUpdateSwapFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateSwapFee",
      value: MsgUpdateSwapFee.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateSwapFeeProtoMsg, useInterfaces: boolean = true): MsgUpdateSwapFee {
    return MsgUpdateSwapFee.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateSwapFee): Uint8Array {
    return MsgUpdateSwapFee.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFee): MsgUpdateSwapFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFee",
      value: MsgUpdateSwapFee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateSwapFee.typeUrl, MsgUpdateSwapFee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateSwapFee.aminoType, MsgUpdateSwapFee.typeUrl);
function createBaseMsgUpdateSwapFeeResponse(): MsgUpdateSwapFeeResponse {
  return {};
}
export const MsgUpdateSwapFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse",
  is(o: any): o is MsgUpdateSwapFeeResponse {
    return o && o.$typeUrl === MsgUpdateSwapFeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateSwapFeeResponseSDKType {
    return o && o.$typeUrl === MsgUpdateSwapFeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateSwapFeeResponseAmino {
    return o && o.$typeUrl === MsgUpdateSwapFeeResponse.typeUrl;
  },
  encode(_: MsgUpdateSwapFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateSwapFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateSwapFeeResponse {
    return {};
  },
  toJSON(_: MsgUpdateSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateSwapFeeResponse>): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSwapFeeResponseAmino): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  },
  toAmino(_: MsgUpdateSwapFeeResponse, useInterfaces: boolean = true): MsgUpdateSwapFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSwapFeeResponseAminoMsg): MsgUpdateSwapFeeResponse {
    return MsgUpdateSwapFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSwapFeeResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateSwapFeeResponse {
    return MsgUpdateSwapFeeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateSwapFeeResponse): Uint8Array {
    return MsgUpdateSwapFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSwapFeeResponse): MsgUpdateSwapFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateSwapFeeResponse",
      value: MsgUpdateSwapFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateSwapFeeResponse.typeUrl, MsgUpdateSwapFeeResponse);
function createBaseMsgInitializePool(): MsgInitializePool {
  return {
    creator: "",
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const MsgInitializePool = {
  typeUrl: "/pryzm.amm.v1.MsgInitializePool",
  aminoType: "pryzm/amm/v1/InitializePool",
  is(o: any): o is MsgInitializePool {
    return o && (o.$typeUrl === MsgInitializePool.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is MsgInitializePoolSDKType {
    return o && (o.$typeUrl === MsgInitializePool.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is MsgInitializePoolAmino {
    return o && (o.$typeUrl === MsgInitializePool.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: MsgInitializePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgInitializePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePool();
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
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitializePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitializePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgInitializePool>): MsgInitializePool {
    const message = createBaseMsgInitializePool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgInitializePoolAmino): MsgInitializePool {
    const message = createBaseMsgInitializePool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInitializePool, useInterfaces: boolean = true): MsgInitializePoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: MsgInitializePoolAminoMsg): MsgInitializePool {
    return MsgInitializePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInitializePool, useInterfaces: boolean = true): MsgInitializePoolAminoMsg {
    return {
      type: "pryzm/amm/v1/InitializePool",
      value: MsgInitializePool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgInitializePoolProtoMsg, useInterfaces: boolean = true): MsgInitializePool {
    return MsgInitializePool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgInitializePool): Uint8Array {
    return MsgInitializePool.encode(message).finish();
  },
  toProtoMsg(message: MsgInitializePool): MsgInitializePoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgInitializePool",
      value: MsgInitializePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInitializePool.typeUrl, MsgInitializePool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInitializePool.aminoType, MsgInitializePool.typeUrl);
function createBaseMsgInitializePoolResponse(): MsgInitializePoolResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const MsgInitializePoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse",
  is(o: any): o is MsgInitializePoolResponse {
    return o && (o.$typeUrl === MsgInitializePoolResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])));
  },
  isSDK(o: any): o is MsgInitializePoolResponseSDKType {
    return o && (o.$typeUrl === MsgInitializePoolResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])));
  },
  isAmino(o: any): o is MsgInitializePoolResponseAmino {
    return o && (o.$typeUrl === MsgInitializePoolResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])));
  },
  encode(message: MsgInitializePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptOut !== undefined) {
      Coin.encode(message.lptOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.protocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgInitializePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptOut = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.protocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgInitializePoolResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<MsgInitializePoolResponse>): MsgInitializePoolResponse {
    const message = createBaseMsgInitializePoolResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgInitializePoolResponseAmino): MsgInitializePoolResponse {
    const message = createBaseMsgInitializePoolResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgInitializePoolResponse, useInterfaces: boolean = true): MsgInitializePoolResponseAmino {
    const obj: any = {};
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
    return obj;
  },
  fromAminoMsg(object: MsgInitializePoolResponseAminoMsg): MsgInitializePoolResponse {
    return MsgInitializePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInitializePoolResponseProtoMsg, useInterfaces: boolean = true): MsgInitializePoolResponse {
    return MsgInitializePoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgInitializePoolResponse): Uint8Array {
    return MsgInitializePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInitializePoolResponse): MsgInitializePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgInitializePoolResponse",
      value: MsgInitializePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInitializePoolResponse.typeUrl, MsgInitializePoolResponse);
function createBaseMsgUpdateWeights(): MsgUpdateWeights {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenWeights: [],
    startTimeUnixMillis: BigInt(0),
    endTimeUnixMillis: BigInt(0)
  };
}
export const MsgUpdateWeights = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeights",
  aminoType: "pryzm/amm/v1/UpdateWeights",
  is(o: any): o is MsgUpdateWeights {
    return o && (o.$typeUrl === MsgUpdateWeights.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.tokenWeights) && (!o.tokenWeights.length || TokenWeight.is(o.tokenWeights[0])) && typeof o.startTimeUnixMillis === "bigint" && typeof o.endTimeUnixMillis === "bigint");
  },
  isSDK(o: any): o is MsgUpdateWeightsSDKType {
    return o && (o.$typeUrl === MsgUpdateWeights.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.token_weights) && (!o.token_weights.length || TokenWeight.isSDK(o.token_weights[0])) && typeof o.start_time_unix_millis === "bigint" && typeof o.end_time_unix_millis === "bigint");
  },
  isAmino(o: any): o is MsgUpdateWeightsAmino {
    return o && (o.$typeUrl === MsgUpdateWeights.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.token_weights) && (!o.token_weights.length || TokenWeight.isAmino(o.token_weights[0])) && typeof o.start_time_unix_millis === "bigint" && typeof o.end_time_unix_millis === "bigint");
  },
  encode(message: MsgUpdateWeights, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenWeights) {
      TokenWeight.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startTimeUnixMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.startTimeUnixMillis);
    }
    if (message.endTimeUnixMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.endTimeUnixMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateWeights {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeights();
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
          message.tokenWeights.push(TokenWeight.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.startTimeUnixMillis = reader.int64();
          break;
        case 5:
          message.endTimeUnixMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateWeights {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenWeights: Array.isArray(object?.tokenWeights) ? object.tokenWeights.map((e: any) => TokenWeight.fromJSON(e)) : [],
      startTimeUnixMillis: isSet(object.startTimeUnixMillis) ? BigInt(object.startTimeUnixMillis.toString()) : BigInt(0),
      endTimeUnixMillis: isSet(object.endTimeUnixMillis) ? BigInt(object.endTimeUnixMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdateWeights): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.tokenWeights) {
      obj.tokenWeights = message.tokenWeights.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeights = [];
    }
    message.startTimeUnixMillis !== undefined && (obj.startTimeUnixMillis = (message.startTimeUnixMillis || BigInt(0)).toString());
    message.endTimeUnixMillis !== undefined && (obj.endTimeUnixMillis = (message.endTimeUnixMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateWeights>): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenWeights = object.tokenWeights?.map(e => TokenWeight.fromPartial(e)) || [];
    message.startTimeUnixMillis = object.startTimeUnixMillis !== undefined && object.startTimeUnixMillis !== null ? BigInt(object.startTimeUnixMillis.toString()) : BigInt(0);
    message.endTimeUnixMillis = object.endTimeUnixMillis !== undefined && object.endTimeUnixMillis !== null ? BigInt(object.endTimeUnixMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateWeightsAmino): MsgUpdateWeights {
    const message = createBaseMsgUpdateWeights();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokenWeights = object.token_weights?.map(e => TokenWeight.fromAmino(e)) || [];
    if (object.start_time_unix_millis !== undefined && object.start_time_unix_millis !== null) {
      message.startTimeUnixMillis = BigInt(object.start_time_unix_millis);
    }
    if (object.end_time_unix_millis !== undefined && object.end_time_unix_millis !== null) {
      message.endTimeUnixMillis = BigInt(object.end_time_unix_millis);
    }
    return message;
  },
  toAmino(message: MsgUpdateWeights, useInterfaces: boolean = true): MsgUpdateWeightsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.tokenWeights) {
      obj.token_weights = message.tokenWeights.map(e => e ? TokenWeight.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.token_weights = message.tokenWeights;
    }
    obj.start_time_unix_millis = message.startTimeUnixMillis ? message.startTimeUnixMillis.toString() : undefined;
    obj.end_time_unix_millis = message.endTimeUnixMillis ? message.endTimeUnixMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWeightsAminoMsg): MsgUpdateWeights {
    return MsgUpdateWeights.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateWeights, useInterfaces: boolean = true): MsgUpdateWeightsAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateWeights",
      value: MsgUpdateWeights.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateWeightsProtoMsg, useInterfaces: boolean = true): MsgUpdateWeights {
    return MsgUpdateWeights.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateWeights): Uint8Array {
    return MsgUpdateWeights.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWeights): MsgUpdateWeightsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateWeights",
      value: MsgUpdateWeights.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateWeights.typeUrl, MsgUpdateWeights);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateWeights.aminoType, MsgUpdateWeights.typeUrl);
function createBaseMsgUpdateWeightsResponse(): MsgUpdateWeightsResponse {
  return {};
}
export const MsgUpdateWeightsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse",
  is(o: any): o is MsgUpdateWeightsResponse {
    return o && o.$typeUrl === MsgUpdateWeightsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateWeightsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateWeightsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateWeightsResponseAmino {
    return o && o.$typeUrl === MsgUpdateWeightsResponse.typeUrl;
  },
  encode(_: MsgUpdateWeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateWeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateWeightsResponse {
    return {};
  },
  toJSON(_: MsgUpdateWeightsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateWeightsResponse>): MsgUpdateWeightsResponse {
    const message = createBaseMsgUpdateWeightsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateWeightsResponseAmino): MsgUpdateWeightsResponse {
    const message = createBaseMsgUpdateWeightsResponse();
    return message;
  },
  toAmino(_: MsgUpdateWeightsResponse, useInterfaces: boolean = true): MsgUpdateWeightsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWeightsResponseAminoMsg): MsgUpdateWeightsResponse {
    return MsgUpdateWeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateWeightsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateWeightsResponse {
    return MsgUpdateWeightsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateWeightsResponse): Uint8Array {
    return MsgUpdateWeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWeightsResponse): MsgUpdateWeightsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateWeightsResponse",
      value: MsgUpdateWeightsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateWeightsResponse.typeUrl, MsgUpdateWeightsResponse);
function createBaseMsgBatchSwap(): MsgBatchSwap {
  return {
    creator: "",
    swapType: 0,
    steps: [],
    minAmountsOut: [],
    maxAmountsIn: []
  };
}
export const MsgBatchSwap = {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwap",
  aminoType: "pryzm/amm/v1/BatchSwap",
  is(o: any): o is MsgBatchSwap {
    return o && (o.$typeUrl === MsgBatchSwap.typeUrl || typeof o.creator === "string" && isSet(o.swapType) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.is(o.steps[0])) && Array.isArray(o.minAmountsOut) && (!o.minAmountsOut.length || Coin.is(o.minAmountsOut[0])) && Array.isArray(o.maxAmountsIn) && (!o.maxAmountsIn.length || Coin.is(o.maxAmountsIn[0])));
  },
  isSDK(o: any): o is MsgBatchSwapSDKType {
    return o && (o.$typeUrl === MsgBatchSwap.typeUrl || typeof o.creator === "string" && isSet(o.swap_type) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isSDK(o.steps[0])) && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isSDK(o.min_amounts_out[0])) && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isSDK(o.max_amounts_in[0])));
  },
  isAmino(o: any): o is MsgBatchSwapAmino {
    return o && (o.$typeUrl === MsgBatchSwap.typeUrl || typeof o.creator === "string" && isSet(o.swap_type) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isAmino(o.steps[0])) && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isAmino(o.min_amounts_out[0])) && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isAmino(o.max_amounts_in[0])));
  },
  encode(message: MsgBatchSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.swapType !== 0) {
      writer.uint32(16).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBatchSwap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.swapType = reader.int32() as any;
          break;
        case 3:
          message.steps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchSwap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : [],
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBatchSwap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgBatchSwap>): MsgBatchSwap {
    const message = createBaseMsgBatchSwap();
    message.creator = object.creator ?? "";
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBatchSwapAmino): MsgBatchSwap {
    const message = createBaseMsgBatchSwap();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchSwap, useInterfaces: boolean = true): MsgBatchSwapAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.max_amounts_in = message.maxAmountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBatchSwapAminoMsg): MsgBatchSwap {
    return MsgBatchSwap.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBatchSwap, useInterfaces: boolean = true): MsgBatchSwapAminoMsg {
    return {
      type: "pryzm/amm/v1/BatchSwap",
      value: MsgBatchSwap.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgBatchSwapProtoMsg, useInterfaces: boolean = true): MsgBatchSwap {
    return MsgBatchSwap.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBatchSwap): Uint8Array {
    return MsgBatchSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSwap): MsgBatchSwapProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgBatchSwap",
      value: MsgBatchSwap.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBatchSwap.typeUrl, MsgBatchSwap);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBatchSwap.aminoType, MsgBatchSwap.typeUrl);
function createBaseMsgBatchSwapResponse(): MsgBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    swapProtocolFee: [],
    joinExitProtocolFee: [],
    swapFee: []
  };
}
export const MsgBatchSwapResponse = {
  typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse",
  is(o: any): o is MsgBatchSwapResponse {
    return o && (o.$typeUrl === MsgBatchSwapResponse.typeUrl || Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Array.isArray(o.swapProtocolFee) && (!o.swapProtocolFee.length || Coin.is(o.swapProtocolFee[0])) && Array.isArray(o.joinExitProtocolFee) && (!o.joinExitProtocolFee.length || Coin.is(o.joinExitProtocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is MsgBatchSwapResponseSDKType {
    return o && (o.$typeUrl === MsgBatchSwapResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isSDK(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isSDK(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is MsgBatchSwapResponseAmino {
    return o && (o.$typeUrl === MsgBatchSwapResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isAmino(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isAmino(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: MsgBatchSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.swapProtocolFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.joinExitProtocolFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBatchSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.swapProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.joinExitProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgBatchSwapResponse): unknown {
    const obj: any = {};
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
    return obj;
  },
  fromPartial(object: Partial<MsgBatchSwapResponse>): MsgBatchSwapResponse {
    const message = createBaseMsgBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBatchSwapResponseAmino): MsgBatchSwapResponse {
    const message = createBaseMsgBatchSwapResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBatchSwapResponse, useInterfaces: boolean = true): MsgBatchSwapResponseAmino {
    const obj: any = {};
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
    return obj;
  },
  fromAminoMsg(object: MsgBatchSwapResponseAminoMsg): MsgBatchSwapResponse {
    return MsgBatchSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSwapResponseProtoMsg, useInterfaces: boolean = true): MsgBatchSwapResponse {
    return MsgBatchSwapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBatchSwapResponse): Uint8Array {
    return MsgBatchSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSwapResponse): MsgBatchSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgBatchSwapResponse",
      value: MsgBatchSwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBatchSwapResponse.typeUrl, MsgBatchSwapResponse);
function createBaseMsgSetYammConfiguration(): MsgSetYammConfiguration {
  return {
    creator: "",
    configuration: YammConfiguration.fromPartial({})
  };
}
export const MsgSetYammConfiguration = {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration",
  aminoType: "pryzm/amm/v1/SetYammConfiguration",
  is(o: any): o is MsgSetYammConfiguration {
    return o && (o.$typeUrl === MsgSetYammConfiguration.typeUrl || typeof o.creator === "string" && YammConfiguration.is(o.configuration));
  },
  isSDK(o: any): o is MsgSetYammConfigurationSDKType {
    return o && (o.$typeUrl === MsgSetYammConfiguration.typeUrl || typeof o.creator === "string" && YammConfiguration.isSDK(o.configuration));
  },
  isAmino(o: any): o is MsgSetYammConfigurationAmino {
    return o && (o.$typeUrl === MsgSetYammConfiguration.typeUrl || typeof o.creator === "string" && YammConfiguration.isAmino(o.configuration));
  },
  encode(message: MsgSetYammConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.configuration !== undefined) {
      YammConfiguration.encode(message.configuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetYammConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.configuration = YammConfiguration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetYammConfiguration {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      configuration: isSet(object.configuration) ? YammConfiguration.fromJSON(object.configuration) : undefined
    };
  },
  toJSON(message: MsgSetYammConfiguration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.configuration !== undefined && (obj.configuration = message.configuration ? YammConfiguration.toJSON(message.configuration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetYammConfiguration>): MsgSetYammConfiguration {
    const message = createBaseMsgSetYammConfiguration();
    message.creator = object.creator ?? "";
    message.configuration = object.configuration !== undefined && object.configuration !== null ? YammConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: MsgSetYammConfigurationAmino): MsgSetYammConfiguration {
    const message = createBaseMsgSetYammConfiguration();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = YammConfiguration.fromAmino(object.configuration);
    }
    return message;
  },
  toAmino(message: MsgSetYammConfiguration, useInterfaces: boolean = true): MsgSetYammConfigurationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.configuration = message.configuration ? YammConfiguration.toAmino(message.configuration, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetYammConfigurationAminoMsg): MsgSetYammConfiguration {
    return MsgSetYammConfiguration.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetYammConfiguration, useInterfaces: boolean = true): MsgSetYammConfigurationAminoMsg {
    return {
      type: "pryzm/amm/v1/SetYammConfiguration",
      value: MsgSetYammConfiguration.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetYammConfigurationProtoMsg, useInterfaces: boolean = true): MsgSetYammConfiguration {
    return MsgSetYammConfiguration.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetYammConfiguration): Uint8Array {
    return MsgSetYammConfiguration.encode(message).finish();
  },
  toProtoMsg(message: MsgSetYammConfiguration): MsgSetYammConfigurationProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetYammConfiguration",
      value: MsgSetYammConfiguration.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetYammConfiguration.typeUrl, MsgSetYammConfiguration);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetYammConfiguration.aminoType, MsgSetYammConfiguration.typeUrl);
function createBaseMsgSetYammConfigurationResponse(): MsgSetYammConfigurationResponse {
  return {};
}
export const MsgSetYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse",
  is(o: any): o is MsgSetYammConfigurationResponse {
    return o && o.$typeUrl === MsgSetYammConfigurationResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetYammConfigurationResponseSDKType {
    return o && o.$typeUrl === MsgSetYammConfigurationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetYammConfigurationResponseAmino {
    return o && o.$typeUrl === MsgSetYammConfigurationResponse.typeUrl;
  },
  encode(_: MsgSetYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetYammConfigurationResponse {
    return {};
  },
  toJSON(_: MsgSetYammConfigurationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetYammConfigurationResponse>): MsgSetYammConfigurationResponse {
    const message = createBaseMsgSetYammConfigurationResponse();
    return message;
  },
  fromAmino(_: MsgSetYammConfigurationResponseAmino): MsgSetYammConfigurationResponse {
    const message = createBaseMsgSetYammConfigurationResponse();
    return message;
  },
  toAmino(_: MsgSetYammConfigurationResponse, useInterfaces: boolean = true): MsgSetYammConfigurationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetYammConfigurationResponseAminoMsg): MsgSetYammConfigurationResponse {
    return MsgSetYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetYammConfigurationResponseProtoMsg, useInterfaces: boolean = true): MsgSetYammConfigurationResponse {
    return MsgSetYammConfigurationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetYammConfigurationResponse): Uint8Array {
    return MsgSetYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetYammConfigurationResponse): MsgSetYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetYammConfigurationResponse",
      value: MsgSetYammConfigurationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetYammConfigurationResponse.typeUrl, MsgSetYammConfigurationResponse);
function createBaseMsgWhitelistRoute(): MsgWhitelistRoute {
  return {
    authority: "",
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const MsgWhitelistRoute = {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute",
  aminoType: "pryzm/amm/v1/WhitelistRoute",
  is(o: any): o is MsgWhitelistRoute {
    return o && (o.$typeUrl === MsgWhitelistRoute.typeUrl || typeof o.authority === "string" && WhitelistedRoute.is(o.whitelistedRoute));
  },
  isSDK(o: any): o is MsgWhitelistRouteSDKType {
    return o && (o.$typeUrl === MsgWhitelistRoute.typeUrl || typeof o.authority === "string" && WhitelistedRoute.isSDK(o.whitelisted_route));
  },
  isAmino(o: any): o is MsgWhitelistRouteAmino {
    return o && (o.$typeUrl === MsgWhitelistRoute.typeUrl || typeof o.authority === "string" && WhitelistedRoute.isAmino(o.whitelisted_route));
  },
  encode(message: MsgWhitelistRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWhitelistRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.whitelistedRoute = WhitelistedRoute.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWhitelistRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: MsgWhitelistRoute): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgWhitelistRoute>): MsgWhitelistRoute {
    const message = createBaseMsgWhitelistRoute();
    message.authority = object.authority ?? "";
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  },
  fromAmino(object: MsgWhitelistRouteAmino): MsgWhitelistRoute {
    const message = createBaseMsgWhitelistRoute();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = WhitelistedRoute.fromAmino(object.whitelisted_route);
    }
    return message;
  },
  toAmino(message: MsgWhitelistRoute, useInterfaces: boolean = true): MsgWhitelistRouteAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.whitelisted_route = message.whitelistedRoute ? WhitelistedRoute.toAmino(message.whitelistedRoute, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistRouteAminoMsg): MsgWhitelistRoute {
    return MsgWhitelistRoute.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWhitelistRoute, useInterfaces: boolean = true): MsgWhitelistRouteAminoMsg {
    return {
      type: "pryzm/amm/v1/WhitelistRoute",
      value: MsgWhitelistRoute.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgWhitelistRouteProtoMsg, useInterfaces: boolean = true): MsgWhitelistRoute {
    return MsgWhitelistRoute.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWhitelistRoute): Uint8Array {
    return MsgWhitelistRoute.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistRoute): MsgWhitelistRouteProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgWhitelistRoute",
      value: MsgWhitelistRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWhitelistRoute.typeUrl, MsgWhitelistRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWhitelistRoute.aminoType, MsgWhitelistRoute.typeUrl);
function createBaseMsgWhitelistRouteResponse(): MsgWhitelistRouteResponse {
  return {};
}
export const MsgWhitelistRouteResponse = {
  typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse",
  is(o: any): o is MsgWhitelistRouteResponse {
    return o && o.$typeUrl === MsgWhitelistRouteResponse.typeUrl;
  },
  isSDK(o: any): o is MsgWhitelistRouteResponseSDKType {
    return o && o.$typeUrl === MsgWhitelistRouteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgWhitelistRouteResponseAmino {
    return o && o.$typeUrl === MsgWhitelistRouteResponse.typeUrl;
  },
  encode(_: MsgWhitelistRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgWhitelistRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWhitelistRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWhitelistRouteResponse {
    return {};
  },
  toJSON(_: MsgWhitelistRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWhitelistRouteResponse>): MsgWhitelistRouteResponse {
    const message = createBaseMsgWhitelistRouteResponse();
    return message;
  },
  fromAmino(_: MsgWhitelistRouteResponseAmino): MsgWhitelistRouteResponse {
    const message = createBaseMsgWhitelistRouteResponse();
    return message;
  },
  toAmino(_: MsgWhitelistRouteResponse, useInterfaces: boolean = true): MsgWhitelistRouteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWhitelistRouteResponseAminoMsg): MsgWhitelistRouteResponse {
    return MsgWhitelistRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWhitelistRouteResponseProtoMsg, useInterfaces: boolean = true): MsgWhitelistRouteResponse {
    return MsgWhitelistRouteResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgWhitelistRouteResponse): Uint8Array {
    return MsgWhitelistRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWhitelistRouteResponse): MsgWhitelistRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgWhitelistRouteResponse",
      value: MsgWhitelistRouteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgWhitelistRouteResponse.typeUrl, MsgWhitelistRouteResponse);
function createBaseMsgSetWhitelistedRouteEnabled(): MsgSetWhitelistedRouteEnabled {
  return {
    authority: "",
    tokenIn: "",
    tokenOut: "",
    enabled: false
  };
}
export const MsgSetWhitelistedRouteEnabled = {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled",
  aminoType: "pryzm/amm/v1/SetWhitelistedRouteEnabled",
  is(o: any): o is MsgSetWhitelistedRouteEnabled {
    return o && (o.$typeUrl === MsgSetWhitelistedRouteEnabled.typeUrl || typeof o.authority === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.enabled === "boolean");
  },
  isSDK(o: any): o is MsgSetWhitelistedRouteEnabledSDKType {
    return o && (o.$typeUrl === MsgSetWhitelistedRouteEnabled.typeUrl || typeof o.authority === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.enabled === "boolean");
  },
  isAmino(o: any): o is MsgSetWhitelistedRouteEnabledAmino {
    return o && (o.$typeUrl === MsgSetWhitelistedRouteEnabled.typeUrl || typeof o.authority === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.enabled === "boolean");
  },
  encode(message: MsgSetWhitelistedRouteEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWhitelistedRouteEnabled {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: MsgSetWhitelistedRouteEnabled): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<MsgSetWhitelistedRouteEnabled>): MsgSetWhitelistedRouteEnabled {
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    message.authority = object.authority ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: MsgSetWhitelistedRouteEnabledAmino): MsgSetWhitelistedRouteEnabled {
    const message = createBaseMsgSetWhitelistedRouteEnabled();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: MsgSetWhitelistedRouteEnabled, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabledAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedRouteEnabledAminoMsg): MsgSetWhitelistedRouteEnabled {
    return MsgSetWhitelistedRouteEnabled.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWhitelistedRouteEnabled, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabledAminoMsg {
    return {
      type: "pryzm/amm/v1/SetWhitelistedRouteEnabled",
      value: MsgSetWhitelistedRouteEnabled.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetWhitelistedRouteEnabledProtoMsg, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabled {
    return MsgSetWhitelistedRouteEnabled.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetWhitelistedRouteEnabled): Uint8Array {
    return MsgSetWhitelistedRouteEnabled.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedRouteEnabled): MsgSetWhitelistedRouteEnabledProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabled",
      value: MsgSetWhitelistedRouteEnabled.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetWhitelistedRouteEnabled.typeUrl, MsgSetWhitelistedRouteEnabled);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetWhitelistedRouteEnabled.aminoType, MsgSetWhitelistedRouteEnabled.typeUrl);
function createBaseMsgSetWhitelistedRouteEnabledResponse(): MsgSetWhitelistedRouteEnabledResponse {
  return {};
}
export const MsgSetWhitelistedRouteEnabledResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse",
  is(o: any): o is MsgSetWhitelistedRouteEnabledResponse {
    return o && o.$typeUrl === MsgSetWhitelistedRouteEnabledResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetWhitelistedRouteEnabledResponseSDKType {
    return o && o.$typeUrl === MsgSetWhitelistedRouteEnabledResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetWhitelistedRouteEnabledResponseAmino {
    return o && o.$typeUrl === MsgSetWhitelistedRouteEnabledResponse.typeUrl;
  },
  encode(_: MsgSetWhitelistedRouteEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetWhitelistedRouteEnabledResponse {
    return {};
  },
  toJSON(_: MsgSetWhitelistedRouteEnabledResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetWhitelistedRouteEnabledResponse>): MsgSetWhitelistedRouteEnabledResponse {
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    return message;
  },
  fromAmino(_: MsgSetWhitelistedRouteEnabledResponseAmino): MsgSetWhitelistedRouteEnabledResponse {
    const message = createBaseMsgSetWhitelistedRouteEnabledResponse();
    return message;
  },
  toAmino(_: MsgSetWhitelistedRouteEnabledResponse, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabledResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetWhitelistedRouteEnabledResponseAminoMsg): MsgSetWhitelistedRouteEnabledResponse {
    return MsgSetWhitelistedRouteEnabledResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetWhitelistedRouteEnabledResponseProtoMsg, useInterfaces: boolean = true): MsgSetWhitelistedRouteEnabledResponse {
    return MsgSetWhitelistedRouteEnabledResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetWhitelistedRouteEnabledResponse): Uint8Array {
    return MsgSetWhitelistedRouteEnabledResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWhitelistedRouteEnabledResponse): MsgSetWhitelistedRouteEnabledResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetWhitelistedRouteEnabledResponse",
      value: MsgSetWhitelistedRouteEnabledResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetWhitelistedRouteEnabledResponse.typeUrl, MsgSetWhitelistedRouteEnabledResponse);
function createBaseMsgSubmitOrder(): MsgSubmitOrder {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    allowMatching: false,
    amountPerStep: "",
    totalAmount: "",
    millisInterval: BigInt(0),
    maxStepSpotPrice: "",
    maxMatchingSpotPrice: undefined
  };
}
export const MsgSubmitOrder = {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrder",
  aminoType: "pryzm/amm/v1/SubmitOrder",
  is(o: any): o is MsgSubmitOrder {
    return o && (o.$typeUrl === MsgSubmitOrder.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.allowMatching === "boolean" && typeof o.amountPerStep === "string" && typeof o.totalAmount === "string" && typeof o.millisInterval === "bigint" && typeof o.maxStepSpotPrice === "string");
  },
  isSDK(o: any): o is MsgSubmitOrderSDKType {
    return o && (o.$typeUrl === MsgSubmitOrder.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.allow_matching === "boolean" && typeof o.amount_per_step === "string" && typeof o.total_amount === "string" && typeof o.millis_interval === "bigint" && typeof o.max_step_spot_price === "string");
  },
  isAmino(o: any): o is MsgSubmitOrderAmino {
    return o && (o.$typeUrl === MsgSubmitOrder.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.allow_matching === "boolean" && typeof o.amount_per_step === "string" && typeof o.total_amount === "string" && typeof o.millis_interval === "bigint" && typeof o.max_step_spot_price === "string");
  },
  encode(message: MsgSubmitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(40).bool(message.whitelistedRoute);
    }
    if (message.allowMatching === true) {
      writer.uint32(48).bool(message.allowMatching);
    }
    if (message.amountPerStep !== "") {
      writer.uint32(58).string(message.amountPerStep);
    }
    if (message.totalAmount !== "") {
      writer.uint32(66).string(message.totalAmount);
    }
    if (message.millisInterval !== BigInt(0)) {
      writer.uint32(72).int64(message.millisInterval);
    }
    if (message.maxStepSpotPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxStepSpotPrice, 18).atomics);
    }
    if (message.maxMatchingSpotPrice !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.maxMatchingSpotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrder();
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
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.whitelistedRoute = reader.bool();
          break;
        case 6:
          message.allowMatching = reader.bool();
          break;
        case 7:
          message.amountPerStep = reader.string();
          break;
        case 8:
          message.totalAmount = reader.string();
          break;
        case 9:
          message.millisInterval = reader.int64();
          break;
        case 10:
          message.maxStepSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.maxMatchingSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      allowMatching: isSet(object.allowMatching) ? Boolean(object.allowMatching) : false,
      amountPerStep: isSet(object.amountPerStep) ? String(object.amountPerStep) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      millisInterval: isSet(object.millisInterval) ? BigInt(object.millisInterval.toString()) : BigInt(0),
      maxStepSpotPrice: isSet(object.maxStepSpotPrice) ? String(object.maxStepSpotPrice) : "",
      maxMatchingSpotPrice: isSet(object.maxMatchingSpotPrice) ? String(object.maxMatchingSpotPrice) : undefined
    };
  },
  toJSON(message: MsgSubmitOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.allowMatching !== undefined && (obj.allowMatching = message.allowMatching);
    message.amountPerStep !== undefined && (obj.amountPerStep = message.amountPerStep);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.millisInterval !== undefined && (obj.millisInterval = (message.millisInterval || BigInt(0)).toString());
    message.maxStepSpotPrice !== undefined && (obj.maxStepSpotPrice = message.maxStepSpotPrice);
    message.maxMatchingSpotPrice !== undefined && (obj.maxMatchingSpotPrice = message.maxMatchingSpotPrice);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitOrder>): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.allowMatching = object.allowMatching ?? false;
    message.amountPerStep = object.amountPerStep ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.millisInterval = object.millisInterval !== undefined && object.millisInterval !== null ? BigInt(object.millisInterval.toString()) : BigInt(0);
    message.maxStepSpotPrice = object.maxStepSpotPrice ?? "";
    message.maxMatchingSpotPrice = object.maxMatchingSpotPrice ?? undefined;
    return message;
  },
  fromAmino(object: MsgSubmitOrderAmino): MsgSubmitOrder {
    const message = createBaseMsgSubmitOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
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
    if (object.allow_matching !== undefined && object.allow_matching !== null) {
      message.allowMatching = object.allow_matching;
    }
    if (object.amount_per_step !== undefined && object.amount_per_step !== null) {
      message.amountPerStep = object.amount_per_step;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.millis_interval !== undefined && object.millis_interval !== null) {
      message.millisInterval = BigInt(object.millis_interval);
    }
    if (object.max_step_spot_price !== undefined && object.max_step_spot_price !== null) {
      message.maxStepSpotPrice = object.max_step_spot_price;
    }
    if (object.max_matching_spot_price !== undefined && object.max_matching_spot_price !== null) {
      message.maxMatchingSpotPrice = object.max_matching_spot_price;
    }
    return message;
  },
  toAmino(message: MsgSubmitOrder, useInterfaces: boolean = true): MsgSubmitOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.allow_matching = message.allowMatching === false ? undefined : message.allowMatching;
    obj.amount_per_step = message.amountPerStep === "" ? undefined : message.amountPerStep;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.millis_interval = message.millisInterval ? message.millisInterval.toString() : undefined;
    obj.max_step_spot_price = padDecimal(message.maxStepSpotPrice) === "" ? undefined : padDecimal(message.maxStepSpotPrice);
    obj.max_matching_spot_price = padDecimal(message.maxMatchingSpotPrice) === null ? undefined : padDecimal(message.maxMatchingSpotPrice);
    return obj;
  },
  fromAminoMsg(object: MsgSubmitOrderAminoMsg): MsgSubmitOrder {
    return MsgSubmitOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitOrder, useInterfaces: boolean = true): MsgSubmitOrderAminoMsg {
    return {
      type: "pryzm/amm/v1/SubmitOrder",
      value: MsgSubmitOrder.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSubmitOrderProtoMsg, useInterfaces: boolean = true): MsgSubmitOrder {
    return MsgSubmitOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitOrder): Uint8Array {
    return MsgSubmitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitOrder): MsgSubmitOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSubmitOrder",
      value: MsgSubmitOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitOrder.typeUrl, MsgSubmitOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitOrder.aminoType, MsgSubmitOrder.typeUrl);
function createBaseMsgSubmitOrderResponse(): MsgSubmitOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const MsgSubmitOrderResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse",
  is(o: any): o is MsgSubmitOrderResponse {
    return o && (o.$typeUrl === MsgSubmitOrderResponse.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is MsgSubmitOrderResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitOrderResponse.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is MsgSubmitOrderResponseAmino {
    return o && (o.$typeUrl === MsgSubmitOrderResponse.typeUrl || Order.isAmino(o.order));
  },
  encode(message: MsgSubmitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSubmitOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitOrderResponse();
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
  fromJSON(object: any): MsgSubmitOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: MsgSubmitOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitOrderResponse>): MsgSubmitOrderResponse {
    const message = createBaseMsgSubmitOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitOrderResponseAmino): MsgSubmitOrderResponse {
    const message = createBaseMsgSubmitOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: MsgSubmitOrderResponse, useInterfaces: boolean = true): MsgSubmitOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitOrderResponseAminoMsg): MsgSubmitOrderResponse {
    return MsgSubmitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitOrderResponseProtoMsg, useInterfaces: boolean = true): MsgSubmitOrderResponse {
    return MsgSubmitOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSubmitOrderResponse): Uint8Array {
    return MsgSubmitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitOrderResponse): MsgSubmitOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSubmitOrderResponse",
      value: MsgSubmitOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitOrderResponse.typeUrl, MsgSubmitOrderResponse);
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgCancelOrder = {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrder",
  aminoType: "pryzm/amm/v1/CancelOrder",
  is(o: any): o is MsgCancelOrder {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
  },
  isSDK(o: any): o is MsgCancelOrderSDKType {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
  },
  isAmino(o: any): o is MsgCancelOrderAmino {
    return o && (o.$typeUrl === MsgCancelOrder.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
  },
  encode(message: MsgCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCancelOrder, useInterfaces: boolean = true): MsgCancelOrderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder {
    return MsgCancelOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelOrder, useInterfaces: boolean = true): MsgCancelOrderAminoMsg {
    return {
      type: "pryzm/amm/v1/CancelOrder",
      value: MsgCancelOrder.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCancelOrderProtoMsg, useInterfaces: boolean = true): MsgCancelOrder {
    return MsgCancelOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelOrder): Uint8Array {
    return MsgCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelOrder",
      value: MsgCancelOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelOrder.typeUrl, MsgCancelOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelOrder.aminoType, MsgCancelOrder.typeUrl);
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {
    withdrawnDeposit: Coin.fromPartial({})
  };
}
export const MsgCancelOrderResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse",
  is(o: any): o is MsgCancelOrderResponse {
    return o && (o.$typeUrl === MsgCancelOrderResponse.typeUrl || Coin.is(o.withdrawnDeposit));
  },
  isSDK(o: any): o is MsgCancelOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCancelOrderResponse.typeUrl || Coin.isSDK(o.withdrawn_deposit));
  },
  isAmino(o: any): o is MsgCancelOrderResponseAmino {
    return o && (o.$typeUrl === MsgCancelOrderResponse.typeUrl || Coin.isAmino(o.withdrawn_deposit));
  },
  encode(message: MsgCancelOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawnDeposit !== undefined) {
      Coin.encode(message.withdrawnDeposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawnDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelOrderResponse {
    return {
      withdrawnDeposit: isSet(object.withdrawnDeposit) ? Coin.fromJSON(object.withdrawnDeposit) : undefined
    };
  },
  toJSON(message: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    message.withdrawnDeposit !== undefined && (obj.withdrawnDeposit = message.withdrawnDeposit ? Coin.toJSON(message.withdrawnDeposit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    message.withdrawnDeposit = object.withdrawnDeposit !== undefined && object.withdrawnDeposit !== null ? Coin.fromPartial(object.withdrawnDeposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelOrderResponseAmino): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    if (object.withdrawn_deposit !== undefined && object.withdrawn_deposit !== null) {
      message.withdrawnDeposit = Coin.fromAmino(object.withdrawn_deposit);
    }
    return message;
  },
  toAmino(message: MsgCancelOrderResponse, useInterfaces: boolean = true): MsgCancelOrderResponseAmino {
    const obj: any = {};
    obj.withdrawn_deposit = message.withdrawnDeposit ? Coin.toAmino(message.withdrawnDeposit, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderResponseProtoMsg, useInterfaces: boolean = true): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelOrderResponse): Uint8Array {
    return MsgCancelOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelOrderResponse",
      value: MsgCancelOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelOrderResponse.typeUrl, MsgCancelOrderResponse);
function createBaseMsgProposeMatch(): MsgProposeMatch {
  return {
    creator: "",
    pairs: []
  };
}
export const MsgProposeMatch = {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatch",
  aminoType: "pryzm/amm/v1/ProposeMatch",
  is(o: any): o is MsgProposeMatch {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.is(o.pairs[0])));
  },
  isSDK(o: any): o is MsgProposeMatchSDKType {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is MsgProposeMatchAmino {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.isAmino(o.pairs[0])));
  },
  encode(message: MsgProposeMatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pairs) {
      PairMatchProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgProposeMatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pairs.push(PairMatchProposal.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PairMatchProposal.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatch>): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    message.creator = object.creator ?? "";
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgProposeMatchAmino): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatch, useInterfaces: boolean = true): MsgProposeMatchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchAminoMsg): MsgProposeMatch {
    return MsgProposeMatch.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeMatch, useInterfaces: boolean = true): MsgProposeMatchAminoMsg {
    return {
      type: "pryzm/amm/v1/ProposeMatch",
      value: MsgProposeMatch.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgProposeMatchProtoMsg, useInterfaces: boolean = true): MsgProposeMatch {
    return MsgProposeMatch.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgProposeMatch): Uint8Array {
    return MsgProposeMatch.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatch): MsgProposeMatchProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgProposeMatch",
      value: MsgProposeMatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProposeMatch.typeUrl, MsgProposeMatch);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgProposeMatch.aminoType, MsgProposeMatch.typeUrl);
function createBaseMsgProposeMatchResponse(): MsgProposeMatchResponse {
  return {
    proposerReward: []
  };
}
export const MsgProposeMatchResponse = {
  typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse",
  is(o: any): o is MsgProposeMatchResponse {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposerReward) && (!o.proposerReward.length || Coin.is(o.proposerReward[0])));
  },
  isSDK(o: any): o is MsgProposeMatchResponseSDKType {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isSDK(o.proposer_reward[0])));
  },
  isAmino(o: any): o is MsgProposeMatchResponseAmino {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isAmino(o.proposer_reward[0])));
  },
  encode(message: MsgProposeMatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgProposeMatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposerReward.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatchResponse {
    return {
      proposerReward: Array.isArray(object?.proposerReward) ? object.proposerReward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatchResponse): unknown {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatchResponse>): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposerReward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgProposeMatchResponseAmino): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposer_reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatchResponse, useInterfaces: boolean = true): MsgProposeMatchResponseAmino {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposer_reward = message.proposerReward.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposer_reward = message.proposerReward;
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchResponseAminoMsg): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeMatchResponseProtoMsg, useInterfaces: boolean = true): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgProposeMatchResponse): Uint8Array {
    return MsgProposeMatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatchResponse): MsgProposeMatchResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgProposeMatchResponse",
      value: MsgProposeMatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProposeMatchResponse.typeUrl, MsgProposeMatchResponse);
function createBaseMsgSetCircuitBreakers(): MsgSetCircuitBreakers {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenCircuitBreakers: []
  };
}
export const MsgSetCircuitBreakers = {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers",
  aminoType: "pryzm/amm/v1/SetCircuitBreakers",
  is(o: any): o is MsgSetCircuitBreakers {
    return o && (o.$typeUrl === MsgSetCircuitBreakers.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.tokenCircuitBreakers) && (!o.tokenCircuitBreakers.length || TokenCircuitBreakerSettings.is(o.tokenCircuitBreakers[0])));
  },
  isSDK(o: any): o is MsgSetCircuitBreakersSDKType {
    return o && (o.$typeUrl === MsgSetCircuitBreakers.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.token_circuit_breakers) && (!o.token_circuit_breakers.length || TokenCircuitBreakerSettings.isSDK(o.token_circuit_breakers[0])));
  },
  isAmino(o: any): o is MsgSetCircuitBreakersAmino {
    return o && (o.$typeUrl === MsgSetCircuitBreakers.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.token_circuit_breakers) && (!o.token_circuit_breakers.length || TokenCircuitBreakerSettings.isAmino(o.token_circuit_breakers[0])));
  },
  encode(message: MsgSetCircuitBreakers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.tokenCircuitBreakers) {
      TokenCircuitBreakerSettings.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetCircuitBreakers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCircuitBreakers();
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
          message.tokenCircuitBreakers.push(TokenCircuitBreakerSettings.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetCircuitBreakers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenCircuitBreakers: Array.isArray(object?.tokenCircuitBreakers) ? object.tokenCircuitBreakers.map((e: any) => TokenCircuitBreakerSettings.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetCircuitBreakers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.tokenCircuitBreakers) {
      obj.tokenCircuitBreakers = message.tokenCircuitBreakers.map(e => e ? TokenCircuitBreakerSettings.toJSON(e) : undefined);
    } else {
      obj.tokenCircuitBreakers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetCircuitBreakers>): MsgSetCircuitBreakers {
    const message = createBaseMsgSetCircuitBreakers();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenCircuitBreakers = object.tokenCircuitBreakers?.map(e => TokenCircuitBreakerSettings.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetCircuitBreakersAmino): MsgSetCircuitBreakers {
    const message = createBaseMsgSetCircuitBreakers();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.tokenCircuitBreakers = object.token_circuit_breakers?.map(e => TokenCircuitBreakerSettings.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetCircuitBreakers, useInterfaces: boolean = true): MsgSetCircuitBreakersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.tokenCircuitBreakers) {
      obj.token_circuit_breakers = message.tokenCircuitBreakers.map(e => e ? TokenCircuitBreakerSettings.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.token_circuit_breakers = message.tokenCircuitBreakers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetCircuitBreakersAminoMsg): MsgSetCircuitBreakers {
    return MsgSetCircuitBreakers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetCircuitBreakers, useInterfaces: boolean = true): MsgSetCircuitBreakersAminoMsg {
    return {
      type: "pryzm/amm/v1/SetCircuitBreakers",
      value: MsgSetCircuitBreakers.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetCircuitBreakersProtoMsg, useInterfaces: boolean = true): MsgSetCircuitBreakers {
    return MsgSetCircuitBreakers.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetCircuitBreakers): Uint8Array {
    return MsgSetCircuitBreakers.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCircuitBreakers): MsgSetCircuitBreakersProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakers",
      value: MsgSetCircuitBreakers.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetCircuitBreakers.typeUrl, MsgSetCircuitBreakers);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetCircuitBreakers.aminoType, MsgSetCircuitBreakers.typeUrl);
function createBaseMsgSetCircuitBreakersResponse(): MsgSetCircuitBreakersResponse {
  return {};
}
export const MsgSetCircuitBreakersResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse",
  is(o: any): o is MsgSetCircuitBreakersResponse {
    return o && o.$typeUrl === MsgSetCircuitBreakersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetCircuitBreakersResponseSDKType {
    return o && o.$typeUrl === MsgSetCircuitBreakersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetCircuitBreakersResponseAmino {
    return o && o.$typeUrl === MsgSetCircuitBreakersResponse.typeUrl;
  },
  encode(_: MsgSetCircuitBreakersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetCircuitBreakersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetCircuitBreakersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetCircuitBreakersResponse {
    return {};
  },
  toJSON(_: MsgSetCircuitBreakersResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetCircuitBreakersResponse>): MsgSetCircuitBreakersResponse {
    const message = createBaseMsgSetCircuitBreakersResponse();
    return message;
  },
  fromAmino(_: MsgSetCircuitBreakersResponseAmino): MsgSetCircuitBreakersResponse {
    const message = createBaseMsgSetCircuitBreakersResponse();
    return message;
  },
  toAmino(_: MsgSetCircuitBreakersResponse, useInterfaces: boolean = true): MsgSetCircuitBreakersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetCircuitBreakersResponseAminoMsg): MsgSetCircuitBreakersResponse {
    return MsgSetCircuitBreakersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetCircuitBreakersResponseProtoMsg, useInterfaces: boolean = true): MsgSetCircuitBreakersResponse {
    return MsgSetCircuitBreakersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetCircuitBreakersResponse): Uint8Array {
    return MsgSetCircuitBreakersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetCircuitBreakersResponse): MsgSetCircuitBreakersResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetCircuitBreakersResponse",
      value: MsgSetCircuitBreakersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetCircuitBreakersResponse.typeUrl, MsgSetCircuitBreakersResponse);
function createBaseMsgSetRecoveryMode(): MsgSetRecoveryMode {
  return {
    authority: "",
    poolId: BigInt(0),
    recoveryMode: false
  };
}
export const MsgSetRecoveryMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode",
  aminoType: "pryzm/amm/v1/SetRecoveryMode",
  is(o: any): o is MsgSetRecoveryMode {
    return o && (o.$typeUrl === MsgSetRecoveryMode.typeUrl || typeof o.authority === "string" && typeof o.poolId === "bigint" && typeof o.recoveryMode === "boolean");
  },
  isSDK(o: any): o is MsgSetRecoveryModeSDKType {
    return o && (o.$typeUrl === MsgSetRecoveryMode.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint" && typeof o.recovery_mode === "boolean");
  },
  isAmino(o: any): o is MsgSetRecoveryModeAmino {
    return o && (o.$typeUrl === MsgSetRecoveryMode.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint" && typeof o.recovery_mode === "boolean");
  },
  encode(message: MsgSetRecoveryMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.recoveryMode === true) {
      writer.uint32(24).bool(message.recoveryMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetRecoveryMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRecoveryMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.recoveryMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetRecoveryMode {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      recoveryMode: isSet(object.recoveryMode) ? Boolean(object.recoveryMode) : false
    };
  },
  toJSON(message: MsgSetRecoveryMode): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.recoveryMode !== undefined && (obj.recoveryMode = message.recoveryMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetRecoveryMode>): MsgSetRecoveryMode {
    const message = createBaseMsgSetRecoveryMode();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.recoveryMode = object.recoveryMode ?? false;
    return message;
  },
  fromAmino(object: MsgSetRecoveryModeAmino): MsgSetRecoveryMode {
    const message = createBaseMsgSetRecoveryMode();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.recovery_mode !== undefined && object.recovery_mode !== null) {
      message.recoveryMode = object.recovery_mode;
    }
    return message;
  },
  toAmino(message: MsgSetRecoveryMode, useInterfaces: boolean = true): MsgSetRecoveryModeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.recovery_mode = message.recoveryMode === false ? undefined : message.recoveryMode;
    return obj;
  },
  fromAminoMsg(object: MsgSetRecoveryModeAminoMsg): MsgSetRecoveryMode {
    return MsgSetRecoveryMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRecoveryMode, useInterfaces: boolean = true): MsgSetRecoveryModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetRecoveryMode",
      value: MsgSetRecoveryMode.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetRecoveryModeProtoMsg, useInterfaces: boolean = true): MsgSetRecoveryMode {
    return MsgSetRecoveryMode.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetRecoveryMode): Uint8Array {
    return MsgSetRecoveryMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRecoveryMode): MsgSetRecoveryModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetRecoveryMode",
      value: MsgSetRecoveryMode.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetRecoveryMode.typeUrl, MsgSetRecoveryMode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetRecoveryMode.aminoType, MsgSetRecoveryMode.typeUrl);
function createBaseMsgSetRecoveryModeResponse(): MsgSetRecoveryModeResponse {
  return {};
}
export const MsgSetRecoveryModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse",
  is(o: any): o is MsgSetRecoveryModeResponse {
    return o && o.$typeUrl === MsgSetRecoveryModeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetRecoveryModeResponseSDKType {
    return o && o.$typeUrl === MsgSetRecoveryModeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetRecoveryModeResponseAmino {
    return o && o.$typeUrl === MsgSetRecoveryModeResponse.typeUrl;
  },
  encode(_: MsgSetRecoveryModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetRecoveryModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRecoveryModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetRecoveryModeResponse {
    return {};
  },
  toJSON(_: MsgSetRecoveryModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetRecoveryModeResponse>): MsgSetRecoveryModeResponse {
    const message = createBaseMsgSetRecoveryModeResponse();
    return message;
  },
  fromAmino(_: MsgSetRecoveryModeResponseAmino): MsgSetRecoveryModeResponse {
    const message = createBaseMsgSetRecoveryModeResponse();
    return message;
  },
  toAmino(_: MsgSetRecoveryModeResponse, useInterfaces: boolean = true): MsgSetRecoveryModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRecoveryModeResponseAminoMsg): MsgSetRecoveryModeResponse {
    return MsgSetRecoveryModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRecoveryModeResponseProtoMsg, useInterfaces: boolean = true): MsgSetRecoveryModeResponse {
    return MsgSetRecoveryModeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetRecoveryModeResponse): Uint8Array {
    return MsgSetRecoveryModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRecoveryModeResponse): MsgSetRecoveryModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetRecoveryModeResponse",
      value: MsgSetRecoveryModeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetRecoveryModeResponse.typeUrl, MsgSetRecoveryModeResponse);
function createBaseMsgRecoveryExit(): MsgRecoveryExit {
  return {
    creator: "",
    poolId: BigInt(0),
    lptIn: "",
    minAmountsOut: []
  };
}
export const MsgRecoveryExit = {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExit",
  aminoType: "pryzm/amm/v1/RecoveryExit",
  is(o: any): o is MsgRecoveryExit {
    return o && (o.$typeUrl === MsgRecoveryExit.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.lptIn === "string" && Array.isArray(o.minAmountsOut) && (!o.minAmountsOut.length || Coin.is(o.minAmountsOut[0])));
  },
  isSDK(o: any): o is MsgRecoveryExitSDKType {
    return o && (o.$typeUrl === MsgRecoveryExit.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isSDK(o.min_amounts_out[0])));
  },
  isAmino(o: any): o is MsgRecoveryExitAmino {
    return o && (o.$typeUrl === MsgRecoveryExit.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isAmino(o.min_amounts_out[0])));
  },
  encode(message: MsgRecoveryExit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(26).string(message.lptIn);
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRecoveryExit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoveryExit();
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
          message.lptIn = reader.string();
          break;
        case 4:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecoveryExit {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRecoveryExit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgRecoveryExit>): MsgRecoveryExit {
    const message = createBaseMsgRecoveryExit();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRecoveryExitAmino): MsgRecoveryExit {
    const message = createBaseMsgRecoveryExit();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRecoveryExit, useInterfaces: boolean = true): MsgRecoveryExitAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn === "" ? undefined : message.lptIn;
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRecoveryExitAminoMsg): MsgRecoveryExit {
    return MsgRecoveryExit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoveryExit, useInterfaces: boolean = true): MsgRecoveryExitAminoMsg {
    return {
      type: "pryzm/amm/v1/RecoveryExit",
      value: MsgRecoveryExit.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRecoveryExitProtoMsg, useInterfaces: boolean = true): MsgRecoveryExit {
    return MsgRecoveryExit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRecoveryExit): Uint8Array {
    return MsgRecoveryExit.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoveryExit): MsgRecoveryExitProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRecoveryExit",
      value: MsgRecoveryExit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecoveryExit.typeUrl, MsgRecoveryExit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecoveryExit.aminoType, MsgRecoveryExit.typeUrl);
function createBaseMsgRecoveryExitResponse(): MsgRecoveryExitResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: []
  };
}
export const MsgRecoveryExitResponse = {
  typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse",
  is(o: any): o is MsgRecoveryExitResponse {
    return o && (o.$typeUrl === MsgRecoveryExitResponse.typeUrl || Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])));
  },
  isSDK(o: any): o is MsgRecoveryExitResponseSDKType {
    return o && (o.$typeUrl === MsgRecoveryExitResponse.typeUrl || Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])));
  },
  isAmino(o: any): o is MsgRecoveryExitResponseAmino {
    return o && (o.$typeUrl === MsgRecoveryExitResponse.typeUrl || Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])));
  },
  encode(message: MsgRecoveryExitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lptIn !== undefined) {
      Coin.encode(message.lptIn, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRecoveryExitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoveryExitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lptIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecoveryExitResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRecoveryExitResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgRecoveryExitResponse>): MsgRecoveryExitResponse {
    const message = createBaseMsgRecoveryExitResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRecoveryExitResponseAmino): MsgRecoveryExitResponse {
    const message = createBaseMsgRecoveryExitResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRecoveryExitResponse, useInterfaces: boolean = true): MsgRecoveryExitResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn, useInterfaces) : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRecoveryExitResponseAminoMsg): MsgRecoveryExitResponse {
    return MsgRecoveryExitResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoveryExitResponseProtoMsg, useInterfaces: boolean = true): MsgRecoveryExitResponse {
    return MsgRecoveryExitResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRecoveryExitResponse): Uint8Array {
    return MsgRecoveryExitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoveryExitResponse): MsgRecoveryExitResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRecoveryExitResponse",
      value: MsgRecoveryExitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRecoveryExitResponse.typeUrl, MsgRecoveryExitResponse);
function createBaseMsgSetPauseMode(): MsgSetPauseMode {
  return {
    creator: "",
    poolId: BigInt(0),
    pauseMode: false
  };
}
export const MsgSetPauseMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseMode",
  aminoType: "pryzm/amm/v1/SetPauseMode",
  is(o: any): o is MsgSetPauseMode {
    return o && (o.$typeUrl === MsgSetPauseMode.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.pauseMode === "boolean");
  },
  isSDK(o: any): o is MsgSetPauseModeSDKType {
    return o && (o.$typeUrl === MsgSetPauseMode.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.pause_mode === "boolean");
  },
  isAmino(o: any): o is MsgSetPauseModeAmino {
    return o && (o.$typeUrl === MsgSetPauseMode.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.pause_mode === "boolean");
  },
  encode(message: MsgSetPauseMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pauseMode === true) {
      writer.uint32(24).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseMode();
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
          message.pauseMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseMode {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseMode: isSet(object.pauseMode) ? Boolean(object.pauseMode) : false
    };
  },
  toJSON(message: MsgSetPauseMode): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pauseMode !== undefined && (obj.pauseMode = message.pauseMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseMode>): MsgSetPauseMode {
    const message = createBaseMsgSetPauseMode();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseMode = object.pauseMode ?? false;
    return message;
  },
  fromAmino(object: MsgSetPauseModeAmino): MsgSetPauseMode {
    const message = createBaseMsgSetPauseMode();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pause_mode !== undefined && object.pause_mode !== null) {
      message.pauseMode = object.pause_mode;
    }
    return message;
  },
  toAmino(message: MsgSetPauseMode, useInterfaces: boolean = true): MsgSetPauseModeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pause_mode = message.pauseMode === false ? undefined : message.pauseMode;
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseModeAminoMsg): MsgSetPauseMode {
    return MsgSetPauseMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseMode, useInterfaces: boolean = true): MsgSetPauseModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseMode",
      value: MsgSetPauseMode.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetPauseModeProtoMsg, useInterfaces: boolean = true): MsgSetPauseMode {
    return MsgSetPauseMode.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseMode): Uint8Array {
    return MsgSetPauseMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseMode): MsgSetPauseModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseMode",
      value: MsgSetPauseMode.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseMode.typeUrl, MsgSetPauseMode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetPauseMode.aminoType, MsgSetPauseMode.typeUrl);
function createBaseMsgSetPauseModeResponse(): MsgSetPauseModeResponse {
  return {};
}
export const MsgSetPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse",
  is(o: any): o is MsgSetPauseModeResponse {
    return o && o.$typeUrl === MsgSetPauseModeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetPauseModeResponseSDKType {
    return o && o.$typeUrl === MsgSetPauseModeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPauseModeResponseAmino {
    return o && o.$typeUrl === MsgSetPauseModeResponse.typeUrl;
  },
  encode(_: MsgSetPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPauseModeResponse {
    return {};
  },
  toJSON(_: MsgSetPauseModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseModeResponse>): MsgSetPauseModeResponse {
    const message = createBaseMsgSetPauseModeResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseModeResponseAmino): MsgSetPauseModeResponse {
    const message = createBaseMsgSetPauseModeResponse();
    return message;
  },
  toAmino(_: MsgSetPauseModeResponse, useInterfaces: boolean = true): MsgSetPauseModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseModeResponseAminoMsg): MsgSetPauseModeResponse {
    return MsgSetPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseModeResponseProtoMsg, useInterfaces: boolean = true): MsgSetPauseModeResponse {
    return MsgSetPauseModeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseModeResponse): Uint8Array {
    return MsgSetPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseModeResponse): MsgSetPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseModeResponse",
      value: MsgSetPauseModeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseModeResponse.typeUrl, MsgSetPauseModeResponse);
function createBaseMsgSetVaultPauseMode(): MsgSetVaultPauseMode {
  return {
    authority: "",
    pauseMode: false
  };
}
export const MsgSetVaultPauseMode = {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode",
  aminoType: "pryzm/amm/v1/SetVaultPauseMode",
  is(o: any): o is MsgSetVaultPauseMode {
    return o && (o.$typeUrl === MsgSetVaultPauseMode.typeUrl || typeof o.authority === "string" && typeof o.pauseMode === "boolean");
  },
  isSDK(o: any): o is MsgSetVaultPauseModeSDKType {
    return o && (o.$typeUrl === MsgSetVaultPauseMode.typeUrl || typeof o.authority === "string" && typeof o.pause_mode === "boolean");
  },
  isAmino(o: any): o is MsgSetVaultPauseModeAmino {
    return o && (o.$typeUrl === MsgSetVaultPauseMode.typeUrl || typeof o.authority === "string" && typeof o.pause_mode === "boolean");
  },
  encode(message: MsgSetVaultPauseMode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pauseMode === true) {
      writer.uint32(16).bool(message.pauseMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetVaultPauseMode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultPauseMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pauseMode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetVaultPauseMode {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      pauseMode: isSet(object.pauseMode) ? Boolean(object.pauseMode) : false
    };
  },
  toJSON(message: MsgSetVaultPauseMode): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.pauseMode !== undefined && (obj.pauseMode = message.pauseMode);
    return obj;
  },
  fromPartial(object: Partial<MsgSetVaultPauseMode>): MsgSetVaultPauseMode {
    const message = createBaseMsgSetVaultPauseMode();
    message.authority = object.authority ?? "";
    message.pauseMode = object.pauseMode ?? false;
    return message;
  },
  fromAmino(object: MsgSetVaultPauseModeAmino): MsgSetVaultPauseMode {
    const message = createBaseMsgSetVaultPauseMode();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pause_mode !== undefined && object.pause_mode !== null) {
      message.pauseMode = object.pause_mode;
    }
    return message;
  },
  toAmino(message: MsgSetVaultPauseMode, useInterfaces: boolean = true): MsgSetVaultPauseModeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pause_mode = message.pauseMode === false ? undefined : message.pauseMode;
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultPauseModeAminoMsg): MsgSetVaultPauseMode {
    return MsgSetVaultPauseMode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetVaultPauseMode, useInterfaces: boolean = true): MsgSetVaultPauseModeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetVaultPauseMode",
      value: MsgSetVaultPauseMode.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetVaultPauseModeProtoMsg, useInterfaces: boolean = true): MsgSetVaultPauseMode {
    return MsgSetVaultPauseMode.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetVaultPauseMode): Uint8Array {
    return MsgSetVaultPauseMode.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultPauseMode): MsgSetVaultPauseModeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseMode",
      value: MsgSetVaultPauseMode.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetVaultPauseMode.typeUrl, MsgSetVaultPauseMode);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetVaultPauseMode.aminoType, MsgSetVaultPauseMode.typeUrl);
function createBaseMsgSetVaultPauseModeResponse(): MsgSetVaultPauseModeResponse {
  return {};
}
export const MsgSetVaultPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse",
  is(o: any): o is MsgSetVaultPauseModeResponse {
    return o && o.$typeUrl === MsgSetVaultPauseModeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetVaultPauseModeResponseSDKType {
    return o && o.$typeUrl === MsgSetVaultPauseModeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetVaultPauseModeResponseAmino {
    return o && o.$typeUrl === MsgSetVaultPauseModeResponse.typeUrl;
  },
  encode(_: MsgSetVaultPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetVaultPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVaultPauseModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetVaultPauseModeResponse {
    return {};
  },
  toJSON(_: MsgSetVaultPauseModeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetVaultPauseModeResponse>): MsgSetVaultPauseModeResponse {
    const message = createBaseMsgSetVaultPauseModeResponse();
    return message;
  },
  fromAmino(_: MsgSetVaultPauseModeResponseAmino): MsgSetVaultPauseModeResponse {
    const message = createBaseMsgSetVaultPauseModeResponse();
    return message;
  },
  toAmino(_: MsgSetVaultPauseModeResponse, useInterfaces: boolean = true): MsgSetVaultPauseModeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetVaultPauseModeResponseAminoMsg): MsgSetVaultPauseModeResponse {
    return MsgSetVaultPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetVaultPauseModeResponseProtoMsg, useInterfaces: boolean = true): MsgSetVaultPauseModeResponse {
    return MsgSetVaultPauseModeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetVaultPauseModeResponse): Uint8Array {
    return MsgSetVaultPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetVaultPauseModeResponse): MsgSetVaultPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetVaultPauseModeResponse",
      value: MsgSetVaultPauseModeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetVaultPauseModeResponse.typeUrl, MsgSetVaultPauseModeResponse);
function createBaseMsgCreateOraclePricePair(): MsgCreateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgCreateOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair",
  aminoType: "pryzm/amm/v1/CreateOraclePricePair",
  is(o: any): o is MsgCreateOraclePricePair {
    return o && (o.$typeUrl === MsgCreateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.is(o.oraclePricePair));
  },
  isSDK(o: any): o is MsgCreateOraclePricePairSDKType {
    return o && (o.$typeUrl === MsgCreateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.isSDK(o.oracle_price_pair));
  },
  isAmino(o: any): o is MsgCreateOraclePricePairAmino {
    return o && (o.$typeUrl === MsgCreateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.isAmino(o.oracle_price_pair));
  },
  encode(message: MsgCreateOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: MsgCreateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateOraclePricePair>): MsgCreateOraclePricePair {
    const message = createBaseMsgCreateOraclePricePair();
    message.authority = object.authority ?? "";
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateOraclePricePairAmino): MsgCreateOraclePricePair {
    const message = createBaseMsgCreateOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: MsgCreateOraclePricePair, useInterfaces: boolean = true): MsgCreateOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOraclePricePairAminoMsg): MsgCreateOraclePricePair {
    return MsgCreateOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateOraclePricePair, useInterfaces: boolean = true): MsgCreateOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/CreateOraclePricePair",
      value: MsgCreateOraclePricePair.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateOraclePricePairProtoMsg, useInterfaces: boolean = true): MsgCreateOraclePricePair {
    return MsgCreateOraclePricePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateOraclePricePair): Uint8Array {
    return MsgCreateOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOraclePricePair): MsgCreateOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePair",
      value: MsgCreateOraclePricePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateOraclePricePair.typeUrl, MsgCreateOraclePricePair);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateOraclePricePair.aminoType, MsgCreateOraclePricePair.typeUrl);
function createBaseMsgCreateOraclePricePairResponse(): MsgCreateOraclePricePairResponse {
  return {};
}
export const MsgCreateOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse",
  is(o: any): o is MsgCreateOraclePricePairResponse {
    return o && o.$typeUrl === MsgCreateOraclePricePairResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateOraclePricePairResponseSDKType {
    return o && o.$typeUrl === MsgCreateOraclePricePairResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateOraclePricePairResponseAmino {
    return o && o.$typeUrl === MsgCreateOraclePricePairResponse.typeUrl;
  },
  encode(_: MsgCreateOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgCreateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateOraclePricePairResponse>): MsgCreateOraclePricePairResponse {
    const message = createBaseMsgCreateOraclePricePairResponse();
    return message;
  },
  fromAmino(_: MsgCreateOraclePricePairResponseAmino): MsgCreateOraclePricePairResponse {
    const message = createBaseMsgCreateOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgCreateOraclePricePairResponse, useInterfaces: boolean = true): MsgCreateOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateOraclePricePairResponseAminoMsg): MsgCreateOraclePricePairResponse {
    return MsgCreateOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOraclePricePairResponseProtoMsg, useInterfaces: boolean = true): MsgCreateOraclePricePairResponse {
    return MsgCreateOraclePricePairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateOraclePricePairResponse): Uint8Array {
    return MsgCreateOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOraclePricePairResponse): MsgCreateOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCreateOraclePricePairResponse",
      value: MsgCreateOraclePricePairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateOraclePricePairResponse.typeUrl, MsgCreateOraclePricePairResponse);
function createBaseMsgUpdateOraclePricePair(): MsgUpdateOraclePricePair {
  return {
    authority: "",
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const MsgUpdateOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair",
  aminoType: "pryzm/amm/v1/UpdateOraclePricePair",
  is(o: any): o is MsgUpdateOraclePricePair {
    return o && (o.$typeUrl === MsgUpdateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.is(o.oraclePricePair));
  },
  isSDK(o: any): o is MsgUpdateOraclePricePairSDKType {
    return o && (o.$typeUrl === MsgUpdateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.isSDK(o.oracle_price_pair));
  },
  isAmino(o: any): o is MsgUpdateOraclePricePairAmino {
    return o && (o.$typeUrl === MsgUpdateOraclePricePair.typeUrl || typeof o.authority === "string" && OraclePricePair.isAmino(o.oracle_price_pair));
  },
  encode(message: MsgUpdateOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.oraclePricePair = OraclePricePair.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: MsgUpdateOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateOraclePricePair>): MsgUpdateOraclePricePair {
    const message = createBaseMsgUpdateOraclePricePair();
    message.authority = object.authority ?? "";
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateOraclePricePairAmino): MsgUpdateOraclePricePair {
    const message = createBaseMsgUpdateOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: MsgUpdateOraclePricePair, useInterfaces: boolean = true): MsgUpdateOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOraclePricePairAminoMsg): MsgUpdateOraclePricePair {
    return MsgUpdateOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOraclePricePair, useInterfaces: boolean = true): MsgUpdateOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateOraclePricePair",
      value: MsgUpdateOraclePricePair.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateOraclePricePairProtoMsg, useInterfaces: boolean = true): MsgUpdateOraclePricePair {
    return MsgUpdateOraclePricePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateOraclePricePair): Uint8Array {
    return MsgUpdateOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOraclePricePair): MsgUpdateOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePair",
      value: MsgUpdateOraclePricePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateOraclePricePair.typeUrl, MsgUpdateOraclePricePair);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateOraclePricePair.aminoType, MsgUpdateOraclePricePair.typeUrl);
function createBaseMsgUpdateOraclePricePairResponse(): MsgUpdateOraclePricePairResponse {
  return {};
}
export const MsgUpdateOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse",
  is(o: any): o is MsgUpdateOraclePricePairResponse {
    return o && o.$typeUrl === MsgUpdateOraclePricePairResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateOraclePricePairResponseSDKType {
    return o && o.$typeUrl === MsgUpdateOraclePricePairResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateOraclePricePairResponseAmino {
    return o && o.$typeUrl === MsgUpdateOraclePricePairResponse.typeUrl;
  },
  encode(_: MsgUpdateOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgUpdateOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateOraclePricePairResponse>): MsgUpdateOraclePricePairResponse {
    const message = createBaseMsgUpdateOraclePricePairResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOraclePricePairResponseAmino): MsgUpdateOraclePricePairResponse {
    const message = createBaseMsgUpdateOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgUpdateOraclePricePairResponse, useInterfaces: boolean = true): MsgUpdateOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOraclePricePairResponseAminoMsg): MsgUpdateOraclePricePairResponse {
    return MsgUpdateOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOraclePricePairResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateOraclePricePairResponse {
    return MsgUpdateOraclePricePairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateOraclePricePairResponse): Uint8Array {
    return MsgUpdateOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOraclePricePairResponse): MsgUpdateOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateOraclePricePairResponse",
      value: MsgUpdateOraclePricePairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateOraclePricePairResponse.typeUrl, MsgUpdateOraclePricePairResponse);
function createBaseMsgDeleteOraclePricePair(): MsgDeleteOraclePricePair {
  return {
    authority: "",
    assetId: ""
  };
}
export const MsgDeleteOraclePricePair = {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair",
  aminoType: "pryzm/amm/v1/DeleteOraclePricePair",
  is(o: any): o is MsgDeleteOraclePricePair {
    return o && (o.$typeUrl === MsgDeleteOraclePricePair.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string");
  },
  isSDK(o: any): o is MsgDeleteOraclePricePairSDKType {
    return o && (o.$typeUrl === MsgDeleteOraclePricePair.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string");
  },
  isAmino(o: any): o is MsgDeleteOraclePricePairAmino {
    return o && (o.$typeUrl === MsgDeleteOraclePricePair.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string");
  },
  encode(message: MsgDeleteOraclePricePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteOraclePricePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromJSON(object: any): MsgDeleteOraclePricePair {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: MsgDeleteOraclePricePair): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<MsgDeleteOraclePricePair>): MsgDeleteOraclePricePair {
    const message = createBaseMsgDeleteOraclePricePair();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteOraclePricePairAmino): MsgDeleteOraclePricePair {
    const message = createBaseMsgDeleteOraclePricePair();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteOraclePricePair, useInterfaces: boolean = true): MsgDeleteOraclePricePairAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOraclePricePairAminoMsg): MsgDeleteOraclePricePair {
    return MsgDeleteOraclePricePair.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteOraclePricePair, useInterfaces: boolean = true): MsgDeleteOraclePricePairAminoMsg {
    return {
      type: "pryzm/amm/v1/DeleteOraclePricePair",
      value: MsgDeleteOraclePricePair.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgDeleteOraclePricePairProtoMsg, useInterfaces: boolean = true): MsgDeleteOraclePricePair {
    return MsgDeleteOraclePricePair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteOraclePricePair): Uint8Array {
    return MsgDeleteOraclePricePair.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOraclePricePair): MsgDeleteOraclePricePairProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePair",
      value: MsgDeleteOraclePricePair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteOraclePricePair.typeUrl, MsgDeleteOraclePricePair);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDeleteOraclePricePair.aminoType, MsgDeleteOraclePricePair.typeUrl);
function createBaseMsgDeleteOraclePricePairResponse(): MsgDeleteOraclePricePairResponse {
  return {};
}
export const MsgDeleteOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse",
  is(o: any): o is MsgDeleteOraclePricePairResponse {
    return o && o.$typeUrl === MsgDeleteOraclePricePairResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDeleteOraclePricePairResponseSDKType {
    return o && o.$typeUrl === MsgDeleteOraclePricePairResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteOraclePricePairResponseAmino {
    return o && o.$typeUrl === MsgDeleteOraclePricePairResponse.typeUrl;
  },
  encode(_: MsgDeleteOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDeleteOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteOraclePricePairResponse {
    return {};
  },
  toJSON(_: MsgDeleteOraclePricePairResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDeleteOraclePricePairResponse>): MsgDeleteOraclePricePairResponse {
    const message = createBaseMsgDeleteOraclePricePairResponse();
    return message;
  },
  fromAmino(_: MsgDeleteOraclePricePairResponseAmino): MsgDeleteOraclePricePairResponse {
    const message = createBaseMsgDeleteOraclePricePairResponse();
    return message;
  },
  toAmino(_: MsgDeleteOraclePricePairResponse, useInterfaces: boolean = true): MsgDeleteOraclePricePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOraclePricePairResponseAminoMsg): MsgDeleteOraclePricePairResponse {
    return MsgDeleteOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOraclePricePairResponseProtoMsg, useInterfaces: boolean = true): MsgDeleteOraclePricePairResponse {
    return MsgDeleteOraclePricePairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDeleteOraclePricePairResponse): Uint8Array {
    return MsgDeleteOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOraclePricePairResponse): MsgDeleteOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgDeleteOraclePricePairResponse",
      value: MsgDeleteOraclePricePairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteOraclePricePairResponse.typeUrl, MsgDeleteOraclePricePairResponse);
function createBaseMsgSetSwapProtocolFee(): MsgSetSwapProtocolFee {
  return {
    authority: "",
    poolId: BigInt(0),
    swapProtocolFee: undefined
  };
}
export const MsgSetSwapProtocolFee = {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee",
  aminoType: "pryzm/amm/v1/SetSwapProtocolFee",
  is(o: any): o is MsgSetSwapProtocolFee {
    return o && (o.$typeUrl === MsgSetSwapProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgSetSwapProtocolFeeSDKType {
    return o && (o.$typeUrl === MsgSetSwapProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgSetSwapProtocolFeeAmino {
    return o && (o.$typeUrl === MsgSetSwapProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgSetSwapProtocolFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.swapProtocolFee !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapProtocolFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetSwapProtocolFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.swapProtocolFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetSwapProtocolFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      swapProtocolFee: isSet(object.swapProtocolFee) ? String(object.swapProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetSwapProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.swapProtocolFee !== undefined && (obj.swapProtocolFee = message.swapProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetSwapProtocolFee>): MsgSetSwapProtocolFee {
    const message = createBaseMsgSetSwapProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.swapProtocolFee = object.swapProtocolFee ?? undefined;
    return message;
  },
  fromAmino(object: MsgSetSwapProtocolFeeAmino): MsgSetSwapProtocolFee {
    const message = createBaseMsgSetSwapProtocolFee();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.swap_protocol_fee !== undefined && object.swap_protocol_fee !== null) {
      message.swapProtocolFee = object.swap_protocol_fee;
    }
    return message;
  },
  toAmino(message: MsgSetSwapProtocolFee, useInterfaces: boolean = true): MsgSetSwapProtocolFeeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.swap_protocol_fee = padDecimal(message.swapProtocolFee) === null ? undefined : padDecimal(message.swapProtocolFee);
    return obj;
  },
  fromAminoMsg(object: MsgSetSwapProtocolFeeAminoMsg): MsgSetSwapProtocolFee {
    return MsgSetSwapProtocolFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSwapProtocolFee, useInterfaces: boolean = true): MsgSetSwapProtocolFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetSwapProtocolFee",
      value: MsgSetSwapProtocolFee.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetSwapProtocolFeeProtoMsg, useInterfaces: boolean = true): MsgSetSwapProtocolFee {
    return MsgSetSwapProtocolFee.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetSwapProtocolFee): Uint8Array {
    return MsgSetSwapProtocolFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSwapProtocolFee): MsgSetSwapProtocolFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFee",
      value: MsgSetSwapProtocolFee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetSwapProtocolFee.typeUrl, MsgSetSwapProtocolFee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetSwapProtocolFee.aminoType, MsgSetSwapProtocolFee.typeUrl);
function createBaseMsgSetSwapProtocolFeeResponse(): MsgSetSwapProtocolFeeResponse {
  return {};
}
export const MsgSetSwapProtocolFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse",
  is(o: any): o is MsgSetSwapProtocolFeeResponse {
    return o && o.$typeUrl === MsgSetSwapProtocolFeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetSwapProtocolFeeResponseSDKType {
    return o && o.$typeUrl === MsgSetSwapProtocolFeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetSwapProtocolFeeResponseAmino {
    return o && o.$typeUrl === MsgSetSwapProtocolFeeResponse.typeUrl;
  },
  encode(_: MsgSetSwapProtocolFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetSwapProtocolFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetSwapProtocolFeeResponse {
    return {};
  },
  toJSON(_: MsgSetSwapProtocolFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetSwapProtocolFeeResponse>): MsgSetSwapProtocolFeeResponse {
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    return message;
  },
  fromAmino(_: MsgSetSwapProtocolFeeResponseAmino): MsgSetSwapProtocolFeeResponse {
    const message = createBaseMsgSetSwapProtocolFeeResponse();
    return message;
  },
  toAmino(_: MsgSetSwapProtocolFeeResponse, useInterfaces: boolean = true): MsgSetSwapProtocolFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSwapProtocolFeeResponseAminoMsg): MsgSetSwapProtocolFeeResponse {
    return MsgSetSwapProtocolFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetSwapProtocolFeeResponseProtoMsg, useInterfaces: boolean = true): MsgSetSwapProtocolFeeResponse {
    return MsgSetSwapProtocolFeeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetSwapProtocolFeeResponse): Uint8Array {
    return MsgSetSwapProtocolFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetSwapProtocolFeeResponse): MsgSetSwapProtocolFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetSwapProtocolFeeResponse",
      value: MsgSetSwapProtocolFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetSwapProtocolFeeResponse.typeUrl, MsgSetSwapProtocolFeeResponse);
function createBaseMsgSetJoinExitProtocolFee(): MsgSetJoinExitProtocolFee {
  return {
    authority: "",
    poolId: BigInt(0),
    joinExitProtocolFee: undefined
  };
}
export const MsgSetJoinExitProtocolFee = {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee",
  aminoType: "pryzm/amm/v1/SetJoinExitProtocolFee",
  is(o: any): o is MsgSetJoinExitProtocolFee {
    return o && (o.$typeUrl === MsgSetJoinExitProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgSetJoinExitProtocolFeeSDKType {
    return o && (o.$typeUrl === MsgSetJoinExitProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgSetJoinExitProtocolFeeAmino {
    return o && (o.$typeUrl === MsgSetJoinExitProtocolFee.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgSetJoinExitProtocolFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.joinExitProtocolFee !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.joinExitProtocolFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetJoinExitProtocolFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetJoinExitProtocolFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.joinExitProtocolFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetJoinExitProtocolFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      joinExitProtocolFee: isSet(object.joinExitProtocolFee) ? String(object.joinExitProtocolFee) : undefined
    };
  },
  toJSON(message: MsgSetJoinExitProtocolFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.joinExitProtocolFee !== undefined && (obj.joinExitProtocolFee = message.joinExitProtocolFee);
    return obj;
  },
  fromPartial(object: Partial<MsgSetJoinExitProtocolFee>): MsgSetJoinExitProtocolFee {
    const message = createBaseMsgSetJoinExitProtocolFee();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.joinExitProtocolFee = object.joinExitProtocolFee ?? undefined;
    return message;
  },
  fromAmino(object: MsgSetJoinExitProtocolFeeAmino): MsgSetJoinExitProtocolFee {
    const message = createBaseMsgSetJoinExitProtocolFee();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.join_exit_protocol_fee !== undefined && object.join_exit_protocol_fee !== null) {
      message.joinExitProtocolFee = object.join_exit_protocol_fee;
    }
    return message;
  },
  toAmino(message: MsgSetJoinExitProtocolFee, useInterfaces: boolean = true): MsgSetJoinExitProtocolFeeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.join_exit_protocol_fee = padDecimal(message.joinExitProtocolFee) === null ? undefined : padDecimal(message.joinExitProtocolFee);
    return obj;
  },
  fromAminoMsg(object: MsgSetJoinExitProtocolFeeAminoMsg): MsgSetJoinExitProtocolFee {
    return MsgSetJoinExitProtocolFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetJoinExitProtocolFee, useInterfaces: boolean = true): MsgSetJoinExitProtocolFeeAminoMsg {
    return {
      type: "pryzm/amm/v1/SetJoinExitProtocolFee",
      value: MsgSetJoinExitProtocolFee.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetJoinExitProtocolFeeProtoMsg, useInterfaces: boolean = true): MsgSetJoinExitProtocolFee {
    return MsgSetJoinExitProtocolFee.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetJoinExitProtocolFee): Uint8Array {
    return MsgSetJoinExitProtocolFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetJoinExitProtocolFee): MsgSetJoinExitProtocolFeeProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFee",
      value: MsgSetJoinExitProtocolFee.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetJoinExitProtocolFee.typeUrl, MsgSetJoinExitProtocolFee);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetJoinExitProtocolFee.aminoType, MsgSetJoinExitProtocolFee.typeUrl);
function createBaseMsgSetJoinExitProtocolFeeResponse(): MsgSetJoinExitProtocolFeeResponse {
  return {};
}
export const MsgSetJoinExitProtocolFeeResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse",
  is(o: any): o is MsgSetJoinExitProtocolFeeResponse {
    return o && o.$typeUrl === MsgSetJoinExitProtocolFeeResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetJoinExitProtocolFeeResponseSDKType {
    return o && o.$typeUrl === MsgSetJoinExitProtocolFeeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetJoinExitProtocolFeeResponseAmino {
    return o && o.$typeUrl === MsgSetJoinExitProtocolFeeResponse.typeUrl;
  },
  encode(_: MsgSetJoinExitProtocolFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetJoinExitProtocolFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetJoinExitProtocolFeeResponse {
    return {};
  },
  toJSON(_: MsgSetJoinExitProtocolFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetJoinExitProtocolFeeResponse>): MsgSetJoinExitProtocolFeeResponse {
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    return message;
  },
  fromAmino(_: MsgSetJoinExitProtocolFeeResponseAmino): MsgSetJoinExitProtocolFeeResponse {
    const message = createBaseMsgSetJoinExitProtocolFeeResponse();
    return message;
  },
  toAmino(_: MsgSetJoinExitProtocolFeeResponse, useInterfaces: boolean = true): MsgSetJoinExitProtocolFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetJoinExitProtocolFeeResponseAminoMsg): MsgSetJoinExitProtocolFeeResponse {
    return MsgSetJoinExitProtocolFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetJoinExitProtocolFeeResponseProtoMsg, useInterfaces: boolean = true): MsgSetJoinExitProtocolFeeResponse {
    return MsgSetJoinExitProtocolFeeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetJoinExitProtocolFeeResponse): Uint8Array {
    return MsgSetJoinExitProtocolFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetJoinExitProtocolFeeResponse): MsgSetJoinExitProtocolFeeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetJoinExitProtocolFeeResponse",
      value: MsgSetJoinExitProtocolFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetJoinExitProtocolFeeResponse.typeUrl, MsgSetJoinExitProtocolFeeResponse);
function createBaseMsgIntroduceYammLpToWeightedPool(): MsgIntroduceYammLpToWeightedPool {
  return {
    creator: "",
    weightedPoolId: BigInt(0),
    yammPoolId: BigInt(0),
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgIntroduceYammLpToWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool",
  aminoType: "pryzm/amm/v1/IntroYammLpToWeighted",
  is(o: any): o is MsgIntroduceYammLpToWeightedPool {
    return o && (o.$typeUrl === MsgIntroduceYammLpToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weightedPoolId === "bigint" && typeof o.yammPoolId === "bigint" && typeof o.tokenNormalizedWeight === "string" && typeof o.virtualBalanceIntervalMillis === "bigint");
  },
  isSDK(o: any): o is MsgIntroduceYammLpToWeightedPoolSDKType {
    return o && (o.$typeUrl === MsgIntroduceYammLpToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weighted_pool_id === "bigint" && typeof o.yamm_pool_id === "bigint" && typeof o.token_normalized_weight === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  isAmino(o: any): o is MsgIntroduceYammLpToWeightedPoolAmino {
    return o && (o.$typeUrl === MsgIntroduceYammLpToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weighted_pool_id === "bigint" && typeof o.yamm_pool_id === "bigint" && typeof o.token_normalized_weight === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  encode(message: MsgIntroduceYammLpToWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.weightedPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (message.yammPoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.yammPoolId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenNormalizedWeight, 18).atomics);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.weightedPoolId = reader.uint64();
          break;
        case 3:
          message.yammPoolId = reader.uint64();
          break;
        case 4:
          message.tokenNormalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.virtualBalanceIntervalMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIntroduceYammLpToWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? BigInt(object.weightedPoolId.toString()) : BigInt(0),
      yammPoolId: isSet(object.yammPoolId) ? BigInt(object.yammPoolId.toString()) : BigInt(0),
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgIntroduceYammLpToWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || BigInt(0)).toString());
    message.yammPoolId !== undefined && (obj.yammPoolId = (message.yammPoolId || BigInt(0)).toString());
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceYammLpToWeightedPool>): MsgIntroduceYammLpToWeightedPool {
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    message.creator = object.creator ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? BigInt(object.weightedPoolId.toString()) : BigInt(0);
    message.yammPoolId = object.yammPoolId !== undefined && object.yammPoolId !== null ? BigInt(object.yammPoolId.toString()) : BigInt(0);
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIntroduceYammLpToWeightedPoolAmino): MsgIntroduceYammLpToWeightedPool {
    const message = createBaseMsgIntroduceYammLpToWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.weighted_pool_id !== undefined && object.weighted_pool_id !== null) {
      message.weightedPoolId = BigInt(object.weighted_pool_id);
    }
    if (object.yamm_pool_id !== undefined && object.yamm_pool_id !== null) {
      message.yammPoolId = BigInt(object.yamm_pool_id);
    }
    if (object.token_normalized_weight !== undefined && object.token_normalized_weight !== null) {
      message.tokenNormalizedWeight = object.token_normalized_weight;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgIntroduceYammLpToWeightedPool, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.weighted_pool_id = message.weightedPoolId ? message.weightedPoolId.toString() : undefined;
    obj.yamm_pool_id = message.yammPoolId ? message.yammPoolId.toString() : undefined;
    obj.token_normalized_weight = padDecimal(message.tokenNormalizedWeight) === "" ? undefined : padDecimal(message.tokenNormalizedWeight);
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceYammLpToWeightedPoolAminoMsg): MsgIntroduceYammLpToWeightedPool {
    return MsgIntroduceYammLpToWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIntroduceYammLpToWeightedPool, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/IntroYammLpToWeighted",
      value: MsgIntroduceYammLpToWeightedPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIntroduceYammLpToWeightedPoolProtoMsg, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPool {
    return MsgIntroduceYammLpToWeightedPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceYammLpToWeightedPool): Uint8Array {
    return MsgIntroduceYammLpToWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceYammLpToWeightedPool): MsgIntroduceYammLpToWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPool",
      value: MsgIntroduceYammLpToWeightedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceYammLpToWeightedPool.typeUrl, MsgIntroduceYammLpToWeightedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIntroduceYammLpToWeightedPool.aminoType, MsgIntroduceYammLpToWeightedPool.typeUrl);
function createBaseMsgIntroduceYammLpToWeightedPoolResponse(): MsgIntroduceYammLpToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceYammLpToWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse",
  is(o: any): o is MsgIntroduceYammLpToWeightedPoolResponse {
    return o && o.$typeUrl === MsgIntroduceYammLpToWeightedPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgIntroduceYammLpToWeightedPoolResponseSDKType {
    return o && o.$typeUrl === MsgIntroduceYammLpToWeightedPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgIntroduceYammLpToWeightedPoolResponseAmino {
    return o && o.$typeUrl === MsgIntroduceYammLpToWeightedPoolResponse.typeUrl;
  },
  encode(_: MsgIntroduceYammLpToWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgIntroduceYammLpToWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgIntroduceYammLpToWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIntroduceYammLpToWeightedPoolResponse>): MsgIntroduceYammLpToWeightedPoolResponse {
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    return message;
  },
  fromAmino(_: MsgIntroduceYammLpToWeightedPoolResponseAmino): MsgIntroduceYammLpToWeightedPoolResponse {
    const message = createBaseMsgIntroduceYammLpToWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgIntroduceYammLpToWeightedPoolResponse, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceYammLpToWeightedPoolResponseAminoMsg): MsgIntroduceYammLpToWeightedPoolResponse {
    return MsgIntroduceYammLpToWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIntroduceYammLpToWeightedPoolResponseProtoMsg, useInterfaces: boolean = true): MsgIntroduceYammLpToWeightedPoolResponse {
    return MsgIntroduceYammLpToWeightedPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceYammLpToWeightedPoolResponse): Uint8Array {
    return MsgIntroduceYammLpToWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceYammLpToWeightedPoolResponse): MsgIntroduceYammLpToWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceYammLpToWeightedPoolResponse",
      value: MsgIntroduceYammLpToWeightedPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceYammLpToWeightedPoolResponse.typeUrl, MsgIntroduceYammLpToWeightedPoolResponse);
function createBaseMsgIntroduceAssetBaseTokenToWeightedPool(): MsgIntroduceAssetBaseTokenToWeightedPool {
  return {
    creator: "",
    weightedPoolId: BigInt(0),
    tokenDenom: "",
    assetId: "",
    tokenNormalizedWeight: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgIntroduceAssetBaseTokenToWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool",
  aminoType: "pryzm/amm/v1/IntroBaseTokenToWeighted",
  is(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPool {
    return o && (o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weightedPoolId === "bigint" && typeof o.tokenDenom === "string" && typeof o.assetId === "string" && typeof o.tokenNormalizedWeight === "string" && typeof o.virtualBalanceIntervalMillis === "bigint");
  },
  isSDK(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPoolSDKType {
    return o && (o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weighted_pool_id === "bigint" && typeof o.token_denom === "string" && typeof o.asset_id === "string" && typeof o.token_normalized_weight === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  isAmino(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPoolAmino {
    return o && (o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.weighted_pool_id === "bigint" && typeof o.token_denom === "string" && typeof o.asset_id === "string" && typeof o.token_normalized_weight === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  encode(message: MsgIntroduceAssetBaseTokenToWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.weightedPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.weightedPoolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.assetId !== "") {
      writer.uint32(34).string(message.assetId);
    }
    if (message.tokenNormalizedWeight !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.tokenNormalizedWeight, 18).atomics);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(48).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.weightedPoolId = reader.uint64();
          break;
        case 3:
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.assetId = reader.string();
          break;
        case 5:
          message.tokenNormalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.virtualBalanceIntervalMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIntroduceAssetBaseTokenToWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      weightedPoolId: isSet(object.weightedPoolId) ? BigInt(object.weightedPoolId.toString()) : BigInt(0),
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      tokenNormalizedWeight: isSet(object.tokenNormalizedWeight) ? String(object.tokenNormalizedWeight) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgIntroduceAssetBaseTokenToWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.weightedPoolId !== undefined && (obj.weightedPoolId = (message.weightedPoolId || BigInt(0)).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.tokenNormalizedWeight !== undefined && (obj.tokenNormalizedWeight = message.tokenNormalizedWeight);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceAssetBaseTokenToWeightedPool>): MsgIntroduceAssetBaseTokenToWeightedPool {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    message.creator = object.creator ?? "";
    message.weightedPoolId = object.weightedPoolId !== undefined && object.weightedPoolId !== null ? BigInt(object.weightedPoolId.toString()) : BigInt(0);
    message.tokenDenom = object.tokenDenom ?? "";
    message.assetId = object.assetId ?? "";
    message.tokenNormalizedWeight = object.tokenNormalizedWeight ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgIntroduceAssetBaseTokenToWeightedPoolAmino): MsgIntroduceAssetBaseTokenToWeightedPool {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.weighted_pool_id !== undefined && object.weighted_pool_id !== null) {
      message.weightedPoolId = BigInt(object.weighted_pool_id);
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.token_normalized_weight !== undefined && object.token_normalized_weight !== null) {
      message.tokenNormalizedWeight = object.token_normalized_weight;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgIntroduceAssetBaseTokenToWeightedPool, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.weighted_pool_id = message.weightedPoolId ? message.weightedPoolId.toString() : undefined;
    obj.token_denom = message.tokenDenom === "" ? undefined : message.tokenDenom;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.token_normalized_weight = padDecimal(message.tokenNormalizedWeight) === "" ? undefined : padDecimal(message.tokenNormalizedWeight);
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg): MsgIntroduceAssetBaseTokenToWeightedPool {
    return MsgIntroduceAssetBaseTokenToWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPool, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/IntroBaseTokenToWeighted",
      value: MsgIntroduceAssetBaseTokenToWeightedPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPool {
    return MsgIntroduceAssetBaseTokenToWeightedPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceAssetBaseTokenToWeightedPool): Uint8Array {
    return MsgIntroduceAssetBaseTokenToWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPool): MsgIntroduceAssetBaseTokenToWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPool",
      value: MsgIntroduceAssetBaseTokenToWeightedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceAssetBaseTokenToWeightedPool.typeUrl, MsgIntroduceAssetBaseTokenToWeightedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIntroduceAssetBaseTokenToWeightedPool.aminoType, MsgIntroduceAssetBaseTokenToWeightedPool.typeUrl);
function createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse(): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
  return {};
}
export const MsgIntroduceAssetBaseTokenToWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse",
  is(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return o && o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPoolResponseSDKType {
    return o && o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino {
    return o && o.$typeUrl === MsgIntroduceAssetBaseTokenToWeightedPoolResponse.typeUrl;
  },
  encode(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIntroduceAssetBaseTokenToWeightedPoolResponse>): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    return message;
  },
  fromAmino(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    const message = createBaseMsgIntroduceAssetBaseTokenToWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgIntroduceAssetBaseTokenToWeightedPoolResponse, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceAssetBaseTokenToWeightedPoolResponseAminoMsg): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg, useInterfaces: boolean = true): MsgIntroduceAssetBaseTokenToWeightedPoolResponse {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): Uint8Array {
    return MsgIntroduceAssetBaseTokenToWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceAssetBaseTokenToWeightedPoolResponse): MsgIntroduceAssetBaseTokenToWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgIntroduceAssetBaseTokenToWeightedPoolResponse",
      value: MsgIntroduceAssetBaseTokenToWeightedPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceAssetBaseTokenToWeightedPoolResponse.typeUrl, MsgIntroduceAssetBaseTokenToWeightedPoolResponse);
function createBaseMsgCancelPendingTokenIntroduction(): MsgCancelPendingTokenIntroduction {
  return {
    creator: "",
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const MsgCancelPendingTokenIntroduction = {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction",
  aminoType: "pryzm/amm/v1/CancelPendingTokenIntro",
  is(o: any): o is MsgCancelPendingTokenIntroduction {
    return o && (o.$typeUrl === MsgCancelPendingTokenIntroduction.typeUrl || typeof o.creator === "string" && typeof o.assetId === "string" && typeof o.targetPoolId === "bigint");
  },
  isSDK(o: any): o is MsgCancelPendingTokenIntroductionSDKType {
    return o && (o.$typeUrl === MsgCancelPendingTokenIntroduction.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelPendingTokenIntroductionAmino {
    return o && (o.$typeUrl === MsgCancelPendingTokenIntroduction.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  encode(message: MsgCancelPendingTokenIntroduction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelPendingTokenIntroduction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPendingTokenIntroduction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.targetPoolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelPendingTokenIntroduction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelPendingTokenIntroduction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPendingTokenIntroduction>): MsgCancelPendingTokenIntroduction {
    const message = createBaseMsgCancelPendingTokenIntroduction();
    message.creator = object.creator ?? "";
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelPendingTokenIntroductionAmino): MsgCancelPendingTokenIntroduction {
    const message = createBaseMsgCancelPendingTokenIntroduction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.target_pool_id !== undefined && object.target_pool_id !== null) {
      message.targetPoolId = BigInt(object.target_pool_id);
    }
    return message;
  },
  toAmino(message: MsgCancelPendingTokenIntroduction, useInterfaces: boolean = true): MsgCancelPendingTokenIntroductionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.target_pool_id = message.targetPoolId ? message.targetPoolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelPendingTokenIntroductionAminoMsg): MsgCancelPendingTokenIntroduction {
    return MsgCancelPendingTokenIntroduction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelPendingTokenIntroduction, useInterfaces: boolean = true): MsgCancelPendingTokenIntroductionAminoMsg {
    return {
      type: "pryzm/amm/v1/CancelPendingTokenIntro",
      value: MsgCancelPendingTokenIntroduction.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCancelPendingTokenIntroductionProtoMsg, useInterfaces: boolean = true): MsgCancelPendingTokenIntroduction {
    return MsgCancelPendingTokenIntroduction.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelPendingTokenIntroduction): Uint8Array {
    return MsgCancelPendingTokenIntroduction.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPendingTokenIntroduction): MsgCancelPendingTokenIntroductionProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroduction",
      value: MsgCancelPendingTokenIntroduction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPendingTokenIntroduction.typeUrl, MsgCancelPendingTokenIntroduction);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelPendingTokenIntroduction.aminoType, MsgCancelPendingTokenIntroduction.typeUrl);
function createBaseMsgCancelPendingTokenIntroductionResponse(): MsgCancelPendingTokenIntroductionResponse {
  return {};
}
export const MsgCancelPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse",
  is(o: any): o is MsgCancelPendingTokenIntroductionResponse {
    return o && o.$typeUrl === MsgCancelPendingTokenIntroductionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelPendingTokenIntroductionResponseSDKType {
    return o && o.$typeUrl === MsgCancelPendingTokenIntroductionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelPendingTokenIntroductionResponseAmino {
    return o && o.$typeUrl === MsgCancelPendingTokenIntroductionResponse.typeUrl;
  },
  encode(_: MsgCancelPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCancelPendingTokenIntroductionResponse {
    return {};
  },
  toJSON(_: MsgCancelPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelPendingTokenIntroductionResponse>): MsgCancelPendingTokenIntroductionResponse {
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    return message;
  },
  fromAmino(_: MsgCancelPendingTokenIntroductionResponseAmino): MsgCancelPendingTokenIntroductionResponse {
    const message = createBaseMsgCancelPendingTokenIntroductionResponse();
    return message;
  },
  toAmino(_: MsgCancelPendingTokenIntroductionResponse, useInterfaces: boolean = true): MsgCancelPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelPendingTokenIntroductionResponseAminoMsg): MsgCancelPendingTokenIntroductionResponse {
    return MsgCancelPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelPendingTokenIntroductionResponseProtoMsg, useInterfaces: boolean = true): MsgCancelPendingTokenIntroductionResponse {
    return MsgCancelPendingTokenIntroductionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelPendingTokenIntroductionResponse): Uint8Array {
    return MsgCancelPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPendingTokenIntroductionResponse): MsgCancelPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgCancelPendingTokenIntroductionResponse",
      value: MsgCancelPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPendingTokenIntroductionResponse.typeUrl, MsgCancelPendingTokenIntroductionResponse);
function createBaseMsgRemoveTokenFromWeightedPool(): MsgRemoveTokenFromWeightedPool {
  return {
    creator: "",
    poolId: BigInt(0),
    tokenDenom: "",
    virtualBalanceIntervalMillis: BigInt(0)
  };
}
export const MsgRemoveTokenFromWeightedPool = {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool",
  aminoType: "pryzm/amm/v1/RemoveTokenFromWeighted",
  is(o: any): o is MsgRemoveTokenFromWeightedPool {
    return o && (o.$typeUrl === MsgRemoveTokenFromWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.tokenDenom === "string" && typeof o.virtualBalanceIntervalMillis === "bigint");
  },
  isSDK(o: any): o is MsgRemoveTokenFromWeightedPoolSDKType {
    return o && (o.$typeUrl === MsgRemoveTokenFromWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_denom === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  isAmino(o: any): o is MsgRemoveTokenFromWeightedPoolAmino {
    return o && (o.$typeUrl === MsgRemoveTokenFromWeightedPool.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_denom === "string" && typeof o.virtual_balance_interval_millis === "bigint");
  },
  encode(message: MsgRemoveTokenFromWeightedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenDenom !== "") {
      writer.uint32(26).string(message.tokenDenom);
    }
    if (message.virtualBalanceIntervalMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.virtualBalanceIntervalMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenFromWeightedPool();
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
          message.tokenDenom = reader.string();
          break;
        case 4:
          message.virtualBalanceIntervalMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveTokenFromWeightedPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenDenom: isSet(object.tokenDenom) ? String(object.tokenDenom) : "",
      virtualBalanceIntervalMillis: isSet(object.virtualBalanceIntervalMillis) ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRemoveTokenFromWeightedPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenDenom !== undefined && (obj.tokenDenom = message.tokenDenom);
    message.virtualBalanceIntervalMillis !== undefined && (obj.virtualBalanceIntervalMillis = (message.virtualBalanceIntervalMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveTokenFromWeightedPool>): MsgRemoveTokenFromWeightedPool {
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenDenom = object.tokenDenom ?? "";
    message.virtualBalanceIntervalMillis = object.virtualBalanceIntervalMillis !== undefined && object.virtualBalanceIntervalMillis !== null ? BigInt(object.virtualBalanceIntervalMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveTokenFromWeightedPoolAmino): MsgRemoveTokenFromWeightedPool {
    const message = createBaseMsgRemoveTokenFromWeightedPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_denom !== undefined && object.token_denom !== null) {
      message.tokenDenom = object.token_denom;
    }
    if (object.virtual_balance_interval_millis !== undefined && object.virtual_balance_interval_millis !== null) {
      message.virtualBalanceIntervalMillis = BigInt(object.virtual_balance_interval_millis);
    }
    return message;
  },
  toAmino(message: MsgRemoveTokenFromWeightedPool, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_denom = message.tokenDenom === "" ? undefined : message.tokenDenom;
    obj.virtual_balance_interval_millis = message.virtualBalanceIntervalMillis ? message.virtualBalanceIntervalMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenFromWeightedPoolAminoMsg): MsgRemoveTokenFromWeightedPool {
    return MsgRemoveTokenFromWeightedPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveTokenFromWeightedPool, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPoolAminoMsg {
    return {
      type: "pryzm/amm/v1/RemoveTokenFromWeighted",
      value: MsgRemoveTokenFromWeightedPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRemoveTokenFromWeightedPoolProtoMsg, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPool {
    return MsgRemoveTokenFromWeightedPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRemoveTokenFromWeightedPool): Uint8Array {
    return MsgRemoveTokenFromWeightedPool.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenFromWeightedPool): MsgRemoveTokenFromWeightedPoolProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPool",
      value: MsgRemoveTokenFromWeightedPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveTokenFromWeightedPool.typeUrl, MsgRemoveTokenFromWeightedPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveTokenFromWeightedPool.aminoType, MsgRemoveTokenFromWeightedPool.typeUrl);
function createBaseMsgRemoveTokenFromWeightedPoolResponse(): MsgRemoveTokenFromWeightedPoolResponse {
  return {};
}
export const MsgRemoveTokenFromWeightedPoolResponse = {
  typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse",
  is(o: any): o is MsgRemoveTokenFromWeightedPoolResponse {
    return o && o.$typeUrl === MsgRemoveTokenFromWeightedPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveTokenFromWeightedPoolResponseSDKType {
    return o && o.$typeUrl === MsgRemoveTokenFromWeightedPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveTokenFromWeightedPoolResponseAmino {
    return o && o.$typeUrl === MsgRemoveTokenFromWeightedPoolResponse.typeUrl;
  },
  encode(_: MsgRemoveTokenFromWeightedPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveTokenFromWeightedPoolResponse {
    return {};
  },
  toJSON(_: MsgRemoveTokenFromWeightedPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRemoveTokenFromWeightedPoolResponse>): MsgRemoveTokenFromWeightedPoolResponse {
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    return message;
  },
  fromAmino(_: MsgRemoveTokenFromWeightedPoolResponseAmino): MsgRemoveTokenFromWeightedPoolResponse {
    const message = createBaseMsgRemoveTokenFromWeightedPoolResponse();
    return message;
  },
  toAmino(_: MsgRemoveTokenFromWeightedPoolResponse, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveTokenFromWeightedPoolResponseAminoMsg): MsgRemoveTokenFromWeightedPoolResponse {
    return MsgRemoveTokenFromWeightedPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveTokenFromWeightedPoolResponseProtoMsg, useInterfaces: boolean = true): MsgRemoveTokenFromWeightedPoolResponse {
    return MsgRemoveTokenFromWeightedPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRemoveTokenFromWeightedPoolResponse): Uint8Array {
    return MsgRemoveTokenFromWeightedPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveTokenFromWeightedPoolResponse): MsgRemoveTokenFromWeightedPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgRemoveTokenFromWeightedPoolResponse",
      value: MsgRemoveTokenFromWeightedPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveTokenFromWeightedPoolResponse.typeUrl, MsgRemoveTokenFromWeightedPoolResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    generalPoolParameters: undefined,
    yammParameters: undefined,
    orderParameters: undefined,
    authorizationParameters: undefined,
    gasParameters: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParams",
  aminoType: "pryzm/amm/v1/UpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.generalPoolParameters !== undefined) {
      GeneralPoolParameters.encode(message.generalPoolParameters, writer.uint32(18).fork()).ldelim();
    }
    if (message.yammParameters !== undefined) {
      YammParameters.encode(message.yammParameters, writer.uint32(26).fork()).ldelim();
    }
    if (message.orderParameters !== undefined) {
      OrderParameters.encode(message.orderParameters, writer.uint32(34).fork()).ldelim();
    }
    if (message.authorizationParameters !== undefined) {
      AuthorizationParameters.encode(message.authorizationParameters, writer.uint32(42).fork()).ldelim();
    }
    if (message.gasParameters !== undefined) {
      GasParameters.encode(message.gasParameters, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.generalPoolParameters = GeneralPoolParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.yammParameters = YammParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.orderParameters = OrderParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.authorizationParameters = AuthorizationParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.gasParameters = GasParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      generalPoolParameters: isSet(object.generalPoolParameters) ? GeneralPoolParameters.fromJSON(object.generalPoolParameters) : undefined,
      yammParameters: isSet(object.yammParameters) ? YammParameters.fromJSON(object.yammParameters) : undefined,
      orderParameters: isSet(object.orderParameters) ? OrderParameters.fromJSON(object.orderParameters) : undefined,
      authorizationParameters: isSet(object.authorizationParameters) ? AuthorizationParameters.fromJSON(object.authorizationParameters) : undefined,
      gasParameters: isSet(object.gasParameters) ? GasParameters.fromJSON(object.gasParameters) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.generalPoolParameters !== undefined && (obj.generalPoolParameters = message.generalPoolParameters ? GeneralPoolParameters.toJSON(message.generalPoolParameters) : undefined);
    message.yammParameters !== undefined && (obj.yammParameters = message.yammParameters ? YammParameters.toJSON(message.yammParameters) : undefined);
    message.orderParameters !== undefined && (obj.orderParameters = message.orderParameters ? OrderParameters.toJSON(message.orderParameters) : undefined);
    message.authorizationParameters !== undefined && (obj.authorizationParameters = message.authorizationParameters ? AuthorizationParameters.toJSON(message.authorizationParameters) : undefined);
    message.gasParameters !== undefined && (obj.gasParameters = message.gasParameters ? GasParameters.toJSON(message.gasParameters) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.generalPoolParameters = object.generalPoolParameters !== undefined && object.generalPoolParameters !== null ? GeneralPoolParameters.fromPartial(object.generalPoolParameters) : undefined;
    message.yammParameters = object.yammParameters !== undefined && object.yammParameters !== null ? YammParameters.fromPartial(object.yammParameters) : undefined;
    message.orderParameters = object.orderParameters !== undefined && object.orderParameters !== null ? OrderParameters.fromPartial(object.orderParameters) : undefined;
    message.authorizationParameters = object.authorizationParameters !== undefined && object.authorizationParameters !== null ? AuthorizationParameters.fromPartial(object.authorizationParameters) : undefined;
    message.gasParameters = object.gasParameters !== undefined && object.gasParameters !== null ? GasParameters.fromPartial(object.gasParameters) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.general_pool_parameters !== undefined && object.general_pool_parameters !== null) {
      message.generalPoolParameters = GeneralPoolParameters.fromAmino(object.general_pool_parameters);
    }
    if (object.yamm_parameters !== undefined && object.yamm_parameters !== null) {
      message.yammParameters = YammParameters.fromAmino(object.yamm_parameters);
    }
    if (object.order_parameters !== undefined && object.order_parameters !== null) {
      message.orderParameters = OrderParameters.fromAmino(object.order_parameters);
    }
    if (object.authorization_parameters !== undefined && object.authorization_parameters !== null) {
      message.authorizationParameters = AuthorizationParameters.fromAmino(object.authorization_parameters);
    }
    if (object.gas_parameters !== undefined && object.gas_parameters !== null) {
      message.gasParameters = GasParameters.fromAmino(object.gas_parameters);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.general_pool_parameters = message.generalPoolParameters ? GeneralPoolParameters.toAmino(message.generalPoolParameters, useInterfaces) : undefined;
    obj.yamm_parameters = message.yammParameters ? YammParameters.toAmino(message.yammParameters, useInterfaces) : undefined;
    obj.order_parameters = message.orderParameters ? OrderParameters.toAmino(message.orderParameters, useInterfaces) : undefined;
    obj.authorization_parameters = message.authorizationParameters ? AuthorizationParameters.toAmino(message.authorizationParameters, useInterfaces) : undefined;
    obj.gas_parameters = message.gasParameters ? GasParameters.toAmino(message.gasParameters, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/amm/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse, useInterfaces: boolean = true): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgAddMaturityToYamm(): MsgAddMaturityToYamm {
  return {
    authority: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const MsgAddMaturityToYamm = {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm",
  aminoType: "pryzm/amm/v1/AddMaturityToYamm",
  is(o: any): o is MsgAddMaturityToYamm {
    return o && (o.$typeUrl === MsgAddMaturityToYamm.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is MsgAddMaturityToYammSDKType {
    return o && (o.$typeUrl === MsgAddMaturityToYamm.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isAmino(o: any): o is MsgAddMaturityToYammAmino {
    return o && (o.$typeUrl === MsgAddMaturityToYamm.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  encode(message: MsgAddMaturityToYamm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAddMaturityToYamm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMaturityToYamm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddMaturityToYamm {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: MsgAddMaturityToYamm): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<MsgAddMaturityToYamm>): MsgAddMaturityToYamm {
    const message = createBaseMsgAddMaturityToYamm();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: MsgAddMaturityToYammAmino): MsgAddMaturityToYamm {
    const message = createBaseMsgAddMaturityToYamm();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.assetId !== undefined && object.assetId !== null) {
      message.assetId = object.assetId;
    }
    if (object.maturitySymbol !== undefined && object.maturitySymbol !== null) {
      message.maturitySymbol = object.maturitySymbol;
    }
    return message;
  },
  toAmino(message: MsgAddMaturityToYamm, useInterfaces: boolean = true): MsgAddMaturityToYammAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.assetId = message.assetId === "" ? undefined : message.assetId;
    obj.maturitySymbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: MsgAddMaturityToYammAminoMsg): MsgAddMaturityToYamm {
    return MsgAddMaturityToYamm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddMaturityToYamm, useInterfaces: boolean = true): MsgAddMaturityToYammAminoMsg {
    return {
      type: "pryzm/amm/v1/AddMaturityToYamm",
      value: MsgAddMaturityToYamm.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgAddMaturityToYammProtoMsg, useInterfaces: boolean = true): MsgAddMaturityToYamm {
    return MsgAddMaturityToYamm.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAddMaturityToYamm): Uint8Array {
    return MsgAddMaturityToYamm.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMaturityToYamm): MsgAddMaturityToYammProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYamm",
      value: MsgAddMaturityToYamm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddMaturityToYamm.typeUrl, MsgAddMaturityToYamm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddMaturityToYamm.aminoType, MsgAddMaturityToYamm.typeUrl);
function createBaseMsgAddMaturityToYammResponse(): MsgAddMaturityToYammResponse {
  return {};
}
export const MsgAddMaturityToYammResponse = {
  typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse",
  is(o: any): o is MsgAddMaturityToYammResponse {
    return o && o.$typeUrl === MsgAddMaturityToYammResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddMaturityToYammResponseSDKType {
    return o && o.$typeUrl === MsgAddMaturityToYammResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddMaturityToYammResponseAmino {
    return o && o.$typeUrl === MsgAddMaturityToYammResponse.typeUrl;
  },
  encode(_: MsgAddMaturityToYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAddMaturityToYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMaturityToYammResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddMaturityToYammResponse {
    return {};
  },
  toJSON(_: MsgAddMaturityToYammResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddMaturityToYammResponse>): MsgAddMaturityToYammResponse {
    const message = createBaseMsgAddMaturityToYammResponse();
    return message;
  },
  fromAmino(_: MsgAddMaturityToYammResponseAmino): MsgAddMaturityToYammResponse {
    const message = createBaseMsgAddMaturityToYammResponse();
    return message;
  },
  toAmino(_: MsgAddMaturityToYammResponse, useInterfaces: boolean = true): MsgAddMaturityToYammResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddMaturityToYammResponseAminoMsg): MsgAddMaturityToYammResponse {
    return MsgAddMaturityToYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMaturityToYammResponseProtoMsg, useInterfaces: boolean = true): MsgAddMaturityToYammResponse {
    return MsgAddMaturityToYammResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAddMaturityToYammResponse): Uint8Array {
    return MsgAddMaturityToYammResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMaturityToYammResponse): MsgAddMaturityToYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgAddMaturityToYammResponse",
      value: MsgAddMaturityToYammResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddMaturityToYammResponse.typeUrl, MsgAddMaturityToYammResponse);
function createBaseMsgSetInitializationAllowList(): MsgSetInitializationAllowList {
  return {
    creator: "",
    poolId: BigInt(0),
    initializationAllowList: []
  };
}
export const MsgSetInitializationAllowList = {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList",
  aminoType: "pryzm/amm/v1/SetInitializationAllowList",
  is(o: any): o is MsgSetInitializationAllowList {
    return o && (o.$typeUrl === MsgSetInitializationAllowList.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.initializationAllowList) && (!o.initializationAllowList.length || typeof o.initializationAllowList[0] === "string"));
  },
  isSDK(o: any): o is MsgSetInitializationAllowListSDKType {
    return o && (o.$typeUrl === MsgSetInitializationAllowList.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.initialization_allow_list) && (!o.initialization_allow_list.length || typeof o.initialization_allow_list[0] === "string"));
  },
  isAmino(o: any): o is MsgSetInitializationAllowListAmino {
    return o && (o.$typeUrl === MsgSetInitializationAllowList.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.initialization_allow_list) && (!o.initialization_allow_list.length || typeof o.initialization_allow_list[0] === "string"));
  },
  encode(message: MsgSetInitializationAllowList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.initializationAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetInitializationAllowList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInitializationAllowList();
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
          message.initializationAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetInitializationAllowList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      initializationAllowList: Array.isArray(object?.initializationAllowList) ? object.initializationAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetInitializationAllowList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.initializationAllowList) {
      obj.initializationAllowList = message.initializationAllowList.map(e => e);
    } else {
      obj.initializationAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetInitializationAllowList>): MsgSetInitializationAllowList {
    const message = createBaseMsgSetInitializationAllowList();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.initializationAllowList = object.initializationAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetInitializationAllowListAmino): MsgSetInitializationAllowList {
    const message = createBaseMsgSetInitializationAllowList();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.initializationAllowList = object.initialization_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetInitializationAllowList, useInterfaces: boolean = true): MsgSetInitializationAllowListAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.initializationAllowList) {
      obj.initialization_allow_list = message.initializationAllowList.map(e => e);
    } else {
      obj.initialization_allow_list = message.initializationAllowList;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetInitializationAllowListAminoMsg): MsgSetInitializationAllowList {
    return MsgSetInitializationAllowList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetInitializationAllowList, useInterfaces: boolean = true): MsgSetInitializationAllowListAminoMsg {
    return {
      type: "pryzm/amm/v1/SetInitializationAllowList",
      value: MsgSetInitializationAllowList.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetInitializationAllowListProtoMsg, useInterfaces: boolean = true): MsgSetInitializationAllowList {
    return MsgSetInitializationAllowList.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetInitializationAllowList): Uint8Array {
    return MsgSetInitializationAllowList.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInitializationAllowList): MsgSetInitializationAllowListProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowList",
      value: MsgSetInitializationAllowList.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetInitializationAllowList.typeUrl, MsgSetInitializationAllowList);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetInitializationAllowList.aminoType, MsgSetInitializationAllowList.typeUrl);
function createBaseMsgSetInitializationAllowListResponse(): MsgSetInitializationAllowListResponse {
  return {};
}
export const MsgSetInitializationAllowListResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse",
  is(o: any): o is MsgSetInitializationAllowListResponse {
    return o && o.$typeUrl === MsgSetInitializationAllowListResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetInitializationAllowListResponseSDKType {
    return o && o.$typeUrl === MsgSetInitializationAllowListResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetInitializationAllowListResponseAmino {
    return o && o.$typeUrl === MsgSetInitializationAllowListResponse.typeUrl;
  },
  encode(_: MsgSetInitializationAllowListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetInitializationAllowListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetInitializationAllowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetInitializationAllowListResponse {
    return {};
  },
  toJSON(_: MsgSetInitializationAllowListResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetInitializationAllowListResponse>): MsgSetInitializationAllowListResponse {
    const message = createBaseMsgSetInitializationAllowListResponse();
    return message;
  },
  fromAmino(_: MsgSetInitializationAllowListResponseAmino): MsgSetInitializationAllowListResponse {
    const message = createBaseMsgSetInitializationAllowListResponse();
    return message;
  },
  toAmino(_: MsgSetInitializationAllowListResponse, useInterfaces: boolean = true): MsgSetInitializationAllowListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetInitializationAllowListResponseAminoMsg): MsgSetInitializationAllowListResponse {
    return MsgSetInitializationAllowListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetInitializationAllowListResponseProtoMsg, useInterfaces: boolean = true): MsgSetInitializationAllowListResponse {
    return MsgSetInitializationAllowListResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetInitializationAllowListResponse): Uint8Array {
    return MsgSetInitializationAllowListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInitializationAllowListResponse): MsgSetInitializationAllowListResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetInitializationAllowListResponse",
      value: MsgSetInitializationAllowListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetInitializationAllowListResponse.typeUrl, MsgSetInitializationAllowListResponse);
function createBaseMsgSetPoolAdmins(): MsgSetPoolAdmins {
  return {
    creator: "",
    poolId: BigInt(0),
    admins: []
  };
}
export const MsgSetPoolAdmins = {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins",
  aminoType: "pryzm/amm/v1/SetPoolAdmins",
  is(o: any): o is MsgSetPoolAdmins {
    return o && (o.$typeUrl === MsgSetPoolAdmins.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isSDK(o: any): o is MsgSetPoolAdminsSDKType {
    return o && (o.$typeUrl === MsgSetPoolAdmins.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isAmino(o: any): o is MsgSetPoolAdminsAmino {
    return o && (o.$typeUrl === MsgSetPoolAdmins.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  encode(message: MsgSetPoolAdmins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.admins) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPoolAdmins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolAdmins();
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
          message.admins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPoolAdmins {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetPoolAdmins): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetPoolAdmins>): MsgSetPoolAdmins {
    const message = createBaseMsgSetPoolAdmins();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPoolAdminsAmino): MsgSetPoolAdmins {
    const message = createBaseMsgSetPoolAdmins();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetPoolAdmins, useInterfaces: boolean = true): MsgSetPoolAdminsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = message.admins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolAdminsAminoMsg): MsgSetPoolAdmins {
    return MsgSetPoolAdmins.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPoolAdmins, useInterfaces: boolean = true): MsgSetPoolAdminsAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPoolAdmins",
      value: MsgSetPoolAdmins.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetPoolAdminsProtoMsg, useInterfaces: boolean = true): MsgSetPoolAdmins {
    return MsgSetPoolAdmins.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPoolAdmins): Uint8Array {
    return MsgSetPoolAdmins.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolAdmins): MsgSetPoolAdminsProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPoolAdmins",
      value: MsgSetPoolAdmins.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPoolAdmins.typeUrl, MsgSetPoolAdmins);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetPoolAdmins.aminoType, MsgSetPoolAdmins.typeUrl);
function createBaseMsgSetPoolAdminsResponse(): MsgSetPoolAdminsResponse {
  return {};
}
export const MsgSetPoolAdminsResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse",
  is(o: any): o is MsgSetPoolAdminsResponse {
    return o && o.$typeUrl === MsgSetPoolAdminsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetPoolAdminsResponseSDKType {
    return o && o.$typeUrl === MsgSetPoolAdminsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPoolAdminsResponseAmino {
    return o && o.$typeUrl === MsgSetPoolAdminsResponse.typeUrl;
  },
  encode(_: MsgSetPoolAdminsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPoolAdminsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPoolAdminsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPoolAdminsResponse {
    return {};
  },
  toJSON(_: MsgSetPoolAdminsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPoolAdminsResponse>): MsgSetPoolAdminsResponse {
    const message = createBaseMsgSetPoolAdminsResponse();
    return message;
  },
  fromAmino(_: MsgSetPoolAdminsResponseAmino): MsgSetPoolAdminsResponse {
    const message = createBaseMsgSetPoolAdminsResponse();
    return message;
  },
  toAmino(_: MsgSetPoolAdminsResponse, useInterfaces: boolean = true): MsgSetPoolAdminsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPoolAdminsResponseAminoMsg): MsgSetPoolAdminsResponse {
    return MsgSetPoolAdminsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPoolAdminsResponseProtoMsg, useInterfaces: boolean = true): MsgSetPoolAdminsResponse {
    return MsgSetPoolAdminsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPoolAdminsResponse): Uint8Array {
    return MsgSetPoolAdminsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPoolAdminsResponse): MsgSetPoolAdminsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPoolAdminsResponse",
      value: MsgSetPoolAdminsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPoolAdminsResponse.typeUrl, MsgSetPoolAdminsResponse);
function createBaseMsgSetPauseAllowList(): MsgSetPauseAllowList {
  return {
    creator: "",
    poolId: BigInt(0),
    pauseAllowList: []
  };
}
export const MsgSetPauseAllowList = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList",
  aminoType: "pryzm/amm/v1/SetPauseAllowList",
  is(o: any): o is MsgSetPauseAllowList {
    return o && (o.$typeUrl === MsgSetPauseAllowList.typeUrl || typeof o.creator === "string" && typeof o.poolId === "bigint" && Array.isArray(o.pauseAllowList) && (!o.pauseAllowList.length || typeof o.pauseAllowList[0] === "string"));
  },
  isSDK(o: any): o is MsgSetPauseAllowListSDKType {
    return o && (o.$typeUrl === MsgSetPauseAllowList.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  isAmino(o: any): o is MsgSetPauseAllowListAmino {
    return o && (o.$typeUrl === MsgSetPauseAllowList.typeUrl || typeof o.creator === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.pause_allow_list) && (!o.pause_allow_list.length || typeof o.pause_allow_list[0] === "string"));
  },
  encode(message: MsgSetPauseAllowList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.pauseAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseAllowList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseAllowList();
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
          message.pauseAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseAllowList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseAllowList: Array.isArray(object?.pauseAllowList) ? object.pauseAllowList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgSetPauseAllowList): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.pauseAllowList) {
      obj.pauseAllowList = message.pauseAllowList.map(e => e);
    } else {
      obj.pauseAllowList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseAllowList>): MsgSetPauseAllowList {
    const message = createBaseMsgSetPauseAllowList();
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseAllowList = object.pauseAllowList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetPauseAllowListAmino): MsgSetPauseAllowList {
    const message = createBaseMsgSetPauseAllowList();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.pauseAllowList = object.pause_allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetPauseAllowList, useInterfaces: boolean = true): MsgSetPauseAllowListAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.pauseAllowList) {
      obj.pause_allow_list = message.pauseAllowList.map(e => e);
    } else {
      obj.pause_allow_list = message.pauseAllowList;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseAllowListAminoMsg): MsgSetPauseAllowList {
    return MsgSetPauseAllowList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseAllowList, useInterfaces: boolean = true): MsgSetPauseAllowListAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseAllowList",
      value: MsgSetPauseAllowList.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetPauseAllowListProtoMsg, useInterfaces: boolean = true): MsgSetPauseAllowList {
    return MsgSetPauseAllowList.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseAllowList): Uint8Array {
    return MsgSetPauseAllowList.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseAllowList): MsgSetPauseAllowListProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowList",
      value: MsgSetPauseAllowList.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseAllowList.typeUrl, MsgSetPauseAllowList);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetPauseAllowList.aminoType, MsgSetPauseAllowList.typeUrl);
function createBaseMsgSetPauseAllowListResponse(): MsgSetPauseAllowListResponse {
  return {};
}
export const MsgSetPauseAllowListResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse",
  is(o: any): o is MsgSetPauseAllowListResponse {
    return o && o.$typeUrl === MsgSetPauseAllowListResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetPauseAllowListResponseSDKType {
    return o && o.$typeUrl === MsgSetPauseAllowListResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPauseAllowListResponseAmino {
    return o && o.$typeUrl === MsgSetPauseAllowListResponse.typeUrl;
  },
  encode(_: MsgSetPauseAllowListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseAllowListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseAllowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPauseAllowListResponse {
    return {};
  },
  toJSON(_: MsgSetPauseAllowListResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseAllowListResponse>): MsgSetPauseAllowListResponse {
    const message = createBaseMsgSetPauseAllowListResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseAllowListResponseAmino): MsgSetPauseAllowListResponse {
    const message = createBaseMsgSetPauseAllowListResponse();
    return message;
  },
  toAmino(_: MsgSetPauseAllowListResponse, useInterfaces: boolean = true): MsgSetPauseAllowListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseAllowListResponseAminoMsg): MsgSetPauseAllowListResponse {
    return MsgSetPauseAllowListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseAllowListResponseProtoMsg, useInterfaces: boolean = true): MsgSetPauseAllowListResponse {
    return MsgSetPauseAllowListResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseAllowListResponse): Uint8Array {
    return MsgSetPauseAllowListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseAllowListResponse): MsgSetPauseAllowListResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseAllowListResponse",
      value: MsgSetPauseAllowListResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseAllowListResponse.typeUrl, MsgSetPauseAllowListResponse);
function createBaseMsgSetPauseWindow(): MsgSetPauseWindow {
  return {
    authority: "",
    poolId: BigInt(0),
    pauseWindow: PoolPauseWindow.fromPartial({})
  };
}
export const MsgSetPauseWindow = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow",
  aminoType: "pryzm/amm/v1/SetPauseWindow",
  is(o: any): o is MsgSetPauseWindow {
    return o && (o.$typeUrl === MsgSetPauseWindow.typeUrl || typeof o.authority === "string" && typeof o.poolId === "bigint" && PoolPauseWindow.is(o.pauseWindow));
  },
  isSDK(o: any): o is MsgSetPauseWindowSDKType {
    return o && (o.$typeUrl === MsgSetPauseWindow.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint" && PoolPauseWindow.isSDK(o.pause_window));
  },
  isAmino(o: any): o is MsgSetPauseWindowAmino {
    return o && (o.$typeUrl === MsgSetPauseWindow.typeUrl || typeof o.authority === "string" && typeof o.pool_id === "bigint" && PoolPauseWindow.isAmino(o.pause_window));
  },
  encode(message: MsgSetPauseWindow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.pauseWindow !== undefined) {
      PoolPauseWindow.encode(message.pauseWindow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseWindow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.pauseWindow = PoolPauseWindow.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPauseWindow {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      pauseWindow: isSet(object.pauseWindow) ? PoolPauseWindow.fromJSON(object.pauseWindow) : undefined
    };
  },
  toJSON(message: MsgSetPauseWindow): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.pauseWindow !== undefined && (obj.pauseWindow = message.pauseWindow ? PoolPauseWindow.toJSON(message.pauseWindow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetPauseWindow>): MsgSetPauseWindow {
    const message = createBaseMsgSetPauseWindow();
    message.authority = object.authority ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.pauseWindow = object.pauseWindow !== undefined && object.pauseWindow !== null ? PoolPauseWindow.fromPartial(object.pauseWindow) : undefined;
    return message;
  },
  fromAmino(object: MsgSetPauseWindowAmino): MsgSetPauseWindow {
    const message = createBaseMsgSetPauseWindow();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pause_window !== undefined && object.pause_window !== null) {
      message.pauseWindow = PoolPauseWindow.fromAmino(object.pause_window);
    }
    return message;
  },
  toAmino(message: MsgSetPauseWindow, useInterfaces: boolean = true): MsgSetPauseWindowAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.pause_window = message.pauseWindow ? PoolPauseWindow.toAmino(message.pauseWindow, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseWindowAminoMsg): MsgSetPauseWindow {
    return MsgSetPauseWindow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPauseWindow, useInterfaces: boolean = true): MsgSetPauseWindowAminoMsg {
    return {
      type: "pryzm/amm/v1/SetPauseWindow",
      value: MsgSetPauseWindow.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetPauseWindowProtoMsg, useInterfaces: boolean = true): MsgSetPauseWindow {
    return MsgSetPauseWindow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseWindow): Uint8Array {
    return MsgSetPauseWindow.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseWindow): MsgSetPauseWindowProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseWindow",
      value: MsgSetPauseWindow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseWindow.typeUrl, MsgSetPauseWindow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetPauseWindow.aminoType, MsgSetPauseWindow.typeUrl);
function createBaseMsgSetPauseWindowResponse(): MsgSetPauseWindowResponse {
  return {};
}
export const MsgSetPauseWindowResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse",
  is(o: any): o is MsgSetPauseWindowResponse {
    return o && o.$typeUrl === MsgSetPauseWindowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetPauseWindowResponseSDKType {
    return o && o.$typeUrl === MsgSetPauseWindowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetPauseWindowResponseAmino {
    return o && o.$typeUrl === MsgSetPauseWindowResponse.typeUrl;
  },
  encode(_: MsgSetPauseWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetPauseWindowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPauseWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetPauseWindowResponse {
    return {};
  },
  toJSON(_: MsgSetPauseWindowResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetPauseWindowResponse>): MsgSetPauseWindowResponse {
    const message = createBaseMsgSetPauseWindowResponse();
    return message;
  },
  fromAmino(_: MsgSetPauseWindowResponseAmino): MsgSetPauseWindowResponse {
    const message = createBaseMsgSetPauseWindowResponse();
    return message;
  },
  toAmino(_: MsgSetPauseWindowResponse, useInterfaces: boolean = true): MsgSetPauseWindowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPauseWindowResponseAminoMsg): MsgSetPauseWindowResponse {
    return MsgSetPauseWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPauseWindowResponseProtoMsg, useInterfaces: boolean = true): MsgSetPauseWindowResponse {
    return MsgSetPauseWindowResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetPauseWindowResponse): Uint8Array {
    return MsgSetPauseWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPauseWindowResponse): MsgSetPauseWindowResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetPauseWindowResponse",
      value: MsgSetPauseWindowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetPauseWindowResponse.typeUrl, MsgSetPauseWindowResponse);
function createBaseMsgSetOrderPairDisabled(): MsgSetOrderPairDisabled {
  return {
    authority: "",
    pair: DisabledOrderPair.fromPartial({}),
    disabled: false
  };
}
export const MsgSetOrderPairDisabled = {
  typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabled",
  aminoType: "pryzm/amm/v1/SetOrderPairDisabled",
  is(o: any): o is MsgSetOrderPairDisabled {
    return o && (o.$typeUrl === MsgSetOrderPairDisabled.typeUrl || typeof o.authority === "string" && DisabledOrderPair.is(o.pair) && typeof o.disabled === "boolean");
  },
  isSDK(o: any): o is MsgSetOrderPairDisabledSDKType {
    return o && (o.$typeUrl === MsgSetOrderPairDisabled.typeUrl || typeof o.authority === "string" && DisabledOrderPair.isSDK(o.pair) && typeof o.disabled === "boolean");
  },
  isAmino(o: any): o is MsgSetOrderPairDisabledAmino {
    return o && (o.$typeUrl === MsgSetOrderPairDisabled.typeUrl || typeof o.authority === "string" && DisabledOrderPair.isAmino(o.pair) && typeof o.disabled === "boolean");
  },
  encode(message: MsgSetOrderPairDisabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pair !== undefined) {
      DisabledOrderPair.encode(message.pair, writer.uint32(18).fork()).ldelim();
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetOrderPairDisabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrderPairDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pair = DisabledOrderPair.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetOrderPairDisabled {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      pair: isSet(object.pair) ? DisabledOrderPair.fromJSON(object.pair) : undefined,
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false
    };
  },
  toJSON(message: MsgSetOrderPairDisabled): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.pair !== undefined && (obj.pair = message.pair ? DisabledOrderPair.toJSON(message.pair) : undefined);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },
  fromPartial(object: Partial<MsgSetOrderPairDisabled>): MsgSetOrderPairDisabled {
    const message = createBaseMsgSetOrderPairDisabled();
    message.authority = object.authority ?? "";
    message.pair = object.pair !== undefined && object.pair !== null ? DisabledOrderPair.fromPartial(object.pair) : undefined;
    message.disabled = object.disabled ?? false;
    return message;
  },
  fromAmino(object: MsgSetOrderPairDisabledAmino): MsgSetOrderPairDisabled {
    const message = createBaseMsgSetOrderPairDisabled();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pair !== undefined && object.pair !== null) {
      message.pair = DisabledOrderPair.fromAmino(object.pair);
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    return message;
  },
  toAmino(message: MsgSetOrderPairDisabled, useInterfaces: boolean = true): MsgSetOrderPairDisabledAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pair = message.pair ? DisabledOrderPair.toAmino(message.pair, useInterfaces) : undefined;
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrderPairDisabledAminoMsg): MsgSetOrderPairDisabled {
    return MsgSetOrderPairDisabled.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetOrderPairDisabled, useInterfaces: boolean = true): MsgSetOrderPairDisabledAminoMsg {
    return {
      type: "pryzm/amm/v1/SetOrderPairDisabled",
      value: MsgSetOrderPairDisabled.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetOrderPairDisabledProtoMsg, useInterfaces: boolean = true): MsgSetOrderPairDisabled {
    return MsgSetOrderPairDisabled.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetOrderPairDisabled): Uint8Array {
    return MsgSetOrderPairDisabled.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrderPairDisabled): MsgSetOrderPairDisabledProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabled",
      value: MsgSetOrderPairDisabled.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOrderPairDisabled.typeUrl, MsgSetOrderPairDisabled);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetOrderPairDisabled.aminoType, MsgSetOrderPairDisabled.typeUrl);
function createBaseMsgSetOrderPairDisabledResponse(): MsgSetOrderPairDisabledResponse {
  return {};
}
export const MsgSetOrderPairDisabledResponse = {
  typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabledResponse",
  is(o: any): o is MsgSetOrderPairDisabledResponse {
    return o && o.$typeUrl === MsgSetOrderPairDisabledResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetOrderPairDisabledResponseSDKType {
    return o && o.$typeUrl === MsgSetOrderPairDisabledResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetOrderPairDisabledResponseAmino {
    return o && o.$typeUrl === MsgSetOrderPairDisabledResponse.typeUrl;
  },
  encode(_: MsgSetOrderPairDisabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetOrderPairDisabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrderPairDisabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetOrderPairDisabledResponse {
    return {};
  },
  toJSON(_: MsgSetOrderPairDisabledResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetOrderPairDisabledResponse>): MsgSetOrderPairDisabledResponse {
    const message = createBaseMsgSetOrderPairDisabledResponse();
    return message;
  },
  fromAmino(_: MsgSetOrderPairDisabledResponseAmino): MsgSetOrderPairDisabledResponse {
    const message = createBaseMsgSetOrderPairDisabledResponse();
    return message;
  },
  toAmino(_: MsgSetOrderPairDisabledResponse, useInterfaces: boolean = true): MsgSetOrderPairDisabledResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrderPairDisabledResponseAminoMsg): MsgSetOrderPairDisabledResponse {
    return MsgSetOrderPairDisabledResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrderPairDisabledResponseProtoMsg, useInterfaces: boolean = true): MsgSetOrderPairDisabledResponse {
    return MsgSetOrderPairDisabledResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetOrderPairDisabledResponse): Uint8Array {
    return MsgSetOrderPairDisabledResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrderPairDisabledResponse): MsgSetOrderPairDisabledResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.MsgSetOrderPairDisabledResponse",
      value: MsgSetOrderPairDisabledResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetOrderPairDisabledResponse.typeUrl, MsgSetOrderPairDisabledResponse);