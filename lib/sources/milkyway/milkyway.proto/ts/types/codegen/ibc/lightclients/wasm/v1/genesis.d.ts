import { BinaryReader, BinaryWriter } from "../../../../binary";
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisState {
    /** uploaded light client wasm contracts */
    contracts: Contract[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisStateAmino {
    /** uploaded light client wasm contracts */
    contracts?: ContractAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisStateSDKType {
    contracts: ContractSDKType[];
}
/** Contract stores contract code */
export interface Contract {
    /** contract byte code */
    codeBytes: Uint8Array;
}
export interface ContractProtoMsg {
    typeUrl: "/ibc.lightclients.wasm.v1.Contract";
    value: Uint8Array;
}
/** Contract stores contract code */
export interface ContractAmino {
    /** contract byte code */
    code_bytes?: string;
}
export interface ContractAminoMsg {
    type: "cosmos-sdk/Contract";
    value: ContractAmino;
}
/** Contract stores contract code */
export interface ContractSDKType {
    code_bytes: Uint8Array;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Contract: {
    typeUrl: string;
    encode(message: Contract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Contract;
    fromPartial(object: Partial<Contract>): Contract;
    fromAmino(object: ContractAmino): Contract;
    toAmino(message: Contract): ContractAmino;
    fromAminoMsg(object: ContractAminoMsg): Contract;
    toAminoMsg(message: Contract): ContractAminoMsg;
    fromProtoMsg(message: ContractProtoMsg): Contract;
    toProto(message: Contract): Uint8Array;
    toProtoMsg(message: Contract): ContractProtoMsg;
};
