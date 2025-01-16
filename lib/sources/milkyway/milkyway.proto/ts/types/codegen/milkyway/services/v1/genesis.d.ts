import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Service, ServiceAmino, ServiceSDKType, ServiceParams, ServiceParamsAmino, ServiceParamsSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the services module's genesis state. */
export interface GenesisState {
    /** Params defines the parameters of the module. */
    params: Params;
    /** Services defines the list of services. */
    services: Service[];
    /**
     * NextServiceID defines the ID that will be assigned to the
     * next service that gets created.
     */
    nextServiceId: number;
    /** ServicesParams defines the list of service parameters. */
    servicesParams: ServiceParamsRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/milkyway.services.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the services module's genesis state. */
export interface GenesisStateAmino {
    /** Params defines the parameters of the module. */
    params?: ParamsAmino;
    /** Services defines the list of services. */
    services?: ServiceAmino[];
    /**
     * NextServiceID defines the ID that will be assigned to the
     * next service that gets created.
     */
    next_service_id?: number;
    /** ServicesParams defines the list of service parameters. */
    services_params?: ServiceParamsRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/milkyway.services.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the services module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    services: ServiceSDKType[];
    next_service_id: number;
    services_params: ServiceParamsRecordSDKType[];
}
/**
 * ServiceParamsRecord represents the parameters that have been set for
 * a specific service.
 */
export interface ServiceParamsRecord {
    /**
     * ServiceID represents the ID of the service to which the parameters
     * should be set.
     */
    serviceId: number;
    /**
     * Params represents the parameters that should be set to the
     * service.
     */
    params: ServiceParams;
}
export interface ServiceParamsRecordProtoMsg {
    typeUrl: "/milkyway.services.v1.ServiceParamsRecord";
    value: Uint8Array;
}
/**
 * ServiceParamsRecord represents the parameters that have been set for
 * a specific service.
 */
export interface ServiceParamsRecordAmino {
    /**
     * ServiceID represents the ID of the service to which the parameters
     * should be set.
     */
    service_id?: number;
    /**
     * Params represents the parameters that should be set to the
     * service.
     */
    params?: ServiceParamsAmino;
}
export interface ServiceParamsRecordAminoMsg {
    type: "/milkyway.services.v1.ServiceParamsRecord";
    value: ServiceParamsRecordAmino;
}
/**
 * ServiceParamsRecord represents the parameters that have been set for
 * a specific service.
 */
export interface ServiceParamsRecordSDKType {
    service_id: number;
    params: ServiceParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const ServiceParamsRecord: {
    typeUrl: string;
    encode(message: ServiceParamsRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceParamsRecord;
    fromPartial(object: Partial<ServiceParamsRecord>): ServiceParamsRecord;
    fromAmino(object: ServiceParamsRecordAmino): ServiceParamsRecord;
    toAmino(message: ServiceParamsRecord): ServiceParamsRecordAmino;
    fromAminoMsg(object: ServiceParamsRecordAminoMsg): ServiceParamsRecord;
    fromProtoMsg(message: ServiceParamsRecordProtoMsg): ServiceParamsRecord;
    toProto(message: ServiceParamsRecord): Uint8Array;
    toProtoMsg(message: ServiceParamsRecord): ServiceParamsRecordProtoMsg;
};
