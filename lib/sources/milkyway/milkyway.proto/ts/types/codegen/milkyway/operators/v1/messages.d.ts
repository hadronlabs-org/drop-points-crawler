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
export interface MsgUpdateOperatorResponse {
}
export interface MsgUpdateOperatorResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgUpdateOperatorResponse";
    value: Uint8Array;
}
/** MsgUpdateOperatorResponse is the return value of MsgUpdateOperator. */
export interface MsgUpdateOperatorResponseAmino {
}
export interface MsgUpdateOperatorResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgUpdateOperatorResponse";
    value: MsgUpdateOperatorResponseAmino;
}
/** MsgUpdateOperatorResponse is the return value of MsgUpdateOperator. */
export interface MsgUpdateOperatorResponseSDKType {
}
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
export interface MsgDeactivateOperatorResponse {
}
export interface MsgDeactivateOperatorResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgDeactivateOperatorResponse";
    value: Uint8Array;
}
/** MsgDeactivateOperatorResponse is the return value of MsgDeactivateOperator. */
export interface MsgDeactivateOperatorResponseAmino {
}
export interface MsgDeactivateOperatorResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgDeactivateOperatorResponse";
    value: MsgDeactivateOperatorResponseAmino;
}
/** MsgDeactivateOperatorResponse is the return value of MsgDeactivateOperator. */
export interface MsgDeactivateOperatorResponseSDKType {
}
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
export interface MsgReactivateOperatorResponse {
}
export interface MsgReactivateOperatorResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgReactivateOperatorResponse";
    value: Uint8Array;
}
/** MsgReactivateOperatorResponse is the return value of MsgReactivateOperator. */
export interface MsgReactivateOperatorResponseAmino {
}
export interface MsgReactivateOperatorResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgReactivateOperatorResponse";
    value: MsgReactivateOperatorResponseAmino;
}
/** MsgReactivateOperatorResponse is the return value of MsgReactivateOperator. */
export interface MsgReactivateOperatorResponseSDKType {
}
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
export interface MsgDeleteOperatorResponse {
}
export interface MsgDeleteOperatorResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgDeleteOperatorResponse";
    value: Uint8Array;
}
/** MsgDeleteOperatorResponse is the return value of MsgDeleteOperator. */
export interface MsgDeleteOperatorResponseAmino {
}
export interface MsgDeleteOperatorResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgDeleteOperatorResponse";
    value: MsgDeleteOperatorResponseAmino;
}
/** MsgDeleteOperatorResponse is the return value of MsgDeleteOperator. */
export interface MsgDeleteOperatorResponseSDKType {
}
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
export interface MsgSetOperatorParamsResponse {
}
export interface MsgSetOperatorParamsResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgSetOperatorParamsResponse";
    value: Uint8Array;
}
/**
 * MsgSetOperatorParamsResponse is the return value of
 * MsgSetOperatorParams.
 */
export interface MsgSetOperatorParamsResponseAmino {
}
export interface MsgSetOperatorParamsResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgSetOperatorParamsResponse";
    value: MsgSetOperatorParamsResponseAmino;
}
/**
 * MsgSetOperatorParamsResponse is the return value of
 * MsgSetOperatorParams.
 */
export interface MsgSetOperatorParamsResponseSDKType {
}
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
export interface MsgTransferOperatorOwnershipResponse {
}
export interface MsgTransferOperatorOwnershipResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse";
    value: Uint8Array;
}
/**
 * MsgTransferOperatorOwnershipResponse is the return value of
 * MsgTransferOperatorOwnership.
 */
export interface MsgTransferOperatorOwnershipResponseAmino {
}
export interface MsgTransferOperatorOwnershipResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgTransferOperatorOwnershipResponse";
    value: MsgTransferOperatorOwnershipResponseAmino;
}
/**
 * MsgTransferOperatorOwnershipResponse is the return value of
 * MsgTransferOperatorOwnership.
 */
export interface MsgTransferOperatorOwnershipResponseSDKType {
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
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/milkyway.operators.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/milkyway.operators.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterOperator: {
    typeUrl: string;
    encode(message: MsgRegisterOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperator;
    fromPartial(object: Partial<MsgRegisterOperator>): MsgRegisterOperator;
    fromAmino(object: MsgRegisterOperatorAmino): MsgRegisterOperator;
    toAmino(message: MsgRegisterOperator): MsgRegisterOperatorAmino;
    fromAminoMsg(object: MsgRegisterOperatorAminoMsg): MsgRegisterOperator;
    toAminoMsg(message: MsgRegisterOperator): MsgRegisterOperatorAminoMsg;
    fromProtoMsg(message: MsgRegisterOperatorProtoMsg): MsgRegisterOperator;
    toProto(message: MsgRegisterOperator): Uint8Array;
    toProtoMsg(message: MsgRegisterOperator): MsgRegisterOperatorProtoMsg;
};
export declare const MsgRegisterOperatorResponse: {
    typeUrl: string;
    encode(message: MsgRegisterOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterOperatorResponse;
    fromPartial(object: Partial<MsgRegisterOperatorResponse>): MsgRegisterOperatorResponse;
    fromAmino(object: MsgRegisterOperatorResponseAmino): MsgRegisterOperatorResponse;
    toAmino(message: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseAmino;
    fromAminoMsg(object: MsgRegisterOperatorResponseAminoMsg): MsgRegisterOperatorResponse;
    fromProtoMsg(message: MsgRegisterOperatorResponseProtoMsg): MsgRegisterOperatorResponse;
    toProto(message: MsgRegisterOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterOperatorResponse): MsgRegisterOperatorResponseProtoMsg;
};
export declare const MsgUpdateOperator: {
    typeUrl: string;
    encode(message: MsgUpdateOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperator;
    fromPartial(object: Partial<MsgUpdateOperator>): MsgUpdateOperator;
    fromAmino(object: MsgUpdateOperatorAmino): MsgUpdateOperator;
    toAmino(message: MsgUpdateOperator): MsgUpdateOperatorAmino;
    fromAminoMsg(object: MsgUpdateOperatorAminoMsg): MsgUpdateOperator;
    toAminoMsg(message: MsgUpdateOperator): MsgUpdateOperatorAminoMsg;
    fromProtoMsg(message: MsgUpdateOperatorProtoMsg): MsgUpdateOperator;
    toProto(message: MsgUpdateOperator): Uint8Array;
    toProtoMsg(message: MsgUpdateOperator): MsgUpdateOperatorProtoMsg;
};
export declare const MsgUpdateOperatorResponse: {
    typeUrl: string;
    encode(_: MsgUpdateOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateOperatorResponse;
    fromPartial(_: Partial<MsgUpdateOperatorResponse>): MsgUpdateOperatorResponse;
    fromAmino(_: MsgUpdateOperatorResponseAmino): MsgUpdateOperatorResponse;
    toAmino(_: MsgUpdateOperatorResponse): MsgUpdateOperatorResponseAmino;
    fromAminoMsg(object: MsgUpdateOperatorResponseAminoMsg): MsgUpdateOperatorResponse;
    fromProtoMsg(message: MsgUpdateOperatorResponseProtoMsg): MsgUpdateOperatorResponse;
    toProto(message: MsgUpdateOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateOperatorResponse): MsgUpdateOperatorResponseProtoMsg;
};
export declare const MsgDeactivateOperator: {
    typeUrl: string;
    encode(message: MsgDeactivateOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateOperator;
    fromPartial(object: Partial<MsgDeactivateOperator>): MsgDeactivateOperator;
    fromAmino(object: MsgDeactivateOperatorAmino): MsgDeactivateOperator;
    toAmino(message: MsgDeactivateOperator): MsgDeactivateOperatorAmino;
    fromAminoMsg(object: MsgDeactivateOperatorAminoMsg): MsgDeactivateOperator;
    toAminoMsg(message: MsgDeactivateOperator): MsgDeactivateOperatorAminoMsg;
    fromProtoMsg(message: MsgDeactivateOperatorProtoMsg): MsgDeactivateOperator;
    toProto(message: MsgDeactivateOperator): Uint8Array;
    toProtoMsg(message: MsgDeactivateOperator): MsgDeactivateOperatorProtoMsg;
};
export declare const MsgDeactivateOperatorResponse: {
    typeUrl: string;
    encode(_: MsgDeactivateOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateOperatorResponse;
    fromPartial(_: Partial<MsgDeactivateOperatorResponse>): MsgDeactivateOperatorResponse;
    fromAmino(_: MsgDeactivateOperatorResponseAmino): MsgDeactivateOperatorResponse;
    toAmino(_: MsgDeactivateOperatorResponse): MsgDeactivateOperatorResponseAmino;
    fromAminoMsg(object: MsgDeactivateOperatorResponseAminoMsg): MsgDeactivateOperatorResponse;
    fromProtoMsg(message: MsgDeactivateOperatorResponseProtoMsg): MsgDeactivateOperatorResponse;
    toProto(message: MsgDeactivateOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgDeactivateOperatorResponse): MsgDeactivateOperatorResponseProtoMsg;
};
export declare const MsgReactivateOperator: {
    typeUrl: string;
    encode(message: MsgReactivateOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgReactivateOperator;
    fromPartial(object: Partial<MsgReactivateOperator>): MsgReactivateOperator;
    fromAmino(object: MsgReactivateOperatorAmino): MsgReactivateOperator;
    toAmino(message: MsgReactivateOperator): MsgReactivateOperatorAmino;
    fromAminoMsg(object: MsgReactivateOperatorAminoMsg): MsgReactivateOperator;
    toAminoMsg(message: MsgReactivateOperator): MsgReactivateOperatorAminoMsg;
    fromProtoMsg(message: MsgReactivateOperatorProtoMsg): MsgReactivateOperator;
    toProto(message: MsgReactivateOperator): Uint8Array;
    toProtoMsg(message: MsgReactivateOperator): MsgReactivateOperatorProtoMsg;
};
export declare const MsgReactivateOperatorResponse: {
    typeUrl: string;
    encode(_: MsgReactivateOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgReactivateOperatorResponse;
    fromPartial(_: Partial<MsgReactivateOperatorResponse>): MsgReactivateOperatorResponse;
    fromAmino(_: MsgReactivateOperatorResponseAmino): MsgReactivateOperatorResponse;
    toAmino(_: MsgReactivateOperatorResponse): MsgReactivateOperatorResponseAmino;
    fromAminoMsg(object: MsgReactivateOperatorResponseAminoMsg): MsgReactivateOperatorResponse;
    fromProtoMsg(message: MsgReactivateOperatorResponseProtoMsg): MsgReactivateOperatorResponse;
    toProto(message: MsgReactivateOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgReactivateOperatorResponse): MsgReactivateOperatorResponseProtoMsg;
};
export declare const MsgDeleteOperator: {
    typeUrl: string;
    encode(message: MsgDeleteOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOperator;
    fromPartial(object: Partial<MsgDeleteOperator>): MsgDeleteOperator;
    fromAmino(object: MsgDeleteOperatorAmino): MsgDeleteOperator;
    toAmino(message: MsgDeleteOperator): MsgDeleteOperatorAmino;
    fromAminoMsg(object: MsgDeleteOperatorAminoMsg): MsgDeleteOperator;
    toAminoMsg(message: MsgDeleteOperator): MsgDeleteOperatorAminoMsg;
    fromProtoMsg(message: MsgDeleteOperatorProtoMsg): MsgDeleteOperator;
    toProto(message: MsgDeleteOperator): Uint8Array;
    toProtoMsg(message: MsgDeleteOperator): MsgDeleteOperatorProtoMsg;
};
export declare const MsgDeleteOperatorResponse: {
    typeUrl: string;
    encode(_: MsgDeleteOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteOperatorResponse;
    fromPartial(_: Partial<MsgDeleteOperatorResponse>): MsgDeleteOperatorResponse;
    fromAmino(_: MsgDeleteOperatorResponseAmino): MsgDeleteOperatorResponse;
    toAmino(_: MsgDeleteOperatorResponse): MsgDeleteOperatorResponseAmino;
    fromAminoMsg(object: MsgDeleteOperatorResponseAminoMsg): MsgDeleteOperatorResponse;
    fromProtoMsg(message: MsgDeleteOperatorResponseProtoMsg): MsgDeleteOperatorResponse;
    toProto(message: MsgDeleteOperatorResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteOperatorResponse): MsgDeleteOperatorResponseProtoMsg;
};
export declare const MsgSetOperatorParams: {
    typeUrl: string;
    encode(message: MsgSetOperatorParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorParams;
    fromPartial(object: Partial<MsgSetOperatorParams>): MsgSetOperatorParams;
    fromAmino(object: MsgSetOperatorParamsAmino): MsgSetOperatorParams;
    toAmino(message: MsgSetOperatorParams): MsgSetOperatorParamsAmino;
    fromAminoMsg(object: MsgSetOperatorParamsAminoMsg): MsgSetOperatorParams;
    toAminoMsg(message: MsgSetOperatorParams): MsgSetOperatorParamsAminoMsg;
    fromProtoMsg(message: MsgSetOperatorParamsProtoMsg): MsgSetOperatorParams;
    toProto(message: MsgSetOperatorParams): Uint8Array;
    toProtoMsg(message: MsgSetOperatorParams): MsgSetOperatorParamsProtoMsg;
};
export declare const MsgSetOperatorParamsResponse: {
    typeUrl: string;
    encode(_: MsgSetOperatorParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetOperatorParamsResponse;
    fromPartial(_: Partial<MsgSetOperatorParamsResponse>): MsgSetOperatorParamsResponse;
    fromAmino(_: MsgSetOperatorParamsResponseAmino): MsgSetOperatorParamsResponse;
    toAmino(_: MsgSetOperatorParamsResponse): MsgSetOperatorParamsResponseAmino;
    fromAminoMsg(object: MsgSetOperatorParamsResponseAminoMsg): MsgSetOperatorParamsResponse;
    fromProtoMsg(message: MsgSetOperatorParamsResponseProtoMsg): MsgSetOperatorParamsResponse;
    toProto(message: MsgSetOperatorParamsResponse): Uint8Array;
    toProtoMsg(message: MsgSetOperatorParamsResponse): MsgSetOperatorParamsResponseProtoMsg;
};
export declare const MsgTransferOperatorOwnership: {
    typeUrl: string;
    encode(message: MsgTransferOperatorOwnership, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferOperatorOwnership;
    fromPartial(object: Partial<MsgTransferOperatorOwnership>): MsgTransferOperatorOwnership;
    fromAmino(object: MsgTransferOperatorOwnershipAmino): MsgTransferOperatorOwnership;
    toAmino(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipAmino;
    fromAminoMsg(object: MsgTransferOperatorOwnershipAminoMsg): MsgTransferOperatorOwnership;
    toAminoMsg(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipAminoMsg;
    fromProtoMsg(message: MsgTransferOperatorOwnershipProtoMsg): MsgTransferOperatorOwnership;
    toProto(message: MsgTransferOperatorOwnership): Uint8Array;
    toProtoMsg(message: MsgTransferOperatorOwnership): MsgTransferOperatorOwnershipProtoMsg;
};
export declare const MsgTransferOperatorOwnershipResponse: {
    typeUrl: string;
    encode(_: MsgTransferOperatorOwnershipResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferOperatorOwnershipResponse;
    fromPartial(_: Partial<MsgTransferOperatorOwnershipResponse>): MsgTransferOperatorOwnershipResponse;
    fromAmino(_: MsgTransferOperatorOwnershipResponseAmino): MsgTransferOperatorOwnershipResponse;
    toAmino(_: MsgTransferOperatorOwnershipResponse): MsgTransferOperatorOwnershipResponseAmino;
    fromAminoMsg(object: MsgTransferOperatorOwnershipResponseAminoMsg): MsgTransferOperatorOwnershipResponse;
    fromProtoMsg(message: MsgTransferOperatorOwnershipResponseProtoMsg): MsgTransferOperatorOwnershipResponse;
    toProto(message: MsgTransferOperatorOwnershipResponse): Uint8Array;
    toProtoMsg(message: MsgTransferOperatorOwnershipResponse): MsgTransferOperatorOwnershipResponseProtoMsg;
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
