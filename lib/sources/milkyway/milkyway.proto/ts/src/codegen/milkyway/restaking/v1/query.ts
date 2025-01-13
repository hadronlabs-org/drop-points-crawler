import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Operator, OperatorAmino, OperatorSDKType } from "../../operators/v1/models";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, UserPreferences, UserPreferencesAmino, UserPreferencesSDKType } from "./models";
import { Pool, PoolAmino, PoolSDKType } from "../../pools/v1/models";
import { Service, ServiceAmino, ServiceSDKType } from "../../services/v1/models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryOperatorJoinedServicesRequest is request type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryOperatorJoinedServicesRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorJoinedServicesRequest is request type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryOperatorJoinedServicesRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorJoinedServicesRequest";
  value: QueryOperatorJoinedServicesRequestAmino;
}
/**
 * QueryOperatorJoinedServicesRequest is request type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesRequestSDKType {
  operator_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryOperatorJoinedServicesResponse is response type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesResponse {
  /** ServiceIds is the list of services joined by the operator. */
  serviceIds: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryOperatorJoinedServicesResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorJoinedServicesResponse is response type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesResponseAmino {
  /** ServiceIds is the list of services joined by the operator. */
  service_ids?: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryOperatorJoinedServicesResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorJoinedServicesResponse";
  value: QueryOperatorJoinedServicesResponseAmino;
}
/**
 * QueryOperatorJoinedServicesResponse is response type for the
 * Query/OperatorJoinedServices RPC method.
 */
export interface QueryOperatorJoinedServicesResponseSDKType {
  service_ids: number[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryServiceAllowedOperatorsRequest is request type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryServiceAllowedOperatorsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceAllowedOperatorsRequest is request type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryServiceAllowedOperatorsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsRequest";
  value: QueryServiceAllowedOperatorsRequestAmino;
}
/**
 * QueryServiceAllowedOperatorsRequest is request type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsRequestSDKType {
  service_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryServiceAllowedOperatorsResponse is response type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsResponse {
  /** OperatorIds is the list of operators allowed to validate the service */
  operatorIds: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryServiceAllowedOperatorsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceAllowedOperatorsResponse is response type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsResponseAmino {
  /** OperatorIds is the list of operators allowed to validate the service */
  operator_ids?: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryServiceAllowedOperatorsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsResponse";
  value: QueryServiceAllowedOperatorsResponseAmino;
}
/**
 * QueryServiceAllowedOperatorsResponse is response type for the
 * Query/ServiceAllowedOperators RPC method.
 */
export interface QueryServiceAllowedOperatorsResponseSDKType {
  operator_ids: number[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryServiceSecuringPoolsRequest is request type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsRequest {
  /** ServiceId is the ID of the service to query. */
  serviceId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryServiceSecuringPoolsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceSecuringPoolsRequest is request type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsRequestAmino {
  /** ServiceId is the ID of the service to query. */
  service_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryServiceSecuringPoolsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceSecuringPoolsRequest";
  value: QueryServiceSecuringPoolsRequestAmino;
}
/**
 * QueryServiceSecuringPoolsRequest is request type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsRequestSDKType {
  service_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryServiceSecuringPoolsResponse is response type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsResponse {
  /**
   * PoolIds is the list of pools from which the service is allowed to borrow
   * security.
   */
  poolIds: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryServiceSecuringPoolsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceSecuringPoolsResponse is response type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsResponseAmino {
  /**
   * PoolIds is the list of pools from which the service is allowed to borrow
   * security.
   */
  pool_ids?: number[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryServiceSecuringPoolsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceSecuringPoolsResponse";
  value: QueryServiceSecuringPoolsResponseAmino;
}
/**
 * QueryServiceSecuringPoolsResponse is response type for the
 * Query/ServiceSecuringPools RPC method.
 */
export interface QueryServiceSecuringPoolsResponseSDKType {
  pool_ids: number[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryServiceOperatorsRequest is request type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryServiceOperatorsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceOperatorsRequest is request type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryServiceOperatorsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceOperatorsRequest";
  value: QueryServiceOperatorsRequestAmino;
}
/**
 * QueryServiceOperatorsRequest is request type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsRequestSDKType {
  service_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryServiceOperatorsResponse is response type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsResponse {
  /** Operators is the list of operators */
  operators: Operator[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryServiceOperatorsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceOperatorsResponse is response type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsResponseAmino {
  /** Operators is the list of operators */
  operators?: OperatorAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryServiceOperatorsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceOperatorsResponse";
  value: QueryServiceOperatorsResponseAmino;
}
/**
 * QueryServiceOperatorsResponse is response type for the Query/ServiceOperators
 * RPC method.
 */
export interface QueryServiceOperatorsResponseSDKType {
  operators: OperatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPoolDelegationsRequest is request type for the Query/PoolDelegations RPC
 * method.
 */
export interface QueryPoolDelegationsRequest {
  /** PoolId is the ID of the pool to query. */
  poolId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryPoolDelegationsRequest is request type for the Query/PoolDelegations RPC
 * method.
 */
export interface QueryPoolDelegationsRequestAmino {
  /** PoolId is the ID of the pool to query. */
  pool_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPoolDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolDelegationsRequest";
  value: QueryPoolDelegationsRequestAmino;
}
/**
 * QueryPoolDelegationsRequest is request type for the Query/PoolDelegations RPC
 * method.
 */
export interface QueryPoolDelegationsRequestSDKType {
  pool_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryPoolDelegationsResponse is response type for the Query/PoolDelegations
 * RPC method.
 */
export interface QueryPoolDelegationsResponse {
  /** Delegations is the list of delegations. */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryPoolDelegationsResponse is response type for the Query/PoolDelegations
 * RPC method.
 */
export interface QueryPoolDelegationsResponseAmino {
  /** Delegations is the list of delegations. */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryPoolDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolDelegationsResponse";
  value: QueryPoolDelegationsResponseAmino;
}
/**
 * QueryPoolDelegationsResponse is response type for the Query/PoolDelegations
 * RPC method.
 */
export interface QueryPoolDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPoolDelegationRequest is request type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationRequest {
  /** PoolId is the ID of the pool to query */
  poolId: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
}
export interface QueryPoolDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryPoolDelegationRequest is request type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationRequestAmino {
  /** PoolId is the ID of the pool to query */
  pool_id?: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
}
export interface QueryPoolDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolDelegationRequest";
  value: QueryPoolDelegationRequestAmino;
}
/**
 * QueryPoolDelegationRequest is request type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationRequestSDKType {
  pool_id: number;
  delegator_address: string;
}
/**
 * QueryPoolDelegationResponse is response type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationResponse {
  /** Delegation is the delegation */
  delegation: DelegationResponse;
}
export interface QueryPoolDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryPoolDelegationResponse is response type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationResponseAmino {
  /** Delegation is the delegation */
  delegation?: DelegationResponseAmino;
}
export interface QueryPoolDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolDelegationResponse";
  value: QueryPoolDelegationResponseAmino;
}
/**
 * QueryPoolDelegationResponse is response type for the Query/PoolDelegation RPC
 * method.
 */
export interface QueryPoolDelegationResponseSDKType {
  delegation: DelegationResponseSDKType;
}
/**
 * QueryPoolUnbondingDelegationsRequest is request type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsRequest {
  poolId: number;
  pagination?: PageRequest;
}
export interface QueryPoolUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryPoolUnbondingDelegationsRequest is request type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsRequestAmino {
  pool_id?: number;
  pagination?: PageRequestAmino;
}
export interface QueryPoolUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsRequest";
  value: QueryPoolUnbondingDelegationsRequestAmino;
}
/**
 * QueryPoolUnbondingDelegationsRequest is request type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsRequestSDKType {
  pool_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryPoolUnbondingDelegationsResponse is response type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsResponse {
  unbondingDelegations: UnbondingDelegation[];
  pagination?: PageResponse;
}
export interface QueryPoolUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryPoolUnbondingDelegationsResponse is response type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsResponseAmino {
  unbonding_delegations?: UnbondingDelegationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPoolUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsResponse";
  value: QueryPoolUnbondingDelegationsResponseAmino;
}
/**
 * QueryPoolUnbondingDelegationsResponse is response type for the
 * Query/PoolUnbondingDelegations RPC method.
 */
export interface QueryPoolUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryPoolUnbondingDelegationRequest is request type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationRequest {
  poolId: number;
  delegatorAddress: string;
}
export interface QueryPoolUnbondingDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryPoolUnbondingDelegationRequest is request type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationRequestAmino {
  pool_id?: number;
  delegator_address?: string;
}
export interface QueryPoolUnbondingDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationRequest";
  value: QueryPoolUnbondingDelegationRequestAmino;
}
/**
 * QueryPoolUnbondingDelegationRequest is request type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationRequestSDKType {
  pool_id: number;
  delegator_address: string;
}
/**
 * QueryPoolUnbondingDelegationResponse is response type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationResponse {
  unbondingDelegation: UnbondingDelegation;
}
export interface QueryPoolUnbondingDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryPoolUnbondingDelegationResponse is response type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationResponseAmino {
  unbonding_delegation?: UnbondingDelegationAmino;
}
export interface QueryPoolUnbondingDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationResponse";
  value: QueryPoolUnbondingDelegationResponseAmino;
}
/**
 * QueryPoolUnbondingDelegationResponse is response type for the
 * Query/PoolUnbondingDelegation RPC method.
 */
export interface QueryPoolUnbondingDelegationResponseSDKType {
  unbonding_delegation: UnbondingDelegationSDKType;
}
/**
 * QueryOperatorDelegationsRequest is request type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryOperatorDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorDelegationsRequest is request type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryOperatorDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorDelegationsRequest";
  value: QueryOperatorDelegationsRequestAmino;
}
/**
 * QueryOperatorDelegationsRequest is request type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsRequestSDKType {
  operator_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryOperatorDelegationsResponse is response type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsResponse {
  /** Delegations is the list of delegations */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryOperatorDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorDelegationsResponse is response type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsResponseAmino {
  /** Delegations is the list of delegations */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryOperatorDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorDelegationsResponse";
  value: QueryOperatorDelegationsResponseAmino;
}
/**
 * QueryOperatorDelegationsResponse is response type for the
 * Query/OperatorDelegations RPC method.
 */
export interface QueryOperatorDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryOperatorDelegationRequest is request type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
}
export interface QueryOperatorDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorDelegationRequest is request type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
}
export interface QueryOperatorDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorDelegationRequest";
  value: QueryOperatorDelegationRequestAmino;
}
/**
 * QueryOperatorDelegationRequest is request type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationRequestSDKType {
  operator_id: number;
  delegator_address: string;
}
/**
 * QueryOperatorDelegationResponse is response type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationResponse {
  /** Delegation is the delegation */
  delegation: DelegationResponse;
}
export interface QueryOperatorDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorDelegationResponse is response type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationResponseAmino {
  /** Delegation is the delegation */
  delegation?: DelegationResponseAmino;
}
export interface QueryOperatorDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorDelegationResponse";
  value: QueryOperatorDelegationResponseAmino;
}
/**
 * QueryOperatorDelegationResponse is response type for the
 * Query/OperatorDelegation RPC method.
 */
export interface QueryOperatorDelegationResponseSDKType {
  delegation: DelegationResponseSDKType;
}
/**
 * QueryOperatorUnbondingDelegationsRequest is request type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryOperatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorUnbondingDelegationsRequest is request type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryOperatorUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsRequest";
  value: QueryOperatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryOperatorUnbondingDelegationsRequest is request type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsRequestSDKType {
  operator_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryOperatorUnbondingDelegationsResponse is response type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsResponse {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbondingDelegations: UnbondingDelegation[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryOperatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorUnbondingDelegationsResponse is response type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsResponseAmino {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryOperatorUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsResponse";
  value: QueryOperatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryOperatorUnbondingDelegationsResponse is response type for the
 * Query/OperatorUnbondingDelegations RPC method.
 */
export interface QueryOperatorUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryOperatorUnbondingDelegationRequest is request type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
}
export interface QueryOperatorUnbondingDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorUnbondingDelegationRequest is request type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
}
export interface QueryOperatorUnbondingDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationRequest";
  value: QueryOperatorUnbondingDelegationRequestAmino;
}
/**
 * QueryOperatorUnbondingDelegationRequest is request type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationRequestSDKType {
  operator_id: number;
  delegator_address: string;
}
/**
 * QueryOperatorUnbondingDelegationResponse is response type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationResponse {
  /** UnbondingDelegation is the unbonding delegation */
  unbondingDelegation: UnbondingDelegation;
}
export interface QueryOperatorUnbondingDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorUnbondingDelegationResponse is response type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationResponseAmino {
  /** UnbondingDelegation is the unbonding delegation */
  unbonding_delegation?: UnbondingDelegationAmino;
}
export interface QueryOperatorUnbondingDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationResponse";
  value: QueryOperatorUnbondingDelegationResponseAmino;
}
/**
 * QueryOperatorUnbondingDelegationResponse is response type for the
 * Query/OperatorUnbondingDelegation RPC method.
 */
export interface QueryOperatorUnbondingDelegationResponseSDKType {
  unbonding_delegation: UnbondingDelegationSDKType;
}
/**
 * QueryServiceDelegationsRequest is request type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryServiceDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceDelegationsRequest is request type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryServiceDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceDelegationsRequest";
  value: QueryServiceDelegationsRequestAmino;
}
/**
 * QueryServiceDelegationsRequest is request type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsRequestSDKType {
  service_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryServiceDelegationsResponse is response type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsResponse {
  /** Delegations is the list of delegations */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryServiceDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceDelegationsResponse is response type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsResponseAmino {
  /** Delegations is the list of delegations */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryServiceDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceDelegationsResponse";
  value: QueryServiceDelegationsResponseAmino;
}
/**
 * QueryServiceDelegationsResponse is response type for the
 * Query/ServiceDelegations RPC method.
 */
export interface QueryServiceDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryServiceDelegationRequest is request type for the Query/ServiceDelegation
 * RPC method.
 */
export interface QueryServiceDelegationRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
}
export interface QueryServiceDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryServiceDelegationRequest is request type for the Query/ServiceDelegation
 * RPC method.
 */
export interface QueryServiceDelegationRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
}
export interface QueryServiceDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceDelegationRequest";
  value: QueryServiceDelegationRequestAmino;
}
/**
 * QueryServiceDelegationRequest is request type for the Query/ServiceDelegation
 * RPC method.
 */
export interface QueryServiceDelegationRequestSDKType {
  service_id: number;
  delegator_address: string;
}
/**
 * QueryServiceDelegationResponse is response type for the
 * Query/ServiceDelegation RPC method.
 */
export interface QueryServiceDelegationResponse {
  /** Delegation is the delegation */
  delegation: DelegationResponse;
}
export interface QueryServiceDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryServiceDelegationResponse is response type for the
 * Query/ServiceDelegation RPC method.
 */
export interface QueryServiceDelegationResponseAmino {
  /** Delegation is the delegation */
  delegation?: DelegationResponseAmino;
}
export interface QueryServiceDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceDelegationResponse";
  value: QueryServiceDelegationResponseAmino;
}
/**
 * QueryServiceDelegationResponse is response type for the
 * Query/ServiceDelegation RPC method.
 */
export interface QueryServiceDelegationResponseSDKType {
  delegation: DelegationResponseSDKType;
}
/**
 * QueryServiceUnbondingDelegationsRequest is request type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryServiceUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceUnbondingDelegationsRequest is request type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryServiceUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsRequest";
  value: QueryServiceUnbondingDelegationsRequestAmino;
}
/**
 * QueryServiceUnbondingDelegationsRequest is request type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsRequestSDKType {
  service_id: number;
  pagination?: PageRequestSDKType;
}
/**
 * QueryServiceUnbondingDelegationsResponse is response type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsResponse {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbondingDelegations: UnbondingDelegation[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryServiceUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceUnbondingDelegationsResponse is response type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsResponseAmino {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryServiceUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsResponse";
  value: QueryServiceUnbondingDelegationsResponseAmino;
}
/**
 * QueryServiceUnbondingDelegationsResponse is response type for the
 * Query/ServiceUnbondingDelegations RPC method.
 */
export interface QueryServiceUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryServiceUnbondingDelegationRequest is request type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationRequest {
  /** ServiceId is the ID of the service to query */
  serviceId: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
}
export interface QueryServiceUnbondingDelegationRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryServiceUnbondingDelegationRequest is request type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationRequestAmino {
  /** ServiceId is the ID of the service to query */
  service_id?: number;
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
}
export interface QueryServiceUnbondingDelegationRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationRequest";
  value: QueryServiceUnbondingDelegationRequestAmino;
}
/**
 * QueryServiceUnbondingDelegationRequest is request type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationRequestSDKType {
  service_id: number;
  delegator_address: string;
}
/**
 * QueryServiceUnbondingDelegationResponse is response type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationResponse {
  /** UnbondingDelegation is the unbonding delegation */
  unbondingDelegation: UnbondingDelegation;
}
export interface QueryServiceUnbondingDelegationResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryServiceUnbondingDelegationResponse is response type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationResponseAmino {
  /** UnbondingDelegation is the unbonding delegation */
  unbonding_delegation?: UnbondingDelegationAmino;
}
export interface QueryServiceUnbondingDelegationResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationResponse";
  value: QueryServiceUnbondingDelegationResponseAmino;
}
/**
 * QueryServiceUnbondingDelegationResponse is response type for the
 * Query/ServiceUnbondingDelegation RPC method.
 */
export interface QueryServiceUnbondingDelegationResponseSDKType {
  unbonding_delegation: UnbondingDelegationSDKType;
}
/**
 * QueryDelegatorPoolDelegationsRequest is request type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorPoolDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolDelegationsRequest is request type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorPoolDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsRequest";
  value: QueryDelegatorPoolDelegationsRequestAmino;
}
/**
 * QueryDelegatorPoolDelegationsRequest is request type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorPoolDelegationsResponse is response type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsResponse {
  /** Delegations is the list of delegations */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorPoolDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolDelegationsResponse is response type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsResponseAmino {
  /** Delegations is the list of delegations */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorPoolDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsResponse";
  value: QueryDelegatorPoolDelegationsResponseAmino;
}
/**
 * QueryDelegatorPoolDelegationsResponse is response type for the
 * Query/DelegatorPoolDelegations RPC method.
 */
export interface QueryDelegatorPoolDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsRequest is request type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsRequest is request type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorPoolUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsRequest";
  value: QueryDelegatorPoolUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsRequest is request type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsResponse is response type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsResponse {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbondingDelegations: UnbondingDelegation[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsResponse is response type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsResponseAmino {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorPoolUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsResponse";
  value: QueryDelegatorPoolUnbondingDelegationsResponseAmino;
}
/**
 * QueryDelegatorPoolUnbondingDelegationsResponse is response type for the
 * Query/DelegatorPoolUnbondingDelegations RPC method.
 */
export interface QueryDelegatorPoolUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorOperatorDelegationsRequest is request type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorOperatorDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorDelegationsRequest is request type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorOperatorDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsRequest";
  value: QueryDelegatorOperatorDelegationsRequestAmino;
}
/**
 * QueryDelegatorOperatorDelegationsRequest is request type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorOperatorDelegationsResponse is response type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsResponse {
  /** Delegations is the list of delegations */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorOperatorDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorDelegationsResponse is response type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsResponseAmino {
  /** Delegations is the list of delegations */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorOperatorDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsResponse";
  value: QueryDelegatorOperatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorOperatorDelegationsResponse is response type for the
 * Query/DelegatorOperatorDelegations RPC method.
 */
export interface QueryDelegatorOperatorDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorOperatorUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsRequest";
  value: QueryDelegatorOperatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsResponse is response type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsResponse {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbondingDelegations: UnbondingDelegation[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsResponse is response type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsResponseAmino {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorOperatorUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsResponse";
  value: QueryDelegatorOperatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryDelegatorOperatorUnbondingDelegationsResponse is response type for the
 * Query/DelegatorOperatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorOperatorUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorServiceDelegationsRequest is request type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorServiceDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceDelegationsRequest is request type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorServiceDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsRequest";
  value: QueryDelegatorServiceDelegationsRequestAmino;
}
/**
 * QueryDelegatorServiceDelegationsRequest is request type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorServiceDelegationsResponse is response type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsResponse {
  /** Delegations is the list of delegations */
  delegations: DelegationResponse[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorServiceDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceDelegationsResponse is response type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsResponseAmino {
  /** Delegations is the list of delegations */
  delegations?: DelegationResponseAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorServiceDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsResponse";
  value: QueryDelegatorServiceDelegationsResponseAmino;
}
/**
 * QueryDelegatorServiceDelegationsResponse is response type for the
 * Query/DelegatorServiceDelegations RPC method.
 */
export interface QueryDelegatorServiceDelegationsResponseSDKType {
  delegations: DelegationResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsRequest is request type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsRequest is request type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorServiceUnbondingDelegationsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsRequest";
  value: QueryDelegatorServiceUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsRequest is request type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsResponse is response type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsResponse {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbondingDelegations: UnbondingDelegation[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsResponse is response type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsResponseAmino {
  /** UnbondingDelegations is the list of unbonding delegations */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorServiceUnbondingDelegationsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsResponse";
  value: QueryDelegatorServiceUnbondingDelegationsResponseAmino;
}
/**
 * QueryDelegatorServiceUnbondingDelegationsResponse is response type for the
 * Query/DelegatorServiceUnbondingDelegations RPC method.
 */
export interface QueryDelegatorServiceUnbondingDelegationsResponseSDKType {
  unbonding_delegations: UnbondingDelegationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorPoolsRequest is request type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorPoolsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolsRequest is request type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorPoolsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolsRequest";
  value: QueryDelegatorPoolsRequestAmino;
}
/**
 * QueryDelegatorPoolsRequest is request type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorPoolsResponse is response type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsResponse {
  /** Pools is the list of pools */
  pools: Pool[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorPoolsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolsResponse is response type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsResponseAmino {
  /** Pools is the list of pools */
  pools?: PoolAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorPoolsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolsResponse";
  value: QueryDelegatorPoolsResponseAmino;
}
/**
 * QueryDelegatorPoolsResponse is response type for the Query/DelegatorPools RPC
 * method.
 */
export interface QueryDelegatorPoolsResponseSDKType {
  pools: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorPoolRequest is request type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** PoolId is the ID of the pool to query */
  poolId: number;
}
export interface QueryDelegatorPoolRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolRequest is request type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** PoolId is the ID of the pool to query */
  pool_id?: number;
}
export interface QueryDelegatorPoolRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolRequest";
  value: QueryDelegatorPoolRequestAmino;
}
/**
 * QueryDelegatorPoolRequest is request type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolRequestSDKType {
  delegator_address: string;
  pool_id: number;
}
/**
 * QueryDelegatorPoolResponse is response type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolResponse {
  /** Pool is the pool */
  pool: Pool;
}
export interface QueryDelegatorPoolResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorPoolResponse is response type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolResponseAmino {
  /** Pool is the pool */
  pool?: PoolAmino;
}
export interface QueryDelegatorPoolResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorPoolResponse";
  value: QueryDelegatorPoolResponseAmino;
}
/**
 * QueryDelegatorPoolResponse is response type for the Query/DelegatorPool RPC
 * method.
 */
export interface QueryDelegatorPoolResponseSDKType {
  pool: PoolSDKType;
}
/**
 * QueryDelegatorOperatorsRequest is request type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorOperatorsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorsRequest is request type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorOperatorsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorsRequest";
  value: QueryDelegatorOperatorsRequestAmino;
}
/**
 * QueryDelegatorOperatorsRequest is request type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorOperatorsResponse is response type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsResponse {
  /** Operators is the list of operators */
  operators: Operator[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorOperatorsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorsResponse is response type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsResponseAmino {
  /** Operators is the list of operators */
  operators?: OperatorAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorOperatorsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorsResponse";
  value: QueryDelegatorOperatorsResponseAmino;
}
/**
 * QueryDelegatorOperatorsResponse is response type for the
 * Query/DelegatorOperators RPC method.
 */
export interface QueryDelegatorOperatorsResponseSDKType {
  operators: OperatorSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorOperatorRequest is request type for the Query/DelegatorOperator
 * RPC method.
 */
export interface QueryDelegatorOperatorRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
}
export interface QueryDelegatorOperatorRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorRequest is request type for the Query/DelegatorOperator
 * RPC method.
 */
export interface QueryDelegatorOperatorRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
}
export interface QueryDelegatorOperatorRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorRequest";
  value: QueryDelegatorOperatorRequestAmino;
}
/**
 * QueryDelegatorOperatorRequest is request type for the Query/DelegatorOperator
 * RPC method.
 */
export interface QueryDelegatorOperatorRequestSDKType {
  delegator_address: string;
  operator_id: number;
}
/**
 * QueryDelegatorOperatorResponse is response type for the
 * Query/DelegatorOperator RPC method.
 */
export interface QueryDelegatorOperatorResponse {
  /** Operator is the operator */
  operator: Operator;
}
export interface QueryDelegatorOperatorResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorOperatorResponse is response type for the
 * Query/DelegatorOperator RPC method.
 */
export interface QueryDelegatorOperatorResponseAmino {
  /** Operator is the operator */
  operator?: OperatorAmino;
}
export interface QueryDelegatorOperatorResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorOperatorResponse";
  value: QueryDelegatorOperatorResponseAmino;
}
/**
 * QueryDelegatorOperatorResponse is response type for the
 * Query/DelegatorOperator RPC method.
 */
export interface QueryDelegatorOperatorResponseSDKType {
  operator: OperatorSDKType;
}
/**
 * QueryDelegatorServicesRequest is request type for the Query/DelegatorServices
 * RPC method.
 */
export interface QueryDelegatorServicesRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDelegatorServicesRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorServicesRequest is request type for the Query/DelegatorServices
 * RPC method.
 */
export interface QueryDelegatorServicesRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDelegatorServicesRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServicesRequest";
  value: QueryDelegatorServicesRequestAmino;
}
/**
 * QueryDelegatorServicesRequest is request type for the Query/DelegatorServices
 * RPC method.
 */
export interface QueryDelegatorServicesRequestSDKType {
  delegator_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDelegatorServicesResponse is response type for the
 * Query/DelegatorServices RPC method.
 */
export interface QueryDelegatorServicesResponse {
  /** Services is the list of services */
  services: Service[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDelegatorServicesResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorServicesResponse is response type for the
 * Query/DelegatorServices RPC method.
 */
export interface QueryDelegatorServicesResponseAmino {
  /** Services is the list of services */
  services?: ServiceAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDelegatorServicesResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServicesResponse";
  value: QueryDelegatorServicesResponseAmino;
}
/**
 * QueryDelegatorServicesResponse is response type for the
 * Query/DelegatorServices RPC method.
 */
export interface QueryDelegatorServicesResponseSDKType {
  services: ServiceSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDelegatorServiceRequest is request type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceRequest {
  /** DelegatorAddress is the address of the delegator to query */
  delegatorAddress: string;
  /** ServiceId is the ID of the service to query */
  serviceId: number;
}
export interface QueryDelegatorServiceRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceRequest is request type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceRequestAmino {
  /** DelegatorAddress is the address of the delegator to query */
  delegator_address?: string;
  /** ServiceId is the ID of the service to query */
  service_id?: number;
}
export interface QueryDelegatorServiceRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceRequest";
  value: QueryDelegatorServiceRequestAmino;
}
/**
 * QueryDelegatorServiceRequest is request type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceRequestSDKType {
  delegator_address: string;
  service_id: number;
}
/**
 * QueryDelegatorServiceResponse is response type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceResponse {
  /** Service is the service */
  service: Service;
}
export interface QueryDelegatorServiceResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorServiceResponse is response type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceResponseAmino {
  /** Service is the service */
  service?: ServiceAmino;
}
export interface QueryDelegatorServiceResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryDelegatorServiceResponse";
  value: QueryDelegatorServiceResponseAmino;
}
/**
 * QueryDelegatorServiceResponse is response type for the Query/DelegatorService
 * RPC method.
 */
export interface QueryDelegatorServiceResponseSDKType {
  service: ServiceSDKType;
}
/**
 * QueryUserPreferences is request type for the Query/UserPreferences RPC
 * method.
 */
export interface QueryUserPreferencesRequest {
  /** UserAddress is the address of the user to query the preferences for */
  userAddress: string;
}
export interface QueryUserPreferencesRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesRequest";
  value: Uint8Array;
}
/**
 * QueryUserPreferences is request type for the Query/UserPreferences RPC
 * method.
 */
export interface QueryUserPreferencesRequestAmino {
  /** UserAddress is the address of the user to query the preferences for */
  user_address?: string;
}
export interface QueryUserPreferencesRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryUserPreferencesRequest";
  value: QueryUserPreferencesRequestAmino;
}
/**
 * QueryUserPreferences is request type for the Query/UserPreferences RPC
 * method.
 */
export interface QueryUserPreferencesRequestSDKType {
  user_address: string;
}
/**
 * QueryUserPreferencesResponse is response type for the Query/UserPreferences
 * RPC method.
 */
export interface QueryUserPreferencesResponse {
  /** Preferences is the user preferences */
  preferences: UserPreferences;
}
export interface QueryUserPreferencesResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesResponse";
  value: Uint8Array;
}
/**
 * QueryUserPreferencesResponse is response type for the Query/UserPreferences
 * RPC method.
 */
export interface QueryUserPreferencesResponseAmino {
  /** Preferences is the user preferences */
  preferences?: UserPreferencesAmino;
}
export interface QueryUserPreferencesResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryUserPreferencesResponse";
  value: QueryUserPreferencesResponseAmino;
}
/**
 * QueryUserPreferencesResponse is response type for the Query/UserPreferences
 * RPC method.
 */
export interface QueryUserPreferencesResponseSDKType {
  preferences: UserPreferencesSDKType;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/milkyway.restaking.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/milkyway.restaking.v1.QueryParamsRequest";
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
  typeUrl: "/milkyway.restaking.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/milkyway.restaking.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryOperatorJoinedServicesRequest(): QueryOperatorJoinedServicesRequest {
  return {
    operatorId: 0,
    pagination: undefined
  };
}
export const QueryOperatorJoinedServicesRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesRequest",
  encode(message: QueryOperatorJoinedServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorJoinedServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorJoinedServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorJoinedServicesRequest>): QueryOperatorJoinedServicesRequest {
    const message = createBaseQueryOperatorJoinedServicesRequest();
    message.operatorId = object.operatorId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorJoinedServicesRequestAmino): QueryOperatorJoinedServicesRequest {
    const message = createBaseQueryOperatorJoinedServicesRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorJoinedServicesRequest): QueryOperatorJoinedServicesRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorJoinedServicesRequestAminoMsg): QueryOperatorJoinedServicesRequest {
    return QueryOperatorJoinedServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorJoinedServicesRequestProtoMsg): QueryOperatorJoinedServicesRequest {
    return QueryOperatorJoinedServicesRequest.decode(message.value);
  },
  toProto(message: QueryOperatorJoinedServicesRequest): Uint8Array {
    return QueryOperatorJoinedServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorJoinedServicesRequest): QueryOperatorJoinedServicesRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesRequest",
      value: QueryOperatorJoinedServicesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorJoinedServicesResponse(): QueryOperatorJoinedServicesResponse {
  return {
    serviceIds: [],
    pagination: undefined
  };
}
export const QueryOperatorJoinedServicesResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesResponse",
  encode(message: QueryOperatorJoinedServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.serviceIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorJoinedServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorJoinedServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceIds.push(reader.uint32());
            }
          } else {
            message.serviceIds.push(reader.uint32());
          }
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
  fromPartial(object: Partial<QueryOperatorJoinedServicesResponse>): QueryOperatorJoinedServicesResponse {
    const message = createBaseQueryOperatorJoinedServicesResponse();
    message.serviceIds = object.serviceIds?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorJoinedServicesResponseAmino): QueryOperatorJoinedServicesResponse {
    const message = createBaseQueryOperatorJoinedServicesResponse();
    message.serviceIds = object.service_ids?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorJoinedServicesResponse): QueryOperatorJoinedServicesResponseAmino {
    const obj: any = {};
    if (message.serviceIds) {
      obj.service_ids = message.serviceIds.map(e => e);
    } else {
      obj.service_ids = message.serviceIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorJoinedServicesResponseAminoMsg): QueryOperatorJoinedServicesResponse {
    return QueryOperatorJoinedServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorJoinedServicesResponseProtoMsg): QueryOperatorJoinedServicesResponse {
    return QueryOperatorJoinedServicesResponse.decode(message.value);
  },
  toProto(message: QueryOperatorJoinedServicesResponse): Uint8Array {
    return QueryOperatorJoinedServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorJoinedServicesResponse): QueryOperatorJoinedServicesResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorJoinedServicesResponse",
      value: QueryOperatorJoinedServicesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceAllowedOperatorsRequest(): QueryServiceAllowedOperatorsRequest {
  return {
    serviceId: 0,
    pagination: undefined
  };
}
export const QueryServiceAllowedOperatorsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsRequest",
  encode(message: QueryServiceAllowedOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceAllowedOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceAllowedOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceAllowedOperatorsRequest>): QueryServiceAllowedOperatorsRequest {
    const message = createBaseQueryServiceAllowedOperatorsRequest();
    message.serviceId = object.serviceId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceAllowedOperatorsRequestAmino): QueryServiceAllowedOperatorsRequest {
    const message = createBaseQueryServiceAllowedOperatorsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceAllowedOperatorsRequest): QueryServiceAllowedOperatorsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceAllowedOperatorsRequestAminoMsg): QueryServiceAllowedOperatorsRequest {
    return QueryServiceAllowedOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceAllowedOperatorsRequestProtoMsg): QueryServiceAllowedOperatorsRequest {
    return QueryServiceAllowedOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryServiceAllowedOperatorsRequest): Uint8Array {
    return QueryServiceAllowedOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceAllowedOperatorsRequest): QueryServiceAllowedOperatorsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsRequest",
      value: QueryServiceAllowedOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceAllowedOperatorsResponse(): QueryServiceAllowedOperatorsResponse {
  return {
    operatorIds: [],
    pagination: undefined
  };
}
export const QueryServiceAllowedOperatorsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsResponse",
  encode(message: QueryServiceAllowedOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.operatorIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceAllowedOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceAllowedOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operatorIds.push(reader.uint32());
            }
          } else {
            message.operatorIds.push(reader.uint32());
          }
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
  fromPartial(object: Partial<QueryServiceAllowedOperatorsResponse>): QueryServiceAllowedOperatorsResponse {
    const message = createBaseQueryServiceAllowedOperatorsResponse();
    message.operatorIds = object.operatorIds?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceAllowedOperatorsResponseAmino): QueryServiceAllowedOperatorsResponse {
    const message = createBaseQueryServiceAllowedOperatorsResponse();
    message.operatorIds = object.operator_ids?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceAllowedOperatorsResponse): QueryServiceAllowedOperatorsResponseAmino {
    const obj: any = {};
    if (message.operatorIds) {
      obj.operator_ids = message.operatorIds.map(e => e);
    } else {
      obj.operator_ids = message.operatorIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceAllowedOperatorsResponseAminoMsg): QueryServiceAllowedOperatorsResponse {
    return QueryServiceAllowedOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceAllowedOperatorsResponseProtoMsg): QueryServiceAllowedOperatorsResponse {
    return QueryServiceAllowedOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryServiceAllowedOperatorsResponse): Uint8Array {
    return QueryServiceAllowedOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceAllowedOperatorsResponse): QueryServiceAllowedOperatorsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceAllowedOperatorsResponse",
      value: QueryServiceAllowedOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceSecuringPoolsRequest(): QueryServiceSecuringPoolsRequest {
  return {
    serviceId: 0,
    pagination: undefined
  };
}
export const QueryServiceSecuringPoolsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsRequest",
  encode(message: QueryServiceSecuringPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceSecuringPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceSecuringPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceSecuringPoolsRequest>): QueryServiceSecuringPoolsRequest {
    const message = createBaseQueryServiceSecuringPoolsRequest();
    message.serviceId = object.serviceId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceSecuringPoolsRequestAmino): QueryServiceSecuringPoolsRequest {
    const message = createBaseQueryServiceSecuringPoolsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceSecuringPoolsRequest): QueryServiceSecuringPoolsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceSecuringPoolsRequestAminoMsg): QueryServiceSecuringPoolsRequest {
    return QueryServiceSecuringPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceSecuringPoolsRequestProtoMsg): QueryServiceSecuringPoolsRequest {
    return QueryServiceSecuringPoolsRequest.decode(message.value);
  },
  toProto(message: QueryServiceSecuringPoolsRequest): Uint8Array {
    return QueryServiceSecuringPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceSecuringPoolsRequest): QueryServiceSecuringPoolsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsRequest",
      value: QueryServiceSecuringPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceSecuringPoolsResponse(): QueryServiceSecuringPoolsResponse {
  return {
    poolIds: [],
    pagination: undefined
  };
}
export const QueryServiceSecuringPoolsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsResponse",
  encode(message: QueryServiceSecuringPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceSecuringPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceSecuringPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint32());
            }
          } else {
            message.poolIds.push(reader.uint32());
          }
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
  fromPartial(object: Partial<QueryServiceSecuringPoolsResponse>): QueryServiceSecuringPoolsResponse {
    const message = createBaseQueryServiceSecuringPoolsResponse();
    message.poolIds = object.poolIds?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceSecuringPoolsResponseAmino): QueryServiceSecuringPoolsResponse {
    const message = createBaseQueryServiceSecuringPoolsResponse();
    message.poolIds = object.pool_ids?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceSecuringPoolsResponse): QueryServiceSecuringPoolsResponseAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = message.poolIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceSecuringPoolsResponseAminoMsg): QueryServiceSecuringPoolsResponse {
    return QueryServiceSecuringPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceSecuringPoolsResponseProtoMsg): QueryServiceSecuringPoolsResponse {
    return QueryServiceSecuringPoolsResponse.decode(message.value);
  },
  toProto(message: QueryServiceSecuringPoolsResponse): Uint8Array {
    return QueryServiceSecuringPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceSecuringPoolsResponse): QueryServiceSecuringPoolsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceSecuringPoolsResponse",
      value: QueryServiceSecuringPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceOperatorsRequest(): QueryServiceOperatorsRequest {
  return {
    serviceId: 0,
    pagination: undefined
  };
}
export const QueryServiceOperatorsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsRequest",
  encode(message: QueryServiceOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceOperatorsRequest>): QueryServiceOperatorsRequest {
    const message = createBaseQueryServiceOperatorsRequest();
    message.serviceId = object.serviceId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceOperatorsRequestAmino): QueryServiceOperatorsRequest {
    const message = createBaseQueryServiceOperatorsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceOperatorsRequest): QueryServiceOperatorsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceOperatorsRequestAminoMsg): QueryServiceOperatorsRequest {
    return QueryServiceOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceOperatorsRequestProtoMsg): QueryServiceOperatorsRequest {
    return QueryServiceOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryServiceOperatorsRequest): Uint8Array {
    return QueryServiceOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceOperatorsRequest): QueryServiceOperatorsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsRequest",
      value: QueryServiceOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceOperatorsResponse(): QueryServiceOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
export const QueryServiceOperatorsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsResponse",
  encode(message: QueryServiceOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryServiceOperatorsResponse>): QueryServiceOperatorsResponse {
    const message = createBaseQueryServiceOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceOperatorsResponseAmino): QueryServiceOperatorsResponse {
    const message = createBaseQueryServiceOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceOperatorsResponse): QueryServiceOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceOperatorsResponseAminoMsg): QueryServiceOperatorsResponse {
    return QueryServiceOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceOperatorsResponseProtoMsg): QueryServiceOperatorsResponse {
    return QueryServiceOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryServiceOperatorsResponse): Uint8Array {
    return QueryServiceOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceOperatorsResponse): QueryServiceOperatorsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceOperatorsResponse",
      value: QueryServiceOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationsRequest(): QueryPoolDelegationsRequest {
  return {
    poolId: 0,
    pagination: undefined
  };
}
export const QueryPoolDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsRequest",
  encode(message: QueryPoolDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDelegationsRequest>): QueryPoolDelegationsRequest {
    const message = createBaseQueryPoolDelegationsRequest();
    message.poolId = object.poolId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDelegationsRequestAmino): QueryPoolDelegationsRequest {
    const message = createBaseQueryPoolDelegationsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolDelegationsRequest): QueryPoolDelegationsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationsRequestAminoMsg): QueryPoolDelegationsRequest {
    return QueryPoolDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationsRequestProtoMsg): QueryPoolDelegationsRequest {
    return QueryPoolDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryPoolDelegationsRequest): Uint8Array {
    return QueryPoolDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationsRequest): QueryPoolDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsRequest",
      value: QueryPoolDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationsResponse(): QueryPoolDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryPoolDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsResponse",
  encode(message: QueryPoolDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryPoolDelegationsResponse>): QueryPoolDelegationsResponse {
    const message = createBaseQueryPoolDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDelegationsResponseAmino): QueryPoolDelegationsResponse {
    const message = createBaseQueryPoolDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolDelegationsResponse): QueryPoolDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationsResponseAminoMsg): QueryPoolDelegationsResponse {
    return QueryPoolDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationsResponseProtoMsg): QueryPoolDelegationsResponse {
    return QueryPoolDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryPoolDelegationsResponse): Uint8Array {
    return QueryPoolDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationsResponse): QueryPoolDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationsResponse",
      value: QueryPoolDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationRequest(): QueryPoolDelegationRequest {
  return {
    poolId: 0,
    delegatorAddress: ""
  };
}
export const QueryPoolDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationRequest",
  encode(message: QueryPoolDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDelegationRequest>): QueryPoolDelegationRequest {
    const message = createBaseQueryPoolDelegationRequest();
    message.poolId = object.poolId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPoolDelegationRequestAmino): QueryPoolDelegationRequest {
    const message = createBaseQueryPoolDelegationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryPoolDelegationRequest): QueryPoolDelegationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationRequestAminoMsg): QueryPoolDelegationRequest {
    return QueryPoolDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationRequestProtoMsg): QueryPoolDelegationRequest {
    return QueryPoolDelegationRequest.decode(message.value);
  },
  toProto(message: QueryPoolDelegationRequest): Uint8Array {
    return QueryPoolDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationRequest): QueryPoolDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationRequest",
      value: QueryPoolDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolDelegationResponse(): QueryPoolDelegationResponse {
  return {
    delegation: DelegationResponse.fromPartial({})
  };
}
export const QueryPoolDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationResponse",
  encode(message: QueryPoolDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolDelegationResponse>): QueryPoolDelegationResponse {
    const message = createBaseQueryPoolDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? DelegationResponse.fromPartial(object.delegation) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolDelegationResponseAmino): QueryPoolDelegationResponse {
    const message = createBaseQueryPoolDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromAmino(object.delegation);
    }
    return message;
  },
  toAmino(message: QueryPoolDelegationResponse): QueryPoolDelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? DelegationResponse.toAmino(message.delegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolDelegationResponseAminoMsg): QueryPoolDelegationResponse {
    return QueryPoolDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolDelegationResponseProtoMsg): QueryPoolDelegationResponse {
    return QueryPoolDelegationResponse.decode(message.value);
  },
  toProto(message: QueryPoolDelegationResponse): Uint8Array {
    return QueryPoolDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolDelegationResponse): QueryPoolDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolDelegationResponse",
      value: QueryPoolDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolUnbondingDelegationsRequest(): QueryPoolUnbondingDelegationsRequest {
  return {
    poolId: 0,
    pagination: undefined
  };
}
export const QueryPoolUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsRequest",
  encode(message: QueryPoolUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolUnbondingDelegationsRequest>): QueryPoolUnbondingDelegationsRequest {
    const message = createBaseQueryPoolUnbondingDelegationsRequest();
    message.poolId = object.poolId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolUnbondingDelegationsRequestAmino): QueryPoolUnbondingDelegationsRequest {
    const message = createBaseQueryPoolUnbondingDelegationsRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolUnbondingDelegationsRequest): QueryPoolUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolUnbondingDelegationsRequestAminoMsg): QueryPoolUnbondingDelegationsRequest {
    return QueryPoolUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolUnbondingDelegationsRequestProtoMsg): QueryPoolUnbondingDelegationsRequest {
    return QueryPoolUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryPoolUnbondingDelegationsRequest): Uint8Array {
    return QueryPoolUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolUnbondingDelegationsRequest): QueryPoolUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsRequest",
      value: QueryPoolUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolUnbondingDelegationsResponse(): QueryPoolUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryPoolUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsResponse",
  encode(message: QueryPoolUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryPoolUnbondingDelegationsResponse>): QueryPoolUnbondingDelegationsResponse {
    const message = createBaseQueryPoolUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolUnbondingDelegationsResponseAmino): QueryPoolUnbondingDelegationsResponse {
    const message = createBaseQueryPoolUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolUnbondingDelegationsResponse): QueryPoolUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolUnbondingDelegationsResponseAminoMsg): QueryPoolUnbondingDelegationsResponse {
    return QueryPoolUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolUnbondingDelegationsResponseProtoMsg): QueryPoolUnbondingDelegationsResponse {
    return QueryPoolUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryPoolUnbondingDelegationsResponse): Uint8Array {
    return QueryPoolUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolUnbondingDelegationsResponse): QueryPoolUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationsResponse",
      value: QueryPoolUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolUnbondingDelegationRequest(): QueryPoolUnbondingDelegationRequest {
  return {
    poolId: 0,
    delegatorAddress: ""
  };
}
export const QueryPoolUnbondingDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationRequest",
  encode(message: QueryPoolUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolUnbondingDelegationRequest>): QueryPoolUnbondingDelegationRequest {
    const message = createBaseQueryPoolUnbondingDelegationRequest();
    message.poolId = object.poolId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPoolUnbondingDelegationRequestAmino): QueryPoolUnbondingDelegationRequest {
    const message = createBaseQueryPoolUnbondingDelegationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryPoolUnbondingDelegationRequest): QueryPoolUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPoolUnbondingDelegationRequestAminoMsg): QueryPoolUnbondingDelegationRequest {
    return QueryPoolUnbondingDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolUnbondingDelegationRequestProtoMsg): QueryPoolUnbondingDelegationRequest {
    return QueryPoolUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message: QueryPoolUnbondingDelegationRequest): Uint8Array {
    return QueryPoolUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolUnbondingDelegationRequest): QueryPoolUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationRequest",
      value: QueryPoolUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolUnbondingDelegationResponse(): QueryPoolUnbondingDelegationResponse {
  return {
    unbondingDelegation: UnbondingDelegation.fromPartial({})
  };
}
export const QueryPoolUnbondingDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationResponse",
  encode(message: QueryPoolUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingDelegation !== undefined) {
      UnbondingDelegation.encode(message.unbondingDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegation = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolUnbondingDelegationResponse>): QueryPoolUnbondingDelegationResponse {
    const message = createBaseQueryPoolUnbondingDelegationResponse();
    message.unbondingDelegation = object.unbondingDelegation !== undefined && object.unbondingDelegation !== null ? UnbondingDelegation.fromPartial(object.unbondingDelegation) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolUnbondingDelegationResponseAmino): QueryPoolUnbondingDelegationResponse {
    const message = createBaseQueryPoolUnbondingDelegationResponse();
    if (object.unbonding_delegation !== undefined && object.unbonding_delegation !== null) {
      message.unbondingDelegation = UnbondingDelegation.fromAmino(object.unbonding_delegation);
    }
    return message;
  },
  toAmino(message: QueryPoolUnbondingDelegationResponse): QueryPoolUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbonding_delegation = message.unbondingDelegation ? UnbondingDelegation.toAmino(message.unbondingDelegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolUnbondingDelegationResponseAminoMsg): QueryPoolUnbondingDelegationResponse {
    return QueryPoolUnbondingDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolUnbondingDelegationResponseProtoMsg): QueryPoolUnbondingDelegationResponse {
    return QueryPoolUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: QueryPoolUnbondingDelegationResponse): Uint8Array {
    return QueryPoolUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolUnbondingDelegationResponse): QueryPoolUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryPoolUnbondingDelegationResponse",
      value: QueryPoolUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationsRequest(): QueryOperatorDelegationsRequest {
  return {
    operatorId: 0,
    pagination: undefined
  };
}
export const QueryOperatorDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsRequest",
  encode(message: QueryOperatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorDelegationsRequest>): QueryOperatorDelegationsRequest {
    const message = createBaseQueryOperatorDelegationsRequest();
    message.operatorId = object.operatorId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorDelegationsRequestAmino): QueryOperatorDelegationsRequest {
    const message = createBaseQueryOperatorDelegationsRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorDelegationsRequest): QueryOperatorDelegationsRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationsRequestAminoMsg): QueryOperatorDelegationsRequest {
    return QueryOperatorDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationsRequestProtoMsg): QueryOperatorDelegationsRequest {
    return QueryOperatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationsRequest): Uint8Array {
    return QueryOperatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationsRequest): QueryOperatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsRequest",
      value: QueryOperatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationsResponse(): QueryOperatorDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryOperatorDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsResponse",
  encode(message: QueryOperatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryOperatorDelegationsResponse>): QueryOperatorDelegationsResponse {
    const message = createBaseQueryOperatorDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorDelegationsResponseAmino): QueryOperatorDelegationsResponse {
    const message = createBaseQueryOperatorDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorDelegationsResponse): QueryOperatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationsResponseAminoMsg): QueryOperatorDelegationsResponse {
    return QueryOperatorDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationsResponseProtoMsg): QueryOperatorDelegationsResponse {
    return QueryOperatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationsResponse): Uint8Array {
    return QueryOperatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationsResponse): QueryOperatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationsResponse",
      value: QueryOperatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationRequest(): QueryOperatorDelegationRequest {
  return {
    operatorId: 0,
    delegatorAddress: ""
  };
}
export const QueryOperatorDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationRequest",
  encode(message: QueryOperatorDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorDelegationRequest>): QueryOperatorDelegationRequest {
    const message = createBaseQueryOperatorDelegationRequest();
    message.operatorId = object.operatorId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorDelegationRequestAmino): QueryOperatorDelegationRequest {
    const message = createBaseQueryOperatorDelegationRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryOperatorDelegationRequest): QueryOperatorDelegationRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationRequestAminoMsg): QueryOperatorDelegationRequest {
    return QueryOperatorDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationRequestProtoMsg): QueryOperatorDelegationRequest {
    return QueryOperatorDelegationRequest.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationRequest): Uint8Array {
    return QueryOperatorDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationRequest): QueryOperatorDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationRequest",
      value: QueryOperatorDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorDelegationResponse(): QueryOperatorDelegationResponse {
  return {
    delegation: DelegationResponse.fromPartial({})
  };
}
export const QueryOperatorDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationResponse",
  encode(message: QueryOperatorDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorDelegationResponse>): QueryOperatorDelegationResponse {
    const message = createBaseQueryOperatorDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? DelegationResponse.fromPartial(object.delegation) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorDelegationResponseAmino): QueryOperatorDelegationResponse {
    const message = createBaseQueryOperatorDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromAmino(object.delegation);
    }
    return message;
  },
  toAmino(message: QueryOperatorDelegationResponse): QueryOperatorDelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? DelegationResponse.toAmino(message.delegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorDelegationResponseAminoMsg): QueryOperatorDelegationResponse {
    return QueryOperatorDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorDelegationResponseProtoMsg): QueryOperatorDelegationResponse {
    return QueryOperatorDelegationResponse.decode(message.value);
  },
  toProto(message: QueryOperatorDelegationResponse): Uint8Array {
    return QueryOperatorDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorDelegationResponse): QueryOperatorDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorDelegationResponse",
      value: QueryOperatorDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorUnbondingDelegationsRequest(): QueryOperatorUnbondingDelegationsRequest {
  return {
    operatorId: 0,
    pagination: undefined
  };
}
export const QueryOperatorUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsRequest",
  encode(message: QueryOperatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorUnbondingDelegationsRequest>): QueryOperatorUnbondingDelegationsRequest {
    const message = createBaseQueryOperatorUnbondingDelegationsRequest();
    message.operatorId = object.operatorId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorUnbondingDelegationsRequestAmino): QueryOperatorUnbondingDelegationsRequest {
    const message = createBaseQueryOperatorUnbondingDelegationsRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorUnbondingDelegationsRequest): QueryOperatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorUnbondingDelegationsRequestAminoMsg): QueryOperatorUnbondingDelegationsRequest {
    return QueryOperatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorUnbondingDelegationsRequestProtoMsg): QueryOperatorUnbondingDelegationsRequest {
    return QueryOperatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorUnbondingDelegationsRequest): Uint8Array {
    return QueryOperatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorUnbondingDelegationsRequest): QueryOperatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsRequest",
      value: QueryOperatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorUnbondingDelegationsResponse(): QueryOperatorUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryOperatorUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsResponse",
  encode(message: QueryOperatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryOperatorUnbondingDelegationsResponse>): QueryOperatorUnbondingDelegationsResponse {
    const message = createBaseQueryOperatorUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorUnbondingDelegationsResponseAmino): QueryOperatorUnbondingDelegationsResponse {
    const message = createBaseQueryOperatorUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorUnbondingDelegationsResponse): QueryOperatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorUnbondingDelegationsResponseAminoMsg): QueryOperatorUnbondingDelegationsResponse {
    return QueryOperatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorUnbondingDelegationsResponseProtoMsg): QueryOperatorUnbondingDelegationsResponse {
    return QueryOperatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorUnbondingDelegationsResponse): Uint8Array {
    return QueryOperatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorUnbondingDelegationsResponse): QueryOperatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationsResponse",
      value: QueryOperatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorUnbondingDelegationRequest(): QueryOperatorUnbondingDelegationRequest {
  return {
    operatorId: 0,
    delegatorAddress: ""
  };
}
export const QueryOperatorUnbondingDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationRequest",
  encode(message: QueryOperatorUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorUnbondingDelegationRequest>): QueryOperatorUnbondingDelegationRequest {
    const message = createBaseQueryOperatorUnbondingDelegationRequest();
    message.operatorId = object.operatorId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorUnbondingDelegationRequestAmino): QueryOperatorUnbondingDelegationRequest {
    const message = createBaseQueryOperatorUnbondingDelegationRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryOperatorUnbondingDelegationRequest): QueryOperatorUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorUnbondingDelegationRequestAminoMsg): QueryOperatorUnbondingDelegationRequest {
    return QueryOperatorUnbondingDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorUnbondingDelegationRequestProtoMsg): QueryOperatorUnbondingDelegationRequest {
    return QueryOperatorUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message: QueryOperatorUnbondingDelegationRequest): Uint8Array {
    return QueryOperatorUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorUnbondingDelegationRequest): QueryOperatorUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationRequest",
      value: QueryOperatorUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorUnbondingDelegationResponse(): QueryOperatorUnbondingDelegationResponse {
  return {
    unbondingDelegation: UnbondingDelegation.fromPartial({})
  };
}
export const QueryOperatorUnbondingDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationResponse",
  encode(message: QueryOperatorUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingDelegation !== undefined) {
      UnbondingDelegation.encode(message.unbondingDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegation = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorUnbondingDelegationResponse>): QueryOperatorUnbondingDelegationResponse {
    const message = createBaseQueryOperatorUnbondingDelegationResponse();
    message.unbondingDelegation = object.unbondingDelegation !== undefined && object.unbondingDelegation !== null ? UnbondingDelegation.fromPartial(object.unbondingDelegation) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorUnbondingDelegationResponseAmino): QueryOperatorUnbondingDelegationResponse {
    const message = createBaseQueryOperatorUnbondingDelegationResponse();
    if (object.unbonding_delegation !== undefined && object.unbonding_delegation !== null) {
      message.unbondingDelegation = UnbondingDelegation.fromAmino(object.unbonding_delegation);
    }
    return message;
  },
  toAmino(message: QueryOperatorUnbondingDelegationResponse): QueryOperatorUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbonding_delegation = message.unbondingDelegation ? UnbondingDelegation.toAmino(message.unbondingDelegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorUnbondingDelegationResponseAminoMsg): QueryOperatorUnbondingDelegationResponse {
    return QueryOperatorUnbondingDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorUnbondingDelegationResponseProtoMsg): QueryOperatorUnbondingDelegationResponse {
    return QueryOperatorUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: QueryOperatorUnbondingDelegationResponse): Uint8Array {
    return QueryOperatorUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorUnbondingDelegationResponse): QueryOperatorUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryOperatorUnbondingDelegationResponse",
      value: QueryOperatorUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationsRequest(): QueryServiceDelegationsRequest {
  return {
    serviceId: 0,
    pagination: undefined
  };
}
export const QueryServiceDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsRequest",
  encode(message: QueryServiceDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceDelegationsRequest>): QueryServiceDelegationsRequest {
    const message = createBaseQueryServiceDelegationsRequest();
    message.serviceId = object.serviceId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceDelegationsRequestAmino): QueryServiceDelegationsRequest {
    const message = createBaseQueryServiceDelegationsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceDelegationsRequest): QueryServiceDelegationsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationsRequestAminoMsg): QueryServiceDelegationsRequest {
    return QueryServiceDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationsRequestProtoMsg): QueryServiceDelegationsRequest {
    return QueryServiceDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryServiceDelegationsRequest): Uint8Array {
    return QueryServiceDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationsRequest): QueryServiceDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsRequest",
      value: QueryServiceDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationsResponse(): QueryServiceDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryServiceDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsResponse",
  encode(message: QueryServiceDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryServiceDelegationsResponse>): QueryServiceDelegationsResponse {
    const message = createBaseQueryServiceDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceDelegationsResponseAmino): QueryServiceDelegationsResponse {
    const message = createBaseQueryServiceDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceDelegationsResponse): QueryServiceDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationsResponseAminoMsg): QueryServiceDelegationsResponse {
    return QueryServiceDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationsResponseProtoMsg): QueryServiceDelegationsResponse {
    return QueryServiceDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryServiceDelegationsResponse): Uint8Array {
    return QueryServiceDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationsResponse): QueryServiceDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationsResponse",
      value: QueryServiceDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationRequest(): QueryServiceDelegationRequest {
  return {
    serviceId: 0,
    delegatorAddress: ""
  };
}
export const QueryServiceDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationRequest",
  encode(message: QueryServiceDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceDelegationRequest>): QueryServiceDelegationRequest {
    const message = createBaseQueryServiceDelegationRequest();
    message.serviceId = object.serviceId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryServiceDelegationRequestAmino): QueryServiceDelegationRequest {
    const message = createBaseQueryServiceDelegationRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryServiceDelegationRequest): QueryServiceDelegationRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationRequestAminoMsg): QueryServiceDelegationRequest {
    return QueryServiceDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationRequestProtoMsg): QueryServiceDelegationRequest {
    return QueryServiceDelegationRequest.decode(message.value);
  },
  toProto(message: QueryServiceDelegationRequest): Uint8Array {
    return QueryServiceDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationRequest): QueryServiceDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationRequest",
      value: QueryServiceDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceDelegationResponse(): QueryServiceDelegationResponse {
  return {
    delegation: DelegationResponse.fromPartial({})
  };
}
export const QueryServiceDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationResponse",
  encode(message: QueryServiceDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      DelegationResponse.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceDelegationResponse>): QueryServiceDelegationResponse {
    const message = createBaseQueryServiceDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? DelegationResponse.fromPartial(object.delegation) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceDelegationResponseAmino): QueryServiceDelegationResponse {
    const message = createBaseQueryServiceDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = DelegationResponse.fromAmino(object.delegation);
    }
    return message;
  },
  toAmino(message: QueryServiceDelegationResponse): QueryServiceDelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? DelegationResponse.toAmino(message.delegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceDelegationResponseAminoMsg): QueryServiceDelegationResponse {
    return QueryServiceDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceDelegationResponseProtoMsg): QueryServiceDelegationResponse {
    return QueryServiceDelegationResponse.decode(message.value);
  },
  toProto(message: QueryServiceDelegationResponse): Uint8Array {
    return QueryServiceDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDelegationResponse): QueryServiceDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceDelegationResponse",
      value: QueryServiceDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceUnbondingDelegationsRequest(): QueryServiceUnbondingDelegationsRequest {
  return {
    serviceId: 0,
    pagination: undefined
  };
}
export const QueryServiceUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsRequest",
  encode(message: QueryServiceUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceUnbondingDelegationsRequest>): QueryServiceUnbondingDelegationsRequest {
    const message = createBaseQueryServiceUnbondingDelegationsRequest();
    message.serviceId = object.serviceId ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceUnbondingDelegationsRequestAmino): QueryServiceUnbondingDelegationsRequest {
    const message = createBaseQueryServiceUnbondingDelegationsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceUnbondingDelegationsRequest): QueryServiceUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceUnbondingDelegationsRequestAminoMsg): QueryServiceUnbondingDelegationsRequest {
    return QueryServiceUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceUnbondingDelegationsRequestProtoMsg): QueryServiceUnbondingDelegationsRequest {
    return QueryServiceUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryServiceUnbondingDelegationsRequest): Uint8Array {
    return QueryServiceUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceUnbondingDelegationsRequest): QueryServiceUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsRequest",
      value: QueryServiceUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceUnbondingDelegationsResponse(): QueryServiceUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryServiceUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsResponse",
  encode(message: QueryServiceUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryServiceUnbondingDelegationsResponse>): QueryServiceUnbondingDelegationsResponse {
    const message = createBaseQueryServiceUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceUnbondingDelegationsResponseAmino): QueryServiceUnbondingDelegationsResponse {
    const message = createBaseQueryServiceUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServiceUnbondingDelegationsResponse): QueryServiceUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceUnbondingDelegationsResponseAminoMsg): QueryServiceUnbondingDelegationsResponse {
    return QueryServiceUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceUnbondingDelegationsResponseProtoMsg): QueryServiceUnbondingDelegationsResponse {
    return QueryServiceUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryServiceUnbondingDelegationsResponse): Uint8Array {
    return QueryServiceUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceUnbondingDelegationsResponse): QueryServiceUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationsResponse",
      value: QueryServiceUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceUnbondingDelegationRequest(): QueryServiceUnbondingDelegationRequest {
  return {
    serviceId: 0,
    delegatorAddress: ""
  };
}
export const QueryServiceUnbondingDelegationRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationRequest",
  encode(message: QueryServiceUnbondingDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceUnbondingDelegationRequest>): QueryServiceUnbondingDelegationRequest {
    const message = createBaseQueryServiceUnbondingDelegationRequest();
    message.serviceId = object.serviceId ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryServiceUnbondingDelegationRequestAmino): QueryServiceUnbondingDelegationRequest {
    const message = createBaseQueryServiceUnbondingDelegationRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryServiceUnbondingDelegationRequest): QueryServiceUnbondingDelegationRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryServiceUnbondingDelegationRequestAminoMsg): QueryServiceUnbondingDelegationRequest {
    return QueryServiceUnbondingDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceUnbondingDelegationRequestProtoMsg): QueryServiceUnbondingDelegationRequest {
    return QueryServiceUnbondingDelegationRequest.decode(message.value);
  },
  toProto(message: QueryServiceUnbondingDelegationRequest): Uint8Array {
    return QueryServiceUnbondingDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceUnbondingDelegationRequest): QueryServiceUnbondingDelegationRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationRequest",
      value: QueryServiceUnbondingDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceUnbondingDelegationResponse(): QueryServiceUnbondingDelegationResponse {
  return {
    unbondingDelegation: UnbondingDelegation.fromPartial({})
  };
}
export const QueryServiceUnbondingDelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationResponse",
  encode(message: QueryServiceUnbondingDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingDelegation !== undefined) {
      UnbondingDelegation.encode(message.unbondingDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegation = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceUnbondingDelegationResponse>): QueryServiceUnbondingDelegationResponse {
    const message = createBaseQueryServiceUnbondingDelegationResponse();
    message.unbondingDelegation = object.unbondingDelegation !== undefined && object.unbondingDelegation !== null ? UnbondingDelegation.fromPartial(object.unbondingDelegation) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceUnbondingDelegationResponseAmino): QueryServiceUnbondingDelegationResponse {
    const message = createBaseQueryServiceUnbondingDelegationResponse();
    if (object.unbonding_delegation !== undefined && object.unbonding_delegation !== null) {
      message.unbondingDelegation = UnbondingDelegation.fromAmino(object.unbonding_delegation);
    }
    return message;
  },
  toAmino(message: QueryServiceUnbondingDelegationResponse): QueryServiceUnbondingDelegationResponseAmino {
    const obj: any = {};
    obj.unbonding_delegation = message.unbondingDelegation ? UnbondingDelegation.toAmino(message.unbondingDelegation) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceUnbondingDelegationResponseAminoMsg): QueryServiceUnbondingDelegationResponse {
    return QueryServiceUnbondingDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceUnbondingDelegationResponseProtoMsg): QueryServiceUnbondingDelegationResponse {
    return QueryServiceUnbondingDelegationResponse.decode(message.value);
  },
  toProto(message: QueryServiceUnbondingDelegationResponse): Uint8Array {
    return QueryServiceUnbondingDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceUnbondingDelegationResponse): QueryServiceUnbondingDelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryServiceUnbondingDelegationResponse",
      value: QueryServiceUnbondingDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolDelegationsRequest(): QueryDelegatorPoolDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorPoolDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsRequest",
  encode(message: QueryDelegatorPoolDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorPoolDelegationsRequest>): QueryDelegatorPoolDelegationsRequest {
    const message = createBaseQueryDelegatorPoolDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolDelegationsRequestAmino): QueryDelegatorPoolDelegationsRequest {
    const message = createBaseQueryDelegatorPoolDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolDelegationsRequest): QueryDelegatorPoolDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolDelegationsRequestAminoMsg): QueryDelegatorPoolDelegationsRequest {
    return QueryDelegatorPoolDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolDelegationsRequestProtoMsg): QueryDelegatorPoolDelegationsRequest {
    return QueryDelegatorPoolDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolDelegationsRequest): Uint8Array {
    return QueryDelegatorPoolDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolDelegationsRequest): QueryDelegatorPoolDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsRequest",
      value: QueryDelegatorPoolDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolDelegationsResponse(): QueryDelegatorPoolDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorPoolDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsResponse",
  encode(message: QueryDelegatorPoolDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorPoolDelegationsResponse>): QueryDelegatorPoolDelegationsResponse {
    const message = createBaseQueryDelegatorPoolDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolDelegationsResponseAmino): QueryDelegatorPoolDelegationsResponse {
    const message = createBaseQueryDelegatorPoolDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolDelegationsResponse): QueryDelegatorPoolDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolDelegationsResponseAminoMsg): QueryDelegatorPoolDelegationsResponse {
    return QueryDelegatorPoolDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolDelegationsResponseProtoMsg): QueryDelegatorPoolDelegationsResponse {
    return QueryDelegatorPoolDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolDelegationsResponse): Uint8Array {
    return QueryDelegatorPoolDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolDelegationsResponse): QueryDelegatorPoolDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolDelegationsResponse",
      value: QueryDelegatorPoolDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolUnbondingDelegationsRequest(): QueryDelegatorPoolUnbondingDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorPoolUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsRequest",
  encode(message: QueryDelegatorPoolUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorPoolUnbondingDelegationsRequest>): QueryDelegatorPoolUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolUnbondingDelegationsRequestAmino): QueryDelegatorPoolUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolUnbondingDelegationsRequest): QueryDelegatorPoolUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolUnbondingDelegationsRequestAminoMsg): QueryDelegatorPoolUnbondingDelegationsRequest {
    return QueryDelegatorPoolUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg): QueryDelegatorPoolUnbondingDelegationsRequest {
    return QueryDelegatorPoolUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorPoolUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsRequest): QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsRequest",
      value: QueryDelegatorPoolUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolUnbondingDelegationsResponse(): QueryDelegatorPoolUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorPoolUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsResponse",
  encode(message: QueryDelegatorPoolUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorPoolUnbondingDelegationsResponse>): QueryDelegatorPoolUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolUnbondingDelegationsResponseAmino): QueryDelegatorPoolUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorPoolUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolUnbondingDelegationsResponse): QueryDelegatorPoolUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolUnbondingDelegationsResponseAminoMsg): QueryDelegatorPoolUnbondingDelegationsResponse {
    return QueryDelegatorPoolUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg): QueryDelegatorPoolUnbondingDelegationsResponse {
    return QueryDelegatorPoolUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorPoolUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsResponse): QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolUnbondingDelegationsResponse",
      value: QueryDelegatorPoolUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorDelegationsRequest(): QueryDelegatorOperatorDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorOperatorDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsRequest",
  encode(message: QueryDelegatorOperatorDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorOperatorDelegationsRequest>): QueryDelegatorOperatorDelegationsRequest {
    const message = createBaseQueryDelegatorOperatorDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorDelegationsRequestAmino): QueryDelegatorOperatorDelegationsRequest {
    const message = createBaseQueryDelegatorOperatorDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorDelegationsRequest): QueryDelegatorOperatorDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorDelegationsRequestAminoMsg): QueryDelegatorOperatorDelegationsRequest {
    return QueryDelegatorOperatorDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorDelegationsRequestProtoMsg): QueryDelegatorOperatorDelegationsRequest {
    return QueryDelegatorOperatorDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorDelegationsRequest): Uint8Array {
    return QueryDelegatorOperatorDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorDelegationsRequest): QueryDelegatorOperatorDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsRequest",
      value: QueryDelegatorOperatorDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorDelegationsResponse(): QueryDelegatorOperatorDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorOperatorDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsResponse",
  encode(message: QueryDelegatorOperatorDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorOperatorDelegationsResponse>): QueryDelegatorOperatorDelegationsResponse {
    const message = createBaseQueryDelegatorOperatorDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorDelegationsResponseAmino): QueryDelegatorOperatorDelegationsResponse {
    const message = createBaseQueryDelegatorOperatorDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorDelegationsResponse): QueryDelegatorOperatorDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorDelegationsResponseAminoMsg): QueryDelegatorOperatorDelegationsResponse {
    return QueryDelegatorOperatorDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorDelegationsResponseProtoMsg): QueryDelegatorOperatorDelegationsResponse {
    return QueryDelegatorOperatorDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorDelegationsResponse): Uint8Array {
    return QueryDelegatorOperatorDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorDelegationsResponse): QueryDelegatorOperatorDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorDelegationsResponse",
      value: QueryDelegatorOperatorDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorUnbondingDelegationsRequest(): QueryDelegatorOperatorUnbondingDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorOperatorUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsRequest",
  encode(message: QueryDelegatorOperatorUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorOperatorUnbondingDelegationsRequest>): QueryDelegatorOperatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorUnbondingDelegationsRequestAmino): QueryDelegatorOperatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorUnbondingDelegationsRequest): QueryDelegatorOperatorUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorOperatorUnbondingDelegationsRequest {
    return QueryDelegatorOperatorUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorOperatorUnbondingDelegationsRequest {
    return QueryDelegatorOperatorUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorOperatorUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsRequest): QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsRequest",
      value: QueryDelegatorOperatorUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorUnbondingDelegationsResponse(): QueryDelegatorOperatorUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorOperatorUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsResponse",
  encode(message: QueryDelegatorOperatorUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorOperatorUnbondingDelegationsResponse>): QueryDelegatorOperatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorUnbondingDelegationsResponseAmino): QueryDelegatorOperatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorOperatorUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorUnbondingDelegationsResponse): QueryDelegatorOperatorUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorOperatorUnbondingDelegationsResponse {
    return QueryDelegatorOperatorUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorOperatorUnbondingDelegationsResponse {
    return QueryDelegatorOperatorUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorOperatorUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsResponse): QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorUnbondingDelegationsResponse",
      value: QueryDelegatorOperatorUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceDelegationsRequest(): QueryDelegatorServiceDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorServiceDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsRequest",
  encode(message: QueryDelegatorServiceDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorServiceDelegationsRequest>): QueryDelegatorServiceDelegationsRequest {
    const message = createBaseQueryDelegatorServiceDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceDelegationsRequestAmino): QueryDelegatorServiceDelegationsRequest {
    const message = createBaseQueryDelegatorServiceDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceDelegationsRequest): QueryDelegatorServiceDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceDelegationsRequestAminoMsg): QueryDelegatorServiceDelegationsRequest {
    return QueryDelegatorServiceDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceDelegationsRequestProtoMsg): QueryDelegatorServiceDelegationsRequest {
    return QueryDelegatorServiceDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceDelegationsRequest): Uint8Array {
    return QueryDelegatorServiceDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceDelegationsRequest): QueryDelegatorServiceDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsRequest",
      value: QueryDelegatorServiceDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceDelegationsResponse(): QueryDelegatorServiceDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorServiceDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsResponse",
  encode(message: QueryDelegatorServiceDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(DelegationResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorServiceDelegationsResponse>): QueryDelegatorServiceDelegationsResponse {
    const message = createBaseQueryDelegatorServiceDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceDelegationsResponseAmino): QueryDelegatorServiceDelegationsResponse {
    const message = createBaseQueryDelegatorServiceDelegationsResponse();
    message.delegations = object.delegations?.map(e => DelegationResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceDelegationsResponse): QueryDelegatorServiceDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceDelegationsResponseAminoMsg): QueryDelegatorServiceDelegationsResponse {
    return QueryDelegatorServiceDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceDelegationsResponseProtoMsg): QueryDelegatorServiceDelegationsResponse {
    return QueryDelegatorServiceDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceDelegationsResponse): Uint8Array {
    return QueryDelegatorServiceDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceDelegationsResponse): QueryDelegatorServiceDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceDelegationsResponse",
      value: QueryDelegatorServiceDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceUnbondingDelegationsRequest(): QueryDelegatorServiceUnbondingDelegationsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorServiceUnbondingDelegationsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsRequest",
  encode(message: QueryDelegatorServiceUnbondingDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceUnbondingDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorServiceUnbondingDelegationsRequest>): QueryDelegatorServiceUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceUnbondingDelegationsRequestAmino): QueryDelegatorServiceUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceUnbondingDelegationsRequest): QueryDelegatorServiceUnbondingDelegationsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceUnbondingDelegationsRequestAminoMsg): QueryDelegatorServiceUnbondingDelegationsRequest {
    return QueryDelegatorServiceUnbondingDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg): QueryDelegatorServiceUnbondingDelegationsRequest {
    return QueryDelegatorServiceUnbondingDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceUnbondingDelegationsRequest): Uint8Array {
    return QueryDelegatorServiceUnbondingDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsRequest): QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsRequest",
      value: QueryDelegatorServiceUnbondingDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceUnbondingDelegationsResponse(): QueryDelegatorServiceUnbondingDelegationsResponse {
  return {
    unbondingDelegations: [],
    pagination: undefined
  };
}
export const QueryDelegatorServiceUnbondingDelegationsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsResponse",
  encode(message: QueryDelegatorServiceUnbondingDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceUnbondingDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorServiceUnbondingDelegationsResponse>): QueryDelegatorServiceUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceUnbondingDelegationsResponseAmino): QueryDelegatorServiceUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorServiceUnbondingDelegationsResponse();
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceUnbondingDelegationsResponse): QueryDelegatorServiceUnbondingDelegationsResponseAmino {
    const obj: any = {};
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceUnbondingDelegationsResponseAminoMsg): QueryDelegatorServiceUnbondingDelegationsResponse {
    return QueryDelegatorServiceUnbondingDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg): QueryDelegatorServiceUnbondingDelegationsResponse {
    return QueryDelegatorServiceUnbondingDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceUnbondingDelegationsResponse): Uint8Array {
    return QueryDelegatorServiceUnbondingDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsResponse): QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceUnbondingDelegationsResponse",
      value: QueryDelegatorServiceUnbondingDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolsRequest(): QueryDelegatorPoolsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorPoolsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsRequest",
  encode(message: QueryDelegatorPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorPoolsRequest>): QueryDelegatorPoolsRequest {
    const message = createBaseQueryDelegatorPoolsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolsRequestAmino): QueryDelegatorPoolsRequest {
    const message = createBaseQueryDelegatorPoolsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolsRequest): QueryDelegatorPoolsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolsRequestAminoMsg): QueryDelegatorPoolsRequest {
    return QueryDelegatorPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolsRequestProtoMsg): QueryDelegatorPoolsRequest {
    return QueryDelegatorPoolsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolsRequest): Uint8Array {
    return QueryDelegatorPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolsRequest): QueryDelegatorPoolsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsRequest",
      value: QueryDelegatorPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolsResponse(): QueryDelegatorPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryDelegatorPoolsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsResponse",
  encode(message: QueryDelegatorPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorPoolsResponse>): QueryDelegatorPoolsResponse {
    const message = createBaseQueryDelegatorPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolsResponseAmino): QueryDelegatorPoolsResponse {
    const message = createBaseQueryDelegatorPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolsResponse): QueryDelegatorPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolsResponseAminoMsg): QueryDelegatorPoolsResponse {
    return QueryDelegatorPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolsResponseProtoMsg): QueryDelegatorPoolsResponse {
    return QueryDelegatorPoolsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolsResponse): Uint8Array {
    return QueryDelegatorPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolsResponse): QueryDelegatorPoolsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolsResponse",
      value: QueryDelegatorPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolRequest(): QueryDelegatorPoolRequest {
  return {
    delegatorAddress: "",
    poolId: 0
  };
}
export const QueryDelegatorPoolRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolRequest",
  encode(message: QueryDelegatorPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolRequest();
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
  fromPartial(object: Partial<QueryDelegatorPoolRequest>): QueryDelegatorPoolRequest {
    const message = createBaseQueryDelegatorPoolRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolRequestAmino): QueryDelegatorPoolRequest {
    const message = createBaseQueryDelegatorPoolRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolRequest): QueryDelegatorPoolRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolRequestAminoMsg): QueryDelegatorPoolRequest {
    return QueryDelegatorPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolRequestProtoMsg): QueryDelegatorPoolRequest {
    return QueryDelegatorPoolRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolRequest): Uint8Array {
    return QueryDelegatorPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolRequest): QueryDelegatorPoolRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolRequest",
      value: QueryDelegatorPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorPoolResponse(): QueryDelegatorPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryDelegatorPoolResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolResponse",
  encode(message: QueryDelegatorPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorPoolResponse>): QueryDelegatorPoolResponse {
    const message = createBaseQueryDelegatorPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorPoolResponseAmino): QueryDelegatorPoolResponse {
    const message = createBaseQueryDelegatorPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryDelegatorPoolResponse): QueryDelegatorPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorPoolResponseAminoMsg): QueryDelegatorPoolResponse {
    return QueryDelegatorPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorPoolResponseProtoMsg): QueryDelegatorPoolResponse {
    return QueryDelegatorPoolResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorPoolResponse): Uint8Array {
    return QueryDelegatorPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorPoolResponse): QueryDelegatorPoolResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorPoolResponse",
      value: QueryDelegatorPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorsRequest(): QueryDelegatorOperatorsRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorOperatorsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsRequest",
  encode(message: QueryDelegatorOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorOperatorsRequest>): QueryDelegatorOperatorsRequest {
    const message = createBaseQueryDelegatorOperatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorsRequestAmino): QueryDelegatorOperatorsRequest {
    const message = createBaseQueryDelegatorOperatorsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorsRequest): QueryDelegatorOperatorsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorsRequestAminoMsg): QueryDelegatorOperatorsRequest {
    return QueryDelegatorOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorsRequestProtoMsg): QueryDelegatorOperatorsRequest {
    return QueryDelegatorOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorsRequest): Uint8Array {
    return QueryDelegatorOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorsRequest): QueryDelegatorOperatorsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsRequest",
      value: QueryDelegatorOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorsResponse(): QueryDelegatorOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
export const QueryDelegatorOperatorsResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsResponse",
  encode(message: QueryDelegatorOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorOperatorsResponse>): QueryDelegatorOperatorsResponse {
    const message = createBaseQueryDelegatorOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorsResponseAmino): QueryDelegatorOperatorsResponse {
    const message = createBaseQueryDelegatorOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorsResponse): QueryDelegatorOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorsResponseAminoMsg): QueryDelegatorOperatorsResponse {
    return QueryDelegatorOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorsResponseProtoMsg): QueryDelegatorOperatorsResponse {
    return QueryDelegatorOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorsResponse): Uint8Array {
    return QueryDelegatorOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorsResponse): QueryDelegatorOperatorsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorsResponse",
      value: QueryDelegatorOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorRequest(): QueryDelegatorOperatorRequest {
  return {
    delegatorAddress: "",
    operatorId: 0
  };
}
export const QueryDelegatorOperatorRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorRequest",
  encode(message: QueryDelegatorOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorRequest();
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
  fromPartial(object: Partial<QueryDelegatorOperatorRequest>): QueryDelegatorOperatorRequest {
    const message = createBaseQueryDelegatorOperatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorRequestAmino): QueryDelegatorOperatorRequest {
    const message = createBaseQueryDelegatorOperatorRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorRequest): QueryDelegatorOperatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorRequestAminoMsg): QueryDelegatorOperatorRequest {
    return QueryDelegatorOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorRequestProtoMsg): QueryDelegatorOperatorRequest {
    return QueryDelegatorOperatorRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorRequest): Uint8Array {
    return QueryDelegatorOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorRequest): QueryDelegatorOperatorRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorRequest",
      value: QueryDelegatorOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorOperatorResponse(): QueryDelegatorOperatorResponse {
  return {
    operator: Operator.fromPartial({})
  };
}
export const QueryDelegatorOperatorResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorResponse",
  encode(message: QueryDelegatorOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== undefined) {
      Operator.encode(message.operator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = Operator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorOperatorResponse>): QueryDelegatorOperatorResponse {
    const message = createBaseQueryDelegatorOperatorResponse();
    message.operator = object.operator !== undefined && object.operator !== null ? Operator.fromPartial(object.operator) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorOperatorResponseAmino): QueryDelegatorOperatorResponse {
    const message = createBaseQueryDelegatorOperatorResponse();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = Operator.fromAmino(object.operator);
    }
    return message;
  },
  toAmino(message: QueryDelegatorOperatorResponse): QueryDelegatorOperatorResponseAmino {
    const obj: any = {};
    obj.operator = message.operator ? Operator.toAmino(message.operator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorOperatorResponseAminoMsg): QueryDelegatorOperatorResponse {
    return QueryDelegatorOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorOperatorResponseProtoMsg): QueryDelegatorOperatorResponse {
    return QueryDelegatorOperatorResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorOperatorResponse): Uint8Array {
    return QueryDelegatorOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorOperatorResponse): QueryDelegatorOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorOperatorResponse",
      value: QueryDelegatorOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServicesRequest(): QueryDelegatorServicesRequest {
  return {
    delegatorAddress: "",
    pagination: undefined
  };
}
export const QueryDelegatorServicesRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesRequest",
  encode(message: QueryDelegatorServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorServicesRequest>): QueryDelegatorServicesRequest {
    const message = createBaseQueryDelegatorServicesRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServicesRequestAmino): QueryDelegatorServicesRequest {
    const message = createBaseQueryDelegatorServicesRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServicesRequest): QueryDelegatorServicesRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServicesRequestAminoMsg): QueryDelegatorServicesRequest {
    return QueryDelegatorServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServicesRequestProtoMsg): QueryDelegatorServicesRequest {
    return QueryDelegatorServicesRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorServicesRequest): Uint8Array {
    return QueryDelegatorServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServicesRequest): QueryDelegatorServicesRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesRequest",
      value: QueryDelegatorServicesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServicesResponse(): QueryDelegatorServicesResponse {
  return {
    services: [],
    pagination: undefined
  };
}
export const QueryDelegatorServicesResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesResponse",
  encode(message: QueryDelegatorServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryDelegatorServicesResponse>): QueryDelegatorServicesResponse {
    const message = createBaseQueryDelegatorServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServicesResponseAmino): QueryDelegatorServicesResponse {
    const message = createBaseQueryDelegatorServicesResponse();
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServicesResponse): QueryDelegatorServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServicesResponseAminoMsg): QueryDelegatorServicesResponse {
    return QueryDelegatorServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServicesResponseProtoMsg): QueryDelegatorServicesResponse {
    return QueryDelegatorServicesResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorServicesResponse): Uint8Array {
    return QueryDelegatorServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServicesResponse): QueryDelegatorServicesResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServicesResponse",
      value: QueryDelegatorServicesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceRequest(): QueryDelegatorServiceRequest {
  return {
    delegatorAddress: "",
    serviceId: 0
  };
}
export const QueryDelegatorServiceRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceRequest",
  encode(message: QueryDelegatorServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceRequest();
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
  fromPartial(object: Partial<QueryDelegatorServiceRequest>): QueryDelegatorServiceRequest {
    const message = createBaseQueryDelegatorServiceRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceRequestAmino): QueryDelegatorServiceRequest {
    const message = createBaseQueryDelegatorServiceRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceRequest): QueryDelegatorServiceRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceRequestAminoMsg): QueryDelegatorServiceRequest {
    return QueryDelegatorServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceRequestProtoMsg): QueryDelegatorServiceRequest {
    return QueryDelegatorServiceRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceRequest): Uint8Array {
    return QueryDelegatorServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceRequest): QueryDelegatorServiceRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceRequest",
      value: QueryDelegatorServiceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorServiceResponse(): QueryDelegatorServiceResponse {
  return {
    service: Service.fromPartial({})
  };
}
export const QueryDelegatorServiceResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceResponse",
  encode(message: QueryDelegatorServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDelegatorServiceResponse>): QueryDelegatorServiceResponse {
    const message = createBaseQueryDelegatorServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorServiceResponseAmino): QueryDelegatorServiceResponse {
    const message = createBaseQueryDelegatorServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: QueryDelegatorServiceResponse): QueryDelegatorServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorServiceResponseAminoMsg): QueryDelegatorServiceResponse {
    return QueryDelegatorServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorServiceResponseProtoMsg): QueryDelegatorServiceResponse {
    return QueryDelegatorServiceResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorServiceResponse): Uint8Array {
    return QueryDelegatorServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorServiceResponse): QueryDelegatorServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryDelegatorServiceResponse",
      value: QueryDelegatorServiceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserPreferencesRequest(): QueryUserPreferencesRequest {
  return {
    userAddress: ""
  };
}
export const QueryUserPreferencesRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesRequest",
  encode(message: QueryUserPreferencesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserPreferencesRequest>): QueryUserPreferencesRequest {
    const message = createBaseQueryUserPreferencesRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryUserPreferencesRequestAmino): QueryUserPreferencesRequest {
    const message = createBaseQueryUserPreferencesRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryUserPreferencesRequest): QueryUserPreferencesRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryUserPreferencesRequestAminoMsg): QueryUserPreferencesRequest {
    return QueryUserPreferencesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPreferencesRequestProtoMsg): QueryUserPreferencesRequest {
    return QueryUserPreferencesRequest.decode(message.value);
  },
  toProto(message: QueryUserPreferencesRequest): Uint8Array {
    return QueryUserPreferencesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPreferencesRequest): QueryUserPreferencesRequestProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesRequest",
      value: QueryUserPreferencesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserPreferencesResponse(): QueryUserPreferencesResponse {
  return {
    preferences: UserPreferences.fromPartial({})
  };
}
export const QueryUserPreferencesResponse = {
  typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesResponse",
  encode(message: QueryUserPreferencesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.preferences !== undefined) {
      UserPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPreferencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = UserPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserPreferencesResponse>): QueryUserPreferencesResponse {
    const message = createBaseQueryUserPreferencesResponse();
    message.preferences = object.preferences !== undefined && object.preferences !== null ? UserPreferences.fromPartial(object.preferences) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPreferencesResponseAmino): QueryUserPreferencesResponse {
    const message = createBaseQueryUserPreferencesResponse();
    if (object.preferences !== undefined && object.preferences !== null) {
      message.preferences = UserPreferences.fromAmino(object.preferences);
    }
    return message;
  },
  toAmino(message: QueryUserPreferencesResponse): QueryUserPreferencesResponseAmino {
    const obj: any = {};
    obj.preferences = message.preferences ? UserPreferences.toAmino(message.preferences) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPreferencesResponseAminoMsg): QueryUserPreferencesResponse {
    return QueryUserPreferencesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPreferencesResponseProtoMsg): QueryUserPreferencesResponse {
    return QueryUserPreferencesResponse.decode(message.value);
  },
  toProto(message: QueryUserPreferencesResponse): Uint8Array {
    return QueryUserPreferencesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPreferencesResponse): QueryUserPreferencesResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.QueryUserPreferencesResponse",
      value: QueryUserPreferencesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/milkyway.restaking.v1.QueryParamsRequest",
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
      typeUrl: "/milkyway.restaking.v1.QueryParamsRequest",
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
  typeUrl: "/milkyway.restaking.v1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
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
      typeUrl: "/milkyway.restaking.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};