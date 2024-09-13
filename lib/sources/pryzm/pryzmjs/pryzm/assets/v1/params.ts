import { FeeRatios, FeeRatiosAmino, FeeRatiosSDKType } from "./refractable_asset";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  defaultFeeRatios: FeeRatios;
  /** the list of admin addresses, able to register new assets or disable an existing asset */
  admins: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  default_fee_ratios: FeeRatiosAmino;
  /** the list of admin addresses, able to register new assets or disable an existing asset */
  admins: string[];
}
export interface ParamsAminoMsg {
  type: "/pryzm.assets.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  default_fee_ratios: FeeRatiosSDKType;
  admins: string[];
}
function createBaseParams(): Params {
  return {
    defaultFeeRatios: FeeRatios.fromPartial({}),
    admins: []
  };
}
export const Params = {
  typeUrl: "/pryzm.assets.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || FeeRatios.is(o.defaultFeeRatios) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || FeeRatios.isSDK(o.default_fee_ratios) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || FeeRatios.isAmino(o.default_fee_ratios) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultFeeRatios !== undefined) {
      FeeRatios.encode(message.defaultFeeRatios, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.admins) {
      writer.uint32(18).string(v!);
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
          message.defaultFeeRatios = FeeRatios.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.admins.push(reader.string());
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
      defaultFeeRatios: isSet(object.defaultFeeRatios) ? FeeRatios.fromJSON(object.defaultFeeRatios) : undefined,
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.defaultFeeRatios !== undefined && (obj.defaultFeeRatios = message.defaultFeeRatios ? FeeRatios.toJSON(message.defaultFeeRatios) : undefined);
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.defaultFeeRatios = object.defaultFeeRatios !== undefined && object.defaultFeeRatios !== null ? FeeRatios.fromPartial(object.defaultFeeRatios) : undefined;
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.default_fee_ratios !== undefined && object.default_fee_ratios !== null) {
      message.defaultFeeRatios = FeeRatios.fromAmino(object.default_fee_ratios);
    }
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.default_fee_ratios = message.defaultFeeRatios ? FeeRatios.toAmino(message.defaultFeeRatios, useInterfaces) : undefined;
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = message.admins;
    }
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
      typeUrl: "/pryzm.assets.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);