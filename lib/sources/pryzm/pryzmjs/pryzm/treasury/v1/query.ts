import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Action, ActionAmino, ActionSDKType } from "./action";
import { FlowTrade, FlowTradeAmino, FlowTradeSDKType } from "./flow_trade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.treasury.v1.QueryParamsRequest";
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
  typeUrl: "/pryzm.treasury.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.treasury.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetActionRequest {}
export interface QueryGetActionRequestProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryGetActionRequest";
  value: Uint8Array;
}
export interface QueryGetActionRequestAmino {}
export interface QueryGetActionRequestAminoMsg {
  type: "/pryzm.treasury.v1.QueryGetActionRequest";
  value: QueryGetActionRequestAmino;
}
export interface QueryGetActionRequestSDKType {}
export interface QueryGetActionResponse {
  action: Action;
}
export interface QueryGetActionResponseProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryGetActionResponse";
  value: Uint8Array;
}
export interface QueryGetActionResponseAmino {
  action?: ActionAmino;
}
export interface QueryGetActionResponseAminoMsg {
  type: "/pryzm.treasury.v1.QueryGetActionResponse";
  value: QueryGetActionResponseAmino;
}
export interface QueryGetActionResponseSDKType {
  action: ActionSDKType;
}
export interface QueryGetFlowTradeRequest {
  flowId: bigint;
}
export interface QueryGetFlowTradeRequestProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeRequest";
  value: Uint8Array;
}
export interface QueryGetFlowTradeRequestAmino {
  flow_id?: string;
}
export interface QueryGetFlowTradeRequestAminoMsg {
  type: "/pryzm.treasury.v1.QueryGetFlowTradeRequest";
  value: QueryGetFlowTradeRequestAmino;
}
export interface QueryGetFlowTradeRequestSDKType {
  flow_id: bigint;
}
export interface QueryGetFlowTradeResponse {
  flowTrade: FlowTrade;
}
export interface QueryGetFlowTradeResponseProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeResponse";
  value: Uint8Array;
}
export interface QueryGetFlowTradeResponseAmino {
  flow_trade?: FlowTradeAmino;
}
export interface QueryGetFlowTradeResponseAminoMsg {
  type: "/pryzm.treasury.v1.QueryGetFlowTradeResponse";
  value: QueryGetFlowTradeResponseAmino;
}
export interface QueryGetFlowTradeResponseSDKType {
  flow_trade: FlowTradeSDKType;
}
export interface QueryAllFlowTradeRequest {
  pagination?: PageRequest;
}
export interface QueryAllFlowTradeRequestProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeRequest";
  value: Uint8Array;
}
export interface QueryAllFlowTradeRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllFlowTradeRequestAminoMsg {
  type: "/pryzm.treasury.v1.QueryAllFlowTradeRequest";
  value: QueryAllFlowTradeRequestAmino;
}
export interface QueryAllFlowTradeRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllFlowTradeResponse {
  flowTrade: FlowTrade[];
  pagination?: PageResponse;
}
export interface QueryAllFlowTradeResponseProtoMsg {
  typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeResponse";
  value: Uint8Array;
}
export interface QueryAllFlowTradeResponseAmino {
  flow_trade?: FlowTradeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllFlowTradeResponseAminoMsg {
  type: "/pryzm.treasury.v1.QueryAllFlowTradeResponse";
  value: QueryAllFlowTradeResponseAmino;
}
export interface QueryAllFlowTradeResponseSDKType {
  flow_trade: FlowTradeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.treasury.v1.QueryParamsRequest",
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
      typeUrl: "/pryzm.treasury.v1.QueryParamsRequest",
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
  typeUrl: "/pryzm.treasury.v1.QueryParamsResponse",
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
      typeUrl: "/pryzm.treasury.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetActionRequest(): QueryGetActionRequest {
  return {};
}
export const QueryGetActionRequest = {
  typeUrl: "/pryzm.treasury.v1.QueryGetActionRequest",
  is(o: any): o is QueryGetActionRequest {
    return o && o.$typeUrl === QueryGetActionRequest.typeUrl;
  },
  isSDK(o: any): o is QueryGetActionRequestSDKType {
    return o && o.$typeUrl === QueryGetActionRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetActionRequestAmino {
    return o && o.$typeUrl === QueryGetActionRequest.typeUrl;
  },
  encode(_: QueryGetActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionRequest();
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
  fromJSON(_: any): QueryGetActionRequest {
    return {};
  },
  toJSON(_: QueryGetActionRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryGetActionRequest>): QueryGetActionRequest {
    const message = createBaseQueryGetActionRequest();
    return message;
  },
  fromAmino(_: QueryGetActionRequestAmino): QueryGetActionRequest {
    const message = createBaseQueryGetActionRequest();
    return message;
  },
  toAmino(_: QueryGetActionRequest, useInterfaces: boolean = true): QueryGetActionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetActionRequestAminoMsg): QueryGetActionRequest {
    return QueryGetActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionRequestProtoMsg, useInterfaces: boolean = true): QueryGetActionRequest {
    return QueryGetActionRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetActionRequest): Uint8Array {
    return QueryGetActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionRequest): QueryGetActionRequestProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryGetActionRequest",
      value: QueryGetActionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetActionRequest.typeUrl, QueryGetActionRequest);
function createBaseQueryGetActionResponse(): QueryGetActionResponse {
  return {
    action: Action.fromPartial({})
  };
}
export const QueryGetActionResponse = {
  typeUrl: "/pryzm.treasury.v1.QueryGetActionResponse",
  is(o: any): o is QueryGetActionResponse {
    return o && (o.$typeUrl === QueryGetActionResponse.typeUrl || Action.is(o.action));
  },
  isSDK(o: any): o is QueryGetActionResponseSDKType {
    return o && (o.$typeUrl === QueryGetActionResponse.typeUrl || Action.isSDK(o.action));
  },
  isAmino(o: any): o is QueryGetActionResponseAmino {
    return o && (o.$typeUrl === QueryGetActionResponse.typeUrl || Action.isAmino(o.action));
  },
  encode(message: QueryGetActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetActionResponse {
    return {
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: QueryGetActionResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetActionResponse>): QueryGetActionResponse {
    const message = createBaseQueryGetActionResponse();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  },
  fromAmino(object: QueryGetActionResponseAmino): QueryGetActionResponse {
    const message = createBaseQueryGetActionResponse();
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromAmino(object.action);
    }
    return message;
  },
  toAmino(message: QueryGetActionResponse, useInterfaces: boolean = true): QueryGetActionResponseAmino {
    const obj: any = {};
    obj.action = message.action ? Action.toAmino(message.action, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetActionResponseAminoMsg): QueryGetActionResponse {
    return QueryGetActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetActionResponseProtoMsg, useInterfaces: boolean = true): QueryGetActionResponse {
    return QueryGetActionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetActionResponse): Uint8Array {
    return QueryGetActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetActionResponse): QueryGetActionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryGetActionResponse",
      value: QueryGetActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetActionResponse.typeUrl, QueryGetActionResponse);
function createBaseQueryGetFlowTradeRequest(): QueryGetFlowTradeRequest {
  return {
    flowId: BigInt(0)
  };
}
export const QueryGetFlowTradeRequest = {
  typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeRequest",
  is(o: any): o is QueryGetFlowTradeRequest {
    return o && (o.$typeUrl === QueryGetFlowTradeRequest.typeUrl || typeof o.flowId === "bigint");
  },
  isSDK(o: any): o is QueryGetFlowTradeRequestSDKType {
    return o && (o.$typeUrl === QueryGetFlowTradeRequest.typeUrl || typeof o.flow_id === "bigint");
  },
  isAmino(o: any): o is QueryGetFlowTradeRequestAmino {
    return o && (o.$typeUrl === QueryGetFlowTradeRequest.typeUrl || typeof o.flow_id === "bigint");
  },
  encode(message: QueryGetFlowTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetFlowTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowTradeRequest {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetFlowTradeRequest): unknown {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowTradeRequest>): QueryGetFlowTradeRequest {
    const message = createBaseQueryGetFlowTradeRequest();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetFlowTradeRequestAmino): QueryGetFlowTradeRequest {
    const message = createBaseQueryGetFlowTradeRequest();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
    }
    return message;
  },
  toAmino(message: QueryGetFlowTradeRequest, useInterfaces: boolean = true): QueryGetFlowTradeRequestAmino {
    const obj: any = {};
    obj.flow_id = message.flowId ? message.flowId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowTradeRequestAminoMsg): QueryGetFlowTradeRequest {
    return QueryGetFlowTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowTradeRequestProtoMsg, useInterfaces: boolean = true): QueryGetFlowTradeRequest {
    return QueryGetFlowTradeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetFlowTradeRequest): Uint8Array {
    return QueryGetFlowTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowTradeRequest): QueryGetFlowTradeRequestProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeRequest",
      value: QueryGetFlowTradeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetFlowTradeRequest.typeUrl, QueryGetFlowTradeRequest);
function createBaseQueryGetFlowTradeResponse(): QueryGetFlowTradeResponse {
  return {
    flowTrade: FlowTrade.fromPartial({})
  };
}
export const QueryGetFlowTradeResponse = {
  typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeResponse",
  is(o: any): o is QueryGetFlowTradeResponse {
    return o && (o.$typeUrl === QueryGetFlowTradeResponse.typeUrl || FlowTrade.is(o.flowTrade));
  },
  isSDK(o: any): o is QueryGetFlowTradeResponseSDKType {
    return o && (o.$typeUrl === QueryGetFlowTradeResponse.typeUrl || FlowTrade.isSDK(o.flow_trade));
  },
  isAmino(o: any): o is QueryGetFlowTradeResponseAmino {
    return o && (o.$typeUrl === QueryGetFlowTradeResponse.typeUrl || FlowTrade.isAmino(o.flow_trade));
  },
  encode(message: QueryGetFlowTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowTrade !== undefined) {
      FlowTrade.encode(message.flowTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetFlowTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetFlowTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowTrade = FlowTrade.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetFlowTradeResponse {
    return {
      flowTrade: isSet(object.flowTrade) ? FlowTrade.fromJSON(object.flowTrade) : undefined
    };
  },
  toJSON(message: QueryGetFlowTradeResponse): unknown {
    const obj: any = {};
    message.flowTrade !== undefined && (obj.flowTrade = message.flowTrade ? FlowTrade.toJSON(message.flowTrade) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetFlowTradeResponse>): QueryGetFlowTradeResponse {
    const message = createBaseQueryGetFlowTradeResponse();
    message.flowTrade = object.flowTrade !== undefined && object.flowTrade !== null ? FlowTrade.fromPartial(object.flowTrade) : undefined;
    return message;
  },
  fromAmino(object: QueryGetFlowTradeResponseAmino): QueryGetFlowTradeResponse {
    const message = createBaseQueryGetFlowTradeResponse();
    if (object.flow_trade !== undefined && object.flow_trade !== null) {
      message.flowTrade = FlowTrade.fromAmino(object.flow_trade);
    }
    return message;
  },
  toAmino(message: QueryGetFlowTradeResponse, useInterfaces: boolean = true): QueryGetFlowTradeResponseAmino {
    const obj: any = {};
    obj.flow_trade = message.flowTrade ? FlowTrade.toAmino(message.flowTrade, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetFlowTradeResponseAminoMsg): QueryGetFlowTradeResponse {
    return QueryGetFlowTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetFlowTradeResponseProtoMsg, useInterfaces: boolean = true): QueryGetFlowTradeResponse {
    return QueryGetFlowTradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetFlowTradeResponse): Uint8Array {
    return QueryGetFlowTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetFlowTradeResponse): QueryGetFlowTradeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryGetFlowTradeResponse",
      value: QueryGetFlowTradeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetFlowTradeResponse.typeUrl, QueryGetFlowTradeResponse);
function createBaseQueryAllFlowTradeRequest(): QueryAllFlowTradeRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllFlowTradeRequest = {
  typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeRequest",
  is(o: any): o is QueryAllFlowTradeRequest {
    return o && o.$typeUrl === QueryAllFlowTradeRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllFlowTradeRequestSDKType {
    return o && o.$typeUrl === QueryAllFlowTradeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllFlowTradeRequestAmino {
    return o && o.$typeUrl === QueryAllFlowTradeRequest.typeUrl;
  },
  encode(message: QueryAllFlowTradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllFlowTradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFlowTradeRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowTradeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowTradeRequest>): QueryAllFlowTradeRequest {
    const message = createBaseQueryAllFlowTradeRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowTradeRequestAmino): QueryAllFlowTradeRequest {
    const message = createBaseQueryAllFlowTradeRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowTradeRequest, useInterfaces: boolean = true): QueryAllFlowTradeRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowTradeRequestAminoMsg): QueryAllFlowTradeRequest {
    return QueryAllFlowTradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowTradeRequestProtoMsg, useInterfaces: boolean = true): QueryAllFlowTradeRequest {
    return QueryAllFlowTradeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllFlowTradeRequest): Uint8Array {
    return QueryAllFlowTradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowTradeRequest): QueryAllFlowTradeRequestProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeRequest",
      value: QueryAllFlowTradeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllFlowTradeRequest.typeUrl, QueryAllFlowTradeRequest);
function createBaseQueryAllFlowTradeResponse(): QueryAllFlowTradeResponse {
  return {
    flowTrade: [],
    pagination: undefined
  };
}
export const QueryAllFlowTradeResponse = {
  typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeResponse",
  is(o: any): o is QueryAllFlowTradeResponse {
    return o && (o.$typeUrl === QueryAllFlowTradeResponse.typeUrl || Array.isArray(o.flowTrade) && (!o.flowTrade.length || FlowTrade.is(o.flowTrade[0])));
  },
  isSDK(o: any): o is QueryAllFlowTradeResponseSDKType {
    return o && (o.$typeUrl === QueryAllFlowTradeResponse.typeUrl || Array.isArray(o.flow_trade) && (!o.flow_trade.length || FlowTrade.isSDK(o.flow_trade[0])));
  },
  isAmino(o: any): o is QueryAllFlowTradeResponseAmino {
    return o && (o.$typeUrl === QueryAllFlowTradeResponse.typeUrl || Array.isArray(o.flow_trade) && (!o.flow_trade.length || FlowTrade.isAmino(o.flow_trade[0])));
  },
  encode(message: QueryAllFlowTradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flowTrade) {
      FlowTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllFlowTradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllFlowTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowTrade.push(FlowTrade.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllFlowTradeResponse {
    return {
      flowTrade: Array.isArray(object?.flowTrade) ? object.flowTrade.map((e: any) => FlowTrade.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllFlowTradeResponse): unknown {
    const obj: any = {};
    if (message.flowTrade) {
      obj.flowTrade = message.flowTrade.map(e => e ? FlowTrade.toJSON(e) : undefined);
    } else {
      obj.flowTrade = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllFlowTradeResponse>): QueryAllFlowTradeResponse {
    const message = createBaseQueryAllFlowTradeResponse();
    message.flowTrade = object.flowTrade?.map(e => FlowTrade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllFlowTradeResponseAmino): QueryAllFlowTradeResponse {
    const message = createBaseQueryAllFlowTradeResponse();
    message.flowTrade = object.flow_trade?.map(e => FlowTrade.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllFlowTradeResponse, useInterfaces: boolean = true): QueryAllFlowTradeResponseAmino {
    const obj: any = {};
    if (message.flowTrade) {
      obj.flow_trade = message.flowTrade.map(e => e ? FlowTrade.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.flow_trade = message.flowTrade;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllFlowTradeResponseAminoMsg): QueryAllFlowTradeResponse {
    return QueryAllFlowTradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllFlowTradeResponseProtoMsg, useInterfaces: boolean = true): QueryAllFlowTradeResponse {
    return QueryAllFlowTradeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllFlowTradeResponse): Uint8Array {
    return QueryAllFlowTradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllFlowTradeResponse): QueryAllFlowTradeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.QueryAllFlowTradeResponse",
      value: QueryAllFlowTradeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllFlowTradeResponse.typeUrl, QueryAllFlowTradeResponse);