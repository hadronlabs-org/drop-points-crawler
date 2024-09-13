import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgBond {
  creator: string;
  amount: Coin;
}
export interface MsgBondProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgBond";
  value: Uint8Array;
}
export interface MsgBondAmino {
  creator?: string;
  amount?: CoinAmino;
}
export interface MsgBondAminoMsg {
  type: "pryzm/ystaking/v1/Bond";
  value: MsgBondAmino;
}
export interface MsgBondSDKType {
  creator: string;
  amount: CoinSDKType;
}
export interface MsgBondResponse {
  totalBondedAmount: Coin;
}
export interface MsgBondResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgBondResponse";
  value: Uint8Array;
}
export interface MsgBondResponseAmino {
  total_bonded_amount?: CoinAmino;
}
export interface MsgBondResponseAminoMsg {
  type: "/pryzm.ystaking.v1.MsgBondResponse";
  value: MsgBondResponseAmino;
}
export interface MsgBondResponseSDKType {
  total_bonded_amount: CoinSDKType;
}
export interface MsgUnbond {
  creator: string;
  amount: Coin;
}
export interface MsgUnbondProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgUnbond";
  value: Uint8Array;
}
export interface MsgUnbondAmino {
  creator?: string;
  amount?: CoinAmino;
}
export interface MsgUnbondAminoMsg {
  type: "pryzm/ystaking/v1/Unbond";
  value: MsgUnbondAmino;
}
export interface MsgUnbondSDKType {
  creator: string;
  amount: CoinSDKType;
}
export interface MsgUnbondResponse {
  remainderBondedAmount: Coin;
  accruedReward: Coin;
  fee: Coin;
}
export interface MsgUnbondResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgUnbondResponse";
  value: Uint8Array;
}
export interface MsgUnbondResponseAmino {
  remainder_bonded_amount?: CoinAmino;
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgUnbondResponseAminoMsg {
  type: "/pryzm.ystaking.v1.MsgUnbondResponse";
  value: MsgUnbondResponseAmino;
}
export interface MsgUnbondResponseSDKType {
  remainder_bonded_amount: CoinSDKType;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgClaimReward {
  creator: string;
  denom: string;
}
export interface MsgClaimRewardProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgClaimReward";
  value: Uint8Array;
}
export interface MsgClaimRewardAmino {
  creator?: string;
  denom?: string;
}
export interface MsgClaimRewardAminoMsg {
  type: "pryzm/ystaking/v1/ClaimReward";
  value: MsgClaimRewardAmino;
}
export interface MsgClaimRewardSDKType {
  creator: string;
  denom: string;
}
export interface MsgClaimRewardResponse {
  accruedReward: Coin;
  fee: Coin;
}
export interface MsgClaimRewardResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgClaimRewardResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardResponseAmino {
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgClaimRewardResponseAminoMsg {
  type: "/pryzm.ystaking.v1.MsgClaimRewardResponse";
  value: MsgClaimRewardResponseAmino;
}
export interface MsgClaimRewardResponseSDKType {
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgExitPool {
  creator: string;
  denom: string;
}
export interface MsgExitPoolProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgExitPool";
  value: Uint8Array;
}
export interface MsgExitPoolAmino {
  creator?: string;
  denom?: string;
}
export interface MsgExitPoolAminoMsg {
  type: "pryzm/ystaking/v1/ExitPool";
  value: MsgExitPoolAmino;
}
export interface MsgExitPoolSDKType {
  creator: string;
  denom: string;
}
export interface MsgExitPoolResponse {
  accruedReward: Coin;
  fee: Coin;
}
export interface MsgExitPoolResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.MsgExitPoolResponse";
  value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgExitPoolResponseAminoMsg {
  type: "/pryzm.ystaking.v1.MsgExitPoolResponse";
  value: MsgExitPoolResponseAmino;
}
export interface MsgExitPoolResponseSDKType {
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
function createBaseMsgBond(): MsgBond {
  return {
    creator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBond = {
  typeUrl: "/pryzm.ystaking.v1.MsgBond",
  aminoType: "pryzm/ystaking/v1/Bond",
  is(o: any): o is MsgBond {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgBondSDKType {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgBondAmino {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBond {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgBondAmino): MsgBond {
    const message = createBaseMsgBond();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgBond, useInterfaces: boolean = true): MsgBondAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBondAminoMsg): MsgBond {
    return MsgBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBond, useInterfaces: boolean = true): MsgBondAminoMsg {
    return {
      type: "pryzm/ystaking/v1/Bond",
      value: MsgBond.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgBondProtoMsg, useInterfaces: boolean = true): MsgBond {
    return MsgBond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBond): Uint8Array {
    return MsgBond.encode(message).finish();
  },
  toProtoMsg(message: MsgBond): MsgBondProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgBond",
      value: MsgBond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBond.typeUrl, MsgBond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBond.aminoType, MsgBond.typeUrl);
function createBaseMsgBondResponse(): MsgBondResponse {
  return {
    totalBondedAmount: Coin.fromPartial({})
  };
}
export const MsgBondResponse = {
  typeUrl: "/pryzm.ystaking.v1.MsgBondResponse",
  is(o: any): o is MsgBondResponse {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Coin.is(o.totalBondedAmount));
  },
  isSDK(o: any): o is MsgBondResponseSDKType {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Coin.isSDK(o.total_bonded_amount));
  },
  isAmino(o: any): o is MsgBondResponseAmino {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Coin.isAmino(o.total_bonded_amount));
  },
  encode(message: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBondedAmount !== undefined) {
      Coin.encode(message.totalBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBondedAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBondResponse {
    return {
      totalBondedAmount: isSet(object.totalBondedAmount) ? Coin.fromJSON(object.totalBondedAmount) : undefined
    };
  },
  toJSON(message: MsgBondResponse): unknown {
    const obj: any = {};
    message.totalBondedAmount !== undefined && (obj.totalBondedAmount = message.totalBondedAmount ? Coin.toJSON(message.totalBondedAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    message.totalBondedAmount = object.totalBondedAmount !== undefined && object.totalBondedAmount !== null ? Coin.fromPartial(object.totalBondedAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgBondResponseAmino): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    if (object.total_bonded_amount !== undefined && object.total_bonded_amount !== null) {
      message.totalBondedAmount = Coin.fromAmino(object.total_bonded_amount);
    }
    return message;
  },
  toAmino(message: MsgBondResponse, useInterfaces: boolean = true): MsgBondResponseAmino {
    const obj: any = {};
    obj.total_bonded_amount = message.totalBondedAmount ? Coin.toAmino(message.totalBondedAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBondResponseAminoMsg): MsgBondResponse {
    return MsgBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondResponseProtoMsg, useInterfaces: boolean = true): MsgBondResponse {
    return MsgBondResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgBondResponse): Uint8Array {
    return MsgBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondResponse): MsgBondResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgBondResponse",
      value: MsgBondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBondResponse.typeUrl, MsgBondResponse);
function createBaseMsgUnbond(): MsgUnbond {
  return {
    creator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgUnbond = {
  typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
  aminoType: "pryzm/ystaking/v1/Unbond",
  is(o: any): o is MsgUnbond {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgUnbondSDKType {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgUnbondAmino {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbond {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUnbond>): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgUnbondAmino): MsgUnbond {
    const message = createBaseMsgUnbond();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgUnbond, useInterfaces: boolean = true): MsgUnbondAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondAminoMsg): MsgUnbond {
    return MsgUnbond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbond, useInterfaces: boolean = true): MsgUnbondAminoMsg {
    return {
      type: "pryzm/ystaking/v1/Unbond",
      value: MsgUnbond.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUnbondProtoMsg, useInterfaces: boolean = true): MsgUnbond {
    return MsgUnbond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnbond): Uint8Array {
    return MsgUnbond.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbond): MsgUnbondProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgUnbond",
      value: MsgUnbond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbond.typeUrl, MsgUnbond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnbond.aminoType, MsgUnbond.typeUrl);
function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return {
    remainderBondedAmount: Coin.fromPartial({}),
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgUnbondResponse = {
  typeUrl: "/pryzm.ystaking.v1.MsgUnbondResponse",
  is(o: any): o is MsgUnbondResponse {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Coin.is(o.remainderBondedAmount) && Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgUnbondResponseSDKType {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Coin.isSDK(o.remainder_bonded_amount) && Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgUnbondResponseAmino {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Coin.isAmino(o.remainder_bonded_amount) && Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: MsgUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainderBondedAmount !== undefined) {
      Coin.encode(message.remainderBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnbondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remainderBondedAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.accruedReward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbondResponse {
    return {
      remainderBondedAmount: isSet(object.remainderBondedAmount) ? Coin.fromJSON(object.remainderBondedAmount) : undefined,
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgUnbondResponse): unknown {
    const obj: any = {};
    message.remainderBondedAmount !== undefined && (obj.remainderBondedAmount = message.remainderBondedAmount ? Coin.toJSON(message.remainderBondedAmount) : undefined);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    message.remainderBondedAmount = object.remainderBondedAmount !== undefined && object.remainderBondedAmount !== null ? Coin.fromPartial(object.remainderBondedAmount) : undefined;
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgUnbondResponseAmino): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    if (object.remainder_bonded_amount !== undefined && object.remainder_bonded_amount !== null) {
      message.remainderBondedAmount = Coin.fromAmino(object.remainder_bonded_amount);
    }
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgUnbondResponse, useInterfaces: boolean = true): MsgUnbondResponseAmino {
    const obj: any = {};
    obj.remainder_bonded_amount = message.remainderBondedAmount ? Coin.toAmino(message.remainderBondedAmount, useInterfaces) : undefined;
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondResponseAminoMsg): MsgUnbondResponse {
    return MsgUnbondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondResponseProtoMsg, useInterfaces: boolean = true): MsgUnbondResponse {
    return MsgUnbondResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnbondResponse): Uint8Array {
    return MsgUnbondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondResponse): MsgUnbondResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgUnbondResponse",
      value: MsgUnbondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbondResponse.typeUrl, MsgUnbondResponse);
function createBaseMsgClaimReward(): MsgClaimReward {
  return {
    creator: "",
    denom: ""
  };
}
export const MsgClaimReward = {
  typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
  aminoType: "pryzm/ystaking/v1/ClaimReward",
  is(o: any): o is MsgClaimReward {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgClaimRewardSDKType {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgClaimRewardAmino {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimReward>): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardAmino): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgClaimReward, useInterfaces: boolean = true): MsgClaimRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardAminoMsg): MsgClaimReward {
    return MsgClaimReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimReward, useInterfaces: boolean = true): MsgClaimRewardAminoMsg {
    return {
      type: "pryzm/ystaking/v1/ClaimReward",
      value: MsgClaimReward.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgClaimRewardProtoMsg, useInterfaces: boolean = true): MsgClaimReward {
    return MsgClaimReward.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimReward): Uint8Array {
    return MsgClaimReward.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimReward): MsgClaimRewardProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgClaimReward",
      value: MsgClaimReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimReward.typeUrl, MsgClaimReward);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimReward.aminoType, MsgClaimReward.typeUrl);
function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return {
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgClaimRewardResponse = {
  typeUrl: "/pryzm.ystaking.v1.MsgClaimRewardResponse",
  is(o: any): o is MsgClaimRewardResponse {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgClaimRewardResponseSDKType {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgClaimRewardResponseAmino {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: MsgClaimRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimRewardResponse {
    return {
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimRewardResponseAmino): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgClaimRewardResponse, useInterfaces: boolean = true): MsgClaimRewardResponseAmino {
    const obj: any = {};
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardResponseAminoMsg): MsgClaimRewardResponse {
    return MsgClaimRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardResponseProtoMsg, useInterfaces: boolean = true): MsgClaimRewardResponse {
    return MsgClaimRewardResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimRewardResponse): Uint8Array {
    return MsgClaimRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardResponse): MsgClaimRewardResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgClaimRewardResponse",
      value: MsgClaimRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimRewardResponse.typeUrl, MsgClaimRewardResponse);
function createBaseMsgExitPool(): MsgExitPool {
  return {
    creator: "",
    denom: ""
  };
}
export const MsgExitPool = {
  typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
  aminoType: "pryzm/ystaking/v1/ExitPool",
  is(o: any): o is MsgExitPool {
    return o && (o.$typeUrl === MsgExitPool.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgExitPoolSDKType {
    return o && (o.$typeUrl === MsgExitPool.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgExitPoolAmino {
    return o && (o.$typeUrl === MsgExitPool.typeUrl || typeof o.creator === "string" && typeof o.denom === "string");
  },
  encode(message: MsgExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgExitPool>): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgExitPoolAmino): MsgExitPool {
    const message = createBaseMsgExitPool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgExitPool, useInterfaces: boolean = true): MsgExitPoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool {
    return MsgExitPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPool, useInterfaces: boolean = true): MsgExitPoolAminoMsg {
    return {
      type: "pryzm/ystaking/v1/ExitPool",
      value: MsgExitPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgExitPoolProtoMsg, useInterfaces: boolean = true): MsgExitPool {
    return MsgExitPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitPool): Uint8Array {
    return MsgExitPool.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgExitPool",
      value: MsgExitPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitPool.typeUrl, MsgExitPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExitPool.aminoType, MsgExitPool.typeUrl);
function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return {
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgExitPoolResponse = {
  typeUrl: "/pryzm.ystaking.v1.MsgExitPoolResponse",
  is(o: any): o is MsgExitPoolResponse {
    return o && (o.$typeUrl === MsgExitPoolResponse.typeUrl || Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgExitPoolResponseSDKType {
    return o && (o.$typeUrl === MsgExitPoolResponse.typeUrl || Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgExitPoolResponseAmino {
    return o && (o.$typeUrl === MsgExitPoolResponse.typeUrl || Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: MsgExitPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgExitPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedReward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPoolResponse {
    return {
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgExitPoolResponse, useInterfaces: boolean = true): MsgExitPoolResponseAmino {
    const obj: any = {};
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExitPoolResponseProtoMsg, useInterfaces: boolean = true): MsgExitPoolResponse {
    return MsgExitPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgExitPoolResponse): Uint8Array {
    return MsgExitPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.MsgExitPoolResponse",
      value: MsgExitPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExitPoolResponse.typeUrl, MsgExitPoolResponse);