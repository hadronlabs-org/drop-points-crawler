import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface ScheduleOrder {
  timeMillis: bigint;
  orderId: bigint;
}
export interface ScheduleOrderProtoMsg {
  typeUrl: "/pryzm.amm.v1.ScheduleOrder";
  value: Uint8Array;
}
export interface ScheduleOrderAmino {
  time_millis?: string;
  order_id?: string;
}
export interface ScheduleOrderAminoMsg {
  type: "/pryzm.amm.v1.ScheduleOrder";
  value: ScheduleOrderAmino;
}
export interface ScheduleOrderSDKType {
  time_millis: bigint;
  order_id: bigint;
}
function createBaseScheduleOrder(): ScheduleOrder {
  return {
    timeMillis: BigInt(0),
    orderId: BigInt(0)
  };
}
export const ScheduleOrder = {
  typeUrl: "/pryzm.amm.v1.ScheduleOrder",
  is(o: any): o is ScheduleOrder {
    return o && (o.$typeUrl === ScheduleOrder.typeUrl || typeof o.timeMillis === "bigint" && typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is ScheduleOrderSDKType {
    return o && (o.$typeUrl === ScheduleOrder.typeUrl || typeof o.time_millis === "bigint" && typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is ScheduleOrderAmino {
    return o && (o.$typeUrl === ScheduleOrder.typeUrl || typeof o.time_millis === "bigint" && typeof o.order_id === "bigint");
  },
  encode(message: ScheduleOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeMillis !== BigInt(0)) {
      writer.uint32(8).int64(message.timeMillis);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ScheduleOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeMillis = reader.int64();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ScheduleOrder {
    return {
      timeMillis: isSet(object.timeMillis) ? BigInt(object.timeMillis.toString()) : BigInt(0),
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ScheduleOrder): unknown {
    const obj: any = {};
    message.timeMillis !== undefined && (obj.timeMillis = (message.timeMillis || BigInt(0)).toString());
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ScheduleOrder>): ScheduleOrder {
    const message = createBaseScheduleOrder();
    message.timeMillis = object.timeMillis !== undefined && object.timeMillis !== null ? BigInt(object.timeMillis.toString()) : BigInt(0);
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ScheduleOrderAmino): ScheduleOrder {
    const message = createBaseScheduleOrder();
    if (object.time_millis !== undefined && object.time_millis !== null) {
      message.timeMillis = BigInt(object.time_millis);
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: ScheduleOrder, useInterfaces: boolean = true): ScheduleOrderAmino {
    const obj: any = {};
    obj.time_millis = message.timeMillis ? message.timeMillis.toString() : undefined;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ScheduleOrderAminoMsg): ScheduleOrder {
    return ScheduleOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduleOrderProtoMsg, useInterfaces: boolean = true): ScheduleOrder {
    return ScheduleOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ScheduleOrder): Uint8Array {
    return ScheduleOrder.encode(message).finish();
  },
  toProtoMsg(message: ScheduleOrder): ScheduleOrderProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.ScheduleOrder",
      value: ScheduleOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ScheduleOrder.typeUrl, ScheduleOrder);