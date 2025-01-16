import { BinaryReader, BinaryWriter } from "../../../../../binary";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
    /** host_enabled enables or disables the host submodule. */
    hostEnabled: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allowMessages: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params";
    value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsAmino {
    /** host_enabled enables or disables the host submodule. */
    host_enabled?: boolean;
    /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
    allow_messages?: string[];
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
    host_enabled: boolean;
    allow_messages: string[];
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequest {
    /**
     * path defines the path of the query request as defined by ADR-021.
     * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
     */
    path: string;
    /**
     * data defines the payload of the query request as defined by ADR-021.
     * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
     */
    data: Uint8Array;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.QueryRequest";
    value: Uint8Array;
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequestAmino {
    /**
     * path defines the path of the query request as defined by ADR-021.
     * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
     */
    path?: string;
    /**
     * data defines the payload of the query request as defined by ADR-021.
     * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
     */
    data?: string;
}
export interface QueryRequestAminoMsg {
    type: "cosmos-sdk/QueryRequest";
    value: QueryRequestAmino;
}
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 */
export interface QueryRequestSDKType {
    path: string;
    data: Uint8Array;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const QueryRequest: {
    typeUrl: string;
    encode(message: QueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
    fromAmino(object: QueryRequestAmino): QueryRequest;
    toAmino(message: QueryRequest): QueryRequestAmino;
    fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest;
    toAminoMsg(message: QueryRequest): QueryRequestAminoMsg;
    fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest;
    toProto(message: QueryRequest): Uint8Array;
    toProtoMsg(message: QueryRequest): QueryRequestProtoMsg;
};
