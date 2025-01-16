import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DelegationType } from "../../restaking/v1/models";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** RewardsPlan represents a rewards allocation plan. */
export interface RewardsPlan {
    /** ID is the unique identifier of the plan. */
    id: bigint;
    /** Description is the description of the plan. */
    description: string;
    /** ServiceID is the service ID which the plan is related to. */
    serviceId: number;
    /**
     * AmountPerDay is the amount of rewards to be distributed, per day.
     * The rewards amount for every block will be calculated based on this.
     */
    amountPerDay: Coin[];
    /** StartTime is the starting time of the plan. */
    startTime: Date;
    /** EndTime is the ending time of the plan. */
    endTime: Date;
    /**
     * RewardsPool is the address where rewards to be distributed are stored.
     * If the rewards pool doesn't have enough funds to be distributed, then
     * the rewards allocation for this plan will be skipped.
     */
    rewardsPool: string;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    poolsDistribution: Distribution;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operatorsDistribution: Distribution;
    /** UsersDistribution is the rewards distribution parameters for users. */
    usersDistribution: UsersDistribution;
}
export interface RewardsPlanProtoMsg {
    typeUrl: "/milkyway.rewards.v1.RewardsPlan";
    value: Uint8Array;
}
/** RewardsPlan represents a rewards allocation plan. */
export interface RewardsPlanAmino {
    /** ID is the unique identifier of the plan. */
    id?: string;
    /** Description is the description of the plan. */
    description?: string;
    /** ServiceID is the service ID which the plan is related to. */
    service_id?: number;
    /**
     * AmountPerDay is the amount of rewards to be distributed, per day.
     * The rewards amount for every block will be calculated based on this.
     */
    amount_per_day?: CoinAmino[];
    /** StartTime is the starting time of the plan. */
    start_time?: string;
    /** EndTime is the ending time of the plan. */
    end_time?: string;
    /**
     * RewardsPool is the address where rewards to be distributed are stored.
     * If the rewards pool doesn't have enough funds to be distributed, then
     * the rewards allocation for this plan will be skipped.
     */
    rewards_pool?: string;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    pools_distribution?: DistributionAmino;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operators_distribution?: DistributionAmino;
    /** UsersDistribution is the rewards distribution parameters for users. */
    users_distribution?: UsersDistributionAmino;
}
export interface RewardsPlanAminoMsg {
    type: "/milkyway.rewards.v1.RewardsPlan";
    value: RewardsPlanAmino;
}
/** RewardsPlan represents a rewards allocation plan. */
export interface RewardsPlanSDKType {
    id: bigint;
    description: string;
    service_id: number;
    amount_per_day: CoinSDKType[];
    start_time: Date;
    end_time: Date;
    rewards_pool: string;
    pools_distribution: DistributionSDKType;
    operators_distribution: DistributionSDKType;
    users_distribution: UsersDistributionSDKType;
}
/**
 * Distribution represents distribution parameters for restaking
 * pools/operators.
 */
export interface Distribution {
    /**
     * DelegationType is the type of delegation target which this distribution
     * parameters are for. It can be one of DELEGATION_TYPE_POOL and
     * DELEGATION_TYPE_OPERATOR.
     */
    delegationType: DelegationType;
    /**
     * Weight is the rewards distribution weight among other types of delegation
     * targets.
     */
    weight: number;
    /** Type is one of basic/weighted/egalitarian distributions. */
    type?: DistributionTypeBasic | DistributionTypeWeighted | DistributionTypeEgalitarian | Any | undefined;
}
export interface DistributionProtoMsg {
    typeUrl: "/milkyway.rewards.v1.Distribution";
    value: Uint8Array;
}
export type DistributionEncoded = Omit<Distribution, "type"> & {
    /** Type is one of basic/weighted/egalitarian distributions. */ type?: DistributionTypeBasicProtoMsg | DistributionTypeWeightedProtoMsg | DistributionTypeEgalitarianProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Distribution represents distribution parameters for restaking
 * pools/operators.
 */
export interface DistributionAmino {
    /**
     * DelegationType is the type of delegation target which this distribution
     * parameters are for. It can be one of DELEGATION_TYPE_POOL and
     * DELEGATION_TYPE_OPERATOR.
     */
    delegation_type?: DelegationType;
    /**
     * Weight is the rewards distribution weight among other types of delegation
     * targets.
     */
    weight?: number;
    /** Type is one of basic/weighted/egalitarian distributions. */
    type?: AnyAmino;
}
export interface DistributionAminoMsg {
    type: "/milkyway.rewards.v1.Distribution";
    value: DistributionAmino;
}
/**
 * Distribution represents distribution parameters for restaking
 * pools/operators.
 */
export interface DistributionSDKType {
    delegation_type: DelegationType;
    weight: number;
    type?: DistributionTypeBasicSDKType | DistributionTypeWeightedSDKType | DistributionTypeEgalitarianSDKType | AnySDKType | undefined;
}
/**
 * DistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three operators with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface DistributionTypeBasic {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeBasic";
}
export interface DistributionTypeBasicProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DistributionTypeBasic";
    value: Uint8Array;
}
/**
 * DistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three operators with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface DistributionTypeBasicAmino {
}
export interface DistributionTypeBasicAminoMsg {
    type: "/milkyway.rewards.v1.DistributionTypeBasic";
    value: DistributionTypeBasicAmino;
}
/**
 * DistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three operators with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface DistributionTypeBasicSDKType {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeBasic";
}
/**
 * DistributionTypeWeighted is a type of distribution where the reward
 * weights for each entity are explicitly defined. Only the specified
 * delegation targets will receive rewards.
 */
export interface DistributionTypeWeighted {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeWeighted";
    weights: DistributionWeight[];
}
export interface DistributionTypeWeightedProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DistributionTypeWeighted";
    value: Uint8Array;
}
/**
 * DistributionTypeWeighted is a type of distribution where the reward
 * weights for each entity are explicitly defined. Only the specified
 * delegation targets will receive rewards.
 */
export interface DistributionTypeWeightedAmino {
    weights?: DistributionWeightAmino[];
}
export interface DistributionTypeWeightedAminoMsg {
    type: "/milkyway.rewards.v1.DistributionTypeWeighted";
    value: DistributionTypeWeightedAmino;
}
/**
 * DistributionTypeWeighted is a type of distribution where the reward
 * weights for each entity are explicitly defined. Only the specified
 * delegation targets will receive rewards.
 */
export interface DistributionTypeWeightedSDKType {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeWeighted";
    weights: DistributionWeightSDKType[];
}
/** DistributionWeight defines a delegation target and its assigned weight. */
export interface DistributionWeight {
    delegationTargetId: number;
    weight: number;
}
export interface DistributionWeightProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DistributionWeight";
    value: Uint8Array;
}
/** DistributionWeight defines a delegation target and its assigned weight. */
export interface DistributionWeightAmino {
    delegation_target_id?: number;
    weight?: number;
}
export interface DistributionWeightAminoMsg {
    type: "/milkyway.rewards.v1.DistributionWeight";
    value: DistributionWeightAmino;
}
/** DistributionWeight defines a delegation target and its assigned weight. */
export interface DistributionWeightSDKType {
    delegation_target_id: number;
    weight: number;
}
/**
 * DistributionTypeEgalitarian is a distribution method where all entities
 * receive an equal share of rewards(a.k.a. egalitarian method).
 */
export interface DistributionTypeEgalitarian {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeEgalitarian";
}
export interface DistributionTypeEgalitarianProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DistributionTypeEgalitarian";
    value: Uint8Array;
}
/**
 * DistributionTypeEgalitarian is a distribution method where all entities
 * receive an equal share of rewards(a.k.a. egalitarian method).
 */
export interface DistributionTypeEgalitarianAmino {
}
export interface DistributionTypeEgalitarianAminoMsg {
    type: "/milkyway.rewards.v1.DistributionTypeEgalitarian";
    value: DistributionTypeEgalitarianAmino;
}
/**
 * DistributionTypeEgalitarian is a distribution method where all entities
 * receive an equal share of rewards(a.k.a. egalitarian method).
 */
export interface DistributionTypeEgalitarianSDKType {
    $typeUrl?: "/milkyway.rewards.v1.DistributionTypeEgalitarian";
}
/**
 * Distribution represents distribution parameters for delegators who directly
 * staked their tokens to the service.
 */
export interface UsersDistribution {
    /**
     * Weight is the rewards distribution weight among other types of delegation
     * targets.
     */
    weight: number;
    /**
     * Type defines the rewards distribution method. Currently only the basic
     * distribution is allowed.
     */
    type?: UsersDistributionTypeBasic | Any | undefined;
}
export interface UsersDistributionProtoMsg {
    typeUrl: "/milkyway.rewards.v1.UsersDistribution";
    value: Uint8Array;
}
export type UsersDistributionEncoded = Omit<UsersDistribution, "type"> & {
    /**
     * Type defines the rewards distribution method. Currently only the basic
     * distribution is allowed.
     */
    type?: UsersDistributionTypeBasicProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Distribution represents distribution parameters for delegators who directly
 * staked their tokens to the service.
 */
export interface UsersDistributionAmino {
    /**
     * Weight is the rewards distribution weight among other types of delegation
     * targets.
     */
    weight?: number;
    /**
     * Type defines the rewards distribution method. Currently only the basic
     * distribution is allowed.
     */
    type?: AnyAmino;
}
export interface UsersDistributionAminoMsg {
    type: "/milkyway.rewards.v1.UsersDistribution";
    value: UsersDistributionAmino;
}
/**
 * Distribution represents distribution parameters for delegators who directly
 * staked their tokens to the service.
 */
export interface UsersDistributionSDKType {
    weight: number;
    type?: UsersDistributionTypeBasicSDKType | AnySDKType | undefined;
}
/**
 * UsersDistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three users with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface UsersDistributionTypeBasic {
    $typeUrl?: "/milkyway.rewards.v1.UsersDistributionTypeBasic";
}
export interface UsersDistributionTypeBasicProtoMsg {
    typeUrl: "/milkyway.rewards.v1.UsersDistributionTypeBasic";
    value: Uint8Array;
}
/**
 * UsersDistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three users with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface UsersDistributionTypeBasicAmino {
}
export interface UsersDistributionTypeBasicAminoMsg {
    type: "/milkyway.rewards.v1.UsersDistributionTypeBasic";
    value: UsersDistributionTypeBasicAmino;
}
/**
 * UsersDistributionTypeBasic represents the simplest form of distribution.
 * Rewards are allocated to entities based on their delegation values.
 * For example, if there are three users with delegation values of
 * $1000, $1500, and $2000, their rewards will be distributed in a
 * 2:3:4 ratio.
 */
export interface UsersDistributionTypeBasicSDKType {
    $typeUrl?: "/milkyway.rewards.v1.UsersDistributionTypeBasic";
}
/**
 * HistoricalRewards represents historical rewards for a delegation target.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface HistoricalRewards {
    cumulativeRewardRatios: ServicePool[];
    referenceCount: number;
}
export interface HistoricalRewardsProtoMsg {
    typeUrl: "/milkyway.rewards.v1.HistoricalRewards";
    value: Uint8Array;
}
/**
 * HistoricalRewards represents historical rewards for a delegation target.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface HistoricalRewardsAmino {
    cumulative_reward_ratios?: ServicePoolAmino[];
    reference_count?: number;
}
export interface HistoricalRewardsAminoMsg {
    type: "/milkyway.rewards.v1.HistoricalRewards";
    value: HistoricalRewardsAmino;
}
/**
 * HistoricalRewards represents historical rewards for a delegation target.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface HistoricalRewardsSDKType {
    cumulative_reward_ratios: ServicePoolSDKType[];
    reference_count: number;
}
/**
 * CurrentRewards represents current rewards and current
 * period for a delegation target kept as a running counter and incremented
 * each block as long as the delegation target's tokens remain constant.
 */
export interface CurrentRewards {
    rewards: ServicePool[];
    period: bigint;
}
export interface CurrentRewardsProtoMsg {
    typeUrl: "/milkyway.rewards.v1.CurrentRewards";
    value: Uint8Array;
}
/**
 * CurrentRewards represents current rewards and current
 * period for a delegation target kept as a running counter and incremented
 * each block as long as the delegation target's tokens remain constant.
 */
export interface CurrentRewardsAmino {
    rewards?: ServicePoolAmino[];
    period?: string;
}
export interface CurrentRewardsAminoMsg {
    type: "/milkyway.rewards.v1.CurrentRewards";
    value: CurrentRewardsAmino;
}
/**
 * CurrentRewards represents current rewards and current
 * period for a delegation target kept as a running counter and incremented
 * each block as long as the delegation target's tokens remain constant.
 */
export interface CurrentRewardsSDKType {
    rewards: ServicePoolSDKType[];
    period: bigint;
}
/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a delegation target inexpensive to track, allows simple sanity checks.
 */
export interface OutstandingRewards {
    rewards: DecPool[];
}
export interface OutstandingRewardsProtoMsg {
    typeUrl: "/milkyway.rewards.v1.OutstandingRewards";
    value: Uint8Array;
}
/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a delegation target inexpensive to track, allows simple sanity checks.
 */
export interface OutstandingRewardsAmino {
    rewards?: DecPoolAmino[];
}
export interface OutstandingRewardsAminoMsg {
    type: "/milkyway.rewards.v1.OutstandingRewards";
    value: OutstandingRewardsAmino;
}
/**
 * OutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a delegation target inexpensive to track, allows simple sanity checks.
 */
export interface OutstandingRewardsSDKType {
    rewards: DecPoolSDKType[];
}
/**
 * AccumulatedCommission represents accumulated commission
 * for a delegation target kept as a running counter, can be withdrawn at any
 * time.
 */
export interface AccumulatedCommission {
    commissions: DecPool[];
}
export interface AccumulatedCommissionProtoMsg {
    typeUrl: "/milkyway.rewards.v1.AccumulatedCommission";
    value: Uint8Array;
}
/**
 * AccumulatedCommission represents accumulated commission
 * for a delegation target kept as a running counter, can be withdrawn at any
 * time.
 */
export interface AccumulatedCommissionAmino {
    commissions: DecPoolAmino[];
}
export interface AccumulatedCommissionAminoMsg {
    type: "/milkyway.rewards.v1.AccumulatedCommission";
    value: AccumulatedCommissionAmino;
}
/**
 * AccumulatedCommission represents accumulated commission
 * for a delegation target kept as a running counter, can be withdrawn at any
 * time.
 */
export interface AccumulatedCommissionSDKType {
    commissions: DecPoolSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous delegation target period, the delegation's
 * amount of staking token, and the creation height (to check later on if any
 * slashes have occurred). NOTE: Even though validators are slashed to whole
 * staking tokens, the delegators within the validator may be left with less
 * than a full token, thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
    previousPeriod: bigint;
    stakes: DecCoin[];
    height: bigint;
}
export interface DelegatorStartingInfoProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfo";
    value: Uint8Array;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous delegation target period, the delegation's
 * amount of staking token, and the creation height (to check later on if any
 * slashes have occurred). NOTE: Even though validators are slashed to whole
 * staking tokens, the delegators within the validator may be left with less
 * than a full token, thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoAmino {
    previous_period?: string;
    stakes?: DecCoinAmino[];
    height: string;
}
export interface DelegatorStartingInfoAminoMsg {
    type: "/milkyway.rewards.v1.DelegatorStartingInfo";
    value: DelegatorStartingInfoAmino;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous delegation target period, the delegation's
 * amount of staking token, and the creation height (to check later on if any
 * slashes have occurred). NOTE: Even though validators are slashed to whole
 * staking tokens, the delegators within the validator may be left with less
 * than a full token, thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoSDKType {
    previous_period: bigint;
    stakes: DecCoinSDKType[];
    height: bigint;
}
/**
 * DelegationDelegatorReward represents the properties of a delegator's
 * delegation reward. The delegator address implicit in the within the
 * query request.
 */
export interface DelegationDelegatorReward {
    delegationType: DelegationType;
    delegationTargetId: number;
    reward: DecPool[];
}
export interface DelegationDelegatorRewardProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DelegationDelegatorReward";
    value: Uint8Array;
}
/**
 * DelegationDelegatorReward represents the properties of a delegator's
 * delegation reward. The delegator address implicit in the within the
 * query request.
 */
export interface DelegationDelegatorRewardAmino {
    delegation_type?: DelegationType;
    delegation_target_id?: number;
    reward: DecPoolAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
    type: "/milkyway.rewards.v1.DelegationDelegatorReward";
    value: DelegationDelegatorRewardAmino;
}
/**
 * DelegationDelegatorReward represents the properties of a delegator's
 * delegation reward. The delegator address implicit in the within the
 * query request.
 */
export interface DelegationDelegatorRewardSDKType {
    delegation_type: DelegationType;
    delegation_target_id: number;
    reward: DecPoolSDKType[];
}
/**
 * PoolServiceTotalDelegatorShares represents the total delegator shares for a
 * pool-service pair.
 */
export interface PoolServiceTotalDelegatorShares {
    poolId: number;
    serviceId: number;
    shares: DecCoin[];
}
export interface PoolServiceTotalDelegatorSharesProtoMsg {
    typeUrl: "/milkyway.rewards.v1.PoolServiceTotalDelegatorShares";
    value: Uint8Array;
}
/**
 * PoolServiceTotalDelegatorShares represents the total delegator shares for a
 * pool-service pair.
 */
export interface PoolServiceTotalDelegatorSharesAmino {
    pool_id?: number;
    service_id?: number;
    shares?: DecCoinAmino[];
}
export interface PoolServiceTotalDelegatorSharesAminoMsg {
    type: "/milkyway.rewards.v1.PoolServiceTotalDelegatorShares";
    value: PoolServiceTotalDelegatorSharesAmino;
}
/**
 * PoolServiceTotalDelegatorShares represents the total delegator shares for a
 * pool-service pair.
 */
export interface PoolServiceTotalDelegatorSharesSDKType {
    pool_id: number;
    service_id: number;
    shares: DecCoinSDKType[];
}
/**
 * Pool is a Coins wrapper with denom which represents the rewards pool for the
 * given denom. It is used to represent the rewards associated with the denom.
 */
export interface Pool {
    denom: string;
    coins: Coin[];
}
export interface PoolProtoMsg {
    typeUrl: "/milkyway.rewards.v1.Pool";
    value: Uint8Array;
}
/**
 * Pool is a Coins wrapper with denom which represents the rewards pool for the
 * given denom. It is used to represent the rewards associated with the denom.
 */
export interface PoolAmino {
    denom?: string;
    coins?: CoinAmino[];
}
export interface PoolAminoMsg {
    type: "/milkyway.rewards.v1.Pool";
    value: PoolAmino;
}
/**
 * Pool is a Coins wrapper with denom which represents the rewards pool for the
 * given denom. It is used to represent the rewards associated with the denom.
 */
export interface PoolSDKType {
    denom: string;
    coins: CoinSDKType[];
}
/**
 * DecPool is a DecCoins wrapper with denom which represents the rewards pool
 * for the given denom. It is used to represent the rewards associated with the
 * denom.
 */
export interface DecPool {
    denom: string;
    decCoins: DecCoin[];
}
export interface DecPoolProtoMsg {
    typeUrl: "/milkyway.rewards.v1.DecPool";
    value: Uint8Array;
}
/**
 * DecPool is a DecCoins wrapper with denom which represents the rewards pool
 * for the given denom. It is used to represent the rewards associated with the
 * denom.
 */
export interface DecPoolAmino {
    denom?: string;
    dec_coins?: DecCoinAmino[];
}
export interface DecPoolAminoMsg {
    type: "/milkyway.rewards.v1.DecPool";
    value: DecPoolAmino;
}
/**
 * DecPool is a DecCoins wrapper with denom which represents the rewards pool
 * for the given denom. It is used to represent the rewards associated with the
 * denom.
 */
export interface DecPoolSDKType {
    denom: string;
    dec_coins: DecCoinSDKType[];
}
/** ServicePool represents the rewards pool for a service. */
export interface ServicePool {
    serviceId: number;
    decPools: DecPool[];
}
export interface ServicePoolProtoMsg {
    typeUrl: "/milkyway.rewards.v1.ServicePool";
    value: Uint8Array;
}
/** ServicePool represents the rewards pool for a service. */
export interface ServicePoolAmino {
    service_id?: number;
    dec_pools?: DecPoolAmino[];
}
export interface ServicePoolAminoMsg {
    type: "/milkyway.rewards.v1.ServicePool";
    value: ServicePoolAmino;
}
/** ServicePool represents the rewards pool for a service. */
export interface ServicePoolSDKType {
    service_id: number;
    dec_pools: DecPoolSDKType[];
}
export declare const RewardsPlan: {
    typeUrl: string;
    encode(message: RewardsPlan, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardsPlan;
    fromPartial(object: Partial<RewardsPlan>): RewardsPlan;
    fromAmino(object: RewardsPlanAmino): RewardsPlan;
    toAmino(message: RewardsPlan): RewardsPlanAmino;
    fromAminoMsg(object: RewardsPlanAminoMsg): RewardsPlan;
    fromProtoMsg(message: RewardsPlanProtoMsg): RewardsPlan;
    toProto(message: RewardsPlan): Uint8Array;
    toProtoMsg(message: RewardsPlan): RewardsPlanProtoMsg;
};
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
export declare const DistributionTypeBasic: {
    typeUrl: string;
    encode(_: DistributionTypeBasic, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeBasic;
    fromPartial(_: Partial<DistributionTypeBasic>): DistributionTypeBasic;
    fromAmino(_: DistributionTypeBasicAmino): DistributionTypeBasic;
    toAmino(_: DistributionTypeBasic): DistributionTypeBasicAmino;
    fromAminoMsg(object: DistributionTypeBasicAminoMsg): DistributionTypeBasic;
    fromProtoMsg(message: DistributionTypeBasicProtoMsg): DistributionTypeBasic;
    toProto(message: DistributionTypeBasic): Uint8Array;
    toProtoMsg(message: DistributionTypeBasic): DistributionTypeBasicProtoMsg;
};
export declare const DistributionTypeWeighted: {
    typeUrl: string;
    encode(message: DistributionTypeWeighted, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeWeighted;
    fromPartial(object: Partial<DistributionTypeWeighted>): DistributionTypeWeighted;
    fromAmino(object: DistributionTypeWeightedAmino): DistributionTypeWeighted;
    toAmino(message: DistributionTypeWeighted): DistributionTypeWeightedAmino;
    fromAminoMsg(object: DistributionTypeWeightedAminoMsg): DistributionTypeWeighted;
    fromProtoMsg(message: DistributionTypeWeightedProtoMsg): DistributionTypeWeighted;
    toProto(message: DistributionTypeWeighted): Uint8Array;
    toProtoMsg(message: DistributionTypeWeighted): DistributionTypeWeightedProtoMsg;
};
export declare const DistributionWeight: {
    typeUrl: string;
    encode(message: DistributionWeight, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionWeight;
    fromPartial(object: Partial<DistributionWeight>): DistributionWeight;
    fromAmino(object: DistributionWeightAmino): DistributionWeight;
    toAmino(message: DistributionWeight): DistributionWeightAmino;
    fromAminoMsg(object: DistributionWeightAminoMsg): DistributionWeight;
    fromProtoMsg(message: DistributionWeightProtoMsg): DistributionWeight;
    toProto(message: DistributionWeight): Uint8Array;
    toProtoMsg(message: DistributionWeight): DistributionWeightProtoMsg;
};
export declare const DistributionTypeEgalitarian: {
    typeUrl: string;
    encode(_: DistributionTypeEgalitarian, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeEgalitarian;
    fromPartial(_: Partial<DistributionTypeEgalitarian>): DistributionTypeEgalitarian;
    fromAmino(_: DistributionTypeEgalitarianAmino): DistributionTypeEgalitarian;
    toAmino(_: DistributionTypeEgalitarian): DistributionTypeEgalitarianAmino;
    fromAminoMsg(object: DistributionTypeEgalitarianAminoMsg): DistributionTypeEgalitarian;
    fromProtoMsg(message: DistributionTypeEgalitarianProtoMsg): DistributionTypeEgalitarian;
    toProto(message: DistributionTypeEgalitarian): Uint8Array;
    toProtoMsg(message: DistributionTypeEgalitarian): DistributionTypeEgalitarianProtoMsg;
};
export declare const UsersDistribution: {
    typeUrl: string;
    encode(message: UsersDistribution, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UsersDistribution;
    fromPartial(object: Partial<UsersDistribution>): UsersDistribution;
    fromAmino(object: UsersDistributionAmino): UsersDistribution;
    toAmino(message: UsersDistribution): UsersDistributionAmino;
    fromAminoMsg(object: UsersDistributionAminoMsg): UsersDistribution;
    fromProtoMsg(message: UsersDistributionProtoMsg): UsersDistribution;
    toProto(message: UsersDistribution): Uint8Array;
    toProtoMsg(message: UsersDistribution): UsersDistributionProtoMsg;
};
export declare const UsersDistributionTypeBasic: {
    typeUrl: string;
    encode(_: UsersDistributionTypeBasic, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UsersDistributionTypeBasic;
    fromPartial(_: Partial<UsersDistributionTypeBasic>): UsersDistributionTypeBasic;
    fromAmino(_: UsersDistributionTypeBasicAmino): UsersDistributionTypeBasic;
    toAmino(_: UsersDistributionTypeBasic): UsersDistributionTypeBasicAmino;
    fromAminoMsg(object: UsersDistributionTypeBasicAminoMsg): UsersDistributionTypeBasic;
    fromProtoMsg(message: UsersDistributionTypeBasicProtoMsg): UsersDistributionTypeBasic;
    toProto(message: UsersDistributionTypeBasic): Uint8Array;
    toProtoMsg(message: UsersDistributionTypeBasic): UsersDistributionTypeBasicProtoMsg;
};
export declare const HistoricalRewards: {
    typeUrl: string;
    encode(message: HistoricalRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HistoricalRewards;
    fromPartial(object: Partial<HistoricalRewards>): HistoricalRewards;
    fromAmino(object: HistoricalRewardsAmino): HistoricalRewards;
    toAmino(message: HistoricalRewards): HistoricalRewardsAmino;
    fromAminoMsg(object: HistoricalRewardsAminoMsg): HistoricalRewards;
    fromProtoMsg(message: HistoricalRewardsProtoMsg): HistoricalRewards;
    toProto(message: HistoricalRewards): Uint8Array;
    toProtoMsg(message: HistoricalRewards): HistoricalRewardsProtoMsg;
};
export declare const CurrentRewards: {
    typeUrl: string;
    encode(message: CurrentRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrentRewards;
    fromPartial(object: Partial<CurrentRewards>): CurrentRewards;
    fromAmino(object: CurrentRewardsAmino): CurrentRewards;
    toAmino(message: CurrentRewards): CurrentRewardsAmino;
    fromAminoMsg(object: CurrentRewardsAminoMsg): CurrentRewards;
    fromProtoMsg(message: CurrentRewardsProtoMsg): CurrentRewards;
    toProto(message: CurrentRewards): Uint8Array;
    toProtoMsg(message: CurrentRewards): CurrentRewardsProtoMsg;
};
export declare const OutstandingRewards: {
    typeUrl: string;
    encode(message: OutstandingRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OutstandingRewards;
    fromPartial(object: Partial<OutstandingRewards>): OutstandingRewards;
    fromAmino(object: OutstandingRewardsAmino): OutstandingRewards;
    toAmino(message: OutstandingRewards): OutstandingRewardsAmino;
    fromAminoMsg(object: OutstandingRewardsAminoMsg): OutstandingRewards;
    fromProtoMsg(message: OutstandingRewardsProtoMsg): OutstandingRewards;
    toProto(message: OutstandingRewards): Uint8Array;
    toProtoMsg(message: OutstandingRewards): OutstandingRewardsProtoMsg;
};
export declare const AccumulatedCommission: {
    typeUrl: string;
    encode(message: AccumulatedCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccumulatedCommission;
    fromPartial(object: Partial<AccumulatedCommission>): AccumulatedCommission;
    fromAmino(object: AccumulatedCommissionAmino): AccumulatedCommission;
    toAmino(message: AccumulatedCommission): AccumulatedCommissionAmino;
    fromAminoMsg(object: AccumulatedCommissionAminoMsg): AccumulatedCommission;
    fromProtoMsg(message: AccumulatedCommissionProtoMsg): AccumulatedCommission;
    toProto(message: AccumulatedCommission): Uint8Array;
    toProtoMsg(message: AccumulatedCommission): AccumulatedCommissionProtoMsg;
};
export declare const DelegatorStartingInfo: {
    typeUrl: string;
    encode(message: DelegatorStartingInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfo;
    fromPartial(object: Partial<DelegatorStartingInfo>): DelegatorStartingInfo;
    fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo;
    toAmino(message: DelegatorStartingInfo): DelegatorStartingInfoAmino;
    fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo;
    fromProtoMsg(message: DelegatorStartingInfoProtoMsg): DelegatorStartingInfo;
    toProto(message: DelegatorStartingInfo): Uint8Array;
    toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg;
};
export declare const DelegationDelegatorReward: {
    typeUrl: string;
    encode(message: DelegationDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationDelegatorReward;
    fromPartial(object: Partial<DelegationDelegatorReward>): DelegationDelegatorReward;
    fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward;
    toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino;
    fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward;
    fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward;
    toProto(message: DelegationDelegatorReward): Uint8Array;
    toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg;
};
export declare const PoolServiceTotalDelegatorShares: {
    typeUrl: string;
    encode(message: PoolServiceTotalDelegatorShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolServiceTotalDelegatorShares;
    fromPartial(object: Partial<PoolServiceTotalDelegatorShares>): PoolServiceTotalDelegatorShares;
    fromAmino(object: PoolServiceTotalDelegatorSharesAmino): PoolServiceTotalDelegatorShares;
    toAmino(message: PoolServiceTotalDelegatorShares): PoolServiceTotalDelegatorSharesAmino;
    fromAminoMsg(object: PoolServiceTotalDelegatorSharesAminoMsg): PoolServiceTotalDelegatorShares;
    fromProtoMsg(message: PoolServiceTotalDelegatorSharesProtoMsg): PoolServiceTotalDelegatorShares;
    toProto(message: PoolServiceTotalDelegatorShares): Uint8Array;
    toProtoMsg(message: PoolServiceTotalDelegatorShares): PoolServiceTotalDelegatorSharesProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const DecPool: {
    typeUrl: string;
    encode(message: DecPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecPool;
    fromPartial(object: Partial<DecPool>): DecPool;
    fromAmino(object: DecPoolAmino): DecPool;
    toAmino(message: DecPool): DecPoolAmino;
    fromAminoMsg(object: DecPoolAminoMsg): DecPool;
    fromProtoMsg(message: DecPoolProtoMsg): DecPool;
    toProto(message: DecPool): Uint8Array;
    toProtoMsg(message: DecPool): DecPoolProtoMsg;
};
export declare const ServicePool: {
    typeUrl: string;
    encode(message: ServicePool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServicePool;
    fromPartial(object: Partial<ServicePool>): ServicePool;
    fromAmino(object: ServicePoolAmino): ServicePool;
    toAmino(message: ServicePool): ServicePoolAmino;
    fromAminoMsg(object: ServicePoolAminoMsg): ServicePool;
    fromProtoMsg(message: ServicePoolProtoMsg): ServicePool;
    toProto(message: ServicePool): Uint8Array;
    toProtoMsg(message: ServicePool): ServicePoolProtoMsg;
};
export declare const Milkyway_rewardsv1DistributionType_InterfaceDecoder: (input: BinaryReader | Uint8Array) => DistributionTypeBasic | DistributionTypeWeighted | DistributionTypeEgalitarian | Any;
export declare const Milkyway_rewardsv1DistributionType_FromAmino: (content: AnyAmino) => Any;
export declare const Milkyway_rewardsv1DistributionType_ToAmino: (content: Any) => AnyAmino;
export declare const Milkyway_rewardsv1UsersDistributionType_InterfaceDecoder: (input: BinaryReader | Uint8Array) => UsersDistributionTypeBasic | Any;
export declare const Milkyway_rewardsv1UsersDistributionType_FromAmino: (content: AnyAmino) => Any;
export declare const Milkyway_rewardsv1UsersDistributionType_ToAmino: (content: Any) => AnyAmino;
