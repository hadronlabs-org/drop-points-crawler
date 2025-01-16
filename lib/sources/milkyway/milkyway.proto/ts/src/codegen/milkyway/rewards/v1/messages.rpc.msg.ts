import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.createRewardsPlan = this.createRewardsPlan.bind(this);
    this.editRewardsPlan = this.editRewardsPlan.bind(this);
    this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.withdrawOperatorCommission = this.withdrawOperatorCommission.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createRewardsPlan(request: MsgCreateRewardsPlan): Promise<MsgCreateRewardsPlanResponse> {
    const data = MsgCreateRewardsPlan.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "CreateRewardsPlan", data);
    return promise.then(data => MsgCreateRewardsPlanResponse.decode(new BinaryReader(data)));
  }
  editRewardsPlan(request: MsgEditRewardsPlan): Promise<MsgEditRewardsPlanResponse> {
    const data = MsgEditRewardsPlan.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "EditRewardsPlan", data);
    return promise.then(data => MsgEditRewardsPlanResponse.decode(new BinaryReader(data)));
  }
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new BinaryReader(data)));
  }
  withdrawOperatorCommission(request: MsgWithdrawOperatorCommission): Promise<MsgWithdrawOperatorCommissionResponse> {
    const data = MsgWithdrawOperatorCommission.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "WithdrawOperatorCommission", data);
    return promise.then(data => MsgWithdrawOperatorCommissionResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.rewards.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}