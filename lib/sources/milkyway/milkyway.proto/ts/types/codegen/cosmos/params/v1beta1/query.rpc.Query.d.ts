import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     *
     * Since: cosmos-sdk 0.46
     */
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
};
