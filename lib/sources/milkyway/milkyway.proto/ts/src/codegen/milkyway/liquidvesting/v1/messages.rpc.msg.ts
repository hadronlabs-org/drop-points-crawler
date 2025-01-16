import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgMintLockedRepresentation, MsgMintLockedRepresentationResponse, MsgBurnLockedRepresentation, MsgBurnLockedRepresentationResponse, MsgWithdrawInsuranceFund, MsgWithdrawInsuranceFundResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./messages";
/** Msg defines the services module's gRPC message service. */
export interface Msg {
  /**
   * MintLockedRepresentation defines the operation to mint a user's staked
   * locked tokens representation that can be used in the liquid vesting module.
   */
  mintLockedRepresentation(request: MsgMintLockedRepresentation): Promise<MsgMintLockedRepresentationResponse>;
  /**
   * BurnLockedRepresentation defines the operation to burn a user's staked
   * locked tokens representation.
   */
  burnLockedRepresentation(request: MsgBurnLockedRepresentation): Promise<MsgBurnLockedRepresentationResponse>;
  /**
   * WithdrawInsuranceFund defines the operation to withdraw an amount
   * of tokens from the user's insurance fund.
   * This can be used from the user to withdraw their funds after
   * some of their staking representations have been burned or if the
   * balance in the insurance fund is more than the required to cover all
   * their staking representations.
   */
  withdrawInsuranceFund(request: MsgWithdrawInsuranceFund): Promise<MsgWithdrawInsuranceFundResponse>;
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
    this.mintLockedRepresentation = this.mintLockedRepresentation.bind(this);
    this.burnLockedRepresentation = this.burnLockedRepresentation.bind(this);
    this.withdrawInsuranceFund = this.withdrawInsuranceFund.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  mintLockedRepresentation(request: MsgMintLockedRepresentation): Promise<MsgMintLockedRepresentationResponse> {
    const data = MsgMintLockedRepresentation.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Msg", "MintLockedRepresentation", data);
    return promise.then(data => MsgMintLockedRepresentationResponse.decode(new BinaryReader(data)));
  }
  burnLockedRepresentation(request: MsgBurnLockedRepresentation): Promise<MsgBurnLockedRepresentationResponse> {
    const data = MsgBurnLockedRepresentation.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Msg", "BurnLockedRepresentation", data);
    return promise.then(data => MsgBurnLockedRepresentationResponse.decode(new BinaryReader(data)));
  }
  withdrawInsuranceFund(request: MsgWithdrawInsuranceFund): Promise<MsgWithdrawInsuranceFundResponse> {
    const data = MsgWithdrawInsuranceFund.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Msg", "WithdrawInsuranceFund", data);
    return promise.then(data => MsgWithdrawInsuranceFundResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.liquidvesting.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}