import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStakedPAssetRequest, QueryGetStakedPAssetResponse, QueryAllStakedPAssetRequest, QueryAllStakedPAssetResponse, QueryGetTotalStakedPAssetRequest, QueryGetTotalStakedPAssetResponse, QueryAllTotalStakedPAssetRequest, QueryAllTotalStakedPAssetResponse, QueryGetVoteRequest, QueryGetVoteResponse, QueryAllVoteRequest, QueryAllVoteResponse, QueryGetProposalRequest, QueryGetProposalResponse, QueryAllProposalRequest, QueryAllProposalResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Queries a StakedPAsset by index. */
  stakedPAsset(request: DeepPartial<QueryGetStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetStakedPAssetResponse>;
  /** Queries a list of StakedPAsset items. */
  stakedPAssetAll(request: DeepPartial<QueryAllStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllStakedPAssetResponse>;
  totalStakedPAsset(request: DeepPartial<QueryGetTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetTotalStakedPAssetResponse>;
  totalStakedPAssetAll(request: DeepPartial<QueryAllTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllTotalStakedPAssetResponse>;
  /** Queries a Vote by index. */
  vote(request: DeepPartial<QueryGetVoteRequest>, metadata?: grpc.Metadata): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  voteAll(request: DeepPartial<QueryAllVoteRequest>, metadata?: grpc.Metadata): Promise<QueryAllVoteResponse>;
  /** Queries a Proposal by index. */
  proposal(request: DeepPartial<QueryGetProposalRequest>, metadata?: grpc.Metadata): Promise<QueryGetProposalResponse>;
  /** Queries a list of Proposal items. */
  proposalAll(request: DeepPartial<QueryAllProposalRequest>, metadata?: grpc.Metadata): Promise<QueryAllProposalResponse>;
  /** Queries a list of Proposal items. */
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.stakedPAsset = this.stakedPAsset.bind(this);
    this.stakedPAssetAll = this.stakedPAssetAll.bind(this);
    this.totalStakedPAsset = this.totalStakedPAsset.bind(this);
    this.totalStakedPAssetAll = this.totalStakedPAssetAll.bind(this);
    this.vote = this.vote.bind(this);
    this.voteAll = this.voteAll.bind(this);
    this.proposal = this.proposal.bind(this);
    this.proposalAll = this.proposalAll.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request as any), metadata);
  }
  stakedPAsset(request: DeepPartial<QueryGetStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetStakedPAssetResponse> {
    return this.rpc.unary(QueryStakedPAssetDesc, QueryGetStakedPAssetRequest.fromPartial(request as any), metadata);
  }
  stakedPAssetAll(request: DeepPartial<QueryAllStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllStakedPAssetResponse> {
    return this.rpc.unary(QueryStakedPAssetAllDesc, QueryAllStakedPAssetRequest.fromPartial(request as any), metadata);
  }
  totalStakedPAsset(request: DeepPartial<QueryGetTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryGetTotalStakedPAssetResponse> {
    return this.rpc.unary(QueryTotalStakedPAssetDesc, QueryGetTotalStakedPAssetRequest.fromPartial(request as any), metadata);
  }
  totalStakedPAssetAll(request: DeepPartial<QueryAllTotalStakedPAssetRequest>, metadata?: grpc.Metadata): Promise<QueryAllTotalStakedPAssetResponse> {
    return this.rpc.unary(QueryTotalStakedPAssetAllDesc, QueryAllTotalStakedPAssetRequest.fromPartial(request as any), metadata);
  }
  vote(request: DeepPartial<QueryGetVoteRequest>, metadata?: grpc.Metadata): Promise<QueryGetVoteResponse> {
    return this.rpc.unary(QueryVoteDesc, QueryGetVoteRequest.fromPartial(request as any), metadata);
  }
  voteAll(request: DeepPartial<QueryAllVoteRequest>, metadata?: grpc.Metadata): Promise<QueryAllVoteResponse> {
    return this.rpc.unary(QueryVoteAllDesc, QueryAllVoteRequest.fromPartial(request as any), metadata);
  }
  proposal(request: DeepPartial<QueryGetProposalRequest>, metadata?: grpc.Metadata): Promise<QueryGetProposalResponse> {
    return this.rpc.unary(QueryProposalDesc, QueryGetProposalRequest.fromPartial(request as any), metadata);
  }
  proposalAll(request: DeepPartial<QueryAllProposalRequest>, metadata?: grpc.Metadata): Promise<QueryAllProposalResponse> {
    return this.rpc.unary(QueryProposalAllDesc, QueryAllProposalRequest.fromPartial(request as any), metadata);
  }
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse> {
    return this.rpc.unary(QueryTallyResultDesc, QueryTallyResultRequest.fromPartial(request as any), metadata);
  }
}
export const QueryDesc = {
  serviceName: "pryzm.pgov.v1.Query"
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
export const QueryStakedPAssetDesc: UnaryMethodDefinitionish = {
  methodName: "StakedPAsset",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetStakedPAssetRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryStakedPAssetAllDesc: UnaryMethodDefinitionish = {
  methodName: "StakedPAssetAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllStakedPAssetRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryTotalStakedPAssetDesc: UnaryMethodDefinitionish = {
  methodName: "TotalStakedPAsset",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetTotalStakedPAssetRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetTotalStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryTotalStakedPAssetAllDesc: UnaryMethodDefinitionish = {
  methodName: "TotalStakedPAssetAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllTotalStakedPAssetRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllTotalStakedPAssetResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetVoteRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryVoteAllDesc: UnaryMethodDefinitionish = {
  methodName: "VoteAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllVoteRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryProposalDesc: UnaryMethodDefinitionish = {
  methodName: "Proposal",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryGetProposalRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryGetProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryProposalAllDesc: UnaryMethodDefinitionish = {
  methodName: "ProposalAll",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAllProposalRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const QueryTallyResultDesc: UnaryMethodDefinitionish = {
  methodName: "TallyResult",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTallyResultRequest.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTallyResultResponse.decode(data),
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