import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterOperator, MsgRegisterOperatorResponse, MsgUpdateOperator, MsgUpdateOperatorResponse, MsgDeactivateOperator, MsgDeactivateOperatorResponse, MsgReactivateOperator, MsgReactivateOperatorResponse, MsgDeleteOperator, MsgDeleteOperatorResponse, MsgTransferOperatorOwnership, MsgTransferOperatorOwnershipResponse, MsgSetOperatorParams, MsgSetOperatorParamsResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./messages";
/** Msg defines the avs module's gRPC message service. */
export interface Msg {
  /** RegisterOperator defines the operation for registering a new operator. */
  registerOperator(request: MsgRegisterOperator): Promise<MsgRegisterOperatorResponse>;
  /**
   * UpdateOperator defines the operation for updating an operator's details.
   * The operator owner can update the moniker, website, and picture URL.
   */
  updateOperator(request: MsgUpdateOperator): Promise<MsgUpdateOperatorResponse>;
  /**
   * DeactivateOperator defines the operation for deactivating an
   * operator. Operators will require some time in order to be deactivated.
   * This time is defined by the governance parameters.
   */
  deactivateOperator(request: MsgDeactivateOperator): Promise<MsgDeactivateOperatorResponse>;
  /**
   * ReactivateOperator defines the operation for reactivating an
   * inactive operator.
   */
  reactivateOperator(request: MsgReactivateOperator): Promise<MsgReactivateOperatorResponse>;
  /** DeleteOperator defines the operation for deleting a deactivated operator. */
  deleteOperator(request: MsgDeleteOperator): Promise<MsgDeleteOperatorResponse>;
  /**
   * TransferOperatorOwnership defines the operation for transferring the
   * ownership of an operator to another account.
   */
  transferOperatorOwnership(request: MsgTransferOperatorOwnership): Promise<MsgTransferOperatorOwnershipResponse>;
  /**
   * SetOperatorParams defines the operation for setting a operator's
   * parameters.
   */
  setOperatorParams(request: MsgSetOperatorParams): Promise<MsgSetOperatorParamsResponse>;
  /**
   * UpdateParams defines a governance operation for updating the module
   * parameters.
   * The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerOperator = this.registerOperator.bind(this);
    this.updateOperator = this.updateOperator.bind(this);
    this.deactivateOperator = this.deactivateOperator.bind(this);
    this.reactivateOperator = this.reactivateOperator.bind(this);
    this.deleteOperator = this.deleteOperator.bind(this);
    this.transferOperatorOwnership = this.transferOperatorOwnership.bind(this);
    this.setOperatorParams = this.setOperatorParams.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerOperator(request: MsgRegisterOperator): Promise<MsgRegisterOperatorResponse> {
    const data = MsgRegisterOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "RegisterOperator", data);
    return promise.then(data => MsgRegisterOperatorResponse.decode(new BinaryReader(data)));
  }
  updateOperator(request: MsgUpdateOperator): Promise<MsgUpdateOperatorResponse> {
    const data = MsgUpdateOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "UpdateOperator", data);
    return promise.then(data => MsgUpdateOperatorResponse.decode(new BinaryReader(data)));
  }
  deactivateOperator(request: MsgDeactivateOperator): Promise<MsgDeactivateOperatorResponse> {
    const data = MsgDeactivateOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "DeactivateOperator", data);
    return promise.then(data => MsgDeactivateOperatorResponse.decode(new BinaryReader(data)));
  }
  reactivateOperator(request: MsgReactivateOperator): Promise<MsgReactivateOperatorResponse> {
    const data = MsgReactivateOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "ReactivateOperator", data);
    return promise.then(data => MsgReactivateOperatorResponse.decode(new BinaryReader(data)));
  }
  deleteOperator(request: MsgDeleteOperator): Promise<MsgDeleteOperatorResponse> {
    const data = MsgDeleteOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "DeleteOperator", data);
    return promise.then(data => MsgDeleteOperatorResponse.decode(new BinaryReader(data)));
  }
  transferOperatorOwnership(request: MsgTransferOperatorOwnership): Promise<MsgTransferOperatorOwnershipResponse> {
    const data = MsgTransferOperatorOwnership.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "TransferOperatorOwnership", data);
    return promise.then(data => MsgTransferOperatorOwnershipResponse.decode(new BinaryReader(data)));
  }
  setOperatorParams(request: MsgSetOperatorParams): Promise<MsgSetOperatorParamsResponse> {
    const data = MsgSetOperatorParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "SetOperatorParams", data);
    return promise.then(data => MsgSetOperatorParamsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.operators.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}