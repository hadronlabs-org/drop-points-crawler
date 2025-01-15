import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { UserPreferences, UserPreferencesAmino, UserPreferencesSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgJoinService defines the message structure for the
 * JoinService gRPC service method. It allows the operator admin to
 * start securing a AVS.
 */
export interface MsgJoinService {
    sender: string;
    operatorId: number;
    serviceId: number;
}
export interface MsgJoinServiceProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgJoinService";
    value: Uint8Array;
}
/**
 * MsgJoinService defines the message structure for the
 * JoinService gRPC service method. It allows the operator admin to
 * start securing a AVS.
 */
export interface MsgJoinServiceAmino {
    sender?: string;
    operator_id?: number;
    service_id?: number;
}
export interface MsgJoinServiceAminoMsg {
    type: "milkyway/MsgJoinService";
    value: MsgJoinServiceAmino;
}
/**
 * MsgJoinService defines the message structure for the
 * JoinService gRPC service method. It allows the operator admin to
 * start securing a AVS.
 */
export interface MsgJoinServiceSDKType {
    sender: string;
    operator_id: number;
    service_id: number;
}
/** MsgJoinServiceResponse is the return value of MsgJoinService. */
export interface MsgJoinServiceResponse {
}
export interface MsgJoinServiceResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgJoinServiceResponse";
    value: Uint8Array;
}
/** MsgJoinServiceResponse is the return value of MsgJoinService. */
export interface MsgJoinServiceResponseAmino {
}
export interface MsgJoinServiceResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgJoinServiceResponse";
    value: MsgJoinServiceResponseAmino;
}
/** MsgJoinServiceResponse is the return value of MsgJoinService. */
export interface MsgJoinServiceResponseSDKType {
}
/**
 * MsgLeaveService defines the message structure for the
 * LeaveService gRPC service method. It allows the operator admin to
 * stop securing a AVS.
 */
export interface MsgLeaveService {
    sender: string;
    operatorId: number;
    serviceId: number;
}
export interface MsgLeaveServiceProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgLeaveService";
    value: Uint8Array;
}
/**
 * MsgLeaveService defines the message structure for the
 * LeaveService gRPC service method. It allows the operator admin to
 * stop securing a AVS.
 */
export interface MsgLeaveServiceAmino {
    sender?: string;
    operator_id?: number;
    service_id?: number;
}
export interface MsgLeaveServiceAminoMsg {
    type: "milkyway/MsgLeaveService";
    value: MsgLeaveServiceAmino;
}
/**
 * MsgLeaveService defines the message structure for the
 * LeaveService gRPC service method. It allows the operator admin to
 * stop securing a AVS.
 */
export interface MsgLeaveServiceSDKType {
    sender: string;
    operator_id: number;
    service_id: number;
}
/** MsgLeaveServiceResponse is the return value of MsgLeaveService. */
export interface MsgLeaveServiceResponse {
}
export interface MsgLeaveServiceResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgLeaveServiceResponse";
    value: Uint8Array;
}
/** MsgLeaveServiceResponse is the return value of MsgLeaveService. */
export interface MsgLeaveServiceResponseAmino {
}
export interface MsgLeaveServiceResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgLeaveServiceResponse";
    value: MsgLeaveServiceResponseAmino;
}
/** MsgLeaveServiceResponse is the return value of MsgLeaveService. */
export interface MsgLeaveServiceResponseSDKType {
}
/**
 * MsgAddOperatorToAllowList defines the message structure for the
 * AddOperatorToAllowList gRPC service method. It allows the service admin
 * to add an operator to the list of allowed operator to secure the service.
 */
export interface MsgAddOperatorToAllowList {
    sender: string;
    serviceId: number;
    operatorId: number;
}
export interface MsgAddOperatorToAllowListProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList";
    value: Uint8Array;
}
/**
 * MsgAddOperatorToAllowList defines the message structure for the
 * AddOperatorToAllowList gRPC service method. It allows the service admin
 * to add an operator to the list of allowed operator to secure the service.
 */
export interface MsgAddOperatorToAllowListAmino {
    sender?: string;
    service_id?: number;
    operator_id?: number;
}
export interface MsgAddOperatorToAllowListAminoMsg {
    type: "milkyway/MsgAddOperatorToAllowList";
    value: MsgAddOperatorToAllowListAmino;
}
/**
 * MsgAddOperatorToAllowList defines the message structure for the
 * AddOperatorToAllowList gRPC service method. It allows the service admin
 * to add an operator to the list of allowed operator to secure the service.
 */
export interface MsgAddOperatorToAllowListSDKType {
    sender: string;
    service_id: number;
    operator_id: number;
}
/**
 * MsgAddOperatorToAllowListResponse is the return value of
 * MsgAddOperatorToAllowList.
 */
export interface MsgAddOperatorToAllowListResponse {
}
export interface MsgAddOperatorToAllowListResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse";
    value: Uint8Array;
}
/**
 * MsgAddOperatorToAllowListResponse is the return value of
 * MsgAddOperatorToAllowList.
 */
export interface MsgAddOperatorToAllowListResponseAmino {
}
export interface MsgAddOperatorToAllowListResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse";
    value: MsgAddOperatorToAllowListResponseAmino;
}
/**
 * MsgAddOperatorToAllowListResponse is the return value of
 * MsgAddOperatorToAllowList.
 */
export interface MsgAddOperatorToAllowListResponseSDKType {
}
/**
 * MsgRemoveOperatorFromAllowlist defines the message structure for the
 * RemoveOperatorFromAllowlist gRPC service method. It allows the service admin
 * to remove a previously added operator from the list of allowed operators
 * to secure the service.
 */
export interface MsgRemoveOperatorFromAllowlist {
    sender: string;
    serviceId: number;
    operatorId: number;
}
export interface MsgRemoveOperatorFromAllowlistProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist";
    value: Uint8Array;
}
/**
 * MsgRemoveOperatorFromAllowlist defines the message structure for the
 * RemoveOperatorFromAllowlist gRPC service method. It allows the service admin
 * to remove a previously added operator from the list of allowed operators
 * to secure the service.
 */
export interface MsgRemoveOperatorFromAllowlistAmino {
    sender?: string;
    service_id?: number;
    operator_id?: number;
}
export interface MsgRemoveOperatorFromAllowlistAminoMsg {
    type: "milkyway/MsgRemoveOperatorFromAllowlist";
    value: MsgRemoveOperatorFromAllowlistAmino;
}
/**
 * MsgRemoveOperatorFromAllowlist defines the message structure for the
 * RemoveOperatorFromAllowlist gRPC service method. It allows the service admin
 * to remove a previously added operator from the list of allowed operators
 * to secure the service.
 */
export interface MsgRemoveOperatorFromAllowlistSDKType {
    sender: string;
    service_id: number;
    operator_id: number;
}
/**
 * MsgRemoveOperatorFromAllowlistResponse is the return value of
 * MsgRemoveOperatorFromAllowlist.
 */
export interface MsgRemoveOperatorFromAllowlistResponse {
}
export interface MsgRemoveOperatorFromAllowlistResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse";
    value: Uint8Array;
}
/**
 * MsgRemoveOperatorFromAllowlistResponse is the return value of
 * MsgRemoveOperatorFromAllowlist.
 */
export interface MsgRemoveOperatorFromAllowlistResponseAmino {
}
export interface MsgRemoveOperatorFromAllowlistResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse";
    value: MsgRemoveOperatorFromAllowlistResponseAmino;
}
/**
 * MsgRemoveOperatorFromAllowlistResponse is the return value of
 * MsgRemoveOperatorFromAllowlist.
 */
export interface MsgRemoveOperatorFromAllowlistResponseSDKType {
}
/**
 * MsgBorrowPoolSecurity defines the message structure for the
 * BorrowPoolSecurity gRPC service method. It allows the service admin
 * to add a pool to the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgBorrowPoolSecurity {
    sender: string;
    serviceId: number;
    poolId: number;
}
export interface MsgBorrowPoolSecurityProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity";
    value: Uint8Array;
}
/**
 * MsgBorrowPoolSecurity defines the message structure for the
 * BorrowPoolSecurity gRPC service method. It allows the service admin
 * to add a pool to the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgBorrowPoolSecurityAmino {
    sender?: string;
    service_id?: number;
    pool_id?: number;
}
export interface MsgBorrowPoolSecurityAminoMsg {
    type: "milkyway/MsgBorrowPoolSecurity";
    value: MsgBorrowPoolSecurityAmino;
}
/**
 * MsgBorrowPoolSecurity defines the message structure for the
 * BorrowPoolSecurity gRPC service method. It allows the service admin
 * to add a pool to the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgBorrowPoolSecuritySDKType {
    sender: string;
    service_id: number;
    pool_id: number;
}
/** MsgBorrowPoolSecurityResponse is the return value of MsgBorrowPoolSecurity. */
export interface MsgBorrowPoolSecurityResponse {
}
export interface MsgBorrowPoolSecurityResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse";
    value: Uint8Array;
}
/** MsgBorrowPoolSecurityResponse is the return value of MsgBorrowPoolSecurity. */
export interface MsgBorrowPoolSecurityResponseAmino {
}
export interface MsgBorrowPoolSecurityResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse";
    value: MsgBorrowPoolSecurityResponseAmino;
}
/** MsgBorrowPoolSecurityResponse is the return value of MsgBorrowPoolSecurity. */
export interface MsgBorrowPoolSecurityResponseSDKType {
}
/**
 * MsgCeasePoolSecurityBorrow defines the message structure for the
 * CeaseBorrowPoolSecurity gRPC service method. It allows the service admin
 * to remove a pool from the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgCeasePoolSecurityBorrow {
    sender: string;
    serviceId: number;
    poolId: number;
}
export interface MsgCeasePoolSecurityBorrowProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow";
    value: Uint8Array;
}
/**
 * MsgCeasePoolSecurityBorrow defines the message structure for the
 * CeaseBorrowPoolSecurity gRPC service method. It allows the service admin
 * to remove a pool from the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgCeasePoolSecurityBorrowAmino {
    sender?: string;
    service_id?: number;
    pool_id?: number;
}
export interface MsgCeasePoolSecurityBorrowAminoMsg {
    type: "milkyway/MsgCeasePoolSecurityBorrow";
    value: MsgCeasePoolSecurityBorrowAmino;
}
/**
 * MsgCeasePoolSecurityBorrow defines the message structure for the
 * CeaseBorrowPoolSecurity gRPC service method. It allows the service admin
 * to remove a pool from the list of pools from which the service has chosen
 * to borrow security.
 */
export interface MsgCeasePoolSecurityBorrowSDKType {
    sender: string;
    service_id: number;
    pool_id: number;
}
/**
 * MsgCeasePoolSecurityBorrowResponse is the return value of
 * MsgCeasePoolSecurityBorrow.
 */
export interface MsgCeasePoolSecurityBorrowResponse {
}
export interface MsgCeasePoolSecurityBorrowResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse";
    value: Uint8Array;
}
/**
 * MsgCeasePoolSecurityBorrowResponse is the return value of
 * MsgCeasePoolSecurityBorrow.
 */
export interface MsgCeasePoolSecurityBorrowResponseAmino {
}
export interface MsgCeasePoolSecurityBorrowResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse";
    value: MsgCeasePoolSecurityBorrowResponseAmino;
}
/**
 * MsgCeasePoolSecurityBorrowResponse is the return value of
 * MsgCeasePoolSecurityBorrow.
 */
export interface MsgCeasePoolSecurityBorrowResponseSDKType {
}
/**
 * MsgDelegatePool defines the message structure for the DelegatePool gRPC
 * service method. It allows a user to put their assets into a restaking pool
 * that will later be used to provide cryptoeconomic security to services that
 * choose it.
 */
export interface MsgDelegatePool {
    /** Delegator is the address of the user joining the pool */
    delegator: string;
    /** Amount is the amount of coins to be staked */
    amount: Coin;
}
export interface MsgDelegatePoolProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegatePool";
    value: Uint8Array;
}
/**
 * MsgDelegatePool defines the message structure for the DelegatePool gRPC
 * service method. It allows a user to put their assets into a restaking pool
 * that will later be used to provide cryptoeconomic security to services that
 * choose it.
 */
export interface MsgDelegatePoolAmino {
    /** Delegator is the address of the user joining the pool */
    delegator?: string;
    /** Amount is the amount of coins to be staked */
    amount?: CoinAmino;
}
export interface MsgDelegatePoolAminoMsg {
    type: "milkyway/MsgDelegatePool";
    value: MsgDelegatePoolAmino;
}
/**
 * MsgDelegatePool defines the message structure for the DelegatePool gRPC
 * service method. It allows a user to put their assets into a restaking pool
 * that will later be used to provide cryptoeconomic security to services that
 * choose it.
 */
export interface MsgDelegatePoolSDKType {
    delegator: string;
    amount: CoinSDKType;
}
/** MsgDelegatePoolResponse defines the return value of MsgDelegatePool. */
export interface MsgDelegatePoolResponse {
}
export interface MsgDelegatePoolResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegatePoolResponse";
    value: Uint8Array;
}
/** MsgDelegatePoolResponse defines the return value of MsgDelegatePool. */
export interface MsgDelegatePoolResponseAmino {
}
export interface MsgDelegatePoolResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgDelegatePoolResponse";
    value: MsgDelegatePoolResponseAmino;
}
/** MsgDelegatePoolResponse defines the return value of MsgDelegatePool. */
export interface MsgDelegatePoolResponseSDKType {
}
/**
 * MsgDelegateOperator defines the message structure for the DelegateOperator
 * gRPC service method. It allows a user to delegate their assets to an
 * operator.
 */
export interface MsgDelegateOperator {
    /** Delegator is the address of the user delegating to the operator */
    delegator: string;
    /** OperatorID is the ID of the operator to delegate to */
    operatorId: number;
    /** Amount is the amount of coins to be delegated */
    amount: Coin[];
}
export interface MsgDelegateOperatorProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator";
    value: Uint8Array;
}
/**
 * MsgDelegateOperator defines the message structure for the DelegateOperator
 * gRPC service method. It allows a user to delegate their assets to an
 * operator.
 */
export interface MsgDelegateOperatorAmino {
    /** Delegator is the address of the user delegating to the operator */
    delegator?: string;
    /** OperatorID is the ID of the operator to delegate to */
    operator_id?: number;
    /** Amount is the amount of coins to be delegated */
    amount?: CoinAmino[];
}
export interface MsgDelegateOperatorAminoMsg {
    type: "milkyway/MsgDelegateOperator";
    value: MsgDelegateOperatorAmino;
}
/**
 * MsgDelegateOperator defines the message structure for the DelegateOperator
 * gRPC service method. It allows a user to delegate their assets to an
 * operator.
 */
export interface MsgDelegateOperatorSDKType {
    delegator: string;
    operator_id: number;
    amount: CoinSDKType[];
}
/** MsgDelegateOperatorResponse is the return value of MsgDelegateOperator. */
export interface MsgDelegateOperatorResponse {
}
export interface MsgDelegateOperatorResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegateOperatorResponse";
    value: Uint8Array;
}
/** MsgDelegateOperatorResponse is the return value of MsgDelegateOperator. */
export interface MsgDelegateOperatorResponseAmino {
}
export interface MsgDelegateOperatorResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgDelegateOperatorResponse";
    value: MsgDelegateOperatorResponseAmino;
}
/** MsgDelegateOperatorResponse is the return value of MsgDelegateOperator. */
export interface MsgDelegateOperatorResponseSDKType {
}
/**
 * MsgDelegateService defines the message structure for the DelegateService gRPC
 * service method. It allows a user to delegate their assets to a service.
 */
export interface MsgDelegateService {
    /** Delegator is the address of the user delegating to the service */
    delegator: string;
    /** ServiceID is the ID of the service to delegate to */
    serviceId: number;
    /** Amount is the amount of coins to be delegated */
    amount: Coin[];
}
export interface MsgDelegateServiceProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegateService";
    value: Uint8Array;
}
/**
 * MsgDelegateService defines the message structure for the DelegateService gRPC
 * service method. It allows a user to delegate their assets to a service.
 */
export interface MsgDelegateServiceAmino {
    /** Delegator is the address of the user delegating to the service */
    delegator?: string;
    /** ServiceID is the ID of the service to delegate to */
    service_id?: number;
    /** Amount is the amount of coins to be delegated */
    amount?: CoinAmino[];
}
export interface MsgDelegateServiceAminoMsg {
    type: "milkyway/MsgDelegateService";
    value: MsgDelegateServiceAmino;
}
/**
 * MsgDelegateService defines the message structure for the DelegateService gRPC
 * service method. It allows a user to delegate their assets to a service.
 */
export interface MsgDelegateServiceSDKType {
    delegator: string;
    service_id: number;
    amount: CoinSDKType[];
}
/** MsgDelegateServiceResponse is the return value of MsgDelegateService. */
export interface MsgDelegateServiceResponse {
}
export interface MsgDelegateServiceResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgDelegateServiceResponse";
    value: Uint8Array;
}
/** MsgDelegateServiceResponse is the return value of MsgDelegateService. */
export interface MsgDelegateServiceResponseAmino {
}
export interface MsgDelegateServiceResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgDelegateServiceResponse";
    value: MsgDelegateServiceResponseAmino;
}
/** MsgDelegateServiceResponse is the return value of MsgDelegateService. */
export interface MsgDelegateServiceResponseSDKType {
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParams {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * Params define the parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * Params define the parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "milkyway/restaking/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {
}
/**
 * MsgUndelegatePool the message structure for the UndelegatePool gRPC service
 * method. It allows a user to undelegate their assets from a restaking pool.
 */
export interface MsgUndelegatePool {
    /** Delegator is the address of the user undelegating from the pool. */
    delegator: string;
    /** Amount is the amount of coins to be undelegated. */
    amount: Coin;
}
export interface MsgUndelegatePoolProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool";
    value: Uint8Array;
}
/**
 * MsgUndelegatePool the message structure for the UndelegatePool gRPC service
 * method. It allows a user to undelegate their assets from a restaking pool.
 */
export interface MsgUndelegatePoolAmino {
    /** Delegator is the address of the user undelegating from the pool. */
    delegator?: string;
    /** Amount is the amount of coins to be undelegated. */
    amount: CoinAmino;
}
export interface MsgUndelegatePoolAminoMsg {
    type: "milkyway/MsgUndelegatePool";
    value: MsgUndelegatePoolAmino;
}
/**
 * MsgUndelegatePool the message structure for the UndelegatePool gRPC service
 * method. It allows a user to undelegate their assets from a restaking pool.
 */
export interface MsgUndelegatePoolSDKType {
    delegator: string;
    amount: CoinSDKType;
}
/**
 * MsgUndelegateOperator the message structure for the UndelegateOperator gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * operator.
 */
export interface MsgUndelegateOperator {
    /** Delegator is the address of the user undelegating from the operator. */
    delegator: string;
    /** OperatorID is the ID of the operator to undelegate from. */
    operatorId: number;
    /** Amount is the amount of coins to be undelegated. */
    amount: Coin[];
}
export interface MsgUndelegateOperatorProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator";
    value: Uint8Array;
}
/**
 * MsgUndelegateOperator the message structure for the UndelegateOperator gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * operator.
 */
export interface MsgUndelegateOperatorAmino {
    /** Delegator is the address of the user undelegating from the operator. */
    delegator?: string;
    /** OperatorID is the ID of the operator to undelegate from. */
    operator_id?: number;
    /** Amount is the amount of coins to be undelegated. */
    amount: CoinAmino[];
}
export interface MsgUndelegateOperatorAminoMsg {
    type: "milkyway/MsgUndelegateOperator";
    value: MsgUndelegateOperatorAmino;
}
/**
 * MsgUndelegateOperator the message structure for the UndelegateOperator gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * operator.
 */
export interface MsgUndelegateOperatorSDKType {
    delegator: string;
    operator_id: number;
    amount: CoinSDKType[];
}
/**
 * MsgUndelegateService the message structure for the UndelegateService gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * service.
 */
export interface MsgUndelegateService {
    /** Delegator is the address of the user undelegating from the service. */
    delegator: string;
    /** ServiceID is the ID of the service to undelegate from. */
    serviceId: number;
    /** Amount is the amount of coins to be undelegated. */
    amount: Coin[];
}
export interface MsgUndelegateServiceProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUndelegateService";
    value: Uint8Array;
}
/**
 * MsgUndelegateService the message structure for the UndelegateService gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * service.
 */
export interface MsgUndelegateServiceAmino {
    /** Delegator is the address of the user undelegating from the service. */
    delegator?: string;
    /** ServiceID is the ID of the service to undelegate from. */
    service_id?: number;
    /** Amount is the amount of coins to be undelegated. */
    amount: CoinAmino[];
}
export interface MsgUndelegateServiceAminoMsg {
    type: "milkyway/MsgUndelegateService";
    value: MsgUndelegateServiceAmino;
}
/**
 * MsgUndelegateService the message structure for the UndelegateService gRPC
 * service method. It allows a user to undelegate their assets from a restaking
 * service.
 */
export interface MsgUndelegateServiceSDKType {
    delegator: string;
    service_id: number;
    amount: CoinSDKType[];
}
/** MsgUndelegateResponse defines the response type for the undelegation methods. */
export interface MsgUndelegateResponse {
    /**
     * CompletionTime represents the time at which the undelegation will be
     * complete
     */
    completionTime: Date;
}
export interface MsgUndelegateResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgUndelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegateResponse defines the response type for the undelegation methods. */
export interface MsgUndelegateResponseAmino {
    /**
     * CompletionTime represents the time at which the undelegation will be
     * complete
     */
    completion_time: string;
}
export interface MsgUndelegateResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgUndelegateResponse";
    value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the response type for the undelegation methods. */
export interface MsgUndelegateResponseSDKType {
    completion_time: Date;
}
/**
 * MsgSetUserPreferences is the message structure for the SetUserPreferences
 * gRPC service method. It allows a user to set their preferences for the
 * restaking module.
 */
export interface MsgSetUserPreferences {
    /** User is the address of the user setting their preferences */
    user: string;
    /** Preferences is the user's preferences */
    preferences: UserPreferences;
}
export interface MsgSetUserPreferencesProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences";
    value: Uint8Array;
}
/**
 * MsgSetUserPreferences is the message structure for the SetUserPreferences
 * gRPC service method. It allows a user to set their preferences for the
 * restaking module.
 */
export interface MsgSetUserPreferencesAmino {
    /** User is the address of the user setting their preferences */
    user?: string;
    /** Preferences is the user's preferences */
    preferences?: UserPreferencesAmino;
}
export interface MsgSetUserPreferencesAminoMsg {
    type: "milkyway/MsgSetUserPreferences";
    value: MsgSetUserPreferencesAmino;
}
/**
 * MsgSetUserPreferences is the message structure for the SetUserPreferences
 * gRPC service method. It allows a user to set their preferences for the
 * restaking module.
 */
export interface MsgSetUserPreferencesSDKType {
    user: string;
    preferences: UserPreferencesSDKType;
}
/** MsgSetUserPreferencesResponse is the return value of MsgSetUserPreferences. */
export interface MsgSetUserPreferencesResponse {
}
export interface MsgSetUserPreferencesResponseProtoMsg {
    typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse";
    value: Uint8Array;
}
/** MsgSetUserPreferencesResponse is the return value of MsgSetUserPreferences. */
export interface MsgSetUserPreferencesResponseAmino {
}
export interface MsgSetUserPreferencesResponseAminoMsg {
    type: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse";
    value: MsgSetUserPreferencesResponseAmino;
}
/** MsgSetUserPreferencesResponse is the return value of MsgSetUserPreferences. */
export interface MsgSetUserPreferencesResponseSDKType {
}
export declare const MsgJoinService: {
    typeUrl: string;
    encode(message: MsgJoinService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinService;
    fromPartial(object: Partial<MsgJoinService>): MsgJoinService;
    fromAmino(object: MsgJoinServiceAmino): MsgJoinService;
    toAmino(message: MsgJoinService): MsgJoinServiceAmino;
    fromAminoMsg(object: MsgJoinServiceAminoMsg): MsgJoinService;
    toAminoMsg(message: MsgJoinService): MsgJoinServiceAminoMsg;
    fromProtoMsg(message: MsgJoinServiceProtoMsg): MsgJoinService;
    toProto(message: MsgJoinService): Uint8Array;
    toProtoMsg(message: MsgJoinService): MsgJoinServiceProtoMsg;
};
export declare const MsgJoinServiceResponse: {
    typeUrl: string;
    encode(_: MsgJoinServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinServiceResponse;
    fromPartial(_: Partial<MsgJoinServiceResponse>): MsgJoinServiceResponse;
    fromAmino(_: MsgJoinServiceResponseAmino): MsgJoinServiceResponse;
    toAmino(_: MsgJoinServiceResponse): MsgJoinServiceResponseAmino;
    fromAminoMsg(object: MsgJoinServiceResponseAminoMsg): MsgJoinServiceResponse;
    fromProtoMsg(message: MsgJoinServiceResponseProtoMsg): MsgJoinServiceResponse;
    toProto(message: MsgJoinServiceResponse): Uint8Array;
    toProtoMsg(message: MsgJoinServiceResponse): MsgJoinServiceResponseProtoMsg;
};
export declare const MsgLeaveService: {
    typeUrl: string;
    encode(message: MsgLeaveService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveService;
    fromPartial(object: Partial<MsgLeaveService>): MsgLeaveService;
    fromAmino(object: MsgLeaveServiceAmino): MsgLeaveService;
    toAmino(message: MsgLeaveService): MsgLeaveServiceAmino;
    fromAminoMsg(object: MsgLeaveServiceAminoMsg): MsgLeaveService;
    toAminoMsg(message: MsgLeaveService): MsgLeaveServiceAminoMsg;
    fromProtoMsg(message: MsgLeaveServiceProtoMsg): MsgLeaveService;
    toProto(message: MsgLeaveService): Uint8Array;
    toProtoMsg(message: MsgLeaveService): MsgLeaveServiceProtoMsg;
};
export declare const MsgLeaveServiceResponse: {
    typeUrl: string;
    encode(_: MsgLeaveServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveServiceResponse;
    fromPartial(_: Partial<MsgLeaveServiceResponse>): MsgLeaveServiceResponse;
    fromAmino(_: MsgLeaveServiceResponseAmino): MsgLeaveServiceResponse;
    toAmino(_: MsgLeaveServiceResponse): MsgLeaveServiceResponseAmino;
    fromAminoMsg(object: MsgLeaveServiceResponseAminoMsg): MsgLeaveServiceResponse;
    fromProtoMsg(message: MsgLeaveServiceResponseProtoMsg): MsgLeaveServiceResponse;
    toProto(message: MsgLeaveServiceResponse): Uint8Array;
    toProtoMsg(message: MsgLeaveServiceResponse): MsgLeaveServiceResponseProtoMsg;
};
export declare const MsgAddOperatorToAllowList: {
    typeUrl: string;
    encode(message: MsgAddOperatorToAllowList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperatorToAllowList;
    fromPartial(object: Partial<MsgAddOperatorToAllowList>): MsgAddOperatorToAllowList;
    fromAmino(object: MsgAddOperatorToAllowListAmino): MsgAddOperatorToAllowList;
    toAmino(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListAmino;
    fromAminoMsg(object: MsgAddOperatorToAllowListAminoMsg): MsgAddOperatorToAllowList;
    toAminoMsg(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListAminoMsg;
    fromProtoMsg(message: MsgAddOperatorToAllowListProtoMsg): MsgAddOperatorToAllowList;
    toProto(message: MsgAddOperatorToAllowList): Uint8Array;
    toProtoMsg(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListProtoMsg;
};
export declare const MsgAddOperatorToAllowListResponse: {
    typeUrl: string;
    encode(_: MsgAddOperatorToAllowListResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperatorToAllowListResponse;
    fromPartial(_: Partial<MsgAddOperatorToAllowListResponse>): MsgAddOperatorToAllowListResponse;
    fromAmino(_: MsgAddOperatorToAllowListResponseAmino): MsgAddOperatorToAllowListResponse;
    toAmino(_: MsgAddOperatorToAllowListResponse): MsgAddOperatorToAllowListResponseAmino;
    fromAminoMsg(object: MsgAddOperatorToAllowListResponseAminoMsg): MsgAddOperatorToAllowListResponse;
    fromProtoMsg(message: MsgAddOperatorToAllowListResponseProtoMsg): MsgAddOperatorToAllowListResponse;
    toProto(message: MsgAddOperatorToAllowListResponse): Uint8Array;
    toProtoMsg(message: MsgAddOperatorToAllowListResponse): MsgAddOperatorToAllowListResponseProtoMsg;
};
export declare const MsgRemoveOperatorFromAllowlist: {
    typeUrl: string;
    encode(message: MsgRemoveOperatorFromAllowlist, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorFromAllowlist;
    fromPartial(object: Partial<MsgRemoveOperatorFromAllowlist>): MsgRemoveOperatorFromAllowlist;
    fromAmino(object: MsgRemoveOperatorFromAllowlistAmino): MsgRemoveOperatorFromAllowlist;
    toAmino(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistAmino;
    fromAminoMsg(object: MsgRemoveOperatorFromAllowlistAminoMsg): MsgRemoveOperatorFromAllowlist;
    toAminoMsg(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistAminoMsg;
    fromProtoMsg(message: MsgRemoveOperatorFromAllowlistProtoMsg): MsgRemoveOperatorFromAllowlist;
    toProto(message: MsgRemoveOperatorFromAllowlist): Uint8Array;
    toProtoMsg(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistProtoMsg;
};
export declare const MsgRemoveOperatorFromAllowlistResponse: {
    typeUrl: string;
    encode(_: MsgRemoveOperatorFromAllowlistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorFromAllowlistResponse;
    fromPartial(_: Partial<MsgRemoveOperatorFromAllowlistResponse>): MsgRemoveOperatorFromAllowlistResponse;
    fromAmino(_: MsgRemoveOperatorFromAllowlistResponseAmino): MsgRemoveOperatorFromAllowlistResponse;
    toAmino(_: MsgRemoveOperatorFromAllowlistResponse): MsgRemoveOperatorFromAllowlistResponseAmino;
    fromAminoMsg(object: MsgRemoveOperatorFromAllowlistResponseAminoMsg): MsgRemoveOperatorFromAllowlistResponse;
    fromProtoMsg(message: MsgRemoveOperatorFromAllowlistResponseProtoMsg): MsgRemoveOperatorFromAllowlistResponse;
    toProto(message: MsgRemoveOperatorFromAllowlistResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveOperatorFromAllowlistResponse): MsgRemoveOperatorFromAllowlistResponseProtoMsg;
};
export declare const MsgBorrowPoolSecurity: {
    typeUrl: string;
    encode(message: MsgBorrowPoolSecurity, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowPoolSecurity;
    fromPartial(object: Partial<MsgBorrowPoolSecurity>): MsgBorrowPoolSecurity;
    fromAmino(object: MsgBorrowPoolSecurityAmino): MsgBorrowPoolSecurity;
    toAmino(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityAmino;
    fromAminoMsg(object: MsgBorrowPoolSecurityAminoMsg): MsgBorrowPoolSecurity;
    toAminoMsg(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityAminoMsg;
    fromProtoMsg(message: MsgBorrowPoolSecurityProtoMsg): MsgBorrowPoolSecurity;
    toProto(message: MsgBorrowPoolSecurity): Uint8Array;
    toProtoMsg(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityProtoMsg;
};
export declare const MsgBorrowPoolSecurityResponse: {
    typeUrl: string;
    encode(_: MsgBorrowPoolSecurityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowPoolSecurityResponse;
    fromPartial(_: Partial<MsgBorrowPoolSecurityResponse>): MsgBorrowPoolSecurityResponse;
    fromAmino(_: MsgBorrowPoolSecurityResponseAmino): MsgBorrowPoolSecurityResponse;
    toAmino(_: MsgBorrowPoolSecurityResponse): MsgBorrowPoolSecurityResponseAmino;
    fromAminoMsg(object: MsgBorrowPoolSecurityResponseAminoMsg): MsgBorrowPoolSecurityResponse;
    fromProtoMsg(message: MsgBorrowPoolSecurityResponseProtoMsg): MsgBorrowPoolSecurityResponse;
    toProto(message: MsgBorrowPoolSecurityResponse): Uint8Array;
    toProtoMsg(message: MsgBorrowPoolSecurityResponse): MsgBorrowPoolSecurityResponseProtoMsg;
};
export declare const MsgCeasePoolSecurityBorrow: {
    typeUrl: string;
    encode(message: MsgCeasePoolSecurityBorrow, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCeasePoolSecurityBorrow;
    fromPartial(object: Partial<MsgCeasePoolSecurityBorrow>): MsgCeasePoolSecurityBorrow;
    fromAmino(object: MsgCeasePoolSecurityBorrowAmino): MsgCeasePoolSecurityBorrow;
    toAmino(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowAmino;
    fromAminoMsg(object: MsgCeasePoolSecurityBorrowAminoMsg): MsgCeasePoolSecurityBorrow;
    toAminoMsg(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowAminoMsg;
    fromProtoMsg(message: MsgCeasePoolSecurityBorrowProtoMsg): MsgCeasePoolSecurityBorrow;
    toProto(message: MsgCeasePoolSecurityBorrow): Uint8Array;
    toProtoMsg(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowProtoMsg;
};
export declare const MsgCeasePoolSecurityBorrowResponse: {
    typeUrl: string;
    encode(_: MsgCeasePoolSecurityBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCeasePoolSecurityBorrowResponse;
    fromPartial(_: Partial<MsgCeasePoolSecurityBorrowResponse>): MsgCeasePoolSecurityBorrowResponse;
    fromAmino(_: MsgCeasePoolSecurityBorrowResponseAmino): MsgCeasePoolSecurityBorrowResponse;
    toAmino(_: MsgCeasePoolSecurityBorrowResponse): MsgCeasePoolSecurityBorrowResponseAmino;
    fromAminoMsg(object: MsgCeasePoolSecurityBorrowResponseAminoMsg): MsgCeasePoolSecurityBorrowResponse;
    fromProtoMsg(message: MsgCeasePoolSecurityBorrowResponseProtoMsg): MsgCeasePoolSecurityBorrowResponse;
    toProto(message: MsgCeasePoolSecurityBorrowResponse): Uint8Array;
    toProtoMsg(message: MsgCeasePoolSecurityBorrowResponse): MsgCeasePoolSecurityBorrowResponseProtoMsg;
};
export declare const MsgDelegatePool: {
    typeUrl: string;
    encode(message: MsgDelegatePool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegatePool;
    fromPartial(object: Partial<MsgDelegatePool>): MsgDelegatePool;
    fromAmino(object: MsgDelegatePoolAmino): MsgDelegatePool;
    toAmino(message: MsgDelegatePool): MsgDelegatePoolAmino;
    fromAminoMsg(object: MsgDelegatePoolAminoMsg): MsgDelegatePool;
    toAminoMsg(message: MsgDelegatePool): MsgDelegatePoolAminoMsg;
    fromProtoMsg(message: MsgDelegatePoolProtoMsg): MsgDelegatePool;
    toProto(message: MsgDelegatePool): Uint8Array;
    toProtoMsg(message: MsgDelegatePool): MsgDelegatePoolProtoMsg;
};
export declare const MsgDelegatePoolResponse: {
    typeUrl: string;
    encode(_: MsgDelegatePoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegatePoolResponse;
    fromPartial(_: Partial<MsgDelegatePoolResponse>): MsgDelegatePoolResponse;
    fromAmino(_: MsgDelegatePoolResponseAmino): MsgDelegatePoolResponse;
    toAmino(_: MsgDelegatePoolResponse): MsgDelegatePoolResponseAmino;
    fromAminoMsg(object: MsgDelegatePoolResponseAminoMsg): MsgDelegatePoolResponse;
    fromProtoMsg(message: MsgDelegatePoolResponseProtoMsg): MsgDelegatePoolResponse;
    toProto(message: MsgDelegatePoolResponse): Uint8Array;
    toProtoMsg(message: MsgDelegatePoolResponse): MsgDelegatePoolResponseProtoMsg;
};
export declare const MsgDelegateOperator: {
    typeUrl: string;
    encode(message: MsgDelegateOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateOperator;
    fromPartial(object: Partial<MsgDelegateOperator>): MsgDelegateOperator;
    fromAmino(object: MsgDelegateOperatorAmino): MsgDelegateOperator;
    toAmino(message: MsgDelegateOperator): MsgDelegateOperatorAmino;
    fromAminoMsg(object: MsgDelegateOperatorAminoMsg): MsgDelegateOperator;
    toAminoMsg(message: MsgDelegateOperator): MsgDelegateOperatorAminoMsg;
    fromProtoMsg(message: MsgDelegateOperatorProtoMsg): MsgDelegateOperator;
    toProto(message: MsgDelegateOperator): Uint8Array;
    toProtoMsg(message: MsgDelegateOperator): MsgDelegateOperatorProtoMsg;
};
export declare const MsgDelegateOperatorResponse: {
    typeUrl: string;
    encode(_: MsgDelegateOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateOperatorResponse;
    fromPartial(_: Partial<MsgDelegateOperatorResponse>): MsgDelegateOperatorResponse;
    fromAmino(_: MsgDelegateOperatorResponseAmino): MsgDelegateOperatorResponse;
    toAmino(_: MsgDelegateOperatorResponse): MsgDelegateOperatorResponseAmino;
    fromAminoMsg(object: MsgDelegateOperatorResponseAminoMsg): MsgDelegateOperatorResponse;
    fromProtoMsg(message: MsgDelegateOperatorResponseProtoMsg): MsgDelegateOperatorResponse;
    toProto(message: MsgDelegateOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateOperatorResponse): MsgDelegateOperatorResponseProtoMsg;
};
export declare const MsgDelegateService: {
    typeUrl: string;
    encode(message: MsgDelegateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateService;
    fromPartial(object: Partial<MsgDelegateService>): MsgDelegateService;
    fromAmino(object: MsgDelegateServiceAmino): MsgDelegateService;
    toAmino(message: MsgDelegateService): MsgDelegateServiceAmino;
    fromAminoMsg(object: MsgDelegateServiceAminoMsg): MsgDelegateService;
    toAminoMsg(message: MsgDelegateService): MsgDelegateServiceAminoMsg;
    fromProtoMsg(message: MsgDelegateServiceProtoMsg): MsgDelegateService;
    toProto(message: MsgDelegateService): Uint8Array;
    toProtoMsg(message: MsgDelegateService): MsgDelegateServiceProtoMsg;
};
export declare const MsgDelegateServiceResponse: {
    typeUrl: string;
    encode(_: MsgDelegateServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateServiceResponse;
    fromPartial(_: Partial<MsgDelegateServiceResponse>): MsgDelegateServiceResponse;
    fromAmino(_: MsgDelegateServiceResponseAmino): MsgDelegateServiceResponse;
    toAmino(_: MsgDelegateServiceResponse): MsgDelegateServiceResponseAmino;
    fromAminoMsg(object: MsgDelegateServiceResponseAminoMsg): MsgDelegateServiceResponse;
    fromProtoMsg(message: MsgDelegateServiceResponseProtoMsg): MsgDelegateServiceResponse;
    toProto(message: MsgDelegateServiceResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateServiceResponse): MsgDelegateServiceResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgUndelegatePool: {
    typeUrl: string;
    encode(message: MsgUndelegatePool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegatePool;
    fromPartial(object: Partial<MsgUndelegatePool>): MsgUndelegatePool;
    fromAmino(object: MsgUndelegatePoolAmino): MsgUndelegatePool;
    toAmino(message: MsgUndelegatePool): MsgUndelegatePoolAmino;
    fromAminoMsg(object: MsgUndelegatePoolAminoMsg): MsgUndelegatePool;
    toAminoMsg(message: MsgUndelegatePool): MsgUndelegatePoolAminoMsg;
    fromProtoMsg(message: MsgUndelegatePoolProtoMsg): MsgUndelegatePool;
    toProto(message: MsgUndelegatePool): Uint8Array;
    toProtoMsg(message: MsgUndelegatePool): MsgUndelegatePoolProtoMsg;
};
export declare const MsgUndelegateOperator: {
    typeUrl: string;
    encode(message: MsgUndelegateOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateOperator;
    fromPartial(object: Partial<MsgUndelegateOperator>): MsgUndelegateOperator;
    fromAmino(object: MsgUndelegateOperatorAmino): MsgUndelegateOperator;
    toAmino(message: MsgUndelegateOperator): MsgUndelegateOperatorAmino;
    fromAminoMsg(object: MsgUndelegateOperatorAminoMsg): MsgUndelegateOperator;
    toAminoMsg(message: MsgUndelegateOperator): MsgUndelegateOperatorAminoMsg;
    fromProtoMsg(message: MsgUndelegateOperatorProtoMsg): MsgUndelegateOperator;
    toProto(message: MsgUndelegateOperator): Uint8Array;
    toProtoMsg(message: MsgUndelegateOperator): MsgUndelegateOperatorProtoMsg;
};
export declare const MsgUndelegateService: {
    typeUrl: string;
    encode(message: MsgUndelegateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateService;
    fromPartial(object: Partial<MsgUndelegateService>): MsgUndelegateService;
    fromAmino(object: MsgUndelegateServiceAmino): MsgUndelegateService;
    toAmino(message: MsgUndelegateService): MsgUndelegateServiceAmino;
    fromAminoMsg(object: MsgUndelegateServiceAminoMsg): MsgUndelegateService;
    toAminoMsg(message: MsgUndelegateService): MsgUndelegateServiceAminoMsg;
    fromProtoMsg(message: MsgUndelegateServiceProtoMsg): MsgUndelegateService;
    toProto(message: MsgUndelegateService): Uint8Array;
    toProtoMsg(message: MsgUndelegateService): MsgUndelegateServiceProtoMsg;
};
export declare const MsgUndelegateResponse: {
    typeUrl: string;
    encode(message: MsgUndelegateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
    fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse;
    toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino;
    fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse;
    fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse;
    toProto(message: MsgUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg;
};
export declare const MsgSetUserPreferences: {
    typeUrl: string;
    encode(message: MsgSetUserPreferences, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUserPreferences;
    fromPartial(object: Partial<MsgSetUserPreferences>): MsgSetUserPreferences;
    fromAmino(object: MsgSetUserPreferencesAmino): MsgSetUserPreferences;
    toAmino(message: MsgSetUserPreferences): MsgSetUserPreferencesAmino;
    fromAminoMsg(object: MsgSetUserPreferencesAminoMsg): MsgSetUserPreferences;
    toAminoMsg(message: MsgSetUserPreferences): MsgSetUserPreferencesAminoMsg;
    fromProtoMsg(message: MsgSetUserPreferencesProtoMsg): MsgSetUserPreferences;
    toProto(message: MsgSetUserPreferences): Uint8Array;
    toProtoMsg(message: MsgSetUserPreferences): MsgSetUserPreferencesProtoMsg;
};
export declare const MsgSetUserPreferencesResponse: {
    typeUrl: string;
    encode(_: MsgSetUserPreferencesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUserPreferencesResponse;
    fromPartial(_: Partial<MsgSetUserPreferencesResponse>): MsgSetUserPreferencesResponse;
    fromAmino(_: MsgSetUserPreferencesResponseAmino): MsgSetUserPreferencesResponse;
    toAmino(_: MsgSetUserPreferencesResponse): MsgSetUserPreferencesResponseAmino;
    fromAminoMsg(object: MsgSetUserPreferencesResponseAminoMsg): MsgSetUserPreferencesResponse;
    fromProtoMsg(message: MsgSetUserPreferencesResponseProtoMsg): MsgSetUserPreferencesResponse;
    toProto(message: MsgSetUserPreferencesResponse): Uint8Array;
    toProtoMsg(message: MsgSetUserPreferencesResponse): MsgSetUserPreferencesResponseProtoMsg;
};
