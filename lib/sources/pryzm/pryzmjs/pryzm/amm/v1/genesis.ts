import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { PoolToken, PoolTokenAmino, PoolTokenSDKType } from "./pool_token";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { WeightedPoolProperties, WeightedPoolPropertiesAmino, WeightedPoolPropertiesSDKType } from "./weighted_token";
import { VirtualBalancePoolToken, VirtualBalancePoolTokenAmino, VirtualBalancePoolTokenSDKType } from "./virtual_balance_pool_token";
import { YammConfiguration, YammConfigurationAmino, YammConfigurationSDKType } from "./yamm_configuration";
import { WhitelistedRoute, WhitelistedRouteAmino, WhitelistedRouteSDKType } from "./whitelisted_route";
import { Order, OrderAmino, OrderSDKType, DisabledOrderPair, DisabledOrderPairAmino, DisabledOrderPairSDKType } from "./order";
import { ScheduleOrder, ScheduleOrderAmino, ScheduleOrderSDKType } from "./schedule_order";
import { OraclePricePair, OraclePricePairAmino, OraclePricePairSDKType } from "./oracle_price_pair";
import { PendingTokenIntroduction, PendingTokenIntroductionAmino, PendingTokenIntroductionSDKType } from "./pending_token_introduction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface GenesisPoolData {
  pool: Pool;
  totalLpTokenSupply: string;
  poolTokenList: PoolToken[];
}
export interface GenesisPoolDataProtoMsg {
  typeUrl: "/pryzm.amm.v1.GenesisPoolData";
  value: Uint8Array;
}
export interface GenesisPoolDataAmino {
  pool?: PoolAmino;
  total_lp_token_supply?: string;
  pool_token_list?: PoolTokenAmino[];
}
export interface GenesisPoolDataAminoMsg {
  type: "/pryzm.amm.v1.GenesisPoolData";
  value: GenesisPoolDataAmino;
}
export interface GenesisPoolDataSDKType {
  pool: PoolSDKType;
  total_lp_token_supply: string;
  pool_token_list: PoolTokenSDKType[];
}
export interface YammPoolAssetId {
  poolId: bigint;
  assetId: string;
}
export interface YammPoolAssetIdProtoMsg {
  typeUrl: "/pryzm.amm.v1.YammPoolAssetId";
  value: Uint8Array;
}
export interface YammPoolAssetIdAmino {
  pool_id?: string;
  asset_id?: string;
}
export interface YammPoolAssetIdAminoMsg {
  type: "/pryzm.amm.v1.YammPoolAssetId";
  value: YammPoolAssetIdAmino;
}
export interface YammPoolAssetIdSDKType {
  pool_id: bigint;
  asset_id: string;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: GenesisPoolData[];
  weightedPoolPropertiesList: WeightedPoolProperties[];
  yammPoolAssetIdList: YammPoolAssetId[];
  introducingPoolTokenList: VirtualBalancePoolToken[];
  expiringPoolTokenList: VirtualBalancePoolToken[];
  yammConfigurationList: YammConfiguration[];
  whitelistedRouteList: WhitelistedRoute[];
  orderList: Order[];
  orderCount: bigint;
  executableOrderList: bigint[];
  scheduleOrderList: ScheduleOrder[];
  vaultPaused: boolean;
  oraclePricePairList: OraclePricePair[];
  pendingTokenIntroductionList: PendingTokenIntroduction[];
  disabledOrderPairList: DisabledOrderPair[];
  nextExecutableOrderKey: Uint8Array;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.amm.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pool_list?: GenesisPoolDataAmino[];
  weighted_pool_properties_list?: WeightedPoolPropertiesAmino[];
  yamm_pool_asset_id_list?: YammPoolAssetIdAmino[];
  introducing_pool_token_list?: VirtualBalancePoolTokenAmino[];
  expiring_pool_token_list?: VirtualBalancePoolTokenAmino[];
  yamm_configuration_list?: YammConfigurationAmino[];
  whitelisted_route_list?: WhitelistedRouteAmino[];
  order_list?: OrderAmino[];
  order_count?: string;
  executable_order_list?: string[];
  schedule_order_list?: ScheduleOrderAmino[];
  vault_paused?: boolean;
  oracle_price_pair_list?: OraclePricePairAmino[];
  pending_token_introduction_list?: PendingTokenIntroductionAmino[];
  disabled_order_pair_list?: DisabledOrderPairAmino[];
  next_executable_order_key?: string;
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.amm.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the amm module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: GenesisPoolDataSDKType[];
  weighted_pool_properties_list: WeightedPoolPropertiesSDKType[];
  yamm_pool_asset_id_list: YammPoolAssetIdSDKType[];
  introducing_pool_token_list: VirtualBalancePoolTokenSDKType[];
  expiring_pool_token_list: VirtualBalancePoolTokenSDKType[];
  yamm_configuration_list: YammConfigurationSDKType[];
  whitelisted_route_list: WhitelistedRouteSDKType[];
  order_list: OrderSDKType[];
  order_count: bigint;
  executable_order_list: bigint[];
  schedule_order_list: ScheduleOrderSDKType[];
  vault_paused: boolean;
  oracle_price_pair_list: OraclePricePairSDKType[];
  pending_token_introduction_list: PendingTokenIntroductionSDKType[];
  disabled_order_pair_list: DisabledOrderPairSDKType[];
  next_executable_order_key: Uint8Array;
}
function createBaseGenesisPoolData(): GenesisPoolData {
  return {
    pool: Pool.fromPartial({}),
    totalLpTokenSupply: "",
    poolTokenList: []
  };
}
export const GenesisPoolData = {
  typeUrl: "/pryzm.amm.v1.GenesisPoolData",
  is(o: any): o is GenesisPoolData {
    return o && (o.$typeUrl === GenesisPoolData.typeUrl || Pool.is(o.pool) && typeof o.totalLpTokenSupply === "string" && Array.isArray(o.poolTokenList) && (!o.poolTokenList.length || PoolToken.is(o.poolTokenList[0])));
  },
  isSDK(o: any): o is GenesisPoolDataSDKType {
    return o && (o.$typeUrl === GenesisPoolData.typeUrl || Pool.isSDK(o.pool) && typeof o.total_lp_token_supply === "string" && Array.isArray(o.pool_token_list) && (!o.pool_token_list.length || PoolToken.isSDK(o.pool_token_list[0])));
  },
  isAmino(o: any): o is GenesisPoolDataAmino {
    return o && (o.$typeUrl === GenesisPoolData.typeUrl || Pool.isAmino(o.pool) && typeof o.total_lp_token_supply === "string" && Array.isArray(o.pool_token_list) && (!o.pool_token_list.length || PoolToken.isAmino(o.pool_token_list[0])));
  },
  encode(message: GenesisPoolData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalLpTokenSupply !== "") {
      writer.uint32(18).string(message.totalLpTokenSupply);
    }
    for (const v of message.poolTokenList) {
      PoolToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisPoolData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisPoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.totalLpTokenSupply = reader.string();
          break;
        case 3:
          message.poolTokenList.push(PoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisPoolData {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      totalLpTokenSupply: isSet(object.totalLpTokenSupply) ? String(object.totalLpTokenSupply) : "",
      poolTokenList: Array.isArray(object?.poolTokenList) ? object.poolTokenList.map((e: any) => PoolToken.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisPoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.totalLpTokenSupply !== undefined && (obj.totalLpTokenSupply = message.totalLpTokenSupply);
    if (message.poolTokenList) {
      obj.poolTokenList = message.poolTokenList.map(e => e ? PoolToken.toJSON(e) : undefined);
    } else {
      obj.poolTokenList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisPoolData>): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.totalLpTokenSupply = object.totalLpTokenSupply ?? "";
    message.poolTokenList = object.poolTokenList?.map(e => PoolToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisPoolDataAmino): GenesisPoolData {
    const message = createBaseGenesisPoolData();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.total_lp_token_supply !== undefined && object.total_lp_token_supply !== null) {
      message.totalLpTokenSupply = object.total_lp_token_supply;
    }
    message.poolTokenList = object.pool_token_list?.map(e => PoolToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisPoolData, useInterfaces: boolean = true): GenesisPoolDataAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool, useInterfaces) : undefined;
    obj.total_lp_token_supply = message.totalLpTokenSupply === "" ? undefined : message.totalLpTokenSupply;
    if (message.poolTokenList) {
      obj.pool_token_list = message.poolTokenList.map(e => e ? PoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_token_list = message.poolTokenList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisPoolDataAminoMsg): GenesisPoolData {
    return GenesisPoolData.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisPoolDataProtoMsg, useInterfaces: boolean = true): GenesisPoolData {
    return GenesisPoolData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisPoolData): Uint8Array {
    return GenesisPoolData.encode(message).finish();
  },
  toProtoMsg(message: GenesisPoolData): GenesisPoolDataProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GenesisPoolData",
      value: GenesisPoolData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisPoolData.typeUrl, GenesisPoolData);
function createBaseYammPoolAssetId(): YammPoolAssetId {
  return {
    poolId: BigInt(0),
    assetId: ""
  };
}
export const YammPoolAssetId = {
  typeUrl: "/pryzm.amm.v1.YammPoolAssetId",
  is(o: any): o is YammPoolAssetId {
    return o && (o.$typeUrl === YammPoolAssetId.typeUrl || typeof o.poolId === "bigint" && typeof o.assetId === "string");
  },
  isSDK(o: any): o is YammPoolAssetIdSDKType {
    return o && (o.$typeUrl === YammPoolAssetId.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset_id === "string");
  },
  isAmino(o: any): o is YammPoolAssetIdAmino {
    return o && (o.$typeUrl === YammPoolAssetId.typeUrl || typeof o.pool_id === "bigint" && typeof o.asset_id === "string");
  },
  encode(message: YammPoolAssetId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): YammPoolAssetId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseYammPoolAssetId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): YammPoolAssetId {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: YammPoolAssetId): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<YammPoolAssetId>): YammPoolAssetId {
    const message = createBaseYammPoolAssetId();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: YammPoolAssetIdAmino): YammPoolAssetId {
    const message = createBaseYammPoolAssetId();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: YammPoolAssetId, useInterfaces: boolean = true): YammPoolAssetIdAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: YammPoolAssetIdAminoMsg): YammPoolAssetId {
    return YammPoolAssetId.fromAmino(object.value);
  },
  fromProtoMsg(message: YammPoolAssetIdProtoMsg, useInterfaces: boolean = true): YammPoolAssetId {
    return YammPoolAssetId.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: YammPoolAssetId): Uint8Array {
    return YammPoolAssetId.encode(message).finish();
  },
  toProtoMsg(message: YammPoolAssetId): YammPoolAssetIdProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.YammPoolAssetId",
      value: YammPoolAssetId.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(YammPoolAssetId.typeUrl, YammPoolAssetId);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    weightedPoolPropertiesList: [],
    yammPoolAssetIdList: [],
    introducingPoolTokenList: [],
    expiringPoolTokenList: [],
    yammConfigurationList: [],
    whitelistedRouteList: [],
    orderList: [],
    orderCount: BigInt(0),
    executableOrderList: [],
    scheduleOrderList: [],
    vaultPaused: false,
    oraclePricePairList: [],
    pendingTokenIntroductionList: [],
    disabledOrderPairList: [],
    nextExecutableOrderKey: new Uint8Array()
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.amm.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.poolList) && (!o.poolList.length || GenesisPoolData.is(o.poolList[0])) && Array.isArray(o.weightedPoolPropertiesList) && (!o.weightedPoolPropertiesList.length || WeightedPoolProperties.is(o.weightedPoolPropertiesList[0])) && Array.isArray(o.yammPoolAssetIdList) && (!o.yammPoolAssetIdList.length || YammPoolAssetId.is(o.yammPoolAssetIdList[0])) && Array.isArray(o.introducingPoolTokenList) && (!o.introducingPoolTokenList.length || VirtualBalancePoolToken.is(o.introducingPoolTokenList[0])) && Array.isArray(o.expiringPoolTokenList) && (!o.expiringPoolTokenList.length || VirtualBalancePoolToken.is(o.expiringPoolTokenList[0])) && Array.isArray(o.yammConfigurationList) && (!o.yammConfigurationList.length || YammConfiguration.is(o.yammConfigurationList[0])) && Array.isArray(o.whitelistedRouteList) && (!o.whitelistedRouteList.length || WhitelistedRoute.is(o.whitelistedRouteList[0])) && Array.isArray(o.orderList) && (!o.orderList.length || Order.is(o.orderList[0])) && typeof o.orderCount === "bigint" && Array.isArray(o.executableOrderList) && (!o.executableOrderList.length || typeof o.executableOrderList[0] === "bigint") && Array.isArray(o.scheduleOrderList) && (!o.scheduleOrderList.length || ScheduleOrder.is(o.scheduleOrderList[0])) && typeof o.vaultPaused === "boolean" && Array.isArray(o.oraclePricePairList) && (!o.oraclePricePairList.length || OraclePricePair.is(o.oraclePricePairList[0])) && Array.isArray(o.pendingTokenIntroductionList) && (!o.pendingTokenIntroductionList.length || PendingTokenIntroduction.is(o.pendingTokenIntroductionList[0])) && Array.isArray(o.disabledOrderPairList) && (!o.disabledOrderPairList.length || DisabledOrderPair.is(o.disabledOrderPairList[0])) && (o.nextExecutableOrderKey instanceof Uint8Array || typeof o.nextExecutableOrderKey === "string"));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.pool_list) && (!o.pool_list.length || GenesisPoolData.isSDK(o.pool_list[0])) && Array.isArray(o.weighted_pool_properties_list) && (!o.weighted_pool_properties_list.length || WeightedPoolProperties.isSDK(o.weighted_pool_properties_list[0])) && Array.isArray(o.yamm_pool_asset_id_list) && (!o.yamm_pool_asset_id_list.length || YammPoolAssetId.isSDK(o.yamm_pool_asset_id_list[0])) && Array.isArray(o.introducing_pool_token_list) && (!o.introducing_pool_token_list.length || VirtualBalancePoolToken.isSDK(o.introducing_pool_token_list[0])) && Array.isArray(o.expiring_pool_token_list) && (!o.expiring_pool_token_list.length || VirtualBalancePoolToken.isSDK(o.expiring_pool_token_list[0])) && Array.isArray(o.yamm_configuration_list) && (!o.yamm_configuration_list.length || YammConfiguration.isSDK(o.yamm_configuration_list[0])) && Array.isArray(o.whitelisted_route_list) && (!o.whitelisted_route_list.length || WhitelistedRoute.isSDK(o.whitelisted_route_list[0])) && Array.isArray(o.order_list) && (!o.order_list.length || Order.isSDK(o.order_list[0])) && typeof o.order_count === "bigint" && Array.isArray(o.executable_order_list) && (!o.executable_order_list.length || typeof o.executable_order_list[0] === "bigint") && Array.isArray(o.schedule_order_list) && (!o.schedule_order_list.length || ScheduleOrder.isSDK(o.schedule_order_list[0])) && typeof o.vault_paused === "boolean" && Array.isArray(o.oracle_price_pair_list) && (!o.oracle_price_pair_list.length || OraclePricePair.isSDK(o.oracle_price_pair_list[0])) && Array.isArray(o.pending_token_introduction_list) && (!o.pending_token_introduction_list.length || PendingTokenIntroduction.isSDK(o.pending_token_introduction_list[0])) && Array.isArray(o.disabled_order_pair_list) && (!o.disabled_order_pair_list.length || DisabledOrderPair.isSDK(o.disabled_order_pair_list[0])) && (o.next_executable_order_key instanceof Uint8Array || typeof o.next_executable_order_key === "string"));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.pool_list) && (!o.pool_list.length || GenesisPoolData.isAmino(o.pool_list[0])) && Array.isArray(o.weighted_pool_properties_list) && (!o.weighted_pool_properties_list.length || WeightedPoolProperties.isAmino(o.weighted_pool_properties_list[0])) && Array.isArray(o.yamm_pool_asset_id_list) && (!o.yamm_pool_asset_id_list.length || YammPoolAssetId.isAmino(o.yamm_pool_asset_id_list[0])) && Array.isArray(o.introducing_pool_token_list) && (!o.introducing_pool_token_list.length || VirtualBalancePoolToken.isAmino(o.introducing_pool_token_list[0])) && Array.isArray(o.expiring_pool_token_list) && (!o.expiring_pool_token_list.length || VirtualBalancePoolToken.isAmino(o.expiring_pool_token_list[0])) && Array.isArray(o.yamm_configuration_list) && (!o.yamm_configuration_list.length || YammConfiguration.isAmino(o.yamm_configuration_list[0])) && Array.isArray(o.whitelisted_route_list) && (!o.whitelisted_route_list.length || WhitelistedRoute.isAmino(o.whitelisted_route_list[0])) && Array.isArray(o.order_list) && (!o.order_list.length || Order.isAmino(o.order_list[0])) && typeof o.order_count === "bigint" && Array.isArray(o.executable_order_list) && (!o.executable_order_list.length || typeof o.executable_order_list[0] === "bigint") && Array.isArray(o.schedule_order_list) && (!o.schedule_order_list.length || ScheduleOrder.isAmino(o.schedule_order_list[0])) && typeof o.vault_paused === "boolean" && Array.isArray(o.oracle_price_pair_list) && (!o.oracle_price_pair_list.length || OraclePricePair.isAmino(o.oracle_price_pair_list[0])) && Array.isArray(o.pending_token_introduction_list) && (!o.pending_token_introduction_list.length || PendingTokenIntroduction.isAmino(o.pending_token_introduction_list[0])) && Array.isArray(o.disabled_order_pair_list) && (!o.disabled_order_pair_list.length || DisabledOrderPair.isAmino(o.disabled_order_pair_list[0])) && (o.next_executable_order_key instanceof Uint8Array || typeof o.next_executable_order_key === "string"));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      GenesisPoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.weightedPoolPropertiesList) {
      WeightedPoolProperties.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.yammPoolAssetIdList) {
      YammPoolAssetId.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.introducingPoolTokenList) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.expiringPoolTokenList) {
      VirtualBalancePoolToken.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.yammConfigurationList) {
      YammConfiguration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.whitelistedRouteList) {
      WhitelistedRoute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.orderCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.orderCount);
    }
    writer.uint32(90).fork();
    for (const v of message.executableOrderList) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.scheduleOrderList) {
      ScheduleOrder.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.vaultPaused === true) {
      writer.uint32(104).bool(message.vaultPaused);
    }
    for (const v of message.oraclePricePairList) {
      OraclePricePair.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.pendingTokenIntroductionList) {
      PendingTokenIntroduction.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.disabledOrderPairList) {
      DisabledOrderPair.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.nextExecutableOrderKey.length !== 0) {
      writer.uint32(138).bytes(message.nextExecutableOrderKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.poolList.push(GenesisPoolData.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.weightedPoolPropertiesList.push(WeightedPoolProperties.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.yammPoolAssetIdList.push(YammPoolAssetId.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.introducingPoolTokenList.push(VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.expiringPoolTokenList.push(VirtualBalancePoolToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.yammConfigurationList.push(YammConfiguration.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.whitelistedRouteList.push(WhitelistedRoute.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.orderList.push(Order.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.orderCount = reader.uint64();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.executableOrderList.push(reader.uint64());
            }
          } else {
            message.executableOrderList.push(reader.uint64());
          }
          break;
        case 12:
          message.scheduleOrderList.push(ScheduleOrder.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 13:
          message.vaultPaused = reader.bool();
          break;
        case 14:
          message.oraclePricePairList.push(OraclePricePair.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 15:
          message.pendingTokenIntroductionList.push(PendingTokenIntroduction.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 16:
          message.disabledOrderPairList.push(DisabledOrderPair.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 17:
          message.nextExecutableOrderKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => GenesisPoolData.fromJSON(e)) : [],
      weightedPoolPropertiesList: Array.isArray(object?.weightedPoolPropertiesList) ? object.weightedPoolPropertiesList.map((e: any) => WeightedPoolProperties.fromJSON(e)) : [],
      yammPoolAssetIdList: Array.isArray(object?.yammPoolAssetIdList) ? object.yammPoolAssetIdList.map((e: any) => YammPoolAssetId.fromJSON(e)) : [],
      introducingPoolTokenList: Array.isArray(object?.introducingPoolTokenList) ? object.introducingPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      expiringPoolTokenList: Array.isArray(object?.expiringPoolTokenList) ? object.expiringPoolTokenList.map((e: any) => VirtualBalancePoolToken.fromJSON(e)) : [],
      yammConfigurationList: Array.isArray(object?.yammConfigurationList) ? object.yammConfigurationList.map((e: any) => YammConfiguration.fromJSON(e)) : [],
      whitelistedRouteList: Array.isArray(object?.whitelistedRouteList) ? object.whitelistedRouteList.map((e: any) => WhitelistedRoute.fromJSON(e)) : [],
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromJSON(e)) : [],
      orderCount: isSet(object.orderCount) ? BigInt(object.orderCount.toString()) : BigInt(0),
      executableOrderList: Array.isArray(object?.executableOrderList) ? object.executableOrderList.map((e: any) => BigInt(e.toString())) : [],
      scheduleOrderList: Array.isArray(object?.scheduleOrderList) ? object.scheduleOrderList.map((e: any) => ScheduleOrder.fromJSON(e)) : [],
      vaultPaused: isSet(object.vaultPaused) ? Boolean(object.vaultPaused) : false,
      oraclePricePairList: Array.isArray(object?.oraclePricePairList) ? object.oraclePricePairList.map((e: any) => OraclePricePair.fromJSON(e)) : [],
      pendingTokenIntroductionList: Array.isArray(object?.pendingTokenIntroductionList) ? object.pendingTokenIntroductionList.map((e: any) => PendingTokenIntroduction.fromJSON(e)) : [],
      disabledOrderPairList: Array.isArray(object?.disabledOrderPairList) ? object.disabledOrderPairList.map((e: any) => DisabledOrderPair.fromJSON(e)) : [],
      nextExecutableOrderKey: isSet(object.nextExecutableOrderKey) ? bytesFromBase64(object.nextExecutableOrderKey) : new Uint8Array()
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? GenesisPoolData.toJSON(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.weightedPoolPropertiesList) {
      obj.weightedPoolPropertiesList = message.weightedPoolPropertiesList.map(e => e ? WeightedPoolProperties.toJSON(e) : undefined);
    } else {
      obj.weightedPoolPropertiesList = [];
    }
    if (message.yammPoolAssetIdList) {
      obj.yammPoolAssetIdList = message.yammPoolAssetIdList.map(e => e ? YammPoolAssetId.toJSON(e) : undefined);
    } else {
      obj.yammPoolAssetIdList = [];
    }
    if (message.introducingPoolTokenList) {
      obj.introducingPoolTokenList = message.introducingPoolTokenList.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.introducingPoolTokenList = [];
    }
    if (message.expiringPoolTokenList) {
      obj.expiringPoolTokenList = message.expiringPoolTokenList.map(e => e ? VirtualBalancePoolToken.toJSON(e) : undefined);
    } else {
      obj.expiringPoolTokenList = [];
    }
    if (message.yammConfigurationList) {
      obj.yammConfigurationList = message.yammConfigurationList.map(e => e ? YammConfiguration.toJSON(e) : undefined);
    } else {
      obj.yammConfigurationList = [];
    }
    if (message.whitelistedRouteList) {
      obj.whitelistedRouteList = message.whitelistedRouteList.map(e => e ? WhitelistedRoute.toJSON(e) : undefined);
    } else {
      obj.whitelistedRouteList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orderList = [];
    }
    message.orderCount !== undefined && (obj.orderCount = (message.orderCount || BigInt(0)).toString());
    if (message.executableOrderList) {
      obj.executableOrderList = message.executableOrderList.map(e => (e || BigInt(0)).toString());
    } else {
      obj.executableOrderList = [];
    }
    if (message.scheduleOrderList) {
      obj.scheduleOrderList = message.scheduleOrderList.map(e => e ? ScheduleOrder.toJSON(e) : undefined);
    } else {
      obj.scheduleOrderList = [];
    }
    message.vaultPaused !== undefined && (obj.vaultPaused = message.vaultPaused);
    if (message.oraclePricePairList) {
      obj.oraclePricePairList = message.oraclePricePairList.map(e => e ? OraclePricePair.toJSON(e) : undefined);
    } else {
      obj.oraclePricePairList = [];
    }
    if (message.pendingTokenIntroductionList) {
      obj.pendingTokenIntroductionList = message.pendingTokenIntroductionList.map(e => e ? PendingTokenIntroduction.toJSON(e) : undefined);
    } else {
      obj.pendingTokenIntroductionList = [];
    }
    if (message.disabledOrderPairList) {
      obj.disabledOrderPairList = message.disabledOrderPairList.map(e => e ? DisabledOrderPair.toJSON(e) : undefined);
    } else {
      obj.disabledOrderPairList = [];
    }
    message.nextExecutableOrderKey !== undefined && (obj.nextExecutableOrderKey = base64FromBytes(message.nextExecutableOrderKey !== undefined ? message.nextExecutableOrderKey : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => GenesisPoolData.fromPartial(e)) || [];
    message.weightedPoolPropertiesList = object.weightedPoolPropertiesList?.map(e => WeightedPoolProperties.fromPartial(e)) || [];
    message.yammPoolAssetIdList = object.yammPoolAssetIdList?.map(e => YammPoolAssetId.fromPartial(e)) || [];
    message.introducingPoolTokenList = object.introducingPoolTokenList?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.expiringPoolTokenList = object.expiringPoolTokenList?.map(e => VirtualBalancePoolToken.fromPartial(e)) || [];
    message.yammConfigurationList = object.yammConfigurationList?.map(e => YammConfiguration.fromPartial(e)) || [];
    message.whitelistedRouteList = object.whitelistedRouteList?.map(e => WhitelistedRoute.fromPartial(e)) || [];
    message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
    message.orderCount = object.orderCount !== undefined && object.orderCount !== null ? BigInt(object.orderCount.toString()) : BigInt(0);
    message.executableOrderList = object.executableOrderList?.map(e => BigInt(e.toString())) || [];
    message.scheduleOrderList = object.scheduleOrderList?.map(e => ScheduleOrder.fromPartial(e)) || [];
    message.vaultPaused = object.vaultPaused ?? false;
    message.oraclePricePairList = object.oraclePricePairList?.map(e => OraclePricePair.fromPartial(e)) || [];
    message.pendingTokenIntroductionList = object.pendingTokenIntroductionList?.map(e => PendingTokenIntroduction.fromPartial(e)) || [];
    message.disabledOrderPairList = object.disabledOrderPairList?.map(e => DisabledOrderPair.fromPartial(e)) || [];
    message.nextExecutableOrderKey = object.nextExecutableOrderKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.poolList = object.pool_list?.map(e => GenesisPoolData.fromAmino(e)) || [];
    message.weightedPoolPropertiesList = object.weighted_pool_properties_list?.map(e => WeightedPoolProperties.fromAmino(e)) || [];
    message.yammPoolAssetIdList = object.yamm_pool_asset_id_list?.map(e => YammPoolAssetId.fromAmino(e)) || [];
    message.introducingPoolTokenList = object.introducing_pool_token_list?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    message.expiringPoolTokenList = object.expiring_pool_token_list?.map(e => VirtualBalancePoolToken.fromAmino(e)) || [];
    message.yammConfigurationList = object.yamm_configuration_list?.map(e => YammConfiguration.fromAmino(e)) || [];
    message.whitelistedRouteList = object.whitelisted_route_list?.map(e => WhitelistedRoute.fromAmino(e)) || [];
    message.orderList = object.order_list?.map(e => Order.fromAmino(e)) || [];
    if (object.order_count !== undefined && object.order_count !== null) {
      message.orderCount = BigInt(object.order_count);
    }
    message.executableOrderList = object.executable_order_list?.map(e => BigInt(e)) || [];
    message.scheduleOrderList = object.schedule_order_list?.map(e => ScheduleOrder.fromAmino(e)) || [];
    if (object.vault_paused !== undefined && object.vault_paused !== null) {
      message.vaultPaused = object.vault_paused;
    }
    message.oraclePricePairList = object.oracle_price_pair_list?.map(e => OraclePricePair.fromAmino(e)) || [];
    message.pendingTokenIntroductionList = object.pending_token_introduction_list?.map(e => PendingTokenIntroduction.fromAmino(e)) || [];
    message.disabledOrderPairList = object.disabled_order_pair_list?.map(e => DisabledOrderPair.fromAmino(e)) || [];
    if (object.next_executable_order_key !== undefined && object.next_executable_order_key !== null) {
      message.nextExecutableOrderKey = bytesFromBase64(object.next_executable_order_key);
    }
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? GenesisPoolData.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pool_list = message.poolList;
    }
    if (message.weightedPoolPropertiesList) {
      obj.weighted_pool_properties_list = message.weightedPoolPropertiesList.map(e => e ? WeightedPoolProperties.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.weighted_pool_properties_list = message.weightedPoolPropertiesList;
    }
    if (message.yammPoolAssetIdList) {
      obj.yamm_pool_asset_id_list = message.yammPoolAssetIdList.map(e => e ? YammPoolAssetId.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_pool_asset_id_list = message.yammPoolAssetIdList;
    }
    if (message.introducingPoolTokenList) {
      obj.introducing_pool_token_list = message.introducingPoolTokenList.map(e => e ? VirtualBalancePoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.introducing_pool_token_list = message.introducingPoolTokenList;
    }
    if (message.expiringPoolTokenList) {
      obj.expiring_pool_token_list = message.expiringPoolTokenList.map(e => e ? VirtualBalancePoolToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.expiring_pool_token_list = message.expiringPoolTokenList;
    }
    if (message.yammConfigurationList) {
      obj.yamm_configuration_list = message.yammConfigurationList.map(e => e ? YammConfiguration.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.yamm_configuration_list = message.yammConfigurationList;
    }
    if (message.whitelistedRouteList) {
      obj.whitelisted_route_list = message.whitelistedRouteList.map(e => e ? WhitelistedRoute.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.whitelisted_route_list = message.whitelistedRouteList;
    }
    if (message.orderList) {
      obj.order_list = message.orderList.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.order_list = message.orderList;
    }
    obj.order_count = message.orderCount ? message.orderCount.toString() : undefined;
    if (message.executableOrderList) {
      obj.executable_order_list = message.executableOrderList.map(e => e.toString());
    } else {
      obj.executable_order_list = message.executableOrderList;
    }
    if (message.scheduleOrderList) {
      obj.schedule_order_list = message.scheduleOrderList.map(e => e ? ScheduleOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.schedule_order_list = message.scheduleOrderList;
    }
    obj.vault_paused = message.vaultPaused === false ? undefined : message.vaultPaused;
    if (message.oraclePricePairList) {
      obj.oracle_price_pair_list = message.oraclePricePairList.map(e => e ? OraclePricePair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.oracle_price_pair_list = message.oraclePricePairList;
    }
    if (message.pendingTokenIntroductionList) {
      obj.pending_token_introduction_list = message.pendingTokenIntroductionList.map(e => e ? PendingTokenIntroduction.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pending_token_introduction_list = message.pendingTokenIntroductionList;
    }
    if (message.disabledOrderPairList) {
      obj.disabled_order_pair_list = message.disabledOrderPairList.map(e => e ? DisabledOrderPair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.disabled_order_pair_list = message.disabledOrderPairList;
    }
    obj.next_executable_order_key = message.nextExecutableOrderKey ? base64FromBytes(message.nextExecutableOrderKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);