import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceProtoMsg, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceProtoMsg, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceProtoMsg, AllowedMsgAllowanceSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    value: Uint8Array;
}
export type MsgGrantAllowanceEncoded = Omit<MsgGrantAllowance, "allowance"> & {
    /** allowance can be any of basic, periodic, allowed fee allowance. */ allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter?: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee?: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
    granter: string;
    grantee: string;
    allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
export interface MsgGrantAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
    value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {
}
export interface MsgGrantAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowanceResponse";
    value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter?: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee?: string;
}
export interface MsgRevokeAllowanceAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
    granter: string;
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
export interface MsgRevokeAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
    value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {
}
export interface MsgRevokeAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowanceResponse";
    value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
export interface MsgPruneAllowancesProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances";
    value: Uint8Array;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesAmino {
    /** pruner is the address of the user pruning expired allowances. */
    pruner?: string;
}
export interface MsgPruneAllowancesAminoMsg {
    type: "cosmos-sdk/MsgPruneAllowances";
    value: MsgPruneAllowancesAmino;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesSDKType {
    pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {
}
export interface MsgPruneAllowancesResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse";
    value: Uint8Array;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseAmino {
}
export interface MsgPruneAllowancesResponseAminoMsg {
    type: "cosmos-sdk/MsgPruneAllowancesResponse";
    value: MsgPruneAllowancesResponseAmino;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseSDKType {
}
export declare const MsgGrantAllowance: {
    typeUrl: string;
    encode(message: MsgGrantAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance;
    fromPartial(object: Partial<MsgGrantAllowance>): MsgGrantAllowance;
    fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance;
    toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino;
    fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance;
    toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance;
    toProto(message: MsgGrantAllowance): Uint8Array;
    toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg;
};
export declare const MsgGrantAllowanceResponse: {
    typeUrl: string;
    encode(_: MsgGrantAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromPartial(_: Partial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse;
    toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino;
    fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse;
    toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse;
    toProto(message: MsgGrantAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg;
};
export declare const MsgRevokeAllowance: {
    typeUrl: string;
    encode(message: MsgRevokeAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromPartial(object: Partial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance;
    toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino;
    fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance;
    toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance;
    toProto(message: MsgRevokeAllowance): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg;
};
export declare const MsgRevokeAllowanceResponse: {
    typeUrl: string;
    encode(_: MsgRevokeAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromPartial(_: Partial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse;
    toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino;
    fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse;
    toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse;
    toProto(message: MsgRevokeAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg;
};
export declare const MsgPruneAllowances: {
    typeUrl: string;
    encode(message: MsgPruneAllowances, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowances;
    fromPartial(object: Partial<MsgPruneAllowances>): MsgPruneAllowances;
    fromAmino(object: MsgPruneAllowancesAmino): MsgPruneAllowances;
    toAmino(message: MsgPruneAllowances): MsgPruneAllowancesAmino;
    fromAminoMsg(object: MsgPruneAllowancesAminoMsg): MsgPruneAllowances;
    toAminoMsg(message: MsgPruneAllowances): MsgPruneAllowancesAminoMsg;
    fromProtoMsg(message: MsgPruneAllowancesProtoMsg): MsgPruneAllowances;
    toProto(message: MsgPruneAllowances): Uint8Array;
    toProtoMsg(message: MsgPruneAllowances): MsgPruneAllowancesProtoMsg;
};
export declare const MsgPruneAllowancesResponse: {
    typeUrl: string;
    encode(_: MsgPruneAllowancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowancesResponse;
    fromPartial(_: Partial<MsgPruneAllowancesResponse>): MsgPruneAllowancesResponse;
    fromAmino(_: MsgPruneAllowancesResponseAmino): MsgPruneAllowancesResponse;
    toAmino(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAmino;
    fromAminoMsg(object: MsgPruneAllowancesResponseAminoMsg): MsgPruneAllowancesResponse;
    toAminoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAminoMsg;
    fromProtoMsg(message: MsgPruneAllowancesResponseProtoMsg): MsgPruneAllowancesResponse;
    toProto(message: MsgPruneAllowancesResponse): Uint8Array;
    toProtoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseProtoMsg;
};
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any;
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: Any) => AnyAmino;
