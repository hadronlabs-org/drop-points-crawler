import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the operators module. */
export interface Params {
    /**
     * OperatorRegistrationFee represents the fee that an operator must pay in
     * order to register itself with the network.
     * The fee is drawn from the MsgRegisterOperator sender's account and
     * transferred to the community pool.
     */
    operatorRegistrationFee: Coin[];
    /**
     * DeactivationTime represents the amount of time that will pass between
     * the time that an operator signals its willingness to deactivate and the
     * time that it actually becomes inactive.
     */
    deactivationTime: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/milkyway.operators.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the operators module. */
export interface ParamsAmino {
    /**
     * OperatorRegistrationFee represents the fee that an operator must pay in
     * order to register itself with the network.
     * The fee is drawn from the MsgRegisterOperator sender's account and
     * transferred to the community pool.
     */
    operator_registration_fee?: CoinAmino[];
    /**
     * DeactivationTime represents the amount of time that will pass between
     * the time that an operator signals its willingness to deactivate and the
     * time that it actually becomes inactive.
     */
    deactivation_time?: string;
}
export interface ParamsAminoMsg {
    type: "/milkyway.operators.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the operators module. */
export interface ParamsSDKType {
    operator_registration_fee: CoinSDKType[];
    deactivation_time: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
