import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetAmino, AssetSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryAssetsRequest is the request type for the Query/Assets RPC method. */
export interface QueryAssetsRequest {
  /**
   * Ticker defines an optional filter parameter to query assets with the given
   * ticker.
   */
  ticker: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAssetsRequestProtoMsg {
  typeUrl: "/milkyway.assets.v1.QueryAssetsRequest";
  value: Uint8Array;
}
/** QueryAssetsRequest is the request type for the Query/Assets RPC method. */
export interface QueryAssetsRequestAmino {
  /**
   * Ticker defines an optional filter parameter to query assets with the given
   * ticker.
   */
  ticker?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAssetsRequestAminoMsg {
  type: "/milkyway.assets.v1.QueryAssetsRequest";
  value: QueryAssetsRequestAmino;
}
/** QueryAssetsRequest is the request type for the Query/Assets RPC method. */
export interface QueryAssetsRequestSDKType {
  ticker: string;
  pagination?: PageRequestSDKType;
}
/** QueryAssetsResponse is the response type for the Query/Assets RPC method. */
export interface QueryAssetsResponse {
  /** Assets represents all the assets registered. */
  assets: Asset[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAssetsResponseProtoMsg {
  typeUrl: "/milkyway.assets.v1.QueryAssetsResponse";
  value: Uint8Array;
}
/** QueryAssetsResponse is the response type for the Query/Assets RPC method. */
export interface QueryAssetsResponseAmino {
  /** Assets represents all the assets registered. */
  assets: AssetAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAssetsResponseAminoMsg {
  type: "/milkyway.assets.v1.QueryAssetsResponse";
  value: QueryAssetsResponseAmino;
}
/** QueryAssetsResponse is the response type for the Query/Assets RPC method. */
export interface QueryAssetsResponseSDKType {
  assets: AssetSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAssetRequest is the request type for the Query/Asset RPC method. */
export interface QueryAssetRequest {
  /** Denom is the token denomination for which the ticker is to be queried. */
  denom: string;
}
export interface QueryAssetRequestProtoMsg {
  typeUrl: "/milkyway.assets.v1.QueryAssetRequest";
  value: Uint8Array;
}
/** QueryAssetRequest is the request type for the Query/Asset RPC method. */
export interface QueryAssetRequestAmino {
  /** Denom is the token denomination for which the ticker is to be queried. */
  denom?: string;
}
export interface QueryAssetRequestAminoMsg {
  type: "/milkyway.assets.v1.QueryAssetRequest";
  value: QueryAssetRequestAmino;
}
/** QueryAssetRequest is the request type for the Query/Asset RPC method. */
export interface QueryAssetRequestSDKType {
  denom: string;
}
/** QueryAssetResponse is the response type for the Query/Asset RPC method. */
export interface QueryAssetResponse {
  /** Asset is the asset associated with the token denomination. */
  asset: Asset;
}
export interface QueryAssetResponseProtoMsg {
  typeUrl: "/milkyway.assets.v1.QueryAssetResponse";
  value: Uint8Array;
}
/** QueryAssetResponse is the response type for the Query/Asset RPC method. */
export interface QueryAssetResponseAmino {
  /** Asset is the asset associated with the token denomination. */
  asset?: AssetAmino;
}
export interface QueryAssetResponseAminoMsg {
  type: "/milkyway.assets.v1.QueryAssetResponse";
  value: QueryAssetResponseAmino;
}
/** QueryAssetResponse is the response type for the Query/Asset RPC method. */
export interface QueryAssetResponseSDKType {
  asset: AssetSDKType;
}
function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return {
    ticker: "",
    pagination: undefined
  };
}
export const QueryAssetsRequest = {
  typeUrl: "/milkyway.assets.v1.QueryAssetsRequest",
  encode(message: QueryAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetsRequest>): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    message.ticker = object.ticker ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAssetsRequestAmino): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAssetsRequest): QueryAssetsRequestAmino {
    const obj: any = {};
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetsRequestAminoMsg): QueryAssetsRequest {
    return QueryAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsRequestProtoMsg): QueryAssetsRequest {
    return QueryAssetsRequest.decode(message.value);
  },
  toProto(message: QueryAssetsRequest): Uint8Array {
    return QueryAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsRequest): QueryAssetsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.QueryAssetsRequest",
      value: QueryAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return {
    assets: [],
    pagination: undefined
  };
}
export const QueryAssetsResponse = {
  typeUrl: "/milkyway.assets.v1.QueryAssetsResponse",
  encode(message: QueryAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetsResponse>): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAssetsResponseAmino): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAssetsResponse): QueryAssetsResponseAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetsResponseAminoMsg): QueryAssetsResponse {
    return QueryAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetsResponseProtoMsg): QueryAssetsResponse {
    return QueryAssetsResponse.decode(message.value);
  },
  toProto(message: QueryAssetsResponse): Uint8Array {
    return QueryAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetsResponse): QueryAssetsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.QueryAssetsResponse",
      value: QueryAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetRequest(): QueryAssetRequest {
  return {
    denom: ""
  };
}
export const QueryAssetRequest = {
  typeUrl: "/milkyway.assets.v1.QueryAssetRequest",
  encode(message: QueryAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryAssetRequest): QueryAssetRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest {
    return QueryAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetRequestProtoMsg): QueryAssetRequest {
    return QueryAssetRequest.decode(message.value);
  },
  toProto(message: QueryAssetRequest): Uint8Array {
    return QueryAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.QueryAssetRequest",
      value: QueryAssetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetResponse(): QueryAssetResponse {
  return {
    asset: Asset.fromPartial({})
  };
}
export const QueryAssetResponse = {
  typeUrl: "/milkyway.assets.v1.QueryAssetResponse",
  encode(message: QueryAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: QueryAssetResponse): QueryAssetResponseAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse {
    return QueryAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetResponseProtoMsg): QueryAssetResponse {
    return QueryAssetResponse.decode(message.value);
  },
  toProto(message: QueryAssetResponse): Uint8Array {
    return QueryAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.QueryAssetResponse",
      value: QueryAssetResponse.encode(message).finish()
    };
  }
};