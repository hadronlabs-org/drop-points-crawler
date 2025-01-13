import { Asset, AssetAmino, AssetSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** Assets defines the registered assets. */
    assets: Asset[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/milkyway.assets.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** Assets defines the registered assets. */
    assets: AssetAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/milkyway.assets.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    assets: AssetSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
