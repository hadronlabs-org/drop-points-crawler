import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryBondedAmountRequest, QueryBondedAmountResponse, QueryRewardRequest, QueryRewardResponse, QueryGetUserStakeStateRequest, QueryGetUserStakeStateResponse, QueryAllUserStakeStateRequest, QueryAllUserStakeStateResponse, QueryGetAssetPoolStateRequest, QueryGetAssetPoolStateResponse, QueryAllAssetPoolStateRequest, QueryAllAssetPoolStateResponse, QueryGetAssetMaturityPoolStateRequest, QueryGetAssetMaturityPoolStateResponse, QueryAllAssetMaturityPoolStateRequest, QueryAllAssetMaturityPoolStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of BondedAmount items. */
  bondedAmount(request: DeepPartial<QueryBondedAmountRequest>, metadata?: grpc.Metadata): Promise<QueryBondedAmountResponse>;
  reward(request: DeepPartial<QueryRewardRequest>, metadata?: grpc.Metadata): Promise<QueryRewardResponse>;
  userStakeState(request: DeepPartial<QueryGetUserStakeStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetUserStakeStateResponse>;
  /** Queries a list of UserStakeState items. */
  userStakeStateAll(request: DeepPartial<QueryAllUserStakeStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllUserStakeStateResponse>;
  assetPoolState(request: DeepPartial<QueryGetAssetPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetPoolStateResponse>;
  assetPoolStateAll(request?: DeepPartial<QueryAllAssetPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllAssetPoolStateResponse>;
  assetMaturityPoolState(request: DeepPartial<QueryGetAssetMaturityPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetMaturityPoolStateResponse>;
  assetMaturityPoolStateAll(request?: DeepPartial<QueryAllAssetMaturityPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllAssetMaturityPoolStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bondedAmount = this.bondedAmount.bind(this);
    this.reward = this.reward.bind(this);
    this.userStakeState = this.userStakeState.bind(this);
    this.userStakeStateAll = this.userStakeStateAll.bind(this);
    this.assetPoolState = this.assetPoolState.bind(this);
    this.assetPoolStateAll = this.assetPoolStateAll.bind(this);
    this.assetMaturityPoolState = this.assetMaturityPoolState.bind(this);
    this.assetMaturityPoolStateAll = this.assetMaturityPoolStateAll.bind(this);
  }
  bondedAmount(request: DeepPartial<QueryBondedAmountRequest>, metadata?: grpc.Metadata): Promise<QueryBondedAmountResponse> {
    return this.rpc.unary(QueryBondedAmountDesc, QueryBondedAmountRequest.fromPartial(request as any), metadata);
  }
  reward(request: DeepPartial<QueryRewardRequest>, metadata?: grpc.Metadata): Promise<QueryRewardResponse> {
    return this.rpc.unary(QueryRewardDesc, QueryRewardRequest.fromPartial(request as any), metadata);
  }
  userStakeState(request: DeepPartial<QueryGetUserStakeStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetUserStakeStateResponse> {
    return this.rpc.unary(QueryUserStakeStateDesc, QueryGetUserStakeStateRequest.fromPartial(request as any), metadata);
  }
  userStakeStateAll(request: DeepPartial<QueryAllUserStakeStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllUserStakeStateResponse> {
    return this.rpc.unary(QueryUserStakeStateAllDesc, QueryAllUserStakeStateRequest.fromPartial(request as any), metadata);
  }
  assetPoolState(request: DeepPartial<QueryGetAssetPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetPoolStateResponse> {
    return this.rpc.unary(QueryAssetPoolStateDesc, QueryGetAssetPoolStateRequest.fromPartial(request as any), metadata);
  }
  assetPoolStateAll(request: DeepPartial<QueryAllAssetPoolStateRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllAssetPoolStateResponse> {
    return this.rpc.unary(QueryAssetPoolStateAllDesc, QueryAllAssetPoolStateRequest.fromPartial(request as any), metadata);
  }
  assetMaturityPoolState(request: DeepPartial<QueryGetAssetMaturityPoolStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetAssetMaturityPoolStateResponse> {
    return this.rpc.unary(QueryAssetMaturityPoolStateDesc, QueryGetAssetMaturityPoolStateRequest.fromPartial(request as any), metadata);
  }
  assetMaturityPoolStateAll(request: DeepPartial<QueryAllAssetMaturityPoolStateRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllAssetMaturityPoolStateResponse> {
    return this.rpc.unary(QueryAssetMaturityPoolStateAllDesc, QueryAllAssetMaturityPoolStateRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.ystaking.v1.Query"
};
export const QueryBondedAmountDesc: UnaryMethodDefinitionish = {
  methodName: "BondedAmount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryBondedAmountRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBondedAmountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryRewardDesc: UnaryMethodDefinitionish = {
  methodName: "Reward",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRewardRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRewardResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUserStakeStateDesc: UnaryMethodDefinitionish = {
  methodName: "UserStakeState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetUserStakeStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetUserStakeStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUserStakeStateAllDesc: UnaryMethodDefinitionish = {
  methodName: "UserStakeStateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllUserStakeStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllUserStakeStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryAssetPoolStateDesc: UnaryMethodDefinitionish = {
  methodName: "AssetPoolState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetAssetPoolStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetAssetPoolStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryAssetPoolStateAllDesc: UnaryMethodDefinitionish = {
  methodName: "AssetPoolStateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllAssetPoolStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllAssetPoolStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryAssetMaturityPoolStateDesc: UnaryMethodDefinitionish = {
  methodName: "AssetMaturityPoolState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetAssetMaturityPoolStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetAssetMaturityPoolStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryAssetMaturityPoolStateAllDesc: UnaryMethodDefinitionish = {
  methodName: "AssetMaturityPoolStateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllAssetMaturityPoolStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllAssetMaturityPoolStateResponse.decode(data),
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