import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { OperatorParams, OperatorParamsAmino, OperatorParamsSDKType } from "./models";
import { Params, ParamsAmino, ParamsSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgRegisterOperator defines the message structure for the RegisterOperator
 * gRPC service method. It allows an account to register a new operator that can
 * opt-in to validate various services. It requires a sender address as well as
 * the details of the operator to be registered.
 */
export interface MsgRegisterOperator {
  /** Sender is the address of the user registering the operator */
  sender: string;
  /** Moniker is the moniker of the operator */
  moniker: string;
  /** Website is the website of the operator (optional) */
  website: string;
  /** PictureURL is the URL of operator picture (optional) */
  pictureUrl: string;
  /**
   * FeeAmount represents the fees that are going to be paid to create the
   * operator. These should always be greater or equals of any of the coins
   * specified inside the OperatorRegistrationFee field of the modules params.
   * If no fees are specified inside the module parameters, this field can be
   * omitted.
   */
  feeAmount: Coin[];
}
export interface MsgRegisterOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgRegisterOperator";
  value: Uint8Array;
}
/**
 * MsgRegisterOperator defines the message structure for the RegisterOperator
 * gRPC service method. It allows an account to register a new operator that can
 * opt-in to validate various services. It requires a sender address as well as
 * the details of the operator to be registered.
 */
export interface MsgRegisterOperatorAmino {
  /** Sender is the address of the user registering the operator */
  sender?: string;
  /** Moniker is the moniker of the operator */
  moniker?: string;
  /** Website is the website of the operator (optional) */
  website?: string;
  /** PictureURL is the URL of operator picture (optional) */
  picture_url?: string;
  /**
   * FeeAmount represents the fees that are going to be paid to create the
   * operator. These should always be greater or equals of any of the coins
   * specified inside the OperatorRegistrationFee field of the modules params.
   * If no fees are specified inside the module parameters, this field can be
   * omitted.
   */
  fee_amount?: CoinAmino[];
}
export interface MsgRegisterOperatorAminoMsg {
  type: "milkyway/MsgRegisterOperator";
  value: MsgRegisterOperatorAmino;
}
/**
 * MsgRegisterOperator defines the message structure for the RegisterOperator
 * gRPC service method. It allows an account to register a new operator that can
 * opt-in to validate various services. It requires a sender address as well as
 * the details of the operator to be registered.
 */
export interface MsgRegisterOperatorSDKType {
  sender: string;
  moniker: string;
  website: string;
  picture_url: string;
  fee_amount: CoinSDKType[];
}
/**
 * MsgRegisterOperatorResponse is the return value of MsgRegisterOperator.
 * It returns the newly created operator ID.
 */
export interface MsgRegisterOperatorResponse {
  /** NewOperatorID is the ID of the newly registered operator */
  newOperatorId: number;
}
export interface MsgRegisterOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgRegisterOperatorResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterOperatorResponse is the return value of MsgRegisterOperator.
 * It returns the newly created operator ID.
 */
export interface MsgRegisterOperatorResponseAmino {
  /** NewOperatorID is the ID of the newly registered operator */
  new_operator_id?: number;
}
export interface MsgRegisterOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgRegisterOperatorResponse";
  value: MsgRegisterOperatorResponseAmino;
}
/**
 * MsgRegisterOperatorResponse is the return value of MsgRegisterOperator.
 * It returns the newly created operator ID.
 */
export interface MsgRegisterOperatorResponseSDKType {
  new_operator_id: number;
}
/**
 * MsgUpdateOperator defines the message structure for the UpdateOperator gRPC
 * service method. It allows the operator owner to update the details of an
 * existing operator.
 */
export interface MsgUpdateOperator {
  /** Sender is the address of the user updating the operator */
  sender: string;
  /** OperatorID represents the ID of the operator to be updated */
  operatorId: number;
  /**
   * Moniker is the new moniker of the operator.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  moniker: string;
  /**
   * Website is the new website of the operator.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  website: string;
  /**
   * PictureURL is the new URL of the operator picture.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  pictureUrl: string;
}
export interface MsgUpdateOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgUpdateOperator";
  value: Uint8Array;
}
/**
 * MsgUpdateOperator defines the message structure for the UpdateOperator gRPC
 * service method. It allows the operator owner to update the details of an
 * existing operator.
 */
export interface MsgUpdateOperatorAmino {
  /** Sender is the address of the user updating the operator */
  sender?: string;
  /** OperatorID represents the ID of the operator to be updated */
  operator_id?: number;
  /**
   * Moniker is the new moniker of the operator.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  moniker?: string;
  /**
   * Website is the new website of the operator.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  website?: string;
  /**
   * PictureURL is the new URL of the operator picture.
   * If it shouldn't be changed, use [do-not-modify] instead.
   */
  picture_url?: string;
}
export interface MsgUpdateOperatorAminoMsg {
  type: "milkyway/MsgUpdateOperator";
  value: MsgUpdateOperatorAmino;
}
/**
 * MsgUpdateOperator defines the message structure for the UpdateOperator gRPC
 * service method. It allows the operator owner to update the details of an
 * existing operator.
 */
export interface MsgUpdateOperatorSDKType {
  sender: string;
  operator_id: number;
  moniker: string;
  website: string;
  picture_url: string;
}
/** MsgUpdateOperatorResponse is the return value of MsgUpdateOperator. */
export interface MsgUpdateOperatorResponse {}
export interface MsgUpdateOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgUpdateOperatorResponse";
  value: Uint8Array;
}
/** MsgUpdateOperatorResponse is the return value of MsgUpdateOperator. */
export interface MsgUpdateOperatorResponseAmino {}
export interface MsgUpdateOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgUpdateOperatorResponse";
  value: MsgUpdateOperatorResponseAmino;
}
/** MsgUpdateOperatorResponse is the return value of MsgUpdateOperator. */
export interface MsgUpdateOperatorResponseSDKType {}
/**
 * MsgDeactivateOperator defines the message structure for the
 * DeactivateOperator gRPC service method. It allows the operator owner to
 * signal that the operator will become inactive. This should be used to signal
 * users that the operator is going to stop performing services and they should
 * switch to another operator.
 */
export interface MsgDeactivateOperator {
  /** Sender is the address of the user deactivating the operator */
  sender: string;
  /** OperatorID represents the ID of the operator to be deregistered */
  operatorId: number;
}
export interface MsgDeactivateOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator";
  value: Uint8Array;
}
/**
 * MsgDeactivateOperator defines the message structure for the
 * DeactivateOperator gRPC service method. It allows the operator owner to
 * signal that the operator will become inactive. This should be used to signal
 * users that the operator is going to stop performing services and they should
 * switch to another operator.
 */
export interface MsgDeactivateOperatorAmino {
  /** Sender is the address of the user deactivating the operator */
  sender?: string;
  /** OperatorID represents the ID of the operator to be deregistered */
  operator_id?: number;
}
export interface MsgDeactivateOperatorAminoMsg {
  type: "milkyway/MsgDeactivateOperator";
  value: MsgDeactivateOperatorAmino;
}
/**
 * MsgDeactivateOperator defines the message structure for the
 * DeactivateOperator gRPC service method. It allows the operator owner to
 * signal that the operator will become inactive. This should be used to signal
 * users that the operator is going to stop performing services and they should
 * switch to another operator.
 */
export interface MsgDeactivateOperatorSDKType {
  sender: string;
  operator_id: number;
}
/** MsgDeactivateOperatorResponse is the return value of MsgDeactivateOperator. */
export interface MsgDeactivateOperatorResponse {}
export interface MsgDeactivateOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgDeactivateOperatorResponse";
  value: Uint8Array;
}
/** MsgDeactivateOperatorResponse is the return value of MsgDeactivateOperator. */
export interface MsgDeactivateOperatorResponseAmino {}
export interface MsgDeactivateOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgDeactivateOperatorResponse";
  value: MsgDeactivateOperatorResponseAmino;
}
/** MsgDeactivateOperatorResponse is the return value of MsgDeactivateOperator. */
export interface MsgDeactivateOperatorResponseSDKType {}
/**
 * MsgReactivateOperator defines the message structure for the
 * ReactivateOperator gRPC service method. It allows the operator owner to
 * reactivate an inactive operator.
 */
export interface MsgReactivateOperator {
  /** Sender is the address of the user reactivating the operator */
  sender: string;
  /** OperatorID represents the ID of the operator to be reactivated */
  operatorId: number;
}
export interface MsgReactivateOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgReactivateOperator";
  value: Uint8Array;
}
/**
 * MsgReactivateOperator defines the message structure for the
 * ReactivateOperator gRPC service method. It allows the operator owner to
 * reactivate an inactive operator.
 */
export interface MsgReactivateOperatorAmino {
  /** Sender is the address of the user reactivating the operator */
  sender?: string;
  /** OperatorID represents the ID of the operator to be reactivated */
  operator_id?: number;
}
export interface MsgReactivateOperatorAminoMsg {
  type: "milkyway/MsgReactivateOperator";
  value: MsgReactivateOperatorAmino;
}
/**
 * MsgReactivateOperator defines the message structure for the
 * ReactivateOperator gRPC service method. It allows the operator owner to
 * reactivate an inactive operator.
 */
export interface MsgReactivateOperatorSDKType {
  sender: string;
  operator_id: number;
}
/** MsgReactivateOperatorResponse is the return value of MsgReactivateOperator. */
export interface MsgReactivateOperatorResponse {}
export interface MsgReactivateOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgReactivateOperatorResponse";
  value: Uint8Array;
}
/** MsgReactivateOperatorResponse is the return value of MsgReactivateOperator. */
export interface MsgReactivateOperatorResponseAmino {}
export interface MsgReactivateOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgReactivateOperatorResponse";
  value: MsgReactivateOperatorResponseAmino;
}
/** MsgReactivateOperatorResponse is the return value of MsgReactivateOperator. */
export interface MsgReactivateOperatorResponseSDKType {}
/**
 * MsgDeleteOperator defines the message structure for the
 * DeleteOperator gRPC service method. It allows the operator owner to
 * delete a deactivated operator.
 */
export interface MsgDeleteOperator {
  /** Sender is the address of the user deleting the operator */
  sender: string;
  /** OperatorID represents the ID of the operator to be deleted */
  operatorId: number;
}
export interface MsgDeleteOperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgDeleteOperator";
  value: Uint8Array;
}
/**
 * MsgDeleteOperator defines the message structure for the
 * DeleteOperator gRPC service method. It allows the operator owner to
 * delete a deactivated operator.
 */
export interface MsgDeleteOperatorAmino {
  /** Sender is the address of the user deleting the operator */
  sender?: string;
  /** OperatorID represents the ID of the operator to be deleted */
  operator_id?: number;
}
export interface MsgDeleteOperatorAminoMsg {
  type: "milkyway/MsgDeleteOperator";
  value: MsgDeleteOperatorAmino;
}
/**
 * MsgDeleteOperator defines the message structure for the
 * DeleteOperator gRPC service method. It allows the operator owner to
 * delete a deactivated operator.
 */
export interface MsgDeleteOperatorSDKType {
  sender: string;
  operator_id: number;
}
/** MsgDeleteOperatorResponse is the return value of MsgDeleteOperator. */
export interface MsgDeleteOperatorResponse {}
export interface MsgDeleteOperatorResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgDeleteOperatorResponse";
  value: Uint8Array;
}
/** MsgDeleteOperatorResponse is the return value of MsgDeleteOperator. */
export interface MsgDeleteOperatorResponseAmino {}
export interface MsgDeleteOperatorResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgDeleteOperatorResponse";
  value: MsgDeleteOperatorResponseAmino;
}
/** MsgDeleteOperatorResponse is the return value of MsgDeleteOperator. */
export interface MsgDeleteOperatorResponseSDKType {}
/**
 * MsgSetOperatorParams defines the message structure for the
 * SetOperatorParams gRPC service method. It allows the operator admin to
 * update the operator's parameters.
 */
export interface MsgSetOperatorParams {
  sender: string;
  operatorId: number;
  params: OperatorParams;
}
export interface MsgSetOperatorParamsProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams";
  value: Uint8Array;
}
/**
 * MsgSetOperatorParams defines the message structure for the
 * SetOperatorParams gRPC service method. It allows the operator admin to
 * update the operator's parameters.
 */
export interface MsgSetOperatorParamsAmino {
  sender?: string;
  operator_id?: number;
  params?: OperatorParamsAmino;
}
export interface MsgSetOperatorParamsAminoMsg {
  type: "milkyway/MsgSetOperatorParams";
  value: MsgSetOperatorParamsAmino;
}
/**
 * MsgSetOperatorParams defines the message structure for the
 * SetOperatorParams gRPC service method. It allows the operator admin to
 * update the operator's parameters.
 */
export interface MsgSetOperatorParamsSDKType {
  sender: string;
  operator_id: number;
  params: OperatorParamsSDKType;
}
/**
 * MsgSetOperatorParamsResponse is the return value of
 * MsgSetOperatorParams.
 */
export interface MsgSetOperatorParamsResponse {}
export interface MsgSetOperatorParamsResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgSetOperatorParamsResponse";
  value: Uint8Array;
}
/**
 * MsgSetOperatorParamsResponse is the return value of
 * MsgSetOperatorParams.
 */
export interface MsgSetOperatorParamsResponseAmino {}
export interface MsgSetOperatorParamsResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgSetOperatorParamsResponse";
  value: MsgSetOperatorParamsResponseAmino;
}
/**
 * MsgSetOperatorParamsResponse is the return value of
 * MsgSetOperatorParams.
 */
export interface MsgSetOperatorParamsResponseSDKType {}
/**
 * MsgTransferOperatorOwnership defines the message structure for the
 * TransferOperatorOwnership gRPC service method. It allows an operator admin to
 * transfer the ownership of the operator to another account.
 */
export interface MsgTransferOperatorOwnership {
  /** Sender is the address of the user transferring the ownership */
  sender: string;
  /** OperatorID represents the ID of the operator to transfer ownership */
  operatorId: number;
  /** NewAdmin is the address of the new admin of the operator */
  newAdmin: string;
}
export interface MsgTransferOperatorOwnershipProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership";
  value: Uint8Array;
}
/**
 * MsgTransferOperatorOwnership defines the message structure for the
 * TransferOperatorOwnership gRPC service method. It allows an operator admin to
 * transfer the ownership of the operator to another account.
 */
export interface MsgTransferOperatorOwnershipAmino {
  /** Sender is the address of the user transferring the ownership */
  sender?: string;
  /** OperatorID represents the ID of the operator to transfer ownership */
  operator_id?: number;
  /** NewAdmin is the address of the new admin of the operator */
  new_admin?: string;
}
export interface MsgTransferOperatorOwnershipAminoMsg {
  type: "milkyway/MsgTransferOperatorOwnership";
  value: MsgTransferOperatorOwnershipAmino;
}
/**
 * MsgTransferOperatorOwnership defines the message structure for the
 * TransferOperatorOwnership gRPC service method. It allows an operator admin to
 * transfer the ownership of the operator to another account.
 */
export interface MsgTransferOperatorOwnershipSDKType {
  sender: string;
  operator_id: number;
  new_admin: string;
}
/**
 * MsgTransferOperatorOwnershipResponse is the return value of
 * MsgTransferOperatorOwnership.
 */
export interface MsgTransferOperatorOwnershipResponse {}
export interface MsgTransferOperatorOwnershipResponseProtoMsg {
  typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse";
  value: Uint8Array;
}
/**
 * MsgTransferOperatorOwnershipResponse is the return value of
 * MsgTransferOperatorOwnership.
 */
export interface MsgTransferOperatorOwnershipResponseAmino {}
export interface MsgTransferOperatorOwnershipResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse";
  value: MsgTransferOperatorOwnershipResponseAmino;
}
/**
 * MsgTransferOperatorOwnershipResponse is the return value of
 * MsgTransferOperatorOwnership.
 */
export interface MsgTransferOperatorOwnershipResponseSDKType {}
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
  typeUrl: "/milkyway.operators.v1.MsgUpdateParams";
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
  type: "milkyway/operators/MsgUpdateParams";
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
  typeUrl: "/milkyway.operators.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/milkyway.operators.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterOperator(): MsgRegisterOperator {
  return {
    sender: "",
    moniker: "",
    website: "",
    pictureUrl: "",
    feeAmount: []
  };
}
export const MsgRegisterOperator = {
  typeUrl: "/milkyway.operators.v1.MsgRegisterOperator",
  encode(message: MsgRegisterOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(34).string(message.pictureUrl);
    }
    for (const v of message.feeAmount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.pictureUrl = reader.string();
          break;
        case 5:
          message.feeAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterOperator>): MsgRegisterOperator {
    const message = createBaseMsgRegisterOperator();
    message.sender = object.sender ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    message.feeAmount = object.feeAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRegisterOperatorAmino): MsgRegisterOperator {
    const message = createBaseMsgRegisterOperator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
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
  toAmino(message: MsgRegisterOperator): MsgRegisterOperatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.website = message.website === "" ? undefined : message.website;
    obj.picture_url = message.pictureUrl === "" ? undefined : message.pictureUrl;
    if (message.feeAmount) {
      obj.fee_amount = message.feeAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_amount = message.feeAmount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterOperatorAminoMsg): MsgRegisterOperator {
    return MsgRegisterOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterOperator): MsgRegisterOperatorAminoMsg {
    return {
      type: "milkyway/MsgRegisterOperator",
      value: MsgRegisterOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterOperatorProtoMsg): MsgRegisterOperator {
    return MsgRegisterOperator.decode(message.value);
  },
  toProto(message: MsgRegisterOperator): Uint8Array {
    return MsgRegisterOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterOperator): MsgRegisterOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgRegisterOperator",
      value: MsgRegisterOperator.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterOperatorResponse(): MsgRegisterOperatorResponse {
  return {
    newOperatorId: 0
  };
}
export const MsgRegisterOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.MsgRegisterOperatorResponse",
  encode(message: MsgRegisterOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newOperatorId !== 0) {
      writer.uint32(8).uint32(message.newOperatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newOperatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterOperatorResponse>): MsgRegisterOperatorResponse {
    const message = createBaseMsgRegisterOperatorResponse();
    message.newOperatorId = object.newOperatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgRegisterOperatorResponseAmino): MsgRegisterOperatorResponse {
    const message = createBaseMsgRegisterOperatorResponse();
    if (object.new_operator_id !== undefined && object.new_operator_id !== null) {
      message.newOperatorId = object.new_operator_id;
    }
    return message;
  },
  toAmino(message: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseAmino {
    const obj: any = {};
    obj.new_operator_id = message.newOperatorId === 0 ? undefined : message.newOperatorId;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterOperatorResponseAminoMsg): MsgRegisterOperatorResponse {
    return MsgRegisterOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterOperatorResponseProtoMsg): MsgRegisterOperatorResponse {
    return MsgRegisterOperatorResponse.decode(message.value);
  },
  toProto(message: MsgRegisterOperatorResponse): Uint8Array {
    return MsgRegisterOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgRegisterOperatorResponse",
      value: MsgRegisterOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperator(): MsgUpdateOperator {
  return {
    sender: "",
    operatorId: 0,
    moniker: "",
    website: "",
    pictureUrl: ""
  };
}
export const MsgUpdateOperator = {
  typeUrl: "/milkyway.operators.v1.MsgUpdateOperator",
  encode(message: MsgUpdateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    if (message.moniker !== "") {
      writer.uint32(26).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(42).string(message.pictureUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperator();
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
          message.moniker = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.pictureUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateOperator>): MsgUpdateOperator {
    const message = createBaseMsgUpdateOperator();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateOperatorAmino): MsgUpdateOperator {
    const message = createBaseMsgUpdateOperator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.picture_url !== undefined && object.picture_url !== null) {
      message.pictureUrl = object.picture_url;
    }
    return message;
  },
  toAmino(message: MsgUpdateOperator): MsgUpdateOperatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.website = message.website === "" ? undefined : message.website;
    obj.picture_url = message.pictureUrl === "" ? undefined : message.pictureUrl;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorAminoMsg): MsgUpdateOperator {
    return MsgUpdateOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateOperator): MsgUpdateOperatorAminoMsg {
    return {
      type: "milkyway/MsgUpdateOperator",
      value: MsgUpdateOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateOperatorProtoMsg): MsgUpdateOperator {
    return MsgUpdateOperator.decode(message.value);
  },
  toProto(message: MsgUpdateOperator): Uint8Array {
    return MsgUpdateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperator): MsgUpdateOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgUpdateOperator",
      value: MsgUpdateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateOperatorResponse(): MsgUpdateOperatorResponse {
  return {};
}
export const MsgUpdateOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.MsgUpdateOperatorResponse",
  encode(_: MsgUpdateOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorResponse();
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
  fromPartial(_: Partial<MsgUpdateOperatorResponse>): MsgUpdateOperatorResponse {
    const message = createBaseMsgUpdateOperatorResponse();
    return message;
  },
  fromAmino(_: MsgUpdateOperatorResponseAmino): MsgUpdateOperatorResponse {
    const message = createBaseMsgUpdateOperatorResponse();
    return message;
  },
  toAmino(_: MsgUpdateOperatorResponse): MsgUpdateOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateOperatorResponseAminoMsg): MsgUpdateOperatorResponse {
    return MsgUpdateOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateOperatorResponseProtoMsg): MsgUpdateOperatorResponse {
    return MsgUpdateOperatorResponse.decode(message.value);
  },
  toProto(message: MsgUpdateOperatorResponse): Uint8Array {
    return MsgUpdateOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateOperatorResponse): MsgUpdateOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgUpdateOperatorResponse",
      value: MsgUpdateOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateOperator(): MsgDeactivateOperator {
  return {
    sender: "",
    operatorId: 0
  };
}
export const MsgDeactivateOperator = {
  typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator",
  encode(message: MsgDeactivateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeactivateOperator>): MsgDeactivateOperator {
    const message = createBaseMsgDeactivateOperator();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgDeactivateOperatorAmino): MsgDeactivateOperator {
    const message = createBaseMsgDeactivateOperator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgDeactivateOperator): MsgDeactivateOperatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateOperatorAminoMsg): MsgDeactivateOperator {
    return MsgDeactivateOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivateOperator): MsgDeactivateOperatorAminoMsg {
    return {
      type: "milkyway/MsgDeactivateOperator",
      value: MsgDeactivateOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateOperatorProtoMsg): MsgDeactivateOperator {
    return MsgDeactivateOperator.decode(message.value);
  },
  toProto(message: MsgDeactivateOperator): Uint8Array {
    return MsgDeactivateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateOperator): MsgDeactivateOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator",
      value: MsgDeactivateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgDeactivateOperatorResponse(): MsgDeactivateOperatorResponse {
  return {};
}
export const MsgDeactivateOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.MsgDeactivateOperatorResponse",
  encode(_: MsgDeactivateOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateOperatorResponse();
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
  fromPartial(_: Partial<MsgDeactivateOperatorResponse>): MsgDeactivateOperatorResponse {
    const message = createBaseMsgDeactivateOperatorResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateOperatorResponseAmino): MsgDeactivateOperatorResponse {
    const message = createBaseMsgDeactivateOperatorResponse();
    return message;
  },
  toAmino(_: MsgDeactivateOperatorResponse): MsgDeactivateOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateOperatorResponseAminoMsg): MsgDeactivateOperatorResponse {
    return MsgDeactivateOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateOperatorResponseProtoMsg): MsgDeactivateOperatorResponse {
    return MsgDeactivateOperatorResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateOperatorResponse): Uint8Array {
    return MsgDeactivateOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateOperatorResponse): MsgDeactivateOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgDeactivateOperatorResponse",
      value: MsgDeactivateOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReactivateOperator(): MsgReactivateOperator {
  return {
    sender: "",
    operatorId: 0
  };
}
export const MsgReactivateOperator = {
  typeUrl: "/milkyway.operators.v1.MsgReactivateOperator",
  encode(message: MsgReactivateOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReactivateOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReactivateOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgReactivateOperator>): MsgReactivateOperator {
    const message = createBaseMsgReactivateOperator();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgReactivateOperatorAmino): MsgReactivateOperator {
    const message = createBaseMsgReactivateOperator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgReactivateOperator): MsgReactivateOperatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgReactivateOperatorAminoMsg): MsgReactivateOperator {
    return MsgReactivateOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgReactivateOperator): MsgReactivateOperatorAminoMsg {
    return {
      type: "milkyway/MsgReactivateOperator",
      value: MsgReactivateOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgReactivateOperatorProtoMsg): MsgReactivateOperator {
    return MsgReactivateOperator.decode(message.value);
  },
  toProto(message: MsgReactivateOperator): Uint8Array {
    return MsgReactivateOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgReactivateOperator): MsgReactivateOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgReactivateOperator",
      value: MsgReactivateOperator.encode(message).finish()
    };
  }
};
function createBaseMsgReactivateOperatorResponse(): MsgReactivateOperatorResponse {
  return {};
}
export const MsgReactivateOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.MsgReactivateOperatorResponse",
  encode(_: MsgReactivateOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReactivateOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReactivateOperatorResponse();
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
  fromPartial(_: Partial<MsgReactivateOperatorResponse>): MsgReactivateOperatorResponse {
    const message = createBaseMsgReactivateOperatorResponse();
    return message;
  },
  fromAmino(_: MsgReactivateOperatorResponseAmino): MsgReactivateOperatorResponse {
    const message = createBaseMsgReactivateOperatorResponse();
    return message;
  },
  toAmino(_: MsgReactivateOperatorResponse): MsgReactivateOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgReactivateOperatorResponseAminoMsg): MsgReactivateOperatorResponse {
    return MsgReactivateOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReactivateOperatorResponseProtoMsg): MsgReactivateOperatorResponse {
    return MsgReactivateOperatorResponse.decode(message.value);
  },
  toProto(message: MsgReactivateOperatorResponse): Uint8Array {
    return MsgReactivateOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReactivateOperatorResponse): MsgReactivateOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgReactivateOperatorResponse",
      value: MsgReactivateOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOperator(): MsgDeleteOperator {
  return {
    sender: "",
    operatorId: 0
  };
}
export const MsgDeleteOperator = {
  typeUrl: "/milkyway.operators.v1.MsgDeleteOperator",
  encode(message: MsgDeleteOperator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOperator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.operatorId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteOperator>): MsgDeleteOperator {
    const message = createBaseMsgDeleteOperator();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    return message;
  },
  fromAmino(object: MsgDeleteOperatorAmino): MsgDeleteOperator {
    const message = createBaseMsgDeleteOperator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    return message;
  },
  toAmino(message: MsgDeleteOperator): MsgDeleteOperatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOperatorAminoMsg): MsgDeleteOperator {
    return MsgDeleteOperator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteOperator): MsgDeleteOperatorAminoMsg {
    return {
      type: "milkyway/MsgDeleteOperator",
      value: MsgDeleteOperator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteOperatorProtoMsg): MsgDeleteOperator {
    return MsgDeleteOperator.decode(message.value);
  },
  toProto(message: MsgDeleteOperator): Uint8Array {
    return MsgDeleteOperator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOperator): MsgDeleteOperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgDeleteOperator",
      value: MsgDeleteOperator.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteOperatorResponse(): MsgDeleteOperatorResponse {
  return {};
}
export const MsgDeleteOperatorResponse = {
  typeUrl: "/milkyway.operators.v1.MsgDeleteOperatorResponse",
  encode(_: MsgDeleteOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOperatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOperatorResponse();
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
  fromPartial(_: Partial<MsgDeleteOperatorResponse>): MsgDeleteOperatorResponse {
    const message = createBaseMsgDeleteOperatorResponse();
    return message;
  },
  fromAmino(_: MsgDeleteOperatorResponseAmino): MsgDeleteOperatorResponse {
    const message = createBaseMsgDeleteOperatorResponse();
    return message;
  },
  toAmino(_: MsgDeleteOperatorResponse): MsgDeleteOperatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteOperatorResponseAminoMsg): MsgDeleteOperatorResponse {
    return MsgDeleteOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteOperatorResponseProtoMsg): MsgDeleteOperatorResponse {
    return MsgDeleteOperatorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteOperatorResponse): Uint8Array {
    return MsgDeleteOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteOperatorResponse): MsgDeleteOperatorResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgDeleteOperatorResponse",
      value: MsgDeleteOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorParams(): MsgSetOperatorParams {
  return {
    sender: "",
    operatorId: 0,
    params: OperatorParams.fromPartial({})
  };
}
export const MsgSetOperatorParams = {
  typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams",
  encode(message: MsgSetOperatorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    if (message.params !== undefined) {
      OperatorParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorParams();
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
          message.params = OperatorParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetOperatorParams>): MsgSetOperatorParams {
    const message = createBaseMsgSetOperatorParams();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.params = object.params !== undefined && object.params !== null ? OperatorParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgSetOperatorParamsAmino): MsgSetOperatorParams {
    const message = createBaseMsgSetOperatorParams();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = OperatorParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgSetOperatorParams): MsgSetOperatorParamsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.params = message.params ? OperatorParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorParamsAminoMsg): MsgSetOperatorParams {
    return MsgSetOperatorParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetOperatorParams): MsgSetOperatorParamsAminoMsg {
    return {
      type: "milkyway/MsgSetOperatorParams",
      value: MsgSetOperatorParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetOperatorParamsProtoMsg): MsgSetOperatorParams {
    return MsgSetOperatorParams.decode(message.value);
  },
  toProto(message: MsgSetOperatorParams): Uint8Array {
    return MsgSetOperatorParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperatorParams): MsgSetOperatorParamsProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams",
      value: MsgSetOperatorParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetOperatorParamsResponse(): MsgSetOperatorParamsResponse {
  return {};
}
export const MsgSetOperatorParamsResponse = {
  typeUrl: "/milkyway.operators.v1.MsgSetOperatorParamsResponse",
  encode(_: MsgSetOperatorParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOperatorParamsResponse();
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
  fromPartial(_: Partial<MsgSetOperatorParamsResponse>): MsgSetOperatorParamsResponse {
    const message = createBaseMsgSetOperatorParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetOperatorParamsResponseAmino): MsgSetOperatorParamsResponse {
    const message = createBaseMsgSetOperatorParamsResponse();
    return message;
  },
  toAmino(_: MsgSetOperatorParamsResponse): MsgSetOperatorParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOperatorParamsResponseAminoMsg): MsgSetOperatorParamsResponse {
    return MsgSetOperatorParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOperatorParamsResponseProtoMsg): MsgSetOperatorParamsResponse {
    return MsgSetOperatorParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetOperatorParamsResponse): Uint8Array {
    return MsgSetOperatorParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOperatorParamsResponse): MsgSetOperatorParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgSetOperatorParamsResponse",
      value: MsgSetOperatorParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferOperatorOwnership(): MsgTransferOperatorOwnership {
  return {
    sender: "",
    operatorId: 0,
    newAdmin: ""
  };
}
export const MsgTransferOperatorOwnership = {
  typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership",
  encode(message: MsgTransferOperatorOwnership, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.operatorId !== 0) {
      writer.uint32(16).uint32(message.operatorId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferOperatorOwnership {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferOperatorOwnership();
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
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTransferOperatorOwnership>): MsgTransferOperatorOwnership {
    const message = createBaseMsgTransferOperatorOwnership();
    message.sender = object.sender ?? "";
    message.operatorId = object.operatorId ?? 0;
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgTransferOperatorOwnershipAmino): MsgTransferOperatorOwnership {
    const message = createBaseMsgTransferOperatorOwnership();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.operator_id !== undefined && object.operator_id !== null) {
      message.operatorId = object.operator_id;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.operator_id = message.operatorId === 0 ? undefined : message.operatorId;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgTransferOperatorOwnershipAminoMsg): MsgTransferOperatorOwnership {
    return MsgTransferOperatorOwnership.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipAminoMsg {
    return {
      type: "milkyway/MsgTransferOperatorOwnership",
      value: MsgTransferOperatorOwnership.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferOperatorOwnershipProtoMsg): MsgTransferOperatorOwnership {
    return MsgTransferOperatorOwnership.decode(message.value);
  },
  toProto(message: MsgTransferOperatorOwnership): Uint8Array {
    return MsgTransferOperatorOwnership.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership",
      value: MsgTransferOperatorOwnership.encode(message).finish()
    };
  }
};
function createBaseMsgTransferOperatorOwnershipResponse(): MsgTransferOperatorOwnershipResponse {
  return {};
}
export const MsgTransferOperatorOwnershipResponse = {
  typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse",
  encode(_: MsgTransferOperatorOwnershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferOperatorOwnershipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferOperatorOwnershipResponse();
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
  fromPartial(_: Partial<MsgTransferOperatorOwnershipResponse>): MsgTransferOperatorOwnershipResponse {
    const message = createBaseMsgTransferOperatorOwnershipResponse();
    return message;
  },
  fromAmino(_: MsgTransferOperatorOwnershipResponseAmino): MsgTransferOperatorOwnershipResponse {
    const message = createBaseMsgTransferOperatorOwnershipResponse();
    return message;
  },
  toAmino(_: MsgTransferOperatorOwnershipResponse): MsgTransferOperatorOwnershipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferOperatorOwnershipResponseAminoMsg): MsgTransferOperatorOwnershipResponse {
    return MsgTransferOperatorOwnershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferOperatorOwnershipResponseProtoMsg): MsgTransferOperatorOwnershipResponse {
    return MsgTransferOperatorOwnershipResponse.decode(message.value);
  },
  toProto(message: MsgTransferOperatorOwnershipResponse): Uint8Array {
    return MsgTransferOperatorOwnershipResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferOperatorOwnershipResponse): MsgTransferOperatorOwnershipResponseProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse",
      value: MsgTransferOperatorOwnershipResponse.encode(message).finish()
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
  typeUrl: "/milkyway.operators.v1.MsgUpdateParams",
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
      type: "milkyway/operators/MsgUpdateParams",
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
      typeUrl: "/milkyway.operators.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/milkyway.operators.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/milkyway.operators.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};