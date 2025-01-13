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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
