import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFund {
  /** Amount of coins deposited into the user's insurance fund. */
  balance: Coin[];
}
export interface UserInsuranceFundProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFund";
  value: Uint8Array;
}
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFundAmino {
  /** Amount of coins deposited into the user's insurance fund. */
  balance?: CoinAmino[];
}
export interface UserInsuranceFundAminoMsg {
  type: "/milkyway.liquidvesting.v1.UserInsuranceFund";
  value: UserInsuranceFundAmino;
}
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFundSDKType {
  balance: CoinSDKType[];
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoins {
  /** Address of who has delegated the coins. */
  delegatorAddress: string;
  /** CompletionTime is the unix time for unbonding completion. */
  completionTime: Date;
  /** Amount of coins to be burned from the delegator address. */
  amount: Coin[];
}
export interface BurnCoinsProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.BurnCoins";
  value: Uint8Array;
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoinsAmino {
  /** Address of who has delegated the coins. */
  delegator_address?: string;
  /** CompletionTime is the unix time for unbonding completion. */
  completion_time: string;
  /** Amount of coins to be burned from the delegator address. */
  amount?: CoinAmino[];
}
export interface BurnCoinsAminoMsg {
  type: "/milkyway.liquidvesting.v1.BurnCoins";
  value: BurnCoinsAmino;
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoinsSDKType {
  delegator_address: string;
  completion_time: Date;
  amount: CoinSDKType[];
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsList {
  data: BurnCoins[];
}
export interface BurnCoinsListProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.BurnCoinsList";
  value: Uint8Array;
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsListAmino {
  data: BurnCoinsAmino[];
}
export interface BurnCoinsListAminoMsg {
  type: "/milkyway.liquidvesting.v1.BurnCoinsList";
  value: BurnCoinsListAmino;
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsListSDKType {
  data: BurnCoinsSDKType[];
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntry {
  /** Address of who owns the insurance fund. */
  userAddress: string;
  /** Amount of coins deposited into the user's insurance fund. */
  balance: Coin[];
}
export interface UserInsuranceFundEntryProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry";
  value: Uint8Array;
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntryAmino {
  /** Address of who owns the insurance fund. */
  user_address?: string;
  /** Amount of coins deposited into the user's insurance fund. */
  balance?: CoinAmino[];
}
export interface UserInsuranceFundEntryAminoMsg {
  type: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry";
  value: UserInsuranceFundEntryAmino;
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntrySDKType {
  user_address: string;
  balance: CoinSDKType[];
}
function createBaseUserInsuranceFund(): UserInsuranceFund {
  return {
    balance: []
  };
}
export const UserInsuranceFund = {
  typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFund",
  encode(message: UserInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserInsuranceFund>): UserInsuranceFund {
    const message = createBaseUserInsuranceFund();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserInsuranceFundAmino): UserInsuranceFund {
    const message = createBaseUserInsuranceFund();
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserInsuranceFund): UserInsuranceFundAmino {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    return obj;
  },
  fromAminoMsg(object: UserInsuranceFundAminoMsg): UserInsuranceFund {
    return UserInsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: UserInsuranceFundProtoMsg): UserInsuranceFund {
    return UserInsuranceFund.decode(message.value);
  },
  toProto(message: UserInsuranceFund): Uint8Array {
    return UserInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: UserInsuranceFund): UserInsuranceFundProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFund",
      value: UserInsuranceFund.encode(message).finish()
    };
  }
};
function createBaseBurnCoins(): BurnCoins {
  return {
    delegatorAddress: "",
    completionTime: new Date(),
    amount: []
  };
}
export const BurnCoins = {
  typeUrl: "/milkyway.liquidvesting.v1.BurnCoins",
  encode(message: BurnCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnCoins>): BurnCoins {
    const message = createBaseBurnCoins();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.completionTime = object.completionTime ?? undefined;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BurnCoinsAmino): BurnCoins {
    const message = createBaseBurnCoins();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = fromTimestamp(Timestamp.fromAmino(object.completion_time));
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BurnCoins): BurnCoinsAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(toTimestamp(message.completionTime)) : new Date();
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: BurnCoinsAminoMsg): BurnCoins {
    return BurnCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnCoinsProtoMsg): BurnCoins {
    return BurnCoins.decode(message.value);
  },
  toProto(message: BurnCoins): Uint8Array {
    return BurnCoins.encode(message).finish();
  },
  toProtoMsg(message: BurnCoins): BurnCoinsProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.BurnCoins",
      value: BurnCoins.encode(message).finish()
    };
  }
};
function createBaseBurnCoinsList(): BurnCoinsList {
  return {
    data: []
  };
}
export const BurnCoinsList = {
  typeUrl: "/milkyway.liquidvesting.v1.BurnCoinsList",
  encode(message: BurnCoinsList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      BurnCoins.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnCoinsList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnCoinsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(BurnCoins.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BurnCoinsList>): BurnCoinsList {
    const message = createBaseBurnCoinsList();
    message.data = object.data?.map(e => BurnCoins.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BurnCoinsListAmino): BurnCoinsList {
    const message = createBaseBurnCoinsList();
    message.data = object.data?.map(e => BurnCoins.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BurnCoinsList): BurnCoinsListAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? BurnCoins.toAmino(e) : undefined);
    } else {
      obj.data = message.data;
    }
    return obj;
  },
  fromAminoMsg(object: BurnCoinsListAminoMsg): BurnCoinsList {
    return BurnCoinsList.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnCoinsListProtoMsg): BurnCoinsList {
    return BurnCoinsList.decode(message.value);
  },
  toProto(message: BurnCoinsList): Uint8Array {
    return BurnCoinsList.encode(message).finish();
  },
  toProtoMsg(message: BurnCoinsList): BurnCoinsListProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.BurnCoinsList",
      value: BurnCoinsList.encode(message).finish()
    };
  }
};
function createBaseUserInsuranceFundEntry(): UserInsuranceFundEntry {
  return {
    userAddress: "",
    balance: []
  };
}
export const UserInsuranceFundEntry = {
  typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry",
  encode(message: UserInsuranceFundEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFundEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInsuranceFundEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserInsuranceFundEntry>): UserInsuranceFundEntry {
    const message = createBaseUserInsuranceFundEntry();
    message.userAddress = object.userAddress ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserInsuranceFundEntryAmino): UserInsuranceFundEntry {
    const message = createBaseUserInsuranceFundEntry();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserInsuranceFundEntry): UserInsuranceFundEntryAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    return obj;
  },
  fromAminoMsg(object: UserInsuranceFundEntryAminoMsg): UserInsuranceFundEntry {
    return UserInsuranceFundEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UserInsuranceFundEntryProtoMsg): UserInsuranceFundEntry {
    return UserInsuranceFundEntry.decode(message.value);
  },
  toProto(message: UserInsuranceFundEntry): Uint8Array {
    return UserInsuranceFundEntry.encode(message).finish();
  },
  toProtoMsg(message: UserInsuranceFundEntry): UserInsuranceFundEntryProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry",
      value: UserInsuranceFundEntry.encode(message).finish()
    };
  }
};