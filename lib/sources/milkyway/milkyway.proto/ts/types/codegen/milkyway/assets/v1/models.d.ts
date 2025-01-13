import { BinaryReader, BinaryWriter } from "../../../binary";
/** Asset represents an asset that can be registered on the chain. */
export interface Asset {
    /** Denom is the denomination of the asset. */
    denom: string;
    /** Ticker is the ticker of the asset. */
    ticker: string;
    /**
     * Exponent represents power of 10 exponent that one must
     * raise the denom to in order to equal the given ticker.
     * 1 ticker = 10^exponent denom
     */
    exponent: number;
}
export interface AssetProtoMsg {
    typeUrl: "/milkyway.assets.v1.Asset";
    value: Uint8Array;
}
/** Asset represents an asset that can be registered on the chain. */
export interface AssetAmino {
    /** Denom is the denomination of the asset. */
    denom?: string;
    /** Ticker is the ticker of the asset. */
    ticker?: string;
    /**
     * Exponent represents power of 10 exponent that one must
     * raise the denom to in order to equal the given ticker.
     * 1 ticker = 10^exponent denom
     */
    exponent?: number;
}
export interface AssetAminoMsg {
    type: "/milkyway.assets.v1.Asset";
    value: AssetAmino;
}
/** Asset represents an asset that can be registered on the chain. */
export interface AssetSDKType {
    denom: string;
    ticker: string;
    exponent: number;
}
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
