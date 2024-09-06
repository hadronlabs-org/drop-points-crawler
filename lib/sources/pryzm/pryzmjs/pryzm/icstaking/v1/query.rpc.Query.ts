import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetHostChainRequest, QueryGetHostChainResponse, QueryAllHostChainRequest, QueryAllHostChainResponse, QueryGetHostChainStateRequest, QueryGetHostChainStateResponse, QueryAllHostChainStateRequest, QueryAllHostChainStateResponse, QueryGetUndelegationRequest, QueryGetUndelegationResponse, QueryAllUndelegationRequest, QueryAllUndelegationResponse, QueryIncompleteUndelegationRequest, QueryIncompleteUndelegationResponse, QueryGetChannelUndelegationRequest, QueryGetChannelUndelegationResponse, QueryAllChannelUndelegationRequest, QueryAllChannelUndelegationResponse, QueryDelegationQueueBalanceRequest, QueryDelegationQueueBalanceResponse, QueryEpochInfoRequest, QueryEpochInfoResponse, QueryAllReplyDataRequest, QueryAllReplyDataResponse, QueryAllRedeemableLsmRequest, QueryAllRedeemableLsmResponse, QueryAllFailedLsmTransferRequest, QueryAllFailedLsmTransferResponse, QueryGetMultiSigConnectionRequest, QueryGetMultiSigConnectionResponse, QueryAllMultiSigConnectionRequest, QueryAllMultiSigConnectionResponse, QueryGetMultiSigPacketRequest, QueryGetMultiSigPacketResponse, QueryAllMultiSigPacketRequest, QueryAllMultiSigPacketResponse, QueryAllSweepTransferRequest, QueryAllSweepTransferResponse, QuerySimulateStakeRequest, QuerySimulateStakeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a HostChain by index. */
  hostChain(request: DeepPartial<QueryGetHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainResponse>;
  /** Queries a list of HostChain items. */
  hostChainAll(request?: DeepPartial<QueryAllHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryAllHostChainResponse>;
  /** Queries a HostChainState by index. */
  hostChainState(request: DeepPartial<QueryGetHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainStateResponse>;
  /** Queries a list of HostChainState items. */
  hostChainStateAll(request?: DeepPartial<QueryAllHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllHostChainStateResponse>;
  /** Queries a Undelegation by index. */
  undelegation(request: DeepPartial<QueryGetUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetUndelegationResponse>;
  /** Queries a list of Undelegation items. */
  undelegationAll(request: DeepPartial<QueryAllUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllUndelegationResponse>;
  /** Queries a list of incomplete undelegations sorted by completion time. */
  incompleteUndelegationAll(request: DeepPartial<QueryIncompleteUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryIncompleteUndelegationResponse>;
  /** Queries a ChannelUndelegation by index. */
  channelUndelegation(request: DeepPartial<QueryGetChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetChannelUndelegationResponse>;
  /** Queries a list of ChannelUndelegation items. */
  channelUndelegationAll(request: DeepPartial<QueryAllChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllChannelUndelegationResponse>;
  /** Queries the balance of the delegation queue. */
  delegationQueueBalance(request: DeepPartial<QueryDelegationQueueBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationQueueBalanceResponse>;
  /** Queries the information about last delegation and undelegation times */
  epochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse>;
  /** Queries the list of reply data */
  replyDataAll(request?: DeepPartial<QueryAllReplyDataRequest>, metadata?: grpc.Metadata): Promise<QueryAllReplyDataResponse>;
  /** Queries a list of FailedLsmTransfer items. */
  redeemableLsmAll(request: DeepPartial<QueryAllRedeemableLsmRequest>, metadata?: grpc.Metadata): Promise<QueryAllRedeemableLsmResponse>;
  /** Queries a list of FailedLsmTransfer items. */
  failedLsmTransferAll(request: DeepPartial<QueryAllFailedLsmTransferRequest>, metadata?: grpc.Metadata): Promise<QueryAllFailedLsmTransferResponse>;
  /** Queries a MultiSigConnection by index. */
  multiSigConnection(request: DeepPartial<QueryGetMultiSigConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryGetMultiSigConnectionResponse>;
  /** Queries a list of MultiSigConnection items. */
  multiSigConnectionAll(request?: DeepPartial<QueryAllMultiSigConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryAllMultiSigConnectionResponse>;
  /** Queries a MultiSigPacket by index. */
  multiSigPacket(request: DeepPartial<QueryGetMultiSigPacketRequest>, metadata?: grpc.Metadata): Promise<QueryGetMultiSigPacketResponse>;
  /** Queries a list of MultiSigPacket items. */
  multiSigPacketAll(request: DeepPartial<QueryAllMultiSigPacketRequest>, metadata?: grpc.Metadata): Promise<QueryAllMultiSigPacketResponse>;
  /** Queries the list of sweep transfer */
  sweepTransferAll(request?: DeepPartial<QueryAllSweepTransferRequest>, metadata?: grpc.Metadata): Promise<QueryAllSweepTransferResponse>;
  /** Simulates the stake message */
  simulateStake(request: DeepPartial<QuerySimulateStakeRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateStakeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.hostChain = this.hostChain.bind(this);
    this.hostChainAll = this.hostChainAll.bind(this);
    this.hostChainState = this.hostChainState.bind(this);
    this.hostChainStateAll = this.hostChainStateAll.bind(this);
    this.undelegation = this.undelegation.bind(this);
    this.undelegationAll = this.undelegationAll.bind(this);
    this.incompleteUndelegationAll = this.incompleteUndelegationAll.bind(this);
    this.channelUndelegation = this.channelUndelegation.bind(this);
    this.channelUndelegationAll = this.channelUndelegationAll.bind(this);
    this.delegationQueueBalance = this.delegationQueueBalance.bind(this);
    this.epochInfo = this.epochInfo.bind(this);
    this.replyDataAll = this.replyDataAll.bind(this);
    this.redeemableLsmAll = this.redeemableLsmAll.bind(this);
    this.failedLsmTransferAll = this.failedLsmTransferAll.bind(this);
    this.multiSigConnection = this.multiSigConnection.bind(this);
    this.multiSigConnectionAll = this.multiSigConnectionAll.bind(this);
    this.multiSigPacket = this.multiSigPacket.bind(this);
    this.multiSigPacketAll = this.multiSigPacketAll.bind(this);
    this.sweepTransferAll = this.sweepTransferAll.bind(this);
    this.simulateStake = this.simulateStake.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  hostChain(request: DeepPartial<QueryGetHostChainRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainResponse> {
    return this.rpc.unary(QueryHostChainDesc, QueryGetHostChainRequest.fromPartial(request as any), metadata);
  }
  hostChainAll(request: DeepPartial<QueryAllHostChainRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllHostChainResponse> {
    return this.rpc.unary(QueryHostChainAllDesc, QueryAllHostChainRequest.fromPartial(request as any), metadata);
  }
  hostChainState(request: DeepPartial<QueryGetHostChainStateRequest>, metadata?: grpc.Metadata): Promise<QueryGetHostChainStateResponse> {
    return this.rpc.unary(QueryHostChainStateDesc, QueryGetHostChainStateRequest.fromPartial(request as any), metadata);
  }
  hostChainStateAll(request: DeepPartial<QueryAllHostChainStateRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllHostChainStateResponse> {
    return this.rpc.unary(QueryHostChainStateAllDesc, QueryAllHostChainStateRequest.fromPartial(request as any), metadata);
  }
  undelegation(request: DeepPartial<QueryGetUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetUndelegationResponse> {
    return this.rpc.unary(QueryUndelegationDesc, QueryGetUndelegationRequest.fromPartial(request as any), metadata);
  }
  undelegationAll(request: DeepPartial<QueryAllUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllUndelegationResponse> {
    return this.rpc.unary(QueryUndelegationAllDesc, QueryAllUndelegationRequest.fromPartial(request as any), metadata);
  }
  incompleteUndelegationAll(request: DeepPartial<QueryIncompleteUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryIncompleteUndelegationResponse> {
    return this.rpc.unary(QueryIncompleteUndelegationAllDesc, QueryIncompleteUndelegationRequest.fromPartial(request as any), metadata);
  }
  channelUndelegation(request: DeepPartial<QueryGetChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryGetChannelUndelegationResponse> {
    return this.rpc.unary(QueryChannelUndelegationDesc, QueryGetChannelUndelegationRequest.fromPartial(request as any), metadata);
  }
  channelUndelegationAll(request: DeepPartial<QueryAllChannelUndelegationRequest>, metadata?: grpc.Metadata): Promise<QueryAllChannelUndelegationResponse> {
    return this.rpc.unary(QueryChannelUndelegationAllDesc, QueryAllChannelUndelegationRequest.fromPartial(request as any), metadata);
  }
  delegationQueueBalance(request: DeepPartial<QueryDelegationQueueBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationQueueBalanceResponse> {
    return this.rpc.unary(QueryDelegationQueueBalanceDesc, QueryDelegationQueueBalanceRequest.fromPartial(request as any), metadata);
  }
  epochInfo(request: DeepPartial<QueryEpochInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochInfoResponse> {
    return this.rpc.unary(QueryEpochInfoDesc, QueryEpochInfoRequest.fromPartial(request as any), metadata);
  }
  replyDataAll(request: DeepPartial<QueryAllReplyDataRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllReplyDataResponse> {
    return this.rpc.unary(QueryReplyDataAllDesc, QueryAllReplyDataRequest.fromPartial(request as any), metadata);
  }
  redeemableLsmAll(request: DeepPartial<QueryAllRedeemableLsmRequest>, metadata?: grpc.Metadata): Promise<QueryAllRedeemableLsmResponse> {
    return this.rpc.unary(QueryRedeemableLsmAllDesc, QueryAllRedeemableLsmRequest.fromPartial(request as any), metadata);
  }
  failedLsmTransferAll(request: DeepPartial<QueryAllFailedLsmTransferRequest>, metadata?: grpc.Metadata): Promise<QueryAllFailedLsmTransferResponse> {
    return this.rpc.unary(QueryFailedLsmTransferAllDesc, QueryAllFailedLsmTransferRequest.fromPartial(request as any), metadata);
  }
  multiSigConnection(request: DeepPartial<QueryGetMultiSigConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryGetMultiSigConnectionResponse> {
    return this.rpc.unary(QueryMultiSigConnectionDesc, QueryGetMultiSigConnectionRequest.fromPartial(request as any), metadata);
  }
  multiSigConnectionAll(request: DeepPartial<QueryAllMultiSigConnectionRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllMultiSigConnectionResponse> {
    return this.rpc.unary(QueryMultiSigConnectionAllDesc, QueryAllMultiSigConnectionRequest.fromPartial(request as any), metadata);
  }
  multiSigPacket(request: DeepPartial<QueryGetMultiSigPacketRequest>, metadata?: grpc.Metadata): Promise<QueryGetMultiSigPacketResponse> {
    return this.rpc.unary(QueryMultiSigPacketDesc, QueryGetMultiSigPacketRequest.fromPartial(request as any), metadata);
  }
  multiSigPacketAll(request: DeepPartial<QueryAllMultiSigPacketRequest>, metadata?: grpc.Metadata): Promise<QueryAllMultiSigPacketResponse> {
    return this.rpc.unary(QueryMultiSigPacketAllDesc, QueryAllMultiSigPacketRequest.fromPartial(request as any), metadata);
  }
  sweepTransferAll(request: DeepPartial<QueryAllSweepTransferRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllSweepTransferResponse> {
    return this.rpc.unary(QuerySweepTransferAllDesc, QueryAllSweepTransferRequest.fromPartial(request as any), metadata);
  }
  simulateStake(request: DeepPartial<QuerySimulateStakeRequest>, metadata?: grpc.Metadata): Promise<QuerySimulateStakeResponse> {
    return this.rpc.unary(QuerySimulateStakeDesc, QuerySimulateStakeRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.icstaking.v1.Query"
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
export const QueryHostChainDesc: UnaryMethodDefinitionish = {
  methodName: "HostChain",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetHostChainRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryHostChainAllDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllHostChainRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllHostChainResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryHostChainStateDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetHostChainStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetHostChainStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryHostChainStateAllDesc: UnaryMethodDefinitionish = {
  methodName: "HostChainStateAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllHostChainStateRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllHostChainStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUndelegationDesc: UnaryMethodDefinitionish = {
  methodName: "Undelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetUndelegationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "UndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllUndelegationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryIncompleteUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "IncompleteUndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIncompleteUndelegationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIncompleteUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryChannelUndelegationDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUndelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetChannelUndelegationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetChannelUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryChannelUndelegationAllDesc: UnaryMethodDefinitionish = {
  methodName: "ChannelUndelegationAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllChannelUndelegationRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllChannelUndelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryDelegationQueueBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationQueueBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegationQueueBalanceRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegationQueueBalanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryEpochInfoDesc: UnaryMethodDefinitionish = {
  methodName: "EpochInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryEpochInfoRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryEpochInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryReplyDataAllDesc: UnaryMethodDefinitionish = {
  methodName: "ReplyDataAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllReplyDataRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllReplyDataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryRedeemableLsmAllDesc: UnaryMethodDefinitionish = {
  methodName: "RedeemableLsmAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllRedeemableLsmRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllRedeemableLsmResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryFailedLsmTransferAllDesc: UnaryMethodDefinitionish = {
  methodName: "FailedLsmTransferAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllFailedLsmTransferRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllFailedLsmTransferResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMultiSigConnectionDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSigConnection",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetMultiSigConnectionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetMultiSigConnectionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMultiSigConnectionAllDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSigConnectionAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllMultiSigConnectionRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllMultiSigConnectionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMultiSigPacketDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSigPacket",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetMultiSigPacketRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetMultiSigPacketResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryMultiSigPacketAllDesc: UnaryMethodDefinitionish = {
  methodName: "MultiSigPacketAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllMultiSigPacketRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllMultiSigPacketResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySweepTransferAllDesc: UnaryMethodDefinitionish = {
  methodName: "SweepTransferAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllSweepTransferRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllSweepTransferResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QuerySimulateStakeDesc: UnaryMethodDefinitionish = {
  methodName: "SimulateStake",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySimulateStakeRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySimulateStakeResponse.decode(data),
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