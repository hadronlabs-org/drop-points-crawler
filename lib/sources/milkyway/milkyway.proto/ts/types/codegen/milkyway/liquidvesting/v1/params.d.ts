import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * This value represents the percentage that needs to be sent to the
     * insurance fund in order to restake a certain amount of locked tokens.
     * For example, if this value is 2%, a user must send 2 tokens to
     * the insurance fund to restake 100 locked tokens
     */
    insurancePercentage: string;
    /**
     * This value represents the list of users who are authorized to execute the
     * MsgBurnLockedRepresentation.
     */
    burners: string[];
    /**
     * This value represents the list of users who are authorized to execute the
     * MsgMintLockedRepresentation.
     */
    minters: string[];
    /**
     * TrustedDelegates represents the list of users who are allowed to deposit
     * on the insurance fund.
     */
    trustedDelegates: string[];
    /**
     * List of channels from which is allowed to receive deposits to the insurance
     * fund.
     */
    allowedChannels: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * This value represents the percentage that needs to be sent to the
     * insurance fund in order to restake a certain amount of locked tokens.
     * For example, if this value is 2%, a user must send 2 tokens to
     * the insurance fund to restake 100 locked tokens
     */
    insurance_percentage?: string;
    /**
     * This value represents the list of users who are authorized to execute the
     * MsgBurnLockedRepresentation.
     */
    burners?: string[];
    /**
     * This value represents the list of users who are authorized to execute the
     * MsgMintLockedRepresentation.
     */
    minters?: string[];
    /**
     * TrustedDelegates represents the list of users who are allowed to deposit
     * on the insurance fund.
     */
    trusted_delegates?: string[];
    /**
     * List of channels from which is allowed to receive deposits to the insurance
     * fund.
     */
    allowed_channels?: string[];
}
export interface ParamsAminoMsg {
    type: "/milkyway.liquidvesting.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    insurance_percentage: string;
    burners: string[];
    minters: string[];
    trusted_delegates: string[];
    allowed_channels: string[];
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
