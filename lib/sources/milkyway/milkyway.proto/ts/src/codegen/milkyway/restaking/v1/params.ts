import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * UnbondingTime represents the time that will take for assets to be unbonded
   * after the user initiates an unbonding request. This will be applied to all
   * types of restaking: pool, operator and service restaking.
   */
  unbondingTime: bigint;
  /**
   * AllowedDenoms represents the list of denoms allowed for restaking
   * and that will be considered when computing rewards.
   */
  allowedDenoms: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/milkyway.restaking.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * UnbondingTime represents the time that will take for assets to be unbonded
   * after the user initiates an unbonding request. This will be applied to all
   * types of restaking: pool, operator and service restaking.
   */
  unbonding_time?: string;
  /**
   * AllowedDenoms represents the list of denoms allowed for restaking
   * and that will be considered when computing rewards.
   */
  allowed_denoms?: string[];
}
export interface ParamsAminoMsg {
  type: "/milkyway.restaking.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  unbonding_time: bigint;
  allowed_denoms: string[];
}
function createBaseParams(): Params {
  return {
    unbondingTime: BigInt(0),
    allowedDenoms: []
  };
}
export const Params = {
  typeUrl: "/milkyway.restaking.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingTime !== BigInt(0)) {
      writer.uint32(8).int64(message.unbondingTime);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = reader.int64();
          break;
        case 2:
          message.allowedDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? BigInt(object.unbondingTime.toString()) : BigInt(0);
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = BigInt(object.unbonding_time);
    }
    message.allowedDenoms = object.allowed_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.unbonding_time = message.unbondingTime !== BigInt(0) ? message.unbondingTime?.toString() : undefined;
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/milkyway.restaking.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};