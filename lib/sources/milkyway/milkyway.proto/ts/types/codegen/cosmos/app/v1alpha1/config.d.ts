import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface Config {
    /** modules are the module configurations for the app. */
    modules: ModuleConfig[];
    /**
     * golang_bindings specifies explicit interface to implementation type bindings which
     * depinject uses to resolve interface inputs to provider functions.  The scope of this
     * field's configuration is global (not module specific).
     */
    golangBindings: GolangBinding[];
}
export interface ConfigProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.Config";
    value: Uint8Array;
}
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface ConfigAmino {
    /** modules are the module configurations for the app. */
    modules?: ModuleConfigAmino[];
    /**
     * golang_bindings specifies explicit interface to implementation type bindings which
     * depinject uses to resolve interface inputs to provider functions.  The scope of this
     * field's configuration is global (not module specific).
     */
    golang_bindings?: GolangBindingAmino[];
}
export interface ConfigAminoMsg {
    type: "cosmos-sdk/Config";
    value: ConfigAmino;
}
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface ConfigSDKType {
    modules: ModuleConfigSDKType[];
    golang_bindings: GolangBindingSDKType[];
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfig {
    /**
     * name is the unique name of the module within the app. It should be a name
     * that persists between different versions of a module so that modules
     * can be smoothly upgraded to new versions.
     *
     * For example, for the module cosmos.bank.module.v1.Module, we may chose
     * to simply name the module "bank" in the app. When we upgrade to
     * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
     * and the framework knows that the v2 module should receive all the same state
     * that the v1 module had. Note: modules should provide info on which versions
     * they can migrate from in the ModuleDescriptor.can_migration_from field.
     */
    name: string;
    /**
     * config is the config object for the module. Module config messages should
     * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
     */
    config?: Any;
    /**
     * golang_bindings specifies explicit interface to implementation type bindings which
     * depinject uses to resolve interface inputs to provider functions.  The scope of this
     * field's configuration is module specific.
     */
    golangBindings: GolangBinding[];
}
export interface ModuleConfigProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.ModuleConfig";
    value: Uint8Array;
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfigAmino {
    /**
     * name is the unique name of the module within the app. It should be a name
     * that persists between different versions of a module so that modules
     * can be smoothly upgraded to new versions.
     *
     * For example, for the module cosmos.bank.module.v1.Module, we may chose
     * to simply name the module "bank" in the app. When we upgrade to
     * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
     * and the framework knows that the v2 module should receive all the same state
     * that the v1 module had. Note: modules should provide info on which versions
     * they can migrate from in the ModuleDescriptor.can_migration_from field.
     */
    name?: string;
    /**
     * config is the config object for the module. Module config messages should
     * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
     */
    config?: AnyAmino;
    /**
     * golang_bindings specifies explicit interface to implementation type bindings which
     * depinject uses to resolve interface inputs to provider functions.  The scope of this
     * field's configuration is module specific.
     */
    golang_bindings?: GolangBindingAmino[];
}
export interface ModuleConfigAminoMsg {
    type: "cosmos-sdk/ModuleConfig";
    value: ModuleConfigAmino;
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfigSDKType {
    name: string;
    config?: AnySDKType;
    golang_bindings: GolangBindingSDKType[];
}
/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */
export interface GolangBinding {
    /** interface_type is the interface type which will be bound to a specific implementation type */
    interfaceType: string;
    /** implementation is the implementing type which will be supplied when an input of type interface is requested */
    implementation: string;
}
export interface GolangBindingProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.GolangBinding";
    value: Uint8Array;
}
/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */
export interface GolangBindingAmino {
    /** interface_type is the interface type which will be bound to a specific implementation type */
    interface_type?: string;
    /** implementation is the implementing type which will be supplied when an input of type interface is requested */
    implementation?: string;
}
export interface GolangBindingAminoMsg {
    type: "cosmos-sdk/GolangBinding";
    value: GolangBindingAmino;
}
/** GolangBinding is an explicit interface type to implementing type binding for dependency injection. */
export interface GolangBindingSDKType {
    interface_type: string;
    implementation: string;
}
export declare const Config: {
    typeUrl: string;
    encode(message: Config, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Config;
    fromPartial(object: Partial<Config>): Config;
    fromAmino(object: ConfigAmino): Config;
    toAmino(message: Config): ConfigAmino;
    fromAminoMsg(object: ConfigAminoMsg): Config;
    toAminoMsg(message: Config): ConfigAminoMsg;
    fromProtoMsg(message: ConfigProtoMsg): Config;
    toProto(message: Config): Uint8Array;
    toProtoMsg(message: Config): ConfigProtoMsg;
};
export declare const ModuleConfig: {
    typeUrl: string;
    encode(message: ModuleConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleConfig;
    fromPartial(object: Partial<ModuleConfig>): ModuleConfig;
    fromAmino(object: ModuleConfigAmino): ModuleConfig;
    toAmino(message: ModuleConfig): ModuleConfigAmino;
    fromAminoMsg(object: ModuleConfigAminoMsg): ModuleConfig;
    toAminoMsg(message: ModuleConfig): ModuleConfigAminoMsg;
    fromProtoMsg(message: ModuleConfigProtoMsg): ModuleConfig;
    toProto(message: ModuleConfig): Uint8Array;
    toProtoMsg(message: ModuleConfig): ModuleConfigProtoMsg;
};
export declare const GolangBinding: {
    typeUrl: string;
    encode(message: GolangBinding, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GolangBinding;
    fromPartial(object: Partial<GolangBinding>): GolangBinding;
    fromAmino(object: GolangBindingAmino): GolangBinding;
    toAmino(message: GolangBinding): GolangBindingAmino;
    fromAminoMsg(object: GolangBindingAminoMsg): GolangBinding;
    toAminoMsg(message: GolangBinding): GolangBindingAminoMsg;
    fromProtoMsg(message: GolangBindingProtoMsg): GolangBinding;
    toProto(message: GolangBinding): Uint8Array;
    toProtoMsg(message: GolangBinding): GolangBindingProtoMsg;
};
