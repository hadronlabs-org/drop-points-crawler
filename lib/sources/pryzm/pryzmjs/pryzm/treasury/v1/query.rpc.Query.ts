import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetActionRequest, QueryGetActionResponse, QueryGetFlowTradeRequest, QueryGetFlowTradeResponse, QueryAllFlowTradeRequest, QueryAllFlowTradeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Action by index. */
  action(request?: DeepPartial<QueryGetActionRequest>, metadata?: grpc.Metadata): Promise<QueryGetActionResponse>;
  /** Queries a FlowTrade by index. */
  flowTrade(request: DeepPartial<QueryGetFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowTradeResponse>;
  /** Queries a list of FlowTrade items. */
  flowTradeAll(request?: DeepPartial<QueryAllFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryAllFlowTradeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.action = this.action.bind(this);
    this.flowTrade = this.flowTrade.bind(this);
    this.flowTradeAll = this.flowTradeAll.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  action(request: DeepPartial<QueryGetActionRequest> = {}, metadata?: grpc.Metadata): Promise<QueryGetActionResponse> {
    return this.rpc.unary(QueryActionDesc, QueryGetActionRequest.fromPartial(request as any), metadata);
  }
  flowTrade(request: DeepPartial<QueryGetFlowTradeRequest>, metadata?: grpc.Metadata): Promise<QueryGetFlowTradeResponse> {
    return this.rpc.unary(QueryFlowTradeDesc, QueryGetFlowTradeRequest.fromPartial(request as any), metadata);
  }
  flowTradeAll(request: DeepPartial<QueryAllFlowTradeRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllFlowTradeResponse> {
    return this.rpc.unary(QueryFlowTradeAllDesc, QueryAllFlowTradeRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.treasury.v1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryActionDesc: UnaryMethodDefinitionish = {
  methodName: "Action",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetActionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetActionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryFlowTradeDesc: UnaryMethodDefinitionish = {
  methodName: "FlowTrade",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetFlowTradeRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetFlowTradeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryFlowTradeAllDesc: UnaryMethodDefinitionish = {
  methodName: "FlowTradeAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllFlowTradeRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFlowTradeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}