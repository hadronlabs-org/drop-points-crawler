import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreatePool, MsgCreatePoolResponse, MsgUpdateRewardTokenWeight, MsgUpdateRewardTokenWeightResponse, MsgAddRewardTokenToPool, MsgAddRewardTokenToPoolResponse, MsgBond, MsgBondResponse, MsgUnbond, MsgUnbondResponse, MsgClaimReward, MsgClaimRewardResponse, MsgClaimUnbonding, MsgClaimUnbondingResponse, MsgCancelUnbonding, MsgCancelUnbondingResponse, MsgIncentivizePool, MsgIncentivizePoolResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  createPool(request: DeepPartial<MsgCreatePool>, metadata?: grpc.Metadata): Promise<MsgCreatePoolResponse>;
  updateRewardTokenWeight(request: DeepPartial<MsgUpdateRewardTokenWeight>, metadata?: grpc.Metadata): Promise<MsgUpdateRewardTokenWeightResponse>;
  addRewardTokenToPool(request: DeepPartial<MsgAddRewardTokenToPool>, metadata?: grpc.Metadata): Promise<MsgAddRewardTokenToPoolResponse>;
  bond(request: DeepPartial<MsgBond>, metadata?: grpc.Metadata): Promise<MsgBondResponse>;
  unbond(request: DeepPartial<MsgUnbond>, metadata?: grpc.Metadata): Promise<MsgUnbondResponse>;
  claimReward(request: DeepPartial<MsgClaimReward>, metadata?: grpc.Metadata): Promise<MsgClaimRewardResponse>;
  claimUnbonding(request: DeepPartial<MsgClaimUnbonding>, metadata?: grpc.Metadata): Promise<MsgClaimUnbondingResponse>;
  cancelUnbonding(request: DeepPartial<MsgCancelUnbonding>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingResponse>;
  incentivizePool(request: DeepPartial<MsgIncentivizePool>, metadata?: grpc.Metadata): Promise<MsgIncentivizePoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.createPool = this.createPool.bind(this);
    this.updateRewardTokenWeight = this.updateRewardTokenWeight.bind(this);
    this.addRewardTokenToPool = this.addRewardTokenToPool.bind(this);
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.claimReward = this.claimReward.bind(this);
    this.claimUnbonding = this.claimUnbonding.bind(this);
    this.cancelUnbonding = this.cancelUnbonding.bind(this);
    this.incentivizePool = this.incentivizePool.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  createPool(request: DeepPartial<MsgCreatePool>, metadata?: grpc.Metadata): Promise<MsgCreatePoolResponse> {
    return this.rpc.unary(MsgCreatePoolDesc, MsgCreatePool.fromPartial(request as any), metadata);
  }
  updateRewardTokenWeight(request: DeepPartial<MsgUpdateRewardTokenWeight>, metadata?: grpc.Metadata): Promise<MsgUpdateRewardTokenWeightResponse> {
    return this.rpc.unary(MsgUpdateRewardTokenWeightDesc, MsgUpdateRewardTokenWeight.fromPartial(request as any), metadata);
  }
  addRewardTokenToPool(request: DeepPartial<MsgAddRewardTokenToPool>, metadata?: grpc.Metadata): Promise<MsgAddRewardTokenToPoolResponse> {
    return this.rpc.unary(MsgAddRewardTokenToPoolDesc, MsgAddRewardTokenToPool.fromPartial(request as any), metadata);
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
  claimUnbonding(request: DeepPartial<MsgClaimUnbonding>, metadata?: grpc.Metadata): Promise<MsgClaimUnbondingResponse> {
    return this.rpc.unary(MsgClaimUnbondingDesc, MsgClaimUnbonding.fromPartial(request as any), metadata);
  }
  cancelUnbonding(request: DeepPartial<MsgCancelUnbonding>, metadata?: grpc.Metadata): Promise<MsgCancelUnbondingResponse> {
    return this.rpc.unary(MsgCancelUnbondingDesc, MsgCancelUnbonding.fromPartial(request as any), metadata);
  }
  incentivizePool(request: DeepPartial<MsgIncentivizePool>, metadata?: grpc.Metadata): Promise<MsgIncentivizePoolResponse> {
    return this.rpc.unary(MsgIncentivizePoolDesc, MsgIncentivizePool.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.incentives.v1.Msg"
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
export const MsgCreatePoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreatePool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreatePool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreatePoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateRewardTokenWeightDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateRewardTokenWeight",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateRewardTokenWeight.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateRewardTokenWeightResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgAddRewardTokenToPoolDesc: UnaryMethodDefinitionish = {
  methodName: "AddRewardTokenToPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddRewardTokenToPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddRewardTokenToPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
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
export const MsgClaimUnbondingDesc: UnaryMethodDefinitionish = {
  methodName: "ClaimUnbonding",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaimUnbonding.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimUnbondingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCancelUnbondingDesc: UnaryMethodDefinitionish = {
  methodName: "CancelUnbonding",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelUnbonding.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelUnbondingResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgIncentivizePoolDesc: UnaryMethodDefinitionish = {
  methodName: "IncentivizePool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIncentivizePool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIncentivizePoolResponse.decode(data),
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