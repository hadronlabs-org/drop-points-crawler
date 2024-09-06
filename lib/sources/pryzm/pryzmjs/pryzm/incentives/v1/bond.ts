import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface BondRewardToken {
  denom: string;
  pendingAmount: string;
  userIndex: string;
}
export interface BondRewardTokenProtoMsg {
  typeUrl: "/pryzm.incentives.v1.BondRewardToken";
  value: Uint8Array;
}
export interface BondRewardTokenAmino {
  denom?: string;
  pending_amount?: string;
  user_index?: string;
}
export interface BondRewardTokenAminoMsg {
  type: "/pryzm.incentives.v1.BondRewardToken";
  value: BondRewardTokenAmino;
}
export interface BondRewardTokenSDKType {
  denom: string;
  pending_amount: string;
  user_index: string;
}
export interface Bond {
  address: string;
  token: Coin;
  rewards: BondRewardToken[];
}
export interface BondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.Bond";
  value: Uint8Array;
}
export interface BondAmino {
  address?: string;
  token?: CoinAmino;
  rewards?: BondRewardTokenAmino[];
}
export interface BondAminoMsg {
  type: "/pryzm.incentives.v1.Bond";
  value: BondAmino;
}
export interface BondSDKType {
  address: string;
  token: CoinSDKType;
  rewards: BondRewardTokenSDKType[];
}
function createBaseBondRewardToken(): BondRewardToken {
  return {
    denom: "",
    pendingAmount: "",
    userIndex: ""
  };
}
export const BondRewardToken = {
  typeUrl: "/pryzm.incentives.v1.BondRewardToken",
  is(o: any): o is BondRewardToken {
    return o && (o.$typeUrl === BondRewardToken.typeUrl || typeof o.denom === "string" && typeof o.pendingAmount === "string" && typeof o.userIndex === "string");
  },
  isSDK(o: any): o is BondRewardTokenSDKType {
    return o && (o.$typeUrl === BondRewardToken.typeUrl || typeof o.denom === "string" && typeof o.pending_amount === "string" && typeof o.user_index === "string");
  },
  isAmino(o: any): o is BondRewardTokenAmino {
    return o && (o.$typeUrl === BondRewardToken.typeUrl || typeof o.denom === "string" && typeof o.pending_amount === "string" && typeof o.user_index === "string");
  },
  encode(message: BondRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pendingAmount !== "") {
      writer.uint32(18).string(message.pendingAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.userIndex, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BondRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.pendingAmount = reader.string();
          break;
        case 3:
          message.userIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pendingAmount: isSet(object.pendingAmount) ? String(object.pendingAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : ""
    };
  },
  toJSON(message: BondRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pendingAmount !== undefined && (obj.pendingAmount = message.pendingAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    return obj;
  },
  fromPartial(object: Partial<BondRewardToken>): BondRewardToken {
    const message = createBaseBondRewardToken();
    message.denom = object.denom ?? "";
    message.pendingAmount = object.pendingAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    return message;
  },
  fromAmino(object: BondRewardTokenAmino): BondRewardToken {
    const message = createBaseBondRewardToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.pending_amount !== undefined && object.pending_amount !== null) {
      message.pendingAmount = object.pending_amount;
    }
    if (object.user_index !== undefined && object.user_index !== null) {
      message.userIndex = object.user_index;
    }
    return message;
  },
  toAmino(message: BondRewardToken, useInterfaces: boolean = true): BondRewardTokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.pending_amount = message.pendingAmount === "" ? undefined : message.pendingAmount;
    obj.user_index = padDecimal(message.userIndex) === "" ? undefined : padDecimal(message.userIndex);
    return obj;
  },
  fromAminoMsg(object: BondRewardTokenAminoMsg): BondRewardToken {
    return BondRewardToken.fromAmino(object.value);
  },
  fromProtoMsg(message: BondRewardTokenProtoMsg, useInterfaces: boolean = true): BondRewardToken {
    return BondRewardToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BondRewardToken): Uint8Array {
    return BondRewardToken.encode(message).finish();
  },
  toProtoMsg(message: BondRewardToken): BondRewardTokenProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.BondRewardToken",
      value: BondRewardToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BondRewardToken.typeUrl, BondRewardToken);
function createBaseBond(): Bond {
  return {
    address: "",
    token: Coin.fromPartial({}),
    rewards: []
  };
}
export const Bond = {
  typeUrl: "/pryzm.incentives.v1.Bond",
  is(o: any): o is Bond {
    return o && (o.$typeUrl === Bond.typeUrl || typeof o.address === "string" && Coin.is(o.token) && Array.isArray(o.rewards) && (!o.rewards.length || BondRewardToken.is(o.rewards[0])));
  },
  isSDK(o: any): o is BondSDKType {
    return o && (o.$typeUrl === Bond.typeUrl || typeof o.address === "string" && Coin.isSDK(o.token) && Array.isArray(o.rewards) && (!o.rewards.length || BondRewardToken.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is BondAmino {
    return o && (o.$typeUrl === Bond.typeUrl || typeof o.address === "string" && Coin.isAmino(o.token) && Array.isArray(o.rewards) && (!o.rewards.length || BondRewardToken.isAmino(o.rewards[0])));
  },
  encode(message: Bond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewards) {
      BondRewardToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Bond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.token = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.rewards.push(BondRewardToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bond {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => BondRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: Bond): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? BondRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Bond>): Bond {
    const message = createBaseBond();
    message.address = object.address ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.rewards = object.rewards?.map(e => BondRewardToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BondAmino): Bond {
    const message = createBaseBond();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    message.rewards = object.rewards?.map(e => BondRewardToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Bond, useInterfaces: boolean = true): BondAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.token = message.token ? Coin.toAmino(message.token, useInterfaces) : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? BondRewardToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: BondAminoMsg): Bond {
    return Bond.fromAmino(object.value);
  },
  fromProtoMsg(message: BondProtoMsg, useInterfaces: boolean = true): Bond {
    return Bond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Bond): Uint8Array {
    return Bond.encode(message).finish();
  },
  toProtoMsg(message: Bond): BondProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.Bond",
      value: Bond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Bond.typeUrl, Bond);