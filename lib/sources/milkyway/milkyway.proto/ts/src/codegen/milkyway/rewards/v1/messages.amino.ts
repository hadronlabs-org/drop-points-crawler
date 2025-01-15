import { MsgCreateRewardsPlan, MsgEditRewardsPlan, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawOperatorCommission, MsgUpdateParams } from "./messages";
export const AminoConverter = {
  "/milkyway.rewards.v1.MsgCreateRewardsPlan": {
    aminoType: "milkyway/MsgCreateRewardsPlan",
    toAmino: MsgCreateRewardsPlan.toAmino,
    fromAmino: MsgCreateRewardsPlan.fromAmino
  },
  "/milkyway.rewards.v1.MsgEditRewardsPlan": {
    aminoType: "milkyway/MsgEditRewardsPlan",
    toAmino: MsgEditRewardsPlan.toAmino,
    fromAmino: MsgEditRewardsPlan.fromAmino
  },
  "/milkyway.rewards.v1.MsgSetWithdrawAddress": {
    aminoType: "milkyway/MsgSetWithdrawAddress",
    toAmino: MsgSetWithdrawAddress.toAmino,
    fromAmino: MsgSetWithdrawAddress.fromAmino
  },
  "/milkyway.rewards.v1.MsgWithdrawDelegatorReward": {
    aminoType: "milkyway/MsgWithdrawDelegatorReward",
    toAmino: MsgWithdrawDelegatorReward.toAmino,
    fromAmino: MsgWithdrawDelegatorReward.fromAmino
  },
  "/milkyway.rewards.v1.MsgWithdrawOperatorCommission": {
    aminoType: "milkyway/MsgWithdrawOperatorCommission",
    toAmino: MsgWithdrawOperatorCommission.toAmino,
    fromAmino: MsgWithdrawOperatorCommission.fromAmino
  },
  "/milkyway.rewards.v1.MsgUpdateParams": {
    aminoType: "milkyway/rewards/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};