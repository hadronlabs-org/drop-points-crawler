import { Params, ParamsAmino, ParamsSDKType, QueryRequest, QueryRequestAmino, QueryRequestSDKType } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the 27-interchain-accounts/host parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsAmino {
    /** signer address */
    signer?: string;
    /**
     * params defines the 27-interchain-accounts/host parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsSDKType {
    signer: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseSDKType {
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
    /** signer address */
    signer: string;
    /** requests defines the module safe queries to execute. */
    requests: QueryRequest[];
}
export interface MsgModuleQuerySafeProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
    value: Uint8Array;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeAmino {
    /** signer address */
    signer?: string;
    /** requests defines the module safe queries to execute. */
    requests?: QueryRequestAmino[];
}
export interface MsgModuleQuerySafeAminoMsg {
    type: "cosmos-sdk/MsgModuleQuerySafe";
    value: MsgModuleQuerySafeAmino;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
    signer: string;
    requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
    /** height at which the responses were queried */
    height: bigint;
    /** protobuf encoded responses for each query */
    responses: Uint8Array[];
}
export interface MsgModuleQuerySafeResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
    value: Uint8Array;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseAmino {
    /** height at which the responses were queried */
    height?: string;
    /** protobuf encoded responses for each query */
    responses?: string[];
}
export interface MsgModuleQuerySafeResponseAminoMsg {
    type: "cosmos-sdk/MsgModuleQuerySafeResponse";
    value: MsgModuleQuerySafeResponseAmino;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
    height: bigint;
    responses: Uint8Array[];
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgModuleQuerySafe: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafe, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafe;
    fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe;
    fromAmino(object: MsgModuleQuerySafeAmino): MsgModuleQuerySafe;
    toAmino(message: MsgModuleQuerySafe): MsgModuleQuerySafeAmino;
    fromAminoMsg(object: MsgModuleQuerySafeAminoMsg): MsgModuleQuerySafe;
    toAminoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeAminoMsg;
    fromProtoMsg(message: MsgModuleQuerySafeProtoMsg): MsgModuleQuerySafe;
    toProto(message: MsgModuleQuerySafe): Uint8Array;
    toProtoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeProtoMsg;
};
export declare const MsgModuleQuerySafeResponse: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafeResponse;
    fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse;
    fromAmino(object: MsgModuleQuerySafeResponseAmino): MsgModuleQuerySafeResponse;
    toAmino(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAmino;
    fromAminoMsg(object: MsgModuleQuerySafeResponseAminoMsg): MsgModuleQuerySafeResponse;
    toAminoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAminoMsg;
    fromProtoMsg(message: MsgModuleQuerySafeResponseProtoMsg): MsgModuleQuerySafeResponse;
    toProto(message: MsgModuleQuerySafeResponse): Uint8Array;
    toProtoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseProtoMsg;
};
