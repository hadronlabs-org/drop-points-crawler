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
export declare const QueryPoolByIdRequest: {
    typeUrl: string;
    encode(message: QueryPoolByIdRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByIdRequest;
    fromPartial(object: Partial<QueryPoolByIdRequest>): QueryPoolByIdRequest;
    fromAmino(object: QueryPoolByIdRequestAmino): QueryPoolByIdRequest;
    toAmino(message: QueryPoolByIdRequest): QueryPoolByIdRequestAmino;
    fromAminoMsg(object: QueryPoolByIdRequestAminoMsg): QueryPoolByIdRequest;
    fromProtoMsg(message: QueryPoolByIdRequestProtoMsg): QueryPoolByIdRequest;
    toProto(message: QueryPoolByIdRequest): Uint8Array;
    toProtoMsg(message: QueryPoolByIdRequest): QueryPoolByIdRequestProtoMsg;
};
export declare const QueryPoolByDenomRequest: {
    typeUrl: string;
    encode(message: QueryPoolByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByDenomRequest;
    fromPartial(object: Partial<QueryPoolByDenomRequest>): QueryPoolByDenomRequest;
    fromAmino(object: QueryPoolByDenomRequestAmino): QueryPoolByDenomRequest;
    toAmino(message: QueryPoolByDenomRequest): QueryPoolByDenomRequestAmino;
    fromAminoMsg(object: QueryPoolByDenomRequestAminoMsg): QueryPoolByDenomRequest;
    fromProtoMsg(message: QueryPoolByDenomRequestProtoMsg): QueryPoolByDenomRequest;
    toProto(message: QueryPoolByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryPoolByDenomRequest): QueryPoolByDenomRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
