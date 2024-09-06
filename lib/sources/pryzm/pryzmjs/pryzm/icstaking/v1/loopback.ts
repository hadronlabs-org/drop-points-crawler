import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface LoopBackPacket {
  /** the identifier of the packet, also used to make sure that the messages are executed with proper ordering */
  id: bigint;
  transfer?: LoopBackTransfer;
  msgs?: LoopBackMsgs;
}
export interface LoopBackPacketProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.LoopBackPacket";
  value: Uint8Array;
}
export interface LoopBackPacketAmino {
  /** the identifier of the packet, also used to make sure that the messages are executed with proper ordering */
  id?: string;
  transfer?: LoopBackTransferAmino;
  msgs?: LoopBackMsgsAmino;
}
export interface LoopBackPacketAminoMsg {
  type: "/pryzm.icstaking.v1.LoopBackPacket";
  value: LoopBackPacketAmino;
}
export interface LoopBackPacketSDKType {
  id: bigint;
  transfer?: LoopBackTransferSDKType;
  msgs?: LoopBackMsgsSDKType;
}
export interface LoopBackMsgs {
  /** messages that must be executed on the host chain */
  messages: Any[];
}
export interface LoopBackMsgsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.LoopBackMsgs";
  value: Uint8Array;
}
export interface LoopBackMsgsAmino {
  /** messages that must be executed on the host chain */
  messages?: AnyAmino[];
}
export interface LoopBackMsgsAminoMsg {
  type: "/pryzm.icstaking.v1.LoopBackMsgs";
  value: LoopBackMsgsAmino;
}
export interface LoopBackMsgsSDKType {
  messages: AnySDKType[];
}
export interface LoopBackTransfer {
  /** messages that must be executed on the host chain */
  from: string;
  to: string;
  amount: Coin;
  memo: string;
}
export interface LoopBackTransferProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.LoopBackTransfer";
  value: Uint8Array;
}
export interface LoopBackTransferAmino {
  /** messages that must be executed on the host chain */
  from?: string;
  to?: string;
  amount?: CoinAmino;
  memo?: string;
}
export interface LoopBackTransferAminoMsg {
  type: "/pryzm.icstaking.v1.LoopBackTransfer";
  value: LoopBackTransferAmino;
}
export interface LoopBackTransferSDKType {
  from: string;
  to: string;
  amount: CoinSDKType;
  memo: string;
}
function createBaseLoopBackPacket(): LoopBackPacket {
  return {
    id: BigInt(0),
    transfer: undefined,
    msgs: undefined
  };
}
export const LoopBackPacket = {
  typeUrl: "/pryzm.icstaking.v1.LoopBackPacket",
  is(o: any): o is LoopBackPacket {
    return o && (o.$typeUrl === LoopBackPacket.typeUrl || typeof o.id === "bigint");
  },
  isSDK(o: any): o is LoopBackPacketSDKType {
    return o && (o.$typeUrl === LoopBackPacket.typeUrl || typeof o.id === "bigint");
  },
  isAmino(o: any): o is LoopBackPacketAmino {
    return o && (o.$typeUrl === LoopBackPacket.typeUrl || typeof o.id === "bigint");
  },
  encode(message: LoopBackPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.transfer !== undefined) {
      LoopBackTransfer.encode(message.transfer, writer.uint32(18).fork()).ldelim();
    }
    if (message.msgs !== undefined) {
      LoopBackMsgs.encode(message.msgs, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LoopBackPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoopBackPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.transfer = LoopBackTransfer.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.msgs = LoopBackMsgs.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoopBackPacket {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      transfer: isSet(object.transfer) ? LoopBackTransfer.fromJSON(object.transfer) : undefined,
      msgs: isSet(object.msgs) ? LoopBackMsgs.fromJSON(object.msgs) : undefined
    };
  },
  toJSON(message: LoopBackPacket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.transfer !== undefined && (obj.transfer = message.transfer ? LoopBackTransfer.toJSON(message.transfer) : undefined);
    message.msgs !== undefined && (obj.msgs = message.msgs ? LoopBackMsgs.toJSON(message.msgs) : undefined);
    return obj;
  },
  fromPartial(object: Partial<LoopBackPacket>): LoopBackPacket {
    const message = createBaseLoopBackPacket();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.transfer = object.transfer !== undefined && object.transfer !== null ? LoopBackTransfer.fromPartial(object.transfer) : undefined;
    message.msgs = object.msgs !== undefined && object.msgs !== null ? LoopBackMsgs.fromPartial(object.msgs) : undefined;
    return message;
  },
  fromAmino(object: LoopBackPacketAmino): LoopBackPacket {
    const message = createBaseLoopBackPacket();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.transfer !== undefined && object.transfer !== null) {
      message.transfer = LoopBackTransfer.fromAmino(object.transfer);
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      message.msgs = LoopBackMsgs.fromAmino(object.msgs);
    }
    return message;
  },
  toAmino(message: LoopBackPacket, useInterfaces: boolean = true): LoopBackPacketAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.transfer = message.transfer ? LoopBackTransfer.toAmino(message.transfer, useInterfaces) : undefined;
    obj.msgs = message.msgs ? LoopBackMsgs.toAmino(message.msgs, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: LoopBackPacketAminoMsg): LoopBackPacket {
    return LoopBackPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: LoopBackPacketProtoMsg, useInterfaces: boolean = true): LoopBackPacket {
    return LoopBackPacket.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LoopBackPacket): Uint8Array {
    return LoopBackPacket.encode(message).finish();
  },
  toProtoMsg(message: LoopBackPacket): LoopBackPacketProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.LoopBackPacket",
      value: LoopBackPacket.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LoopBackPacket.typeUrl, LoopBackPacket);
function createBaseLoopBackMsgs(): LoopBackMsgs {
  return {
    messages: []
  };
}
export const LoopBackMsgs = {
  typeUrl: "/pryzm.icstaking.v1.LoopBackMsgs",
  is(o: any): o is LoopBackMsgs {
    return o && (o.$typeUrl === LoopBackMsgs.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])));
  },
  isSDK(o: any): o is LoopBackMsgsSDKType {
    return o && (o.$typeUrl === LoopBackMsgs.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])));
  },
  isAmino(o: any): o is LoopBackMsgsAmino {
    return o && (o.$typeUrl === LoopBackMsgs.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])));
  },
  encode(message: LoopBackMsgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LoopBackMsgs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoopBackMsgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoopBackMsgs {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSONAsAny(e)) : []
    };
  },
  toJSON(message: LoopBackMsgs): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<LoopBackMsgs>): LoopBackMsgs {
    const message = createBaseLoopBackMsgs();
    message.messages = object.messages?.map(e => Any.fromPartialAsAny(e)) || [];
    return message;
  },
  fromAmino(object: LoopBackMsgsAmino): LoopBackMsgs {
    const message = createBaseLoopBackMsgs();
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LoopBackMsgs, useInterfaces: boolean = true): LoopBackMsgsAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object: LoopBackMsgsAminoMsg): LoopBackMsgs {
    return LoopBackMsgs.fromAmino(object.value);
  },
  fromProtoMsg(message: LoopBackMsgsProtoMsg, useInterfaces: boolean = true): LoopBackMsgs {
    return LoopBackMsgs.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LoopBackMsgs): Uint8Array {
    return LoopBackMsgs.encode(message).finish();
  },
  toProtoMsg(message: LoopBackMsgs): LoopBackMsgsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.LoopBackMsgs",
      value: LoopBackMsgs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LoopBackMsgs.typeUrl, LoopBackMsgs);
function createBaseLoopBackTransfer(): LoopBackTransfer {
  return {
    from: "",
    to: "",
    amount: Coin.fromPartial({}),
    memo: ""
  };
}
export const LoopBackTransfer = {
  typeUrl: "/pryzm.icstaking.v1.LoopBackTransfer",
  is(o: any): o is LoopBackTransfer {
    return o && (o.$typeUrl === LoopBackTransfer.typeUrl || typeof o.from === "string" && typeof o.to === "string" && Coin.is(o.amount) && typeof o.memo === "string");
  },
  isSDK(o: any): o is LoopBackTransferSDKType {
    return o && (o.$typeUrl === LoopBackTransfer.typeUrl || typeof o.from === "string" && typeof o.to === "string" && Coin.isSDK(o.amount) && typeof o.memo === "string");
  },
  isAmino(o: any): o is LoopBackTransferAmino {
    return o && (o.$typeUrl === LoopBackTransfer.typeUrl || typeof o.from === "string" && typeof o.to === "string" && Coin.isAmino(o.amount) && typeof o.memo === "string");
  },
  encode(message: LoopBackTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LoopBackTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoopBackTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LoopBackTransfer {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      memo: isSet(object.memo) ? String(object.memo) : ""
    };
  },
  toJSON(message: LoopBackTransfer): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.memo !== undefined && (obj.memo = message.memo);
    return obj;
  },
  fromPartial(object: Partial<LoopBackTransfer>): LoopBackTransfer {
    const message = createBaseLoopBackTransfer();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object: LoopBackTransferAmino): LoopBackTransfer {
    const message = createBaseLoopBackTransfer();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message: LoopBackTransfer, useInterfaces: boolean = true): LoopBackTransferAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    return obj;
  },
  fromAminoMsg(object: LoopBackTransferAminoMsg): LoopBackTransfer {
    return LoopBackTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: LoopBackTransferProtoMsg, useInterfaces: boolean = true): LoopBackTransfer {
    return LoopBackTransfer.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LoopBackTransfer): Uint8Array {
    return LoopBackTransfer.encode(message).finish();
  },
  toProtoMsg(message: LoopBackTransfer): LoopBackTransferProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.LoopBackTransfer",
      value: LoopBackTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LoopBackTransfer.typeUrl, LoopBackTransfer);