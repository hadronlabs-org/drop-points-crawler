import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolTokenRequest, QueryGetPoolTokenResponse, QueryAllPoolTokenRequest, QueryAllPoolTokenResponse, QueryAllPoolTokenForPoolRequest, QueryAllPoolTokenForPoolResponse, QueryAllPoolTokenWeightRequest, QueryAllPoolTokenWeightResponse, QueryGetPoolTokenWeightRequest, QueryGetPoolTokenWeightResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetWeightedTokenRequest, QueryGetWeightedTokenResponse, QueryAllWeightedTokenRequest, QueryAllWeightedTokenResponse, QueryGetWeightUpdateTimingRequest, QueryGetWeightUpdateTimingResponse, QueryAllWeightUpdateTimingRequest, QueryAllWeightUpdateTimingResponse, QuerySimulateSingleSwapRequest, QuerySimulateSingleSwapResponse, QuerySimulateInitializePoolRequest, QuerySimulateInitializePoolResponse, QuerySimulateJoinAllTokensExactLptRequest, QuerySimulateJoinAllTokensExactLptResponse, QuerySimulateJoinExactTokensRequest, QuerySimulateJoinExactTokensResponse, QuerySimulateZeroImpactJoinYammRequest, QuerySimulateZeroImpactJoinYammResponse, QuerySimulateJoinTokenExactLptRequest, QuerySimulateJoinTokenExactLptResponse, QuerySimulateExitTokenExactLptRequest, QuerySimulateExitTokenExactLptResponse, QuerySimulateExitExactTokensRequest, QuerySimulateExitExactTokensResponse, QuerySimulateExitAllTokensExactLptRequest, QuerySimulateExitAllTokensExactLptResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QueryGetIntroducingPoolTokenRequest, QueryGetIntroducingPoolTokenResponse, QueryAllIntroducingPoolTokenRequest, QueryAllIntroducingPoolTokenResponse, QueryGetExpiringPoolTokenRequest, QueryGetExpiringPoolTokenResponse, QueryAllExpiringPoolTokenRequest, QueryAllExpiringPoolTokenResponse, QueryLpTokenRequest, QueryLpTokenResponse, QuerySimulateBatchSwapRequest, QuerySimulateBatchSwapResponse, QueryGetYammConfigurationRequest, QueryGetYammConfigurationResponse, QueryAllYammConfigurationRequest, QueryAllYammConfigurationResponse, QueryGetWhitelistedRouteRequest, QueryGetWhitelistedRouteResponse, QueryAllWhitelistedRouteRequest, QueryAllWhitelistedRouteResponse, QueryGetOrderRequest, QueryGetOrderResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryGetExecutableOrderRequest, QueryGetExecutableOrderResponse, QueryAllExecutableOrderRequest, QueryAllExecutableOrderResponse, QueryGetScheduleOrderRequest, QueryGetScheduleOrderResponse, QueryAllScheduleOrderRequest, QueryAllScheduleOrderResponse, QueryGetOraclePricePairRequest, QueryGetOraclePricePairResponse, QueryAllOraclePricePairRequest, QueryAllOraclePricePairResponse, QueryVaultPauseModeRequest, QueryVaultPauseModeResponse, QueryGetPendingTokenIntroductionRequest, QueryGetPendingTokenIntroductionResponse, QueryAllPendingTokenIntroductionRequest, QueryAllPendingTokenIntroductionResponse, QueryYammPoolIdRequest, QueryYammPoolIdResponse, QueryOrderStepBoundsRequest, QueryOrderStepBoundsResponse, QueryAllDisabledOrderPairRequest, QueryAllDisabledOrderPairResponse, QueryOrderPairDisabledRequest, QueryOrderPairDisabledResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a PoolToken by index. */
  poolToken(request: DeepPartial<QueryGetPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolTokenResponse>;
  /** Queries a list of PoolToken items. */
  poolTokenAll(request: DeepPartial<QueryAllPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenResponse>;
  poolTokenAllForPool(request: DeepPartial<QueryAllPoolTokenForPoolRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenForPoolResponse>;
  /**
   * Queries a list of TokenWeights
   * computing normalized weights requires reading all tokens from the context
   * and computing weight for all of them. And the number of tokens in a pool is not expected to
   * be high.
   * therefore, this query is not paginated
   */
  poolTokenWeightAll(request: DeepPartial<QueryAllPoolTokenWeightRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenWeightResponse>;
  /** Queries a TokenWeight */
  poolTokenWeight(request: DeepPartial<QueryGetPoolTokenWeightRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolTokenWeightResponse>;
  /** Queries a Pool by id. */
  pool(request: DeepPartial<QueryGetPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  poolAll(request?: DeepPartial<QueryAllPoolRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolResponse>;
  /** Queries a WeightedToken by index. */
  weightedToken(request: DeepPartial<QueryGetWeightedTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetWeightedTokenResponse>;
  /** Queries a list of WeightedToken items. */
  weightedTokenAll(request?: DeepPartial<QueryAllWeightedTokenRequest>, metadata?: grpc.Metadata): Promise<QueryAllWeightedTokenResponse>;
  /** Queries a WeightUpdateTiming by index. */
  weightUpdateTiming(request: DeepPartial<QueryGetWeightUpdateTimingRequest>, metadata?: grpc.Metadata): Promise<QueryGetWeightUpdateTimingResponse>;
  /** Queries a list of WeightUpdateTiming items. */
  weightUpdateTimingAll(request?: DeepPartial<QueryAllWeightUpdateTimingRequest>, metadata?: grpc.Metadata): Promise<QueryAllWeightUpdateTimingResponse>;
  /** Simulates a single swap action and returns the result */
  simulateSingleSwap(request: DeepPartial<QuerySimulateSingleSwapRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateSingleSwapResponse>;
  /** Queries a list of SimulateInitializePool items. */
  simulateInitializePool(request: DeepPartial<QuerySimulateInitializePoolRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateInitializePoolResponse>;
  /** Queries a list of SimulateJoinAllTokensExactLpt items. */
  simulateJoinAllTokensExactLpt(request: DeepPartial<QuerySimulateJoinAllTokensExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinAllTokensExactLptResponse>;
  /** Queries a list of SimulateJoinExactTokens items. */
  simulateJoinExactTokens(request: DeepPartial<QuerySimulateJoinExactTokensRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinExactTokensResponse>;
  /** Queries a list of SimulateJoinExactTokens items. */
  simulateZeroImpactJoinYamm(request: DeepPartial<QuerySimulateZeroImpactJoinYammRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateZeroImpactJoinYammResponse>;
  /** Queries a list of SimulateJoinTokenExactLpt items. */
  simulateJoinTokenExactLpt(request: DeepPartial<QuerySimulateJoinTokenExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinTokenExactLptResponse>;
  /** Queries a list of SimulateExitTokenExactLpt items. */
  simulateExitTokenExactLpt(request: DeepPartial<QuerySimulateExitTokenExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitTokenExactLptResponse>;
  /** Queries a list of SimulateExitExactTokens items. */
  simulateExitExactTokens(request: DeepPartial<QuerySimulateExitExactTokensRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitExactTokensResponse>;
  /** Queries a list of SimulateExitAllTokensExactLpt items. */
  simulateExitAllTokensExactLpt(request: DeepPartial<QuerySimulateExitAllTokensExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitAllTokensExactLptResponse>;
  /** Queries a list of SpotPrice items. */
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse>;
  /** Queries a IntroducingPoolToken by index. */
  introducingPoolToken(request: DeepPartial<QueryGetIntroducingPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetIntroducingPoolTokenResponse>;
  /** Queries a list of IntroducingPoolToken items. */
  introducingPoolTokenAll(request?: DeepPartial<QueryAllIntroducingPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryAllIntroducingPoolTokenResponse>;
  /** Queries a ExpiringPoolToken by index. */
  expiringPoolToken(request: DeepPartial<QueryGetExpiringPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetExpiringPoolTokenResponse>;
  /** Queries a list of ExpiringPoolToken items. */
  expiringPoolTokenAll(request?: DeepPartial<QueryAllExpiringPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryAllExpiringPoolTokenResponse>;
  /** Queries a list of LpToken items. */
  lpToken(request: DeepPartial<QueryLpTokenRequest>, metadata?: grpc.Metadata): Promise<QueryLpTokenResponse>;
  /** Queries a list of SimulateBatchSwap items. */
  simulateBatchSwap(request: DeepPartial<QuerySimulateBatchSwapRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateBatchSwapResponse>;
  /** Queries a YammConfiguration by index. */
  yammConfiguration(request: DeepPartial<QueryGetYammConfigurationRequest>, metadata?: grpc.Metadata): Promise<QueryGetYammConfigurationResponse>;
  /** Queries a list of YammConfiguration items. */
  yammConfigurationAll(request?: DeepPartial<QueryAllYammConfigurationRequest>, metadata?: grpc.Metadata): Promise<QueryAllYammConfigurationResponse>;
  /** Queries a WhitelistedRoute by index. */
  whitelistedRoute(request: DeepPartial<QueryGetWhitelistedRouteRequest>, metadata?: grpc.Metadata): Promise<QueryGetWhitelistedRouteResponse>;
  /** Queries a list of WhitelistedRoute items. */
  whitelistedRouteAll(request?: DeepPartial<QueryAllWhitelistedRouteRequest>, metadata?: grpc.Metadata): Promise<QueryAllWhitelistedRouteResponse>;
  /** Queries a Order by id. */
  order(request: DeepPartial<QueryGetOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetOrderResponse>;
  /** Queries a list of Order items. */
  orderAll(request?: DeepPartial<QueryAllOrderRequest>, metadata?: grpc.Metadata): Promise<QueryAllOrderResponse>;
  /** Queries a ExecutableOrder by index. */
  executableOrder(request: DeepPartial<QueryGetExecutableOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetExecutableOrderResponse>;
  /** Queries a list of ExecutableOrder items. */
  executableOrderAll(request?: DeepPartial<QueryAllExecutableOrderRequest>, metadata?: grpc.Metadata): Promise<QueryAllExecutableOrderResponse>;
  /** Queries a ScheduleOrder by index. */
  scheduleOrder(request: DeepPartial<QueryGetScheduleOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetScheduleOrderResponse>;
  /** Queries a list of ScheduleOrder items. */
  scheduleOrderAll(request?: DeepPartial<QueryAllScheduleOrderRequest>, metadata?: grpc.Metadata): Promise<QueryAllScheduleOrderResponse>;
  /** Queries a OraclePricePair by index. */
  oraclePricePair(request: DeepPartial<QueryGetOraclePricePairRequest>, metadata?: grpc.Metadata): Promise<QueryGetOraclePricePairResponse>;
  /** Queries a list of OraclePricePair items. */
  oraclePricePairAll(request?: DeepPartial<QueryAllOraclePricePairRequest>, metadata?: grpc.Metadata): Promise<QueryAllOraclePricePairResponse>;
  /** Queries a list of VaultPauseMode items. */
  vaultPauseMode(request?: DeepPartial<QueryVaultPauseModeRequest>, metadata?: grpc.Metadata): Promise<QueryVaultPauseModeResponse>;
  /** Queries a PendingTokenIntroduction by index. */
  pendingTokenIntroduction(request: DeepPartial<QueryGetPendingTokenIntroductionRequest>, metadata?: grpc.Metadata): Promise<QueryGetPendingTokenIntroductionResponse>;
  /** Queries a list of PendingTokenIntroduction items. */
  pendingTokenIntroductionAll(request?: DeepPartial<QueryAllPendingTokenIntroductionRequest>, metadata?: grpc.Metadata): Promise<QueryAllPendingTokenIntroductionResponse>;
  /** Queries a YammPoolId item. */
  yammPoolId(request: DeepPartial<QueryYammPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryYammPoolIdResponse>;
  orderStepBounds(request: DeepPartial<QueryOrderStepBoundsRequest>, metadata?: grpc.Metadata): Promise<QueryOrderStepBoundsResponse>;
  /** Queries a list of all disabled order pairs */
  disabledOrderPairAll(request?: DeepPartial<QueryAllDisabledOrderPairRequest>, metadata?: grpc.Metadata): Promise<QueryAllDisabledOrderPairResponse>;
  /** Queries whether or not a pair is disabled */
  orderPairDisabled(request: DeepPartial<QueryOrderPairDisabledRequest>, metadata?: grpc.Metadata): Promise<QueryOrderPairDisabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.poolToken = this.poolToken.bind(this);
    this.poolTokenAll = this.poolTokenAll.bind(this);
    this.poolTokenAllForPool = this.poolTokenAllForPool.bind(this);
    this.poolTokenWeightAll = this.poolTokenWeightAll.bind(this);
    this.poolTokenWeight = this.poolTokenWeight.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.weightedToken = this.weightedToken.bind(this);
    this.weightedTokenAll = this.weightedTokenAll.bind(this);
    this.weightUpdateTiming = this.weightUpdateTiming.bind(this);
    this.weightUpdateTimingAll = this.weightUpdateTimingAll.bind(this);
    this.simulateSingleSwap = this.simulateSingleSwap.bind(this);
    this.simulateInitializePool = this.simulateInitializePool.bind(this);
    this.simulateJoinAllTokensExactLpt = this.simulateJoinAllTokensExactLpt.bind(this);
    this.simulateJoinExactTokens = this.simulateJoinExactTokens.bind(this);
    this.simulateZeroImpactJoinYamm = this.simulateZeroImpactJoinYamm.bind(this);
    this.simulateJoinTokenExactLpt = this.simulateJoinTokenExactLpt.bind(this);
    this.simulateExitTokenExactLpt = this.simulateExitTokenExactLpt.bind(this);
    this.simulateExitExactTokens = this.simulateExitExactTokens.bind(this);
    this.simulateExitAllTokensExactLpt = this.simulateExitAllTokensExactLpt.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.introducingPoolToken = this.introducingPoolToken.bind(this);
    this.introducingPoolTokenAll = this.introducingPoolTokenAll.bind(this);
    this.expiringPoolToken = this.expiringPoolToken.bind(this);
    this.expiringPoolTokenAll = this.expiringPoolTokenAll.bind(this);
    this.lpToken = this.lpToken.bind(this);
    this.simulateBatchSwap = this.simulateBatchSwap.bind(this);
    this.yammConfiguration = this.yammConfiguration.bind(this);
    this.yammConfigurationAll = this.yammConfigurationAll.bind(this);
    this.whitelistedRoute = this.whitelistedRoute.bind(this);
    this.whitelistedRouteAll = this.whitelistedRouteAll.bind(this);
    this.order = this.order.bind(this);
    this.orderAll = this.orderAll.bind(this);
    this.executableOrder = this.executableOrder.bind(this);
    this.executableOrderAll = this.executableOrderAll.bind(this);
    this.scheduleOrder = this.scheduleOrder.bind(this);
    this.scheduleOrderAll = this.scheduleOrderAll.bind(this);
    this.oraclePricePair = this.oraclePricePair.bind(this);
    this.oraclePricePairAll = this.oraclePricePairAll.bind(this);
    this.vaultPauseMode = this.vaultPauseMode.bind(this);
    this.pendingTokenIntroduction = this.pendingTokenIntroduction.bind(this);
    this.pendingTokenIntroductionAll = this.pendingTokenIntroductionAll.bind(this);
    this.yammPoolId = this.yammPoolId.bind(this);
    this.orderStepBounds = this.orderStepBounds.bind(this);
    this.disabledOrderPairAll = this.disabledOrderPairAll.bind(this);
    this.orderPairDisabled = this.orderPairDisabled.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  poolToken(request: DeepPartial<QueryGetPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolTokenResponse> {
    return this.rpc.unary(QueryPoolTokenDesc, QueryGetPoolTokenRequest.fromPartial(request as any), metadata);
  }
  poolTokenAll(request: DeepPartial<QueryAllPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenResponse> {
    return this.rpc.unary(QueryPoolTokenAllDesc, QueryAllPoolTokenRequest.fromPartial(request as any), metadata);
  }
  poolTokenAllForPool(request: DeepPartial<QueryAllPoolTokenForPoolRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenForPoolResponse> {
    return this.rpc.unary(QueryPoolTokenAllForPoolDesc, QueryAllPoolTokenForPoolRequest.fromPartial(request as any), metadata);
  }
  poolTokenWeightAll(request: DeepPartial<QueryAllPoolTokenWeightRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolTokenWeightResponse> {
    return this.rpc.unary(QueryPoolTokenWeightAllDesc, QueryAllPoolTokenWeightRequest.fromPartial(request as any), metadata);
  }
  poolTokenWeight(request: DeepPartial<QueryGetPoolTokenWeightRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolTokenWeightResponse> {
    return this.rpc.unary(QueryPoolTokenWeightDesc, QueryGetPoolTokenWeightRequest.fromPartial(request as any), metadata);
  }
  pool(request: DeepPartial<QueryGetPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryGetPoolRequest.fromPartial(request as any), metadata);
  }
  poolAll(request: DeepPartial<QueryAllPoolRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllPoolResponse> {
    return this.rpc.unary(QueryPoolAllDesc, QueryAllPoolRequest.fromPartial(request as any), metadata);
  }
  weightedToken(request: DeepPartial<QueryGetWeightedTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetWeightedTokenResponse> {
    return this.rpc.unary(QueryWeightedTokenDesc, QueryGetWeightedTokenRequest.fromPartial(request as any), metadata);
  }
  weightedTokenAll(request: DeepPartial<QueryAllWeightedTokenRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllWeightedTokenResponse> {
    return this.rpc.unary(QueryWeightedTokenAllDesc, QueryAllWeightedTokenRequest.fromPartial(request as any), metadata);
  }
  weightUpdateTiming(request: DeepPartial<QueryGetWeightUpdateTimingRequest>, metadata?: grpc.Metadata): Promise<QueryGetWeightUpdateTimingResponse> {
    return this.rpc.unary(QueryWeightUpdateTimingDesc, QueryGetWeightUpdateTimingRequest.fromPartial(request as any), metadata);
  }
  weightUpdateTimingAll(request: DeepPartial<QueryAllWeightUpdateTimingRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllWeightUpdateTimingResponse> {
    return this.rpc.unary(QueryWeightUpdateTimingAllDesc, QueryAllWeightUpdateTimingRequest.fromPartial(request as any), metadata);
  }
  simulateSingleSwap(request: DeepPartial<QuerySimulateSingleSwapRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateSingleSwapResponse> {
    return this.rpc.unary(QuerySimulateSingleSwapDesc, QuerySimulateSingleSwapRequest.fromPartial(request as any), metadata);
  }
  simulateInitializePool(request: DeepPartial<QuerySimulateInitializePoolRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateInitializePoolResponse> {
    return this.rpc.unary(QuerySimulateInitializePoolDesc, QuerySimulateInitializePoolRequest.fromPartial(request as any), metadata);
  }
  simulateJoinAllTokensExactLpt(request: DeepPartial<QuerySimulateJoinAllTokensExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinAllTokensExactLptResponse> {
    return this.rpc.unary(QuerySimulateJoinAllTokensExactLptDesc, QuerySimulateJoinAllTokensExactLptRequest.fromPartial(request as any), metadata);
  }
  simulateJoinExactTokens(request: DeepPartial<QuerySimulateJoinExactTokensRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinExactTokensResponse> {
    return this.rpc.unary(QuerySimulateJoinExactTokensDesc, QuerySimulateJoinExactTokensRequest.fromPartial(request as any), metadata);
  }
  simulateZeroImpactJoinYamm(request: DeepPartial<QuerySimulateZeroImpactJoinYammRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateZeroImpactJoinYammResponse> {
    return this.rpc.unary(QuerySimulateZeroImpactJoinYammDesc, QuerySimulateZeroImpactJoinYammRequest.fromPartial(request as any), metadata);
  }
  simulateJoinTokenExactLpt(request: DeepPartial<QuerySimulateJoinTokenExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateJoinTokenExactLptResponse> {
    return this.rpc.unary(QuerySimulateJoinTokenExactLptDesc, QuerySimulateJoinTokenExactLptRequest.fromPartial(request as any), metadata);
  }
  simulateExitTokenExactLpt(request: DeepPartial<QuerySimulateExitTokenExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitTokenExactLptResponse> {
    return this.rpc.unary(QuerySimulateExitTokenExactLptDesc, QuerySimulateExitTokenExactLptRequest.fromPartial(request as any), metadata);
  }
  simulateExitExactTokens(request: DeepPartial<QuerySimulateExitExactTokensRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitExactTokensResponse> {
    return this.rpc.unary(QuerySimulateExitExactTokensDesc, QuerySimulateExitExactTokensRequest.fromPartial(request as any), metadata);
  }
  simulateExitAllTokensExactLpt(request: DeepPartial<QuerySimulateExitAllTokensExactLptRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateExitAllTokensExactLptResponse> {
    return this.rpc.unary(QuerySimulateExitAllTokensExactLptDesc, QuerySimulateExitAllTokensExactLptRequest.fromPartial(request as any), metadata);
  }
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse> {
    return this.rpc.unary(QuerySpotPriceDesc, QuerySpotPriceRequest.fromPartial(request as any), metadata);
  }
  introducingPoolToken(request: DeepPartial<QueryGetIntroducingPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetIntroducingPoolTokenResponse> {
    return this.rpc.unary(QueryIntroducingPoolTokenDesc, QueryGetIntroducingPoolTokenRequest.fromPartial(request as any), metadata);
  }
  introducingPoolTokenAll(request: DeepPartial<QueryAllIntroducingPoolTokenRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllIntroducingPoolTokenResponse> {
    return this.rpc.unary(QueryIntroducingPoolTokenAllDesc, QueryAllIntroducingPoolTokenRequest.fromPartial(request as any), metadata);
  }
  expiringPoolToken(request: DeepPartial<QueryGetExpiringPoolTokenRequest>, metadata?: grpc.Metadata): Promise<QueryGetExpiringPoolTokenResponse> {
    return this.rpc.unary(QueryExpiringPoolTokenDesc, QueryGetExpiringPoolTokenRequest.fromPartial(request as any), metadata);
  }
  expiringPoolTokenAll(request: DeepPartial<QueryAllExpiringPoolTokenRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllExpiringPoolTokenResponse> {
    return this.rpc.unary(QueryExpiringPoolTokenAllDesc, QueryAllExpiringPoolTokenRequest.fromPartial(request as any), metadata);
  }
  lpToken(request: DeepPartial<QueryLpTokenRequest>, metadata?: grpc.Metadata): Promise<QueryLpTokenResponse> {
    return this.rpc.unary(QueryLpTokenDesc, QueryLpTokenRequest.fromPartial(request as any), metadata);
  }
  simulateBatchSwap(request: DeepPartial<QuerySimulateBatchSwapRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateBatchSwapResponse> {
    return this.rpc.unary(QuerySimulateBatchSwapDesc, QuerySimulateBatchSwapRequest.fromPartial(request as any), metadata);
  }
  yammConfiguration(request: DeepPartial<QueryGetYammConfigurationRequest>, metadata?: grpc.Metadata): Promise<QueryGetYammConfigurationResponse> {
    return this.rpc.unary(QueryYammConfigurationDesc, QueryGetYammConfigurationRequest.fromPartial(request as any), metadata);
  }
  yammConfigurationAll(request: DeepPartial<QueryAllYammConfigurationRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllYammConfigurationResponse> {
    return this.rpc.unary(QueryYammConfigurationAllDesc, QueryAllYammConfigurationRequest.fromPartial(request as any), metadata);
  }
  whitelistedRoute(request: DeepPartial<QueryGetWhitelistedRouteRequest>, metadata?: grpc.Metadata): Promise<QueryGetWhitelistedRouteResponse> {
    return this.rpc.unary(QueryWhitelistedRouteDesc, QueryGetWhitelistedRouteRequest.fromPartial(request as any), metadata);
  }
  whitelistedRouteAll(request: DeepPartial<QueryAllWhitelistedRouteRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllWhitelistedRouteResponse> {
    return this.rpc.unary(QueryWhitelistedRouteAllDesc, QueryAllWhitelistedRouteRequest.fromPartial(request as any), metadata);
  }
  order(request: DeepPartial<QueryGetOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetOrderResponse> {
    return this.rpc.unary(QueryOrderDesc, QueryGetOrderRequest.fromPartial(request as any), metadata);
  }
  orderAll(request: DeepPartial<QueryAllOrderRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllOrderResponse> {
    return this.rpc.unary(QueryOrderAllDesc, QueryAllOrderRequest.fromPartial(request as any), metadata);
  }
  executableOrder(request: DeepPartial<QueryGetExecutableOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetExecutableOrderResponse> {
    return this.rpc.unary(QueryExecutableOrderDesc, QueryGetExecutableOrderRequest.fromPartial(request as any), metadata);
  }
  executableOrderAll(request: DeepPartial<QueryAllExecutableOrderRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllExecutableOrderResponse> {
    return this.rpc.unary(QueryExecutableOrderAllDesc, QueryAllExecutableOrderRequest.fromPartial(request as any), metadata);
  }
  scheduleOrder(request: DeepPartial<QueryGetScheduleOrderRequest>, metadata?: grpc.Metadata): Promise<QueryGetScheduleOrderResponse> {
    return this.rpc.unary(QueryScheduleOrderDesc, QueryGetScheduleOrderRequest.fromPartial(request as any), metadata);
  }
  scheduleOrderAll(request: DeepPartial<QueryAllScheduleOrderRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllScheduleOrderResponse> {
    return this.rpc.unary(QueryScheduleOrderAllDesc, QueryAllScheduleOrderRequest.fromPartial(request as any), metadata);
  }
  oraclePricePair(request: DeepPartial<QueryGetOraclePricePairRequest>, metadata?: grpc.Metadata): Promise<QueryGetOraclePricePairResponse> {
    return this.rpc.unary(QueryOraclePricePairDesc, QueryGetOraclePricePairRequest.fromPartial(request as any), metadata);
  }
  oraclePricePairAll(request: DeepPartial<QueryAllOraclePricePairRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllOraclePricePairResponse> {
    return this.rpc.unary(QueryOraclePricePairAllDesc, QueryAllOraclePricePairRequest.fromPartial(request as any), metadata);
  }
  vaultPauseMode(request: DeepPartial<QueryVaultPauseModeRequest> = {}, metadata?: grpc.Metadata): Promise<QueryVaultPauseModeResponse> {
    return this.rpc.unary(QueryVaultPauseModeDesc, QueryVaultPauseModeRequest.fromPartial(request as any), metadata);
  }
  pendingTokenIntroduction(request: DeepPartial<QueryGetPendingTokenIntroductionRequest>, metadata?: grpc.Metadata): Promise<QueryGetPendingTokenIntroductionResponse> {
    return this.rpc.unary(QueryPendingTokenIntroductionDesc, QueryGetPendingTokenIntroductionRequest.fromPartial(request as any), metadata);
  }
  pendingTokenIntroductionAll(request: DeepPartial<QueryAllPendingTokenIntroductionRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllPendingTokenIntroductionResponse> {
    return this.rpc.unary(QueryPendingTokenIntroductionAllDesc, QueryAllPendingTokenIntroductionRequest.fromPartial(request as any), metadata);
  }
  yammPoolId(request: DeepPartial<QueryYammPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryYammPoolIdResponse> {
    return this.rpc.unary(QueryYammPoolIdDesc, QueryYammPoolIdRequest.fromPartial(request as any), metadata);
  }
  orderStepBounds(request: DeepPartial<QueryOrderStepBoundsRequest>, metadata?: grpc.Metadata): Promise<QueryOrderStepBoundsResponse> {
    return this.rpc.unary(QueryOrderStepBoundsDesc, QueryOrderStepBoundsRequest.fromPartial(request as any), metadata);
  }
  disabledOrderPairAll(request: DeepPartial<QueryAllDisabledOrderPairRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllDisabledOrderPairResponse> {
    return this.rpc.unary(QueryDisabledOrderPairAllDesc, QueryAllDisabledOrderPairRequest.fromPartial(request as any), metadata);
  }
  orderPairDisabled(request: DeepPartial<QueryOrderPairDisabledRequest>, metadata?: grpc.Metadata): Promise<QueryOrderPairDisabledResponse> {
    return this.rpc.unary(QueryOrderPairDisabledDesc, QueryOrderPairDisabledRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.amm.v1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolTokenDesc: UnaryMethodDefinitionish = {
  methodName: "PoolToken",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolTokenAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTokenAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolTokenAllForPoolDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTokenAllForPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolTokenForPoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolTokenForPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolTokenWeightAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTokenWeightAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolTokenWeightRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolTokenWeightResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolTokenWeightDesc: UnaryMethodDefinitionish = {
  methodName: "PoolTokenWeight",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolTokenWeightRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolTokenWeightResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWeightedTokenDesc: UnaryMethodDefinitionish = {
  methodName: "WeightedToken",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetWeightedTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetWeightedTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWeightedTokenAllDesc: UnaryMethodDefinitionish = {
  methodName: "WeightedTokenAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllWeightedTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllWeightedTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWeightUpdateTimingDesc: UnaryMethodDefinitionish = {
  methodName: "WeightUpdateTiming",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetWeightUpdateTimingRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetWeightUpdateTimingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWeightUpdateTimingAllDesc: UnaryMethodDefinitionish = {
  methodName: "WeightUpdateTimingAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllWeightUpdateTimingRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllWeightUpdateTimingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateSingleSwapDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateSingleSwap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateSingleSwapRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateSingleSwapResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateInitializePoolDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateInitializePool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateInitializePoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateInitializePoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateJoinAllTokensExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateJoinAllTokensExactLpt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateJoinAllTokensExactLptRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateJoinAllTokensExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateJoinExactTokensDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateJoinExactTokens",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateJoinExactTokensRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateJoinExactTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateZeroImpactJoinYammDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateZeroImpactJoinYamm",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateZeroImpactJoinYammRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateZeroImpactJoinYammResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateJoinTokenExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateJoinTokenExactLpt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateJoinTokenExactLptRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateJoinTokenExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateExitTokenExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateExitTokenExactLpt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateExitTokenExactLptRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateExitTokenExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateExitExactTokensDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateExitExactTokens",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateExitExactTokensRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateExitExactTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateExitAllTokensExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateExitAllTokensExactLpt",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateExitAllTokensExactLptRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateExitAllTokensExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySpotPriceDesc: UnaryMethodDefinitionish = {
  methodName: "SpotPrice",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySpotPriceRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySpotPriceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryIntroducingPoolTokenDesc: UnaryMethodDefinitionish = {
  methodName: "IntroducingPoolToken",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetIntroducingPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetIntroducingPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryIntroducingPoolTokenAllDesc: UnaryMethodDefinitionish = {
  methodName: "IntroducingPoolTokenAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllIntroducingPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllIntroducingPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryExpiringPoolTokenDesc: UnaryMethodDefinitionish = {
  methodName: "ExpiringPoolToken",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetExpiringPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetExpiringPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryExpiringPoolTokenAllDesc: UnaryMethodDefinitionish = {
  methodName: "ExpiringPoolTokenAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllExpiringPoolTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllExpiringPoolTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryLpTokenDesc: UnaryMethodDefinitionish = {
  methodName: "LpToken",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryLpTokenRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLpTokenResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateBatchSwapDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateBatchSwap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateBatchSwapRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateBatchSwapResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryYammConfigurationDesc: UnaryMethodDefinitionish = {
  methodName: "YammConfiguration",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetYammConfigurationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetYammConfigurationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryYammConfigurationAllDesc: UnaryMethodDefinitionish = {
  methodName: "YammConfigurationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllYammConfigurationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllYammConfigurationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWhitelistedRouteDesc: UnaryMethodDefinitionish = {
  methodName: "WhitelistedRoute",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetWhitelistedRouteRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetWhitelistedRouteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryWhitelistedRouteAllDesc: UnaryMethodDefinitionish = {
  methodName: "WhitelistedRouteAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllWhitelistedRouteRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllWhitelistedRouteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOrderDesc: UnaryMethodDefinitionish = {
  methodName: "Order",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOrderAllDesc: UnaryMethodDefinitionish = {
  methodName: "OrderAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryExecutableOrderDesc: UnaryMethodDefinitionish = {
  methodName: "ExecutableOrder",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetExecutableOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetExecutableOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryExecutableOrderAllDesc: UnaryMethodDefinitionish = {
  methodName: "ExecutableOrderAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllExecutableOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllExecutableOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryScheduleOrderDesc: UnaryMethodDefinitionish = {
  methodName: "ScheduleOrder",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetScheduleOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetScheduleOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryScheduleOrderAllDesc: UnaryMethodDefinitionish = {
  methodName: "ScheduleOrderAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllScheduleOrderRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllScheduleOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOraclePricePairDesc: UnaryMethodDefinitionish = {
  methodName: "OraclePricePair",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetOraclePricePairRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetOraclePricePairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOraclePricePairAllDesc: UnaryMethodDefinitionish = {
  methodName: "OraclePricePairAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllOraclePricePairRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllOraclePricePairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryVaultPauseModeDesc: UnaryMethodDefinitionish = {
  methodName: "VaultPauseMode",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryVaultPauseModeRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVaultPauseModeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPendingTokenIntroductionDesc: UnaryMethodDefinitionish = {
  methodName: "PendingTokenIntroduction",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPendingTokenIntroductionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPendingTokenIntroductionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPendingTokenIntroductionAllDesc: UnaryMethodDefinitionish = {
  methodName: "PendingTokenIntroductionAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPendingTokenIntroductionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPendingTokenIntroductionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryYammPoolIdDesc: UnaryMethodDefinitionish = {
  methodName: "YammPoolId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryYammPoolIdRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryYammPoolIdResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOrderStepBoundsDesc: UnaryMethodDefinitionish = {
  methodName: "OrderStepBounds",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryOrderStepBoundsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryOrderStepBoundsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryDisabledOrderPairAllDesc: UnaryMethodDefinitionish = {
  methodName: "DisabledOrderPairAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllDisabledOrderPairRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllDisabledOrderPairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryOrderPairDisabledDesc: UnaryMethodDefinitionish = {
  methodName: "OrderPairDisabled",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryOrderPairDisabledRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryOrderPairDisabledResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}