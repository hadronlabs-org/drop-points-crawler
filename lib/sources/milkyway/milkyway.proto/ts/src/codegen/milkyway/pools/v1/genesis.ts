import { Pool, PoolAmino, PoolSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the pools module's genesis state. */
export interface GenesisState {
  /** NextPoolID represents the id to be used when creating the next pool. */
  nextPoolId: number;
  /** Pools defines the list of pools. */
  pools: Pool[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/milkyway.pools.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pools module's genesis state. */
export interface GenesisStateAmino {
  /** NextPoolID represents the id to be used when creating the next pool. */
  next_pool_id?: number;
  /** Pools defines the list of pools. */
  pools?: PoolAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/milkyway.pools.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pools module's genesis state. */
export interface GenesisStateSDKType {
  next_pool_id: number;
  pools: PoolSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    nextPoolId: 0,
    pools: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.pools.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextPoolId !== 0) {
      writer.uint32(8).uint32(message.nextPoolId);
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextPoolId = reader.uint32();
          break;
        case 2:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextPoolId = object.nextPoolId ?? 0;
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
      message.nextPoolId = object.next_pool_id;
    }
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.next_pool_id = message.nextPoolId === 0 ? undefined : message.nextPoolId;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/milkyway.pools.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};