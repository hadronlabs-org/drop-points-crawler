import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@refractedlabs/cosmology-lcd-fork";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetPoolTokenRequest, QueryGetPoolTokenResponseSDKType, QueryAllPoolTokenRequest, QueryAllPoolTokenResponseSDKType, QueryAllPoolTokenForPoolRequest, QueryAllPoolTokenForPoolResponseSDKType, QueryAllPoolTokenWeightRequest, QueryAllPoolTokenWeightResponseSDKType, QueryGetPoolTokenWeightRequest, QueryGetPoolTokenWeightResponseSDKType, QueryGetPoolRequest, QueryGetPoolResponseSDKType, QueryAllPoolRequest, QueryAllPoolResponseSDKType, QueryGetWeightedTokenRequest, QueryGetWeightedTokenResponseSDKType, QueryAllWeightedTokenRequest, QueryAllWeightedTokenResponseSDKType, QueryGetWeightUpdateTimingRequest, QueryGetWeightUpdateTimingResponseSDKType, QueryAllWeightUpdateTimingRequest, QueryAllWeightUpdateTimingResponseSDKType, QuerySimulateSingleSwapRequest, QuerySimulateSingleSwapResponseSDKType, QuerySimulateInitializePoolRequest, QuerySimulateInitializePoolResponseSDKType, QuerySimulateJoinAllTokensExactLptRequest, QuerySimulateJoinAllTokensExactLptResponseSDKType, QuerySimulateJoinExactTokensRequest, QuerySimulateJoinExactTokensResponseSDKType, QuerySimulateZeroImpactJoinYammRequest, QuerySimulateZeroImpactJoinYammResponseSDKType, QuerySimulateJoinTokenExactLptRequest, QuerySimulateJoinTokenExactLptResponseSDKType, QuerySimulateExitTokenExactLptRequest, QuerySimulateExitTokenExactLptResponseSDKType, QuerySimulateExitExactTokensRequest, QuerySimulateExitExactTokensResponseSDKType, QuerySimulateExitAllTokensExactLptRequest, QuerySimulateExitAllTokensExactLptResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QueryGetIntroducingPoolTokenRequest, QueryGetIntroducingPoolTokenResponseSDKType, QueryAllIntroducingPoolTokenRequest, QueryAllIntroducingPoolTokenResponseSDKType, QueryGetExpiringPoolTokenRequest, QueryGetExpiringPoolTokenResponseSDKType, QueryAllExpiringPoolTokenRequest, QueryAllExpiringPoolTokenResponseSDKType, QueryLpTokenRequest, QueryLpTokenResponseSDKType, QuerySimulateBatchSwapRequest, QuerySimulateBatchSwapResponseSDKType, QueryGetYammConfigurationRequest, QueryGetYammConfigurationResponseSDKType, QueryAllYammConfigurationRequest, QueryAllYammConfigurationResponseSDKType, QueryGetWhitelistedRouteRequest, QueryGetWhitelistedRouteResponseSDKType, QueryAllWhitelistedRouteRequest, QueryAllWhitelistedRouteResponseSDKType, QueryGetOrderRequest, QueryGetOrderResponseSDKType, QueryAllOrderRequest, QueryAllOrderResponseSDKType, QueryGetExecutableOrderRequest, QueryGetExecutableOrderResponseSDKType, QueryAllExecutableOrderRequest, QueryAllExecutableOrderResponseSDKType, QueryGetScheduleOrderRequest, QueryGetScheduleOrderResponseSDKType, QueryAllScheduleOrderRequest, QueryAllScheduleOrderResponseSDKType, QueryGetOraclePricePairRequest, QueryGetOraclePricePairResponseSDKType, QueryAllOraclePricePairRequest, QueryAllOraclePricePairResponseSDKType, QueryVaultPauseModeRequest, QueryVaultPauseModeResponseSDKType, QueryGetPendingTokenIntroductionRequest, QueryGetPendingTokenIntroductionResponseSDKType, QueryAllPendingTokenIntroductionRequest, QueryAllPendingTokenIntroductionResponseSDKType, QueryYammPoolIdRequest, QueryYammPoolIdResponseSDKType, QueryOrderStepBoundsRequest, QueryOrderStepBoundsResponseSDKType, QueryAllDisabledOrderPairRequest, QueryAllDisabledOrderPairResponseSDKType, QueryOrderPairDisabledRequest, QueryOrderPairDisabledResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `pryzm/amm/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a PoolToken by index. */
  async poolToken(params: QueryGetPoolTokenRequest): Promise<QueryGetPoolTokenResponseSDKType> {
    const endpoint = `pryzm/amm/v1/pool_token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryGetPoolTokenResponseSDKType>(endpoint);
  }
  /* Queries a list of PoolToken items. */
  async poolTokenAll(params: QueryAllPoolTokenRequest): Promise<QueryAllPoolTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `pryzm/amm/v1/pool_token`;
    return await this.req.get<QueryAllPoolTokenResponseSDKType>(endpoint, options);
  }
  /* PoolTokenAllForPool */
  async poolTokenAllForPool(params: QueryAllPoolTokenForPoolRequest): Promise<QueryAllPoolTokenForPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    const endpoint = `pryzm/amm/v1/pool_token_for_pool`;
    return await this.req.get<QueryAllPoolTokenForPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of TokenWeights
   computing normalized weights requires reading all tokens from the context
   and computing weight for all of them. And the number of tokens in a pool is not expected to
   be high.
   therefore, this query is not paginated */
  async poolTokenWeightAll(params: QueryAllPoolTokenWeightRequest): Promise<QueryAllPoolTokenWeightResponseSDKType> {
    const endpoint = `pryzm/amm/v1/pool_token_weight/${params.poolId}`;
    return await this.req.get<QueryAllPoolTokenWeightResponseSDKType>(endpoint);
  }
  /* Queries a TokenWeight */
  async poolTokenWeight(params: QueryGetPoolTokenWeightRequest): Promise<QueryGetPoolTokenWeightResponseSDKType> {
    const endpoint = `pryzm/amm/v1/pool_token_weight/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryGetPoolTokenWeightResponseSDKType>(endpoint);
  }
  /* Queries a Pool by id. */
  async pool(params: QueryGetPoolRequest): Promise<QueryGetPoolResponseSDKType> {
    const endpoint = `pryzm/amm/v1/pool/${params.id}`;
    return await this.req.get<QueryGetPoolResponseSDKType>(endpoint);
  }
  /* Queries a list of Pool items. */
  async poolAll(params: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/pool`;
    return await this.req.get<QueryAllPoolResponseSDKType>(endpoint, options);
  }
  /* Queries a WeightedToken by index. */
  async weightedToken(params: QueryGetWeightedTokenRequest): Promise<QueryGetWeightedTokenResponseSDKType> {
    const endpoint = `pryzm/amm/v1/weighted_token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryGetWeightedTokenResponseSDKType>(endpoint);
  }
  /* Queries a list of WeightedToken items. */
  async weightedTokenAll(params: QueryAllWeightedTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllWeightedTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/weighted_token`;
    return await this.req.get<QueryAllWeightedTokenResponseSDKType>(endpoint, options);
  }
  /* Queries a WeightUpdateTiming by index. */
  async weightUpdateTiming(params: QueryGetWeightUpdateTimingRequest): Promise<QueryGetWeightUpdateTimingResponseSDKType> {
    const endpoint = `pryzm/amm/v1/weight_update_timing/${params.poolId}`;
    return await this.req.get<QueryGetWeightUpdateTimingResponseSDKType>(endpoint);
  }
  /* Queries a list of WeightUpdateTiming items. */
  async weightUpdateTimingAll(params: QueryAllWeightUpdateTimingRequest = {
    pagination: undefined
  }): Promise<QueryAllWeightUpdateTimingResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/weight_update_timing`;
    return await this.req.get<QueryAllWeightUpdateTimingResponseSDKType>(endpoint, options);
  }
  /* Simulates a single swap action and returns the result */
  async simulateSingleSwap(params: QuerySimulateSingleSwapRequest): Promise<QuerySimulateSingleSwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.swap !== "undefined") {
      options.params.swap = params.swap;
    }
    const endpoint = `pryzm/amm/v1/simulate_single_swap`;
    return await this.req.get<QuerySimulateSingleSwapResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateInitializePool items. */
  async simulateInitializePool(params: QuerySimulateInitializePoolRequest): Promise<QuerySimulateInitializePoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsIn !== "undefined") {
      options.params.amounts_in = params.amountsIn;
    }
    const endpoint = `pryzm/amm/v1/simulate_initialize_pool/${params.poolId}`;
    return await this.req.get<QuerySimulateInitializePoolResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateJoinAllTokensExactLpt items. */
  async simulateJoinAllTokensExactLpt(params: QuerySimulateJoinAllTokensExactLptRequest): Promise<QuerySimulateJoinAllTokensExactLptResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOut !== "undefined") {
      options.params.lpt_out = params.lptOut;
    }
    const endpoint = `pryzm/amm/v1/simulate_join_all_tokens_exact_lpt/${params.poolId}`;
    return await this.req.get<QuerySimulateJoinAllTokensExactLptResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateJoinExactTokens items. */
  async simulateJoinExactTokens(params: QuerySimulateJoinExactTokensRequest): Promise<QuerySimulateJoinExactTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsIn !== "undefined") {
      options.params.amounts_in = params.amountsIn;
    }
    const endpoint = `pryzm/amm/v1/simulate_join_exact_tokens/${params.poolId}`;
    return await this.req.get<QuerySimulateJoinExactTokensResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateJoinExactTokens items. */
  async simulateZeroImpactJoinYamm(params: QuerySimulateZeroImpactJoinYammRequest): Promise<QuerySimulateZeroImpactJoinYammResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.cAmountIn !== "undefined") {
      options.params.c_amount_in = params.cAmountIn;
    }
    const endpoint = `pryzm/amm/v1/simulate_zero_impact_join_yamm`;
    return await this.req.get<QuerySimulateZeroImpactJoinYammResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateJoinTokenExactLpt items. */
  async simulateJoinTokenExactLpt(params: QuerySimulateJoinTokenExactLptRequest): Promise<QuerySimulateJoinTokenExactLptResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptOut !== "undefined") {
      options.params.lpt_out = params.lptOut;
    }
    if (typeof params?.tokenIn !== "undefined") {
      options.params.token_in = params.tokenIn;
    }
    const endpoint = `pryzm/amm/v1/simulate_join_token_exact_lpt/${params.poolId}`;
    return await this.req.get<QuerySimulateJoinTokenExactLptResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateExitTokenExactLpt items. */
  async simulateExitTokenExactLpt(params: QuerySimulateExitTokenExactLptRequest): Promise<QuerySimulateExitTokenExactLptResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptIn !== "undefined") {
      options.params.lpt_in = params.lptIn;
    }
    if (typeof params?.tokenOut !== "undefined") {
      options.params.token_out = params.tokenOut;
    }
    const endpoint = `pryzm/amm/v1/simulate_exit_token_exact_lpt/${params.poolId}`;
    return await this.req.get<QuerySimulateExitTokenExactLptResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateExitExactTokens items. */
  async simulateExitExactTokens(params: QuerySimulateExitExactTokensRequest): Promise<QuerySimulateExitExactTokensResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.amountsOut !== "undefined") {
      options.params.amounts_out = params.amountsOut;
    }
    const endpoint = `pryzm/amm/v1/simulate_exit_exact_tokens/${params.poolId}`;
    return await this.req.get<QuerySimulateExitExactTokensResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SimulateExitAllTokensExactLpt items. */
  async simulateExitAllTokensExactLpt(params: QuerySimulateExitAllTokensExactLptRequest): Promise<QuerySimulateExitAllTokensExactLptResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.lptIn !== "undefined") {
      options.params.lpt_in = params.lptIn;
    }
    const endpoint = `pryzm/amm/v1/simulate_exit_all_tokens_exact_lpt/${params.poolId}`;
    return await this.req.get<QuerySimulateExitAllTokensExactLptResponseSDKType>(endpoint, options);
  }
  /* Queries a list of SpotPrice items. */
  async spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType> {
    const endpoint = `pryzm/amm/v1/spot_price/${params.poolId}/${params.tokenIn}/${params.tokenOut}/${params.applyFee}`;
    return await this.req.get<QuerySpotPriceResponseSDKType>(endpoint);
  }
  /* Queries a IntroducingPoolToken by index. */
  async introducingPoolToken(params: QueryGetIntroducingPoolTokenRequest): Promise<QueryGetIntroducingPoolTokenResponseSDKType> {
    const endpoint = `pryzm/amm/v1/introducing_pool_token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryGetIntroducingPoolTokenResponseSDKType>(endpoint);
  }
  /* Queries a list of IntroducingPoolToken items. */
  async introducingPoolTokenAll(params: QueryAllIntroducingPoolTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllIntroducingPoolTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/introducing_pool_token`;
    return await this.req.get<QueryAllIntroducingPoolTokenResponseSDKType>(endpoint, options);
  }
  /* Queries a ExpiringPoolToken by index. */
  async expiringPoolToken(params: QueryGetExpiringPoolTokenRequest): Promise<QueryGetExpiringPoolTokenResponseSDKType> {
    const endpoint = `pryzm/amm/v1/expiring_pool_token/${params.poolId}/${params.denom}`;
    return await this.req.get<QueryGetExpiringPoolTokenResponseSDKType>(endpoint);
  }
  /* Queries a list of ExpiringPoolToken items. */
  async expiringPoolTokenAll(params: QueryAllExpiringPoolTokenRequest = {
    pagination: undefined
  }): Promise<QueryAllExpiringPoolTokenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/expiring_pool_token`;
    return await this.req.get<QueryAllExpiringPoolTokenResponseSDKType>(endpoint, options);
  }
  /* Queries a list of LpToken items. */
  async lpToken(params: QueryLpTokenRequest): Promise<QueryLpTokenResponseSDKType> {
    const endpoint = `pryzm/amm/v1/lp_token/${params.poolId}`;
    return await this.req.get<QueryLpTokenResponseSDKType>(endpoint);
  }
  /* Queries a list of SimulateBatchSwap items. */
  async simulateBatchSwap(params: QuerySimulateBatchSwapRequest): Promise<QuerySimulateBatchSwapResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.swapType !== "undefined") {
      options.params.swap_type = params.swapType;
    }
    if (typeof params?.steps !== "undefined") {
      options.params.steps = params.steps;
    }
    const endpoint = `pryzm/amm/v1/simulate_batch_swap`;
    return await this.req.get<QuerySimulateBatchSwapResponseSDKType>(endpoint, options);
  }
  /* Queries a YammConfiguration by index. */
  async yammConfiguration(params: QueryGetYammConfigurationRequest): Promise<QueryGetYammConfigurationResponseSDKType> {
    const endpoint = `pryzm/amm/v1/yamm_configuration/${params.poolId}`;
    return await this.req.get<QueryGetYammConfigurationResponseSDKType>(endpoint);
  }
  /* Queries a list of YammConfiguration items. */
  async yammConfigurationAll(params: QueryAllYammConfigurationRequest = {
    pagination: undefined
  }): Promise<QueryAllYammConfigurationResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/yamm_configuration`;
    return await this.req.get<QueryAllYammConfigurationResponseSDKType>(endpoint, options);
  }
  /* Queries a WhitelistedRoute by index. */
  async whitelistedRoute(params: QueryGetWhitelistedRouteRequest): Promise<QueryGetWhitelistedRouteResponseSDKType> {
    const endpoint = `pryzm/amm/v1/whitelisted_route/${params.tokenIn}/${params.tokenOut}`;
    return await this.req.get<QueryGetWhitelistedRouteResponseSDKType>(endpoint);
  }
  /* Queries a list of WhitelistedRoute items. */
  async whitelistedRouteAll(params: QueryAllWhitelistedRouteRequest = {
    pagination: undefined
  }): Promise<QueryAllWhitelistedRouteResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/whitelisted_route`;
    return await this.req.get<QueryAllWhitelistedRouteResponseSDKType>(endpoint, options);
  }
  /* Queries a Order by id. */
  async order(params: QueryGetOrderRequest): Promise<QueryGetOrderResponseSDKType> {
    const endpoint = `pryzm/amm/v1/order/${params.id}`;
    return await this.req.get<QueryGetOrderResponseSDKType>(endpoint);
  }
  /* Queries a list of Order items. */
  async orderAll(params: QueryAllOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllOrderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/order`;
    return await this.req.get<QueryAllOrderResponseSDKType>(endpoint, options);
  }
  /* Queries a ExecutableOrder by index. */
  async executableOrder(params: QueryGetExecutableOrderRequest): Promise<QueryGetExecutableOrderResponseSDKType> {
    const endpoint = `pryzm/amm/v1/executable_order/${params.orderId}`;
    return await this.req.get<QueryGetExecutableOrderResponseSDKType>(endpoint);
  }
  /* Queries a list of ExecutableOrder items. */
  async executableOrderAll(params: QueryAllExecutableOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllExecutableOrderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/executable_order`;
    return await this.req.get<QueryAllExecutableOrderResponseSDKType>(endpoint, options);
  }
  /* Queries a ScheduleOrder by index. */
  async scheduleOrder(params: QueryGetScheduleOrderRequest): Promise<QueryGetScheduleOrderResponseSDKType> {
    const endpoint = `pryzm/amm/v1/schedule_order/${params.orderId}`;
    return await this.req.get<QueryGetScheduleOrderResponseSDKType>(endpoint);
  }
  /* Queries a list of ScheduleOrder items. */
  async scheduleOrderAll(params: QueryAllScheduleOrderRequest = {
    pagination: undefined
  }): Promise<QueryAllScheduleOrderResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/schedule_order`;
    return await this.req.get<QueryAllScheduleOrderResponseSDKType>(endpoint, options);
  }
  /* Queries a OraclePricePair by index. */
  async oraclePricePair(params: QueryGetOraclePricePairRequest): Promise<QueryGetOraclePricePairResponseSDKType> {
    const endpoint = `pryzm/amm/v1/oracle_price_pair/${params.assetId}`;
    return await this.req.get<QueryGetOraclePricePairResponseSDKType>(endpoint);
  }
  /* Queries a list of OraclePricePair items. */
  async oraclePricePairAll(params: QueryAllOraclePricePairRequest = {
    pagination: undefined
  }): Promise<QueryAllOraclePricePairResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/oracle_price_pair`;
    return await this.req.get<QueryAllOraclePricePairResponseSDKType>(endpoint, options);
  }
  /* Queries a list of VaultPauseMode items. */
  async vaultPauseMode(_params: QueryVaultPauseModeRequest = {}): Promise<QueryVaultPauseModeResponseSDKType> {
    const endpoint = `pryzm/amm/v1/vault_pause_mode`;
    return await this.req.get<QueryVaultPauseModeResponseSDKType>(endpoint);
  }
  /* Queries a PendingTokenIntroduction by index. */
  async pendingTokenIntroduction(params: QueryGetPendingTokenIntroductionRequest): Promise<QueryGetPendingTokenIntroductionResponseSDKType> {
    const endpoint = `pryzm/amm/v1/pending_token_introduction/${params.assetId}/${params.targetPoolId}`;
    return await this.req.get<QueryGetPendingTokenIntroductionResponseSDKType>(endpoint);
  }
  /* Queries a list of PendingTokenIntroduction items. */
  async pendingTokenIntroductionAll(params: QueryAllPendingTokenIntroductionRequest = {
    pagination: undefined
  }): Promise<QueryAllPendingTokenIntroductionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/pending_token_introduction`;
    return await this.req.get<QueryAllPendingTokenIntroductionResponseSDKType>(endpoint, options);
  }
  /* Queries a YammPoolId item. */
  async yammPoolId(params: QueryYammPoolIdRequest): Promise<QueryYammPoolIdResponseSDKType> {
    const endpoint = `pryzm/amm/v1/yamm_pool_id/${params.assetId}`;
    return await this.req.get<QueryYammPoolIdResponseSDKType>(endpoint);
  }
  /* OrderStepBounds */
  async orderStepBounds(params: QueryOrderStepBoundsRequest): Promise<QueryOrderStepBoundsResponseSDKType> {
    const endpoint = `pryzm/amm/v1/order_step_bounds/${params.poolId}/${params.tokenIn}/${params.tokenOut}/${params.whitelistedRoute}`;
    return await this.req.get<QueryOrderStepBoundsResponseSDKType>(endpoint);
  }
  /* Queries a list of all disabled order pairs */
  async disabledOrderPairAll(params: QueryAllDisabledOrderPairRequest = {
    pagination: undefined
  }): Promise<QueryAllDisabledOrderPairResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `pryzm/amm/v1/disabled_order_pair`;
    return await this.req.get<QueryAllDisabledOrderPairResponseSDKType>(endpoint, options);
  }
  /* Queries whether or not a pair is disabled */
  async orderPairDisabled(params: QueryOrderPairDisabledRequest): Promise<QueryOrderPairDisabledResponseSDKType> {
    const endpoint = `pryzm/amm/v1/disabled_order_pair/${params.whitelistedRoute}/${params.poolId}/${params.tokenIn}/${params.tokenOut}`;
    return await this.req.get<QueryOrderPairDisabledResponseSDKType>(endpoint);
  }
}