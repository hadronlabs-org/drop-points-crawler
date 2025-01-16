import { Params, ParamsAmino, ParamsSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
export interface MsgUnjailProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
    value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
    validator_addr: string;
}
export interface MsgUnjailAminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
    validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
export interface MsgUnjailResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
    value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {
}
export interface MsgUnjailResponseAminoMsg {
    type: "cosmos-sdk/MsgUnjailResponse";
    value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/slashing parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority?: string;
    /**
     * params defines the x/slashing parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/x/slashing/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgUnjail: {
    typeUrl: string;
    encode(message: MsgUnjail, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjail;
    fromPartial(object: Partial<MsgUnjail>): MsgUnjail;
    fromAmino(object: MsgUnjailAmino): MsgUnjail;
    toAmino(message: MsgUnjail): MsgUnjailAmino;
    fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail;
    toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg;
    fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail;
    toProto(message: MsgUnjail): Uint8Array;
    toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg;
};
export declare const MsgUnjailResponse: {
    typeUrl: string;
    encode(_: MsgUnjailResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailResponse;
    fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse;
    fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse;
    toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino;
    fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse;
    toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg;
    fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse;
    toProto(message: MsgUnjailResponse): Uint8Array;
    toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg;
};
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
