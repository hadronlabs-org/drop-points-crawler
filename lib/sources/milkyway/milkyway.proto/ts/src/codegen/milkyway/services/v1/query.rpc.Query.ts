import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.service = this.service.bind(this);
    this.services = this.services.bind(this);
    this.serviceParams = this.serviceParams.bind(this);
    this.params = this.params.bind(this);
  }
  service(request: QueryServiceRequest): Promise<QueryServiceResponse> {
    const data = QueryServiceRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Query", "Service", data);
    return promise.then(data => QueryServiceResponse.decode(new BinaryReader(data)));
  }
  services(request: QueryServicesRequest = {
    pagination: undefined
  }): Promise<QueryServicesResponse> {
    const data = QueryServicesRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Query", "Services", data);
    return promise.then(data => QueryServicesResponse.decode(new BinaryReader(data)));
  }
  serviceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse> {
    const data = QueryServiceParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Query", "ServiceParams", data);
    return promise.then(data => QueryServiceParamsResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    service(request: QueryServiceRequest): Promise<QueryServiceResponse> {
      return queryService.service(request);
    },
    services(request?: QueryServicesRequest): Promise<QueryServicesResponse> {
      return queryService.services(request);
    },
    serviceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse> {
      return queryService.serviceParams(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};