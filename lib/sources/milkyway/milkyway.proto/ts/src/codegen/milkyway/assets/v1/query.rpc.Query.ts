import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAssetsRequest, QueryAssetsResponse, QueryAssetRequest, QueryAssetResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Assets defined a gRPC query method that returns all assets registered. */
  assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
  /**
   * Asset defines a gRPC query method that returns the asset associated with
   * the given token denomination.
   */
  asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.assets = this.assets.bind(this);
    this.asset = this.asset.bind(this);
  }
  assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse> {
    const data = QueryAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.assets.v1.Query", "Assets", data);
    return promise.then(data => QueryAssetsResponse.decode(new BinaryReader(data)));
  }
  asset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
    const data = QueryAssetRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.assets.v1.Query", "Asset", data);
    return promise.then(data => QueryAssetResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse> {
      return queryService.assets(request);
    },
    asset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
      return queryService.asset(request);
    }
  };
};