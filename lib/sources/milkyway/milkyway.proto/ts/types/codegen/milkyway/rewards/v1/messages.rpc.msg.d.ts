import { TxRpc } from "../../../types";
import { MsgCreateRewardsPlan, MsgCreateRewardsPlanResponse, MsgEditRewardsPlan, MsgEditRewardsPlanResponse, MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawOperatorCommission, MsgWithdrawOperatorCommissionResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./messages";
/** Msg defines the services module's gRPC message service. */
export interface Msg {
    /**
     * CreateRewardsPlan defines the operation for creating a new
     * rewards plan.
     */
    createRewardsPlan(request: MsgCreateRewardsPlan): Promise<MsgCreateRewardsPlanResponse>;
    /**
     * EditRewardsPlan defines the operation to edit an existing
     * rewards plan.
     */
    editRewardsPlan(request: MsgEditRewardsPlan): Promise<MsgEditRewardsPlanResponse>;
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator(or an operator, when withdrawing commission).
     */
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single delegation target.
     */
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawOperatorCommission defines a method to withdraw the
     * full commission to the operator.
     */
    withdrawOperatorCommission(request: MsgWithdrawOperatorCommission): Promise<MsgWithdrawOperatorCommissionResponse>;
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters.
     * The authority defaults to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createRewardsPlan(request: MsgCreateRewardsPlan): Promise<MsgCreateRewardsPlanResponse>;
    editRewardsPlan(request: MsgEditRewardsPlan): Promise<MsgEditRewardsPlanResponse>;
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    withdrawOperatorCommission(request: MsgWithdrawOperatorCommission): Promise<MsgWithdrawOperatorCommissionResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
