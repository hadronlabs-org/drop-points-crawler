import { UserPreferences, UserPreferencesAmino, UserPreferencesSDKType, Delegation, DelegationAmino, DelegationSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * OperatorJoinedServicesRecord represents the services joined by a
 * individual operator.
 */
export interface OperatorJoinedServices {
  /** OperatorID is the ID of the operator. */
  operatorId: number;
  /** ServiceIDs represents the list of services joined by the operator. */
  serviceIds: number[];
}
export interface OperatorJoinedServicesProtoMsg {
  typeUrl: "/milkyway.restaking.v1.OperatorJoinedServices";
  value: Uint8Array;
}
/**
 * OperatorJoinedServicesRecord represents the services joined by a
 * individual operator.
 */
export interface OperatorJoinedServicesAmino {
  /** OperatorID is the ID of the operator. */
  operator_id?: number;
  /** ServiceIDs represents the list of services joined by the operator. */
  service_ids?: number[];
}
export interface OperatorJoinedServicesAminoMsg {
  type: "/milkyway.restaking.v1.OperatorJoinedServices";
  value: OperatorJoinedServicesAmino;
}
/**
 * OperatorJoinedServicesRecord represents the services joined by a
 * individual operator.
 */
export interface OperatorJoinedServicesSDKType {
  operator_id: number;
  service_ids: number[];
}
/**
 * ServiceAllowedOperators represents the operators allowed to secure a
 * a service.
 */
export interface ServiceAllowedOperators {
  /** ServiceID is the ID of the service. */
  serviceId: number;
  /** OperatorIDs defines the allowed operator IDs. */
  operatorIds: number[];
}
export interface ServiceAllowedOperatorsProtoMsg {
  typeUrl: "/milkyway.restaking.v1.ServiceAllowedOperators";
  value: Uint8Array;
}
/**
 * ServiceAllowedOperators represents the operators allowed to secure a
 * a service.
 */
export interface ServiceAllowedOperatorsAmino {
  /** ServiceID is the ID of the service. */
  service_id?: number;
  /** OperatorIDs defines the allowed operator IDs. */
  operator_ids?: number[];
}
export interface ServiceAllowedOperatorsAminoMsg {
  type: "/milkyway.restaking.v1.ServiceAllowedOperators";
  value: ServiceAllowedOperatorsAmino;
}
/**
 * ServiceAllowedOperators represents the operators allowed to secure a
 * a service.
 */
export interface ServiceAllowedOperatorsSDKType {
  service_id: number;
  operator_ids: number[];
}
/**
 * ServiceSecuringPools represents the list pools from which a service can
 * borrow security
 */
export interface ServiceSecuringPools {
  /** ServiceID is the ID of the service. */
  serviceId: number;
  /**
   * PoolIDs defines the IDs of the pools from which the service can borrow
   * security.
   */
  poolIds: number[];
}
export interface ServiceSecuringPoolsProtoMsg {
  typeUrl: "/milkyway.restaking.v1.ServiceSecuringPools";
  value: Uint8Array;
}
/**
 * ServiceSecuringPools represents the list pools from which a service can
 * borrow security
 */
export interface ServiceSecuringPoolsAmino {
  /** ServiceID is the ID of the service. */
  service_id?: number;
  /**
   * PoolIDs defines the IDs of the pools from which the service can borrow
   * security.
   */
  pool_ids?: number[];
}
export interface ServiceSecuringPoolsAminoMsg {
  type: "/milkyway.restaking.v1.ServiceSecuringPools";
  value: ServiceSecuringPoolsAmino;
}
/**
 * ServiceSecuringPools represents the list pools from which a service can
 * borrow security
 */
export interface ServiceSecuringPoolsSDKType {
  service_id: number;
  pool_ids: number[];
}
/** UserPreferencesEntry represents the user preferences. */
export interface UserPreferencesEntry {
  /** UserAddress is the encoded address of the user. */
  userAddress: string;
  /** Preferences is the user preferences. */
  preferences: UserPreferences;
}
export interface UserPreferencesEntryProtoMsg {
  typeUrl: "/milkyway.restaking.v1.UserPreferencesEntry";
  value: Uint8Array;
}
/** UserPreferencesEntry represents the user preferences. */
export interface UserPreferencesEntryAmino {
  /** UserAddress is the encoded address of the user. */
  user_address?: string;
  /** Preferences is the user preferences. */
  preferences?: UserPreferencesAmino;
}
export interface UserPreferencesEntryAminoMsg {
  type: "/milkyway.restaking.v1.UserPreferencesEntry";
  value: UserPreferencesEntryAmino;
}
/** UserPreferencesEntry represents the user preferences. */
export interface UserPreferencesEntrySDKType {
  user_address: string;
  preferences: UserPreferencesSDKType;
}
/** GenesisState defines the restaking module's genesis state. */
export interface GenesisState {
  /** Params defines the parameters of the module. */
  params: Params;
  /**
   * OperatorsJoinedServices defines the list of the services that each operator
   * has joined.
   */
  operatorsJoinedServices: OperatorJoinedServices[];
  /**
   * ServiceAllowedOperators defines the operators allowed to secure each
   * service.
   */
  servicesAllowedOperators: ServiceAllowedOperators[];
  /** ServicesSecuringPools defines the whitelisted pools for each service. */
  servicesSecuringPools: ServiceSecuringPools[];
  /** Delegations represents the delegations. */
  delegations: Delegation[];
  /** UnbondingDelegations represents the unbonding delegations. */
  unbondingDelegations: UnbondingDelegation[];
  /** UserPreferences represents the user preferences. */
  usersPreferences: UserPreferencesEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/milkyway.restaking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the restaking module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines the parameters of the module. */
  params?: ParamsAmino;
  /**
   * OperatorsJoinedServices defines the list of the services that each operator
   * has joined.
   */
  operators_joined_services?: OperatorJoinedServicesAmino[];
  /**
   * ServiceAllowedOperators defines the operators allowed to secure each
   * service.
   */
  services_allowed_operators?: ServiceAllowedOperatorsAmino[];
  /** ServicesSecuringPools defines the whitelisted pools for each service. */
  services_securing_pools?: ServiceSecuringPoolsAmino[];
  /** Delegations represents the delegations. */
  delegations?: DelegationAmino[];
  /** UnbondingDelegations represents the unbonding delegations. */
  unbonding_delegations?: UnbondingDelegationAmino[];
  /** UserPreferences represents the user preferences. */
  users_preferences?: UserPreferencesEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/milkyway.restaking.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the restaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  operators_joined_services: OperatorJoinedServicesSDKType[];
  services_allowed_operators: ServiceAllowedOperatorsSDKType[];
  services_securing_pools: ServiceSecuringPoolsSDKType[];
  delegations: DelegationSDKType[];
  unbonding_delegations: UnbondingDelegationSDKType[];
  users_preferences: UserPreferencesEntrySDKType[];
}
function createBaseOperatorJoinedServices(): OperatorJoinedServices {
  return {
    operatorId: 0,
    serviceIds: []
  };
}
export const OperatorJoinedServices = {
  typeUrl: "/milkyway.restaking.v1.OperatorJoinedServices",
  encode(message: OperatorJoinedServices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    writer.uint32(18).fork();
    for (const v of message.serviceIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorJoinedServices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorJoinedServices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceIds.push(reader.uint32());
            }
          } else {
            message.serviceIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorJoinedServices>): OperatorJoinedServices {
    const message = createBaseOperatorJoinedServices();
    message.operatorId = object.operatorId ?? 0;
    message.serviceIds = object.serviceIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: OperatorJoinedServicesAmino): OperatorJoinedServices {
    const message = createBaseOperatorJoinedServices();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    message.serviceIds = object.service_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: OperatorJoinedServices): OperatorJoinedServicesAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    if (message.serviceIds) {
      obj.service_ids = message.serviceIds.map(e => e);
    } else {
      obj.service_ids = message.serviceIds;
    }
    return obj;
  },
  fromAminoMsg(object: OperatorJoinedServicesAminoMsg): OperatorJoinedServices {
    return OperatorJoinedServices.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorJoinedServicesProtoMsg): OperatorJoinedServices {
    return OperatorJoinedServices.decode(message.value);
  },
  toProto(message: OperatorJoinedServices): Uint8Array {
    return OperatorJoinedServices.encode(message).finish();
  },
  toProtoMsg(message: OperatorJoinedServices): OperatorJoinedServicesProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.OperatorJoinedServices",
      value: OperatorJoinedServices.encode(message).finish()
    };
  }
};
function createBaseServiceAllowedOperators(): ServiceAllowedOperators {
  return {
    serviceId: 0,
    operatorIds: []
  };
}
export const ServiceAllowedOperators = {
  typeUrl: "/milkyway.restaking.v1.ServiceAllowedOperators",
  encode(message: ServiceAllowedOperators, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    writer.uint32(18).fork();
    for (const v of message.operatorIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceAllowedOperators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceAllowedOperators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operatorIds.push(reader.uint32());
            }
          } else {
            message.operatorIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceAllowedOperators>): ServiceAllowedOperators {
    const message = createBaseServiceAllowedOperators();
    message.serviceId = object.serviceId ?? 0;
    message.operatorIds = object.operatorIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceAllowedOperatorsAmino): ServiceAllowedOperators {
    const message = createBaseServiceAllowedOperators();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.operatorIds = object.operator_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceAllowedOperators): ServiceAllowedOperatorsAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.operatorIds) {
      obj.operator_ids = message.operatorIds.map(e => e);
    } else {
      obj.operator_ids = message.operatorIds;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceAllowedOperatorsAminoMsg): ServiceAllowedOperators {
    return ServiceAllowedOperators.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceAllowedOperatorsProtoMsg): ServiceAllowedOperators {
    return ServiceAllowedOperators.decode(message.value);
  },
  toProto(message: ServiceAllowedOperators): Uint8Array {
    return ServiceAllowedOperators.encode(message).finish();
  },
  toProtoMsg(message: ServiceAllowedOperators): ServiceAllowedOperatorsProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.ServiceAllowedOperators",
      value: ServiceAllowedOperators.encode(message).finish()
    };
  }
};
function createBaseServiceSecuringPools(): ServiceSecuringPools {
  return {
    serviceId: 0,
    poolIds: []
  };
}
export const ServiceSecuringPools = {
  typeUrl: "/milkyway.restaking.v1.ServiceSecuringPools",
  encode(message: ServiceSecuringPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceSecuringPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceSecuringPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint32());
            }
          } else {
            message.poolIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceSecuringPools>): ServiceSecuringPools {
    const message = createBaseServiceSecuringPools();
    message.serviceId = object.serviceId ?? 0;
    message.poolIds = object.poolIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceSecuringPoolsAmino): ServiceSecuringPools {
    const message = createBaseServiceSecuringPools();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.poolIds = object.pool_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceSecuringPools): ServiceSecuringPoolsAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = message.poolIds;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceSecuringPoolsAminoMsg): ServiceSecuringPools {
    return ServiceSecuringPools.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceSecuringPoolsProtoMsg): ServiceSecuringPools {
    return ServiceSecuringPools.decode(message.value);
  },
  toProto(message: ServiceSecuringPools): Uint8Array {
    return ServiceSecuringPools.encode(message).finish();
  },
  toProtoMsg(message: ServiceSecuringPools): ServiceSecuringPoolsProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.ServiceSecuringPools",
      value: ServiceSecuringPools.encode(message).finish()
    };
  }
};
function createBaseUserPreferencesEntry(): UserPreferencesEntry {
  return {
    userAddress: "",
    preferences: UserPreferences.fromPartial({})
  };
}
export const UserPreferencesEntry = {
  typeUrl: "/milkyway.restaking.v1.UserPreferencesEntry",
  encode(message: UserPreferencesEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.preferences !== undefined) {
      UserPreferences.encode(message.preferences, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPreferencesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPreferencesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.preferences = UserPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserPreferencesEntry>): UserPreferencesEntry {
    const message = createBaseUserPreferencesEntry();
    message.userAddress = object.userAddress ?? "";
    message.preferences = object.preferences !== undefined && object.preferences !== null ? UserPreferences.fromPartial(object.preferences) : undefined;
    return message;
  },
  fromAmino(object: UserPreferencesEntryAmino): UserPreferencesEntry {
    const message = createBaseUserPreferencesEntry();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.preferences !== undefined && object.preferences !== null) {
      message.preferences = UserPreferences.fromAmino(object.preferences);
    }
    return message;
  },
  toAmino(message: UserPreferencesEntry): UserPreferencesEntryAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    obj.preferences = message.preferences ? UserPreferences.toAmino(message.preferences) : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPreferencesEntryAminoMsg): UserPreferencesEntry {
    return UserPreferencesEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPreferencesEntryProtoMsg): UserPreferencesEntry {
    return UserPreferencesEntry.decode(message.value);
  },
  toProto(message: UserPreferencesEntry): Uint8Array {
    return UserPreferencesEntry.encode(message).finish();
  },
  toProtoMsg(message: UserPreferencesEntry): UserPreferencesEntryProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.UserPreferencesEntry",
      value: UserPreferencesEntry.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    operatorsJoinedServices: [],
    servicesAllowedOperators: [],
    servicesSecuringPools: [],
    delegations: [],
    unbondingDelegations: [],
    usersPreferences: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.restaking.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.operatorsJoinedServices) {
      OperatorJoinedServices.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.servicesAllowedOperators) {
      ServiceAllowedOperators.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.servicesSecuringPools) {
      ServiceSecuringPools.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.usersPreferences) {
      UserPreferencesEntry.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.operatorsJoinedServices.push(OperatorJoinedServices.decode(reader, reader.uint32()));
          break;
        case 3:
          message.servicesAllowedOperators.push(ServiceAllowedOperators.decode(reader, reader.uint32()));
          break;
        case 4:
          message.servicesSecuringPools.push(ServiceSecuringPools.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.usersPreferences.push(UserPreferencesEntry.decode(reader, reader.uint32()));
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
    message.operatorsJoinedServices = object.operatorsJoinedServices?.map(e => OperatorJoinedServices.fromPartial(e)) || [];
    message.servicesAllowedOperators = object.servicesAllowedOperators?.map(e => ServiceAllowedOperators.fromPartial(e)) || [];
    message.servicesSecuringPools = object.servicesSecuringPools?.map(e => ServiceSecuringPools.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.usersPreferences = object.usersPreferences?.map(e => UserPreferencesEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.operatorsJoinedServices = object.operators_joined_services?.map(e => OperatorJoinedServices.fromAmino(e)) || [];
    message.servicesAllowedOperators = object.services_allowed_operators?.map(e => ServiceAllowedOperators.fromAmino(e)) || [];
    message.servicesSecuringPools = object.services_securing_pools?.map(e => ServiceSecuringPools.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    message.usersPreferences = object.users_preferences?.map(e => UserPreferencesEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.operatorsJoinedServices) {
      obj.operators_joined_services = message.operatorsJoinedServices.map(e => e ? OperatorJoinedServices.toAmino(e) : undefined);
    } else {
      obj.operators_joined_services = message.operatorsJoinedServices;
    }
    if (message.servicesAllowedOperators) {
      obj.services_allowed_operators = message.servicesAllowedOperators.map(e => e ? ServiceAllowedOperators.toAmino(e) : undefined);
    } else {
      obj.services_allowed_operators = message.servicesAllowedOperators;
    }
    if (message.servicesSecuringPools) {
      obj.services_securing_pools = message.servicesSecuringPools.map(e => e ? ServiceSecuringPools.toAmino(e) : undefined);
    } else {
      obj.services_securing_pools = message.servicesSecuringPools;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    if (message.usersPreferences) {
      obj.users_preferences = message.usersPreferences.map(e => e ? UserPreferencesEntry.toAmino(e) : undefined);
    } else {
      obj.users_preferences = message.usersPreferences;
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
      typeUrl: "/milkyway.restaking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};