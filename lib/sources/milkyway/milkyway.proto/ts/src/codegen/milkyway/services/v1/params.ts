import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * ServiceRegistrationFee defines the fee to register a new service.
   * The fee is drawn from the MsgRegisterService sender's account,
   * and transferred to the community pool.
   */
  serviceRegistrationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/milkyway.services.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * ServiceRegistrationFee defines the fee to register a new service.
   * The fee is drawn from the MsgRegisterService sender's account,
   * and transferred to the community pool.
   */
  service_registration_fee?: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/milkyway.services.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  service_registration_fee: CoinSDKType[];
}
function createBaseParams(): Params {
  return {
    serviceRegistrationFee: []
  };
}
export const Params = {
  typeUrl: "/milkyway.services.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.serviceRegistrationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.serviceRegistrationFee.push(Coin.decode(reader, reader.uint32()));
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
    message.serviceRegistrationFee = object.serviceRegistrationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.serviceRegistrationFee = object.service_registration_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.serviceRegistrationFee) {
      obj.service_registration_fee = message.serviceRegistrationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.service_registration_fee = message.serviceRegistrationFee;
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
      typeUrl: "/milkyway.services.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};