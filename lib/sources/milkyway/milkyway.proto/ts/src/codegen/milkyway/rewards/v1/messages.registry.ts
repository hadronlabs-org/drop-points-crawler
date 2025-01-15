import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateRewardsPlan, MsgEditRewardsPlan, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawOperatorCommission, MsgUpdateParams } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.rewards.v1.MsgCreateRewardsPlan", MsgCreateRewardsPlan], ["/milkyway.rewards.v1.MsgEditRewardsPlan", MsgEditRewardsPlan], ["/milkyway.rewards.v1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/milkyway.rewards.v1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/milkyway.rewards.v1.MsgWithdrawOperatorCommission", MsgWithdrawOperatorCommission], ["/milkyway.rewards.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createRewardsPlan(value: MsgCreateRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan",
        value: MsgCreateRewardsPlan.encode(value).finish()
      };
    },
    editRewardsPlan(value: MsgEditRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan",
        value: MsgEditRewardsPlan.encode(value).finish()
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.encode(value).finish()
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.encode(value).finish()
      };
    },
    withdrawOperatorCommission(value: MsgWithdrawOperatorCommission) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission",
        value: MsgWithdrawOperatorCommission.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createRewardsPlan(value: MsgCreateRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan",
        value
      };
    },
    editRewardsPlan(value: MsgEditRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan",
        value
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress",
        value
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward",
        value
      };
    },
    withdrawOperatorCommission(value: MsgWithdrawOperatorCommission) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    createRewardsPlan(value: MsgCreateRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgCreateRewardsPlan",
        value: MsgCreateRewardsPlan.fromPartial(value)
      };
    },
    editRewardsPlan(value: MsgEditRewardsPlan) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgEditRewardsPlan",
        value: MsgEditRewardsPlan.fromPartial(value)
      };
    },
    setWithdrawAddress(value: MsgSetWithdrawAddress) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgSetWithdrawAddress",
        value: MsgSetWithdrawAddress.fromPartial(value)
      };
    },
    withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawDelegatorReward",
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      };
    },
    withdrawOperatorCommission(value: MsgWithdrawOperatorCommission) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgWithdrawOperatorCommission",
        value: MsgWithdrawOperatorCommission.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.rewards.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};