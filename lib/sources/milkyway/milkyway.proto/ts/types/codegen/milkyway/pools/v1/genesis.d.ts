import { Pool, PoolAmino, PoolSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the pools module's genesis state. */
export interface GenesisState {
    /** NextPoolID represents the id to be used when creating the next pool. */
    nextPoolId: number;
    /** Pools defines the list of pools. */
    pools: Pool[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/milkyway.pools.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the pools module's genesis state. */
export interface GenesisStateAmino {
    /** NextPoolID represents the id to be used when creating the next pool. */
    next_pool_id?: number;
    /** Pools defines the list of pools. */
    pools?: PoolAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/milkyway.pools.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the pools module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: number;
    pools: PoolSDKType[];
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
