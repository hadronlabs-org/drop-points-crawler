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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/milkyway.restaking.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/milkyway.restaking.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryOperatorJoinedServicesRequest: {
    typeUrl: string;
    encode(message: QueryOperatorJoinedServicesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorJoinedServicesRequest;
    fromPartial(object: Partial<QueryOperatorJoinedServicesRequest>): QueryOperatorJoinedServicesRequest;
    fromAmino(object: QueryOperatorJoinedServicesRequestAmino): QueryOperatorJoinedServicesRequest;
    toAmino(message: QueryOperatorJoinedServicesRequest): QueryOperatorJoinedServicesRequestAmino;
    fromAminoMsg(object: QueryOperatorJoinedServicesRequestAminoMsg): QueryOperatorJoinedServicesRequest;
    fromProtoMsg(message: QueryOperatorJoinedServicesRequestProtoMsg): QueryOperatorJoinedServicesRequest;
    toProto(message: QueryOperatorJoinedServicesRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorJoinedServicesRequest): QueryOperatorJoinedServicesRequestProtoMsg;
};
export declare const QueryOperatorJoinedServicesResponse: {
    typeUrl: string;
    encode(message: QueryOperatorJoinedServicesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorJoinedServicesResponse;
    fromPartial(object: Partial<QueryOperatorJoinedServicesResponse>): QueryOperatorJoinedServicesResponse;
    fromAmino(object: QueryOperatorJoinedServicesResponseAmino): QueryOperatorJoinedServicesResponse;
    toAmino(message: QueryOperatorJoinedServicesResponse): QueryOperatorJoinedServicesResponseAmino;
    fromAminoMsg(object: QueryOperatorJoinedServicesResponseAminoMsg): QueryOperatorJoinedServicesResponse;
    fromProtoMsg(message: QueryOperatorJoinedServicesResponseProtoMsg): QueryOperatorJoinedServicesResponse;
    toProto(message: QueryOperatorJoinedServicesResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorJoinedServicesResponse): QueryOperatorJoinedServicesResponseProtoMsg;
};
export declare const QueryServiceAllowedOperatorsRequest: {
    typeUrl: string;
    encode(message: QueryServiceAllowedOperatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceAllowedOperatorsRequest;
    fromPartial(object: Partial<QueryServiceAllowedOperatorsRequest>): QueryServiceAllowedOperatorsRequest;
    fromAmino(object: QueryServiceAllowedOperatorsRequestAmino): QueryServiceAllowedOperatorsRequest;
    toAmino(message: QueryServiceAllowedOperatorsRequest): QueryServiceAllowedOperatorsRequestAmino;
    fromAminoMsg(object: QueryServiceAllowedOperatorsRequestAminoMsg): QueryServiceAllowedOperatorsRequest;
    fromProtoMsg(message: QueryServiceAllowedOperatorsRequestProtoMsg): QueryServiceAllowedOperatorsRequest;
    toProto(message: QueryServiceAllowedOperatorsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceAllowedOperatorsRequest): QueryServiceAllowedOperatorsRequestProtoMsg;
};
export declare const QueryServiceAllowedOperatorsResponse: {
    typeUrl: string;
    encode(message: QueryServiceAllowedOperatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceAllowedOperatorsResponse;
    fromPartial(object: Partial<QueryServiceAllowedOperatorsResponse>): QueryServiceAllowedOperatorsResponse;
    fromAmino(object: QueryServiceAllowedOperatorsResponseAmino): QueryServiceAllowedOperatorsResponse;
    toAmino(message: QueryServiceAllowedOperatorsResponse): QueryServiceAllowedOperatorsResponseAmino;
    fromAminoMsg(object: QueryServiceAllowedOperatorsResponseAminoMsg): QueryServiceAllowedOperatorsResponse;
    fromProtoMsg(message: QueryServiceAllowedOperatorsResponseProtoMsg): QueryServiceAllowedOperatorsResponse;
    toProto(message: QueryServiceAllowedOperatorsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceAllowedOperatorsResponse): QueryServiceAllowedOperatorsResponseProtoMsg;
};
export declare const QueryServiceSecuringPoolsRequest: {
    typeUrl: string;
    encode(message: QueryServiceSecuringPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceSecuringPoolsRequest;
    fromPartial(object: Partial<QueryServiceSecuringPoolsRequest>): QueryServiceSecuringPoolsRequest;
    fromAmino(object: QueryServiceSecuringPoolsRequestAmino): QueryServiceSecuringPoolsRequest;
    toAmino(message: QueryServiceSecuringPoolsRequest): QueryServiceSecuringPoolsRequestAmino;
    fromAminoMsg(object: QueryServiceSecuringPoolsRequestAminoMsg): QueryServiceSecuringPoolsRequest;
    fromProtoMsg(message: QueryServiceSecuringPoolsRequestProtoMsg): QueryServiceSecuringPoolsRequest;
    toProto(message: QueryServiceSecuringPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceSecuringPoolsRequest): QueryServiceSecuringPoolsRequestProtoMsg;
};
export declare const QueryServiceSecuringPoolsResponse: {
    typeUrl: string;
    encode(message: QueryServiceSecuringPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceSecuringPoolsResponse;
    fromPartial(object: Partial<QueryServiceSecuringPoolsResponse>): QueryServiceSecuringPoolsResponse;
    fromAmino(object: QueryServiceSecuringPoolsResponseAmino): QueryServiceSecuringPoolsResponse;
    toAmino(message: QueryServiceSecuringPoolsResponse): QueryServiceSecuringPoolsResponseAmino;
    fromAminoMsg(object: QueryServiceSecuringPoolsResponseAminoMsg): QueryServiceSecuringPoolsResponse;
    fromProtoMsg(message: QueryServiceSecuringPoolsResponseProtoMsg): QueryServiceSecuringPoolsResponse;
    toProto(message: QueryServiceSecuringPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceSecuringPoolsResponse): QueryServiceSecuringPoolsResponseProtoMsg;
};
export declare const QueryServiceOperatorsRequest: {
    typeUrl: string;
    encode(message: QueryServiceOperatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOperatorsRequest;
    fromPartial(object: Partial<QueryServiceOperatorsRequest>): QueryServiceOperatorsRequest;
    fromAmino(object: QueryServiceOperatorsRequestAmino): QueryServiceOperatorsRequest;
    toAmino(message: QueryServiceOperatorsRequest): QueryServiceOperatorsRequestAmino;
    fromAminoMsg(object: QueryServiceOperatorsRequestAminoMsg): QueryServiceOperatorsRequest;
    fromProtoMsg(message: QueryServiceOperatorsRequestProtoMsg): QueryServiceOperatorsRequest;
    toProto(message: QueryServiceOperatorsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceOperatorsRequest): QueryServiceOperatorsRequestProtoMsg;
};
export declare const QueryServiceOperatorsResponse: {
    typeUrl: string;
    encode(message: QueryServiceOperatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceOperatorsResponse;
    fromPartial(object: Partial<QueryServiceOperatorsResponse>): QueryServiceOperatorsResponse;
    fromAmino(object: QueryServiceOperatorsResponseAmino): QueryServiceOperatorsResponse;
    toAmino(message: QueryServiceOperatorsResponse): QueryServiceOperatorsResponseAmino;
    fromAminoMsg(object: QueryServiceOperatorsResponseAminoMsg): QueryServiceOperatorsResponse;
    fromProtoMsg(message: QueryServiceOperatorsResponseProtoMsg): QueryServiceOperatorsResponse;
    toProto(message: QueryServiceOperatorsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceOperatorsResponse): QueryServiceOperatorsResponseProtoMsg;
};
export declare const QueryPoolDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryPoolDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationsRequest;
    fromPartial(object: Partial<QueryPoolDelegationsRequest>): QueryPoolDelegationsRequest;
    fromAmino(object: QueryPoolDelegationsRequestAmino): QueryPoolDelegationsRequest;
    toAmino(message: QueryPoolDelegationsRequest): QueryPoolDelegationsRequestAmino;
    fromAminoMsg(object: QueryPoolDelegationsRequestAminoMsg): QueryPoolDelegationsRequest;
    fromProtoMsg(message: QueryPoolDelegationsRequestProtoMsg): QueryPoolDelegationsRequest;
    toProto(message: QueryPoolDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationsRequest): QueryPoolDelegationsRequestProtoMsg;
};
export declare const QueryPoolDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryPoolDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationsResponse;
    fromPartial(object: Partial<QueryPoolDelegationsResponse>): QueryPoolDelegationsResponse;
    fromAmino(object: QueryPoolDelegationsResponseAmino): QueryPoolDelegationsResponse;
    toAmino(message: QueryPoolDelegationsResponse): QueryPoolDelegationsResponseAmino;
    fromAminoMsg(object: QueryPoolDelegationsResponseAminoMsg): QueryPoolDelegationsResponse;
    fromProtoMsg(message: QueryPoolDelegationsResponseProtoMsg): QueryPoolDelegationsResponse;
    toProto(message: QueryPoolDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationsResponse): QueryPoolDelegationsResponseProtoMsg;
};
export declare const QueryPoolDelegationRequest: {
    typeUrl: string;
    encode(message: QueryPoolDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationRequest;
    fromPartial(object: Partial<QueryPoolDelegationRequest>): QueryPoolDelegationRequest;
    fromAmino(object: QueryPoolDelegationRequestAmino): QueryPoolDelegationRequest;
    toAmino(message: QueryPoolDelegationRequest): QueryPoolDelegationRequestAmino;
    fromAminoMsg(object: QueryPoolDelegationRequestAminoMsg): QueryPoolDelegationRequest;
    fromProtoMsg(message: QueryPoolDelegationRequestProtoMsg): QueryPoolDelegationRequest;
    toProto(message: QueryPoolDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationRequest): QueryPoolDelegationRequestProtoMsg;
};
export declare const QueryPoolDelegationResponse: {
    typeUrl: string;
    encode(message: QueryPoolDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolDelegationResponse;
    fromPartial(object: Partial<QueryPoolDelegationResponse>): QueryPoolDelegationResponse;
    fromAmino(object: QueryPoolDelegationResponseAmino): QueryPoolDelegationResponse;
    toAmino(message: QueryPoolDelegationResponse): QueryPoolDelegationResponseAmino;
    fromAminoMsg(object: QueryPoolDelegationResponseAminoMsg): QueryPoolDelegationResponse;
    fromProtoMsg(message: QueryPoolDelegationResponseProtoMsg): QueryPoolDelegationResponse;
    toProto(message: QueryPoolDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryPoolDelegationResponse): QueryPoolDelegationResponseProtoMsg;
};
export declare const QueryPoolUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryPoolUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryPoolUnbondingDelegationsRequest>): QueryPoolUnbondingDelegationsRequest;
    fromAmino(object: QueryPoolUnbondingDelegationsRequestAmino): QueryPoolUnbondingDelegationsRequest;
    toAmino(message: QueryPoolUnbondingDelegationsRequest): QueryPoolUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryPoolUnbondingDelegationsRequestAminoMsg): QueryPoolUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryPoolUnbondingDelegationsRequestProtoMsg): QueryPoolUnbondingDelegationsRequest;
    toProto(message: QueryPoolUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolUnbondingDelegationsRequest): QueryPoolUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryPoolUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryPoolUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryPoolUnbondingDelegationsResponse>): QueryPoolUnbondingDelegationsResponse;
    fromAmino(object: QueryPoolUnbondingDelegationsResponseAmino): QueryPoolUnbondingDelegationsResponse;
    toAmino(message: QueryPoolUnbondingDelegationsResponse): QueryPoolUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryPoolUnbondingDelegationsResponseAminoMsg): QueryPoolUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryPoolUnbondingDelegationsResponseProtoMsg): QueryPoolUnbondingDelegationsResponse;
    toProto(message: QueryPoolUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolUnbondingDelegationsResponse): QueryPoolUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryPoolUnbondingDelegationRequest: {
    typeUrl: string;
    encode(message: QueryPoolUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationRequest;
    fromPartial(object: Partial<QueryPoolUnbondingDelegationRequest>): QueryPoolUnbondingDelegationRequest;
    fromAmino(object: QueryPoolUnbondingDelegationRequestAmino): QueryPoolUnbondingDelegationRequest;
    toAmino(message: QueryPoolUnbondingDelegationRequest): QueryPoolUnbondingDelegationRequestAmino;
    fromAminoMsg(object: QueryPoolUnbondingDelegationRequestAminoMsg): QueryPoolUnbondingDelegationRequest;
    fromProtoMsg(message: QueryPoolUnbondingDelegationRequestProtoMsg): QueryPoolUnbondingDelegationRequest;
    toProto(message: QueryPoolUnbondingDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryPoolUnbondingDelegationRequest): QueryPoolUnbondingDelegationRequestProtoMsg;
};
export declare const QueryPoolUnbondingDelegationResponse: {
    typeUrl: string;
    encode(message: QueryPoolUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolUnbondingDelegationResponse;
    fromPartial(object: Partial<QueryPoolUnbondingDelegationResponse>): QueryPoolUnbondingDelegationResponse;
    fromAmino(object: QueryPoolUnbondingDelegationResponseAmino): QueryPoolUnbondingDelegationResponse;
    toAmino(message: QueryPoolUnbondingDelegationResponse): QueryPoolUnbondingDelegationResponseAmino;
    fromAminoMsg(object: QueryPoolUnbondingDelegationResponseAminoMsg): QueryPoolUnbondingDelegationResponse;
    fromProtoMsg(message: QueryPoolUnbondingDelegationResponseProtoMsg): QueryPoolUnbondingDelegationResponse;
    toProto(message: QueryPoolUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryPoolUnbondingDelegationResponse): QueryPoolUnbondingDelegationResponseProtoMsg;
};
export declare const QueryOperatorDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationsRequest;
    fromPartial(object: Partial<QueryOperatorDelegationsRequest>): QueryOperatorDelegationsRequest;
    fromAmino(object: QueryOperatorDelegationsRequestAmino): QueryOperatorDelegationsRequest;
    toAmino(message: QueryOperatorDelegationsRequest): QueryOperatorDelegationsRequestAmino;
    fromAminoMsg(object: QueryOperatorDelegationsRequestAminoMsg): QueryOperatorDelegationsRequest;
    fromProtoMsg(message: QueryOperatorDelegationsRequestProtoMsg): QueryOperatorDelegationsRequest;
    toProto(message: QueryOperatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationsRequest): QueryOperatorDelegationsRequestProtoMsg;
};
export declare const QueryOperatorDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationsResponse;
    fromPartial(object: Partial<QueryOperatorDelegationsResponse>): QueryOperatorDelegationsResponse;
    fromAmino(object: QueryOperatorDelegationsResponseAmino): QueryOperatorDelegationsResponse;
    toAmino(message: QueryOperatorDelegationsResponse): QueryOperatorDelegationsResponseAmino;
    fromAminoMsg(object: QueryOperatorDelegationsResponseAminoMsg): QueryOperatorDelegationsResponse;
    fromProtoMsg(message: QueryOperatorDelegationsResponseProtoMsg): QueryOperatorDelegationsResponse;
    toProto(message: QueryOperatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationsResponse): QueryOperatorDelegationsResponseProtoMsg;
};
export declare const QueryOperatorDelegationRequest: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationRequest;
    fromPartial(object: Partial<QueryOperatorDelegationRequest>): QueryOperatorDelegationRequest;
    fromAmino(object: QueryOperatorDelegationRequestAmino): QueryOperatorDelegationRequest;
    toAmino(message: QueryOperatorDelegationRequest): QueryOperatorDelegationRequestAmino;
    fromAminoMsg(object: QueryOperatorDelegationRequestAminoMsg): QueryOperatorDelegationRequest;
    fromProtoMsg(message: QueryOperatorDelegationRequestProtoMsg): QueryOperatorDelegationRequest;
    toProto(message: QueryOperatorDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationRequest): QueryOperatorDelegationRequestProtoMsg;
};
export declare const QueryOperatorDelegationResponse: {
    typeUrl: string;
    encode(message: QueryOperatorDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorDelegationResponse;
    fromPartial(object: Partial<QueryOperatorDelegationResponse>): QueryOperatorDelegationResponse;
    fromAmino(object: QueryOperatorDelegationResponseAmino): QueryOperatorDelegationResponse;
    toAmino(message: QueryOperatorDelegationResponse): QueryOperatorDelegationResponseAmino;
    fromAminoMsg(object: QueryOperatorDelegationResponseAminoMsg): QueryOperatorDelegationResponse;
    fromProtoMsg(message: QueryOperatorDelegationResponseProtoMsg): QueryOperatorDelegationResponse;
    toProto(message: QueryOperatorDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorDelegationResponse): QueryOperatorDelegationResponseProtoMsg;
};
export declare const QueryOperatorUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryOperatorUnbondingDelegationsRequest>): QueryOperatorUnbondingDelegationsRequest;
    fromAmino(object: QueryOperatorUnbondingDelegationsRequestAmino): QueryOperatorUnbondingDelegationsRequest;
    toAmino(message: QueryOperatorUnbondingDelegationsRequest): QueryOperatorUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryOperatorUnbondingDelegationsRequestAminoMsg): QueryOperatorUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryOperatorUnbondingDelegationsRequestProtoMsg): QueryOperatorUnbondingDelegationsRequest;
    toProto(message: QueryOperatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorUnbondingDelegationsRequest): QueryOperatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryOperatorUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryOperatorUnbondingDelegationsResponse>): QueryOperatorUnbondingDelegationsResponse;
    fromAmino(object: QueryOperatorUnbondingDelegationsResponseAmino): QueryOperatorUnbondingDelegationsResponse;
    toAmino(message: QueryOperatorUnbondingDelegationsResponse): QueryOperatorUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryOperatorUnbondingDelegationsResponseAminoMsg): QueryOperatorUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryOperatorUnbondingDelegationsResponseProtoMsg): QueryOperatorUnbondingDelegationsResponse;
    toProto(message: QueryOperatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorUnbondingDelegationsResponse): QueryOperatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryOperatorUnbondingDelegationRequest: {
    typeUrl: string;
    encode(message: QueryOperatorUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationRequest;
    fromPartial(object: Partial<QueryOperatorUnbondingDelegationRequest>): QueryOperatorUnbondingDelegationRequest;
    fromAmino(object: QueryOperatorUnbondingDelegationRequestAmino): QueryOperatorUnbondingDelegationRequest;
    toAmino(message: QueryOperatorUnbondingDelegationRequest): QueryOperatorUnbondingDelegationRequestAmino;
    fromAminoMsg(object: QueryOperatorUnbondingDelegationRequestAminoMsg): QueryOperatorUnbondingDelegationRequest;
    fromProtoMsg(message: QueryOperatorUnbondingDelegationRequestProtoMsg): QueryOperatorUnbondingDelegationRequest;
    toProto(message: QueryOperatorUnbondingDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorUnbondingDelegationRequest): QueryOperatorUnbondingDelegationRequestProtoMsg;
};
export declare const QueryOperatorUnbondingDelegationResponse: {
    typeUrl: string;
    encode(message: QueryOperatorUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorUnbondingDelegationResponse;
    fromPartial(object: Partial<QueryOperatorUnbondingDelegationResponse>): QueryOperatorUnbondingDelegationResponse;
    fromAmino(object: QueryOperatorUnbondingDelegationResponseAmino): QueryOperatorUnbondingDelegationResponse;
    toAmino(message: QueryOperatorUnbondingDelegationResponse): QueryOperatorUnbondingDelegationResponseAmino;
    fromAminoMsg(object: QueryOperatorUnbondingDelegationResponseAminoMsg): QueryOperatorUnbondingDelegationResponse;
    fromProtoMsg(message: QueryOperatorUnbondingDelegationResponseProtoMsg): QueryOperatorUnbondingDelegationResponse;
    toProto(message: QueryOperatorUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorUnbondingDelegationResponse): QueryOperatorUnbondingDelegationResponseProtoMsg;
};
export declare const QueryServiceDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryServiceDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationsRequest;
    fromPartial(object: Partial<QueryServiceDelegationsRequest>): QueryServiceDelegationsRequest;
    fromAmino(object: QueryServiceDelegationsRequestAmino): QueryServiceDelegationsRequest;
    toAmino(message: QueryServiceDelegationsRequest): QueryServiceDelegationsRequestAmino;
    fromAminoMsg(object: QueryServiceDelegationsRequestAminoMsg): QueryServiceDelegationsRequest;
    fromProtoMsg(message: QueryServiceDelegationsRequestProtoMsg): QueryServiceDelegationsRequest;
    toProto(message: QueryServiceDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationsRequest): QueryServiceDelegationsRequestProtoMsg;
};
export declare const QueryServiceDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryServiceDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationsResponse;
    fromPartial(object: Partial<QueryServiceDelegationsResponse>): QueryServiceDelegationsResponse;
    fromAmino(object: QueryServiceDelegationsResponseAmino): QueryServiceDelegationsResponse;
    toAmino(message: QueryServiceDelegationsResponse): QueryServiceDelegationsResponseAmino;
    fromAminoMsg(object: QueryServiceDelegationsResponseAminoMsg): QueryServiceDelegationsResponse;
    fromProtoMsg(message: QueryServiceDelegationsResponseProtoMsg): QueryServiceDelegationsResponse;
    toProto(message: QueryServiceDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationsResponse): QueryServiceDelegationsResponseProtoMsg;
};
export declare const QueryServiceDelegationRequest: {
    typeUrl: string;
    encode(message: QueryServiceDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationRequest;
    fromPartial(object: Partial<QueryServiceDelegationRequest>): QueryServiceDelegationRequest;
    fromAmino(object: QueryServiceDelegationRequestAmino): QueryServiceDelegationRequest;
    toAmino(message: QueryServiceDelegationRequest): QueryServiceDelegationRequestAmino;
    fromAminoMsg(object: QueryServiceDelegationRequestAminoMsg): QueryServiceDelegationRequest;
    fromProtoMsg(message: QueryServiceDelegationRequestProtoMsg): QueryServiceDelegationRequest;
    toProto(message: QueryServiceDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationRequest): QueryServiceDelegationRequestProtoMsg;
};
export declare const QueryServiceDelegationResponse: {
    typeUrl: string;
    encode(message: QueryServiceDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDelegationResponse;
    fromPartial(object: Partial<QueryServiceDelegationResponse>): QueryServiceDelegationResponse;
    fromAmino(object: QueryServiceDelegationResponseAmino): QueryServiceDelegationResponse;
    toAmino(message: QueryServiceDelegationResponse): QueryServiceDelegationResponseAmino;
    fromAminoMsg(object: QueryServiceDelegationResponseAminoMsg): QueryServiceDelegationResponse;
    fromProtoMsg(message: QueryServiceDelegationResponseProtoMsg): QueryServiceDelegationResponse;
    toProto(message: QueryServiceDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryServiceDelegationResponse): QueryServiceDelegationResponseProtoMsg;
};
export declare const QueryServiceUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryServiceUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryServiceUnbondingDelegationsRequest>): QueryServiceUnbondingDelegationsRequest;
    fromAmino(object: QueryServiceUnbondingDelegationsRequestAmino): QueryServiceUnbondingDelegationsRequest;
    toAmino(message: QueryServiceUnbondingDelegationsRequest): QueryServiceUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryServiceUnbondingDelegationsRequestAminoMsg): QueryServiceUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryServiceUnbondingDelegationsRequestProtoMsg): QueryServiceUnbondingDelegationsRequest;
    toProto(message: QueryServiceUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceUnbondingDelegationsRequest): QueryServiceUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryServiceUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryServiceUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryServiceUnbondingDelegationsResponse>): QueryServiceUnbondingDelegationsResponse;
    fromAmino(object: QueryServiceUnbondingDelegationsResponseAmino): QueryServiceUnbondingDelegationsResponse;
    toAmino(message: QueryServiceUnbondingDelegationsResponse): QueryServiceUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryServiceUnbondingDelegationsResponseAminoMsg): QueryServiceUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryServiceUnbondingDelegationsResponseProtoMsg): QueryServiceUnbondingDelegationsResponse;
    toProto(message: QueryServiceUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceUnbondingDelegationsResponse): QueryServiceUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryServiceUnbondingDelegationRequest: {
    typeUrl: string;
    encode(message: QueryServiceUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationRequest;
    fromPartial(object: Partial<QueryServiceUnbondingDelegationRequest>): QueryServiceUnbondingDelegationRequest;
    fromAmino(object: QueryServiceUnbondingDelegationRequestAmino): QueryServiceUnbondingDelegationRequest;
    toAmino(message: QueryServiceUnbondingDelegationRequest): QueryServiceUnbondingDelegationRequestAmino;
    fromAminoMsg(object: QueryServiceUnbondingDelegationRequestAminoMsg): QueryServiceUnbondingDelegationRequest;
    fromProtoMsg(message: QueryServiceUnbondingDelegationRequestProtoMsg): QueryServiceUnbondingDelegationRequest;
    toProto(message: QueryServiceUnbondingDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryServiceUnbondingDelegationRequest): QueryServiceUnbondingDelegationRequestProtoMsg;
};
export declare const QueryServiceUnbondingDelegationResponse: {
    typeUrl: string;
    encode(message: QueryServiceUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceUnbondingDelegationResponse;
    fromPartial(object: Partial<QueryServiceUnbondingDelegationResponse>): QueryServiceUnbondingDelegationResponse;
    fromAmino(object: QueryServiceUnbondingDelegationResponseAmino): QueryServiceUnbondingDelegationResponse;
    toAmino(message: QueryServiceUnbondingDelegationResponse): QueryServiceUnbondingDelegationResponseAmino;
    fromAminoMsg(object: QueryServiceUnbondingDelegationResponseAminoMsg): QueryServiceUnbondingDelegationResponse;
    fromProtoMsg(message: QueryServiceUnbondingDelegationResponseProtoMsg): QueryServiceUnbondingDelegationResponse;
    toProto(message: QueryServiceUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryServiceUnbondingDelegationResponse): QueryServiceUnbondingDelegationResponseProtoMsg;
};
export declare const QueryDelegatorPoolDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorPoolDelegationsRequest>): QueryDelegatorPoolDelegationsRequest;
    fromAmino(object: QueryDelegatorPoolDelegationsRequestAmino): QueryDelegatorPoolDelegationsRequest;
    toAmino(message: QueryDelegatorPoolDelegationsRequest): QueryDelegatorPoolDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorPoolDelegationsRequestAminoMsg): QueryDelegatorPoolDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorPoolDelegationsRequestProtoMsg): QueryDelegatorPoolDelegationsRequest;
    toProto(message: QueryDelegatorPoolDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolDelegationsRequest): QueryDelegatorPoolDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorPoolDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorPoolDelegationsResponse>): QueryDelegatorPoolDelegationsResponse;
    fromAmino(object: QueryDelegatorPoolDelegationsResponseAmino): QueryDelegatorPoolDelegationsResponse;
    toAmino(message: QueryDelegatorPoolDelegationsResponse): QueryDelegatorPoolDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorPoolDelegationsResponseAminoMsg): QueryDelegatorPoolDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorPoolDelegationsResponseProtoMsg): QueryDelegatorPoolDelegationsResponse;
    toProto(message: QueryDelegatorPoolDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolDelegationsResponse): QueryDelegatorPoolDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorPoolUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorPoolUnbondingDelegationsRequest>): QueryDelegatorPoolUnbondingDelegationsRequest;
    fromAmino(object: QueryDelegatorPoolUnbondingDelegationsRequestAmino): QueryDelegatorPoolUnbondingDelegationsRequest;
    toAmino(message: QueryDelegatorPoolUnbondingDelegationsRequest): QueryDelegatorPoolUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorPoolUnbondingDelegationsRequestAminoMsg): QueryDelegatorPoolUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg): QueryDelegatorPoolUnbondingDelegationsRequest;
    toProto(message: QueryDelegatorPoolUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsRequest): QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorPoolUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorPoolUnbondingDelegationsResponse>): QueryDelegatorPoolUnbondingDelegationsResponse;
    fromAmino(object: QueryDelegatorPoolUnbondingDelegationsResponseAmino): QueryDelegatorPoolUnbondingDelegationsResponse;
    toAmino(message: QueryDelegatorPoolUnbondingDelegationsResponse): QueryDelegatorPoolUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorPoolUnbondingDelegationsResponseAminoMsg): QueryDelegatorPoolUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg): QueryDelegatorPoolUnbondingDelegationsResponse;
    toProto(message: QueryDelegatorPoolUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolUnbondingDelegationsResponse): QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorOperatorDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorOperatorDelegationsRequest>): QueryDelegatorOperatorDelegationsRequest;
    fromAmino(object: QueryDelegatorOperatorDelegationsRequestAmino): QueryDelegatorOperatorDelegationsRequest;
    toAmino(message: QueryDelegatorOperatorDelegationsRequest): QueryDelegatorOperatorDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorOperatorDelegationsRequestAminoMsg): QueryDelegatorOperatorDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorOperatorDelegationsRequestProtoMsg): QueryDelegatorOperatorDelegationsRequest;
    toProto(message: QueryDelegatorOperatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorDelegationsRequest): QueryDelegatorOperatorDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorOperatorDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorOperatorDelegationsResponse>): QueryDelegatorOperatorDelegationsResponse;
    fromAmino(object: QueryDelegatorOperatorDelegationsResponseAmino): QueryDelegatorOperatorDelegationsResponse;
    toAmino(message: QueryDelegatorOperatorDelegationsResponse): QueryDelegatorOperatorDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorOperatorDelegationsResponseAminoMsg): QueryDelegatorOperatorDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorOperatorDelegationsResponseProtoMsg): QueryDelegatorOperatorDelegationsResponse;
    toProto(message: QueryDelegatorOperatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorDelegationsResponse): QueryDelegatorOperatorDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorOperatorUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorOperatorUnbondingDelegationsRequest>): QueryDelegatorOperatorUnbondingDelegationsRequest;
    fromAmino(object: QueryDelegatorOperatorUnbondingDelegationsRequestAmino): QueryDelegatorOperatorUnbondingDelegationsRequest;
    toAmino(message: QueryDelegatorOperatorUnbondingDelegationsRequest): QueryDelegatorOperatorUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorOperatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorOperatorUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorOperatorUnbondingDelegationsRequest;
    toProto(message: QueryDelegatorOperatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsRequest): QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorOperatorUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorOperatorUnbondingDelegationsResponse>): QueryDelegatorOperatorUnbondingDelegationsResponse;
    fromAmino(object: QueryDelegatorOperatorUnbondingDelegationsResponseAmino): QueryDelegatorOperatorUnbondingDelegationsResponse;
    toAmino(message: QueryDelegatorOperatorUnbondingDelegationsResponse): QueryDelegatorOperatorUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorOperatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorOperatorUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorOperatorUnbondingDelegationsResponse;
    toProto(message: QueryDelegatorOperatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorUnbondingDelegationsResponse): QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorServiceDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorServiceDelegationsRequest>): QueryDelegatorServiceDelegationsRequest;
    fromAmino(object: QueryDelegatorServiceDelegationsRequestAmino): QueryDelegatorServiceDelegationsRequest;
    toAmino(message: QueryDelegatorServiceDelegationsRequest): QueryDelegatorServiceDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorServiceDelegationsRequestAminoMsg): QueryDelegatorServiceDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorServiceDelegationsRequestProtoMsg): QueryDelegatorServiceDelegationsRequest;
    toProto(message: QueryDelegatorServiceDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceDelegationsRequest): QueryDelegatorServiceDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorServiceDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorServiceDelegationsResponse>): QueryDelegatorServiceDelegationsResponse;
    fromAmino(object: QueryDelegatorServiceDelegationsResponseAmino): QueryDelegatorServiceDelegationsResponse;
    toAmino(message: QueryDelegatorServiceDelegationsResponse): QueryDelegatorServiceDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorServiceDelegationsResponseAminoMsg): QueryDelegatorServiceDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorServiceDelegationsResponseProtoMsg): QueryDelegatorServiceDelegationsResponse;
    toProto(message: QueryDelegatorServiceDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceDelegationsResponse): QueryDelegatorServiceDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorServiceUnbondingDelegationsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceUnbondingDelegationsRequest;
    fromPartial(object: Partial<QueryDelegatorServiceUnbondingDelegationsRequest>): QueryDelegatorServiceUnbondingDelegationsRequest;
    fromAmino(object: QueryDelegatorServiceUnbondingDelegationsRequestAmino): QueryDelegatorServiceUnbondingDelegationsRequest;
    toAmino(message: QueryDelegatorServiceUnbondingDelegationsRequest): QueryDelegatorServiceUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorServiceUnbondingDelegationsRequestAminoMsg): QueryDelegatorServiceUnbondingDelegationsRequest;
    fromProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg): QueryDelegatorServiceUnbondingDelegationsRequest;
    toProto(message: QueryDelegatorServiceUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsRequest): QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorServiceUnbondingDelegationsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceUnbondingDelegationsResponse;
    fromPartial(object: Partial<QueryDelegatorServiceUnbondingDelegationsResponse>): QueryDelegatorServiceUnbondingDelegationsResponse;
    fromAmino(object: QueryDelegatorServiceUnbondingDelegationsResponseAmino): QueryDelegatorServiceUnbondingDelegationsResponse;
    toAmino(message: QueryDelegatorServiceUnbondingDelegationsResponse): QueryDelegatorServiceUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorServiceUnbondingDelegationsResponseAminoMsg): QueryDelegatorServiceUnbondingDelegationsResponse;
    fromProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg): QueryDelegatorServiceUnbondingDelegationsResponse;
    toProto(message: QueryDelegatorServiceUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceUnbondingDelegationsResponse): QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorPoolsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolsRequest;
    fromPartial(object: Partial<QueryDelegatorPoolsRequest>): QueryDelegatorPoolsRequest;
    fromAmino(object: QueryDelegatorPoolsRequestAmino): QueryDelegatorPoolsRequest;
    toAmino(message: QueryDelegatorPoolsRequest): QueryDelegatorPoolsRequestAmino;
    fromAminoMsg(object: QueryDelegatorPoolsRequestAminoMsg): QueryDelegatorPoolsRequest;
    fromProtoMsg(message: QueryDelegatorPoolsRequestProtoMsg): QueryDelegatorPoolsRequest;
    toProto(message: QueryDelegatorPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolsRequest): QueryDelegatorPoolsRequestProtoMsg;
};
export declare const QueryDelegatorPoolsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolsResponse;
    fromPartial(object: Partial<QueryDelegatorPoolsResponse>): QueryDelegatorPoolsResponse;
    fromAmino(object: QueryDelegatorPoolsResponseAmino): QueryDelegatorPoolsResponse;
    toAmino(message: QueryDelegatorPoolsResponse): QueryDelegatorPoolsResponseAmino;
    fromAminoMsg(object: QueryDelegatorPoolsResponseAminoMsg): QueryDelegatorPoolsResponse;
    fromProtoMsg(message: QueryDelegatorPoolsResponseProtoMsg): QueryDelegatorPoolsResponse;
    toProto(message: QueryDelegatorPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolsResponse): QueryDelegatorPoolsResponseProtoMsg;
};
export declare const QueryDelegatorPoolRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolRequest;
    fromPartial(object: Partial<QueryDelegatorPoolRequest>): QueryDelegatorPoolRequest;
    fromAmino(object: QueryDelegatorPoolRequestAmino): QueryDelegatorPoolRequest;
    toAmino(message: QueryDelegatorPoolRequest): QueryDelegatorPoolRequestAmino;
    fromAminoMsg(object: QueryDelegatorPoolRequestAminoMsg): QueryDelegatorPoolRequest;
    fromProtoMsg(message: QueryDelegatorPoolRequestProtoMsg): QueryDelegatorPoolRequest;
    toProto(message: QueryDelegatorPoolRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolRequest): QueryDelegatorPoolRequestProtoMsg;
};
export declare const QueryDelegatorPoolResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorPoolResponse;
    fromPartial(object: Partial<QueryDelegatorPoolResponse>): QueryDelegatorPoolResponse;
    fromAmino(object: QueryDelegatorPoolResponseAmino): QueryDelegatorPoolResponse;
    toAmino(message: QueryDelegatorPoolResponse): QueryDelegatorPoolResponseAmino;
    fromAminoMsg(object: QueryDelegatorPoolResponseAminoMsg): QueryDelegatorPoolResponse;
    fromProtoMsg(message: QueryDelegatorPoolResponseProtoMsg): QueryDelegatorPoolResponse;
    toProto(message: QueryDelegatorPoolResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorPoolResponse): QueryDelegatorPoolResponseProtoMsg;
};
export declare const QueryDelegatorOperatorsRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorsRequest;
    fromPartial(object: Partial<QueryDelegatorOperatorsRequest>): QueryDelegatorOperatorsRequest;
    fromAmino(object: QueryDelegatorOperatorsRequestAmino): QueryDelegatorOperatorsRequest;
    toAmino(message: QueryDelegatorOperatorsRequest): QueryDelegatorOperatorsRequestAmino;
    fromAminoMsg(object: QueryDelegatorOperatorsRequestAminoMsg): QueryDelegatorOperatorsRequest;
    fromProtoMsg(message: QueryDelegatorOperatorsRequestProtoMsg): QueryDelegatorOperatorsRequest;
    toProto(message: QueryDelegatorOperatorsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorsRequest): QueryDelegatorOperatorsRequestProtoMsg;
};
export declare const QueryDelegatorOperatorsResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorsResponse;
    fromPartial(object: Partial<QueryDelegatorOperatorsResponse>): QueryDelegatorOperatorsResponse;
    fromAmino(object: QueryDelegatorOperatorsResponseAmino): QueryDelegatorOperatorsResponse;
    toAmino(message: QueryDelegatorOperatorsResponse): QueryDelegatorOperatorsResponseAmino;
    fromAminoMsg(object: QueryDelegatorOperatorsResponseAminoMsg): QueryDelegatorOperatorsResponse;
    fromProtoMsg(message: QueryDelegatorOperatorsResponseProtoMsg): QueryDelegatorOperatorsResponse;
    toProto(message: QueryDelegatorOperatorsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorsResponse): QueryDelegatorOperatorsResponseProtoMsg;
};
export declare const QueryDelegatorOperatorRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorRequest;
    fromPartial(object: Partial<QueryDelegatorOperatorRequest>): QueryDelegatorOperatorRequest;
    fromAmino(object: QueryDelegatorOperatorRequestAmino): QueryDelegatorOperatorRequest;
    toAmino(message: QueryDelegatorOperatorRequest): QueryDelegatorOperatorRequestAmino;
    fromAminoMsg(object: QueryDelegatorOperatorRequestAminoMsg): QueryDelegatorOperatorRequest;
    fromProtoMsg(message: QueryDelegatorOperatorRequestProtoMsg): QueryDelegatorOperatorRequest;
    toProto(message: QueryDelegatorOperatorRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorRequest): QueryDelegatorOperatorRequestProtoMsg;
};
export declare const QueryDelegatorOperatorResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorOperatorResponse;
    fromPartial(object: Partial<QueryDelegatorOperatorResponse>): QueryDelegatorOperatorResponse;
    fromAmino(object: QueryDelegatorOperatorResponseAmino): QueryDelegatorOperatorResponse;
    toAmino(message: QueryDelegatorOperatorResponse): QueryDelegatorOperatorResponseAmino;
    fromAminoMsg(object: QueryDelegatorOperatorResponseAminoMsg): QueryDelegatorOperatorResponse;
    fromProtoMsg(message: QueryDelegatorOperatorResponseProtoMsg): QueryDelegatorOperatorResponse;
    toProto(message: QueryDelegatorOperatorResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorOperatorResponse): QueryDelegatorOperatorResponseProtoMsg;
};
export declare const QueryDelegatorServicesRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorServicesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServicesRequest;
    fromPartial(object: Partial<QueryDelegatorServicesRequest>): QueryDelegatorServicesRequest;
    fromAmino(object: QueryDelegatorServicesRequestAmino): QueryDelegatorServicesRequest;
    toAmino(message: QueryDelegatorServicesRequest): QueryDelegatorServicesRequestAmino;
    fromAminoMsg(object: QueryDelegatorServicesRequestAminoMsg): QueryDelegatorServicesRequest;
    fromProtoMsg(message: QueryDelegatorServicesRequestProtoMsg): QueryDelegatorServicesRequest;
    toProto(message: QueryDelegatorServicesRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorServicesRequest): QueryDelegatorServicesRequestProtoMsg;
};
export declare const QueryDelegatorServicesResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorServicesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServicesResponse;
    fromPartial(object: Partial<QueryDelegatorServicesResponse>): QueryDelegatorServicesResponse;
    fromAmino(object: QueryDelegatorServicesResponseAmino): QueryDelegatorServicesResponse;
    toAmino(message: QueryDelegatorServicesResponse): QueryDelegatorServicesResponseAmino;
    fromAminoMsg(object: QueryDelegatorServicesResponseAminoMsg): QueryDelegatorServicesResponse;
    fromProtoMsg(message: QueryDelegatorServicesResponseProtoMsg): QueryDelegatorServicesResponse;
    toProto(message: QueryDelegatorServicesResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorServicesResponse): QueryDelegatorServicesResponseProtoMsg;
};
export declare const QueryDelegatorServiceRequest: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceRequest;
    fromPartial(object: Partial<QueryDelegatorServiceRequest>): QueryDelegatorServiceRequest;
    fromAmino(object: QueryDelegatorServiceRequestAmino): QueryDelegatorServiceRequest;
    toAmino(message: QueryDelegatorServiceRequest): QueryDelegatorServiceRequestAmino;
    fromAminoMsg(object: QueryDelegatorServiceRequestAminoMsg): QueryDelegatorServiceRequest;
    fromProtoMsg(message: QueryDelegatorServiceRequestProtoMsg): QueryDelegatorServiceRequest;
    toProto(message: QueryDelegatorServiceRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceRequest): QueryDelegatorServiceRequestProtoMsg;
};
export declare const QueryDelegatorServiceResponse: {
    typeUrl: string;
    encode(message: QueryDelegatorServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorServiceResponse;
    fromPartial(object: Partial<QueryDelegatorServiceResponse>): QueryDelegatorServiceResponse;
    fromAmino(object: QueryDelegatorServiceResponseAmino): QueryDelegatorServiceResponse;
    toAmino(message: QueryDelegatorServiceResponse): QueryDelegatorServiceResponseAmino;
    fromAminoMsg(object: QueryDelegatorServiceResponseAminoMsg): QueryDelegatorServiceResponse;
    fromProtoMsg(message: QueryDelegatorServiceResponseProtoMsg): QueryDelegatorServiceResponse;
    toProto(message: QueryDelegatorServiceResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorServiceResponse): QueryDelegatorServiceResponseProtoMsg;
};
export declare const QueryUserPreferencesRequest: {
    typeUrl: string;
    encode(message: QueryUserPreferencesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPreferencesRequest;
    fromPartial(object: Partial<QueryUserPreferencesRequest>): QueryUserPreferencesRequest;
    fromAmino(object: QueryUserPreferencesRequestAmino): QueryUserPreferencesRequest;
    toAmino(message: QueryUserPreferencesRequest): QueryUserPreferencesRequestAmino;
    fromAminoMsg(object: QueryUserPreferencesRequestAminoMsg): QueryUserPreferencesRequest;
    fromProtoMsg(message: QueryUserPreferencesRequestProtoMsg): QueryUserPreferencesRequest;
    toProto(message: QueryUserPreferencesRequest): Uint8Array;
    toProtoMsg(message: QueryUserPreferencesRequest): QueryUserPreferencesRequestProtoMsg;
};
export declare const QueryUserPreferencesResponse: {
    typeUrl: string;
    encode(message: QueryUserPreferencesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserPreferencesResponse;
    fromPartial(object: Partial<QueryUserPreferencesResponse>): QueryUserPreferencesResponse;
    fromAmino(object: QueryUserPreferencesResponseAmino): QueryUserPreferencesResponse;
    toAmino(message: QueryUserPreferencesResponse): QueryUserPreferencesResponseAmino;
    fromAminoMsg(object: QueryUserPreferencesResponseAminoMsg): QueryUserPreferencesResponse;
    fromProtoMsg(message: QueryUserPreferencesResponseProtoMsg): QueryUserPreferencesResponse;
    toProto(message: QueryUserPreferencesResponse): Uint8Array;
    toProtoMsg(message: QueryUserPreferencesResponse): QueryUserPreferencesResponseProtoMsg;
};
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
