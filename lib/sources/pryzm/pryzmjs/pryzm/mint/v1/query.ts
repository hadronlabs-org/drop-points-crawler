import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Minter, MinterAmino, MinterSDKType } from "./minter";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.mint.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.mint.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.mint.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.mint.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryMinterRequest {}
export interface QueryMinterRequestProtoMsg {
  typeUrl: "/pryzm.mint.v1.QueryMinterRequest";
  value: Uint8Array;
}
export interface QueryMinterRequestAmino {}
export interface QueryMinterRequestAminoMsg {
  type: "/pryzm.mint.v1.QueryMinterRequest";
  value: QueryMinterRequestAmino;
}
export interface QueryMinterRequestSDKType {}
export interface QueryMinterResponse {
  minter: Minter;
}
export interface QueryMinterResponseProtoMsg {
  typeUrl: "/pryzm.mint.v1.QueryMinterResponse";
  value: Uint8Array;
}
export interface QueryMinterResponseAmino {
  minter?: MinterAmino;
}
export interface QueryMinterResponseAminoMsg {
  type: "/pryzm.mint.v1.QueryMinterResponse";
  value: QueryMinterResponseAmino;
}
export interface QueryMinterResponseSDKType {
  minter: MinterSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.mint.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.mint.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryMinterRequest(): QueryMinterRequest {
  return {};
}
export const QueryMinterRequest = {
  typeUrl: "/pryzm.mint.v1.QueryMinterRequest",
  is(o: any): o is QueryMinterRequest {
    return o && o.$typeUrl === QueryMinterRequest.typeUrl;
  },
  isSDK(o: any): o is QueryMinterRequestSDKType {
    return o && o.$typeUrl === QueryMinterRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMinterRequestAmino {
    return o && o.$typeUrl === QueryMinterRequest.typeUrl;
  },
  encode(_: QueryMinterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMinterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryMinterRequest {
    return {};
  },
  toJSON(_: QueryMinterRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMinterRequest>): QueryMinterRequest {
    const message = createBaseQueryMinterRequest();
    return message;
  },
  fromAmino(_: QueryMinterRequestAmino): QueryMinterRequest {
    const message = createBaseQueryMinterRequest();
    return message;
  },
  toAmino(_: QueryMinterRequest, useInterfaces: boolean = true): QueryMinterRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinterRequestAminoMsg): QueryMinterRequest {
    return QueryMinterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinterRequestProtoMsg, useInterfaces: boolean = true): QueryMinterRequest {
    return QueryMinterRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMinterRequest): Uint8Array {
    return QueryMinterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinterRequest): QueryMinterRequestProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.QueryMinterRequest",
      value: QueryMinterRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinterRequest.typeUrl, QueryMinterRequest);
function createBaseQueryMinterResponse(): QueryMinterResponse {
  return {
    minter: Minter.fromPartial({})
  };
}
export const QueryMinterResponse = {
  typeUrl: "/pryzm.mint.v1.QueryMinterResponse",
  is(o: any): o is QueryMinterResponse {
    return o && (o.$typeUrl === QueryMinterResponse.typeUrl || Minter.is(o.minter));
  },
  isSDK(o: any): o is QueryMinterResponseSDKType {
    return o && (o.$typeUrl === QueryMinterResponse.typeUrl || Minter.isSDK(o.minter));
  },
  isAmino(o: any): o is QueryMinterResponseAmino {
    return o && (o.$typeUrl === QueryMinterResponse.typeUrl || Minter.isAmino(o.minter));
  },
  encode(message: QueryMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMinterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMinterResponse {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined
    };
  },
  toJSON(message: QueryMinterResponse): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMinterResponse>): QueryMinterResponse {
    const message = createBaseQueryMinterResponse();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    return message;
  },
  fromAmino(object: QueryMinterResponseAmino): QueryMinterResponse {
    const message = createBaseQueryMinterResponse();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    return message;
  },
  toAmino(message: QueryMinterResponse, useInterfaces: boolean = true): QueryMinterResponseAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMinterResponseAminoMsg): QueryMinterResponse {
    return QueryMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinterResponseProtoMsg, useInterfaces: boolean = true): QueryMinterResponse {
    return QueryMinterResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMinterResponse): Uint8Array {
    return QueryMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinterResponse): QueryMinterResponseProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.QueryMinterResponse",
      value: QueryMinterResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinterResponse.typeUrl, QueryMinterResponse);