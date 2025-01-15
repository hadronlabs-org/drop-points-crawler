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
export interface QueryInsuranceFundRequest {}
export interface QueryInsuranceFundRequestProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest";
  value: Uint8Array;
}
/**
 * QueryInsuranceFundRequest is the request type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundRequestAmino {}
export interface QueryInsuranceFundRequestAminoMsg {
  type: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest";
  value: QueryInsuranceFundRequestAmino;
}
/**
 * QueryInsuranceFundRequest is the request type for the
 * Query/InsuranceFund RPC method.
 */
export interface QueryInsuranceFundRequestSDKType {}
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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/milkyway.liquidvesting.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryUserInsuranceFundRequest(): QueryUserInsuranceFundRequest {
  return {
    userAddress: ""
  };
}
export const QueryUserInsuranceFundRequest = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundRequest",
  encode(message: QueryUserInsuranceFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserInsuranceFundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserInsuranceFundRequest>): QueryUserInsuranceFundRequest {
    const message = createBaseQueryUserInsuranceFundRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryUserInsuranceFundRequestAmino): QueryUserInsuranceFundRequest {
    const message = createBaseQueryUserInsuranceFundRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryUserInsuranceFundRequest): QueryUserInsuranceFundRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryUserInsuranceFundRequestAminoMsg): QueryUserInsuranceFundRequest {
    return QueryUserInsuranceFundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserInsuranceFundRequestProtoMsg): QueryUserInsuranceFundRequest {
    return QueryUserInsuranceFundRequest.decode(message.value);
  },
  toProto(message: QueryUserInsuranceFundRequest): Uint8Array {
    return QueryUserInsuranceFundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserInsuranceFundRequest): QueryUserInsuranceFundRequestProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundRequest",
      value: QueryUserInsuranceFundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserInsuranceFundResponse(): QueryUserInsuranceFundResponse {
  return {
    balance: [],
    used: []
  };
}
export const QueryUserInsuranceFundResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundResponse",
  encode(message: QueryUserInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.used) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserInsuranceFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.used.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserInsuranceFundResponse>): QueryUserInsuranceFundResponse {
    const message = createBaseQueryUserInsuranceFundResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.used = object.used?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserInsuranceFundResponseAmino): QueryUserInsuranceFundResponse {
    const message = createBaseQueryUserInsuranceFundResponse();
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    message.used = object.used?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserInsuranceFundResponse): QueryUserInsuranceFundResponseAmino {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    if (message.used) {
      obj.used = message.used.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.used = message.used;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserInsuranceFundResponseAminoMsg): QueryUserInsuranceFundResponse {
    return QueryUserInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserInsuranceFundResponseProtoMsg): QueryUserInsuranceFundResponse {
    return QueryUserInsuranceFundResponse.decode(message.value);
  },
  toProto(message: QueryUserInsuranceFundResponse): Uint8Array {
    return QueryUserInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserInsuranceFundResponse): QueryUserInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundResponse",
      value: QueryUserInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserInsuranceFundsRequest(): QueryUserInsuranceFundsRequest {
  return {
    pagination: undefined
  };
}
export const QueryUserInsuranceFundsRequest = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsRequest",
  encode(message: QueryUserInsuranceFundsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserInsuranceFundsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserInsuranceFundsRequest>): QueryUserInsuranceFundsRequest {
    const message = createBaseQueryUserInsuranceFundsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserInsuranceFundsRequestAmino): QueryUserInsuranceFundsRequest {
    const message = createBaseQueryUserInsuranceFundsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserInsuranceFundsRequest): QueryUserInsuranceFundsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserInsuranceFundsRequestAminoMsg): QueryUserInsuranceFundsRequest {
    return QueryUserInsuranceFundsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserInsuranceFundsRequestProtoMsg): QueryUserInsuranceFundsRequest {
    return QueryUserInsuranceFundsRequest.decode(message.value);
  },
  toProto(message: QueryUserInsuranceFundsRequest): Uint8Array {
    return QueryUserInsuranceFundsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserInsuranceFundsRequest): QueryUserInsuranceFundsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsRequest",
      value: QueryUserInsuranceFundsRequest.encode(message).finish()
    };
  }
};
function createBaseUserInsuranceFundData(): UserInsuranceFundData {
  return {
    userAddress: "",
    balance: [],
    used: []
  };
}
export const UserInsuranceFundData = {
  typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundData",
  encode(message: UserInsuranceFundData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.used) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFundData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInsuranceFundData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.used.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UserInsuranceFundData>): UserInsuranceFundData {
    const message = createBaseUserInsuranceFundData();
    message.userAddress = object.userAddress ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.used = object.used?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserInsuranceFundDataAmino): UserInsuranceFundData {
    const message = createBaseUserInsuranceFundData();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    message.used = object.used?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserInsuranceFundData): UserInsuranceFundDataAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    if (message.used) {
      obj.used = message.used.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.used = message.used;
    }
    return obj;
  },
  fromAminoMsg(object: UserInsuranceFundDataAminoMsg): UserInsuranceFundData {
    return UserInsuranceFundData.fromAmino(object.value);
  },
  fromProtoMsg(message: UserInsuranceFundDataProtoMsg): UserInsuranceFundData {
    return UserInsuranceFundData.decode(message.value);
  },
  toProto(message: UserInsuranceFundData): Uint8Array {
    return UserInsuranceFundData.encode(message).finish();
  },
  toProtoMsg(message: UserInsuranceFundData): UserInsuranceFundDataProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundData",
      value: UserInsuranceFundData.encode(message).finish()
    };
  }
};
function createBaseQueryUserInsuranceFundsResponse(): QueryUserInsuranceFundsResponse {
  return {
    insuranceFunds: [],
    pagination: undefined
  };
}
export const QueryUserInsuranceFundsResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsResponse",
  encode(message: QueryUserInsuranceFundsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.insuranceFunds) {
      UserInsuranceFundData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserInsuranceFundsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserInsuranceFundsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.insuranceFunds.push(UserInsuranceFundData.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryUserInsuranceFundsResponse>): QueryUserInsuranceFundsResponse {
    const message = createBaseQueryUserInsuranceFundsResponse();
    message.insuranceFunds = object.insuranceFunds?.map(e => UserInsuranceFundData.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserInsuranceFundsResponseAmino): QueryUserInsuranceFundsResponse {
    const message = createBaseQueryUserInsuranceFundsResponse();
    message.insuranceFunds = object.insurance_funds?.map(e => UserInsuranceFundData.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserInsuranceFundsResponse): QueryUserInsuranceFundsResponseAmino {
    const obj: any = {};
    if (message.insuranceFunds) {
      obj.insurance_funds = message.insuranceFunds.map(e => e ? UserInsuranceFundData.toAmino(e) : undefined);
    } else {
      obj.insurance_funds = message.insuranceFunds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserInsuranceFundsResponseAminoMsg): QueryUserInsuranceFundsResponse {
    return QueryUserInsuranceFundsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserInsuranceFundsResponseProtoMsg): QueryUserInsuranceFundsResponse {
    return QueryUserInsuranceFundsResponse.decode(message.value);
  },
  toProto(message: QueryUserInsuranceFundsResponse): Uint8Array {
    return QueryUserInsuranceFundsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserInsuranceFundsResponse): QueryUserInsuranceFundsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserInsuranceFundsResponse",
      value: QueryUserInsuranceFundsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserRestakableAssetsRequest(): QueryUserRestakableAssetsRequest {
  return {
    userAddress: ""
  };
}
export const QueryUserRestakableAssetsRequest = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsRequest",
  encode(message: QueryUserRestakableAssetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRestakableAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserRestakableAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserRestakableAssetsRequest>): QueryUserRestakableAssetsRequest {
    const message = createBaseQueryUserRestakableAssetsRequest();
    message.userAddress = object.userAddress ?? "";
    return message;
  },
  fromAmino(object: QueryUserRestakableAssetsRequestAmino): QueryUserRestakableAssetsRequest {
    const message = createBaseQueryUserRestakableAssetsRequest();
    if (object.user_address !== undefined && object.user_address !== null) {
      message.userAddress = object.user_address;
    }
    return message;
  },
  toAmino(message: QueryUserRestakableAssetsRequest): QueryUserRestakableAssetsRequestAmino {
    const obj: any = {};
    obj.user_address = message.userAddress === "" ? undefined : message.userAddress;
    return obj;
  },
  fromAminoMsg(object: QueryUserRestakableAssetsRequestAminoMsg): QueryUserRestakableAssetsRequest {
    return QueryUserRestakableAssetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserRestakableAssetsRequestProtoMsg): QueryUserRestakableAssetsRequest {
    return QueryUserRestakableAssetsRequest.decode(message.value);
  },
  toProto(message: QueryUserRestakableAssetsRequest): Uint8Array {
    return QueryUserRestakableAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserRestakableAssetsRequest): QueryUserRestakableAssetsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsRequest",
      value: QueryUserRestakableAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserRestakableAssetsResponse(): QueryUserRestakableAssetsResponse {
  return {
    amount: []
  };
}
export const QueryUserRestakableAssetsResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsResponse",
  encode(message: QueryUserRestakableAssetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUserRestakableAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserRestakableAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryUserRestakableAssetsResponse>): QueryUserRestakableAssetsResponse {
    const message = createBaseQueryUserRestakableAssetsResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryUserRestakableAssetsResponseAmino): QueryUserRestakableAssetsResponse {
    const message = createBaseQueryUserRestakableAssetsResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUserRestakableAssetsResponse): QueryUserRestakableAssetsResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserRestakableAssetsResponseAminoMsg): QueryUserRestakableAssetsResponse {
    return QueryUserRestakableAssetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserRestakableAssetsResponseProtoMsg): QueryUserRestakableAssetsResponse {
    return QueryUserRestakableAssetsResponse.decode(message.value);
  },
  toProto(message: QueryUserRestakableAssetsResponse): Uint8Array {
    return QueryUserRestakableAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserRestakableAssetsResponse): QueryUserRestakableAssetsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryUserRestakableAssetsResponse",
      value: QueryUserRestakableAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundRequest(): QueryInsuranceFundRequest {
  return {};
}
export const QueryInsuranceFundRequest = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest",
  encode(_: QueryInsuranceFundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundRequest();
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
  fromPartial(_: Partial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    return message;
  },
  fromAmino(_: QueryInsuranceFundRequestAmino): QueryInsuranceFundRequest {
    const message = createBaseQueryInsuranceFundRequest();
    return message;
  },
  toAmino(_: QueryInsuranceFundRequest): QueryInsuranceFundRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundRequestAminoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundRequestProtoMsg): QueryInsuranceFundRequest {
    return QueryInsuranceFundRequest.decode(message.value);
  },
  toProto(message: QueryInsuranceFundRequest): Uint8Array {
    return QueryInsuranceFundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundRequest",
      value: QueryInsuranceFundRequest.encode(message).finish()
    };
  }
};
function createBaseQueryInsuranceFundResponse(): QueryInsuranceFundResponse {
  return {
    amount: []
  };
}
export const QueryInsuranceFundResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundResponse",
  encode(message: QueryInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInsuranceFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInsuranceFundResponseAmino): QueryInsuranceFundResponse {
    const message = createBaseQueryInsuranceFundResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInsuranceFundResponseAminoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInsuranceFundResponseProtoMsg): QueryInsuranceFundResponse {
    return QueryInsuranceFundResponse.decode(message.value);
  },
  toProto(message: QueryInsuranceFundResponse): Uint8Array {
    return QueryInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryInsuranceFundResponse",
      value: QueryInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};