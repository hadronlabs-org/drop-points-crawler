import { TxRpc } from "../../../types";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    registerOperator(request: MsgRegisterOperator): Promise<MsgRegisterOperatorResponse>;
    updateOperator(request: MsgUpdateOperator): Promise<MsgUpdateOperatorResponse>;
    deactivateOperator(request: MsgDeactivateOperator): Promise<MsgDeactivateOperatorResponse>;
    reactivateOperator(request: MsgReactivateOperator): Promise<MsgReactivateOperatorResponse>;
    deleteOperator(request: MsgDeleteOperator): Promise<MsgDeleteOperatorResponse>;
    transferOperatorOwnership(request: MsgTransferOperatorOwnership): Promise<MsgTransferOperatorOwnershipResponse>;
    setOperatorParams(request: MsgSetOperatorParams): Promise<MsgSetOperatorParamsResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
