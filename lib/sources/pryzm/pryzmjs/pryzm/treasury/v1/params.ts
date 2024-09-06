import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  gasFeeTakeRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.treasury.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  gas_fee_take_ratio?: string;
}
export interface ParamsAminoMsg {
  type: "/pryzm.treasury.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  gas_fee_take_ratio: string;
}
function createBaseParams(): Params {
  return {
    gasFeeTakeRatio: ""
  };
}
export const Params = {
  typeUrl: "/pryzm.treasury.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.gasFeeTakeRatio === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.gas_fee_take_ratio === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.gas_fee_take_ratio === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasFeeTakeRatio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.gasFeeTakeRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasFeeTakeRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      gasFeeTakeRatio: isSet(object.gasFeeTakeRatio) ? String(object.gasFeeTakeRatio) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gasFeeTakeRatio !== undefined && (obj.gasFeeTakeRatio = message.gasFeeTakeRatio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gasFeeTakeRatio = object.gasFeeTakeRatio ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.gas_fee_take_ratio !== undefined && object.gas_fee_take_ratio !== null) {
      message.gasFeeTakeRatio = object.gas_fee_take_ratio;
    }
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.gas_fee_take_ratio = padDecimal(message.gasFeeTakeRatio) === "" ? undefined : padDecimal(message.gasFeeTakeRatio);
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);