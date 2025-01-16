import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryOperatorJoinedServicesRequest, QueryOperatorJoinedServicesResponse, QueryServiceAllowedOperatorsRequest, QueryServiceAllowedOperatorsResponse, QueryServiceSecuringPoolsRequest, QueryServiceSecuringPoolsResponse, QueryServiceOperatorsRequest, QueryServiceOperatorsResponse, QueryPoolDelegationsRequest, QueryPoolDelegationsResponse, QueryPoolDelegationRequest, QueryPoolDelegationResponse, QueryPoolUnbondingDelegationsRequest, QueryPoolUnbondingDelegationsResponse, QueryPoolUnbondingDelegationRequest, QueryPoolUnbondingDelegationResponse, QueryOperatorDelegationsRequest, QueryOperatorDelegationsResponse, QueryOperatorDelegationRequest, QueryOperatorDelegationResponse, QueryOperatorUnbondingDelegationsRequest, QueryOperatorUnbondingDelegationsResponse, QueryOperatorUnbondingDelegationRequest, QueryOperatorUnbondingDelegationResponse, QueryServiceDelegationsRequest, QueryServiceDelegationsResponse, QueryServiceDelegationRequest, QueryServiceDelegationResponse, QueryServiceUnbondingDelegationsRequest, QueryServiceUnbondingDelegationsResponse, QueryServiceUnbondingDelegationRequest, QueryServiceUnbondingDelegationResponse, QueryDelegatorPoolDelegationsRequest, QueryDelegatorPoolDelegationsResponse, QueryDelegatorPoolUnbondingDelegationsRequest, QueryDelegatorPoolUnbondingDelegationsResponse, QueryDelegatorOperatorDelegationsRequest, QueryDelegatorOperatorDelegationsResponse, QueryDelegatorOperatorUnbondingDelegationsRequest, QueryDelegatorOperatorUnbondingDelegationsResponse, QueryDelegatorServiceDelegationsRequest, QueryDelegatorServiceDelegationsResponse, QueryDelegatorServiceUnbondingDelegationsRequest, QueryDelegatorServiceUnbondingDelegationsResponse, QueryDelegatorPoolsRequest, QueryDelegatorPoolsResponse, QueryDelegatorPoolRequest, QueryDelegatorPoolResponse, QueryDelegatorOperatorsRequest, QueryDelegatorOperatorsResponse, QueryDelegatorOperatorRequest, QueryDelegatorOperatorResponse, QueryDelegatorServicesRequest, QueryDelegatorServicesResponse, QueryDelegatorServiceRequest, QueryDelegatorServiceResponse, QueryUserPreferencesRequest, QueryUserPreferencesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** OperatorJoinedServices queries the services that an operator has joined. */
    operatorJoinedServices(request: QueryOperatorJoinedServicesRequest): Promise<QueryOperatorJoinedServicesResponse>;
    /** ServiceAllowedOperators queries the allowed operators for a given service. */
    serviceAllowedOperators(request: QueryServiceAllowedOperatorsRequest): Promise<QueryServiceAllowedOperatorsResponse>;
    /** ServiceSecuringPools queries the pools that are securing a given service. */
    serviceSecuringPools(request: QueryServiceSecuringPoolsRequest): Promise<QueryServiceSecuringPoolsResponse>;
    serviceOperators(request: QueryServiceOperatorsRequest): Promise<QueryServiceOperatorsResponse>;
    /** PoolDelegations queries the delegations info for the given pool. */
    poolDelegations(request: QueryPoolDelegationsRequest): Promise<QueryPoolDelegationsResponse>;
    /**
     * PoolDelegation queries the delegation info for the given pool and
     * delegator.
     */
    poolDelegation(request: QueryPoolDelegationRequest): Promise<QueryPoolDelegationResponse>;
    /**
     * PoolUnbondingDelegations queries the unbonding delegations info for the
     * given pool.
     */
    poolUnbondingDelegations(request: QueryPoolUnbondingDelegationsRequest): Promise<QueryPoolUnbondingDelegationsResponse>;
    /**
     * PoolUnbondingDelegation queries the unbonding delegation info for the given
     * pool and delegator.
     */
    poolUnbondingDelegation(request: QueryPoolUnbondingDelegationRequest): Promise<QueryPoolUnbondingDelegationResponse>;
    /** OperatorDelegations queries the delegations info for the given operator. */
    operatorDelegations(request: QueryOperatorDelegationsRequest): Promise<QueryOperatorDelegationsResponse>;
    /**
     * OperatorDelegation queries the delegation info for the given operator and
     * delegator.
     */
    operatorDelegation(request: QueryOperatorDelegationRequest): Promise<QueryOperatorDelegationResponse>;
    /**
     * OperatorUnbondingDelegations queries the unbonding delegations info for the
     * given operator.
     */
    operatorUnbondingDelegations(request: QueryOperatorUnbondingDelegationsRequest): Promise<QueryOperatorUnbondingDelegationsResponse>;
    /**
     * OperatorUnbondingDelegation queries the unbonding delegation info for the
     * given operator and delegator.
     */
    operatorUnbondingDelegation(request: QueryOperatorUnbondingDelegationRequest): Promise<QueryOperatorUnbondingDelegationResponse>;
    /** ServiceDelegations queries the delegations info for the given service. */
    serviceDelegations(request: QueryServiceDelegationsRequest): Promise<QueryServiceDelegationsResponse>;
    /**
     * ServiceDelegation queries the delegation info for the given service and
     * delegator.
     */
    serviceDelegation(request: QueryServiceDelegationRequest): Promise<QueryServiceDelegationResponse>;
    /**
     * ServiceUnbondingDelegations queries the unbonding delegations info for the
     * given service.
     */
    serviceUnbondingDelegations(request: QueryServiceUnbondingDelegationsRequest): Promise<QueryServiceUnbondingDelegationsResponse>;
    /**
     * ServiceUnbondingDelegation queries the unbonding delegation info for the
     * given service and delegator.
     */
    serviceUnbondingDelegation(request: QueryServiceUnbondingDelegationRequest): Promise<QueryServiceUnbondingDelegationResponse>;
    /**
     * DelegatorPoolDelegations queries all the pool delegations of a given
     * delegator address.
     */
    delegatorPoolDelegations(request: QueryDelegatorPoolDelegationsRequest): Promise<QueryDelegatorPoolDelegationsResponse>;
    /**
     * DelegatorPoolUnbondingDelegations queries all the pool unbonding
     * delegations of a given delegator address.
     */
    delegatorPoolUnbondingDelegations(request: QueryDelegatorPoolUnbondingDelegationsRequest): Promise<QueryDelegatorPoolUnbondingDelegationsResponse>;
    /**
     * DelegatorOperatorDelegations queries all the operator delegations of a
     * given delegator address.
     */
    delegatorOperatorDelegations(request: QueryDelegatorOperatorDelegationsRequest): Promise<QueryDelegatorOperatorDelegationsResponse>;
    /**
     * DelegatorOperatorUnbondingDelegations queries all the operator unbonding
     * delegations of a given delegator address.
     */
    delegatorOperatorUnbondingDelegations(request: QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<QueryDelegatorOperatorUnbondingDelegationsResponse>;
    /**
     * DelegatorServiceDelegations queries all the service delegations of a given
     * delegator address.
     */
    delegatorServiceDelegations(request: QueryDelegatorServiceDelegationsRequest): Promise<QueryDelegatorServiceDelegationsResponse>;
    /**
     * DelegatorServiceUnbondingDelegations queries all the service unbonding
     * delegations of a given delegator address.
     */
    delegatorServiceUnbondingDelegations(request: QueryDelegatorServiceUnbondingDelegationsRequest): Promise<QueryDelegatorServiceUnbondingDelegationsResponse>;
    /**
     * DelegatorPools queries all pools info for given delegator
     * address.
     */
    delegatorPools(request: QueryDelegatorPoolsRequest): Promise<QueryDelegatorPoolsResponse>;
    /** DelegatorPool queries the pool info for given delegator and pool id. */
    delegatorPool(request: QueryDelegatorPoolRequest): Promise<QueryDelegatorPoolResponse>;
    /** DelegatorOperators queries all operators info for given delegator */
    delegatorOperators(request: QueryDelegatorOperatorsRequest): Promise<QueryDelegatorOperatorsResponse>;
    /**
     * DelegatorOperator queries the operator info for given delegator and
     * operator id.
     */
    delegatorOperator(request: QueryDelegatorOperatorRequest): Promise<QueryDelegatorOperatorResponse>;
    /** DelegatorServices queries all services info for given delegator */
    delegatorServices(request: QueryDelegatorServicesRequest): Promise<QueryDelegatorServicesResponse>;
    /**
     * DelegatorService queries the service info for given delegator and service
     * id.
     */
    delegatorService(request: QueryDelegatorServiceRequest): Promise<QueryDelegatorServiceResponse>;
    /** UserPreferences queries the user preferences. */
    userPreferences(request: QueryUserPreferencesRequest): Promise<QueryUserPreferencesResponse>;
    /** Params queries the restaking parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    operatorJoinedServices(request: QueryOperatorJoinedServicesRequest): Promise<QueryOperatorJoinedServicesResponse>;
    serviceAllowedOperators(request: QueryServiceAllowedOperatorsRequest): Promise<QueryServiceAllowedOperatorsResponse>;
    serviceSecuringPools(request: QueryServiceSecuringPoolsRequest): Promise<QueryServiceSecuringPoolsResponse>;
    serviceOperators(request: QueryServiceOperatorsRequest): Promise<QueryServiceOperatorsResponse>;
    poolDelegations(request: QueryPoolDelegationsRequest): Promise<QueryPoolDelegationsResponse>;
    poolDelegation(request: QueryPoolDelegationRequest): Promise<QueryPoolDelegationResponse>;
    poolUnbondingDelegations(request: QueryPoolUnbondingDelegationsRequest): Promise<QueryPoolUnbondingDelegationsResponse>;
    poolUnbondingDelegation(request: QueryPoolUnbondingDelegationRequest): Promise<QueryPoolUnbondingDelegationResponse>;
    operatorDelegations(request: QueryOperatorDelegationsRequest): Promise<QueryOperatorDelegationsResponse>;
    operatorDelegation(request: QueryOperatorDelegationRequest): Promise<QueryOperatorDelegationResponse>;
    operatorUnbondingDelegations(request: QueryOperatorUnbondingDelegationsRequest): Promise<QueryOperatorUnbondingDelegationsResponse>;
    operatorUnbondingDelegation(request: QueryOperatorUnbondingDelegationRequest): Promise<QueryOperatorUnbondingDelegationResponse>;
    serviceDelegations(request: QueryServiceDelegationsRequest): Promise<QueryServiceDelegationsResponse>;
    serviceDelegation(request: QueryServiceDelegationRequest): Promise<QueryServiceDelegationResponse>;
    serviceUnbondingDelegations(request: QueryServiceUnbondingDelegationsRequest): Promise<QueryServiceUnbondingDelegationsResponse>;
    serviceUnbondingDelegation(request: QueryServiceUnbondingDelegationRequest): Promise<QueryServiceUnbondingDelegationResponse>;
    delegatorPoolDelegations(request: QueryDelegatorPoolDelegationsRequest): Promise<QueryDelegatorPoolDelegationsResponse>;
    delegatorPoolUnbondingDelegations(request: QueryDelegatorPoolUnbondingDelegationsRequest): Promise<QueryDelegatorPoolUnbondingDelegationsResponse>;
    delegatorOperatorDelegations(request: QueryDelegatorOperatorDelegationsRequest): Promise<QueryDelegatorOperatorDelegationsResponse>;
    delegatorOperatorUnbondingDelegations(request: QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<QueryDelegatorOperatorUnbondingDelegationsResponse>;
    delegatorServiceDelegations(request: QueryDelegatorServiceDelegationsRequest): Promise<QueryDelegatorServiceDelegationsResponse>;
    delegatorServiceUnbondingDelegations(request: QueryDelegatorServiceUnbondingDelegationsRequest): Promise<QueryDelegatorServiceUnbondingDelegationsResponse>;
    delegatorPools(request: QueryDelegatorPoolsRequest): Promise<QueryDelegatorPoolsResponse>;
    delegatorPool(request: QueryDelegatorPoolRequest): Promise<QueryDelegatorPoolResponse>;
    delegatorOperators(request: QueryDelegatorOperatorsRequest): Promise<QueryDelegatorOperatorsResponse>;
    delegatorOperator(request: QueryDelegatorOperatorRequest): Promise<QueryDelegatorOperatorResponse>;
    delegatorServices(request: QueryDelegatorServicesRequest): Promise<QueryDelegatorServicesResponse>;
    delegatorService(request: QueryDelegatorServiceRequest): Promise<QueryDelegatorServiceResponse>;
    userPreferences(request: QueryUserPreferencesRequest): Promise<QueryUserPreferencesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    operatorJoinedServices(request: QueryOperatorJoinedServicesRequest): Promise<QueryOperatorJoinedServicesResponse>;
    serviceAllowedOperators(request: QueryServiceAllowedOperatorsRequest): Promise<QueryServiceAllowedOperatorsResponse>;
    serviceSecuringPools(request: QueryServiceSecuringPoolsRequest): Promise<QueryServiceSecuringPoolsResponse>;
    serviceOperators(request: QueryServiceOperatorsRequest): Promise<QueryServiceOperatorsResponse>;
    poolDelegations(request: QueryPoolDelegationsRequest): Promise<QueryPoolDelegationsResponse>;
    poolDelegation(request: QueryPoolDelegationRequest): Promise<QueryPoolDelegationResponse>;
    poolUnbondingDelegations(request: QueryPoolUnbondingDelegationsRequest): Promise<QueryPoolUnbondingDelegationsResponse>;
    poolUnbondingDelegation(request: QueryPoolUnbondingDelegationRequest): Promise<QueryPoolUnbondingDelegationResponse>;
    operatorDelegations(request: QueryOperatorDelegationsRequest): Promise<QueryOperatorDelegationsResponse>;
    operatorDelegation(request: QueryOperatorDelegationRequest): Promise<QueryOperatorDelegationResponse>;
    operatorUnbondingDelegations(request: QueryOperatorUnbondingDelegationsRequest): Promise<QueryOperatorUnbondingDelegationsResponse>;
    operatorUnbondingDelegation(request: QueryOperatorUnbondingDelegationRequest): Promise<QueryOperatorUnbondingDelegationResponse>;
    serviceDelegations(request: QueryServiceDelegationsRequest): Promise<QueryServiceDelegationsResponse>;
    serviceDelegation(request: QueryServiceDelegationRequest): Promise<QueryServiceDelegationResponse>;
    serviceUnbondingDelegations(request: QueryServiceUnbondingDelegationsRequest): Promise<QueryServiceUnbondingDelegationsResponse>;
    serviceUnbondingDelegation(request: QueryServiceUnbondingDelegationRequest): Promise<QueryServiceUnbondingDelegationResponse>;
    delegatorPoolDelegations(request: QueryDelegatorPoolDelegationsRequest): Promise<QueryDelegatorPoolDelegationsResponse>;
    delegatorPoolUnbondingDelegations(request: QueryDelegatorPoolUnbondingDelegationsRequest): Promise<QueryDelegatorPoolUnbondingDelegationsResponse>;
    delegatorOperatorDelegations(request: QueryDelegatorOperatorDelegationsRequest): Promise<QueryDelegatorOperatorDelegationsResponse>;
    delegatorOperatorUnbondingDelegations(request: QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<QueryDelegatorOperatorUnbondingDelegationsResponse>;
    delegatorServiceDelegations(request: QueryDelegatorServiceDelegationsRequest): Promise<QueryDelegatorServiceDelegationsResponse>;
    delegatorServiceUnbondingDelegations(request: QueryDelegatorServiceUnbondingDelegationsRequest): Promise<QueryDelegatorServiceUnbondingDelegationsResponse>;
    delegatorPools(request: QueryDelegatorPoolsRequest): Promise<QueryDelegatorPoolsResponse>;
    delegatorPool(request: QueryDelegatorPoolRequest): Promise<QueryDelegatorPoolResponse>;
    delegatorOperators(request: QueryDelegatorOperatorsRequest): Promise<QueryDelegatorOperatorsResponse>;
    delegatorOperator(request: QueryDelegatorOperatorRequest): Promise<QueryDelegatorOperatorResponse>;
    delegatorServices(request: QueryDelegatorServicesRequest): Promise<QueryDelegatorServicesResponse>;
    delegatorService(request: QueryDelegatorServiceRequest): Promise<QueryDelegatorServiceResponse>;
    userPreferences(request: QueryUserPreferencesRequest): Promise<QueryUserPreferencesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
