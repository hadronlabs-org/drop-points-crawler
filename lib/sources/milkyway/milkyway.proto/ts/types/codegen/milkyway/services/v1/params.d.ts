import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * ServiceRegistrationFee defines the fee to register a new service.
     * The fee is drawn from the MsgRegisterService sender's account,
     * and transferred to the community pool.
     */
    serviceRegistrationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/milkyway.services.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * ServiceRegistrationFee defines the fee to register a new service.
     * The fee is drawn from the MsgRegisterService sender's account,
     * and transferred to the community pool.
     */
    service_registration_fee?: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/milkyway.services.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    service_registration_fee: CoinSDKType[];
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
