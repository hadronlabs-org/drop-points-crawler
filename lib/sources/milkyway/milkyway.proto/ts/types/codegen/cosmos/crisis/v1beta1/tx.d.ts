import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    /** sender is the account address of private key to send coins to fee collector account. */
    sender: string;
    /** name of the invariant module. */
    invariantModuleName: string;
    /** invariant_route is the msg's invariant route. */
    invariantRoute: string;
}
export interface MsgVerifyInvariantProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant";
    value: Uint8Array;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantAmino {
    /** sender is the account address of private key to send coins to fee collector account. */
    sender?: string;
    /** name of the invariant module. */
    invariant_module_name?: string;
    /** invariant_route is the msg's invariant route. */
    invariant_route?: string;
}
export interface MsgVerifyInvariantAminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariant";
    value: MsgVerifyInvariantAmino;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantSDKType {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
export interface MsgVerifyInvariantResponseProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
    value: Uint8Array;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseAmino {
}
export interface MsgVerifyInvariantResponseAminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariantResponse";
    value: MsgVerifyInvariantResponseAmino;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** constant_fee defines the x/crisis parameter. */
    constantFee: Coin;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams";
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
    /** constant_fee defines the x/crisis parameter. */
    constant_fee: CoinAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/x/crisis/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    constant_fee: CoinSDKType;
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
    typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse";
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
export declare const MsgVerifyInvariant: {
    typeUrl: string;
    encode(message: MsgVerifyInvariant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromPartial(object: Partial<MsgVerifyInvariant>): MsgVerifyInvariant;
    fromAmino(object: MsgVerifyInvariantAmino): MsgVerifyInvariant;
    toAmino(message: MsgVerifyInvariant): MsgVerifyInvariantAmino;
    fromAminoMsg(object: MsgVerifyInvariantAminoMsg): MsgVerifyInvariant;
    toAminoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantAminoMsg;
    fromProtoMsg(message: MsgVerifyInvariantProtoMsg): MsgVerifyInvariant;
    toProto(message: MsgVerifyInvariant): Uint8Array;
    toProtoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantProtoMsg;
};
export declare const MsgVerifyInvariantResponse: {
    typeUrl: string;
    encode(_: MsgVerifyInvariantResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariantResponse;
    fromPartial(_: Partial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse;
    fromAmino(_: MsgVerifyInvariantResponseAmino): MsgVerifyInvariantResponse;
    toAmino(_: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAmino;
    fromAminoMsg(object: MsgVerifyInvariantResponseAminoMsg): MsgVerifyInvariantResponse;
    toAminoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAminoMsg;
    fromProtoMsg(message: MsgVerifyInvariantResponseProtoMsg): MsgVerifyInvariantResponse;
    toProto(message: MsgVerifyInvariantResponse): Uint8Array;
    toProtoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseProtoMsg;
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
