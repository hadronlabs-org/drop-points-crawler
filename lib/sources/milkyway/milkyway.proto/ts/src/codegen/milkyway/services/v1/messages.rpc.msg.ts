import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateService, MsgCreateServiceResponse, MsgUpdateService, MsgUpdateServiceResponse, MsgActivateService, MsgActivateServiceResponse, MsgDeactivateService, MsgDeactivateServiceResponse, MsgDeleteService, MsgDeleteServiceResponse, MsgTransferServiceOwnership, MsgTransferServiceOwnershipResponse, MsgSetServiceParams, MsgSetServiceParamsResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgAccreditService, MsgAccreditServiceResponse, MsgRevokeServiceAccreditation, MsgRevokeServiceAccreditationResponse } from "./messages";
/** Msg defines the services module's gRPC message service. */
export interface Msg {
  /** CreateService defines the operation for registering a new service. */
  createService(request: MsgCreateService): Promise<MsgCreateServiceResponse>;
  /** UpdateService defines the operation for updating an existing service. */
  updateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>;
  /**
   * ActivateService defines the operation for activating an existing
   * service.
   */
  activateService(request: MsgActivateService): Promise<MsgActivateServiceResponse>;
  /**
   * DeactivateService defines the operation for deactivating an existing
   * service.
   */
  deactivateService(request: MsgDeactivateService): Promise<MsgDeactivateServiceResponse>;
  /**
   * DeleteService defines the operation for deleting an existing service
   * that has been deactivated.
   */
  deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
  /**
   * TransferServiceOwnership defines the operation for transferring the
   * ownership of a service to another account.
   */
  transferServiceOwnership(request: MsgTransferServiceOwnership): Promise<MsgTransferServiceOwnershipResponse>;
  /**
   * SetServiceParams defines the operation for setting a service's
   * parameters.
   */
  setServiceParams(request: MsgSetServiceParams): Promise<MsgSetServiceParamsResponse>;
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters.
   * The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * AccreditService defines a (governance) operation for accrediting a service.
   * Since: v1.4.0
   */
  accreditService(request: MsgAccreditService): Promise<MsgAccreditServiceResponse>;
  /**
   * RevokeServiceAccreditation defines a (governance) operation for revoking a
   * service's accreditation. Since: v1.4.0
   */
  revokeServiceAccreditation(request: MsgRevokeServiceAccreditation): Promise<MsgRevokeServiceAccreditationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.createService = this.createService.bind(this);
    this.updateService = this.updateService.bind(this);
    this.activateService = this.activateService.bind(this);
    this.deactivateService = this.deactivateService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.transferServiceOwnership = this.transferServiceOwnership.bind(this);
    this.setServiceParams = this.setServiceParams.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.accreditService = this.accreditService.bind(this);
    this.revokeServiceAccreditation = this.revokeServiceAccreditation.bind(this);
  }
  createService(request: MsgCreateService): Promise<MsgCreateServiceResponse> {
    const data = MsgCreateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "CreateService", data);
    return promise.then(data => MsgCreateServiceResponse.decode(new BinaryReader(data)));
  }
  updateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse> {
    const data = MsgUpdateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "UpdateService", data);
    return promise.then(data => MsgUpdateServiceResponse.decode(new BinaryReader(data)));
  }
  activateService(request: MsgActivateService): Promise<MsgActivateServiceResponse> {
    const data = MsgActivateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "ActivateService", data);
    return promise.then(data => MsgActivateServiceResponse.decode(new BinaryReader(data)));
  }
  deactivateService(request: MsgDeactivateService): Promise<MsgDeactivateServiceResponse> {
    const data = MsgDeactivateService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "DeactivateService", data);
    return promise.then(data => MsgDeactivateServiceResponse.decode(new BinaryReader(data)));
  }
  deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse> {
    const data = MsgDeleteService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "DeleteService", data);
    return promise.then(data => MsgDeleteServiceResponse.decode(new BinaryReader(data)));
  }
  transferServiceOwnership(request: MsgTransferServiceOwnership): Promise<MsgTransferServiceOwnershipResponse> {
    const data = MsgTransferServiceOwnership.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "TransferServiceOwnership", data);
    return promise.then(data => MsgTransferServiceOwnershipResponse.decode(new BinaryReader(data)));
  }
  setServiceParams(request: MsgSetServiceParams): Promise<MsgSetServiceParamsResponse> {
    const data = MsgSetServiceParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "SetServiceParams", data);
    return promise.then(data => MsgSetServiceParamsResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  accreditService(request: MsgAccreditService): Promise<MsgAccreditServiceResponse> {
    const data = MsgAccreditService.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "AccreditService", data);
    return promise.then(data => MsgAccreditServiceResponse.decode(new BinaryReader(data)));
  }
  revokeServiceAccreditation(request: MsgRevokeServiceAccreditation): Promise<MsgRevokeServiceAccreditationResponse> {
    const data = MsgRevokeServiceAccreditation.encode(request).finish();
    const promise = this.rpc.request("milkyway.services.v1.Msg", "RevokeServiceAccreditation", data);
    return promise.then(data => MsgRevokeServiceAccreditationResponse.decode(new BinaryReader(data)));
  }
}