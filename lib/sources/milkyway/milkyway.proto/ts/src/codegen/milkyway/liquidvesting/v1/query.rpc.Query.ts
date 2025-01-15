import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryUserInsuranceFundRequest, QueryUserInsuranceFundResponse, QueryUserInsuranceFundsRequest, QueryUserInsuranceFundsResponse, QueryUserRestakableAssetsRequest, QueryUserRestakableAssetsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * UserInsuranceFund defines a gRPC query method that returns the user's
   * insurance fund balance given their address.
   */
  userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse>;
  /**
   * UserInsuranceFunds defines a gRPC query method that returns all user's
   * insurance fund balance.
   */
  userInsuranceFunds(request?: QueryUserInsuranceFundsRequest): Promise<QueryUserInsuranceFundsResponse>;
  /**
   * UserRestakableAssets defines a gRPC query method that returns
   * the amount of assets that can be restaked from the one minted by this
   * module.
   */
  userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse>;
  /**
   * InsuranceFund defines a gRPC query method that returns the amount of tokens
   * that are in the insurance fund.
   */
  insuranceFund(request?: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
  /**
   * Params defines a gRPC query method that returns the parameters of the
   * module.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.userInsuranceFund = this.userInsuranceFund.bind(this);
    this.userInsuranceFunds = this.userInsuranceFunds.bind(this);
    this.userRestakableAssets = this.userRestakableAssets.bind(this);
    this.insuranceFund = this.insuranceFund.bind(this);
    this.params = this.params.bind(this);
  }
  userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse> {
    const data = QueryUserInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Query", "UserInsuranceFund", data);
    return promise.then(data => QueryUserInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  userInsuranceFunds(request: QueryUserInsuranceFundsRequest = {
    pagination: undefined
  }): Promise<QueryUserInsuranceFundsResponse> {
    const data = QueryUserInsuranceFundsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Query", "UserInsuranceFunds", data);
    return promise.then(data => QueryUserInsuranceFundsResponse.decode(new BinaryReader(data)));
  }
  userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse> {
    const data = QueryUserRestakableAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Query", "UserRestakableAssets", data);
    return promise.then(data => QueryUserRestakableAssetsResponse.decode(new BinaryReader(data)));
  }
  insuranceFund(request: QueryInsuranceFundRequest = {}): Promise<QueryInsuranceFundResponse> {
    const data = QueryInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Query", "InsuranceFund", data);
    return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    userInsuranceFund(request: QueryUserInsuranceFundRequest): Promise<QueryUserInsuranceFundResponse> {
      return queryService.userInsuranceFund(request);
    },
    userInsuranceFunds(request?: QueryUserInsuranceFundsRequest): Promise<QueryUserInsuranceFundsResponse> {
      return queryService.userInsuranceFunds(request);
    },
    userRestakableAssets(request: QueryUserRestakableAssetsRequest): Promise<QueryUserRestakableAssetsResponse> {
      return queryService.userRestakableAssets(request);
    },
    insuranceFund(request?: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
      return queryService.insuranceFund(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};