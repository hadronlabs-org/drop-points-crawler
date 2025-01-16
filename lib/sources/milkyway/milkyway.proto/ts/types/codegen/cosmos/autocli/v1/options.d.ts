import { BinaryReader, BinaryWriter } from "../../../binary";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptions {
    /** tx describes the tx commands for the module. */
    tx?: ServiceCommandDescriptor;
    /** query describes the queries commands for the module. */
    query?: ServiceCommandDescriptor;
}
export interface ModuleOptionsProtoMsg {
    typeUrl: "/cosmos.autocli.v1.ModuleOptions";
    value: Uint8Array;
}
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptionsAmino {
    /** tx describes the tx commands for the module. */
    tx?: ServiceCommandDescriptorAmino;
    /** query describes the queries commands for the module. */
    query?: ServiceCommandDescriptorAmino;
}
export interface ModuleOptionsAminoMsg {
    type: "cosmos-sdk/ModuleOptions";
    value: ModuleOptionsAmino;
}
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptionsSDKType {
    tx?: ServiceCommandDescriptorSDKType;
    query?: ServiceCommandDescriptorSDKType;
}
export interface ServiceCommandDescriptor_SubCommandsEntry {
    key: string;
    value?: ServiceCommandDescriptor;
}
export interface ServiceCommandDescriptor_SubCommandsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface ServiceCommandDescriptor_SubCommandsEntryAmino {
    key?: string;
    value?: ServiceCommandDescriptorAmino;
}
export interface ServiceCommandDescriptor_SubCommandsEntryAminoMsg {
    type: string;
    value: ServiceCommandDescriptor_SubCommandsEntryAmino;
}
export interface ServiceCommandDescriptor_SubCommandsEntrySDKType {
    key: string;
    value?: ServiceCommandDescriptorSDKType;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptor {
    /**
     * service is the fully qualified name of the protobuf service to build
     * the command from. It can be left empty if sub_commands are used instead
     * which may be the case if a module provides multiple tx and/or query services.
     */
    service: string;
    /**
     * rpc_command_options are options for commands generated from rpc methods.
     * If no options are specified for a given rpc method on the service, a
     * command will be generated for that method with the default options.
     */
    rpcCommandOptions: RpcCommandOptions[];
    /**
     * sub_commands is a map of optional sub-commands for this command based on
     * different protobuf services. The map key is used as the name of the
     * sub-command.
     */
    subCommands: {
        [key: string]: ServiceCommandDescriptor;
    };
}
export interface ServiceCommandDescriptorProtoMsg {
    typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor";
    value: Uint8Array;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptorAmino {
    /**
     * service is the fully qualified name of the protobuf service to build
     * the command from. It can be left empty if sub_commands are used instead
     * which may be the case if a module provides multiple tx and/or query services.
     */
    service?: string;
    /**
     * rpc_command_options are options for commands generated from rpc methods.
     * If no options are specified for a given rpc method on the service, a
     * command will be generated for that method with the default options.
     */
    rpc_command_options?: RpcCommandOptionsAmino[];
    /**
     * sub_commands is a map of optional sub-commands for this command based on
     * different protobuf services. The map key is used as the name of the
     * sub-command.
     */
    sub_commands?: {
        [key: string]: ServiceCommandDescriptorAmino;
    };
}
export interface ServiceCommandDescriptorAminoMsg {
    type: "cosmos-sdk/ServiceCommandDescriptor";
    value: ServiceCommandDescriptorAmino;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptorSDKType {
    service: string;
    rpc_command_options: RpcCommandOptionsSDKType[];
    sub_commands: {
        [key: string]: ServiceCommandDescriptorSDKType;
    };
}
export interface RpcCommandOptions_FlagOptionsEntry {
    key: string;
    value?: FlagOptions;
}
export interface RpcCommandOptions_FlagOptionsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface RpcCommandOptions_FlagOptionsEntryAmino {
    key?: string;
    value?: FlagOptionsAmino;
}
export interface RpcCommandOptions_FlagOptionsEntryAminoMsg {
    type: string;
    value: RpcCommandOptions_FlagOptionsEntryAmino;
}
export interface RpcCommandOptions_FlagOptionsEntrySDKType {
    key: string;
    value?: FlagOptionsSDKType;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptions {
    /**
     * rpc_method is short name of the protobuf rpc method that this command is
     * generated from.
     */
    rpcMethod: string;
    /**
     * use is the one-line usage method. It also allows specifying an alternate
     * name for the command as the first word of the usage text.
     *
     * By default the name of an rpc command is the kebab-case short name of the
     * rpc method.
     */
    use: string;
    /** long is the long message shown in the 'help <this-command>' output. */
    long: string;
    /** short is the short description shown in the 'help' output. */
    short: string;
    /** example is examples of how to use the command. */
    example: string;
    /** alias is an array of aliases that can be used instead of the first word in Use. */
    alias: string[];
    /**
     * suggest_for is an array of command names for which this command will be suggested -
     * similar to aliases but only suggests.
     */
    suggestFor: string[];
    /** deprecated defines, if this command is deprecated and should print this string when used. */
    deprecated: string;
    /**
     * version defines the version for this command. If this value is non-empty and the command does not
     * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
     * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
     * command does not define one.
     */
    version: string;
    /**
     * flag_options are options for flags generated from rpc request fields.
     * By default all request fields are configured as flags. They can
     * also be configured as positional args instead using positional_args.
     */
    flagOptions: {
        [key: string]: FlagOptions;
    };
    /** positional_args specifies positional arguments for the command. */
    positionalArgs: PositionalArgDescriptor[];
    /** skip specifies whether to skip this rpc method when generating commands. */
    skip: boolean;
}
export interface RpcCommandOptionsProtoMsg {
    typeUrl: "/cosmos.autocli.v1.RpcCommandOptions";
    value: Uint8Array;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptionsAmino {
    /**
     * rpc_method is short name of the protobuf rpc method that this command is
     * generated from.
     */
    rpc_method?: string;
    /**
     * use is the one-line usage method. It also allows specifying an alternate
     * name for the command as the first word of the usage text.
     *
     * By default the name of an rpc command is the kebab-case short name of the
     * rpc method.
     */
    use?: string;
    /** long is the long message shown in the 'help <this-command>' output. */
    long?: string;
    /** short is the short description shown in the 'help' output. */
    short?: string;
    /** example is examples of how to use the command. */
    example?: string;
    /** alias is an array of aliases that can be used instead of the first word in Use. */
    alias?: string[];
    /**
     * suggest_for is an array of command names for which this command will be suggested -
     * similar to aliases but only suggests.
     */
    suggest_for?: string[];
    /** deprecated defines, if this command is deprecated and should print this string when used. */
    deprecated?: string;
    /**
     * version defines the version for this command. If this value is non-empty and the command does not
     * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
     * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
     * command does not define one.
     */
    version?: string;
    /**
     * flag_options are options for flags generated from rpc request fields.
     * By default all request fields are configured as flags. They can
     * also be configured as positional args instead using positional_args.
     */
    flag_options?: {
        [key: string]: FlagOptionsAmino;
    };
    /** positional_args specifies positional arguments for the command. */
    positional_args?: PositionalArgDescriptorAmino[];
    /** skip specifies whether to skip this rpc method when generating commands. */
    skip?: boolean;
}
export interface RpcCommandOptionsAminoMsg {
    type: "cosmos-sdk/RpcCommandOptions";
    value: RpcCommandOptionsAmino;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptionsSDKType {
    rpc_method: string;
    use: string;
    long: string;
    short: string;
    example: string;
    alias: string[];
    suggest_for: string[];
    deprecated: string;
    version: string;
    flag_options: {
        [key: string]: FlagOptionsSDKType;
    };
    positional_args: PositionalArgDescriptorSDKType[];
    skip: boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptions {
    /** name is an alternate name to use for the field flag. */
    name: string;
    /** shorthand is a one-letter abbreviated flag. */
    shorthand: string;
    /** usage is the help message. */
    usage: string;
    /** default_value is the default value as text. */
    defaultValue: string;
    /** deprecated is the usage text to show if this flag is deprecated. */
    deprecated: string;
    /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
    shorthandDeprecated: string;
    /** hidden hides the flag from help/usage text */
    hidden: boolean;
}
export interface FlagOptionsProtoMsg {
    typeUrl: "/cosmos.autocli.v1.FlagOptions";
    value: Uint8Array;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptionsAmino {
    /** name is an alternate name to use for the field flag. */
    name?: string;
    /** shorthand is a one-letter abbreviated flag. */
    shorthand?: string;
    /** usage is the help message. */
    usage?: string;
    /** default_value is the default value as text. */
    default_value?: string;
    /** deprecated is the usage text to show if this flag is deprecated. */
    deprecated?: string;
    /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
    shorthand_deprecated?: string;
    /** hidden hides the flag from help/usage text */
    hidden?: boolean;
}
export interface FlagOptionsAminoMsg {
    type: "cosmos-sdk/FlagOptions";
    value: FlagOptionsAmino;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptionsSDKType {
    name: string;
    shorthand: string;
    usage: string;
    default_value: string;
    deprecated: string;
    shorthand_deprecated: string;
    hidden: boolean;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptor {
    /**
     * proto_field specifies the proto field to use as the positional arg. Any
     * fields used as positional args will not have a flag generated.
     */
    protoField: string;
    /**
     * varargs makes a positional parameter a varargs parameter. This can only be
     * applied to last positional parameter and the proto_field must a repeated
     * field.
     */
    varargs: boolean;
}
export interface PositionalArgDescriptorProtoMsg {
    typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor";
    value: Uint8Array;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptorAmino {
    /**
     * proto_field specifies the proto field to use as the positional arg. Any
     * fields used as positional args will not have a flag generated.
     */
    proto_field?: string;
    /**
     * varargs makes a positional parameter a varargs parameter. This can only be
     * applied to last positional parameter and the proto_field must a repeated
     * field.
     */
    varargs?: boolean;
}
export interface PositionalArgDescriptorAminoMsg {
    type: "cosmos-sdk/PositionalArgDescriptor";
    value: PositionalArgDescriptorAmino;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptorSDKType {
    proto_field: string;
    varargs: boolean;
}
export declare const ModuleOptions: {
    typeUrl: string;
    encode(message: ModuleOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleOptions;
    fromPartial(object: Partial<ModuleOptions>): ModuleOptions;
    fromAmino(object: ModuleOptionsAmino): ModuleOptions;
    toAmino(message: ModuleOptions): ModuleOptionsAmino;
    fromAminoMsg(object: ModuleOptionsAminoMsg): ModuleOptions;
    toAminoMsg(message: ModuleOptions): ModuleOptionsAminoMsg;
    fromProtoMsg(message: ModuleOptionsProtoMsg): ModuleOptions;
    toProto(message: ModuleOptions): Uint8Array;
    toProtoMsg(message: ModuleOptions): ModuleOptionsProtoMsg;
};
export declare const ServiceCommandDescriptor_SubCommandsEntry: {
    encode(message: ServiceCommandDescriptor_SubCommandsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor_SubCommandsEntry;
    fromPartial(object: Partial<ServiceCommandDescriptor_SubCommandsEntry>): ServiceCommandDescriptor_SubCommandsEntry;
    fromAmino(object: ServiceCommandDescriptor_SubCommandsEntryAmino): ServiceCommandDescriptor_SubCommandsEntry;
    toAmino(message: ServiceCommandDescriptor_SubCommandsEntry): ServiceCommandDescriptor_SubCommandsEntryAmino;
    fromAminoMsg(object: ServiceCommandDescriptor_SubCommandsEntryAminoMsg): ServiceCommandDescriptor_SubCommandsEntry;
    fromProtoMsg(message: ServiceCommandDescriptor_SubCommandsEntryProtoMsg): ServiceCommandDescriptor_SubCommandsEntry;
    toProto(message: ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
};
export declare const ServiceCommandDescriptor: {
    typeUrl: string;
    encode(message: ServiceCommandDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceCommandDescriptor;
    fromPartial(object: Partial<ServiceCommandDescriptor>): ServiceCommandDescriptor;
    fromAmino(object: ServiceCommandDescriptorAmino): ServiceCommandDescriptor;
    toAmino(message: ServiceCommandDescriptor): ServiceCommandDescriptorAmino;
    fromAminoMsg(object: ServiceCommandDescriptorAminoMsg): ServiceCommandDescriptor;
    toAminoMsg(message: ServiceCommandDescriptor): ServiceCommandDescriptorAminoMsg;
    fromProtoMsg(message: ServiceCommandDescriptorProtoMsg): ServiceCommandDescriptor;
    toProto(message: ServiceCommandDescriptor): Uint8Array;
    toProtoMsg(message: ServiceCommandDescriptor): ServiceCommandDescriptorProtoMsg;
};
export declare const RpcCommandOptions_FlagOptionsEntry: {
    encode(message: RpcCommandOptions_FlagOptionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions_FlagOptionsEntry;
    fromPartial(object: Partial<RpcCommandOptions_FlagOptionsEntry>): RpcCommandOptions_FlagOptionsEntry;
    fromAmino(object: RpcCommandOptions_FlagOptionsEntryAmino): RpcCommandOptions_FlagOptionsEntry;
    toAmino(message: RpcCommandOptions_FlagOptionsEntry): RpcCommandOptions_FlagOptionsEntryAmino;
    fromAminoMsg(object: RpcCommandOptions_FlagOptionsEntryAminoMsg): RpcCommandOptions_FlagOptionsEntry;
    fromProtoMsg(message: RpcCommandOptions_FlagOptionsEntryProtoMsg): RpcCommandOptions_FlagOptionsEntry;
    toProto(message: RpcCommandOptions_FlagOptionsEntry): Uint8Array;
};
export declare const RpcCommandOptions: {
    typeUrl: string;
    encode(message: RpcCommandOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions;
    fromPartial(object: Partial<RpcCommandOptions>): RpcCommandOptions;
    fromAmino(object: RpcCommandOptionsAmino): RpcCommandOptions;
    toAmino(message: RpcCommandOptions): RpcCommandOptionsAmino;
    fromAminoMsg(object: RpcCommandOptionsAminoMsg): RpcCommandOptions;
    toAminoMsg(message: RpcCommandOptions): RpcCommandOptionsAminoMsg;
    fromProtoMsg(message: RpcCommandOptionsProtoMsg): RpcCommandOptions;
    toProto(message: RpcCommandOptions): Uint8Array;
    toProtoMsg(message: RpcCommandOptions): RpcCommandOptionsProtoMsg;
};
export declare const FlagOptions: {
    typeUrl: string;
    encode(message: FlagOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FlagOptions;
    fromPartial(object: Partial<FlagOptions>): FlagOptions;
    fromAmino(object: FlagOptionsAmino): FlagOptions;
    toAmino(message: FlagOptions): FlagOptionsAmino;
    fromAminoMsg(object: FlagOptionsAminoMsg): FlagOptions;
    toAminoMsg(message: FlagOptions): FlagOptionsAminoMsg;
    fromProtoMsg(message: FlagOptionsProtoMsg): FlagOptions;
    toProto(message: FlagOptions): Uint8Array;
    toProtoMsg(message: FlagOptions): FlagOptionsProtoMsg;
};
export declare const PositionalArgDescriptor: {
    typeUrl: string;
    encode(message: PositionalArgDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PositionalArgDescriptor;
    fromPartial(object: Partial<PositionalArgDescriptor>): PositionalArgDescriptor;
    fromAmino(object: PositionalArgDescriptorAmino): PositionalArgDescriptor;
    toAmino(message: PositionalArgDescriptor): PositionalArgDescriptorAmino;
    fromAminoMsg(object: PositionalArgDescriptorAminoMsg): PositionalArgDescriptor;
    toAminoMsg(message: PositionalArgDescriptor): PositionalArgDescriptorAminoMsg;
    fromProtoMsg(message: PositionalArgDescriptorProtoMsg): PositionalArgDescriptor;
    toProto(message: PositionalArgDescriptor): Uint8Array;
    toProtoMsg(message: PositionalArgDescriptor): PositionalArgDescriptorProtoMsg;
};
