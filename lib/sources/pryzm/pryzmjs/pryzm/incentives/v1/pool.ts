import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface PoolRewardToken {
  denom: string;
  amount: string;
  globalIndex: string;
  weight: string;
}
export interface PoolRewardTokenProtoMsg {
  typeUrl: "/pryzm.incentives.v1.PoolRewardToken";
  value: Uint8Array;
}
export interface PoolRewardTokenAmino {
  denom?: string;
  amount?: string;
  global_index?: string;
  weight?: string;
}
export interface PoolRewardTokenAminoMsg {
  type: "/pryzm.incentives.v1.PoolRewardToken";
  value: PoolRewardTokenAmino;
}
export interface PoolRewardTokenSDKType {
  denom: string;
  amount: string;
  global_index: string;
  weight: string;
}
export interface Pool {
  bondedToken: Coin;
  rewards: PoolRewardToken[];
}
export interface PoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  bonded_token?: CoinAmino;
  rewards?: PoolRewardTokenAmino[];
}
export interface PoolAminoMsg {
  type: "/pryzm.incentives.v1.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  bonded_token: CoinSDKType;
  rewards: PoolRewardTokenSDKType[];
}
function createBasePoolRewardToken(): PoolRewardToken {
  return {
    denom: "",
    amount: "",
    globalIndex: "",
    weight: ""
  };
}
export const PoolRewardToken = {
  typeUrl: "/pryzm.incentives.v1.PoolRewardToken",
  is(o: any): o is PoolRewardToken {
    return o && (o.$typeUrl === PoolRewardToken.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.globalIndex === "string" && typeof o.weight === "string");
  },
  isSDK(o: any): o is PoolRewardTokenSDKType {
    return o && (o.$typeUrl === PoolRewardToken.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.global_index === "string" && typeof o.weight === "string");
  },
  isAmino(o: any): o is PoolRewardTokenAmino {
    return o && (o.$typeUrl === PoolRewardToken.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.global_index === "string" && typeof o.weight === "string");
  },
  encode(message: PoolRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.globalIndex !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.globalIndex, 18).atomics);
    }
    if (message.weight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.globalIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      globalIndex: isSet(object.globalIndex) ? String(object.globalIndex) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: PoolRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.globalIndex !== undefined && (obj.globalIndex = message.globalIndex);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<PoolRewardToken>): PoolRewardToken {
    const message = createBasePoolRewardToken();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.globalIndex = object.globalIndex ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: PoolRewardTokenAmino): PoolRewardToken {
    const message = createBasePoolRewardToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.global_index !== undefined && object.global_index !== null) {
      message.globalIndex = object.global_index;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: PoolRewardToken, useInterfaces: boolean = true): PoolRewardTokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.global_index = padDecimal(message.globalIndex) === "" ? undefined : padDecimal(message.globalIndex);
    obj.weight = padDecimal(message.weight) === "" ? undefined : padDecimal(message.weight);
    return obj;
  },
  fromAminoMsg(object: PoolRewardTokenAminoMsg): PoolRewardToken {
    return PoolRewardToken.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolRewardTokenProtoMsg, useInterfaces: boolean = true): PoolRewardToken {
    return PoolRewardToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolRewardToken): Uint8Array {
    return PoolRewardToken.encode(message).finish();
  },
  toProtoMsg(message: PoolRewardToken): PoolRewardTokenProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.PoolRewardToken",
      value: PoolRewardToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolRewardToken.typeUrl, PoolRewardToken);
function createBasePool(): Pool {
  return {
    bondedToken: Coin.fromPartial({}),
    rewards: []
  };
}
export const Pool = {
  typeUrl: "/pryzm.incentives.v1.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || Coin.is(o.bondedToken) && Array.isArray(o.rewards) && (!o.rewards.length || PoolRewardToken.is(o.rewards[0])));
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || Coin.isSDK(o.bonded_token) && Array.isArray(o.rewards) && (!o.rewards.length || PoolRewardToken.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || Coin.isAmino(o.bonded_token) && Array.isArray(o.rewards) && (!o.rewards.length || PoolRewardToken.isAmino(o.rewards[0])));
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondedToken !== undefined) {
      Coin.encode(message.bondedToken, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      PoolRewardToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedToken = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.rewards.push(PoolRewardToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      bondedToken: isSet(object.bondedToken) ? Coin.fromJSON(object.bondedToken) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => PoolRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.bondedToken !== undefined && (obj.bondedToken = message.bondedToken ? Coin.toJSON(message.bondedToken) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? PoolRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.bondedToken = object.bondedToken !== undefined && object.bondedToken !== null ? Coin.fromPartial(object.bondedToken) : undefined;
    message.rewards = object.rewards?.map(e => PoolRewardToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.bonded_token !== undefined && object.bonded_token !== null) {
      message.bondedToken = Coin.fromAmino(object.bonded_token);
    }
    message.rewards = object.rewards?.map(e => PoolRewardToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Pool, useInterfaces: boolean = true): PoolAmino {
    const obj: any = {};
    obj.bonded_token = message.bondedToken ? Coin.toAmino(message.bondedToken, useInterfaces) : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? PoolRewardToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg, useInterfaces: boolean = true): Pool {
    return Pool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);