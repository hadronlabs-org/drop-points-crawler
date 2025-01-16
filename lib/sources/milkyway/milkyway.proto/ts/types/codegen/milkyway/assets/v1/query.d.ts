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
export declare const QueryAssetsRequest: {
    typeUrl: string;
    encode(message: QueryAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsRequest;
    fromPartial(object: Partial<QueryAssetsRequest>): QueryAssetsRequest;
    fromAmino(object: QueryAssetsRequestAmino): QueryAssetsRequest;
    toAmino(message: QueryAssetsRequest): QueryAssetsRequestAmino;
    fromAminoMsg(object: QueryAssetsRequestAminoMsg): QueryAssetsRequest;
    fromProtoMsg(message: QueryAssetsRequestProtoMsg): QueryAssetsRequest;
    toProto(message: QueryAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryAssetsRequest): QueryAssetsRequestProtoMsg;
};
export declare const QueryAssetsResponse: {
    typeUrl: string;
    encode(message: QueryAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsResponse;
    fromPartial(object: Partial<QueryAssetsResponse>): QueryAssetsResponse;
    fromAmino(object: QueryAssetsResponseAmino): QueryAssetsResponse;
    toAmino(message: QueryAssetsResponse): QueryAssetsResponseAmino;
    fromAminoMsg(object: QueryAssetsResponseAminoMsg): QueryAssetsResponse;
    fromProtoMsg(message: QueryAssetsResponseProtoMsg): QueryAssetsResponse;
    toProto(message: QueryAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryAssetsResponse): QueryAssetsResponseProtoMsg;
};
export declare const QueryAssetRequest: {
    typeUrl: string;
    encode(message: QueryAssetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetRequest;
    fromPartial(object: Partial<QueryAssetRequest>): QueryAssetRequest;
    fromAmino(object: QueryAssetRequestAmino): QueryAssetRequest;
    toAmino(message: QueryAssetRequest): QueryAssetRequestAmino;
    fromAminoMsg(object: QueryAssetRequestAminoMsg): QueryAssetRequest;
    fromProtoMsg(message: QueryAssetRequestProtoMsg): QueryAssetRequest;
    toProto(message: QueryAssetRequest): Uint8Array;
    toProtoMsg(message: QueryAssetRequest): QueryAssetRequestProtoMsg;
};
export declare const QueryAssetResponse: {
    typeUrl: string;
    encode(message: QueryAssetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetResponse;
    fromPartial(object: Partial<QueryAssetResponse>): QueryAssetResponse;
    fromAmino(object: QueryAssetResponseAmino): QueryAssetResponse;
    toAmino(message: QueryAssetResponse): QueryAssetResponseAmino;
    fromAminoMsg(object: QueryAssetResponseAminoMsg): QueryAssetResponse;
    fromProtoMsg(message: QueryAssetResponseProtoMsg): QueryAssetResponse;
    toProto(message: QueryAssetResponse): Uint8Array;
    toProtoMsg(message: QueryAssetResponse): QueryAssetResponseProtoMsg;
};
