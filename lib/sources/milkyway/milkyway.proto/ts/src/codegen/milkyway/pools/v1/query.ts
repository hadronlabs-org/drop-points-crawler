import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool, PoolAmino, PoolSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryPoolByIdRequest is the request type for the Query/PoolById RPC method. */
export interface QueryPoolByIdRequest {
  /** PoolID is the ID of the pool to query */
  poolId: number;
}
export interface QueryPoolByIdRequestProtoMsg {
  typeUrl: "/milkyway.pools.v1.QueryPoolByIdRequest";
  value: Uint8Array;
}
/** QueryPoolByIdRequest is the request type for the Query/PoolById RPC method. */
export interface QueryPoolByIdRequestAmino {
  /** PoolID is the ID of the pool to query */
  pool_id?: number;
}
export interface QueryPoolByIdRequestAminoMsg {
  type: "/milkyway.pools.v1.QueryPoolByIdRequest";
  value: QueryPoolByIdRequestAmino;
}
/** QueryPoolByIdRequest is the request type for the Query/PoolById RPC method. */
export interface QueryPoolByIdRequestSDKType {
  pool_id: number;
}
/**
 * QueryPoolByDenomRequest is the request type for the Query/PollByDenom RPC
 * method.
 */
export interface QueryPoolByDenomRequest {
  /** Denom is the denom for which the pool is to be queried */
  denom: string;
}
export interface QueryPoolByDenomRequestProtoMsg {
  typeUrl: "/milkyway.pools.v1.QueryPoolByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryPoolByDenomRequest is the request type for the Query/PollByDenom RPC
 * method.
 */
export interface QueryPoolByDenomRequestAmino {
  /** Denom is the denom for which the pool is to be queried */
  denom?: string;
}
export interface QueryPoolByDenomRequestAminoMsg {
  type: "/milkyway.pools.v1.QueryPoolByDenomRequest";
  value: QueryPoolByDenomRequestAmino;
}
/**
 * QueryPoolByDenomRequest is the request type for the Query/PollByDenom RPC
 * method.
 */
export interface QueryPoolByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryPoolResponse is the response type for the Query/PoolById and
 * Query/PoolByDenom RPC methods.
 */
export interface QueryPoolResponse {
  /** Pool is the queried pool */
  pool: Pool;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/milkyway.pools.v1.QueryPoolResponse";
  value: Uint8Array;
}
/**
 * QueryPoolResponse is the response type for the Query/PoolById and
 * Query/PoolByDenom RPC methods.
 */
export interface QueryPoolResponseAmino {
  /** Pool is the queried pool */
  pool?: PoolAmino;
}
export interface QueryPoolResponseAminoMsg {
  type: "/milkyway.pools.v1.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
/**
 * QueryPoolResponse is the response type for the Query/PoolById and
 * Query/PoolByDenom RPC methods.
 */
export interface QueryPoolResponseSDKType {
  pool: PoolSDKType;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/milkyway.pools.v1.QueryPoolsRequest";
  value: Uint8Array;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/milkyway.pools.v1.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
  /** Pools is the list of pool */
  pools: Pool[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/milkyway.pools.v1.QueryPoolsResponse";
  value: Uint8Array;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseAmino {
  /** Pools is the list of pool */
  pools?: PoolAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/milkyway.pools.v1.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
  pools: PoolSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPoolByIdRequest(): QueryPoolByIdRequest {
  return {
    poolId: 0
  };
}
export const QueryPoolByIdRequest = {
  typeUrl: "/milkyway.pools.v1.QueryPoolByIdRequest",
  encode(message: QueryPoolByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolByIdRequest>): QueryPoolByIdRequest {
    const message = createBaseQueryPoolByIdRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: QueryPoolByIdRequestAmino): QueryPoolByIdRequest {
    const message = createBaseQueryPoolByIdRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: QueryPoolByIdRequest): QueryPoolByIdRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: QueryPoolByIdRequestAminoMsg): QueryPoolByIdRequest {
    return QueryPoolByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolByIdRequestProtoMsg): QueryPoolByIdRequest {
    return QueryPoolByIdRequest.decode(message.value);
  },
  toProto(message: QueryPoolByIdRequest): Uint8Array {
    return QueryPoolByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolByIdRequest): QueryPoolByIdRequestProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.QueryPoolByIdRequest",
      value: QueryPoolByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolByDenomRequest(): QueryPoolByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryPoolByDenomRequest = {
  typeUrl: "/milkyway.pools.v1.QueryPoolByDenomRequest",
  encode(message: QueryPoolByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolByDenomRequest>): QueryPoolByDenomRequest {
    const message = createBaseQueryPoolByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryPoolByDenomRequestAmino): QueryPoolByDenomRequest {
    const message = createBaseQueryPoolByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryPoolByDenomRequest): QueryPoolByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryPoolByDenomRequestAminoMsg): QueryPoolByDenomRequest {
    return QueryPoolByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolByDenomRequestProtoMsg): QueryPoolByDenomRequest {
    return QueryPoolByDenomRequest.decode(message.value);
  },
  toProto(message: QueryPoolByDenomRequest): Uint8Array {
    return QueryPoolByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolByDenomRequest): QueryPoolByDenomRequestProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.QueryPoolByDenomRequest",
      value: QueryPoolByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryPoolResponse = {
  typeUrl: "/milkyway.pools.v1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    return message;
  },
  toAmino(message: QueryPoolResponse): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/milkyway.pools.v1.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
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
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/milkyway.pools.v1.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};