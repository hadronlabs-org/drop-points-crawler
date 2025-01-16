import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanAmino, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    clientState?: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensusState?: Any;
    /** signer address */
    signer: string;
}
export interface MsgCreateClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient";
    value: Uint8Array;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
    /** light client state */
    client_state?: AnyAmino;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensus_state?: AnyAmino;
    /** signer address */
    signer?: string;
}
export interface MsgCreateClientAminoMsg {
    type: "cosmos-sdk/MsgCreateClient";
    value: MsgCreateClientAmino;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
    client_state?: AnySDKType;
    consensus_state?: AnySDKType;
    signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
}
export interface MsgCreateClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse";
    value: Uint8Array;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {
}
export interface MsgCreateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClientResponse";
    value: MsgCreateClientResponseAmino;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    clientId: string;
    /** client message to update the light client */
    clientMessage?: Any;
    /** signer address */
    signer: string;
}
export interface MsgUpdateClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient";
    value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClientAmino {
    /** client unique identifier */
    client_id?: string;
    /** client message to update the light client */
    client_message?: AnyAmino;
    /** signer address */
    signer?: string;
}
export interface MsgUpdateClientAminoMsg {
    type: "cosmos-sdk/MsgUpdateClient";
    value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClientSDKType {
    client_id: string;
    client_message?: AnySDKType;
    signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}
export interface MsgUpdateClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse";
    value: Uint8Array;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {
}
export interface MsgUpdateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateClientResponse";
    value: MsgUpdateClientResponseAmino;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    clientId: string;
    /** upgraded client state */
    clientState?: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensusState?: Any;
    /** proof that old chain committed to new client */
    proofUpgradeClient: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proofUpgradeConsensusState: Uint8Array;
    /** signer address */
    signer: string;
}
export interface MsgUpgradeClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient";
    value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
    /** client unique identifier */
    client_id?: string;
    /** upgraded client state */
    client_state?: AnyAmino;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensus_state?: AnyAmino;
    /** proof that old chain committed to new client */
    proof_upgrade_client?: string;
    /** proof that old chain committed to new consensus state */
    proof_upgrade_consensus_state?: string;
    /** signer address */
    signer?: string;
}
export interface MsgUpgradeClientAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClient";
    value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
    client_id: string;
    client_state?: AnySDKType;
    consensus_state?: AnySDKType;
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
}
export interface MsgUpgradeClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse";
    value: Uint8Array;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {
}
export interface MsgUpgradeClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClientResponse";
    value: MsgUpgradeClientResponseAmino;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    clientId: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: Any;
    /** signer address */
    signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviourAmino {
    /** client unique identifier */
    client_id?: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: AnyAmino;
    /** signer address */
    signer?: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviour";
    value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviourSDKType {
    client_id: string;
    misbehaviour?: AnySDKType;
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {
}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
    value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {
}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClient {
    /** the client identifier for the client to be updated if the proposal passes */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client which will replace the subject
     * client
     */
    substituteClientId: string;
    /** signer address */
    signer: string;
}
export interface MsgRecoverClientProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClient";
    value: Uint8Array;
}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClientAmino {
    /** the client identifier for the client to be updated if the proposal passes */
    subject_client_id?: string;
    /**
     * the substitute client identifier for the client which will replace the subject
     * client
     */
    substitute_client_id?: string;
    /** signer address */
    signer?: string;
}
export interface MsgRecoverClientAminoMsg {
    type: "cosmos-sdk/MsgRecoverClient";
    value: MsgRecoverClientAmino;
}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClientSDKType {
    subject_client_id: string;
    substitute_client_id: string;
    signer: string;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponse {
}
export interface MsgRecoverClientResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse";
    value: Uint8Array;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponseAmino {
}
export interface MsgRecoverClientResponseAminoMsg {
    type: "cosmos-sdk/MsgRecoverClientResponse";
    value: MsgRecoverClientResponseAmino;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponseSDKType {
}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgrade {
    plan: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
     * deprecated in the Cosmos SDK to allow for this logic to exist solely in
     * the 02-client module.
     */
    upgradedClientState?: Any;
    /** signer address */
    signer: string;
}
export interface MsgIBCSoftwareUpgradeProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade";
    value: Uint8Array;
}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgradeAmino {
    plan?: PlanAmino;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
     * deprecated in the Cosmos SDK to allow for this logic to exist solely in
     * the 02-client module.
     */
    upgraded_client_state?: AnyAmino;
    /** signer address */
    signer?: string;
}
export interface MsgIBCSoftwareUpgradeAminoMsg {
    type: "cosmos-sdk/MsgIBCSoftwareUpgrade";
    value: MsgIBCSoftwareUpgradeAmino;
}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgradeSDKType {
    plan: PlanSDKType;
    upgraded_client_state?: AnySDKType;
    signer: string;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponse {
}
export interface MsgIBCSoftwareUpgradeResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse";
    value: Uint8Array;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponseAmino {
}
export interface MsgIBCSoftwareUpgradeResponseAminoMsg {
    type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse";
    value: MsgIBCSoftwareUpgradeResponseAmino;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponseSDKType {
}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the client parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParamsAmino {
    /** signer address */
    signer?: string;
    /**
     * params defines the client parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParamsSDKType {
    signer: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateClient: {
    typeUrl: string;
    encode(message: MsgCreateClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient;
    fromPartial(object: Partial<MsgCreateClient>): MsgCreateClient;
    fromAmino(object: MsgCreateClientAmino): MsgCreateClient;
    toAmino(message: MsgCreateClient): MsgCreateClientAmino;
    fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient;
    toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg;
    fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient;
    toProto(message: MsgCreateClient): Uint8Array;
    toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg;
};
export declare const MsgCreateClientResponse: {
    typeUrl: string;
    encode(_: MsgCreateClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse;
    fromPartial(_: Partial<MsgCreateClientResponse>): MsgCreateClientResponse;
    fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse;
    toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino;
    fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse;
    toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg;
    fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse;
    toProto(message: MsgCreateClientResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg;
};
export declare const MsgUpdateClient: {
    typeUrl: string;
    encode(message: MsgUpdateClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient;
    fromPartial(object: Partial<MsgUpdateClient>): MsgUpdateClient;
    fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient;
    toAmino(message: MsgUpdateClient): MsgUpdateClientAmino;
    fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient;
    toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg;
    fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient;
    toProto(message: MsgUpdateClient): Uint8Array;
    toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg;
};
export declare const MsgUpdateClientResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse;
    fromPartial(_: Partial<MsgUpdateClientResponse>): MsgUpdateClientResponse;
    fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse;
    toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino;
    fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse;
    toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse;
    toProto(message: MsgUpdateClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg;
};
export declare const MsgUpgradeClient: {
    typeUrl: string;
    encode(message: MsgUpgradeClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient;
    fromPartial(object: Partial<MsgUpgradeClient>): MsgUpgradeClient;
    fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient;
    toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino;
    fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient;
    toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient;
    toProto(message: MsgUpgradeClient): Uint8Array;
    toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg;
};
export declare const MsgUpgradeClientResponse: {
    typeUrl: string;
    encode(_: MsgUpgradeClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse;
    fromPartial(_: Partial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse;
    fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse;
    toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino;
    fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse;
    toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse;
    toProto(message: MsgUpgradeClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg;
};
export declare const MsgSubmitMisbehaviour: {
    typeUrl: string;
    encode(message: MsgSubmitMisbehaviour, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour;
    fromPartial(object: Partial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour;
    fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour;
    toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour;
    toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour;
    toProto(message: MsgSubmitMisbehaviour): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg;
};
export declare const MsgSubmitMisbehaviourResponse: {
    typeUrl: string;
    encode(_: MsgSubmitMisbehaviourResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse;
    fromPartial(_: Partial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse;
    fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse;
    toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse;
    toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse;
    toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg;
};
export declare const MsgRecoverClient: {
    typeUrl: string;
    encode(message: MsgRecoverClient, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClient;
    fromPartial(object: Partial<MsgRecoverClient>): MsgRecoverClient;
    fromAmino(object: MsgRecoverClientAmino): MsgRecoverClient;
    toAmino(message: MsgRecoverClient): MsgRecoverClientAmino;
    fromAminoMsg(object: MsgRecoverClientAminoMsg): MsgRecoverClient;
    toAminoMsg(message: MsgRecoverClient): MsgRecoverClientAminoMsg;
    fromProtoMsg(message: MsgRecoverClientProtoMsg): MsgRecoverClient;
    toProto(message: MsgRecoverClient): Uint8Array;
    toProtoMsg(message: MsgRecoverClient): MsgRecoverClientProtoMsg;
};
export declare const MsgRecoverClientResponse: {
    typeUrl: string;
    encode(_: MsgRecoverClientResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClientResponse;
    fromPartial(_: Partial<MsgRecoverClientResponse>): MsgRecoverClientResponse;
    fromAmino(_: MsgRecoverClientResponseAmino): MsgRecoverClientResponse;
    toAmino(_: MsgRecoverClientResponse): MsgRecoverClientResponseAmino;
    fromAminoMsg(object: MsgRecoverClientResponseAminoMsg): MsgRecoverClientResponse;
    toAminoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseAminoMsg;
    fromProtoMsg(message: MsgRecoverClientResponseProtoMsg): MsgRecoverClientResponse;
    toProto(message: MsgRecoverClientResponse): Uint8Array;
    toProtoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseProtoMsg;
};
export declare const MsgIBCSoftwareUpgrade: {
    typeUrl: string;
    encode(message: MsgIBCSoftwareUpgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgrade;
    fromPartial(object: Partial<MsgIBCSoftwareUpgrade>): MsgIBCSoftwareUpgrade;
    fromAmino(object: MsgIBCSoftwareUpgradeAmino): MsgIBCSoftwareUpgrade;
    toAmino(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAmino;
    fromAminoMsg(object: MsgIBCSoftwareUpgradeAminoMsg): MsgIBCSoftwareUpgrade;
    toAminoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAminoMsg;
    fromProtoMsg(message: MsgIBCSoftwareUpgradeProtoMsg): MsgIBCSoftwareUpgrade;
    toProto(message: MsgIBCSoftwareUpgrade): Uint8Array;
    toProtoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeProtoMsg;
};
export declare const MsgIBCSoftwareUpgradeResponse: {
    typeUrl: string;
    encode(_: MsgIBCSoftwareUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgradeResponse;
    fromPartial(_: Partial<MsgIBCSoftwareUpgradeResponse>): MsgIBCSoftwareUpgradeResponse;
    fromAmino(_: MsgIBCSoftwareUpgradeResponseAmino): MsgIBCSoftwareUpgradeResponse;
    toAmino(_: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAmino;
    fromAminoMsg(object: MsgIBCSoftwareUpgradeResponseAminoMsg): MsgIBCSoftwareUpgradeResponse;
    toAminoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAminoMsg;
    fromProtoMsg(message: MsgIBCSoftwareUpgradeResponseProtoMsg): MsgIBCSoftwareUpgradeResponse;
    toProto(message: MsgIBCSoftwareUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseProtoMsg;
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
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
