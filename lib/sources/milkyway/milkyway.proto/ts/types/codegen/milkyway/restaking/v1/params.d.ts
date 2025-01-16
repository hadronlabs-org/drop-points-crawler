import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * UnbondingTime represents the time that will take for assets to be unbonded
     * after the user initiates an unbonding request. This will be applied to all
     * types of restaking: pool, operator and service restaking.
     */
    unbondingTime: bigint;
    /**
     * AllowedDenoms represents the list of denoms allowed for restaking
     * and that will be considered when computing rewards.
     */
    allowedDenoms: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/milkyway.restaking.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * UnbondingTime represents the time that will take for assets to be unbonded
     * after the user initiates an unbonding request. This will be applied to all
     * types of restaking: pool, operator and service restaking.
     */
    unbonding_time?: string;
    /**
     * AllowedDenoms represents the list of denoms allowed for restaking
     * and that will be considered when computing rewards.
     */
    allowed_denoms?: string[];
}
export interface ParamsAminoMsg {
    type: "/milkyway.restaking.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    unbonding_time: bigint;
    allowed_denoms: string[];
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
