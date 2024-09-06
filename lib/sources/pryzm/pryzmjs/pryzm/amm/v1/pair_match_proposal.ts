import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface PairMatchProposal {
  poolId: bigint;
  whitelistedRoute: boolean;
  tokenIn: string;
  tokenOut: string;
  buyOrders: bigint[];
  sellOrders: bigint[];
}
export interface PairMatchProposalProtoMsg {
  typeUrl: "/pryzm.amm.v1.PairMatchProposal";
  value: Uint8Array;
}
export interface PairMatchProposalAmino {
  pool_id: string;
  whitelisted_route: boolean;
  token_in?: string;
  token_out?: string;
  buy_orders: string[];
  sell_orders: string[];
}
export interface PairMatchProposalAminoMsg {
  type: "/pryzm.amm.v1.PairMatchProposal";
  value: PairMatchProposalAmino;
}
export interface PairMatchProposalSDKType {
  pool_id: bigint;
  whitelisted_route: boolean;
  token_in: string;
  token_out: string;
  buy_orders: bigint[];
  sell_orders: bigint[];
}
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
  typeUrl: "/pryzm.amm.v1.PairMatchProposal",
  is(o: any): o is PairMatchProposal {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.poolId === "bigint" && typeof o.whitelistedRoute === "boolean" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && Array.isArray(o.buyOrders) && (!o.buyOrders.length || typeof o.buyOrders[0] === "bigint") && Array.isArray(o.sellOrders) && (!o.sellOrders.length || typeof o.sellOrders[0] === "bigint"));
  },
  isSDK(o: any): o is PairMatchProposalSDKType {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || typeof o.buy_orders[0] === "bigint") && Array.isArray(o.sell_orders) && (!o.sell_orders.length || typeof o.sell_orders[0] === "bigint"));
  },
  isAmino(o: any): o is PairMatchProposalAmino {
    return o && (o.$typeUrl === PairMatchProposal.typeUrl || typeof o.pool_id === "bigint" && typeof o.whitelisted_route === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.buy_orders) && (!o.buy_orders.length || typeof o.buy_orders[0] === "bigint") && Array.isArray(o.sell_orders) && (!o.sell_orders.length || typeof o.sell_orders[0] === "bigint"));
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
    writer.uint32(42).fork();
    for (const v of message.buyOrders) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.sellOrders) {
      writer.uint64(v);
    }
    writer.ldelim();
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.buyOrders.push(reader.uint64());
            }
          } else {
            message.buyOrders.push(reader.uint64());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOrders.push(reader.uint64());
            }
          } else {
            message.sellOrders.push(reader.uint64());
          }
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
      buyOrders: Array.isArray(object?.buyOrders) ? object.buyOrders.map((e: any) => BigInt(e.toString())) : [],
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: PairMatchProposal): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    if (message.buyOrders) {
      obj.buyOrders = message.buyOrders.map(e => (e || BigInt(0)).toString());
    } else {
      obj.buyOrders = [];
    }
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => (e || BigInt(0)).toString());
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
    message.buyOrders = object.buyOrders?.map(e => BigInt(e.toString())) || [];
    message.sellOrders = object.sellOrders?.map(e => BigInt(e.toString())) || [];
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
    message.buyOrders = object.buy_orders?.map(e => BigInt(e)) || [];
    message.sellOrders = object.sell_orders?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: PairMatchProposal, useInterfaces: boolean = true): PairMatchProposalAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    if (message.buyOrders) {
      obj.buy_orders = message.buyOrders.map(e => e.toString());
    } else {
      obj.buy_orders = message.buyOrders;
    }
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e.toString());
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
      typeUrl: "/pryzm.amm.v1.PairMatchProposal",
      value: PairMatchProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PairMatchProposal.typeUrl, PairMatchProposal);