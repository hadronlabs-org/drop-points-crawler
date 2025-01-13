import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the operators module. */
export interface Params {
  /**
   * OperatorRegistrationFee represents the fee that an operator must pay in
   * order to register itself with the network.
   * The fee is drawn from the MsgRegisterOperator sender's account and
   * transferred to the community pool.
   */
  operatorRegistrationFee: Coin[];
  /**
   * DeactivationTime represents the amount of time that will pass between
   * the time that an operator signals its willingness to deactivate and the
   * time that it actually becomes inactive.
   */
  deactivationTime: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/milkyway.operators.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the operators module. */
export interface ParamsAmino {
  /**
   * OperatorRegistrationFee represents the fee that an operator must pay in
   * order to register itself with the network.
   * The fee is drawn from the MsgRegisterOperator sender's account and
   * transferred to the community pool.
   */
  operator_registration_fee?: CoinAmino[];
  /**
   * DeactivationTime represents the amount of time that will pass between
   * the time that an operator signals its willingness to deactivate and the
   * time that it actually becomes inactive.
   */
  deactivation_time?: string;
}
export interface ParamsAminoMsg {
  type: "/milkyway.operators.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the operators module. */
export interface ParamsSDKType {
  operator_registration_fee: CoinSDKType[];
  deactivation_time: bigint;
}
function createBaseParams(): Params {
  return {
    operatorRegistrationFee: [],
    deactivationTime: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/milkyway.operators.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operatorRegistrationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.deactivationTime !== BigInt(0)) {
      writer.uint32(16).int64(message.deactivationTime);
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
          message.operatorRegistrationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.deactivationTime = reader.int64();
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
    message.operatorRegistrationFee = object.operatorRegistrationFee?.map(e => Coin.fromPartial(e)) || [];
    message.deactivationTime = object.deactivationTime !== undefined && object.deactivationTime !== null ? BigInt(object.deactivationTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.operatorRegistrationFee = object.operator_registration_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.deactivation_time !== undefined && object.deactivation_time !== null) {
      message.deactivationTime = BigInt(object.deactivation_time);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.operatorRegistrationFee) {
      obj.operator_registration_fee = message.operatorRegistrationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.operator_registration_fee = message.operatorRegistrationFee;
    }
    obj.deactivation_time = message.deactivationTime !== BigInt(0) ? message.deactivationTime?.toString() : undefined;
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
      typeUrl: "/milkyway.operators.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};