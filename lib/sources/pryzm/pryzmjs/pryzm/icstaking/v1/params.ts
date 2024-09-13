import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the module. */
export interface Params {
  /** the default staking parameters. properties of HostChain.staking_params are overridden to this default params if provided */
  stakingParams: StakingParams;
  /** the list of admin addresses, able to register a new host chain or update an existing host chain */
  admins: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** the default staking parameters. properties of HostChain.staking_params are overridden to this default params if provided */
  staking_params: StakingParamsAmino;
  /** the list of admin addresses, able to register a new host chain or update an existing host chain */
  admins: string[];
}
export interface ParamsAminoMsg {
  type: "/pryzm.icstaking.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  staking_params: StakingParamsSDKType;
  admins: string[];
}
/** StakingParams defines the parameters related to staking on each host chain */
export interface StakingParams {
  /** the amount of operation fees */
  feeRatios: FeeRatios;
  /** the interval in which PRYZM sends delegation messages to the host chain */
  delegationInterval?: Duration;
  /**
   * the interval in which PRYZM sends undelegation messages to the host chain
   * host chain's (UnbondingTime / MaxEntries) must be considered as the max value when setting this field
   */
  undelegationInterval?: Duration;
  /** the time-out value being set on ibc transfer messages */
  ibcTransferTimeout?: Duration;
  /** the time-out value being set on ica messages */
  icaTimeout?: Duration;
  rebalanceParams: RebalanceParams;
  /** the interval in which PRYZM sends LSM redeem messages to the host chain */
  lsmRedeemInterval?: Duration;
}
export interface StakingParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.StakingParams";
  value: Uint8Array;
}
/** StakingParams defines the parameters related to staking on each host chain */
export interface StakingParamsAmino {
  /** the amount of operation fees */
  fee_ratios: FeeRatiosAmino;
  /** the interval in which PRYZM sends delegation messages to the host chain */
  delegation_interval?: DurationAmino;
  /**
   * the interval in which PRYZM sends undelegation messages to the host chain
   * host chain's (UnbondingTime / MaxEntries) must be considered as the max value when setting this field
   */
  undelegation_interval?: DurationAmino;
  /** the time-out value being set on ibc transfer messages */
  ibc_transfer_timeout?: DurationAmino;
  /** the time-out value being set on ica messages */
  ica_timeout?: DurationAmino;
  rebalance_params: RebalanceParamsAmino;
  /** the interval in which PRYZM sends LSM redeem messages to the host chain */
  lsm_redeem_interval?: DurationAmino;
}
export interface StakingParamsAminoMsg {
  type: "/pryzm.icstaking.v1.StakingParams";
  value: StakingParamsAmino;
}
/** StakingParams defines the parameters related to staking on each host chain */
export interface StakingParamsSDKType {
  fee_ratios: FeeRatiosSDKType;
  delegation_interval?: DurationSDKType;
  undelegation_interval?: DurationSDKType;
  ibc_transfer_timeout?: DurationSDKType;
  ica_timeout?: DurationSDKType;
  rebalance_params: RebalanceParamsSDKType;
  lsm_redeem_interval?: DurationSDKType;
}
/** FeeRatios defines the fee ratio operations supported by icstaking */
export interface FeeRatios {
  /** the ratio of fee reduced from yield of staking on the host chain */
  yield?: string;
  /** the ratio of fee reduced from the amount of assets being staked on PRYZM */
  staking?: string;
  /** the ratio of fee reduced from the amount of assets being unstaked from PRYZM */
  unstaking?: string;
  /** the ratio of fee reduced from the amount of assets being instantly unstaked from PRYZM */
  instantUnstaking?: string;
}
export interface FeeRatiosProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.FeeRatios";
  value: Uint8Array;
}
/** FeeRatios defines the fee ratio operations supported by icstaking */
export interface FeeRatiosAmino {
  /** the ratio of fee reduced from yield of staking on the host chain */
  yield?: string;
  /** the ratio of fee reduced from the amount of assets being staked on PRYZM */
  staking?: string;
  /** the ratio of fee reduced from the amount of assets being unstaked from PRYZM */
  unstaking?: string;
  /** the ratio of fee reduced from the amount of assets being instantly unstaked from PRYZM */
  instant_unstaking?: string;
}
export interface FeeRatiosAminoMsg {
  type: "/pryzm.icstaking.v1.FeeRatios";
  value: FeeRatiosAmino;
}
/** FeeRatios defines the fee ratio operations supported by icstaking */
export interface FeeRatiosSDKType {
  yield?: string;
  staking?: string;
  unstaking?: string;
  instant_unstaking?: string;
}
/** RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights */
export interface RebalanceParams {
  /** the maximum number of redelegation messages sent to the host chain in each rebalance operation */
  maxMsgs: number;
  /** the minimum divergence a validator delegation weight must have with the expected weight to start rebalance operation */
  rebalanceThreshold?: string;
  /** the minimum amount of assets for each redelegation message sent to a host chain */
  minRebalanceAmount?: string;
  /** the minimum interval between two rebalance operations */
  minRebalanceInterval?: Duration;
}
export interface RebalanceParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.RebalanceParams";
  value: Uint8Array;
}
/** RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights */
export interface RebalanceParamsAmino {
  /** the maximum number of redelegation messages sent to the host chain in each rebalance operation */
  max_msgs: number;
  /** the minimum divergence a validator delegation weight must have with the expected weight to start rebalance operation */
  rebalance_threshold?: string;
  /** the minimum amount of assets for each redelegation message sent to a host chain */
  min_rebalance_amount?: string;
  /** the minimum interval between two rebalance operations */
  min_rebalance_interval?: DurationAmino;
}
export interface RebalanceParamsAminoMsg {
  type: "/pryzm.icstaking.v1.RebalanceParams";
  value: RebalanceParamsAmino;
}
/** RebalanceParams contains the parameters for re-balancing a host chain's validator delegation weights */
export interface RebalanceParamsSDKType {
  max_msgs: number;
  rebalance_threshold?: string;
  min_rebalance_amount?: string;
  min_rebalance_interval?: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    stakingParams: StakingParams.fromPartial({}),
    admins: []
  };
}
export const Params = {
  typeUrl: "/pryzm.icstaking.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || StakingParams.is(o.stakingParams) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || StakingParams.isSDK(o.staking_params) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || StakingParams.isAmino(o.staking_params) && Array.isArray(o.admins) && (!o.admins.length || typeof o.admins[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingParams !== undefined) {
      StakingParams.encode(message.stakingParams, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.admins) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingParams = StakingParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.admins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      stakingParams: isSet(object.stakingParams) ? StakingParams.fromJSON(object.stakingParams) : undefined,
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.stakingParams !== undefined && (obj.stakingParams = message.stakingParams ? StakingParams.toJSON(message.stakingParams) : undefined);
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakingParams = object.stakingParams !== undefined && object.stakingParams !== null ? StakingParams.fromPartial(object.stakingParams) : undefined;
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.staking_params !== undefined && object.staking_params !== null) {
      message.stakingParams = StakingParams.fromAmino(object.staking_params);
    }
    message.admins = object.admins?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params, useInterfaces: boolean = true): ParamsAmino {
    const obj: any = {};
    obj.staking_params = message.stakingParams ? StakingParams.toAmino(message.stakingParams, useInterfaces) : undefined;
    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = message.admins;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg, useInterfaces: boolean = true): Params {
    return Params.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseStakingParams(): StakingParams {
  return {
    feeRatios: FeeRatios.fromPartial({}),
    delegationInterval: undefined,
    undelegationInterval: undefined,
    ibcTransferTimeout: undefined,
    icaTimeout: undefined,
    rebalanceParams: RebalanceParams.fromPartial({}),
    lsmRedeemInterval: undefined
  };
}
export const StakingParams = {
  typeUrl: "/pryzm.icstaking.v1.StakingParams",
  is(o: any): o is StakingParams {
    return o && (o.$typeUrl === StakingParams.typeUrl || FeeRatios.is(o.feeRatios) && RebalanceParams.is(o.rebalanceParams));
  },
  isSDK(o: any): o is StakingParamsSDKType {
    return o && (o.$typeUrl === StakingParams.typeUrl || FeeRatios.isSDK(o.fee_ratios) && RebalanceParams.isSDK(o.rebalance_params));
  },
  isAmino(o: any): o is StakingParamsAmino {
    return o && (o.$typeUrl === StakingParams.typeUrl || FeeRatios.isAmino(o.fee_ratios) && RebalanceParams.isAmino(o.rebalance_params));
  },
  encode(message: StakingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegationInterval !== undefined) {
      Duration.encode(message.delegationInterval, writer.uint32(18).fork()).ldelim();
    }
    if (message.undelegationInterval !== undefined) {
      Duration.encode(message.undelegationInterval, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcTransferTimeout !== undefined) {
      Duration.encode(message.ibcTransferTimeout, writer.uint32(34).fork()).ldelim();
    }
    if (message.icaTimeout !== undefined) {
      Duration.encode(message.icaTimeout, writer.uint32(42).fork()).ldelim();
    }
    if (message.rebalanceParams !== undefined) {
      RebalanceParams.encode(message.rebalanceParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.lsmRedeemInterval !== undefined) {
      Duration.encode(message.lsmRedeemInterval, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): StakingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.delegationInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.undelegationInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.ibcTransferTimeout = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.icaTimeout = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.rebalanceParams = RebalanceParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.lsmRedeemInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StakingParams {
    return {
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined,
      delegationInterval: isSet(object.delegationInterval) ? Duration.fromJSON(object.delegationInterval) : undefined,
      undelegationInterval: isSet(object.undelegationInterval) ? Duration.fromJSON(object.undelegationInterval) : undefined,
      ibcTransferTimeout: isSet(object.ibcTransferTimeout) ? Duration.fromJSON(object.ibcTransferTimeout) : undefined,
      icaTimeout: isSet(object.icaTimeout) ? Duration.fromJSON(object.icaTimeout) : undefined,
      rebalanceParams: isSet(object.rebalanceParams) ? RebalanceParams.fromJSON(object.rebalanceParams) : undefined,
      lsmRedeemInterval: isSet(object.lsmRedeemInterval) ? Duration.fromJSON(object.lsmRedeemInterval) : undefined
    };
  },
  toJSON(message: StakingParams): unknown {
    const obj: any = {};
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    message.delegationInterval !== undefined && (obj.delegationInterval = message.delegationInterval ? Duration.toJSON(message.delegationInterval) : undefined);
    message.undelegationInterval !== undefined && (obj.undelegationInterval = message.undelegationInterval ? Duration.toJSON(message.undelegationInterval) : undefined);
    message.ibcTransferTimeout !== undefined && (obj.ibcTransferTimeout = message.ibcTransferTimeout ? Duration.toJSON(message.ibcTransferTimeout) : undefined);
    message.icaTimeout !== undefined && (obj.icaTimeout = message.icaTimeout ? Duration.toJSON(message.icaTimeout) : undefined);
    message.rebalanceParams !== undefined && (obj.rebalanceParams = message.rebalanceParams ? RebalanceParams.toJSON(message.rebalanceParams) : undefined);
    message.lsmRedeemInterval !== undefined && (obj.lsmRedeemInterval = message.lsmRedeemInterval ? Duration.toJSON(message.lsmRedeemInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StakingParams>): StakingParams {
    const message = createBaseStakingParams();
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    message.delegationInterval = object.delegationInterval !== undefined && object.delegationInterval !== null ? Duration.fromPartial(object.delegationInterval) : undefined;
    message.undelegationInterval = object.undelegationInterval !== undefined && object.undelegationInterval !== null ? Duration.fromPartial(object.undelegationInterval) : undefined;
    message.ibcTransferTimeout = object.ibcTransferTimeout !== undefined && object.ibcTransferTimeout !== null ? Duration.fromPartial(object.ibcTransferTimeout) : undefined;
    message.icaTimeout = object.icaTimeout !== undefined && object.icaTimeout !== null ? Duration.fromPartial(object.icaTimeout) : undefined;
    message.rebalanceParams = object.rebalanceParams !== undefined && object.rebalanceParams !== null ? RebalanceParams.fromPartial(object.rebalanceParams) : undefined;
    message.lsmRedeemInterval = object.lsmRedeemInterval !== undefined && object.lsmRedeemInterval !== null ? Duration.fromPartial(object.lsmRedeemInterval) : undefined;
    return message;
  },
  fromAmino(object: StakingParamsAmino): StakingParams {
    const message = createBaseStakingParams();
    if (object.fee_ratios !== undefined && object.fee_ratios !== null) {
      message.feeRatios = FeeRatios.fromAmino(object.fee_ratios);
    }
    if (object.delegation_interval !== undefined && object.delegation_interval !== null) {
      message.delegationInterval = Duration.fromAmino(object.delegation_interval);
    }
    if (object.undelegation_interval !== undefined && object.undelegation_interval !== null) {
      message.undelegationInterval = Duration.fromAmino(object.undelegation_interval);
    }
    if (object.ibc_transfer_timeout !== undefined && object.ibc_transfer_timeout !== null) {
      message.ibcTransferTimeout = Duration.fromAmino(object.ibc_transfer_timeout);
    }
    if (object.ica_timeout !== undefined && object.ica_timeout !== null) {
      message.icaTimeout = Duration.fromAmino(object.ica_timeout);
    }
    if (object.rebalance_params !== undefined && object.rebalance_params !== null) {
      message.rebalanceParams = RebalanceParams.fromAmino(object.rebalance_params);
    }
    if (object.lsm_redeem_interval !== undefined && object.lsm_redeem_interval !== null) {
      message.lsmRedeemInterval = Duration.fromAmino(object.lsm_redeem_interval);
    }
    return message;
  },
  toAmino(message: StakingParams, useInterfaces: boolean = true): StakingParamsAmino {
    const obj: any = {};
    obj.fee_ratios = message.feeRatios ? FeeRatios.toAmino(message.feeRatios, useInterfaces) : undefined;
    obj.delegation_interval = message.delegationInterval ? Duration.toAmino(message.delegationInterval, useInterfaces) : undefined;
    obj.undelegation_interval = message.undelegationInterval ? Duration.toAmino(message.undelegationInterval, useInterfaces) : undefined;
    obj.ibc_transfer_timeout = message.ibcTransferTimeout ? Duration.toAmino(message.ibcTransferTimeout, useInterfaces) : undefined;
    obj.ica_timeout = message.icaTimeout ? Duration.toAmino(message.icaTimeout, useInterfaces) : undefined;
    obj.rebalance_params = message.rebalanceParams ? RebalanceParams.toAmino(message.rebalanceParams, useInterfaces) : undefined;
    obj.lsm_redeem_interval = message.lsmRedeemInterval ? Duration.toAmino(message.lsmRedeemInterval, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: StakingParamsAminoMsg): StakingParams {
    return StakingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: StakingParamsProtoMsg, useInterfaces: boolean = true): StakingParams {
    return StakingParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: StakingParams): Uint8Array {
    return StakingParams.encode(message).finish();
  },
  toProtoMsg(message: StakingParams): StakingParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.StakingParams",
      value: StakingParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StakingParams.typeUrl, StakingParams);
function createBaseFeeRatios(): FeeRatios {
  return {
    yield: undefined,
    staking: undefined,
    unstaking: undefined,
    instantUnstaking: undefined
  };
}
export const FeeRatios = {
  typeUrl: "/pryzm.icstaking.v1.FeeRatios",
  is(o: any): o is FeeRatios {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
  isSDK(o: any): o is FeeRatiosSDKType {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
  isAmino(o: any): o is FeeRatiosAmino {
    return o && o.$typeUrl === FeeRatios.typeUrl;
  },
  encode(message: FeeRatios, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yield !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.yield, 18).atomics);
    }
    if (message.staking !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.unstaking !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.unstaking, 18).atomics);
    }
    if (message.instantUnstaking !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.instantUnstaking, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): FeeRatios {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yield = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.unstaking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.instantUnstaking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeRatios {
    return {
      yield: isSet(object.yield) ? String(object.yield) : undefined,
      staking: isSet(object.staking) ? String(object.staking) : undefined,
      unstaking: isSet(object.unstaking) ? String(object.unstaking) : undefined,
      instantUnstaking: isSet(object.instantUnstaking) ? String(object.instantUnstaking) : undefined
    };
  },
  toJSON(message: FeeRatios): unknown {
    const obj: any = {};
    message.yield !== undefined && (obj.yield = message.yield);
    message.staking !== undefined && (obj.staking = message.staking);
    message.unstaking !== undefined && (obj.unstaking = message.unstaking);
    message.instantUnstaking !== undefined && (obj.instantUnstaking = message.instantUnstaking);
    return obj;
  },
  fromPartial(object: Partial<FeeRatios>): FeeRatios {
    const message = createBaseFeeRatios();
    message.yield = object.yield ?? undefined;
    message.staking = object.staking ?? undefined;
    message.unstaking = object.unstaking ?? undefined;
    message.instantUnstaking = object.instantUnstaking ?? undefined;
    return message;
  },
  fromAmino(object: FeeRatiosAmino): FeeRatios {
    const message = createBaseFeeRatios();
    if (object.yield !== undefined && object.yield !== null) {
      message.yield = object.yield;
    }
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.unstaking !== undefined && object.unstaking !== null) {
      message.unstaking = object.unstaking;
    }
    if (object.instant_unstaking !== undefined && object.instant_unstaking !== null) {
      message.instantUnstaking = object.instant_unstaking;
    }
    return message;
  },
  toAmino(message: FeeRatios, useInterfaces: boolean = true): FeeRatiosAmino {
    const obj: any = {};
    obj.yield = padDecimal(message.yield) === null ? undefined : padDecimal(message.yield);
    obj.staking = padDecimal(message.staking) === null ? undefined : padDecimal(message.staking);
    obj.unstaking = padDecimal(message.unstaking) === null ? undefined : padDecimal(message.unstaking);
    obj.instant_unstaking = padDecimal(message.instantUnstaking) === null ? undefined : padDecimal(message.instantUnstaking);
    return obj;
  },
  fromAminoMsg(object: FeeRatiosAminoMsg): FeeRatios {
    return FeeRatios.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeRatiosProtoMsg, useInterfaces: boolean = true): FeeRatios {
    return FeeRatios.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: FeeRatios): Uint8Array {
    return FeeRatios.encode(message).finish();
  },
  toProtoMsg(message: FeeRatios): FeeRatiosProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.FeeRatios",
      value: FeeRatios.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeeRatios.typeUrl, FeeRatios);
function createBaseRebalanceParams(): RebalanceParams {
  return {
    maxMsgs: 0,
    rebalanceThreshold: undefined,
    minRebalanceAmount: undefined,
    minRebalanceInterval: undefined
  };
}
export const RebalanceParams = {
  typeUrl: "/pryzm.icstaking.v1.RebalanceParams",
  is(o: any): o is RebalanceParams {
    return o && (o.$typeUrl === RebalanceParams.typeUrl || typeof o.maxMsgs === "number");
  },
  isSDK(o: any): o is RebalanceParamsSDKType {
    return o && (o.$typeUrl === RebalanceParams.typeUrl || typeof o.max_msgs === "number");
  },
  isAmino(o: any): o is RebalanceParamsAmino {
    return o && (o.$typeUrl === RebalanceParams.typeUrl || typeof o.max_msgs === "number");
  },
  encode(message: RebalanceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxMsgs !== 0) {
      writer.uint32(8).int32(message.maxMsgs);
    }
    if (message.rebalanceThreshold !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.rebalanceThreshold, 18).atomics);
    }
    if (message.minRebalanceAmount !== undefined) {
      writer.uint32(26).string(message.minRebalanceAmount);
    }
    if (message.minRebalanceInterval !== undefined) {
      Duration.encode(message.minRebalanceInterval, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): RebalanceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRebalanceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMsgs = reader.int32();
          break;
        case 2:
          message.rebalanceThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.minRebalanceAmount = reader.string();
          break;
        case 4:
          message.minRebalanceInterval = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RebalanceParams {
    return {
      maxMsgs: isSet(object.maxMsgs) ? Number(object.maxMsgs) : 0,
      rebalanceThreshold: isSet(object.rebalanceThreshold) ? String(object.rebalanceThreshold) : undefined,
      minRebalanceAmount: isSet(object.minRebalanceAmount) ? String(object.minRebalanceAmount) : undefined,
      minRebalanceInterval: isSet(object.minRebalanceInterval) ? Duration.fromJSON(object.minRebalanceInterval) : undefined
    };
  },
  toJSON(message: RebalanceParams): unknown {
    const obj: any = {};
    message.maxMsgs !== undefined && (obj.maxMsgs = Math.round(message.maxMsgs));
    message.rebalanceThreshold !== undefined && (obj.rebalanceThreshold = message.rebalanceThreshold);
    message.minRebalanceAmount !== undefined && (obj.minRebalanceAmount = message.minRebalanceAmount);
    message.minRebalanceInterval !== undefined && (obj.minRebalanceInterval = message.minRebalanceInterval ? Duration.toJSON(message.minRebalanceInterval) : undefined);
    return obj;
  },
  fromPartial(object: Partial<RebalanceParams>): RebalanceParams {
    const message = createBaseRebalanceParams();
    message.maxMsgs = object.maxMsgs ?? 0;
    message.rebalanceThreshold = object.rebalanceThreshold ?? undefined;
    message.minRebalanceAmount = object.minRebalanceAmount ?? undefined;
    message.minRebalanceInterval = object.minRebalanceInterval !== undefined && object.minRebalanceInterval !== null ? Duration.fromPartial(object.minRebalanceInterval) : undefined;
    return message;
  },
  fromAmino(object: RebalanceParamsAmino): RebalanceParams {
    const message = createBaseRebalanceParams();
    if (object.max_msgs !== undefined && object.max_msgs !== null) {
      message.maxMsgs = object.max_msgs;
    }
    if (object.rebalance_threshold !== undefined && object.rebalance_threshold !== null) {
      message.rebalanceThreshold = object.rebalance_threshold;
    }
    if (object.min_rebalance_amount !== undefined && object.min_rebalance_amount !== null) {
      message.minRebalanceAmount = object.min_rebalance_amount;
    }
    if (object.min_rebalance_interval !== undefined && object.min_rebalance_interval !== null) {
      message.minRebalanceInterval = Duration.fromAmino(object.min_rebalance_interval);
    }
    return message;
  },
  toAmino(message: RebalanceParams, useInterfaces: boolean = true): RebalanceParamsAmino {
    const obj: any = {};
    obj.max_msgs = message.maxMsgs === 0 ? undefined : message.maxMsgs;
    obj.rebalance_threshold = padDecimal(message.rebalanceThreshold) === null ? undefined : padDecimal(message.rebalanceThreshold);
    obj.min_rebalance_amount = message.minRebalanceAmount === null ? undefined : message.minRebalanceAmount;
    obj.min_rebalance_interval = message.minRebalanceInterval ? Duration.toAmino(message.minRebalanceInterval, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: RebalanceParamsAminoMsg): RebalanceParams {
    return RebalanceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: RebalanceParamsProtoMsg, useInterfaces: boolean = true): RebalanceParams {
    return RebalanceParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: RebalanceParams): Uint8Array {
    return RebalanceParams.encode(message).finish();
  },
  toProtoMsg(message: RebalanceParams): RebalanceParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.RebalanceParams",
      value: RebalanceParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RebalanceParams.typeUrl, RebalanceParams);