import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryChecksumsRequestProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsRequest";
    value: Uint8Array;
}
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryChecksumsRequestAminoMsg {
    type: "cosmos-sdk/QueryChecksumsRequest";
    value: QueryChecksumsRequestAmino;
}
/** QueryChecksumsRequest is the request type for the Query/Checksums RPC method. */
export interface QueryChecksumsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponse {
    /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
    checksums: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryChecksumsResponseProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.QueryChecksumsResponse";
    value: Uint8Array;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponseAmino {
    /** checksums is a list of the hex encoded checksums of all wasm codes stored. */
    checksums?: string[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryChecksumsResponseAminoMsg {
    type: "cosmos-sdk/QueryChecksumsResponse";
    value: QueryChecksumsResponseAmino;
}
/** QueryChecksumsResponse is the response type for the Query/Checksums RPC method. */
export interface QueryChecksumsResponseSDKType {
    checksums: string[];
    pagination?: PageResponseSDKType;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** checksum is a hex encoded string of the code stored. */
    checksum: string;
}
export interface QueryCodeRequestProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeRequest";
    value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
    /** checksum is a hex encoded string of the code stored. */
    checksum?: string;
}
export interface QueryCodeRequestAminoMsg {
    type: "cosmos-sdk/QueryCodeRequest";
    value: QueryCodeRequestAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
    checksum: string;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponse {
    data: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.QueryCodeResponse";
    value: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponseAmino {
    data?: string;
}
export interface QueryCodeResponseAminoMsg {
    type: "cosmos-sdk/QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method. */
export interface QueryCodeResponseSDKType {
    data: Uint8Array;
}
export declare const QueryChecksumsRequest: {
    typeUrl: string;
    encode(message: QueryChecksumsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsRequest;
    fromPartial(object: Partial<QueryChecksumsRequest>): QueryChecksumsRequest;
    fromAmino(object: QueryChecksumsRequestAmino): QueryChecksumsRequest;
    toAmino(message: QueryChecksumsRequest): QueryChecksumsRequestAmino;
    fromAminoMsg(object: QueryChecksumsRequestAminoMsg): QueryChecksumsRequest;
    toAminoMsg(message: QueryChecksumsRequest): QueryChecksumsRequestAminoMsg;
    fromProtoMsg(message: QueryChecksumsRequestProtoMsg): QueryChecksumsRequest;
    toProto(message: QueryChecksumsRequest): Uint8Array;
    toProtoMsg(message: QueryChecksumsRequest): QueryChecksumsRequestProtoMsg;
};
export declare const QueryChecksumsResponse: {
    typeUrl: string;
    encode(message: QueryChecksumsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChecksumsResponse;
    fromPartial(object: Partial<QueryChecksumsResponse>): QueryChecksumsResponse;
    fromAmino(object: QueryChecksumsResponseAmino): QueryChecksumsResponse;
    toAmino(message: QueryChecksumsResponse): QueryChecksumsResponseAmino;
    fromAminoMsg(object: QueryChecksumsResponseAminoMsg): QueryChecksumsResponse;
    toAminoMsg(message: QueryChecksumsResponse): QueryChecksumsResponseAminoMsg;
    fromProtoMsg(message: QueryChecksumsResponseProtoMsg): QueryChecksumsResponse;
    toProto(message: QueryChecksumsResponse): Uint8Array;
    toProtoMsg(message: QueryChecksumsResponse): QueryChecksumsResponseProtoMsg;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
    fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest;
    toAminoMsg(message: QueryCodeRequest): QueryCodeRequestAminoMsg;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    toAminoMsg(message: QueryCodeResponse): QueryCodeResponseAminoMsg;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
