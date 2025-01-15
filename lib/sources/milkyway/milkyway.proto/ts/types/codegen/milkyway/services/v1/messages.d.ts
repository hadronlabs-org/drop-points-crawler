import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ServiceParams, ServiceParamsAmino, ServiceParamsSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgCreateServiceResponse defines the message structure for the
 * CreateService gRPC service method. It allows an account to register a new
 * service that can be validated by operators. It requires a sender address
 * as well as the details of the service to be registered.
 */
export interface MsgCreateService {
    /** Sender is the address of the user registering the service */
    sender: string;
    /** Name is the name of the service */
    name: string;
    /** Description is the description of the service */
    description: string;
    /** Website is the website of the service */
    website: string;
    /** PictureURL is the URL of the service picture */
    pictureUrl: string;
    /**
     * FeeAmount represents the fees that are going to be paid to create the
     * service. These should always be greater or equals of any of the coins
     * specified inside the ServiceRegistrationFee field of the modules params.
     * If no fees are specified inside the module parameters, this field can be
     * omitted.
     */
    feeAmount: Coin[];
}
export interface MsgCreateServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgCreateService";
    value: Uint8Array;
}
/**
 * MsgCreateServiceResponse defines the message structure for the
 * CreateService gRPC service method. It allows an account to register a new
 * service that can be validated by operators. It requires a sender address
 * as well as the details of the service to be registered.
 */
export interface MsgCreateServiceAmino {
    /** Sender is the address of the user registering the service */
    sender?: string;
    /** Name is the name of the service */
    name?: string;
    /** Description is the description of the service */
    description?: string;
    /** Website is the website of the service */
    website?: string;
    /** PictureURL is the URL of the service picture */
    picture_url?: string;
    /**
     * FeeAmount represents the fees that are going to be paid to create the
     * service. These should always be greater or equals of any of the coins
     * specified inside the ServiceRegistrationFee field of the modules params.
     * If no fees are specified inside the module parameters, this field can be
     * omitted.
     */
    fee_amount?: CoinAmino[];
}
export interface MsgCreateServiceAminoMsg {
    type: "milkyway/services/MsgCreateService";
    value: MsgCreateServiceAmino;
}
/**
 * MsgCreateServiceResponse defines the message structure for the
 * CreateService gRPC service method. It allows an account to register a new
 * service that can be validated by operators. It requires a sender address
 * as well as the details of the service to be registered.
 */
export interface MsgCreateServiceSDKType {
    sender: string;
    name: string;
    description: string;
    website: string;
    picture_url: string;
    fee_amount: CoinSDKType[];
}
/**
 * MsgCreateServiceResponse is the return value of MsgCreateService.
 * It returns the newly created service ID.
 */
export interface MsgCreateServiceResponse {
    /** NewServiceID is the ID of the newly registered service */
    newServiceId: number;
}
export interface MsgCreateServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgCreateServiceResponse";
    value: Uint8Array;
}
/**
 * MsgCreateServiceResponse is the return value of MsgCreateService.
 * It returns the newly created service ID.
 */
export interface MsgCreateServiceResponseAmino {
    /** NewServiceID is the ID of the newly registered service */
    new_service_id?: number;
}
export interface MsgCreateServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgCreateServiceResponse";
    value: MsgCreateServiceResponseAmino;
}
/**
 * MsgCreateServiceResponse is the return value of MsgCreateService.
 * It returns the newly created service ID.
 */
export interface MsgCreateServiceResponseSDKType {
    new_service_id: number;
}
/**
 * MsgUpdateService defines the message structure for the UpdateService gRPC
 * service method. It allows the service admin to update the details of
 * an existing service.
 */
export interface MsgUpdateService {
    /** Sender is the address of the user updating the service */
    sender: string;
    /** ID represents the ID of the service to be updated */
    serviceId: number;
    /**
     * Name is the new name of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    name: string;
    /**
     * Description is the new description of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    description: string;
    /**
     * Website is the new website of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    website: string;
    /**
     * PictureURL is the new URL of the service picture.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    pictureUrl: string;
}
export interface MsgUpdateServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgUpdateService";
    value: Uint8Array;
}
/**
 * MsgUpdateService defines the message structure for the UpdateService gRPC
 * service method. It allows the service admin to update the details of
 * an existing service.
 */
export interface MsgUpdateServiceAmino {
    /** Sender is the address of the user updating the service */
    sender?: string;
    /** ID represents the ID of the service to be updated */
    service_id?: number;
    /**
     * Name is the new name of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    name?: string;
    /**
     * Description is the new description of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    description?: string;
    /**
     * Website is the new website of the service.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    website?: string;
    /**
     * PictureURL is the new URL of the service picture.
     * If it shouldn't be changed, use [do-not-modify] instead.
     */
    picture_url?: string;
}
export interface MsgUpdateServiceAminoMsg {
    type: "milkyway/services/MsgUpdateService";
    value: MsgUpdateServiceAmino;
}
/**
 * MsgUpdateService defines the message structure for the UpdateService gRPC
 * service method. It allows the service admin to update the details of
 * an existing service.
 */
export interface MsgUpdateServiceSDKType {
    sender: string;
    service_id: number;
    name: string;
    description: string;
    website: string;
    picture_url: string;
}
/** MsgUpdateServiceResponse is the return value of MsgUpdateService. */
export interface MsgUpdateServiceResponse {
}
export interface MsgUpdateServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgUpdateServiceResponse";
    value: Uint8Array;
}
/** MsgUpdateServiceResponse is the return value of MsgUpdateService. */
export interface MsgUpdateServiceResponseAmino {
}
export interface MsgUpdateServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgUpdateServiceResponse";
    value: MsgUpdateServiceResponseAmino;
}
/** MsgUpdateServiceResponse is the return value of MsgUpdateService. */
export interface MsgUpdateServiceResponseSDKType {
}
/** MsgActivateService defines the message structure for the ActivateService gRPC */
export interface MsgActivateService {
    /** Sender is the address of the user that wants to activate the service */
    sender: string;
    /** ServiceID represents the ID of the service to be activated */
    serviceId: number;
}
export interface MsgActivateServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgActivateService";
    value: Uint8Array;
}
/** MsgActivateService defines the message structure for the ActivateService gRPC */
export interface MsgActivateServiceAmino {
    /** Sender is the address of the user that wants to activate the service */
    sender?: string;
    /** ServiceID represents the ID of the service to be activated */
    service_id?: number;
}
export interface MsgActivateServiceAminoMsg {
    type: "milkyway/MsgActivateService";
    value: MsgActivateServiceAmino;
}
/** MsgActivateService defines the message structure for the ActivateService gRPC */
export interface MsgActivateServiceSDKType {
    sender: string;
    service_id: number;
}
/** MsgActivateServiceResponse is the return value of MsgActivateService. */
export interface MsgActivateServiceResponse {
}
export interface MsgActivateServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgActivateServiceResponse";
    value: Uint8Array;
}
/** MsgActivateServiceResponse is the return value of MsgActivateService. */
export interface MsgActivateServiceResponseAmino {
}
export interface MsgActivateServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgActivateServiceResponse";
    value: MsgActivateServiceResponseAmino;
}
/** MsgActivateServiceResponse is the return value of MsgActivateService. */
export interface MsgActivateServiceResponseSDKType {
}
/**
 * MsgDeactivateService defines the message structure for the DeactivateService
 * gRPC service method. It allows the service admin to deactivate an existing
 * service.
 */
export interface MsgDeactivateService {
    /** Sender is the address of the user that wants to deactivate the service */
    sender: string;
    /** ServiceID represents the ID of the service to be deactivated */
    serviceId: number;
}
export interface MsgDeactivateServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgDeactivateService";
    value: Uint8Array;
}
/**
 * MsgDeactivateService defines the message structure for the DeactivateService
 * gRPC service method. It allows the service admin to deactivate an existing
 * service.
 */
export interface MsgDeactivateServiceAmino {
    /** Sender is the address of the user that wants to deactivate the service */
    sender?: string;
    /** ServiceID represents the ID of the service to be deactivated */
    service_id?: number;
}
export interface MsgDeactivateServiceAminoMsg {
    type: "milkyway/MsgDeactivateService";
    value: MsgDeactivateServiceAmino;
}
/**
 * MsgDeactivateService defines the message structure for the DeactivateService
 * gRPC service method. It allows the service admin to deactivate an existing
 * service.
 */
export interface MsgDeactivateServiceSDKType {
    sender: string;
    service_id: number;
}
/** MsgDeactivateServiceResponse is the return value of MsgDeactivateService. */
export interface MsgDeactivateServiceResponse {
}
export interface MsgDeactivateServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgDeactivateServiceResponse";
    value: Uint8Array;
}
/** MsgDeactivateServiceResponse is the return value of MsgDeactivateService. */
export interface MsgDeactivateServiceResponseAmino {
}
export interface MsgDeactivateServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgDeactivateServiceResponse";
    value: MsgDeactivateServiceResponseAmino;
}
/** MsgDeactivateServiceResponse is the return value of MsgDeactivateService. */
export interface MsgDeactivateServiceResponseSDKType {
}
/**
 * MsgDeleteService defines the message structure for the DeleteService
 * gRPC service method. It allows the service admin to delete a previously
 * deactivated service
 */
export interface MsgDeleteService {
    /** Sender is the address of the user that wants to delete the service */
    sender: string;
    /** ServiceID represents the ID of the service to be deleted */
    serviceId: number;
}
export interface MsgDeleteServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgDeleteService";
    value: Uint8Array;
}
/**
 * MsgDeleteService defines the message structure for the DeleteService
 * gRPC service method. It allows the service admin to delete a previously
 * deactivated service
 */
export interface MsgDeleteServiceAmino {
    /** Sender is the address of the user that wants to delete the service */
    sender?: string;
    /** ServiceID represents the ID of the service to be deleted */
    service_id?: number;
}
export interface MsgDeleteServiceAminoMsg {
    type: "milkyway/MsgDeleteService";
    value: MsgDeleteServiceAmino;
}
/**
 * MsgDeleteService defines the message structure for the DeleteService
 * gRPC service method. It allows the service admin to delete a previously
 * deactivated service
 */
export interface MsgDeleteServiceSDKType {
    sender: string;
    service_id: number;
}
/** MsgDeleteServiceResponse is the return value of MsgDeleteService. */
export interface MsgDeleteServiceResponse {
}
export interface MsgDeleteServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgDeleteServiceResponse";
    value: Uint8Array;
}
/** MsgDeleteServiceResponse is the return value of MsgDeleteService. */
export interface MsgDeleteServiceResponseAmino {
}
export interface MsgDeleteServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgDeleteServiceResponse";
    value: MsgDeleteServiceResponseAmino;
}
/** MsgDeleteServiceResponse is the return value of MsgDeleteService. */
export interface MsgDeleteServiceResponseSDKType {
}
/**
 * MsgTransferServiceOwnership defines the message structure for the
 * TransferServiceOwnership gRPC service method. It allows a service admin to
 * transfer the ownership of the service to another account.
 */
export interface MsgTransferServiceOwnership {
    /** Sender is the address of the user transferring the ownership */
    sender: string;
    /** ServiceID represents the ID of the service to transfer ownership */
    serviceId: number;
    /** NewAdmin is the address of the new admin of the service */
    newAdmin: string;
}
export interface MsgTransferServiceOwnershipProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership";
    value: Uint8Array;
}
/**
 * MsgTransferServiceOwnership defines the message structure for the
 * TransferServiceOwnership gRPC service method. It allows a service admin to
 * transfer the ownership of the service to another account.
 */
export interface MsgTransferServiceOwnershipAmino {
    /** Sender is the address of the user transferring the ownership */
    sender?: string;
    /** ServiceID represents the ID of the service to transfer ownership */
    service_id?: number;
    /** NewAdmin is the address of the new admin of the service */
    new_admin?: string;
}
export interface MsgTransferServiceOwnershipAminoMsg {
    type: "milkyway/MsgTransferServiceOwnership";
    value: MsgTransferServiceOwnershipAmino;
}
/**
 * MsgTransferServiceOwnership defines the message structure for the
 * TransferServiceOwnership gRPC service method. It allows a service admin to
 * transfer the ownership of the service to another account.
 */
export interface MsgTransferServiceOwnershipSDKType {
    sender: string;
    service_id: number;
    new_admin: string;
}
/**
 * MsgTransferServiceOwnershipResponse is the return value of
 * MsgTransferServiceOwnership.
 */
export interface MsgTransferServiceOwnershipResponse {
}
export interface MsgTransferServiceOwnershipResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse";
    value: Uint8Array;
}
/**
 * MsgTransferServiceOwnershipResponse is the return value of
 * MsgTransferServiceOwnership.
 */
export interface MsgTransferServiceOwnershipResponseAmino {
}
export interface MsgTransferServiceOwnershipResponseAminoMsg {
    type: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse";
    value: MsgTransferServiceOwnershipResponseAmino;
}
/**
 * MsgTransferServiceOwnershipResponse is the return value of
 * MsgTransferServiceOwnership.
 */
export interface MsgTransferServiceOwnershipResponseSDKType {
}
/**
 * MsgSetServiceParams defines the message structure for the
 * SetServiceParams gRPC service method. It allows a service admin to
 * update the parameters of a service.
 */
export interface MsgSetServiceParams {
    /** Sender is the address of the user setting the parameters */
    sender: string;
    /** ServiceID is the ID of the service whose parameters are being set */
    serviceId: number;
    /** ServiceParams defines the new parameters of the service */
    serviceParams: ServiceParams;
}
export interface MsgSetServiceParamsProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgSetServiceParams";
    value: Uint8Array;
}
/**
 * MsgSetServiceParams defines the message structure for the
 * SetServiceParams gRPC service method. It allows a service admin to
 * update the parameters of a service.
 */
export interface MsgSetServiceParamsAmino {
    /** Sender is the address of the user setting the parameters */
    sender?: string;
    /** ServiceID is the ID of the service whose parameters are being set */
    service_id?: number;
    /** ServiceParams defines the new parameters of the service */
    service_params?: ServiceParamsAmino;
}
export interface MsgSetServiceParamsAminoMsg {
    type: "milkyway/MsgSetServiceParams";
    value: MsgSetServiceParamsAmino;
}
/**
 * MsgSetServiceParams defines the message structure for the
 * SetServiceParams gRPC service method. It allows a service admin to
 * update the parameters of a service.
 */
export interface MsgSetServiceParamsSDKType {
    sender: string;
    service_id: number;
    service_params: ServiceParamsSDKType;
}
/** MsgSetServiceParamsResponse is the return value of MsgSetServiceParams. */
export interface MsgSetServiceParamsResponse {
}
export interface MsgSetServiceParamsResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgSetServiceParamsResponse";
    value: Uint8Array;
}
/** MsgSetServiceParamsResponse is the return value of MsgSetServiceParams. */
export interface MsgSetServiceParamsResponseAmino {
}
export interface MsgSetServiceParamsResponseAminoMsg {
    type: "/milkyway.services.v1.MsgSetServiceParamsResponse";
    value: MsgSetServiceParamsResponseAmino;
}
/** MsgSetServiceParamsResponse is the return value of MsgSetServiceParams. */
export interface MsgSetServiceParamsResponseSDKType {
}
/**
 * MsgDeactivateService defines the message structure for the UpdateParams gRPC
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
    typeUrl: "/milkyway.services.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgDeactivateService defines the message structure for the UpdateParams gRPC
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
    type: "milkyway/services/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgDeactivateService defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgDeactivateServiceResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgDeactivateServiceResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/milkyway.services.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgDeactivateServiceResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {
}
/**
 * MsgAccreditService defines the message structure for the AccreditService gRPC
 * service method. It allows the authority to accredit a service.
 */
export interface MsgAccreditService {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** ServiceID represents the ID of the service to be accredited */
    serviceId: number;
}
export interface MsgAccreditServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgAccreditService";
    value: Uint8Array;
}
/**
 * MsgAccreditService defines the message structure for the AccreditService gRPC
 * service method. It allows the authority to accredit a service.
 */
export interface MsgAccreditServiceAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /** ServiceID represents the ID of the service to be accredited */
    service_id?: number;
}
export interface MsgAccreditServiceAminoMsg {
    type: "milkyway/MsgAccreditService";
    value: MsgAccreditServiceAmino;
}
/**
 * MsgAccreditService defines the message structure for the AccreditService gRPC
 * service method. It allows the authority to accredit a service.
 */
export interface MsgAccreditServiceSDKType {
    authority: string;
    service_id: number;
}
/** MsgAccreditServiceResponse is the return value of MsgAccreditService. */
export interface MsgAccreditServiceResponse {
}
export interface MsgAccreditServiceResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgAccreditServiceResponse";
    value: Uint8Array;
}
/** MsgAccreditServiceResponse is the return value of MsgAccreditService. */
export interface MsgAccreditServiceResponseAmino {
}
export interface MsgAccreditServiceResponseAminoMsg {
    type: "/milkyway.services.v1.MsgAccreditServiceResponse";
    value: MsgAccreditServiceResponseAmino;
}
/** MsgAccreditServiceResponse is the return value of MsgAccreditService. */
export interface MsgAccreditServiceResponseSDKType {
}
/**
 * MsgRevokeServiceAccreditation defines the message structure for the
 * RevokeServiceAccreditation gRPC service method. It allows the authority to
 * revoke a service's accreditation.
 */
export interface MsgRevokeServiceAccreditation {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /**
     * ServiceID represents the ID of the service to have its accreditation
     * revoked
     */
    serviceId: number;
}
export interface MsgRevokeServiceAccreditationProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation";
    value: Uint8Array;
}
/**
 * MsgRevokeServiceAccreditation defines the message structure for the
 * RevokeServiceAccreditation gRPC service method. It allows the authority to
 * revoke a service's accreditation.
 */
export interface MsgRevokeServiceAccreditationAmino {
    /**
     * Authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /**
     * ServiceID represents the ID of the service to have its accreditation
     * revoked
     */
    service_id?: number;
}
export interface MsgRevokeServiceAccreditationAminoMsg {
    type: "milkyway/MsgRevokeServiceAccreditation";
    value: MsgRevokeServiceAccreditationAmino;
}
/**
 * MsgRevokeServiceAccreditation defines the message structure for the
 * RevokeServiceAccreditation gRPC service method. It allows the authority to
 * revoke a service's accreditation.
 */
export interface MsgRevokeServiceAccreditationSDKType {
    authority: string;
    service_id: number;
}
/**
 * MsgRevokeServiceAccreditationResponse is the return value of
 * MsgRevokeServiceAccreditation.
 */
export interface MsgRevokeServiceAccreditationResponse {
}
export interface MsgRevokeServiceAccreditationResponseProtoMsg {
    typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse";
    value: Uint8Array;
}
/**
 * MsgRevokeServiceAccreditationResponse is the return value of
 * MsgRevokeServiceAccreditation.
 */
export interface MsgRevokeServiceAccreditationResponseAmino {
}
export interface MsgRevokeServiceAccreditationResponseAminoMsg {
    type: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse";
    value: MsgRevokeServiceAccreditationResponseAmino;
}
/**
 * MsgRevokeServiceAccreditationResponse is the return value of
 * MsgRevokeServiceAccreditation.
 */
export interface MsgRevokeServiceAccreditationResponseSDKType {
}
export declare const MsgCreateService: {
    typeUrl: string;
    encode(message: MsgCreateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateService;
    fromPartial(object: Partial<MsgCreateService>): MsgCreateService;
    fromAmino(object: MsgCreateServiceAmino): MsgCreateService;
    toAmino(message: MsgCreateService): MsgCreateServiceAmino;
    fromAminoMsg(object: MsgCreateServiceAminoMsg): MsgCreateService;
    toAminoMsg(message: MsgCreateService): MsgCreateServiceAminoMsg;
    fromProtoMsg(message: MsgCreateServiceProtoMsg): MsgCreateService;
    toProto(message: MsgCreateService): Uint8Array;
    toProtoMsg(message: MsgCreateService): MsgCreateServiceProtoMsg;
};
export declare const MsgCreateServiceResponse: {
    typeUrl: string;
    encode(message: MsgCreateServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateServiceResponse;
    fromPartial(object: Partial<MsgCreateServiceResponse>): MsgCreateServiceResponse;
    fromAmino(object: MsgCreateServiceResponseAmino): MsgCreateServiceResponse;
    toAmino(message: MsgCreateServiceResponse): MsgCreateServiceResponseAmino;
    fromAminoMsg(object: MsgCreateServiceResponseAminoMsg): MsgCreateServiceResponse;
    fromProtoMsg(message: MsgCreateServiceResponseProtoMsg): MsgCreateServiceResponse;
    toProto(message: MsgCreateServiceResponse): Uint8Array;
    toProtoMsg(message: MsgCreateServiceResponse): MsgCreateServiceResponseProtoMsg;
};
export declare const MsgUpdateService: {
    typeUrl: string;
    encode(message: MsgUpdateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateService;
    fromPartial(object: Partial<MsgUpdateService>): MsgUpdateService;
    fromAmino(object: MsgUpdateServiceAmino): MsgUpdateService;
    toAmino(message: MsgUpdateService): MsgUpdateServiceAmino;
    fromAminoMsg(object: MsgUpdateServiceAminoMsg): MsgUpdateService;
    toAminoMsg(message: MsgUpdateService): MsgUpdateServiceAminoMsg;
    fromProtoMsg(message: MsgUpdateServiceProtoMsg): MsgUpdateService;
    toProto(message: MsgUpdateService): Uint8Array;
    toProtoMsg(message: MsgUpdateService): MsgUpdateServiceProtoMsg;
};
export declare const MsgUpdateServiceResponse: {
    typeUrl: string;
    encode(_: MsgUpdateServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateServiceResponse;
    fromPartial(_: Partial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse;
    fromAmino(_: MsgUpdateServiceResponseAmino): MsgUpdateServiceResponse;
    toAmino(_: MsgUpdateServiceResponse): MsgUpdateServiceResponseAmino;
    fromAminoMsg(object: MsgUpdateServiceResponseAminoMsg): MsgUpdateServiceResponse;
    fromProtoMsg(message: MsgUpdateServiceResponseProtoMsg): MsgUpdateServiceResponse;
    toProto(message: MsgUpdateServiceResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateServiceResponse): MsgUpdateServiceResponseProtoMsg;
};
export declare const MsgActivateService: {
    typeUrl: string;
    encode(message: MsgActivateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateService;
    fromPartial(object: Partial<MsgActivateService>): MsgActivateService;
    fromAmino(object: MsgActivateServiceAmino): MsgActivateService;
    toAmino(message: MsgActivateService): MsgActivateServiceAmino;
    fromAminoMsg(object: MsgActivateServiceAminoMsg): MsgActivateService;
    toAminoMsg(message: MsgActivateService): MsgActivateServiceAminoMsg;
    fromProtoMsg(message: MsgActivateServiceProtoMsg): MsgActivateService;
    toProto(message: MsgActivateService): Uint8Array;
    toProtoMsg(message: MsgActivateService): MsgActivateServiceProtoMsg;
};
export declare const MsgActivateServiceResponse: {
    typeUrl: string;
    encode(_: MsgActivateServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateServiceResponse;
    fromPartial(_: Partial<MsgActivateServiceResponse>): MsgActivateServiceResponse;
    fromAmino(_: MsgActivateServiceResponseAmino): MsgActivateServiceResponse;
    toAmino(_: MsgActivateServiceResponse): MsgActivateServiceResponseAmino;
    fromAminoMsg(object: MsgActivateServiceResponseAminoMsg): MsgActivateServiceResponse;
    fromProtoMsg(message: MsgActivateServiceResponseProtoMsg): MsgActivateServiceResponse;
    toProto(message: MsgActivateServiceResponse): Uint8Array;
    toProtoMsg(message: MsgActivateServiceResponse): MsgActivateServiceResponseProtoMsg;
};
export declare const MsgDeactivateService: {
    typeUrl: string;
    encode(message: MsgDeactivateService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateService;
    fromPartial(object: Partial<MsgDeactivateService>): MsgDeactivateService;
    fromAmino(object: MsgDeactivateServiceAmino): MsgDeactivateService;
    toAmino(message: MsgDeactivateService): MsgDeactivateServiceAmino;
    fromAminoMsg(object: MsgDeactivateServiceAminoMsg): MsgDeactivateService;
    toAminoMsg(message: MsgDeactivateService): MsgDeactivateServiceAminoMsg;
    fromProtoMsg(message: MsgDeactivateServiceProtoMsg): MsgDeactivateService;
    toProto(message: MsgDeactivateService): Uint8Array;
    toProtoMsg(message: MsgDeactivateService): MsgDeactivateServiceProtoMsg;
};
export declare const MsgDeactivateServiceResponse: {
    typeUrl: string;
    encode(_: MsgDeactivateServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateServiceResponse;
    fromPartial(_: Partial<MsgDeactivateServiceResponse>): MsgDeactivateServiceResponse;
    fromAmino(_: MsgDeactivateServiceResponseAmino): MsgDeactivateServiceResponse;
    toAmino(_: MsgDeactivateServiceResponse): MsgDeactivateServiceResponseAmino;
    fromAminoMsg(object: MsgDeactivateServiceResponseAminoMsg): MsgDeactivateServiceResponse;
    fromProtoMsg(message: MsgDeactivateServiceResponseProtoMsg): MsgDeactivateServiceResponse;
    toProto(message: MsgDeactivateServiceResponse): Uint8Array;
    toProtoMsg(message: MsgDeactivateServiceResponse): MsgDeactivateServiceResponseProtoMsg;
};
export declare const MsgDeleteService: {
    typeUrl: string;
    encode(message: MsgDeleteService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteService;
    fromPartial(object: Partial<MsgDeleteService>): MsgDeleteService;
    fromAmino(object: MsgDeleteServiceAmino): MsgDeleteService;
    toAmino(message: MsgDeleteService): MsgDeleteServiceAmino;
    fromAminoMsg(object: MsgDeleteServiceAminoMsg): MsgDeleteService;
    toAminoMsg(message: MsgDeleteService): MsgDeleteServiceAminoMsg;
    fromProtoMsg(message: MsgDeleteServiceProtoMsg): MsgDeleteService;
    toProto(message: MsgDeleteService): Uint8Array;
    toProtoMsg(message: MsgDeleteService): MsgDeleteServiceProtoMsg;
};
export declare const MsgDeleteServiceResponse: {
    typeUrl: string;
    encode(_: MsgDeleteServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteServiceResponse;
    fromPartial(_: Partial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse;
    fromAmino(_: MsgDeleteServiceResponseAmino): MsgDeleteServiceResponse;
    toAmino(_: MsgDeleteServiceResponse): MsgDeleteServiceResponseAmino;
    fromAminoMsg(object: MsgDeleteServiceResponseAminoMsg): MsgDeleteServiceResponse;
    fromProtoMsg(message: MsgDeleteServiceResponseProtoMsg): MsgDeleteServiceResponse;
    toProto(message: MsgDeleteServiceResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteServiceResponse): MsgDeleteServiceResponseProtoMsg;
};
export declare const MsgTransferServiceOwnership: {
    typeUrl: string;
    encode(message: MsgTransferServiceOwnership, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferServiceOwnership;
    fromPartial(object: Partial<MsgTransferServiceOwnership>): MsgTransferServiceOwnership;
    fromAmino(object: MsgTransferServiceOwnershipAmino): MsgTransferServiceOwnership;
    toAmino(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipAmino;
    fromAminoMsg(object: MsgTransferServiceOwnershipAminoMsg): MsgTransferServiceOwnership;
    toAminoMsg(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipAminoMsg;
    fromProtoMsg(message: MsgTransferServiceOwnershipProtoMsg): MsgTransferServiceOwnership;
    toProto(message: MsgTransferServiceOwnership): Uint8Array;
    toProtoMsg(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipProtoMsg;
};
export declare const MsgTransferServiceOwnershipResponse: {
    typeUrl: string;
    encode(_: MsgTransferServiceOwnershipResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferServiceOwnershipResponse;
    fromPartial(_: Partial<MsgTransferServiceOwnershipResponse>): MsgTransferServiceOwnershipResponse;
    fromAmino(_: MsgTransferServiceOwnershipResponseAmino): MsgTransferServiceOwnershipResponse;
    toAmino(_: MsgTransferServiceOwnershipResponse): MsgTransferServiceOwnershipResponseAmino;
    fromAminoMsg(object: MsgTransferServiceOwnershipResponseAminoMsg): MsgTransferServiceOwnershipResponse;
    fromProtoMsg(message: MsgTransferServiceOwnershipResponseProtoMsg): MsgTransferServiceOwnershipResponse;
    toProto(message: MsgTransferServiceOwnershipResponse): Uint8Array;
    toProtoMsg(message: MsgTransferServiceOwnershipResponse): MsgTransferServiceOwnershipResponseProtoMsg;
};
export declare const MsgSetServiceParams: {
    typeUrl: string;
    encode(message: MsgSetServiceParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetServiceParams;
    fromPartial(object: Partial<MsgSetServiceParams>): MsgSetServiceParams;
    fromAmino(object: MsgSetServiceParamsAmino): MsgSetServiceParams;
    toAmino(message: MsgSetServiceParams): MsgSetServiceParamsAmino;
    fromAminoMsg(object: MsgSetServiceParamsAminoMsg): MsgSetServiceParams;
    toAminoMsg(message: MsgSetServiceParams): MsgSetServiceParamsAminoMsg;
    fromProtoMsg(message: MsgSetServiceParamsProtoMsg): MsgSetServiceParams;
    toProto(message: MsgSetServiceParams): Uint8Array;
    toProtoMsg(message: MsgSetServiceParams): MsgSetServiceParamsProtoMsg;
};
export declare const MsgSetServiceParamsResponse: {
    typeUrl: string;
    encode(_: MsgSetServiceParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetServiceParamsResponse;
    fromPartial(_: Partial<MsgSetServiceParamsResponse>): MsgSetServiceParamsResponse;
    fromAmino(_: MsgSetServiceParamsResponseAmino): MsgSetServiceParamsResponse;
    toAmino(_: MsgSetServiceParamsResponse): MsgSetServiceParamsResponseAmino;
    fromAminoMsg(object: MsgSetServiceParamsResponseAminoMsg): MsgSetServiceParamsResponse;
    fromProtoMsg(message: MsgSetServiceParamsResponseProtoMsg): MsgSetServiceParamsResponse;
    toProto(message: MsgSetServiceParamsResponse): Uint8Array;
    toProtoMsg(message: MsgSetServiceParamsResponse): MsgSetServiceParamsResponseProtoMsg;
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
export declare const MsgAccreditService: {
    typeUrl: string;
    encode(message: MsgAccreditService, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAccreditService;
    fromPartial(object: Partial<MsgAccreditService>): MsgAccreditService;
    fromAmino(object: MsgAccreditServiceAmino): MsgAccreditService;
    toAmino(message: MsgAccreditService): MsgAccreditServiceAmino;
    fromAminoMsg(object: MsgAccreditServiceAminoMsg): MsgAccreditService;
    toAminoMsg(message: MsgAccreditService): MsgAccreditServiceAminoMsg;
    fromProtoMsg(message: MsgAccreditServiceProtoMsg): MsgAccreditService;
    toProto(message: MsgAccreditService): Uint8Array;
    toProtoMsg(message: MsgAccreditService): MsgAccreditServiceProtoMsg;
};
export declare const MsgAccreditServiceResponse: {
    typeUrl: string;
    encode(_: MsgAccreditServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAccreditServiceResponse;
    fromPartial(_: Partial<MsgAccreditServiceResponse>): MsgAccreditServiceResponse;
    fromAmino(_: MsgAccreditServiceResponseAmino): MsgAccreditServiceResponse;
    toAmino(_: MsgAccreditServiceResponse): MsgAccreditServiceResponseAmino;
    fromAminoMsg(object: MsgAccreditServiceResponseAminoMsg): MsgAccreditServiceResponse;
    fromProtoMsg(message: MsgAccreditServiceResponseProtoMsg): MsgAccreditServiceResponse;
    toProto(message: MsgAccreditServiceResponse): Uint8Array;
    toProtoMsg(message: MsgAccreditServiceResponse): MsgAccreditServiceResponseProtoMsg;
};
export declare const MsgRevokeServiceAccreditation: {
    typeUrl: string;
    encode(message: MsgRevokeServiceAccreditation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeServiceAccreditation;
    fromPartial(object: Partial<MsgRevokeServiceAccreditation>): MsgRevokeServiceAccreditation;
    fromAmino(object: MsgRevokeServiceAccreditationAmino): MsgRevokeServiceAccreditation;
    toAmino(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationAmino;
    fromAminoMsg(object: MsgRevokeServiceAccreditationAminoMsg): MsgRevokeServiceAccreditation;
    toAminoMsg(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationAminoMsg;
    fromProtoMsg(message: MsgRevokeServiceAccreditationProtoMsg): MsgRevokeServiceAccreditation;
    toProto(message: MsgRevokeServiceAccreditation): Uint8Array;
    toProtoMsg(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationProtoMsg;
};
export declare const MsgRevokeServiceAccreditationResponse: {
    typeUrl: string;
    encode(_: MsgRevokeServiceAccreditationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeServiceAccreditationResponse;
    fromPartial(_: Partial<MsgRevokeServiceAccreditationResponse>): MsgRevokeServiceAccreditationResponse;
    fromAmino(_: MsgRevokeServiceAccreditationResponseAmino): MsgRevokeServiceAccreditationResponse;
    toAmino(_: MsgRevokeServiceAccreditationResponse): MsgRevokeServiceAccreditationResponseAmino;
    fromAminoMsg(object: MsgRevokeServiceAccreditationResponseAminoMsg): MsgRevokeServiceAccreditationResponse;
    fromProtoMsg(message: MsgRevokeServiceAccreditationResponseProtoMsg): MsgRevokeServiceAccreditationResponse;
    toProto(message: MsgRevokeServiceAccreditationResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeServiceAccreditationResponse): MsgRevokeServiceAccreditationResponseProtoMsg;
};
