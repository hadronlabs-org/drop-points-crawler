import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetAmino, RefractableAssetSDKType } from "./refractable_asset";
import { MaturityLevel, MaturityLevelAmino, MaturityLevelSDKType } from "./maturity_level";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pryzm.assets.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/pryzm.assets.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetRefractableAssetRequest {
  assetId: string;
}
export interface QueryGetRefractableAssetRequestProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetRequest";
  value: Uint8Array;
}
export interface QueryGetRefractableAssetRequestAmino {
  asset_id?: string;
}
export interface QueryGetRefractableAssetRequestAminoMsg {
  type: "/pryzm.assets.v1.QueryGetRefractableAssetRequest";
  value: QueryGetRefractableAssetRequestAmino;
}
export interface QueryGetRefractableAssetRequestSDKType {
  asset_id: string;
}
export interface QueryGetRefractableAssetResponse {
  asset: RefractableAsset;
}
export interface QueryGetRefractableAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetResponse";
  value: Uint8Array;
}
export interface QueryGetRefractableAssetResponseAmino {
  asset?: RefractableAssetAmino;
}
export interface QueryGetRefractableAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.QueryGetRefractableAssetResponse";
  value: QueryGetRefractableAssetResponseAmino;
}
export interface QueryGetRefractableAssetResponseSDKType {
  asset: RefractableAssetSDKType;
}
export interface QueryAllRefractableAssetRequest {
  enabled: string;
  pagination?: PageRequest;
}
export interface QueryAllRefractableAssetRequestProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetRequest";
  value: Uint8Array;
}
export interface QueryAllRefractableAssetRequestAmino {
  enabled?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllRefractableAssetRequestAminoMsg {
  type: "/pryzm.assets.v1.QueryAllRefractableAssetRequest";
  value: QueryAllRefractableAssetRequestAmino;
}
export interface QueryAllRefractableAssetRequestSDKType {
  enabled: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllRefractableAssetResponse {
  assets: RefractableAsset[];
  pagination?: PageResponse;
}
export interface QueryAllRefractableAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetResponse";
  value: Uint8Array;
}
export interface QueryAllRefractableAssetResponseAmino {
  assets?: RefractableAssetAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllRefractableAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.QueryAllRefractableAssetResponse";
  value: QueryAllRefractableAssetResponseAmino;
}
export interface QueryAllRefractableAssetResponseSDKType {
  assets: RefractableAssetSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetMaturityLevelRequest {
  assetId: string;
  symbol: string;
}
export interface QueryGetMaturityLevelRequestProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelRequest";
  value: Uint8Array;
}
export interface QueryGetMaturityLevelRequestAmino {
  asset_id?: string;
  symbol?: string;
}
export interface QueryGetMaturityLevelRequestAminoMsg {
  type: "/pryzm.assets.v1.QueryGetMaturityLevelRequest";
  value: QueryGetMaturityLevelRequestAmino;
}
export interface QueryGetMaturityLevelRequestSDKType {
  asset_id: string;
  symbol: string;
}
export interface QueryGetMaturityLevelResponse {
  maturityLevel: MaturityLevel;
}
export interface QueryGetMaturityLevelResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelResponse";
  value: Uint8Array;
}
export interface QueryGetMaturityLevelResponseAmino {
  maturity_level?: MaturityLevelAmino;
}
export interface QueryGetMaturityLevelResponseAminoMsg {
  type: "/pryzm.assets.v1.QueryGetMaturityLevelResponse";
  value: QueryGetMaturityLevelResponseAmino;
}
export interface QueryGetMaturityLevelResponseSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface QueryAllMaturityLevelRequest {
  active: boolean;
  assetId: string;
  assetEnabled: string;
  pagination?: PageRequest;
}
export interface QueryAllMaturityLevelRequestProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelRequest";
  value: Uint8Array;
}
export interface QueryAllMaturityLevelRequestAmino {
  active?: boolean;
  asset_id?: string;
  asset_enabled?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllMaturityLevelRequestAminoMsg {
  type: "/pryzm.assets.v1.QueryAllMaturityLevelRequest";
  value: QueryAllMaturityLevelRequestAmino;
}
export interface QueryAllMaturityLevelRequestSDKType {
  active: boolean;
  asset_id: string;
  asset_enabled: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAllMaturityLevelResponse {
  maturityLevel: MaturityLevel[];
  pagination?: PageResponse;
}
export interface QueryAllMaturityLevelResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelResponse";
  value: Uint8Array;
}
export interface QueryAllMaturityLevelResponseAmino {
  maturity_level?: MaturityLevelAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMaturityLevelResponseAminoMsg {
  type: "/pryzm.assets.v1.QueryAllMaturityLevelResponse";
  value: QueryAllMaturityLevelResponseAmino;
}
export interface QueryAllMaturityLevelResponseSDKType {
  maturity_level: MaturityLevelSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pryzm.assets.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest, useInterfaces: boolean = true): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg, useInterfaces: boolean = true): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pryzm.assets.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse, useInterfaces: boolean = true): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg, useInterfaces: boolean = true): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetRefractableAssetRequest(): QueryGetRefractableAssetRequest {
  return {
    assetId: ""
  };
}
export const QueryGetRefractableAssetRequest = {
  typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetRequest",
  is(o: any): o is QueryGetRefractableAssetRequest {
    return o && (o.$typeUrl === QueryGetRefractableAssetRequest.typeUrl || typeof o.assetId === "string");
  },
  isSDK(o: any): o is QueryGetRefractableAssetRequestSDKType {
    return o && (o.$typeUrl === QueryGetRefractableAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  isAmino(o: any): o is QueryGetRefractableAssetRequestAmino {
    return o && (o.$typeUrl === QueryGetRefractableAssetRequest.typeUrl || typeof o.asset_id === "string");
  },
  encode(message: QueryGetRefractableAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetRefractableAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRefractableAssetRequest();
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
  fromJSON(object: any): QueryGetRefractableAssetRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: QueryGetRefractableAssetRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<QueryGetRefractableAssetRequest>): QueryGetRefractableAssetRequest {
    const message = createBaseQueryGetRefractableAssetRequest();
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: QueryGetRefractableAssetRequestAmino): QueryGetRefractableAssetRequest {
    const message = createBaseQueryGetRefractableAssetRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: QueryGetRefractableAssetRequest, useInterfaces: boolean = true): QueryGetRefractableAssetRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: QueryGetRefractableAssetRequestAminoMsg): QueryGetRefractableAssetRequest {
    return QueryGetRefractableAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRefractableAssetRequestProtoMsg, useInterfaces: boolean = true): QueryGetRefractableAssetRequest {
    return QueryGetRefractableAssetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetRefractableAssetRequest): Uint8Array {
    return QueryGetRefractableAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRefractableAssetRequest): QueryGetRefractableAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetRequest",
      value: QueryGetRefractableAssetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetRefractableAssetRequest.typeUrl, QueryGetRefractableAssetRequest);
function createBaseQueryGetRefractableAssetResponse(): QueryGetRefractableAssetResponse {
  return {
    asset: RefractableAsset.fromPartial({})
  };
}
export const QueryGetRefractableAssetResponse = {
  typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetResponse",
  is(o: any): o is QueryGetRefractableAssetResponse {
    return o && (o.$typeUrl === QueryGetRefractableAssetResponse.typeUrl || RefractableAsset.is(o.asset));
  },
  isSDK(o: any): o is QueryGetRefractableAssetResponseSDKType {
    return o && (o.$typeUrl === QueryGetRefractableAssetResponse.typeUrl || RefractableAsset.isSDK(o.asset));
  },
  isAmino(o: any): o is QueryGetRefractableAssetResponseAmino {
    return o && (o.$typeUrl === QueryGetRefractableAssetResponse.typeUrl || RefractableAsset.isAmino(o.asset));
  },
  encode(message: QueryGetRefractableAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetRefractableAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRefractableAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = RefractableAsset.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetRefractableAssetResponse {
    return {
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: QueryGetRefractableAssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetRefractableAssetResponse>): QueryGetRefractableAssetResponse {
    const message = createBaseQueryGetRefractableAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRefractableAssetResponseAmino): QueryGetRefractableAssetResponse {
    const message = createBaseQueryGetRefractableAssetResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = RefractableAsset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryGetRefractableAssetResponse, useInterfaces: boolean = true): QueryGetRefractableAssetResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? RefractableAsset.toAmino(message.asset, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRefractableAssetResponseAminoMsg): QueryGetRefractableAssetResponse {
    return QueryGetRefractableAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRefractableAssetResponseProtoMsg, useInterfaces: boolean = true): QueryGetRefractableAssetResponse {
    return QueryGetRefractableAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetRefractableAssetResponse): Uint8Array {
    return QueryGetRefractableAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRefractableAssetResponse): QueryGetRefractableAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryGetRefractableAssetResponse",
      value: QueryGetRefractableAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetRefractableAssetResponse.typeUrl, QueryGetRefractableAssetResponse);
function createBaseQueryAllRefractableAssetRequest(): QueryAllRefractableAssetRequest {
  return {
    enabled: "",
    pagination: undefined
  };
}
export const QueryAllRefractableAssetRequest = {
  typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetRequest",
  is(o: any): o is QueryAllRefractableAssetRequest {
    return o && (o.$typeUrl === QueryAllRefractableAssetRequest.typeUrl || typeof o.enabled === "string");
  },
  isSDK(o: any): o is QueryAllRefractableAssetRequestSDKType {
    return o && (o.$typeUrl === QueryAllRefractableAssetRequest.typeUrl || typeof o.enabled === "string");
  },
  isAmino(o: any): o is QueryAllRefractableAssetRequestAmino {
    return o && (o.$typeUrl === QueryAllRefractableAssetRequest.typeUrl || typeof o.enabled === "string");
  },
  encode(message: QueryAllRefractableAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled !== "") {
      writer.uint32(10).string(message.enabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllRefractableAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRefractableAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllRefractableAssetRequest {
    return {
      enabled: isSet(object.enabled) ? String(object.enabled) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllRefractableAssetRequest): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllRefractableAssetRequest>): QueryAllRefractableAssetRequest {
    const message = createBaseQueryAllRefractableAssetRequest();
    message.enabled = object.enabled ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRefractableAssetRequestAmino): QueryAllRefractableAssetRequest {
    const message = createBaseQueryAllRefractableAssetRequest();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRefractableAssetRequest, useInterfaces: boolean = true): QueryAllRefractableAssetRequestAmino {
    const obj: any = {};
    obj.enabled = message.enabled === "" ? undefined : message.enabled;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRefractableAssetRequestAminoMsg): QueryAllRefractableAssetRequest {
    return QueryAllRefractableAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRefractableAssetRequestProtoMsg, useInterfaces: boolean = true): QueryAllRefractableAssetRequest {
    return QueryAllRefractableAssetRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllRefractableAssetRequest): Uint8Array {
    return QueryAllRefractableAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRefractableAssetRequest): QueryAllRefractableAssetRequestProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetRequest",
      value: QueryAllRefractableAssetRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllRefractableAssetRequest.typeUrl, QueryAllRefractableAssetRequest);
function createBaseQueryAllRefractableAssetResponse(): QueryAllRefractableAssetResponse {
  return {
    assets: [],
    pagination: undefined
  };
}
export const QueryAllRefractableAssetResponse = {
  typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetResponse",
  is(o: any): o is QueryAllRefractableAssetResponse {
    return o && (o.$typeUrl === QueryAllRefractableAssetResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || RefractableAsset.is(o.assets[0])));
  },
  isSDK(o: any): o is QueryAllRefractableAssetResponseSDKType {
    return o && (o.$typeUrl === QueryAllRefractableAssetResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || RefractableAsset.isSDK(o.assets[0])));
  },
  isAmino(o: any): o is QueryAllRefractableAssetResponseAmino {
    return o && (o.$typeUrl === QueryAllRefractableAssetResponse.typeUrl || Array.isArray(o.assets) && (!o.assets.length || RefractableAsset.isAmino(o.assets[0])));
  },
  encode(message: QueryAllRefractableAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      RefractableAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllRefractableAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRefractableAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(RefractableAsset.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAllRefractableAssetResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => RefractableAsset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllRefractableAssetResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? RefractableAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllRefractableAssetResponse>): QueryAllRefractableAssetResponse {
    const message = createBaseQueryAllRefractableAssetResponse();
    message.assets = object.assets?.map(e => RefractableAsset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRefractableAssetResponseAmino): QueryAllRefractableAssetResponse {
    const message = createBaseQueryAllRefractableAssetResponse();
    message.assets = object.assets?.map(e => RefractableAsset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRefractableAssetResponse, useInterfaces: boolean = true): QueryAllRefractableAssetResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? RefractableAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRefractableAssetResponseAminoMsg): QueryAllRefractableAssetResponse {
    return QueryAllRefractableAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRefractableAssetResponseProtoMsg, useInterfaces: boolean = true): QueryAllRefractableAssetResponse {
    return QueryAllRefractableAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllRefractableAssetResponse): Uint8Array {
    return QueryAllRefractableAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRefractableAssetResponse): QueryAllRefractableAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryAllRefractableAssetResponse",
      value: QueryAllRefractableAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllRefractableAssetResponse.typeUrl, QueryAllRefractableAssetResponse);
function createBaseQueryGetMaturityLevelRequest(): QueryGetMaturityLevelRequest {
  return {
    assetId: "",
    symbol: ""
  };
}
export const QueryGetMaturityLevelRequest = {
  typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelRequest",
  is(o: any): o is QueryGetMaturityLevelRequest {
    return o && (o.$typeUrl === QueryGetMaturityLevelRequest.typeUrl || typeof o.assetId === "string" && typeof o.symbol === "string");
  },
  isSDK(o: any): o is QueryGetMaturityLevelRequestSDKType {
    return o && (o.$typeUrl === QueryGetMaturityLevelRequest.typeUrl || typeof o.asset_id === "string" && typeof o.symbol === "string");
  },
  isAmino(o: any): o is QueryGetMaturityLevelRequestAmino {
    return o && (o.$typeUrl === QueryGetMaturityLevelRequest.typeUrl || typeof o.asset_id === "string" && typeof o.symbol === "string");
  },
  encode(message: QueryGetMaturityLevelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetMaturityLevelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaturityLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMaturityLevelRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  toJSON(message: QueryGetMaturityLevelRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },
  fromPartial(object: Partial<QueryGetMaturityLevelRequest>): QueryGetMaturityLevelRequest {
    const message = createBaseQueryGetMaturityLevelRequest();
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: QueryGetMaturityLevelRequestAmino): QueryGetMaturityLevelRequest {
    const message = createBaseQueryGetMaturityLevelRequest();
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: QueryGetMaturityLevelRequest, useInterfaces: boolean = true): QueryGetMaturityLevelRequestAmino {
    const obj: any = {};
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: QueryGetMaturityLevelRequestAminoMsg): QueryGetMaturityLevelRequest {
    return QueryGetMaturityLevelRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMaturityLevelRequestProtoMsg, useInterfaces: boolean = true): QueryGetMaturityLevelRequest {
    return QueryGetMaturityLevelRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetMaturityLevelRequest): Uint8Array {
    return QueryGetMaturityLevelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMaturityLevelRequest): QueryGetMaturityLevelRequestProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelRequest",
      value: QueryGetMaturityLevelRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetMaturityLevelRequest.typeUrl, QueryGetMaturityLevelRequest);
function createBaseQueryGetMaturityLevelResponse(): QueryGetMaturityLevelResponse {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const QueryGetMaturityLevelResponse = {
  typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelResponse",
  is(o: any): o is QueryGetMaturityLevelResponse {
    return o && (o.$typeUrl === QueryGetMaturityLevelResponse.typeUrl || MaturityLevel.is(o.maturityLevel));
  },
  isSDK(o: any): o is QueryGetMaturityLevelResponseSDKType {
    return o && (o.$typeUrl === QueryGetMaturityLevelResponse.typeUrl || MaturityLevel.isSDK(o.maturity_level));
  },
  isAmino(o: any): o is QueryGetMaturityLevelResponseAmino {
    return o && (o.$typeUrl === QueryGetMaturityLevelResponse.typeUrl || MaturityLevel.isAmino(o.maturity_level));
  },
  encode(message: QueryGetMaturityLevelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryGetMaturityLevelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaturityLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMaturityLevelResponse {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: QueryGetMaturityLevelResponse): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetMaturityLevelResponse>): QueryGetMaturityLevelResponse {
    const message = createBaseQueryGetMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMaturityLevelResponseAmino): QueryGetMaturityLevelResponse {
    const message = createBaseQueryGetMaturityLevelResponse();
    if (object.maturity_level !== undefined && object.maturity_level !== null) {
      message.maturityLevel = MaturityLevel.fromAmino(object.maturity_level);
    }
    return message;
  },
  toAmino(message: QueryGetMaturityLevelResponse, useInterfaces: boolean = true): QueryGetMaturityLevelResponseAmino {
    const obj: any = {};
    obj.maturity_level = message.maturityLevel ? MaturityLevel.toAmino(message.maturityLevel, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMaturityLevelResponseAminoMsg): QueryGetMaturityLevelResponse {
    return QueryGetMaturityLevelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMaturityLevelResponseProtoMsg, useInterfaces: boolean = true): QueryGetMaturityLevelResponse {
    return QueryGetMaturityLevelResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryGetMaturityLevelResponse): Uint8Array {
    return QueryGetMaturityLevelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMaturityLevelResponse): QueryGetMaturityLevelResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryGetMaturityLevelResponse",
      value: QueryGetMaturityLevelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetMaturityLevelResponse.typeUrl, QueryGetMaturityLevelResponse);
function createBaseQueryAllMaturityLevelRequest(): QueryAllMaturityLevelRequest {
  return {
    active: false,
    assetId: "",
    assetEnabled: "",
    pagination: undefined
  };
}
export const QueryAllMaturityLevelRequest = {
  typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelRequest",
  is(o: any): o is QueryAllMaturityLevelRequest {
    return o && (o.$typeUrl === QueryAllMaturityLevelRequest.typeUrl || typeof o.active === "boolean" && typeof o.assetId === "string" && typeof o.assetEnabled === "string");
  },
  isSDK(o: any): o is QueryAllMaturityLevelRequestSDKType {
    return o && (o.$typeUrl === QueryAllMaturityLevelRequest.typeUrl || typeof o.active === "boolean" && typeof o.asset_id === "string" && typeof o.asset_enabled === "string");
  },
  isAmino(o: any): o is QueryAllMaturityLevelRequestAmino {
    return o && (o.$typeUrl === QueryAllMaturityLevelRequest.typeUrl || typeof o.active === "boolean" && typeof o.asset_id === "string" && typeof o.asset_enabled === "string");
  },
  encode(message: QueryAllMaturityLevelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.assetEnabled !== "") {
      writer.uint32(26).string(message.assetEnabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllMaturityLevelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturityLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.assetEnabled = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllMaturityLevelRequest {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      assetEnabled: isSet(object.assetEnabled) ? String(object.assetEnabled) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturityLevelRequest): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.assetEnabled !== undefined && (obj.assetEnabled = message.assetEnabled);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturityLevelRequest>): QueryAllMaturityLevelRequest {
    const message = createBaseQueryAllMaturityLevelRequest();
    message.active = object.active ?? false;
    message.assetId = object.assetId ?? "";
    message.assetEnabled = object.assetEnabled ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMaturityLevelRequestAmino): QueryAllMaturityLevelRequest {
    const message = createBaseQueryAllMaturityLevelRequest();
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.asset_enabled !== undefined && object.asset_enabled !== null) {
      message.assetEnabled = object.asset_enabled;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMaturityLevelRequest, useInterfaces: boolean = true): QueryAllMaturityLevelRequestAmino {
    const obj: any = {};
    obj.active = message.active === false ? undefined : message.active;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.asset_enabled = message.assetEnabled === "" ? undefined : message.assetEnabled;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMaturityLevelRequestAminoMsg): QueryAllMaturityLevelRequest {
    return QueryAllMaturityLevelRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMaturityLevelRequestProtoMsg, useInterfaces: boolean = true): QueryAllMaturityLevelRequest {
    return QueryAllMaturityLevelRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllMaturityLevelRequest): Uint8Array {
    return QueryAllMaturityLevelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMaturityLevelRequest): QueryAllMaturityLevelRequestProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelRequest",
      value: QueryAllMaturityLevelRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllMaturityLevelRequest.typeUrl, QueryAllMaturityLevelRequest);
function createBaseQueryAllMaturityLevelResponse(): QueryAllMaturityLevelResponse {
  return {
    maturityLevel: [],
    pagination: undefined
  };
}
export const QueryAllMaturityLevelResponse = {
  typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelResponse",
  is(o: any): o is QueryAllMaturityLevelResponse {
    return o && (o.$typeUrl === QueryAllMaturityLevelResponse.typeUrl || Array.isArray(o.maturityLevel) && (!o.maturityLevel.length || MaturityLevel.is(o.maturityLevel[0])));
  },
  isSDK(o: any): o is QueryAllMaturityLevelResponseSDKType {
    return o && (o.$typeUrl === QueryAllMaturityLevelResponse.typeUrl || Array.isArray(o.maturity_level) && (!o.maturity_level.length || MaturityLevel.isSDK(o.maturity_level[0])));
  },
  isAmino(o: any): o is QueryAllMaturityLevelResponseAmino {
    return o && (o.$typeUrl === QueryAllMaturityLevelResponse.typeUrl || Array.isArray(o.maturity_level) && (!o.maturity_level.length || MaturityLevel.isAmino(o.maturity_level[0])));
  },
  encode(message: QueryAllMaturityLevelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.maturityLevel) {
      MaturityLevel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryAllMaturityLevelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMaturityLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel.push(MaturityLevel.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryAllMaturityLevelResponse {
    return {
      maturityLevel: Array.isArray(object?.maturityLevel) ? object.maturityLevel.map((e: any) => MaturityLevel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllMaturityLevelResponse): unknown {
    const obj: any = {};
    if (message.maturityLevel) {
      obj.maturityLevel = message.maturityLevel.map(e => e ? MaturityLevel.toJSON(e) : undefined);
    } else {
      obj.maturityLevel = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllMaturityLevelResponse>): QueryAllMaturityLevelResponse {
    const message = createBaseQueryAllMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel?.map(e => MaturityLevel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMaturityLevelResponseAmino): QueryAllMaturityLevelResponse {
    const message = createBaseQueryAllMaturityLevelResponse();
    message.maturityLevel = object.maturity_level?.map(e => MaturityLevel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMaturityLevelResponse, useInterfaces: boolean = true): QueryAllMaturityLevelResponseAmino {
    const obj: any = {};
    if (message.maturityLevel) {
      obj.maturity_level = message.maturityLevel.map(e => e ? MaturityLevel.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.maturity_level = message.maturityLevel;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMaturityLevelResponseAminoMsg): QueryAllMaturityLevelResponse {
    return QueryAllMaturityLevelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMaturityLevelResponseProtoMsg, useInterfaces: boolean = true): QueryAllMaturityLevelResponse {
    return QueryAllMaturityLevelResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryAllMaturityLevelResponse): Uint8Array {
    return QueryAllMaturityLevelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMaturityLevelResponse): QueryAllMaturityLevelResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.QueryAllMaturityLevelResponse",
      value: QueryAllMaturityLevelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllMaturityLevelResponse.typeUrl, QueryAllMaturityLevelResponse);