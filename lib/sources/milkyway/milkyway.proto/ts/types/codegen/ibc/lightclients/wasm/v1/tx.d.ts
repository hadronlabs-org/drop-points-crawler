import { BinaryReader, BinaryWriter } from "../../../../binary";
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCode {
    /** signer address */
    signer: string;
    /** wasm byte code of light client contract. It can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode";
    value: Uint8Array;
}
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCodeAmino {
    /** signer address */
    signer?: string;
    /** wasm byte code of light client contract. It can be raw or gzip compressed */
    wasm_byte_code?: string;
}
export interface MsgStoreCodeAminoMsg {
    type: "cosmos-sdk/MsgStoreCode";
    value: MsgStoreCodeAmino;
}
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCodeSDKType {
    signer: string;
    wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponse {
    /** checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponseAmino {
    /** checksum is the sha256 hash of the stored code */
    checksum?: string;
}
export interface MsgStoreCodeResponseAminoMsg {
    type: "cosmos-sdk/MsgStoreCodeResponse";
    value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponseSDKType {
    checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksum {
    /** signer address */
    signer: string;
    /** checksum is the sha256 hash to be removed from the store */
    checksum: Uint8Array;
}
export interface MsgRemoveChecksumProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum";
    value: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksumAmino {
    /** signer address */
    signer?: string;
    /** checksum is the sha256 hash to be removed from the store */
    checksum?: string;
}
export interface MsgRemoveChecksumAminoMsg {
    type: "cosmos-sdk/MsgRemoveChecksum";
    value: MsgRemoveChecksumAmino;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksumSDKType {
    signer: string;
    checksum: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponse {
}
export interface MsgRemoveChecksumResponseProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse";
    value: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponseAmino {
}
export interface MsgRemoveChecksumResponseAminoMsg {
    type: "cosmos-sdk/MsgRemoveChecksumResponse";
    value: MsgRemoveChecksumResponseAmino;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponseSDKType {
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContract {
    /** signer address */
    signer: string;
    /** the client id of the contract */
    clientId: string;
    /** checksum is the sha256 hash of the new wasm byte code for the contract */
    checksum: Uint8Array;
    /** the json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract";
    value: Uint8Array;
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContractAmino {
    /** signer address */
    signer?: string;
    /** the client id of the contract */
    client_id?: string;
    /** checksum is the sha256 hash of the new wasm byte code for the contract */
    checksum?: string;
    /** the json encoded message to be passed to the contract on migration */
    msg?: string;
}
export interface MsgMigrateContractAminoMsg {
    type: "cosmos-sdk/MsgMigrateContract";
    value: MsgMigrateContractAmino;
}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContractSDKType {
    signer: string;
    client_id: string;
    checksum: Uint8Array;
    msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponse {
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponseAmino {
}
export interface MsgMigrateContractResponseAminoMsg {
    type: "cosmos-sdk/MsgMigrateContractResponse";
    value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponseSDKType {
}
export declare const MsgStoreCode: {
    typeUrl: string;
    encode(message: MsgStoreCode, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
    fromAmino(object: MsgStoreCodeAmino): MsgStoreCode;
    toAmino(message: MsgStoreCode): MsgStoreCodeAmino;
    fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode;
    toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg;
    fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode;
    toProto(message: MsgStoreCode): Uint8Array;
    toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg;
};
export declare const MsgStoreCodeResponse: {
    typeUrl: string;
    encode(message: MsgStoreCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
    fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse;
    toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino;
    fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse;
    toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg;
    fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse;
    toProto(message: MsgStoreCodeResponse): Uint8Array;
    toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg;
};
export declare const MsgRemoveChecksum: {
    typeUrl: string;
    encode(message: MsgRemoveChecksum, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksum;
    fromPartial(object: Partial<MsgRemoveChecksum>): MsgRemoveChecksum;
    fromAmino(object: MsgRemoveChecksumAmino): MsgRemoveChecksum;
    toAmino(message: MsgRemoveChecksum): MsgRemoveChecksumAmino;
    fromAminoMsg(object: MsgRemoveChecksumAminoMsg): MsgRemoveChecksum;
    toAminoMsg(message: MsgRemoveChecksum): MsgRemoveChecksumAminoMsg;
    fromProtoMsg(message: MsgRemoveChecksumProtoMsg): MsgRemoveChecksum;
    toProto(message: MsgRemoveChecksum): Uint8Array;
    toProtoMsg(message: MsgRemoveChecksum): MsgRemoveChecksumProtoMsg;
};
export declare const MsgRemoveChecksumResponse: {
    typeUrl: string;
    encode(_: MsgRemoveChecksumResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksumResponse;
    fromPartial(_: Partial<MsgRemoveChecksumResponse>): MsgRemoveChecksumResponse;
    fromAmino(_: MsgRemoveChecksumResponseAmino): MsgRemoveChecksumResponse;
    toAmino(_: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAmino;
    fromAminoMsg(object: MsgRemoveChecksumResponseAminoMsg): MsgRemoveChecksumResponse;
    toAminoMsg(message: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAminoMsg;
    fromProtoMsg(message: MsgRemoveChecksumResponseProtoMsg): MsgRemoveChecksumResponse;
    toProto(message: MsgRemoveChecksumResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseProtoMsg;
};
export declare const MsgMigrateContract: {
    typeUrl: string;
    encode(message: MsgMigrateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract;
    fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract;
    fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract;
    toAmino(message: MsgMigrateContract): MsgMigrateContractAmino;
    fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract;
    toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg;
    fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract;
    toProto(message: MsgMigrateContract): Uint8Array;
    toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg;
};
export declare const MsgMigrateContractResponse: {
    typeUrl: string;
    encode(_: MsgMigrateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromPartial(_: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
    fromAmino(_: MsgMigrateContractResponseAmino): MsgMigrateContractResponse;
    toAmino(_: MsgMigrateContractResponse): MsgMigrateContractResponseAmino;
    fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse;
    toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg;
    fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse;
    toProto(message: MsgMigrateContractResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg;
};
