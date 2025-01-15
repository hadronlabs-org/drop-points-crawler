import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Service, ServiceAmino, ServiceSDKType, ServiceParams, ServiceParamsAmino, ServiceParamsSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/milkyway.services.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/milkyway.services.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryServicesRequest is the request type for the Query/Services RPC method. */
export interface QueryServicesRequest {
  pagination?: PageRequest;
}
export interface QueryServicesRequestProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServicesRequest";
  value: Uint8Array;
}
/** QueryServicesRequest is the request type for the Query/Services RPC method. */
export interface QueryServicesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryServicesRequestAminoMsg {
  type: "/milkyway.services.v1.QueryServicesRequest";
  value: QueryServicesRequestAmino;
}
/** QueryServicesRequest is the request type for the Query/Services RPC method. */
export interface QueryServicesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryServicesResponse is the response type for the Query/Services RPC method. */
export interface QueryServicesResponse {
  /** Services services defines the list of actively validates services */
  services: Service[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}
export interface QueryServicesResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServicesResponse";
  value: Uint8Array;
}
/** QueryServicesResponse is the response type for the Query/Services RPC method. */
export interface QueryServicesResponseAmino {
  /** Services services defines the list of actively validates services */
  services?: ServiceAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryServicesResponseAminoMsg {
  type: "/milkyway.services.v1.QueryServicesResponse";
  value: QueryServicesResponseAmino;
}
/** QueryServicesResponse is the response type for the Query/Services RPC method. */
export interface QueryServicesResponseSDKType {
  services: ServiceSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryServiceRequest is the request type for the Query/Service RPC method. */
export interface QueryServiceRequest {
  /** ServiceID is the ID of the service to query */
  serviceId: number;
}
export interface QueryServiceRequestProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServiceRequest";
  value: Uint8Array;
}
/** QueryServiceRequest is the request type for the Query/Service RPC method. */
export interface QueryServiceRequestAmino {
  /** ServiceID is the ID of the service to query */
  service_id?: number;
}
export interface QueryServiceRequestAminoMsg {
  type: "/milkyway.services.v1.QueryServiceRequest";
  value: QueryServiceRequestAmino;
}
/** QueryServiceRequest is the request type for the Query/Service RPC method. */
export interface QueryServiceRequestSDKType {
  service_id: number;
}
/** QueryServiceResponse is the response type for the Query/Service RPC method. */
export interface QueryServiceResponse {
  service: Service;
}
export interface QueryServiceResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServiceResponse";
  value: Uint8Array;
}
/** QueryServiceResponse is the response type for the Query/Service RPC method. */
export interface QueryServiceResponseAmino {
  service?: ServiceAmino;
}
export interface QueryServiceResponseAminoMsg {
  type: "/milkyway.services.v1.QueryServiceResponse";
  value: QueryServiceResponseAmino;
}
/** QueryServiceResponse is the response type for the Query/Service RPC method. */
export interface QueryServiceResponseSDKType {
  service: ServiceSDKType;
}
/**
 * QueryServiceParamsRequest is the request type for the Query/ServiceParams RPC
 * method.
 */
export interface QueryServiceParamsRequest {
  serviceId: number;
}
export interface QueryServiceParamsRequestProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServiceParamsRequest";
  value: Uint8Array;
}
/**
 * QueryServiceParamsRequest is the request type for the Query/ServiceParams RPC
 * method.
 */
export interface QueryServiceParamsRequestAmino {
  service_id?: number;
}
export interface QueryServiceParamsRequestAminoMsg {
  type: "/milkyway.services.v1.QueryServiceParamsRequest";
  value: QueryServiceParamsRequestAmino;
}
/**
 * QueryServiceParamsRequest is the request type for the Query/ServiceParams RPC
 * method.
 */
export interface QueryServiceParamsRequestSDKType {
  service_id: number;
}
/**
 * QueryServiceParamsResponse is the response type for the Query/ServiceParams
 * RPC method.
 */
export interface QueryServiceParamsResponse {
  serviceParams: ServiceParams;
}
export interface QueryServiceParamsResponseProtoMsg {
  typeUrl: "/milkyway.services.v1.QueryServiceParamsResponse";
  value: Uint8Array;
}
/**
 * QueryServiceParamsResponse is the response type for the Query/ServiceParams
 * RPC method.
 */
export interface QueryServiceParamsResponseAmino {
  service_params?: ServiceParamsAmino;
}
export interface QueryServiceParamsResponseAminoMsg {
  type: "/milkyway.services.v1.QueryServiceParamsResponse";
  value: QueryServiceParamsResponseAmino;
}
/**
 * QueryServiceParamsResponse is the response type for the Query/ServiceParams
 * RPC method.
 */
export interface QueryServiceParamsResponseSDKType {
  service_params: ServiceParamsSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/milkyway.services.v1.QueryParamsRequest",
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
      typeUrl: "/milkyway.services.v1.QueryParamsRequest",
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
  typeUrl: "/milkyway.services.v1.QueryParamsResponse",
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
      typeUrl: "/milkyway.services.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServicesRequest(): QueryServicesRequest {
  return {
    pagination: undefined
  };
}
export const QueryServicesRequest = {
  typeUrl: "/milkyway.services.v1.QueryServicesRequest",
  encode(message: QueryServicesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesRequest();
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
  fromPartial(object: Partial<QueryServicesRequest>): QueryServicesRequest {
    const message = createBaseQueryServicesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServicesRequestAmino): QueryServicesRequest {
    const message = createBaseQueryServicesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServicesRequest): QueryServicesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServicesRequestAminoMsg): QueryServicesRequest {
    return QueryServicesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServicesRequestProtoMsg): QueryServicesRequest {
    return QueryServicesRequest.decode(message.value);
  },
  toProto(message: QueryServicesRequest): Uint8Array {
    return QueryServicesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServicesRequest): QueryServicesRequestProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServicesRequest",
      value: QueryServicesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServicesResponse(): QueryServicesResponse {
  return {
    services: [],
    pagination: undefined
  };
}
export const QueryServicesResponse = {
  typeUrl: "/milkyway.services.v1.QueryServicesResponse",
  encode(message: QueryServicesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryServicesResponse>): QueryServicesResponse {
    const message = createBaseQueryServicesResponse();
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryServicesResponseAmino): QueryServicesResponse {
    const message = createBaseQueryServicesResponse();
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryServicesResponse): QueryServicesResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServicesResponseAminoMsg): QueryServicesResponse {
    return QueryServicesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServicesResponseProtoMsg): QueryServicesResponse {
    return QueryServicesResponse.decode(message.value);
  },
  toProto(message: QueryServicesResponse): Uint8Array {
    return QueryServicesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServicesResponse): QueryServicesResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServicesResponse",
      value: QueryServicesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceRequest(): QueryServiceRequest {
  return {
    serviceId: 0
  };
}
export const QueryServiceRequest = {
  typeUrl: "/milkyway.services.v1.QueryServiceRequest",
  encode(message: QueryServiceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceRequest>): QueryServiceRequest {
    const message = createBaseQueryServiceRequest();
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: QueryServiceRequestAmino): QueryServiceRequest {
    const message = createBaseQueryServiceRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: QueryServiceRequest): QueryServiceRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryServiceRequestAminoMsg): QueryServiceRequest {
    return QueryServiceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceRequestProtoMsg): QueryServiceRequest {
    return QueryServiceRequest.decode(message.value);
  },
  toProto(message: QueryServiceRequest): Uint8Array {
    return QueryServiceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceRequest): QueryServiceRequestProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServiceRequest",
      value: QueryServiceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceResponse(): QueryServiceResponse {
  return {
    service: Service.fromPartial({})
  };
}
export const QueryServiceResponse = {
  typeUrl: "/milkyway.services.v1.QueryServiceResponse",
  encode(message: QueryServiceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceResponse>): QueryServiceResponse {
    const message = createBaseQueryServiceResponse();
    message.service = object.service !== undefined && object.service !== null ? Service.fromPartial(object.service) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceResponseAmino): QueryServiceResponse {
    const message = createBaseQueryServiceResponse();
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromAmino(object.service);
    }
    return message;
  },
  toAmino(message: QueryServiceResponse): QueryServiceResponseAmino {
    const obj: any = {};
    obj.service = message.service ? Service.toAmino(message.service) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceResponseAminoMsg): QueryServiceResponse {
    return QueryServiceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceResponseProtoMsg): QueryServiceResponse {
    return QueryServiceResponse.decode(message.value);
  },
  toProto(message: QueryServiceResponse): Uint8Array {
    return QueryServiceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceResponse): QueryServiceResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServiceResponse",
      value: QueryServiceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryServiceParamsRequest(): QueryServiceParamsRequest {
  return {
    serviceId: 0
  };
}
export const QueryServiceParamsRequest = {
  typeUrl: "/milkyway.services.v1.QueryServiceParamsRequest",
  encode(message: QueryServiceParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceParamsRequest>): QueryServiceParamsRequest {
    const message = createBaseQueryServiceParamsRequest();
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
  fromAmino(object: QueryServiceParamsRequestAmino): QueryServiceParamsRequest {
    const message = createBaseQueryServiceParamsRequest();
    if (object.service_id !== undefined && object.service_id !== null) {
      message.serviceId = object.service_id;
    }
    return message;
  },
  toAmino(message: QueryServiceParamsRequest): QueryServiceParamsRequestAmino {
    const obj: any = {};
    obj.service_id = message.serviceId === 0 ? undefined : message.serviceId;
    return obj;
  },
  fromAminoMsg(object: QueryServiceParamsRequestAminoMsg): QueryServiceParamsRequest {
    return QueryServiceParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceParamsRequestProtoMsg): QueryServiceParamsRequest {
    return QueryServiceParamsRequest.decode(message.value);
  },
  toProto(message: QueryServiceParamsRequest): Uint8Array {
    return QueryServiceParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceParamsRequest): QueryServiceParamsRequestProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServiceParamsRequest",
      value: QueryServiceParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryServiceParamsResponse(): QueryServiceParamsResponse {
  return {
    serviceParams: ServiceParams.fromPartial({})
  };
}
export const QueryServiceParamsResponse = {
  typeUrl: "/milkyway.services.v1.QueryServiceParamsResponse",
  encode(message: QueryServiceParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.serviceParams !== undefined) {
      ServiceParams.encode(message.serviceParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceParams = ServiceParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryServiceParamsResponse>): QueryServiceParamsResponse {
    const message = createBaseQueryServiceParamsResponse();
    message.serviceParams = object.serviceParams !== undefined && object.serviceParams !== null ? ServiceParams.fromPartial(object.serviceParams) : undefined;
    return message;
  },
  fromAmino(object: QueryServiceParamsResponseAmino): QueryServiceParamsResponse {
    const message = createBaseQueryServiceParamsResponse();
    if (object.service_params !== undefined && object.service_params !== null) {
      message.serviceParams = ServiceParams.fromAmino(object.service_params);
    }
    return message;
  },
  toAmino(message: QueryServiceParamsResponse): QueryServiceParamsResponseAmino {
    const obj: any = {};
    obj.service_params = message.serviceParams ? ServiceParams.toAmino(message.serviceParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryServiceParamsResponseAminoMsg): QueryServiceParamsResponse {
    return QueryServiceParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryServiceParamsResponseProtoMsg): QueryServiceParamsResponse {
    return QueryServiceParamsResponse.decode(message.value);
  },
  toProto(message: QueryServiceParamsResponse): Uint8Array {
    return QueryServiceParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceParamsResponse): QueryServiceParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.QueryServiceParamsResponse",
      value: QueryServiceParamsResponse.encode(message).finish()
    };
  }
};