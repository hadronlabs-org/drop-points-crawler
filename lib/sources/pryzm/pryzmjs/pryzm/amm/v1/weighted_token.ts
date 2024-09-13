import { WeightUpdateTiming, WeightUpdateTimingAmino, WeightUpdateTimingSDKType } from "./weight_update_timing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface WeightedPoolProperties {
  poolId: bigint;
  weightUpdateTiming: WeightUpdateTiming;
  tokenList: WeightedToken[];
}
export interface WeightedPoolPropertiesProtoMsg {
  typeUrl: "/pryzm.amm.v1.WeightedPoolProperties";
  value: Uint8Array;
}
export interface WeightedPoolPropertiesAmino {
  pool_id?: string;
  weight_update_timing?: WeightUpdateTimingAmino;
  token_list?: WeightedTokenAmino[];
}
export interface WeightedPoolPropertiesAminoMsg {
  type: "/pryzm.amm.v1.WeightedPoolProperties";
  value: WeightedPoolPropertiesAmino;
}
export interface WeightedPoolPropertiesSDKType {
  pool_id: bigint;
  weight_update_timing: WeightUpdateTimingSDKType;
  token_list: WeightedTokenSDKType[];
}
export interface WeightedToken {
  poolId: bigint;
  denom: string;
  normalizedStartWeight: string;
  normalizedEndWeight: string;
}
export interface WeightedTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.WeightedToken";
  value: Uint8Array;
}
export interface WeightedTokenAmino {
  pool_id?: string;
  denom?: string;
  normalized_start_weight?: string;
  normalized_end_weight?: string;
}
export interface WeightedTokenAminoMsg {
  type: "/pryzm.amm.v1.WeightedToken";
  value: WeightedTokenAmino;
}
export interface WeightedTokenSDKType {
  pool_id: bigint;
  denom: string;
  normalized_start_weight: string;
  normalized_end_weight: string;
}
function createBaseWeightedPoolProperties(): WeightedPoolProperties {
  return {
    poolId: BigInt(0),
    weightUpdateTiming: WeightUpdateTiming.fromPartial({}),
    tokenList: []
  };
}
export const WeightedPoolProperties = {
  typeUrl: "/pryzm.amm.v1.WeightedPoolProperties",
  is(o: any): o is WeightedPoolProperties {
    return o && (o.$typeUrl === WeightedPoolProperties.typeUrl || typeof o.poolId === "bigint" && WeightUpdateTiming.is(o.weightUpdateTiming) && Array.isArray(o.tokenList) && (!o.tokenList.length || WeightedToken.is(o.tokenList[0])));
  },
  isSDK(o: any): o is WeightedPoolPropertiesSDKType {
    return o && (o.$typeUrl === WeightedPoolProperties.typeUrl || typeof o.pool_id === "bigint" && WeightUpdateTiming.isSDK(o.weight_update_timing) && Array.isArray(o.token_list) && (!o.token_list.length || WeightedToken.isSDK(o.token_list[0])));
  },
  isAmino(o: any): o is WeightedPoolPropertiesAmino {
    return o && (o.$typeUrl === WeightedPoolProperties.typeUrl || typeof o.pool_id === "bigint" && WeightUpdateTiming.isAmino(o.weight_update_timing) && Array.isArray(o.token_list) && (!o.token_list.length || WeightedToken.isAmino(o.token_list[0])));
  },
  encode(message: WeightedPoolProperties, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.weightUpdateTiming !== undefined) {
      WeightUpdateTiming.encode(message.weightUpdateTiming, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tokenList) {
      WeightedToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): WeightedPoolProperties {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedPoolProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.weightUpdateTiming = WeightUpdateTiming.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.tokenList.push(WeightedToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedPoolProperties {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      weightUpdateTiming: isSet(object.weightUpdateTiming) ? WeightUpdateTiming.fromJSON(object.weightUpdateTiming) : undefined,
      tokenList: Array.isArray(object?.tokenList) ? object.tokenList.map((e: any) => WeightedToken.fromJSON(e)) : []
    };
  },
  toJSON(message: WeightedPoolProperties): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.weightUpdateTiming !== undefined && (obj.weightUpdateTiming = message.weightUpdateTiming ? WeightUpdateTiming.toJSON(message.weightUpdateTiming) : undefined);
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map(e => e ? WeightedToken.toJSON(e) : undefined);
    } else {
      obj.tokenList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<WeightedPoolProperties>): WeightedPoolProperties {
    const message = createBaseWeightedPoolProperties();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.weightUpdateTiming = object.weightUpdateTiming !== undefined && object.weightUpdateTiming !== null ? WeightUpdateTiming.fromPartial(object.weightUpdateTiming) : undefined;
    message.tokenList = object.tokenList?.map(e => WeightedToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: WeightedPoolPropertiesAmino): WeightedPoolProperties {
    const message = createBaseWeightedPoolProperties();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.weight_update_timing !== undefined && object.weight_update_timing !== null) {
      message.weightUpdateTiming = WeightUpdateTiming.fromAmino(object.weight_update_timing);
    }
    message.tokenList = object.token_list?.map(e => WeightedToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: WeightedPoolProperties, useInterfaces: boolean = true): WeightedPoolPropertiesAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.weight_update_timing = message.weightUpdateTiming ? WeightUpdateTiming.toAmino(message.weightUpdateTiming, useInterfaces) : undefined;
    if (message.tokenList) {
      obj.token_list = message.tokenList.map(e => e ? WeightedToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.token_list = message.tokenList;
    }
    return obj;
  },
  fromAminoMsg(object: WeightedPoolPropertiesAminoMsg): WeightedPoolProperties {
    return WeightedPoolProperties.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedPoolPropertiesProtoMsg, useInterfaces: boolean = true): WeightedPoolProperties {
    return WeightedPoolProperties.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: WeightedPoolProperties): Uint8Array {
    return WeightedPoolProperties.encode(message).finish();
  },
  toProtoMsg(message: WeightedPoolProperties): WeightedPoolPropertiesProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.WeightedPoolProperties",
      value: WeightedPoolProperties.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedPoolProperties.typeUrl, WeightedPoolProperties);
function createBaseWeightedToken(): WeightedToken {
  return {
    poolId: BigInt(0),
    denom: "",
    normalizedStartWeight: "",
    normalizedEndWeight: ""
  };
}
export const WeightedToken = {
  typeUrl: "/pryzm.amm.v1.WeightedToken",
  is(o: any): o is WeightedToken {
    return o && (o.$typeUrl === WeightedToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string" && typeof o.normalizedStartWeight === "string" && typeof o.normalizedEndWeight === "string");
  },
  isSDK(o: any): o is WeightedTokenSDKType {
    return o && (o.$typeUrl === WeightedToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.normalized_start_weight === "string" && typeof o.normalized_end_weight === "string");
  },
  isAmino(o: any): o is WeightedTokenAmino {
    return o && (o.$typeUrl === WeightedToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.normalized_start_weight === "string" && typeof o.normalized_end_weight === "string");
  },
  encode(message: WeightedToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.normalizedStartWeight !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.normalizedStartWeight, 18).atomics);
    }
    if (message.normalizedEndWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.normalizedEndWeight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): WeightedToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.normalizedStartWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.normalizedEndWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      normalizedStartWeight: isSet(object.normalizedStartWeight) ? String(object.normalizedStartWeight) : "",
      normalizedEndWeight: isSet(object.normalizedEndWeight) ? String(object.normalizedEndWeight) : ""
    };
  },
  toJSON(message: WeightedToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.normalizedStartWeight !== undefined && (obj.normalizedStartWeight = message.normalizedStartWeight);
    message.normalizedEndWeight !== undefined && (obj.normalizedEndWeight = message.normalizedEndWeight);
    return obj;
  },
  fromPartial(object: Partial<WeightedToken>): WeightedToken {
    const message = createBaseWeightedToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.normalizedStartWeight = object.normalizedStartWeight ?? "";
    message.normalizedEndWeight = object.normalizedEndWeight ?? "";
    return message;
  },
  fromAmino(object: WeightedTokenAmino): WeightedToken {
    const message = createBaseWeightedToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.normalized_start_weight !== undefined && object.normalized_start_weight !== null) {
      message.normalizedStartWeight = object.normalized_start_weight;
    }
    if (object.normalized_end_weight !== undefined && object.normalized_end_weight !== null) {
      message.normalizedEndWeight = object.normalized_end_weight;
    }
    return message;
  },
  toAmino(message: WeightedToken, useInterfaces: boolean = true): WeightedTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.normalized_start_weight = padDecimal(message.normalizedStartWeight) === "" ? undefined : padDecimal(message.normalizedStartWeight);
    obj.normalized_end_weight = padDecimal(message.normalizedEndWeight) === "" ? undefined : padDecimal(message.normalizedEndWeight);
    return obj;
  },
  fromAminoMsg(object: WeightedTokenAminoMsg): WeightedToken {
    return WeightedToken.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedTokenProtoMsg, useInterfaces: boolean = true): WeightedToken {
    return WeightedToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: WeightedToken): Uint8Array {
    return WeightedToken.encode(message).finish();
  },
  toProtoMsg(message: WeightedToken): WeightedTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.WeightedToken",
      value: WeightedToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedToken.typeUrl, WeightedToken);