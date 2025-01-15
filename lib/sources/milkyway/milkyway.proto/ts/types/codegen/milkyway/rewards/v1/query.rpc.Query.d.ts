import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRewardsPlansRequest, QueryRewardsPlansResponse, QueryRewardsPlanRequest, QueryRewardsPlanResponse, QueryPoolOutstandingRewardsRequest, QueryPoolOutstandingRewardsResponse, QueryOperatorOutstandingRewardsRequest, QueryOperatorOutstandingRewardsResponse, QueryServiceOutstandingRewardsRequest, QueryServiceOutstandingRewardsResponse, QueryOperatorCommissionRequest, QueryOperatorCommissionResponse, QueryPoolDelegationRewardsRequest, QueryPoolDelegationRewardsResponse, QueryOperatorDelegationRewardsRequest, QueryOperatorDelegationRewardsResponse, QueryServiceDelegationRewardsRequest, QueryServiceDelegationRewardsResponse, QueryDelegatorTotalRewardsRequest, QueryDelegatorTotalRewardsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the parameters of the
     * module.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** RewardsPlans queries all rewards plans. */
    rewardsPlans(request?: QueryRewardsPlansRequest): Promise<QueryRewardsPlansResponse>;
    /** RewardsPlan queries a specific rewards plan by its ID. */
    rewardsPlan(request: QueryRewardsPlanRequest): Promise<QueryRewardsPlanResponse>;
    /** PoolOutstandingRewards queries rewards of a pool. */
    poolOutstandingRewards(request: QueryPoolOutstandingRewardsRequest): Promise<QueryPoolOutstandingRewardsResponse>;
    /** OperatorOutstandingRewards queries rewards of an operator. */
    operatorOutstandingRewards(request: QueryOperatorOutstandingRewardsRequest): Promise<QueryOperatorOutstandingRewardsResponse>;
    /** ServiceOutstandingRewards queries rewards of a service. */
    serviceOutstandingRewards(request: QueryServiceOutstandingRewardsRequest): Promise<QueryServiceOutstandingRewardsResponse>;
    /** OperatorCommission queries accumulated commission for an operator. */
    operatorCommission(request: QueryOperatorCommissionRequest): Promise<QueryOperatorCommissionResponse>;
    /**
     * PoolDelegationRewards queries the total rewards accrued by a pool
     * delegation.
     */
    poolDelegationRewards(request: QueryPoolDelegationRewardsRequest): Promise<QueryPoolDelegationRewardsResponse>;
    /**
     * OperatorDelegationRewards queries the total rewards accrued by a operator
     * delegation.
     */
    operatorDelegationRewards(request: QueryOperatorDelegationRewardsRequest): Promise<QueryOperatorDelegationRewardsResponse>;
    /**
     * ServiceDelegationRewards queries the total rewards accrued by a service
     * delegation.
     */
    serviceDelegationRewards(request: QueryServiceDelegationRewardsRequest): Promise<QueryServiceDelegationRewardsResponse>;
    /**
     * DelegatorTotalRewards queries the total rewards accrued by a single
     * delegator
     */
    delegatorTotalRewards(request: QueryDelegatorTotalRewardsRequest): Promise<QueryDelegatorTotalRewardsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rewardsPlans(request?: QueryRewardsPlansRequest): Promise<QueryRewardsPlansResponse>;
    rewardsPlan(request: QueryRewardsPlanRequest): Promise<QueryRewardsPlanResponse>;
    poolOutstandingRewards(request: QueryPoolOutstandingRewardsRequest): Promise<QueryPoolOutstandingRewardsResponse>;
    operatorOutstandingRewards(request: QueryOperatorOutstandingRewardsRequest): Promise<QueryOperatorOutstandingRewardsResponse>;
    serviceOutstandingRewards(request: QueryServiceOutstandingRewardsRequest): Promise<QueryServiceOutstandingRewardsResponse>;
    operatorCommission(request: QueryOperatorCommissionRequest): Promise<QueryOperatorCommissionResponse>;
    poolDelegationRewards(request: QueryPoolDelegationRewardsRequest): Promise<QueryPoolDelegationRewardsResponse>;
    operatorDelegationRewards(request: QueryOperatorDelegationRewardsRequest): Promise<QueryOperatorDelegationRewardsResponse>;
    serviceDelegationRewards(request: QueryServiceDelegationRewardsRequest): Promise<QueryServiceDelegationRewardsResponse>;
    delegatorTotalRewards(request: QueryDelegatorTotalRewardsRequest): Promise<QueryDelegatorTotalRewardsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rewardsPlans(request?: QueryRewardsPlansRequest): Promise<QueryRewardsPlansResponse>;
    rewardsPlan(request: QueryRewardsPlanRequest): Promise<QueryRewardsPlanResponse>;
    poolOutstandingRewards(request: QueryPoolOutstandingRewardsRequest): Promise<QueryPoolOutstandingRewardsResponse>;
    operatorOutstandingRewards(request: QueryOperatorOutstandingRewardsRequest): Promise<QueryOperatorOutstandingRewardsResponse>;
    serviceOutstandingRewards(request: QueryServiceOutstandingRewardsRequest): Promise<QueryServiceOutstandingRewardsResponse>;
    operatorCommission(request: QueryOperatorCommissionRequest): Promise<QueryOperatorCommissionResponse>;
    poolDelegationRewards(request: QueryPoolDelegationRewardsRequest): Promise<QueryPoolDelegationRewardsResponse>;
    operatorDelegationRewards(request: QueryOperatorDelegationRewardsRequest): Promise<QueryOperatorDelegationRewardsResponse>;
    serviceDelegationRewards(request: QueryServiceDelegationRewardsRequest): Promise<QueryServiceDelegationRewardsResponse>;
    delegatorTotalRewards(request: QueryDelegatorTotalRewardsRequest): Promise<QueryDelegatorTotalRewardsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
};
