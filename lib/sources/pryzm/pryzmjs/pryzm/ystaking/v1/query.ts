import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { UserStakeState, UserStakeStateAmino, UserStakeStateSDKType } from "./user_stake_state";
import { AssetPoolState, AssetPoolStateAmino, AssetPoolStateSDKType, AssetMaturityPoolState, AssetMaturityPoolStateAmino, AssetMaturityPoolStateSDKType } from "./asset_pool_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryBondedAmountRequest {
  assetId: string;
  maturity: string;
  address: string;
}
export interface QueryBondedAmountRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountRequest";
  value: Uint8Array;
}
export interface QueryBondedAmountRequestAmino {
  asset_id?: string;
  maturity?: string;
  address?: string;
}
export interface QueryBondedAmountRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryBondedAmountRequest";
  value: QueryBondedAmountRequestAmino;
}
export interface QueryBondedAmountRequestSDKType {
  asset_id: string;
  maturity: string;
  address: string;
}
export interface QueryBondedAmountResponse {
  amount: string;
}
export interface QueryBondedAmountResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountResponse";
  value: Uint8Array;
}
export interface QueryBondedAmountResponseAmino {
  amount?: string;
}
export interface QueryBondedAmountResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryBondedAmountResponse";
  value: QueryBondedAmountResponseAmino;
}
export interface QueryBondedAmountResponseSDKType {
  amount: string;
}
export interface QueryRewardRequest {
  denom: string;
  address: string;
}
export interface QueryRewardRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryRewardRequest";
  value: Uint8Array;
}
export interface QueryRewardRequestAmino {
  denom?: string;
  address?: string;
}
export interface QueryRewardRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryRewardRequest";
  value: QueryRewardRequestAmino;
}
export interface QueryRewardRequestSDKType {
  denom: string;
  address: string;
}
export interface QueryRewardResponse {
  amount: Coin;
}
export interface QueryRewardResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryRewardResponse";
  value: Uint8Array;
}
export interface QueryRewardResponseAmino {
  amount?: CoinAmino;
}
export interface QueryRewardResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryRewardResponse";
  value: QueryRewardResponseAmino;
}
export interface QueryRewardResponseSDKType {
  amount: CoinSDKType;
}
export interface QueryGetUserStakeStateRequest {
  address: string;
  assetId: string;
  maturitySymbol: string;
}
export interface QueryGetUserStakeStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateRequest";
  value: Uint8Array;
}
export interface QueryGetUserStakeStateRequestAmino {
  address?: string;
  asset_id?: string;
  maturity_symbol?: string;
}
export interface QueryGetUserStakeStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetUserStakeStateRequest";
  value: QueryGetUserStakeStateRequestAmino;
}
export interface QueryGetUserStakeStateRequestSDKType {
  address: string;
  asset_id: string;
  maturity_symbol: string;
}
export interface QueryGetUserStakeStateResponse {
  userStakeState: UserStakeState;
}
export interface QueryGetUserStakeStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateResponse";
  value: Uint8Array;
}
export interface QueryGetUserStakeStateResponseAmino {
  user_stake_state?: UserStakeStateAmino;
}
export interface QueryGetUserStakeStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetUserStakeStateResponse";
  value: QueryGetUserStakeStateResponseAmino;
}
export interface QueryGetUserStakeStateResponseSDKType {
  user_stake_state: UserStakeStateSDKType;
}
export interface QueryAllUserStakeStateRequest {
  pagination?: PageRequest;
  address: string;
  assetId: string;
}
export interface QueryAllUserStakeStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateRequest";
  value: Uint8Array;
}
export interface QueryAllUserStakeStateRequestAmino {
  pagination?: PageRequestAmino;
  address?: string;
  asset_id?: string;
}
export interface QueryAllUserStakeStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllUserStakeStateRequest";
  value: QueryAllUserStakeStateRequestAmino;
}
export interface QueryAllUserStakeStateRequestSDKType {
  pagination?: PageRequestSDKType;
  address: string;
  asset_id: string;
}
export interface QueryAllUserStakeStateResponse {
  userStakeState: UserStakeState[];
  pagination?: PageResponse;
}
export interface QueryAllUserStakeStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateResponse";
  value: Uint8Array;
}
export interface QueryAllUserStakeStateResponseAmino {
  user_stake_state?: UserStakeStateAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllUserStakeStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllUserStakeStateResponse";
  value: QueryAllUserStakeStateResponseAmino;
}
export interface QueryAllUserStakeStateResponseSDKType {
  user_stake_state: UserStakeStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetAssetPoolStateRequest {
  assetId: string;
}
export interface QueryGetAssetPoolStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateRequest";
  value: Uint8Array;
}
export interface QueryGetAssetPoolStateRequestAmino {
  asset_id?: string;
}
export interface QueryGetAssetPoolStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetAssetPoolStateRequest";
  value: QueryGetAssetPoolStateRequestAmino;
}
export interface QueryGetAssetPoolStateRequestSDKType {
  asset_id: string;
}
export interface QueryGetAssetPoolStateResponse {
  assetPoolState: AssetPoolState;
}
export interface QueryGetAssetPoolStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateResponse";
  value: Uint8Array;
}
export interface QueryGetAssetPoolStateResponseAmino {
  asset_pool_state?: AssetPoolStateAmino;
}
export interface QueryGetAssetPoolStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetAssetPoolStateResponse";
  value: QueryGetAssetPoolStateResponseAmino;
}
export interface QueryGetAssetPoolStateResponseSDKType {
  asset_pool_state: AssetPoolStateSDKType;
}
export interface QueryAllAssetPoolStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllAssetPoolStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateRequest";
  value: Uint8Array;
}
export interface QueryAllAssetPoolStateRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAssetPoolStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllAssetPoolStateRequest";
  value: QueryAllAssetPoolStateRequestAmino;
}
export interface QueryAllAssetPoolStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAssetPoolStateResponse {
  assetPoolState: AssetPoolState[];
  pagination?: PageResponse;
}
export interface QueryAllAssetPoolStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateResponse";
  value: Uint8Array;
}
export interface QueryAllAssetPoolStateResponseAmino {
  asset_pool_state?: AssetPoolStateAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAssetPoolStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllAssetPoolStateResponse";
  value: QueryAllAssetPoolStateResponseAmino;
}
export interface QueryAllAssetPoolStateResponseSDKType {
  asset_pool_state: AssetPoolStateSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetAssetMaturityPoolStateRequest {
  assetId: string;
  maturitySymbol: string;
}
export interface QueryGetAssetMaturityPoolStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateRequest";
  value: Uint8Array;
}
export interface QueryGetAssetMaturityPoolStateRequestAmino {
  asset_id?: string;
  maturity_symbol?: string;
}
export interface QueryGetAssetMaturityPoolStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateRequest";
  value: QueryGetAssetMaturityPoolStateRequestAmino;
}
export interface QueryGetAssetMaturityPoolStateRequestSDKType {
  asset_id: string;
  maturity_symbol: string;
}
export interface QueryGetAssetMaturityPoolStateResponse {
  assetMaturityPoolState: AssetMaturityPoolState;
}
export interface QueryGetAssetMaturityPoolStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateResponse";
  value: Uint8Array;
}
export interface QueryGetAssetMaturityPoolStateResponseAmino {
  asset_maturity_pool_state?: AssetMaturityPoolStateAmino;
}
export interface QueryGetAssetMaturityPoolStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateResponse";
  value: QueryGetAssetMaturityPoolStateResponseAmino;
}
export interface QueryGetAssetMaturityPoolStateResponseSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType;
}
export interface QueryAllAssetMaturityPoolStateRequest {
  pagination?: PageRequest;
}
export interface QueryAllAssetMaturityPoolStateRequestProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateRequest";
  value: Uint8Array;
}
export interface QueryAllAssetMaturityPoolStateRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAssetMaturityPoolStateRequestAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateRequest";
  value: QueryAllAssetMaturityPoolStateRequestAmino;
}
export interface QueryAllAssetMaturityPoolStateRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAssetMaturityPoolStateResponse {
  assetMaturityPoolState: AssetMaturityPoolState[];
  pagination?: PageResponse;
}
export interface QueryAllAssetMaturityPoolStateResponseProtoMsg {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateResponse";
  value: Uint8Array;
}
export interface QueryAllAssetMaturityPoolStateResponseAmino {
  asset_maturity_pool_state?: AssetMaturityPoolStateAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAssetMaturityPoolStateResponseAminoMsg {
  type: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateResponse";
  value: QueryAllAssetMaturityPoolStateResponseAmino;
}
export interface QueryAllAssetMaturityPoolStateResponseSDKType {
  asset_maturity_pool_state: AssetMaturityPoolStateSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryBondedAmountRequest(): QueryBondedAmountRequest {
  return {
    assetId: "",
    maturity: "",
    address: ""
  };
}
export const QueryBondedAmountRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountRequest",
  is(o: any): o is QueryBondedAmountRequest {
    return o && (o.$typeUrl === QueryBondedAmountRequest.typeUrl || typeof o.assetId === "string" && typeof o.maturity === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is QueryBondedAmountRequestSDKType {
    return o && (o.$typeUrl === QueryBondedAmountRequest.typeUrl || typeof o.asset_id === "string" && typeof o.maturity === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryBondedAmountRequestAmino {
    return o && (o.$typeUrl === QueryBondedAmountRequest.typeUrl || typeof o.asset_id === "string" && typeof o.maturity === "string" && typeof o.address === "string");
  },
  encode(message: QueryBondedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturity !== "") {
      writer.uint32(18).string(message.maturity);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBondedAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.maturity = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturity: isSet(object.maturity) ? String(object.maturity) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryBondedAmountRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountRequest>): QueryBondedAmountRequest {
    const message = createBaseQueryBondedAmountRequest();
    message.assetId = object.assetId ?? "";
    message.maturity = object.maturity ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryBondedAmountRequestAmino): QueryBondedAmountRequest {
    const message = createBaseQueryBondedAmountRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBondedAmountRequest, useInterfaces: boolean = true): QueryBondedAmountRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity = message.maturity === "" ? undefined : message.maturity;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBondedAmountRequestAminoMsg): QueryBondedAmountRequest {
    return QueryBondedAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedAmountRequestProtoMsg, useInterfaces: boolean = true): QueryBondedAmountRequest {
    return QueryBondedAmountRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBondedAmountRequest): Uint8Array {
    return QueryBondedAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedAmountRequest): QueryBondedAmountRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountRequest",
      value: QueryBondedAmountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBondedAmountRequest.typeUrl, QueryBondedAmountRequest);
function createBaseQueryBondedAmountResponse(): QueryBondedAmountResponse {
  return {
    amount: ""
  };
}
export const QueryBondedAmountResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountResponse",
  is(o: any): o is QueryBondedAmountResponse {
    return o && (o.$typeUrl === QueryBondedAmountResponse.typeUrl || typeof o.amount === "string");
  },
  isSDK(o: any): o is QueryBondedAmountResponseSDKType {
    return o && (o.$typeUrl === QueryBondedAmountResponse.typeUrl || typeof o.amount === "string");
  },
  isAmino(o: any): o is QueryBondedAmountResponseAmino {
    return o && (o.$typeUrl === QueryBondedAmountResponse.typeUrl || typeof o.amount === "string");
  },
  encode(message: QueryBondedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryBondedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedAmountResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: QueryBondedAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<QueryBondedAmountResponse>): QueryBondedAmountResponse {
    const message = createBaseQueryBondedAmountResponse();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryBondedAmountResponseAmino): QueryBondedAmountResponse {
    const message = createBaseQueryBondedAmountResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: QueryBondedAmountResponse, useInterfaces: boolean = true): QueryBondedAmountResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryBondedAmountResponseAminoMsg): QueryBondedAmountResponse {
    return QueryBondedAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBondedAmountResponseProtoMsg, useInterfaces: boolean = true): QueryBondedAmountResponse {
    return QueryBondedAmountResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryBondedAmountResponse): Uint8Array {
    return QueryBondedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBondedAmountResponse): QueryBondedAmountResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryBondedAmountResponse",
      value: QueryBondedAmountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBondedAmountResponse.typeUrl, QueryBondedAmountResponse);
function createBaseQueryRewardRequest(): QueryRewardRequest {
  return {
    denom: "",
    address: ""
  };
}
export const QueryRewardRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryRewardRequest",
  is(o: any): o is QueryRewardRequest {
    return o && (o.$typeUrl === QueryRewardRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is QueryRewardRequestSDKType {
    return o && (o.$typeUrl === QueryRewardRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryRewardRequestAmino {
    return o && (o.$typeUrl === QueryRewardRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  encode(message: QueryRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRewardRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryRewardRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardRequest>): QueryRewardRequest {
    const message = createBaseQueryRewardRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRewardRequestAmino): QueryRewardRequest {
    const message = createBaseQueryRewardRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRewardRequest, useInterfaces: boolean = true): QueryRewardRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRewardRequestAminoMsg): QueryRewardRequest {
    return QueryRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardRequestProtoMsg, useInterfaces: boolean = true): QueryRewardRequest {
    return QueryRewardRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRewardRequest): Uint8Array {
    return QueryRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardRequest): QueryRewardRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryRewardRequest",
      value: QueryRewardRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardRequest.typeUrl, QueryRewardRequest);
function createBaseQueryRewardResponse(): QueryRewardResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryRewardResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryRewardResponse",
  is(o: any): o is QueryRewardResponse {
    return o && (o.$typeUrl === QueryRewardResponse.typeUrl || Coin.is(o.amount));
  },
  isSDK(o: any): o is QueryRewardResponseSDKType {
    return o && (o.$typeUrl === QueryRewardResponse.typeUrl || Coin.isSDK(o.amount));
  },
  isAmino(o: any): o is QueryRewardResponseAmino {
    return o && (o.$typeUrl === QueryRewardResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryRewardResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardResponse();
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
  fromJSON(object: any): QueryRewardResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: QueryRewardResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardResponse>): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryRewardResponseAmino): QueryRewardResponse {
    const message = createBaseQueryRewardResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryRewardResponse, useInterfaces: boolean = true): QueryRewardResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardResponseAminoMsg): QueryRewardResponse {
    return QueryRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardResponseProtoMsg, useInterfaces: boolean = true): QueryRewardResponse {
    return QueryRewardResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryRewardResponse): Uint8Array {
    return QueryRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardResponse): QueryRewardResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryRewardResponse",
      value: QueryRewardResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardResponse.typeUrl, QueryRewardResponse);
function createBaseQueryGetUserStakeStateRequest(): QueryGetUserStakeStateRequest {
  return {
    address: "",
    assetId: "",
    maturitySymbol: ""
  };
}
export const QueryGetUserStakeStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateRequest",
  is(o: any): o is QueryGetUserStakeStateRequest {
    return o && (o.$typeUrl === QueryGetUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is QueryGetUserStakeStateRequestSDKType {
    return o && (o.$typeUrl === QueryGetUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  isAmino(o: any): o is QueryGetUserStakeStateRequestAmino {
    return o && (o.$typeUrl === QueryGetUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  encode(message: QueryGetUserStakeStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetUserStakeStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserStakeStateRequest();
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
  fromJSON(object: any): QueryGetUserStakeStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: QueryGetUserStakeStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserStakeStateRequest>): QueryGetUserStakeStateRequest {
    const message = createBaseQueryGetUserStakeStateRequest();
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserStakeStateRequestAmino): QueryGetUserStakeStateRequest {
    const message = createBaseQueryGetUserStakeStateRequest();
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
  toAmino(message: QueryGetUserStakeStateRequest, useInterfaces: boolean = true): QueryGetUserStakeStateRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserStakeStateRequestAminoMsg): QueryGetUserStakeStateRequest {
    return QueryGetUserStakeStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserStakeStateRequestProtoMsg, useInterfaces: boolean = true): QueryGetUserStakeStateRequest {
    return QueryGetUserStakeStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetUserStakeStateRequest): Uint8Array {
    return QueryGetUserStakeStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserStakeStateRequest): QueryGetUserStakeStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateRequest",
      value: QueryGetUserStakeStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetUserStakeStateRequest.typeUrl, QueryGetUserStakeStateRequest);
function createBaseQueryGetUserStakeStateResponse(): QueryGetUserStakeStateResponse {
  return {
    userStakeState: UserStakeState.fromPartial({})
  };
}
export const QueryGetUserStakeStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateResponse",
  is(o: any): o is QueryGetUserStakeStateResponse {
    return o && (o.$typeUrl === QueryGetUserStakeStateResponse.typeUrl || UserStakeState.is(o.userStakeState));
  },
  isSDK(o: any): o is QueryGetUserStakeStateResponseSDKType {
    return o && (o.$typeUrl === QueryGetUserStakeStateResponse.typeUrl || UserStakeState.isSDK(o.user_stake_state));
  },
  isAmino(o: any): o is QueryGetUserStakeStateResponseAmino {
    return o && (o.$typeUrl === QueryGetUserStakeStateResponse.typeUrl || UserStakeState.isAmino(o.user_stake_state));
  },
  encode(message: QueryGetUserStakeStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userStakeState !== undefined) {
      UserStakeState.encode(message.userStakeState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetUserStakeStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUserStakeStateResponse();
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
  fromJSON(object: any): QueryGetUserStakeStateResponse {
    return {
      userStakeState: isSet(object.userStakeState) ? UserStakeState.fromJSON(object.userStakeState) : undefined
    };
  },
  toJSON(message: QueryGetUserStakeStateResponse): unknown {
    const obj: any = {};
    message.userStakeState !== undefined && (obj.userStakeState = message.userStakeState ? UserStakeState.toJSON(message.userStakeState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetUserStakeStateResponse>): QueryGetUserStakeStateResponse {
    const message = createBaseQueryGetUserStakeStateResponse();
    message.userStakeState = object.userStakeState !== undefined && object.userStakeState !== null ? UserStakeState.fromPartial(object.userStakeState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserStakeStateResponseAmino): QueryGetUserStakeStateResponse {
    const message = createBaseQueryGetUserStakeStateResponse();
    if (object.user_stake_state !== undefined && object.user_stake_state !== null) {
      message.userStakeState = UserStakeState.fromAmino(object.user_stake_state);
    }
    return message;
  },
  toAmino(message: QueryGetUserStakeStateResponse, useInterfaces: boolean = true): QueryGetUserStakeStateResponseAmino {
    const obj: any = {};
    obj.user_stake_state = message.userStakeState ? UserStakeState.toAmino(message.userStakeState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserStakeStateResponseAminoMsg): QueryGetUserStakeStateResponse {
    return QueryGetUserStakeStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserStakeStateResponseProtoMsg, useInterfaces: boolean = true): QueryGetUserStakeStateResponse {
    return QueryGetUserStakeStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetUserStakeStateResponse): Uint8Array {
    return QueryGetUserStakeStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserStakeStateResponse): QueryGetUserStakeStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetUserStakeStateResponse",
      value: QueryGetUserStakeStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetUserStakeStateResponse.typeUrl, QueryGetUserStakeStateResponse);
function createBaseQueryAllUserStakeStateRequest(): QueryAllUserStakeStateRequest {
  return {
    pagination: undefined,
    address: "",
    assetId: ""
  };
}
export const QueryAllUserStakeStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateRequest",
  is(o: any): o is QueryAllUserStakeStateRequest {
    return o && (o.$typeUrl === QueryAllUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryAllUserStakeStateRequestSDKType {
    return o && (o.$typeUrl === QueryAllUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryAllUserStakeStateRequestAmino {
    return o && (o.$typeUrl === QueryAllUserStakeStateRequest.typeUrl || typeof o.address === "string" && typeof o.asset_id === "string");
  },
  encode(message: QueryAllUserStakeStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.assetId !== "") {
      writer.uint32(26).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllUserStakeStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserStakeStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserStakeStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryAllUserStakeStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUserStakeStateRequest>): QueryAllUserStakeStateRequest {
    const message = createBaseQueryAllUserStakeStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.address = object.address ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryAllUserStakeStateRequestAmino): QueryAllUserStakeStateRequest {
    const message = createBaseQueryAllUserStakeStateRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryAllUserStakeStateRequest, useInterfaces: boolean = true): QueryAllUserStakeStateRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserStakeStateRequestAminoMsg): QueryAllUserStakeStateRequest {
    return QueryAllUserStakeStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserStakeStateRequestProtoMsg, useInterfaces: boolean = true): QueryAllUserStakeStateRequest {
    return QueryAllUserStakeStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllUserStakeStateRequest): Uint8Array {
    return QueryAllUserStakeStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserStakeStateRequest): QueryAllUserStakeStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateRequest",
      value: QueryAllUserStakeStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllUserStakeStateRequest.typeUrl, QueryAllUserStakeStateRequest);
function createBaseQueryAllUserStakeStateResponse(): QueryAllUserStakeStateResponse {
  return {
    userStakeState: [],
    pagination: undefined
  };
}
export const QueryAllUserStakeStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateResponse",
  is(o: any): o is QueryAllUserStakeStateResponse {
    return o && (o.$typeUrl === QueryAllUserStakeStateResponse.typeUrl || Array.isArray(o.userStakeState) && (!o.userStakeState.length || UserStakeState.is(o.userStakeState[0])));
  },
  isSDK(o: any): o is QueryAllUserStakeStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllUserStakeStateResponse.typeUrl || Array.isArray(o.user_stake_state) && (!o.user_stake_state.length || UserStakeState.isSDK(o.user_stake_state[0])));
  },
  isAmino(o: any): o is QueryAllUserStakeStateResponseAmino {
    return o && (o.$typeUrl === QueryAllUserStakeStateResponse.typeUrl || Array.isArray(o.user_stake_state) && (!o.user_stake_state.length || UserStakeState.isAmino(o.user_stake_state[0])));
  },
  encode(message: QueryAllUserStakeStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userStakeState) {
      UserStakeState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllUserStakeStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUserStakeStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userStakeState.push(UserStakeState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllUserStakeStateResponse {
    return {
      userStakeState: Array.isArray(object?.userStakeState) ? object.userStakeState.map((e: any) => UserStakeState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllUserStakeStateResponse): unknown {
    const obj: any = {};
    if (message.userStakeState) {
      obj.userStakeState = message.userStakeState.map(e => e ? UserStakeState.toJSON(e) : undefined);
    } else {
      obj.userStakeState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllUserStakeStateResponse>): QueryAllUserStakeStateResponse {
    const message = createBaseQueryAllUserStakeStateResponse();
    message.userStakeState = object.userStakeState?.map(e => UserStakeState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserStakeStateResponseAmino): QueryAllUserStakeStateResponse {
    const message = createBaseQueryAllUserStakeStateResponse();
    message.userStakeState = object.user_stake_state?.map(e => UserStakeState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserStakeStateResponse, useInterfaces: boolean = true): QueryAllUserStakeStateResponseAmino {
    const obj: any = {};
    if (message.userStakeState) {
      obj.user_stake_state = message.userStakeState.map(e => e ? UserStakeState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_stake_state = message.userStakeState;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserStakeStateResponseAminoMsg): QueryAllUserStakeStateResponse {
    return QueryAllUserStakeStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserStakeStateResponseProtoMsg, useInterfaces: boolean = true): QueryAllUserStakeStateResponse {
    return QueryAllUserStakeStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllUserStakeStateResponse): Uint8Array {
    return QueryAllUserStakeStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserStakeStateResponse): QueryAllUserStakeStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllUserStakeStateResponse",
      value: QueryAllUserStakeStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllUserStakeStateResponse.typeUrl, QueryAllUserStakeStateResponse);
function createBaseQueryGetAssetPoolStateRequest(): QueryGetAssetPoolStateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetAssetPoolStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateRequest",
  is(o: any): o is QueryGetAssetPoolStateRequest {
    return o && (o.$typeUrl === QueryGetAssetPoolStateRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryGetAssetPoolStateRequestSDKType {
    return o && (o.$typeUrl === QueryGetAssetPoolStateRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryGetAssetPoolStateRequestAmino {
    return o && (o.$typeUrl === QueryGetAssetPoolStateRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryGetAssetPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetPoolStateRequest();
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
  fromJSON(object: any): QueryGetAssetPoolStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetAssetPoolStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetPoolStateRequest>): QueryGetAssetPoolStateRequest {
    const message = createBaseQueryGetAssetPoolStateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetAssetPoolStateRequestAmino): QueryGetAssetPoolStateRequest {
    const message = createBaseQueryGetAssetPoolStateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetAssetPoolStateRequest, useInterfaces: boolean = true): QueryGetAssetPoolStateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetPoolStateRequestAminoMsg): QueryGetAssetPoolStateRequest {
    return QueryGetAssetPoolStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetPoolStateRequestProtoMsg, useInterfaces: boolean = true): QueryGetAssetPoolStateRequest {
    return QueryGetAssetPoolStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetPoolStateRequest): Uint8Array {
    return QueryGetAssetPoolStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetPoolStateRequest): QueryGetAssetPoolStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateRequest",
      value: QueryGetAssetPoolStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetPoolStateRequest.typeUrl, QueryGetAssetPoolStateRequest);
function createBaseQueryGetAssetPoolStateResponse(): QueryGetAssetPoolStateResponse {
  return {
    assetPoolState: AssetPoolState.fromPartial({})
  };
}
export const QueryGetAssetPoolStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateResponse",
  is(o: any): o is QueryGetAssetPoolStateResponse {
    return o && (o.$typeUrl === QueryGetAssetPoolStateResponse.typeUrl || AssetPoolState.is(o.assetPoolState));
  },
  isSDK(o: any): o is QueryGetAssetPoolStateResponseSDKType {
    return o && (o.$typeUrl === QueryGetAssetPoolStateResponse.typeUrl || AssetPoolState.isSDK(o.asset_pool_state));
  },
  isAmino(o: any): o is QueryGetAssetPoolStateResponseAmino {
    return o && (o.$typeUrl === QueryGetAssetPoolStateResponse.typeUrl || AssetPoolState.isAmino(o.asset_pool_state));
  },
  encode(message: QueryGetAssetPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetPoolState !== undefined) {
      AssetPoolState.encode(message.assetPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetPoolStateResponse();
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
  fromJSON(object: any): QueryGetAssetPoolStateResponse {
    return {
      assetPoolState: isSet(object.assetPoolState) ? AssetPoolState.fromJSON(object.assetPoolState) : undefined
    };
  },
  toJSON(message: QueryGetAssetPoolStateResponse): unknown {
    const obj: any = {};
    message.assetPoolState !== undefined && (obj.assetPoolState = message.assetPoolState ? AssetPoolState.toJSON(message.assetPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetPoolStateResponse>): QueryGetAssetPoolStateResponse {
    const message = createBaseQueryGetAssetPoolStateResponse();
    message.assetPoolState = object.assetPoolState !== undefined && object.assetPoolState !== null ? AssetPoolState.fromPartial(object.assetPoolState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAssetPoolStateResponseAmino): QueryGetAssetPoolStateResponse {
    const message = createBaseQueryGetAssetPoolStateResponse();
    if (object.asset_pool_state !== undefined && object.asset_pool_state !== null) {
      message.assetPoolState = AssetPoolState.fromAmino(object.asset_pool_state);
    }
    return message;
  },
  toAmino(message: QueryGetAssetPoolStateResponse, useInterfaces: boolean = true): QueryGetAssetPoolStateResponseAmino {
    const obj: any = {};
    obj.asset_pool_state = message.assetPoolState ? AssetPoolState.toAmino(message.assetPoolState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetPoolStateResponseAminoMsg): QueryGetAssetPoolStateResponse {
    return QueryGetAssetPoolStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetPoolStateResponseProtoMsg, useInterfaces: boolean = true): QueryGetAssetPoolStateResponse {
    return QueryGetAssetPoolStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetPoolStateResponse): Uint8Array {
    return QueryGetAssetPoolStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetPoolStateResponse): QueryGetAssetPoolStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetAssetPoolStateResponse",
      value: QueryGetAssetPoolStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetPoolStateResponse.typeUrl, QueryGetAssetPoolStateResponse);
function createBaseQueryAllAssetPoolStateRequest(): QueryAllAssetPoolStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAssetPoolStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateRequest",
  is(o: any): o is QueryAllAssetPoolStateRequest {
    return o && o.$typeUrl === QueryAllAssetPoolStateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllAssetPoolStateRequestSDKType {
    return o && o.$typeUrl === QueryAllAssetPoolStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllAssetPoolStateRequestAmino {
    return o && o.$typeUrl === QueryAllAssetPoolStateRequest.typeUrl;
  },
  encode(message: QueryAllAssetPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAssetPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetPoolStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAssetPoolStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetPoolStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetPoolStateRequest>): QueryAllAssetPoolStateRequest {
    const message = createBaseQueryAllAssetPoolStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetPoolStateRequestAmino): QueryAllAssetPoolStateRequest {
    const message = createBaseQueryAllAssetPoolStateRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAssetPoolStateRequest, useInterfaces: boolean = true): QueryAllAssetPoolStateRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetPoolStateRequestAminoMsg): QueryAllAssetPoolStateRequest {
    return QueryAllAssetPoolStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetPoolStateRequestProtoMsg, useInterfaces: boolean = true): QueryAllAssetPoolStateRequest {
    return QueryAllAssetPoolStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAssetPoolStateRequest): Uint8Array {
    return QueryAllAssetPoolStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetPoolStateRequest): QueryAllAssetPoolStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateRequest",
      value: QueryAllAssetPoolStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAssetPoolStateRequest.typeUrl, QueryAllAssetPoolStateRequest);
function createBaseQueryAllAssetPoolStateResponse(): QueryAllAssetPoolStateResponse {
  return {
    assetPoolState: [],
    pagination: undefined
  };
}
export const QueryAllAssetPoolStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateResponse",
  is(o: any): o is QueryAllAssetPoolStateResponse {
    return o && (o.$typeUrl === QueryAllAssetPoolStateResponse.typeUrl || Array.isArray(o.assetPoolState) && (!o.assetPoolState.length || AssetPoolState.is(o.assetPoolState[0])));
  },
  isSDK(o: any): o is QueryAllAssetPoolStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllAssetPoolStateResponse.typeUrl || Array.isArray(o.asset_pool_state) && (!o.asset_pool_state.length || AssetPoolState.isSDK(o.asset_pool_state[0])));
  },
  isAmino(o: any): o is QueryAllAssetPoolStateResponseAmino {
    return o && (o.$typeUrl === QueryAllAssetPoolStateResponse.typeUrl || Array.isArray(o.asset_pool_state) && (!o.asset_pool_state.length || AssetPoolState.isAmino(o.asset_pool_state[0])));
  },
  encode(message: QueryAllAssetPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetPoolState) {
      AssetPoolState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAssetPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPoolState.push(AssetPoolState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAssetPoolStateResponse {
    return {
      assetPoolState: Array.isArray(object?.assetPoolState) ? object.assetPoolState.map((e: any) => AssetPoolState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetPoolStateResponse): unknown {
    const obj: any = {};
    if (message.assetPoolState) {
      obj.assetPoolState = message.assetPoolState.map(e => e ? AssetPoolState.toJSON(e) : undefined);
    } else {
      obj.assetPoolState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetPoolStateResponse>): QueryAllAssetPoolStateResponse {
    const message = createBaseQueryAllAssetPoolStateResponse();
    message.assetPoolState = object.assetPoolState?.map(e => AssetPoolState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetPoolStateResponseAmino): QueryAllAssetPoolStateResponse {
    const message = createBaseQueryAllAssetPoolStateResponse();
    message.assetPoolState = object.asset_pool_state?.map(e => AssetPoolState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAssetPoolStateResponse, useInterfaces: boolean = true): QueryAllAssetPoolStateResponseAmino {
    const obj: any = {};
    if (message.assetPoolState) {
      obj.asset_pool_state = message.assetPoolState.map(e => e ? AssetPoolState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.asset_pool_state = message.assetPoolState;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetPoolStateResponseAminoMsg): QueryAllAssetPoolStateResponse {
    return QueryAllAssetPoolStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetPoolStateResponseProtoMsg, useInterfaces: boolean = true): QueryAllAssetPoolStateResponse {
    return QueryAllAssetPoolStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAssetPoolStateResponse): Uint8Array {
    return QueryAllAssetPoolStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetPoolStateResponse): QueryAllAssetPoolStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllAssetPoolStateResponse",
      value: QueryAllAssetPoolStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAssetPoolStateResponse.typeUrl, QueryAllAssetPoolStateResponse);
function createBaseQueryGetAssetMaturityPoolStateRequest(): QueryGetAssetMaturityPoolStateRequest {
  return {
    assetId: "",
    maturitySymbol: ""
  };
}
export const QueryGetAssetMaturityPoolStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateRequest",
  is(o: any): o is QueryGetAssetMaturityPoolStateRequest {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateRequest.typeUrl || typeof o.assetId === "string" && typeof o.maturitySymbol === "string");
  },
  isSDK(o: any): o is QueryGetAssetMaturityPoolStateRequestSDKType {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateRequest.typeUrl || typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  isAmino(o: any): o is QueryGetAssetMaturityPoolStateRequestAmino {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateRequest.typeUrl || typeof o.asset_id === "string" && typeof o.maturity_symbol === "string");
  },
  encode(message: QueryGetAssetMaturityPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.maturitySymbol !== "") {
      writer.uint32(18).string(message.maturitySymbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetMaturityPoolStateRequest();
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
  fromJSON(object: any): QueryGetAssetMaturityPoolStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      maturitySymbol: isSet(object.maturitySymbol) ? String(object.maturitySymbol) : ""
    };
  },
  toJSON(message: QueryGetAssetMaturityPoolStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.maturitySymbol !== undefined && (obj.maturitySymbol = message.maturitySymbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetMaturityPoolStateRequest>): QueryGetAssetMaturityPoolStateRequest {
    const message = createBaseQueryGetAssetMaturityPoolStateRequest();
    message.assetId = object.assetId ?? "";
    message.maturitySymbol = object.maturitySymbol ?? "";
    return message;
  },
  fromAmino(object: QueryGetAssetMaturityPoolStateRequestAmino): QueryGetAssetMaturityPoolStateRequest {
    const message = createBaseQueryGetAssetMaturityPoolStateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.maturity_symbol !== undefined && object.maturity_symbol !== null) {
      message.maturitySymbol = object.maturity_symbol;
    }
    return message;
  },
  toAmino(message: QueryGetAssetMaturityPoolStateRequest, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.maturity_symbol = message.maturitySymbol === "" ? undefined : message.maturitySymbol;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetMaturityPoolStateRequestAminoMsg): QueryGetAssetMaturityPoolStateRequest {
    return QueryGetAssetMaturityPoolStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetMaturityPoolStateRequestProtoMsg, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateRequest {
    return QueryGetAssetMaturityPoolStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetMaturityPoolStateRequest): Uint8Array {
    return QueryGetAssetMaturityPoolStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetMaturityPoolStateRequest): QueryGetAssetMaturityPoolStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateRequest",
      value: QueryGetAssetMaturityPoolStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetMaturityPoolStateRequest.typeUrl, QueryGetAssetMaturityPoolStateRequest);
function createBaseQueryGetAssetMaturityPoolStateResponse(): QueryGetAssetMaturityPoolStateResponse {
  return {
    assetMaturityPoolState: AssetMaturityPoolState.fromPartial({})
  };
}
export const QueryGetAssetMaturityPoolStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateResponse",
  is(o: any): o is QueryGetAssetMaturityPoolStateResponse {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateResponse.typeUrl || AssetMaturityPoolState.is(o.assetMaturityPoolState));
  },
  isSDK(o: any): o is QueryGetAssetMaturityPoolStateResponseSDKType {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateResponse.typeUrl || AssetMaturityPoolState.isSDK(o.asset_maturity_pool_state));
  },
  isAmino(o: any): o is QueryGetAssetMaturityPoolStateResponseAmino {
    return o && (o.$typeUrl === QueryGetAssetMaturityPoolStateResponse.typeUrl || AssetMaturityPoolState.isAmino(o.asset_maturity_pool_state));
  },
  encode(message: QueryGetAssetMaturityPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetMaturityPoolState !== undefined) {
      AssetMaturityPoolState.encode(message.assetMaturityPoolState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetMaturityPoolStateResponse();
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
  fromJSON(object: any): QueryGetAssetMaturityPoolStateResponse {
    return {
      assetMaturityPoolState: isSet(object.assetMaturityPoolState) ? AssetMaturityPoolState.fromJSON(object.assetMaturityPoolState) : undefined
    };
  },
  toJSON(message: QueryGetAssetMaturityPoolStateResponse): unknown {
    const obj: any = {};
    message.assetMaturityPoolState !== undefined && (obj.assetMaturityPoolState = message.assetMaturityPoolState ? AssetMaturityPoolState.toJSON(message.assetMaturityPoolState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetMaturityPoolStateResponse>): QueryGetAssetMaturityPoolStateResponse {
    const message = createBaseQueryGetAssetMaturityPoolStateResponse();
    message.assetMaturityPoolState = object.assetMaturityPoolState !== undefined && object.assetMaturityPoolState !== null ? AssetMaturityPoolState.fromPartial(object.assetMaturityPoolState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAssetMaturityPoolStateResponseAmino): QueryGetAssetMaturityPoolStateResponse {
    const message = createBaseQueryGetAssetMaturityPoolStateResponse();
    if (object.asset_maturity_pool_state !== undefined && object.asset_maturity_pool_state !== null) {
      message.assetMaturityPoolState = AssetMaturityPoolState.fromAmino(object.asset_maturity_pool_state);
    }
    return message;
  },
  toAmino(message: QueryGetAssetMaturityPoolStateResponse, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateResponseAmino {
    const obj: any = {};
    obj.asset_maturity_pool_state = message.assetMaturityPoolState ? AssetMaturityPoolState.toAmino(message.assetMaturityPoolState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetMaturityPoolStateResponseAminoMsg): QueryGetAssetMaturityPoolStateResponse {
    return QueryGetAssetMaturityPoolStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetMaturityPoolStateResponseProtoMsg, useInterfaces: boolean = true): QueryGetAssetMaturityPoolStateResponse {
    return QueryGetAssetMaturityPoolStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetMaturityPoolStateResponse): Uint8Array {
    return QueryGetAssetMaturityPoolStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetMaturityPoolStateResponse): QueryGetAssetMaturityPoolStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryGetAssetMaturityPoolStateResponse",
      value: QueryGetAssetMaturityPoolStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetMaturityPoolStateResponse.typeUrl, QueryGetAssetMaturityPoolStateResponse);
function createBaseQueryAllAssetMaturityPoolStateRequest(): QueryAllAssetMaturityPoolStateRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAssetMaturityPoolStateRequest = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateRequest",
  is(o: any): o is QueryAllAssetMaturityPoolStateRequest {
    return o && o.$typeUrl === QueryAllAssetMaturityPoolStateRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllAssetMaturityPoolStateRequestSDKType {
    return o && o.$typeUrl === QueryAllAssetMaturityPoolStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllAssetMaturityPoolStateRequestAmino {
    return o && o.$typeUrl === QueryAllAssetMaturityPoolStateRequest.typeUrl;
  },
  encode(message: QueryAllAssetMaturityPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetMaturityPoolStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAssetMaturityPoolStateRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetMaturityPoolStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetMaturityPoolStateRequest>): QueryAllAssetMaturityPoolStateRequest {
    const message = createBaseQueryAllAssetMaturityPoolStateRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetMaturityPoolStateRequestAmino): QueryAllAssetMaturityPoolStateRequest {
    const message = createBaseQueryAllAssetMaturityPoolStateRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAssetMaturityPoolStateRequest, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetMaturityPoolStateRequestAminoMsg): QueryAllAssetMaturityPoolStateRequest {
    return QueryAllAssetMaturityPoolStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetMaturityPoolStateRequestProtoMsg, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateRequest {
    return QueryAllAssetMaturityPoolStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAssetMaturityPoolStateRequest): Uint8Array {
    return QueryAllAssetMaturityPoolStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetMaturityPoolStateRequest): QueryAllAssetMaturityPoolStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateRequest",
      value: QueryAllAssetMaturityPoolStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAssetMaturityPoolStateRequest.typeUrl, QueryAllAssetMaturityPoolStateRequest);
function createBaseQueryAllAssetMaturityPoolStateResponse(): QueryAllAssetMaturityPoolStateResponse {
  return {
    assetMaturityPoolState: [],
    pagination: undefined
  };
}
export const QueryAllAssetMaturityPoolStateResponse = {
  typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateResponse",
  is(o: any): o is QueryAllAssetMaturityPoolStateResponse {
    return o && (o.$typeUrl === QueryAllAssetMaturityPoolStateResponse.typeUrl || Array.isArray(o.assetMaturityPoolState) && (!o.assetMaturityPoolState.length || AssetMaturityPoolState.is(o.assetMaturityPoolState[0])));
  },
  isSDK(o: any): o is QueryAllAssetMaturityPoolStateResponseSDKType {
    return o && (o.$typeUrl === QueryAllAssetMaturityPoolStateResponse.typeUrl || Array.isArray(o.asset_maturity_pool_state) && (!o.asset_maturity_pool_state.length || AssetMaturityPoolState.isSDK(o.asset_maturity_pool_state[0])));
  },
  isAmino(o: any): o is QueryAllAssetMaturityPoolStateResponseAmino {
    return o && (o.$typeUrl === QueryAllAssetMaturityPoolStateResponse.typeUrl || Array.isArray(o.asset_maturity_pool_state) && (!o.asset_maturity_pool_state.length || AssetMaturityPoolState.isAmino(o.asset_maturity_pool_state[0])));
  },
  encode(message: QueryAllAssetMaturityPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetMaturityPoolState) {
      AssetMaturityPoolState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAssetMaturityPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetMaturityPoolState.push(AssetMaturityPoolState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAssetMaturityPoolStateResponse {
    return {
      assetMaturityPoolState: Array.isArray(object?.assetMaturityPoolState) ? object.assetMaturityPoolState.map((e: any) => AssetMaturityPoolState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllAssetMaturityPoolStateResponse): unknown {
    const obj: any = {};
    if (message.assetMaturityPoolState) {
      obj.assetMaturityPoolState = message.assetMaturityPoolState.map(e => e ? AssetMaturityPoolState.toJSON(e) : undefined);
    } else {
      obj.assetMaturityPoolState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllAssetMaturityPoolStateResponse>): QueryAllAssetMaturityPoolStateResponse {
    const message = createBaseQueryAllAssetMaturityPoolStateResponse();
    message.assetMaturityPoolState = object.assetMaturityPoolState?.map(e => AssetMaturityPoolState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAssetMaturityPoolStateResponseAmino): QueryAllAssetMaturityPoolStateResponse {
    const message = createBaseQueryAllAssetMaturityPoolStateResponse();
    message.assetMaturityPoolState = object.asset_maturity_pool_state?.map(e => AssetMaturityPoolState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAssetMaturityPoolStateResponse, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateResponseAmino {
    const obj: any = {};
    if (message.assetMaturityPoolState) {
      obj.asset_maturity_pool_state = message.assetMaturityPoolState.map(e => e ? AssetMaturityPoolState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.asset_maturity_pool_state = message.assetMaturityPoolState;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAssetMaturityPoolStateResponseAminoMsg): QueryAllAssetMaturityPoolStateResponse {
    return QueryAllAssetMaturityPoolStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAssetMaturityPoolStateResponseProtoMsg, useInterfaces: boolean = true): QueryAllAssetMaturityPoolStateResponse {
    return QueryAllAssetMaturityPoolStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllAssetMaturityPoolStateResponse): Uint8Array {
    return QueryAllAssetMaturityPoolStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAssetMaturityPoolStateResponse): QueryAllAssetMaturityPoolStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.ystaking.v1.QueryAllAssetMaturityPoolStateResponse",
      value: QueryAllAssetMaturityPoolStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllAssetMaturityPoolStateResponse.typeUrl, QueryAllAssetMaturityPoolStateResponse);