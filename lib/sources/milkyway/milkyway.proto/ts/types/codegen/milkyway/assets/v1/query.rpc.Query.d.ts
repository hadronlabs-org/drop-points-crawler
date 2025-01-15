import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
    asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
    asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
};
