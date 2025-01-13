import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * This value represents the percentage that needs to be sent to the
   * insurance fund in order to restake a certain amount of locked tokens.
   * For example, if this value is 2%, a user must send 2 tokens to
   * the insurance fund to restake 100 locked tokens
   */
  insurancePercentage: string;
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgBurnLockedRepresentation.
   */
  burners: string[];
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgMintLockedRepresentation.
   */
  minters: string[];
  /**
   * TrustedDelegates represents the list of users who are allowed to deposit
   * on the insurance fund.
   */
  trustedDelegates: string[];
  /**
   * List of channels from which is allowed to receive deposits to the insurance
   * fund.
   */
  allowedChannels: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * This value represents the percentage that needs to be sent to the
   * insurance fund in order to restake a certain amount of locked tokens.
   * For example, if this value is 2%, a user must send 2 tokens to
   * the insurance fund to restake 100 locked tokens
   */
  insurance_percentage?: string;
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgBurnLockedRepresentation.
   */
  burners?: string[];
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgMintLockedRepresentation.
   */
  minters?: string[];
  /**
   * TrustedDelegates represents the list of users who are allowed to deposit
   * on the insurance fund.
   */
  trusted_delegates?: string[];
  /**
   * List of channels from which is allowed to receive deposits to the insurance
   * fund.
   */
  allowed_channels?: string[];
}
export interface ParamsAminoMsg {
  type: "/milkyway.liquidvesting.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  insurance_percentage: string;
  burners: string[];
  minters: string[];
  trusted_delegates: string[];
  allowed_channels: string[];
}
function createBaseParams(): Params {
  return {
    insurancePercentage: "",
    burners: [],
    minters: [],
    trustedDelegates: [],
    allowedChannels: []
  };
}
export const Params = {
  typeUrl: "/milkyway.liquidvesting.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.insurancePercentage !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.insurancePercentage, 18).atomics);
    }
    for (const v of message.burners) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.minters) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.trustedDelegates) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedChannels) {
      writer.uint32(42).string(v!);
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
          message.insurancePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.burners.push(reader.string());
          break;
        case 3:
          message.minters.push(reader.string());
          break;
        case 4:
          message.trustedDelegates.push(reader.string());
          break;
        case 5:
          message.allowedChannels.push(reader.string());
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
    message.insurancePercentage = object.insurancePercentage ?? "";
    message.burners = object.burners?.map(e => e) || [];
    message.minters = object.minters?.map(e => e) || [];
    message.trustedDelegates = object.trustedDelegates?.map(e => e) || [];
    message.allowedChannels = object.allowedChannels?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.insurance_percentage !== undefined && object.insurance_percentage !== null) {
      message.insurancePercentage = object.insurance_percentage;
    }
    message.burners = object.burners?.map(e => e) || [];
    message.minters = object.minters?.map(e => e) || [];
    message.trustedDelegates = object.trusted_delegates?.map(e => e) || [];
    message.allowedChannels = object.allowed_channels?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.insurance_percentage = message.insurancePercentage === "" ? undefined : message.insurancePercentage;
    if (message.burners) {
      obj.burners = message.burners.map(e => e);
    } else {
      obj.burners = message.burners;
    }
    if (message.minters) {
      obj.minters = message.minters.map(e => e);
    } else {
      obj.minters = message.minters;
    }
    if (message.trustedDelegates) {
      obj.trusted_delegates = message.trustedDelegates.map(e => e);
    } else {
      obj.trusted_delegates = message.trustedDelegates;
    }
    if (message.allowedChannels) {
      obj.allowed_channels = message.allowedChannels.map(e => e);
    } else {
      obj.allowed_channels = message.allowedChannels;
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
      typeUrl: "/milkyway.liquidvesting.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};