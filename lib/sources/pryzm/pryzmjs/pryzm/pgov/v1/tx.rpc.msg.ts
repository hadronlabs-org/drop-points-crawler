import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgStakePAssets, MsgStakePAssetsResponse, MsgUnstakePAssets, MsgUnstakePAssetsResponse, MsgSubmitVote, MsgSubmitVoteResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgRetryVoteTransmit, MsgRetryVoteTransmitResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  stakePAssets(request: DeepPartial<MsgStakePAssets>, metadata?: grpc.Metadata): Promise<MsgStakePAssetsResponse>;
  unstakePAssets(request: DeepPartial<MsgUnstakePAssets>, metadata?: grpc.Metadata): Promise<MsgUnstakePAssetsResponse>;
  submitVote(request: DeepPartial<MsgSubmitVote>, metadata?: grpc.Metadata): Promise<MsgSubmitVoteResponse>;
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse>;
  retryVoteTransmit(request: DeepPartial<MsgRetryVoteTransmit>, metadata?: grpc.Metadata): Promise<MsgRetryVoteTransmitResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.stakePAssets = this.stakePAssets.bind(this);
    this.unstakePAssets = this.unstakePAssets.bind(this);
    this.submitVote = this.submitVote.bind(this);
    this.submitProposal = this.submitProposal.bind(this);
    this.retryVoteTransmit = this.retryVoteTransmit.bind(this);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  stakePAssets(request: DeepPartial<MsgStakePAssets>, metadata?: grpc.Metadata): Promise<MsgStakePAssetsResponse> {
    return this.rpc.unary(MsgStakePAssetsDesc, MsgStakePAssets.fromPartial(request as any), metadata);
  }
  unstakePAssets(request: DeepPartial<MsgUnstakePAssets>, metadata?: grpc.Metadata): Promise<MsgUnstakePAssetsResponse> {
    return this.rpc.unary(MsgUnstakePAssetsDesc, MsgUnstakePAssets.fromPartial(request as any), metadata);
  }
  submitVote(request: DeepPartial<MsgSubmitVote>, metadata?: grpc.Metadata): Promise<MsgSubmitVoteResponse> {
    return this.rpc.unary(MsgSubmitVoteDesc, MsgSubmitVote.fromPartial(request as any), metadata);
  }
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request as any), metadata);
  }
  retryVoteTransmit(request: DeepPartial<MsgRetryVoteTransmit>, metadata?: grpc.Metadata): Promise<MsgRetryVoteTransmitResponse> {
    return this.rpc.unary(MsgRetryVoteTransmitDesc, MsgRetryVoteTransmit.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.pgov.v1.Msg"
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
export const MsgStakePAssetsDesc: UnaryMethodDefinitionish = {
  methodName: "StakePAssets",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgStakePAssets.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStakePAssetsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUnstakePAssetsDesc: UnaryMethodDefinitionish = {
  methodName: "UnstakePAssets",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUnstakePAssets.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUnstakePAssetsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSubmitVoteDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitVote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitVote.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSubmitProposalDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitProposal.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgRetryVoteTransmitDesc: UnaryMethodDefinitionish = {
  methodName: "RetryVoteTransmit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRetryVoteTransmit.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRetryVoteTransmitResponse.decode(data),
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