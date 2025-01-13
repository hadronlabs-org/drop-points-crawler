import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.operatorJoinedServices = this.operatorJoinedServices.bind(this);
    this.serviceAllowedOperators = this.serviceAllowedOperators.bind(this);
    this.serviceSecuringPools = this.serviceSecuringPools.bind(this);
    this.serviceOperators = this.serviceOperators.bind(this);
    this.poolDelegations = this.poolDelegations.bind(this);
    this.poolDelegation = this.poolDelegation.bind(this);
    this.poolUnbondingDelegations = this.poolUnbondingDelegations.bind(this);
    this.poolUnbondingDelegation = this.poolUnbondingDelegation.bind(this);
    this.operatorDelegations = this.operatorDelegations.bind(this);
    this.operatorDelegation = this.operatorDelegation.bind(this);
    this.operatorUnbondingDelegations = this.operatorUnbondingDelegations.bind(this);
    this.operatorUnbondingDelegation = this.operatorUnbondingDelegation.bind(this);
    this.serviceDelegations = this.serviceDelegations.bind(this);
    this.serviceDelegation = this.serviceDelegation.bind(this);
    this.serviceUnbondingDelegations = this.serviceUnbondingDelegations.bind(this);
    this.serviceUnbondingDelegation = this.serviceUnbondingDelegation.bind(this);
    this.delegatorPoolDelegations = this.delegatorPoolDelegations.bind(this);
    this.delegatorPoolUnbondingDelegations = this.delegatorPoolUnbondingDelegations.bind(this);
    this.delegatorOperatorDelegations = this.delegatorOperatorDelegations.bind(this);
    this.delegatorOperatorUnbondingDelegations = this.delegatorOperatorUnbondingDelegations.bind(this);
    this.delegatorServiceDelegations = this.delegatorServiceDelegations.bind(this);
    this.delegatorServiceUnbondingDelegations = this.delegatorServiceUnbondingDelegations.bind(this);
    this.delegatorPools = this.delegatorPools.bind(this);
    this.delegatorPool = this.delegatorPool.bind(this);
    this.delegatorOperators = this.delegatorOperators.bind(this);
    this.delegatorOperator = this.delegatorOperator.bind(this);
    this.delegatorServices = this.delegatorServices.bind(this);
    this.delegatorService = this.delegatorService.bind(this);
    this.userPreferences = this.userPreferences.bind(this);
    this.params = this.params.bind(this);
  }
  operatorJoinedServices(request: QueryOperatorJoinedServicesRequest): Promise<QueryOperatorJoinedServicesResponse> {
    const data = QueryOperatorJoinedServicesRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "OperatorJoinedServices", data);
    return promise.then(data => QueryOperatorJoinedServicesResponse.decode(new BinaryReader(data)));
  }
  serviceAllowedOperators(request: QueryServiceAllowedOperatorsRequest): Promise<QueryServiceAllowedOperatorsResponse> {
    const data = QueryServiceAllowedOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceAllowedOperators", data);
    return promise.then(data => QueryServiceAllowedOperatorsResponse.decode(new BinaryReader(data)));
  }
  serviceSecuringPools(request: QueryServiceSecuringPoolsRequest): Promise<QueryServiceSecuringPoolsResponse> {
    const data = QueryServiceSecuringPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceSecuringPools", data);
    return promise.then(data => QueryServiceSecuringPoolsResponse.decode(new BinaryReader(data)));
  }
  serviceOperators(request: QueryServiceOperatorsRequest): Promise<QueryServiceOperatorsResponse> {
    const data = QueryServiceOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceOperators", data);
    return promise.then(data => QueryServiceOperatorsResponse.decode(new BinaryReader(data)));
  }
  poolDelegations(request: QueryPoolDelegationsRequest): Promise<QueryPoolDelegationsResponse> {
    const data = QueryPoolDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "PoolDelegations", data);
    return promise.then(data => QueryPoolDelegationsResponse.decode(new BinaryReader(data)));
  }
  poolDelegation(request: QueryPoolDelegationRequest): Promise<QueryPoolDelegationResponse> {
    const data = QueryPoolDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "PoolDelegation", data);
    return promise.then(data => QueryPoolDelegationResponse.decode(new BinaryReader(data)));
  }
  poolUnbondingDelegations(request: QueryPoolUnbondingDelegationsRequest): Promise<QueryPoolUnbondingDelegationsResponse> {
    const data = QueryPoolUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "PoolUnbondingDelegations", data);
    return promise.then(data => QueryPoolUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  poolUnbondingDelegation(request: QueryPoolUnbondingDelegationRequest): Promise<QueryPoolUnbondingDelegationResponse> {
    const data = QueryPoolUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "PoolUnbondingDelegation", data);
    return promise.then(data => QueryPoolUnbondingDelegationResponse.decode(new BinaryReader(data)));
  }
  operatorDelegations(request: QueryOperatorDelegationsRequest): Promise<QueryOperatorDelegationsResponse> {
    const data = QueryOperatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "OperatorDelegations", data);
    return promise.then(data => QueryOperatorDelegationsResponse.decode(new BinaryReader(data)));
  }
  operatorDelegation(request: QueryOperatorDelegationRequest): Promise<QueryOperatorDelegationResponse> {
    const data = QueryOperatorDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "OperatorDelegation", data);
    return promise.then(data => QueryOperatorDelegationResponse.decode(new BinaryReader(data)));
  }
  operatorUnbondingDelegations(request: QueryOperatorUnbondingDelegationsRequest): Promise<QueryOperatorUnbondingDelegationsResponse> {
    const data = QueryOperatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "OperatorUnbondingDelegations", data);
    return promise.then(data => QueryOperatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  operatorUnbondingDelegation(request: QueryOperatorUnbondingDelegationRequest): Promise<QueryOperatorUnbondingDelegationResponse> {
    const data = QueryOperatorUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "OperatorUnbondingDelegation", data);
    return promise.then(data => QueryOperatorUnbondingDelegationResponse.decode(new BinaryReader(data)));
  }
  serviceDelegations(request: QueryServiceDelegationsRequest): Promise<QueryServiceDelegationsResponse> {
    const data = QueryServiceDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceDelegations", data);
    return promise.then(data => QueryServiceDelegationsResponse.decode(new BinaryReader(data)));
  }
  serviceDelegation(request: QueryServiceDelegationRequest): Promise<QueryServiceDelegationResponse> {
    const data = QueryServiceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceDelegation", data);
    return promise.then(data => QueryServiceDelegationResponse.decode(new BinaryReader(data)));
  }
  serviceUnbondingDelegations(request: QueryServiceUnbondingDelegationsRequest): Promise<QueryServiceUnbondingDelegationsResponse> {
    const data = QueryServiceUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceUnbondingDelegations", data);
    return promise.then(data => QueryServiceUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  serviceUnbondingDelegation(request: QueryServiceUnbondingDelegationRequest): Promise<QueryServiceUnbondingDelegationResponse> {
    const data = QueryServiceUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "ServiceUnbondingDelegation", data);
    return promise.then(data => QueryServiceUnbondingDelegationResponse.decode(new BinaryReader(data)));
  }
  delegatorPoolDelegations(request: QueryDelegatorPoolDelegationsRequest): Promise<QueryDelegatorPoolDelegationsResponse> {
    const data = QueryDelegatorPoolDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorPoolDelegations", data);
    return promise.then(data => QueryDelegatorPoolDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorPoolUnbondingDelegations(request: QueryDelegatorPoolUnbondingDelegationsRequest): Promise<QueryDelegatorPoolUnbondingDelegationsResponse> {
    const data = QueryDelegatorPoolUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorPoolUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorPoolUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorOperatorDelegations(request: QueryDelegatorOperatorDelegationsRequest): Promise<QueryDelegatorOperatorDelegationsResponse> {
    const data = QueryDelegatorOperatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorOperatorDelegations", data);
    return promise.then(data => QueryDelegatorOperatorDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorOperatorUnbondingDelegations(request: QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<QueryDelegatorOperatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorOperatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorOperatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorOperatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorServiceDelegations(request: QueryDelegatorServiceDelegationsRequest): Promise<QueryDelegatorServiceDelegationsResponse> {
    const data = QueryDelegatorServiceDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorServiceDelegations", data);
    return promise.then(data => QueryDelegatorServiceDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorServiceUnbondingDelegations(request: QueryDelegatorServiceUnbondingDelegationsRequest): Promise<QueryDelegatorServiceUnbondingDelegationsResponse> {
    const data = QueryDelegatorServiceUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorServiceUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorServiceUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  }
  delegatorPools(request: QueryDelegatorPoolsRequest): Promise<QueryDelegatorPoolsResponse> {
    const data = QueryDelegatorPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorPools", data);
    return promise.then(data => QueryDelegatorPoolsResponse.decode(new BinaryReader(data)));
  }
  delegatorPool(request: QueryDelegatorPoolRequest): Promise<QueryDelegatorPoolResponse> {
    const data = QueryDelegatorPoolRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorPool", data);
    return promise.then(data => QueryDelegatorPoolResponse.decode(new BinaryReader(data)));
  }
  delegatorOperators(request: QueryDelegatorOperatorsRequest): Promise<QueryDelegatorOperatorsResponse> {
    const data = QueryDelegatorOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorOperators", data);
    return promise.then(data => QueryDelegatorOperatorsResponse.decode(new BinaryReader(data)));
  }
  delegatorOperator(request: QueryDelegatorOperatorRequest): Promise<QueryDelegatorOperatorResponse> {
    const data = QueryDelegatorOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorOperator", data);
    return promise.then(data => QueryDelegatorOperatorResponse.decode(new BinaryReader(data)));
  }
  delegatorServices(request: QueryDelegatorServicesRequest): Promise<QueryDelegatorServicesResponse> {
    const data = QueryDelegatorServicesRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorServices", data);
    return promise.then(data => QueryDelegatorServicesResponse.decode(new BinaryReader(data)));
  }
  delegatorService(request: QueryDelegatorServiceRequest): Promise<QueryDelegatorServiceResponse> {
    const data = QueryDelegatorServiceRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "DelegatorService", data);
    return promise.then(data => QueryDelegatorServiceResponse.decode(new BinaryReader(data)));
  }
  userPreferences(request: QueryUserPreferencesRequest): Promise<QueryUserPreferencesResponse> {
    const data = QueryUserPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "UserPreferences", data);
    return promise.then(data => QueryUserPreferencesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    operatorJoinedServices(request: QueryOperatorJoinedServicesRequest): Promise<QueryOperatorJoinedServicesResponse> {
      return queryService.operatorJoinedServices(request);
    },
    serviceAllowedOperators(request: QueryServiceAllowedOperatorsRequest): Promise<QueryServiceAllowedOperatorsResponse> {
      return queryService.serviceAllowedOperators(request);
    },
    serviceSecuringPools(request: QueryServiceSecuringPoolsRequest): Promise<QueryServiceSecuringPoolsResponse> {
      return queryService.serviceSecuringPools(request);
    },
    serviceOperators(request: QueryServiceOperatorsRequest): Promise<QueryServiceOperatorsResponse> {
      return queryService.serviceOperators(request);
    },
    poolDelegations(request: QueryPoolDelegationsRequest): Promise<QueryPoolDelegationsResponse> {
      return queryService.poolDelegations(request);
    },
    poolDelegation(request: QueryPoolDelegationRequest): Promise<QueryPoolDelegationResponse> {
      return queryService.poolDelegation(request);
    },
    poolUnbondingDelegations(request: QueryPoolUnbondingDelegationsRequest): Promise<QueryPoolUnbondingDelegationsResponse> {
      return queryService.poolUnbondingDelegations(request);
    },
    poolUnbondingDelegation(request: QueryPoolUnbondingDelegationRequest): Promise<QueryPoolUnbondingDelegationResponse> {
      return queryService.poolUnbondingDelegation(request);
    },
    operatorDelegations(request: QueryOperatorDelegationsRequest): Promise<QueryOperatorDelegationsResponse> {
      return queryService.operatorDelegations(request);
    },
    operatorDelegation(request: QueryOperatorDelegationRequest): Promise<QueryOperatorDelegationResponse> {
      return queryService.operatorDelegation(request);
    },
    operatorUnbondingDelegations(request: QueryOperatorUnbondingDelegationsRequest): Promise<QueryOperatorUnbondingDelegationsResponse> {
      return queryService.operatorUnbondingDelegations(request);
    },
    operatorUnbondingDelegation(request: QueryOperatorUnbondingDelegationRequest): Promise<QueryOperatorUnbondingDelegationResponse> {
      return queryService.operatorUnbondingDelegation(request);
    },
    serviceDelegations(request: QueryServiceDelegationsRequest): Promise<QueryServiceDelegationsResponse> {
      return queryService.serviceDelegations(request);
    },
    serviceDelegation(request: QueryServiceDelegationRequest): Promise<QueryServiceDelegationResponse> {
      return queryService.serviceDelegation(request);
    },
    serviceUnbondingDelegations(request: QueryServiceUnbondingDelegationsRequest): Promise<QueryServiceUnbondingDelegationsResponse> {
      return queryService.serviceUnbondingDelegations(request);
    },
    serviceUnbondingDelegation(request: QueryServiceUnbondingDelegationRequest): Promise<QueryServiceUnbondingDelegationResponse> {
      return queryService.serviceUnbondingDelegation(request);
    },
    delegatorPoolDelegations(request: QueryDelegatorPoolDelegationsRequest): Promise<QueryDelegatorPoolDelegationsResponse> {
      return queryService.delegatorPoolDelegations(request);
    },
    delegatorPoolUnbondingDelegations(request: QueryDelegatorPoolUnbondingDelegationsRequest): Promise<QueryDelegatorPoolUnbondingDelegationsResponse> {
      return queryService.delegatorPoolUnbondingDelegations(request);
    },
    delegatorOperatorDelegations(request: QueryDelegatorOperatorDelegationsRequest): Promise<QueryDelegatorOperatorDelegationsResponse> {
      return queryService.delegatorOperatorDelegations(request);
    },
    delegatorOperatorUnbondingDelegations(request: QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<QueryDelegatorOperatorUnbondingDelegationsResponse> {
      return queryService.delegatorOperatorUnbondingDelegations(request);
    },
    delegatorServiceDelegations(request: QueryDelegatorServiceDelegationsRequest): Promise<QueryDelegatorServiceDelegationsResponse> {
      return queryService.delegatorServiceDelegations(request);
    },
    delegatorServiceUnbondingDelegations(request: QueryDelegatorServiceUnbondingDelegationsRequest): Promise<QueryDelegatorServiceUnbondingDelegationsResponse> {
      return queryService.delegatorServiceUnbondingDelegations(request);
    },
    delegatorPools(request: QueryDelegatorPoolsRequest): Promise<QueryDelegatorPoolsResponse> {
      return queryService.delegatorPools(request);
    },
    delegatorPool(request: QueryDelegatorPoolRequest): Promise<QueryDelegatorPoolResponse> {
      return queryService.delegatorPool(request);
    },
    delegatorOperators(request: QueryDelegatorOperatorsRequest): Promise<QueryDelegatorOperatorsResponse> {
      return queryService.delegatorOperators(request);
    },
    delegatorOperator(request: QueryDelegatorOperatorRequest): Promise<QueryDelegatorOperatorResponse> {
      return queryService.delegatorOperator(request);
    },
    delegatorServices(request: QueryDelegatorServicesRequest): Promise<QueryDelegatorServicesResponse> {
      return queryService.delegatorServices(request);
    },
    delegatorService(request: QueryDelegatorServiceRequest): Promise<QueryDelegatorServiceResponse> {
      return queryService.delegatorService(request);
    },
    userPreferences(request: QueryUserPreferencesRequest): Promise<QueryUserPreferencesResponse> {
      return queryService.userPreferences(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};