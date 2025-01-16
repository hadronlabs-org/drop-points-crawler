import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    poolByID(request: QueryPoolByIdRequest): Promise<QueryPoolResponse>;
    poolByDenom(request: QueryPoolByDenomRequest): Promise<QueryPoolResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    poolByID(request: QueryPoolByIdRequest): Promise<QueryPoolResponse>;
    poolByDenom(request: QueryPoolByDenomRequest): Promise<QueryPoolResponse>;
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
};
