import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryOperatorRequest, QueryOperatorResponse, QueryOperatorParamsRequest, QueryOperatorParamsResponse, QueryOperatorsRequest, QueryOperatorsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Operator defines a gRPC query method that returns the operator by the given
     * operator id.
     */
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    /**
     * OperatorParams defines a gRPC query method that returns the operator's
     * params by the given operator id.
     */
    operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse>;
    /** Operators defines a gRPC query method that returns the list of operators. */
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    /**
     * Params defines a gRPC query method that returns the parameters of the
     * module.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse>;
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    operator(request: QueryOperatorRequest): Promise<QueryOperatorResponse>;
    operatorParams(request: QueryOperatorParamsRequest): Promise<QueryOperatorParamsResponse>;
    operators(request?: QueryOperatorsRequest): Promise<QueryOperatorsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
