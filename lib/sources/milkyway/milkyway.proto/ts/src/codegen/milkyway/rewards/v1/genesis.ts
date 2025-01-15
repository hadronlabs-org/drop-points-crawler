import { DecPool, DecPoolAmino, DecPoolSDKType, HistoricalRewards, HistoricalRewardsAmino, HistoricalRewardsSDKType, CurrentRewards, CurrentRewardsAmino, CurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, AccumulatedCommission, AccumulatedCommissionAmino, AccumulatedCommissionSDKType, RewardsPlan, RewardsPlanAmino, RewardsPlanSDKType, PoolServiceTotalDelegatorShares, PoolServiceTotalDelegatorSharesAmino, PoolServiceTotalDelegatorSharesSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/**
 * DelegatorWithdrawInfo is the address for where delegation rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdrawAddress: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  typeUrl: "/milkyway.rewards.v1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where delegation rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address?: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address?: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
  type: "/milkyway.rewards.v1.DelegatorWithdrawInfo";
  value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where delegation rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** OutstandingRewardsRecord is used for import/export via genesis json. */
export interface OutstandingRewardsRecord {
  /** delegation_target_id is the ID of the delegation target. */
  delegationTargetId: number;
  /**
   * outstanding_rewards represents the outstanding rewards of the delegation
   * target.
   */
  outstandingRewards: DecPool[];
}
export interface OutstandingRewardsRecordProtoMsg {
  typeUrl: "/milkyway.rewards.v1.OutstandingRewardsRecord";
  value: Uint8Array;
}
/** OutstandingRewardsRecord is used for import/export via genesis json. */
export interface OutstandingRewardsRecordAmino {
  /** delegation_target_id is the ID of the delegation target. */
  delegation_target_id?: number;
  /**
   * outstanding_rewards represents the outstanding rewards of the delegation
   * target.
   */
  outstanding_rewards: DecPoolAmino[];
}
export interface OutstandingRewardsRecordAminoMsg {
  type: "/milkyway.rewards.v1.OutstandingRewardsRecord";
  value: OutstandingRewardsRecordAmino;
}
/** OutstandingRewardsRecord is used for import/export via genesis json. */
export interface OutstandingRewardsRecordSDKType {
  delegation_target_id: number;
  outstanding_rewards: DecPoolSDKType[];
}
/**
 * HistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface HistoricalRewardsRecord {
  /** delegation_target_id is the ID of the delegation target. */
  delegationTargetId: number;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of the delegation target. */
  rewards: HistoricalRewards;
}
export interface HistoricalRewardsRecordProtoMsg {
  typeUrl: "/milkyway.rewards.v1.HistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * HistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface HistoricalRewardsRecordAmino {
  /** delegation_target_id is the ID of the delegation target. */
  delegation_target_id?: number;
  /** period defines the period the historical rewards apply to. */
  period?: string;
  /** rewards defines the historical rewards of the delegation target. */
  rewards: HistoricalRewardsAmino;
}
export interface HistoricalRewardsRecordAminoMsg {
  type: "/milkyway.rewards.v1.HistoricalRewardsRecord";
  value: HistoricalRewardsRecordAmino;
}
/**
 * HistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface HistoricalRewardsRecordSDKType {
  delegation_target_id: number;
  period: bigint;
  rewards: HistoricalRewardsSDKType;
}
/** CurrentRewardsRecord is used for import / export via genesis json. */
export interface CurrentRewardsRecord {
  /** delegation_target_id is the ID of the delegation target. */
  delegationTargetId: number;
  /** rewards defines the current rewards of the delegation target. */
  rewards: CurrentRewards;
}
export interface CurrentRewardsRecordProtoMsg {
  typeUrl: "/milkyway.rewards.v1.CurrentRewardsRecord";
  value: Uint8Array;
}
/** CurrentRewardsRecord is used for import / export via genesis json. */
export interface CurrentRewardsRecordAmino {
  /** delegation_target_id is the ID of the delegation target. */
  delegation_target_id?: number;
  /** rewards defines the current rewards of the delegation target. */
  rewards: CurrentRewardsAmino;
}
export interface CurrentRewardsRecordAminoMsg {
  type: "/milkyway.rewards.v1.CurrentRewardsRecord";
  value: CurrentRewardsRecordAmino;
}
/** CurrentRewardsRecord is used for import / export via genesis json. */
export interface CurrentRewardsRecordSDKType {
  delegation_target_id: number;
  rewards: CurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** delegation_target_id is the ID of the delegation target. */
  delegationTargetId: number;
  /** starting_info defines the starting info of a delegator. */
  startingInfo: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address?: string;
  /** delegation_target_id is the ID of the delegation target. */
  delegation_target_id?: number;
  /** starting_info defines the starting info of a delegator. */
  starting_info: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
  type: "/milkyway.rewards.v1.DelegatorStartingInfoRecord";
  value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  delegation_target_id: number;
  starting_info: DelegatorStartingInfoSDKType;
}
export interface OperatorAccumulatedCommissionRecord {
  operatorId: number;
  /** accumulated is the accumulated commission of an operator. */
  accumulated: AccumulatedCommission;
}
export interface OperatorAccumulatedCommissionRecordProtoMsg {
  typeUrl: "/milkyway.rewards.v1.OperatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
export interface OperatorAccumulatedCommissionRecordAmino {
  operator_id?: number;
  /** accumulated is the accumulated commission of an operator. */
  accumulated: AccumulatedCommissionAmino;
}
export interface OperatorAccumulatedCommissionRecordAminoMsg {
  type: "/milkyway.rewards.v1.OperatorAccumulatedCommissionRecord";
  value: OperatorAccumulatedCommissionRecordAmino;
}
export interface OperatorAccumulatedCommissionRecordSDKType {
  operator_id: number;
  accumulated: AccumulatedCommissionSDKType;
}
/**
 * DelegationTypeRecords groups various genesis records under the same type
 * of delegation target.
 */
export interface DelegationTypeRecords {
  /**
   * outstanding_rewards defines the outstanding rewards of all delegation
   * targets with the same delegation type at genesis.
   */
  outstandingRewards: OutstandingRewardsRecord[];
  /**
   * historical_rewards defines the historical rewards of all delegation targets
   * with the same delegation type at genesis.
   */
  historicalRewards: HistoricalRewardsRecord[];
  /**
   * current_rewards defines the current rewards of all delegation targets with
   * the same delegation type at genesis.
   */
  currentRewards: CurrentRewardsRecord[];
  /**
   * delegator_starting_infos defines the delegator starting infos of all
   * delegation targets with the same delegation type at genesis.
   */
  delegatorStartingInfos: DelegatorStartingInfoRecord[];
}
export interface DelegationTypeRecordsProtoMsg {
  typeUrl: "/milkyway.rewards.v1.DelegationTypeRecords";
  value: Uint8Array;
}
/**
 * DelegationTypeRecords groups various genesis records under the same type
 * of delegation target.
 */
export interface DelegationTypeRecordsAmino {
  /**
   * outstanding_rewards defines the outstanding rewards of all delegation
   * targets with the same delegation type at genesis.
   */
  outstanding_rewards: OutstandingRewardsRecordAmino[];
  /**
   * historical_rewards defines the historical rewards of all delegation targets
   * with the same delegation type at genesis.
   */
  historical_rewards: HistoricalRewardsRecordAmino[];
  /**
   * current_rewards defines the current rewards of all delegation targets with
   * the same delegation type at genesis.
   */
  current_rewards: CurrentRewardsRecordAmino[];
  /**
   * delegator_starting_infos defines the delegator starting infos of all
   * delegation targets with the same delegation type at genesis.
   */
  delegator_starting_infos: DelegatorStartingInfoRecordAmino[];
}
export interface DelegationTypeRecordsAminoMsg {
  type: "/milkyway.rewards.v1.DelegationTypeRecords";
  value: DelegationTypeRecordsAmino;
}
/**
 * DelegationTypeRecords groups various genesis records under the same type
 * of delegation target.
 */
export interface DelegationTypeRecordsSDKType {
  outstanding_rewards: OutstandingRewardsRecordSDKType[];
  historical_rewards: HistoricalRewardsRecordSDKType[];
  current_rewards: CurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** Params defines the parameters of the module. */
  params: Params;
  /**
   * NextRewardsPlanID represents the id to be used when creating the next
   * rewards plan.
   */
  nextRewardsPlanId: bigint;
  /** RewardsPlans defines the list of rewards plans. */
  rewardsPlans: RewardsPlan[];
  /** last_rewards_allocation_time is the last time rewards were allocated. */
  lastRewardsAllocationTime?: Date;
  /** delegator_withdraw_infos defines the delegator withdraw infos at genesis. */
  delegatorWithdrawInfos: DelegatorWithdrawInfo[];
  /** pools_records defines a group of genesis records of all pools at genesis. */
  poolsRecords: DelegationTypeRecords;
  /**
   * operators_records defines a group of genesis records of all operators at
   * genesis.
   */
  operatorsRecords: DelegationTypeRecords;
  /**
   * services_records defines a group of genesis records of all services at
   * genesis.
   */
  servicesRecords: DelegationTypeRecords;
  operatorAccumulatedCommissions: OperatorAccumulatedCommissionRecord[];
  poolServiceTotalDelegatorShares: PoolServiceTotalDelegatorShares[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/milkyway.rewards.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines the parameters of the module. */
  params?: ParamsAmino;
  /**
   * NextRewardsPlanID represents the id to be used when creating the next
   * rewards plan.
   */
  next_rewards_plan_id?: string;
  /** RewardsPlans defines the list of rewards plans. */
  rewards_plans?: RewardsPlanAmino[];
  /** last_rewards_allocation_time is the last time rewards were allocated. */
  last_rewards_allocation_time?: string;
  /** delegator_withdraw_infos defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfoAmino[];
  /** pools_records defines a group of genesis records of all pools at genesis. */
  pools_records: DelegationTypeRecordsAmino;
  /**
   * operators_records defines a group of genesis records of all operators at
   * genesis.
   */
  operators_records: DelegationTypeRecordsAmino;
  /**
   * services_records defines a group of genesis records of all services at
   * genesis.
   */
  services_records: DelegationTypeRecordsAmino;
  operator_accumulated_commissions: OperatorAccumulatedCommissionRecordAmino[];
  pool_service_total_delegator_shares: PoolServiceTotalDelegatorSharesAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/milkyway.rewards.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  next_rewards_plan_id: bigint;
  rewards_plans: RewardsPlanSDKType[];
  last_rewards_allocation_time?: Date;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  pools_records: DelegationTypeRecordsSDKType;
  operators_records: DelegationTypeRecordsSDKType;
  services_records: DelegationTypeRecordsSDKType;
  operator_accumulated_commissions: OperatorAccumulatedCommissionRecordSDKType[];
  pool_service_total_delegator_shares: PoolServiceTotalDelegatorSharesSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/milkyway.rewards.v1.DelegatorWithdrawInfo",
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseOutstandingRewardsRecord(): OutstandingRewardsRecord {
  return {
    delegationTargetId: 0,
    outstandingRewards: []
  };
}
export const OutstandingRewardsRecord = {
  typeUrl: "/milkyway.rewards.v1.OutstandingRewardsRecord",
  encode(message: OutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationTargetId !== 0) {
      writer.uint32(8).uint32(message.delegationTargetId);
    }
    for (const v of message.outstandingRewards) {
      DecPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationTargetId = reader.uint32();
          break;
        case 2:
          message.outstandingRewards.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OutstandingRewardsRecord>): OutstandingRewardsRecord {
    const message = createBaseOutstandingRewardsRecord();
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.outstandingRewards = object.outstandingRewards?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OutstandingRewardsRecordAmino): OutstandingRewardsRecord {
    const message = createBaseOutstandingRewardsRecord();
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    message.outstandingRewards = object.outstanding_rewards?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OutstandingRewardsRecord): OutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    return obj;
  },
  fromAminoMsg(object: OutstandingRewardsRecordAminoMsg): OutstandingRewardsRecord {
    return OutstandingRewardsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: OutstandingRewardsRecordProtoMsg): OutstandingRewardsRecord {
    return OutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: OutstandingRewardsRecord): Uint8Array {
    return OutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: OutstandingRewardsRecord): OutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.OutstandingRewardsRecord",
      value: OutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseHistoricalRewardsRecord(): HistoricalRewardsRecord {
  return {
    delegationTargetId: 0,
    period: BigInt(0),
    rewards: HistoricalRewards.fromPartial({})
  };
}
export const HistoricalRewardsRecord = {
  typeUrl: "/milkyway.rewards.v1.HistoricalRewardsRecord",
  encode(message: HistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationTargetId !== 0) {
      writer.uint32(8).uint32(message.delegationTargetId);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      HistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationTargetId = reader.uint32();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = HistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HistoricalRewardsRecord>): HistoricalRewardsRecord {
    const message = createBaseHistoricalRewardsRecord();
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? HistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: HistoricalRewardsRecordAmino): HistoricalRewardsRecord {
    const message = createBaseHistoricalRewardsRecord();
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = HistoricalRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: HistoricalRewardsRecord): HistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    obj.rewards = message.rewards ? HistoricalRewards.toAmino(message.rewards) : HistoricalRewards.toAmino(HistoricalRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: HistoricalRewardsRecordAminoMsg): HistoricalRewardsRecord {
    return HistoricalRewardsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalRewardsRecordProtoMsg): HistoricalRewardsRecord {
    return HistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: HistoricalRewardsRecord): Uint8Array {
    return HistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: HistoricalRewardsRecord): HistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.HistoricalRewardsRecord",
      value: HistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseCurrentRewardsRecord(): CurrentRewardsRecord {
  return {
    delegationTargetId: 0,
    rewards: CurrentRewards.fromPartial({})
  };
}
export const CurrentRewardsRecord = {
  typeUrl: "/milkyway.rewards.v1.CurrentRewardsRecord",
  encode(message: CurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationTargetId !== 0) {
      writer.uint32(8).uint32(message.delegationTargetId);
    }
    if (message.rewards !== undefined) {
      CurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationTargetId = reader.uint32();
          break;
        case 2:
          message.rewards = CurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CurrentRewardsRecord>): CurrentRewardsRecord {
    const message = createBaseCurrentRewardsRecord();
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.rewards = object.rewards !== undefined && object.rewards !== null ? CurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: CurrentRewardsRecordAmino): CurrentRewardsRecord {
    const message = createBaseCurrentRewardsRecord();
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = CurrentRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: CurrentRewardsRecord): CurrentRewardsRecordAmino {
    const obj: any = {};
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    obj.rewards = message.rewards ? CurrentRewards.toAmino(message.rewards) : CurrentRewards.toAmino(CurrentRewards.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: CurrentRewardsRecordAminoMsg): CurrentRewardsRecord {
    return CurrentRewardsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentRewardsRecordProtoMsg): CurrentRewardsRecord {
    return CurrentRewardsRecord.decode(message.value);
  },
  toProto(message: CurrentRewardsRecord): Uint8Array {
    return CurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: CurrentRewardsRecord): CurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.CurrentRewardsRecord",
      value: CurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegatorAddress: "",
    delegationTargetId: 0,
    startingInfo: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfoRecord",
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.delegationTargetId !== 0) {
      writer.uint32(16).uint32(message.delegationTargetId);
    }
    if (message.startingInfo !== undefined) {
      DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.delegationTargetId = reader.uint32();
          break;
        case 3:
          message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
    return message;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    if (object.starting_info !== undefined && object.starting_info !== null) {
      message.startingInfo = DelegatorStartingInfo.fromAmino(object.starting_info);
    }
    return message;
  },
  toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toAmino(message.startingInfo) : DelegatorStartingInfo.toAmino(DelegatorStartingInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseOperatorAccumulatedCommissionRecord(): OperatorAccumulatedCommissionRecord {
  return {
    operatorId: 0,
    accumulated: AccumulatedCommission.fromPartial({})
  };
}
export const OperatorAccumulatedCommissionRecord = {
  typeUrl: "/milkyway.rewards.v1.OperatorAccumulatedCommissionRecord",
  encode(message: OperatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    if (message.accumulated !== undefined) {
      AccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorId = reader.uint32();
          break;
        case 2:
          message.accumulated = AccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorAccumulatedCommissionRecord>): OperatorAccumulatedCommissionRecord {
    const message = createBaseOperatorAccumulatedCommissionRecord();
    message.operatorId = object.operatorId ?? 0;
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? AccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromAmino(object: OperatorAccumulatedCommissionRecordAmino): OperatorAccumulatedCommissionRecord {
    const message = createBaseOperatorAccumulatedCommissionRecord();
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.accumulated !== undefined && object.accumulated !== null) {
      message.accumulated = AccumulatedCommission.fromAmino(object.accumulated);
    }
    return message;
  },
  toAmino(message: OperatorAccumulatedCommissionRecord): OperatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.accumulated = message.accumulated ? AccumulatedCommission.toAmino(message.accumulated) : AccumulatedCommission.toAmino(AccumulatedCommission.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: OperatorAccumulatedCommissionRecordAminoMsg): OperatorAccumulatedCommissionRecord {
    return OperatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorAccumulatedCommissionRecordProtoMsg): OperatorAccumulatedCommissionRecord {
    return OperatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: OperatorAccumulatedCommissionRecord): Uint8Array {
    return OperatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: OperatorAccumulatedCommissionRecord): OperatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.OperatorAccumulatedCommissionRecord",
      value: OperatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseDelegationTypeRecords(): DelegationTypeRecords {
  return {
    outstandingRewards: [],
    historicalRewards: [],
    currentRewards: [],
    delegatorStartingInfos: []
  };
}
export const DelegationTypeRecords = {
  typeUrl: "/milkyway.rewards.v1.DelegationTypeRecords",
  encode(message: DelegationTypeRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.outstandingRewards) {
      OutstandingRewardsRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.historicalRewards) {
      HistoricalRewardsRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.currentRewards) {
      CurrentRewardsRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationTypeRecords {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationTypeRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outstandingRewards.push(OutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.historicalRewards.push(HistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 3:
          message.currentRewards.push(CurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegationTypeRecords>): DelegationTypeRecords {
    const message = createBaseDelegationTypeRecords();
    message.outstandingRewards = object.outstandingRewards?.map(e => OutstandingRewardsRecord.fromPartial(e)) || [];
    message.historicalRewards = object.historicalRewards?.map(e => HistoricalRewardsRecord.fromPartial(e)) || [];
    message.currentRewards = object.currentRewards?.map(e => CurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationTypeRecordsAmino): DelegationTypeRecords {
    const message = createBaseDelegationTypeRecords();
    message.outstandingRewards = object.outstanding_rewards?.map(e => OutstandingRewardsRecord.fromAmino(e)) || [];
    message.historicalRewards = object.historical_rewards?.map(e => HistoricalRewardsRecord.fromAmino(e)) || [];
    message.currentRewards = object.current_rewards?.map(e => CurrentRewardsRecord.fromAmino(e)) || [];
    message.delegatorStartingInfos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationTypeRecords): DelegationTypeRecordsAmino {
    const obj: any = {};
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? OutstandingRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = message.outstandingRewards;
    }
    if (message.historicalRewards) {
      obj.historical_rewards = message.historicalRewards.map(e => e ? HistoricalRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.historical_rewards = message.historicalRewards;
    }
    if (message.currentRewards) {
      obj.current_rewards = message.currentRewards.map(e => e ? CurrentRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.current_rewards = message.currentRewards;
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
    } else {
      obj.delegator_starting_infos = message.delegatorStartingInfos;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationTypeRecordsAminoMsg): DelegationTypeRecords {
    return DelegationTypeRecords.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationTypeRecordsProtoMsg): DelegationTypeRecords {
    return DelegationTypeRecords.decode(message.value);
  },
  toProto(message: DelegationTypeRecords): Uint8Array {
    return DelegationTypeRecords.encode(message).finish();
  },
  toProtoMsg(message: DelegationTypeRecords): DelegationTypeRecordsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DelegationTypeRecords",
      value: DelegationTypeRecords.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextRewardsPlanId: BigInt(0),
    rewardsPlans: [],
    lastRewardsAllocationTime: undefined,
    delegatorWithdrawInfos: [],
    poolsRecords: DelegationTypeRecords.fromPartial({}),
    operatorsRecords: DelegationTypeRecords.fromPartial({}),
    servicesRecords: DelegationTypeRecords.fromPartial({}),
    operatorAccumulatedCommissions: [],
    poolServiceTotalDelegatorShares: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.rewards.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRewardsPlanId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextRewardsPlanId);
    }
    for (const v of message.rewardsPlans) {
      RewardsPlan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastRewardsAllocationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastRewardsAllocationTime), writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolsRecords !== undefined) {
      DelegationTypeRecords.encode(message.poolsRecords, writer.uint32(50).fork()).ldelim();
    }
    if (message.operatorsRecords !== undefined) {
      DelegationTypeRecords.encode(message.operatorsRecords, writer.uint32(58).fork()).ldelim();
    }
    if (message.servicesRecords !== undefined) {
      DelegationTypeRecords.encode(message.servicesRecords, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.operatorAccumulatedCommissions) {
      OperatorAccumulatedCommissionRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.poolServiceTotalDelegatorShares) {
      PoolServiceTotalDelegatorShares.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.nextRewardsPlanId = reader.uint64();
          break;
        case 3:
          message.rewardsPlans.push(RewardsPlan.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastRewardsAllocationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolsRecords = DelegationTypeRecords.decode(reader, reader.uint32());
          break;
        case 7:
          message.operatorsRecords = DelegationTypeRecords.decode(reader, reader.uint32());
          break;
        case 8:
          message.servicesRecords = DelegationTypeRecords.decode(reader, reader.uint32());
          break;
        case 9:
          message.operatorAccumulatedCommissions.push(OperatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.poolServiceTotalDelegatorShares.push(PoolServiceTotalDelegatorShares.decode(reader, reader.uint32()));
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
    message.nextRewardsPlanId = object.nextRewardsPlanId !== undefined && object.nextRewardsPlanId !== null ? BigInt(object.nextRewardsPlanId.toString()) : BigInt(0);
    message.rewardsPlans = object.rewardsPlans?.map(e => RewardsPlan.fromPartial(e)) || [];
    message.lastRewardsAllocationTime = object.lastRewardsAllocationTime ?? undefined;
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.poolsRecords = object.poolsRecords !== undefined && object.poolsRecords !== null ? DelegationTypeRecords.fromPartial(object.poolsRecords) : undefined;
    message.operatorsRecords = object.operatorsRecords !== undefined && object.operatorsRecords !== null ? DelegationTypeRecords.fromPartial(object.operatorsRecords) : undefined;
    message.servicesRecords = object.servicesRecords !== undefined && object.servicesRecords !== null ? DelegationTypeRecords.fromPartial(object.servicesRecords) : undefined;
    message.operatorAccumulatedCommissions = object.operatorAccumulatedCommissions?.map(e => OperatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.poolServiceTotalDelegatorShares = object.poolServiceTotalDelegatorShares?.map(e => PoolServiceTotalDelegatorShares.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_rewards_plan_id !== undefined && object.next_rewards_plan_id !== null) {
      message.nextRewardsPlanId = BigInt(object.next_rewards_plan_id);
    }
    message.rewardsPlans = object.rewards_plans?.map(e => RewardsPlan.fromAmino(e)) || [];
    if (object.last_rewards_allocation_time !== undefined && object.last_rewards_allocation_time !== null) {
      message.lastRewardsAllocationTime = fromTimestamp(Timestamp.fromAmino(object.last_rewards_allocation_time));
    }
    message.delegatorWithdrawInfos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromAmino(e)) || [];
    if (object.pools_records !== undefined && object.pools_records !== null) {
      message.poolsRecords = DelegationTypeRecords.fromAmino(object.pools_records);
    }
    if (object.operators_records !== undefined && object.operators_records !== null) {
      message.operatorsRecords = DelegationTypeRecords.fromAmino(object.operators_records);
    }
    if (object.services_records !== undefined && object.services_records !== null) {
      message.servicesRecords = DelegationTypeRecords.fromAmino(object.services_records);
    }
    message.operatorAccumulatedCommissions = object.operator_accumulated_commissions?.map(e => OperatorAccumulatedCommissionRecord.fromAmino(e)) || [];
    message.poolServiceTotalDelegatorShares = object.pool_service_total_delegator_shares?.map(e => PoolServiceTotalDelegatorShares.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_rewards_plan_id = message.nextRewardsPlanId !== BigInt(0) ? message.nextRewardsPlanId?.toString() : undefined;
    if (message.rewardsPlans) {
      obj.rewards_plans = message.rewardsPlans.map(e => e ? RewardsPlan.toAmino(e) : undefined);
    } else {
      obj.rewards_plans = message.rewardsPlans;
    }
    obj.last_rewards_allocation_time = message.lastRewardsAllocationTime ? Timestamp.toAmino(toTimestamp(message.lastRewardsAllocationTime)) : undefined;
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos;
    }
    obj.pools_records = message.poolsRecords ? DelegationTypeRecords.toAmino(message.poolsRecords) : DelegationTypeRecords.toAmino(DelegationTypeRecords.fromPartial({}));
    obj.operators_records = message.operatorsRecords ? DelegationTypeRecords.toAmino(message.operatorsRecords) : DelegationTypeRecords.toAmino(DelegationTypeRecords.fromPartial({}));
    obj.services_records = message.servicesRecords ? DelegationTypeRecords.toAmino(message.servicesRecords) : DelegationTypeRecords.toAmino(DelegationTypeRecords.fromPartial({}));
    if (message.operatorAccumulatedCommissions) {
      obj.operator_accumulated_commissions = message.operatorAccumulatedCommissions.map(e => e ? OperatorAccumulatedCommissionRecord.toAmino(e) : undefined);
    } else {
      obj.operator_accumulated_commissions = message.operatorAccumulatedCommissions;
    }
    if (message.poolServiceTotalDelegatorShares) {
      obj.pool_service_total_delegator_shares = message.poolServiceTotalDelegatorShares.map(e => e ? PoolServiceTotalDelegatorShares.toAmino(e) : undefined);
    } else {
      obj.pool_service_total_delegator_shares = message.poolServiceTotalDelegatorShares;
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
      typeUrl: "/milkyway.rewards.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};