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
export declare const OperatorJoinedServices: {
    typeUrl: string;
    encode(message: OperatorJoinedServices, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OperatorJoinedServices;
    fromPartial(object: Partial<OperatorJoinedServices>): OperatorJoinedServices;
    fromAmino(object: OperatorJoinedServicesAmino): OperatorJoinedServices;
    toAmino(message: OperatorJoinedServices): OperatorJoinedServicesAmino;
    fromAminoMsg(object: OperatorJoinedServicesAminoMsg): OperatorJoinedServices;
    fromProtoMsg(message: OperatorJoinedServicesProtoMsg): OperatorJoinedServices;
    toProto(message: OperatorJoinedServices): Uint8Array;
    toProtoMsg(message: OperatorJoinedServices): OperatorJoinedServicesProtoMsg;
};
export declare const ServiceAllowedOperators: {
    typeUrl: string;
    encode(message: ServiceAllowedOperators, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceAllowedOperators;
    fromPartial(object: Partial<ServiceAllowedOperators>): ServiceAllowedOperators;
    fromAmino(object: ServiceAllowedOperatorsAmino): ServiceAllowedOperators;
    toAmino(message: ServiceAllowedOperators): ServiceAllowedOperatorsAmino;
    fromAminoMsg(object: ServiceAllowedOperatorsAminoMsg): ServiceAllowedOperators;
    fromProtoMsg(message: ServiceAllowedOperatorsProtoMsg): ServiceAllowedOperators;
    toProto(message: ServiceAllowedOperators): Uint8Array;
    toProtoMsg(message: ServiceAllowedOperators): ServiceAllowedOperatorsProtoMsg;
};
export declare const ServiceSecuringPools: {
    typeUrl: string;
    encode(message: ServiceSecuringPools, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceSecuringPools;
    fromPartial(object: Partial<ServiceSecuringPools>): ServiceSecuringPools;
    fromAmino(object: ServiceSecuringPoolsAmino): ServiceSecuringPools;
    toAmino(message: ServiceSecuringPools): ServiceSecuringPoolsAmino;
    fromAminoMsg(object: ServiceSecuringPoolsAminoMsg): ServiceSecuringPools;
    fromProtoMsg(message: ServiceSecuringPoolsProtoMsg): ServiceSecuringPools;
    toProto(message: ServiceSecuringPools): Uint8Array;
    toProtoMsg(message: ServiceSecuringPools): ServiceSecuringPoolsProtoMsg;
};
export declare const UserPreferencesEntry: {
    typeUrl: string;
    encode(message: UserPreferencesEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPreferencesEntry;
    fromPartial(object: Partial<UserPreferencesEntry>): UserPreferencesEntry;
    fromAmino(object: UserPreferencesEntryAmino): UserPreferencesEntry;
    toAmino(message: UserPreferencesEntry): UserPreferencesEntryAmino;
    fromAminoMsg(object: UserPreferencesEntryAminoMsg): UserPreferencesEntry;
    fromProtoMsg(message: UserPreferencesEntryProtoMsg): UserPreferencesEntry;
    toProto(message: UserPreferencesEntry): Uint8Array;
    toProtoMsg(message: UserPreferencesEntry): UserPreferencesEntryProtoMsg;
};
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
