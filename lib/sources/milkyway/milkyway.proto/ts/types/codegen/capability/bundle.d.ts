import * as _1 from "./v1/capability";
import * as _2 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        GenesisOwners: {
            typeUrl: string;
            encode(message: _2.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.GenesisOwners;
            fromPartial(object: Partial<_2.GenesisOwners>): _2.GenesisOwners;
            fromAmino(object: _2.GenesisOwnersAmino): _2.GenesisOwners;
            toAmino(message: _2.GenesisOwners): _2.GenesisOwnersAmino;
            fromAminoMsg(object: _2.GenesisOwnersAminoMsg): _2.GenesisOwners;
            fromProtoMsg(message: _2.GenesisOwnersProtoMsg): _2.GenesisOwners;
            toProto(message: _2.GenesisOwners): Uint8Array;
            toProtoMsg(message: _2.GenesisOwners): _2.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _2.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.GenesisState;
            fromPartial(object: Partial<_2.GenesisState>): _2.GenesisState;
            fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
            toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
            fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
            fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
            toProto(message: _2.GenesisState): Uint8Array;
            toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _1.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.Capability;
            fromPartial(object: Partial<_1.Capability>): _1.Capability;
            fromAmino(object: _1.CapabilityAmino): _1.Capability;
            toAmino(message: _1.Capability): _1.CapabilityAmino;
            fromAminoMsg(object: _1.CapabilityAminoMsg): _1.Capability;
            fromProtoMsg(message: _1.CapabilityProtoMsg): _1.Capability;
            toProto(message: _1.Capability): Uint8Array;
            toProtoMsg(message: _1.Capability): _1.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _1.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.Owner;
            fromPartial(object: Partial<_1.Owner>): _1.Owner;
            fromAmino(object: _1.OwnerAmino): _1.Owner;
            toAmino(message: _1.Owner): _1.OwnerAmino;
            fromAminoMsg(object: _1.OwnerAminoMsg): _1.Owner;
            fromProtoMsg(message: _1.OwnerProtoMsg): _1.Owner;
            toProto(message: _1.Owner): Uint8Array;
            toProtoMsg(message: _1.Owner): _1.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _1.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CapabilityOwners;
            fromPartial(object: Partial<_1.CapabilityOwners>): _1.CapabilityOwners;
            fromAmino(object: _1.CapabilityOwnersAmino): _1.CapabilityOwners;
            toAmino(message: _1.CapabilityOwners): _1.CapabilityOwnersAmino;
            fromAminoMsg(object: _1.CapabilityOwnersAminoMsg): _1.CapabilityOwners;
            fromProtoMsg(message: _1.CapabilityOwnersProtoMsg): _1.CapabilityOwners;
            toProto(message: _1.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _1.CapabilityOwners): _1.CapabilityOwnersProtoMsg;
        };
    };
}
