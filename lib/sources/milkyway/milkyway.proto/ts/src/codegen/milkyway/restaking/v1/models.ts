import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** DelegationType defines the type of delegation. */
export enum DelegationType {
  DELEGATION_TYPE_UNSPECIFIED = 0,
  DELEGATION_TYPE_POOL = 1,
  DELEGATION_TYPE_OPERATOR = 2,
  DELEGATION_TYPE_SERVICE = 3,
  UNRECOGNIZED = -1,
}
export const DelegationTypeSDKType = DelegationType;
export const DelegationTypeAmino = DelegationType;
export function delegationTypeFromJSON(object: any): DelegationType {
  switch (object) {
    case 0:
    case "DELEGATION_TYPE_UNSPECIFIED":
      return DelegationType.DELEGATION_TYPE_UNSPECIFIED;
    case 1:
    case "DELEGATION_TYPE_POOL":
      return DelegationType.DELEGATION_TYPE_POOL;
    case 2:
    case "DELEGATION_TYPE_OPERATOR":
      return DelegationType.DELEGATION_TYPE_OPERATOR;
    case 3:
    case "DELEGATION_TYPE_SERVICE":
      return DelegationType.DELEGATION_TYPE_SERVICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DelegationType.UNRECOGNIZED;
  }
}
export function delegationTypeToJSON(object: DelegationType): string {
  switch (object) {
    case DelegationType.DELEGATION_TYPE_UNSPECIFIED:
      return "DELEGATION_TYPE_UNSPECIFIED";
    case DelegationType.DELEGATION_TYPE_POOL:
      return "DELEGATION_TYPE_POOL";
    case DelegationType.DELEGATION_TYPE_OPERATOR:
      return "DELEGATION_TYPE_OPERATOR";
    case DelegationType.DELEGATION_TYPE_SERVICE:
      return "DELEGATION_TYPE_SERVICE";
    case DelegationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseDelegation(): Delegation {
  return {
    type: 0,
    userAddress: "",
    targetId: 0,
    shares: []
  };
}
export const Delegation = {
  typeUrl: "/milkyway.restaking.v1.Delegation",
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.userAddress !== "") {
      writer.uint32(18).string(message.userAddress);
    }
    if (message.targetId !== 0) {
      writer.uint32(24).uint32(message.targetId);
    }
    for (const v of message.shares) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.userAddress = reader.string();
          break;
        case 3:
          message.targetId = reader.uint32();
          break;
        case 4:
          message.shares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.type = object.type ?? 0;
    message.userAddress = object.userAddress ?? "";
    message.targetId = object.targetId ?? 0;
    message.shares = object.shares?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationAmino): Delegation {
    const message = createBaseDelegation();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = object.target_id;
    }
    message.shares = object.shares?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    obj.target_id = message.targetId === 0 ? undefined : message.targetId;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.shares = message.shares;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
function createBaseDelegationResponse(): DelegationResponse {
  return {
    delegation: Delegation.fromPartial({}),
    balance: []
  };
}
export const DelegationResponse = {
  typeUrl: "/milkyway.restaking.v1.DelegationResponse",
  encode(message: DelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegationResponse>): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationResponseAmino): DelegationResponse {
    const message = createBaseDelegationResponse();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = Delegation.fromAmino(object.delegation);
    }
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationResponse): DelegationResponseAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? Delegation.toAmino(message.delegation) : Delegation.toAmino(Delegation.fromPartial({}));
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationResponseAminoMsg): DelegationResponse {
    return DelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationResponseProtoMsg): DelegationResponse {
    return DelegationResponse.decode(message.value);
  },
  toProto(message: DelegationResponse): Uint8Array {
    return DelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegationResponse): DelegationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.DelegationResponse",
      value: DelegationResponse.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegation(): UnbondingDelegation {
  return {
    type: 0,
    delegatorAddress: "",
    targetId: 0,
    entries: []
  };
}
export const UnbondingDelegation = {
  typeUrl: "/milkyway.restaking.v1.UnbondingDelegation",
  encode(message: UnbondingDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    if (message.targetId !== 0) {
      writer.uint32(24).uint32(message.targetId);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        case 3:
          message.targetId = reader.uint32();
          break;
        case 4:
          message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingDelegation>): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.type = object.type ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.targetId = object.targetId ?? 0;
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UnbondingDelegationAmino): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = object.target_id;
    }
    message.entries = object.entries?.map(e => UnbondingDelegationEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UnbondingDelegation): UnbondingDelegationAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.target_id = message.targetId === 0 ? undefined : message.targetId;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? UnbondingDelegationEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationAminoMsg): UnbondingDelegation {
    return UnbondingDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingDelegationProtoMsg): UnbondingDelegation {
    return UnbondingDelegation.decode(message.value);
  },
  toProto(message: UnbondingDelegation): Uint8Array {
    return UnbondingDelegation.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegation): UnbondingDelegationProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.UnbondingDelegation",
      value: UnbondingDelegation.encode(message).finish()
    };
  }
};
function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: new Date(),
    initialBalance: [],
    balance: [],
    unbondingId: BigInt(0)
  };
}
export const UnbondingDelegationEntry = {
  typeUrl: "/milkyway.restaking.v1.UnbondingDelegationEntry",
  encode(message: UnbondingDelegationEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialBalance) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(40).uint64(message.unbondingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.initialBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unbondingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UnbondingDelegationEntry>): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance?.map(e => Coin.fromPartial(e)) || [];
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UnbondingDelegationEntryAmino): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    if (object.creation_height !== undefined && object.creation_height !== null) {
      message.creationHeight = BigInt(object.creation_height);
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    message.initialBalance = object.initial_balance?.map(e => Coin.fromAmino(e)) || [];
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    return message;
  },
  toAmino(message: UnbondingDelegationEntry): UnbondingDelegationEntryAmino {
    const obj: any = {};
    obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight?.toString() : undefined;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : new Date();
    if (message.initialBalance) {
      obj.initial_balance = message.initialBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_balance = message.initialBalance;
    }
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    obj.unbonding_id = message.unbondingId !== BigInt(0) ? message.unbondingId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingDelegationEntryAminoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingDelegationEntryProtoMsg): UnbondingDelegationEntry {
    return UnbondingDelegationEntry.decode(message.value);
  },
  toProto(message: UnbondingDelegationEntry): Uint8Array {
    return UnbondingDelegationEntry.encode(message).finish();
  },
  toProtoMsg(message: UnbondingDelegationEntry): UnbondingDelegationEntryProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.UnbondingDelegationEntry",
      value: UnbondingDelegationEntry.encode(message).finish()
    };
  }
};
function createBaseDTData(): DTData {
  return {
    unbondingDelegationType: 0,
    delegatorAddress: "",
    targetId: 0
  };
}
export const DTData = {
  typeUrl: "/milkyway.restaking.v1.DTData",
  encode(message: DTData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingDelegationType !== 0) {
      writer.uint32(8).int32(message.unbondingDelegationType);
    }
    if (message.delegatorAddress !== "") {
      writer.uint32(18).string(message.delegatorAddress);
    }
    if (message.targetId !== 0) {
      writer.uint32(24).uint32(message.targetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DTData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDTData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingDelegationType = reader.int32() as any;
          break;
        case 2:
          message.delegatorAddress = reader.string();
          break;
        case 3:
          message.targetId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DTData>): DTData {
    const message = createBaseDTData();
    message.unbondingDelegationType = object.unbondingDelegationType ?? 0;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.targetId = object.targetId ?? 0;
    return message;
  },
  fromAmino(object: DTDataAmino): DTData {
    const message = createBaseDTData();
    if (object.unbonding_delegation_type !== undefined && object.unbonding_delegation_type !== null) {
      message.unbondingDelegationType = object.unbonding_delegation_type;
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.target_id !== undefined && object.target_id !== null) {
      message.targetId = object.target_id;
    }
    return message;
  },
  toAmino(message: DTData): DTDataAmino {
    const obj: any = {};
    obj.unbonding_delegation_type = message.unbondingDelegationType === 0 ? undefined : message.unbondingDelegationType;
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.target_id = message.targetId === 0 ? undefined : message.targetId;
    return obj;
  },
  fromAminoMsg(object: DTDataAminoMsg): DTData {
    return DTData.fromAmino(object.value);
  },
  fromProtoMsg(message: DTDataProtoMsg): DTData {
    return DTData.decode(message.value);
  },
  toProto(message: DTData): Uint8Array {
    return DTData.encode(message).finish();
  },
  toProtoMsg(message: DTData): DTDataProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.DTData",
      value: DTData.encode(message).finish()
    };
  }
};
function createBaseDTDataList(): DTDataList {
  return {
    data: []
  };
}
export const DTDataList = {
  typeUrl: "/milkyway.restaking.v1.DTDataList",
  encode(message: DTDataList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      DTData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DTDataList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDTDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(DTData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DTDataList>): DTDataList {
    const message = createBaseDTDataList();
    message.data = object.data?.map(e => DTData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DTDataListAmino): DTDataList {
    const message = createBaseDTDataList();
    message.data = object.data?.map(e => DTData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DTDataList): DTDataListAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? DTData.toAmino(e) : undefined);
    } else {
      obj.data = message.data;
    }
    return obj;
  },
  fromAminoMsg(object: DTDataListAminoMsg): DTDataList {
    return DTDataList.fromAmino(object.value);
  },
  fromProtoMsg(message: DTDataListProtoMsg): DTDataList {
    return DTDataList.decode(message.value);
  },
  toProto(message: DTDataList): Uint8Array {
    return DTDataList.encode(message).finish();
  },
  toProtoMsg(message: DTDataList): DTDataListProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.DTDataList",
      value: DTDataList.encode(message).finish()
    };
  }
};
function createBaseUserPreferences(): UserPreferences {
  return {
    trustNonAccreditedServices: false,
    trustAccreditedServices: false,
    trustedServicesIds: []
  };
}
export const UserPreferences = {
  typeUrl: "/milkyway.restaking.v1.UserPreferences",
  encode(message: UserPreferences, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trustNonAccreditedServices === true) {
      writer.uint32(8).bool(message.trustNonAccreditedServices);
    }
    if (message.trustAccreditedServices === true) {
      writer.uint32(16).bool(message.trustAccreditedServices);
    }
    writer.uint32(26).fork();
    for (const v of message.trustedServicesIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustNonAccreditedServices = reader.bool();
          break;
        case 2:
          message.trustAccreditedServices = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.trustedServicesIds.push(reader.uint32());
            }
          } else {
            message.trustedServicesIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserPreferences>): UserPreferences {
    const message = createBaseUserPreferences();
    message.trustNonAccreditedServices = object.trustNonAccreditedServices ?? false;
    message.trustAccreditedServices = object.trustAccreditedServices ?? false;
    message.trustedServicesIds = object.trustedServicesIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: UserPreferencesAmino): UserPreferences {
    const message = createBaseUserPreferences();
    if (object.trust_non_accredited_services !== undefined && object.trust_non_accredited_services !== null) {
      message.trustNonAccreditedServices = object.trust_non_accredited_services;
    }
    if (object.trust_accredited_services !== undefined && object.trust_accredited_services !== null) {
      message.trustAccreditedServices = object.trust_accredited_services;
    }
    message.trustedServicesIds = object.trusted_services_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: UserPreferences): UserPreferencesAmino {
    const obj: any = {};
    obj.trust_non_accredited_services = message.trustNonAccreditedServices === false ? undefined : message.trustNonAccreditedServices;
    obj.trust_accredited_services = message.trustAccreditedServices === false ? undefined : message.trustAccreditedServices;
    if (message.trustedServicesIds) {
      obj.trusted_services_ids = message.trustedServicesIds.map(e => e);
    } else {
      obj.trusted_services_ids = message.trustedServicesIds;
    }
    return obj;
  },
  fromAminoMsg(object: UserPreferencesAminoMsg): UserPreferences {
    return UserPreferences.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPreferencesProtoMsg): UserPreferences {
    return UserPreferences.decode(message.value);
  },
  toProto(message: UserPreferences): Uint8Array {
    return UserPreferences.encode(message).finish();
  },
  toProtoMsg(message: UserPreferences): UserPreferencesProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.UserPreferences",
      value: UserPreferences.encode(message).finish()
    };
  }
};