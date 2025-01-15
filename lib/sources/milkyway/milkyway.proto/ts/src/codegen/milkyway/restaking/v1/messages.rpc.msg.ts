import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.joinService = this.joinService.bind(this);
    this.leaveService = this.leaveService.bind(this);
    this.addOperatorToAllowList = this.addOperatorToAllowList.bind(this);
    this.removeOperatorFromAllowlist = this.removeOperatorFromAllowlist.bind(this);
    this.borrowPoolSecurity = this.borrowPoolSecurity.bind(this);
    this.ceasePoolSecurityBorrow = this.ceasePoolSecurityBorrow.bind(this);
    this.delegatePool = this.delegatePool.bind(this);
    this.delegateOperator = this.delegateOperator.bind(this);
    this.delegateService = this.delegateService.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.undelegatePool = this.undelegatePool.bind(this);
    this.undelegateOperator = this.undelegateOperator.bind(this);
    this.undelegateService = this.undelegateService.bind(this);
    this.setUserPreferences = this.setUserPreferences.bind(this);
  }
  joinService(request: MsgJoinService): Promise<MsgJoinServiceResponse> {
    const data = MsgJoinService.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "JoinService", data);
    return promise.then(data => MsgJoinServiceResponse.decode(new BinaryReader(data)));
  }
  leaveService(request: MsgLeaveService): Promise<MsgLeaveServiceResponse> {
    const data = MsgLeaveService.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "LeaveService", data);
    return promise.then(data => MsgLeaveServiceResponse.decode(new BinaryReader(data)));
  }
  addOperatorToAllowList(request: MsgAddOperatorToAllowList): Promise<MsgAddOperatorToAllowListResponse> {
    const data = MsgAddOperatorToAllowList.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "AddOperatorToAllowList", data);
    return promise.then(data => MsgAddOperatorToAllowListResponse.decode(new BinaryReader(data)));
  }
  removeOperatorFromAllowlist(request: MsgRemoveOperatorFromAllowlist): Promise<MsgRemoveOperatorFromAllowlistResponse> {
    const data = MsgRemoveOperatorFromAllowlist.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "RemoveOperatorFromAllowlist", data);
    return promise.then(data => MsgRemoveOperatorFromAllowlistResponse.decode(new BinaryReader(data)));
  }
  borrowPoolSecurity(request: MsgBorrowPoolSecurity): Promise<MsgBorrowPoolSecurityResponse> {
    const data = MsgBorrowPoolSecurity.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "BorrowPoolSecurity", data);
    return promise.then(data => MsgBorrowPoolSecurityResponse.decode(new BinaryReader(data)));
  }
  ceasePoolSecurityBorrow(request: MsgCeasePoolSecurityBorrow): Promise<MsgCeasePoolSecurityBorrowResponse> {
    const data = MsgCeasePoolSecurityBorrow.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "CeasePoolSecurityBorrow", data);
    return promise.then(data => MsgCeasePoolSecurityBorrowResponse.decode(new BinaryReader(data)));
  }
  delegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse> {
    const data = MsgDelegatePool.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "DelegatePool", data);
    return promise.then(data => MsgDelegatePoolResponse.decode(new BinaryReader(data)));
  }
  delegateOperator(request: MsgDelegateOperator): Promise<MsgDelegateOperatorResponse> {
    const data = MsgDelegateOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "DelegateOperator", data);
    return promise.then(data => MsgDelegateOperatorResponse.decode(new BinaryReader(data)));
  }
  delegateService(request: MsgDelegateService): Promise<MsgDelegateServiceResponse> {
    const data = MsgDelegateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "DelegateService", data);
    return promise.then(data => MsgDelegateServiceResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  undelegatePool(request: MsgUndelegatePool): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegatePool.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "UndelegatePool", data);
    return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
  }
  undelegateOperator(request: MsgUndelegateOperator): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegateOperator.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "UndelegateOperator", data);
    return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
  }
  undelegateService(request: MsgUndelegateService): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "UndelegateService", data);
    return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
  }
  setUserPreferences(request: MsgSetUserPreferences): Promise<MsgSetUserPreferencesResponse> {
    const data = MsgSetUserPreferences.encode(request).finish();
    const promise = this.rpc.request("milkyway.restaking.v1.Msg", "SetUserPreferences", data);
    return promise.then(data => MsgSetUserPreferencesResponse.decode(new BinaryReader(data)));
  }
}