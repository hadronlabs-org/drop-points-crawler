import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** DelegationType defines the type of delegation. */
export declare enum DelegationType {
    DELEGATION_TYPE_UNSPECIFIED = 0,
    DELEGATION_TYPE_POOL = 1,
    DELEGATION_TYPE_OPERATOR = 2,
    DELEGATION_TYPE_SERVICE = 3,
    UNRECOGNIZED = -1
}
export declare const DelegationTypeSDKType: typeof DelegationType;
export declare const DelegationTypeAmino: typeof DelegationType;
export declare function delegationTypeFromJSON(object: any): DelegationType;
export declare function delegationTypeToJSON(object: DelegationType): string;
/**
 * Delegation represents the bond with tokens held by an account with a
 * given target.
 */
export interface Delegation {
    /** Type is the type of delegation. */
    type: DelegationType;
    /** UserAddress is the encoded address of the user. */
    userAddress: string;
    /**
     * TargetID is the id of the target to which the delegation is associated
     * (pool, operator, service).
     */
    targetId: number;
    /** Shares define the delegation shares received. */
    shares: DecCoin[];
}
export interface DelegationProtoMsg {
    typeUrl: "/milkyway.restaking.v1.Delegation";
    value: Uint8Array;
}
/**
 * Delegation represents the bond with tokens held by an account with a
 * given target.
 */
export interface DelegationAmino {
    /** Type is the type of delegation. */
    type?: DelegationType;
    /** UserAddress is the encoded address of the user. */
    user_address?: string;
    /**
     * TargetID is the id of the target to which the delegation is associated
     * (pool, operator, service).
     */
    target_id?: number;
    /** Shares define the delegation shares received. */
    shares?: DecCoinAmino[];
}
export interface DelegationAminoMsg {
    type: "/milkyway.restaking.v1.Delegation";
    value: DelegationAmino;
}
/**
 * Delegation represents the bond with tokens held by an account with a
 * given target.
 */
export interface DelegationSDKType {
    type: DelegationType;
    user_address: string;
    target_id: number;
    shares: DecCoinSDKType[];
}
/**
 * DelegationResponse is equivalent to Delegation except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface DelegationResponse {
    delegation: Delegation;
    balance: Coin[];
}
export interface DelegationResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.DelegationResponse";
    value: Uint8Array;
}
/**
 * DelegationResponse is equivalent to Delegation except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface DelegationResponseAmino {
    delegation: DelegationAmino;
    balance?: CoinAmino[];
}
export interface DelegationResponseAminoMsg {
    type: "/milkyway.restaking.v1.DelegationResponse";
    value: DelegationResponseAmino;
}
/**
 * DelegationResponse is equivalent to Delegation except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface DelegationResponseSDKType {
    delegation: DelegationSDKType;
    balance: CoinSDKType[];
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single target in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** Type is the type of the unbonding delegation. */
    type: DelegationType;
    /** DelegatorAddress is the encoded address of the delegator. */
    delegatorAddress: string;
    /**
     * TargetID is the ID of the target from which the tokens will be undelegated
     * (pool, service, operator)
     */
    targetId: number;
    /** Entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
export interface UnbondingDelegationProtoMsg {
    typeUrl: "/milkyway.restaking.v1.UnbondingDelegation";
    value: Uint8Array;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single target in an time-ordered list.
 */
export interface UnbondingDelegationAmino {
    /** Type is the type of the unbonding delegation. */
    type?: DelegationType;
    /** DelegatorAddress is the encoded address of the delegator. */
    delegator_address?: string;
    /**
     * TargetID is the ID of the target from which the tokens will be undelegated
     * (pool, service, operator)
     */
    target_id?: number;
    /** Entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntryAmino[];
}
export interface UnbondingDelegationAminoMsg {
    type: "/milkyway.restaking.v1.UnbondingDelegation";
    value: UnbondingDelegationAmino;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single target in an time-ordered list.
 */
export interface UnbondingDelegationSDKType {
    type: DelegationType;
    delegator_address: string;
    target_id: number;
    entries: UnbondingDelegationEntrySDKType[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** CreationHeight is the height which the unbonding took place. */
    creationHeight: bigint;
    /** CompletionTime is the unix time for unbonding completion. */
    completionTime: Date;
    /**
     * InitialBalance defines the tokens initially scheduled to receive at
     * completion.
     */
    initialBalance: Coin[];
    /** Balance defines the tokens to receive at completion. */
    balance: Coin[];
    /** Incrementing id that uniquely identifies this entry */
    unbondingId: bigint;
}
export interface UnbondingDelegationEntryProtoMsg {
    typeUrl: "/milkyway.restaking.v1.UnbondingDelegationEntry";
    value: Uint8Array;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntryAmino {
    /** CreationHeight is the height which the unbonding took place. */
    creation_height?: string;
    /** CompletionTime is the unix time for unbonding completion. */
    completion_time: string;
    /**
     * InitialBalance defines the tokens initially scheduled to receive at
     * completion.
     */
    initial_balance?: CoinAmino[];
    /** Balance defines the tokens to receive at completion. */
    balance?: CoinAmino[];
    /** Incrementing id that uniquely identifies this entry */
    unbonding_id?: string;
}
export interface UnbondingDelegationEntryAminoMsg {
    type: "/milkyway.restaking.v1.UnbondingDelegationEntry";
    value: UnbondingDelegationEntryAmino;
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntrySDKType {
    creation_height: bigint;
    completion_time: Date;
    initial_balance: CoinSDKType[];
    balance: CoinSDKType[];
    unbonding_id: bigint;
}
/**
 * DTData is a struct that contains the basic information about an unbonding
 * delegation. It is intended to be used as a marshalable pointer. For example,
 * a DTData can be used to construct the key to getting an UnbondingDelegation
 * from state.
 */
export interface DTData {
    unbondingDelegationType: DelegationType;
    delegatorAddress: string;
    targetId: number;
}
export interface DTDataProtoMsg {
    typeUrl: "/milkyway.restaking.v1.DTData";
    value: Uint8Array;
}
/**
 * DTData is a struct that contains the basic information about an unbonding
 * delegation. It is intended to be used as a marshalable pointer. For example,
 * a DTData can be used to construct the key to getting an UnbondingDelegation
 * from state.
 */
export interface DTDataAmino {
    unbonding_delegation_type?: DelegationType;
    delegator_address?: string;
    target_id?: number;
}
export interface DTDataAminoMsg {
    type: "/milkyway.restaking.v1.DTData";
    value: DTDataAmino;
}
/**
 * DTData is a struct that contains the basic information about an unbonding
 * delegation. It is intended to be used as a marshalable pointer. For example,
 * a DTData can be used to construct the key to getting an UnbondingDelegation
 * from state.
 */
export interface DTDataSDKType {
    unbonding_delegation_type: DelegationType;
    delegator_address: string;
    target_id: number;
}
/** DTDataList defines an array of DTData objects. */
export interface DTDataList {
    data: DTData[];
}
export interface DTDataListProtoMsg {
    typeUrl: "/milkyway.restaking.v1.DTDataList";
    value: Uint8Array;
}
/** DTDataList defines an array of DTData objects. */
export interface DTDataListAmino {
    data: DTDataAmino[];
}
export interface DTDataListAminoMsg {
    type: "/milkyway.restaking.v1.DTDataList";
    value: DTDataListAmino;
}
/** DTDataList defines an array of DTData objects. */
export interface DTDataListSDKType {
    data: DTDataSDKType[];
}
/**
 * UserPreferences is a struct that contains a user's preferences for
 * restaking.
 */
export interface UserPreferences {
    /**
     * TrustNonAccreditedServices tells whether the user trusts all non-accredited
     * services present on the platform.
     */
    trustNonAccreditedServices: boolean;
    /**
     * TrustAccreditedServices tells whether the user trusts all accredited
     * services present on the platform.
     */
    trustAccreditedServices: boolean;
    /**
     * TrustedServicesIDs is a list of service IDs that the user trusts (both
     * accredited and non-accredited).
     */
    trustedServicesIds: number[];
}
export interface UserPreferencesProtoMsg {
    typeUrl: "/milkyway.restaking.v1.UserPreferences";
    value: Uint8Array;
}
/**
 * UserPreferences is a struct that contains a user's preferences for
 * restaking.
 */
export interface UserPreferencesAmino {
    /**
     * TrustNonAccreditedServices tells whether the user trusts all non-accredited
     * services present on the platform.
     */
    trust_non_accredited_services?: boolean;
    /**
     * TrustAccreditedServices tells whether the user trusts all accredited
     * services present on the platform.
     */
    trust_accredited_services?: boolean;
    /**
     * TrustedServicesIDs is a list of service IDs that the user trusts (both
     * accredited and non-accredited).
     */
    trusted_services_ids?: number[];
}
export interface UserPreferencesAminoMsg {
    type: "/milkyway.restaking.v1.UserPreferences";
    value: UserPreferencesAmino;
}
/**
 * UserPreferences is a struct that contains a user's preferences for
 * restaking.
 */
export interface UserPreferencesSDKType {
    trust_non_accredited_services: boolean;
    trust_accredited_services: boolean;
    trusted_services_ids: number[];
}
export declare const Delegation: {
    typeUrl: string;
    encode(message: Delegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegation;
    fromPartial(object: Partial<Delegation>): Delegation;
    fromAmino(object: DelegationAmino): Delegation;
    toAmino(message: Delegation): DelegationAmino;
    fromAminoMsg(object: DelegationAminoMsg): Delegation;
    fromProtoMsg(message: DelegationProtoMsg): Delegation;
    toProto(message: Delegation): Uint8Array;
    toProtoMsg(message: Delegation): DelegationProtoMsg;
};
export declare const DelegationResponse: {
    typeUrl: string;
    encode(message: DelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse;
    fromPartial(object: Partial<DelegationResponse>): DelegationResponse;
    fromAmino(object: DelegationResponseAmino): DelegationResponse;
    toAmino(message: DelegationResponse): DelegationResponseAmino;
    fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse;
    fromProtoMsg(message: DelegationResponseProtoMsg): DelegationResponse;
    toProto(message: DelegationResponse): Uint8Array;
    toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg;
};
export declare const UnbondingDelegation: {
    typeUrl: string;
    encode(message: UnbondingDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation;
    fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation;
    fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation;
    toAmino(message: UnbondingDelegation): UnbondingDelegationAmino;
    fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation;
    fromProtoMsg(message: UnbondingDelegationProtoMsg): UnbondingDelegation;
    toProto(message: UnbondingDelegation): Uint8Array;
    toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg;
};
export declare const UnbondingDelegationEntry: {
    typeUrl: string;
    encode(message: UnbondingDelegationEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry;
    fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry;
    fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry;
    toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino;
    fromAminoMsg(object: UnbondingDelegationEntryAminoMsg): UnbondingDelegationEntry;
    fromProtoMsg(message: UnbondingDelegationEntryProtoMsg): UnbondingDelegationEntry;
    toProto(message: UnbondingDelegationEntry): Uint8Array;
    toProtoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryProtoMsg;
};
export declare const DTData: {
    typeUrl: string;
    encode(message: DTData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DTData;
    fromPartial(object: Partial<DTData>): DTData;
    fromAmino(object: DTDataAmino): DTData;
    toAmino(message: DTData): DTDataAmino;
    fromAminoMsg(object: DTDataAminoMsg): DTData;
    fromProtoMsg(message: DTDataProtoMsg): DTData;
    toProto(message: DTData): Uint8Array;
    toProtoMsg(message: DTData): DTDataProtoMsg;
};
export declare const DTDataList: {
    typeUrl: string;
    encode(message: DTDataList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DTDataList;
    fromPartial(object: Partial<DTDataList>): DTDataList;
    fromAmino(object: DTDataListAmino): DTDataList;
    toAmino(message: DTDataList): DTDataListAmino;
    fromAminoMsg(object: DTDataListAminoMsg): DTDataList;
    fromProtoMsg(message: DTDataListProtoMsg): DTDataList;
    toProto(message: DTDataList): Uint8Array;
    toProtoMsg(message: DTDataList): DTDataListProtoMsg;
};
export declare const UserPreferences: {
    typeUrl: string;
    encode(message: UserPreferences, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserPreferences;
    fromPartial(object: Partial<UserPreferences>): UserPreferences;
    fromAmino(object: UserPreferencesAmino): UserPreferences;
    toAmino(message: UserPreferences): UserPreferencesAmino;
    fromAminoMsg(object: UserPreferencesAminoMsg): UserPreferences;
    fromProtoMsg(message: UserPreferencesProtoMsg): UserPreferences;
    toProto(message: UserPreferences): Uint8Array;
    toProtoMsg(message: UserPreferences): UserPreferencesProtoMsg;
};
