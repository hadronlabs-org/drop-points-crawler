import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Bond, BondAmino, BondSDKType } from "./bond";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./unbonding";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/incentives/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface WeightedRewardToken {
  denom: string;
  /**
   * weight is used for reward portion for each pool, when a reward is
   * accrued from dist module, it will be distributed to each pool according to the weights
   */
  weight: string;
}
export interface WeightedRewardTokenProtoMsg {
  typeUrl: "/pryzm.incentives.v1.WeightedRewardToken";
  value: Uint8Array;
}
export interface WeightedRewardTokenAmino {
  denom?: string;
  /**
   * weight is used for reward portion for each pool, when a reward is
   * accrued from dist module, it will be distributed to each pool according to the weights
   */
  weight?: string;
}
export interface WeightedRewardTokenAminoMsg {
  type: "/pryzm.incentives.v1.WeightedRewardToken";
  value: WeightedRewardTokenAmino;
}
export interface WeightedRewardTokenSDKType {
  denom: string;
  weight: string;
}
export interface MsgCreatePool {
  authority: string;
  bondDenom: string;
  rewardTokens: WeightedRewardToken[];
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgCreatePool";
  value: Uint8Array;
}
export interface MsgCreatePoolAmino {
  authority?: string;
  bond_denom?: string;
  reward_tokens?: WeightedRewardTokenAmino[];
}
export interface MsgCreatePoolAminoMsg {
  type: "pryzm/incentives/v1/CreatePool";
  value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
  authority: string;
  bond_denom: string;
  reward_tokens: WeightedRewardTokenSDKType[];
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgUpdateRewardTokenWeight {
  authority: string;
  bondDenom: string;
  rewardToken: WeightedRewardToken;
}
export interface MsgUpdateRewardTokenWeightProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeight";
  value: Uint8Array;
}
export interface MsgUpdateRewardTokenWeightAmino {
  authority?: string;
  bond_denom?: string;
  reward_token?: WeightedRewardTokenAmino;
}
export interface MsgUpdateRewardTokenWeightAminoMsg {
  type: "pryzm/incentives/v1/UpdateRewardWeight";
  value: MsgUpdateRewardTokenWeightAmino;
}
export interface MsgUpdateRewardTokenWeightSDKType {
  authority: string;
  bond_denom: string;
  reward_token: WeightedRewardTokenSDKType;
}
export interface MsgUpdateRewardTokenWeightResponse {}
export interface MsgUpdateRewardTokenWeightResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse";
  value: Uint8Array;
}
export interface MsgUpdateRewardTokenWeightResponseAmino {}
export interface MsgUpdateRewardTokenWeightResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse";
  value: MsgUpdateRewardTokenWeightResponseAmino;
}
export interface MsgUpdateRewardTokenWeightResponseSDKType {}
export interface MsgAddRewardTokenToPool {
  authority: string;
  bondDenom: string;
  rewardToken: WeightedRewardToken;
}
export interface MsgAddRewardTokenToPoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPool";
  value: Uint8Array;
}
export interface MsgAddRewardTokenToPoolAmino {
  authority?: string;
  bond_denom?: string;
  reward_token?: WeightedRewardTokenAmino;
}
export interface MsgAddRewardTokenToPoolAminoMsg {
  type: "pryzm/incentives/v1/AddRewardToken";
  value: MsgAddRewardTokenToPoolAmino;
}
export interface MsgAddRewardTokenToPoolSDKType {
  authority: string;
  bond_denom: string;
  reward_token: WeightedRewardTokenSDKType;
}
export interface MsgAddRewardTokenToPoolResponse {}
export interface MsgAddRewardTokenToPoolResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse";
  value: Uint8Array;
}
export interface MsgAddRewardTokenToPoolResponseAmino {}
export interface MsgAddRewardTokenToPoolResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse";
  value: MsgAddRewardTokenToPoolResponseAmino;
}
export interface MsgAddRewardTokenToPoolResponseSDKType {}
export interface MsgBond {
  creator: string;
  amount: Coin;
}
export interface MsgBondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgBond";
  value: Uint8Array;
}
export interface MsgBondAmino {
  creator?: string;
  amount?: CoinAmino;
}
export interface MsgBondAminoMsg {
  type: "pryzm/incentives/v1/Bond";
  value: MsgBondAmino;
}
export interface MsgBondSDKType {
  creator: string;
  amount: CoinSDKType;
}
export interface MsgBondResponse {
  bond: Bond;
}
export interface MsgBondResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgBondResponse";
  value: Uint8Array;
}
export interface MsgBondResponseAmino {
  bond?: BondAmino;
}
export interface MsgBondResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgBondResponse";
  value: MsgBondResponseAmino;
}
export interface MsgBondResponseSDKType {
  bond: BondSDKType;
}
export interface MsgUnbond {
  creator: string;
  amount: Coin;
  unbondTreasury: string;
  rewardTreasury: string;
  autoClaim: boolean;
}
export interface MsgUnbondProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUnbond";
  value: Uint8Array;
}
export interface MsgUnbondAmino {
  creator?: string;
  amount?: CoinAmino;
  unbond_treasury?: string;
  reward_treasury?: string;
  auto_claim: boolean;
}
export interface MsgUnbondAminoMsg {
  type: "pryzm/incentives/v1/Unbond";
  value: MsgUnbondAmino;
}
export interface MsgUnbondSDKType {
  creator: string;
  amount: CoinSDKType;
  unbond_treasury: string;
  reward_treasury: string;
  auto_claim: boolean;
}
export interface MsgUnbondResponse {
  unbonding?: Unbonding;
  rewards: Coin[];
}
export interface MsgUnbondResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgUnbondResponse";
  value: Uint8Array;
}
export interface MsgUnbondResponseAmino {
  unbonding?: UnbondingAmino;
  rewards?: CoinAmino[];
}
export interface MsgUnbondResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgUnbondResponse";
  value: MsgUnbondResponseAmino;
}
export interface MsgUnbondResponseSDKType {
  unbonding?: UnbondingSDKType;
  rewards: CoinSDKType[];
}
export interface MsgClaimReward {
  creator: string;
  bondDenom: string;
  treasury: string;
}
export interface MsgClaimRewardProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgClaimReward";
  value: Uint8Array;
}
export interface MsgClaimRewardAmino {
  creator?: string;
  bond_denom?: string;
  treasury?: string;
}
export interface MsgClaimRewardAminoMsg {
  type: "pryzm/incentives/v1/ClaimReward";
  value: MsgClaimRewardAmino;
}
export interface MsgClaimRewardSDKType {
  creator: string;
  bond_denom: string;
  treasury: string;
}
export interface MsgClaimRewardResponse {
  rewards: Coin[];
}
export interface MsgClaimRewardResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgClaimRewardResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardResponseAmino {
  rewards?: CoinAmino[];
}
export interface MsgClaimRewardResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgClaimRewardResponse";
  value: MsgClaimRewardResponseAmino;
}
export interface MsgClaimRewardResponseSDKType {
  rewards: CoinSDKType[];
}
export interface MsgClaimUnbonding {
  creator: string;
  unbondingId: bigint;
}
export interface MsgClaimUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgClaimUnbonding";
  value: Uint8Array;
}
export interface MsgClaimUnbondingAmino {
  creator?: string;
  unbonding_id: string;
}
export interface MsgClaimUnbondingAminoMsg {
  type: "pryzm/incentives/v1/ClaimUnbonding";
  value: MsgClaimUnbondingAmino;
}
export interface MsgClaimUnbondingSDKType {
  creator: string;
  unbonding_id: bigint;
}
export interface MsgClaimUnbondingResponse {
  amount: Coin;
}
export interface MsgClaimUnbondingResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgClaimUnbondingResponse";
  value: Uint8Array;
}
export interface MsgClaimUnbondingResponseAmino {
  amount?: CoinAmino;
}
export interface MsgClaimUnbondingResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgClaimUnbondingResponse";
  value: MsgClaimUnbondingResponseAmino;
}
export interface MsgClaimUnbondingResponseSDKType {
  amount: CoinSDKType;
}
export interface MsgCancelUnbonding {
  creator: string;
  unbondingId: bigint;
  amount: Coin;
}
export interface MsgCancelUnbondingProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgCancelUnbonding";
  value: Uint8Array;
}
export interface MsgCancelUnbondingAmino {
  creator?: string;
  unbonding_id: string;
  amount?: CoinAmino;
}
export interface MsgCancelUnbondingAminoMsg {
  type: "pryzm/incentives/v1/CancelUnbonding";
  value: MsgCancelUnbondingAmino;
}
export interface MsgCancelUnbondingSDKType {
  creator: string;
  unbonding_id: bigint;
  amount: CoinSDKType;
}
export interface MsgCancelUnbondingResponse {
  bond: Bond;
}
export interface MsgCancelUnbondingResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgCancelUnbondingResponse";
  value: Uint8Array;
}
export interface MsgCancelUnbondingResponseAmino {
  bond?: BondAmino;
}
export interface MsgCancelUnbondingResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgCancelUnbondingResponse";
  value: MsgCancelUnbondingResponseAmino;
}
export interface MsgCancelUnbondingResponseSDKType {
  bond: BondSDKType;
}
export interface MsgIncentivizePool {
  creator: string;
  bondDenom: string;
  amount: Coin[];
}
export interface MsgIncentivizePoolProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgIncentivizePool";
  value: Uint8Array;
}
export interface MsgIncentivizePoolAmino {
  creator?: string;
  bond_denom?: string;
  amount: CoinAmino[];
}
export interface MsgIncentivizePoolAminoMsg {
  type: "pryzm/incentives/v1/IncentivizePool";
  value: MsgIncentivizePoolAmino;
}
export interface MsgIncentivizePoolSDKType {
  creator: string;
  bond_denom: string;
  amount: CoinSDKType[];
}
export interface MsgIncentivizePoolResponse {}
export interface MsgIncentivizePoolResponseProtoMsg {
  typeUrl: "/pryzm.incentives.v1.MsgIncentivizePoolResponse";
  value: Uint8Array;
}
export interface MsgIncentivizePoolResponseAmino {}
export interface MsgIncentivizePoolResponseAminoMsg {
  type: "/pryzm.incentives.v1.MsgIncentivizePoolResponse";
  value: MsgIncentivizePoolResponseAmino;
}
export interface MsgIncentivizePoolResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateParams",
  aminoType: "pryzm/incentives/v1/UpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/incentives/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse, useInterfaces: boolean = true): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseWeightedRewardToken(): WeightedRewardToken {
  return {
    denom: "",
    weight: ""
  };
}
export const WeightedRewardToken = {
  typeUrl: "/pryzm.incentives.v1.WeightedRewardToken",
  is(o: any): o is WeightedRewardToken {
    return o && (o.$typeUrl === WeightedRewardToken.typeUrl || typeof o.denom === "string" && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedRewardTokenSDKType {
    return o && (o.$typeUrl === WeightedRewardToken.typeUrl || typeof o.denom === "string" && typeof o.weight === "string");
  },
  isAmino(o: any): o is WeightedRewardTokenAmino {
    return o && (o.$typeUrl === WeightedRewardToken.typeUrl || typeof o.denom === "string" && typeof o.weight === "string");
  },
  encode(message: WeightedRewardToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): WeightedRewardToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedRewardToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedRewardToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedRewardToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedRewardToken>): WeightedRewardToken {
    const message = createBaseWeightedRewardToken();
    message.denom = object.denom ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedRewardTokenAmino): WeightedRewardToken {
    const message = createBaseWeightedRewardToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedRewardToken, useInterfaces: boolean = true): WeightedRewardTokenAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.weight = padDecimal(message.weight) === "" ? undefined : padDecimal(message.weight);
    return obj;
  },
  fromAminoMsg(object: WeightedRewardTokenAminoMsg): WeightedRewardToken {
    return WeightedRewardToken.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedRewardTokenProtoMsg, useInterfaces: boolean = true): WeightedRewardToken {
    return WeightedRewardToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: WeightedRewardToken): Uint8Array {
    return WeightedRewardToken.encode(message).finish();
  },
  toProtoMsg(message: WeightedRewardToken): WeightedRewardTokenProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.WeightedRewardToken",
      value: WeightedRewardToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedRewardToken.typeUrl, WeightedRewardToken);
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
    bondDenom: "",
    rewardTokens: []
  };
}
export const MsgCreatePool = {
  typeUrl: "/pryzm.incentives.v1.MsgCreatePool",
  aminoType: "pryzm/incentives/v1/CreatePool",
  is(o: any): o is MsgCreatePool {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.authority === "string" && typeof o.bondDenom === "string" && Array.isArray(o.rewardTokens) && (!o.rewardTokens.length || WeightedRewardToken.is(o.rewardTokens[0])));
  },
  isSDK(o: any): o is MsgCreatePoolSDKType {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && Array.isArray(o.reward_tokens) && (!o.reward_tokens.length || WeightedRewardToken.isSDK(o.reward_tokens[0])));
  },
  isAmino(o: any): o is MsgCreatePoolAmino {
    return o && (o.$typeUrl === MsgCreatePool.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && Array.isArray(o.reward_tokens) && (!o.reward_tokens.length || WeightedRewardToken.isAmino(o.reward_tokens[0])));
  },
  encode(message: MsgCreatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    for (const v of message.rewardTokens) {
      WeightedRewardToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardTokens.push(WeightedRewardToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardTokens: Array.isArray(object?.rewardTokens) ? object.rewardTokens.map((e: any) => WeightedRewardToken.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.rewardTokens) {
      obj.rewardTokens = message.rewardTokens.map(e => e ? WeightedRewardToken.toJSON(e) : undefined);
    } else {
      obj.rewardTokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardTokens = object.rewardTokens?.map(e => WeightedRewardToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    message.rewardTokens = object.reward_tokens?.map(e => WeightedRewardToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreatePool, useInterfaces: boolean = true): MsgCreatePoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    if (message.rewardTokens) {
      obj.reward_tokens = message.rewardTokens.map(e => e ? WeightedRewardToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reward_tokens = message.rewardTokens;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePool, useInterfaces: boolean = true): MsgCreatePoolAminoMsg {
    return {
      type: "pryzm/incentives/v1/CreatePool",
      value: MsgCreatePool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg, useInterfaces: boolean = true): MsgCreatePool {
    return MsgCreatePool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePool.typeUrl, MsgCreatePool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreatePool.aminoType, MsgCreatePool.typeUrl);
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgCreatePoolResponse",
  is(o: any): o is MsgCreatePoolResponse {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreatePoolResponseSDKType {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreatePoolResponseAmino {
    return o && o.$typeUrl === MsgCreatePoolResponse.typeUrl;
  },
  encode(_: MsgCreatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  toAmino(_: MsgCreatePoolResponse, useInterfaces: boolean = true): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg, useInterfaces: boolean = true): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePoolResponse.typeUrl, MsgCreatePoolResponse);
function createBaseMsgUpdateRewardTokenWeight(): MsgUpdateRewardTokenWeight {
  return {
    authority: "",
    bondDenom: "",
    rewardToken: WeightedRewardToken.fromPartial({})
  };
}
export const MsgUpdateRewardTokenWeight = {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeight",
  aminoType: "pryzm/incentives/v1/UpdateRewardWeight",
  is(o: any): o is MsgUpdateRewardTokenWeight {
    return o && (o.$typeUrl === MsgUpdateRewardTokenWeight.typeUrl || typeof o.authority === "string" && typeof o.bondDenom === "string" && WeightedRewardToken.is(o.rewardToken));
  },
  isSDK(o: any): o is MsgUpdateRewardTokenWeightSDKType {
    return o && (o.$typeUrl === MsgUpdateRewardTokenWeight.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && WeightedRewardToken.isSDK(o.reward_token));
  },
  isAmino(o: any): o is MsgUpdateRewardTokenWeightAmino {
    return o && (o.$typeUrl === MsgUpdateRewardTokenWeight.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && WeightedRewardToken.isAmino(o.reward_token));
  },
  encode(message: MsgUpdateRewardTokenWeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.rewardToken !== undefined) {
      WeightedRewardToken.encode(message.rewardToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateRewardTokenWeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardTokenWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardToken = WeightedRewardToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateRewardTokenWeight {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardToken: isSet(object.rewardToken) ? WeightedRewardToken.fromJSON(object.rewardToken) : undefined
    };
  },
  toJSON(message: MsgUpdateRewardTokenWeight): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken ? WeightedRewardToken.toJSON(message.rewardToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateRewardTokenWeight>): MsgUpdateRewardTokenWeight {
    const message = createBaseMsgUpdateRewardTokenWeight();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardToken = object.rewardToken !== undefined && object.rewardToken !== null ? WeightedRewardToken.fromPartial(object.rewardToken) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateRewardTokenWeightAmino): MsgUpdateRewardTokenWeight {
    const message = createBaseMsgUpdateRewardTokenWeight();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = WeightedRewardToken.fromAmino(object.reward_token);
    }
    return message;
  },
  toAmino(message: MsgUpdateRewardTokenWeight, useInterfaces: boolean = true): MsgUpdateRewardTokenWeightAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.reward_token = message.rewardToken ? WeightedRewardToken.toAmino(message.rewardToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardTokenWeightAminoMsg): MsgUpdateRewardTokenWeight {
    return MsgUpdateRewardTokenWeight.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRewardTokenWeight, useInterfaces: boolean = true): MsgUpdateRewardTokenWeightAminoMsg {
    return {
      type: "pryzm/incentives/v1/UpdateRewardWeight",
      value: MsgUpdateRewardTokenWeight.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateRewardTokenWeightProtoMsg, useInterfaces: boolean = true): MsgUpdateRewardTokenWeight {
    return MsgUpdateRewardTokenWeight.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateRewardTokenWeight): Uint8Array {
    return MsgUpdateRewardTokenWeight.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardTokenWeight): MsgUpdateRewardTokenWeightProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeight",
      value: MsgUpdateRewardTokenWeight.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateRewardTokenWeight.typeUrl, MsgUpdateRewardTokenWeight);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateRewardTokenWeight.aminoType, MsgUpdateRewardTokenWeight.typeUrl);
function createBaseMsgUpdateRewardTokenWeightResponse(): MsgUpdateRewardTokenWeightResponse {
  return {};
}
export const MsgUpdateRewardTokenWeightResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse",
  is(o: any): o is MsgUpdateRewardTokenWeightResponse {
    return o && o.$typeUrl === MsgUpdateRewardTokenWeightResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateRewardTokenWeightResponseSDKType {
    return o && o.$typeUrl === MsgUpdateRewardTokenWeightResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateRewardTokenWeightResponseAmino {
    return o && o.$typeUrl === MsgUpdateRewardTokenWeightResponse.typeUrl;
  },
  encode(_: MsgUpdateRewardTokenWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateRewardTokenWeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardTokenWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateRewardTokenWeightResponse {
    return {};
  },
  toJSON(_: MsgUpdateRewardTokenWeightResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateRewardTokenWeightResponse>): MsgUpdateRewardTokenWeightResponse {
    const message = createBaseMsgUpdateRewardTokenWeightResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRewardTokenWeightResponseAmino): MsgUpdateRewardTokenWeightResponse {
    const message = createBaseMsgUpdateRewardTokenWeightResponse();
    return message;
  },
  toAmino(_: MsgUpdateRewardTokenWeightResponse, useInterfaces: boolean = true): MsgUpdateRewardTokenWeightResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRewardTokenWeightResponseAminoMsg): MsgUpdateRewardTokenWeightResponse {
    return MsgUpdateRewardTokenWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRewardTokenWeightResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateRewardTokenWeightResponse {
    return MsgUpdateRewardTokenWeightResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateRewardTokenWeightResponse): Uint8Array {
    return MsgUpdateRewardTokenWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRewardTokenWeightResponse): MsgUpdateRewardTokenWeightResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgUpdateRewardTokenWeightResponse",
      value: MsgUpdateRewardTokenWeightResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateRewardTokenWeightResponse.typeUrl, MsgUpdateRewardTokenWeightResponse);
function createBaseMsgAddRewardTokenToPool(): MsgAddRewardTokenToPool {
  return {
    authority: "",
    bondDenom: "",
    rewardToken: WeightedRewardToken.fromPartial({})
  };
}
export const MsgAddRewardTokenToPool = {
  typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPool",
  aminoType: "pryzm/incentives/v1/AddRewardToken",
  is(o: any): o is MsgAddRewardTokenToPool {
    return o && (o.$typeUrl === MsgAddRewardTokenToPool.typeUrl || typeof o.authority === "string" && typeof o.bondDenom === "string" && WeightedRewardToken.is(o.rewardToken));
  },
  isSDK(o: any): o is MsgAddRewardTokenToPoolSDKType {
    return o && (o.$typeUrl === MsgAddRewardTokenToPool.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && WeightedRewardToken.isSDK(o.reward_token));
  },
  isAmino(o: any): o is MsgAddRewardTokenToPoolAmino {
    return o && (o.$typeUrl === MsgAddRewardTokenToPool.typeUrl || typeof o.authority === "string" && typeof o.bond_denom === "string" && WeightedRewardToken.isAmino(o.reward_token));
  },
  encode(message: MsgAddRewardTokenToPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.rewardToken !== undefined) {
      WeightedRewardToken.encode(message.rewardToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAddRewardTokenToPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardTokenToPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.rewardToken = WeightedRewardToken.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddRewardTokenToPool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      rewardToken: isSet(object.rewardToken) ? WeightedRewardToken.fromJSON(object.rewardToken) : undefined
    };
  },
  toJSON(message: MsgAddRewardTokenToPool): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken ? WeightedRewardToken.toJSON(message.rewardToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgAddRewardTokenToPool>): MsgAddRewardTokenToPool {
    const message = createBaseMsgAddRewardTokenToPool();
    message.authority = object.authority ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.rewardToken = object.rewardToken !== undefined && object.rewardToken !== null ? WeightedRewardToken.fromPartial(object.rewardToken) : undefined;
    return message;
  },
  fromAmino(object: MsgAddRewardTokenToPoolAmino): MsgAddRewardTokenToPool {
    const message = createBaseMsgAddRewardTokenToPool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.reward_token !== undefined && object.reward_token !== null) {
      message.rewardToken = WeightedRewardToken.fromAmino(object.reward_token);
    }
    return message;
  },
  toAmino(message: MsgAddRewardTokenToPool, useInterfaces: boolean = true): MsgAddRewardTokenToPoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.reward_token = message.rewardToken ? WeightedRewardToken.toAmino(message.rewardToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddRewardTokenToPoolAminoMsg): MsgAddRewardTokenToPool {
    return MsgAddRewardTokenToPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddRewardTokenToPool, useInterfaces: boolean = true): MsgAddRewardTokenToPoolAminoMsg {
    return {
      type: "pryzm/incentives/v1/AddRewardToken",
      value: MsgAddRewardTokenToPool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgAddRewardTokenToPoolProtoMsg, useInterfaces: boolean = true): MsgAddRewardTokenToPool {
    return MsgAddRewardTokenToPool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAddRewardTokenToPool): Uint8Array {
    return MsgAddRewardTokenToPool.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRewardTokenToPool): MsgAddRewardTokenToPoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPool",
      value: MsgAddRewardTokenToPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddRewardTokenToPool.typeUrl, MsgAddRewardTokenToPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddRewardTokenToPool.aminoType, MsgAddRewardTokenToPool.typeUrl);
function createBaseMsgAddRewardTokenToPoolResponse(): MsgAddRewardTokenToPoolResponse {
  return {};
}
export const MsgAddRewardTokenToPoolResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse",
  is(o: any): o is MsgAddRewardTokenToPoolResponse {
    return o && o.$typeUrl === MsgAddRewardTokenToPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAddRewardTokenToPoolResponseSDKType {
    return o && o.$typeUrl === MsgAddRewardTokenToPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAddRewardTokenToPoolResponseAmino {
    return o && o.$typeUrl === MsgAddRewardTokenToPoolResponse.typeUrl;
  },
  encode(_: MsgAddRewardTokenToPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAddRewardTokenToPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardTokenToPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddRewardTokenToPoolResponse {
    return {};
  },
  toJSON(_: MsgAddRewardTokenToPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddRewardTokenToPoolResponse>): MsgAddRewardTokenToPoolResponse {
    const message = createBaseMsgAddRewardTokenToPoolResponse();
    return message;
  },
  fromAmino(_: MsgAddRewardTokenToPoolResponseAmino): MsgAddRewardTokenToPoolResponse {
    const message = createBaseMsgAddRewardTokenToPoolResponse();
    return message;
  },
  toAmino(_: MsgAddRewardTokenToPoolResponse, useInterfaces: boolean = true): MsgAddRewardTokenToPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddRewardTokenToPoolResponseAminoMsg): MsgAddRewardTokenToPoolResponse {
    return MsgAddRewardTokenToPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddRewardTokenToPoolResponseProtoMsg, useInterfaces: boolean = true): MsgAddRewardTokenToPoolResponse {
    return MsgAddRewardTokenToPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAddRewardTokenToPoolResponse): Uint8Array {
    return MsgAddRewardTokenToPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRewardTokenToPoolResponse): MsgAddRewardTokenToPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgAddRewardTokenToPoolResponse",
      value: MsgAddRewardTokenToPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddRewardTokenToPoolResponse.typeUrl, MsgAddRewardTokenToPoolResponse);
function createBaseMsgBond(): MsgBond {
  return {
    creator: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgBond = {
  typeUrl: "/pryzm.incentives.v1.MsgBond",
  aminoType: "pryzm/incentives/v1/Bond",
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
      type: "pryzm/incentives/v1/Bond",
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
      typeUrl: "/pryzm.incentives.v1.MsgBond",
      value: MsgBond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBond.typeUrl, MsgBond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBond.aminoType, MsgBond.typeUrl);
function createBaseMsgBondResponse(): MsgBondResponse {
  return {
    bond: Bond.fromPartial({})
  };
}
export const MsgBondResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgBondResponse",
  is(o: any): o is MsgBondResponse {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Bond.is(o.bond));
  },
  isSDK(o: any): o is MsgBondResponseSDKType {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Bond.isSDK(o.bond));
  },
  isAmino(o: any): o is MsgBondResponseAmino {
    return o && (o.$typeUrl === MsgBondResponse.typeUrl || Bond.isAmino(o.bond));
  },
  encode(message: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
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
          message.bond = Bond.decode(reader, reader.uint32(), useInterfaces);
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
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: MsgBondResponse): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  },
  fromAmino(object: MsgBondResponseAmino): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = Bond.fromAmino(object.bond);
    }
    return message;
  },
  toAmino(message: MsgBondResponse, useInterfaces: boolean = true): MsgBondResponseAmino {
    const obj: any = {};
    obj.bond = message.bond ? Bond.toAmino(message.bond, useInterfaces) : undefined;
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
      typeUrl: "/pryzm.incentives.v1.MsgBondResponse",
      value: MsgBondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBondResponse.typeUrl, MsgBondResponse);
function createBaseMsgUnbond(): MsgUnbond {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    unbondTreasury: "",
    rewardTreasury: "",
    autoClaim: false
  };
}
export const MsgUnbond = {
  typeUrl: "/pryzm.incentives.v1.MsgUnbond",
  aminoType: "pryzm/incentives/v1/Unbond",
  is(o: any): o is MsgUnbond {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.is(o.amount) && typeof o.unbondTreasury === "string" && typeof o.rewardTreasury === "string" && typeof o.autoClaim === "boolean");
  },
  isSDK(o: any): o is MsgUnbondSDKType {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.isSDK(o.amount) && typeof o.unbond_treasury === "string" && typeof o.reward_treasury === "string" && typeof o.auto_claim === "boolean");
  },
  isAmino(o: any): o is MsgUnbondAmino {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && Coin.isAmino(o.amount) && typeof o.unbond_treasury === "string" && typeof o.reward_treasury === "string" && typeof o.auto_claim === "boolean");
  },
  encode(message: MsgUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.unbondTreasury !== "") {
      writer.uint32(26).string(message.unbondTreasury);
    }
    if (message.rewardTreasury !== "") {
      writer.uint32(34).string(message.rewardTreasury);
    }
    if (message.autoClaim === true) {
      writer.uint32(40).bool(message.autoClaim);
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
        case 3:
          message.unbondTreasury = reader.string();
          break;
        case 4:
          message.rewardTreasury = reader.string();
          break;
        case 5:
          message.autoClaim = reader.bool();
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      unbondTreasury: isSet(object.unbondTreasury) ? String(object.unbondTreasury) : "",
      rewardTreasury: isSet(object.rewardTreasury) ? String(object.rewardTreasury) : "",
      autoClaim: isSet(object.autoClaim) ? Boolean(object.autoClaim) : false
    };
  },
  toJSON(message: MsgUnbond): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unbondTreasury !== undefined && (obj.unbondTreasury = message.unbondTreasury);
    message.rewardTreasury !== undefined && (obj.rewardTreasury = message.rewardTreasury);
    message.autoClaim !== undefined && (obj.autoClaim = message.autoClaim);
    return obj;
  },
  fromPartial(object: Partial<MsgUnbond>): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.unbondTreasury = object.unbondTreasury ?? "";
    message.rewardTreasury = object.rewardTreasury ?? "";
    message.autoClaim = object.autoClaim ?? false;
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
    if (object.unbond_treasury !== undefined && object.unbond_treasury !== null) {
      message.unbondTreasury = object.unbond_treasury;
    }
    if (object.reward_treasury !== undefined && object.reward_treasury !== null) {
      message.rewardTreasury = object.reward_treasury;
    }
    if (object.auto_claim !== undefined && object.auto_claim !== null) {
      message.autoClaim = object.auto_claim;
    }
    return message;
  },
  toAmino(message: MsgUnbond, useInterfaces: boolean = true): MsgUnbondAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.unbond_treasury = message.unbondTreasury === "" ? undefined : message.unbondTreasury;
    obj.reward_treasury = message.rewardTreasury === "" ? undefined : message.rewardTreasury;
    obj.auto_claim = message.autoClaim === false ? undefined : message.autoClaim;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondAminoMsg): MsgUnbond {
    return MsgUnbond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbond, useInterfaces: boolean = true): MsgUnbondAminoMsg {
    return {
      type: "pryzm/incentives/v1/Unbond",
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
      typeUrl: "/pryzm.incentives.v1.MsgUnbond",
      value: MsgUnbond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbond.typeUrl, MsgUnbond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnbond.aminoType, MsgUnbond.typeUrl);
function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return {
    unbonding: undefined,
    rewards: []
  };
}
export const MsgUnbondResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgUnbondResponse",
  is(o: any): o is MsgUnbondResponse {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isSDK(o: any): o is MsgUnbondResponseSDKType {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is MsgUnbondResponseAmino {
    return o && (o.$typeUrl === MsgUnbondResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: MsgUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbonding !== undefined) {
      Unbonding.encode(message.unbonding, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.unbonding = Unbonding.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
      unbonding: isSet(object.unbonding) ? Unbonding.fromJSON(object.unbonding) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUnbondResponse): unknown {
    const obj: any = {};
    message.unbonding !== undefined && (obj.unbonding = message.unbonding ? Unbonding.toJSON(message.unbonding) : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    message.unbonding = object.unbonding !== undefined && object.unbonding !== null ? Unbonding.fromPartial(object.unbonding) : undefined;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUnbondResponseAmino): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    if (object.unbonding !== undefined && object.unbonding !== null) {
      message.unbonding = Unbonding.fromAmino(object.unbonding);
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUnbondResponse, useInterfaces: boolean = true): MsgUnbondResponseAmino {
    const obj: any = {};
    obj.unbonding = message.unbonding ? Unbonding.toAmino(message.unbonding, useInterfaces) : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
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
      typeUrl: "/pryzm.incentives.v1.MsgUnbondResponse",
      value: MsgUnbondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbondResponse.typeUrl, MsgUnbondResponse);
function createBaseMsgClaimReward(): MsgClaimReward {
  return {
    creator: "",
    bondDenom: "",
    treasury: ""
  };
}
export const MsgClaimReward = {
  typeUrl: "/pryzm.incentives.v1.MsgClaimReward",
  aminoType: "pryzm/incentives/v1/ClaimReward",
  is(o: any): o is MsgClaimReward {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.bondDenom === "string" && typeof o.treasury === "string");
  },
  isSDK(o: any): o is MsgClaimRewardSDKType {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.bond_denom === "string" && typeof o.treasury === "string");
  },
  isAmino(o: any): o is MsgClaimRewardAmino {
    return o && (o.$typeUrl === MsgClaimReward.typeUrl || typeof o.creator === "string" && typeof o.bond_denom === "string" && typeof o.treasury === "string");
  },
  encode(message: MsgClaimReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.treasury !== "") {
      writer.uint32(26).string(message.treasury);
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
          message.bondDenom = reader.string();
          break;
        case 3:
          message.treasury = reader.string();
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
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : ""
    };
  },
  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimReward>): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    message.creator = object.creator ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.treasury = object.treasury ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardAmino): MsgClaimReward {
    const message = createBaseMsgClaimReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.treasury !== undefined && object.treasury !== null) {
      message.treasury = object.treasury;
    }
    return message;
  },
  toAmino(message: MsgClaimReward, useInterfaces: boolean = true): MsgClaimRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.treasury = message.treasury === "" ? undefined : message.treasury;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardAminoMsg): MsgClaimReward {
    return MsgClaimReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimReward, useInterfaces: boolean = true): MsgClaimRewardAminoMsg {
    return {
      type: "pryzm/incentives/v1/ClaimReward",
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
      typeUrl: "/pryzm.incentives.v1.MsgClaimReward",
      value: MsgClaimReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimReward.typeUrl, MsgClaimReward);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimReward.aminoType, MsgClaimReward.typeUrl);
function createBaseMsgClaimRewardResponse(): MsgClaimRewardResponse {
  return {
    rewards: []
  };
}
export const MsgClaimRewardResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgClaimRewardResponse",
  is(o: any): o is MsgClaimRewardResponse {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isSDK(o: any): o is MsgClaimRewardResponseSDKType {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isSDK(o.rewards[0])));
  },
  isAmino(o: any): o is MsgClaimRewardResponseAmino {
    return o && (o.$typeUrl === MsgClaimRewardResponse.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: MsgClaimRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.rewards.push(Coin.decode(reader, reader.uint32(), useInterfaces));
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
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimRewardResponseAmino): MsgClaimRewardResponse {
    const message = createBaseMsgClaimRewardResponse();
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimRewardResponse, useInterfaces: boolean = true): MsgClaimRewardResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
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
      typeUrl: "/pryzm.incentives.v1.MsgClaimRewardResponse",
      value: MsgClaimRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimRewardResponse.typeUrl, MsgClaimRewardResponse);
function createBaseMsgClaimUnbonding(): MsgClaimUnbonding {
  return {
    creator: "",
    unbondingId: BigInt(0)
  };
}
export const MsgClaimUnbonding = {
  typeUrl: "/pryzm.incentives.v1.MsgClaimUnbonding",
  aminoType: "pryzm/incentives/v1/ClaimUnbonding",
  is(o: any): o is MsgClaimUnbonding {
    return o && (o.$typeUrl === MsgClaimUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbondingId === "bigint");
  },
  isSDK(o: any): o is MsgClaimUnbondingSDKType {
    return o && (o.$typeUrl === MsgClaimUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbonding_id === "bigint");
  },
  isAmino(o: any): o is MsgClaimUnbondingAmino {
    return o && (o.$typeUrl === MsgClaimUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbonding_id === "bigint");
  },
  encode(message: MsgClaimUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unbondingId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimUnbonding {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgClaimUnbonding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgClaimUnbonding>): MsgClaimUnbonding {
    const message = createBaseMsgClaimUnbonding();
    message.creator = object.creator ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimUnbondingAmino): MsgClaimUnbonding {
    const message = createBaseMsgClaimUnbonding();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    return message;
  },
  toAmino(message: MsgClaimUnbonding, useInterfaces: boolean = true): MsgClaimUnbondingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.unbonding_id = message.unbondingId ? message.unbondingId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnbondingAminoMsg): MsgClaimUnbonding {
    return MsgClaimUnbonding.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimUnbonding, useInterfaces: boolean = true): MsgClaimUnbondingAminoMsg {
    return {
      type: "pryzm/incentives/v1/ClaimUnbonding",
      value: MsgClaimUnbonding.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgClaimUnbondingProtoMsg, useInterfaces: boolean = true): MsgClaimUnbonding {
    return MsgClaimUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimUnbonding): Uint8Array {
    return MsgClaimUnbonding.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnbonding): MsgClaimUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgClaimUnbonding",
      value: MsgClaimUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimUnbonding.typeUrl, MsgClaimUnbonding);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimUnbonding.aminoType, MsgClaimUnbonding.typeUrl);
function createBaseMsgClaimUnbondingResponse(): MsgClaimUnbondingResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgClaimUnbondingResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgClaimUnbondingResponse",
  is(o: any): o is MsgClaimUnbondingResponse {
    return o && (o.$typeUrl === MsgClaimUnbondingResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgClaimUnbondingResponseSDKType {
    return o && (o.$typeUrl === MsgClaimUnbondingResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgClaimUnbondingResponseAmino {
    return o && (o.$typeUrl === MsgClaimUnbondingResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: MsgClaimUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgClaimUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimUnbondingResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgClaimUnbondingResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimUnbondingResponse>): MsgClaimUnbondingResponse {
    const message = createBaseMsgClaimUnbondingResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimUnbondingResponseAmino): MsgClaimUnbondingResponse {
    const message = createBaseMsgClaimUnbondingResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgClaimUnbondingResponse, useInterfaces: boolean = true): MsgClaimUnbondingResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnbondingResponseAminoMsg): MsgClaimUnbondingResponse {
    return MsgClaimUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUnbondingResponseProtoMsg, useInterfaces: boolean = true): MsgClaimUnbondingResponse {
    return MsgClaimUnbondingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgClaimUnbondingResponse): Uint8Array {
    return MsgClaimUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnbondingResponse): MsgClaimUnbondingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgClaimUnbondingResponse",
      value: MsgClaimUnbondingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimUnbondingResponse.typeUrl, MsgClaimUnbondingResponse);
function createBaseMsgCancelUnbonding(): MsgCancelUnbonding {
  return {
    creator: "",
    unbondingId: BigInt(0),
    amount: Coin.fromPartial({})
  };
}
export const MsgCancelUnbonding = {
  typeUrl: "/pryzm.incentives.v1.MsgCancelUnbonding",
  aminoType: "pryzm/incentives/v1/CancelUnbonding",
  is(o: any): o is MsgCancelUnbonding {
    return o && (o.$typeUrl === MsgCancelUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbondingId === "bigint" && Coin.is(o.amount));
  },
  isSDK(o: any): o is MsgCancelUnbondingSDKType {
    return o && (o.$typeUrl === MsgCancelUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbonding_id === "bigint" && Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is MsgCancelUnbondingAmino {
    return o && (o.$typeUrl === MsgCancelUnbonding.typeUrl || typeof o.creator === "string" && typeof o.unbonding_id === "bigint" && Coin.isAmino(o.amount));
  },
  encode(message: MsgCancelUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.unbondingId !== BigInt(0)) {
      writer.uint32(16).uint64(message.unbondingId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUnbonding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.unbondingId = reader.uint64();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUnbonding {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      unbondingId: isSet(object.unbondingId) ? BigInt(object.unbondingId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgCancelUnbonding): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.unbondingId !== undefined && (obj.unbondingId = (message.unbondingId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUnbonding>): MsgCancelUnbonding {
    const message = createBaseMsgCancelUnbonding();
    message.creator = object.creator ?? "";
    message.unbondingId = object.unbondingId !== undefined && object.unbondingId !== null ? BigInt(object.unbondingId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelUnbondingAmino): MsgCancelUnbonding {
    const message = createBaseMsgCancelUnbonding();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.unbonding_id !== undefined && object.unbonding_id !== null) {
      message.unbondingId = BigInt(object.unbonding_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgCancelUnbonding, useInterfaces: boolean = true): MsgCancelUnbondingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.unbonding_id = message.unbondingId ? message.unbondingId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingAminoMsg): MsgCancelUnbonding {
    return MsgCancelUnbonding.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUnbonding, useInterfaces: boolean = true): MsgCancelUnbondingAminoMsg {
    return {
      type: "pryzm/incentives/v1/CancelUnbonding",
      value: MsgCancelUnbonding.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCancelUnbondingProtoMsg, useInterfaces: boolean = true): MsgCancelUnbonding {
    return MsgCancelUnbonding.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUnbonding): Uint8Array {
    return MsgCancelUnbonding.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbonding): MsgCancelUnbondingProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgCancelUnbonding",
      value: MsgCancelUnbonding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelUnbonding.typeUrl, MsgCancelUnbonding);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelUnbonding.aminoType, MsgCancelUnbonding.typeUrl);
function createBaseMsgCancelUnbondingResponse(): MsgCancelUnbondingResponse {
  return {
    bond: Bond.fromPartial({})
  };
}
export const MsgCancelUnbondingResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgCancelUnbondingResponse",
  is(o: any): o is MsgCancelUnbondingResponse {
    return o && (o.$typeUrl === MsgCancelUnbondingResponse.typeUrl || Bond.is(o.bond));
  },
  isSDK(o: any): o is MsgCancelUnbondingResponseSDKType {
    return o && (o.$typeUrl === MsgCancelUnbondingResponse.typeUrl || Bond.isSDK(o.bond));
  },
  isAmino(o: any): o is MsgCancelUnbondingResponseAmino {
    return o && (o.$typeUrl === MsgCancelUnbondingResponse.typeUrl || Bond.isAmino(o.bond));
  },
  encode(message: MsgCancelUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCancelUnbondingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnbondingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUnbondingResponse {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: MsgCancelUnbondingResponse): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUnbondingResponse>): MsgCancelUnbondingResponse {
    const message = createBaseMsgCancelUnbondingResponse();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelUnbondingResponseAmino): MsgCancelUnbondingResponse {
    const message = createBaseMsgCancelUnbondingResponse();
    if (object.bond !== undefined && object.bond !== null) {
      message.bond = Bond.fromAmino(object.bond);
    }
    return message;
  },
  toAmino(message: MsgCancelUnbondingResponse, useInterfaces: boolean = true): MsgCancelUnbondingResponseAmino {
    const obj: any = {};
    obj.bond = message.bond ? Bond.toAmino(message.bond, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUnbondingResponseAminoMsg): MsgCancelUnbondingResponse {
    return MsgCancelUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelUnbondingResponseProtoMsg, useInterfaces: boolean = true): MsgCancelUnbondingResponse {
    return MsgCancelUnbondingResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCancelUnbondingResponse): Uint8Array {
    return MsgCancelUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUnbondingResponse): MsgCancelUnbondingResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgCancelUnbondingResponse",
      value: MsgCancelUnbondingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelUnbondingResponse.typeUrl, MsgCancelUnbondingResponse);
function createBaseMsgIncentivizePool(): MsgIncentivizePool {
  return {
    creator: "",
    bondDenom: "",
    amount: []
  };
}
export const MsgIncentivizePool = {
  typeUrl: "/pryzm.incentives.v1.MsgIncentivizePool",
  aminoType: "pryzm/incentives/v1/IncentivizePool",
  is(o: any): o is MsgIncentivizePool {
    return o && (o.$typeUrl === MsgIncentivizePool.typeUrl || typeof o.creator === "string" && typeof o.bondDenom === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgIncentivizePoolSDKType {
    return o && (o.$typeUrl === MsgIncentivizePool.typeUrl || typeof o.creator === "string" && typeof o.bond_denom === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgIncentivizePoolAmino {
    return o && (o.$typeUrl === MsgIncentivizePool.typeUrl || typeof o.creator === "string" && typeof o.bond_denom === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgIncentivizePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIncentivizePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivizePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIncentivizePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgIncentivizePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgIncentivizePool>): MsgIncentivizePool {
    const message = createBaseMsgIncentivizePool();
    message.creator = object.creator ?? "";
    message.bondDenom = object.bondDenom ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgIncentivizePoolAmino): MsgIncentivizePool {
    const message = createBaseMsgIncentivizePool();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgIncentivizePool, useInterfaces: boolean = true): MsgIncentivizePoolAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgIncentivizePoolAminoMsg): MsgIncentivizePool {
    return MsgIncentivizePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIncentivizePool, useInterfaces: boolean = true): MsgIncentivizePoolAminoMsg {
    return {
      type: "pryzm/incentives/v1/IncentivizePool",
      value: MsgIncentivizePool.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIncentivizePoolProtoMsg, useInterfaces: boolean = true): MsgIncentivizePool {
    return MsgIncentivizePool.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIncentivizePool): Uint8Array {
    return MsgIncentivizePool.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivizePool): MsgIncentivizePoolProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgIncentivizePool",
      value: MsgIncentivizePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIncentivizePool.typeUrl, MsgIncentivizePool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIncentivizePool.aminoType, MsgIncentivizePool.typeUrl);
function createBaseMsgIncentivizePoolResponse(): MsgIncentivizePoolResponse {
  return {};
}
export const MsgIncentivizePoolResponse = {
  typeUrl: "/pryzm.incentives.v1.MsgIncentivizePoolResponse",
  is(o: any): o is MsgIncentivizePoolResponse {
    return o && o.$typeUrl === MsgIncentivizePoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgIncentivizePoolResponseSDKType {
    return o && o.$typeUrl === MsgIncentivizePoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgIncentivizePoolResponseAmino {
    return o && o.$typeUrl === MsgIncentivizePoolResponse.typeUrl;
  },
  encode(_: MsgIncentivizePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIncentivizePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivizePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgIncentivizePoolResponse {
    return {};
  },
  toJSON(_: MsgIncentivizePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgIncentivizePoolResponse>): MsgIncentivizePoolResponse {
    const message = createBaseMsgIncentivizePoolResponse();
    return message;
  },
  fromAmino(_: MsgIncentivizePoolResponseAmino): MsgIncentivizePoolResponse {
    const message = createBaseMsgIncentivizePoolResponse();
    return message;
  },
  toAmino(_: MsgIncentivizePoolResponse, useInterfaces: boolean = true): MsgIncentivizePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncentivizePoolResponseAminoMsg): MsgIncentivizePoolResponse {
    return MsgIncentivizePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncentivizePoolResponseProtoMsg, useInterfaces: boolean = true): MsgIncentivizePoolResponse {
    return MsgIncentivizePoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIncentivizePoolResponse): Uint8Array {
    return MsgIncentivizePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivizePoolResponse): MsgIncentivizePoolResponseProtoMsg {
    return {
      typeUrl: "/pryzm.incentives.v1.MsgIncentivizePoolResponse",
      value: MsgIncentivizePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIncentivizePoolResponse.typeUrl, MsgIncentivizePoolResponse);