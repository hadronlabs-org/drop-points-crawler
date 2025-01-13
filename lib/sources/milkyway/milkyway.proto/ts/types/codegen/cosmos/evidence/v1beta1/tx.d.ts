import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    /** submitter is the signer account address of evidence. */
    submitter: string;
    /** evidence defines the evidence of misbehavior. */
    evidence?: Any | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
    value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
    /** evidence defines the evidence of misbehavior. */ evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceAmino {
    /** submitter is the signer account address of evidence. */
    submitter?: string;
    /** evidence defines the evidence of misbehavior. */
    evidence?: AnyAmino;
}
export interface MsgSubmitEvidenceAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidence";
    value: MsgSubmitEvidenceAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence?: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
    value: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseAmino {
    /** hash defines the hash of the evidence. */
    hash?: string;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidenceResponse";
    value: MsgSubmitEvidenceResponseAmino;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    typeUrl: string;
    encode(message: MsgSubmitEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromPartial(object: Partial<MsgSubmitEvidence>): MsgSubmitEvidence;
    fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence;
    toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino;
    fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence;
    toAminoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence;
    toProto(message: MsgSubmitEvidence): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg;
};
export declare const MsgSubmitEvidenceResponse: {
    typeUrl: string;
    encode(message: MsgSubmitEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromPartial(object: Partial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
    fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse;
    toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino;
    fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse;
    toAminoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse;
    toProto(message: MsgSubmitEvidenceResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg;
};
export declare const Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_evidencev1beta1Evidence_FromAmino: (content: AnyAmino) => Any;
export declare const Cosmos_evidencev1beta1Evidence_ToAmino: (content: Any) => AnyAmino;
