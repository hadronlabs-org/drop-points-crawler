import { TxRpc } from "../../../types";
import { MsgJoinService, MsgJoinServiceResponse, MsgLeaveService, MsgLeaveServiceResponse, MsgAddOperatorToAllowList, MsgAddOperatorToAllowListResponse, MsgRemoveOperatorFromAllowlist, MsgRemoveOperatorFromAllowlistResponse, MsgBorrowPoolSecurity, MsgBorrowPoolSecurityResponse, MsgCeasePoolSecurityBorrow, MsgCeasePoolSecurityBorrowResponse, MsgDelegatePool, MsgDelegatePoolResponse, MsgDelegateOperator, MsgDelegateOperatorResponse, MsgDelegateService, MsgDelegateServiceResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUndelegatePool, MsgUndelegateResponse, MsgUndelegateOperator, MsgUndelegateService, MsgSetUserPreferences, MsgSetUserPreferencesResponse } from "./messages";
/** Msg defines the restaking module's gRPC message service. */
export interface Msg {
    /**
     * JoinService defines the operation that allows the operator admin
     * to start securing an AVS
     */
    joinService(request: MsgJoinService): Promise<MsgJoinServiceResponse>;
    /**
     * LeaveService defines the operation that allows the operator admin
     * to stop securing an AVS
     */
    leaveService(request: MsgLeaveService): Promise<MsgLeaveServiceResponse>;
    /**
     * AddOperatorToAllowList defines the operation that allows the service admin
     * to add an operator to the list of allowed operator to secure the service
     */
    addOperatorToAllowList(request: MsgAddOperatorToAllowList): Promise<MsgAddOperatorToAllowListResponse>;
    /**
     * RemoveOperatorFromAllowlist defines the operation that allows the service
     * admin to remove a previously added operator from the list of allowed
     * operators to secure the service
     */
    removeOperatorFromAllowlist(request: MsgRemoveOperatorFromAllowlist): Promise<MsgRemoveOperatorFromAllowlistResponse>;
    /**
     * BorrowPoolSecurity defines the operation that allows the service admin
     * to add a pool to the list of pools from which the service has chosen
     * to borrow security.
     */
    borrowPoolSecurity(request: MsgBorrowPoolSecurity): Promise<MsgBorrowPoolSecurityResponse>;
    /**
     * CeasePoolSecurityBorrow defines the operation that allows the service admin
     * to remove a pool from the list of pools from which the service has chosen
     * to borrow security.
     */
    ceasePoolSecurityBorrow(request: MsgCeasePoolSecurityBorrow): Promise<MsgCeasePoolSecurityBorrowResponse>;
    /**
     * DelegatePool defines the operation that allows users to delegate any amount
     * of an asset to a pool that can then be used to provide services with
     * cryptoeconomic security.
     */
    delegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse>;
    /**
     * DelegateOperator defines the operation that allows users to delegate their
     * assets to a specific operator.
     */
    delegateOperator(request: MsgDelegateOperator): Promise<MsgDelegateOperatorResponse>;
    /**
     * DelegateService defines the operation that allows users to delegate their
     * assets to a specific service.
     */
    delegateService(request: MsgDelegateService): Promise<MsgDelegateServiceResponse>;
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters.
     * The authority defaults to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /**
     * UndelegatePool defines the operation that allows users to undelegate their
     * assets from a pool.
     */
    undelegatePool(request: MsgUndelegatePool): Promise<MsgUndelegateResponse>;
    /**
     * UndelegateOperator defines the operation that allows users to undelegate
     * their assets from a specific operator.
     */
    undelegateOperator(request: MsgUndelegateOperator): Promise<MsgUndelegateResponse>;
    /**
     * UndelegateService defines the operation that allows users to undelegate
     * their assets from a specific service.
     */
    undelegateService(request: MsgUndelegateService): Promise<MsgUndelegateResponse>;
    /**
     * SetUserPreferences defines the operation that allows users to set their
     * preferences for the restaking module.
     */
    setUserPreferences(request: MsgSetUserPreferences): Promise<MsgSetUserPreferencesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    joinService(request: MsgJoinService): Promise<MsgJoinServiceResponse>;
    leaveService(request: MsgLeaveService): Promise<MsgLeaveServiceResponse>;
    addOperatorToAllowList(request: MsgAddOperatorToAllowList): Promise<MsgAddOperatorToAllowListResponse>;
    removeOperatorFromAllowlist(request: MsgRemoveOperatorFromAllowlist): Promise<MsgRemoveOperatorFromAllowlistResponse>;
    borrowPoolSecurity(request: MsgBorrowPoolSecurity): Promise<MsgBorrowPoolSecurityResponse>;
    ceasePoolSecurityBorrow(request: MsgCeasePoolSecurityBorrow): Promise<MsgCeasePoolSecurityBorrowResponse>;
    delegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse>;
    delegateOperator(request: MsgDelegateOperator): Promise<MsgDelegateOperatorResponse>;
    delegateService(request: MsgDelegateService): Promise<MsgDelegateServiceResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    undelegatePool(request: MsgUndelegatePool): Promise<MsgUndelegateResponse>;
    undelegateOperator(request: MsgUndelegateOperator): Promise<MsgUndelegateResponse>;
    undelegateService(request: MsgUndelegateService): Promise<MsgUndelegateResponse>;
    setUserPreferences(request: MsgSetUserPreferences): Promise<MsgSetUserPreferencesResponse>;
}
