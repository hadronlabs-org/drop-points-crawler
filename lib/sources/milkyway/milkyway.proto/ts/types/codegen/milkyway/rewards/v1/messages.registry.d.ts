import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateRewardsPlan, MsgEditRewardsPlan, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawOperatorCommission, MsgUpdateParams } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createRewardsPlan(value: MsgCreateRewardsPlan): {
            typeUrl: string;
            value: Uint8Array;
        };
        editRewardsPlan(value: MsgEditRewardsPlan): {
            typeUrl: string;
            value: Uint8Array;
        };
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawOperatorCommission(value: MsgWithdrawOperatorCommission): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createRewardsPlan(value: MsgCreateRewardsPlan): {
            typeUrl: string;
            value: MsgCreateRewardsPlan;
        };
        editRewardsPlan(value: MsgEditRewardsPlan): {
            typeUrl: string;
            value: MsgEditRewardsPlan;
        };
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawOperatorCommission(value: MsgWithdrawOperatorCommission): {
            typeUrl: string;
            value: MsgWithdrawOperatorCommission;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createRewardsPlan(value: MsgCreateRewardsPlan): {
            typeUrl: string;
            value: MsgCreateRewardsPlan;
        };
        editRewardsPlan(value: MsgEditRewardsPlan): {
            typeUrl: string;
            value: MsgEditRewardsPlan;
        };
        setWithdrawAddress(value: MsgSetWithdrawAddress): {
            typeUrl: string;
            value: MsgSetWithdrawAddress;
        };
        withdrawDelegatorReward(value: MsgWithdrawDelegatorReward): {
            typeUrl: string;
            value: MsgWithdrawDelegatorReward;
        };
        withdrawOperatorCommission(value: MsgWithdrawOperatorCommission): {
            typeUrl: string;
            value: MsgWithdrawOperatorCommission;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
