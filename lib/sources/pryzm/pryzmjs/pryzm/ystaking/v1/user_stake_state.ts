import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface UserStakeState {
  address: string;
  assetId: string;
  maturitySymbol: string;
  bondedAmount: string;
  userIndex: string;
  pendingReward: string;
}
export interface UserStakeStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.UserStakeState";
  value: Uint8Array;
}
export interface UserStakeStateAmino {
  address?: string;
  asset_id?: string;
  maturity_symbol?: string;
  bonded_amount?: string;
  user_index?: string;
  pending_reward?: string;
}
export interface UserStakeStateAminoMsg {
  type: "/pryzm.ystaking.v1.UserStakeState";
  value: UserStakeStateAmino;
}
export interface UserStakeStateSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
  bonded_amount: string;
  user_index: string;
  pending_reward: string;
}
function createBaseUserStakeState(): UserStakeState {
  return {
    address: "",
    assetId: "",
    maturitySymbol: "",
    bondedAmount: "",
    userIndex: "",
    pendingReward: ""
  };
}
export const UserStakeState = {
  typeUrl: "/pryzm.ystaking.v1.UserStakeState",
  is(o: any): o is UserStakeState {
    return o && (o.$typeUrl === UserStakeState.typeUrl || typeof o.address === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string" && typeof o.bondedAmount === "string" && typeof o.userIndex === "string" && typeof o.pendingReward === "string");
  },
  isSDK(o: any): o is UserStakeStateSDKType {
    return o && (o.$typeUrl === UserStakeState.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string" && typeof o.bonded_amount === "string" && typeof o.user_index === "string" && typeof o.pending_reward === "string");
  },
  isAmino(o: any): o is UserStakeStateAmino {
    return o && (o.$typeUrl === UserStakeState.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string" && typeof o.bonded_amount === "string" && typeof o.user_index === "string" && typeof o.pending_reward === "string");
  },
  encode(message: UserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(34).string(message.bondedAmount);
    }
    if (message.userIndex !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.userIndex, 18).atomics);
    }
    if (message.pendingReward !== "") {
      writer.uint32(50).string(message.pendingReward);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStakeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        case 4:
          message.bondedAmount = reader.string();
          break;
        case 5:
          message.userIndex = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.pendingReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserStakeState {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : "",
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : "",
      userIndex: isSet(object.userIndex) ? String(object.userIndex) : "",
      pendingReward: isSet(object.pendingReward) ? String(object.pendingReward) : ""
    };
  },
  toJSON(message: UserStakeState): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    message.userIndex !== undefined && (obj.userIndex = message.userIndex);
    message.pendingReward !== undefined && (obj.pendingReward = message.pendingReward);
    return obj;
  },
  fromPartial(object: Partial<UserStakeState>): UserStakeState {
    const message = createBaseUserStakeState();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    message.bondedAmount = object.bondedAmount ?? "";
    message.userIndex = object.userIndex ?? "";
    message.pendingReward = object.pendingReward ?? "";
    return message;
  },
  fromAmino(object: UserStakeStateAmino): UserStakeState {
    const message = createBaseUserStakeState();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    if (object.bonded_amount !== undefined && object.bonded_amount !== null) {
      message.bondedAmount = object.bonded_amount;
    }
    if (object.user_index !== undefined && object.user_index !== null) {
      message.userIndex = object.user_index;
    }
    if (object.pending_reward !== undefined && object.pending_reward !== null) {
      message.pendingReward = object.pending_reward;
    }
    return message;
  },
  toAmino(message: UserStakeState, useInterfaces: boolean = true): UserStakeStateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    obj.bonded_amount = message.bondedAmount === "" ? undefined : message.bondedAmount;
    obj.user_index = padDecimal(message.userIndex) === "" ? undefined : padDecimal(message.userIndex);
    obj.pending_reward = message.pendingReward === "" ? undefined : message.pendingReward;
    return obj;
  },
  fromAminoMsg(object: UserStakeStateAminoMsg): UserStakeState {
    return UserStakeState.fromAmino(object.value);
  },
  fromProtoMsg(message: UserStakeStateProtoMsg, useInterfaces: boolean = true): UserStakeState {
    return UserStakeState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserStakeState): Uint8Array {
    return UserStakeState.encode(message).finish();
  },
  toProtoMsg(message: UserStakeState): UserStakeStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.UserStakeState",
      value: UserStakeState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserStakeState.typeUrl, UserStakeState);