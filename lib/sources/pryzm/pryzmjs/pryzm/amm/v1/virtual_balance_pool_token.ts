import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface VirtualBalancePoolToken {
  poolId: bigint;
  denom: string;
  targetVirtualBalance: string;
  startUnixMillis: bigint;
  endUnixMillis: bigint;
}
export interface VirtualBalancePoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.VirtualBalancePoolToken";
  value: Uint8Array;
}
export interface VirtualBalancePoolTokenAmino {
  pool_id?: string;
  denom?: string;
  target_virtual_balance?: string;
  start_unix_millis?: string;
  end_unix_millis?: string;
}
export interface VirtualBalancePoolTokenAminoMsg {
  type: "/pryzm.amm.v1.VirtualBalancePoolToken";
  value: VirtualBalancePoolTokenAmino;
}
export interface VirtualBalancePoolTokenSDKType {
  pool_id: bigint;
  denom: string;
  target_virtual_balance: string;
  start_unix_millis: bigint;
  end_unix_millis: bigint;
}
function createBaseVirtualBalancePoolToken(): VirtualBalancePoolToken {
  return {
    poolId: BigInt(0),
    denom: "",
    targetVirtualBalance: "",
    startUnixMillis: BigInt(0),
    endUnixMillis: BigInt(0)
  };
}
export const VirtualBalancePoolToken = {
  typeUrl: "/pryzm.amm.v1.VirtualBalancePoolToken",
  is(o: any): o is VirtualBalancePoolToken {
    return o && (o.$typeUrl === VirtualBalancePoolToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string" && typeof o.targetVirtualBalance === "string" && typeof o.startUnixMillis === "bigint" && typeof o.endUnixMillis === "bigint");
  },
  isSDK(o: any): o is VirtualBalancePoolTokenSDKType {
    return o && (o.$typeUrl === VirtualBalancePoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.target_virtual_balance === "string" && typeof o.start_unix_millis === "bigint" && typeof o.end_unix_millis === "bigint");
  },
  isAmino(o: any): o is VirtualBalancePoolTokenAmino {
    return o && (o.$typeUrl === VirtualBalancePoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.target_virtual_balance === "string" && typeof o.start_unix_millis === "bigint" && typeof o.end_unix_millis === "bigint");
  },
  encode(message: VirtualBalancePoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.targetVirtualBalance !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.targetVirtualBalance, 18).atomics);
    }
    if (message.startUnixMillis !== BigInt(0)) {
      writer.uint32(32).int64(message.startUnixMillis);
    }
    if (message.endUnixMillis !== BigInt(0)) {
      writer.uint32(40).int64(message.endUnixMillis);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VirtualBalancePoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualBalancePoolToken();
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
          message.targetVirtualBalance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.startUnixMillis = reader.int64();
          break;
        case 5:
          message.endUnixMillis = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VirtualBalancePoolToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      targetVirtualBalance: isSet(object.targetVirtualBalance) ? String(object.targetVirtualBalance) : "",
      startUnixMillis: isSet(object.startUnixMillis) ? BigInt(object.startUnixMillis.toString()) : BigInt(0),
      endUnixMillis: isSet(object.endUnixMillis) ? BigInt(object.endUnixMillis.toString()) : BigInt(0)
    };
  },
  toJSON(message: VirtualBalancePoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.targetVirtualBalance !== undefined && (obj.targetVirtualBalance = message.targetVirtualBalance);
    message.startUnixMillis !== undefined && (obj.startUnixMillis = (message.startUnixMillis || BigInt(0)).toString());
    message.endUnixMillis !== undefined && (obj.endUnixMillis = (message.endUnixMillis || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<VirtualBalancePoolToken>): VirtualBalancePoolToken {
    const message = createBaseVirtualBalancePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.targetVirtualBalance = object.targetVirtualBalance ?? "";
    message.startUnixMillis = object.startUnixMillis !== undefined && object.startUnixMillis !== null ? BigInt(object.startUnixMillis.toString()) : BigInt(0);
    message.endUnixMillis = object.endUnixMillis !== undefined && object.endUnixMillis !== null ? BigInt(object.endUnixMillis.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VirtualBalancePoolTokenAmino): VirtualBalancePoolToken {
    const message = createBaseVirtualBalancePoolToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.target_virtual_balance !== undefined && object.target_virtual_balance !== null) {
      message.targetVirtualBalance = object.target_virtual_balance;
    }
    if (object.start_unix_millis !== undefined && object.start_unix_millis !== null) {
      message.startUnixMillis = BigInt(object.start_unix_millis);
    }
    if (object.end_unix_millis !== undefined && object.end_unix_millis !== null) {
      message.endUnixMillis = BigInt(object.end_unix_millis);
    }
    return message;
  },
  toAmino(message: VirtualBalancePoolToken, useInterfaces: boolean = true): VirtualBalancePoolTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.target_virtual_balance = padDecimal(message.targetVirtualBalance) === "" ? undefined : padDecimal(message.targetVirtualBalance);
    obj.start_unix_millis = message.startUnixMillis ? message.startUnixMillis.toString() : undefined;
    obj.end_unix_millis = message.endUnixMillis ? message.endUnixMillis.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VirtualBalancePoolTokenAminoMsg): VirtualBalancePoolToken {
    return VirtualBalancePoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: VirtualBalancePoolTokenProtoMsg, useInterfaces: boolean = true): VirtualBalancePoolToken {
    return VirtualBalancePoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VirtualBalancePoolToken): Uint8Array {
    return VirtualBalancePoolToken.encode(message).finish();
  },
  toProtoMsg(message: VirtualBalancePoolToken): VirtualBalancePoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.VirtualBalancePoolToken",
      value: VirtualBalancePoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VirtualBalancePoolToken.typeUrl, VirtualBalancePoolToken);