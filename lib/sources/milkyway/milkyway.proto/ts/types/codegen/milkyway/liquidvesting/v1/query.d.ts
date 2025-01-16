import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryUserInsuranceFundRequest is the request type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundRequest {
    /** user_address is the address of the user to query. */
    userAddress: string;
}
export interface QueryUserInsuranceFundRequestProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundRequest";
    value: Uint8Array;
}
/**
 * QueryUserInsuranceFundRequest is the request type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundRequestAmino {
    /** user_address is the address of the user to query. */
    user_address?: string;
}
export interface QueryUserInsuranceFundRequestAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundRequest";
    value: QueryUserInsuranceFundRequestAmino;
}
/**
 * QueryUserInsuranceFundRequest is the request type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundRequestSDKType {
    user_address: string;
}
/**
 * QueryUserInsuranceFundResponse is the response type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundResponse {
    /** balance is the amount of tokens that is in the user's insurance fund. */
    balance: Coin[];
    /**
     * used is the amount of tokens is being used to cover the user's
     * restaked assets.
     */
    used: Coin[];
}
export interface QueryUserInsuranceFundResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundResponse";
    value: Uint8Array;
}
/**
 * QueryUserInsuranceFundResponse is the response type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundResponseAmino {
    /** balance is the amount of tokens that is in the user's insurance fund. */
    balance?: CoinAmino[];
    /**
     * used is the amount of tokens is being used to cover the user's
     * restaked assets.
     */
    used?: CoinAmino[];
}
export interface QueryUserInsuranceFundResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundResponse";
    value: QueryUserInsuranceFundResponseAmino;
}
/**
 * QueryUserInsuranceFundResponse is the response type for the
 * Query/UserInsuranceFund RPC method.
 */
export interface QueryUserInsuranceFundResponseSDKType {
    balance: CoinSDKType[];
    used: CoinSDKType[];
}
/**
 * QueryUserInsuranceFundsRequest is the request type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsRequest {
    pagination?: PageRequest;
}
export interface QueryUserInsuranceFundsRequestProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsRequest";
    value: Uint8Array;
}
/**
 * QueryUserInsuranceFundsRequest is the request type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryUserInsuranceFundsRequestAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsRequest";
    value: QueryUserInsuranceFundsRequestAmino;
}
/**
 * QueryUserInsuranceFundsRequest is the request type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * UserInsuranceFundData is the structure that contains the information about
 * a user's insurance fund.
 */
export interface UserInsuranceFundData {
    /** user_address is the address of who owns the insurance fund. */
    userAddress: string;
    /** balance is the amount of tokens that is in the user's insurance fund. */
    balance: Coin[];
    /**
     * used is the amount of tokens that is to cover the user's
     * restaked assets.
     */
    used: Coin[];
}
export interface UserInsuranceFundDataProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundData";
    value: Uint8Array;
}
/**
 * UserInsuranceFundData is the structure that contains the information about
 * a user's insurance fund.
 */
export interface UserInsuranceFundDataAmino {
    /** user_address is the address of who owns the insurance fund. */
    user_address?: string;
    /** balance is the amount of tokens that is in the user's insurance fund. */
    balance?: CoinAmino[];
    /**
     * used is the amount of tokens that is to cover the user's
     * restaked assets.
     */
    used?: CoinAmino[];
}
export interface UserInsuranceFundDataAminoMsg {
    type: "/milkyway.liquidvesting.v1.UserInsuranceFundData";
    value: UserInsuranceFundDataAmino;
}
/**
 * UserInsuranceFundData is the structure that contains the information about
 * a user's insurance fund.
 */
export interface UserInsuranceFundDataSDKType {
    user_address: string;
    balance: CoinSDKType[];
    used: CoinSDKType[];
}
/**
 * QueryUserInsuranceFundsResponse is the response type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsResponse {
    /** insurance_funds is the list of users insurance funds. */
    insuranceFunds: UserInsuranceFundData[];
    /** Pagination defines the pagination response */
    pagination?: PageResponse;
}
export interface QueryUserInsuranceFundsResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsResponse";
    value: Uint8Array;
}
/**
 * QueryUserInsuranceFundsResponse is the response type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsResponseAmino {
    /** insurance_funds is the list of users insurance funds. */
    insurance_funds: UserInsuranceFundDataAmino[];
    /** Pagination defines the pagination response */
    pagination?: PageResponseAmino;
}
export interface QueryUserInsuranceFundsResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsResponse";
    value: QueryUserInsuranceFundsResponseAmino;
}
/**
 * QueryUserInsuranceFundsResponse is the response type for the
 * Query/UserInsuranceFunds RPC method.
 */
export interface QueryUserInsuranceFundsResponseSDKType {
    insurance_funds: UserInsuranceFundDataSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryUserRestakableAssetsRequest is the request type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsRequest {
    /** user_address is the address of the user to query. */
    userAddress: string;
}
export interface QueryUserRestakableAssetsRequestProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsRequest";
    value: Uint8Array;
}
/**
 * QueryUserRestakableAssetsRequest is the request type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsRequestAmino {
    /** user_address is the address of the user to query. */
    user_address?: string;
}
export interface QueryUserRestakableAssetsRequestAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsRequest";
    value: QueryUserRestakableAssetsRequestAmino;
}
/**
 * QueryUserRestakableAssetsRequest is the request type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsRequestSDKType {
    user_address: string;
}
/**
 * QueryUserRestakableAssetsResponse is the response type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsResponse {
    /** amount is the amount of tokens that the user can restake. */
    amount: Coin[];
}
export interface QueryUserRestakableAssetsResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsResponse";
    value: Uint8Array;
}
/**
 * QueryUserRestakableAssetsResponse is the response type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsResponseAmino {
    /** amount is the amount of tokens that the user can restake. */
    amount?: CoinAmino[];
}
export interface QueryUserRestakableAssetsResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsResponse";
    value: QueryUserRestakableAssetsResponseAmino;
}
/**
 * QueryUserRestakableAssetsResponse is the response type for the
 * Query/UserRestakableAssets RPC method.
 */
export interface QueryUserRestakableAssetsResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * QueryInsuranceFundRequest is the request type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundRequest {
}
export interface QueryInsuranceFundRequestProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundRequest is the request type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundRequestAmino {
}
export interface QueryInsuranceFundRequestAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest";
    value: QueryInsuranceFundRequestAmino;
}
/**
 * QueryInsuranceFundRequest is the request type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundRequestSDKType {
}
/**
 * QueryInsuranceFundResponse is the response type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundResponse {
    /** amount is the amount of tokens that are in the insurance fund. */
    amount: Coin[];
}
export interface QueryInsuranceFundResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundResponse";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundResponse is the response type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundResponseAmino {
    /** amount is the amount of tokens that are in the insurance fund. */
    amount?: CoinAmino[];
}
export interface QueryInsuranceFundResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryInsuranceFundResponse";
    value: QueryInsuranceFundResponseAmino;
}
/**
 * QueryInsuranceFundResponse is the response type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundResponseSDKType {
    amount: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/milkyway.liquidvesting.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryUserInsuranceFundRequest: {
    typeUrl: string;
    encode(message: QueryUserInsuranceFundRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundRequest;
    fromPartial(object: Partial<QueryUserInsuranceFundRequest>): QueryUserInsuranceFundRequest;
    fromAmino(object: QueryUserInsuranceFundRequestAmino): QueryUserInsuranceFundRequest;
    toAmino(message: QueryUserInsuranceFundRequest): QueryUserInsuranceFundRequestAmino;
    fromAminoMsg(object: QueryUserInsuranceFundRequestAminoMsg): QueryUserInsuranceFundRequest;
    fromProtoMsg(message: QueryUserInsuranceFundRequestProtoMsg): QueryUserInsuranceFundRequest;
    toProto(message: QueryUserInsuranceFundRequest): Uint8Array;
    toProtoMsg(message: QueryUserInsuranceFundRequest): QueryUserInsuranceFundRequestProtoMsg;
};
export declare const QueryUserInsuranceFundResponse: {
    typeUrl: string;
    encode(message: QueryUserInsuranceFundResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundResponse;
    fromPartial(object: Partial<QueryUserInsuranceFundResponse>): QueryUserInsuranceFundResponse;
    fromAmino(object: QueryUserInsuranceFundResponseAmino): QueryUserInsuranceFundResponse;
    toAmino(message: QueryUserInsuranceFundResponse): QueryUserInsuranceFundResponseAmino;
    fromAminoMsg(object: QueryUserInsuranceFundResponseAminoMsg): QueryUserInsuranceFundResponse;
    fromProtoMsg(message: QueryUserInsuranceFundResponseProtoMsg): QueryUserInsuranceFundResponse;
    toProto(message: QueryUserInsuranceFundResponse): Uint8Array;
    toProtoMsg(message: QueryUserInsuranceFundResponse): QueryUserInsuranceFundResponseProtoMsg;
};
export declare const QueryUserInsuranceFundsRequest: {
    typeUrl: string;
    encode(message: QueryUserInsuranceFundsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundsRequest;
    fromPartial(object: Partial<QueryUserInsuranceFundsRequest>): QueryUserInsuranceFundsRequest;
    fromAmino(object: QueryUserInsuranceFundsRequestAmino): QueryUserInsuranceFundsRequest;
    toAmino(message: QueryUserInsuranceFundsRequest): QueryUserInsuranceFundsRequestAmino;
    fromAminoMsg(object: QueryUserInsuranceFundsRequestAminoMsg): QueryUserInsuranceFundsRequest;
    fromProtoMsg(message: QueryUserInsuranceFundsRequestProtoMsg): QueryUserInsuranceFundsRequest;
    toProto(message: QueryUserInsuranceFundsRequest): Uint8Array;
    toProtoMsg(message: QueryUserInsuranceFundsRequest): QueryUserInsuranceFundsRequestProtoMsg;
};
export declare const UserInsuranceFundData: {
    typeUrl: string;
    encode(message: UserInsuranceFundData, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFundData;
    fromPartial(object: Partial<UserInsuranceFundData>): UserInsuranceFundData;
    fromAmino(object: UserInsuranceFundDataAmino): UserInsuranceFundData;
    toAmino(message: UserInsuranceFundData): UserInsuranceFundDataAmino;
    fromAminoMsg(object: UserInsuranceFundDataAminoMsg): UserInsuranceFundData;
    fromProtoMsg(message: UserInsuranceFundDataProtoMsg): UserInsuranceFundData;
    toProto(message: UserInsuranceFundData): Uint8Array;
    toProtoMsg(message: UserInsuranceFundData): UserInsuranceFundDataProtoMsg;
};
export declare const QueryUserInsuranceFundsResponse: {
    typeUrl: string;
    encode(message: QueryUserInsuranceFundsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundsResponse;
    fromPartial(object: Partial<QueryUserInsuranceFundsResponse>): QueryUserInsuranceFundsResponse;
    fromAmino(object: QueryUserInsuranceFundsResponseAmino): QueryUserInsuranceFundsResponse;
    toAmino(message: QueryUserInsuranceFundsResponse): QueryUserInsuranceFundsResponseAmino;
    fromAminoMsg(object: QueryUserInsuranceFundsResponseAminoMsg): QueryUserInsuranceFundsResponse;
    fromProtoMsg(message: QueryUserInsuranceFundsResponseProtoMsg): QueryUserInsuranceFundsResponse;
    toProto(message: QueryUserInsuranceFundsResponse): Uint8Array;
    toProtoMsg(message: QueryUserInsuranceFundsResponse): QueryUserInsuranceFundsResponseProtoMsg;
};
export declare const QueryUserRestakableAssetsRequest: {
    typeUrl: string;
    encode(message: QueryUserRestakableAssetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRestakableAssetsRequest;
    fromPartial(object: Partial<QueryUserRestakableAssetsRequest>): QueryUserRestakableAssetsRequest;
    fromAmino(object: QueryUserRestakableAssetsRequestAmino): QueryUserRestakableAssetsRequest;
    toAmino(message: QueryUserRestakableAssetsRequest): QueryUserRestakableAssetsRequestAmino;
    fromAminoMsg(object: QueryUserRestakableAssetsRequestAminoMsg): QueryUserRestakableAssetsRequest;
    fromProtoMsg(message: QueryUserRestakableAssetsRequestProtoMsg): QueryUserRestakableAssetsRequest;
    toProto(message: QueryUserRestakableAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryUserRestakableAssetsRequest): QueryUserRestakableAssetsRequestProtoMsg;
};
export declare const QueryUserRestakableAssetsResponse: {
    typeUrl: string;
    encode(message: QueryUserRestakableAssetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRestakableAssetsResponse;
    fromPartial(object: Partial<QueryUserRestakableAssetsResponse>): QueryUserRestakableAssetsResponse;
    fromAmino(object: QueryUserRestakableAssetsResponseAmino): QueryUserRestakableAssetsResponse;
    toAmino(message: QueryUserRestakableAssetsResponse): QueryUserRestakableAssetsResponseAmino;
    fromAminoMsg(object: QueryUserRestakableAssetsResponseAminoMsg): QueryUserRestakableAssetsResponse;
    fromProtoMsg(message: QueryUserRestakableAssetsResponseProtoMsg): QueryUserRestakableAssetsResponse;
    toProto(message: QueryUserRestakableAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryUserRestakableAssetsResponse): QueryUserRestakableAssetsResponseProtoMsg;
};
export declare const QueryInsuranceFundRequest: {
    typeUrl: string;
    encode(_: QueryInsuranceFundRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundRequest;
    fromPartial(_: Partial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest;
    fromAmino(_: QueryInsuranceFundRequestAmino): QueryInsuranceFundRequest;
    toAmino(_: QueryInsuranceFundRequest): QueryInsuranceFundRequestAmino;
    fromAminoMsg(object: QueryInsuranceFundRequestAminoMsg): QueryInsuranceFundRequest;
    fromProtoMsg(message: QueryInsuranceFundRequestProtoMsg): QueryInsuranceFundRequest;
    toProto(message: QueryInsuranceFundRequest): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestProtoMsg;
};
export declare const QueryInsuranceFundResponse: {
    typeUrl: string;
    encode(message: QueryInsuranceFundResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundResponse;
    fromPartial(object: Partial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse;
    fromAmino(object: QueryInsuranceFundResponseAmino): QueryInsuranceFundResponse;
    toAmino(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseAmino;
    fromAminoMsg(object: QueryInsuranceFundResponseAminoMsg): QueryInsuranceFundResponse;
    fromProtoMsg(message: QueryInsuranceFundResponseProtoMsg): QueryInsuranceFundResponse;
    toProto(message: QueryInsuranceFundResponse): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
