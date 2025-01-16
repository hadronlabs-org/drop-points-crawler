import * as _3 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _3.ScalarType;
    scalarTypeToJSON(object: _3.ScalarType): string;
    ScalarType: typeof _3.ScalarType;
    ScalarTypeSDKType: typeof _3.ScalarType;
    ScalarTypeAmino: typeof _3.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _3.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.InterfaceDescriptor;
        fromPartial(object: Partial<_3.InterfaceDescriptor>): _3.InterfaceDescriptor;
        fromAmino(object: _3.InterfaceDescriptorAmino): _3.InterfaceDescriptor;
        toAmino(message: _3.InterfaceDescriptor): _3.InterfaceDescriptorAmino;
        fromAminoMsg(object: _3.InterfaceDescriptorAminoMsg): _3.InterfaceDescriptor;
        fromProtoMsg(message: _3.InterfaceDescriptorProtoMsg): _3.InterfaceDescriptor;
        toProto(message: _3.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _3.InterfaceDescriptor): _3.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _3.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ScalarDescriptor;
        fromPartial(object: Partial<_3.ScalarDescriptor>): _3.ScalarDescriptor;
        fromAmino(object: _3.ScalarDescriptorAmino): _3.ScalarDescriptor;
        toAmino(message: _3.ScalarDescriptor): _3.ScalarDescriptorAmino;
        fromAminoMsg(object: _3.ScalarDescriptorAminoMsg): _3.ScalarDescriptor;
        fromProtoMsg(message: _3.ScalarDescriptorProtoMsg): _3.ScalarDescriptor;
        toProto(message: _3.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _3.ScalarDescriptor): _3.ScalarDescriptorProtoMsg;
    };
};
