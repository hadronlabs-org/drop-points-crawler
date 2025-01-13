import { TxRpc } from "../../../types";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createService(request: MsgCreateService): Promise<MsgCreateServiceResponse>;
    updateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>;
    activateService(request: MsgActivateService): Promise<MsgActivateServiceResponse>;
    deactivateService(request: MsgDeactivateService): Promise<MsgDeactivateServiceResponse>;
    deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
    transferServiceOwnership(request: MsgTransferServiceOwnership): Promise<MsgTransferServiceOwnershipResponse>;
    setServiceParams(request: MsgSetServiceParams): Promise<MsgSetServiceParamsResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    accreditService(request: MsgAccreditService): Promise<MsgAccreditServiceResponse>;
    revokeServiceAccreditation(request: MsgRevokeServiceAccreditation): Promise<MsgRevokeServiceAccreditationResponse>;
}
