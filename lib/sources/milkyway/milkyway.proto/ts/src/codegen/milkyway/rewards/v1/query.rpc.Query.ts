import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rewardsPlans = this.rewardsPlans.bind(this);
    this.rewardsPlan = this.rewardsPlan.bind(this);
    this.poolOutstandingRewards = this.poolOutstandingRewards.bind(this);
    this.operatorOutstandingRewards = this.operatorOutstandingRewards.bind(this);
    this.serviceOutstandingRewards = this.serviceOutstandingRewards.bind(this);
    this.operatorCommission = this.operatorCommission.bind(this);
    this.poolDelegationRewards = this.poolDelegationRewards.bind(this);
    this.operatorDelegationRewards = this.operatorDelegationRewards.bind(this);
    this.serviceDelegationRewards = this.serviceDelegationRewards.bind(this);
    this.delegatorTotalRewards = this.delegatorTotalRewards.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rewardsPlans(request: QueryRewardsPlansRequest = {
    pagination: undefined
  }): Promise<QueryRewardsPlansResponse> {
    const data = QueryRewardsPlansRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "RewardsPlans", data);
    return promise.then(data => QueryRewardsPlansResponse.decode(new BinaryReader(data)));
  }
  rewardsPlan(request: QueryRewardsPlanRequest): Promise<QueryRewardsPlanResponse> {
    const data = QueryRewardsPlanRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "RewardsPlan", data);
    return promise.then(data => QueryRewardsPlanResponse.decode(new BinaryReader(data)));
  }
  poolOutstandingRewards(request: QueryPoolOutstandingRewardsRequest): Promise<QueryPoolOutstandingRewardsResponse> {
    const data = QueryPoolOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "PoolOutstandingRewards", data);
    return promise.then(data => QueryPoolOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  operatorOutstandingRewards(request: QueryOperatorOutstandingRewardsRequest): Promise<QueryOperatorOutstandingRewardsResponse> {
    const data = QueryOperatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "OperatorOutstandingRewards", data);
    return promise.then(data => QueryOperatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  serviceOutstandingRewards(request: QueryServiceOutstandingRewardsRequest): Promise<QueryServiceOutstandingRewardsResponse> {
    const data = QueryServiceOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "ServiceOutstandingRewards", data);
    return promise.then(data => QueryServiceOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  operatorCommission(request: QueryOperatorCommissionRequest): Promise<QueryOperatorCommissionResponse> {
    const data = QueryOperatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "OperatorCommission", data);
    return promise.then(data => QueryOperatorCommissionResponse.decode(new BinaryReader(data)));
  }
  poolDelegationRewards(request: QueryPoolDelegationRewardsRequest): Promise<QueryPoolDelegationRewardsResponse> {
    const data = QueryPoolDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "PoolDelegationRewards", data);
    return promise.then(data => QueryPoolDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  operatorDelegationRewards(request: QueryOperatorDelegationRewardsRequest): Promise<QueryOperatorDelegationRewardsResponse> {
    const data = QueryOperatorDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "OperatorDelegationRewards", data);
    return promise.then(data => QueryOperatorDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  serviceDelegationRewards(request: QueryServiceDelegationRewardsRequest): Promise<QueryServiceDelegationRewardsResponse> {
    const data = QueryServiceDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "ServiceDelegationRewards", data);
    return promise.then(data => QueryServiceDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  delegatorTotalRewards(request: QueryDelegatorTotalRewardsRequest): Promise<QueryDelegatorTotalRewardsResponse> {
    const data = QueryDelegatorTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "DelegatorTotalRewards", data);
    return promise.then(data => QueryDelegatorTotalRewardsResponse.decode(new BinaryReader(data)));
  }
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rewardsPlans(request?: QueryRewardsPlansRequest): Promise<QueryRewardsPlansResponse> {
      return queryService.rewardsPlans(request);
    },
    rewardsPlan(request: QueryRewardsPlanRequest): Promise<QueryRewardsPlanResponse> {
      return queryService.rewardsPlan(request);
    },
    poolOutstandingRewards(request: QueryPoolOutstandingRewardsRequest): Promise<QueryPoolOutstandingRewardsResponse> {
      return queryService.poolOutstandingRewards(request);
    },
    operatorOutstandingRewards(request: QueryOperatorOutstandingRewardsRequest): Promise<QueryOperatorOutstandingRewardsResponse> {
      return queryService.operatorOutstandingRewards(request);
    },
    serviceOutstandingRewards(request: QueryServiceOutstandingRewardsRequest): Promise<QueryServiceOutstandingRewardsResponse> {
      return queryService.serviceOutstandingRewards(request);
    },
    operatorCommission(request: QueryOperatorCommissionRequest): Promise<QueryOperatorCommissionResponse> {
      return queryService.operatorCommission(request);
    },
    poolDelegationRewards(request: QueryPoolDelegationRewardsRequest): Promise<QueryPoolDelegationRewardsResponse> {
      return queryService.poolDelegationRewards(request);
    },
    operatorDelegationRewards(request: QueryOperatorDelegationRewardsRequest): Promise<QueryOperatorDelegationRewardsResponse> {
      return queryService.operatorDelegationRewards(request);
    },
    serviceDelegationRewards(request: QueryServiceDelegationRewardsRequest): Promise<QueryServiceDelegationRewardsResponse> {
      return queryService.serviceDelegationRewards(request);
    },
    delegatorTotalRewards(request: QueryDelegatorTotalRewardsRequest): Promise<QueryDelegatorTotalRewardsResponse> {
      return queryService.delegatorTotalRewards(request);
    },
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
      return queryService.delegatorWithdrawAddress(request);
    }
  };
};