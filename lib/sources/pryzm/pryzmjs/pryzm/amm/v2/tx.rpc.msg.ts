import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgProposeMatch, MsgProposeMatchResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  proposeMatch(request: DeepPartial<MsgProposeMatch>, metadata?: grpc.Metadata): Promise<MsgProposeMatchResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposeMatch = this.proposeMatch.bind(this);
  }
  proposeMatch(request: DeepPartial<MsgProposeMatch>, metadata?: grpc.Metadata): Promise<MsgProposeMatchResponse> {
    return this.rpc.unary(MsgProposeMatchDesc, MsgProposeMatch.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.amm.v2.Msg"
};
export const MsgProposeMatchDesc: UnaryMethodDefinitionish = {
  methodName: "ProposeMatch",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProposeMatch.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProposeMatchResponse.decode(data),
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