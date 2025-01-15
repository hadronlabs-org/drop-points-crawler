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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    services: [],
    nextServiceId: 0,
    servicesParams: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.services.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextServiceId !== 0) {
      writer.uint32(24).uint32(message.nextServiceId);
    }
    for (const v of message.servicesParams) {
      ServiceParamsRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextServiceId = reader.uint32();
          break;
        case 4:
          message.servicesParams.push(ServiceParamsRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.nextServiceId = object.nextServiceId ?? 0;
    message.servicesParams = object.servicesParams?.map(e => ServiceParamsRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    if (object.next_service_id !== undefined && object.next_service_id !== null) {
      message.nextServiceId = object.next_service_id;
    }
    message.servicesParams = object.services_params?.map(e => ServiceParamsRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    obj.next_service_id = message.nextServiceId === 0 ? undefined : message.nextServiceId;
    if (message.servicesParams) {
      obj.services_params = message.servicesParams.map(e => e ? ServiceParamsRecord.toAmino(e) : undefined);
    } else {
      obj.services_params = message.servicesParams;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseServiceParamsRecord(): ServiceParamsRecord {
  return {
    serviceId: 0,
    params: ServiceParams.fromPartial({})
  };
}
export const ServiceParamsRecord = {
  typeUrl: "/milkyway.services.v1.ServiceParamsRecord",
  encode(message: ServiceParamsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    if (message.params !== undefined) {
      ServiceParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceParamsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceParamsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.params = ServiceParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceParamsRecord>): ServiceParamsRecord {
    const message = createBaseServiceParamsRecord();
    message.serviceId = object.serviceId ?? 0;
    message.params = object.params !== undefined && object.params !== null ? ServiceParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ServiceParamsRecordAmino): ServiceParamsRecord {
    const message = createBaseServiceParamsRecord();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ServiceParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ServiceParamsRecord): ServiceParamsRecordAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.params = message.params ? ServiceParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceParamsRecordAminoMsg): ServiceParamsRecord {
    return ServiceParamsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceParamsRecordProtoMsg): ServiceParamsRecord {
    return ServiceParamsRecord.decode(message.value);
  },
  toProto(message: ServiceParamsRecord): Uint8Array {
    return ServiceParamsRecord.encode(message).finish();
  },
  toProtoMsg(message: ServiceParamsRecord): ServiceParamsRecordProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.ServiceParamsRecord",
      value: ServiceParamsRecord.encode(message).finish()
    };
  }
};