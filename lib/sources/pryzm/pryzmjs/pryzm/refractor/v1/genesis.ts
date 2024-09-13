import { AssetState, AssetStateAmino, AssetStateSDKType } from "./asset_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisState {
  assetStateList: AssetState[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.refractor.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisStateAmino {
  asset_state_list?: AssetStateAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.refractor.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the refractor module's genesis state. */
export interface GenesisStateSDKType {
  asset_state_list: AssetStateSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    assetStateList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.refractor.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.assetStateList) && (!o.assetStateList.length || AssetState.is(o.assetStateList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.asset_state_list) && (!o.asset_state_list.length || AssetState.isSDK(o.asset_state_list[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.asset_state_list) && (!o.asset_state_list.length || AssetState.isAmino(o.asset_state_list[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetStateList) {
      AssetState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetStateList.push(AssetState.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      assetStateList: Array.isArray(object?.assetStateList) ? object.assetStateList.map((e: any) => AssetState.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.assetStateList) {
      obj.assetStateList = message.assetStateList.map(e => e ? AssetState.toJSON(e) : undefined);
    } else {
      obj.assetStateList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assetStateList = object.assetStateList?.map(e => AssetState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.assetStateList = object.asset_state_list?.map(e => AssetState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    if (message.assetStateList) {
      obj.asset_state_list = message.assetStateList.map(e => e ? AssetState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.asset_state_list = message.assetStateList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);