import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetBondRequest, QueryGetBondResponse, QueryAllBondRequest, QueryAllBondResponse, QueryGetUnbondingRequest, QueryGetUnbondingResponse, QueryAllUnbondingRequest, QueryAllUnbondingResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a Pool by index. */
  pool(request: DeepPartial<QueryGetPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  poolAll(request?: DeepPartial<QueryAllPoolRequest>, metadata?: grpc.Metadata): Promise<QueryAllPoolResponse>;
  /** Queries a Bond by index. */
  bond(request: DeepPartial<QueryGetBondRequest>, metadata?: grpc.Metadata): Promise<QueryGetBondResponse>;
  /** Queries a list of Bond items. */
  bondAll(request: DeepPartial<QueryAllBondRequest>, metadata?: grpc.Metadata): Promise<QueryAllBondResponse>;
  /** Queries a Unbonding by id. */
  unbonding(request: DeepPartial<QueryGetUnbondingRequest>, metadata?: grpc.Metadata): Promise<QueryGetUnbondingResponse>;
  /** Queries a list of Unbonding items. */
  unbondingAll(request: DeepPartial<QueryAllUnbondingRequest>, metadata?: grpc.Metadata): Promise<QueryAllUnbondingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.bond = this.bond.bind(this);
    this.bondAll = this.bondAll.bind(this);
    this.unbonding = this.unbonding.bind(this);
    this.unbondingAll = this.unbondingAll.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  pool(request: DeepPartial<QueryGetPoolRequest>, metadata?: grpc.Metadata): Promise<QueryGetPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryGetPoolRequest.fromPartial(request as any), metadata);
  }
  poolAll(request: DeepPartial<QueryAllPoolRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllPoolResponse> {
    return this.rpc.unary(QueryPoolAllDesc, QueryAllPoolRequest.fromPartial(request as any), metadata);
  }
  bond(request: DeepPartial<QueryGetBondRequest>, metadata?: grpc.Metadata): Promise<QueryGetBondResponse> {
    return this.rpc.unary(QueryBondDesc, QueryGetBondRequest.fromPartial(request as any), metadata);
  }
  bondAll(request: DeepPartial<QueryAllBondRequest>, metadata?: grpc.Metadata): Promise<QueryAllBondResponse> {
    return this.rpc.unary(QueryBondAllDesc, QueryAllBondRequest.fromPartial(request as any), metadata);
  }
  unbonding(request: DeepPartial<QueryGetUnbondingRequest>, metadata?: grpc.Metadata): Promise<QueryGetUnbondingResponse> {
    return this.rpc.unary(QueryUnbondingDesc, QueryGetUnbondingRequest.fromPartial(request as any), metadata);
  }
  unbondingAll(request: DeepPartial<QueryAllUnbondingRequest>, metadata?: grpc.Metadata): Promise<QueryAllUnbondingResponse> {
    return this.rpc.unary(QueryUnbondingAllDesc, QueryAllUnbondingRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.incentives.v1.Query"
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
export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetPoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryPoolAllDesc: UnaryMethodDefinitionish = {
  methodName: "PoolAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllPoolRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryBondDesc: UnaryMethodDefinitionish = {
  methodName: "Bond",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetBondRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetBondResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryBondAllDesc: UnaryMethodDefinitionish = {
  methodName: "BondAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllBondRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllBondResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUnbondingDesc: UnaryMethodDefinitionish = {
  methodName: "Unbonding",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetUnbondingRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetUnbondingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUnbondingAllDesc: UnaryMethodDefinitionish = {
  methodName: "UnbondingAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllUnbondingRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllUnbondingResponse.decode(data),
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