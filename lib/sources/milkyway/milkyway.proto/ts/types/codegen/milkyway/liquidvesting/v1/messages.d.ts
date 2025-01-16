import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentation {
    /** User that want to trigger the tokens mint. */
    sender: string;
    /** User that will receive the minted tokens. */
    receiver: string;
    /** The amount of tokens that will be minted */
    amount: Coin[];
}
export interface MsgMintLockedRepresentationProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation";
    value: Uint8Array;
}
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentationAmino {
    /** User that want to trigger the tokens mint. */
    sender?: string;
    /** User that will receive the minted tokens. */
    receiver?: string;
    /** The amount of tokens that will be minted */
    amount?: CoinAmino[];
}
export interface MsgMintLockedRepresentationAminoMsg {
    type: "milkyway/MsgMintLockedRepresentation";
    value: MsgMintLockedRepresentationAmino;
}
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentationSDKType {
    sender: string;
    receiver: string;
    amount: CoinSDKType[];
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponse {
}
export interface MsgMintLockedRepresentationResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse";
    value: Uint8Array;
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponseAmino {
}
export interface MsgMintLockedRepresentationResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse";
    value: MsgMintLockedRepresentationResponseAmino;
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponseSDKType {
}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentation {
    /** User that want to trigger the tokens burn. */
    sender: string;
    /** User from which we want to burn the tokens. */
    user: string;
    /** The amount of tokens that will be burned from the user's balance. */
    amount: Coin[];
}
export interface MsgBurnLockedRepresentationProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation";
    value: Uint8Array;
}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentationAmino {
    /** User that want to trigger the tokens burn. */
    sender?: string;
    /** User from which we want to burn the tokens. */
    user?: string;
    /** The amount of tokens that will be burned from the user's balance. */
    amount?: CoinAmino[];
}
export interface MsgBurnLockedRepresentationAminoMsg {
    type: "milkyway/MsgBurnLockedRepresentation";
    value: MsgBurnLockedRepresentationAmino;
}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentationSDKType {
    sender: string;
    user: string;
    amount: CoinSDKType[];
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponse {
}
export interface MsgBurnLockedRepresentationResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse";
    value: Uint8Array;
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponseAmino {
}
export interface MsgBurnLockedRepresentationResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse";
    value: MsgBurnLockedRepresentationResponseAmino;
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponseSDKType {
}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFund {
    /** User that want to withdraw the tokens. */
    sender: string;
    /** The amount of tokens that will be withdrawn from the user's insurance fund. */
    amount: Coin[];
}
export interface MsgWithdrawInsuranceFundProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund";
    value: Uint8Array;
}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFundAmino {
    /** User that want to withdraw the tokens. */
    sender?: string;
    /** The amount of tokens that will be withdrawn from the user's insurance fund. */
    amount?: CoinAmino[];
}
export interface MsgWithdrawInsuranceFundAminoMsg {
    type: "milkyway/MsgWithdrawInsuranceFund";
    value: MsgWithdrawInsuranceFundAmino;
}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFundSDKType {
    sender: string;
    amount: CoinSDKType[];
}
export interface MsgWithdrawInsuranceFundResponse {
}
export interface MsgWithdrawInsuranceFundResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse";
    value: Uint8Array;
}
export interface MsgWithdrawInsuranceFundResponseAmino {
}
export interface MsgWithdrawInsuranceFundResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse";
    value: MsgWithdrawInsuranceFundResponseAmino;
}
export interface MsgWithdrawInsuranceFundResponseSDKType {
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
    typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams";
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
    type: "milkyway/liquidvesting/MsgUpdateParams";
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
    typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgMintLockedRepresentation: {
    typeUrl: string;
    encode(message: MsgMintLockedRepresentation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintLockedRepresentation;
    fromPartial(object: Partial<MsgMintLockedRepresentation>): MsgMintLockedRepresentation;
    fromAmino(object: MsgMintLockedRepresentationAmino): MsgMintLockedRepresentation;
    toAmino(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationAmino;
    fromAminoMsg(object: MsgMintLockedRepresentationAminoMsg): MsgMintLockedRepresentation;
    toAminoMsg(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationAminoMsg;
    fromProtoMsg(message: MsgMintLockedRepresentationProtoMsg): MsgMintLockedRepresentation;
    toProto(message: MsgMintLockedRepresentation): Uint8Array;
    toProtoMsg(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationProtoMsg;
};
export declare const MsgMintLockedRepresentationResponse: {
    typeUrl: string;
    encode(_: MsgMintLockedRepresentationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintLockedRepresentationResponse;
    fromPartial(_: Partial<MsgMintLockedRepresentationResponse>): MsgMintLockedRepresentationResponse;
    fromAmino(_: MsgMintLockedRepresentationResponseAmino): MsgMintLockedRepresentationResponse;
    toAmino(_: MsgMintLockedRepresentationResponse): MsgMintLockedRepresentationResponseAmino;
    fromAminoMsg(object: MsgMintLockedRepresentationResponseAminoMsg): MsgMintLockedRepresentationResponse;
    fromProtoMsg(message: MsgMintLockedRepresentationResponseProtoMsg): MsgMintLockedRepresentationResponse;
    toProto(message: MsgMintLockedRepresentationResponse): Uint8Array;
    toProtoMsg(message: MsgMintLockedRepresentationResponse): MsgMintLockedRepresentationResponseProtoMsg;
};
export declare const MsgBurnLockedRepresentation: {
    typeUrl: string;
    encode(message: MsgBurnLockedRepresentation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnLockedRepresentation;
    fromPartial(object: Partial<MsgBurnLockedRepresentation>): MsgBurnLockedRepresentation;
    fromAmino(object: MsgBurnLockedRepresentationAmino): MsgBurnLockedRepresentation;
    toAmino(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationAmino;
    fromAminoMsg(object: MsgBurnLockedRepresentationAminoMsg): MsgBurnLockedRepresentation;
    toAminoMsg(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationAminoMsg;
    fromProtoMsg(message: MsgBurnLockedRepresentationProtoMsg): MsgBurnLockedRepresentation;
    toProto(message: MsgBurnLockedRepresentation): Uint8Array;
    toProtoMsg(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationProtoMsg;
};
export declare const MsgBurnLockedRepresentationResponse: {
    typeUrl: string;
    encode(_: MsgBurnLockedRepresentationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnLockedRepresentationResponse;
    fromPartial(_: Partial<MsgBurnLockedRepresentationResponse>): MsgBurnLockedRepresentationResponse;
    fromAmino(_: MsgBurnLockedRepresentationResponseAmino): MsgBurnLockedRepresentationResponse;
    toAmino(_: MsgBurnLockedRepresentationResponse): MsgBurnLockedRepresentationResponseAmino;
    fromAminoMsg(object: MsgBurnLockedRepresentationResponseAminoMsg): MsgBurnLockedRepresentationResponse;
    fromProtoMsg(message: MsgBurnLockedRepresentationResponseProtoMsg): MsgBurnLockedRepresentationResponse;
    toProto(message: MsgBurnLockedRepresentationResponse): Uint8Array;
    toProtoMsg(message: MsgBurnLockedRepresentationResponse): MsgBurnLockedRepresentationResponseProtoMsg;
};
export declare const MsgWithdrawInsuranceFund: {
    typeUrl: string;
    encode(message: MsgWithdrawInsuranceFund, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawInsuranceFund;
    fromPartial(object: Partial<MsgWithdrawInsuranceFund>): MsgWithdrawInsuranceFund;
    fromAmino(object: MsgWithdrawInsuranceFundAmino): MsgWithdrawInsuranceFund;
    toAmino(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundAmino;
    fromAminoMsg(object: MsgWithdrawInsuranceFundAminoMsg): MsgWithdrawInsuranceFund;
    toAminoMsg(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundAminoMsg;
    fromProtoMsg(message: MsgWithdrawInsuranceFundProtoMsg): MsgWithdrawInsuranceFund;
    toProto(message: MsgWithdrawInsuranceFund): Uint8Array;
    toProtoMsg(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundProtoMsg;
};
export declare const MsgWithdrawInsuranceFundResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawInsuranceFundResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawInsuranceFundResponse;
    fromPartial(_: Partial<MsgWithdrawInsuranceFundResponse>): MsgWithdrawInsuranceFundResponse;
    fromAmino(_: MsgWithdrawInsuranceFundResponseAmino): MsgWithdrawInsuranceFundResponse;
    toAmino(_: MsgWithdrawInsuranceFundResponse): MsgWithdrawInsuranceFundResponseAmino;
    fromAminoMsg(object: MsgWithdrawInsuranceFundResponseAminoMsg): MsgWithdrawInsuranceFundResponse;
    fromProtoMsg(message: MsgWithdrawInsuranceFundResponseProtoMsg): MsgWithdrawInsuranceFundResponse;
    toProto(message: MsgWithdrawInsuranceFundResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawInsuranceFundResponse): MsgWithdrawInsuranceFundResponseProtoMsg;
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
