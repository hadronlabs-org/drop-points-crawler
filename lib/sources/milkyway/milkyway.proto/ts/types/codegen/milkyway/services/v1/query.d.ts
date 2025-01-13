import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Service, ServiceAmino, ServiceSDKType, ServiceParams, ServiceParamsAmino, ServiceParamsSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/milkyway.services.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/milkyway.services.v1.QueryParamsRequest";
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
export declare const QueryServicesRequest: {
    typeUrl: string;
    encode(message: QueryServicesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesRequest;
    fromPartial(object: Partial<QueryServicesRequest>): QueryServicesRequest;
    fromAmino(object: QueryServicesRequestAmino): QueryServicesRequest;
    toAmino(message: QueryServicesRequest): QueryServicesRequestAmino;
    fromAminoMsg(object: QueryServicesRequestAminoMsg): QueryServicesRequest;
    fromProtoMsg(message: QueryServicesRequestProtoMsg): QueryServicesRequest;
    toProto(message: QueryServicesRequest): Uint8Array;
    toProtoMsg(message: QueryServicesRequest): QueryServicesRequestProtoMsg;
};
export declare const QueryServicesResponse: {
    typeUrl: string;
    encode(message: QueryServicesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesResponse;
    fromPartial(object: Partial<QueryServicesResponse>): QueryServicesResponse;
    fromAmino(object: QueryServicesResponseAmino): QueryServicesResponse;
    toAmino(message: QueryServicesResponse): QueryServicesResponseAmino;
    fromAminoMsg(object: QueryServicesResponseAminoMsg): QueryServicesResponse;
    fromProtoMsg(message: QueryServicesResponseProtoMsg): QueryServicesResponse;
    toProto(message: QueryServicesResponse): Uint8Array;
    toProtoMsg(message: QueryServicesResponse): QueryServicesResponseProtoMsg;
};
export declare const QueryServiceRequest: {
    typeUrl: string;
    encode(message: QueryServiceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceRequest;
    fromPartial(object: Partial<QueryServiceRequest>): QueryServiceRequest;
    fromAmino(object: QueryServiceRequestAmino): QueryServiceRequest;
    toAmino(message: QueryServiceRequest): QueryServiceRequestAmino;
    fromAminoMsg(object: QueryServiceRequestAminoMsg): QueryServiceRequest;
    fromProtoMsg(message: QueryServiceRequestProtoMsg): QueryServiceRequest;
    toProto(message: QueryServiceRequest): Uint8Array;
    toProtoMsg(message: QueryServiceRequest): QueryServiceRequestProtoMsg;
};
export declare const QueryServiceResponse: {
    typeUrl: string;
    encode(message: QueryServiceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceResponse;
    fromPartial(object: Partial<QueryServiceResponse>): QueryServiceResponse;
    fromAmino(object: QueryServiceResponseAmino): QueryServiceResponse;
    toAmino(message: QueryServiceResponse): QueryServiceResponseAmino;
    fromAminoMsg(object: QueryServiceResponseAminoMsg): QueryServiceResponse;
    fromProtoMsg(message: QueryServiceResponseProtoMsg): QueryServiceResponse;
    toProto(message: QueryServiceResponse): Uint8Array;
    toProtoMsg(message: QueryServiceResponse): QueryServiceResponseProtoMsg;
};
export declare const QueryServiceParamsRequest: {
    typeUrl: string;
    encode(message: QueryServiceParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsRequest;
    fromPartial(object: Partial<QueryServiceParamsRequest>): QueryServiceParamsRequest;
    fromAmino(object: QueryServiceParamsRequestAmino): QueryServiceParamsRequest;
    toAmino(message: QueryServiceParamsRequest): QueryServiceParamsRequestAmino;
    fromAminoMsg(object: QueryServiceParamsRequestAminoMsg): QueryServiceParamsRequest;
    fromProtoMsg(message: QueryServiceParamsRequestProtoMsg): QueryServiceParamsRequest;
    toProto(message: QueryServiceParamsRequest): Uint8Array;
    toProtoMsg(message: QueryServiceParamsRequest): QueryServiceParamsRequestProtoMsg;
};
export declare const QueryServiceParamsResponse: {
    typeUrl: string;
    encode(message: QueryServiceParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsResponse;
    fromPartial(object: Partial<QueryServiceParamsResponse>): QueryServiceParamsResponse;
    fromAmino(object: QueryServiceParamsResponseAmino): QueryServiceParamsResponse;
    toAmino(message: QueryServiceParamsResponse): QueryServiceParamsResponseAmino;
    fromAminoMsg(object: QueryServiceParamsResponseAminoMsg): QueryServiceParamsResponse;
    fromProtoMsg(message: QueryServiceParamsResponseProtoMsg): QueryServiceParamsResponse;
    toProto(message: QueryServiceParamsResponse): Uint8Array;
    toProtoMsg(message: QueryServiceParamsResponse): QueryServiceParamsResponseProtoMsg;
};
