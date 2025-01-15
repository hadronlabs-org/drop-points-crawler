import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RewardsPlan, RewardsPlanAmino, RewardsPlanSDKType, OutstandingRewards, OutstandingRewardsAmino, OutstandingRewardsSDKType, AccumulatedCommission, AccumulatedCommissionAmino, AccumulatedCommissionSDKType, DecPool, DecPoolAmino, DecPoolSDKType, DelegationDelegatorReward, DelegationDelegatorRewardAmino, DelegationDelegatorRewardSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/milkyway.rewards.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/milkyway.rewards.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPlansRequest(): QueryRewardsPlansRequest {
  return {
    pagination: undefined
  };
}
export const QueryRewardsPlansRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansRequest",
  encode(message: QueryRewardsPlansRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlansRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPlansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsPlansRequest>): QueryRewardsPlansRequest {
    const message = createBaseQueryRewardsPlansRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRewardsPlansRequestAmino): QueryRewardsPlansRequest {
    const message = createBaseQueryRewardsPlansRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRewardsPlansRequest): QueryRewardsPlansRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPlansRequestAminoMsg): QueryRewardsPlansRequest {
    return QueryRewardsPlansRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPlansRequestProtoMsg): QueryRewardsPlansRequest {
    return QueryRewardsPlansRequest.decode(message.value);
  },
  toProto(message: QueryRewardsPlansRequest): Uint8Array {
    return QueryRewardsPlansRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPlansRequest): QueryRewardsPlansRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansRequest",
      value: QueryRewardsPlansRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPlansResponse(): QueryRewardsPlansResponse {
  return {
    rewardsPlans: [],
    pagination: undefined
  };
}
export const QueryRewardsPlansResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansResponse",
  encode(message: QueryRewardsPlansResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardsPlans) {
      RewardsPlan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlansResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPlansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsPlans.push(RewardsPlan.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsPlansResponse>): QueryRewardsPlansResponse {
    const message = createBaseQueryRewardsPlansResponse();
    message.rewardsPlans = object.rewardsPlans?.map(e => RewardsPlan.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRewardsPlansResponseAmino): QueryRewardsPlansResponse {
    const message = createBaseQueryRewardsPlansResponse();
    message.rewardsPlans = object.rewards_plans?.map(e => RewardsPlan.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRewardsPlansResponse): QueryRewardsPlansResponseAmino {
    const obj: any = {};
    if (message.rewardsPlans) {
      obj.rewards_plans = message.rewardsPlans.map(e => e ? RewardsPlan.toAmino(e) : undefined);
    } else {
      obj.rewards_plans = message.rewardsPlans;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPlansResponseAminoMsg): QueryRewardsPlansResponse {
    return QueryRewardsPlansResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPlansResponseProtoMsg): QueryRewardsPlansResponse {
    return QueryRewardsPlansResponse.decode(message.value);
  },
  toProto(message: QueryRewardsPlansResponse): Uint8Array {
    return QueryRewardsPlansResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPlansResponse): QueryRewardsPlansResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryRewardsPlansResponse",
      value: QueryRewardsPlansResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPlanRequest(): QueryRewardsPlanRequest {
  return {
    planId: BigInt(0)
  };
}
export const QueryRewardsPlanRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanRequest",
  encode(message: QueryRewardsPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.planId !== BigInt(0)) {
      writer.uint32(8).uint64(message.planId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlanRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsPlanRequest>): QueryRewardsPlanRequest {
    const message = createBaseQueryRewardsPlanRequest();
    message.planId = object.planId !== undefined && object.planId !== null ? BigInt(object.planId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryRewardsPlanRequestAmino): QueryRewardsPlanRequest {
    const message = createBaseQueryRewardsPlanRequest();
    if (object.plan_id !== undefined && object.plan_id !== null) {
      message.planId = BigInt(object.plan_id);
    }
    return message;
  },
  toAmino(message: QueryRewardsPlanRequest): QueryRewardsPlanRequestAmino {
    const obj: any = {};
    obj.plan_id = message.planId !== BigInt(0) ? message.planId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPlanRequestAminoMsg): QueryRewardsPlanRequest {
    return QueryRewardsPlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPlanRequestProtoMsg): QueryRewardsPlanRequest {
    return QueryRewardsPlanRequest.decode(message.value);
  },
  toProto(message: QueryRewardsPlanRequest): Uint8Array {
    return QueryRewardsPlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPlanRequest): QueryRewardsPlanRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanRequest",
      value: QueryRewardsPlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPlanResponse(): QueryRewardsPlanResponse {
  return {
    rewardsPlan: RewardsPlan.fromPartial({})
  };
}
export const QueryRewardsPlanResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanResponse",
  encode(message: QueryRewardsPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsPlan !== undefined) {
      RewardsPlan.encode(message.rewardsPlan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.rewardsPlan = RewardsPlan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRewardsPlanResponse>): QueryRewardsPlanResponse {
    const message = createBaseQueryRewardsPlanResponse();
    message.rewardsPlan = object.rewardsPlan !== undefined && object.rewardsPlan !== null ? RewardsPlan.fromPartial(object.rewardsPlan) : undefined;
    return message;
  },
  fromAmino(object: QueryRewardsPlanResponseAmino): QueryRewardsPlanResponse {
    const message = createBaseQueryRewardsPlanResponse();
    if (object.rewards_plan !== undefined && object.rewards_plan !== null) {
      message.rewardsPlan = RewardsPlan.fromAmino(object.rewards_plan);
    }
    return message;
  },
  toAmino(message: QueryRewardsPlanResponse): QueryRewardsPlanResponseAmino {
    const obj: any = {};
    obj.rewards_plan = message.rewardsPlan ? RewardsPlan.toAmino(message.rewardsPlan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPlanResponseAminoMsg): QueryRewardsPlanResponse {
    return QueryRewardsPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPlanResponseProtoMsg): QueryRewardsPlanResponse {
    return QueryRewardsPlanResponse.decode(message.value);
  },
  toProto(message: QueryRewardsPlanResponse): Uint8Array {
    return QueryRewardsPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPlanResponse): QueryRewardsPlanResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryRewardsPlanResponse",
      value: QueryRewardsPlanResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolOutstandingRewardsRequest(): QueryPoolOutstandingRewardsRequest {
  return {
    poolId: 0
  };
}
export const QueryPoolOutstandingRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsRequest",
  encode(message: QueryPoolOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolOutstandingRewardsRequest>): QueryPoolOutstandingRewardsRequest {
    const message = createBaseQueryPoolOutstandingRewardsRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: QueryPoolOutstandingRewardsRequestAmino): QueryPoolOutstandingRewardsRequest {
    const message = createBaseQueryPoolOutstandingRewardsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryPoolOutstandingRewardsRequest): QueryPoolOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryPoolOutstandingRewardsRequestAminoMsg): QueryPoolOutstandingRewardsRequest {
    return QueryPoolOutstandingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolOutstandingRewardsRequestProtoMsg): QueryPoolOutstandingRewardsRequest {
    return QueryPoolOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryPoolOutstandingRewardsRequest): Uint8Array {
    return QueryPoolOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolOutstandingRewardsRequest): QueryPoolOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsRequest",
      value: QueryPoolOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolOutstandingRewardsResponse(): QueryPoolOutstandingRewardsResponse {
  return {
    rewards: OutstandingRewards.fromPartial({})
  };
}
export const QueryPoolOutstandingRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsResponse",
  encode(message: QueryPoolOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      OutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = OutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolOutstandingRewardsResponse>): QueryPoolOutstandingRewardsResponse {
    const message = createBaseQueryPoolOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? OutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolOutstandingRewardsResponseAmino): QueryPoolOutstandingRewardsResponse {
    const message = createBaseQueryPoolOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = OutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryPoolOutstandingRewardsResponse): QueryPoolOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards ? OutstandingRewards.toAmino(message.rewards) : OutstandingRewards.toAmino(OutstandingRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryPoolOutstandingRewardsResponseAminoMsg): QueryPoolOutstandingRewardsResponse {
    return QueryPoolOutstandingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolOutstandingRewardsResponseProtoMsg): QueryPoolOutstandingRewardsResponse {
    return QueryPoolOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryPoolOutstandingRewardsResponse): Uint8Array {
    return QueryPoolOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolOutstandingRewardsResponse): QueryPoolOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryPoolOutstandingRewardsResponse",
      value: QueryPoolOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorOutstandingRewardsRequest(): QueryOperatorOutstandingRewardsRequest {
  return {
    operatorId: 0
  };
}
export const QueryOperatorOutstandingRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsRequest",
  encode(message: QueryOperatorOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorOutstandingRewardsRequest>): QueryOperatorOutstandingRewardsRequest {
    const message = createBaseQueryOperatorOutstandingRewardsRequest();
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryOperatorOutstandingRewardsRequestAmino): QueryOperatorOutstandingRewardsRequest {
    const message = createBaseQueryOperatorOutstandingRewardsRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryOperatorOutstandingRewardsRequest): QueryOperatorOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorOutstandingRewardsRequestAminoMsg): QueryOperatorOutstandingRewardsRequest {
    return QueryOperatorOutstandingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorOutstandingRewardsRequestProtoMsg): QueryOperatorOutstandingRewardsRequest {
    return QueryOperatorOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorOutstandingRewardsRequest): Uint8Array {
    return QueryOperatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorOutstandingRewardsRequest): QueryOperatorOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsRequest",
      value: QueryOperatorOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorOutstandingRewardsResponse(): QueryOperatorOutstandingRewardsResponse {
  return {
    rewards: OutstandingRewards.fromPartial({})
  };
}
export const QueryOperatorOutstandingRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsResponse",
  encode(message: QueryOperatorOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      OutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = OutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorOutstandingRewardsResponse>): QueryOperatorOutstandingRewardsResponse {
    const message = createBaseQueryOperatorOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? OutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorOutstandingRewardsResponseAmino): QueryOperatorOutstandingRewardsResponse {
    const message = createBaseQueryOperatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = OutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryOperatorOutstandingRewardsResponse): QueryOperatorOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards ? OutstandingRewards.toAmino(message.rewards) : OutstandingRewards.toAmino(OutstandingRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryOperatorOutstandingRewardsResponseAminoMsg): QueryOperatorOutstandingRewardsResponse {
    return QueryOperatorOutstandingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorOutstandingRewardsResponseProtoMsg): QueryOperatorOutstandingRewardsResponse {
    return QueryOperatorOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorOutstandingRewardsResponse): Uint8Array {
    return QueryOperatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorOutstandingRewardsResponse): QueryOperatorOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorOutstandingRewardsResponse",
      value: QueryOperatorOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceOutstandingRewardsRequest(): QueryServiceOutstandingRewardsRequest {
  return {
    serviceId: 0
  };
}
export const QueryServiceOutstandingRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsRequest",
  encode(message: QueryServiceOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceOutstandingRewardsRequest>): QueryServiceOutstandingRewardsRequest {
    const message = createBaseQueryServiceOutstandingRewardsRequest();
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: QueryServiceOutstandingRewardsRequestAmino): QueryServiceOutstandingRewardsRequest {
    const message = createBaseQueryServiceOutstandingRewardsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: QueryServiceOutstandingRewardsRequest): QueryServiceOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryServiceOutstandingRewardsRequestAminoMsg): QueryServiceOutstandingRewardsRequest {
    return QueryServiceOutstandingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceOutstandingRewardsRequestProtoMsg): QueryServiceOutstandingRewardsRequest {
    return QueryServiceOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryServiceOutstandingRewardsRequest): Uint8Array {
    return QueryServiceOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceOutstandingRewardsRequest): QueryServiceOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsRequest",
      value: QueryServiceOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceOutstandingRewardsResponse(): QueryServiceOutstandingRewardsResponse {
  return {
    rewards: OutstandingRewards.fromPartial({})
  };
}
export const QueryServiceOutstandingRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsResponse",
  encode(message: QueryServiceOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      OutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = OutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceOutstandingRewardsResponse>): QueryServiceOutstandingRewardsResponse {
    const message = createBaseQueryServiceOutstandingRewardsResponse();
    message.rewards = object.rewards !== undefined && object.rewards !== null ? OutstandingRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceOutstandingRewardsResponseAmino): QueryServiceOutstandingRewardsResponse {
    const message = createBaseQueryServiceOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = OutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryServiceOutstandingRewardsResponse): QueryServiceOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards ? OutstandingRewards.toAmino(message.rewards) : OutstandingRewards.toAmino(OutstandingRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryServiceOutstandingRewardsResponseAminoMsg): QueryServiceOutstandingRewardsResponse {
    return QueryServiceOutstandingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceOutstandingRewardsResponseProtoMsg): QueryServiceOutstandingRewardsResponse {
    return QueryServiceOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryServiceOutstandingRewardsResponse): Uint8Array {
    return QueryServiceOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceOutstandingRewardsResponse): QueryServiceOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryServiceOutstandingRewardsResponse",
      value: QueryServiceOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorCommissionRequest(): QueryOperatorCommissionRequest {
  return {
    operatorId: 0
  };
}
export const QueryOperatorCommissionRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionRequest",
  encode(message: QueryOperatorCommissionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorCommissionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorCommissionRequest>): QueryOperatorCommissionRequest {
    const message = createBaseQueryOperatorCommissionRequest();
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryOperatorCommissionRequestAmino): QueryOperatorCommissionRequest {
    const message = createBaseQueryOperatorCommissionRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryOperatorCommissionRequest): QueryOperatorCommissionRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorCommissionRequestAminoMsg): QueryOperatorCommissionRequest {
    return QueryOperatorCommissionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorCommissionRequestProtoMsg): QueryOperatorCommissionRequest {
    return QueryOperatorCommissionRequest.decode(message.value);
  },
  toProto(message: QueryOperatorCommissionRequest): Uint8Array {
    return QueryOperatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorCommissionRequest): QueryOperatorCommissionRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionRequest",
      value: QueryOperatorCommissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorCommissionResponse(): QueryOperatorCommissionResponse {
  return {
    commission: AccumulatedCommission.fromPartial({})
  };
}
export const QueryOperatorCommissionResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionResponse",
  encode(message: QueryOperatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commission !== undefined) {
      AccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = AccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorCommissionResponse>): QueryOperatorCommissionResponse {
    const message = createBaseQueryOperatorCommissionResponse();
    message.commission = object.commission !== undefined && object.commission !== null ? AccumulatedCommission.fromPartial(object.commission) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorCommissionResponseAmino): QueryOperatorCommissionResponse {
    const message = createBaseQueryOperatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = AccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message: QueryOperatorCommissionResponse): QueryOperatorCommissionResponseAmino {
    const obj: any = {};
    obj.commission = message.commission ? AccumulatedCommission.toAmino(message.commission) : AccumulatedCommission.toAmino(AccumulatedCommission.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryOperatorCommissionResponseAminoMsg): QueryOperatorCommissionResponse {
    return QueryOperatorCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorCommissionResponseProtoMsg): QueryOperatorCommissionResponse {
    return QueryOperatorCommissionResponse.decode(message.value);
  },
  toProto(message: QueryOperatorCommissionResponse): Uint8Array {
    return QueryOperatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorCommissionResponse): QueryOperatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorCommissionResponse",
      value: QueryOperatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationRewardsRequest(): QueryPoolDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    poolId: 0
  };
}
export const QueryPoolDelegationRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsRequest",
  encode(message: QueryPoolDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.poolId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDelegationRewardsRequest>): QueryPoolDelegationRewardsRequest {
    const message = createBaseQueryPoolDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: QueryPoolDelegationRewardsRequestAmino): QueryPoolDelegationRewardsRequest {
    const message = createBaseQueryPoolDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryPoolDelegationRewardsRequest): QueryPoolDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationRewardsRequestAminoMsg): QueryPoolDelegationRewardsRequest {
    return QueryPoolDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationRewardsRequestProtoMsg): QueryPoolDelegationRewardsRequest {
    return QueryPoolDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryPoolDelegationRewardsRequest): Uint8Array {
    return QueryPoolDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationRewardsRequest): QueryPoolDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsRequest",
      value: QueryPoolDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationRewardsResponse(): QueryPoolDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryPoolDelegationRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsResponse",
  encode(message: QueryPoolDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDelegationRewardsResponse>): QueryPoolDelegationRewardsResponse {
    const message = createBaseQueryPoolDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolDelegationRewardsResponseAmino): QueryPoolDelegationRewardsResponse {
    const message = createBaseQueryPoolDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolDelegationRewardsResponse): QueryPoolDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationRewardsResponseAminoMsg): QueryPoolDelegationRewardsResponse {
    return QueryPoolDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationRewardsResponseProtoMsg): QueryPoolDelegationRewardsResponse {
    return QueryPoolDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryPoolDelegationRewardsResponse): Uint8Array {
    return QueryPoolDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationRewardsResponse): QueryPoolDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryPoolDelegationRewardsResponse",
      value: QueryPoolDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationRewardsRequest(): QueryOperatorDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    operatorId: 0
  };
}
export const QueryOperatorDelegationRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsRequest",
  encode(message: QueryOperatorDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorDelegationRewardsRequest>): QueryOperatorDelegationRewardsRequest {
    const message = createBaseQueryOperatorDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryOperatorDelegationRewardsRequestAmino): QueryOperatorDelegationRewardsRequest {
    const message = createBaseQueryOperatorDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryOperatorDelegationRewardsRequest): QueryOperatorDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationRewardsRequestAminoMsg): QueryOperatorDelegationRewardsRequest {
    return QueryOperatorDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationRewardsRequestProtoMsg): QueryOperatorDelegationRewardsRequest {
    return QueryOperatorDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationRewardsRequest): Uint8Array {
    return QueryOperatorDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationRewardsRequest): QueryOperatorDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsRequest",
      value: QueryOperatorDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationRewardsResponse(): QueryOperatorDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryOperatorDelegationRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsResponse",
  encode(message: QueryOperatorDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorDelegationRewardsResponse>): QueryOperatorDelegationRewardsResponse {
    const message = createBaseQueryOperatorDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOperatorDelegationRewardsResponseAmino): QueryOperatorDelegationRewardsResponse {
    const message = createBaseQueryOperatorDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOperatorDelegationRewardsResponse): QueryOperatorDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationRewardsResponseAminoMsg): QueryOperatorDelegationRewardsResponse {
    return QueryOperatorDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationRewardsResponseProtoMsg): QueryOperatorDelegationRewardsResponse {
    return QueryOperatorDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationRewardsResponse): Uint8Array {
    return QueryOperatorDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationRewardsResponse): QueryOperatorDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryOperatorDelegationRewardsResponse",
      value: QueryOperatorDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationRewardsRequest(): QueryServiceDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    serviceId: 0
  };
}
export const QueryServiceDelegationRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsRequest",
  encode(message: QueryServiceDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceDelegationRewardsRequest>): QueryServiceDelegationRewardsRequest {
    const message = createBaseQueryServiceDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: QueryServiceDelegationRewardsRequestAmino): QueryServiceDelegationRewardsRequest {
    const message = createBaseQueryServiceDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: QueryServiceDelegationRewardsRequest): QueryServiceDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationRewardsRequestAminoMsg): QueryServiceDelegationRewardsRequest {
    return QueryServiceDelegationRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationRewardsRequestProtoMsg): QueryServiceDelegationRewardsRequest {
    return QueryServiceDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryServiceDelegationRewardsRequest): Uint8Array {
    return QueryServiceDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationRewardsRequest): QueryServiceDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsRequest",
      value: QueryServiceDelegationRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationRewardsResponse(): QueryServiceDelegationRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryServiceDelegationRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsResponse",
  encode(message: QueryServiceDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceDelegationRewardsResponse>): QueryServiceDelegationRewardsResponse {
    const message = createBaseQueryServiceDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryServiceDelegationRewardsResponseAmino): QueryServiceDelegationRewardsResponse {
    const message = createBaseQueryServiceDelegationRewardsResponse();
    message.rewards = object.rewards?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryServiceDelegationRewardsResponse): QueryServiceDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationRewardsResponseAminoMsg): QueryServiceDelegationRewardsResponse {
    return QueryServiceDelegationRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationRewardsResponseProtoMsg): QueryServiceDelegationRewardsResponse {
    return QueryServiceDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryServiceDelegationRewardsResponse): Uint8Array {
    return QueryServiceDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationRewardsResponse): QueryServiceDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryServiceDelegationRewardsResponse",
      value: QueryServiceDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorTotalRewardsRequest(): QueryDelegatorTotalRewardsRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorTotalRewardsRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsRequest",
  encode(message: QueryDelegatorTotalRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorTotalRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorTotalRewardsRequest>): QueryDelegatorTotalRewardsRequest {
    const message = createBaseQueryDelegatorTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorTotalRewardsRequestAmino): QueryDelegatorTotalRewardsRequest {
    const message = createBaseQueryDelegatorTotalRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorTotalRewardsRequest): QueryDelegatorTotalRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorTotalRewardsRequestAminoMsg): QueryDelegatorTotalRewardsRequest {
    return QueryDelegatorTotalRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorTotalRewardsRequestProtoMsg): QueryDelegatorTotalRewardsRequest {
    return QueryDelegatorTotalRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorTotalRewardsRequest): Uint8Array {
    return QueryDelegatorTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorTotalRewardsRequest): QueryDelegatorTotalRewardsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsRequest",
      value: QueryDelegatorTotalRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorTotalRewardsResponse(): QueryDelegatorTotalRewardsResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryDelegatorTotalRewardsResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsResponse",
  encode(message: QueryDelegatorTotalRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorTotalRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorTotalRewardsResponse>): QueryDelegatorTotalRewardsResponse {
    const message = createBaseQueryDelegatorTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorTotalRewardsResponseAmino): QueryDelegatorTotalRewardsResponse {
    const message = createBaseQueryDelegatorTotalRewardsResponse();
    message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegatorTotalRewardsResponse): QueryDelegatorTotalRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorTotalRewardsResponseAminoMsg): QueryDelegatorTotalRewardsResponse {
    return QueryDelegatorTotalRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorTotalRewardsResponseProtoMsg): QueryDelegatorTotalRewardsResponse {
    return QueryDelegatorTotalRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorTotalRewardsResponse): Uint8Array {
    return QueryDelegatorTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorTotalRewardsResponse): QueryDelegatorTotalRewardsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryDelegatorTotalRewardsResponse",
      value: QueryDelegatorTotalRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressRequest",
  encode(message: QueryDelegatorWithdrawAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: ""
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressResponse",
  encode(message: QueryDelegatorWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
    };
  }
};