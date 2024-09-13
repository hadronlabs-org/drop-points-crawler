import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgBond, MsgBondResponse, MsgUnbond, MsgUnbondResponse, MsgClaimReward, MsgClaimRewardResponse, MsgExitPool, MsgExitPoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  bond(request: DeepPartial<MsgBond>, metadata?: grpc.Metadata): Promise<MsgBondResponse>;
  unbond(request: DeepPartial<MsgUnbond>, metadata?: grpc.Metadata): Promise<MsgUnbondResponse>;
  claimReward(request: DeepPartial<MsgClaimReward>, metadata?: grpc.Metadata): Promise<MsgClaimRewardResponse>;
  exitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.exitPool = this.exitPool.bind(this);
  }
  bond(request: DeepPartial<MsgBond>, metadata?: grpc.Metadata): Promise<MsgBondResponse> {
    return this.rpc.unary(MsgBondDesc, MsgBond.fromPartial(request as any), metadata);
  }
  unbond(request: DeepPartial<MsgUnbond>, metadata?: grpc.Metadata): Promise<MsgUnbondResponse> {
    return this.rpc.unary(MsgUnbondDesc, MsgUnbond.fromPartial(request as any), metadata);
  }
  claimReward(request: DeepPartial<MsgClaimReward>, metadata?: grpc.Metadata): Promise<MsgClaimRewardResponse> {
    return this.rpc.unary(MsgClaimRewardDesc, MsgClaimReward.fromPartial(request as any), metadata);
  }
  exitPool(request: DeepPartial<MsgExitPool>, metadata?: grpc.Metadata): Promise<MsgExitPoolResponse> {
    return this.rpc.unary(MsgExitPoolDesc, MsgExitPool.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.ystaking.v1.Msg"
};
export const MsgBondDesc: UnaryMethodDefinitionish = {
  methodName: "Bond",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBond.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBondResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUnbondDesc: UnaryMethodDefinitionish = {
  methodName: "Unbond",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUnbond.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUnbondResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgClaimRewardDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimReward",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimReward.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimRewardResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgExitPoolDesc: UnaryMethodDefinitionish = {
  methodName: "ExitPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExitPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitPoolResponse.decode(data),
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