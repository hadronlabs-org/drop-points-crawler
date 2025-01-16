import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Distribution, DistributionAmino, DistributionSDKType, UsersDistribution, UsersDistributionAmino, UsersDistributionSDKType } from "./models";
import { DelegationType } from "../../restaking/v1/models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgEditRewardsPlanResponse {}
export interface MsgEditRewardsPlanResponseProtoMsg {
  typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse";
  value: Uint8Array;
}
/**
 * MsgEditRewardsPlanResponse is the return value of
 * MsgEditRewardsPlan.
 */
export interface MsgEditRewardsPlanResponseAmino {}
export interface MsgEditRewardsPlanResponseAminoMsg {
  type: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse";
  value: MsgEditRewardsPlanResponseAmino;
}
/**
 * MsgEditRewardsPlanResponse is the return value of
 * MsgEditRewardsPlan.
 */
export interface MsgEditRewardsPlanResponseSDKType {}
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
export interface MsgSetWithdrawAddressResponse {}
export interface MsgSetWithdrawAddressResponseProtoMsg {
  typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseAmino {}
export interface MsgSetWithdrawAddressResponseAminoMsg {
  type: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse";
  value: MsgSetWithdrawAddressResponseAmino;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/milkyway.rewards.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/milkyway.rewards.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateRewardsPlan(): MsgCreateRewardsPlan {
  return {
    sender: "",
    description: "",
    serviceId: 0,
    amount: [],
    startTime: new Date(),
    endTime: new Date(),
    poolsDistribution: Distribution.fromPartial({}),
    operatorsDistribution: Distribution.fromPartial({}),
    usersDistribution: UsersDistribution.fromPartial({}),
    feeAmount: []
  };
}
export const MsgCreateRewardsPlan = {
  typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan",
  encode(message: MsgCreateRewardsPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.poolsDistribution !== undefined) {
      Distribution.encode(message.poolsDistribution, writer.uint32(58).fork()).ldelim();
    }
    if (message.operatorsDistribution !== undefined) {
      Distribution.encode(message.operatorsDistribution, writer.uint32(66).fork()).ldelim();
    }
    if (message.usersDistribution !== undefined) {
      UsersDistribution.encode(message.usersDistribution, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.feeAmount) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRewardsPlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRewardsPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.serviceId = reader.uint32();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.poolsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 8:
          message.operatorsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 9:
          message.usersDistribution = UsersDistribution.decode(reader, reader.uint32());
          break;
        case 10:
          message.feeAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateRewardsPlan>): MsgCreateRewardsPlan {
    const message = createBaseMsgCreateRewardsPlan();
    message.sender = object.sender ?? "";
    message.description = object.description ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.poolsDistribution = object.poolsDistribution !== undefined && object.poolsDistribution !== null ? Distribution.fromPartial(object.poolsDistribution) : undefined;
    message.operatorsDistribution = object.operatorsDistribution !== undefined && object.operatorsDistribution !== null ? Distribution.fromPartial(object.operatorsDistribution) : undefined;
    message.usersDistribution = object.usersDistribution !== undefined && object.usersDistribution !== null ? UsersDistribution.fromPartial(object.usersDistribution) : undefined;
    message.feeAmount = object.feeAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateRewardsPlanAmino): MsgCreateRewardsPlan {
    const message = createBaseMsgCreateRewardsPlan();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
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
    message.feeAmount = object.fee_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.description = message.description === "" ? undefined : message.description;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.pools_distribution = message.poolsDistribution ? Distribution.toAmino(message.poolsDistribution) : undefined;
    obj.operators_distribution = message.operatorsDistribution ? Distribution.toAmino(message.operatorsDistribution) : undefined;
    obj.users_distribution = message.usersDistribution ? UsersDistribution.toAmino(message.usersDistribution) : undefined;
    if (message.feeAmount) {
      obj.fee_amount = message.feeAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_amount = message.feeAmount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateRewardsPlanAminoMsg): MsgCreateRewardsPlan {
    return MsgCreateRewardsPlan.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanAminoMsg {
    return {
      type: "milkyway/MsgCreateRewardsPlan",
      value: MsgCreateRewardsPlan.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateRewardsPlanProtoMsg): MsgCreateRewardsPlan {
    return MsgCreateRewardsPlan.decode(message.value);
  },
  toProto(message: MsgCreateRewardsPlan): Uint8Array {
    return MsgCreateRewardsPlan.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRewardsPlan): MsgCreateRewardsPlanProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan",
      value: MsgCreateRewardsPlan.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRewardsPlanResponse(): MsgCreateRewardsPlanResponse {
  return {
    newRewardsPlanId: BigInt(0)
  };
}
export const MsgCreateRewardsPlanResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlanResponse",
  encode(message: MsgCreateRewardsPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newRewardsPlanId !== BigInt(0)) {
      writer.uint32(8).uint64(message.newRewardsPlanId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRewardsPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRewardsPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newRewardsPlanId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateRewardsPlanResponse>): MsgCreateRewardsPlanResponse {
    const message = createBaseMsgCreateRewardsPlanResponse();
    message.newRewardsPlanId = object.newRewardsPlanId !== undefined && object.newRewardsPlanId !== null ? BigInt(object.newRewardsPlanId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateRewardsPlanResponseAmino): MsgCreateRewardsPlanResponse {
    const message = createBaseMsgCreateRewardsPlanResponse();
    if (object.new_rewards_plan_id !== undefined && object.new_rewards_plan_id !== null) {
      message.newRewardsPlanId = BigInt(object.new_rewards_plan_id);
    }
    return message;
  },
  toAmino(message: MsgCreateRewardsPlanResponse): MsgCreateRewardsPlanResponseAmino {
    const obj: any = {};
    obj.new_rewards_plan_id = message.newRewardsPlanId !== BigInt(0) ? message.newRewardsPlanId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRewardsPlanResponseAminoMsg): MsgCreateRewardsPlanResponse {
    return MsgCreateRewardsPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRewardsPlanResponseProtoMsg): MsgCreateRewardsPlanResponse {
    return MsgCreateRewardsPlanResponse.decode(message.value);
  },
  toProto(message: MsgCreateRewardsPlanResponse): Uint8Array {
    return MsgCreateRewardsPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRewardsPlanResponse): MsgCreateRewardsPlanResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlanResponse",
      value: MsgCreateRewardsPlanResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEditRewardsPlan(): MsgEditRewardsPlan {
  return {
    sender: "",
    id: BigInt(0),
    description: "",
    amount: [],
    startTime: new Date(),
    endTime: new Date(),
    poolsDistribution: Distribution.fromPartial({}),
    operatorsDistribution: Distribution.fromPartial({}),
    usersDistribution: UsersDistribution.fromPartial({})
  };
}
export const MsgEditRewardsPlan = {
  typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan",
  encode(message: MsgEditRewardsPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.poolsDistribution !== undefined) {
      Distribution.encode(message.poolsDistribution, writer.uint32(58).fork()).ldelim();
    }
    if (message.operatorsDistribution !== undefined) {
      Distribution.encode(message.operatorsDistribution, writer.uint32(66).fork()).ldelim();
    }
    if (message.usersDistribution !== undefined) {
      UsersDistribution.encode(message.usersDistribution, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditRewardsPlan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRewardsPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.poolsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 8:
          message.operatorsDistribution = Distribution.decode(reader, reader.uint32());
          break;
        case 9:
          message.usersDistribution = UsersDistribution.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgEditRewardsPlan>): MsgEditRewardsPlan {
    const message = createBaseMsgEditRewardsPlan();
    message.sender = object.sender ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.poolsDistribution = object.poolsDistribution !== undefined && object.poolsDistribution !== null ? Distribution.fromPartial(object.poolsDistribution) : undefined;
    message.operatorsDistribution = object.operatorsDistribution !== undefined && object.operatorsDistribution !== null ? Distribution.fromPartial(object.operatorsDistribution) : undefined;
    message.usersDistribution = object.usersDistribution !== undefined && object.usersDistribution !== null ? UsersDistribution.fromPartial(object.usersDistribution) : undefined;
    return message;
  },
  fromAmino(object: MsgEditRewardsPlanAmino): MsgEditRewardsPlan {
    const message = createBaseMsgEditRewardsPlan();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
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
  toAmino(message: MsgEditRewardsPlan): MsgEditRewardsPlanAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    obj.pools_distribution = message.poolsDistribution ? Distribution.toAmino(message.poolsDistribution) : undefined;
    obj.operators_distribution = message.operatorsDistribution ? Distribution.toAmino(message.operatorsDistribution) : undefined;
    obj.users_distribution = message.usersDistribution ? UsersDistribution.toAmino(message.usersDistribution) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEditRewardsPlanAminoMsg): MsgEditRewardsPlan {
    return MsgEditRewardsPlan.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditRewardsPlan): MsgEditRewardsPlanAminoMsg {
    return {
      type: "milkyway/MsgEditRewardsPlan",
      value: MsgEditRewardsPlan.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEditRewardsPlanProtoMsg): MsgEditRewardsPlan {
    return MsgEditRewardsPlan.decode(message.value);
  },
  toProto(message: MsgEditRewardsPlan): Uint8Array {
    return MsgEditRewardsPlan.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRewardsPlan): MsgEditRewardsPlanProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan",
      value: MsgEditRewardsPlan.encode(message).finish()
    };
  }
};
function createBaseMsgEditRewardsPlanResponse(): MsgEditRewardsPlanResponse {
  return {};
}
export const MsgEditRewardsPlanResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse",
  encode(_: MsgEditRewardsPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditRewardsPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRewardsPlanResponse();
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
  fromPartial(_: Partial<MsgEditRewardsPlanResponse>): MsgEditRewardsPlanResponse {
    const message = createBaseMsgEditRewardsPlanResponse();
    return message;
  },
  fromAmino(_: MsgEditRewardsPlanResponseAmino): MsgEditRewardsPlanResponse {
    const message = createBaseMsgEditRewardsPlanResponse();
    return message;
  },
  toAmino(_: MsgEditRewardsPlanResponse): MsgEditRewardsPlanResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditRewardsPlanResponseAminoMsg): MsgEditRewardsPlanResponse {
    return MsgEditRewardsPlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditRewardsPlanResponseProtoMsg): MsgEditRewardsPlanResponse {
    return MsgEditRewardsPlanResponse.decode(message.value);
  },
  toProto(message: MsgEditRewardsPlanResponse): Uint8Array {
    return MsgEditRewardsPlanResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditRewardsPlanResponse): MsgEditRewardsPlanResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlanResponse",
      value: MsgEditRewardsPlanResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    sender: "",
    withdrawAddress: ""
  };
}
export const MsgSetWithdrawAddress = {
  typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress",
  encode(message: MsgSetWithdrawAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.sender = object.sender ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg {
    return {
      type: "milkyway/MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddress): Uint8Array {
    return MsgSetWithdrawAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}
export const MsgSetWithdrawAddressResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse",
  encode(_: MsgSetWithdrawAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
  fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddressResponse): Uint8Array {
    return MsgSetWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    delegationType: 0,
    delegationTargetId: 0
  };
}
export const MsgWithdrawDelegatorReward = {
  typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward",
  encode(message: MsgWithdrawDelegatorReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.delegationType !== 0) {
      writer.uint32(16).int32(message.delegationType);
    }
    if (message.delegationTargetId !== 0) {
      writer.uint32(24).uint32(message.delegationTargetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.delegationType = reader.int32() as any;
          break;
        case 3:
          message.delegationTargetId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.delegationType = object.delegationType ?? 0;
    message.delegationTargetId = object.delegationTargetId ?? 0;
    return message;
  },
  fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.delegation_type !== undefined && object.delegation_type !== null) {
      message.delegationType = object.delegation_type;
    }
    if (object.delegation_target_id !== undefined && object.delegation_target_id !== null) {
      message.delegationTargetId = object.delegation_target_id;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.delegation_type = message.delegationType === 0 ? undefined : message.delegationType;
    obj.delegation_target_id = message.delegationTargetId === 0 ? undefined : message.delegationTargetId;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg {
    return {
      type: "milkyway/MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorReward): Uint8Array {
    return MsgWithdrawDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorRewardResponse",
  encode(message: MsgWithdrawDelegatorRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array {
    return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawOperatorCommission(): MsgWithdrawOperatorCommission {
  return {
    sender: "",
    operatorId: 0
  };
}
export const MsgWithdrawOperatorCommission = {
  typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission",
  encode(message: MsgWithdrawOperatorCommission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawOperatorCommission {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawOperatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawOperatorCommission>): MsgWithdrawOperatorCommission {
    const message = createBaseMsgWithdrawOperatorCommission();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgWithdrawOperatorCommissionAmino): MsgWithdrawOperatorCommission {
    const message = createBaseMsgWithdrawOperatorCommission();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawOperatorCommissionAminoMsg): MsgWithdrawOperatorCommission {
    return MsgWithdrawOperatorCommission.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionAminoMsg {
    return {
      type: "milkyway/MsgWithdrawOperatorCommission",
      value: MsgWithdrawOperatorCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawOperatorCommissionProtoMsg): MsgWithdrawOperatorCommission {
    return MsgWithdrawOperatorCommission.decode(message.value);
  },
  toProto(message: MsgWithdrawOperatorCommission): Uint8Array {
    return MsgWithdrawOperatorCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawOperatorCommission): MsgWithdrawOperatorCommissionProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission",
      value: MsgWithdrawOperatorCommission.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawOperatorCommissionResponse(): MsgWithdrawOperatorCommissionResponse {
  return {
    amount: []
  };
}
export const MsgWithdrawOperatorCommissionResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommissionResponse",
  encode(message: MsgWithdrawOperatorCommissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawOperatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawOperatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawOperatorCommissionResponse>): MsgWithdrawOperatorCommissionResponse {
    const message = createBaseMsgWithdrawOperatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawOperatorCommissionResponseAmino): MsgWithdrawOperatorCommissionResponse {
    const message = createBaseMsgWithdrawOperatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawOperatorCommissionResponse): MsgWithdrawOperatorCommissionResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawOperatorCommissionResponseAminoMsg): MsgWithdrawOperatorCommissionResponse {
    return MsgWithdrawOperatorCommissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawOperatorCommissionResponseProtoMsg): MsgWithdrawOperatorCommissionResponse {
    return MsgWithdrawOperatorCommissionResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawOperatorCommissionResponse): Uint8Array {
    return MsgWithdrawOperatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawOperatorCommissionResponse): MsgWithdrawOperatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommissionResponse",
      value: MsgWithdrawOperatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/milkyway.rewards.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "milkyway/rewards/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/milkyway.rewards.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};