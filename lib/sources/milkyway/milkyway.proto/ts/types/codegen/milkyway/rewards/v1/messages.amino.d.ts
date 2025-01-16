import { MsgCreateRewardsPlan, MsgEditRewardsPlan, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawOperatorCommission, MsgUpdateParams } from "./messages";
export declare const AminoConverter: {
    "/milkyway.rewards.v1.MsgCreateRewardsPlan": {
        aminoType: string;
        toAmino: (message: MsgCreateRewardsPlan) => import("./messages").MsgCreateRewardsPlanAmino;
        fromAmino: (object: import("./messages").MsgCreateRewardsPlanAmino) => MsgCreateRewardsPlan;
    };
    "/milkyway.rewards.v1.MsgEditRewardsPlan": {
        aminoType: string;
        toAmino: (message: MsgEditRewardsPlan) => import("./messages").MsgEditRewardsPlanAmino;
        fromAmino: (object: import("./messages").MsgEditRewardsPlanAmino) => MsgEditRewardsPlan;
    };
    "/milkyway.rewards.v1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: (message: MsgSetWithdrawAddress) => import("./messages").MsgSetWithdrawAddressAmino;
        fromAmino: (object: import("./messages").MsgSetWithdrawAddressAmino) => MsgSetWithdrawAddress;
    };
    "/milkyway.rewards.v1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawDelegatorReward) => import("./messages").MsgWithdrawDelegatorRewardAmino;
        fromAmino: (object: import("./messages").MsgWithdrawDelegatorRewardAmino) => MsgWithdrawDelegatorReward;
    };
    "/milkyway.rewards.v1.MsgWithdrawOperatorCommission": {
        aminoType: string;
        toAmino: (message: MsgWithdrawOperatorCommission) => import("./messages").MsgWithdrawOperatorCommissionAmino;
        fromAmino: (object: import("./messages").MsgWithdrawOperatorCommissionAmino) => MsgWithdrawOperatorCommission;
    };
    "/milkyway.rewards.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./messages").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
