import { Action, ActionAmino, ActionSDKType } from "./action";
import { FlowTrade, FlowTradeAmino, FlowTradeSDKType } from "./flow_trade";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisState {
  action: Action;
  flowTradeList: FlowTrade[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.treasury.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisStateAmino {
  action?: ActionAmino;
  flow_trade_list?: FlowTradeAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.treasury.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the treasury module's genesis state. */
export interface GenesisStateSDKType {
  action: ActionSDKType;
  flow_trade_list: FlowTradeSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    action: Action.fromPartial({}),
    flowTradeList: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.treasury.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Action.is(o.action) && Array.isArray(o.flowTradeList) && (!o.flowTradeList.length || FlowTrade.is(o.flowTradeList[0])) && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Action.isSDK(o.action) && Array.isArray(o.flow_trade_list) && (!o.flow_trade_list.length || FlowTrade.isSDK(o.flow_trade_list[0])) && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Action.isAmino(o.action) && Array.isArray(o.flow_trade_list) && (!o.flow_trade_list.length || FlowTrade.isAmino(o.flow_trade_list[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.flowTradeList) {
      FlowTrade.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.action = Action.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.flowTradeList.push(FlowTrade.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
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
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
      flowTradeList: Array.isArray(object?.flowTradeList) ? object.flowTradeList.map((e: any) => FlowTrade.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    if (message.flowTradeList) {
      obj.flowTradeList = message.flowTradeList.map(e => e ? FlowTrade.toJSON(e) : undefined);
    } else {
      obj.flowTradeList = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    message.flowTradeList = object.flowTradeList?.map(e => FlowTrade.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromAmino(object.action);
    }
    message.flowTradeList = object.flow_trade_list?.map(e => FlowTrade.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.action = message.action ? Action.toAmino(message.action, useInterfaces) : undefined;
    if (message.flowTradeList) {
      obj.flow_trade_list = message.flowTradeList.map(e => e ? FlowTrade.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.flow_trade_list = message.flowTradeList;
    }
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
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
      typeUrl: "/pryzm.treasury.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);