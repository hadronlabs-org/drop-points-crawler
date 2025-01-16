import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPoolByIdRequest, QueryPoolResponse, QueryPoolByDenomRequest, QueryPoolsRequest, QueryPoolsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** PoolByID defines a gRPC query method that returns the pool by the given ID. */
  poolByID(request: QueryPoolByIdRequest): Promise<QueryPoolResponse>;
  /**
   * PoolByDenom defines a gRPC query method that returns the pool by the given
   * denom.
   */
  poolByDenom(request: QueryPoolByDenomRequest): Promise<QueryPoolResponse>;
  /** Pools defines a gRPC query method that returns all pools. */
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.poolByID = this.poolByID.bind(this);
    this.poolByDenom = this.poolByDenom.bind(this);
    this.pools = this.pools.bind(this);
  }
  poolByID(request: QueryPoolByIdRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByIdRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.pools.v1.Query", "PoolByID", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  poolByDenom(request: QueryPoolByDenomRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.pools.v1.Query", "PoolByDenom", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.pools.v1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    poolByID(request: QueryPoolByIdRequest): Promise<QueryPoolResponse> {
      return queryService.poolByID(request);
    },
    poolByDenom(request: QueryPoolByDenomRequest): Promise<QueryPoolResponse> {
      return queryService.poolByDenom(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    }
  };
};