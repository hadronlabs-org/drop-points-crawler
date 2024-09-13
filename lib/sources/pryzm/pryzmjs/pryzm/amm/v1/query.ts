import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Swap, SwapAmino, SwapSDKType, SwapType, SwapStep, SwapStepAmino, SwapStepSDKType, swapTypeFromJSON, swapTypeToJSON } from "./operations";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { TokenWeight, TokenWeightAmino, TokenWeightSDKType } from "./token_weight";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { WeightedToken, WeightedTokenAmino, WeightedTokenSDKType } from "./weighted_token";
import { WeightUpdateTiming, WeightUpdateTimingAmino, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenAmino, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderAmino, OrderSDKType, DisabledOrderPair, DisabledOrderPairAmino, DisabledOrderPairSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderAmino, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionAmino, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, padDecimal } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenRequest";
  value: QueryGetPoolTokenRequestAmino;
}
export interface QueryGetPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetPoolTokenResponse {
  poolToken: PoolToken;
}
export interface QueryGetPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetPoolTokenResponseAmino {
  pool_token?: PoolTokenAmino;
}
export interface QueryGetPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenResponse";
  value: QueryGetPoolTokenResponseAmino;
}
export interface QueryGetPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType;
}
export interface QueryAllPoolTokenRequest {
  pagination?: PageRequest;
  poolId: string;
}
export interface QueryAllPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
  pool_id?: string;
}
export interface QueryAllPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenRequest";
  value: QueryAllPoolTokenRequestAmino;
}
export interface QueryAllPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
  pool_id: string;
}
export interface QueryAllPoolTokenResponse {
  poolToken: PoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllPoolTokenResponseAmino {
  pool_token?: PoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenResponse";
  value: QueryAllPoolTokenResponseAmino;
}
export interface QueryAllPoolTokenResponseSDKType {
  pool_token: PoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryAllPoolTokenForPoolRequest {
  poolId: bigint;
}
export interface QueryAllPoolTokenForPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolTokenForPoolRequestAmino {
  pool_id?: string;
}
export interface QueryAllPoolTokenForPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenForPoolRequest";
  value: QueryAllPoolTokenForPoolRequestAmino;
}
export interface QueryAllPoolTokenForPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryAllPoolTokenForPoolResponse {
  poolToken: PoolToken[];
}
export interface QueryAllPoolTokenForPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolTokenForPoolResponseAmino {
  pool_token?: PoolTokenAmino[];
}
export interface QueryAllPoolTokenForPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenForPoolResponse";
  value: QueryAllPoolTokenForPoolResponseAmino;
}
export interface QueryAllPoolTokenForPoolResponseSDKType {
  pool_token: PoolTokenSDKType[];
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequest {
  poolId: bigint;
}
export interface QueryAllPoolTokenWeightRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest";
  value: Uint8Array;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequestAmino {
  pool_id?: string;
}
export interface QueryAllPoolTokenWeightRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest";
  value: QueryAllPoolTokenWeightRequestAmino;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightRequestSDKType {
  pool_id: bigint;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponse {
  tokenWeight: TokenWeight[];
}
export interface QueryAllPoolTokenWeightResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse";
  value: Uint8Array;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponseAmino {
  token_weight?: TokenWeightAmino[];
}
export interface QueryAllPoolTokenWeightResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse";
  value: QueryAllPoolTokenWeightResponseAmino;
}
/**
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them
 * therefore, this query is not paginated
 */
export interface QueryAllPoolTokenWeightResponseSDKType {
  token_weight: TokenWeightSDKType[];
}
export interface QueryGetPoolTokenWeightRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetPoolTokenWeightRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest";
  value: Uint8Array;
}
export interface QueryGetPoolTokenWeightRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetPoolTokenWeightRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest";
  value: QueryGetPoolTokenWeightRequestAmino;
}
export interface QueryGetPoolTokenWeightRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetPoolTokenWeightResponse {
  tokenWeight: TokenWeight;
}
export interface QueryGetPoolTokenWeightResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse";
  value: Uint8Array;
}
export interface QueryGetPoolTokenWeightResponseAmino {
  token_weight?: TokenWeightAmino;
}
export interface QueryGetPoolTokenWeightResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse";
  value: QueryGetPoolTokenWeightResponseAmino;
}
export interface QueryGetPoolTokenWeightResponseSDKType {
  token_weight: TokenWeightSDKType;
}
export interface QueryGetPoolRequest {
  id: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  id?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  id: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightedTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetWeightedTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest";
  value: Uint8Array;
}
export interface QueryGetWeightedTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetWeightedTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightedTokenRequest";
  value: QueryGetWeightedTokenRequestAmino;
}
export interface QueryGetWeightedTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetWeightedTokenResponse {
  weightedToken: WeightedToken;
}
export interface QueryGetWeightedTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse";
  value: Uint8Array;
}
export interface QueryGetWeightedTokenResponseAmino {
  weighted_token?: WeightedTokenAmino;
}
export interface QueryGetWeightedTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightedTokenResponse";
  value: QueryGetWeightedTokenResponseAmino;
}
export interface QueryGetWeightedTokenResponseSDKType {
  weighted_token: WeightedTokenSDKType;
}
export interface QueryAllWeightedTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightedTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest";
  value: Uint8Array;
}
export interface QueryAllWeightedTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWeightedTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightedTokenRequest";
  value: QueryAllWeightedTokenRequestAmino;
}
export interface QueryAllWeightedTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightedTokenResponse {
  weightedToken: WeightedToken[];
  pagination?: PageResponse;
}
export interface QueryAllWeightedTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse";
  value: Uint8Array;
}
export interface QueryAllWeightedTokenResponseAmino {
  weighted_token?: WeightedTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWeightedTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightedTokenResponse";
  value: QueryAllWeightedTokenResponseAmino;
}
export interface QueryAllWeightedTokenResponseSDKType {
  weighted_token: WeightedTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWeightUpdateTimingRequest {
  poolId: bigint;
}
export interface QueryGetWeightUpdateTimingRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest";
  value: Uint8Array;
}
export interface QueryGetWeightUpdateTimingRequestAmino {
  pool_id?: string;
}
export interface QueryGetWeightUpdateTimingRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest";
  value: QueryGetWeightUpdateTimingRequestAmino;
}
export interface QueryGetWeightUpdateTimingRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming;
}
export interface QueryGetWeightUpdateTimingResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse";
  value: Uint8Array;
}
export interface QueryGetWeightUpdateTimingResponseAmino {
  weight_update_timing?: WeightUpdateTimingAmino;
}
export interface QueryGetWeightUpdateTimingResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse";
  value: QueryGetWeightUpdateTimingResponseAmino;
}
export interface QueryGetWeightUpdateTimingResponseSDKType {
  weight_update_timing: WeightUpdateTimingSDKType;
}
export interface QueryAllWeightUpdateTimingRequest {
  pagination?: PageRequest;
}
export interface QueryAllWeightUpdateTimingRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest";
  value: Uint8Array;
}
export interface QueryAllWeightUpdateTimingRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWeightUpdateTimingRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest";
  value: QueryAllWeightUpdateTimingRequestAmino;
}
export interface QueryAllWeightUpdateTimingRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWeightUpdateTimingResponse {
  weightUpdateTiming: WeightUpdateTiming[];
  pagination?: PageResponse;
}
export interface QueryAllWeightUpdateTimingResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse";
  value: Uint8Array;
}
export interface QueryAllWeightUpdateTimingResponseAmino {
  weight_update_timing?: WeightUpdateTimingAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWeightUpdateTimingResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse";
  value: QueryAllWeightUpdateTimingResponseAmino;
}
export interface QueryAllWeightUpdateTimingResponseSDKType {
  weight_update_timing: WeightUpdateTimingSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySimulateSingleSwapRequest {
  swap: Swap;
}
export interface QuerySimulateSingleSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest";
  value: Uint8Array;
}
export interface QuerySimulateSingleSwapRequestAmino {
  swap?: SwapAmino;
}
export interface QuerySimulateSingleSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest";
  value: QuerySimulateSingleSwapRequestAmino;
}
export interface QuerySimulateSingleSwapRequestSDKType {
  swap: SwapSDKType;
}
export interface QuerySimulateSingleSwapResponse {
  amountOut: Coin;
  amountIn: Coin;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateSingleSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse";
  value: Uint8Array;
}
export interface QuerySimulateSingleSwapResponseAmino {
  amount_out?: CoinAmino;
  amount_in?: CoinAmino;
  /**
   * protocol fee does not contain the y_trade fee and refractor fee
   * which is paid in case of a yAsset trade
   */
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateSingleSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse";
  value: QuerySimulateSingleSwapResponseAmino;
}
export interface QuerySimulateSingleSwapResponseSDKType {
  amount_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateInitializePoolRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QuerySimulateInitializePoolRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest";
  value: Uint8Array;
}
export interface QuerySimulateInitializePoolRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QuerySimulateInitializePoolRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest";
  value: QuerySimulateInitializePoolRequestAmino;
}
export interface QuerySimulateInitializePoolRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QuerySimulateInitializePoolResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateInitializePoolResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse";
  value: Uint8Array;
}
export interface QuerySimulateInitializePoolResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface QuerySimulateInitializePoolResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse";
  value: QuerySimulateInitializePoolResponseAmino;
}
export interface QuerySimulateInitializePoolResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinAllTokensExactLptRequest {
  poolId: bigint;
  lptOut: string;
}
export interface QuerySimulateJoinAllTokensExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinAllTokensExactLptRequestAmino {
  pool_id?: string;
  lpt_out?: string;
}
export interface QuerySimulateJoinAllTokensExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest";
  value: QuerySimulateJoinAllTokensExactLptRequestAmino;
}
export interface QuerySimulateJoinAllTokensExactLptRequestSDKType {
  pool_id: bigint;
  lpt_out: string;
}
export interface QuerySimulateJoinAllTokensExactLptResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
}
export interface QuerySimulateJoinAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinAllTokensExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
}
export interface QuerySimulateJoinAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse";
  value: QuerySimulateJoinAllTokensExactLptResponseAmino;
}
export interface QuerySimulateJoinAllTokensExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QuerySimulateJoinExactTokensRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinExactTokensRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QuerySimulateJoinExactTokensRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest";
  value: QuerySimulateJoinExactTokensRequestAmino;
}
export interface QuerySimulateJoinExactTokensRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QuerySimulateJoinExactTokensResponse {
  lptOut: Coin;
  amountsIn: Coin[];
  protocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateJoinExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinExactTokensResponseAmino {
  lpt_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateJoinExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse";
  value: QuerySimulateJoinExactTokensResponseAmino;
}
export interface QuerySimulateJoinExactTokensResponseSDKType {
  lpt_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateZeroImpactJoinYammRequest {
  cAmountIn: Coin;
}
export interface QuerySimulateZeroImpactJoinYammRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest";
  value: Uint8Array;
}
export interface QuerySimulateZeroImpactJoinYammRequestAmino {
  c_amount_in?: CoinAmino;
}
export interface QuerySimulateZeroImpactJoinYammRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest";
  value: QuerySimulateZeroImpactJoinYammRequestAmino;
}
export interface QuerySimulateZeroImpactJoinYammRequestSDKType {
  c_amount_in: CoinSDKType;
}
export interface QuerySimulateZeroImpactJoinYammResponse {
  lptOut: Coin;
  yOut: Coin[];
  refractFee: Coin;
  joinProtocolFee: Coin[];
  swapFee: Coin[];
}
export interface QuerySimulateZeroImpactJoinYammResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse";
  value: Uint8Array;
}
export interface QuerySimulateZeroImpactJoinYammResponseAmino {
  lpt_out?: CoinAmino;
  y_out?: CoinAmino[];
  refract_fee?: CoinAmino;
  join_protocol_fee?: CoinAmino[];
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateZeroImpactJoinYammResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse";
  value: QuerySimulateZeroImpactJoinYammResponseAmino;
}
export interface QuerySimulateZeroImpactJoinYammResponseSDKType {
  lpt_out: CoinSDKType;
  y_out: CoinSDKType[];
  refract_fee: CoinSDKType;
  join_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateJoinTokenExactLptRequest {
  poolId: bigint;
  lptOut: string;
  tokenIn: string;
}
export interface QuerySimulateJoinTokenExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateJoinTokenExactLptRequestAmino {
  pool_id?: string;
  lpt_out?: string;
  token_in?: string;
}
export interface QuerySimulateJoinTokenExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest";
  value: QuerySimulateJoinTokenExactLptRequestAmino;
}
export interface QuerySimulateJoinTokenExactLptRequestSDKType {
  pool_id: bigint;
  lpt_out: string;
  token_in: string;
}
export interface QuerySimulateJoinTokenExactLptResponse {
  lptOut: Coin;
  amountIn: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateJoinTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateJoinTokenExactLptResponseAmino {
  lpt_out?: CoinAmino;
  amount_in?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateJoinTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse";
  value: QuerySimulateJoinTokenExactLptResponseAmino;
}
export interface QuerySimulateJoinTokenExactLptResponseSDKType {
  lpt_out: CoinSDKType;
  amount_in: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateExitTokenExactLptRequest {
  poolId: bigint;
  lptIn: string;
  tokenOut: string;
}
export interface QuerySimulateExitTokenExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitTokenExactLptRequestAmino {
  pool_id?: string;
  lpt_in?: string;
  token_out?: string;
}
export interface QuerySimulateExitTokenExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest";
  value: QuerySimulateExitTokenExactLptRequestAmino;
}
export interface QuerySimulateExitTokenExactLptRequestSDKType {
  pool_id: bigint;
  lpt_in: string;
  token_out: string;
}
export interface QuerySimulateExitTokenExactLptResponse {
  lptIn: Coin;
  amountOut: Coin;
  protocolFee: Coin;
  swapFee: Coin;
}
export interface QuerySimulateExitTokenExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitTokenExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amount_out?: CoinAmino;
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino;
}
export interface QuerySimulateExitTokenExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse";
  value: QuerySimulateExitTokenExactLptResponseAmino;
}
export interface QuerySimulateExitTokenExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amount_out: CoinSDKType;
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType;
}
export interface QuerySimulateExitExactTokensRequest {
  poolId: bigint;
  amountsOut: Coin[];
}
export interface QuerySimulateExitExactTokensRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitExactTokensRequestAmino {
  pool_id?: string;
  amounts_out?: CoinAmino[];
}
export interface QuerySimulateExitExactTokensRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest";
  value: QuerySimulateExitExactTokensRequestAmino;
}
export interface QuerySimulateExitExactTokensRequestSDKType {
  pool_id: bigint;
  amounts_out: CoinSDKType[];
}
export interface QuerySimulateExitExactTokensResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
  swapFee: Coin[];
}
export interface QuerySimulateExitExactTokensResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitExactTokensResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
  swap_fee?: CoinAmino[];
}
export interface QuerySimulateExitExactTokensResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse";
  value: QuerySimulateExitExactTokensResponseAmino;
}
export interface QuerySimulateExitExactTokensResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
  swap_fee: CoinSDKType[];
}
export interface QuerySimulateExitAllTokensExactLptRequest {
  poolId: bigint;
  lptIn: string;
}
export interface QuerySimulateExitAllTokensExactLptRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest";
  value: Uint8Array;
}
export interface QuerySimulateExitAllTokensExactLptRequestAmino {
  pool_id?: string;
  lpt_in?: string;
}
export interface QuerySimulateExitAllTokensExactLptRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest";
  value: QuerySimulateExitAllTokensExactLptRequestAmino;
}
export interface QuerySimulateExitAllTokensExactLptRequestSDKType {
  pool_id: bigint;
  lpt_in: string;
}
export interface QuerySimulateExitAllTokensExactLptResponse {
  lptIn: Coin;
  amountsOut: Coin[];
  protocolFee: Coin;
}
export interface QuerySimulateExitAllTokensExactLptResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse";
  value: Uint8Array;
}
export interface QuerySimulateExitAllTokensExactLptResponseAmino {
  lpt_in?: CoinAmino;
  amounts_out?: CoinAmino[];
  protocol_fee?: CoinAmino;
}
export interface QuerySimulateExitAllTokensExactLptResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse";
  value: QuerySimulateExitAllTokensExactLptResponseAmino;
}
export interface QuerySimulateExitAllTokensExactLptResponseSDKType {
  lpt_in: CoinSDKType;
  amounts_out: CoinSDKType[];
  protocol_fee: CoinSDKType;
}
export interface QuerySpotPriceRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  applyFee: boolean;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  apply_fee?: boolean;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySpotPriceRequest";
  value: QuerySpotPriceRequestAmino;
}
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  apply_fee: boolean;
}
export interface QuerySpotPriceResponse {
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseAmino {
  spot_price?: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySpotPriceResponse";
  value: QuerySpotPriceResponseAmino;
}
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
export interface QueryGetIntroducingPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetIntroducingPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetIntroducingPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest";
  value: QueryGetIntroducingPoolTokenRequestAmino;
}
export interface QueryGetIntroducingPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken;
}
export interface QueryGetIntroducingPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetIntroducingPoolTokenResponseAmino {
  introducing_pool_token?: VirtualBalancePoolTokenAmino;
}
export interface QueryGetIntroducingPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse";
  value: QueryGetIntroducingPoolTokenResponseAmino;
}
export interface QueryGetIntroducingPoolTokenResponseSDKType {
  introducing_pool_token: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllIntroducingPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllIntroducingPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllIntroducingPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllIntroducingPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest";
  value: QueryAllIntroducingPoolTokenRequestAmino;
}
export interface QueryAllIntroducingPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllIntroducingPoolTokenResponse {
  introducingPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllIntroducingPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllIntroducingPoolTokenResponseAmino {
  introducing_pool_token?: VirtualBalancePoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllIntroducingPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse";
  value: QueryAllIntroducingPoolTokenResponseAmino;
}
export interface QueryAllIntroducingPoolTokenResponseSDKType {
  introducing_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExpiringPoolTokenRequest {
  poolId: bigint;
  denom: string;
}
export interface QueryGetExpiringPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryGetExpiringPoolTokenRequestAmino {
  pool_id?: string;
  denom?: string;
}
export interface QueryGetExpiringPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest";
  value: QueryGetExpiringPoolTokenRequestAmino;
}
export interface QueryGetExpiringPoolTokenRequestSDKType {
  pool_id: bigint;
  denom: string;
}
export interface QueryGetExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken;
}
export interface QueryGetExpiringPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryGetExpiringPoolTokenResponseAmino {
  expiring_pool_token?: VirtualBalancePoolTokenAmino;
}
export interface QueryGetExpiringPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse";
  value: QueryGetExpiringPoolTokenResponseAmino;
}
export interface QueryGetExpiringPoolTokenResponseSDKType {
  expiring_pool_token: VirtualBalancePoolTokenSDKType;
}
export interface QueryAllExpiringPoolTokenRequest {
  pagination?: PageRequest;
}
export interface QueryAllExpiringPoolTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest";
  value: Uint8Array;
}
export interface QueryAllExpiringPoolTokenRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllExpiringPoolTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest";
  value: QueryAllExpiringPoolTokenRequestAmino;
}
export interface QueryAllExpiringPoolTokenRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExpiringPoolTokenResponse {
  expiringPoolToken: VirtualBalancePoolToken[];
  pagination?: PageResponse;
}
export interface QueryAllExpiringPoolTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse";
  value: Uint8Array;
}
export interface QueryAllExpiringPoolTokenResponseAmino {
  expiring_pool_token?: VirtualBalancePoolTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllExpiringPoolTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse";
  value: QueryAllExpiringPoolTokenResponseAmino;
}
export interface QueryAllExpiringPoolTokenResponseSDKType {
  expiring_pool_token: VirtualBalancePoolTokenSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryLpTokenRequest {
  poolId: bigint;
}
export interface QueryLpTokenRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest";
  value: Uint8Array;
}
export interface QueryLpTokenRequestAmino {
  pool_id?: string;
}
export interface QueryLpTokenRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryLpTokenRequest";
  value: QueryLpTokenRequestAmino;
}
export interface QueryLpTokenRequestSDKType {
  pool_id: bigint;
}
export interface QueryLpTokenResponse {
  lpToken: PoolToken;
}
export interface QueryLpTokenResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse";
  value: Uint8Array;
}
export interface QueryLpTokenResponseAmino {
  lp_token?: PoolTokenAmino;
}
export interface QueryLpTokenResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryLpTokenResponse";
  value: QueryLpTokenResponseAmino;
}
export interface QueryLpTokenResponseSDKType {
  lp_token: PoolTokenSDKType;
}
export interface QuerySimulateBatchSwapRequest {
  swapType: SwapType;
  steps: SwapStep[];
}
export interface QuerySimulateBatchSwapRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest";
  value: Uint8Array;
}
export interface QuerySimulateBatchSwapRequestAmino {
  swap_type?: SwapType;
  steps?: SwapStepAmino[];
}
export interface QuerySimulateBatchSwapRequestAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest";
  value: QuerySimulateBatchSwapRequestAmino;
}
export interface QuerySimulateBatchSwapRequestSDKType {
  swap_type: SwapType;
  steps: SwapStepSDKType[];
}
export interface QuerySimulateBatchSwapResponse {
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
export interface QuerySimulateBatchSwapResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse";
  value: Uint8Array;
}
export interface QuerySimulateBatchSwapResponseAmino {
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
export interface QuerySimulateBatchSwapResponseAminoMsg {
  type: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse";
  value: QuerySimulateBatchSwapResponseAmino;
}
export interface QuerySimulateBatchSwapResponseSDKType {
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_fee: CoinSDKType[];
}
export interface QueryGetYammConfigurationRequest {
  poolId: bigint;
}
export interface QueryGetYammConfigurationRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest";
  value: Uint8Array;
}
export interface QueryGetYammConfigurationRequestAmino {
  pool_id?: string;
}
export interface QueryGetYammConfigurationRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetYammConfigurationRequest";
  value: QueryGetYammConfigurationRequestAmino;
}
export interface QueryGetYammConfigurationRequestSDKType {
  pool_id: bigint;
}
export interface QueryGetYammConfigurationResponse {
  yammConfiguration: YammConfiguration;
}
export interface QueryGetYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse";
  value: Uint8Array;
}
export interface QueryGetYammConfigurationResponseAmino {
  yamm_configuration?: YammConfigurationAmino;
}
export interface QueryGetYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetYammConfigurationResponse";
  value: QueryGetYammConfigurationResponseAmino;
}
export interface QueryGetYammConfigurationResponseSDKType {
  yamm_configuration: YammConfigurationSDKType;
}
export interface QueryAllYammConfigurationRequest {
  pagination?: PageRequest;
}
export interface QueryAllYammConfigurationRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest";
  value: Uint8Array;
}
export interface QueryAllYammConfigurationRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllYammConfigurationRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllYammConfigurationRequest";
  value: QueryAllYammConfigurationRequestAmino;
}
export interface QueryAllYammConfigurationRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllYammConfigurationResponse {
  yammConfiguration: YammConfiguration[];
  pagination?: PageResponse;
}
export interface QueryAllYammConfigurationResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse";
  value: Uint8Array;
}
export interface QueryAllYammConfigurationResponseAmino {
  yamm_configuration?: YammConfigurationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllYammConfigurationResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllYammConfigurationResponse";
  value: QueryAllYammConfigurationResponseAmino;
}
export interface QueryAllYammConfigurationResponseSDKType {
  yamm_configuration: YammConfigurationSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetWhitelistedRouteRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QueryGetWhitelistedRouteRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest";
  value: Uint8Array;
}
export interface QueryGetWhitelistedRouteRequestAmino {
  token_in?: string;
  token_out?: string;
}
export interface QueryGetWhitelistedRouteRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest";
  value: QueryGetWhitelistedRouteRequestAmino;
}
export interface QueryGetWhitelistedRouteRequestSDKType {
  token_in: string;
  token_out: string;
}
export interface QueryGetWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute;
}
export interface QueryGetWhitelistedRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse";
  value: Uint8Array;
}
export interface QueryGetWhitelistedRouteResponseAmino {
  whitelisted_route?: WhitelistedRouteAmino;
}
export interface QueryGetWhitelistedRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse";
  value: QueryGetWhitelistedRouteResponseAmino;
}
export interface QueryGetWhitelistedRouteResponseSDKType {
  whitelisted_route: WhitelistedRouteSDKType;
}
export interface QueryAllWhitelistedRouteRequest {
  pagination?: PageRequest;
}
export interface QueryAllWhitelistedRouteRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest";
  value: Uint8Array;
}
export interface QueryAllWhitelistedRouteRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllWhitelistedRouteRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest";
  value: QueryAllWhitelistedRouteRequestAmino;
}
export interface QueryAllWhitelistedRouteRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllWhitelistedRouteResponse {
  whitelistedRoute: WhitelistedRoute[];
  pagination?: PageResponse;
}
export interface QueryAllWhitelistedRouteResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse";
  value: Uint8Array;
}
export interface QueryAllWhitelistedRouteResponseAmino {
  whitelisted_route?: WhitelistedRouteAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllWhitelistedRouteResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse";
  value: QueryAllWhitelistedRouteResponseAmino;
}
export interface QueryAllWhitelistedRouteResponseSDKType {
  whitelisted_route: WhitelistedRouteSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOrderRequest {
  id: bigint;
}
export interface QueryGetOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest";
  value: Uint8Array;
}
export interface QueryGetOrderRequestAmino {
  id?: string;
}
export interface QueryGetOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOrderRequest";
  value: QueryGetOrderRequestAmino;
}
export interface QueryGetOrderRequestSDKType {
  id: bigint;
}
export interface QueryGetOrderResponse {
  order: Order;
}
export interface QueryGetOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse";
  value: Uint8Array;
}
export interface QueryGetOrderResponseAmino {
  order?: OrderAmino;
}
export interface QueryGetOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOrderResponse";
  value: QueryGetOrderResponseAmino;
}
export interface QueryGetOrderResponseSDKType {
  order: OrderSDKType;
}
export interface QueryAllOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest";
  value: Uint8Array;
}
export interface QueryAllOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOrderRequest";
  value: QueryAllOrderRequestAmino;
}
export interface QueryAllOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOrderResponse {
  order: Order[];
  pagination?: PageResponse;
}
export interface QueryAllOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse";
  value: Uint8Array;
}
export interface QueryAllOrderResponseAmino {
  order?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOrderResponse";
  value: QueryAllOrderResponseAmino;
}
export interface QueryAllOrderResponseSDKType {
  order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetExecutableOrderRequest {
  orderId: bigint;
}
export interface QueryGetExecutableOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest";
  value: Uint8Array;
}
export interface QueryGetExecutableOrderRequestAmino {
  order_id?: string;
}
export interface QueryGetExecutableOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExecutableOrderRequest";
  value: QueryGetExecutableOrderRequestAmino;
}
export interface QueryGetExecutableOrderRequestSDKType {
  order_id: bigint;
}
export interface QueryGetExecutableOrderResponse {
  executableOrder: Order;
}
export interface QueryGetExecutableOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse";
  value: Uint8Array;
}
export interface QueryGetExecutableOrderResponseAmino {
  executable_order?: OrderAmino;
}
export interface QueryGetExecutableOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetExecutableOrderResponse";
  value: QueryGetExecutableOrderResponseAmino;
}
export interface QueryGetExecutableOrderResponseSDKType {
  executable_order: OrderSDKType;
}
export interface QueryAllExecutableOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllExecutableOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest";
  value: Uint8Array;
}
export interface QueryAllExecutableOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllExecutableOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExecutableOrderRequest";
  value: QueryAllExecutableOrderRequestAmino;
}
export interface QueryAllExecutableOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllExecutableOrderResponse {
  executableOrder: Order[];
  pagination?: PageResponse;
}
export interface QueryAllExecutableOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse";
  value: Uint8Array;
}
export interface QueryAllExecutableOrderResponseAmino {
  executable_order?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllExecutableOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllExecutableOrderResponse";
  value: QueryAllExecutableOrderResponseAmino;
}
export interface QueryAllExecutableOrderResponseSDKType {
  executable_order: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetScheduleOrderRequest {
  orderId: bigint;
}
export interface QueryGetScheduleOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest";
  value: Uint8Array;
}
export interface QueryGetScheduleOrderRequestAmino {
  order_id?: string;
}
export interface QueryGetScheduleOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetScheduleOrderRequest";
  value: QueryGetScheduleOrderRequestAmino;
}
export interface QueryGetScheduleOrderRequestSDKType {
  order_id: bigint;
}
export interface QueryGetScheduleOrderResponse {
  scheduleOrder: ScheduleOrder;
}
export interface QueryGetScheduleOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse";
  value: Uint8Array;
}
export interface QueryGetScheduleOrderResponseAmino {
  schedule_order?: ScheduleOrderAmino;
}
export interface QueryGetScheduleOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetScheduleOrderResponse";
  value: QueryGetScheduleOrderResponseAmino;
}
export interface QueryGetScheduleOrderResponseSDKType {
  schedule_order: ScheduleOrderSDKType;
}
export interface QueryAllScheduleOrderRequest {
  pagination?: PageRequest;
}
export interface QueryAllScheduleOrderRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest";
  value: Uint8Array;
}
export interface QueryAllScheduleOrderRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllScheduleOrderRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllScheduleOrderRequest";
  value: QueryAllScheduleOrderRequestAmino;
}
export interface QueryAllScheduleOrderRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllScheduleOrderResponse {
  scheduleOrder: ScheduleOrder[];
  pagination?: PageResponse;
}
export interface QueryAllScheduleOrderResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse";
  value: Uint8Array;
}
export interface QueryAllScheduleOrderResponseAmino {
  schedule_order?: ScheduleOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllScheduleOrderResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllScheduleOrderResponse";
  value: QueryAllScheduleOrderResponseAmino;
}
export interface QueryAllScheduleOrderResponseSDKType {
  schedule_order: ScheduleOrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetOraclePricePairRequest {
  assetId: string;
}
export interface QueryGetOraclePricePairRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest";
  value: Uint8Array;
}
export interface QueryGetOraclePricePairRequestAmino {
  asset_id?: string;
}
export interface QueryGetOraclePricePairRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOraclePricePairRequest";
  value: QueryGetOraclePricePairRequestAmino;
}
export interface QueryGetOraclePricePairRequestSDKType {
  asset_id: string;
}
export interface QueryGetOraclePricePairResponse {
  oraclePricePair: OraclePricePair;
}
export interface QueryGetOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse";
  value: Uint8Array;
}
export interface QueryGetOraclePricePairResponseAmino {
  oracle_price_pair?: OraclePricePairAmino;
}
export interface QueryGetOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetOraclePricePairResponse";
  value: QueryGetOraclePricePairResponseAmino;
}
export interface QueryGetOraclePricePairResponseSDKType {
  oracle_price_pair: OraclePricePairSDKType;
}
export interface QueryAllOraclePricePairRequest {
  pagination?: PageRequest;
}
export interface QueryAllOraclePricePairRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest";
  value: Uint8Array;
}
export interface QueryAllOraclePricePairRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllOraclePricePairRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOraclePricePairRequest";
  value: QueryAllOraclePricePairRequestAmino;
}
export interface QueryAllOraclePricePairRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllOraclePricePairResponse {
  oraclePricePair: OraclePricePair[];
  pagination?: PageResponse;
}
export interface QueryAllOraclePricePairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse";
  value: Uint8Array;
}
export interface QueryAllOraclePricePairResponseAmino {
  oracle_price_pair?: OraclePricePairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllOraclePricePairResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllOraclePricePairResponse";
  value: QueryAllOraclePricePairResponseAmino;
}
export interface QueryAllOraclePricePairResponseSDKType {
  oracle_price_pair: OraclePricePairSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryVaultPauseModeRequest {}
export interface QueryVaultPauseModeRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest";
  value: Uint8Array;
}
export interface QueryVaultPauseModeRequestAmino {}
export interface QueryVaultPauseModeRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryVaultPauseModeRequest";
  value: QueryVaultPauseModeRequestAmino;
}
export interface QueryVaultPauseModeRequestSDKType {}
export interface QueryVaultPauseModeResponse {
  paused: boolean;
}
export interface QueryVaultPauseModeResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse";
  value: Uint8Array;
}
export interface QueryVaultPauseModeResponseAmino {
  paused?: boolean;
}
export interface QueryVaultPauseModeResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryVaultPauseModeResponse";
  value: QueryVaultPauseModeResponseAmino;
}
export interface QueryVaultPauseModeResponseSDKType {
  paused: boolean;
}
export interface QueryGetPendingTokenIntroductionRequest {
  assetId: string;
  targetPoolId: bigint;
}
export interface QueryGetPendingTokenIntroductionRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest";
  value: Uint8Array;
}
export interface QueryGetPendingTokenIntroductionRequestAmino {
  asset_id?: string;
  target_pool_id?: string;
}
export interface QueryGetPendingTokenIntroductionRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest";
  value: QueryGetPendingTokenIntroductionRequestAmino;
}
export interface QueryGetPendingTokenIntroductionRequestSDKType {
  asset_id: string;
  target_pool_id: bigint;
}
export interface QueryGetPendingTokenIntroductionResponse {
  pendingTokenIntroduction: PendingTokenIntroduction;
}
export interface QueryGetPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface QueryGetPendingTokenIntroductionResponseAmino {
  pending_token_introduction?: PendingTokenIntroductionAmino;
}
export interface QueryGetPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse";
  value: QueryGetPendingTokenIntroductionResponseAmino;
}
export interface QueryGetPendingTokenIntroductionResponseSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType;
}
export interface QueryAllPendingTokenIntroductionRequest {
  pagination?: PageRequest;
}
export interface QueryAllPendingTokenIntroductionRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest";
  value: Uint8Array;
}
export interface QueryAllPendingTokenIntroductionRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllPendingTokenIntroductionRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest";
  value: QueryAllPendingTokenIntroductionRequestAmino;
}
export interface QueryAllPendingTokenIntroductionRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllPendingTokenIntroductionResponse {
  pendingTokenIntroduction: PendingTokenIntroduction[];
  pagination?: PageResponse;
}
export interface QueryAllPendingTokenIntroductionResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse";
  value: Uint8Array;
}
export interface QueryAllPendingTokenIntroductionResponseAmino {
  pending_token_introduction?: PendingTokenIntroductionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPendingTokenIntroductionResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse";
  value: QueryAllPendingTokenIntroductionResponseAmino;
}
export interface QueryAllPendingTokenIntroductionResponseSDKType {
  pending_token_introduction: PendingTokenIntroductionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryYammPoolIdRequest {
  assetId: string;
}
export interface QueryYammPoolIdRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest";
  value: Uint8Array;
}
export interface QueryYammPoolIdRequestAmino {
  asset_id?: string;
}
export interface QueryYammPoolIdRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryYammPoolIdRequest";
  value: QueryYammPoolIdRequestAmino;
}
export interface QueryYammPoolIdRequestSDKType {
  asset_id: string;
}
export interface QueryYammPoolIdResponse {
  poolId: bigint;
}
export interface QueryYammPoolIdResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse";
  value: Uint8Array;
}
export interface QueryYammPoolIdResponseAmino {
  pool_id?: string;
}
export interface QueryYammPoolIdResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryYammPoolIdResponse";
  value: QueryYammPoolIdResponseAmino;
}
export interface QueryYammPoolIdResponseSDKType {
  pool_id: bigint;
}
export interface QueryOrderStepBoundsRequest {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
}
export interface QueryOrderStepBoundsRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest";
  value: Uint8Array;
}
export interface QueryOrderStepBoundsRequestAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
}
export interface QueryOrderStepBoundsRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderStepBoundsRequest";
  value: QueryOrderStepBoundsRequestAmino;
}
export interface QueryOrderStepBoundsRequestSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
}
export interface QueryOrderStepBoundsResponse {
  minStep: string;
  maxStep: string;
}
export interface QueryOrderStepBoundsResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse";
  value: Uint8Array;
}
export interface QueryOrderStepBoundsResponseAmino {
  min_step?: string;
  max_step?: string;
}
export interface QueryOrderStepBoundsResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderStepBoundsResponse";
  value: QueryOrderStepBoundsResponseAmino;
}
export interface QueryOrderStepBoundsResponseSDKType {
  min_step: string;
  max_step: string;
}
export interface QueryAllDisabledOrderPairRequest {
  pagination?: PageRequest;
}
export interface QueryAllDisabledOrderPairRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairRequest";
  value: Uint8Array;
}
export interface QueryAllDisabledOrderPairRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDisabledOrderPairRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryAllDisabledOrderPairRequest";
  value: QueryAllDisabledOrderPairRequestAmino;
}
export interface QueryAllDisabledOrderPairRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDisabledOrderPairResponse {
  disabledOrderPair: DisabledOrderPair[];
  pagination?: PageResponse;
}
export interface QueryAllDisabledOrderPairResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairResponse";
  value: Uint8Array;
}
export interface QueryAllDisabledOrderPairResponseAmino {
  disabled_order_pair?: DisabledOrderPairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDisabledOrderPairResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryAllDisabledOrderPairResponse";
  value: QueryAllDisabledOrderPairResponseAmino;
}
export interface QueryAllDisabledOrderPairResponseSDKType {
  disabled_order_pair: DisabledOrderPairSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOrderPairDisabledRequest {
  whitelistedRoute: boolean;
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
}
export interface QueryOrderPairDisabledRequestProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledRequest";
  value: Uint8Array;
}
export interface QueryOrderPairDisabledRequestAmino {
  whitelisted_route?: boolean;
  pool_id?: string;
  token_in?: string;
  token_out?: string;
}
export interface QueryOrderPairDisabledRequestAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderPairDisabledRequest";
  value: QueryOrderPairDisabledRequestAmino;
}
export interface QueryOrderPairDisabledRequestSDKType {
  whitelisted_route: boolean;
  pool_id: bigint;
  token_in: string;
  token_out: string;
}
export interface QueryOrderPairDisabledResponse {
  disabled: boolean;
}
export interface QueryOrderPairDisabledResponseProtoMsg {
  typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledResponse";
  value: Uint8Array;
}
export interface QueryOrderPairDisabledResponseAmino {
  disabled?: boolean;
}
export interface QueryOrderPairDisabledResponseAminoMsg {
  type: "/pryzm.amm.v1.QueryOrderPairDisabledResponse";
  value: QueryOrderPairDisabledResponseAmino;
}
export interface QueryOrderPairDisabledResponseSDKType {
  disabled: boolean;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.amm.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.amm.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetPoolTokenRequest(): QueryGetPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest",
  is(o: any): o is QueryGetPoolTokenRequest {
    return o && (o.$typeUrl === QueryGetPoolTokenRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryGetPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryGetPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryGetPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenRequest();
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
  fromJSON(object: any): QueryGetPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenRequest>): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolTokenRequestAmino): QueryGetPoolTokenRequest {
    const message = createBaseQueryGetPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenRequest, useInterfaces: boolean = true): QueryGetPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenRequestAminoMsg): QueryGetPoolTokenRequest {
    return QueryGetPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryGetPoolTokenRequest {
    return QueryGetPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolTokenRequest): Uint8Array {
    return QueryGetPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenRequest): QueryGetPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenRequest",
      value: QueryGetPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolTokenRequest.typeUrl, QueryGetPoolTokenRequest);
function createBaseQueryGetPoolTokenResponse(): QueryGetPoolTokenResponse {
  return {
    poolToken: PoolToken.fromPartial({})
  };
}
export const QueryGetPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse",
  is(o: any): o is QueryGetPoolTokenResponse {
    return o && (o.$typeUrl === QueryGetPoolTokenResponse.typeUrl || PoolToken.is(o.poolToken));
  },
  isSDK(o: any): o is QueryGetPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryGetPoolTokenResponse.typeUrl || PoolToken.isSDK(o.pool_token));
  },
  isAmino(o: any): o is QueryGetPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryGetPoolTokenResponse.typeUrl || PoolToken.isAmino(o.pool_token));
  },
  encode(message: QueryGetPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolToken !== undefined) {
      PoolToken.encode(message.poolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenResponse();
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
  fromJSON(object: any): QueryGetPoolTokenResponse {
    return {
      poolToken: isSet(object.poolToken) ? PoolToken.fromJSON(object.poolToken) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenResponse): unknown {
    const obj: any = {};
    message.poolToken !== undefined && (obj.poolToken = message.poolToken ? PoolToken.toJSON(message.poolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenResponse>): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    message.poolToken = object.poolToken !== undefined && object.poolToken !== null ? PoolToken.fromPartial(object.poolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolTokenResponseAmino): QueryGetPoolTokenResponse {
    const message = createBaseQueryGetPoolTokenResponse();
    if (object.pool_token !== undefined && object.pool_token !== null) {
      message.poolToken = PoolToken.fromAmino(object.pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenResponse, useInterfaces: boolean = true): QueryGetPoolTokenResponseAmino {
    const obj: any = {};
    obj.pool_token = message.poolToken ? PoolToken.toAmino(message.poolToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenResponseAminoMsg): QueryGetPoolTokenResponse {
    return QueryGetPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryGetPoolTokenResponse {
    return QueryGetPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolTokenResponse): Uint8Array {
    return QueryGetPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenResponse): QueryGetPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenResponse",
      value: QueryGetPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolTokenResponse.typeUrl, QueryGetPoolTokenResponse);
function createBaseQueryAllPoolTokenRequest(): QueryAllPoolTokenRequest {
  return {
    pagination: undefined,
    poolId: ""
  };
}
export const QueryAllPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest",
  is(o: any): o is QueryAllPoolTokenRequest {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.poolId === "string");
  },
  isSDK(o: any): o is QueryAllPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.pool_id === "string");
  },
  isAmino(o: any): o is QueryAllPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenRequest.typeUrl || typeof o.pool_id === "string");
  },
  encode(message: QueryAllPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.poolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      poolId: isSet(object.poolId) ? String(object.poolId) : ""
    };
  },
  toJSON(message: QueryAllPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenRequest>): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.poolId = object.poolId ?? "";
    return message;
  },
  fromAmino(object: QueryAllPoolTokenRequestAmino): QueryAllPoolTokenRequest {
    const message = createBaseQueryAllPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenRequest, useInterfaces: boolean = true): QueryAllPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenRequestAminoMsg): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenRequest {
    return QueryAllPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenRequest): Uint8Array {
    return QueryAllPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenRequest): QueryAllPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenRequest",
      value: QueryAllPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenRequest.typeUrl, QueryAllPoolTokenRequest);
function createBaseQueryAllPoolTokenResponse(): QueryAllPoolTokenResponse {
  return {
    poolToken: [],
    pagination: undefined
  };
}
export const QueryAllPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse",
  is(o: any): o is QueryAllPoolTokenResponse {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.poolToken) && (!o.poolToken.length || PoolToken.is(o.poolToken[0])));
  },
  isSDK(o: any): o is QueryAllPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.pool_token) && (!o.pool_token.length || PoolToken.isSDK(o.pool_token[0])));
  },
  isAmino(o: any): o is QueryAllPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenResponse.typeUrl || Array.isArray(o.pool_token) && (!o.pool_token.length || PoolToken.isAmino(o.pool_token[0])));
  },
  encode(message: QueryAllPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolToken) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken.push(PoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenResponse {
    return {
      poolToken: Array.isArray(object?.poolToken) ? object.poolToken.map((e: any) => PoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.poolToken) {
      obj.poolToken = message.poolToken.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenResponse>): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.poolToken?.map(e => PoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolTokenResponseAmino): QueryAllPoolTokenResponse {
    const message = createBaseQueryAllPoolTokenResponse();
    message.poolToken = object.pool_token?.map(e => PoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenResponse, useInterfaces: boolean = true): QueryAllPoolTokenResponseAmino {
    const obj: any = {};
    if (message.poolToken) {
      obj.pool_token = message.poolToken.map(e => e ? PoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_token = message.poolToken;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenResponseAminoMsg): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenResponse {
    return QueryAllPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenResponse): Uint8Array {
    return QueryAllPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenResponse): QueryAllPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenResponse",
      value: QueryAllPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenResponse.typeUrl, QueryAllPoolTokenResponse);
function createBaseQueryAllPoolTokenForPoolRequest(): QueryAllPoolTokenForPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryAllPoolTokenForPoolRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolRequest",
  is(o: any): o is QueryAllPoolTokenForPoolRequest {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryAllPoolTokenForPoolRequestSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryAllPoolTokenForPoolRequestAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryAllPoolTokenForPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenForPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenForPoolRequest();
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
  fromJSON(object: any): QueryAllPoolTokenForPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAllPoolTokenForPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenForPoolRequest>): QueryAllPoolTokenForPoolRequest {
    const message = createBaseQueryAllPoolTokenForPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAllPoolTokenForPoolRequestAmino): QueryAllPoolTokenForPoolRequest {
    const message = createBaseQueryAllPoolTokenForPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenForPoolRequest, useInterfaces: boolean = true): QueryAllPoolTokenForPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenForPoolRequestAminoMsg): QueryAllPoolTokenForPoolRequest {
    return QueryAllPoolTokenForPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenForPoolRequestProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenForPoolRequest {
    return QueryAllPoolTokenForPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenForPoolRequest): Uint8Array {
    return QueryAllPoolTokenForPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenForPoolRequest): QueryAllPoolTokenForPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolRequest",
      value: QueryAllPoolTokenForPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenForPoolRequest.typeUrl, QueryAllPoolTokenForPoolRequest);
function createBaseQueryAllPoolTokenForPoolResponse(): QueryAllPoolTokenForPoolResponse {
  return {
    poolToken: []
  };
}
export const QueryAllPoolTokenForPoolResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolResponse",
  is(o: any): o is QueryAllPoolTokenForPoolResponse {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolResponse.typeUrl || Array.isArray(o.poolToken) && (!o.poolToken.length || PoolToken.is(o.poolToken[0])));
  },
  isSDK(o: any): o is QueryAllPoolTokenForPoolResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolResponse.typeUrl || Array.isArray(o.pool_token) && (!o.pool_token.length || PoolToken.isSDK(o.pool_token[0])));
  },
  isAmino(o: any): o is QueryAllPoolTokenForPoolResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenForPoolResponse.typeUrl || Array.isArray(o.pool_token) && (!o.pool_token.length || PoolToken.isAmino(o.pool_token[0])));
  },
  encode(message: QueryAllPoolTokenForPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolToken) {
      PoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenForPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenForPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolToken.push(PoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenForPoolResponse {
    return {
      poolToken: Array.isArray(object?.poolToken) ? object.poolToken.map((e: any) => PoolToken.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllPoolTokenForPoolResponse): unknown {
    const obj: any = {};
    if (message.poolToken) {
      obj.poolToken = message.poolToken.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolToken = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenForPoolResponse>): QueryAllPoolTokenForPoolResponse {
    const message = createBaseQueryAllPoolTokenForPoolResponse();
    message.poolToken = object.poolToken?.map(e => PoolToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllPoolTokenForPoolResponseAmino): QueryAllPoolTokenForPoolResponse {
    const message = createBaseQueryAllPoolTokenForPoolResponse();
    message.poolToken = object.pool_token?.map(e => PoolToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllPoolTokenForPoolResponse, useInterfaces: boolean = true): QueryAllPoolTokenForPoolResponseAmino {
    const obj: any = {};
    if (message.poolToken) {
      obj.pool_token = message.poolToken.map(e => e ? PoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_token = message.poolToken;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenForPoolResponseAminoMsg): QueryAllPoolTokenForPoolResponse {
    return QueryAllPoolTokenForPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenForPoolResponseProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenForPoolResponse {
    return QueryAllPoolTokenForPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenForPoolResponse): Uint8Array {
    return QueryAllPoolTokenForPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenForPoolResponse): QueryAllPoolTokenForPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenForPoolResponse",
      value: QueryAllPoolTokenForPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenForPoolResponse.typeUrl, QueryAllPoolTokenForPoolResponse);
function createBaseQueryAllPoolTokenWeightRequest(): QueryAllPoolTokenWeightRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryAllPoolTokenWeightRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest",
  is(o: any): o is QueryAllPoolTokenWeightRequest {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryAllPoolTokenWeightRequestSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryAllPoolTokenWeightRequestAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryAllPoolTokenWeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenWeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightRequest();
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
  fromJSON(object: any): QueryAllPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryAllPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightRequest>): QueryAllPoolTokenWeightRequest {
    const message = createBaseQueryAllPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAllPoolTokenWeightRequestAmino): QueryAllPoolTokenWeightRequest {
    const message = createBaseQueryAllPoolTokenWeightRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryAllPoolTokenWeightRequest, useInterfaces: boolean = true): QueryAllPoolTokenWeightRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenWeightRequestAminoMsg): QueryAllPoolTokenWeightRequest {
    return QueryAllPoolTokenWeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenWeightRequestProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenWeightRequest {
    return QueryAllPoolTokenWeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenWeightRequest): Uint8Array {
    return QueryAllPoolTokenWeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenWeightRequest): QueryAllPoolTokenWeightRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightRequest",
      value: QueryAllPoolTokenWeightRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenWeightRequest.typeUrl, QueryAllPoolTokenWeightRequest);
function createBaseQueryAllPoolTokenWeightResponse(): QueryAllPoolTokenWeightResponse {
  return {
    tokenWeight: []
  };
}
export const QueryAllPoolTokenWeightResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse",
  is(o: any): o is QueryAllPoolTokenWeightResponse {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightResponse.typeUrl || Array.isArray(o.tokenWeight) && (!o.tokenWeight.length || TokenWeight.is(o.tokenWeight[0])));
  },
  isSDK(o: any): o is QueryAllPoolTokenWeightResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightResponse.typeUrl || Array.isArray(o.token_weight) && (!o.token_weight.length || TokenWeight.isSDK(o.token_weight[0])));
  },
  isAmino(o: any): o is QueryAllPoolTokenWeightResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolTokenWeightResponse.typeUrl || Array.isArray(o.token_weight) && (!o.token_weight.length || TokenWeight.isAmino(o.token_weight[0])));
  },
  encode(message: QueryAllPoolTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokenWeight) {
      TokenWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight.push(TokenWeight.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolTokenWeightResponse {
    return {
      tokenWeight: Array.isArray(object?.tokenWeight) ? object.tokenWeight.map((e: any) => TokenWeight.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAllPoolTokenWeightResponse): unknown {
    const obj: any = {};
    if (message.tokenWeight) {
      obj.tokenWeight = message.tokenWeight.map(e => e ? TokenWeight.toJSON(e) : undefined);
    } else {
      obj.tokenWeight = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolTokenWeightResponse>): QueryAllPoolTokenWeightResponse {
    const message = createBaseQueryAllPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight?.map(e => TokenWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllPoolTokenWeightResponseAmino): QueryAllPoolTokenWeightResponse {
    const message = createBaseQueryAllPoolTokenWeightResponse();
    message.tokenWeight = object.token_weight?.map(e => TokenWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllPoolTokenWeightResponse, useInterfaces: boolean = true): QueryAllPoolTokenWeightResponseAmino {
    const obj: any = {};
    if (message.tokenWeight) {
      obj.token_weight = message.tokenWeight.map(e => e ? TokenWeight.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.token_weight = message.tokenWeight;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolTokenWeightResponseAminoMsg): QueryAllPoolTokenWeightResponse {
    return QueryAllPoolTokenWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolTokenWeightResponseProtoMsg, useInterfaces: boolean = true): QueryAllPoolTokenWeightResponse {
    return QueryAllPoolTokenWeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolTokenWeightResponse): Uint8Array {
    return QueryAllPoolTokenWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolTokenWeightResponse): QueryAllPoolTokenWeightResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolTokenWeightResponse",
      value: QueryAllPoolTokenWeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolTokenWeightResponse.typeUrl, QueryAllPoolTokenWeightResponse);
function createBaseQueryGetPoolTokenWeightRequest(): QueryGetPoolTokenWeightRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetPoolTokenWeightRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest",
  is(o: any): o is QueryGetPoolTokenWeightRequest {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetPoolTokenWeightRequestSDKType {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetPoolTokenWeightRequestAmino {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryGetPoolTokenWeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolTokenWeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightRequest();
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
  fromJSON(object: any): QueryGetPoolTokenWeightRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetPoolTokenWeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightRequest>): QueryGetPoolTokenWeightRequest {
    const message = createBaseQueryGetPoolTokenWeightRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolTokenWeightRequestAmino): QueryGetPoolTokenWeightRequest {
    const message = createBaseQueryGetPoolTokenWeightRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenWeightRequest, useInterfaces: boolean = true): QueryGetPoolTokenWeightRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenWeightRequestAminoMsg): QueryGetPoolTokenWeightRequest {
    return QueryGetPoolTokenWeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenWeightRequestProtoMsg, useInterfaces: boolean = true): QueryGetPoolTokenWeightRequest {
    return QueryGetPoolTokenWeightRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolTokenWeightRequest): Uint8Array {
    return QueryGetPoolTokenWeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenWeightRequest): QueryGetPoolTokenWeightRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightRequest",
      value: QueryGetPoolTokenWeightRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolTokenWeightRequest.typeUrl, QueryGetPoolTokenWeightRequest);
function createBaseQueryGetPoolTokenWeightResponse(): QueryGetPoolTokenWeightResponse {
  return {
    tokenWeight: TokenWeight.fromPartial({})
  };
}
export const QueryGetPoolTokenWeightResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse",
  is(o: any): o is QueryGetPoolTokenWeightResponse {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightResponse.typeUrl || TokenWeight.is(o.tokenWeight));
  },
  isSDK(o: any): o is QueryGetPoolTokenWeightResponseSDKType {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightResponse.typeUrl || TokenWeight.isSDK(o.token_weight));
  },
  isAmino(o: any): o is QueryGetPoolTokenWeightResponseAmino {
    return o && (o.$typeUrl === QueryGetPoolTokenWeightResponse.typeUrl || TokenWeight.isAmino(o.token_weight));
  },
  encode(message: QueryGetPoolTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenWeight !== undefined) {
      TokenWeight.encode(message.tokenWeight, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenWeight = TokenWeight.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolTokenWeightResponse {
    return {
      tokenWeight: isSet(object.tokenWeight) ? TokenWeight.fromJSON(object.tokenWeight) : undefined
    };
  },
  toJSON(message: QueryGetPoolTokenWeightResponse): unknown {
    const obj: any = {};
    message.tokenWeight !== undefined && (obj.tokenWeight = message.tokenWeight ? TokenWeight.toJSON(message.tokenWeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolTokenWeightResponse>): QueryGetPoolTokenWeightResponse {
    const message = createBaseQueryGetPoolTokenWeightResponse();
    message.tokenWeight = object.tokenWeight !== undefined && object.tokenWeight !== null ? TokenWeight.fromPartial(object.tokenWeight) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolTokenWeightResponseAmino): QueryGetPoolTokenWeightResponse {
    const message = createBaseQueryGetPoolTokenWeightResponse();
    if (object.token_weight !== undefined && object.token_weight !== null) {
      message.tokenWeight = TokenWeight.fromAmino(object.token_weight);
    }
    return message;
  },
  toAmino(message: QueryGetPoolTokenWeightResponse, useInterfaces: boolean = true): QueryGetPoolTokenWeightResponseAmino {
    const obj: any = {};
    obj.token_weight = message.tokenWeight ? TokenWeight.toAmino(message.tokenWeight, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolTokenWeightResponseAminoMsg): QueryGetPoolTokenWeightResponse {
    return QueryGetPoolTokenWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolTokenWeightResponseProtoMsg, useInterfaces: boolean = true): QueryGetPoolTokenWeightResponse {
    return QueryGetPoolTokenWeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolTokenWeightResponse): Uint8Array {
    return QueryGetPoolTokenWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolTokenWeightResponse): QueryGetPoolTokenWeightResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolTokenWeightResponse",
      value: QueryGetPoolTokenWeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolTokenWeightResponse.typeUrl, QueryGetPoolTokenWeightResponse);
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest",
  is(o: any): o is QueryGetPoolRequest {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryGetPoolRequestSDKType {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryGetPoolRequestAmino {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest, useInterfaces: boolean = true): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg, useInterfaces: boolean = true): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolRequest.typeUrl, QueryGetPoolRequest);
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse",
  is(o: any): o is QueryGetPoolResponse {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.is(o.pool));
  },
  isSDK(o: any): o is QueryGetPoolResponseSDKType {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.isSDK(o.pool));
  },
  isAmino(o: any): o is QueryGetPoolResponseAmino {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.isAmino(o.pool));
  },
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
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
  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined
    };
  },
  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse, useInterfaces: boolean = true): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg, useInterfaces: boolean = true): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolResponse.typeUrl, QueryGetPoolResponse);
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest",
  is(o: any): o is QueryAllPoolRequest {
    return o && o.$typeUrl === QueryAllPoolRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllPoolRequestSDKType {
    return o && o.$typeUrl === QueryAllPoolRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllPoolRequestAmino {
    return o && o.$typeUrl === QueryAllPoolRequest.typeUrl;
  },
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest, useInterfaces: boolean = true): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg, useInterfaces: boolean = true): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolRequest.typeUrl, QueryAllPoolRequest);
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse",
  is(o: any): o is QueryAllPoolResponse {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.is(o.pool[0])));
  },
  isSDK(o: any): o is QueryAllPoolResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.isSDK(o.pool[0])));
  },
  isAmino(o: any): o is QueryAllPoolResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.isAmino(o.pool[0])));
  },
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse, useInterfaces: boolean = true): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool = message.pool;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg, useInterfaces: boolean = true): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolResponse.typeUrl, QueryAllPoolResponse);
function createBaseQueryGetWeightedTokenRequest(): QueryGetWeightedTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetWeightedTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest",
  is(o: any): o is QueryGetWeightedTokenRequest {
    return o && (o.$typeUrl === QueryGetWeightedTokenRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetWeightedTokenRequestSDKType {
    return o && (o.$typeUrl === QueryGetWeightedTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetWeightedTokenRequestAmino {
    return o && (o.$typeUrl === QueryGetWeightedTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryGetWeightedTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWeightedTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenRequest();
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
  fromJSON(object: any): QueryGetWeightedTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetWeightedTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenRequest>): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetWeightedTokenRequestAmino): QueryGetWeightedTokenRequest {
    const message = createBaseQueryGetWeightedTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetWeightedTokenRequest, useInterfaces: boolean = true): QueryGetWeightedTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightedTokenRequestAminoMsg): QueryGetWeightedTokenRequest {
    return QueryGetWeightedTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightedTokenRequestProtoMsg, useInterfaces: boolean = true): QueryGetWeightedTokenRequest {
    return QueryGetWeightedTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWeightedTokenRequest): Uint8Array {
    return QueryGetWeightedTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightedTokenRequest): QueryGetWeightedTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenRequest",
      value: QueryGetWeightedTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWeightedTokenRequest.typeUrl, QueryGetWeightedTokenRequest);
function createBaseQueryGetWeightedTokenResponse(): QueryGetWeightedTokenResponse {
  return {
    weightedToken: WeightedToken.fromPartial({})
  };
}
export const QueryGetWeightedTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse",
  is(o: any): o is QueryGetWeightedTokenResponse {
    return o && (o.$typeUrl === QueryGetWeightedTokenResponse.typeUrl || WeightedToken.is(o.weightedToken));
  },
  isSDK(o: any): o is QueryGetWeightedTokenResponseSDKType {
    return o && (o.$typeUrl === QueryGetWeightedTokenResponse.typeUrl || WeightedToken.isSDK(o.weighted_token));
  },
  isAmino(o: any): o is QueryGetWeightedTokenResponseAmino {
    return o && (o.$typeUrl === QueryGetWeightedTokenResponse.typeUrl || WeightedToken.isAmino(o.weighted_token));
  },
  encode(message: QueryGetWeightedTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightedToken !== undefined) {
      WeightedToken.encode(message.weightedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWeightedTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightedTokenResponse();
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
  fromJSON(object: any): QueryGetWeightedTokenResponse {
    return {
      weightedToken: isSet(object.weightedToken) ? WeightedToken.fromJSON(object.weightedToken) : undefined
    };
  },
  toJSON(message: QueryGetWeightedTokenResponse): unknown {
    const obj: any = {};
    message.weightedToken !== undefined && (obj.weightedToken = message.weightedToken ? WeightedToken.toJSON(message.weightedToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightedTokenResponse>): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    message.weightedToken = object.weightedToken !== undefined && object.weightedToken !== null ? WeightedToken.fromPartial(object.weightedToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWeightedTokenResponseAmino): QueryGetWeightedTokenResponse {
    const message = createBaseQueryGetWeightedTokenResponse();
    if (object.weighted_token !== undefined && object.weighted_token !== null) {
      message.weightedToken = WeightedToken.fromAmino(object.weighted_token);
    }
    return message;
  },
  toAmino(message: QueryGetWeightedTokenResponse, useInterfaces: boolean = true): QueryGetWeightedTokenResponseAmino {
    const obj: any = {};
    obj.weighted_token = message.weightedToken ? WeightedToken.toAmino(message.weightedToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightedTokenResponseAminoMsg): QueryGetWeightedTokenResponse {
    return QueryGetWeightedTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightedTokenResponseProtoMsg, useInterfaces: boolean = true): QueryGetWeightedTokenResponse {
    return QueryGetWeightedTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWeightedTokenResponse): Uint8Array {
    return QueryGetWeightedTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightedTokenResponse): QueryGetWeightedTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightedTokenResponse",
      value: QueryGetWeightedTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWeightedTokenResponse.typeUrl, QueryGetWeightedTokenResponse);
function createBaseQueryAllWeightedTokenRequest(): QueryAllWeightedTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightedTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest",
  is(o: any): o is QueryAllWeightedTokenRequest {
    return o && o.$typeUrl === QueryAllWeightedTokenRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllWeightedTokenRequestSDKType {
    return o && o.$typeUrl === QueryAllWeightedTokenRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllWeightedTokenRequestAmino {
    return o && o.$typeUrl === QueryAllWeightedTokenRequest.typeUrl;
  },
  encode(message: QueryAllWeightedTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWeightedTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenRequest>): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightedTokenRequestAmino): QueryAllWeightedTokenRequest {
    const message = createBaseQueryAllWeightedTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightedTokenRequest, useInterfaces: boolean = true): QueryAllWeightedTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightedTokenRequestAminoMsg): QueryAllWeightedTokenRequest {
    return QueryAllWeightedTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightedTokenRequestProtoMsg, useInterfaces: boolean = true): QueryAllWeightedTokenRequest {
    return QueryAllWeightedTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWeightedTokenRequest): Uint8Array {
    return QueryAllWeightedTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightedTokenRequest): QueryAllWeightedTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenRequest",
      value: QueryAllWeightedTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWeightedTokenRequest.typeUrl, QueryAllWeightedTokenRequest);
function createBaseQueryAllWeightedTokenResponse(): QueryAllWeightedTokenResponse {
  return {
    weightedToken: [],
    pagination: undefined
  };
}
export const QueryAllWeightedTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse",
  is(o: any): o is QueryAllWeightedTokenResponse {
    return o && (o.$typeUrl === QueryAllWeightedTokenResponse.typeUrl || Array.isArray(o.weightedToken) && (!o.weightedToken.length || WeightedToken.is(o.weightedToken[0])));
  },
  isSDK(o: any): o is QueryAllWeightedTokenResponseSDKType {
    return o && (o.$typeUrl === QueryAllWeightedTokenResponse.typeUrl || Array.isArray(o.weighted_token) && (!o.weighted_token.length || WeightedToken.isSDK(o.weighted_token[0])));
  },
  isAmino(o: any): o is QueryAllWeightedTokenResponseAmino {
    return o && (o.$typeUrl === QueryAllWeightedTokenResponse.typeUrl || Array.isArray(o.weighted_token) && (!o.weighted_token.length || WeightedToken.isAmino(o.weighted_token[0])));
  },
  encode(message: QueryAllWeightedTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightedToken) {
      WeightedToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWeightedTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightedToken.push(WeightedToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightedTokenResponse {
    return {
      weightedToken: Array.isArray(object?.weightedToken) ? object.weightedToken.map((e: any) => WeightedToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightedTokenResponse): unknown {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weightedToken = message.weightedToken.map(e => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.weightedToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightedTokenResponse>): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weightedToken?.map(e => WeightedToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightedTokenResponseAmino): QueryAllWeightedTokenResponse {
    const message = createBaseQueryAllWeightedTokenResponse();
    message.weightedToken = object.weighted_token?.map(e => WeightedToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightedTokenResponse, useInterfaces: boolean = true): QueryAllWeightedTokenResponseAmino {
    const obj: any = {};
    if (message.weightedToken) {
      obj.weighted_token = message.weightedToken.map(e => e ? WeightedToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.weighted_token = message.weightedToken;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightedTokenResponseAminoMsg): QueryAllWeightedTokenResponse {
    return QueryAllWeightedTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightedTokenResponseProtoMsg, useInterfaces: boolean = true): QueryAllWeightedTokenResponse {
    return QueryAllWeightedTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWeightedTokenResponse): Uint8Array {
    return QueryAllWeightedTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightedTokenResponse): QueryAllWeightedTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightedTokenResponse",
      value: QueryAllWeightedTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWeightedTokenResponse.typeUrl, QueryAllWeightedTokenResponse);
function createBaseQueryGetWeightUpdateTimingRequest(): QueryGetWeightUpdateTimingRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetWeightUpdateTimingRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest",
  is(o: any): o is QueryGetWeightUpdateTimingRequest {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryGetWeightUpdateTimingRequestSDKType {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryGetWeightUpdateTimingRequestAmino {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryGetWeightUpdateTimingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWeightUpdateTimingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingRequest();
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
  fromJSON(object: any): QueryGetWeightUpdateTimingRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingRequest>): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetWeightUpdateTimingRequestAmino): QueryGetWeightUpdateTimingRequest {
    const message = createBaseQueryGetWeightUpdateTimingRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetWeightUpdateTimingRequest, useInterfaces: boolean = true): QueryGetWeightUpdateTimingRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightUpdateTimingRequestAminoMsg): QueryGetWeightUpdateTimingRequest {
    return QueryGetWeightUpdateTimingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightUpdateTimingRequestProtoMsg, useInterfaces: boolean = true): QueryGetWeightUpdateTimingRequest {
    return QueryGetWeightUpdateTimingRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWeightUpdateTimingRequest): Uint8Array {
    return QueryGetWeightUpdateTimingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightUpdateTimingRequest): QueryGetWeightUpdateTimingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingRequest",
      value: QueryGetWeightUpdateTimingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWeightUpdateTimingRequest.typeUrl, QueryGetWeightUpdateTimingRequest);
function createBaseQueryGetWeightUpdateTimingResponse(): QueryGetWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: WeightUpdateTiming.fromPartial({})
  };
}
export const QueryGetWeightUpdateTimingResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse",
  is(o: any): o is QueryGetWeightUpdateTimingResponse {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingResponse.typeUrl || WeightUpdateTiming.is(o.weightUpdateTiming));
  },
  isSDK(o: any): o is QueryGetWeightUpdateTimingResponseSDKType {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingResponse.typeUrl || WeightUpdateTiming.isSDK(o.weight_update_timing));
  },
  isAmino(o: any): o is QueryGetWeightUpdateTimingResponseAmino {
    return o && (o.$typeUrl === QueryGetWeightUpdateTimingResponse.typeUrl || WeightUpdateTiming.isAmino(o.weight_update_timing));
  },
  encode(message: QueryGetWeightUpdateTimingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWeightUpdateTimingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWeightUpdateTimingResponse();
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
  fromJSON(object: any): QueryGetWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined
    };
  },
  toJSON(message: QueryGetWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWeightUpdateTimingResponse>): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWeightUpdateTimingResponseAmino): QueryGetWeightUpdateTimingResponse {
    const message = createBaseQueryGetWeightUpdateTimingResponse();
    if (object.weight_update_timing !== undefined && object.weight_update_timing !== null) {
      message.weightUpdateTiming = WeightUpdateTiming.fromAmino(object.weight_update_timing);
    }
    return message;
  },
  toAmino(message: QueryGetWeightUpdateTimingResponse, useInterfaces: boolean = true): QueryGetWeightUpdateTimingResponseAmino {
    const obj: any = {};
    obj.weight_update_timing = message.weightUpdateTiming ? WeightUpdateTiming.toAmino(message.weightUpdateTiming, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWeightUpdateTimingResponseAminoMsg): QueryGetWeightUpdateTimingResponse {
    return QueryGetWeightUpdateTimingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWeightUpdateTimingResponseProtoMsg, useInterfaces: boolean = true): QueryGetWeightUpdateTimingResponse {
    return QueryGetWeightUpdateTimingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWeightUpdateTimingResponse): Uint8Array {
    return QueryGetWeightUpdateTimingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWeightUpdateTimingResponse): QueryGetWeightUpdateTimingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWeightUpdateTimingResponse",
      value: QueryGetWeightUpdateTimingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWeightUpdateTimingResponse.typeUrl, QueryGetWeightUpdateTimingResponse);
function createBaseQueryAllWeightUpdateTimingRequest(): QueryAllWeightUpdateTimingRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest",
  is(o: any): o is QueryAllWeightUpdateTimingRequest {
    return o && o.$typeUrl === QueryAllWeightUpdateTimingRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllWeightUpdateTimingRequestSDKType {
    return o && o.$typeUrl === QueryAllWeightUpdateTimingRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllWeightUpdateTimingRequestAmino {
    return o && o.$typeUrl === QueryAllWeightUpdateTimingRequest.typeUrl;
  },
  encode(message: QueryAllWeightUpdateTimingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWeightUpdateTimingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingRequest>): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightUpdateTimingRequestAmino): QueryAllWeightUpdateTimingRequest {
    const message = createBaseQueryAllWeightUpdateTimingRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightUpdateTimingRequest, useInterfaces: boolean = true): QueryAllWeightUpdateTimingRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightUpdateTimingRequestAminoMsg): QueryAllWeightUpdateTimingRequest {
    return QueryAllWeightUpdateTimingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightUpdateTimingRequestProtoMsg, useInterfaces: boolean = true): QueryAllWeightUpdateTimingRequest {
    return QueryAllWeightUpdateTimingRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWeightUpdateTimingRequest): Uint8Array {
    return QueryAllWeightUpdateTimingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightUpdateTimingRequest): QueryAllWeightUpdateTimingRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingRequest",
      value: QueryAllWeightUpdateTimingRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWeightUpdateTimingRequest.typeUrl, QueryAllWeightUpdateTimingRequest);
function createBaseQueryAllWeightUpdateTimingResponse(): QueryAllWeightUpdateTimingResponse {
  return {
    weightUpdateTiming: [],
    pagination: undefined
  };
}
export const QueryAllWeightUpdateTimingResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse",
  is(o: any): o is QueryAllWeightUpdateTimingResponse {
    return o && (o.$typeUrl === QueryAllWeightUpdateTimingResponse.typeUrl || Array.isArray(o.weightUpdateTiming) && (!o.weightUpdateTiming.length || WeightUpdateTiming.is(o.weightUpdateTiming[0])));
  },
  isSDK(o: any): o is QueryAllWeightUpdateTimingResponseSDKType {
    return o && (o.$typeUrl === QueryAllWeightUpdateTimingResponse.typeUrl || Array.isArray(o.weight_update_timing) && (!o.weight_update_timing.length || WeightUpdateTiming.isSDK(o.weight_update_timing[0])));
  },
  isAmino(o: any): o is QueryAllWeightUpdateTimingResponseAmino {
    return o && (o.$typeUrl === QueryAllWeightUpdateTimingResponse.typeUrl || Array.isArray(o.weight_update_timing) && (!o.weight_update_timing.length || WeightUpdateTiming.isAmino(o.weight_update_timing[0])));
  },
  encode(message: QueryAllWeightUpdateTimingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weightUpdateTiming) {
      WeightUpdateTiming.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWeightUpdateTimingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weightUpdateTiming.push(WeightUpdateTiming.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWeightUpdateTimingResponse {
    return {
      weightUpdateTiming: Array.isArray(object?.weightUpdateTiming) ? object.weightUpdateTiming.map((e: any) => WeightUpdateTiming.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWeightUpdateTimingResponse): unknown {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weightUpdateTiming = message.weightUpdateTiming.map(e => e ? WeightUpdateTiming.toJSON(e) : undefined);
    } else {
      obj.weightUpdateTiming = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWeightUpdateTimingResponse>): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weightUpdateTiming?.map(e => WeightUpdateTiming.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWeightUpdateTimingResponseAmino): QueryAllWeightUpdateTimingResponse {
    const message = createBaseQueryAllWeightUpdateTimingResponse();
    message.weightUpdateTiming = object.weight_update_timing?.map(e => WeightUpdateTiming.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWeightUpdateTimingResponse, useInterfaces: boolean = true): QueryAllWeightUpdateTimingResponseAmino {
    const obj: any = {};
    if (message.weightUpdateTiming) {
      obj.weight_update_timing = message.weightUpdateTiming.map(e => e ? WeightUpdateTiming.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.weight_update_timing = message.weightUpdateTiming;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWeightUpdateTimingResponseAminoMsg): QueryAllWeightUpdateTimingResponse {
    return QueryAllWeightUpdateTimingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWeightUpdateTimingResponseProtoMsg, useInterfaces: boolean = true): QueryAllWeightUpdateTimingResponse {
    return QueryAllWeightUpdateTimingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWeightUpdateTimingResponse): Uint8Array {
    return QueryAllWeightUpdateTimingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWeightUpdateTimingResponse): QueryAllWeightUpdateTimingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWeightUpdateTimingResponse",
      value: QueryAllWeightUpdateTimingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWeightUpdateTimingResponse.typeUrl, QueryAllWeightUpdateTimingResponse);
function createBaseQuerySimulateSingleSwapRequest(): QuerySimulateSingleSwapRequest {
  return {
    swap: Swap.fromPartial({})
  };
}
export const QuerySimulateSingleSwapRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest",
  is(o: any): o is QuerySimulateSingleSwapRequest {
    return o && (o.$typeUrl === QuerySimulateSingleSwapRequest.typeUrl || Swap.is(o.swap));
  },
  isSDK(o: any): o is QuerySimulateSingleSwapRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateSingleSwapRequest.typeUrl || Swap.isSDK(o.swap));
  },
  isAmino(o: any): o is QuerySimulateSingleSwapRequestAmino {
    return o && (o.$typeUrl === QuerySimulateSingleSwapRequest.typeUrl || Swap.isAmino(o.swap));
  },
  encode(message: QuerySimulateSingleSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateSingleSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateSingleSwapRequest {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapRequest): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapRequest>): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    message.swap = object.swap !== undefined && object.swap !== null ? Swap.fromPartial(object.swap) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateSingleSwapRequestAmino): QuerySimulateSingleSwapRequest {
    const message = createBaseQuerySimulateSingleSwapRequest();
    if (object.swap !== undefined && object.swap !== null) {
      message.swap = Swap.fromAmino(object.swap);
    }
    return message;
  },
  toAmino(message: QuerySimulateSingleSwapRequest, useInterfaces: boolean = true): QuerySimulateSingleSwapRequestAmino {
    const obj: any = {};
    obj.swap = message.swap ? Swap.toAmino(message.swap, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateSingleSwapRequestAminoMsg): QuerySimulateSingleSwapRequest {
    return QuerySimulateSingleSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateSingleSwapRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateSingleSwapRequest {
    return QuerySimulateSingleSwapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateSingleSwapRequest): Uint8Array {
    return QuerySimulateSingleSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateSingleSwapRequest): QuerySimulateSingleSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapRequest",
      value: QuerySimulateSingleSwapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateSingleSwapRequest.typeUrl, QuerySimulateSingleSwapRequest);
function createBaseQuerySimulateSingleSwapResponse(): QuerySimulateSingleSwapResponse {
  return {
    amountOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateSingleSwapResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse",
  is(o: any): o is QuerySimulateSingleSwapResponse {
    return o && (o.$typeUrl === QuerySimulateSingleSwapResponse.typeUrl || Coin.is(o.amountOut) && Coin.is(o.amountIn) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is QuerySimulateSingleSwapResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateSingleSwapResponse.typeUrl || Coin.isSDK(o.amount_out) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is QuerySimulateSingleSwapResponseAmino {
    return o && (o.$typeUrl === QuerySimulateSingleSwapResponse.typeUrl || Coin.isAmino(o.amount_out) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: QuerySimulateSingleSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateSingleSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateSingleSwapResponse();
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
  fromJSON(object: any): QuerySimulateSingleSwapResponse {
    return {
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateSingleSwapResponse): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateSingleSwapResponse>): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateSingleSwapResponseAmino): QuerySimulateSingleSwapResponse {
    const message = createBaseQuerySimulateSingleSwapResponse();
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
  toAmino(message: QuerySimulateSingleSwapResponse, useInterfaces: boolean = true): QuerySimulateSingleSwapResponseAmino {
    const obj: any = {};
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateSingleSwapResponseAminoMsg): QuerySimulateSingleSwapResponse {
    return QuerySimulateSingleSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateSingleSwapResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateSingleSwapResponse {
    return QuerySimulateSingleSwapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateSingleSwapResponse): Uint8Array {
    return QuerySimulateSingleSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateSingleSwapResponse): QuerySimulateSingleSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateSingleSwapResponse",
      value: QuerySimulateSingleSwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateSingleSwapResponse.typeUrl, QuerySimulateSingleSwapResponse);
function createBaseQuerySimulateInitializePoolRequest(): QuerySimulateInitializePoolRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QuerySimulateInitializePoolRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest",
  is(o: any): o is QuerySimulateInitializePoolRequest {
    return o && (o.$typeUrl === QuerySimulateInitializePoolRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is QuerySimulateInitializePoolRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateInitializePoolRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is QuerySimulateInitializePoolRequestAmino {
    return o && (o.$typeUrl === QuerySimulateInitializePoolRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: QuerySimulateInitializePoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateInitializePoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateInitializePoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateInitializePoolRequest>): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateInitializePoolRequestAmino): QuerySimulateInitializePoolRequest {
    const message = createBaseQuerySimulateInitializePoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateInitializePoolRequest, useInterfaces: boolean = true): QuerySimulateInitializePoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateInitializePoolRequestAminoMsg): QuerySimulateInitializePoolRequest {
    return QuerySimulateInitializePoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateInitializePoolRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateInitializePoolRequest {
    return QuerySimulateInitializePoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateInitializePoolRequest): Uint8Array {
    return QuerySimulateInitializePoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateInitializePoolRequest): QuerySimulateInitializePoolRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolRequest",
      value: QuerySimulateInitializePoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateInitializePoolRequest.typeUrl, QuerySimulateInitializePoolRequest);
function createBaseQuerySimulateInitializePoolResponse(): QuerySimulateInitializePoolResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateInitializePoolResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse",
  is(o: any): o is QuerySimulateInitializePoolResponse {
    return o && (o.$typeUrl === QuerySimulateInitializePoolResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])));
  },
  isSDK(o: any): o is QuerySimulateInitializePoolResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateInitializePoolResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateInitializePoolResponseAmino {
    return o && (o.$typeUrl === QuerySimulateInitializePoolResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])));
  },
  encode(message: QuerySimulateInitializePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateInitializePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateInitializePoolResponse();
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
  fromJSON(object: any): QuerySimulateInitializePoolResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateInitializePoolResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateInitializePoolResponse>): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateInitializePoolResponseAmino): QuerySimulateInitializePoolResponse {
    const message = createBaseQuerySimulateInitializePoolResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateInitializePoolResponse, useInterfaces: boolean = true): QuerySimulateInitializePoolResponseAmino {
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
  fromAminoMsg(object: QuerySimulateInitializePoolResponseAminoMsg): QuerySimulateInitializePoolResponse {
    return QuerySimulateInitializePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateInitializePoolResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateInitializePoolResponse {
    return QuerySimulateInitializePoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateInitializePoolResponse): Uint8Array {
    return QuerySimulateInitializePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateInitializePoolResponse): QuerySimulateInitializePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateInitializePoolResponse",
      value: QuerySimulateInitializePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateInitializePoolResponse.typeUrl, QuerySimulateInitializePoolResponse);
function createBaseQuerySimulateJoinAllTokensExactLptRequest(): QuerySimulateJoinAllTokensExactLptRequest {
  return {
    poolId: BigInt(0),
    lptOut: ""
  };
}
export const QuerySimulateJoinAllTokensExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest",
  is(o: any): o is QuerySimulateJoinAllTokensExactLptRequest {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptOut === "string");
  },
  isSDK(o: any): o is QuerySimulateJoinAllTokensExactLptRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out === "string");
  },
  isAmino(o: any): o is QuerySimulateJoinAllTokensExactLptRequestAmino {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out === "string");
  },
  encode(message: QuerySimulateJoinAllTokensExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : ""
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptRequest>): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateJoinAllTokensExactLptRequestAmino): QuerySimulateJoinAllTokensExactLptRequest {
    const message = createBaseQuerySimulateJoinAllTokensExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    return message;
  },
  toAmino(message: QuerySimulateJoinAllTokensExactLptRequest, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut === "" ? undefined : message.lptOut;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinAllTokensExactLptRequestAminoMsg): QuerySimulateJoinAllTokensExactLptRequest {
    return QuerySimulateJoinAllTokensExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinAllTokensExactLptRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptRequest {
    return QuerySimulateJoinAllTokensExactLptRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinAllTokensExactLptRequest): Uint8Array {
    return QuerySimulateJoinAllTokensExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinAllTokensExactLptRequest): QuerySimulateJoinAllTokensExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptRequest",
      value: QuerySimulateJoinAllTokensExactLptRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinAllTokensExactLptRequest.typeUrl, QuerySimulateJoinAllTokensExactLptRequest);
function createBaseQuerySimulateJoinAllTokensExactLptResponse(): QuerySimulateJoinAllTokensExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: []
  };
}
export const QuerySimulateJoinAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse",
  is(o: any): o is QuerySimulateJoinAllTokensExactLptResponse {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])));
  },
  isSDK(o: any): o is QuerySimulateJoinAllTokensExactLptResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateJoinAllTokensExactLptResponseAmino {
    return o && (o.$typeUrl === QuerySimulateJoinAllTokensExactLptResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])));
  },
  encode(message: QuerySimulateJoinAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
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
  fromJSON(object: any): QuerySimulateJoinAllTokensExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinAllTokensExactLptResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateJoinAllTokensExactLptResponse>): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinAllTokensExactLptResponseAmino): QuerySimulateJoinAllTokensExactLptResponse {
    const message = createBaseQuerySimulateJoinAllTokensExactLptResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinAllTokensExactLptResponse, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptResponseAmino {
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
  fromAminoMsg(object: QuerySimulateJoinAllTokensExactLptResponseAminoMsg): QuerySimulateJoinAllTokensExactLptResponse {
    return QuerySimulateJoinAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinAllTokensExactLptResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinAllTokensExactLptResponse {
    return QuerySimulateJoinAllTokensExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinAllTokensExactLptResponse): Uint8Array {
    return QuerySimulateJoinAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinAllTokensExactLptResponse): QuerySimulateJoinAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinAllTokensExactLptResponse",
      value: QuerySimulateJoinAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinAllTokensExactLptResponse.typeUrl, QuerySimulateJoinAllTokensExactLptResponse);
function createBaseQuerySimulateJoinExactTokensRequest(): QuerySimulateJoinExactTokensRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QuerySimulateJoinExactTokensRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest",
  is(o: any): o is QuerySimulateJoinExactTokensRequest {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is QuerySimulateJoinExactTokensRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is QuerySimulateJoinExactTokensRequestAmino {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: QuerySimulateJoinExactTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinExactTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinExactTokensRequest>): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinExactTokensRequestAmino): QuerySimulateJoinExactTokensRequest {
    const message = createBaseQuerySimulateJoinExactTokensRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinExactTokensRequest, useInterfaces: boolean = true): QuerySimulateJoinExactTokensRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinExactTokensRequestAminoMsg): QuerySimulateJoinExactTokensRequest {
    return QuerySimulateJoinExactTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinExactTokensRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinExactTokensRequest {
    return QuerySimulateJoinExactTokensRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinExactTokensRequest): Uint8Array {
    return QuerySimulateJoinExactTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinExactTokensRequest): QuerySimulateJoinExactTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensRequest",
      value: QuerySimulateJoinExactTokensRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinExactTokensRequest.typeUrl, QuerySimulateJoinExactTokensRequest);
function createBaseQuerySimulateJoinExactTokensResponse(): QuerySimulateJoinExactTokensResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountsIn: [],
    protocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateJoinExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse",
  is(o: any): o is QuerySimulateJoinExactTokensResponse {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.protocolFee) && (!o.protocolFee.length || Coin.is(o.protocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is QuerySimulateJoinExactTokensResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isSDK(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateJoinExactTokensResponseAmino {
    return o && (o.$typeUrl === QuerySimulateJoinExactTokensResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.protocol_fee) && (!o.protocol_fee.length || Coin.isAmino(o.protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: QuerySimulateJoinExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinExactTokensResponse();
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
  fromJSON(object: any): QuerySimulateJoinExactTokensResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: Array.isArray(object?.protocolFee) ? object.protocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateJoinExactTokensResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateJoinExactTokensResponse>): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateJoinExactTokensResponseAmino): QuerySimulateJoinExactTokensResponse {
    const message = createBaseQuerySimulateJoinExactTokensResponse();
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = Coin.fromAmino(object.lpt_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.protocolFee = object.protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateJoinExactTokensResponse, useInterfaces: boolean = true): QuerySimulateJoinExactTokensResponseAmino {
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
  fromAminoMsg(object: QuerySimulateJoinExactTokensResponseAminoMsg): QuerySimulateJoinExactTokensResponse {
    return QuerySimulateJoinExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinExactTokensResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinExactTokensResponse {
    return QuerySimulateJoinExactTokensResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinExactTokensResponse): Uint8Array {
    return QuerySimulateJoinExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinExactTokensResponse): QuerySimulateJoinExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinExactTokensResponse",
      value: QuerySimulateJoinExactTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinExactTokensResponse.typeUrl, QuerySimulateJoinExactTokensResponse);
function createBaseQuerySimulateZeroImpactJoinYammRequest(): QuerySimulateZeroImpactJoinYammRequest {
  return {
    cAmountIn: Coin.fromPartial({})
  };
}
export const QuerySimulateZeroImpactJoinYammRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest",
  is(o: any): o is QuerySimulateZeroImpactJoinYammRequest {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammRequest.typeUrl || Coin.is(o.cAmountIn));
  },
  isSDK(o: any): o is QuerySimulateZeroImpactJoinYammRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammRequest.typeUrl || Coin.isSDK(o.c_amount_in));
  },
  isAmino(o: any): o is QuerySimulateZeroImpactJoinYammRequestAmino {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammRequest.typeUrl || Coin.isAmino(o.c_amount_in));
  },
  encode(message: QuerySimulateZeroImpactJoinYammRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmountIn !== undefined) {
      Coin.encode(message.cAmountIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmountIn = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateZeroImpactJoinYammRequest {
    return {
      cAmountIn: isSet(object.cAmountIn) ? Coin.fromJSON(object.cAmountIn) : undefined
    };
  },
  toJSON(message: QuerySimulateZeroImpactJoinYammRequest): unknown {
    const obj: any = {};
    message.cAmountIn !== undefined && (obj.cAmountIn = message.cAmountIn ? Coin.toJSON(message.cAmountIn) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateZeroImpactJoinYammRequest>): QuerySimulateZeroImpactJoinYammRequest {
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    message.cAmountIn = object.cAmountIn !== undefined && object.cAmountIn !== null ? Coin.fromPartial(object.cAmountIn) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateZeroImpactJoinYammRequestAmino): QuerySimulateZeroImpactJoinYammRequest {
    const message = createBaseQuerySimulateZeroImpactJoinYammRequest();
    if (object.c_amount_in !== undefined && object.c_amount_in !== null) {
      message.cAmountIn = Coin.fromAmino(object.c_amount_in);
    }
    return message;
  },
  toAmino(message: QuerySimulateZeroImpactJoinYammRequest, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammRequestAmino {
    const obj: any = {};
    obj.c_amount_in = message.cAmountIn ? Coin.toAmino(message.cAmountIn, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateZeroImpactJoinYammRequestAminoMsg): QuerySimulateZeroImpactJoinYammRequest {
    return QuerySimulateZeroImpactJoinYammRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateZeroImpactJoinYammRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammRequest {
    return QuerySimulateZeroImpactJoinYammRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateZeroImpactJoinYammRequest): Uint8Array {
    return QuerySimulateZeroImpactJoinYammRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateZeroImpactJoinYammRequest): QuerySimulateZeroImpactJoinYammRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammRequest",
      value: QuerySimulateZeroImpactJoinYammRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateZeroImpactJoinYammRequest.typeUrl, QuerySimulateZeroImpactJoinYammRequest);
function createBaseQuerySimulateZeroImpactJoinYammResponse(): QuerySimulateZeroImpactJoinYammResponse {
  return {
    lptOut: Coin.fromPartial({}),
    yOut: [],
    refractFee: Coin.fromPartial({}),
    joinProtocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateZeroImpactJoinYammResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse",
  is(o: any): o is QuerySimulateZeroImpactJoinYammResponse {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammResponse.typeUrl || Coin.is(o.lptOut) && Array.isArray(o.yOut) && (!o.yOut.length || Coin.is(o.yOut[0])) && Coin.is(o.refractFee) && Array.isArray(o.joinProtocolFee) && (!o.joinProtocolFee.length || Coin.is(o.joinProtocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is QuerySimulateZeroImpactJoinYammResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammResponse.typeUrl || Coin.isSDK(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isSDK(o.y_out[0])) && Coin.isSDK(o.refract_fee) && Array.isArray(o.join_protocol_fee) && (!o.join_protocol_fee.length || Coin.isSDK(o.join_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateZeroImpactJoinYammResponseAmino {
    return o && (o.$typeUrl === QuerySimulateZeroImpactJoinYammResponse.typeUrl || Coin.isAmino(o.lpt_out) && Array.isArray(o.y_out) && (!o.y_out.length || Coin.isAmino(o.y_out[0])) && Coin.isAmino(o.refract_fee) && Array.isArray(o.join_protocol_fee) && (!o.join_protocol_fee.length || Coin.isAmino(o.join_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: QuerySimulateZeroImpactJoinYammResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
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
  fromJSON(object: any): QuerySimulateZeroImpactJoinYammResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      yOut: Array.isArray(object?.yOut) ? object.yOut.map((e: any) => Coin.fromJSON(e)) : [],
      refractFee: isSet(object.refractFee) ? Coin.fromJSON(object.refractFee) : undefined,
      joinProtocolFee: Array.isArray(object?.joinProtocolFee) ? object.joinProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateZeroImpactJoinYammResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateZeroImpactJoinYammResponse>): QuerySimulateZeroImpactJoinYammResponse {
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.yOut = object.yOut?.map(e => Coin.fromPartial(e)) || [];
    message.refractFee = object.refractFee !== undefined && object.refractFee !== null ? Coin.fromPartial(object.refractFee) : undefined;
    message.joinProtocolFee = object.joinProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateZeroImpactJoinYammResponseAmino): QuerySimulateZeroImpactJoinYammResponse {
    const message = createBaseQuerySimulateZeroImpactJoinYammResponse();
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
  toAmino(message: QuerySimulateZeroImpactJoinYammResponse, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammResponseAmino {
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
  fromAminoMsg(object: QuerySimulateZeroImpactJoinYammResponseAminoMsg): QuerySimulateZeroImpactJoinYammResponse {
    return QuerySimulateZeroImpactJoinYammResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateZeroImpactJoinYammResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateZeroImpactJoinYammResponse {
    return QuerySimulateZeroImpactJoinYammResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateZeroImpactJoinYammResponse): Uint8Array {
    return QuerySimulateZeroImpactJoinYammResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateZeroImpactJoinYammResponse): QuerySimulateZeroImpactJoinYammResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateZeroImpactJoinYammResponse",
      value: QuerySimulateZeroImpactJoinYammResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateZeroImpactJoinYammResponse.typeUrl, QuerySimulateZeroImpactJoinYammResponse);
function createBaseQuerySimulateJoinTokenExactLptRequest(): QuerySimulateJoinTokenExactLptRequest {
  return {
    poolId: BigInt(0),
    lptOut: "",
    tokenIn: ""
  };
}
export const QuerySimulateJoinTokenExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest",
  is(o: any): o is QuerySimulateJoinTokenExactLptRequest {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptOut === "string" && typeof o.tokenIn === "string");
  },
  isSDK(o: any): o is QuerySimulateJoinTokenExactLptRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && typeof o.token_in === "string");
  },
  isAmino(o: any): o is QuerySimulateJoinTokenExactLptRequestAmino {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_out === "string" && typeof o.token_in === "string");
  },
  encode(message: QuerySimulateJoinTokenExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptOut !== "") {
      writer.uint32(18).string(message.lptOut);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptOut = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateJoinTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptOut: isSet(object.lptOut) ? String(object.lptOut) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : ""
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptOut !== undefined && (obj.lptOut = message.lptOut);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptRequest>): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptOut = object.lptOut ?? "";
    message.tokenIn = object.tokenIn ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateJoinTokenExactLptRequestAmino): QuerySimulateJoinTokenExactLptRequest {
    const message = createBaseQuerySimulateJoinTokenExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_out !== undefined && object.lpt_out !== null) {
      message.lptOut = object.lpt_out;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    return message;
  },
  toAmino(message: QuerySimulateJoinTokenExactLptRequest, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_out = message.lptOut === "" ? undefined : message.lptOut;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinTokenExactLptRequestAminoMsg): QuerySimulateJoinTokenExactLptRequest {
    return QuerySimulateJoinTokenExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinTokenExactLptRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptRequest {
    return QuerySimulateJoinTokenExactLptRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinTokenExactLptRequest): Uint8Array {
    return QuerySimulateJoinTokenExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinTokenExactLptRequest): QuerySimulateJoinTokenExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptRequest",
      value: QuerySimulateJoinTokenExactLptRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinTokenExactLptRequest.typeUrl, QuerySimulateJoinTokenExactLptRequest);
function createBaseQuerySimulateJoinTokenExactLptResponse(): QuerySimulateJoinTokenExactLptResponse {
  return {
    lptOut: Coin.fromPartial({}),
    amountIn: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateJoinTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse",
  is(o: any): o is QuerySimulateJoinTokenExactLptResponse {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptResponse.typeUrl || Coin.is(o.lptOut) && Coin.is(o.amountIn) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is QuerySimulateJoinTokenExactLptResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptResponse.typeUrl || Coin.isSDK(o.lpt_out) && Coin.isSDK(o.amount_in) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is QuerySimulateJoinTokenExactLptResponseAmino {
    return o && (o.$typeUrl === QuerySimulateJoinTokenExactLptResponse.typeUrl || Coin.isAmino(o.lpt_out) && Coin.isAmino(o.amount_in) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: QuerySimulateJoinTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
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
  fromJSON(object: any): QuerySimulateJoinTokenExactLptResponse {
    return {
      lptOut: isSet(object.lptOut) ? Coin.fromJSON(object.lptOut) : undefined,
      amountIn: isSet(object.amountIn) ? Coin.fromJSON(object.amountIn) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateJoinTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptOut !== undefined && (obj.lptOut = message.lptOut ? Coin.toJSON(message.lptOut) : undefined);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn ? Coin.toJSON(message.amountIn) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateJoinTokenExactLptResponse>): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
    message.lptOut = object.lptOut !== undefined && object.lptOut !== null ? Coin.fromPartial(object.lptOut) : undefined;
    message.amountIn = object.amountIn !== undefined && object.amountIn !== null ? Coin.fromPartial(object.amountIn) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateJoinTokenExactLptResponseAmino): QuerySimulateJoinTokenExactLptResponse {
    const message = createBaseQuerySimulateJoinTokenExactLptResponse();
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
  toAmino(message: QuerySimulateJoinTokenExactLptResponse, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_out = message.lptOut ? Coin.toAmino(message.lptOut, useInterfaces) : undefined;
    obj.amount_in = message.amountIn ? Coin.toAmino(message.amountIn, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateJoinTokenExactLptResponseAminoMsg): QuerySimulateJoinTokenExactLptResponse {
    return QuerySimulateJoinTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateJoinTokenExactLptResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateJoinTokenExactLptResponse {
    return QuerySimulateJoinTokenExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateJoinTokenExactLptResponse): Uint8Array {
    return QuerySimulateJoinTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateJoinTokenExactLptResponse): QuerySimulateJoinTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateJoinTokenExactLptResponse",
      value: QuerySimulateJoinTokenExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateJoinTokenExactLptResponse.typeUrl, QuerySimulateJoinTokenExactLptResponse);
function createBaseQuerySimulateExitTokenExactLptRequest(): QuerySimulateExitTokenExactLptRequest {
  return {
    poolId: BigInt(0),
    lptIn: "",
    tokenOut: ""
  };
}
export const QuerySimulateExitTokenExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest",
  is(o: any): o is QuerySimulateExitTokenExactLptRequest {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySimulateExitTokenExactLptRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySimulateExitTokenExactLptRequestAmino {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QuerySimulateExitTokenExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitTokenExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptRequest>): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateExitTokenExactLptRequestAmino): QuerySimulateExitTokenExactLptRequest {
    const message = createBaseQuerySimulateExitTokenExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySimulateExitTokenExactLptRequest, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn === "" ? undefined : message.lptIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitTokenExactLptRequestAminoMsg): QuerySimulateExitTokenExactLptRequest {
    return QuerySimulateExitTokenExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitTokenExactLptRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptRequest {
    return QuerySimulateExitTokenExactLptRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitTokenExactLptRequest): Uint8Array {
    return QuerySimulateExitTokenExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitTokenExactLptRequest): QuerySimulateExitTokenExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptRequest",
      value: QuerySimulateExitTokenExactLptRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitTokenExactLptRequest.typeUrl, QuerySimulateExitTokenExactLptRequest);
function createBaseQuerySimulateExitTokenExactLptResponse(): QuerySimulateExitTokenExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountOut: Coin.fromPartial({}),
    protocolFee: Coin.fromPartial({}),
    swapFee: Coin.fromPartial({})
  };
}
export const QuerySimulateExitTokenExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse",
  is(o: any): o is QuerySimulateExitTokenExactLptResponse {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptResponse.typeUrl || Coin.is(o.lptIn) && Coin.is(o.amountOut) && Coin.is(o.protocolFee) && Coin.is(o.swapFee));
  },
  isSDK(o: any): o is QuerySimulateExitTokenExactLptResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptResponse.typeUrl || Coin.isSDK(o.lpt_in) && Coin.isSDK(o.amount_out) && Coin.isSDK(o.protocol_fee) && Coin.isSDK(o.swap_fee));
  },
  isAmino(o: any): o is QuerySimulateExitTokenExactLptResponseAmino {
    return o && (o.$typeUrl === QuerySimulateExitTokenExactLptResponse.typeUrl || Coin.isAmino(o.lpt_in) && Coin.isAmino(o.amount_out) && Coin.isAmino(o.protocol_fee) && Coin.isAmino(o.swap_fee));
  },
  encode(message: QuerySimulateExitTokenExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
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
  fromJSON(object: any): QuerySimulateExitTokenExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountOut: isSet(object.amountOut) ? Coin.fromJSON(object.amountOut) : undefined,
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitTokenExactLptResponse): unknown {
    const obj: any = {};
    message.lptIn !== undefined && (obj.lptIn = message.lptIn ? Coin.toJSON(message.lptIn) : undefined);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut ? Coin.toJSON(message.amountOut) : undefined);
    message.protocolFee !== undefined && (obj.protocolFee = message.protocolFee ? Coin.toJSON(message.protocolFee) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitTokenExactLptResponse>): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountOut = object.amountOut !== undefined && object.amountOut !== null ? Coin.fromPartial(object.amountOut) : undefined;
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee !== undefined && object.swapFee !== null ? Coin.fromPartial(object.swapFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateExitTokenExactLptResponseAmino): QuerySimulateExitTokenExactLptResponse {
    const message = createBaseQuerySimulateExitTokenExactLptResponse();
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
  toAmino(message: QuerySimulateExitTokenExactLptResponse, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptResponseAmino {
    const obj: any = {};
    obj.lpt_in = message.lptIn ? Coin.toAmino(message.lptIn, useInterfaces) : undefined;
    obj.amount_out = message.amountOut ? Coin.toAmino(message.amountOut, useInterfaces) : undefined;
    obj.protocol_fee = message.protocolFee ? Coin.toAmino(message.protocolFee, useInterfaces) : undefined;
    obj.swap_fee = message.swapFee ? Coin.toAmino(message.swapFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitTokenExactLptResponseAminoMsg): QuerySimulateExitTokenExactLptResponse {
    return QuerySimulateExitTokenExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitTokenExactLptResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateExitTokenExactLptResponse {
    return QuerySimulateExitTokenExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitTokenExactLptResponse): Uint8Array {
    return QuerySimulateExitTokenExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitTokenExactLptResponse): QuerySimulateExitTokenExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitTokenExactLptResponse",
      value: QuerySimulateExitTokenExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitTokenExactLptResponse.typeUrl, QuerySimulateExitTokenExactLptResponse);
function createBaseQuerySimulateExitExactTokensRequest(): QuerySimulateExitExactTokensRequest {
  return {
    poolId: BigInt(0),
    amountsOut: []
  };
}
export const QuerySimulateExitExactTokensRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest",
  is(o: any): o is QuerySimulateExitExactTokensRequest {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])));
  },
  isSDK(o: any): o is QuerySimulateExitExactTokensRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])));
  },
  isAmino(o: any): o is QuerySimulateExitExactTokensRequestAmino {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])));
  },
  encode(message: QuerySimulateExitExactTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitExactTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
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
  fromJSON(object: any): QuerySimulateExitExactTokensRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitExactTokensRequest>): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateExitExactTokensRequestAmino): QuerySimulateExitExactTokensRequest {
    const message = createBaseQuerySimulateExitExactTokensRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateExitExactTokensRequest, useInterfaces: boolean = true): QuerySimulateExitExactTokensRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitExactTokensRequestAminoMsg): QuerySimulateExitExactTokensRequest {
    return QuerySimulateExitExactTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitExactTokensRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateExitExactTokensRequest {
    return QuerySimulateExitExactTokensRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitExactTokensRequest): Uint8Array {
    return QuerySimulateExitExactTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitExactTokensRequest): QuerySimulateExitExactTokensRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensRequest",
      value: QuerySimulateExitExactTokensRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitExactTokensRequest.typeUrl, QuerySimulateExitExactTokensRequest);
function createBaseQuerySimulateExitExactTokensResponse(): QuerySimulateExitExactTokensResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({}),
    swapFee: []
  };
}
export const QuerySimulateExitExactTokensResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse",
  is(o: any): o is QuerySimulateExitExactTokensResponse {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensResponse.typeUrl || Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.protocolFee) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is QuerySimulateExitExactTokensResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensResponse.typeUrl || Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateExitExactTokensResponseAmino {
    return o && (o.$typeUrl === QuerySimulateExitExactTokensResponse.typeUrl || Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.protocol_fee) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: QuerySimulateExitExactTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitExactTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitExactTokensResponse();
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
  fromJSON(object: any): QuerySimulateExitExactTokensResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateExitExactTokensResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateExitExactTokensResponse>): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateExitExactTokensResponseAmino): QuerySimulateExitExactTokensResponse {
    const message = createBaseQuerySimulateExitExactTokensResponse();
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
  toAmino(message: QuerySimulateExitExactTokensResponse, useInterfaces: boolean = true): QuerySimulateExitExactTokensResponseAmino {
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
  fromAminoMsg(object: QuerySimulateExitExactTokensResponseAminoMsg): QuerySimulateExitExactTokensResponse {
    return QuerySimulateExitExactTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitExactTokensResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateExitExactTokensResponse {
    return QuerySimulateExitExactTokensResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitExactTokensResponse): Uint8Array {
    return QuerySimulateExitExactTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitExactTokensResponse): QuerySimulateExitExactTokensResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitExactTokensResponse",
      value: QuerySimulateExitExactTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitExactTokensResponse.typeUrl, QuerySimulateExitExactTokensResponse);
function createBaseQuerySimulateExitAllTokensExactLptRequest(): QuerySimulateExitAllTokensExactLptRequest {
  return {
    poolId: BigInt(0),
    lptIn: ""
  };
}
export const QuerySimulateExitAllTokensExactLptRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest",
  is(o: any): o is QuerySimulateExitAllTokensExactLptRequest {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.lptIn === "string");
  },
  isSDK(o: any): o is QuerySimulateExitAllTokensExactLptRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in === "string");
  },
  isAmino(o: any): o is QuerySimulateExitAllTokensExactLptRequestAmino {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.lpt_in === "string");
  },
  encode(message: QuerySimulateExitAllTokensExactLptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lptIn !== "") {
      writer.uint32(18).string(message.lptIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lptIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      lptIn: isSet(object.lptIn) ? String(object.lptIn) : ""
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lptIn !== undefined && (obj.lptIn = message.lptIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptRequest>): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.lptIn = object.lptIn ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateExitAllTokensExactLptRequestAmino): QuerySimulateExitAllTokensExactLptRequest {
    const message = createBaseQuerySimulateExitAllTokensExactLptRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = object.lpt_in;
    }
    return message;
  },
  toAmino(message: QuerySimulateExitAllTokensExactLptRequest, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lpt_in = message.lptIn === "" ? undefined : message.lptIn;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateExitAllTokensExactLptRequestAminoMsg): QuerySimulateExitAllTokensExactLptRequest {
    return QuerySimulateExitAllTokensExactLptRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitAllTokensExactLptRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptRequest {
    return QuerySimulateExitAllTokensExactLptRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitAllTokensExactLptRequest): Uint8Array {
    return QuerySimulateExitAllTokensExactLptRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitAllTokensExactLptRequest): QuerySimulateExitAllTokensExactLptRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptRequest",
      value: QuerySimulateExitAllTokensExactLptRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitAllTokensExactLptRequest.typeUrl, QuerySimulateExitAllTokensExactLptRequest);
function createBaseQuerySimulateExitAllTokensExactLptResponse(): QuerySimulateExitAllTokensExactLptResponse {
  return {
    lptIn: Coin.fromPartial({}),
    amountsOut: [],
    protocolFee: Coin.fromPartial({})
  };
}
export const QuerySimulateExitAllTokensExactLptResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse",
  is(o: any): o is QuerySimulateExitAllTokensExactLptResponse {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptResponse.typeUrl || Coin.is(o.lptIn) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Coin.is(o.protocolFee));
  },
  isSDK(o: any): o is QuerySimulateExitAllTokensExactLptResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptResponse.typeUrl || Coin.isSDK(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Coin.isSDK(o.protocol_fee));
  },
  isAmino(o: any): o is QuerySimulateExitAllTokensExactLptResponseAmino {
    return o && (o.$typeUrl === QuerySimulateExitAllTokensExactLptResponse.typeUrl || Coin.isAmino(o.lpt_in) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Coin.isAmino(o.protocol_fee));
  },
  encode(message: QuerySimulateExitAllTokensExactLptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
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
  fromJSON(object: any): QuerySimulateExitAllTokensExactLptResponse {
    return {
      lptIn: isSet(object.lptIn) ? Coin.fromJSON(object.lptIn) : undefined,
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      protocolFee: isSet(object.protocolFee) ? Coin.fromJSON(object.protocolFee) : undefined
    };
  },
  toJSON(message: QuerySimulateExitAllTokensExactLptResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateExitAllTokensExactLptResponse>): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    message.lptIn = object.lptIn !== undefined && object.lptIn !== null ? Coin.fromPartial(object.lptIn) : undefined;
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.protocolFee = object.protocolFee !== undefined && object.protocolFee !== null ? Coin.fromPartial(object.protocolFee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateExitAllTokensExactLptResponseAmino): QuerySimulateExitAllTokensExactLptResponse {
    const message = createBaseQuerySimulateExitAllTokensExactLptResponse();
    if (object.lpt_in !== undefined && object.lpt_in !== null) {
      message.lptIn = Coin.fromAmino(object.lpt_in);
    }
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.protocol_fee !== undefined && object.protocol_fee !== null) {
      message.protocolFee = Coin.fromAmino(object.protocol_fee);
    }
    return message;
  },
  toAmino(message: QuerySimulateExitAllTokensExactLptResponse, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptResponseAmino {
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
  fromAminoMsg(object: QuerySimulateExitAllTokensExactLptResponseAminoMsg): QuerySimulateExitAllTokensExactLptResponse {
    return QuerySimulateExitAllTokensExactLptResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateExitAllTokensExactLptResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateExitAllTokensExactLptResponse {
    return QuerySimulateExitAllTokensExactLptResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateExitAllTokensExactLptResponse): Uint8Array {
    return QuerySimulateExitAllTokensExactLptResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateExitAllTokensExactLptResponse): QuerySimulateExitAllTokensExactLptResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateExitAllTokensExactLptResponse",
      value: QuerySimulateExitAllTokensExactLptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateExitAllTokensExactLptResponse.typeUrl, QuerySimulateExitAllTokensExactLptResponse);
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    applyFee: false
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest",
  is(o: any): o is QuerySpotPriceRequest {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.applyFee === "boolean");
  },
  isSDK(o: any): o is QuerySpotPriceRequestSDKType {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.apply_fee === "boolean");
  },
  isAmino(o: any): o is QuerySpotPriceRequestAmino {
    return o && (o.$typeUrl === QuerySpotPriceRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.apply_fee === "boolean");
  },
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.applyFee === true) {
      writer.uint32(32).bool(message.applyFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
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
          message.applyFee = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      applyFee: isSet(object.applyFee) ? Boolean(object.applyFee) : false
    };
  },
  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.applyFee !== undefined && (obj.applyFee = message.applyFee);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.applyFee = object.applyFee ?? false;
    return message;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.apply_fee !== undefined && object.apply_fee !== null) {
      message.applyFee = object.apply_fee;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceRequest, useInterfaces: boolean = true): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.apply_fee = message.applyFee === false ? undefined : message.applyFee;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg, useInterfaces: boolean = true): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpotPriceRequest.typeUrl, QuerySpotPriceRequest);
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse",
  is(o: any): o is QuerySpotPriceResponse {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spotPrice === "string");
  },
  isSDK(o: any): o is QuerySpotPriceResponseSDKType {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  isAmino(o: any): o is QuerySpotPriceResponseAmino {
    return o && (o.$typeUrl === QuerySpotPriceResponse.typeUrl || typeof o.spot_price === "string");
  },
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: QuerySpotPriceResponse, useInterfaces: boolean = true): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = padDecimal(message.spotPrice) === "" ? undefined : padDecimal(message.spotPrice);
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg, useInterfaces: boolean = true): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySpotPriceResponse.typeUrl, QuerySpotPriceResponse);
function createBaseQueryGetIntroducingPoolTokenRequest(): QueryGetIntroducingPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetIntroducingPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest",
  is(o: any): o is QueryGetIntroducingPoolTokenRequest {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetIntroducingPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetIntroducingPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryGetIntroducingPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
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
  fromJSON(object: any): QueryGetIntroducingPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenRequest>): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetIntroducingPoolTokenRequestAmino): QueryGetIntroducingPoolTokenRequest {
    const message = createBaseQueryGetIntroducingPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetIntroducingPoolTokenRequest, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetIntroducingPoolTokenRequestAminoMsg): QueryGetIntroducingPoolTokenRequest {
    return QueryGetIntroducingPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIntroducingPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenRequest {
    return QueryGetIntroducingPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetIntroducingPoolTokenRequest): Uint8Array {
    return QueryGetIntroducingPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIntroducingPoolTokenRequest): QueryGetIntroducingPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenRequest",
      value: QueryGetIntroducingPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetIntroducingPoolTokenRequest.typeUrl, QueryGetIntroducingPoolTokenRequest);
function createBaseQueryGetIntroducingPoolTokenResponse(): QueryGetIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const QueryGetIntroducingPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse",
  is(o: any): o is QueryGetIntroducingPoolTokenResponse {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenResponse.typeUrl || VirtualBalancePoolToken.is(o.introducingPoolToken));
  },
  isSDK(o: any): o is QueryGetIntroducingPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenResponse.typeUrl || VirtualBalancePoolToken.isSDK(o.introducing_pool_token));
  },
  isAmino(o: any): o is QueryGetIntroducingPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryGetIntroducingPoolTokenResponse.typeUrl || VirtualBalancePoolToken.isAmino(o.introducing_pool_token));
  },
  encode(message: QueryGetIntroducingPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.introducingPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.introducingPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: isSet(object.introducingPoolToken) ? VirtualBalancePoolToken.fromJSON(object.introducingPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    message.introducingPoolToken !== undefined && (obj.introducingPoolToken = message.introducingPoolToken ? VirtualBalancePoolToken.toJSON(message.introducingPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetIntroducingPoolTokenResponse>): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken !== undefined && object.introducingPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.introducingPoolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetIntroducingPoolTokenResponseAmino): QueryGetIntroducingPoolTokenResponse {
    const message = createBaseQueryGetIntroducingPoolTokenResponse();
    if (object.introducing_pool_token !== undefined && object.introducing_pool_token !== null) {
      message.introducingPoolToken = VirtualBalancePoolToken.fromAmino(object.introducing_pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetIntroducingPoolTokenResponse, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenResponseAmino {
    const obj: any = {};
    obj.introducing_pool_token = message.introducingPoolToken ? VirtualBalancePoolToken.toAmino(message.introducingPoolToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetIntroducingPoolTokenResponseAminoMsg): QueryGetIntroducingPoolTokenResponse {
    return QueryGetIntroducingPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIntroducingPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryGetIntroducingPoolTokenResponse {
    return QueryGetIntroducingPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetIntroducingPoolTokenResponse): Uint8Array {
    return QueryGetIntroducingPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIntroducingPoolTokenResponse): QueryGetIntroducingPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetIntroducingPoolTokenResponse",
      value: QueryGetIntroducingPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetIntroducingPoolTokenResponse.typeUrl, QueryGetIntroducingPoolTokenResponse);
function createBaseQueryAllIntroducingPoolTokenRequest(): QueryAllIntroducingPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest",
  is(o: any): o is QueryAllIntroducingPoolTokenRequest {
    return o && o.$typeUrl === QueryAllIntroducingPoolTokenRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllIntroducingPoolTokenRequestSDKType {
    return o && o.$typeUrl === QueryAllIntroducingPoolTokenRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllIntroducingPoolTokenRequestAmino {
    return o && o.$typeUrl === QueryAllIntroducingPoolTokenRequest.typeUrl;
  },
  encode(message: QueryAllIntroducingPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenRequest>): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIntroducingPoolTokenRequestAmino): QueryAllIntroducingPoolTokenRequest {
    const message = createBaseQueryAllIntroducingPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIntroducingPoolTokenRequest, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIntroducingPoolTokenRequestAminoMsg): QueryAllIntroducingPoolTokenRequest {
    return QueryAllIntroducingPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIntroducingPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenRequest {
    return QueryAllIntroducingPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllIntroducingPoolTokenRequest): Uint8Array {
    return QueryAllIntroducingPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIntroducingPoolTokenRequest): QueryAllIntroducingPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenRequest",
      value: QueryAllIntroducingPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllIntroducingPoolTokenRequest.typeUrl, QueryAllIntroducingPoolTokenRequest);
function createBaseQueryAllIntroducingPoolTokenResponse(): QueryAllIntroducingPoolTokenResponse {
  return {
    introducingPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllIntroducingPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse",
  is(o: any): o is QueryAllIntroducingPoolTokenResponse {
    return o && (o.$typeUrl === QueryAllIntroducingPoolTokenResponse.typeUrl || Array.isArray(o.introducingPoolToken) && (!o.introducingPoolToken.length || VirtualBalancePoolToken.is(o.introducingPoolToken[0])));
  },
  isSDK(o: any): o is QueryAllIntroducingPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryAllIntroducingPoolTokenResponse.typeUrl || Array.isArray(o.introducing_pool_token) && (!o.introducing_pool_token.length || VirtualBalancePoolToken.isSDK(o.introducing_pool_token[0])));
  },
  isAmino(o: any): o is QueryAllIntroducingPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryAllIntroducingPoolTokenResponse.typeUrl || Array.isArray(o.introducing_pool_token) && (!o.introducing_pool_token.length || VirtualBalancePoolToken.isAmino(o.introducing_pool_token[0])));
  },
  encode(message: QueryAllIntroducingPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.introducingPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.introducingPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllIntroducingPoolTokenResponse {
    return {
      introducingPoolToken: Array.isArray(object?.introducingPoolToken) ? object.introducingPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllIntroducingPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducingPoolToken = message.introducingPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.introducingPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllIntroducingPoolTokenResponse>): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducingPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIntroducingPoolTokenResponseAmino): QueryAllIntroducingPoolTokenResponse {
    const message = createBaseQueryAllIntroducingPoolTokenResponse();
    message.introducingPoolToken = object.introducing_pool_token?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIntroducingPoolTokenResponse, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenResponseAmino {
    const obj: any = {};
    if (message.introducingPoolToken) {
      obj.introducing_pool_token = message.introducingPoolToken.map(e => e ? VirtualBalancePoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.introducing_pool_token = message.introducingPoolToken;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIntroducingPoolTokenResponseAminoMsg): QueryAllIntroducingPoolTokenResponse {
    return QueryAllIntroducingPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIntroducingPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryAllIntroducingPoolTokenResponse {
    return QueryAllIntroducingPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllIntroducingPoolTokenResponse): Uint8Array {
    return QueryAllIntroducingPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIntroducingPoolTokenResponse): QueryAllIntroducingPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllIntroducingPoolTokenResponse",
      value: QueryAllIntroducingPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllIntroducingPoolTokenResponse.typeUrl, QueryAllIntroducingPoolTokenResponse);
function createBaseQueryGetExpiringPoolTokenRequest(): QueryGetExpiringPoolTokenRequest {
  return {
    poolId: BigInt(0),
    denom: ""
  };
}
export const QueryGetExpiringPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest",
  is(o: any): o is QueryGetExpiringPoolTokenRequest {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetExpiringPoolTokenRequestSDKType {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetExpiringPoolTokenRequestAmino {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string");
  },
  encode(message: QueryGetExpiringPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetExpiringPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenRequest();
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
  fromJSON(object: any): QueryGetExpiringPoolTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenRequest>): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetExpiringPoolTokenRequestAmino): QueryGetExpiringPoolTokenRequest {
    const message = createBaseQueryGetExpiringPoolTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetExpiringPoolTokenRequest, useInterfaces: boolean = true): QueryGetExpiringPoolTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetExpiringPoolTokenRequestAminoMsg): QueryGetExpiringPoolTokenRequest {
    return QueryGetExpiringPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExpiringPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryGetExpiringPoolTokenRequest {
    return QueryGetExpiringPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetExpiringPoolTokenRequest): Uint8Array {
    return QueryGetExpiringPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExpiringPoolTokenRequest): QueryGetExpiringPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenRequest",
      value: QueryGetExpiringPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetExpiringPoolTokenRequest.typeUrl, QueryGetExpiringPoolTokenRequest);
function createBaseQueryGetExpiringPoolTokenResponse(): QueryGetExpiringPoolTokenResponse {
  return {
    expiringPoolToken: VirtualBalancePoolToken.fromPartial({})
  };
}
export const QueryGetExpiringPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse",
  is(o: any): o is QueryGetExpiringPoolTokenResponse {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenResponse.typeUrl || VirtualBalancePoolToken.is(o.expiringPoolToken));
  },
  isSDK(o: any): o is QueryGetExpiringPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenResponse.typeUrl || VirtualBalancePoolToken.isSDK(o.expiring_pool_token));
  },
  isAmino(o: any): o is QueryGetExpiringPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryGetExpiringPoolTokenResponse.typeUrl || VirtualBalancePoolToken.isAmino(o.expiring_pool_token));
  },
  encode(message: QueryGetExpiringPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expiringPoolToken !== undefined) {
      VirtualBalancePoolToken.encode(message.expiringPoolToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetExpiringPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken = VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExpiringPoolTokenResponse {
    return {
      expiringPoolToken: isSet(object.expiringPoolToken) ? VirtualBalancePoolToken.fromJSON(object.expiringPoolToken) : undefined
    };
  },
  toJSON(message: QueryGetExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    message.expiringPoolToken !== undefined && (obj.expiringPoolToken = message.expiringPoolToken ? VirtualBalancePoolToken.toJSON(message.expiringPoolToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExpiringPoolTokenResponse>): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken !== undefined && object.expiringPoolToken !== null ? VirtualBalancePoolToken.fromPartial(object.expiringPoolToken) : undefined;
    return message;
  },
  fromAmino(object: QueryGetExpiringPoolTokenResponseAmino): QueryGetExpiringPoolTokenResponse {
    const message = createBaseQueryGetExpiringPoolTokenResponse();
    if (object.expiring_pool_token !== undefined && object.expiring_pool_token !== null) {
      message.expiringPoolToken = VirtualBalancePoolToken.fromAmino(object.expiring_pool_token);
    }
    return message;
  },
  toAmino(message: QueryGetExpiringPoolTokenResponse, useInterfaces: boolean = true): QueryGetExpiringPoolTokenResponseAmino {
    const obj: any = {};
    obj.expiring_pool_token = message.expiringPoolToken ? VirtualBalancePoolToken.toAmino(message.expiringPoolToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExpiringPoolTokenResponseAminoMsg): QueryGetExpiringPoolTokenResponse {
    return QueryGetExpiringPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExpiringPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryGetExpiringPoolTokenResponse {
    return QueryGetExpiringPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetExpiringPoolTokenResponse): Uint8Array {
    return QueryGetExpiringPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExpiringPoolTokenResponse): QueryGetExpiringPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExpiringPoolTokenResponse",
      value: QueryGetExpiringPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetExpiringPoolTokenResponse.typeUrl, QueryGetExpiringPoolTokenResponse);
function createBaseQueryAllExpiringPoolTokenRequest(): QueryAllExpiringPoolTokenRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest",
  is(o: any): o is QueryAllExpiringPoolTokenRequest {
    return o && o.$typeUrl === QueryAllExpiringPoolTokenRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllExpiringPoolTokenRequestSDKType {
    return o && o.$typeUrl === QueryAllExpiringPoolTokenRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllExpiringPoolTokenRequestAmino {
    return o && o.$typeUrl === QueryAllExpiringPoolTokenRequest.typeUrl;
  },
  encode(message: QueryAllExpiringPoolTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllExpiringPoolTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenRequest>): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExpiringPoolTokenRequestAmino): QueryAllExpiringPoolTokenRequest {
    const message = createBaseQueryAllExpiringPoolTokenRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExpiringPoolTokenRequest, useInterfaces: boolean = true): QueryAllExpiringPoolTokenRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExpiringPoolTokenRequestAminoMsg): QueryAllExpiringPoolTokenRequest {
    return QueryAllExpiringPoolTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExpiringPoolTokenRequestProtoMsg, useInterfaces: boolean = true): QueryAllExpiringPoolTokenRequest {
    return QueryAllExpiringPoolTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllExpiringPoolTokenRequest): Uint8Array {
    return QueryAllExpiringPoolTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExpiringPoolTokenRequest): QueryAllExpiringPoolTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenRequest",
      value: QueryAllExpiringPoolTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllExpiringPoolTokenRequest.typeUrl, QueryAllExpiringPoolTokenRequest);
function createBaseQueryAllExpiringPoolTokenResponse(): QueryAllExpiringPoolTokenResponse {
  return {
    expiringPoolToken: [],
    pagination: undefined
  };
}
export const QueryAllExpiringPoolTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse",
  is(o: any): o is QueryAllExpiringPoolTokenResponse {
    return o && (o.$typeUrl === QueryAllExpiringPoolTokenResponse.typeUrl || Array.isArray(o.expiringPoolToken) && (!o.expiringPoolToken.length || VirtualBalancePoolToken.is(o.expiringPoolToken[0])));
  },
  isSDK(o: any): o is QueryAllExpiringPoolTokenResponseSDKType {
    return o && (o.$typeUrl === QueryAllExpiringPoolTokenResponse.typeUrl || Array.isArray(o.expiring_pool_token) && (!o.expiring_pool_token.length || VirtualBalancePoolToken.isSDK(o.expiring_pool_token[0])));
  },
  isAmino(o: any): o is QueryAllExpiringPoolTokenResponseAmino {
    return o && (o.$typeUrl === QueryAllExpiringPoolTokenResponse.typeUrl || Array.isArray(o.expiring_pool_token) && (!o.expiring_pool_token.length || VirtualBalancePoolToken.isAmino(o.expiring_pool_token[0])));
  },
  encode(message: QueryAllExpiringPoolTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.expiringPoolToken) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllExpiringPoolTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expiringPoolToken.push(VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExpiringPoolTokenResponse {
    return {
      expiringPoolToken: Array.isArray(object?.expiringPoolToken) ? object.expiringPoolToken.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExpiringPoolTokenResponse): unknown {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiringPoolToken = message.expiringPoolToken.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolToken = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExpiringPoolTokenResponse>): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiringPoolToken?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExpiringPoolTokenResponseAmino): QueryAllExpiringPoolTokenResponse {
    const message = createBaseQueryAllExpiringPoolTokenResponse();
    message.expiringPoolToken = object.expiring_pool_token?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExpiringPoolTokenResponse, useInterfaces: boolean = true): QueryAllExpiringPoolTokenResponseAmino {
    const obj: any = {};
    if (message.expiringPoolToken) {
      obj.expiring_pool_token = message.expiringPoolToken.map(e => e ? VirtualBalancePoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.expiring_pool_token = message.expiringPoolToken;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExpiringPoolTokenResponseAminoMsg): QueryAllExpiringPoolTokenResponse {
    return QueryAllExpiringPoolTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExpiringPoolTokenResponseProtoMsg, useInterfaces: boolean = true): QueryAllExpiringPoolTokenResponse {
    return QueryAllExpiringPoolTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllExpiringPoolTokenResponse): Uint8Array {
    return QueryAllExpiringPoolTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExpiringPoolTokenResponse): QueryAllExpiringPoolTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExpiringPoolTokenResponse",
      value: QueryAllExpiringPoolTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllExpiringPoolTokenResponse.typeUrl, QueryAllExpiringPoolTokenResponse);
function createBaseQueryLpTokenRequest(): QueryLpTokenRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryLpTokenRequest = {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest",
  is(o: any): o is QueryLpTokenRequest {
    return o && (o.$typeUrl === QueryLpTokenRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryLpTokenRequestSDKType {
    return o && (o.$typeUrl === QueryLpTokenRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryLpTokenRequestAmino {
    return o && (o.$typeUrl === QueryLpTokenRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryLpTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLpTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenRequest();
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
  fromJSON(object: any): QueryLpTokenRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryLpTokenRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenRequest>): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLpTokenRequestAmino): QueryLpTokenRequest {
    const message = createBaseQueryLpTokenRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryLpTokenRequest, useInterfaces: boolean = true): QueryLpTokenRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLpTokenRequestAminoMsg): QueryLpTokenRequest {
    return QueryLpTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLpTokenRequestProtoMsg, useInterfaces: boolean = true): QueryLpTokenRequest {
    return QueryLpTokenRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLpTokenRequest): Uint8Array {
    return QueryLpTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLpTokenRequest): QueryLpTokenRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryLpTokenRequest",
      value: QueryLpTokenRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLpTokenRequest.typeUrl, QueryLpTokenRequest);
function createBaseQueryLpTokenResponse(): QueryLpTokenResponse {
  return {
    lpToken: PoolToken.fromPartial({})
  };
}
export const QueryLpTokenResponse = {
  typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse",
  is(o: any): o is QueryLpTokenResponse {
    return o && (o.$typeUrl === QueryLpTokenResponse.typeUrl || PoolToken.is(o.lpToken));
  },
  isSDK(o: any): o is QueryLpTokenResponseSDKType {
    return o && (o.$typeUrl === QueryLpTokenResponse.typeUrl || PoolToken.isSDK(o.lp_token));
  },
  isAmino(o: any): o is QueryLpTokenResponseAmino {
    return o && (o.$typeUrl === QueryLpTokenResponse.typeUrl || PoolToken.isAmino(o.lp_token));
  },
  encode(message: QueryLpTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lpToken !== undefined) {
      PoolToken.encode(message.lpToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryLpTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLpTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lpToken = PoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLpTokenResponse {
    return {
      lpToken: isSet(object.lpToken) ? PoolToken.fromJSON(object.lpToken) : undefined
    };
  },
  toJSON(message: QueryLpTokenResponse): unknown {
    const obj: any = {};
    message.lpToken !== undefined && (obj.lpToken = message.lpToken ? PoolToken.toJSON(message.lpToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryLpTokenResponse>): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    message.lpToken = object.lpToken !== undefined && object.lpToken !== null ? PoolToken.fromPartial(object.lpToken) : undefined;
    return message;
  },
  fromAmino(object: QueryLpTokenResponseAmino): QueryLpTokenResponse {
    const message = createBaseQueryLpTokenResponse();
    if (object.lp_token !== undefined && object.lp_token !== null) {
      message.lpToken = PoolToken.fromAmino(object.lp_token);
    }
    return message;
  },
  toAmino(message: QueryLpTokenResponse, useInterfaces: boolean = true): QueryLpTokenResponseAmino {
    const obj: any = {};
    obj.lp_token = message.lpToken ? PoolToken.toAmino(message.lpToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLpTokenResponseAminoMsg): QueryLpTokenResponse {
    return QueryLpTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLpTokenResponseProtoMsg, useInterfaces: boolean = true): QueryLpTokenResponse {
    return QueryLpTokenResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryLpTokenResponse): Uint8Array {
    return QueryLpTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLpTokenResponse): QueryLpTokenResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryLpTokenResponse",
      value: QueryLpTokenResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLpTokenResponse.typeUrl, QueryLpTokenResponse);
function createBaseQuerySimulateBatchSwapRequest(): QuerySimulateBatchSwapRequest {
  return {
    swapType: 0,
    steps: []
  };
}
export const QuerySimulateBatchSwapRequest = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest",
  is(o: any): o is QuerySimulateBatchSwapRequest {
    return o && (o.$typeUrl === QuerySimulateBatchSwapRequest.typeUrl || isSet(o.swapType) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.is(o.steps[0])));
  },
  isSDK(o: any): o is QuerySimulateBatchSwapRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateBatchSwapRequest.typeUrl || isSet(o.swap_type) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isSDK(o.steps[0])));
  },
  isAmino(o: any): o is QuerySimulateBatchSwapRequestAmino {
    return o && (o.$typeUrl === QuerySimulateBatchSwapRequest.typeUrl || isSet(o.swap_type) && Array.isArray(o.steps) && (!o.steps.length || SwapStep.isAmino(o.steps[0])));
  },
  encode(message: QuerySimulateBatchSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapType !== 0) {
      writer.uint32(8).int32(message.swapType);
    }
    for (const v of message.steps) {
      SwapStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateBatchSwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapType = reader.int32() as any;
          break;
        case 2:
          message.steps.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateBatchSwapRequest {
    return {
      swapType: isSet(object.swapType) ? swapTypeFromJSON(object.swapType) : -1,
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => SwapStep.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapRequest): unknown {
    const obj: any = {};
    message.swapType !== undefined && (obj.swapType = swapTypeToJSON(message.swapType));
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateBatchSwapRequest>): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    message.swapType = object.swapType ?? 0;
    message.steps = object.steps?.map(e => SwapStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateBatchSwapRequestAmino): QuerySimulateBatchSwapRequest {
    const message = createBaseQuerySimulateBatchSwapRequest();
    if (object.swap_type !== undefined && object.swap_type !== null) {
      message.swapType = object.swap_type;
    }
    message.steps = object.steps?.map(e => SwapStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateBatchSwapRequest, useInterfaces: boolean = true): QuerySimulateBatchSwapRequestAmino {
    const obj: any = {};
    obj.swap_type = message.swapType === 0 ? undefined : message.swapType;
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySimulateBatchSwapRequestAminoMsg): QuerySimulateBatchSwapRequest {
    return QuerySimulateBatchSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateBatchSwapRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateBatchSwapRequest {
    return QuerySimulateBatchSwapRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateBatchSwapRequest): Uint8Array {
    return QuerySimulateBatchSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateBatchSwapRequest): QuerySimulateBatchSwapRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapRequest",
      value: QuerySimulateBatchSwapRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateBatchSwapRequest.typeUrl, QuerySimulateBatchSwapRequest);
function createBaseQuerySimulateBatchSwapResponse(): QuerySimulateBatchSwapResponse {
  return {
    amountsIn: [],
    amountsOut: [],
    swapProtocolFee: [],
    joinExitProtocolFee: [],
    swapFee: []
  };
}
export const QuerySimulateBatchSwapResponse = {
  typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse",
  is(o: any): o is QuerySimulateBatchSwapResponse {
    return o && (o.$typeUrl === QuerySimulateBatchSwapResponse.typeUrl || Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && Array.isArray(o.swapProtocolFee) && (!o.swapProtocolFee.length || Coin.is(o.swapProtocolFee[0])) && Array.isArray(o.joinExitProtocolFee) && (!o.joinExitProtocolFee.length || Coin.is(o.joinExitProtocolFee[0])) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])));
  },
  isSDK(o: any): o is QuerySimulateBatchSwapResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateBatchSwapResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isSDK(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isSDK(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])));
  },
  isAmino(o: any): o is QuerySimulateBatchSwapResponseAmino {
    return o && (o.$typeUrl === QuerySimulateBatchSwapResponse.typeUrl || Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isAmino(o.swap_protocol_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isAmino(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])));
  },
  encode(message: QuerySimulateBatchSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateBatchSwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateBatchSwapResponse();
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
  fromJSON(object: any): QuerySimulateBatchSwapResponse {
    return {
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySimulateBatchSwapResponse): unknown {
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
  fromPartial(object: Partial<QuerySimulateBatchSwapResponse>): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySimulateBatchSwapResponseAmino): QuerySimulateBatchSwapResponse {
    const message = createBaseQuerySimulateBatchSwapResponse();
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySimulateBatchSwapResponse, useInterfaces: boolean = true): QuerySimulateBatchSwapResponseAmino {
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
  fromAminoMsg(object: QuerySimulateBatchSwapResponseAminoMsg): QuerySimulateBatchSwapResponse {
    return QuerySimulateBatchSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateBatchSwapResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateBatchSwapResponse {
    return QuerySimulateBatchSwapResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateBatchSwapResponse): Uint8Array {
    return QuerySimulateBatchSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateBatchSwapResponse): QuerySimulateBatchSwapResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QuerySimulateBatchSwapResponse",
      value: QuerySimulateBatchSwapResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateBatchSwapResponse.typeUrl, QuerySimulateBatchSwapResponse);
function createBaseQueryGetYammConfigurationRequest(): QueryGetYammConfigurationRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGetYammConfigurationRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest",
  is(o: any): o is QueryGetYammConfigurationRequest {
    return o && (o.$typeUrl === QueryGetYammConfigurationRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryGetYammConfigurationRequestSDKType {
    return o && (o.$typeUrl === QueryGetYammConfigurationRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryGetYammConfigurationRequestAmino {
    return o && (o.$typeUrl === QueryGetYammConfigurationRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryGetYammConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetYammConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationRequest();
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
  fromJSON(object: any): QueryGetYammConfigurationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetYammConfigurationRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationRequest>): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetYammConfigurationRequestAmino): QueryGetYammConfigurationRequest {
    const message = createBaseQueryGetYammConfigurationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetYammConfigurationRequest, useInterfaces: boolean = true): QueryGetYammConfigurationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetYammConfigurationRequestAminoMsg): QueryGetYammConfigurationRequest {
    return QueryGetYammConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetYammConfigurationRequestProtoMsg, useInterfaces: boolean = true): QueryGetYammConfigurationRequest {
    return QueryGetYammConfigurationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetYammConfigurationRequest): Uint8Array {
    return QueryGetYammConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetYammConfigurationRequest): QueryGetYammConfigurationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationRequest",
      value: QueryGetYammConfigurationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetYammConfigurationRequest.typeUrl, QueryGetYammConfigurationRequest);
function createBaseQueryGetYammConfigurationResponse(): QueryGetYammConfigurationResponse {
  return {
    yammConfiguration: YammConfiguration.fromPartial({})
  };
}
export const QueryGetYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse",
  is(o: any): o is QueryGetYammConfigurationResponse {
    return o && (o.$typeUrl === QueryGetYammConfigurationResponse.typeUrl || YammConfiguration.is(o.yammConfiguration));
  },
  isSDK(o: any): o is QueryGetYammConfigurationResponseSDKType {
    return o && (o.$typeUrl === QueryGetYammConfigurationResponse.typeUrl || YammConfiguration.isSDK(o.yamm_configuration));
  },
  isAmino(o: any): o is QueryGetYammConfigurationResponseAmino {
    return o && (o.$typeUrl === QueryGetYammConfigurationResponse.typeUrl || YammConfiguration.isAmino(o.yamm_configuration));
  },
  encode(message: QueryGetYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yammConfiguration !== undefined) {
      YammConfiguration.encode(message.yammConfiguration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetYammConfigurationResponse();
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
  fromJSON(object: any): QueryGetYammConfigurationResponse {
    return {
      yammConfiguration: isSet(object.yammConfiguration) ? YammConfiguration.fromJSON(object.yammConfiguration) : undefined
    };
  },
  toJSON(message: QueryGetYammConfigurationResponse): unknown {
    const obj: any = {};
    message.yammConfiguration !== undefined && (obj.yammConfiguration = message.yammConfiguration ? YammConfiguration.toJSON(message.yammConfiguration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetYammConfigurationResponse>): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration !== undefined && object.yammConfiguration !== null ? YammConfiguration.fromPartial(object.yammConfiguration) : undefined;
    return message;
  },
  fromAmino(object: QueryGetYammConfigurationResponseAmino): QueryGetYammConfigurationResponse {
    const message = createBaseQueryGetYammConfigurationResponse();
    if (object.yamm_configuration !== undefined && object.yamm_configuration !== null) {
      message.yammConfiguration = YammConfiguration.fromAmino(object.yamm_configuration);
    }
    return message;
  },
  toAmino(message: QueryGetYammConfigurationResponse, useInterfaces: boolean = true): QueryGetYammConfigurationResponseAmino {
    const obj: any = {};
    obj.yamm_configuration = message.yammConfiguration ? YammConfiguration.toAmino(message.yammConfiguration, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetYammConfigurationResponseAminoMsg): QueryGetYammConfigurationResponse {
    return QueryGetYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetYammConfigurationResponseProtoMsg, useInterfaces: boolean = true): QueryGetYammConfigurationResponse {
    return QueryGetYammConfigurationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetYammConfigurationResponse): Uint8Array {
    return QueryGetYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetYammConfigurationResponse): QueryGetYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetYammConfigurationResponse",
      value: QueryGetYammConfigurationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetYammConfigurationResponse.typeUrl, QueryGetYammConfigurationResponse);
function createBaseQueryAllYammConfigurationRequest(): QueryAllYammConfigurationRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllYammConfigurationRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest",
  is(o: any): o is QueryAllYammConfigurationRequest {
    return o && o.$typeUrl === QueryAllYammConfigurationRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllYammConfigurationRequestSDKType {
    return o && o.$typeUrl === QueryAllYammConfigurationRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllYammConfigurationRequestAmino {
    return o && o.$typeUrl === QueryAllYammConfigurationRequest.typeUrl;
  },
  encode(message: QueryAllYammConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllYammConfigurationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationRequest>): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllYammConfigurationRequestAmino): QueryAllYammConfigurationRequest {
    const message = createBaseQueryAllYammConfigurationRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllYammConfigurationRequest, useInterfaces: boolean = true): QueryAllYammConfigurationRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllYammConfigurationRequestAminoMsg): QueryAllYammConfigurationRequest {
    return QueryAllYammConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllYammConfigurationRequestProtoMsg, useInterfaces: boolean = true): QueryAllYammConfigurationRequest {
    return QueryAllYammConfigurationRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllYammConfigurationRequest): Uint8Array {
    return QueryAllYammConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllYammConfigurationRequest): QueryAllYammConfigurationRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationRequest",
      value: QueryAllYammConfigurationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllYammConfigurationRequest.typeUrl, QueryAllYammConfigurationRequest);
function createBaseQueryAllYammConfigurationResponse(): QueryAllYammConfigurationResponse {
  return {
    yammConfiguration: [],
    pagination: undefined
  };
}
export const QueryAllYammConfigurationResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse",
  is(o: any): o is QueryAllYammConfigurationResponse {
    return o && (o.$typeUrl === QueryAllYammConfigurationResponse.typeUrl || Array.isArray(o.yammConfiguration) && (!o.yammConfiguration.length || YammConfiguration.is(o.yammConfiguration[0])));
  },
  isSDK(o: any): o is QueryAllYammConfigurationResponseSDKType {
    return o && (o.$typeUrl === QueryAllYammConfigurationResponse.typeUrl || Array.isArray(o.yamm_configuration) && (!o.yamm_configuration.length || YammConfiguration.isSDK(o.yamm_configuration[0])));
  },
  isAmino(o: any): o is QueryAllYammConfigurationResponseAmino {
    return o && (o.$typeUrl === QueryAllYammConfigurationResponse.typeUrl || Array.isArray(o.yamm_configuration) && (!o.yamm_configuration.length || YammConfiguration.isAmino(o.yamm_configuration[0])));
  },
  encode(message: QueryAllYammConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.yammConfiguration) {
      YammConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllYammConfigurationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllYammConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yammConfiguration.push(YammConfiguration.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllYammConfigurationResponse {
    return {
      yammConfiguration: Array.isArray(object?.yammConfiguration) ? object.yammConfiguration.map((e: any) => YammConfiguration.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllYammConfigurationResponse): unknown {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yammConfiguration = message.yammConfiguration.map(e => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfiguration = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllYammConfigurationResponse>): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yammConfiguration?.map(e => YammConfiguration.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllYammConfigurationResponseAmino): QueryAllYammConfigurationResponse {
    const message = createBaseQueryAllYammConfigurationResponse();
    message.yammConfiguration = object.yamm_configuration?.map(e => YammConfiguration.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllYammConfigurationResponse, useInterfaces: boolean = true): QueryAllYammConfigurationResponseAmino {
    const obj: any = {};
    if (message.yammConfiguration) {
      obj.yamm_configuration = message.yammConfiguration.map(e => e ? YammConfiguration.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_configuration = message.yammConfiguration;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllYammConfigurationResponseAminoMsg): QueryAllYammConfigurationResponse {
    return QueryAllYammConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllYammConfigurationResponseProtoMsg, useInterfaces: boolean = true): QueryAllYammConfigurationResponse {
    return QueryAllYammConfigurationResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllYammConfigurationResponse): Uint8Array {
    return QueryAllYammConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllYammConfigurationResponse): QueryAllYammConfigurationResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllYammConfigurationResponse",
      value: QueryAllYammConfigurationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllYammConfigurationResponse.typeUrl, QueryAllYammConfigurationResponse);
function createBaseQueryGetWhitelistedRouteRequest(): QueryGetWhitelistedRouteRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QueryGetWhitelistedRouteRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest",
  is(o: any): o is QueryGetWhitelistedRouteRequest {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QueryGetWhitelistedRouteRequestSDKType {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QueryGetWhitelistedRouteRequestAmino {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QueryGetWhitelistedRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWhitelistedRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetWhitelistedRouteRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryGetWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteRequest>): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryGetWhitelistedRouteRequestAmino): QueryGetWhitelistedRouteRequest {
    const message = createBaseQueryGetWhitelistedRouteRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QueryGetWhitelistedRouteRequest, useInterfaces: boolean = true): QueryGetWhitelistedRouteRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhitelistedRouteRequestAminoMsg): QueryGetWhitelistedRouteRequest {
    return QueryGetWhitelistedRouteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhitelistedRouteRequestProtoMsg, useInterfaces: boolean = true): QueryGetWhitelistedRouteRequest {
    return QueryGetWhitelistedRouteRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWhitelistedRouteRequest): Uint8Array {
    return QueryGetWhitelistedRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhitelistedRouteRequest): QueryGetWhitelistedRouteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteRequest",
      value: QueryGetWhitelistedRouteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWhitelistedRouteRequest.typeUrl, QueryGetWhitelistedRouteRequest);
function createBaseQueryGetWhitelistedRouteResponse(): QueryGetWhitelistedRouteResponse {
  return {
    whitelistedRoute: WhitelistedRoute.fromPartial({})
  };
}
export const QueryGetWhitelistedRouteResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse",
  is(o: any): o is QueryGetWhitelistedRouteResponse {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteResponse.typeUrl || WhitelistedRoute.is(o.whitelistedRoute));
  },
  isSDK(o: any): o is QueryGetWhitelistedRouteResponseSDKType {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteResponse.typeUrl || WhitelistedRoute.isSDK(o.whitelisted_route));
  },
  isAmino(o: any): o is QueryGetWhitelistedRouteResponseAmino {
    return o && (o.$typeUrl === QueryGetWhitelistedRouteResponse.typeUrl || WhitelistedRoute.isAmino(o.whitelisted_route));
  },
  encode(message: QueryGetWhitelistedRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelistedRoute !== undefined) {
      WhitelistedRoute.encode(message.whitelistedRoute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetWhitelistedRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistedRouteResponse();
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
  fromJSON(object: any): QueryGetWhitelistedRouteResponse {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? WhitelistedRoute.fromJSON(object.whitelistedRoute) : undefined
    };
  },
  toJSON(message: QueryGetWhitelistedRouteResponse): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute ? WhitelistedRoute.toJSON(message.whitelistedRoute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetWhitelistedRouteResponse>): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute !== undefined && object.whitelistedRoute !== null ? WhitelistedRoute.fromPartial(object.whitelistedRoute) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWhitelistedRouteResponseAmino): QueryGetWhitelistedRouteResponse {
    const message = createBaseQueryGetWhitelistedRouteResponse();
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = WhitelistedRoute.fromAmino(object.whitelisted_route);
    }
    return message;
  },
  toAmino(message: QueryGetWhitelistedRouteResponse, useInterfaces: boolean = true): QueryGetWhitelistedRouteResponseAmino {
    const obj: any = {};
    obj.whitelisted_route = message.whitelistedRoute ? WhitelistedRoute.toAmino(message.whitelistedRoute, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhitelistedRouteResponseAminoMsg): QueryGetWhitelistedRouteResponse {
    return QueryGetWhitelistedRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhitelistedRouteResponseProtoMsg, useInterfaces: boolean = true): QueryGetWhitelistedRouteResponse {
    return QueryGetWhitelistedRouteResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetWhitelistedRouteResponse): Uint8Array {
    return QueryGetWhitelistedRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhitelistedRouteResponse): QueryGetWhitelistedRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetWhitelistedRouteResponse",
      value: QueryGetWhitelistedRouteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetWhitelistedRouteResponse.typeUrl, QueryGetWhitelistedRouteResponse);
function createBaseQueryAllWhitelistedRouteRequest(): QueryAllWhitelistedRouteRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest",
  is(o: any): o is QueryAllWhitelistedRouteRequest {
    return o && o.$typeUrl === QueryAllWhitelistedRouteRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllWhitelistedRouteRequestSDKType {
    return o && o.$typeUrl === QueryAllWhitelistedRouteRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllWhitelistedRouteRequestAmino {
    return o && o.$typeUrl === QueryAllWhitelistedRouteRequest.typeUrl;
  },
  encode(message: QueryAllWhitelistedRouteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWhitelistedRouteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteRequest>): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhitelistedRouteRequestAmino): QueryAllWhitelistedRouteRequest {
    const message = createBaseQueryAllWhitelistedRouteRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhitelistedRouteRequest, useInterfaces: boolean = true): QueryAllWhitelistedRouteRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedRouteRequestAminoMsg): QueryAllWhitelistedRouteRequest {
    return QueryAllWhitelistedRouteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedRouteRequestProtoMsg, useInterfaces: boolean = true): QueryAllWhitelistedRouteRequest {
    return QueryAllWhitelistedRouteRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWhitelistedRouteRequest): Uint8Array {
    return QueryAllWhitelistedRouteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedRouteRequest): QueryAllWhitelistedRouteRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteRequest",
      value: QueryAllWhitelistedRouteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWhitelistedRouteRequest.typeUrl, QueryAllWhitelistedRouteRequest);
function createBaseQueryAllWhitelistedRouteResponse(): QueryAllWhitelistedRouteResponse {
  return {
    whitelistedRoute: [],
    pagination: undefined
  };
}
export const QueryAllWhitelistedRouteResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse",
  is(o: any): o is QueryAllWhitelistedRouteResponse {
    return o && (o.$typeUrl === QueryAllWhitelistedRouteResponse.typeUrl || Array.isArray(o.whitelistedRoute) && (!o.whitelistedRoute.length || WhitelistedRoute.is(o.whitelistedRoute[0])));
  },
  isSDK(o: any): o is QueryAllWhitelistedRouteResponseSDKType {
    return o && (o.$typeUrl === QueryAllWhitelistedRouteResponse.typeUrl || Array.isArray(o.whitelisted_route) && (!o.whitelisted_route.length || WhitelistedRoute.isSDK(o.whitelisted_route[0])));
  },
  isAmino(o: any): o is QueryAllWhitelistedRouteResponseAmino {
    return o && (o.$typeUrl === QueryAllWhitelistedRouteResponse.typeUrl || Array.isArray(o.whitelisted_route) && (!o.whitelisted_route.length || WhitelistedRoute.isAmino(o.whitelisted_route[0])));
  },
  encode(message: QueryAllWhitelistedRouteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.whitelistedRoute) {
      WhitelistedRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllWhitelistedRouteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistedRouteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute.push(WhitelistedRoute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllWhitelistedRouteResponse {
    return {
      whitelistedRoute: Array.isArray(object?.whitelistedRoute) ? object.whitelistedRoute.map((e: any) => WhitelistedRoute.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllWhitelistedRouteResponse): unknown {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelistedRoute = message.whitelistedRoute.map(e => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRoute = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllWhitelistedRouteResponse>): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelistedRoute?.map(e => WhitelistedRoute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhitelistedRouteResponseAmino): QueryAllWhitelistedRouteResponse {
    const message = createBaseQueryAllWhitelistedRouteResponse();
    message.whitelistedRoute = object.whitelisted_route?.map(e => WhitelistedRoute.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhitelistedRouteResponse, useInterfaces: boolean = true): QueryAllWhitelistedRouteResponseAmino {
    const obj: any = {};
    if (message.whitelistedRoute) {
      obj.whitelisted_route = message.whitelistedRoute.map(e => e ? WhitelistedRoute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.whitelisted_route = message.whitelistedRoute;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhitelistedRouteResponseAminoMsg): QueryAllWhitelistedRouteResponse {
    return QueryAllWhitelistedRouteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhitelistedRouteResponseProtoMsg, useInterfaces: boolean = true): QueryAllWhitelistedRouteResponse {
    return QueryAllWhitelistedRouteResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllWhitelistedRouteResponse): Uint8Array {
    return QueryAllWhitelistedRouteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhitelistedRouteResponse): QueryAllWhitelistedRouteResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllWhitelistedRouteResponse",
      value: QueryAllWhitelistedRouteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllWhitelistedRouteResponse.typeUrl, QueryAllWhitelistedRouteResponse);
function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest",
  is(o: any): o is QueryGetOrderRequest {
    return o && (o.$typeUrl === QueryGetOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is QueryGetOrderRequestSDKType {
    return o && (o.$typeUrl === QueryGetOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is QueryGetOrderRequestAmino {
    return o && (o.$typeUrl === QueryGetOrderRequest.typeUrl || typeof o.id === "bigint");
  },
  encode(message: QueryGetOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrderRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetOrderRequestAmino): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetOrderRequest, useInterfaces: boolean = true): QueryGetOrderRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderRequestAminoMsg): QueryGetOrderRequest {
    return QueryGetOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderRequestProtoMsg, useInterfaces: boolean = true): QueryGetOrderRequest {
    return QueryGetOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetOrderRequest): Uint8Array {
    return QueryGetOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderRequest): QueryGetOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOrderRequest",
      value: QueryGetOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetOrderRequest.typeUrl, QueryGetOrderRequest);
function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryGetOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse",
  is(o: any): o is QueryGetOrderResponse {
    return o && (o.$typeUrl === QueryGetOrderResponse.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is QueryGetOrderResponseSDKType {
    return o && (o.$typeUrl === QueryGetOrderResponse.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is QueryGetOrderResponseAmino {
    return o && (o.$typeUrl === QueryGetOrderResponse.typeUrl || Order.isAmino(o.order));
  },
  encode(message: QueryGetOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
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
  fromJSON(object: any): QueryGetOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOrderResponseAmino): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: QueryGetOrderResponse, useInterfaces: boolean = true): QueryGetOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderResponseAminoMsg): QueryGetOrderResponse {
    return QueryGetOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderResponseProtoMsg, useInterfaces: boolean = true): QueryGetOrderResponse {
    return QueryGetOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetOrderResponse): Uint8Array {
    return QueryGetOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderResponse): QueryGetOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOrderResponse",
      value: QueryGetOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetOrderResponse.typeUrl, QueryGetOrderResponse);
function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest",
  is(o: any): o is QueryAllOrderRequest {
    return o && o.$typeUrl === QueryAllOrderRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllOrderRequestSDKType {
    return o && o.$typeUrl === QueryAllOrderRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllOrderRequestAmino {
    return o && o.$typeUrl === QueryAllOrderRequest.typeUrl;
  },
  encode(message: QueryAllOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderRequestAmino): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrderRequest, useInterfaces: boolean = true): QueryAllOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderRequestAminoMsg): QueryAllOrderRequest {
    return QueryAllOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderRequestProtoMsg, useInterfaces: boolean = true): QueryAllOrderRequest {
    return QueryAllOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllOrderRequest): Uint8Array {
    return QueryAllOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderRequest): QueryAllOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOrderRequest",
      value: QueryAllOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllOrderRequest.typeUrl, QueryAllOrderRequest);
function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return {
    order: [],
    pagination: undefined
  };
}
export const QueryAllOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse",
  is(o: any): o is QueryAllOrderResponse {
    return o && (o.$typeUrl === QueryAllOrderResponse.typeUrl || Array.isArray(o.order) && (!o.order.length || Order.is(o.order[0])));
  },
  isSDK(o: any): o is QueryAllOrderResponseSDKType {
    return o && (o.$typeUrl === QueryAllOrderResponse.typeUrl || Array.isArray(o.order) && (!o.order.length || Order.isSDK(o.order[0])));
  },
  isAmino(o: any): o is QueryAllOrderResponseAmino {
    return o && (o.$typeUrl === QueryAllOrderResponse.typeUrl || Array.isArray(o.order) && (!o.order.length || Order.isAmino(o.order[0])));
  },
  encode(message: QueryAllOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOrderResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderResponseAmino): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOrderResponse, useInterfaces: boolean = true): QueryAllOrderResponseAmino {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.order = message.order;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderResponseAminoMsg): QueryAllOrderResponse {
    return QueryAllOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderResponseProtoMsg, useInterfaces: boolean = true): QueryAllOrderResponse {
    return QueryAllOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllOrderResponse): Uint8Array {
    return QueryAllOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderResponse): QueryAllOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOrderResponse",
      value: QueryAllOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllOrderResponse.typeUrl, QueryAllOrderResponse);
function createBaseQueryGetExecutableOrderRequest(): QueryGetExecutableOrderRequest {
  return {
    orderId: BigInt(0)
  };
}
export const QueryGetExecutableOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest",
  is(o: any): o is QueryGetExecutableOrderRequest {
    return o && (o.$typeUrl === QueryGetExecutableOrderRequest.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is QueryGetExecutableOrderRequestSDKType {
    return o && (o.$typeUrl === QueryGetExecutableOrderRequest.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is QueryGetExecutableOrderRequestAmino {
    return o && (o.$typeUrl === QueryGetExecutableOrderRequest.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: QueryGetExecutableOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetExecutableOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderRequest();
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
  fromJSON(object: any): QueryGetExecutableOrderRequest {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetExecutableOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderRequest>): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetExecutableOrderRequestAmino): QueryGetExecutableOrderRequest {
    const message = createBaseQueryGetExecutableOrderRequest();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: QueryGetExecutableOrderRequest, useInterfaces: boolean = true): QueryGetExecutableOrderRequestAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutableOrderRequestAminoMsg): QueryGetExecutableOrderRequest {
    return QueryGetExecutableOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutableOrderRequestProtoMsg, useInterfaces: boolean = true): QueryGetExecutableOrderRequest {
    return QueryGetExecutableOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetExecutableOrderRequest): Uint8Array {
    return QueryGetExecutableOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutableOrderRequest): QueryGetExecutableOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderRequest",
      value: QueryGetExecutableOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetExecutableOrderRequest.typeUrl, QueryGetExecutableOrderRequest);
function createBaseQueryGetExecutableOrderResponse(): QueryGetExecutableOrderResponse {
  return {
    executableOrder: Order.fromPartial({})
  };
}
export const QueryGetExecutableOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse",
  is(o: any): o is QueryGetExecutableOrderResponse {
    return o && (o.$typeUrl === QueryGetExecutableOrderResponse.typeUrl || Order.is(o.executableOrder));
  },
  isSDK(o: any): o is QueryGetExecutableOrderResponseSDKType {
    return o && (o.$typeUrl === QueryGetExecutableOrderResponse.typeUrl || Order.isSDK(o.executable_order));
  },
  isAmino(o: any): o is QueryGetExecutableOrderResponseAmino {
    return o && (o.$typeUrl === QueryGetExecutableOrderResponse.typeUrl || Order.isAmino(o.executable_order));
  },
  encode(message: QueryGetExecutableOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.executableOrder !== undefined) {
      Order.encode(message.executableOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetExecutableOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetExecutableOrderResponse {
    return {
      executableOrder: isSet(object.executableOrder) ? Order.fromJSON(object.executableOrder) : undefined
    };
  },
  toJSON(message: QueryGetExecutableOrderResponse): unknown {
    const obj: any = {};
    message.executableOrder !== undefined && (obj.executableOrder = message.executableOrder ? Order.toJSON(message.executableOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetExecutableOrderResponse>): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    message.executableOrder = object.executableOrder !== undefined && object.executableOrder !== null ? Order.fromPartial(object.executableOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetExecutableOrderResponseAmino): QueryGetExecutableOrderResponse {
    const message = createBaseQueryGetExecutableOrderResponse();
    if (object.executable_order !== undefined && object.executable_order !== null) {
      message.executableOrder = Order.fromAmino(object.executable_order);
    }
    return message;
  },
  toAmino(message: QueryGetExecutableOrderResponse, useInterfaces: boolean = true): QueryGetExecutableOrderResponseAmino {
    const obj: any = {};
    obj.executable_order = message.executableOrder ? Order.toAmino(message.executableOrder, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetExecutableOrderResponseAminoMsg): QueryGetExecutableOrderResponse {
    return QueryGetExecutableOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetExecutableOrderResponseProtoMsg, useInterfaces: boolean = true): QueryGetExecutableOrderResponse {
    return QueryGetExecutableOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetExecutableOrderResponse): Uint8Array {
    return QueryGetExecutableOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetExecutableOrderResponse): QueryGetExecutableOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetExecutableOrderResponse",
      value: QueryGetExecutableOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetExecutableOrderResponse.typeUrl, QueryGetExecutableOrderResponse);
function createBaseQueryAllExecutableOrderRequest(): QueryAllExecutableOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllExecutableOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest",
  is(o: any): o is QueryAllExecutableOrderRequest {
    return o && o.$typeUrl === QueryAllExecutableOrderRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllExecutableOrderRequestSDKType {
    return o && o.$typeUrl === QueryAllExecutableOrderRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllExecutableOrderRequestAmino {
    return o && o.$typeUrl === QueryAllExecutableOrderRequest.typeUrl;
  },
  encode(message: QueryAllExecutableOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllExecutableOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderRequest>): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutableOrderRequestAmino): QueryAllExecutableOrderRequest {
    const message = createBaseQueryAllExecutableOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutableOrderRequest, useInterfaces: boolean = true): QueryAllExecutableOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutableOrderRequestAminoMsg): QueryAllExecutableOrderRequest {
    return QueryAllExecutableOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutableOrderRequestProtoMsg, useInterfaces: boolean = true): QueryAllExecutableOrderRequest {
    return QueryAllExecutableOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllExecutableOrderRequest): Uint8Array {
    return QueryAllExecutableOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutableOrderRequest): QueryAllExecutableOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderRequest",
      value: QueryAllExecutableOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllExecutableOrderRequest.typeUrl, QueryAllExecutableOrderRequest);
function createBaseQueryAllExecutableOrderResponse(): QueryAllExecutableOrderResponse {
  return {
    executableOrder: [],
    pagination: undefined
  };
}
export const QueryAllExecutableOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse",
  is(o: any): o is QueryAllExecutableOrderResponse {
    return o && (o.$typeUrl === QueryAllExecutableOrderResponse.typeUrl || Array.isArray(o.executableOrder) && (!o.executableOrder.length || Order.is(o.executableOrder[0])));
  },
  isSDK(o: any): o is QueryAllExecutableOrderResponseSDKType {
    return o && (o.$typeUrl === QueryAllExecutableOrderResponse.typeUrl || Array.isArray(o.executable_order) && (!o.executable_order.length || Order.isSDK(o.executable_order[0])));
  },
  isAmino(o: any): o is QueryAllExecutableOrderResponseAmino {
    return o && (o.$typeUrl === QueryAllExecutableOrderResponse.typeUrl || Array.isArray(o.executable_order) && (!o.executable_order.length || Order.isAmino(o.executable_order[0])));
  },
  encode(message: QueryAllExecutableOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.executableOrder) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllExecutableOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllExecutableOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executableOrder.push(Order.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllExecutableOrderResponse {
    return {
      executableOrder: Array.isArray(object?.executableOrder) ? object.executableOrder.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllExecutableOrderResponse): unknown {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executableOrder = message.executableOrder.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.executableOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllExecutableOrderResponse>): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executableOrder?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllExecutableOrderResponseAmino): QueryAllExecutableOrderResponse {
    const message = createBaseQueryAllExecutableOrderResponse();
    message.executableOrder = object.executable_order?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllExecutableOrderResponse, useInterfaces: boolean = true): QueryAllExecutableOrderResponseAmino {
    const obj: any = {};
    if (message.executableOrder) {
      obj.executable_order = message.executableOrder.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.executable_order = message.executableOrder;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllExecutableOrderResponseAminoMsg): QueryAllExecutableOrderResponse {
    return QueryAllExecutableOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllExecutableOrderResponseProtoMsg, useInterfaces: boolean = true): QueryAllExecutableOrderResponse {
    return QueryAllExecutableOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllExecutableOrderResponse): Uint8Array {
    return QueryAllExecutableOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllExecutableOrderResponse): QueryAllExecutableOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllExecutableOrderResponse",
      value: QueryAllExecutableOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllExecutableOrderResponse.typeUrl, QueryAllExecutableOrderResponse);
function createBaseQueryGetScheduleOrderRequest(): QueryGetScheduleOrderRequest {
  return {
    orderId: BigInt(0)
  };
}
export const QueryGetScheduleOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest",
  is(o: any): o is QueryGetScheduleOrderRequest {
    return o && (o.$typeUrl === QueryGetScheduleOrderRequest.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is QueryGetScheduleOrderRequestSDKType {
    return o && (o.$typeUrl === QueryGetScheduleOrderRequest.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is QueryGetScheduleOrderRequestAmino {
    return o && (o.$typeUrl === QueryGetScheduleOrderRequest.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: QueryGetScheduleOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetScheduleOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderRequest();
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
  fromJSON(object: any): QueryGetScheduleOrderRequest {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetScheduleOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderRequest>): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetScheduleOrderRequestAmino): QueryGetScheduleOrderRequest {
    const message = createBaseQueryGetScheduleOrderRequest();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: QueryGetScheduleOrderRequest, useInterfaces: boolean = true): QueryGetScheduleOrderRequestAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleOrderRequestAminoMsg): QueryGetScheduleOrderRequest {
    return QueryGetScheduleOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleOrderRequestProtoMsg, useInterfaces: boolean = true): QueryGetScheduleOrderRequest {
    return QueryGetScheduleOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetScheduleOrderRequest): Uint8Array {
    return QueryGetScheduleOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleOrderRequest): QueryGetScheduleOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderRequest",
      value: QueryGetScheduleOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetScheduleOrderRequest.typeUrl, QueryGetScheduleOrderRequest);
function createBaseQueryGetScheduleOrderResponse(): QueryGetScheduleOrderResponse {
  return {
    scheduleOrder: ScheduleOrder.fromPartial({})
  };
}
export const QueryGetScheduleOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse",
  is(o: any): o is QueryGetScheduleOrderResponse {
    return o && (o.$typeUrl === QueryGetScheduleOrderResponse.typeUrl || ScheduleOrder.is(o.scheduleOrder));
  },
  isSDK(o: any): o is QueryGetScheduleOrderResponseSDKType {
    return o && (o.$typeUrl === QueryGetScheduleOrderResponse.typeUrl || ScheduleOrder.isSDK(o.schedule_order));
  },
  isAmino(o: any): o is QueryGetScheduleOrderResponseAmino {
    return o && (o.$typeUrl === QueryGetScheduleOrderResponse.typeUrl || ScheduleOrder.isAmino(o.schedule_order));
  },
  encode(message: QueryGetScheduleOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduleOrder !== undefined) {
      ScheduleOrder.encode(message.scheduleOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetScheduleOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleOrderResponse();
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
  fromJSON(object: any): QueryGetScheduleOrderResponse {
    return {
      scheduleOrder: isSet(object.scheduleOrder) ? ScheduleOrder.fromJSON(object.scheduleOrder) : undefined
    };
  },
  toJSON(message: QueryGetScheduleOrderResponse): unknown {
    const obj: any = {};
    message.scheduleOrder !== undefined && (obj.scheduleOrder = message.scheduleOrder ? ScheduleOrder.toJSON(message.scheduleOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetScheduleOrderResponse>): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder !== undefined && object.scheduleOrder !== null ? ScheduleOrder.fromPartial(object.scheduleOrder) : undefined;
    return message;
  },
  fromAmino(object: QueryGetScheduleOrderResponseAmino): QueryGetScheduleOrderResponse {
    const message = createBaseQueryGetScheduleOrderResponse();
    if (object.schedule_order !== undefined && object.schedule_order !== null) {
      message.scheduleOrder = ScheduleOrder.fromAmino(object.schedule_order);
    }
    return message;
  },
  toAmino(message: QueryGetScheduleOrderResponse, useInterfaces: boolean = true): QueryGetScheduleOrderResponseAmino {
    const obj: any = {};
    obj.schedule_order = message.scheduleOrder ? ScheduleOrder.toAmino(message.scheduleOrder, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetScheduleOrderResponseAminoMsg): QueryGetScheduleOrderResponse {
    return QueryGetScheduleOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetScheduleOrderResponseProtoMsg, useInterfaces: boolean = true): QueryGetScheduleOrderResponse {
    return QueryGetScheduleOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetScheduleOrderResponse): Uint8Array {
    return QueryGetScheduleOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetScheduleOrderResponse): QueryGetScheduleOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetScheduleOrderResponse",
      value: QueryGetScheduleOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetScheduleOrderResponse.typeUrl, QueryGetScheduleOrderResponse);
function createBaseQueryAllScheduleOrderRequest(): QueryAllScheduleOrderRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllScheduleOrderRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest",
  is(o: any): o is QueryAllScheduleOrderRequest {
    return o && o.$typeUrl === QueryAllScheduleOrderRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllScheduleOrderRequestSDKType {
    return o && o.$typeUrl === QueryAllScheduleOrderRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllScheduleOrderRequestAmino {
    return o && o.$typeUrl === QueryAllScheduleOrderRequest.typeUrl;
  },
  encode(message: QueryAllScheduleOrderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllScheduleOrderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderRequest>): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllScheduleOrderRequestAmino): QueryAllScheduleOrderRequest {
    const message = createBaseQueryAllScheduleOrderRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllScheduleOrderRequest, useInterfaces: boolean = true): QueryAllScheduleOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScheduleOrderRequestAminoMsg): QueryAllScheduleOrderRequest {
    return QueryAllScheduleOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScheduleOrderRequestProtoMsg, useInterfaces: boolean = true): QueryAllScheduleOrderRequest {
    return QueryAllScheduleOrderRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllScheduleOrderRequest): Uint8Array {
    return QueryAllScheduleOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScheduleOrderRequest): QueryAllScheduleOrderRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderRequest",
      value: QueryAllScheduleOrderRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllScheduleOrderRequest.typeUrl, QueryAllScheduleOrderRequest);
function createBaseQueryAllScheduleOrderResponse(): QueryAllScheduleOrderResponse {
  return {
    scheduleOrder: [],
    pagination: undefined
  };
}
export const QueryAllScheduleOrderResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse",
  is(o: any): o is QueryAllScheduleOrderResponse {
    return o && (o.$typeUrl === QueryAllScheduleOrderResponse.typeUrl || Array.isArray(o.scheduleOrder) && (!o.scheduleOrder.length || ScheduleOrder.is(o.scheduleOrder[0])));
  },
  isSDK(o: any): o is QueryAllScheduleOrderResponseSDKType {
    return o && (o.$typeUrl === QueryAllScheduleOrderResponse.typeUrl || Array.isArray(o.schedule_order) && (!o.schedule_order.length || ScheduleOrder.isSDK(o.schedule_order[0])));
  },
  isAmino(o: any): o is QueryAllScheduleOrderResponseAmino {
    return o && (o.$typeUrl === QueryAllScheduleOrderResponse.typeUrl || Array.isArray(o.schedule_order) && (!o.schedule_order.length || ScheduleOrder.isAmino(o.schedule_order[0])));
  },
  encode(message: QueryAllScheduleOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduleOrder) {
      ScheduleOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllScheduleOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllScheduleOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduleOrder.push(ScheduleOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllScheduleOrderResponse {
    return {
      scheduleOrder: Array.isArray(object?.scheduleOrder) ? object.scheduleOrder.map((e: any) => ScheduleOrder.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllScheduleOrderResponse): unknown {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.scheduleOrder = message.scheduleOrder.map(e => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrder = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllScheduleOrderResponse>): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.scheduleOrder?.map(e => ScheduleOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllScheduleOrderResponseAmino): QueryAllScheduleOrderResponse {
    const message = createBaseQueryAllScheduleOrderResponse();
    message.scheduleOrder = object.schedule_order?.map(e => ScheduleOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllScheduleOrderResponse, useInterfaces: boolean = true): QueryAllScheduleOrderResponseAmino {
    const obj: any = {};
    if (message.scheduleOrder) {
      obj.schedule_order = message.scheduleOrder.map(e => e ? ScheduleOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.schedule_order = message.scheduleOrder;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllScheduleOrderResponseAminoMsg): QueryAllScheduleOrderResponse {
    return QueryAllScheduleOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllScheduleOrderResponseProtoMsg, useInterfaces: boolean = true): QueryAllScheduleOrderResponse {
    return QueryAllScheduleOrderResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllScheduleOrderResponse): Uint8Array {
    return QueryAllScheduleOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllScheduleOrderResponse): QueryAllScheduleOrderResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllScheduleOrderResponse",
      value: QueryAllScheduleOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllScheduleOrderResponse.typeUrl, QueryAllScheduleOrderResponse);
function createBaseQueryGetOraclePricePairRequest(): QueryGetOraclePricePairRequest {
  return {
    assetId: ""
  };
}
export const QueryGetOraclePricePairRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest",
  is(o: any): o is QueryGetOraclePricePairRequest {
    return o && (o.$typeUrl === QueryGetOraclePricePairRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryGetOraclePricePairRequestSDKType {
    return o && (o.$typeUrl === QueryGetOraclePricePairRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryGetOraclePricePairRequestAmino {
    return o && (o.$typeUrl === QueryGetOraclePricePairRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryGetOraclePricePairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetOraclePricePairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairRequest();
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
  fromJSON(object: any): QueryGetOraclePricePairRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetOraclePricePairRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairRequest>): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetOraclePricePairRequestAmino): QueryGetOraclePricePairRequest {
    const message = createBaseQueryGetOraclePricePairRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetOraclePricePairRequest, useInterfaces: boolean = true): QueryGetOraclePricePairRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetOraclePricePairRequestAminoMsg): QueryGetOraclePricePairRequest {
    return QueryGetOraclePricePairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOraclePricePairRequestProtoMsg, useInterfaces: boolean = true): QueryGetOraclePricePairRequest {
    return QueryGetOraclePricePairRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetOraclePricePairRequest): Uint8Array {
    return QueryGetOraclePricePairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOraclePricePairRequest): QueryGetOraclePricePairRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairRequest",
      value: QueryGetOraclePricePairRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetOraclePricePairRequest.typeUrl, QueryGetOraclePricePairRequest);
function createBaseQueryGetOraclePricePairResponse(): QueryGetOraclePricePairResponse {
  return {
    oraclePricePair: OraclePricePair.fromPartial({})
  };
}
export const QueryGetOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse",
  is(o: any): o is QueryGetOraclePricePairResponse {
    return o && (o.$typeUrl === QueryGetOraclePricePairResponse.typeUrl || OraclePricePair.is(o.oraclePricePair));
  },
  isSDK(o: any): o is QueryGetOraclePricePairResponseSDKType {
    return o && (o.$typeUrl === QueryGetOraclePricePairResponse.typeUrl || OraclePricePair.isSDK(o.oracle_price_pair));
  },
  isAmino(o: any): o is QueryGetOraclePricePairResponseAmino {
    return o && (o.$typeUrl === QueryGetOraclePricePairResponse.typeUrl || OraclePricePair.isAmino(o.oracle_price_pair));
  },
  encode(message: QueryGetOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oraclePricePair !== undefined) {
      OraclePricePair.encode(message.oraclePricePair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOraclePricePairResponse();
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
  fromJSON(object: any): QueryGetOraclePricePairResponse {
    return {
      oraclePricePair: isSet(object.oraclePricePair) ? OraclePricePair.fromJSON(object.oraclePricePair) : undefined
    };
  },
  toJSON(message: QueryGetOraclePricePairResponse): unknown {
    const obj: any = {};
    message.oraclePricePair !== undefined && (obj.oraclePricePair = message.oraclePricePair ? OraclePricePair.toJSON(message.oraclePricePair) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetOraclePricePairResponse>): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair !== undefined && object.oraclePricePair !== null ? OraclePricePair.fromPartial(object.oraclePricePair) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOraclePricePairResponseAmino): QueryGetOraclePricePairResponse {
    const message = createBaseQueryGetOraclePricePairResponse();
    if (object.oracle_price_pair !== undefined && object.oracle_price_pair !== null) {
      message.oraclePricePair = OraclePricePair.fromAmino(object.oracle_price_pair);
    }
    return message;
  },
  toAmino(message: QueryGetOraclePricePairResponse, useInterfaces: boolean = true): QueryGetOraclePricePairResponseAmino {
    const obj: any = {};
    obj.oracle_price_pair = message.oraclePricePair ? OraclePricePair.toAmino(message.oraclePricePair, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOraclePricePairResponseAminoMsg): QueryGetOraclePricePairResponse {
    return QueryGetOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOraclePricePairResponseProtoMsg, useInterfaces: boolean = true): QueryGetOraclePricePairResponse {
    return QueryGetOraclePricePairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetOraclePricePairResponse): Uint8Array {
    return QueryGetOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOraclePricePairResponse): QueryGetOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetOraclePricePairResponse",
      value: QueryGetOraclePricePairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetOraclePricePairResponse.typeUrl, QueryGetOraclePricePairResponse);
function createBaseQueryAllOraclePricePairRequest(): QueryAllOraclePricePairRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllOraclePricePairRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest",
  is(o: any): o is QueryAllOraclePricePairRequest {
    return o && o.$typeUrl === QueryAllOraclePricePairRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllOraclePricePairRequestSDKType {
    return o && o.$typeUrl === QueryAllOraclePricePairRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllOraclePricePairRequestAmino {
    return o && o.$typeUrl === QueryAllOraclePricePairRequest.typeUrl;
  },
  encode(message: QueryAllOraclePricePairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllOraclePricePairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairRequest>): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOraclePricePairRequestAmino): QueryAllOraclePricePairRequest {
    const message = createBaseQueryAllOraclePricePairRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOraclePricePairRequest, useInterfaces: boolean = true): QueryAllOraclePricePairRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclePricePairRequestAminoMsg): QueryAllOraclePricePairRequest {
    return QueryAllOraclePricePairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclePricePairRequestProtoMsg, useInterfaces: boolean = true): QueryAllOraclePricePairRequest {
    return QueryAllOraclePricePairRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllOraclePricePairRequest): Uint8Array {
    return QueryAllOraclePricePairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclePricePairRequest): QueryAllOraclePricePairRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairRequest",
      value: QueryAllOraclePricePairRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllOraclePricePairRequest.typeUrl, QueryAllOraclePricePairRequest);
function createBaseQueryAllOraclePricePairResponse(): QueryAllOraclePricePairResponse {
  return {
    oraclePricePair: [],
    pagination: undefined
  };
}
export const QueryAllOraclePricePairResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse",
  is(o: any): o is QueryAllOraclePricePairResponse {
    return o && (o.$typeUrl === QueryAllOraclePricePairResponse.typeUrl || Array.isArray(o.oraclePricePair) && (!o.oraclePricePair.length || OraclePricePair.is(o.oraclePricePair[0])));
  },
  isSDK(o: any): o is QueryAllOraclePricePairResponseSDKType {
    return o && (o.$typeUrl === QueryAllOraclePricePairResponse.typeUrl || Array.isArray(o.oracle_price_pair) && (!o.oracle_price_pair.length || OraclePricePair.isSDK(o.oracle_price_pair[0])));
  },
  isAmino(o: any): o is QueryAllOraclePricePairResponseAmino {
    return o && (o.$typeUrl === QueryAllOraclePricePairResponse.typeUrl || Array.isArray(o.oracle_price_pair) && (!o.oracle_price_pair.length || OraclePricePair.isAmino(o.oracle_price_pair[0])));
  },
  encode(message: QueryAllOraclePricePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oraclePricePair) {
      OraclePricePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllOraclePricePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOraclePricePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oraclePricePair.push(OraclePricePair.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllOraclePricePairResponse {
    return {
      oraclePricePair: Array.isArray(object?.oraclePricePair) ? object.oraclePricePair.map((e: any) => OraclePricePair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllOraclePricePairResponse): unknown {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oraclePricePair = message.oraclePricePair.map(e => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePair = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllOraclePricePairResponse>): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oraclePricePair?.map(e => OraclePricePair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOraclePricePairResponseAmino): QueryAllOraclePricePairResponse {
    const message = createBaseQueryAllOraclePricePairResponse();
    message.oraclePricePair = object.oracle_price_pair?.map(e => OraclePricePair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllOraclePricePairResponse, useInterfaces: boolean = true): QueryAllOraclePricePairResponseAmino {
    const obj: any = {};
    if (message.oraclePricePair) {
      obj.oracle_price_pair = message.oraclePricePair.map(e => e ? OraclePricePair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.oracle_price_pair = message.oraclePricePair;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOraclePricePairResponseAminoMsg): QueryAllOraclePricePairResponse {
    return QueryAllOraclePricePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOraclePricePairResponseProtoMsg, useInterfaces: boolean = true): QueryAllOraclePricePairResponse {
    return QueryAllOraclePricePairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllOraclePricePairResponse): Uint8Array {
    return QueryAllOraclePricePairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOraclePricePairResponse): QueryAllOraclePricePairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllOraclePricePairResponse",
      value: QueryAllOraclePricePairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllOraclePricePairResponse.typeUrl, QueryAllOraclePricePairResponse);
function createBaseQueryVaultPauseModeRequest(): QueryVaultPauseModeRequest {
  return {};
}
export const QueryVaultPauseModeRequest = {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest",
  is(o: any): o is QueryVaultPauseModeRequest {
    return o && o.$typeUrl === QueryVaultPauseModeRequest.typeUrl;
  },
  isSDK(o: any): o is QueryVaultPauseModeRequestSDKType {
    return o && o.$typeUrl === QueryVaultPauseModeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVaultPauseModeRequestAmino {
    return o && o.$typeUrl === QueryVaultPauseModeRequest.typeUrl;
  },
  encode(_: QueryVaultPauseModeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVaultPauseModeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeRequest();
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
  fromJSON(_: any): QueryVaultPauseModeRequest {
    return {};
  },
  toJSON(_: QueryVaultPauseModeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryVaultPauseModeRequest>): QueryVaultPauseModeRequest {
    const message = createBaseQueryVaultPauseModeRequest();
    return message;
  },
  fromAmino(_: QueryVaultPauseModeRequestAmino): QueryVaultPauseModeRequest {
    const message = createBaseQueryVaultPauseModeRequest();
    return message;
  },
  toAmino(_: QueryVaultPauseModeRequest, useInterfaces: boolean = true): QueryVaultPauseModeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVaultPauseModeRequestAminoMsg): QueryVaultPauseModeRequest {
    return QueryVaultPauseModeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultPauseModeRequestProtoMsg, useInterfaces: boolean = true): QueryVaultPauseModeRequest {
    return QueryVaultPauseModeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVaultPauseModeRequest): Uint8Array {
    return QueryVaultPauseModeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultPauseModeRequest): QueryVaultPauseModeRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeRequest",
      value: QueryVaultPauseModeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVaultPauseModeRequest.typeUrl, QueryVaultPauseModeRequest);
function createBaseQueryVaultPauseModeResponse(): QueryVaultPauseModeResponse {
  return {
    paused: false
  };
}
export const QueryVaultPauseModeResponse = {
  typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse",
  is(o: any): o is QueryVaultPauseModeResponse {
    return o && (o.$typeUrl === QueryVaultPauseModeResponse.typeUrl || typeof o.paused === "boolean");
  },
  isSDK(o: any): o is QueryVaultPauseModeResponseSDKType {
    return o && (o.$typeUrl === QueryVaultPauseModeResponse.typeUrl || typeof o.paused === "boolean");
  },
  isAmino(o: any): o is QueryVaultPauseModeResponseAmino {
    return o && (o.$typeUrl === QueryVaultPauseModeResponse.typeUrl || typeof o.paused === "boolean");
  },
  encode(message: QueryVaultPauseModeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryVaultPauseModeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVaultPauseModeResponse();
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
  fromJSON(object: any): QueryVaultPauseModeResponse {
    return {
      paused: isSet(object.paused) ? Boolean(object.paused) : false
    };
  },
  toJSON(message: QueryVaultPauseModeResponse): unknown {
    const obj: any = {};
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },
  fromPartial(object: Partial<QueryVaultPauseModeResponse>): QueryVaultPauseModeResponse {
    const message = createBaseQueryVaultPauseModeResponse();
    message.paused = object.paused ?? false;
    return message;
  },
  fromAmino(object: QueryVaultPauseModeResponseAmino): QueryVaultPauseModeResponse {
    const message = createBaseQueryVaultPauseModeResponse();
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    }
    return message;
  },
  toAmino(message: QueryVaultPauseModeResponse, useInterfaces: boolean = true): QueryVaultPauseModeResponseAmino {
    const obj: any = {};
    obj.paused = message.paused === false ? undefined : message.paused;
    return obj;
  },
  fromAminoMsg(object: QueryVaultPauseModeResponseAminoMsg): QueryVaultPauseModeResponse {
    return QueryVaultPauseModeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultPauseModeResponseProtoMsg, useInterfaces: boolean = true): QueryVaultPauseModeResponse {
    return QueryVaultPauseModeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryVaultPauseModeResponse): Uint8Array {
    return QueryVaultPauseModeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultPauseModeResponse): QueryVaultPauseModeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryVaultPauseModeResponse",
      value: QueryVaultPauseModeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVaultPauseModeResponse.typeUrl, QueryVaultPauseModeResponse);
function createBaseQueryGetPendingTokenIntroductionRequest(): QueryGetPendingTokenIntroductionRequest {
  return {
    assetId: "",
    targetPoolId: BigInt(0)
  };
}
export const QueryGetPendingTokenIntroductionRequest = {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest",
  is(o: any): o is QueryGetPendingTokenIntroductionRequest {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionRequest.typeUrl || typeof o.assetId === "string" && typeof o.targetPoolId === "bigint");
  },
  isSDK(o: any): o is QueryGetPendingTokenIntroductionRequestSDKType {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionRequest.typeUrl || typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  isAmino(o: any): o is QueryGetPendingTokenIntroductionRequestAmino {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionRequest.typeUrl || typeof o.asset_id === "string" && typeof o.target_pool_id === "bigint");
  },
  encode(message: QueryGetPendingTokenIntroductionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.targetPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.targetPoolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
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
  fromJSON(object: any): QueryGetPendingTokenIntroductionRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      targetPoolId: isSet(object.targetPoolId) ? BigInt(object.targetPoolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.targetPoolId !== undefined && (obj.targetPoolId = (message.targetPoolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionRequest>): QueryGetPendingTokenIntroductionRequest {
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    message.assetId = object.assetId ?? "";
    message.targetPoolId = object.targetPoolId !== undefined && object.targetPoolId !== null ? BigInt(object.targetPoolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPendingTokenIntroductionRequestAmino): QueryGetPendingTokenIntroductionRequest {
    const message = createBaseQueryGetPendingTokenIntroductionRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.target_pool_id !== undefined && object.target_pool_id !== null) {
      message.targetPoolId = BigInt(object.target_pool_id);
    }
    return message;
  },
  toAmino(message: QueryGetPendingTokenIntroductionRequest, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.target_pool_id = message.targetPoolId ? message.targetPoolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingTokenIntroductionRequestAminoMsg): QueryGetPendingTokenIntroductionRequest {
    return QueryGetPendingTokenIntroductionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingTokenIntroductionRequestProtoMsg, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionRequest {
    return QueryGetPendingTokenIntroductionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPendingTokenIntroductionRequest): Uint8Array {
    return QueryGetPendingTokenIntroductionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingTokenIntroductionRequest): QueryGetPendingTokenIntroductionRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionRequest",
      value: QueryGetPendingTokenIntroductionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPendingTokenIntroductionRequest.typeUrl, QueryGetPendingTokenIntroductionRequest);
function createBaseQueryGetPendingTokenIntroductionResponse(): QueryGetPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: PendingTokenIntroduction.fromPartial({})
  };
}
export const QueryGetPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse",
  is(o: any): o is QueryGetPendingTokenIntroductionResponse {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionResponse.typeUrl || PendingTokenIntroduction.is(o.pendingTokenIntroduction));
  },
  isSDK(o: any): o is QueryGetPendingTokenIntroductionResponseSDKType {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionResponse.typeUrl || PendingTokenIntroduction.isSDK(o.pending_token_introduction));
  },
  isAmino(o: any): o is QueryGetPendingTokenIntroductionResponseAmino {
    return o && (o.$typeUrl === QueryGetPendingTokenIntroductionResponse.typeUrl || PendingTokenIntroduction.isAmino(o.pending_token_introduction));
  },
  encode(message: QueryGetPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pendingTokenIntroduction !== undefined) {
      PendingTokenIntroduction.encode(message.pendingTokenIntroduction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
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
  fromJSON(object: any): QueryGetPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: isSet(object.pendingTokenIntroduction) ? PendingTokenIntroduction.fromJSON(object.pendingTokenIntroduction) : undefined
    };
  },
  toJSON(message: QueryGetPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    message.pendingTokenIntroduction !== undefined && (obj.pendingTokenIntroduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toJSON(message.pendingTokenIntroduction) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPendingTokenIntroductionResponse>): QueryGetPendingTokenIntroductionResponse {
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction !== undefined && object.pendingTokenIntroduction !== null ? PendingTokenIntroduction.fromPartial(object.pendingTokenIntroduction) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPendingTokenIntroductionResponseAmino): QueryGetPendingTokenIntroductionResponse {
    const message = createBaseQueryGetPendingTokenIntroductionResponse();
    if (object.pending_token_introduction !== undefined && object.pending_token_introduction !== null) {
      message.pendingTokenIntroduction = PendingTokenIntroduction.fromAmino(object.pending_token_introduction);
    }
    return message;
  },
  toAmino(message: QueryGetPendingTokenIntroductionResponse, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    obj.pending_token_introduction = message.pendingTokenIntroduction ? PendingTokenIntroduction.toAmino(message.pendingTokenIntroduction, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPendingTokenIntroductionResponseAminoMsg): QueryGetPendingTokenIntroductionResponse {
    return QueryGetPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPendingTokenIntroductionResponseProtoMsg, useInterfaces: boolean = true): QueryGetPendingTokenIntroductionResponse {
    return QueryGetPendingTokenIntroductionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetPendingTokenIntroductionResponse): Uint8Array {
    return QueryGetPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPendingTokenIntroductionResponse): QueryGetPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryGetPendingTokenIntroductionResponse",
      value: QueryGetPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPendingTokenIntroductionResponse.typeUrl, QueryGetPendingTokenIntroductionResponse);
function createBaseQueryAllPendingTokenIntroductionRequest(): QueryAllPendingTokenIntroductionRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest",
  is(o: any): o is QueryAllPendingTokenIntroductionRequest {
    return o && o.$typeUrl === QueryAllPendingTokenIntroductionRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllPendingTokenIntroductionRequestSDKType {
    return o && o.$typeUrl === QueryAllPendingTokenIntroductionRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllPendingTokenIntroductionRequestAmino {
    return o && o.$typeUrl === QueryAllPendingTokenIntroductionRequest.typeUrl;
  },
  encode(message: QueryAllPendingTokenIntroductionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionRequest>): QueryAllPendingTokenIntroductionRequest {
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingTokenIntroductionRequestAmino): QueryAllPendingTokenIntroductionRequest {
    const message = createBaseQueryAllPendingTokenIntroductionRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingTokenIntroductionRequest, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingTokenIntroductionRequestAminoMsg): QueryAllPendingTokenIntroductionRequest {
    return QueryAllPendingTokenIntroductionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingTokenIntroductionRequestProtoMsg, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionRequest {
    return QueryAllPendingTokenIntroductionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPendingTokenIntroductionRequest): Uint8Array {
    return QueryAllPendingTokenIntroductionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingTokenIntroductionRequest): QueryAllPendingTokenIntroductionRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionRequest",
      value: QueryAllPendingTokenIntroductionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPendingTokenIntroductionRequest.typeUrl, QueryAllPendingTokenIntroductionRequest);
function createBaseQueryAllPendingTokenIntroductionResponse(): QueryAllPendingTokenIntroductionResponse {
  return {
    pendingTokenIntroduction: [],
    pagination: undefined
  };
}
export const QueryAllPendingTokenIntroductionResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse",
  is(o: any): o is QueryAllPendingTokenIntroductionResponse {
    return o && (o.$typeUrl === QueryAllPendingTokenIntroductionResponse.typeUrl || Array.isArray(o.pendingTokenIntroduction) && (!o.pendingTokenIntroduction.length || PendingTokenIntroduction.is(o.pendingTokenIntroduction[0])));
  },
  isSDK(o: any): o is QueryAllPendingTokenIntroductionResponseSDKType {
    return o && (o.$typeUrl === QueryAllPendingTokenIntroductionResponse.typeUrl || Array.isArray(o.pending_token_introduction) && (!o.pending_token_introduction.length || PendingTokenIntroduction.isSDK(o.pending_token_introduction[0])));
  },
  isAmino(o: any): o is QueryAllPendingTokenIntroductionResponseAmino {
    return o && (o.$typeUrl === QueryAllPendingTokenIntroductionResponse.typeUrl || Array.isArray(o.pending_token_introduction) && (!o.pending_token_introduction.length || PendingTokenIntroduction.isAmino(o.pending_token_introduction[0])));
  },
  encode(message: QueryAllPendingTokenIntroductionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingTokenIntroduction) {
      PendingTokenIntroduction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingTokenIntroduction.push(PendingTokenIntroduction.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPendingTokenIntroductionResponse {
    return {
      pendingTokenIntroduction: Array.isArray(object?.pendingTokenIntroduction) ? object.pendingTokenIntroduction.map((e: any) => PendingTokenIntroduction.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPendingTokenIntroductionResponse): unknown {
    const obj: any = {};
    if (message.pendingTokenIntroduction) {
      obj.pendingTokenIntroduction = message.pendingTokenIntroduction.map(e => e ? PendingTokenIntroduction.toJSON(e) : undefined);
    } else {
      obj.pendingTokenIntroduction = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPendingTokenIntroductionResponse>): QueryAllPendingTokenIntroductionResponse {
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pendingTokenIntroduction?.map(e => PendingTokenIntroduction.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPendingTokenIntroductionResponseAmino): QueryAllPendingTokenIntroductionResponse {
    const message = createBaseQueryAllPendingTokenIntroductionResponse();
    message.pendingTokenIntroduction = object.pending_token_introduction?.map(e => PendingTokenIntroduction.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPendingTokenIntroductionResponse, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionResponseAmino {
    const obj: any = {};
    if (message.pendingTokenIntroduction) {
      obj.pending_token_introduction = message.pendingTokenIntroduction.map(e => e ? PendingTokenIntroduction.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pending_token_introduction = message.pendingTokenIntroduction;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPendingTokenIntroductionResponseAminoMsg): QueryAllPendingTokenIntroductionResponse {
    return QueryAllPendingTokenIntroductionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPendingTokenIntroductionResponseProtoMsg, useInterfaces: boolean = true): QueryAllPendingTokenIntroductionResponse {
    return QueryAllPendingTokenIntroductionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllPendingTokenIntroductionResponse): Uint8Array {
    return QueryAllPendingTokenIntroductionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPendingTokenIntroductionResponse): QueryAllPendingTokenIntroductionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllPendingTokenIntroductionResponse",
      value: QueryAllPendingTokenIntroductionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPendingTokenIntroductionResponse.typeUrl, QueryAllPendingTokenIntroductionResponse);
function createBaseQueryYammPoolIdRequest(): QueryYammPoolIdRequest {
  return {
    assetId: ""
  };
}
export const QueryYammPoolIdRequest = {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest",
  is(o: any): o is QueryYammPoolIdRequest {
    return o && (o.$typeUrl === QueryYammPoolIdRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryYammPoolIdRequestSDKType {
    return o && (o.$typeUrl === QueryYammPoolIdRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryYammPoolIdRequestAmino {
    return o && (o.$typeUrl === QueryYammPoolIdRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryYammPoolIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryYammPoolIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdRequest();
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
  fromJSON(object: any): QueryYammPoolIdRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryYammPoolIdRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdRequest>): QueryYammPoolIdRequest {
    const message = createBaseQueryYammPoolIdRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryYammPoolIdRequestAmino): QueryYammPoolIdRequest {
    const message = createBaseQueryYammPoolIdRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryYammPoolIdRequest, useInterfaces: boolean = true): QueryYammPoolIdRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryYammPoolIdRequestAminoMsg): QueryYammPoolIdRequest {
    return QueryYammPoolIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYammPoolIdRequestProtoMsg, useInterfaces: boolean = true): QueryYammPoolIdRequest {
    return QueryYammPoolIdRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryYammPoolIdRequest): Uint8Array {
    return QueryYammPoolIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryYammPoolIdRequest): QueryYammPoolIdRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryYammPoolIdRequest",
      value: QueryYammPoolIdRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryYammPoolIdRequest.typeUrl, QueryYammPoolIdRequest);
function createBaseQueryYammPoolIdResponse(): QueryYammPoolIdResponse {
  return {
    poolId: BigInt(0)
  };
}
export const QueryYammPoolIdResponse = {
  typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse",
  is(o: any): o is QueryYammPoolIdResponse {
    return o && (o.$typeUrl === QueryYammPoolIdResponse.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryYammPoolIdResponseSDKType {
    return o && (o.$typeUrl === QueryYammPoolIdResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryYammPoolIdResponseAmino {
    return o && (o.$typeUrl === QueryYammPoolIdResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryYammPoolIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryYammPoolIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryYammPoolIdResponse();
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
  fromJSON(object: any): QueryYammPoolIdResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryYammPoolIdResponse): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryYammPoolIdResponse>): QueryYammPoolIdResponse {
    const message = createBaseQueryYammPoolIdResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryYammPoolIdResponseAmino): QueryYammPoolIdResponse {
    const message = createBaseQueryYammPoolIdResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryYammPoolIdResponse, useInterfaces: boolean = true): QueryYammPoolIdResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryYammPoolIdResponseAminoMsg): QueryYammPoolIdResponse {
    return QueryYammPoolIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryYammPoolIdResponseProtoMsg, useInterfaces: boolean = true): QueryYammPoolIdResponse {
    return QueryYammPoolIdResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryYammPoolIdResponse): Uint8Array {
    return QueryYammPoolIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryYammPoolIdResponse): QueryYammPoolIdResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryYammPoolIdResponse",
      value: QueryYammPoolIdResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryYammPoolIdResponse.typeUrl, QueryYammPoolIdResponse);
function createBaseQueryOrderStepBoundsRequest(): QueryOrderStepBoundsRequest {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false
  };
}
export const QueryOrderStepBoundsRequest = {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest",
  is(o: any): o is QueryOrderStepBoundsRequest {
    return o && (o.$typeUrl === QueryOrderStepBoundsRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean");
  },
  isSDK(o: any): o is QueryOrderStepBoundsRequestSDKType {
    return o && (o.$typeUrl === QueryOrderStepBoundsRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean");
  },
  isAmino(o: any): o is QueryOrderStepBoundsRequestAmino {
    return o && (o.$typeUrl === QueryOrderStepBoundsRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean");
  },
  encode(message: QueryOrderStepBoundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderStepBoundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderStepBoundsRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderStepBoundsRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false
    };
  },
  toJSON(message: QueryOrderStepBoundsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderStepBoundsRequest>): QueryOrderStepBoundsRequest {
    const message = createBaseQueryOrderStepBoundsRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    return message;
  },
  fromAmino(object: QueryOrderStepBoundsRequestAmino): QueryOrderStepBoundsRequest {
    const message = createBaseQueryOrderStepBoundsRequest();
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
    return message;
  },
  toAmino(message: QueryOrderStepBoundsRequest, useInterfaces: boolean = true): QueryOrderStepBoundsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    return obj;
  },
  fromAminoMsg(object: QueryOrderStepBoundsRequestAminoMsg): QueryOrderStepBoundsRequest {
    return QueryOrderStepBoundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderStepBoundsRequestProtoMsg, useInterfaces: boolean = true): QueryOrderStepBoundsRequest {
    return QueryOrderStepBoundsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderStepBoundsRequest): Uint8Array {
    return QueryOrderStepBoundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderStepBoundsRequest): QueryOrderStepBoundsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsRequest",
      value: QueryOrderStepBoundsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderStepBoundsRequest.typeUrl, QueryOrderStepBoundsRequest);
function createBaseQueryOrderStepBoundsResponse(): QueryOrderStepBoundsResponse {
  return {
    minStep: "",
    maxStep: ""
  };
}
export const QueryOrderStepBoundsResponse = {
  typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse",
  is(o: any): o is QueryOrderStepBoundsResponse {
    return o && (o.$typeUrl === QueryOrderStepBoundsResponse.typeUrl || typeof o.minStep === "string" && typeof o.maxStep === "string");
  },
  isSDK(o: any): o is QueryOrderStepBoundsResponseSDKType {
    return o && (o.$typeUrl === QueryOrderStepBoundsResponse.typeUrl || typeof o.min_step === "string" && typeof o.max_step === "string");
  },
  isAmino(o: any): o is QueryOrderStepBoundsResponseAmino {
    return o && (o.$typeUrl === QueryOrderStepBoundsResponse.typeUrl || typeof o.min_step === "string" && typeof o.max_step === "string");
  },
  encode(message: QueryOrderStepBoundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minStep !== "") {
      writer.uint32(10).string(message.minStep);
    }
    if (message.maxStep !== "") {
      writer.uint32(18).string(message.maxStep);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderStepBoundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderStepBoundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minStep = reader.string();
          break;
        case 2:
          message.maxStep = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderStepBoundsResponse {
    return {
      minStep: isSet(object.minStep) ? String(object.minStep) : "",
      maxStep: isSet(object.maxStep) ? String(object.maxStep) : ""
    };
  },
  toJSON(message: QueryOrderStepBoundsResponse): unknown {
    const obj: any = {};
    message.minStep !== undefined && (obj.minStep = message.minStep);
    message.maxStep !== undefined && (obj.maxStep = message.maxStep);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderStepBoundsResponse>): QueryOrderStepBoundsResponse {
    const message = createBaseQueryOrderStepBoundsResponse();
    message.minStep = object.minStep ?? "";
    message.maxStep = object.maxStep ?? "";
    return message;
  },
  fromAmino(object: QueryOrderStepBoundsResponseAmino): QueryOrderStepBoundsResponse {
    const message = createBaseQueryOrderStepBoundsResponse();
    if (object.min_step !== undefined && object.min_step !== null) {
      message.minStep = object.min_step;
    }
    if (object.max_step !== undefined && object.max_step !== null) {
      message.maxStep = object.max_step;
    }
    return message;
  },
  toAmino(message: QueryOrderStepBoundsResponse, useInterfaces: boolean = true): QueryOrderStepBoundsResponseAmino {
    const obj: any = {};
    obj.min_step = message.minStep === "" ? undefined : message.minStep;
    obj.max_step = message.maxStep === "" ? undefined : message.maxStep;
    return obj;
  },
  fromAminoMsg(object: QueryOrderStepBoundsResponseAminoMsg): QueryOrderStepBoundsResponse {
    return QueryOrderStepBoundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderStepBoundsResponseProtoMsg, useInterfaces: boolean = true): QueryOrderStepBoundsResponse {
    return QueryOrderStepBoundsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderStepBoundsResponse): Uint8Array {
    return QueryOrderStepBoundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderStepBoundsResponse): QueryOrderStepBoundsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderStepBoundsResponse",
      value: QueryOrderStepBoundsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderStepBoundsResponse.typeUrl, QueryOrderStepBoundsResponse);
function createBaseQueryAllDisabledOrderPairRequest(): QueryAllDisabledOrderPairRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDisabledOrderPairRequest = {
  typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairRequest",
  is(o: any): o is QueryAllDisabledOrderPairRequest {
    return o && o.$typeUrl === QueryAllDisabledOrderPairRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllDisabledOrderPairRequestSDKType {
    return o && o.$typeUrl === QueryAllDisabledOrderPairRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllDisabledOrderPairRequestAmino {
    return o && o.$typeUrl === QueryAllDisabledOrderPairRequest.typeUrl;
  },
  encode(message: QueryAllDisabledOrderPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllDisabledOrderPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisabledOrderPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDisabledOrderPairRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllDisabledOrderPairRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllDisabledOrderPairRequest>): QueryAllDisabledOrderPairRequest {
    const message = createBaseQueryAllDisabledOrderPairRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisabledOrderPairRequestAmino): QueryAllDisabledOrderPairRequest {
    const message = createBaseQueryAllDisabledOrderPairRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisabledOrderPairRequest, useInterfaces: boolean = true): QueryAllDisabledOrderPairRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisabledOrderPairRequestAminoMsg): QueryAllDisabledOrderPairRequest {
    return QueryAllDisabledOrderPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisabledOrderPairRequestProtoMsg, useInterfaces: boolean = true): QueryAllDisabledOrderPairRequest {
    return QueryAllDisabledOrderPairRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllDisabledOrderPairRequest): Uint8Array {
    return QueryAllDisabledOrderPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisabledOrderPairRequest): QueryAllDisabledOrderPairRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairRequest",
      value: QueryAllDisabledOrderPairRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllDisabledOrderPairRequest.typeUrl, QueryAllDisabledOrderPairRequest);
function createBaseQueryAllDisabledOrderPairResponse(): QueryAllDisabledOrderPairResponse {
  return {
    disabledOrderPair: [],
    pagination: undefined
  };
}
export const QueryAllDisabledOrderPairResponse = {
  typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairResponse",
  is(o: any): o is QueryAllDisabledOrderPairResponse {
    return o && (o.$typeUrl === QueryAllDisabledOrderPairResponse.typeUrl || Array.isArray(o.disabledOrderPair) && (!o.disabledOrderPair.length || DisabledOrderPair.is(o.disabledOrderPair[0])));
  },
  isSDK(o: any): o is QueryAllDisabledOrderPairResponseSDKType {
    return o && (o.$typeUrl === QueryAllDisabledOrderPairResponse.typeUrl || Array.isArray(o.disabled_order_pair) && (!o.disabled_order_pair.length || DisabledOrderPair.isSDK(o.disabled_order_pair[0])));
  },
  isAmino(o: any): o is QueryAllDisabledOrderPairResponseAmino {
    return o && (o.$typeUrl === QueryAllDisabledOrderPairResponse.typeUrl || Array.isArray(o.disabled_order_pair) && (!o.disabled_order_pair.length || DisabledOrderPair.isAmino(o.disabled_order_pair[0])));
  },
  encode(message: QueryAllDisabledOrderPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.disabledOrderPair) {
      DisabledOrderPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllDisabledOrderPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDisabledOrderPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabledOrderPair.push(DisabledOrderPair.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDisabledOrderPairResponse {
    return {
      disabledOrderPair: Array.isArray(object?.disabledOrderPair) ? object.disabledOrderPair.map((e: any) => DisabledOrderPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllDisabledOrderPairResponse): unknown {
    const obj: any = {};
    if (message.disabledOrderPair) {
      obj.disabledOrderPair = message.disabledOrderPair.map(e => e ? DisabledOrderPair.toJSON(e) : undefined);
    } else {
      obj.disabledOrderPair = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllDisabledOrderPairResponse>): QueryAllDisabledOrderPairResponse {
    const message = createBaseQueryAllDisabledOrderPairResponse();
    message.disabledOrderPair = object.disabledOrderPair?.map(e => DisabledOrderPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDisabledOrderPairResponseAmino): QueryAllDisabledOrderPairResponse {
    const message = createBaseQueryAllDisabledOrderPairResponse();
    message.disabledOrderPair = object.disabled_order_pair?.map(e => DisabledOrderPair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDisabledOrderPairResponse, useInterfaces: boolean = true): QueryAllDisabledOrderPairResponseAmino {
    const obj: any = {};
    if (message.disabledOrderPair) {
      obj.disabled_order_pair = message.disabledOrderPair.map(e => e ? DisabledOrderPair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.disabled_order_pair = message.disabledOrderPair;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDisabledOrderPairResponseAminoMsg): QueryAllDisabledOrderPairResponse {
    return QueryAllDisabledOrderPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDisabledOrderPairResponseProtoMsg, useInterfaces: boolean = true): QueryAllDisabledOrderPairResponse {
    return QueryAllDisabledOrderPairResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllDisabledOrderPairResponse): Uint8Array {
    return QueryAllDisabledOrderPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDisabledOrderPairResponse): QueryAllDisabledOrderPairResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryAllDisabledOrderPairResponse",
      value: QueryAllDisabledOrderPairResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllDisabledOrderPairResponse.typeUrl, QueryAllDisabledOrderPairResponse);
function createBaseQueryOrderPairDisabledRequest(): QueryOrderPairDisabledRequest {
  return {
    whitelistedRoute: false,
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: ""
  };
}
export const QueryOrderPairDisabledRequest = {
  typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledRequest",
  is(o: any): o is QueryOrderPairDisabledRequest {
    return o && (o.$typeUrl === QueryOrderPairDisabledRequest.typeUrl || typeof o.whitelistedRoute === "boolean" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QueryOrderPairDisabledRequestSDKType {
    return o && (o.$typeUrl === QueryOrderPairDisabledRequest.typeUrl || typeof o.whitelisted_route === "boolean" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QueryOrderPairDisabledRequestAmino {
    return o && (o.$typeUrl === QueryOrderPairDisabledRequest.typeUrl || typeof o.whitelisted_route === "boolean" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QueryOrderPairDisabledRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.whitelistedRoute === true) {
      writer.uint32(8).bool(message.whitelistedRoute);
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderPairDisabledRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderPairDisabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistedRoute = reader.bool();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderPairDisabledRequest {
    return {
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QueryOrderPairDisabledRequest): unknown {
    const obj: any = {};
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderPairDisabledRequest>): QueryOrderPairDisabledRequest {
    const message = createBaseQueryOrderPairDisabledRequest();
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QueryOrderPairDisabledRequestAmino): QueryOrderPairDisabledRequest {
    const message = createBaseQueryOrderPairDisabledRequest();
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
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
    return message;
  },
  toAmino(message: QueryOrderPairDisabledRequest, useInterfaces: boolean = true): QueryOrderPairDisabledRequestAmino {
    const obj: any = {};
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QueryOrderPairDisabledRequestAminoMsg): QueryOrderPairDisabledRequest {
    return QueryOrderPairDisabledRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderPairDisabledRequestProtoMsg, useInterfaces: boolean = true): QueryOrderPairDisabledRequest {
    return QueryOrderPairDisabledRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderPairDisabledRequest): Uint8Array {
    return QueryOrderPairDisabledRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderPairDisabledRequest): QueryOrderPairDisabledRequestProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledRequest",
      value: QueryOrderPairDisabledRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderPairDisabledRequest.typeUrl, QueryOrderPairDisabledRequest);
function createBaseQueryOrderPairDisabledResponse(): QueryOrderPairDisabledResponse {
  return {
    disabled: false
  };
}
export const QueryOrderPairDisabledResponse = {
  typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledResponse",
  is(o: any): o is QueryOrderPairDisabledResponse {
    return o && (o.$typeUrl === QueryOrderPairDisabledResponse.typeUrl || typeof o.disabled === "boolean");
  },
  isSDK(o: any): o is QueryOrderPairDisabledResponseSDKType {
    return o && (o.$typeUrl === QueryOrderPairDisabledResponse.typeUrl || typeof o.disabled === "boolean");
  },
  isAmino(o: any): o is QueryOrderPairDisabledResponseAmino {
    return o && (o.$typeUrl === QueryOrderPairDisabledResponse.typeUrl || typeof o.disabled === "boolean");
  },
  encode(message: QueryOrderPairDisabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderPairDisabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderPairDisabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderPairDisabledResponse {
    return {
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false
    };
  },
  toJSON(message: QueryOrderPairDisabledResponse): unknown {
    const obj: any = {};
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderPairDisabledResponse>): QueryOrderPairDisabledResponse {
    const message = createBaseQueryOrderPairDisabledResponse();
    message.disabled = object.disabled ?? false;
    return message;
  },
  fromAmino(object: QueryOrderPairDisabledResponseAmino): QueryOrderPairDisabledResponse {
    const message = createBaseQueryOrderPairDisabledResponse();
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    }
    return message;
  },
  toAmino(message: QueryOrderPairDisabledResponse, useInterfaces: boolean = true): QueryOrderPairDisabledResponseAmino {
    const obj: any = {};
    obj.disabled = message.disabled === false ? undefined : message.disabled;
    return obj;
  },
  fromAminoMsg(object: QueryOrderPairDisabledResponseAminoMsg): QueryOrderPairDisabledResponse {
    return QueryOrderPairDisabledResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderPairDisabledResponseProtoMsg, useInterfaces: boolean = true): QueryOrderPairDisabledResponse {
    return QueryOrderPairDisabledResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderPairDisabledResponse): Uint8Array {
    return QueryOrderPairDisabledResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderPairDisabledResponse): QueryOrderPairDisabledResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.QueryOrderPairDisabledResponse",
      value: QueryOrderPairDisabledResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderPairDisabledResponse.typeUrl, QueryOrderPairDisabledResponse);