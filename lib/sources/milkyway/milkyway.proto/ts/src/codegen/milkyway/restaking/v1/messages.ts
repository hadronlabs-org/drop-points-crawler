import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { UserPreferences, UserPreferencesAmino, UserPreferencesSDKType } from "./models";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
export interface MsgJoinServiceResponse {}
export interface MsgJoinServiceResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgJoinServiceResponse";
  value: Uint8Array;
}
/** MsgJoinServiceResponse is the return value of MsgJoinService. */
export interface MsgJoinServiceResponseAmino {}
export interface MsgJoinServiceResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgJoinServiceResponse";
  value: MsgJoinServiceResponseAmino;
}
/** MsgJoinServiceResponse is the return value of MsgJoinService. */
export interface MsgJoinServiceResponseSDKType {}
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
export interface MsgLeaveServiceResponse {}
export interface MsgLeaveServiceResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgLeaveServiceResponse";
  value: Uint8Array;
}
/** MsgLeaveServiceResponse is the return value of MsgLeaveService. */
export interface MsgLeaveServiceResponseAmino {}
export interface MsgLeaveServiceResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgLeaveServiceResponse";
  value: MsgLeaveServiceResponseAmino;
}
/** MsgLeaveServiceResponse is the return value of MsgLeaveService. */
export interface MsgLeaveServiceResponseSDKType {}
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
export interface MsgAddOperatorToAllowListResponse {}
export interface MsgAddOperatorToAllowListResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse";
  value: Uint8Array;
}
/**
 * MsgAddOperatorToAllowListResponse is the return value of
 * MsgAddOperatorToAllowList.
 */
export interface MsgAddOperatorToAllowListResponseAmino {}
export interface MsgAddOperatorToAllowListResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse";
  value: MsgAddOperatorToAllowListResponseAmino;
}
/**
 * MsgAddOperatorToAllowListResponse is the return value of
 * MsgAddOperatorToAllowList.
 */
export interface MsgAddOperatorToAllowListResponseSDKType {}
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
export interface MsgRemoveOperatorFromAllowlistResponse {}
export interface MsgRemoveOperatorFromAllowlistResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveOperatorFromAllowlistResponse is the return value of
 * MsgRemoveOperatorFromAllowlist.
 */
export interface MsgRemoveOperatorFromAllowlistResponseAmino {}
export interface MsgRemoveOperatorFromAllowlistResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse";
  value: MsgRemoveOperatorFromAllowlistResponseAmino;
}
/**
 * MsgRemoveOperatorFromAllowlistResponse is the return value of
 * MsgRemoveOperatorFromAllowlist.
 */
export interface MsgRemoveOperatorFromAllowlistResponseSDKType {}
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
export interface MsgBorrowPoolSecurityResponse {}
export interface MsgBorrowPoolSecurityResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse";
  value: Uint8Array;
}
/** MsgBorrowPoolSecurityResponse is the return value of MsgBorrowPoolSecurity. */
export interface MsgBorrowPoolSecurityResponseAmino {}
export interface MsgBorrowPoolSecurityResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse";
  value: MsgBorrowPoolSecurityResponseAmino;
}
/** MsgBorrowPoolSecurityResponse is the return value of MsgBorrowPoolSecurity. */
export interface MsgBorrowPoolSecurityResponseSDKType {}
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
export interface MsgCeasePoolSecurityBorrowResponse {}
export interface MsgCeasePoolSecurityBorrowResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse";
  value: Uint8Array;
}
/**
 * MsgCeasePoolSecurityBorrowResponse is the return value of
 * MsgCeasePoolSecurityBorrow.
 */
export interface MsgCeasePoolSecurityBorrowResponseAmino {}
export interface MsgCeasePoolSecurityBorrowResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse";
  value: MsgCeasePoolSecurityBorrowResponseAmino;
}
/**
 * MsgCeasePoolSecurityBorrowResponse is the return value of
 * MsgCeasePoolSecurityBorrow.
 */
export interface MsgCeasePoolSecurityBorrowResponseSDKType {}
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
export interface MsgDelegatePoolResponse {}
export interface MsgDelegatePoolResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgDelegatePoolResponse";
  value: Uint8Array;
}
/** MsgDelegatePoolResponse defines the return value of MsgDelegatePool. */
export interface MsgDelegatePoolResponseAmino {}
export interface MsgDelegatePoolResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgDelegatePoolResponse";
  value: MsgDelegatePoolResponseAmino;
}
/** MsgDelegatePoolResponse defines the return value of MsgDelegatePool. */
export interface MsgDelegatePoolResponseSDKType {}
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
export interface MsgDelegateOperatorResponse {}
export interface MsgDelegateOperatorResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateOperatorResponse";
  value: Uint8Array;
}
/** MsgDelegateOperatorResponse is the return value of MsgDelegateOperator. */
export interface MsgDelegateOperatorResponseAmino {}
export interface MsgDelegateOperatorResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgDelegateOperatorResponse";
  value: MsgDelegateOperatorResponseAmino;
}
/** MsgDelegateOperatorResponse is the return value of MsgDelegateOperator. */
export interface MsgDelegateOperatorResponseSDKType {}
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
export interface MsgDelegateServiceResponse {}
export interface MsgDelegateServiceResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateServiceResponse";
  value: Uint8Array;
}
/** MsgDelegateServiceResponse is the return value of MsgDelegateService. */
export interface MsgDelegateServiceResponseAmino {}
export interface MsgDelegateServiceResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgDelegateServiceResponse";
  value: MsgDelegateServiceResponseAmino;
}
/** MsgDelegateServiceResponse is the return value of MsgDelegateService. */
export interface MsgDelegateServiceResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
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
export interface MsgSetUserPreferencesResponse {}
export interface MsgSetUserPreferencesResponseProtoMsg {
  typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse";
  value: Uint8Array;
}
/** MsgSetUserPreferencesResponse is the return value of MsgSetUserPreferences. */
export interface MsgSetUserPreferencesResponseAmino {}
export interface MsgSetUserPreferencesResponseAminoMsg {
  type: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse";
  value: MsgSetUserPreferencesResponseAmino;
}
/** MsgSetUserPreferencesResponse is the return value of MsgSetUserPreferences. */
export interface MsgSetUserPreferencesResponseSDKType {}
function createBaseMsgJoinService(): MsgJoinService {
  return {
    sender: "",
    operatorId: 0,
    serviceId: 0
  };
}
export const MsgJoinService = {
  typeUrl: "/milkyway.restaking.v1.MsgJoinService",
  encode(message: MsgJoinService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        case 3:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgJoinService>): MsgJoinService {
    const message = createBaseMsgJoinService();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgJoinServiceAmino): MsgJoinService {
    const message = createBaseMsgJoinService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgJoinService): MsgJoinServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgJoinServiceAminoMsg): MsgJoinService {
    return MsgJoinService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinService): MsgJoinServiceAminoMsg {
    return {
      type: "milkyway/MsgJoinService",
      value: MsgJoinService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinServiceProtoMsg): MsgJoinService {
    return MsgJoinService.decode(message.value);
  },
  toProto(message: MsgJoinService): Uint8Array {
    return MsgJoinService.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinService): MsgJoinServiceProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgJoinService",
      value: MsgJoinService.encode(message).finish()
    };
  }
};
function createBaseMsgJoinServiceResponse(): MsgJoinServiceResponse {
  return {};
}
export const MsgJoinServiceResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgJoinServiceResponse",
  encode(_: MsgJoinServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgJoinServiceResponse>): MsgJoinServiceResponse {
    const message = createBaseMsgJoinServiceResponse();
    return message;
  },
  fromAmino(_: MsgJoinServiceResponseAmino): MsgJoinServiceResponse {
    const message = createBaseMsgJoinServiceResponse();
    return message;
  },
  toAmino(_: MsgJoinServiceResponse): MsgJoinServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgJoinServiceResponseAminoMsg): MsgJoinServiceResponse {
    return MsgJoinServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgJoinServiceResponseProtoMsg): MsgJoinServiceResponse {
    return MsgJoinServiceResponse.decode(message.value);
  },
  toProto(message: MsgJoinServiceResponse): Uint8Array {
    return MsgJoinServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinServiceResponse): MsgJoinServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgJoinServiceResponse",
      value: MsgJoinServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveService(): MsgLeaveService {
  return {
    sender: "",
    operatorId: 0,
    serviceId: 0
  };
}
export const MsgLeaveService = {
  typeUrl: "/milkyway.restaking.v1.MsgLeaveService",
  encode(message: MsgLeaveService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    if (message.serviceId !== 0) {
      writer.uint32(24).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        case 3:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgLeaveService>): MsgLeaveService {
    const message = createBaseMsgLeaveService();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgLeaveServiceAmino): MsgLeaveService {
    const message = createBaseMsgLeaveService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgLeaveService): MsgLeaveServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveServiceAminoMsg): MsgLeaveService {
    return MsgLeaveService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveService): MsgLeaveServiceAminoMsg {
    return {
      type: "milkyway/MsgLeaveService",
      value: MsgLeaveService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveServiceProtoMsg): MsgLeaveService {
    return MsgLeaveService.decode(message.value);
  },
  toProto(message: MsgLeaveService): Uint8Array {
    return MsgLeaveService.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveService): MsgLeaveServiceProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgLeaveService",
      value: MsgLeaveService.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveServiceResponse(): MsgLeaveServiceResponse {
  return {};
}
export const MsgLeaveServiceResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgLeaveServiceResponse",
  encode(_: MsgLeaveServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgLeaveServiceResponse>): MsgLeaveServiceResponse {
    const message = createBaseMsgLeaveServiceResponse();
    return message;
  },
  fromAmino(_: MsgLeaveServiceResponseAmino): MsgLeaveServiceResponse {
    const message = createBaseMsgLeaveServiceResponse();
    return message;
  },
  toAmino(_: MsgLeaveServiceResponse): MsgLeaveServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveServiceResponseAminoMsg): MsgLeaveServiceResponse {
    return MsgLeaveServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLeaveServiceResponseProtoMsg): MsgLeaveServiceResponse {
    return MsgLeaveServiceResponse.decode(message.value);
  },
  toProto(message: MsgLeaveServiceResponse): Uint8Array {
    return MsgLeaveServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveServiceResponse): MsgLeaveServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgLeaveServiceResponse",
      value: MsgLeaveServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddOperatorToAllowList(): MsgAddOperatorToAllowList {
  return {
    sender: "",
    serviceId: 0,
    operatorId: 0
  };
}
export const MsgAddOperatorToAllowList = {
  typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList",
  encode(message: MsgAddOperatorToAllowList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(24).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperatorToAllowList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOperatorToAllowList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddOperatorToAllowList>): MsgAddOperatorToAllowList {
    const message = createBaseMsgAddOperatorToAllowList();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgAddOperatorToAllowListAmino): MsgAddOperatorToAllowList {
    const message = createBaseMsgAddOperatorToAllowList();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgAddOperatorToAllowListAminoMsg): MsgAddOperatorToAllowList {
    return MsgAddOperatorToAllowList.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListAminoMsg {
    return {
      type: "milkyway/MsgAddOperatorToAllowList",
      value: MsgAddOperatorToAllowList.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddOperatorToAllowListProtoMsg): MsgAddOperatorToAllowList {
    return MsgAddOperatorToAllowList.decode(message.value);
  },
  toProto(message: MsgAddOperatorToAllowList): Uint8Array {
    return MsgAddOperatorToAllowList.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOperatorToAllowList): MsgAddOperatorToAllowListProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowList",
      value: MsgAddOperatorToAllowList.encode(message).finish()
    };
  }
};
function createBaseMsgAddOperatorToAllowListResponse(): MsgAddOperatorToAllowListResponse {
  return {};
}
export const MsgAddOperatorToAllowListResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse",
  encode(_: MsgAddOperatorToAllowListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddOperatorToAllowListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOperatorToAllowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgAddOperatorToAllowListResponse>): MsgAddOperatorToAllowListResponse {
    const message = createBaseMsgAddOperatorToAllowListResponse();
    return message;
  },
  fromAmino(_: MsgAddOperatorToAllowListResponseAmino): MsgAddOperatorToAllowListResponse {
    const message = createBaseMsgAddOperatorToAllowListResponse();
    return message;
  },
  toAmino(_: MsgAddOperatorToAllowListResponse): MsgAddOperatorToAllowListResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddOperatorToAllowListResponseAminoMsg): MsgAddOperatorToAllowListResponse {
    return MsgAddOperatorToAllowListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddOperatorToAllowListResponseProtoMsg): MsgAddOperatorToAllowListResponse {
    return MsgAddOperatorToAllowListResponse.decode(message.value);
  },
  toProto(message: MsgAddOperatorToAllowListResponse): Uint8Array {
    return MsgAddOperatorToAllowListResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddOperatorToAllowListResponse): MsgAddOperatorToAllowListResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgAddOperatorToAllowListResponse",
      value: MsgAddOperatorToAllowListResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperatorFromAllowlist(): MsgRemoveOperatorFromAllowlist {
  return {
    sender: "",
    serviceId: 0,
    operatorId: 0
  };
}
export const MsgRemoveOperatorFromAllowlist = {
  typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist",
  encode(message: MsgRemoveOperatorFromAllowlist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(24).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorFromAllowlist {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperatorFromAllowlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveOperatorFromAllowlist>): MsgRemoveOperatorFromAllowlist {
    const message = createBaseMsgRemoveOperatorFromAllowlist();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgRemoveOperatorFromAllowlistAmino): MsgRemoveOperatorFromAllowlist {
    const message = createBaseMsgRemoveOperatorFromAllowlist();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorFromAllowlistAminoMsg): MsgRemoveOperatorFromAllowlist {
    return MsgRemoveOperatorFromAllowlist.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistAminoMsg {
    return {
      type: "milkyway/MsgRemoveOperatorFromAllowlist",
      value: MsgRemoveOperatorFromAllowlist.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveOperatorFromAllowlistProtoMsg): MsgRemoveOperatorFromAllowlist {
    return MsgRemoveOperatorFromAllowlist.decode(message.value);
  },
  toProto(message: MsgRemoveOperatorFromAllowlist): Uint8Array {
    return MsgRemoveOperatorFromAllowlist.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperatorFromAllowlist): MsgRemoveOperatorFromAllowlistProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist",
      value: MsgRemoveOperatorFromAllowlist.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveOperatorFromAllowlistResponse(): MsgRemoveOperatorFromAllowlistResponse {
  return {};
}
export const MsgRemoveOperatorFromAllowlistResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse",
  encode(_: MsgRemoveOperatorFromAllowlistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveOperatorFromAllowlistResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveOperatorFromAllowlistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRemoveOperatorFromAllowlistResponse>): MsgRemoveOperatorFromAllowlistResponse {
    const message = createBaseMsgRemoveOperatorFromAllowlistResponse();
    return message;
  },
  fromAmino(_: MsgRemoveOperatorFromAllowlistResponseAmino): MsgRemoveOperatorFromAllowlistResponse {
    const message = createBaseMsgRemoveOperatorFromAllowlistResponse();
    return message;
  },
  toAmino(_: MsgRemoveOperatorFromAllowlistResponse): MsgRemoveOperatorFromAllowlistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveOperatorFromAllowlistResponseAminoMsg): MsgRemoveOperatorFromAllowlistResponse {
    return MsgRemoveOperatorFromAllowlistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveOperatorFromAllowlistResponseProtoMsg): MsgRemoveOperatorFromAllowlistResponse {
    return MsgRemoveOperatorFromAllowlistResponse.decode(message.value);
  },
  toProto(message: MsgRemoveOperatorFromAllowlistResponse): Uint8Array {
    return MsgRemoveOperatorFromAllowlistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveOperatorFromAllowlistResponse): MsgRemoveOperatorFromAllowlistResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlistResponse",
      value: MsgRemoveOperatorFromAllowlistResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBorrowPoolSecurity(): MsgBorrowPoolSecurity {
  return {
    sender: "",
    serviceId: 0,
    poolId: 0
  };
}
export const MsgBorrowPoolSecurity = {
  typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity",
  encode(message: MsgBorrowPoolSecurity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.poolId !== 0) {
      writer.uint32(24).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowPoolSecurity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowPoolSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.poolId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBorrowPoolSecurity>): MsgBorrowPoolSecurity {
    const message = createBaseMsgBorrowPoolSecurity();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: MsgBorrowPoolSecurityAmino): MsgBorrowPoolSecurity {
    const message = createBaseMsgBorrowPoolSecurity();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: MsgBorrowPoolSecurityAminoMsg): MsgBorrowPoolSecurity {
    return MsgBorrowPoolSecurity.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityAminoMsg {
    return {
      type: "milkyway/MsgBorrowPoolSecurity",
      value: MsgBorrowPoolSecurity.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBorrowPoolSecurityProtoMsg): MsgBorrowPoolSecurity {
    return MsgBorrowPoolSecurity.decode(message.value);
  },
  toProto(message: MsgBorrowPoolSecurity): Uint8Array {
    return MsgBorrowPoolSecurity.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrowPoolSecurity): MsgBorrowPoolSecurityProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurity",
      value: MsgBorrowPoolSecurity.encode(message).finish()
    };
  }
};
function createBaseMsgBorrowPoolSecurityResponse(): MsgBorrowPoolSecurityResponse {
  return {};
}
export const MsgBorrowPoolSecurityResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse",
  encode(_: MsgBorrowPoolSecurityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowPoolSecurityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowPoolSecurityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBorrowPoolSecurityResponse>): MsgBorrowPoolSecurityResponse {
    const message = createBaseMsgBorrowPoolSecurityResponse();
    return message;
  },
  fromAmino(_: MsgBorrowPoolSecurityResponseAmino): MsgBorrowPoolSecurityResponse {
    const message = createBaseMsgBorrowPoolSecurityResponse();
    return message;
  },
  toAmino(_: MsgBorrowPoolSecurityResponse): MsgBorrowPoolSecurityResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBorrowPoolSecurityResponseAminoMsg): MsgBorrowPoolSecurityResponse {
    return MsgBorrowPoolSecurityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBorrowPoolSecurityResponseProtoMsg): MsgBorrowPoolSecurityResponse {
    return MsgBorrowPoolSecurityResponse.decode(message.value);
  },
  toProto(message: MsgBorrowPoolSecurityResponse): Uint8Array {
    return MsgBorrowPoolSecurityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBorrowPoolSecurityResponse): MsgBorrowPoolSecurityResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgBorrowPoolSecurityResponse",
      value: MsgBorrowPoolSecurityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCeasePoolSecurityBorrow(): MsgCeasePoolSecurityBorrow {
  return {
    sender: "",
    serviceId: 0,
    poolId: 0
  };
}
export const MsgCeasePoolSecurityBorrow = {
  typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow",
  encode(message: MsgCeasePoolSecurityBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.poolId !== 0) {
      writer.uint32(24).uint32(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCeasePoolSecurityBorrow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCeasePoolSecurityBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.poolId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCeasePoolSecurityBorrow>): MsgCeasePoolSecurityBorrow {
    const message = createBaseMsgCeasePoolSecurityBorrow();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.poolId = object.poolId ?? 0;
    return message;
  },
  fromAmino(object: MsgCeasePoolSecurityBorrowAmino): MsgCeasePoolSecurityBorrow {
    const message = createBaseMsgCeasePoolSecurityBorrow();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    return message;
  },
  toAmino(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.pool_id = message.poolId === 0 ? undefined : message.poolId;
    return obj;
  },
  fromAminoMsg(object: MsgCeasePoolSecurityBorrowAminoMsg): MsgCeasePoolSecurityBorrow {
    return MsgCeasePoolSecurityBorrow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowAminoMsg {
    return {
      type: "milkyway/MsgCeasePoolSecurityBorrow",
      value: MsgCeasePoolSecurityBorrow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCeasePoolSecurityBorrowProtoMsg): MsgCeasePoolSecurityBorrow {
    return MsgCeasePoolSecurityBorrow.decode(message.value);
  },
  toProto(message: MsgCeasePoolSecurityBorrow): Uint8Array {
    return MsgCeasePoolSecurityBorrow.encode(message).finish();
  },
  toProtoMsg(message: MsgCeasePoolSecurityBorrow): MsgCeasePoolSecurityBorrowProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow",
      value: MsgCeasePoolSecurityBorrow.encode(message).finish()
    };
  }
};
function createBaseMsgCeasePoolSecurityBorrowResponse(): MsgCeasePoolSecurityBorrowResponse {
  return {};
}
export const MsgCeasePoolSecurityBorrowResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse",
  encode(_: MsgCeasePoolSecurityBorrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCeasePoolSecurityBorrowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCeasePoolSecurityBorrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCeasePoolSecurityBorrowResponse>): MsgCeasePoolSecurityBorrowResponse {
    const message = createBaseMsgCeasePoolSecurityBorrowResponse();
    return message;
  },
  fromAmino(_: MsgCeasePoolSecurityBorrowResponseAmino): MsgCeasePoolSecurityBorrowResponse {
    const message = createBaseMsgCeasePoolSecurityBorrowResponse();
    return message;
  },
  toAmino(_: MsgCeasePoolSecurityBorrowResponse): MsgCeasePoolSecurityBorrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCeasePoolSecurityBorrowResponseAminoMsg): MsgCeasePoolSecurityBorrowResponse {
    return MsgCeasePoolSecurityBorrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCeasePoolSecurityBorrowResponseProtoMsg): MsgCeasePoolSecurityBorrowResponse {
    return MsgCeasePoolSecurityBorrowResponse.decode(message.value);
  },
  toProto(message: MsgCeasePoolSecurityBorrowResponse): Uint8Array {
    return MsgCeasePoolSecurityBorrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCeasePoolSecurityBorrowResponse): MsgCeasePoolSecurityBorrowResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrowResponse",
      value: MsgCeasePoolSecurityBorrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegatePool(): MsgDelegatePool {
  return {
    delegator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDelegatePool = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegatePool",
  encode(message: MsgDelegatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegatePool>): MsgDelegatePool {
    const message = createBaseMsgDelegatePool();
    message.delegator = object.delegator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDelegatePoolAmino): MsgDelegatePool {
    const message = createBaseMsgDelegatePool();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDelegatePool): MsgDelegatePoolAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegatePoolAminoMsg): MsgDelegatePool {
    return MsgDelegatePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegatePool): MsgDelegatePoolAminoMsg {
    return {
      type: "milkyway/MsgDelegatePool",
      value: MsgDelegatePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegatePoolProtoMsg): MsgDelegatePool {
    return MsgDelegatePool.decode(message.value);
  },
  toProto(message: MsgDelegatePool): Uint8Array {
    return MsgDelegatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegatePool): MsgDelegatePoolProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegatePool",
      value: MsgDelegatePool.encode(message).finish()
    };
  }
};
function createBaseMsgDelegatePoolResponse(): MsgDelegatePoolResponse {
  return {};
}
export const MsgDelegatePoolResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegatePoolResponse",
  encode(_: MsgDelegatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDelegatePoolResponse>): MsgDelegatePoolResponse {
    const message = createBaseMsgDelegatePoolResponse();
    return message;
  },
  fromAmino(_: MsgDelegatePoolResponseAmino): MsgDelegatePoolResponse {
    const message = createBaseMsgDelegatePoolResponse();
    return message;
  },
  toAmino(_: MsgDelegatePoolResponse): MsgDelegatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegatePoolResponseAminoMsg): MsgDelegatePoolResponse {
    return MsgDelegatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegatePoolResponseProtoMsg): MsgDelegatePoolResponse {
    return MsgDelegatePoolResponse.decode(message.value);
  },
  toProto(message: MsgDelegatePoolResponse): Uint8Array {
    return MsgDelegatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegatePoolResponse): MsgDelegatePoolResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegatePoolResponse",
      value: MsgDelegatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateOperator(): MsgDelegateOperator {
  return {
    delegator: "",
    operatorId: 0,
    amount: []
  };
}
export const MsgDelegateOperator = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator",
  encode(message: MsgDelegateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateOperator>): MsgDelegateOperator {
    const message = createBaseMsgDelegateOperator();
    message.delegator = object.delegator ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDelegateOperatorAmino): MsgDelegateOperator {
    const message = createBaseMsgDelegateOperator();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDelegateOperator): MsgDelegateOperatorAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDelegateOperatorAminoMsg): MsgDelegateOperator {
    return MsgDelegateOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateOperator): MsgDelegateOperatorAminoMsg {
    return {
      type: "milkyway/MsgDelegateOperator",
      value: MsgDelegateOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateOperatorProtoMsg): MsgDelegateOperator {
    return MsgDelegateOperator.decode(message.value);
  },
  toProto(message: MsgDelegateOperator): Uint8Array {
    return MsgDelegateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateOperator): MsgDelegateOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegateOperator",
      value: MsgDelegateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateOperatorResponse(): MsgDelegateOperatorResponse {
  return {};
}
export const MsgDelegateOperatorResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateOperatorResponse",
  encode(_: MsgDelegateOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDelegateOperatorResponse>): MsgDelegateOperatorResponse {
    const message = createBaseMsgDelegateOperatorResponse();
    return message;
  },
  fromAmino(_: MsgDelegateOperatorResponseAmino): MsgDelegateOperatorResponse {
    const message = createBaseMsgDelegateOperatorResponse();
    return message;
  },
  toAmino(_: MsgDelegateOperatorResponse): MsgDelegateOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateOperatorResponseAminoMsg): MsgDelegateOperatorResponse {
    return MsgDelegateOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateOperatorResponseProtoMsg): MsgDelegateOperatorResponse {
    return MsgDelegateOperatorResponse.decode(message.value);
  },
  toProto(message: MsgDelegateOperatorResponse): Uint8Array {
    return MsgDelegateOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateOperatorResponse): MsgDelegateOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegateOperatorResponse",
      value: MsgDelegateOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateService(): MsgDelegateService {
  return {
    delegator: "",
    serviceId: 0,
    amount: []
  };
}
export const MsgDelegateService = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateService",
  encode(message: MsgDelegateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDelegateService>): MsgDelegateService {
    const message = createBaseMsgDelegateService();
    message.delegator = object.delegator ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDelegateServiceAmino): MsgDelegateService {
    const message = createBaseMsgDelegateService();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDelegateService): MsgDelegateServiceAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDelegateServiceAminoMsg): MsgDelegateService {
    return MsgDelegateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateService): MsgDelegateServiceAminoMsg {
    return {
      type: "milkyway/MsgDelegateService",
      value: MsgDelegateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateServiceProtoMsg): MsgDelegateService {
    return MsgDelegateService.decode(message.value);
  },
  toProto(message: MsgDelegateService): Uint8Array {
    return MsgDelegateService.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateService): MsgDelegateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegateService",
      value: MsgDelegateService.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateServiceResponse(): MsgDelegateServiceResponse {
  return {};
}
export const MsgDelegateServiceResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgDelegateServiceResponse",
  encode(_: MsgDelegateServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDelegateServiceResponse>): MsgDelegateServiceResponse {
    const message = createBaseMsgDelegateServiceResponse();
    return message;
  },
  fromAmino(_: MsgDelegateServiceResponseAmino): MsgDelegateServiceResponse {
    const message = createBaseMsgDelegateServiceResponse();
    return message;
  },
  toAmino(_: MsgDelegateServiceResponse): MsgDelegateServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateServiceResponseAminoMsg): MsgDelegateServiceResponse {
    return MsgDelegateServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateServiceResponseProtoMsg): MsgDelegateServiceResponse {
    return MsgDelegateServiceResponse.decode(message.value);
  },
  toProto(message: MsgDelegateServiceResponse): Uint8Array {
    return MsgDelegateServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateServiceResponse): MsgDelegateServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgDelegateServiceResponse",
      value: MsgDelegateServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/milkyway.restaking.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "milkyway/restaking/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegatePool(): MsgUndelegatePool {
  return {
    delegator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUndelegatePool = {
  typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool",
  encode(message: MsgUndelegatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegatePool>): MsgUndelegatePool {
    const message = createBaseMsgUndelegatePool();
    message.delegator = object.delegator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUndelegatePoolAmino): MsgUndelegatePool {
    const message = createBaseMsgUndelegatePool();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUndelegatePool): MsgUndelegatePoolAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUndelegatePoolAminoMsg): MsgUndelegatePool {
    return MsgUndelegatePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegatePool): MsgUndelegatePoolAminoMsg {
    return {
      type: "milkyway/MsgUndelegatePool",
      value: MsgUndelegatePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegatePoolProtoMsg): MsgUndelegatePool {
    return MsgUndelegatePool.decode(message.value);
  },
  toProto(message: MsgUndelegatePool): Uint8Array {
    return MsgUndelegatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegatePool): MsgUndelegatePoolProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUndelegatePool",
      value: MsgUndelegatePool.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateOperator(): MsgUndelegateOperator {
  return {
    delegator: "",
    operatorId: 0,
    amount: []
  };
}
export const MsgUndelegateOperator = {
  typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator",
  encode(message: MsgUndelegateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateOperator>): MsgUndelegateOperator {
    const message = createBaseMsgUndelegateOperator();
    message.delegator = object.delegator ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUndelegateOperatorAmino): MsgUndelegateOperator {
    const message = createBaseMsgUndelegateOperator();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUndelegateOperator): MsgUndelegateOperatorAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateOperatorAminoMsg): MsgUndelegateOperator {
    return MsgUndelegateOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateOperator): MsgUndelegateOperatorAminoMsg {
    return {
      type: "milkyway/MsgUndelegateOperator",
      value: MsgUndelegateOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateOperatorProtoMsg): MsgUndelegateOperator {
    return MsgUndelegateOperator.decode(message.value);
  },
  toProto(message: MsgUndelegateOperator): Uint8Array {
    return MsgUndelegateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateOperator): MsgUndelegateOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUndelegateOperator",
      value: MsgUndelegateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateService(): MsgUndelegateService {
  return {
    delegator: "",
    serviceId: 0,
    amount: []
  };
}
export const MsgUndelegateService = {
  typeUrl: "/milkyway.restaking.v1.MsgUndelegateService",
  encode(message: MsgUndelegateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateService>): MsgUndelegateService {
    const message = createBaseMsgUndelegateService();
    message.delegator = object.delegator ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUndelegateServiceAmino): MsgUndelegateService {
    const message = createBaseMsgUndelegateService();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUndelegateService): MsgUndelegateServiceAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateServiceAminoMsg): MsgUndelegateService {
    return MsgUndelegateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateService): MsgUndelegateServiceAminoMsg {
    return {
      type: "milkyway/MsgUndelegateService",
      value: MsgUndelegateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateServiceProtoMsg): MsgUndelegateService {
    return MsgUndelegateService.decode(message.value);
  },
  toProto(message: MsgUndelegateService): Uint8Array {
    return MsgUndelegateService.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateService): MsgUndelegateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUndelegateService",
      value: MsgUndelegateService.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    completionTime: new Date()
  };
}
export const MsgUndelegateResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgUndelegateResponse",
  encode(message: MsgUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
  fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    return message;
  },
  toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : new Date();
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetUserPreferences(): MsgSetUserPreferences {
  return {
    user: "",
    preferences: UserPreferences.fromPartial({})
  };
}
export const MsgSetUserPreferences = {
  typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences",
  encode(message: MsgSetUserPreferences, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.preferences !== undefined) {
      UserPreferences.encode(message.preferences, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUserPreferences {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.preferences = UserPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetUserPreferences>): MsgSetUserPreferences {
    const message = createBaseMsgSetUserPreferences();
    message.user = object.user ?? "";
    message.preferences = object.preferences !== undefined && object.preferences !== null ? UserPreferences.fromPartial(object.preferences) : undefined;
    return message;
  },
  fromAmino(object: MsgSetUserPreferencesAmino): MsgSetUserPreferences {
    const message = createBaseMsgSetUserPreferences();
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.preferences !== undefined && object.preferences !== null) {
      message.preferences = UserPreferences.fromAmino(object.preferences);
    }
    return message;
  },
  toAmino(message: MsgSetUserPreferences): MsgSetUserPreferencesAmino {
    const obj: any = {};
    obj.user = message.user === "" ? undefined : message.user;
    obj.preferences = message.preferences ? UserPreferences.toAmino(message.preferences) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetUserPreferencesAminoMsg): MsgSetUserPreferences {
    return MsgSetUserPreferences.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetUserPreferences): MsgSetUserPreferencesAminoMsg {
    return {
      type: "milkyway/MsgSetUserPreferences",
      value: MsgSetUserPreferences.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetUserPreferencesProtoMsg): MsgSetUserPreferences {
    return MsgSetUserPreferences.decode(message.value);
  },
  toProto(message: MsgSetUserPreferences): Uint8Array {
    return MsgSetUserPreferences.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUserPreferences): MsgSetUserPreferencesProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferences",
      value: MsgSetUserPreferences.encode(message).finish()
    };
  }
};
function createBaseMsgSetUserPreferencesResponse(): MsgSetUserPreferencesResponse {
  return {};
}
export const MsgSetUserPreferencesResponse = {
  typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse",
  encode(_: MsgSetUserPreferencesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUserPreferencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetUserPreferencesResponse>): MsgSetUserPreferencesResponse {
    const message = createBaseMsgSetUserPreferencesResponse();
    return message;
  },
  fromAmino(_: MsgSetUserPreferencesResponseAmino): MsgSetUserPreferencesResponse {
    const message = createBaseMsgSetUserPreferencesResponse();
    return message;
  },
  toAmino(_: MsgSetUserPreferencesResponse): MsgSetUserPreferencesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetUserPreferencesResponseAminoMsg): MsgSetUserPreferencesResponse {
    return MsgSetUserPreferencesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUserPreferencesResponseProtoMsg): MsgSetUserPreferencesResponse {
    return MsgSetUserPreferencesResponse.decode(message.value);
  },
  toProto(message: MsgSetUserPreferencesResponse): Uint8Array {
    return MsgSetUserPreferencesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUserPreferencesResponse): MsgSetUserPreferencesResponseProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.MsgSetUserPreferencesResponse",
      value: MsgSetUserPreferencesResponse.encode(message).finish()
    };
  }
};