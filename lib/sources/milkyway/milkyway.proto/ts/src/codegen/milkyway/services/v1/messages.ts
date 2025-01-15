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
export interface MsgUpdateServiceResponse {}
export interface MsgUpdateServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgUpdateServiceResponse";
  value: Uint8Array;
}
/** MsgUpdateServiceResponse is the return value of MsgUpdateService. */
export interface MsgUpdateServiceResponseAmino {}
export interface MsgUpdateServiceResponseAminoMsg {
  type: "/milkyway.services.v1.MsgUpdateServiceResponse";
  value: MsgUpdateServiceResponseAmino;
}
/** MsgUpdateServiceResponse is the return value of MsgUpdateService. */
export interface MsgUpdateServiceResponseSDKType {}
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
export interface MsgActivateServiceResponse {}
export interface MsgActivateServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgActivateServiceResponse";
  value: Uint8Array;
}
/** MsgActivateServiceResponse is the return value of MsgActivateService. */
export interface MsgActivateServiceResponseAmino {}
export interface MsgActivateServiceResponseAminoMsg {
  type: "/milkyway.services.v1.MsgActivateServiceResponse";
  value: MsgActivateServiceResponseAmino;
}
/** MsgActivateServiceResponse is the return value of MsgActivateService. */
export interface MsgActivateServiceResponseSDKType {}
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
export interface MsgDeactivateServiceResponse {}
export interface MsgDeactivateServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgDeactivateServiceResponse";
  value: Uint8Array;
}
/** MsgDeactivateServiceResponse is the return value of MsgDeactivateService. */
export interface MsgDeactivateServiceResponseAmino {}
export interface MsgDeactivateServiceResponseAminoMsg {
  type: "/milkyway.services.v1.MsgDeactivateServiceResponse";
  value: MsgDeactivateServiceResponseAmino;
}
/** MsgDeactivateServiceResponse is the return value of MsgDeactivateService. */
export interface MsgDeactivateServiceResponseSDKType {}
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
export interface MsgDeleteServiceResponse {}
export interface MsgDeleteServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgDeleteServiceResponse";
  value: Uint8Array;
}
/** MsgDeleteServiceResponse is the return value of MsgDeleteService. */
export interface MsgDeleteServiceResponseAmino {}
export interface MsgDeleteServiceResponseAminoMsg {
  type: "/milkyway.services.v1.MsgDeleteServiceResponse";
  value: MsgDeleteServiceResponseAmino;
}
/** MsgDeleteServiceResponse is the return value of MsgDeleteService. */
export interface MsgDeleteServiceResponseSDKType {}
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
export interface MsgTransferServiceOwnershipResponse {}
export interface MsgTransferServiceOwnershipResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse";
  value: Uint8Array;
}
/**
 * MsgTransferServiceOwnershipResponse is the return value of
 * MsgTransferServiceOwnership.
 */
export interface MsgTransferServiceOwnershipResponseAmino {}
export interface MsgTransferServiceOwnershipResponseAminoMsg {
  type: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse";
  value: MsgTransferServiceOwnershipResponseAmino;
}
/**
 * MsgTransferServiceOwnershipResponse is the return value of
 * MsgTransferServiceOwnership.
 */
export interface MsgTransferServiceOwnershipResponseSDKType {}
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
export interface MsgSetServiceParamsResponse {}
export interface MsgSetServiceParamsResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgSetServiceParamsResponse";
  value: Uint8Array;
}
/** MsgSetServiceParamsResponse is the return value of MsgSetServiceParams. */
export interface MsgSetServiceParamsResponseAmino {}
export interface MsgSetServiceParamsResponseAminoMsg {
  type: "/milkyway.services.v1.MsgSetServiceParamsResponse";
  value: MsgSetServiceParamsResponseAmino;
}
/** MsgSetServiceParamsResponse is the return value of MsgSetServiceParams. */
export interface MsgSetServiceParamsResponseSDKType {}
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
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgDeactivateServiceResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/milkyway.services.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgDeactivateServiceResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
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
export interface MsgAccreditServiceResponse {}
export interface MsgAccreditServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgAccreditServiceResponse";
  value: Uint8Array;
}
/** MsgAccreditServiceResponse is the return value of MsgAccreditService. */
export interface MsgAccreditServiceResponseAmino {}
export interface MsgAccreditServiceResponseAminoMsg {
  type: "/milkyway.services.v1.MsgAccreditServiceResponse";
  value: MsgAccreditServiceResponseAmino;
}
/** MsgAccreditServiceResponse is the return value of MsgAccreditService. */
export interface MsgAccreditServiceResponseSDKType {}
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
export interface MsgRevokeServiceAccreditationResponse {}
export interface MsgRevokeServiceAccreditationResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeServiceAccreditationResponse is the return value of
 * MsgRevokeServiceAccreditation.
 */
export interface MsgRevokeServiceAccreditationResponseAmino {}
export interface MsgRevokeServiceAccreditationResponseAminoMsg {
  type: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse";
  value: MsgRevokeServiceAccreditationResponseAmino;
}
/**
 * MsgRevokeServiceAccreditationResponse is the return value of
 * MsgRevokeServiceAccreditation.
 */
export interface MsgRevokeServiceAccreditationResponseSDKType {}
function createBaseMsgCreateService(): MsgCreateService {
  return {
    sender: "",
    name: "",
    description: "",
    website: "",
    pictureUrl: "",
    feeAmount: []
  };
}
export const MsgCreateService = {
  typeUrl: "/milkyway.services.v1.MsgCreateService",
  encode(message: MsgCreateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(42).string(message.pictureUrl);
    }
    for (const v of message.feeAmount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.pictureUrl = reader.string();
          break;
        case 6:
          message.feeAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateService>): MsgCreateService {
    const message = createBaseMsgCreateService();
    message.sender = object.sender ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    message.feeAmount = object.feeAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateServiceAmino): MsgCreateService {
    const message = createBaseMsgCreateService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.picture_url !== undefined && object.picture_url !== null) {
      message.pictureUrl = object.picture_url;
    }
    message.feeAmount = object.fee_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateService): MsgCreateServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.website = message.website === "" ? undefined : message.website;
    obj.picture_url = message.pictureUrl === "" ? undefined : message.pictureUrl;
    if (message.feeAmount) {
      obj.fee_amount = message.feeAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_amount = message.feeAmount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateServiceAminoMsg): MsgCreateService {
    return MsgCreateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateService): MsgCreateServiceAminoMsg {
    return {
      type: "milkyway/services/MsgCreateService",
      value: MsgCreateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateServiceProtoMsg): MsgCreateService {
    return MsgCreateService.decode(message.value);
  },
  toProto(message: MsgCreateService): Uint8Array {
    return MsgCreateService.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateService): MsgCreateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgCreateService",
      value: MsgCreateService.encode(message).finish()
    };
  }
};
function createBaseMsgCreateServiceResponse(): MsgCreateServiceResponse {
  return {
    newServiceId: 0
  };
}
export const MsgCreateServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgCreateServiceResponse",
  encode(message: MsgCreateServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newServiceId !== 0) {
      writer.uint32(8).uint32(message.newServiceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newServiceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateServiceResponse>): MsgCreateServiceResponse {
    const message = createBaseMsgCreateServiceResponse();
    message.newServiceId = object.newServiceId ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateServiceResponseAmino): MsgCreateServiceResponse {
    const message = createBaseMsgCreateServiceResponse();
    if (object.new_service_id !== undefined && object.new_service_id !== null) {
      message.newServiceId = object.new_service_id;
    }
    return message;
  },
  toAmino(message: MsgCreateServiceResponse): MsgCreateServiceResponseAmino {
    const obj: any = {};
    obj.new_service_id = message.newServiceId === 0 ? undefined : message.newServiceId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateServiceResponseAminoMsg): MsgCreateServiceResponse {
    return MsgCreateServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateServiceResponseProtoMsg): MsgCreateServiceResponse {
    return MsgCreateServiceResponse.decode(message.value);
  },
  toProto(message: MsgCreateServiceResponse): Uint8Array {
    return MsgCreateServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateServiceResponse): MsgCreateServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgCreateServiceResponse",
      value: MsgCreateServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateService(): MsgUpdateService {
  return {
    sender: "",
    serviceId: 0,
    name: "",
    description: "",
    website: "",
    pictureUrl: ""
  };
}
export const MsgUpdateService = {
  typeUrl: "/milkyway.services.v1.MsgUpdateService",
  encode(message: MsgUpdateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.website !== "") {
      writer.uint32(42).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(50).string(message.pictureUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateService();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.website = reader.string();
          break;
        case 6:
          message.pictureUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateService>): MsgUpdateService {
    const message = createBaseMsgUpdateService();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateServiceAmino): MsgUpdateService {
    const message = createBaseMsgUpdateService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.picture_url !== undefined && object.picture_url !== null) {
      message.pictureUrl = object.picture_url;
    }
    return message;
  },
  toAmino(message: MsgUpdateService): MsgUpdateServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.website = message.website === "" ? undefined : message.website;
    obj.picture_url = message.pictureUrl === "" ? undefined : message.pictureUrl;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateServiceAminoMsg): MsgUpdateService {
    return MsgUpdateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateService): MsgUpdateServiceAminoMsg {
    return {
      type: "milkyway/services/MsgUpdateService",
      value: MsgUpdateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateServiceProtoMsg): MsgUpdateService {
    return MsgUpdateService.decode(message.value);
  },
  toProto(message: MsgUpdateService): Uint8Array {
    return MsgUpdateService.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateService): MsgUpdateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgUpdateService",
      value: MsgUpdateService.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateServiceResponse(): MsgUpdateServiceResponse {
  return {};
}
export const MsgUpdateServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgUpdateServiceResponse",
  encode(_: MsgUpdateServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateServiceResponse();
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
  fromPartial(_: Partial<MsgUpdateServiceResponse>): MsgUpdateServiceResponse {
    const message = createBaseMsgUpdateServiceResponse();
    return message;
  },
  fromAmino(_: MsgUpdateServiceResponseAmino): MsgUpdateServiceResponse {
    const message = createBaseMsgUpdateServiceResponse();
    return message;
  },
  toAmino(_: MsgUpdateServiceResponse): MsgUpdateServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateServiceResponseAminoMsg): MsgUpdateServiceResponse {
    return MsgUpdateServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateServiceResponseProtoMsg): MsgUpdateServiceResponse {
    return MsgUpdateServiceResponse.decode(message.value);
  },
  toProto(message: MsgUpdateServiceResponse): Uint8Array {
    return MsgUpdateServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateServiceResponse): MsgUpdateServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgUpdateServiceResponse",
      value: MsgUpdateServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateService(): MsgActivateService {
  return {
    sender: "",
    serviceId: 0
  };
}
export const MsgActivateService = {
  typeUrl: "/milkyway.services.v1.MsgActivateService",
  encode(message: MsgActivateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgActivateService>): MsgActivateService {
    const message = createBaseMsgActivateService();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgActivateServiceAmino): MsgActivateService {
    const message = createBaseMsgActivateService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgActivateService): MsgActivateServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgActivateServiceAminoMsg): MsgActivateService {
    return MsgActivateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivateService): MsgActivateServiceAminoMsg {
    return {
      type: "milkyway/MsgActivateService",
      value: MsgActivateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateServiceProtoMsg): MsgActivateService {
    return MsgActivateService.decode(message.value);
  },
  toProto(message: MsgActivateService): Uint8Array {
    return MsgActivateService.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateService): MsgActivateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgActivateService",
      value: MsgActivateService.encode(message).finish()
    };
  }
};
function createBaseMsgActivateServiceResponse(): MsgActivateServiceResponse {
  return {};
}
export const MsgActivateServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgActivateServiceResponse",
  encode(_: MsgActivateServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateServiceResponse();
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
  fromPartial(_: Partial<MsgActivateServiceResponse>): MsgActivateServiceResponse {
    const message = createBaseMsgActivateServiceResponse();
    return message;
  },
  fromAmino(_: MsgActivateServiceResponseAmino): MsgActivateServiceResponse {
    const message = createBaseMsgActivateServiceResponse();
    return message;
  },
  toAmino(_: MsgActivateServiceResponse): MsgActivateServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateServiceResponseAminoMsg): MsgActivateServiceResponse {
    return MsgActivateServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateServiceResponseProtoMsg): MsgActivateServiceResponse {
    return MsgActivateServiceResponse.decode(message.value);
  },
  toProto(message: MsgActivateServiceResponse): Uint8Array {
    return MsgActivateServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateServiceResponse): MsgActivateServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgActivateServiceResponse",
      value: MsgActivateServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateService(): MsgDeactivateService {
  return {
    sender: "",
    serviceId: 0
  };
}
export const MsgDeactivateService = {
  typeUrl: "/milkyway.services.v1.MsgDeactivateService",
  encode(message: MsgDeactivateService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeactivateService>): MsgDeactivateService {
    const message = createBaseMsgDeactivateService();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgDeactivateServiceAmino): MsgDeactivateService {
    const message = createBaseMsgDeactivateService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgDeactivateService): MsgDeactivateServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateServiceAminoMsg): MsgDeactivateService {
    return MsgDeactivateService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivateService): MsgDeactivateServiceAminoMsg {
    return {
      type: "milkyway/MsgDeactivateService",
      value: MsgDeactivateService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateServiceProtoMsg): MsgDeactivateService {
    return MsgDeactivateService.decode(message.value);
  },
  toProto(message: MsgDeactivateService): Uint8Array {
    return MsgDeactivateService.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateService): MsgDeactivateServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgDeactivateService",
      value: MsgDeactivateService.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateServiceResponse(): MsgDeactivateServiceResponse {
  return {};
}
export const MsgDeactivateServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgDeactivateServiceResponse",
  encode(_: MsgDeactivateServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateServiceResponse();
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
  fromPartial(_: Partial<MsgDeactivateServiceResponse>): MsgDeactivateServiceResponse {
    const message = createBaseMsgDeactivateServiceResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateServiceResponseAmino): MsgDeactivateServiceResponse {
    const message = createBaseMsgDeactivateServiceResponse();
    return message;
  },
  toAmino(_: MsgDeactivateServiceResponse): MsgDeactivateServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateServiceResponseAminoMsg): MsgDeactivateServiceResponse {
    return MsgDeactivateServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateServiceResponseProtoMsg): MsgDeactivateServiceResponse {
    return MsgDeactivateServiceResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateServiceResponse): Uint8Array {
    return MsgDeactivateServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateServiceResponse): MsgDeactivateServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgDeactivateServiceResponse",
      value: MsgDeactivateServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteService(): MsgDeleteService {
  return {
    sender: "",
    serviceId: 0
  };
}
export const MsgDeleteService = {
  typeUrl: "/milkyway.services.v1.MsgDeleteService",
  encode(message: MsgDeleteService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteService>): MsgDeleteService {
    const message = createBaseMsgDeleteService();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgDeleteServiceAmino): MsgDeleteService {
    const message = createBaseMsgDeleteService();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteService): MsgDeleteServiceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteServiceAminoMsg): MsgDeleteService {
    return MsgDeleteService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteService): MsgDeleteServiceAminoMsg {
    return {
      type: "milkyway/MsgDeleteService",
      value: MsgDeleteService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteServiceProtoMsg): MsgDeleteService {
    return MsgDeleteService.decode(message.value);
  },
  toProto(message: MsgDeleteService): Uint8Array {
    return MsgDeleteService.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteService): MsgDeleteServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgDeleteService",
      value: MsgDeleteService.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteServiceResponse(): MsgDeleteServiceResponse {
  return {};
}
export const MsgDeleteServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgDeleteServiceResponse",
  encode(_: MsgDeleteServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteServiceResponse();
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
  fromPartial(_: Partial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse {
    const message = createBaseMsgDeleteServiceResponse();
    return message;
  },
  fromAmino(_: MsgDeleteServiceResponseAmino): MsgDeleteServiceResponse {
    const message = createBaseMsgDeleteServiceResponse();
    return message;
  },
  toAmino(_: MsgDeleteServiceResponse): MsgDeleteServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteServiceResponseAminoMsg): MsgDeleteServiceResponse {
    return MsgDeleteServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteServiceResponseProtoMsg): MsgDeleteServiceResponse {
    return MsgDeleteServiceResponse.decode(message.value);
  },
  toProto(message: MsgDeleteServiceResponse): Uint8Array {
    return MsgDeleteServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteServiceResponse): MsgDeleteServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgDeleteServiceResponse",
      value: MsgDeleteServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferServiceOwnership(): MsgTransferServiceOwnership {
  return {
    sender: "",
    serviceId: 0,
    newAdmin: ""
  };
}
export const MsgTransferServiceOwnership = {
  typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership",
  encode(message: MsgTransferServiceOwnership, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferServiceOwnership {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferServiceOwnership();
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
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransferServiceOwnership>): MsgTransferServiceOwnership {
    const message = createBaseMsgTransferServiceOwnership();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgTransferServiceOwnershipAmino): MsgTransferServiceOwnership {
    const message = createBaseMsgTransferServiceOwnership();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgTransferServiceOwnershipAminoMsg): MsgTransferServiceOwnership {
    return MsgTransferServiceOwnership.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipAminoMsg {
    return {
      type: "milkyway/MsgTransferServiceOwnership",
      value: MsgTransferServiceOwnership.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferServiceOwnershipProtoMsg): MsgTransferServiceOwnership {
    return MsgTransferServiceOwnership.decode(message.value);
  },
  toProto(message: MsgTransferServiceOwnership): Uint8Array {
    return MsgTransferServiceOwnership.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferServiceOwnership): MsgTransferServiceOwnershipProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership",
      value: MsgTransferServiceOwnership.encode(message).finish()
    };
  }
};
function createBaseMsgTransferServiceOwnershipResponse(): MsgTransferServiceOwnershipResponse {
  return {};
}
export const MsgTransferServiceOwnershipResponse = {
  typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse",
  encode(_: MsgTransferServiceOwnershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferServiceOwnershipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferServiceOwnershipResponse();
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
  fromPartial(_: Partial<MsgTransferServiceOwnershipResponse>): MsgTransferServiceOwnershipResponse {
    const message = createBaseMsgTransferServiceOwnershipResponse();
    return message;
  },
  fromAmino(_: MsgTransferServiceOwnershipResponseAmino): MsgTransferServiceOwnershipResponse {
    const message = createBaseMsgTransferServiceOwnershipResponse();
    return message;
  },
  toAmino(_: MsgTransferServiceOwnershipResponse): MsgTransferServiceOwnershipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferServiceOwnershipResponseAminoMsg): MsgTransferServiceOwnershipResponse {
    return MsgTransferServiceOwnershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferServiceOwnershipResponseProtoMsg): MsgTransferServiceOwnershipResponse {
    return MsgTransferServiceOwnershipResponse.decode(message.value);
  },
  toProto(message: MsgTransferServiceOwnershipResponse): Uint8Array {
    return MsgTransferServiceOwnershipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferServiceOwnershipResponse): MsgTransferServiceOwnershipResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnershipResponse",
      value: MsgTransferServiceOwnershipResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetServiceParams(): MsgSetServiceParams {
  return {
    sender: "",
    serviceId: 0,
    serviceParams: ServiceParams.fromPartial({})
  };
}
export const MsgSetServiceParams = {
  typeUrl: "/milkyway.services.v1.MsgSetServiceParams",
  encode(message: MsgSetServiceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    if (message.serviceParams !== undefined) {
      ServiceParams.encode(message.serviceParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetServiceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetServiceParams();
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
          message.serviceParams = ServiceParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetServiceParams>): MsgSetServiceParams {
    const message = createBaseMsgSetServiceParams();
    message.sender = object.sender ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.serviceParams = object.serviceParams !== undefined && object.serviceParams !== null ? ServiceParams.fromPartial(object.serviceParams) : undefined;
    return message;
  },
  fromAmino(object: MsgSetServiceParamsAmino): MsgSetServiceParams {
    const message = createBaseMsgSetServiceParams();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    if (object.service_params !== undefined && object.service_params !== null) {
      message.serviceParams = ServiceParams.fromAmino(object.service_params);
    }
    return message;
  },
  toAmino(message: MsgSetServiceParams): MsgSetServiceParamsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    obj.service_params = message.serviceParams ? ServiceParams.toAmino(message.serviceParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetServiceParamsAminoMsg): MsgSetServiceParams {
    return MsgSetServiceParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetServiceParams): MsgSetServiceParamsAminoMsg {
    return {
      type: "milkyway/MsgSetServiceParams",
      value: MsgSetServiceParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetServiceParamsProtoMsg): MsgSetServiceParams {
    return MsgSetServiceParams.decode(message.value);
  },
  toProto(message: MsgSetServiceParams): Uint8Array {
    return MsgSetServiceParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetServiceParams): MsgSetServiceParamsProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgSetServiceParams",
      value: MsgSetServiceParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetServiceParamsResponse(): MsgSetServiceParamsResponse {
  return {};
}
export const MsgSetServiceParamsResponse = {
  typeUrl: "/milkyway.services.v1.MsgSetServiceParamsResponse",
  encode(_: MsgSetServiceParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetServiceParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetServiceParamsResponse();
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
  fromPartial(_: Partial<MsgSetServiceParamsResponse>): MsgSetServiceParamsResponse {
    const message = createBaseMsgSetServiceParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetServiceParamsResponseAmino): MsgSetServiceParamsResponse {
    const message = createBaseMsgSetServiceParamsResponse();
    return message;
  },
  toAmino(_: MsgSetServiceParamsResponse): MsgSetServiceParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetServiceParamsResponseAminoMsg): MsgSetServiceParamsResponse {
    return MsgSetServiceParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetServiceParamsResponseProtoMsg): MsgSetServiceParamsResponse {
    return MsgSetServiceParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetServiceParamsResponse): Uint8Array {
    return MsgSetServiceParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetServiceParamsResponse): MsgSetServiceParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgSetServiceParamsResponse",
      value: MsgSetServiceParamsResponse.encode(message).finish()
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
  typeUrl: "/milkyway.services.v1.MsgUpdateParams",
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
      type: "milkyway/services/MsgUpdateParams",
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
      typeUrl: "/milkyway.services.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/milkyway.services.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/milkyway.services.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAccreditService(): MsgAccreditService {
  return {
    authority: "",
    serviceId: 0
  };
}
export const MsgAccreditService = {
  typeUrl: "/milkyway.services.v1.MsgAccreditService",
  encode(message: MsgAccreditService, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAccreditService {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAccreditService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAccreditService>): MsgAccreditService {
    const message = createBaseMsgAccreditService();
    message.authority = object.authority ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgAccreditServiceAmino): MsgAccreditService {
    const message = createBaseMsgAccreditService();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgAccreditService): MsgAccreditServiceAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgAccreditServiceAminoMsg): MsgAccreditService {
    return MsgAccreditService.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAccreditService): MsgAccreditServiceAminoMsg {
    return {
      type: "milkyway/MsgAccreditService",
      value: MsgAccreditService.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAccreditServiceProtoMsg): MsgAccreditService {
    return MsgAccreditService.decode(message.value);
  },
  toProto(message: MsgAccreditService): Uint8Array {
    return MsgAccreditService.encode(message).finish();
  },
  toProtoMsg(message: MsgAccreditService): MsgAccreditServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgAccreditService",
      value: MsgAccreditService.encode(message).finish()
    };
  }
};
function createBaseMsgAccreditServiceResponse(): MsgAccreditServiceResponse {
  return {};
}
export const MsgAccreditServiceResponse = {
  typeUrl: "/milkyway.services.v1.MsgAccreditServiceResponse",
  encode(_: MsgAccreditServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAccreditServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAccreditServiceResponse();
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
  fromPartial(_: Partial<MsgAccreditServiceResponse>): MsgAccreditServiceResponse {
    const message = createBaseMsgAccreditServiceResponse();
    return message;
  },
  fromAmino(_: MsgAccreditServiceResponseAmino): MsgAccreditServiceResponse {
    const message = createBaseMsgAccreditServiceResponse();
    return message;
  },
  toAmino(_: MsgAccreditServiceResponse): MsgAccreditServiceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAccreditServiceResponseAminoMsg): MsgAccreditServiceResponse {
    return MsgAccreditServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAccreditServiceResponseProtoMsg): MsgAccreditServiceResponse {
    return MsgAccreditServiceResponse.decode(message.value);
  },
  toProto(message: MsgAccreditServiceResponse): Uint8Array {
    return MsgAccreditServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAccreditServiceResponse): MsgAccreditServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgAccreditServiceResponse",
      value: MsgAccreditServiceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeServiceAccreditation(): MsgRevokeServiceAccreditation {
  return {
    authority: "",
    serviceId: 0
  };
}
export const MsgRevokeServiceAccreditation = {
  typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation",
  encode(message: MsgRevokeServiceAccreditation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.serviceId !== 0) {
      writer.uint32(16).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeServiceAccreditation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeServiceAccreditation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokeServiceAccreditation>): MsgRevokeServiceAccreditation {
    const message = createBaseMsgRevokeServiceAccreditation();
    message.authority = object.authority ?? "";
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: MsgRevokeServiceAccreditationAmino): MsgRevokeServiceAccreditation {
    const message = createBaseMsgRevokeServiceAccreditation();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeServiceAccreditationAminoMsg): MsgRevokeServiceAccreditation {
    return MsgRevokeServiceAccreditation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationAminoMsg {
    return {
      type: "milkyway/MsgRevokeServiceAccreditation",
      value: MsgRevokeServiceAccreditation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeServiceAccreditationProtoMsg): MsgRevokeServiceAccreditation {
    return MsgRevokeServiceAccreditation.decode(message.value);
  },
  toProto(message: MsgRevokeServiceAccreditation): Uint8Array {
    return MsgRevokeServiceAccreditation.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeServiceAccreditation): MsgRevokeServiceAccreditationProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation",
      value: MsgRevokeServiceAccreditation.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeServiceAccreditationResponse(): MsgRevokeServiceAccreditationResponse {
  return {};
}
export const MsgRevokeServiceAccreditationResponse = {
  typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse",
  encode(_: MsgRevokeServiceAccreditationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeServiceAccreditationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeServiceAccreditationResponse();
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
  fromPartial(_: Partial<MsgRevokeServiceAccreditationResponse>): MsgRevokeServiceAccreditationResponse {
    const message = createBaseMsgRevokeServiceAccreditationResponse();
    return message;
  },
  fromAmino(_: MsgRevokeServiceAccreditationResponseAmino): MsgRevokeServiceAccreditationResponse {
    const message = createBaseMsgRevokeServiceAccreditationResponse();
    return message;
  },
  toAmino(_: MsgRevokeServiceAccreditationResponse): MsgRevokeServiceAccreditationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeServiceAccreditationResponseAminoMsg): MsgRevokeServiceAccreditationResponse {
    return MsgRevokeServiceAccreditationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeServiceAccreditationResponseProtoMsg): MsgRevokeServiceAccreditationResponse {
    return MsgRevokeServiceAccreditationResponse.decode(message.value);
  },
  toProto(message: MsgRevokeServiceAccreditationResponse): Uint8Array {
    return MsgRevokeServiceAccreditationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeServiceAccreditationResponse): MsgRevokeServiceAccreditationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditationResponse",
      value: MsgRevokeServiceAccreditationResponse.encode(message).finish()
    };
  }
};