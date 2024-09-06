import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface ProposalOrder {
  /** should be set to zero for virtual orders */
  id: bigint;
  maxAmountIn?: string;
  maxPrice?: string;
  virtual: boolean;
}
export interface ProposalOrderProtoMsg {
  typeUrl: "/pryzm.amm.v2.ProposalOrder";
  value: Uint8Array;
}
export interface ProposalOrderAmino {
  /** should be set to zero for virtual orders */
  id?: string;
  max_amount_in?: string;
  max_price?: string;
  virtual?: boolean;
}
export interface ProposalOrderAminoMsg {
  type: "/pryzm.amm.v2.ProposalOrder";
  value: ProposalOrderAmino;
}
export interface ProposalOrderSDKType {
  id: bigint;
  max_amount_in?: string;
  max_price?: string;
  virtual: boolean;
}
export interface PairMatchProposal {
  poolId: bigint;
  whitelistedRoute: boolean;
  tokenIn: string;
  tokenOut: string;
  buyOrders: ProposalOrder[];
  sellOrders: ProposalOrder[];
}
export interface PairMatchProposalProtoMsg {
  typeUrl: "/pryzm.amm.v2.PairMatchProposal";
  value: Uint8Array;
}
export interface PairMatchProposalAmino {
  pool_id?: string;
  whitelisted_route?: boolean;
  token_in?: string;
  token_out?: string;
  buy_orders?: ProposalOrderAmino[];
  sell_orders?: ProposalOrderAmino[];
}
export interface PairMatchProposalAminoMsg {
  type: "/pryzm.amm.v2.PairMatchProposal";
  value: PairMatchProposalAmino;
}
export interface PairMatchProposalSDKType {
  pool_id: bigint;
  whitelisted_route: boolean;
  token_in: string;
  token_out: string;
  buy_orders: ProposalOrderSDKType[];
  sell_orders: ProposalOrderSDKType[];
}
function createBaseProposalOrder(): ProposalOrder {
  return {
    id: BigInt(0),
    maxAmountIn: undefined,
    maxPrice: undefined,
    virtual: false
  };
}
export const ProposalOrder = {
  typeUrl: "/pryzm.amm.v2.ProposalOrder",
  is(o: any): o is ProposalOrder {
    return o && (o.$typeUrl === ProposalOrder.typeUrl || typeof o.id === "bigint" && typeof o.virtual === "boolean");
  },
  isSDK(o: any): o is ProposalOrderSDKType {
    return o && (o.$typeUrl === ProposalOrder.typeUrl || typeof o.id === "bigint" && typeof o.virtual === "boolean");
  },
  isAmino(o: any): o is ProposalOrderAmino {
    return o && (o.$typeUrl === ProposalOrder.typeUrl || typeof o.id === "bigint" && typeof o.virtual === "boolean");
  },
  encode(message: ProposalOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.maxAmountIn !== undefined) {
      writer.uint32(18).string(message.maxAmountIn);
    }
    if (message.maxPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    if (message.virtual === true) {
      writer.uint32(32).bool(message.virtual);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ProposalOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.maxAmountIn = reader.string();
          break;
        case 3:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.virtual = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposalOrder {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      maxAmountIn: isSet(object.maxAmountIn) ? String(object.maxAmountIn) : undefined,
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : undefined,
      virtual: isSet(object.virtual) ? Boolean(object.virtual) : false
    };
  },
  toJSON(message: ProposalOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.maxAmountIn !== undefined && (obj.maxAmountIn = message.maxAmountIn);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    message.virtual !== undefined && (obj.virtual = message.virtual);
    return obj;
  },
  fromPartial(object: Partial<ProposalOrder>): ProposalOrder {
    const message = createBaseProposalOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.maxAmountIn = object.maxAmountIn ?? undefined;
    message.maxPrice = object.maxPrice ?? undefined;
    message.virtual = object.virtual ?? false;
    return message;
  },
  fromAmino(object: ProposalOrderAmino): ProposalOrder {
    const message = createBaseProposalOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.max_amount_in !== undefined && object.max_amount_in !== null) {
      message.maxAmountIn = object.max_amount_in;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = object.max_price;
    }
    if (object.virtual !== undefined && object.virtual !== null) {
      message.virtual = object.virtual;
    }
    return message;
  },
  toAmino(message: ProposalOrder, useInterfaces: boolean = true): ProposalOrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.max_amount_in = message.maxAmountIn === null ? undefined : message.maxAmountIn;
    obj.max_price = padDecimal(message.maxPrice) === null ? undefined : padDecimal(message.maxPrice);
    obj.virtual = message.virtual === false ? undefined : message.virtual;
    return obj;
  },
  fromAminoMsg(object: ProposalOrderAminoMsg): ProposalOrder {
    return ProposalOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalOrderProtoMsg, useInterfaces: boolean = true): ProposalOrder {
    return ProposalOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ProposalOrder): Uint8Array {
    return ProposalOrder.encode(message).finish();
  },
  toProtoMsg(message: ProposalOrder): ProposalOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v2.ProposalOrder",
      value: ProposalOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalOrder.typeUrl, ProposalOrder);
function createBasePairMatchProposal(): PairMatchProposal {
  return {
    poolId: BigInt(0),
    whitelistedRoute: false,
    tokenIn: "",
    tokenOut: "",
    buyOrders: [],
    sellOrders: []
  };
}
export const PairMatchProposal = {
  typeUrl: "/pryzm.amm.v2.PairMatchProposal",
  is(o: any): o is PairMatchProposal {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.poolId === "bigint" && typeof o.whitelistedRoute === "boolean" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || ProposalOrder.is(o.buyOrders[0])) && Array.isArray(o.sellOrders) && (!o.sellOrders.length || ProposalOrder.is(o.sellOrders[0])));
  },
  isSDK(o: any): o is PairMatchProposalSDKType {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || ProposalOrder.isSDK(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || ProposalOrder.isSDK(o.sell_orders[0])));
  },
  isAmino(o: any): o is PairMatchProposalAmino {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || ProposalOrder.isAmino(o.buy_orders[0])) && Array.isArray(o.sell_orders) && (!o.sell_orders.length || ProposalOrder.isAmino(o.sell_orders[0])));
  },
  encode(message: PairMatchProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(16).bool(message.whitelistedRoute);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    for (const v of message.buyOrders) {
      ProposalOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sellOrders) {
      ProposalOrder.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PairMatchProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairMatchProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.whitelistedRoute = reader.bool();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.buyOrders.push(ProposalOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.sellOrders.push(ProposalOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairMatchProposal {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => ProposalOrder.fromJSON(e)) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => ProposalOrder.fromJSON(e)) : []
    };
  },
  toJSON(message: PairMatchProposal): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => e ? ProposalOrder.toJSON(e) : undefined);
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? ProposalOrder.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PairMatchProposal>): PairMatchProposal {
    const message = createBasePairMatchProposal();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.buyOrders = object.buyOrders?.map(e => ProposalOrder.fromPartial(e)) || [];
    message.sellOrders = object.sellOrders?.map(e => ProposalOrder.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PairMatchProposalAmino): PairMatchProposal {
    const message = createBasePairMatchProposal();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    message.buyOrders = object.buy_orders?.map(e => ProposalOrder.fromAmino(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => ProposalOrder.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PairMatchProposal, useInterfaces: boolean = true): PairMatchProposalAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e ? ProposalOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? ProposalOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.sell_orders = message.sellOrders;
    }
    return obj;
  },
  fromAminoMsg(object: PairMatchProposalAminoMsg): PairMatchProposal {
    return PairMatchProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: PairMatchProposalProtoMsg, useInterfaces: boolean = true): PairMatchProposal {
    return PairMatchProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PairMatchProposal): Uint8Array {
    return PairMatchProposal.encode(message).finish();
  },
  toProtoMsg(message: PairMatchProposal): PairMatchProposalProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v2.PairMatchProposal",
      value: PairMatchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PairMatchProposal.typeUrl, PairMatchProposal);