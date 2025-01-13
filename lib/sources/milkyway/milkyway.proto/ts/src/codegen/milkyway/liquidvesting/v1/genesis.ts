import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnCoins, BurnCoinsAmino, BurnCoinsSDKType, UserInsuranceFundEntry, UserInsuranceFundEntryAmino, UserInsuranceFundEntrySDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisState {
  /** Params defines the parameters of the module. */
  params: Params;
  /**
   * BurnCoins represents the list of coins that should be burned from the
   * users' balances
   */
  burnCoins: BurnCoins[];
  /** UserInsuranceFunds represents the users' insurance fund. */
  userInsuranceFunds: UserInsuranceFundEntry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisStateAmino {
  /** Params defines the parameters of the module. */
  params?: ParamsAmino;
  /**
   * BurnCoins represents the list of coins that should be burned from the
   * users' balances
   */
  burn_coins?: BurnCoinsAmino[];
  /** UserInsuranceFunds represents the users' insurance fund. */
  user_insurance_funds?: UserInsuranceFundEntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/milkyway.liquidvesting.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  burn_coins: BurnCoinsSDKType[];
  user_insurance_funds: UserInsuranceFundEntrySDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    burnCoins: [],
    userInsuranceFunds: []
  };
}
export const GenesisState = {
  typeUrl: "/milkyway.liquidvesting.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.burnCoins) {
      BurnCoins.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userInsuranceFunds) {
      UserInsuranceFundEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.burnCoins.push(BurnCoins.decode(reader, reader.uint32()));
          break;
        case 3:
          message.userInsuranceFunds.push(UserInsuranceFundEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.burnCoins = object.burnCoins?.map(e => BurnCoins.fromPartial(e)) || [];
    message.userInsuranceFunds = object.userInsuranceFunds?.map(e => UserInsuranceFundEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.burnCoins = object.burn_coins?.map(e => BurnCoins.fromAmino(e)) || [];
    message.userInsuranceFunds = object.user_insurance_funds?.map(e => UserInsuranceFundEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.burnCoins) {
      obj.burn_coins = message.burnCoins.map(e => e ? BurnCoins.toAmino(e) : undefined);
    } else {
      obj.burn_coins = message.burnCoins;
    }
    if (message.userInsuranceFunds) {
      obj.user_insurance_funds = message.userInsuranceFunds.map(e => e ? UserInsuranceFundEntry.toAmino(e) : undefined);
    } else {
      obj.user_insurance_funds = message.userInsuranceFunds;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};