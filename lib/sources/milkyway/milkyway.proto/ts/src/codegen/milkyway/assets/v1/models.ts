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
function createBaseAsset(): Asset {
  return {
    denom: "",
    ticker: "",
    exponent: 0
  };
}
export const Asset = {
  typeUrl: "/milkyway.assets.v1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.exponent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.ticker = object.ticker ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    return message;
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};