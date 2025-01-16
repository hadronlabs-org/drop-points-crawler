import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    /** height is the equivocation height. */
    height: bigint;
    /** time is the equivocation time. */
    time: Date;
    /** power is the equivocation validator power. */
    power: bigint;
    /** consensus_address is the equivocation validator consensus address. */
    consensusAddress: string;
}
export interface EquivocationProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
    value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationAmino {
    /** height is the equivocation height. */
    height?: string;
    /** time is the equivocation time. */
    time: string;
    /** power is the equivocation validator power. */
    power?: string;
    /** consensus_address is the equivocation validator consensus address. */
    consensus_address?: string;
}
export interface EquivocationAminoMsg {
    type: "cosmos-sdk/Equivocation";
    value: EquivocationAmino;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
    height: bigint;
    time: Date;
    power: bigint;
    consensus_address: string;
}
export declare const Equivocation: {
    typeUrl: string;
    encode(message: Equivocation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Equivocation;
    fromPartial(object: Partial<Equivocation>): Equivocation;
    fromAmino(object: EquivocationAmino): Equivocation;
    toAmino(message: Equivocation): EquivocationAmino;
    fromAminoMsg(object: EquivocationAminoMsg): Equivocation;
    toAminoMsg(message: Equivocation): EquivocationAminoMsg;
    fromProtoMsg(message: EquivocationProtoMsg): Equivocation;
    toProto(message: Equivocation): Uint8Array;
    toProtoMsg(message: Equivocation): EquivocationProtoMsg;
};
