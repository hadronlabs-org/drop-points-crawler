import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Distribution, DistributionAmino, DistributionSDKType, UsersDistribution, UsersDistributionAmino, UsersDistributionSDKType } from "./models";
import { DelegationType } from "../../restaking/v1/models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgCreateRewardsPlan defines the message structure for the
 * CreateRewardsPlan gRPC service method. It allows an account to create a
 * new rewards plan. It requires a sender address as well as the details of
 * the plan to be created.
 */
export interface MsgCreateRewardsPlan {
    /** Sender is the address of the user creating the rewards plan */
    sender: string;
    description: string;
    serviceId: number;
    /** Amount is the amount of rewards to be distributed. */
    amount: Coin[];
    /** StartTime is the starting time of the plan. */
    startTime: Date;
    /** EndTime is the ending time of the plan. */
    endTime: Date;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    poolsDistribution: Distribution;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operatorsDistribution: Distribution;
    /**
     * UsersDistribution is the rewards distribution parameters for users who
     * delegated directly to the service.
     */
    usersDistribution: UsersDistribution;
    /**
     * FeeAmount represents the fees that are going to be paid to create the
     * rewards plan. These should always be greater or equals of any of the coins
     * specified inside the RewardsPlanCreationFee field of the modules params.
     * If no fees are specified inside the module parameters, this field can be
     * omitted.
     */
    feeAmount: Coin[];
}
export interface MsgCreateRewardsPlanProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan";
    value: Uint8Array;
}
/**
 * MsgCreateRewardsPlan defines the message structure for the
 * CreateRewardsPlan gRPC service method. It allows an account to create a
 * new rewards plan. It requires a sender address as well as the details of
 * the plan to be created.
 */
export interface MsgCreateRewardsPlanAmino {
    /** Sender is the address of the user creating the rewards plan */
    sender?: string;
    description?: string;
    service_id?: number;
    /** Amount is the amount of rewards to be distributed. */
    amount?: CoinAmino[];
    /** StartTime is the starting time of the plan. */
    start_time?: string;
    /** EndTime is the ending time of the plan. */
    end_time?: string;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    pools_distribution?: DistributionAmino;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operators_distribution?: DistributionAmino;
    /**
     * UsersDistribution is the rewards distribution parameters for users who
     * delegated directly to the service.
     */
    users_distribution?: UsersDistributionAmino;
    /**
     * FeeAmount represents the fees that are going to be paid to create the
     * rewards plan. These should always be greater or equals of any of the coins
     * specified inside the RewardsPlanCreationFee field of the modules params.
     * If no fees are specified inside the module parameters, this field can be
     * omitted.
     */
    fee_amount?: CoinAmino[];
}
export interface MsgCreateRewardsPlanAminoMsg {
    type: "milkyway/MsgCreateRewardsPlan";
    value: MsgCreateRewardsPlanAmino;
}
/**
 * MsgCreateRewardsPlan defines the message structure for the
 * CreateRewardsPlan gRPC service method. It allows an account to create a
 * new rewards plan. It requires a sender address as well as the details of
 * the plan to be created.
 */
export interface MsgCreateRewardsPlanSDKType {
    sender: string;
    description: string;
    service_id: number;
    amount: CoinSDKType[];
    start_time: Date;
    end_time: Date;
    pools_distribution: DistributionSDKType;
    operators_distribution: DistributionSDKType;
    users_distribution: UsersDistributionSDKType;
    fee_amount: CoinSDKType[];
}
/**
 * MsgCreateRewardsPlanResponse is the return value of
 * MsgCreateRewardsPlan. It returns the newly created plan ID.
 */
export interface MsgCreateRewardsPlanResponse {
    /** NewRewardsPlanID is the ID of the newly created rewards plan */
    newRewardsPlanId: bigint;
}
export interface MsgCreateRewardsPlanResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlanResponse";
    value: Uint8Array;
}
/**
 * MsgCreateRewardsPlanResponse is the return value of
 * MsgCreateRewardsPlan. It returns the newly created plan ID.
 */
export interface MsgCreateRewardsPlanResponseAmino {
    /** NewRewardsPlanID is the ID of the newly created rewards plan */
    new_rewards_plan_id?: string;
}
export interface MsgCreateRewardsPlanResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgCreateRewardsPlanResponse";
    value: MsgCreateRewardsPlanResponseAmino;
}
/**
 * MsgCreateRewardsPlanResponse is the return value of
 * MsgCreateRewardsPlan. It returns the newly created plan ID.
 */
export interface MsgCreateRewardsPlanResponseSDKType {
    new_rewards_plan_id: bigint;
}
/**
 * MsgEditRewardsPlan defines the message structure for the
 * EditRewardsPlan gRPC service method. It allows an account to edit a
 * previously created rewards plan.
 */
export interface MsgEditRewardsPlan {
    /** Sender is the address of the user editing the rewards plan. */
    sender: string;
    /** ID is the ID of the rewards plan to be edited. */
    id: bigint;
    description: string;
    /** Amount is the amount of rewards to be distributed. */
    amount: Coin[];
    /** StartTime is the starting time of the plan. */
    startTime: Date;
    /** EndTime is the ending time of the plan. */
    endTime: Date;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    poolsDistribution: Distribution;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operatorsDistribution: Distribution;
    /**
     * UsersDistribution is the rewards distribution parameters for users who
     * delegated directly to the service.
     */
    usersDistribution: UsersDistribution;
}
export interface MsgEditRewardsPlanProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan";
    value: Uint8Array;
}
/**
 * MsgEditRewardsPlan defines the message structure for the
 * EditRewardsPlan gRPC service method. It allows an account to edit a
 * previously created rewards plan.
 */
export interface MsgEditRewardsPlanAmino {
    /** Sender is the address of the user editing the rewards plan. */
    sender?: string;
    /** ID is the ID of the rewards plan to be edited. */
    id?: string;
    description?: string;
    /** Amount is the amount of rewards to be distributed. */
    amount?: CoinAmino[];
    /** StartTime is the starting time of the plan. */
    start_time?: string;
    /** EndTime is the ending time of the plan. */
    end_time?: string;
    /** PoolsDistribution is the rewards distribution parameters for pools. */
    pools_distribution?: DistributionAmino;
    /** OperatorsDistribution is the rewards distribution parameters for operators. */
    operators_distribution?: DistributionAmino;
    /**
     * UsersDistribution is the rewards distribution parameters for users who
     * delegated directly to the service.
     */
    users_distribution?: UsersDistributionAmino;
}
export interface MsgEditRewardsPlanAminoMsg {
    type: "milkyway/MsgEditRewardsPlan";
    value: MsgEditRewardsPlanAmino;
}
/**
 * MsgEditRewardsPlan defines the message structure for the
 * EditRewardsPlan gRPC service method. It allows an account to edit a
 * previously created rewards plan.
 */
export interface MsgEditRewardsPlanSDKType {
    sender: string;
    id: bigint;
    description: string;
    amount: CoinSDKType[];
    start_time: Date;
    end_time: Date;
    pools_distribution: DistributionSDKType;
    operators_distribution: DistributionSDKType;
    users_distribution: UsersDistributionSDKType;
}
/**
 * MsgEditRewardsPlanResponse is the return value of
 * MsgEditRewardsPlan.
 */
export interface MsgEditRewardsPlanResponse {
}
export interface MsgEditRewardsPlanResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse";
    value: Uint8Array;
}
/**
 * MsgEditRewardsPlanResponse is the return value of
 * MsgEditRewardsPlan.
 */
export interface MsgEditRewardsPlanResponseAmino {
}
export interface MsgEditRewardsPlanResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse";
    value: MsgEditRewardsPlanResponseAmino;
}
/**
 * MsgEditRewardsPlanResponse is the return value of
 * MsgEditRewardsPlan.
 */
export interface MsgEditRewardsPlanResponseSDKType {
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for a delegator(or an
 * operator when withdrawing commission).
 */
export interface MsgSetWithdrawAddress {
    sender: string;
    withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for a delegator(or an
 * operator when withdrawing commission).
 */
export interface MsgSetWithdrawAddressAmino {
    sender?: string;
    withdraw_address?: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "milkyway/MsgSetWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for a delegator(or an
 * operator when withdrawing commission).
 */
export interface MsgSetWithdrawAddressSDKType {
    sender: string;
    withdraw_address: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseSDKType {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single delegation target.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    delegationType: DelegationType;
    delegationTargetId: number;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single delegation target.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address?: string;
    delegation_type?: DelegationType;
    delegation_target_id?: number;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "milkyway/MsgWithdrawDelegatorReward";
    value: MsgWithdrawDelegatorRewardAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single delegation target.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
    delegator_address: string;
    delegation_type: DelegationType;
    delegation_target_id: number;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
    amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseAmino {
    amount: CoinAmino[];
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
    amount: CoinSDKType[];
}
/** MsgWithdrawOperatorCommission withdraws the full commission to the operator. */
export interface MsgWithdrawOperatorCommission {
    sender: string;
    operatorId: number;
}
export interface MsgWithdrawOperatorCommissionProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission";
    value: Uint8Array;
}
/** MsgWithdrawOperatorCommission withdraws the full commission to the operator. */
export interface MsgWithdrawOperatorCommissionAmino {
    sender?: string;
    operator_id?: number;
}
export interface MsgWithdrawOperatorCommissionAminoMsg {
    type: "milkyway/MsgWithdrawOperatorCommission";
    value: MsgWithdrawOperatorCommissionAmino;
}
/** MsgWithdrawOperatorCommission withdraws the full commission to the operator. */
export interface MsgWithdrawOperatorCommissionSDKType {
    sender: string;
    operator_id: number;
}
/**
 * MsgWithdrawOperatorCommissionResponse defines the
 * Msg/WithdrawOperatorCommission response type.
 */
export interface MsgWithdrawOperatorCommissionResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
export interface MsgWithdrawOperatorCommissionResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommissionResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawOperatorCommissionResponse defines the
 * Msg/WithdrawOperatorCommission response type.
 */
export interface MsgWithdrawOperatorCommissionResponseAmino {
    /** Since: cosmos-sdk 0.46 */
    amount: CoinAmino[];
}
export interface MsgWithdrawOperatorCommissionResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgWithdrawOperatorCommissionResponse";
    value: MsgWithdrawOperatorCommissionResponseAmino;
}
/**
 * MsgWithdrawOperatorCommissionResponse defines the
 * Msg/WithdrawOperatorCommission response type.
 */
export interface MsgWithdrawOperatorCommissionResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParams {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * Params define the parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * Params define the parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "milkyway/rewards/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/milkyway.rewards.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/milkyway.rewards.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateRewardsPlan: {
    typeUrl: string;
    encode(message: MsgCreateRewardsPlan, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRewardsPlan;
    fromPartial(object: Partial<MsgCreateRewardsPlan>): MsgCreateRewardsPlan;
    fromAmino(object: MsgCreateRewardsPlanAmino): MsgCreateRewardsPlan;
    toAmino(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanAmino;
    fromAminoMsg(object: MsgCreateRewardsPlanAminoMsg): MsgCreateRewardsPlan;
    toAminoMsg(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanAminoMsg;
    fromProtoMsg(message: MsgCreateRewardsPlanProtoMsg): MsgCreateRewardsPlan;
    toProto(message: MsgCreateRewardsPlan): Uint8Array;
    toProtoMsg(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanProtoMsg;
};
export declare const MsgCreateRewardsPlanResponse: {
    typeUrl: string;
    encode(message: MsgCreateRewardsPlanResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRewardsPlanResponse;
    fromPartial(object: Partial<MsgCreateRewardsPlanResponse>): MsgCreateRewardsPlanResponse;
    fromAmino(object: MsgCreateRewardsPlanResponseAmino): MsgCreateRewardsPlanResponse;
    toAmino(message: MsgCreateRewardsPlanResponse): MsgCreateRewardsPlanResponseAmino;
    fromAminoMsg(object: MsgCreateRewardsPlanResponseAminoMsg): MsgCreateRewardsPlanResponse;
    fromProtoMsg(message: MsgCreateRewardsPlanResponseProtoMsg): MsgCreateRewardsPlanResponse;
    toProto(message: MsgCreateRewardsPlanResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRewardsPlanResponse): MsgCreateRewardsPlanResponseProtoMsg;
};
export declare const MsgEditRewardsPlan: {
    typeUrl: string;
    encode(message: MsgEditRewardsPlan, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEditRewardsPlan;
    fromPartial(object: Partial<MsgEditRewardsPlan>): MsgEditRewardsPlan;
    fromAmino(object: MsgEditRewardsPlanAmino): MsgEditRewardsPlan;
    toAmino(message: MsgEditRewardsPlan): MsgEditRewardsPlanAmino;
    fromAminoMsg(object: MsgEditRewardsPlanAminoMsg): MsgEditRewardsPlan;
    toAminoMsg(message: MsgEditRewardsPlan): MsgEditRewardsPlanAminoMsg;
    fromProtoMsg(message: MsgEditRewardsPlanProtoMsg): MsgEditRewardsPlan;
    toProto(message: MsgEditRewardsPlan): Uint8Array;
    toProtoMsg(message: MsgEditRewardsPlan): MsgEditRewardsPlanProtoMsg;
};
export declare const MsgEditRewardsPlanResponse: {
    typeUrl: string;
    encode(_: MsgEditRewardsPlanResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEditRewardsPlanResponse;
    fromPartial(_: Partial<MsgEditRewardsPlanResponse>): MsgEditRewardsPlanResponse;
    fromAmino(_: MsgEditRewardsPlanResponseAmino): MsgEditRewardsPlanResponse;
    toAmino(_: MsgEditRewardsPlanResponse): MsgEditRewardsPlanResponseAmino;
    fromAminoMsg(object: MsgEditRewardsPlanResponseAminoMsg): MsgEditRewardsPlanResponse;
    fromProtoMsg(message: MsgEditRewardsPlanResponseProtoMsg): MsgEditRewardsPlanResponse;
    toProto(message: MsgEditRewardsPlanResponse): Uint8Array;
    toProtoMsg(message: MsgEditRewardsPlanResponse): MsgEditRewardsPlanResponseProtoMsg;
};
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromPartial(object: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawOperatorCommission: {
    typeUrl: string;
    encode(message: MsgWithdrawOperatorCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawOperatorCommission;
    fromPartial(object: Partial<MsgWithdrawOperatorCommission>): MsgWithdrawOperatorCommission;
    fromAmino(object: MsgWithdrawOperatorCommissionAmino): MsgWithdrawOperatorCommission;
    toAmino(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawOperatorCommissionAminoMsg): MsgWithdrawOperatorCommission;
    toAminoMsg(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawOperatorCommissionProtoMsg): MsgWithdrawOperatorCommission;
    toProto(message: MsgWithdrawOperatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionProtoMsg;
};
export declare const MsgWithdrawOperatorCommissionResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawOperatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawOperatorCommissionResponse;
    fromPartial(object: Partial<MsgWithdrawOperatorCommissionResponse>): MsgWithdrawOperatorCommissionResponse;
    fromAmino(object: MsgWithdrawOperatorCommissionResponseAmino): MsgWithdrawOperatorCommissionResponse;
    toAmino(message: MsgWithdrawOperatorCommissionResponse): MsgWithdrawOperatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawOperatorCommissionResponseAminoMsg): MsgWithdrawOperatorCommissionResponse;
    fromProtoMsg(message: MsgWithdrawOperatorCommissionResponseProtoMsg): MsgWithdrawOperatorCommissionResponse;
    toProto(message: MsgWithdrawOperatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawOperatorCommissionResponse): MsgWithdrawOperatorCommissionResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
