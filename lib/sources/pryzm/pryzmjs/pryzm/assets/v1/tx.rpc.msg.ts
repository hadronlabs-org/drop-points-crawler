import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterAsset, MsgRegisterAssetResponse, MsgDisableAsset, MsgDisableAssetResponse, MsgUpdateMaturityParams, MsgUpdateMaturityParamsResponse, MsgUpdateFeeRatios, MsgUpdateFeeRatiosResponse, MsgIntroduceMaturityLevel, MsgIntroduceMaturityLevelResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  registerAsset(request: DeepPartial<MsgRegisterAsset>, metadata?: grpc.Metadata): Promise<MsgRegisterAssetResponse>;
  disableAsset(request: DeepPartial<MsgDisableAsset>, metadata?: grpc.Metadata): Promise<MsgDisableAssetResponse>;
  updateMaturityParams(request: DeepPartial<MsgUpdateMaturityParams>, metadata?: grpc.Metadata): Promise<MsgUpdateMaturityParamsResponse>;
  updateFeeRatios(request: DeepPartial<MsgUpdateFeeRatios>, metadata?: grpc.Metadata): Promise<MsgUpdateFeeRatiosResponse>;
  introduceMaturityLevel(request: DeepPartial<MsgIntroduceMaturityLevel>, metadata?: grpc.Metadata): Promise<MsgIntroduceMaturityLevelResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.registerAsset = this.registerAsset.bind(this);
    this.disableAsset = this.disableAsset.bind(this);
    this.updateMaturityParams = this.updateMaturityParams.bind(this);
    this.updateFeeRatios = this.updateFeeRatios.bind(this);
    this.introduceMaturityLevel = this.introduceMaturityLevel.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  registerAsset(request: DeepPartial<MsgRegisterAsset>, metadata?: grpc.Metadata): Promise<MsgRegisterAssetResponse> {
    return this.rpc.unary(MsgRegisterAssetDesc, MsgRegisterAsset.fromPartial(request as any), metadata);
  }
  disableAsset(request: DeepPartial<MsgDisableAsset>, metadata?: grpc.Metadata): Promise<MsgDisableAssetResponse> {
    return this.rpc.unary(MsgDisableAssetDesc, MsgDisableAsset.fromPartial(request as any), metadata);
  }
  updateMaturityParams(request: DeepPartial<MsgUpdateMaturityParams>, metadata?: grpc.Metadata): Promise<MsgUpdateMaturityParamsResponse> {
    return this.rpc.unary(MsgUpdateMaturityParamsDesc, MsgUpdateMaturityParams.fromPartial(request as any), metadata);
  }
  updateFeeRatios(request: DeepPartial<MsgUpdateFeeRatios>, metadata?: grpc.Metadata): Promise<MsgUpdateFeeRatiosResponse> {
    return this.rpc.unary(MsgUpdateFeeRatiosDesc, MsgUpdateFeeRatios.fromPartial(request as any), metadata);
  }
  introduceMaturityLevel(request: DeepPartial<MsgIntroduceMaturityLevel>, metadata?: grpc.Metadata): Promise<MsgIntroduceMaturityLevelResponse> {
    return this.rpc.unary(MsgIntroduceMaturityLevelDesc, MsgIntroduceMaturityLevel.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.assets.v1.Msg"
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgRegisterAssetDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterAsset",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterAsset.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgDisableAssetDesc: UnaryMethodDefinitionish = {
  methodName: "DisableAsset",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDisableAsset.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDisableAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateMaturityParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateMaturityParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateMaturityParams.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateMaturityParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateFeeRatiosDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateFeeRatios",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateFeeRatios.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateFeeRatiosResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgIntroduceMaturityLevelDesc: UnaryMethodDefinitionish = {
  methodName: "IntroduceMaturityLevel",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIntroduceMaturityLevel.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIntroduceMaturityLevelResponse.decode(data),
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