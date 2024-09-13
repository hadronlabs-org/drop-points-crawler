import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface CircuitBreaker {
  referenceLptPrice: string;
  lowerBound: string;
  upperBound: string;
  referenceNormalizedWeight: string;
  adjustedUpperBound: string;
  adjustedLowerBound: string;
}
export interface CircuitBreakerProtoMsg {
  typeUrl: "/pryzm.amm.v1.CircuitBreaker";
  value: Uint8Array;
}
export interface CircuitBreakerAmino {
  reference_lpt_price?: string;
  lower_bound?: string;
  upper_bound?: string;
  reference_normalized_weight?: string;
  adjusted_upper_bound?: string;
  adjusted_lower_bound?: string;
}
export interface CircuitBreakerAminoMsg {
  type: "/pryzm.amm.v1.CircuitBreaker";
  value: CircuitBreakerAmino;
}
export interface CircuitBreakerSDKType {
  reference_lpt_price: string;
  lower_bound: string;
  upper_bound: string;
  reference_normalized_weight: string;
  adjusted_upper_bound: string;
  adjusted_lower_bound: string;
}
export interface PoolToken {
  poolId: bigint;
  denom: string;
  balance: string;
  circuitBreaker?: CircuitBreaker;
}
export interface PoolTokenProtoMsg {
  typeUrl: "/pryzm.amm.v1.PoolToken";
  value: Uint8Array;
}
export interface PoolTokenAmino {
  pool_id?: string;
  denom?: string;
  balance?: string;
  circuit_breaker?: CircuitBreakerAmino;
}
export interface PoolTokenAminoMsg {
  type: "/pryzm.amm.v1.PoolToken";
  value: PoolTokenAmino;
}
export interface PoolTokenSDKType {
  pool_id: bigint;
  denom: string;
  balance: string;
  circuit_breaker?: CircuitBreakerSDKType;
}
export interface TokenAmount {
  token: PoolToken;
  amount: string;
}
export interface TokenAmountProtoMsg {
  typeUrl: "/pryzm.amm.v1.TokenAmount";
  value: Uint8Array;
}
export interface TokenAmountAmino {
  token?: PoolTokenAmino;
  amount?: string;
}
export interface TokenAmountAminoMsg {
  type: "/pryzm.amm.v1.TokenAmount";
  value: TokenAmountAmino;
}
export interface TokenAmountSDKType {
  token: PoolTokenSDKType;
  amount: string;
}
function createBaseCircuitBreaker(): CircuitBreaker {
  return {
    referenceLptPrice: "",
    lowerBound: "",
    upperBound: "",
    referenceNormalizedWeight: "",
    adjustedUpperBound: "",
    adjustedLowerBound: ""
  };
}
export const CircuitBreaker = {
  typeUrl: "/pryzm.amm.v1.CircuitBreaker",
  is(o: any): o is CircuitBreaker {
    return o && (o.$typeUrl === CircuitBreaker.typeUrl || typeof o.referenceLptPrice === "string" && typeof o.lowerBound === "string" && typeof o.upperBound === "string" && typeof o.referenceNormalizedWeight === "string" && typeof o.adjustedUpperBound === "string" && typeof o.adjustedLowerBound === "string");
  },
  isSDK(o: any): o is CircuitBreakerSDKType {
    return o && (o.$typeUrl === CircuitBreaker.typeUrl || typeof o.reference_lpt_price === "string" && typeof o.lower_bound === "string" && typeof o.upper_bound === "string" && typeof o.reference_normalized_weight === "string" && typeof o.adjusted_upper_bound === "string" && typeof o.adjusted_lower_bound === "string");
  },
  isAmino(o: any): o is CircuitBreakerAmino {
    return o && (o.$typeUrl === CircuitBreaker.typeUrl || typeof o.reference_lpt_price === "string" && typeof o.lower_bound === "string" && typeof o.upper_bound === "string" && typeof o.reference_normalized_weight === "string" && typeof o.adjusted_upper_bound === "string" && typeof o.adjusted_lower_bound === "string");
  },
  encode(message: CircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.referenceLptPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.referenceLptPrice, 18).atomics);
    }
    if (message.lowerBound !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lowerBound, 18).atomics);
    }
    if (message.upperBound !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.upperBound, 18).atomics);
    }
    if (message.referenceNormalizedWeight !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.referenceNormalizedWeight, 18).atomics);
    }
    if (message.adjustedUpperBound !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.adjustedUpperBound, 18).atomics);
    }
    if (message.adjustedLowerBound !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.adjustedLowerBound, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceLptPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lowerBound = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.upperBound = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.referenceNormalizedWeight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.adjustedUpperBound = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.adjustedLowerBound = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CircuitBreaker {
    return {
      referenceLptPrice: isSet(object.referenceLptPrice) ? String(object.referenceLptPrice) : "",
      lowerBound: isSet(object.lowerBound) ? String(object.lowerBound) : "",
      upperBound: isSet(object.upperBound) ? String(object.upperBound) : "",
      referenceNormalizedWeight: isSet(object.referenceNormalizedWeight) ? String(object.referenceNormalizedWeight) : "",
      adjustedUpperBound: isSet(object.adjustedUpperBound) ? String(object.adjustedUpperBound) : "",
      adjustedLowerBound: isSet(object.adjustedLowerBound) ? String(object.adjustedLowerBound) : ""
    };
  },
  toJSON(message: CircuitBreaker): unknown {
    const obj: any = {};
    message.referenceLptPrice !== undefined && (obj.referenceLptPrice = message.referenceLptPrice);
    message.lowerBound !== undefined && (obj.lowerBound = message.lowerBound);
    message.upperBound !== undefined && (obj.upperBound = message.upperBound);
    message.referenceNormalizedWeight !== undefined && (obj.referenceNormalizedWeight = message.referenceNormalizedWeight);
    message.adjustedUpperBound !== undefined && (obj.adjustedUpperBound = message.adjustedUpperBound);
    message.adjustedLowerBound !== undefined && (obj.adjustedLowerBound = message.adjustedLowerBound);
    return obj;
  },
  fromPartial(object: Partial<CircuitBreaker>): CircuitBreaker {
    const message = createBaseCircuitBreaker();
    message.referenceLptPrice = object.referenceLptPrice ?? "";
    message.lowerBound = object.lowerBound ?? "";
    message.upperBound = object.upperBound ?? "";
    message.referenceNormalizedWeight = object.referenceNormalizedWeight ?? "";
    message.adjustedUpperBound = object.adjustedUpperBound ?? "";
    message.adjustedLowerBound = object.adjustedLowerBound ?? "";
    return message;
  },
  fromAmino(object: CircuitBreakerAmino): CircuitBreaker {
    const message = createBaseCircuitBreaker();
    if (object.reference_lpt_price !== undefined && object.reference_lpt_price !== null) {
      message.referenceLptPrice = object.reference_lpt_price;
    }
    if (object.lower_bound !== undefined && object.lower_bound !== null) {
      message.lowerBound = object.lower_bound;
    }
    if (object.upper_bound !== undefined && object.upper_bound !== null) {
      message.upperBound = object.upper_bound;
    }
    if (object.reference_normalized_weight !== undefined && object.reference_normalized_weight !== null) {
      message.referenceNormalizedWeight = object.reference_normalized_weight;
    }
    if (object.adjusted_upper_bound !== undefined && object.adjusted_upper_bound !== null) {
      message.adjustedUpperBound = object.adjusted_upper_bound;
    }
    if (object.adjusted_lower_bound !== undefined && object.adjusted_lower_bound !== null) {
      message.adjustedLowerBound = object.adjusted_lower_bound;
    }
    return message;
  },
  toAmino(message: CircuitBreaker, useInterfaces: boolean = true): CircuitBreakerAmino {
    const obj: any = {};
    obj.reference_lpt_price = padDecimal(message.referenceLptPrice) === "" ? undefined : padDecimal(message.referenceLptPrice);
    obj.lower_bound = padDecimal(message.lowerBound) === "" ? undefined : padDecimal(message.lowerBound);
    obj.upper_bound = padDecimal(message.upperBound) === "" ? undefined : padDecimal(message.upperBound);
    obj.reference_normalized_weight = padDecimal(message.referenceNormalizedWeight) === "" ? undefined : padDecimal(message.referenceNormalizedWeight);
    obj.adjusted_upper_bound = padDecimal(message.adjustedUpperBound) === "" ? undefined : padDecimal(message.adjustedUpperBound);
    obj.adjusted_lower_bound = padDecimal(message.adjustedLowerBound) === "" ? undefined : padDecimal(message.adjustedLowerBound);
    return obj;
  },
  fromAminoMsg(object: CircuitBreakerAminoMsg): CircuitBreaker {
    return CircuitBreaker.fromAmino(object.value);
  },
  fromProtoMsg(message: CircuitBreakerProtoMsg, useInterfaces: boolean = true): CircuitBreaker {
    return CircuitBreaker.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CircuitBreaker): Uint8Array {
    return CircuitBreaker.encode(message).finish();
  },
  toProtoMsg(message: CircuitBreaker): CircuitBreakerProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.CircuitBreaker",
      value: CircuitBreaker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CircuitBreaker.typeUrl, CircuitBreaker);
function createBasePoolToken(): PoolToken {
  return {
    poolId: BigInt(0),
    denom: "",
    balance: "",
    circuitBreaker: undefined
  };
}
export const PoolToken = {
  typeUrl: "/pryzm.amm.v1.PoolToken",
  is(o: any): o is PoolToken {
    return o && (o.$typeUrl === PoolToken.typeUrl || typeof o.poolId === "bigint" && typeof o.denom === "string" && typeof o.balance === "string");
  },
  isSDK(o: any): o is PoolTokenSDKType {
    return o && (o.$typeUrl === PoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.balance === "string");
  },
  isAmino(o: any): o is PoolTokenAmino {
    return o && (o.$typeUrl === PoolToken.typeUrl || typeof o.pool_id === "bigint" && typeof o.denom === "string" && typeof o.balance === "string");
  },
  encode(message: PoolToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.circuitBreaker !== undefined) {
      CircuitBreaker.encode(message.circuitBreaker, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToken();
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
          message.balance = reader.string();
          break;
        case 4:
          message.circuitBreaker = CircuitBreaker.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToken {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      circuitBreaker: isSet(object.circuitBreaker) ? CircuitBreaker.fromJSON(object.circuitBreaker) : undefined
    };
  },
  toJSON(message: PoolToken): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.circuitBreaker !== undefined && (obj.circuitBreaker = message.circuitBreaker ? CircuitBreaker.toJSON(message.circuitBreaker) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PoolToken>): PoolToken {
    const message = createBasePoolToken();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.balance = object.balance ?? "";
    message.circuitBreaker = object.circuitBreaker !== undefined && object.circuitBreaker !== null ? CircuitBreaker.fromPartial(object.circuitBreaker) : undefined;
    return message;
  },
  fromAmino(object: PoolTokenAmino): PoolToken {
    const message = createBasePoolToken();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.circuit_breaker !== undefined && object.circuit_breaker !== null) {
      message.circuitBreaker = CircuitBreaker.fromAmino(object.circuit_breaker);
    }
    return message;
  },
  toAmino(message: PoolToken, useInterfaces: boolean = true): PoolTokenAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.circuit_breaker = message.circuitBreaker ? CircuitBreaker.toAmino(message.circuitBreaker, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolTokenAminoMsg): PoolToken {
    return PoolToken.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolTokenProtoMsg, useInterfaces: boolean = true): PoolToken {
    return PoolToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolToken): Uint8Array {
    return PoolToken.encode(message).finish();
  },
  toProtoMsg(message: PoolToken): PoolTokenProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.PoolToken",
      value: PoolToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolToken.typeUrl, PoolToken);
function createBaseTokenAmount(): TokenAmount {
  return {
    token: PoolToken.fromPartial({}),
    amount: ""
  };
}
export const TokenAmount = {
  typeUrl: "/pryzm.amm.v1.TokenAmount",
  is(o: any): o is TokenAmount {
    return o && (o.$typeUrl === TokenAmount.typeUrl || PoolToken.is(o.token) && typeof o.amount === "string");
  },
  isSDK(o: any): o is TokenAmountSDKType {
    return o && (o.$typeUrl === TokenAmount.typeUrl || PoolToken.isSDK(o.token) && typeof o.amount === "string");
  },
  isAmino(o: any): o is TokenAmountAmino {
    return o && (o.$typeUrl === TokenAmount.typeUrl || PoolToken.isAmino(o.token) && typeof o.amount === "string");
  },
  encode(message: TokenAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      PoolToken.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TokenAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = PoolToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenAmount {
    return {
      token: isSet(object.token) ? PoolToken.fromJSON(object.token) : undefined,
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: TokenAmount): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? PoolToken.toJSON(message.token) : undefined);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<TokenAmount>): TokenAmount {
    const message = createBaseTokenAmount();
    message.token = object.token !== undefined && object.token !== null ? PoolToken.fromPartial(object.token) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: TokenAmountAmino): TokenAmount {
    const message = createBaseTokenAmount();
    if (object.token !== undefined && object.token !== null) {
      message.token = PoolToken.fromAmino(object.token);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: TokenAmount, useInterfaces: boolean = true): TokenAmountAmino {
    const obj: any = {};
    obj.token = message.token ? PoolToken.toAmino(message.token, useInterfaces) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: TokenAmountAminoMsg): TokenAmount {
    return TokenAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenAmountProtoMsg, useInterfaces: boolean = true): TokenAmount {
    return TokenAmount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TokenAmount): Uint8Array {
    return TokenAmount.encode(message).finish();
  },
  toProtoMsg(message: TokenAmount): TokenAmountProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.TokenAmount",
      value: TokenAmount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TokenAmount.typeUrl, TokenAmount);