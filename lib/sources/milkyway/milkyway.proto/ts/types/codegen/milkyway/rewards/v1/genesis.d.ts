import { DecPool, DecPoolAmino, DecPoolSDKType, HistoricalRewards, HistoricalRewardsAmino, HistoricalRewardsSDKType, CurrentRewards, CurrentRewardsAmino, CurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, AccumulatedCommission, AccumulatedCommissionAmino, AccumulatedCommissionSDKType, RewardsPlan, RewardsPlanAmino, RewardsPlanSDKType, PoolServiceTotalDelegatorShares, PoolServiceTotalDelegatorSharesAmino, PoolServiceTotalDelegatorSharesSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export declare const DelegatorWithdrawInfo: {
    typeUrl: string;
    encode(message: DelegatorWithdrawInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo;
    fromPartial(object: Partial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo;
    fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo;
    toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino;
    fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo;
    fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo;
    toProto(message: DelegatorWithdrawInfo): Uint8Array;
    toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg;
};
export declare const OutstandingRewardsRecord: {
    typeUrl: string;
    encode(message: OutstandingRewardsRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OutstandingRewardsRecord;
    fromPartial(object: Partial<OutstandingRewardsRecord>): OutstandingRewardsRecord;
    fromAmino(object: OutstandingRewardsRecordAmino): OutstandingRewardsRecord;
    toAmino(message: OutstandingRewardsRecord): OutstandingRewardsRecordAmino;
    fromAminoMsg(object: OutstandingRewardsRecordAminoMsg): OutstandingRewardsRecord;
    fromProtoMsg(message: OutstandingRewardsRecordProtoMsg): OutstandingRewardsRecord;
    toProto(message: OutstandingRewardsRecord): Uint8Array;
    toProtoMsg(message: OutstandingRewardsRecord): OutstandingRewardsRecordProtoMsg;
};
export declare const HistoricalRewardsRecord: {
    typeUrl: string;
    encode(message: HistoricalRewardsRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HistoricalRewardsRecord;
    fromPartial(object: Partial<HistoricalRewardsRecord>): HistoricalRewardsRecord;
    fromAmino(object: HistoricalRewardsRecordAmino): HistoricalRewardsRecord;
    toAmino(message: HistoricalRewardsRecord): HistoricalRewardsRecordAmino;
    fromAminoMsg(object: HistoricalRewardsRecordAminoMsg): HistoricalRewardsRecord;
    fromProtoMsg(message: HistoricalRewardsRecordProtoMsg): HistoricalRewardsRecord;
    toProto(message: HistoricalRewardsRecord): Uint8Array;
    toProtoMsg(message: HistoricalRewardsRecord): HistoricalRewardsRecordProtoMsg;
};
export declare const CurrentRewardsRecord: {
    typeUrl: string;
    encode(message: CurrentRewardsRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrentRewardsRecord;
    fromPartial(object: Partial<CurrentRewardsRecord>): CurrentRewardsRecord;
    fromAmino(object: CurrentRewardsRecordAmino): CurrentRewardsRecord;
    toAmino(message: CurrentRewardsRecord): CurrentRewardsRecordAmino;
    fromAminoMsg(object: CurrentRewardsRecordAminoMsg): CurrentRewardsRecord;
    fromProtoMsg(message: CurrentRewardsRecordProtoMsg): CurrentRewardsRecord;
    toProto(message: CurrentRewardsRecord): Uint8Array;
    toProtoMsg(message: CurrentRewardsRecord): CurrentRewardsRecordProtoMsg;
};
export declare const DelegatorStartingInfoRecord: {
    typeUrl: string;
    encode(message: DelegatorStartingInfoRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord;
    fromPartial(object: Partial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord;
    fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord;
    toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino;
    fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord;
    fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord;
    toProto(message: DelegatorStartingInfoRecord): Uint8Array;
    toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg;
};
export declare const OperatorAccumulatedCommissionRecord: {
    typeUrl: string;
    encode(message: OperatorAccumulatedCommissionRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OperatorAccumulatedCommissionRecord;
    fromPartial(object: Partial<OperatorAccumulatedCommissionRecord>): OperatorAccumulatedCommissionRecord;
    fromAmino(object: OperatorAccumulatedCommissionRecordAmino): OperatorAccumulatedCommissionRecord;
    toAmino(message: OperatorAccumulatedCommissionRecord): OperatorAccumulatedCommissionRecordAmino;
    fromAminoMsg(object: OperatorAccumulatedCommissionRecordAminoMsg): OperatorAccumulatedCommissionRecord;
    fromProtoMsg(message: OperatorAccumulatedCommissionRecordProtoMsg): OperatorAccumulatedCommissionRecord;
    toProto(message: OperatorAccumulatedCommissionRecord): Uint8Array;
    toProtoMsg(message: OperatorAccumulatedCommissionRecord): OperatorAccumulatedCommissionRecordProtoMsg;
};
export declare const DelegationTypeRecords: {
    typeUrl: string;
    encode(message: DelegationTypeRecords, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationTypeRecords;
    fromPartial(object: Partial<DelegationTypeRecords>): DelegationTypeRecords;
    fromAmino(object: DelegationTypeRecordsAmino): DelegationTypeRecords;
    toAmino(message: DelegationTypeRecords): DelegationTypeRecordsAmino;
    fromAminoMsg(object: DelegationTypeRecordsAminoMsg): DelegationTypeRecords;
    fromProtoMsg(message: DelegationTypeRecordsProtoMsg): DelegationTypeRecords;
    toProto(message: DelegationTypeRecords): Uint8Array;
    toProtoMsg(message: DelegationTypeRecords): DelegationTypeRecordsProtoMsg;
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
