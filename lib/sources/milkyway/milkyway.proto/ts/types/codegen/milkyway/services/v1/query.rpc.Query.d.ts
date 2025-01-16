import { TxRpc } from "../../../types";
import { QueryClient } from "@cosmjs/stargate";
import { QueryServiceRequest, QueryServiceResponse, QueryServicesRequest, QueryServicesResponse, QueryServiceParamsRequest, QueryServiceParamsResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Service defines a gRPC query method that returns the service by the given
     * service id.
     */
    service(request: QueryServiceRequest): Promise<QueryServiceResponse>;
    /**
     * Services defines a gRPC query method that returns the actively validates
     * services currently registered in the module.
     */
    services(request?: QueryServicesRequest): Promise<QueryServicesResponse>;
    /**
     * ServiceParams defines a gRPC query method that returns the parameters of
     * service.
     */
    serviceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse>;
    /**
     * Params defines a gRPC query method that returns the parameters of the
     * module.
     */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: TxRpc);
    service(request: QueryServiceRequest): Promise<QueryServiceResponse>;
    services(request?: QueryServicesRequest): Promise<QueryServicesResponse>;
    serviceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    service(request: QueryServiceRequest): Promise<QueryServiceResponse>;
    services(request?: QueryServicesRequest): Promise<QueryServicesResponse>;
    serviceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
