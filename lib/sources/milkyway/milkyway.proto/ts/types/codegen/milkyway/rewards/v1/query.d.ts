import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RewardsPlan, RewardsPlanAmino, RewardsPlanSDKType, OutstandingRewards, OutstandingRewardsAmino, OutstandingRewardsSDKType, AccumulatedCommission, AccumulatedCommissionAmino, AccumulatedCommissionSDKType, DecPool, DecPoolAmino, DecPoolSDKType, DelegationDelegatorReward, DelegationDelegatorRewardAmino, DelegationDelegatorRewardSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryRewardsPlansRequest is the request type for the Query/RewardsPlans RPC
 * method.
 */
export interface QueryRewardsPlansRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryRewardsPlansRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansRequest";
    value: Uint8Array;
}
/**
 * QueryRewardsPlansRequest is the request type for the Query/RewardsPlans RPC
 * method.
 */
export interface QueryRewardsPlansRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryRewardsPlansRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryRewardsPlansRequest";
    value: QueryRewardsPlansRequestAmino;
}
/**
 * QueryRewardsPlansRequest is the request type for the Query/RewardsPlans RPC
 * method.
 */
export interface QueryRewardsPlansRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryRewardsPlansResponse is the response type for the Query/RewardsPlans
 * RPC method.
 */
export interface QueryRewardsPlansResponse {
    rewardsPlans: RewardsPlan[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryRewardsPlansResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansResponse";
    value: Uint8Array;
}
/**
 * QueryRewardsPlansResponse is the response type for the Query/RewardsPlans
 * RPC method.
 */
export interface QueryRewardsPlansResponseAmino {
    rewards_plans: RewardsPlanAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryRewardsPlansResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryRewardsPlansResponse";
    value: QueryRewardsPlansResponseAmino;
}
/**
 * QueryRewardsPlansResponse is the response type for the Query/RewardsPlans
 * RPC method.
 */
export interface QueryRewardsPlansResponseSDKType {
    rewards_plans: RewardsPlanSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryRewardsPlanRequest is the request type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanRequest {
    planId: bigint;
}
export interface QueryRewardsPlanRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanRequest";
    value: Uint8Array;
}
/**
 * QueryRewardsPlanRequest is the request type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanRequestAmino {
    plan_id?: string;
}
export interface QueryRewardsPlanRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryRewardsPlanRequest";
    value: QueryRewardsPlanRequestAmino;
}
/**
 * QueryRewardsPlanRequest is the request type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanRequestSDKType {
    plan_id: bigint;
}
/**
 * QueryRewardsPlanResponse is the response type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanResponse {
    rewardsPlan: RewardsPlan;
}
export interface QueryRewardsPlanResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanResponse";
    value: Uint8Array;
}
/**
 * QueryRewardsPlanResponse is the response type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanResponseAmino {
    rewards_plan?: RewardsPlanAmino;
}
export interface QueryRewardsPlanResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryRewardsPlanResponse";
    value: QueryRewardsPlanResponseAmino;
}
/**
 * QueryRewardsPlanResponse is the response type for the Query/RewardsPlan RPC
 * method.
 */
export interface QueryRewardsPlanResponseSDKType {
    rewards_plan: RewardsPlanSDKType;
}
/**
 * QueryPoolOutstandingRewardsRequest is the request type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsRequest {
    /** pool_id defines the pool ID to query for. */
    poolId: number;
}
export interface QueryPoolOutstandingRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryPoolOutstandingRewardsRequest is the request type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsRequestAmino {
    /** pool_id defines the pool ID to query for. */
    pool_id?: number;
}
export interface QueryPoolOutstandingRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsRequest";
    value: QueryPoolOutstandingRewardsRequestAmino;
}
/**
 * QueryPoolOutstandingRewardsRequest is the request type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsRequestSDKType {
    pool_id: number;
}
/**
 * QueryPoolOutstandingRewardsResponse is the response type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsResponse {
    rewards: OutstandingRewards;
}
export interface QueryPoolOutstandingRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryPoolOutstandingRewardsResponse is the response type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsResponseAmino {
    rewards: OutstandingRewardsAmino;
}
export interface QueryPoolOutstandingRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsResponse";
    value: QueryPoolOutstandingRewardsResponseAmino;
}
/**
 * QueryPoolOutstandingRewardsResponse is the response type for the
 * Query/PoolOutstandingRewards RPC method.
 */
export interface QueryPoolOutstandingRewardsResponseSDKType {
    rewards: OutstandingRewardsSDKType;
}
/**
 * QueryOperatorOutstandingRewardsRequest is the request type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsRequest {
    /** operator_id defines the operator ID to query for. */
    operatorId: number;
}
export interface QueryOperatorOutstandingRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryOperatorOutstandingRewardsRequest is the request type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsRequestAmino {
    /** operator_id defines the operator ID to query for. */
    operator_id?: number;
}
export interface QueryOperatorOutstandingRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsRequest";
    value: QueryOperatorOutstandingRewardsRequestAmino;
}
/**
 * QueryOperatorOutstandingRewardsRequest is the request type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsRequestSDKType {
    operator_id: number;
}
/**
 * QueryOperatorOutstandingRewardsResponse is the response type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsResponse {
    rewards: OutstandingRewards;
}
export interface QueryOperatorOutstandingRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryOperatorOutstandingRewardsResponse is the response type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsResponseAmino {
    rewards: OutstandingRewardsAmino;
}
export interface QueryOperatorOutstandingRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsResponse";
    value: QueryOperatorOutstandingRewardsResponseAmino;
}
/**
 * QueryOperatorOutstandingRewardsResponse is the response type for the
 * Query/OperatorOutstandingRewards RPC method.
 */
export interface QueryOperatorOutstandingRewardsResponseSDKType {
    rewards: OutstandingRewardsSDKType;
}
/**
 * QueryServiceOutstandingRewardsRequest is the request type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsRequest {
    /** service_id defines the service ID to query for. */
    serviceId: number;
}
export interface QueryServiceOutstandingRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryServiceOutstandingRewardsRequest is the request type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsRequestAmino {
    /** service_id defines the service ID to query for. */
    service_id?: number;
}
export interface QueryServiceOutstandingRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsRequest";
    value: QueryServiceOutstandingRewardsRequestAmino;
}
/**
 * QueryServiceOutstandingRewardsRequest is the request type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsRequestSDKType {
    service_id: number;
}
/**
 * QueryServiceOutstandingRewardsResponse is the response type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsResponse {
    rewards: OutstandingRewards;
}
export interface QueryServiceOutstandingRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryServiceOutstandingRewardsResponse is the response type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsResponseAmino {
    rewards: OutstandingRewardsAmino;
}
export interface QueryServiceOutstandingRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsResponse";
    value: QueryServiceOutstandingRewardsResponseAmino;
}
/**
 * QueryServiceOutstandingRewardsResponse is the response type for the
 * Query/ServiceOutstandingRewards RPC method.
 */
export interface QueryServiceOutstandingRewardsResponseSDKType {
    rewards: OutstandingRewardsSDKType;
}
/**
 * QueryOperatorCommissionRequest is the request type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionRequest {
    /** operator_id defines the validator address to query for. */
    operatorId: number;
}
export interface QueryOperatorCommissionRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionRequest";
    value: Uint8Array;
}
/**
 * QueryOperatorCommissionRequest is the request type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionRequestAmino {
    /** operator_id defines the validator address to query for. */
    operator_id?: number;
}
export interface QueryOperatorCommissionRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorCommissionRequest";
    value: QueryOperatorCommissionRequestAmino;
}
/**
 * QueryOperatorCommissionRequest is the request type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionRequestSDKType {
    operator_id: number;
}
/**
 * QueryOperatorCommissionResponse is the response type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionResponse {
    /** commission defines the commission the operator received. */
    commission: AccumulatedCommission;
}
export interface QueryOperatorCommissionResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionResponse";
    value: Uint8Array;
}
/**
 * QueryOperatorCommissionResponse is the response type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionResponseAmino {
    /** commission defines the commission the operator received. */
    commission: AccumulatedCommissionAmino;
}
export interface QueryOperatorCommissionResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorCommissionResponse";
    value: QueryOperatorCommissionResponseAmino;
}
/**
 * QueryOperatorCommissionResponse is the response type for the
 * Query/OperatorCommission RPC method
 */
export interface QueryOperatorCommissionResponseSDKType {
    commission: AccumulatedCommissionSDKType;
}
/**
 * QueryPoolDelegationRewardsRequest is the request type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** pool_id defines the pool ID to query for. */
    poolId: number;
}
export interface QueryPoolDelegationRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryPoolDelegationRewardsRequest is the request type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
    /** pool_id defines the pool ID to query for. */
    pool_id?: number;
}
export interface QueryPoolDelegationRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryPoolDelegationRewardsRequest";
    value: QueryPoolDelegationRewardsRequestAmino;
}
/**
 * QueryPoolDelegationRewardsRequest is the request type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsRequestSDKType {
    delegator_address: string;
    pool_id: number;
}
/**
 * QueryPoolDelegationRewardsResponse is the response type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPool[];
}
export interface QueryPoolDelegationRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryPoolDelegationRewardsResponse is the response type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsResponseAmino {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPoolAmino[];
}
export interface QueryPoolDelegationRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryPoolDelegationRewardsResponse";
    value: QueryPoolDelegationRewardsResponseAmino;
}
/**
 * QueryPoolDelegationRewardsResponse is the response type for the
 * Query/PoolDelegationRewards RPC method.
 */
export interface QueryPoolDelegationRewardsResponseSDKType {
    rewards: DecPoolSDKType[];
}
/**
 * QueryOperatorDelegationRewardsRequest is the request type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** operator_id defines the operator ID to query for. */
    operatorId: number;
}
export interface QueryOperatorDelegationRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryOperatorDelegationRewardsRequest is the request type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
    /** operator_id defines the operator ID to query for. */
    operator_id?: number;
}
export interface QueryOperatorDelegationRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsRequest";
    value: QueryOperatorDelegationRewardsRequestAmino;
}
/**
 * QueryOperatorDelegationRewardsRequest is the request type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsRequestSDKType {
    delegator_address: string;
    operator_id: number;
}
/**
 * QueryOperatorDelegationRewardsResponse is the response type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPool[];
}
export interface QueryOperatorDelegationRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryOperatorDelegationRewardsResponse is the response type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsResponseAmino {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPoolAmino[];
}
export interface QueryOperatorDelegationRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsResponse";
    value: QueryOperatorDelegationRewardsResponseAmino;
}
/**
 * QueryOperatorDelegationRewardsResponse is the response type for the
 * Query/OperatorDelegationRewards RPC method.
 */
export interface QueryOperatorDelegationRewardsResponseSDKType {
    rewards: DecPoolSDKType[];
}
/**
 * QueryServiceDelegationRewardsRequest is the request type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** service_id defines the service ID to query for. */
    serviceId: number;
}
export interface QueryServiceDelegationRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryServiceDelegationRewardsRequest is the request type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
    /** service_id defines the service ID to query for. */
    service_id?: number;
}
export interface QueryServiceDelegationRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryServiceDelegationRewardsRequest";
    value: QueryServiceDelegationRewardsRequestAmino;
}
/**
 * QueryServiceDelegationRewardsRequest is the request type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsRequestSDKType {
    delegator_address: string;
    service_id: number;
}
/**
 * QueryServiceDelegationRewardsResponse is the response type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPool[];
}
export interface QueryServiceDelegationRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryServiceDelegationRewardsResponse is the response type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsResponseAmino {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecPoolAmino[];
}
export interface QueryServiceDelegationRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryServiceDelegationRewardsResponse";
    value: QueryServiceDelegationRewardsResponseAmino;
}
/**
 * QueryServiceDelegationRewardsResponse is the response type for the
 * Query/ServiceDelegationRewards RPC method.
 */
export interface QueryServiceDelegationRewardsResponseSDKType {
    rewards: DecPoolSDKType[];
}
/**
 * QueryDelegatorTotalRewardsRequest is the request type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
export interface QueryDelegatorTotalRewardsRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorTotalRewardsRequest is the request type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
}
export interface QueryDelegatorTotalRewardsRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsRequest";
    value: QueryDelegatorTotalRewardsRequestAmino;
}
/**
 * QueryDelegatorTotalRewardsRequest is the request type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorTotalRewardsResponse is the response type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecPool[];
}
export interface QueryDelegatorTotalRewardsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorTotalRewardsResponse is the response type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsResponseAmino {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorRewardAmino[];
    /** total defines the sum of all the rewards. */
    total: DecPoolAmino[];
}
export interface QueryDelegatorTotalRewardsResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsResponse";
    value: QueryDelegatorTotalRewardsResponseAmino;
}
/**
 * QueryDelegatorTotalRewardsResponse is the response type for the
 * Query/DelegatorTotalRewards RPC method.
 */
export interface QueryDelegatorTotalRewardsResponseSDKType {
    rewards: DelegationDelegatorRewardSDKType[];
    total: DecPoolSDKType[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
}
export interface QueryDelegatorWithdrawAddressRequestAminoMsg {
    type: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressRequest";
    value: QueryDelegatorWithdrawAddressRequestAmino;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
    /** withdraw_address defines the delegator address to query for. */
    withdraw_address?: string;
}
export interface QueryDelegatorWithdrawAddressResponseAminoMsg {
    type: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressResponse";
    value: QueryDelegatorWithdrawAddressResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
    withdraw_address: string;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryRewardsPlansRequest: {
    typeUrl: string;
    encode(message: QueryRewardsPlansRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlansRequest;
    fromPartial(object: Partial<QueryRewardsPlansRequest>): QueryRewardsPlansRequest;
    fromAmino(object: QueryRewardsPlansRequestAmino): QueryRewardsPlansRequest;
    toAmino(message: QueryRewardsPlansRequest): QueryRewardsPlansRequestAmino;
    fromAminoMsg(object: QueryRewardsPlansRequestAminoMsg): QueryRewardsPlansRequest;
    fromProtoMsg(message: QueryRewardsPlansRequestProtoMsg): QueryRewardsPlansRequest;
    toProto(message: QueryRewardsPlansRequest): Uint8Array;
    toProtoMsg(message: QueryRewardsPlansRequest): QueryRewardsPlansRequestProtoMsg;
};
export declare const QueryRewardsPlansResponse: {
    typeUrl: string;
    encode(message: QueryRewardsPlansResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlansResponse;
    fromPartial(object: Partial<QueryRewardsPlansResponse>): QueryRewardsPlansResponse;
    fromAmino(object: QueryRewardsPlansResponseAmino): QueryRewardsPlansResponse;
    toAmino(message: QueryRewardsPlansResponse): QueryRewardsPlansResponseAmino;
    fromAminoMsg(object: QueryRewardsPlansResponseAminoMsg): QueryRewardsPlansResponse;
    fromProtoMsg(message: QueryRewardsPlansResponseProtoMsg): QueryRewardsPlansResponse;
    toProto(message: QueryRewardsPlansResponse): Uint8Array;
    toProtoMsg(message: QueryRewardsPlansResponse): QueryRewardsPlansResponseProtoMsg;
};
export declare const QueryRewardsPlanRequest: {
    typeUrl: string;
    encode(message: QueryRewardsPlanRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlanRequest;
    fromPartial(object: Partial<QueryRewardsPlanRequest>): QueryRewardsPlanRequest;
    fromAmino(object: QueryRewardsPlanRequestAmino): QueryRewardsPlanRequest;
    toAmino(message: QueryRewardsPlanRequest): QueryRewardsPlanRequestAmino;
    fromAminoMsg(object: QueryRewardsPlanRequestAminoMsg): QueryRewardsPlanRequest;
    fromProtoMsg(message: QueryRewardsPlanRequestProtoMsg): QueryRewardsPlanRequest;
    toProto(message: QueryRewardsPlanRequest): Uint8Array;
    toProtoMsg(message: QueryRewardsPlanRequest): QueryRewardsPlanRequestProtoMsg;
};
export declare const QueryRewardsPlanResponse: {
    typeUrl: string;
    encode(message: QueryRewardsPlanResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlanResponse;
    fromPartial(object: Partial<QueryRewardsPlanResponse>): QueryRewardsPlanResponse;
    fromAmino(object: QueryRewardsPlanResponseAmino): QueryRewardsPlanResponse;
    toAmino(message: QueryRewardsPlanResponse): QueryRewardsPlanResponseAmino;
    fromAminoMsg(object: QueryRewardsPlanResponseAminoMsg): QueryRewardsPlanResponse;
    fromProtoMsg(message: QueryRewardsPlanResponseProtoMsg): QueryRewardsPlanResponse;
    toProto(message: QueryRewardsPlanResponse): Uint8Array;
    toProtoMsg(message: QueryRewardsPlanResponse): QueryRewardsPlanResponseProtoMsg;
};
export declare const QueryPoolOutstandingRewardsRequest: {
    typeUrl: string;
    encode(message: QueryPoolOutstandingRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolOutstandingRewardsRequest;
    fromPartial(object: Partial<QueryPoolOutstandingRewardsRequest>): QueryPoolOutstandingRewardsRequest;
    fromAmino(object: QueryPoolOutstandingRewardsRequestAmino): QueryPoolOutstandingRewardsRequest;
    toAmino(message: QueryPoolOutstandingRewardsRequest): QueryPoolOutstandingRewardsRequestAmino;
    fromAminoMsg(object: QueryPoolOutstandingRewardsRequestAminoMsg): QueryPoolOutstandingRewardsRequest;
    fromProtoMsg(message: QueryPoolOutstandingRewardsRequestProtoMsg): QueryPoolOutstandingRewardsRequest;
    toProto(message: QueryPoolOutstandingRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolOutstandingRewardsRequest): QueryPoolOutstandingRewardsRequestProtoMsg;
};
export declare const QueryPoolOutstandingRewardsResponse: {
    typeUrl: string;
    encode(message: QueryPoolOutstandingRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolOutstandingRewardsResponse;
    fromPartial(object: Partial<QueryPoolOutstandingRewardsResponse>): QueryPoolOutstandingRewardsResponse;
    fromAmino(object: QueryPoolOutstandingRewardsResponseAmino): QueryPoolOutstandingRewardsResponse;
    toAmino(message: QueryPoolOutstandingRewardsResponse): QueryPoolOutstandingRewardsResponseAmino;
    fromAminoMsg(object: QueryPoolOutstandingRewardsResponseAminoMsg): QueryPoolOutstandingRewardsResponse;
    fromProtoMsg(message: QueryPoolOutstandingRewardsResponseProtoMsg): QueryPoolOutstandingRewardsResponse;
    toProto(message: QueryPoolOutstandingRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolOutstandingRewardsResponse): QueryPoolOutstandingRewardsResponseProtoMsg;
};
export declare const QueryOperatorOutstandingRewardsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorOutstandingRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorOutstandingRewardsRequest;
    fromPartial(object: Partial<QueryOperatorOutstandingRewardsRequest>): QueryOperatorOutstandingRewardsRequest;
    fromAmino(object: QueryOperatorOutstandingRewardsRequestAmino): QueryOperatorOutstandingRewardsRequest;
    toAmino(message: QueryOperatorOutstandingRewardsRequest): QueryOperatorOutstandingRewardsRequestAmino;
    fromAminoMsg(object: QueryOperatorOutstandingRewardsRequestAminoMsg): QueryOperatorOutstandingRewardsRequest;
    fromProtoMsg(message: QueryOperatorOutstandingRewardsRequestProtoMsg): QueryOperatorOutstandingRewardsRequest;
    toProto(message: QueryOperatorOutstandingRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorOutstandingRewardsRequest): QueryOperatorOutstandingRewardsRequestProtoMsg;
};
export declare const QueryOperatorOutstandingRewardsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorOutstandingRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorOutstandingRewardsResponse;
    fromPartial(object: Partial<QueryOperatorOutstandingRewardsResponse>): QueryOperatorOutstandingRewardsResponse;
    fromAmino(object: QueryOperatorOutstandingRewardsResponseAmino): QueryOperatorOutstandingRewardsResponse;
    toAmino(message: QueryOperatorOutstandingRewardsResponse): QueryOperatorOutstandingRewardsResponseAmino;
    fromAminoMsg(object: QueryOperatorOutstandingRewardsResponseAminoMsg): QueryOperatorOutstandingRewardsResponse;
    fromProtoMsg(message: QueryOperatorOutstandingRewardsResponseProtoMsg): QueryOperatorOutstandingRewardsResponse;
    toProto(message: QueryOperatorOutstandingRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorOutstandingRewardsResponse): QueryOperatorOutstandingRewardsResponseProtoMsg;
};
export declare const QueryServiceOutstandingRewardsRequest: {
    typeUrl: string;
    encode(message: QueryServiceOutstandingRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOutstandingRewardsRequest;
    fromPartial(object: Partial<QueryServiceOutstandingRewardsRequest>): QueryServiceOutstandingRewardsRequest;
    fromAmino(object: QueryServiceOutstandingRewardsRequestAmino): QueryServiceOutstandingRewardsRequest;
    toAmino(message: QueryServiceOutstandingRewardsRequest): QueryServiceOutstandingRewardsRequestAmino;
    fromAminoMsg(object: QueryServiceOutstandingRewardsRequestAminoMsg): QueryServiceOutstandingRewardsRequest;
    fromProtoMsg(message: QueryServiceOutstandingRewardsRequestProtoMsg): QueryServiceOutstandingRewardsRequest;
    toProto(message: QueryServiceOutstandingRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceOutstandingRewardsRequest): QueryServiceOutstandingRewardsRequestProtoMsg;
};
export declare const QueryServiceOutstandingRewardsResponse: {
    typeUrl: string;
    encode(message: QueryServiceOutstandingRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOutstandingRewardsResponse;
    fromPartial(object: Partial<QueryServiceOutstandingRewardsResponse>): QueryServiceOutstandingRewardsResponse;
    fromAmino(object: QueryServiceOutstandingRewardsResponseAmino): QueryServiceOutstandingRewardsResponse;
    toAmino(message: QueryServiceOutstandingRewardsResponse): QueryServiceOutstandingRewardsResponseAmino;
    fromAminoMsg(object: QueryServiceOutstandingRewardsResponseAminoMsg): QueryServiceOutstandingRewardsResponse;
    fromProtoMsg(message: QueryServiceOutstandingRewardsResponseProtoMsg): QueryServiceOutstandingRewardsResponse;
    toProto(message: QueryServiceOutstandingRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceOutstandingRewardsResponse): QueryServiceOutstandingRewardsResponseProtoMsg;
};
export declare const QueryOperatorCommissionRequest: {
    typeUrl: string;
    encode(message: QueryOperatorCommissionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorCommissionRequest;
    fromPartial(object: Partial<QueryOperatorCommissionRequest>): QueryOperatorCommissionRequest;
    fromAmino(object: QueryOperatorCommissionRequestAmino): QueryOperatorCommissionRequest;
    toAmino(message: QueryOperatorCommissionRequest): QueryOperatorCommissionRequestAmino;
    fromAminoMsg(object: QueryOperatorCommissionRequestAminoMsg): QueryOperatorCommissionRequest;
    fromProtoMsg(message: QueryOperatorCommissionRequestProtoMsg): QueryOperatorCommissionRequest;
    toProto(message: QueryOperatorCommissionRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorCommissionRequest): QueryOperatorCommissionRequestProtoMsg;
};
export declare const QueryOperatorCommissionResponse: {
    typeUrl: string;
    encode(message: QueryOperatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorCommissionResponse;
    fromPartial(object: Partial<QueryOperatorCommissionResponse>): QueryOperatorCommissionResponse;
    fromAmino(object: QueryOperatorCommissionResponseAmino): QueryOperatorCommissionResponse;
    toAmino(message: QueryOperatorCommissionResponse): QueryOperatorCommissionResponseAmino;
    fromAminoMsg(object: QueryOperatorCommissionResponseAminoMsg): QueryOperatorCommissionResponse;
    fromProtoMsg(message: QueryOperatorCommissionResponseProtoMsg): QueryOperatorCommissionResponse;
    toProto(message: QueryOperatorCommissionResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorCommissionResponse): QueryOperatorCommissionResponseProtoMsg;
};
export declare const QueryPoolDelegationRewardsRequest: {
    typeUrl: string;
    encode(message: QueryPoolDelegationRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRewardsRequest;
    fromPartial(object: Partial<QueryPoolDelegationRewardsRequest>): QueryPoolDelegationRewardsRequest;
    fromAmino(object: QueryPoolDelegationRewardsRequestAmino): QueryPoolDelegationRewardsRequest;
    toAmino(message: QueryPoolDelegationRewardsRequest): QueryPoolDelegationRewardsRequestAmino;
    fromAminoMsg(object: QueryPoolDelegationRewardsRequestAminoMsg): QueryPoolDelegationRewardsRequest;
    fromProtoMsg(message: QueryPoolDelegationRewardsRequestProtoMsg): QueryPoolDelegationRewardsRequest;
    toProto(message: QueryPoolDelegationRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationRewardsRequest): QueryPoolDelegationRewardsRequestProtoMsg;
};
export declare const QueryPoolDelegationRewardsResponse: {
    typeUrl: string;
    encode(message: QueryPoolDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRewardsResponse;
    fromPartial(object: Partial<QueryPoolDelegationRewardsResponse>): QueryPoolDelegationRewardsResponse;
    fromAmino(object: QueryPoolDelegationRewardsResponseAmino): QueryPoolDelegationRewardsResponse;
    toAmino(message: QueryPoolDelegationRewardsResponse): QueryPoolDelegationRewardsResponseAmino;
    fromAminoMsg(object: QueryPoolDelegationRewardsResponseAminoMsg): QueryPoolDelegationRewardsResponse;
    fromProtoMsg(message: QueryPoolDelegationRewardsResponseProtoMsg): QueryPoolDelegationRewardsResponse;
    toProto(message: QueryPoolDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationRewardsResponse): QueryPoolDelegationRewardsResponseProtoMsg;
};
export declare const QueryOperatorDelegationRewardsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRewardsRequest;
    fromPartial(object: Partial<QueryOperatorDelegationRewardsRequest>): QueryOperatorDelegationRewardsRequest;
    fromAmino(object: QueryOperatorDelegationRewardsRequestAmino): QueryOperatorDelegationRewardsRequest;
    toAmino(message: QueryOperatorDelegationRewardsRequest): QueryOperatorDelegationRewardsRequestAmino;
    fromAminoMsg(object: QueryOperatorDelegationRewardsRequestAminoMsg): QueryOperatorDelegationRewardsRequest;
    fromProtoMsg(message: QueryOperatorDelegationRewardsRequestProtoMsg): QueryOperatorDelegationRewardsRequest;
    toProto(message: QueryOperatorDelegationRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationRewardsRequest): QueryOperatorDelegationRewardsRequestProtoMsg;
};
export declare const QueryOperatorDelegationRewardsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRewardsResponse;
    fromPartial(object: Partial<QueryOperatorDelegationRewardsResponse>): QueryOperatorDelegationRewardsResponse;
    fromAmino(object: QueryOperatorDelegationRewardsResponseAmino): QueryOperatorDelegationRewardsResponse;
    toAmino(message: QueryOperatorDelegationRewardsResponse): QueryOperatorDelegationRewardsResponseAmino;
    fromAminoMsg(object: QueryOperatorDelegationRewardsResponseAminoMsg): QueryOperatorDelegationRewardsResponse;
    fromProtoMsg(message: QueryOperatorDelegationRewardsResponseProtoMsg): QueryOperatorDelegationRewardsResponse;
    toProto(message: QueryOperatorDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationRewardsResponse): QueryOperatorDelegationRewardsResponseProtoMsg;
};
export declare const QueryServiceDelegationRewardsRequest: {
    typeUrl: string;
    encode(message: QueryServiceDelegationRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRewardsRequest;
    fromPartial(object: Partial<QueryServiceDelegationRewardsRequest>): QueryServiceDelegationRewardsRequest;
    fromAmino(object: QueryServiceDelegationRewardsRequestAmino): QueryServiceDelegationRewardsRequest;
    toAmino(message: QueryServiceDelegationRewardsRequest): QueryServiceDelegationRewardsRequestAmino;
    fromAminoMsg(object: QueryServiceDelegationRewardsRequestAminoMsg): QueryServiceDelegationRewardsRequest;
    fromProtoMsg(message: QueryServiceDelegationRewardsRequestProtoMsg): QueryServiceDelegationRewardsRequest;
    toProto(message: QueryServiceDelegationRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationRewardsRequest): QueryServiceDelegationRewardsRequestProtoMsg;
};
export declare const QueryServiceDelegationRewardsResponse: {
    typeUrl: string;
    encode(message: QueryServiceDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRewardsResponse;
    fromPartial(object: Partial<QueryServiceDelegationRewardsResponse>): QueryServiceDelegationRewardsResponse;
    fromAmino(object: QueryServiceDelegationRewardsResponseAmino): QueryServiceDelegationRewardsResponse;
    toAmino(message: QueryServiceDelegationRewardsResponse): QueryServiceDelegationRewardsResponseAmino;
    fromAminoMsg(object: QueryServiceDelegationRewardsResponseAminoMsg): QueryServiceDelegationRewardsResponse;
    fromProtoMsg(message: QueryServiceDelegationRewardsResponseProtoMsg): QueryServiceDelegationRewardsResponse;
    toProto(message: QueryServiceDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationRewardsResponse): QueryServiceDelegationRewardsResponseProtoMsg;
};
export declare const QueryDelegatorTotalRewardsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorTotalRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorTotalRewardsRequest;
    fromPartial(object: Partial<QueryDelegatorTotalRewardsRequest>): QueryDelegatorTotalRewardsRequest;
    fromAmino(object: QueryDelegatorTotalRewardsRequestAmino): QueryDelegatorTotalRewardsRequest;
    toAmino(message: QueryDelegatorTotalRewardsRequest): QueryDelegatorTotalRewardsRequestAmino;
    fromAminoMsg(object: QueryDelegatorTotalRewardsRequestAminoMsg): QueryDelegatorTotalRewardsRequest;
    fromProtoMsg(message: QueryDelegatorTotalRewardsRequestProtoMsg): QueryDelegatorTotalRewardsRequest;
    toProto(message: QueryDelegatorTotalRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorTotalRewardsRequest): QueryDelegatorTotalRewardsRequestProtoMsg;
};
export declare const QueryDelegatorTotalRewardsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorTotalRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorTotalRewardsResponse;
    fromPartial(object: Partial<QueryDelegatorTotalRewardsResponse>): QueryDelegatorTotalRewardsResponse;
    fromAmino(object: QueryDelegatorTotalRewardsResponseAmino): QueryDelegatorTotalRewardsResponse;
    toAmino(message: QueryDelegatorTotalRewardsResponse): QueryDelegatorTotalRewardsResponseAmino;
    fromAminoMsg(object: QueryDelegatorTotalRewardsResponseAminoMsg): QueryDelegatorTotalRewardsResponse;
    fromProtoMsg(message: QueryDelegatorTotalRewardsResponseProtoMsg): QueryDelegatorTotalRewardsResponse;
    toProto(message: QueryDelegatorTotalRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorTotalRewardsResponse): QueryDelegatorTotalRewardsResponseProtoMsg;
};
export declare const QueryDelegatorWithdrawAddressRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorWithdrawAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest;
    fromPartial(object: Partial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest;
    fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest;
    toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino;
    fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest;
    fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest;
    toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg;
};
export declare const QueryDelegatorWithdrawAddressResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse;
    fromPartial(object: Partial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse;
    fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse;
    toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino;
    fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse;
    fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg): QueryDelegatorWithdrawAddressResponse;
    toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg;
};
