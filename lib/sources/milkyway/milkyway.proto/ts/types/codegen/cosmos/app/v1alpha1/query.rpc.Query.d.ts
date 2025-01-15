import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query is the app module query service. */
export interface Query {
    /** Config returns the current app config. */
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
};
