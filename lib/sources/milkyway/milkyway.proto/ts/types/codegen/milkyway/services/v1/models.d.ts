import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** ServiceStatus defines the status of a service */
export declare enum ServiceStatus {
    /** SERVICE_STATUS_UNSPECIFIED - SERVICE_STATUS_UNSPECIFIED defines an unspecified status */
    SERVICE_STATUS_UNSPECIFIED = 0,
    /**
     * SERVICE_STATUS_CREATED - SERVICE_STATUS_CREATED identifies a recently created service that is not
     * yet active
     */
    SERVICE_STATUS_CREATED = 1,
    /** SERVICE_STATUS_ACTIVE - SERVICE_STATUS_ACTIVE identifies an active service */
    SERVICE_STATUS_ACTIVE = 2,
    /** SERVICE_STATUS_INACTIVE - SERVICE_STATUS_INACTIVE identifies an inactive service */
    SERVICE_STATUS_INACTIVE = 3,
    UNRECOGNIZED = -1
}
export declare const ServiceStatusSDKType: typeof ServiceStatus;
export declare const ServiceStatusAmino: typeof ServiceStatus;
export declare function serviceStatusFromJSON(object: any): ServiceStatus;
export declare function serviceStatusToJSON(object: ServiceStatus): string;
/** Service defines the fields of a service */
export interface Service {
    /** ID is the unique identifier of the service */
    id: number;
    /** Status is the status of the service */
    status: ServiceStatus;
    /**
     * Admin is the address of the user that has administrative power over the
     * service
     */
    admin: string;
    /** Name is the name of the service */
    name: string;
    /** Description is the description of the service */
    description: string;
    /** Website is the website of the service */
    website: string;
    /** PictureURL is the URL of the picture of the service */
    pictureUrl: string;
    /**
     * Address is the address of the account associated with the service.
     * This will be used in order to store all the tokens that are delegated to
     * this service by various users.
     */
    address: string;
    /** Tokens define the delegated tokens. */
    tokens: Coin[];
    /** DelegatorShares define the total shares issued to a service's delegators. */
    delegatorShares: DecCoin[];
    /**
     * Accredited defines if the service is accredited.
     * Note: We use this term instead of "trusted" of "verified" in order to
     * represent something more generic.
     * Initially, services will be accredited by the on-chain governance process.
     * In the future, we may add more ways to accredit services (e.g. automatic
     * ones based on the operators that decide to run the service, or the amount
     * of cryptoeconomic security that the service was able to capture).
     */
    accredited: boolean;
}
export interface ServiceProtoMsg {
    typeUrl: "/milkyway.services.v1.Service";
    value: Uint8Array;
}
/** Service defines the fields of a service */
export interface ServiceAmino {
    /** ID is the unique identifier of the service */
    id?: number;
    /** Status is the status of the service */
    status?: ServiceStatus;
    /**
     * Admin is the address of the user that has administrative power over the
     * service
     */
    admin?: string;
    /** Name is the name of the service */
    name?: string;
    /** Description is the description of the service */
    description?: string;
    /** Website is the website of the service */
    website?: string;
    /** PictureURL is the URL of the picture of the service */
    picture_url?: string;
    /**
     * Address is the address of the account associated with the service.
     * This will be used in order to store all the tokens that are delegated to
     * this service by various users.
     */
    address?: string;
    /** Tokens define the delegated tokens. */
    tokens?: CoinAmino[];
    /** DelegatorShares define the total shares issued to a service's delegators. */
    delegator_shares?: DecCoinAmino[];
    /**
     * Accredited defines if the service is accredited.
     * Note: We use this term instead of "trusted" of "verified" in order to
     * represent something more generic.
     * Initially, services will be accredited by the on-chain governance process.
     * In the future, we may add more ways to accredit services (e.g. automatic
     * ones based on the operators that decide to run the service, or the amount
     * of cryptoeconomic security that the service was able to capture).
     */
    accredited?: boolean;
}
export interface ServiceAminoMsg {
    type: "/milkyway.services.v1.Service";
    value: ServiceAmino;
}
/** Service defines the fields of a service */
export interface ServiceSDKType {
    id: number;
    status: ServiceStatus;
    admin: string;
    name: string;
    description: string;
    website: string;
    picture_url: string;
    address: string;
    tokens: CoinSDKType[];
    delegator_shares: DecCoinSDKType[];
    accredited: boolean;
}
/** ServiceParams defines the parameters of a service */
export interface ServiceParams {
    /**
     * AllowedDenoms defines the list of denoms that can be restaked toward
     * the service. If the list is empty, any denom can be used.
     */
    allowedDenoms: string[];
}
export interface ServiceParamsProtoMsg {
    typeUrl: "/milkyway.services.v1.ServiceParams";
    value: Uint8Array;
}
/** ServiceParams defines the parameters of a service */
export interface ServiceParamsAmino {
    /**
     * AllowedDenoms defines the list of denoms that can be restaked toward
     * the service. If the list is empty, any denom can be used.
     */
    allowed_denoms?: string[];
}
export interface ServiceParamsAminoMsg {
    type: "/milkyway.services.v1.ServiceParams";
    value: ServiceParamsAmino;
}
/** ServiceParams defines the parameters of a service */
export interface ServiceParamsSDKType {
    allowed_denoms: string[];
}
export declare const Service: {
    typeUrl: string;
    encode(message: Service, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Service;
    fromPartial(object: Partial<Service>): Service;
    fromAmino(object: ServiceAmino): Service;
    toAmino(message: Service): ServiceAmino;
    fromAminoMsg(object: ServiceAminoMsg): Service;
    fromProtoMsg(message: ServiceProtoMsg): Service;
    toProto(message: Service): Uint8Array;
    toProtoMsg(message: Service): ServiceProtoMsg;
};
export declare const ServiceParams: {
    typeUrl: string;
    encode(message: ServiceParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ServiceParams;
    fromPartial(object: Partial<ServiceParams>): ServiceParams;
    fromAmino(object: ServiceParamsAmino): ServiceParams;
    toAmino(message: ServiceParams): ServiceParamsAmino;
    fromAminoMsg(object: ServiceParamsAminoMsg): ServiceParams;
    fromProtoMsg(message: ServiceParamsProtoMsg): ServiceParams;
    toProto(message: ServiceParams): Uint8Array;
    toProtoMsg(message: ServiceParams): ServiceParamsProtoMsg;
};
