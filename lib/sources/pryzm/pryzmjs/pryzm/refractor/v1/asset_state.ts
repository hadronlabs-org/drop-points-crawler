import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface AssetState {
  assetId: string;
  totalPAmount: string;
  lastSeenExchangeRate: string;
}
export interface AssetStateProtoMsg {
  typeUrl: "/pryzm.refractor.v1.AssetState";
  value: Uint8Array;
}
export interface AssetStateAmino {
  asset_id?: string;
  total_p_amount?: string;
  last_seen_exchange_rate?: string;
}
export interface AssetStateAminoMsg {
  type: "/pryzm.refractor.v1.AssetState";
  value: AssetStateAmino;
}
export interface AssetStateSDKType {
  asset_id: string;
  total_p_amount: string;
  last_seen_exchange_rate: string;
}
function createBaseAssetState(): AssetState {
  return {
    assetId: "",
    totalPAmount: "",
    lastSeenExchangeRate: ""
  };
}
export const AssetState = {
  typeUrl: "/pryzm.refractor.v1.AssetState",
  is(o: any): o is AssetState {
    return o && (o.$typeUrl === AssetState.typeUrl || typeof o.assetId === "string" && typeof o.totalPAmount === "string" && typeof o.lastSeenExchangeRate === "string");
  },
  isSDK(o: any): o is AssetStateSDKType {
    return o && (o.$typeUrl === AssetState.typeUrl || typeof o.asset_id === "string" && typeof o.total_p_amount === "string" && typeof o.last_seen_exchange_rate === "string");
  },
  isAmino(o: any): o is AssetStateAmino {
    return o && (o.$typeUrl === AssetState.typeUrl || typeof o.asset_id === "string" && typeof o.total_p_amount === "string" && typeof o.last_seen_exchange_rate === "string");
  },
  encode(message: AssetState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.totalPAmount !== "") {
      writer.uint32(18).string(message.totalPAmount);
    }
    if (message.lastSeenExchangeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lastSeenExchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AssetState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.totalPAmount = reader.string();
          break;
        case 3:
          message.lastSeenExchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      totalPAmount: isSet(object.totalPAmount) ? String(object.totalPAmount) : "",
      lastSeenExchangeRate: isSet(object.lastSeenExchangeRate) ? String(object.lastSeenExchangeRate) : ""
    };
  },
  toJSON(message: AssetState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.totalPAmount !== undefined && (obj.totalPAmount = message.totalPAmount);
    message.lastSeenExchangeRate !== undefined && (obj.lastSeenExchangeRate = message.lastSeenExchangeRate);
    return obj;
  },
  fromPartial(object: Partial<AssetState>): AssetState {
    const message = createBaseAssetState();
    message.assetId = object.assetId ?? "";
    message.totalPAmount = object.totalPAmount ?? "";
    message.lastSeenExchangeRate = object.lastSeenExchangeRate ?? "";
    return message;
  },
  fromAmino(object: AssetStateAmino): AssetState {
    const message = createBaseAssetState();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.total_p_amount !== undefined && object.total_p_amount !== null) {
      message.totalPAmount = object.total_p_amount;
    }
    if (object.last_seen_exchange_rate !== undefined && object.last_seen_exchange_rate !== null) {
      message.lastSeenExchangeRate = object.last_seen_exchange_rate;
    }
    return message;
  },
  toAmino(message: AssetState, useInterfaces: boolean = true): AssetStateAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.total_p_amount = message.totalPAmount === "" ? undefined : message.totalPAmount;
    obj.last_seen_exchange_rate = padDecimal(message.lastSeenExchangeRate) === "" ? undefined : padDecimal(message.lastSeenExchangeRate);
    return obj;
  },
  fromAminoMsg(object: AssetStateAminoMsg): AssetState {
    return AssetState.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetStateProtoMsg, useInterfaces: boolean = true): AssetState {
    return AssetState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AssetState): Uint8Array {
    return AssetState.encode(message).finish();
  },
  toProtoMsg(message: AssetState): AssetStateProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.AssetState",
      value: AssetState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetState.typeUrl, AssetState);