import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * RewardsPlanCreationFee represents the fee that an account must pay in
   * order to create a rewards plan.
   * The fee is drawn from the MsgCreateRewardsPlan sender's account and
   * transferred to the community pool.
   */
  rewardsPlanCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/milkyway.rewards.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * RewardsPlanCreationFee represents the fee that an account must pay in
   * order to create a rewards plan.
   * The fee is drawn from the MsgCreateRewardsPlan sender's account and
   * transferred to the community pool.
   */
  rewards_plan_creation_fee?: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/milkyway.rewards.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  rewards_plan_creation_fee: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    rewardsPlanCreationFee: []
  };
}
export const Params = {
  typeUrl: "/milkyway.rewards.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardsPlanCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsPlanCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardsPlanCreationFee = object.rewardsPlanCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.rewardsPlanCreationFee = object.rewards_plan_creation_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.rewardsPlanCreationFee) {
      obj.rewards_plan_creation_fee = message.rewardsPlanCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards_plan_creation_fee = message.rewardsPlanCreationFee;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/milkyway.rewards.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};