import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Operator, OperatorAmino, OperatorSDKType, OperatorParams, OperatorParamsAmino, OperatorParamsSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryOperatorRequest is the request type for the Query/Operator RPC method. */
export interface QueryOperatorRequest {
  /** OperatorId is the ID of the operator to query */
  operatorId: number;
}
export interface QueryOperatorRequestProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorRequest";
  value: Uint8Array;
}
/** QueryOperatorRequest is the request type for the Query/Operator RPC method. */
export interface QueryOperatorRequestAmino {
  /** OperatorId is the ID of the operator to query */
  operator_id?: number;
}
export interface QueryOperatorRequestAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorRequest";
  value: QueryOperatorRequestAmino;
}
/** QueryOperatorRequest is the request type for the Query/Operator RPC method. */
export interface QueryOperatorRequestSDKType {
  operator_id: number;
}
/** QueryOperatorResponse is the response type for the Query/Operator RPC method. */
export interface QueryOperatorResponse {
  operator: Operator;
}
export interface QueryOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorResponse";
  value: Uint8Array;
}
/** QueryOperatorResponse is the response type for the Query/Operator RPC method. */
export interface QueryOperatorResponseAmino {
  operator?: OperatorAmino;
}
export interface QueryOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorResponse";
  value: QueryOperatorResponseAmino;
}
/** QueryOperatorResponse is the response type for the Query/Operator RPC method. */
export interface QueryOperatorResponseSDKType {
  operator: OperatorSDKType;
}
/**
 * QueryOperatorParamsRequest is the request type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsRequest {
  /** OperatorID is the ID of the operator for which to query the params */
  operatorId: number;
}
export interface QueryOperatorParamsRequestProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorParamsRequest";
  value: Uint8Array;
}
/**
 * QueryOperatorParamsRequest is the request type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsRequestAmino {
  /** OperatorID is the ID of the operator for which to query the params */
  operator_id?: number;
}
export interface QueryOperatorParamsRequestAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorParamsRequest";
  value: QueryOperatorParamsRequestAmino;
}
/**
 * QueryOperatorParamsRequest is the request type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsRequestSDKType {
  operator_id: number;
}
/**
 * QueryOperatorParamsResponse is the response type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsResponse {
  operatorParams: OperatorParams;
}
export interface QueryOperatorParamsResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorParamsResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorParamsResponse is the response type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsResponseAmino {
  operator_params?: OperatorParamsAmino;
}
export interface QueryOperatorParamsResponseAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorParamsResponse";
  value: QueryOperatorParamsResponseAmino;
}
/**
 * QueryOperatorParamsResponse is the response type for the Query/OperatorParams
 * RPC method.
 */
export interface QueryOperatorParamsResponseSDKType {
  operator_params: OperatorParamsSDKType;
}
/** QueryOperatorsRequest is the request type for the Query/Operators RPC method. */
export interface QueryOperatorsRequest {
  pagination?: PageRequest;
}
export interface QueryOperatorsRequestProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorsRequest";
  value: Uint8Array;
}
/** QueryOperatorsRequest is the request type for the Query/Operators RPC method. */
export interface QueryOperatorsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryOperatorsRequestAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorsRequest";
  value: QueryOperatorsRequestAmino;
}
/** QueryOperatorsRequest is the request type for the Query/Operators RPC method. */
export interface QueryOperatorsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryOperatorsResponse is the response type for the Query/Operators RPC
 * method.
 */
export interface QueryOperatorsResponse {
  /** Operators is the list of operators */
  operators: Operator[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}
export interface QueryOperatorsResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryOperatorsResponse";
  value: Uint8Array;
}
/**
 * QueryOperatorsResponse is the response type for the Query/Operators RPC
 * method.
 */
export interface QueryOperatorsResponseAmino {
  /** Operators is the list of operators */
  operators?: OperatorAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryOperatorsResponseAminoMsg {
  type: "/milkyway.operators.v1.QueryOperatorsResponse";
  value: QueryOperatorsResponseAmino;
}
/**
 * QueryOperatorsResponse is the response type for the Query/Operators RPC
 * method.
 */
export interface QueryOperatorsResponseSDKType {
  operators: OperatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/milkyway.operators.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/milkyway.operators.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryOperatorRequest(): QueryOperatorRequest {
  return {
    operatorId: 0
  };
}
export const QueryOperatorRequest = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorRequest",
  encode(message: QueryOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorRequest>): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryOperatorRequestAmino): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryOperatorRequest): QueryOperatorRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorRequestAminoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorRequestProtoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.decode(message.value);
  },
  toProto(message: QueryOperatorRequest): Uint8Array {
    return QueryOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorRequest): QueryOperatorRequestProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorRequest",
      value: QueryOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorResponse(): QueryOperatorResponse {
  return {
    operator: Operator.fromPartial({})
  };
}
export const QueryOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorResponse",
  encode(message: QueryOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== undefined) {
      Operator.encode(message.operator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = Operator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorResponse>): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    message.operator = object.operator !== undefined && object.operator !== null ? Operator.fromPartial(object.operator) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorResponseAmino): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = Operator.fromAmino(object.operator);
    }
    return message;
  },
  toAmino(message: QueryOperatorResponse): QueryOperatorResponseAmino {
    const obj: any = {};
    obj.operator = message.operator ? Operator.toAmino(message.operator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorResponseAminoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorResponseProtoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.decode(message.value);
  },
  toProto(message: QueryOperatorResponse): Uint8Array {
    return QueryOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorResponse): QueryOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorResponse",
      value: QueryOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorParamsRequest(): QueryOperatorParamsRequest {
  return {
    operatorId: 0
  };
}
export const QueryOperatorParamsRequest = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorParamsRequest",
  encode(message: QueryOperatorParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorParamsRequest>): QueryOperatorParamsRequest {
    const message = createBaseQueryOperatorParamsRequest();
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: QueryOperatorParamsRequestAmino): QueryOperatorParamsRequest {
    const message = createBaseQueryOperatorParamsRequest();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: QueryOperatorParamsRequest): QueryOperatorParamsRequestAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorParamsRequestAminoMsg): QueryOperatorParamsRequest {
    return QueryOperatorParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorParamsRequestProtoMsg): QueryOperatorParamsRequest {
    return QueryOperatorParamsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorParamsRequest): Uint8Array {
    return QueryOperatorParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorParamsRequest): QueryOperatorParamsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorParamsRequest",
      value: QueryOperatorParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorParamsResponse(): QueryOperatorParamsResponse {
  return {
    operatorParams: OperatorParams.fromPartial({})
  };
}
export const QueryOperatorParamsResponse = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorParamsResponse",
  encode(message: QueryOperatorParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorParams !== undefined) {
      OperatorParams.encode(message.operatorParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorParams = OperatorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorParamsResponse>): QueryOperatorParamsResponse {
    const message = createBaseQueryOperatorParamsResponse();
    message.operatorParams = object.operatorParams !== undefined && object.operatorParams !== null ? OperatorParams.fromPartial(object.operatorParams) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorParamsResponseAmino): QueryOperatorParamsResponse {
    const message = createBaseQueryOperatorParamsResponse();
    if (object.operator_params !== undefined && object.operator_params !== null) {
      message.operatorParams = OperatorParams.fromAmino(object.operator_params);
    }
    return message;
  },
  toAmino(message: QueryOperatorParamsResponse): QueryOperatorParamsResponseAmino {
    const obj: any = {};
    obj.operator_params = message.operatorParams ? OperatorParams.toAmino(message.operatorParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorParamsResponseAminoMsg): QueryOperatorParamsResponse {
    return QueryOperatorParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorParamsResponseProtoMsg): QueryOperatorParamsResponse {
    return QueryOperatorParamsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorParamsResponse): Uint8Array {
    return QueryOperatorParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorParamsResponse): QueryOperatorParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorParamsResponse",
      value: QueryOperatorParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsRequest(): QueryOperatorsRequest {
  return {
    pagination: undefined
  };
}
export const QueryOperatorsRequest = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorsRequest",
  encode(message: QueryOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorsRequest>): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsRequestAmino): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsRequest): QueryOperatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsRequestAminoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsRequestProtoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorsRequest): Uint8Array {
    return QueryOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsRequest): QueryOperatorsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorsRequest",
      value: QueryOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsResponse(): QueryOperatorsResponse {
  return {
    operators: [],
    pagination: undefined
  };
}
export const QueryOperatorsResponse = {
  typeUrl: "/milkyway.operators.v1.QueryOperatorsResponse",
  encode(message: QueryOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOperatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operators.push(Operator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOperatorsResponse>): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorsResponseAmino): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOperatorsResponse): QueryOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsResponseAminoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsResponseProtoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorsResponse): Uint8Array {
    return QueryOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsResponse): QueryOperatorsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryOperatorsResponse",
      value: QueryOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/milkyway.operators.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/milkyway.operators.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};