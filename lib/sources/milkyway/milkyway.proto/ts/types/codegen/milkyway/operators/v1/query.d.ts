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
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/milkyway.operators.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/milkyway.operators.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryOperatorRequest: {
    typeUrl: string;
    encode(message: QueryOperatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorRequest;
    fromPartial(object: Partial<QueryOperatorRequest>): QueryOperatorRequest;
    fromAmino(object: QueryOperatorRequestAmino): QueryOperatorRequest;
    toAmino(message: QueryOperatorRequest): QueryOperatorRequestAmino;
    fromAminoMsg(object: QueryOperatorRequestAminoMsg): QueryOperatorRequest;
    fromProtoMsg(message: QueryOperatorRequestProtoMsg): QueryOperatorRequest;
    toProto(message: QueryOperatorRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorRequest): QueryOperatorRequestProtoMsg;
};
export declare const QueryOperatorResponse: {
    typeUrl: string;
    encode(message: QueryOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorResponse;
    fromPartial(object: Partial<QueryOperatorResponse>): QueryOperatorResponse;
    fromAmino(object: QueryOperatorResponseAmino): QueryOperatorResponse;
    toAmino(message: QueryOperatorResponse): QueryOperatorResponseAmino;
    fromAminoMsg(object: QueryOperatorResponseAminoMsg): QueryOperatorResponse;
    fromProtoMsg(message: QueryOperatorResponseProtoMsg): QueryOperatorResponse;
    toProto(message: QueryOperatorResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorResponse): QueryOperatorResponseProtoMsg;
};
export declare const QueryOperatorParamsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorParamsRequest;
    fromPartial(object: Partial<QueryOperatorParamsRequest>): QueryOperatorParamsRequest;
    fromAmino(object: QueryOperatorParamsRequestAmino): QueryOperatorParamsRequest;
    toAmino(message: QueryOperatorParamsRequest): QueryOperatorParamsRequestAmino;
    fromAminoMsg(object: QueryOperatorParamsRequestAminoMsg): QueryOperatorParamsRequest;
    fromProtoMsg(message: QueryOperatorParamsRequestProtoMsg): QueryOperatorParamsRequest;
    toProto(message: QueryOperatorParamsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorParamsRequest): QueryOperatorParamsRequestProtoMsg;
};
export declare const QueryOperatorParamsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorParamsResponse;
    fromPartial(object: Partial<QueryOperatorParamsResponse>): QueryOperatorParamsResponse;
    fromAmino(object: QueryOperatorParamsResponseAmino): QueryOperatorParamsResponse;
    toAmino(message: QueryOperatorParamsResponse): QueryOperatorParamsResponseAmino;
    fromAminoMsg(object: QueryOperatorParamsResponseAminoMsg): QueryOperatorParamsResponse;
    fromProtoMsg(message: QueryOperatorParamsResponseProtoMsg): QueryOperatorParamsResponse;
    toProto(message: QueryOperatorParamsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorParamsResponse): QueryOperatorParamsResponseProtoMsg;
};
export declare const QueryOperatorsRequest: {
    typeUrl: string;
    encode(message: QueryOperatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsRequest;
    fromPartial(object: Partial<QueryOperatorsRequest>): QueryOperatorsRequest;
    fromAmino(object: QueryOperatorsRequestAmino): QueryOperatorsRequest;
    toAmino(message: QueryOperatorsRequest): QueryOperatorsRequestAmino;
    fromAminoMsg(object: QueryOperatorsRequestAminoMsg): QueryOperatorsRequest;
    fromProtoMsg(message: QueryOperatorsRequestProtoMsg): QueryOperatorsRequest;
    toProto(message: QueryOperatorsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorsRequest): QueryOperatorsRequestProtoMsg;
};
export declare const QueryOperatorsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryOperatorsResponse;
    fromPartial(object: Partial<QueryOperatorsResponse>): QueryOperatorsResponse;
    fromAmino(object: QueryOperatorsResponseAmino): QueryOperatorsResponse;
    toAmino(message: QueryOperatorsResponse): QueryOperatorsResponseAmino;
    fromAminoMsg(object: QueryOperatorsResponseAminoMsg): QueryOperatorsResponse;
    fromProtoMsg(message: QueryOperatorsResponseProtoMsg): QueryOperatorsResponse;
    toProto(message: QueryOperatorsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorsResponse): QueryOperatorsResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
