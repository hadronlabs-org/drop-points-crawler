import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { DelegationType } from "../../restaking/v1/models";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  /** Type is one of basic/weighted/egalitarian distributions. */type?: DistributionTypeBasicProtoMsg | DistributionTypeWeightedProtoMsg | DistributionTypeEgalitarianProtoMsg | AnyProtoMsg | undefined;
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
export interface DistributionTypeBasicAmino {}
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
export interface DistributionTypeEgalitarianAmino {}
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
export interface UsersDistributionTypeBasicAmino {}
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
function createBaseRewardsPlan(): RewardsPlan {
  return {
    id: BigInt(0),
    description: "",
    serviceId: 0,
    amountPerDay: [],
    startTime: new Date(),
    endTime: new Date(),
    rewardsPool: "",
    poolsDistribution: Distribution.fromPartial({}),
    operatorsDistribution: Distribution.fromPartial({}),
    usersDistribution: UsersDistribution.fromPartial({})
  };
}
export const RewardsPlan = {
  typeUrl: "/milkyway.rewards.v1.RewardsPlan",
  encode(message: RewardsPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    for (const v of message.amountPerDay) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.rewardsPool !== "") {
      writer.uint32(58).string(message.rewardsPool);
    }
    if (message.poolsDistribution !== undefined) {
      Distribution.encode(message.poolsDistribution, writer.uint32(66).fork()).ldelim();
    }
    if (message.operatorsDistribution !== undefined) {
      Distribution.encode(message.operatorsDistribution, writer.uint32(74).fork()).ldelim();
    }
    if (message.usersDistribution !== undefined) {
      UsersDistribution.encode(message.usersDistribution, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsPlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.serviceId = reader.uint32();
          break;
        case 4:
          message.amountPerDay.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.rewardsPool = reader.string();
          break;
        case 8:
          message.poolsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 9:
          message.operatorsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 10:
          message.usersDistribution = UsersDistribution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RewardsPlan>): RewardsPlan {
    const message = createBaseRewardsPlan();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.amountPerDay = object.amountPerDay?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.rewardsPool = object.rewardsPool ?? "";
    message.poolsDistribution = object.poolsDistribution !== undefined && object.poolsDistribution !== null ? Distribution.fromPartial(object.poolsDistribution) : undefined;
    message.operatorsDistribution = object.operatorsDistribution !== undefined && object.operatorsDistribution !== null ? Distribution.fromPartial(object.operatorsDistribution) : undefined;
    message.usersDistribution = object.usersDistribution !== undefined && object.usersDistribution !== null ? UsersDistribution.fromPartial(object.usersDistribution) : undefined;
    return message;
  },
  fromAmino(object: RewardsPlanAmino): RewardsPlan {
    const message = createBaseRewardsPlan();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.amountPerDay = object.amount_per_day?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    if (object.rewards_pool !== undefined && object.rewards_pool !== null) {
      message.rewardsPool = object.rewards_pool;
    }
    if (object.pools_distribution !== undefined && object.pools_distribution !== null) {
      message.poolsDistribution = Distribution.fromAmino(object.pools_distribution);
    }
    if (object.operators_distribution !== undefined && object.operators_distribution !== null) {
      message.operatorsDistribution = Distribution.fromAmino(object.operators_distribution);
    }
    if (object.users_distribution !== undefined && object.users_distribution !== null) {
      message.usersDistribution = UsersDistribution.fromAmino(object.users_distribution);
    }
    return message;
  },
  toAmino(message: RewardsPlan): RewardsPlanAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.amountPerDay) {
      obj.amount_per_day = message.amountPerDay.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount_per_day = message.amountPerDay;
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.rewards_pool = message.rewardsPool === "" ? undefined : message.rewardsPool;
    obj.pools_distribution = message.poolsDistribution ? Distribution.toAmino(message.poolsDistribution) : undefined;
    obj.operators_distribution = message.operatorsDistribution ? Distribution.toAmino(message.operatorsDistribution) : undefined;
    obj.users_distribution = message.usersDistribution ? UsersDistribution.toAmino(message.usersDistribution) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardsPlanAminoMsg): RewardsPlan {
    return RewardsPlan.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsPlanProtoMsg): RewardsPlan {
    return RewardsPlan.decode(message.value);
  },
  toProto(message: RewardsPlan): Uint8Array {
    return RewardsPlan.encode(message).finish();
  },
  toProtoMsg(message: RewardsPlan): RewardsPlanProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.RewardsPlan",
      value: RewardsPlan.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    delegationType: 0,
    weight: 0,
    type: undefined
  };
}
export const Distribution = {
  typeUrl: "/milkyway.rewards.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationType !== 0) {
      writer.uint32(8).int32(message.delegationType);
    }
    if (message.weight !== 0) {
      writer.uint32(16).uint32(message.weight);
    }
    if (message.type !== undefined) {
      Any.encode(message.type as Any, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationType = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.uint32();
          break;
        case 3:
          message.type = Milkyway_rewardsv1DistributionType_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.delegationType = object.delegationType ?? 0;
    message.weight = object.weight ?? 0;
    message.type = object.type !== undefined && object.type !== null ? Any.fromPartial(object.type) : undefined;
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.delegation_type !== undefined && object.delegation_type !== null) {
      message.delegationType = object.delegation_type;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = Milkyway_rewardsv1DistributionType_FromAmino(object.type);
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.delegation_type = message.delegationType === 0 ? undefined : message.delegationType;
    obj.weight = message.weight === 0 ? undefined : message.weight;
    obj.type = message.type ? Milkyway_rewardsv1DistributionType_ToAmino(message.type as Any) : undefined;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};
function createBaseDistributionTypeBasic(): DistributionTypeBasic {
  return {
    $typeUrl: "/milkyway.rewards.v1.DistributionTypeBasic"
  };
}
export const DistributionTypeBasic = {
  typeUrl: "/milkyway.rewards.v1.DistributionTypeBasic",
  encode(_: DistributionTypeBasic, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeBasic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionTypeBasic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<DistributionTypeBasic>): DistributionTypeBasic {
    const message = createBaseDistributionTypeBasic();
    return message;
  },
  fromAmino(_: DistributionTypeBasicAmino): DistributionTypeBasic {
    const message = createBaseDistributionTypeBasic();
    return message;
  },
  toAmino(_: DistributionTypeBasic): DistributionTypeBasicAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DistributionTypeBasicAminoMsg): DistributionTypeBasic {
    return DistributionTypeBasic.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionTypeBasicProtoMsg): DistributionTypeBasic {
    return DistributionTypeBasic.decode(message.value);
  },
  toProto(message: DistributionTypeBasic): Uint8Array {
    return DistributionTypeBasic.encode(message).finish();
  },
  toProtoMsg(message: DistributionTypeBasic): DistributionTypeBasicProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DistributionTypeBasic",
      value: DistributionTypeBasic.encode(message).finish()
    };
  }
};
function createBaseDistributionTypeWeighted(): DistributionTypeWeighted {
  return {
    $typeUrl: "/milkyway.rewards.v1.DistributionTypeWeighted",
    weights: []
  };
}
export const DistributionTypeWeighted = {
  typeUrl: "/milkyway.rewards.v1.DistributionTypeWeighted",
  encode(message: DistributionTypeWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.weights) {
      DistributionWeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeWeighted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionTypeWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weights.push(DistributionWeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DistributionTypeWeighted>): DistributionTypeWeighted {
    const message = createBaseDistributionTypeWeighted();
    message.weights = object.weights?.map(e => DistributionWeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DistributionTypeWeightedAmino): DistributionTypeWeighted {
    const message = createBaseDistributionTypeWeighted();
    message.weights = object.weights?.map(e => DistributionWeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DistributionTypeWeighted): DistributionTypeWeightedAmino {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map(e => e ? DistributionWeight.toAmino(e) : undefined);
    } else {
      obj.weights = message.weights;
    }
    return obj;
  },
  fromAminoMsg(object: DistributionTypeWeightedAminoMsg): DistributionTypeWeighted {
    return DistributionTypeWeighted.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionTypeWeightedProtoMsg): DistributionTypeWeighted {
    return DistributionTypeWeighted.decode(message.value);
  },
  toProto(message: DistributionTypeWeighted): Uint8Array {
    return DistributionTypeWeighted.encode(message).finish();
  },
  toProtoMsg(message: DistributionTypeWeighted): DistributionTypeWeightedProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DistributionTypeWeighted",
      value: DistributionTypeWeighted.encode(message).finish()
    };
  }
};
function createBaseDistributionWeight(): DistributionWeight {
  return {
    delegationTargetId: 0,
    weight: 0
  };
}
export const DistributionWeight = {
  typeUrl: "/milkyway.rewards.v1.DistributionWeight",
  encode(message: DistributionWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationTargetId !== 0) {
      writer.uint32(8).uint32(message.delegationTargetId);
    }
    if (message.weight !== 0) {
      writer.uint32(16).uint32(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionWeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationTargetId = reader.uint32();
          break;
        case 2:
          message.weight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DistributionWeight>): DistributionWeight {
    const message = createBaseDistributionWeight();
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.weight = object.weight ?? 0;
    return message;
  },
  fromAmino(object: DistributionWeightAmino): DistributionWeight {
    const message = createBaseDistributionWeight();
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: DistributionWeight): DistributionWeightAmino {
    const obj: any = {};
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    obj.weight = message.weight === 0 ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: DistributionWeightAminoMsg): DistributionWeight {
    return DistributionWeight.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionWeightProtoMsg): DistributionWeight {
    return DistributionWeight.decode(message.value);
  },
  toProto(message: DistributionWeight): Uint8Array {
    return DistributionWeight.encode(message).finish();
  },
  toProtoMsg(message: DistributionWeight): DistributionWeightProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DistributionWeight",
      value: DistributionWeight.encode(message).finish()
    };
  }
};
function createBaseDistributionTypeEgalitarian(): DistributionTypeEgalitarian {
  return {
    $typeUrl: "/milkyway.rewards.v1.DistributionTypeEgalitarian"
  };
}
export const DistributionTypeEgalitarian = {
  typeUrl: "/milkyway.rewards.v1.DistributionTypeEgalitarian",
  encode(_: DistributionTypeEgalitarian, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionTypeEgalitarian {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionTypeEgalitarian();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<DistributionTypeEgalitarian>): DistributionTypeEgalitarian {
    const message = createBaseDistributionTypeEgalitarian();
    return message;
  },
  fromAmino(_: DistributionTypeEgalitarianAmino): DistributionTypeEgalitarian {
    const message = createBaseDistributionTypeEgalitarian();
    return message;
  },
  toAmino(_: DistributionTypeEgalitarian): DistributionTypeEgalitarianAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DistributionTypeEgalitarianAminoMsg): DistributionTypeEgalitarian {
    return DistributionTypeEgalitarian.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionTypeEgalitarianProtoMsg): DistributionTypeEgalitarian {
    return DistributionTypeEgalitarian.decode(message.value);
  },
  toProto(message: DistributionTypeEgalitarian): Uint8Array {
    return DistributionTypeEgalitarian.encode(message).finish();
  },
  toProtoMsg(message: DistributionTypeEgalitarian): DistributionTypeEgalitarianProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DistributionTypeEgalitarian",
      value: DistributionTypeEgalitarian.encode(message).finish()
    };
  }
};
function createBaseUsersDistribution(): UsersDistribution {
  return {
    weight: 0,
    type: undefined
  };
}
export const UsersDistribution = {
  typeUrl: "/milkyway.rewards.v1.UsersDistribution",
  encode(message: UsersDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.weight !== 0) {
      writer.uint32(8).uint32(message.weight);
    }
    if (message.type !== undefined) {
      Any.encode(message.type as Any, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UsersDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsersDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.uint32();
          break;
        case 2:
          message.type = Milkyway_rewardsv1UsersDistributionType_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UsersDistribution>): UsersDistribution {
    const message = createBaseUsersDistribution();
    message.weight = object.weight ?? 0;
    message.type = object.type !== undefined && object.type !== null ? Any.fromPartial(object.type) : undefined;
    return message;
  },
  fromAmino(object: UsersDistributionAmino): UsersDistribution {
    const message = createBaseUsersDistribution();
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = Milkyway_rewardsv1UsersDistributionType_FromAmino(object.type);
    }
    return message;
  },
  toAmino(message: UsersDistribution): UsersDistributionAmino {
    const obj: any = {};
    obj.weight = message.weight === 0 ? undefined : message.weight;
    obj.type = message.type ? Milkyway_rewardsv1UsersDistributionType_ToAmino(message.type as Any) : undefined;
    return obj;
  },
  fromAminoMsg(object: UsersDistributionAminoMsg): UsersDistribution {
    return UsersDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: UsersDistributionProtoMsg): UsersDistribution {
    return UsersDistribution.decode(message.value);
  },
  toProto(message: UsersDistribution): Uint8Array {
    return UsersDistribution.encode(message).finish();
  },
  toProtoMsg(message: UsersDistribution): UsersDistributionProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.UsersDistribution",
      value: UsersDistribution.encode(message).finish()
    };
  }
};
function createBaseUsersDistributionTypeBasic(): UsersDistributionTypeBasic {
  return {
    $typeUrl: "/milkyway.rewards.v1.UsersDistributionTypeBasic"
  };
}
export const UsersDistributionTypeBasic = {
  typeUrl: "/milkyway.rewards.v1.UsersDistributionTypeBasic",
  encode(_: UsersDistributionTypeBasic, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UsersDistributionTypeBasic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsersDistributionTypeBasic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<UsersDistributionTypeBasic>): UsersDistributionTypeBasic {
    const message = createBaseUsersDistributionTypeBasic();
    return message;
  },
  fromAmino(_: UsersDistributionTypeBasicAmino): UsersDistributionTypeBasic {
    const message = createBaseUsersDistributionTypeBasic();
    return message;
  },
  toAmino(_: UsersDistributionTypeBasic): UsersDistributionTypeBasicAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: UsersDistributionTypeBasicAminoMsg): UsersDistributionTypeBasic {
    return UsersDistributionTypeBasic.fromAmino(object.value);
  },
  fromProtoMsg(message: UsersDistributionTypeBasicProtoMsg): UsersDistributionTypeBasic {
    return UsersDistributionTypeBasic.decode(message.value);
  },
  toProto(message: UsersDistributionTypeBasic): Uint8Array {
    return UsersDistributionTypeBasic.encode(message).finish();
  },
  toProtoMsg(message: UsersDistributionTypeBasic): UsersDistributionTypeBasicProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.UsersDistributionTypeBasic",
      value: UsersDistributionTypeBasic.encode(message).finish()
    };
  }
};
function createBaseHistoricalRewards(): HistoricalRewards {
  return {
    cumulativeRewardRatios: [],
    referenceCount: 0
  };
}
export const HistoricalRewards = {
  typeUrl: "/milkyway.rewards.v1.HistoricalRewards",
  encode(message: HistoricalRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cumulativeRewardRatios) {
      ServicePool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HistoricalRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatios.push(ServicePool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HistoricalRewards>): HistoricalRewards {
    const message = createBaseHistoricalRewards();
    message.cumulativeRewardRatios = object.cumulativeRewardRatios?.map(e => ServicePool.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
  fromAmino(object: HistoricalRewardsAmino): HistoricalRewards {
    const message = createBaseHistoricalRewards();
    message.cumulativeRewardRatios = object.cumulative_reward_ratios?.map(e => ServicePool.fromAmino(e)) || [];
    if (object.reference_count !== undefined && object.reference_count !== null) {
      message.referenceCount = object.reference_count;
    }
    return message;
  },
  toAmino(message: HistoricalRewards): HistoricalRewardsAmino {
    const obj: any = {};
    if (message.cumulativeRewardRatios) {
      obj.cumulative_reward_ratios = message.cumulativeRewardRatios.map(e => e ? ServicePool.toAmino(e) : undefined);
    } else {
      obj.cumulative_reward_ratios = message.cumulativeRewardRatios;
    }
    obj.reference_count = message.referenceCount === 0 ? undefined : message.referenceCount;
    return obj;
  },
  fromAminoMsg(object: HistoricalRewardsAminoMsg): HistoricalRewards {
    return HistoricalRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: HistoricalRewardsProtoMsg): HistoricalRewards {
    return HistoricalRewards.decode(message.value);
  },
  toProto(message: HistoricalRewards): Uint8Array {
    return HistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message: HistoricalRewards): HistoricalRewardsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.HistoricalRewards",
      value: HistoricalRewards.encode(message).finish()
    };
  }
};
function createBaseCurrentRewards(): CurrentRewards {
  return {
    rewards: [],
    period: BigInt(0)
  };
}
export const CurrentRewards = {
  typeUrl: "/milkyway.rewards.v1.CurrentRewards",
  encode(message: CurrentRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      ServicePool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(ServicePool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CurrentRewards>): CurrentRewards {
    const message = createBaseCurrentRewards();
    message.rewards = object.rewards?.map(e => ServicePool.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CurrentRewardsAmino): CurrentRewards {
    const message = createBaseCurrentRewards();
    message.rewards = object.rewards?.map(e => ServicePool.fromAmino(e)) || [];
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period);
    }
    return message;
  },
  toAmino(message: CurrentRewards): CurrentRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? ServicePool.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.period = message.period !== BigInt(0) ? message.period?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CurrentRewardsAminoMsg): CurrentRewards {
    return CurrentRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentRewardsProtoMsg): CurrentRewards {
    return CurrentRewards.decode(message.value);
  },
  toProto(message: CurrentRewards): Uint8Array {
    return CurrentRewards.encode(message).finish();
  },
  toProtoMsg(message: CurrentRewards): CurrentRewardsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.CurrentRewards",
      value: CurrentRewards.encode(message).finish()
    };
  }
};
function createBaseOutstandingRewards(): OutstandingRewards {
  return {
    rewards: []
  };
}
export const OutstandingRewards = {
  typeUrl: "/milkyway.rewards.v1.OutstandingRewards",
  encode(message: OutstandingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutstandingRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OutstandingRewards>): OutstandingRewards {
    const message = createBaseOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OutstandingRewardsAmino): OutstandingRewards {
    const message = createBaseOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OutstandingRewards): OutstandingRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: OutstandingRewardsAminoMsg): OutstandingRewards {
    return OutstandingRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: OutstandingRewardsProtoMsg): OutstandingRewards {
    return OutstandingRewards.decode(message.value);
  },
  toProto(message: OutstandingRewards): Uint8Array {
    return OutstandingRewards.encode(message).finish();
  },
  toProtoMsg(message: OutstandingRewards): OutstandingRewardsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.OutstandingRewards",
      value: OutstandingRewards.encode(message).finish()
    };
  }
};
function createBaseAccumulatedCommission(): AccumulatedCommission {
  return {
    commissions: []
  };
}
export const AccumulatedCommission = {
  typeUrl: "/milkyway.rewards.v1.AccumulatedCommission",
  encode(message: AccumulatedCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commissions) {
      DecPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccumulatedCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissions.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccumulatedCommission>): AccumulatedCommission {
    const message = createBaseAccumulatedCommission();
    message.commissions = object.commissions?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccumulatedCommissionAmino): AccumulatedCommission {
    const message = createBaseAccumulatedCommission();
    message.commissions = object.commissions?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccumulatedCommission): AccumulatedCommissionAmino {
    const obj: any = {};
    if (message.commissions) {
      obj.commissions = message.commissions.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.commissions = message.commissions;
    }
    return obj;
  },
  fromAminoMsg(object: AccumulatedCommissionAminoMsg): AccumulatedCommission {
    return AccumulatedCommission.fromAmino(object.value);
  },
  fromProtoMsg(message: AccumulatedCommissionProtoMsg): AccumulatedCommission {
    return AccumulatedCommission.decode(message.value);
  },
  toProto(message: AccumulatedCommission): Uint8Array {
    return AccumulatedCommission.encode(message).finish();
  },
  toProtoMsg(message: AccumulatedCommission): AccumulatedCommissionProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.AccumulatedCommission",
      value: AccumulatedCommission.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previousPeriod: BigInt(0),
    stakes: [],
    height: BigInt(0)
  };
}
export const DelegatorStartingInfo = {
  typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfo",
  encode(message: DelegatorStartingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.previousPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    for (const v of message.stakes) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64();
          break;
        case 2:
          message.stakes.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? BigInt(object.previousPeriod.toString()) : BigInt(0);
    message.stakes = object.stakes?.map(e => DecCoin.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    if (object.previous_period !== undefined && object.previous_period !== null) {
      message.previousPeriod = BigInt(object.previous_period);
    }
    message.stakes = object.stakes?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: DelegatorStartingInfo): DelegatorStartingInfoAmino {
    const obj: any = {};
    obj.previous_period = message.previousPeriod !== BigInt(0) ? message.previousPeriod?.toString() : undefined;
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.stakes = message.stakes;
    }
    obj.height = message.height ? message.height?.toString() : "0";
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorStartingInfoProtoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.decode(message.value);
  },
  toProto(message: DelegatorStartingInfo): Uint8Array {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    delegationType: 0,
    delegationTargetId: 0,
    reward: []
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/milkyway.rewards.v1.DelegationDelegatorReward",
  encode(message: DelegationDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationType !== 0) {
      writer.uint32(8).int32(message.delegationType);
    }
    if (message.delegationTargetId !== 0) {
      writer.uint32(16).uint32(message.delegationTargetId);
    }
    for (const v of message.reward) {
      DecPool.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationType = reader.int32() as any;
          break;
        case 2:
          message.delegationTargetId = reader.uint32();
          break;
        case 3:
          message.reward.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.delegationType = object.delegationType ?? 0;
    message.delegationTargetId = object.delegationTargetId ?? 0;
    message.reward = object.reward?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    if (object.delegation_type !== undefined && object.delegation_type !== null) {
      message.delegationType = object.delegation_type;
    }
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    message.reward = object.reward?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino {
    const obj: any = {};
    obj.delegation_type = message.delegationType === 0 ? undefined : message.delegationType;
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto(message: DelegationDelegatorReward): Uint8Array {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
function createBasePoolServiceTotalDelegatorShares(): PoolServiceTotalDelegatorShares {
  return {
    poolId: 0,
    serviceId: 0,
    shares: []
  };
}
export const PoolServiceTotalDelegatorShares = {
  typeUrl: "/milkyway.rewards.v1.PoolServiceTotalDelegatorShares",
  encode(message: PoolServiceTotalDelegatorShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint32(message.poolId);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    for (const v of message.shares) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolServiceTotalDelegatorShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolServiceTotalDelegatorShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint32();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.shares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PoolServiceTotalDelegatorShares>): PoolServiceTotalDelegatorShares {
    const message = createBasePoolServiceTotalDelegatorShares();
    message.poolId = object.poolId ?? 0;
    message.serviceId = object.serviceId ?? 0;
    message.shares = object.shares?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolServiceTotalDelegatorSharesAmino): PoolServiceTotalDelegatorShares {
    const message = createBasePoolServiceTotalDelegatorShares();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.shares = object.shares?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolServiceTotalDelegatorShares): PoolServiceTotalDelegatorSharesAmino {
    const obj: any = {};
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.shares = message.shares;
    }
    return obj;
  },
  fromAminoMsg(object: PoolServiceTotalDelegatorSharesAminoMsg): PoolServiceTotalDelegatorShares {
    return PoolServiceTotalDelegatorShares.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolServiceTotalDelegatorSharesProtoMsg): PoolServiceTotalDelegatorShares {
    return PoolServiceTotalDelegatorShares.decode(message.value);
  },
  toProto(message: PoolServiceTotalDelegatorShares): Uint8Array {
    return PoolServiceTotalDelegatorShares.encode(message).finish();
  },
  toProtoMsg(message: PoolServiceTotalDelegatorShares): PoolServiceTotalDelegatorSharesProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.PoolServiceTotalDelegatorShares",
      value: PoolServiceTotalDelegatorShares.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    denom: "",
    coins: []
  };
}
export const Pool = {
  typeUrl: "/milkyway.rewards.v1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.denom = object.denom ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseDecPool(): DecPool {
  return {
    denom: "",
    decCoins: []
  };
}
export const DecPool = {
  typeUrl: "/milkyway.rewards.v1.DecPool",
  encode(message: DecPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.decCoins) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.decCoins.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DecPool>): DecPool {
    const message = createBaseDecPool();
    message.denom = object.denom ?? "";
    message.decCoins = object.decCoins?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DecPoolAmino): DecPool {
    const message = createBaseDecPool();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.decCoins = object.dec_coins?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DecPool): DecPoolAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.decCoins) {
      obj.dec_coins = message.decCoins.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.dec_coins = message.decCoins;
    }
    return obj;
  },
  fromAminoMsg(object: DecPoolAminoMsg): DecPool {
    return DecPool.fromAmino(object.value);
  },
  fromProtoMsg(message: DecPoolProtoMsg): DecPool {
    return DecPool.decode(message.value);
  },
  toProto(message: DecPool): Uint8Array {
    return DecPool.encode(message).finish();
  },
  toProtoMsg(message: DecPool): DecPoolProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.DecPool",
      value: DecPool.encode(message).finish()
    };
  }
};
function createBaseServicePool(): ServicePool {
  return {
    serviceId: 0,
    decPools: []
  };
}
export const ServicePool = {
  typeUrl: "/milkyway.rewards.v1.ServicePool",
  encode(message: ServicePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    for (const v of message.decPools) {
      DecPool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServicePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServicePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        case 2:
          message.decPools.push(DecPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServicePool>): ServicePool {
    const message = createBaseServicePool();
    message.serviceId = object.serviceId ?? 0;
    message.decPools = object.decPools?.map(e => DecPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServicePoolAmino): ServicePool {
    const message = createBaseServicePool();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.decPools = object.dec_pools?.map(e => DecPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServicePool): ServicePoolAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.decPools) {
      obj.dec_pools = message.decPools.map(e => e ? DecPool.toAmino(e) : undefined);
    } else {
      obj.dec_pools = message.decPools;
    }
    return obj;
  },
  fromAminoMsg(object: ServicePoolAminoMsg): ServicePool {
    return ServicePool.fromAmino(object.value);
  },
  fromProtoMsg(message: ServicePoolProtoMsg): ServicePool {
    return ServicePool.decode(message.value);
  },
  toProto(message: ServicePool): Uint8Array {
    return ServicePool.encode(message).finish();
  },
  toProtoMsg(message: ServicePool): ServicePoolProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.ServicePool",
      value: ServicePool.encode(message).finish()
    };
  }
};
export const Milkyway_rewardsv1DistributionType_InterfaceDecoder = (input: BinaryReader | Uint8Array): DistributionTypeBasic | DistributionTypeWeighted | DistributionTypeEgalitarian | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/milkyway.rewards.v1.DistributionTypeBasic":
      return DistributionTypeBasic.decode(data.value);
    case "/milkyway.rewards.v1.DistributionTypeWeighted":
      return DistributionTypeWeighted.decode(data.value);
    case "/milkyway.rewards.v1.DistributionTypeEgalitarian":
      return DistributionTypeEgalitarian.decode(data.value);
    default:
      return data;
  }
};
export const Milkyway_rewardsv1DistributionType_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/milkyway.rewards.v1.DistributionTypeBasic":
      return Any.fromPartial({
        typeUrl: "/milkyway.rewards.v1.DistributionTypeBasic",
        value: DistributionTypeBasic.encode(DistributionTypeBasic.fromPartial(DistributionTypeBasic.fromAmino(content.value))).finish()
      });
    case "/milkyway.rewards.v1.DistributionTypeWeighted":
      return Any.fromPartial({
        typeUrl: "/milkyway.rewards.v1.DistributionTypeWeighted",
        value: DistributionTypeWeighted.encode(DistributionTypeWeighted.fromPartial(DistributionTypeWeighted.fromAmino(content.value))).finish()
      });
    case "/milkyway.rewards.v1.DistributionTypeEgalitarian":
      return Any.fromPartial({
        typeUrl: "/milkyway.rewards.v1.DistributionTypeEgalitarian",
        value: DistributionTypeEgalitarian.encode(DistributionTypeEgalitarian.fromPartial(DistributionTypeEgalitarian.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Milkyway_rewardsv1DistributionType_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/milkyway.rewards.v1.DistributionTypeBasic":
      return {
        type: "/milkyway.rewards.v1.DistributionTypeBasic",
        value: DistributionTypeBasic.toAmino(DistributionTypeBasic.decode(content.value, undefined))
      };
    case "/milkyway.rewards.v1.DistributionTypeWeighted":
      return {
        type: "/milkyway.rewards.v1.DistributionTypeWeighted",
        value: DistributionTypeWeighted.toAmino(DistributionTypeWeighted.decode(content.value, undefined))
      };
    case "/milkyway.rewards.v1.DistributionTypeEgalitarian":
      return {
        type: "/milkyway.rewards.v1.DistributionTypeEgalitarian",
        value: DistributionTypeEgalitarian.toAmino(DistributionTypeEgalitarian.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};
export const Milkyway_rewardsv1UsersDistributionType_InterfaceDecoder = (input: BinaryReader | Uint8Array): UsersDistributionTypeBasic | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/milkyway.rewards.v1.UsersDistributionTypeBasic":
      return UsersDistributionTypeBasic.decode(data.value);
    default:
      return data;
  }
};
export const Milkyway_rewardsv1UsersDistributionType_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "/milkyway.rewards.v1.UsersDistributionTypeBasic":
      return Any.fromPartial({
        typeUrl: "/milkyway.rewards.v1.UsersDistributionTypeBasic",
        value: UsersDistributionTypeBasic.encode(UsersDistributionTypeBasic.fromPartial(UsersDistributionTypeBasic.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Milkyway_rewardsv1UsersDistributionType_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/milkyway.rewards.v1.UsersDistributionTypeBasic":
      return {
        type: "/milkyway.rewards.v1.UsersDistributionTypeBasic",
        value: UsersDistributionTypeBasic.toAmino(UsersDistributionTypeBasic.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};