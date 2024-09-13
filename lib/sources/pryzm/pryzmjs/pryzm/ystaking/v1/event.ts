import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UserStakeState, UserStakeStateAmino, UserStakeStateSDKType } from "./user_stake_state";
import { AssetPoolState, AssetPoolStateAmino, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateAmino, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventYStakingBond {
  accountAddress: string;
  amount: Coin;
}
export interface EventYStakingBondProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingBond";
  value: Uint8Array;
}
export interface EventYStakingBondAmino {
  account_address?: string;
  amount?: CoinAmino;
}
export interface EventYStakingBondAminoMsg {
  type: "/pryzm.ystaking.v1.EventYStakingBond";
  value: EventYStakingBondAmino;
}
export interface EventYStakingBondSDKType {
  account_address: string;
  amount: CoinSDKType;
}
export interface EventYStakingUnbond {
  accountAddress: string;
  amount: Coin;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingUnbondProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingUnbond";
  value: Uint8Array;
}
export interface EventYStakingUnbondAmino {
  account_address?: string;
  amount?: CoinAmino;
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventYStakingUnbondAminoMsg {
  type: "/pryzm.ystaking.v1.EventYStakingUnbond";
  value: EventYStakingUnbondAmino;
}
export interface EventYStakingUnbondSDKType {
  account_address: string;
  amount: CoinSDKType;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventYStakingExitPool {
  accountAddress: string;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingExitPoolProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingExitPool";
  value: Uint8Array;
}
export interface EventYStakingExitPoolAmino {
  account_address?: string;
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventYStakingExitPoolAminoMsg {
  type: "/pryzm.ystaking.v1.EventYStakingExitPool";
  value: EventYStakingExitPoolAmino;
}
export interface EventYStakingExitPoolSDKType {
  account_address: string;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventYStakingClaimReward {
  accountAddress: string;
  accruedReward: Coin;
  fee: Coin;
}
export interface EventYStakingClaimRewardProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingClaimReward";
  value: Uint8Array;
}
export interface EventYStakingClaimRewardAmino {
  account_address?: string;
  accrued_reward?: CoinAmino;
  fee?: CoinAmino;
}
export interface EventYStakingClaimRewardAminoMsg {
  type: "/pryzm.ystaking.v1.EventYStakingClaimReward";
  value: EventYStakingClaimRewardAmino;
}
export interface EventYStakingClaimRewardSDKType {
  account_address: string;
  accrued_reward: CoinSDKType;
  fee: CoinSDKType;
}
export interface EventDeactivateYStakingMaturityPool {
  burntBondedAmount: Coin;
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeactivateYStakingMaturityPoolProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventDeactivateYStakingMaturityPool";
  value: Uint8Array;
}
export interface EventDeactivateYStakingMaturityPoolAmino {
  burnt_bonded_amount?: CoinAmino;
  asset_id?: string;
  maturity_symbol?: string;
}
export interface EventDeactivateYStakingMaturityPoolAminoMsg {
  type: "/pryzm.ystaking.v1.EventDeactivateYStakingMaturityPool";
  value: EventDeactivateYStakingMaturityPoolAmino;
}
export interface EventDeactivateYStakingMaturityPoolSDKType {
  burnt_bonded_amount: CoinSDKType;
  asset_id: string;
  maturity_symbol: string;
}
export interface EventSetUserStakeState {
  userStakeState: UserStakeState;
}
export interface EventSetUserStakeStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventSetUserStakeState";
  value: Uint8Array;
}
export interface EventSetUserStakeStateAmino {
  user_stake_state?: UserStakeStateAmino;
}
export interface EventSetUserStakeStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventSetUserStakeState";
  value: EventSetUserStakeStateAmino;
}
export interface EventSetUserStakeStateSDKType {
  user_stake_state: UserStakeStateSDKType;
}
export interface EventSetAssetPoolState {
  assetPoolState: AssetPoolState;
}
export interface EventSetAssetPoolStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventSetAssetPoolState";
  value: Uint8Array;
}
export interface EventSetAssetPoolStateAmino {
  asset_pool_state?: AssetPoolStateAmino;
}
export interface EventSetAssetPoolStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventSetAssetPoolState";
  value: EventSetAssetPoolStateAmino;
}
export interface EventSetAssetPoolStateSDKType {
  asset_pool_state: AssetPoolStateSDKType;
}
export interface EventSetAssetMaturityPoolState {
  assetMaturityPoolState: AssetMaturityPoolState;
}
export interface EventSetAssetMaturityPoolStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventSetAssetMaturityPoolState";
  value: Uint8Array;
}
export interface EventSetAssetMaturityPoolStateAmino {
  asset_maturity_pool_state?: AssetMaturityPoolStateAmino;
}
export interface EventSetAssetMaturityPoolStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventSetAssetMaturityPoolState";
  value: EventSetAssetMaturityPoolStateAmino;
}
export interface EventSetAssetMaturityPoolStateSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType;
}
export interface EventDeleteUserStakeState {
  address: string;
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeleteUserStakeStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteUserStakeState";
  value: Uint8Array;
}
export interface EventDeleteUserStakeStateAmino {
  address?: string;
  asset_id?: string;
  maturity_symbol?: string;
}
export interface EventDeleteUserStakeStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventDeleteUserStakeState";
  value: EventDeleteUserStakeStateAmino;
}
export interface EventDeleteUserStakeStateSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
}
export interface EventDeleteAssetPoolState {
  assetId: string;
}
export interface EventDeleteAssetPoolStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetPoolState";
  value: Uint8Array;
}
export interface EventDeleteAssetPoolStateAmino {
  asset_id?: string;
}
export interface EventDeleteAssetPoolStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventDeleteAssetPoolState";
  value: EventDeleteAssetPoolStateAmino;
}
export interface EventDeleteAssetPoolStateSDKType {
  asset_id: string;
}
export interface EventDeleteAssetMaturityPoolState {
  assetId: string;
  maturitySymbol: string;
}
export interface EventDeleteAssetMaturityPoolStateProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetMaturityPoolState";
  value: Uint8Array;
}
export interface EventDeleteAssetMaturityPoolStateAmino {
  asset_id?: string;
  maturity_symbol?: string;
}
export interface EventDeleteAssetMaturityPoolStateAminoMsg {
  type: "/pryzm.ystaking.v1.EventDeleteAssetMaturityPoolState";
  value: EventDeleteAssetMaturityPoolStateAmino;
}
export interface EventDeleteAssetMaturityPoolStateSDKType {
  asset_id: string;
  maturity_symbol: string;
}
function createBaseEventYStakingBond(): EventYStakingBond {
  return {
    accountAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventYStakingBond = {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingBond",
  is(o: any): o is EventYStakingBond {
    return o && (o.$typeUrl === EventYStakingBond.typeUrl || typeof o.accountAddress === "string" && Coin.is(o.amount));
  },
  isSDK(o: any): o is EventYStakingBondSDKType {
    return o && (o.$typeUrl === EventYStakingBond.typeUrl || typeof o.account_address === "string" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is EventYStakingBondAmino {
    return o && (o.$typeUrl === EventYStakingBond.typeUrl || typeof o.account_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventYStakingBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYStakingBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingBond {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: EventYStakingBond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingBond>): EventYStakingBond {
    const message = createBaseEventYStakingBond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventYStakingBondAmino): EventYStakingBond {
    const message = createBaseEventYStakingBond();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventYStakingBond, useInterfaces: boolean = true): EventYStakingBondAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventYStakingBondAminoMsg): EventYStakingBond {
    return EventYStakingBond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYStakingBondProtoMsg, useInterfaces: boolean = true): EventYStakingBond {
    return EventYStakingBond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYStakingBond): Uint8Array {
    return EventYStakingBond.encode(message).finish();
  },
  toProtoMsg(message: EventYStakingBond): EventYStakingBondProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventYStakingBond",
      value: EventYStakingBond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYStakingBond.typeUrl, EventYStakingBond);
function createBaseEventYStakingUnbond(): EventYStakingUnbond {
  return {
    accountAddress: "",
    amount: Coin.fromPartial({}),
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingUnbond = {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingUnbond",
  is(o: any): o is EventYStakingUnbond {
    return o && (o.$typeUrl === EventYStakingUnbond.typeUrl || typeof o.accountAddress === "string" && Coin.is(o.amount) && Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventYStakingUnbondSDKType {
    return o && (o.$typeUrl === EventYStakingUnbond.typeUrl || typeof o.account_address === "string" && Coin.isSDK(o.amount) && Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventYStakingUnbondAmino {
    return o && (o.$typeUrl === EventYStakingUnbond.typeUrl || typeof o.account_address === "string" && Coin.isAmino(o.amount) && Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: EventYStakingUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(26).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYStakingUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.accruedReward = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventYStakingUnbond {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingUnbond): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingUnbond>): EventYStakingUnbond {
    const message = createBaseEventYStakingUnbond();
    message.accountAddress = object.accountAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventYStakingUnbondAmino): EventYStakingUnbond {
    const message = createBaseEventYStakingUnbond();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventYStakingUnbond, useInterfaces: boolean = true): EventYStakingUnbondAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventYStakingUnbondAminoMsg): EventYStakingUnbond {
    return EventYStakingUnbond.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYStakingUnbondProtoMsg, useInterfaces: boolean = true): EventYStakingUnbond {
    return EventYStakingUnbond.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYStakingUnbond): Uint8Array {
    return EventYStakingUnbond.encode(message).finish();
  },
  toProtoMsg(message: EventYStakingUnbond): EventYStakingUnbondProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventYStakingUnbond",
      value: EventYStakingUnbond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYStakingUnbond.typeUrl, EventYStakingUnbond);
function createBaseEventYStakingExitPool(): EventYStakingExitPool {
  return {
    accountAddress: "",
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingExitPool = {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingExitPool",
  is(o: any): o is EventYStakingExitPool {
    return o && (o.$typeUrl === EventYStakingExitPool.typeUrl || typeof o.accountAddress === "string" && Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventYStakingExitPoolSDKType {
    return o && (o.$typeUrl === EventYStakingExitPool.typeUrl || typeof o.account_address === "string" && Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventYStakingExitPoolAmino {
    return o && (o.$typeUrl === EventYStakingExitPool.typeUrl || typeof o.account_address === "string" && Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: EventYStakingExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYStakingExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingExitPool {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingExitPool): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingExitPool>): EventYStakingExitPool {
    const message = createBaseEventYStakingExitPool();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventYStakingExitPoolAmino): EventYStakingExitPool {
    const message = createBaseEventYStakingExitPool();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventYStakingExitPool, useInterfaces: boolean = true): EventYStakingExitPoolAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventYStakingExitPoolAminoMsg): EventYStakingExitPool {
    return EventYStakingExitPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYStakingExitPoolProtoMsg, useInterfaces: boolean = true): EventYStakingExitPool {
    return EventYStakingExitPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYStakingExitPool): Uint8Array {
    return EventYStakingExitPool.encode(message).finish();
  },
  toProtoMsg(message: EventYStakingExitPool): EventYStakingExitPoolProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventYStakingExitPool",
      value: EventYStakingExitPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYStakingExitPool.typeUrl, EventYStakingExitPool);
function createBaseEventYStakingClaimReward(): EventYStakingClaimReward {
  return {
    accountAddress: "",
    accruedReward: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const EventYStakingClaimReward = {
  typeUrl: "/pryzm.ystaking.v1.EventYStakingClaimReward",
  is(o: any): o is EventYStakingClaimReward {
    return o && (o.$typeUrl === EventYStakingClaimReward.typeUrl || typeof o.accountAddress === "string" && Coin.is(o.accruedReward) && Coin.is(o.fee));
  },
  isSDK(o: any): o is EventYStakingClaimRewardSDKType {
    return o && (o.$typeUrl === EventYStakingClaimReward.typeUrl || typeof o.account_address === "string" && Coin.isSDK(o.accrued_reward) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is EventYStakingClaimRewardAmino {
    return o && (o.$typeUrl === EventYStakingClaimReward.typeUrl || typeof o.account_address === "string" && Coin.isAmino(o.accrued_reward) && Coin.isAmino(o.fee));
  },
  encode(message: EventYStakingClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.accruedReward !== undefined) {
      Coin.encode(message.accruedReward, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventYStakingClaimReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventYStakingClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
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
  fromJSON(object: any): EventYStakingClaimReward {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      accruedReward: isSet(object.accruedReward) ? Coin.fromJSON(object.accruedReward) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: EventYStakingClaimReward): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.accruedReward !== undefined && (obj.accruedReward = message.accruedReward ? Coin.toJSON(message.accruedReward) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventYStakingClaimReward>): EventYStakingClaimReward {
    const message = createBaseEventYStakingClaimReward();
    message.accountAddress = object.accountAddress ?? "";
    message.accruedReward = object.accruedReward !== undefined && object.accruedReward !== null ? Coin.fromPartial(object.accruedReward) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: EventYStakingClaimRewardAmino): EventYStakingClaimReward {
    const message = createBaseEventYStakingClaimReward();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.accrued_reward !== undefined && object.accrued_reward !== null) {
      message.accruedReward = Coin.fromAmino(object.accrued_reward);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: EventYStakingClaimReward, useInterfaces: boolean = true): EventYStakingClaimRewardAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
    obj.accrued_reward = message.accruedReward ? Coin.toAmino(message.accruedReward, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventYStakingClaimRewardAminoMsg): EventYStakingClaimReward {
    return EventYStakingClaimReward.fromAmino(object.value);
  },
  fromProtoMsg(message: EventYStakingClaimRewardProtoMsg, useInterfaces: boolean = true): EventYStakingClaimReward {
    return EventYStakingClaimReward.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventYStakingClaimReward): Uint8Array {
    return EventYStakingClaimReward.encode(message).finish();
  },
  toProtoMsg(message: EventYStakingClaimReward): EventYStakingClaimRewardProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventYStakingClaimReward",
      value: EventYStakingClaimReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventYStakingClaimReward.typeUrl, EventYStakingClaimReward);
function createBaseEventDeactivateYStakingMaturityPool(): EventDeactivateYStakingMaturityPool {
  return {
    burntBondedAmount: Coin.fromPartial({}),
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeactivateYStakingMaturityPool = {
  typeUrl: "/pryzm.ystaking.v1.EventDeactivateYStakingMaturityPool",
  is(o: any): o is EventDeactivateYStakingMaturityPool {
    return o && (o.$typeUrl === EventDeactivateYStakingMaturityPool.typeUrl || Coin.is(o.burntBondedAmount) && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is EventDeactivateYStakingMaturityPoolSDKType {
    return o && (o.$typeUrl === EventDeactivateYStakingMaturityPool.typeUrl || Coin.isSDK(o.burnt_bonded_amount) && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  isAmino(o: any): o is EventDeactivateYStakingMaturityPoolAmino {
    return o && (o.$typeUrl === EventDeactivateYStakingMaturityPool.typeUrl || Coin.isAmino(o.burnt_bonded_amount) && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  encode(message: EventDeactivateYStakingMaturityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burntBondedAmount !== undefined) {
      Coin.encode(message.burntBondedAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventDeactivateYStakingMaturityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateYStakingMaturityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burntBondedAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeactivateYStakingMaturityPool {
    return {
      burntBondedAmount: isSet(object.burntBondedAmount) ? Coin.fromJSON(object.burntBondedAmount) : undefined,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeactivateYStakingMaturityPool): unknown {
    const obj: any = {};
    message.burntBondedAmount !== undefined && (obj.burntBondedAmount = message.burntBondedAmount ? Coin.toJSON(message.burntBondedAmount) : undefined);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeactivateYStakingMaturityPool>): EventDeactivateYStakingMaturityPool {
    const message = createBaseEventDeactivateYStakingMaturityPool();
    message.burntBondedAmount = object.burntBondedAmount !== undefined && object.burntBondedAmount !== null ? Coin.fromPartial(object.burntBondedAmount) : undefined;
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: EventDeactivateYStakingMaturityPoolAmino): EventDeactivateYStakingMaturityPool {
    const message = createBaseEventDeactivateYStakingMaturityPool();
    if (object.burnt_bonded_amount !== undefined && object.burnt_bonded_amount !== null) {
      message.burntBondedAmount = Coin.fromAmino(object.burnt_bonded_amount);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    return message;
  },
  toAmino(message: EventDeactivateYStakingMaturityPool, useInterfaces: boolean = true): EventDeactivateYStakingMaturityPoolAmino {
    const obj: any = {};
    obj.burnt_bonded_amount = message.burntBondedAmount ? Coin.toAmino(message.burntBondedAmount, useInterfaces) : undefined;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: EventDeactivateYStakingMaturityPoolAminoMsg): EventDeactivateYStakingMaturityPool {
    return EventDeactivateYStakingMaturityPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeactivateYStakingMaturityPoolProtoMsg, useInterfaces: boolean = true): EventDeactivateYStakingMaturityPool {
    return EventDeactivateYStakingMaturityPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventDeactivateYStakingMaturityPool): Uint8Array {
    return EventDeactivateYStakingMaturityPool.encode(message).finish();
  },
  toProtoMsg(message: EventDeactivateYStakingMaturityPool): EventDeactivateYStakingMaturityPoolProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventDeactivateYStakingMaturityPool",
      value: EventDeactivateYStakingMaturityPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDeactivateYStakingMaturityPool.typeUrl, EventDeactivateYStakingMaturityPool);
function createBaseEventSetUserStakeState(): EventSetUserStakeState {
  return {
    userStakeState: UserStakeState.fromPartial({})
  };
}
export const EventSetUserStakeState = {
  typeUrl: "/pryzm.ystaking.v1.EventSetUserStakeState",
  is(o: any): o is EventSetUserStakeState {
    return o && (o.$typeUrl === EventSetUserStakeState.typeUrl || UserStakeState.is(o.userStakeState));
  },
  isSDK(o: any): o is EventSetUserStakeStateSDKType {
    return o && (o.$typeUrl === EventSetUserStakeState.typeUrl || UserStakeState.isSDK(o.user_stake_state));
  },
  isAmino(o: any): o is EventSetUserStakeStateAmino {
    return o && (o.$typeUrl === EventSetUserStakeState.typeUrl || UserStakeState.isAmino(o.user_stake_state));
  },
  encode(message: EventSetUserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userStakeState !== undefined) {
      UserStakeState.encode(message.userStakeState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetUserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUserStakeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakeState = UserStakeState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetUserStakeState {
    return {
      userStakeState: isSet(object.userStakeState) ? UserStakeState.fromJSON(object.userStakeState) : undefined
    };
  },
  toJSON(message: EventSetUserStakeState): unknown {
    const obj: any = {};
    message.userStakeState !== undefined && (obj.userStakeState = message.userStakeState ? UserStakeState.toJSON(message.userStakeState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetUserStakeState>): EventSetUserStakeState {
    const message = createBaseEventSetUserStakeState();
    message.userStakeState = object.userStakeState !== undefined && object.userStakeState !== null ? UserStakeState.fromPartial(object.userStakeState) : undefined;
    return message;
  },
  fromAmino(object: EventSetUserStakeStateAmino): EventSetUserStakeState {
    const message = createBaseEventSetUserStakeState();
    if (object.user_stake_state !== undefined && object.user_stake_state !== null) {
      message.userStakeState = UserStakeState.fromAmino(object.user_stake_state);
    }
    return message;
  },
  toAmino(message: EventSetUserStakeState, useInterfaces: boolean = true): EventSetUserStakeStateAmino {
    const obj: any = {};
    obj.user_stake_state = message.userStakeState ? UserStakeState.toAmino(message.userStakeState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetUserStakeStateAminoMsg): EventSetUserStakeState {
    return EventSetUserStakeState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetUserStakeStateProtoMsg, useInterfaces: boolean = true): EventSetUserStakeState {
    return EventSetUserStakeState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetUserStakeState): Uint8Array {
    return EventSetUserStakeState.encode(message).finish();
  },
  toProtoMsg(message: EventSetUserStakeState): EventSetUserStakeStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventSetUserStakeState",
      value: EventSetUserStakeState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetUserStakeState.typeUrl, EventSetUserStakeState);
function createBaseEventSetAssetPoolState(): EventSetAssetPoolState {
  return {
    assetPoolState: AssetPoolState.fromPartial({})
  };
}
export const EventSetAssetPoolState = {
  typeUrl: "/pryzm.ystaking.v1.EventSetAssetPoolState",
  is(o: any): o is EventSetAssetPoolState {
    return o && (o.$typeUrl === EventSetAssetPoolState.typeUrl || AssetPoolState.is(o.assetPoolState));
  },
  isSDK(o: any): o is EventSetAssetPoolStateSDKType {
    return o && (o.$typeUrl === EventSetAssetPoolState.typeUrl || AssetPoolState.isSDK(o.asset_pool_state));
  },
  isAmino(o: any): o is EventSetAssetPoolStateAmino {
    return o && (o.$typeUrl === EventSetAssetPoolState.typeUrl || AssetPoolState.isAmino(o.asset_pool_state));
  },
  encode(message: EventSetAssetPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetPoolState !== undefined) {
      AssetPoolState.encode(message.assetPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetAssetPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAssetPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPoolState = AssetPoolState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAssetPoolState {
    return {
      assetPoolState: isSet(object.assetPoolState) ? AssetPoolState.fromJSON(object.assetPoolState) : undefined
    };
  },
  toJSON(message: EventSetAssetPoolState): unknown {
    const obj: any = {};
    message.assetPoolState !== undefined && (obj.assetPoolState = message.assetPoolState ? AssetPoolState.toJSON(message.assetPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAssetPoolState>): EventSetAssetPoolState {
    const message = createBaseEventSetAssetPoolState();
    message.assetPoolState = object.assetPoolState !== undefined && object.assetPoolState !== null ? AssetPoolState.fromPartial(object.assetPoolState) : undefined;
    return message;
  },
  fromAmino(object: EventSetAssetPoolStateAmino): EventSetAssetPoolState {
    const message = createBaseEventSetAssetPoolState();
    if (object.asset_pool_state !== undefined && object.asset_pool_state !== null) {
      message.assetPoolState = AssetPoolState.fromAmino(object.asset_pool_state);
    }
    return message;
  },
  toAmino(message: EventSetAssetPoolState, useInterfaces: boolean = true): EventSetAssetPoolStateAmino {
    const obj: any = {};
    obj.asset_pool_state = message.assetPoolState ? AssetPoolState.toAmino(message.assetPoolState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetAssetPoolStateAminoMsg): EventSetAssetPoolState {
    return EventSetAssetPoolState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetAssetPoolStateProtoMsg, useInterfaces: boolean = true): EventSetAssetPoolState {
    return EventSetAssetPoolState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetAssetPoolState): Uint8Array {
    return EventSetAssetPoolState.encode(message).finish();
  },
  toProtoMsg(message: EventSetAssetPoolState): EventSetAssetPoolStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventSetAssetPoolState",
      value: EventSetAssetPoolState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetAssetPoolState.typeUrl, EventSetAssetPoolState);
function createBaseEventSetAssetMaturityPoolState(): EventSetAssetMaturityPoolState {
  return {
    assetMaturityPoolState: AssetMaturityPoolState.fromPartial({})
  };
}
export const EventSetAssetMaturityPoolState = {
  typeUrl: "/pryzm.ystaking.v1.EventSetAssetMaturityPoolState",
  is(o: any): o is EventSetAssetMaturityPoolState {
    return o && (o.$typeUrl === EventSetAssetMaturityPoolState.typeUrl || AssetMaturityPoolState.is(o.assetMaturityPoolState));
  },
  isSDK(o: any): o is EventSetAssetMaturityPoolStateSDKType {
    return o && (o.$typeUrl === EventSetAssetMaturityPoolState.typeUrl || AssetMaturityPoolState.isSDK(o.asset_maturity_pool_state));
  },
  isAmino(o: any): o is EventSetAssetMaturityPoolStateAmino {
    return o && (o.$typeUrl === EventSetAssetMaturityPoolState.typeUrl || AssetMaturityPoolState.isAmino(o.asset_maturity_pool_state));
  },
  encode(message: EventSetAssetMaturityPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetMaturityPoolState !== undefined) {
      AssetMaturityPoolState.encode(message.assetMaturityPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetAssetMaturityPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAssetMaturityPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetMaturityPoolState = AssetMaturityPoolState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetAssetMaturityPoolState {
    return {
      assetMaturityPoolState: isSet(object.assetMaturityPoolState) ? AssetMaturityPoolState.fromJSON(object.assetMaturityPoolState) : undefined
    };
  },
  toJSON(message: EventSetAssetMaturityPoolState): unknown {
    const obj: any = {};
    message.assetMaturityPoolState !== undefined && (obj.assetMaturityPoolState = message.assetMaturityPoolState ? AssetMaturityPoolState.toJSON(message.assetMaturityPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetAssetMaturityPoolState>): EventSetAssetMaturityPoolState {
    const message = createBaseEventSetAssetMaturityPoolState();
    message.assetMaturityPoolState = object.assetMaturityPoolState !== undefined && object.assetMaturityPoolState !== null ? AssetMaturityPoolState.fromPartial(object.assetMaturityPoolState) : undefined;
    return message;
  },
  fromAmino(object: EventSetAssetMaturityPoolStateAmino): EventSetAssetMaturityPoolState {
    const message = createBaseEventSetAssetMaturityPoolState();
    if (object.asset_maturity_pool_state !== undefined && object.asset_maturity_pool_state !== null) {
      message.assetMaturityPoolState = AssetMaturityPoolState.fromAmino(object.asset_maturity_pool_state);
    }
    return message;
  },
  toAmino(message: EventSetAssetMaturityPoolState, useInterfaces: boolean = true): EventSetAssetMaturityPoolStateAmino {
    const obj: any = {};
    obj.asset_maturity_pool_state = message.assetMaturityPoolState ? AssetMaturityPoolState.toAmino(message.assetMaturityPoolState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetAssetMaturityPoolStateAminoMsg): EventSetAssetMaturityPoolState {
    return EventSetAssetMaturityPoolState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetAssetMaturityPoolStateProtoMsg, useInterfaces: boolean = true): EventSetAssetMaturityPoolState {
    return EventSetAssetMaturityPoolState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetAssetMaturityPoolState): Uint8Array {
    return EventSetAssetMaturityPoolState.encode(message).finish();
  },
  toProtoMsg(message: EventSetAssetMaturityPoolState): EventSetAssetMaturityPoolStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventSetAssetMaturityPoolState",
      value: EventSetAssetMaturityPoolState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetAssetMaturityPoolState.typeUrl, EventSetAssetMaturityPoolState);
function createBaseEventDeleteUserStakeState(): EventDeleteUserStakeState {
  return {
    address: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeleteUserStakeState = {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteUserStakeState",
  is(o: any): o is EventDeleteUserStakeState {
    return o && (o.$typeUrl === EventDeleteUserStakeState.typeUrl || typeof o.address === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is EventDeleteUserStakeStateSDKType {
    return o && (o.$typeUrl === EventDeleteUserStakeState.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  isAmino(o: any): o is EventDeleteUserStakeStateAmino {
    return o && (o.$typeUrl === EventDeleteUserStakeState.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  encode(message: EventDeleteUserStakeState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(26).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventDeleteUserStakeState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteUserStakeState();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteUserStakeState {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeleteUserStakeState): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteUserStakeState>): EventDeleteUserStakeState {
    const message = createBaseEventDeleteUserStakeState();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: EventDeleteUserStakeStateAmino): EventDeleteUserStakeState {
    const message = createBaseEventDeleteUserStakeState();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    return message;
  },
  toAmino(message: EventDeleteUserStakeState, useInterfaces: boolean = true): EventDeleteUserStakeStateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: EventDeleteUserStakeStateAminoMsg): EventDeleteUserStakeState {
    return EventDeleteUserStakeState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteUserStakeStateProtoMsg, useInterfaces: boolean = true): EventDeleteUserStakeState {
    return EventDeleteUserStakeState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventDeleteUserStakeState): Uint8Array {
    return EventDeleteUserStakeState.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteUserStakeState): EventDeleteUserStakeStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventDeleteUserStakeState",
      value: EventDeleteUserStakeState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDeleteUserStakeState.typeUrl, EventDeleteUserStakeState);
function createBaseEventDeleteAssetPoolState(): EventDeleteAssetPoolState {
  return {
    assetId: ""
  };
}
export const EventDeleteAssetPoolState = {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetPoolState",
  is(o: any): o is EventDeleteAssetPoolState {
    return o && (o.$typeUrl === EventDeleteAssetPoolState.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is EventDeleteAssetPoolStateSDKType {
    return o && (o.$typeUrl === EventDeleteAssetPoolState.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is EventDeleteAssetPoolStateAmino {
    return o && (o.$typeUrl === EventDeleteAssetPoolState.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: EventDeleteAssetPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventDeleteAssetPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteAssetPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteAssetPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: EventDeleteAssetPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteAssetPoolState>): EventDeleteAssetPoolState {
    const message = createBaseEventDeleteAssetPoolState();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: EventDeleteAssetPoolStateAmino): EventDeleteAssetPoolState {
    const message = createBaseEventDeleteAssetPoolState();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: EventDeleteAssetPoolState, useInterfaces: boolean = true): EventDeleteAssetPoolStateAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: EventDeleteAssetPoolStateAminoMsg): EventDeleteAssetPoolState {
    return EventDeleteAssetPoolState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteAssetPoolStateProtoMsg, useInterfaces: boolean = true): EventDeleteAssetPoolState {
    return EventDeleteAssetPoolState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventDeleteAssetPoolState): Uint8Array {
    return EventDeleteAssetPoolState.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteAssetPoolState): EventDeleteAssetPoolStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetPoolState",
      value: EventDeleteAssetPoolState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDeleteAssetPoolState.typeUrl, EventDeleteAssetPoolState);
function createBaseEventDeleteAssetMaturityPoolState(): EventDeleteAssetMaturityPoolState {
  return {
    assetId: "",
    maturitySymbol: ""
  };
}
export const EventDeleteAssetMaturityPoolState = {
  typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetMaturityPoolState",
  is(o: any): o is EventDeleteAssetMaturityPoolState {
    return o && (o.$typeUrl === EventDeleteAssetMaturityPoolState.typeUrl || typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is EventDeleteAssetMaturityPoolStateSDKType {
    return o && (o.$typeUrl === EventDeleteAssetMaturityPoolState.typeUrl || typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  isAmino(o: any): o is EventDeleteAssetMaturityPoolStateAmino {
    return o && (o.$typeUrl === EventDeleteAssetMaturityPoolState.typeUrl || typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  encode(message: EventDeleteAssetMaturityPoolState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(18).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventDeleteAssetMaturityPoolState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeleteAssetMaturityPoolState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturitySymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeleteAssetMaturityPoolState {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: EventDeleteAssetMaturityPoolState): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<EventDeleteAssetMaturityPoolState>): EventDeleteAssetMaturityPoolState {
    const message = createBaseEventDeleteAssetMaturityPoolState();
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: EventDeleteAssetMaturityPoolStateAmino): EventDeleteAssetMaturityPoolState {
    const message = createBaseEventDeleteAssetMaturityPoolState();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    return message;
  },
  toAmino(message: EventDeleteAssetMaturityPoolState, useInterfaces: boolean = true): EventDeleteAssetMaturityPoolStateAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: EventDeleteAssetMaturityPoolStateAminoMsg): EventDeleteAssetMaturityPoolState {
    return EventDeleteAssetMaturityPoolState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeleteAssetMaturityPoolStateProtoMsg, useInterfaces: boolean = true): EventDeleteAssetMaturityPoolState {
    return EventDeleteAssetMaturityPoolState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventDeleteAssetMaturityPoolState): Uint8Array {
    return EventDeleteAssetMaturityPoolState.encode(message).finish();
  },
  toProtoMsg(message: EventDeleteAssetMaturityPoolState): EventDeleteAssetMaturityPoolStateProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.EventDeleteAssetMaturityPoolState",
      value: EventDeleteAssetMaturityPoolState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDeleteAssetMaturityPoolState.typeUrl, EventDeleteAssetMaturityPoolState);