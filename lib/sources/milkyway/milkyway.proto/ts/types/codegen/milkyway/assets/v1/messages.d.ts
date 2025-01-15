import { Asset, AssetAmino, AssetSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAsset {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** Asset represents the asset to be registered. */
    asset: Asset;
}
export interface MsgRegisterAssetProtoMsg {
    typeUrl: "/milkyway.assets.v1.MsgRegisterAsset";
    value: Uint8Array;
}
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAssetAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /** Asset represents the asset to be registered. */
    asset?: AssetAmino;
}
export interface MsgRegisterAssetAminoMsg {
    type: "milkyway/MsgRegisterAsset";
    value: MsgRegisterAssetAmino;
}
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAssetSDKType {
    authority: string;
    asset: AssetSDKType;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponse {
}
export interface MsgRegisterAssetResponseProtoMsg {
    typeUrl: "/milkyway.assets.v1.MsgRegisterAssetResponse";
    value: Uint8Array;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponseAmino {
}
export interface MsgRegisterAssetResponseAminoMsg {
    type: "/milkyway.assets.v1.MsgRegisterAssetResponse";
    value: MsgRegisterAssetResponseAmino;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponseSDKType {
}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAsset {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** Denom represents the denomination of the token associated with the asset. */
    denom: string;
}
export interface MsgDeregisterAssetProtoMsg {
    typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset";
    value: Uint8Array;
}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAssetAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /** Denom represents the denomination of the token associated with the asset. */
    denom?: string;
}
export interface MsgDeregisterAssetAminoMsg {
    type: "milkyway/MsgDeregisterAsset";
    value: MsgDeregisterAssetAmino;
}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAssetSDKType {
    authority: string;
    denom: string;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponse {
}
export interface MsgDeregisterAssetResponseProtoMsg {
    typeUrl: "/milkyway.assets.v1.MsgDeregisterAssetResponse";
    value: Uint8Array;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponseAmino {
}
export interface MsgDeregisterAssetResponseAminoMsg {
    type: "/milkyway.assets.v1.MsgDeregisterAssetResponse";
    value: MsgDeregisterAssetResponseAmino;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponseSDKType {
}
export declare const MsgRegisterAsset: {
    typeUrl: string;
    encode(message: MsgRegisterAsset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAsset;
    fromPartial(object: Partial<MsgRegisterAsset>): MsgRegisterAsset;
    fromAmino(object: MsgRegisterAssetAmino): MsgRegisterAsset;
    toAmino(message: MsgRegisterAsset): MsgRegisterAssetAmino;
    fromAminoMsg(object: MsgRegisterAssetAminoMsg): MsgRegisterAsset;
    toAminoMsg(message: MsgRegisterAsset): MsgRegisterAssetAminoMsg;
    fromProtoMsg(message: MsgRegisterAssetProtoMsg): MsgRegisterAsset;
    toProto(message: MsgRegisterAsset): Uint8Array;
    toProtoMsg(message: MsgRegisterAsset): MsgRegisterAssetProtoMsg;
};
export declare const MsgRegisterAssetResponse: {
    typeUrl: string;
    encode(_: MsgRegisterAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAssetResponse;
    fromPartial(_: Partial<MsgRegisterAssetResponse>): MsgRegisterAssetResponse;
    fromAmino(_: MsgRegisterAssetResponseAmino): MsgRegisterAssetResponse;
    toAmino(_: MsgRegisterAssetResponse): MsgRegisterAssetResponseAmino;
    fromAminoMsg(object: MsgRegisterAssetResponseAminoMsg): MsgRegisterAssetResponse;
    fromProtoMsg(message: MsgRegisterAssetResponseProtoMsg): MsgRegisterAssetResponse;
    toProto(message: MsgRegisterAssetResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterAssetResponse): MsgRegisterAssetResponseProtoMsg;
};
export declare const MsgDeregisterAsset: {
    typeUrl: string;
    encode(message: MsgDeregisterAsset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterAsset;
    fromPartial(object: Partial<MsgDeregisterAsset>): MsgDeregisterAsset;
    fromAmino(object: MsgDeregisterAssetAmino): MsgDeregisterAsset;
    toAmino(message: MsgDeregisterAsset): MsgDeregisterAssetAmino;
    fromAminoMsg(object: MsgDeregisterAssetAminoMsg): MsgDeregisterAsset;
    toAminoMsg(message: MsgDeregisterAsset): MsgDeregisterAssetAminoMsg;
    fromProtoMsg(message: MsgDeregisterAssetProtoMsg): MsgDeregisterAsset;
    toProto(message: MsgDeregisterAsset): Uint8Array;
    toProtoMsg(message: MsgDeregisterAsset): MsgDeregisterAssetProtoMsg;
};
export declare const MsgDeregisterAssetResponse: {
    typeUrl: string;
    encode(_: MsgDeregisterAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterAssetResponse;
    fromPartial(_: Partial<MsgDeregisterAssetResponse>): MsgDeregisterAssetResponse;
    fromAmino(_: MsgDeregisterAssetResponseAmino): MsgDeregisterAssetResponse;
    toAmino(_: MsgDeregisterAssetResponse): MsgDeregisterAssetResponseAmino;
    fromAminoMsg(object: MsgDeregisterAssetResponseAminoMsg): MsgDeregisterAssetResponse;
    fromProtoMsg(message: MsgDeregisterAssetResponseProtoMsg): MsgDeregisterAssetResponse;
    toProto(message: MsgDeregisterAssetResponse): Uint8Array;
    toProtoMsg(message: MsgDeregisterAssetResponse): MsgDeregisterAssetResponseProtoMsg;
};
