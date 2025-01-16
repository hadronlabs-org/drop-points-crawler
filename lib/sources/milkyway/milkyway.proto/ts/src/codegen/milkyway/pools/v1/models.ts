import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** Pool defines the structure of a restaking pool */
export interface Pool {
  /** ID is the auto-generated unique identifier for the pool */
  id: number;
  /** Denom represents the denomination of the tokens that are staked in the pool */
  denom: string;
  /**
   * Address represents the address of the account that is associated with this
   * pool. This will be used to store tokens that users delegate to this pool.
   */
  address: string;
  /** Tokens define the delegated tokens. */
  tokens: string;
  /** DelegatorShares defines total shares issued to a pool's delegators. */
  delegatorShares: string;
}
export interface PoolProtoMsg {
  typeUrl: "/milkyway.pools.v1.Pool";
  value: Uint8Array;
}
/** Pool defines the structure of a restaking pool */
export interface PoolAmino {
  /** ID is the auto-generated unique identifier for the pool */
  id?: number;
  /** Denom represents the denomination of the tokens that are staked in the pool */
  denom?: string;
  /**
   * Address represents the address of the account that is associated with this
   * pool. This will be used to store tokens that users delegate to this pool.
   */
  address?: string;
  /** Tokens define the delegated tokens. */
  tokens?: string;
  /** DelegatorShares defines total shares issued to a pool's delegators. */
  delegator_shares?: string;
}
export interface PoolAminoMsg {
  type: "/milkyway.pools.v1.Pool";
  value: PoolAmino;
}
/** Pool defines the structure of a restaking pool */
export interface PoolSDKType {
  id: number;
  denom: string;
  address: string;
  tokens: string;
  delegator_shares: string;
}
function createBasePool(): Pool {
  return {
    id: 0,
    denom: "",
    address: "",
    tokens: "",
    delegatorShares: ""
  };
}
export const Pool = {
  typeUrl: "/milkyway.pools.v1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.tokens !== "") {
      writer.uint32(34).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.tokens = reader.string();
          break;
        case 5:
          message.delegatorShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id ?? 0;
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
      message.delegatorShares = object.delegator_shares;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    obj.tokens = message.tokens === "" ? undefined : message.tokens;
    obj.delegator_shares = message.delegatorShares === "" ? undefined : message.delegatorShares;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};