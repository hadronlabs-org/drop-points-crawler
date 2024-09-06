import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { AssetState, AssetStateAmino, AssetStateSDKType } from "./asset_state";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryGetAssetStateRequest {
  assetId: string;
}
export interface QueryGetAssetStateRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest";
  value: Uint8Array;
}
export interface QueryGetAssetStateRequestAmino {
  asset_id?: string;
}
export interface QueryGetAssetStateRequestAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetAssetStateRequest";
  value: QueryGetAssetStateRequestAmino;
}
export interface QueryGetAssetStateRequestSDKType {
  asset_id: string;
}
export interface QueryGetAssetStateResponse {
  assetState: AssetState;
}
export interface QueryGetAssetStateResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse";
  value: Uint8Array;
}
export interface QueryGetAssetStateResponseAmino {
  asset_state?: AssetStateAmino;
}
export interface QueryGetAssetStateResponseAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetAssetStateResponse";
  value: QueryGetAssetStateResponseAmino;
}
export interface QueryGetAssetStateResponseSDKType {
  asset_state: AssetStateSDKType;
}
export interface QueryGetCPExchangeRateRequest {
  assetId: string;
}
export interface QueryGetCPExchangeRateRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest";
  value: Uint8Array;
}
export interface QueryGetCPExchangeRateRequestAmino {
  asset_id?: string;
}
export interface QueryGetCPExchangeRateRequestAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest";
  value: QueryGetCPExchangeRateRequestAmino;
}
export interface QueryGetCPExchangeRateRequestSDKType {
  asset_id: string;
}
export interface QueryGetCPExchangeRateResponse {
  exchangeRate: string;
}
export interface QueryGetCPExchangeRateResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse";
  value: Uint8Array;
}
export interface QueryGetCPExchangeRateResponseAmino {
  exchange_rate?: string;
}
export interface QueryGetCPExchangeRateResponseAminoMsg {
  type: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse";
  value: QueryGetCPExchangeRateResponseAmino;
}
export interface QueryGetCPExchangeRateResponseSDKType {
  exchange_rate: string;
}
export interface QuerySimulateRefractRequest {
  amount: Coin;
  maturity: string;
}
export interface QuerySimulateRefractRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractRequest";
  value: Uint8Array;
}
export interface QuerySimulateRefractRequestAmino {
  amount?: CoinAmino;
  maturity?: string;
}
export interface QuerySimulateRefractRequestAminoMsg {
  type: "/pryzm.refractor.v1.QuerySimulateRefractRequest";
  value: QuerySimulateRefractRequestAmino;
}
export interface QuerySimulateRefractRequestSDKType {
  amount: CoinSDKType;
  maturity: string;
}
export interface QuerySimulateRefractResponse {
  pAmount: Coin;
  yAmount: Coin;
  fee: Coin;
}
export interface QuerySimulateRefractResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractResponse";
  value: Uint8Array;
}
export interface QuerySimulateRefractResponseAmino {
  p_amount?: CoinAmino;
  y_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface QuerySimulateRefractResponseAminoMsg {
  type: "/pryzm.refractor.v1.QuerySimulateRefractResponse";
  value: QuerySimulateRefractResponseAmino;
}
export interface QuerySimulateRefractResponseSDKType {
  p_amount: CoinSDKType;
  y_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface QuerySimulateRedeemRequest {
  pAmount: Coin;
  yAmount?: Coin;
}
export interface QuerySimulateRedeemRequestProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemRequest";
  value: Uint8Array;
}
export interface QuerySimulateRedeemRequestAmino {
  p_amount?: CoinAmino;
  y_amount?: CoinAmino;
}
export interface QuerySimulateRedeemRequestAminoMsg {
  type: "/pryzm.refractor.v1.QuerySimulateRedeemRequest";
  value: QuerySimulateRedeemRequestAmino;
}
export interface QuerySimulateRedeemRequestSDKType {
  p_amount: CoinSDKType;
  y_amount?: CoinSDKType;
}
export interface QuerySimulateRedeemResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface QuerySimulateRedeemResponseProtoMsg {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemResponse";
  value: Uint8Array;
}
export interface QuerySimulateRedeemResponseAmino {
  c_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface QuerySimulateRedeemResponseAminoMsg {
  type: "/pryzm.refractor.v1.QuerySimulateRedeemResponse";
  value: QuerySimulateRedeemResponseAmino;
}
export interface QuerySimulateRedeemResponseSDKType {
  c_amount: CoinSDKType;
  fee: CoinSDKType;
}
function createBaseQueryGetAssetStateRequest(): QueryGetAssetStateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetAssetStateRequest = {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest",
  is(o: any): o is QueryGetAssetStateRequest {
    return o && (o.$typeUrl === QueryGetAssetStateRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryGetAssetStateRequestSDKType {
    return o && (o.$typeUrl === QueryGetAssetStateRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryGetAssetStateRequestAmino {
    return o && (o.$typeUrl === QueryGetAssetStateRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryGetAssetStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetStateRequest();
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
  fromJSON(object: any): QueryGetAssetStateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetAssetStateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetStateRequest>): QueryGetAssetStateRequest {
    const message = createBaseQueryGetAssetStateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetAssetStateRequestAmino): QueryGetAssetStateRequest {
    const message = createBaseQueryGetAssetStateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetAssetStateRequest, useInterfaces: boolean = true): QueryGetAssetStateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetStateRequestAminoMsg): QueryGetAssetStateRequest {
    return QueryGetAssetStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetStateRequestProtoMsg, useInterfaces: boolean = true): QueryGetAssetStateRequest {
    return QueryGetAssetStateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetStateRequest): Uint8Array {
    return QueryGetAssetStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetStateRequest): QueryGetAssetStateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateRequest",
      value: QueryGetAssetStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetStateRequest.typeUrl, QueryGetAssetStateRequest);
function createBaseQueryGetAssetStateResponse(): QueryGetAssetStateResponse {
  return {
    assetState: AssetState.fromPartial({})
  };
}
export const QueryGetAssetStateResponse = {
  typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse",
  is(o: any): o is QueryGetAssetStateResponse {
    return o && (o.$typeUrl === QueryGetAssetStateResponse.typeUrl || AssetState.is(o.assetState));
  },
  isSDK(o: any): o is QueryGetAssetStateResponseSDKType {
    return o && (o.$typeUrl === QueryGetAssetStateResponse.typeUrl || AssetState.isSDK(o.asset_state));
  },
  isAmino(o: any): o is QueryGetAssetStateResponseAmino {
    return o && (o.$typeUrl === QueryGetAssetStateResponse.typeUrl || AssetState.isAmino(o.asset_state));
  },
  encode(message: QueryGetAssetStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetState !== undefined) {
      AssetState.encode(message.assetState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetAssetStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAssetStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetState = AssetState.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAssetStateResponse {
    return {
      assetState: isSet(object.assetState) ? AssetState.fromJSON(object.assetState) : undefined
    };
  },
  toJSON(message: QueryGetAssetStateResponse): unknown {
    const obj: any = {};
    message.assetState !== undefined && (obj.assetState = message.assetState ? AssetState.toJSON(message.assetState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetAssetStateResponse>): QueryGetAssetStateResponse {
    const message = createBaseQueryGetAssetStateResponse();
    message.assetState = object.assetState !== undefined && object.assetState !== null ? AssetState.fromPartial(object.assetState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAssetStateResponseAmino): QueryGetAssetStateResponse {
    const message = createBaseQueryGetAssetStateResponse();
    if (object.asset_state !== undefined && object.asset_state !== null) {
      message.assetState = AssetState.fromAmino(object.asset_state);
    }
    return message;
  },
  toAmino(message: QueryGetAssetStateResponse, useInterfaces: boolean = true): QueryGetAssetStateResponseAmino {
    const obj: any = {};
    obj.asset_state = message.assetState ? AssetState.toAmino(message.assetState, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAssetStateResponseAminoMsg): QueryGetAssetStateResponse {
    return QueryGetAssetStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAssetStateResponseProtoMsg, useInterfaces: boolean = true): QueryGetAssetStateResponse {
    return QueryGetAssetStateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetAssetStateResponse): Uint8Array {
    return QueryGetAssetStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAssetStateResponse): QueryGetAssetStateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetAssetStateResponse",
      value: QueryGetAssetStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetAssetStateResponse.typeUrl, QueryGetAssetStateResponse);
function createBaseQueryGetCPExchangeRateRequest(): QueryGetCPExchangeRateRequest {
  return {
    assetId: ""
  };
}
export const QueryGetCPExchangeRateRequest = {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest",
  is(o: any): o is QueryGetCPExchangeRateRequest {
    return o && (o.$typeUrl === QueryGetCPExchangeRateRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryGetCPExchangeRateRequestSDKType {
    return o && (o.$typeUrl === QueryGetCPExchangeRateRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryGetCPExchangeRateRequestAmino {
    return o && (o.$typeUrl === QueryGetCPExchangeRateRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryGetCPExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetCPExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCPExchangeRateRequest();
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
  fromJSON(object: any): QueryGetCPExchangeRateRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetCPExchangeRateRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetCPExchangeRateRequest>): QueryGetCPExchangeRateRequest {
    const message = createBaseQueryGetCPExchangeRateRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetCPExchangeRateRequestAmino): QueryGetCPExchangeRateRequest {
    const message = createBaseQueryGetCPExchangeRateRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetCPExchangeRateRequest, useInterfaces: boolean = true): QueryGetCPExchangeRateRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetCPExchangeRateRequestAminoMsg): QueryGetCPExchangeRateRequest {
    return QueryGetCPExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCPExchangeRateRequestProtoMsg, useInterfaces: boolean = true): QueryGetCPExchangeRateRequest {
    return QueryGetCPExchangeRateRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetCPExchangeRateRequest): Uint8Array {
    return QueryGetCPExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCPExchangeRateRequest): QueryGetCPExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateRequest",
      value: QueryGetCPExchangeRateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetCPExchangeRateRequest.typeUrl, QueryGetCPExchangeRateRequest);
function createBaseQueryGetCPExchangeRateResponse(): QueryGetCPExchangeRateResponse {
  return {
    exchangeRate: ""
  };
}
export const QueryGetCPExchangeRateResponse = {
  typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse",
  is(o: any): o is QueryGetCPExchangeRateResponse {
    return o && (o.$typeUrl === QueryGetCPExchangeRateResponse.typeUrl || typeof o.exchangeRate === "string");
  },
  isSDK(o: any): o is QueryGetCPExchangeRateResponseSDKType {
    return o && (o.$typeUrl === QueryGetCPExchangeRateResponse.typeUrl || typeof o.exchange_rate === "string");
  },
  isAmino(o: any): o is QueryGetCPExchangeRateResponseAmino {
    return o && (o.$typeUrl === QueryGetCPExchangeRateResponse.typeUrl || typeof o.exchange_rate === "string");
  },
  encode(message: QueryGetCPExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetCPExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCPExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetCPExchangeRateResponse {
    return {
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : ""
    };
  },
  toJSON(message: QueryGetCPExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },
  fromPartial(object: Partial<QueryGetCPExchangeRateResponse>): QueryGetCPExchangeRateResponse {
    const message = createBaseQueryGetCPExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
  fromAmino(object: QueryGetCPExchangeRateResponseAmino): QueryGetCPExchangeRateResponse {
    const message = createBaseQueryGetCPExchangeRateResponse();
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    return message;
  },
  toAmino(message: QueryGetCPExchangeRateResponse, useInterfaces: boolean = true): QueryGetCPExchangeRateResponseAmino {
    const obj: any = {};
    obj.exchange_rate = padDecimal(message.exchangeRate) === "" ? undefined : padDecimal(message.exchangeRate);
    return obj;
  },
  fromAminoMsg(object: QueryGetCPExchangeRateResponseAminoMsg): QueryGetCPExchangeRateResponse {
    return QueryGetCPExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetCPExchangeRateResponseProtoMsg, useInterfaces: boolean = true): QueryGetCPExchangeRateResponse {
    return QueryGetCPExchangeRateResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetCPExchangeRateResponse): Uint8Array {
    return QueryGetCPExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCPExchangeRateResponse): QueryGetCPExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QueryGetCPExchangeRateResponse",
      value: QueryGetCPExchangeRateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetCPExchangeRateResponse.typeUrl, QueryGetCPExchangeRateResponse);
function createBaseQuerySimulateRefractRequest(): QuerySimulateRefractRequest {
  return {
    amount: Coin.fromPartial({}),
    maturity: ""
  };
}
export const QuerySimulateRefractRequest = {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractRequest",
  is(o: any): o is QuerySimulateRefractRequest {
    return o && (o.$typeUrl === QuerySimulateRefractRequest.typeUrl || Coin.is(o.amount) && typeof o.maturity === "string");
  },
  isSDK(o: any): o is QuerySimulateRefractRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateRefractRequest.typeUrl || Coin.isSDK(o.amount) && typeof o.maturity === "string");
  },
  isAmino(o: any): o is QuerySimulateRefractRequestAmino {
    return o && (o.$typeUrl === QuerySimulateRefractRequest.typeUrl || Coin.isAmino(o.amount) && typeof o.maturity === "string");
  },
  encode(message: QuerySimulateRefractRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.maturity !== "") {
      writer.uint32(18).string(message.maturity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateRefractRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateRefractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.maturity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateRefractRequest {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      maturity: isSet(object.maturity) ? String(object.maturity) : ""
    };
  },
  toJSON(message: QuerySimulateRefractRequest): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.maturity !== undefined && (obj.maturity = message.maturity);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateRefractRequest>): QuerySimulateRefractRequest {
    const message = createBaseQuerySimulateRefractRequest();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.maturity = object.maturity ?? "";
    return message;
  },
  fromAmino(object: QuerySimulateRefractRequestAmino): QuerySimulateRefractRequest {
    const message = createBaseQuerySimulateRefractRequest();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.maturity !== undefined && object.maturity !== null) {
      message.maturity = object.maturity;
    }
    return message;
  },
  toAmino(message: QuerySimulateRefractRequest, useInterfaces: boolean = true): QuerySimulateRefractRequestAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.maturity = message.maturity === "" ? undefined : message.maturity;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateRefractRequestAminoMsg): QuerySimulateRefractRequest {
    return QuerySimulateRefractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateRefractRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateRefractRequest {
    return QuerySimulateRefractRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateRefractRequest): Uint8Array {
    return QuerySimulateRefractRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateRefractRequest): QuerySimulateRefractRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractRequest",
      value: QuerySimulateRefractRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateRefractRequest.typeUrl, QuerySimulateRefractRequest);
function createBaseQuerySimulateRefractResponse(): QuerySimulateRefractResponse {
  return {
    pAmount: Coin.fromPartial({}),
    yAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const QuerySimulateRefractResponse = {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractResponse",
  is(o: any): o is QuerySimulateRefractResponse {
    return o && (o.$typeUrl === QuerySimulateRefractResponse.typeUrl || Coin.is(o.pAmount) && Coin.is(o.yAmount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is QuerySimulateRefractResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateRefractResponse.typeUrl || Coin.isSDK(o.p_amount) && Coin.isSDK(o.y_amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is QuerySimulateRefractResponseAmino {
    return o && (o.$typeUrl === QuerySimulateRefractResponse.typeUrl || Coin.isAmino(o.p_amount) && Coin.isAmino(o.y_amount) && Coin.isAmino(o.fee));
  },
  encode(message: QuerySimulateRefractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pAmount !== undefined) {
      Coin.encode(message.pAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.yAmount !== undefined) {
      Coin.encode(message.yAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateRefractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateRefractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.yAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QuerySimulateRefractResponse {
    return {
      pAmount: isSet(object.pAmount) ? Coin.fromJSON(object.pAmount) : undefined,
      yAmount: isSet(object.yAmount) ? Coin.fromJSON(object.yAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: QuerySimulateRefractResponse): unknown {
    const obj: any = {};
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateRefractResponse>): QuerySimulateRefractResponse {
    const message = createBaseQuerySimulateRefractResponse();
    message.pAmount = object.pAmount !== undefined && object.pAmount !== null ? Coin.fromPartial(object.pAmount) : undefined;
    message.yAmount = object.yAmount !== undefined && object.yAmount !== null ? Coin.fromPartial(object.yAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateRefractResponseAmino): QuerySimulateRefractResponse {
    const message = createBaseQuerySimulateRefractResponse();
    if (object.p_amount !== undefined && object.p_amount !== null) {
      message.pAmount = Coin.fromAmino(object.p_amount);
    }
    if (object.y_amount !== undefined && object.y_amount !== null) {
      message.yAmount = Coin.fromAmino(object.y_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QuerySimulateRefractResponse, useInterfaces: boolean = true): QuerySimulateRefractResponseAmino {
    const obj: any = {};
    obj.p_amount = message.pAmount ? Coin.toAmino(message.pAmount, useInterfaces) : undefined;
    obj.y_amount = message.yAmount ? Coin.toAmino(message.yAmount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateRefractResponseAminoMsg): QuerySimulateRefractResponse {
    return QuerySimulateRefractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateRefractResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateRefractResponse {
    return QuerySimulateRefractResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateRefractResponse): Uint8Array {
    return QuerySimulateRefractResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateRefractResponse): QuerySimulateRefractResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QuerySimulateRefractResponse",
      value: QuerySimulateRefractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateRefractResponse.typeUrl, QuerySimulateRefractResponse);
function createBaseQuerySimulateRedeemRequest(): QuerySimulateRedeemRequest {
  return {
    pAmount: Coin.fromPartial({}),
    yAmount: undefined
  };
}
export const QuerySimulateRedeemRequest = {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemRequest",
  is(o: any): o is QuerySimulateRedeemRequest {
    return o && (o.$typeUrl === QuerySimulateRedeemRequest.typeUrl || Coin.is(o.pAmount));
  },
  isSDK(o: any): o is QuerySimulateRedeemRequestSDKType {
    return o && (o.$typeUrl === QuerySimulateRedeemRequest.typeUrl || Coin.isSDK(o.p_amount));
  },
  isAmino(o: any): o is QuerySimulateRedeemRequestAmino {
    return o && (o.$typeUrl === QuerySimulateRedeemRequest.typeUrl || Coin.isAmino(o.p_amount));
  },
  encode(message: QuerySimulateRedeemRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pAmount !== undefined) {
      Coin.encode(message.pAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.yAmount !== undefined) {
      Coin.encode(message.yAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateRedeemRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateRedeemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.yAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimulateRedeemRequest {
    return {
      pAmount: isSet(object.pAmount) ? Coin.fromJSON(object.pAmount) : undefined,
      yAmount: isSet(object.yAmount) ? Coin.fromJSON(object.yAmount) : undefined
    };
  },
  toJSON(message: QuerySimulateRedeemRequest): unknown {
    const obj: any = {};
    message.pAmount !== undefined && (obj.pAmount = message.pAmount ? Coin.toJSON(message.pAmount) : undefined);
    message.yAmount !== undefined && (obj.yAmount = message.yAmount ? Coin.toJSON(message.yAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateRedeemRequest>): QuerySimulateRedeemRequest {
    const message = createBaseQuerySimulateRedeemRequest();
    message.pAmount = object.pAmount !== undefined && object.pAmount !== null ? Coin.fromPartial(object.pAmount) : undefined;
    message.yAmount = object.yAmount !== undefined && object.yAmount !== null ? Coin.fromPartial(object.yAmount) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateRedeemRequestAmino): QuerySimulateRedeemRequest {
    const message = createBaseQuerySimulateRedeemRequest();
    if (object.p_amount !== undefined && object.p_amount !== null) {
      message.pAmount = Coin.fromAmino(object.p_amount);
    }
    if (object.y_amount !== undefined && object.y_amount !== null) {
      message.yAmount = Coin.fromAmino(object.y_amount);
    }
    return message;
  },
  toAmino(message: QuerySimulateRedeemRequest, useInterfaces: boolean = true): QuerySimulateRedeemRequestAmino {
    const obj: any = {};
    obj.p_amount = message.pAmount ? Coin.toAmino(message.pAmount, useInterfaces) : undefined;
    obj.y_amount = message.yAmount ? Coin.toAmino(message.yAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateRedeemRequestAminoMsg): QuerySimulateRedeemRequest {
    return QuerySimulateRedeemRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateRedeemRequestProtoMsg, useInterfaces: boolean = true): QuerySimulateRedeemRequest {
    return QuerySimulateRedeemRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateRedeemRequest): Uint8Array {
    return QuerySimulateRedeemRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateRedeemRequest): QuerySimulateRedeemRequestProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemRequest",
      value: QuerySimulateRedeemRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateRedeemRequest.typeUrl, QuerySimulateRedeemRequest);
function createBaseQuerySimulateRedeemResponse(): QuerySimulateRedeemResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const QuerySimulateRedeemResponse = {
  typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemResponse",
  is(o: any): o is QuerySimulateRedeemResponse {
    return o && (o.$typeUrl === QuerySimulateRedeemResponse.typeUrl || Coin.is(o.cAmount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is QuerySimulateRedeemResponseSDKType {
    return o && (o.$typeUrl === QuerySimulateRedeemResponse.typeUrl || Coin.isSDK(o.c_amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is QuerySimulateRedeemResponseAmino {
    return o && (o.$typeUrl === QuerySimulateRedeemResponse.typeUrl || Coin.isAmino(o.c_amount) && Coin.isAmino(o.fee));
  },
  encode(message: QuerySimulateRedeemResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySimulateRedeemResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimulateRedeemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QuerySimulateRedeemResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: QuerySimulateRedeemResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySimulateRedeemResponse>): QuerySimulateRedeemResponse {
    const message = createBaseQuerySimulateRedeemResponse();
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: QuerySimulateRedeemResponseAmino): QuerySimulateRedeemResponse {
    const message = createBaseQuerySimulateRedeemResponse();
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QuerySimulateRedeemResponse, useInterfaces: boolean = true): QuerySimulateRedeemResponseAmino {
    const obj: any = {};
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySimulateRedeemResponseAminoMsg): QuerySimulateRedeemResponse {
    return QuerySimulateRedeemResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySimulateRedeemResponseProtoMsg, useInterfaces: boolean = true): QuerySimulateRedeemResponse {
    return QuerySimulateRedeemResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySimulateRedeemResponse): Uint8Array {
    return QuerySimulateRedeemResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySimulateRedeemResponse): QuerySimulateRedeemResponseProtoMsg {
    return {
      typeUrl: "/pryzm.refractor.v1.QuerySimulateRedeemResponse",
      value: QuerySimulateRedeemResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySimulateRedeemResponse.typeUrl, QuerySimulateRedeemResponse);