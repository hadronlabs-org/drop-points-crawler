import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Wasm light client's Client state */
export interface ClientState {
    /**
     * bytes encoding the client state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
    checksum: Uint8Array;
    latestHeight: Height;
}
export interface ClientStateProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.ClientState";
    value: Uint8Array;
}
/** Wasm light client's Client state */
export interface ClientStateAmino {
    /**
     * bytes encoding the client state of the underlying light client
     * implemented as a Wasm contract.
     */
    data?: string;
    checksum?: string;
    latest_height?: HeightAmino;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/** Wasm light client's Client state */
export interface ClientStateSDKType {
    data: Uint8Array;
    checksum: Uint8Array;
    latest_height: HeightSDKType;
}
/** Wasm light client's ConsensusState */
export interface ConsensusState {
    /**
     * bytes encoding the consensus state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
}
export interface ConsensusStateProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState";
    value: Uint8Array;
}
/** Wasm light client's ConsensusState */
export interface ConsensusStateAmino {
    /**
     * bytes encoding the consensus state of the underlying light client
     * implemented as a Wasm contract.
     */
    data?: string;
}
export interface ConsensusStateAminoMsg {
    type: "cosmos-sdk/ConsensusState";
    value: ConsensusStateAmino;
}
/** Wasm light client's ConsensusState */
export interface ConsensusStateSDKType {
    data: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessage {
    data: Uint8Array;
}
export interface ClientMessageProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage";
    value: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessageAmino {
    data?: string;
}
export interface ClientMessageAminoMsg {
    type: "cosmos-sdk/ClientMessage";
    value: ClientMessageAmino;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessageSDKType {
    data: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface Checksums {
    checksums: Uint8Array[];
}
export interface ChecksumsProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.Checksums";
    value: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface ChecksumsAmino {
    checksums?: string[];
}
export interface ChecksumsAminoMsg {
    type: "cosmos-sdk/Checksums";
    value: ChecksumsAmino;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface ChecksumsSDKType {
    checksums: Uint8Array[];
}
export declare const ClientState: {
    typeUrl: string;
    encode(message: ClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientState;
    fromPartial(object: Partial<ClientState>): ClientState;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
export declare const ConsensusState: {
    typeUrl: string;
    encode(message: ConsensusState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState;
    fromPartial(object: Partial<ConsensusState>): ConsensusState;
    fromAmino(object: ConsensusStateAmino): ConsensusState;
    toAmino(message: ConsensusState): ConsensusStateAmino;
    fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState;
    toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg;
    fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState;
    toProto(message: ConsensusState): Uint8Array;
    toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg;
};
export declare const ClientMessage: {
    typeUrl: string;
    encode(message: ClientMessage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientMessage;
    fromPartial(object: Partial<ClientMessage>): ClientMessage;
    fromAmino(object: ClientMessageAmino): ClientMessage;
    toAmino(message: ClientMessage): ClientMessageAmino;
    fromAminoMsg(object: ClientMessageAminoMsg): ClientMessage;
    toAminoMsg(message: ClientMessage): ClientMessageAminoMsg;
    fromProtoMsg(message: ClientMessageProtoMsg): ClientMessage;
    toProto(message: ClientMessage): Uint8Array;
    toProtoMsg(message: ClientMessage): ClientMessageProtoMsg;
};
export declare const Checksums: {
    typeUrl: string;
    encode(message: Checksums, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Checksums;
    fromPartial(object: Partial<Checksums>): Checksums;
    fromAmino(object: ChecksumsAmino): Checksums;
    toAmino(message: Checksums): ChecksumsAmino;
    fromAminoMsg(object: ChecksumsAminoMsg): Checksums;
    toAminoMsg(message: Checksums): ChecksumsAminoMsg;
    fromProtoMsg(message: ChecksumsProtoMsg): Checksums;
    toProto(message: Checksums): Uint8Array;
    toProtoMsg(message: Checksums): ChecksumsProtoMsg;
};
