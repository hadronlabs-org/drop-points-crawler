import { ModuleOptions, ModuleOptionsAmino, ModuleOptionsSDKType } from "./options";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
export interface AppOptionsRequestProtoMsg {
    typeUrl: "/cosmos.autocli.v1.AppOptionsRequest";
    value: Uint8Array;
}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequestAmino {
}
export interface AppOptionsRequestAminoMsg {
    type: "cosmos-sdk/AppOptionsRequest";
    value: AppOptionsRequestAmino;
}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequestSDKType {
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value?: ModuleOptions;
}
export interface AppOptionsResponse_ModuleOptionsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface AppOptionsResponse_ModuleOptionsEntryAmino {
    key?: string;
    value?: ModuleOptionsAmino;
}
export interface AppOptionsResponse_ModuleOptionsEntryAminoMsg {
    type: string;
    value: AppOptionsResponse_ModuleOptionsEntryAmino;
}
export interface AppOptionsResponse_ModuleOptionsEntrySDKType {
    key: string;
    value?: ModuleOptionsSDKType;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions: {
        [key: string]: ModuleOptions;
    };
}
export interface AppOptionsResponseProtoMsg {
    typeUrl: "/cosmos.autocli.v1.AppOptionsResponse";
    value: Uint8Array;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponseAmino {
    /** module_options is a map of module name to autocli module options. */
    module_options?: {
        [key: string]: ModuleOptionsAmino;
    };
}
export interface AppOptionsResponseAminoMsg {
    type: "cosmos-sdk/AppOptionsResponse";
    value: AppOptionsResponseAmino;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponseSDKType {
    module_options: {
        [key: string]: ModuleOptionsSDKType;
    };
}
export declare const AppOptionsRequest: {
    typeUrl: string;
    encode(_: AppOptionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsRequest;
    fromPartial(_: Partial<AppOptionsRequest>): AppOptionsRequest;
    fromAmino(_: AppOptionsRequestAmino): AppOptionsRequest;
    toAmino(_: AppOptionsRequest): AppOptionsRequestAmino;
    fromAminoMsg(object: AppOptionsRequestAminoMsg): AppOptionsRequest;
    toAminoMsg(message: AppOptionsRequest): AppOptionsRequestAminoMsg;
    fromProtoMsg(message: AppOptionsRequestProtoMsg): AppOptionsRequest;
    toProto(message: AppOptionsRequest): Uint8Array;
    toProtoMsg(message: AppOptionsRequest): AppOptionsRequestProtoMsg;
};
export declare const AppOptionsResponse_ModuleOptionsEntry: {
    encode(message: AppOptionsResponse_ModuleOptionsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse_ModuleOptionsEntry;
    fromPartial(object: Partial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry;
    fromAmino(object: AppOptionsResponse_ModuleOptionsEntryAmino): AppOptionsResponse_ModuleOptionsEntry;
    toAmino(message: AppOptionsResponse_ModuleOptionsEntry): AppOptionsResponse_ModuleOptionsEntryAmino;
    fromAminoMsg(object: AppOptionsResponse_ModuleOptionsEntryAminoMsg): AppOptionsResponse_ModuleOptionsEntry;
    fromProtoMsg(message: AppOptionsResponse_ModuleOptionsEntryProtoMsg): AppOptionsResponse_ModuleOptionsEntry;
    toProto(message: AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
};
export declare const AppOptionsResponse: {
    typeUrl: string;
    encode(message: AppOptionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsResponse;
    fromPartial(object: Partial<AppOptionsResponse>): AppOptionsResponse;
    fromAmino(object: AppOptionsResponseAmino): AppOptionsResponse;
    toAmino(message: AppOptionsResponse): AppOptionsResponseAmino;
    fromAminoMsg(object: AppOptionsResponseAminoMsg): AppOptionsResponse;
    toAminoMsg(message: AppOptionsResponse): AppOptionsResponseAminoMsg;
    fromProtoMsg(message: AppOptionsResponseProtoMsg): AppOptionsResponse;
    toProto(message: AppOptionsResponse): Uint8Array;
    toProtoMsg(message: AppOptionsResponse): AppOptionsResponseProtoMsg;
};
