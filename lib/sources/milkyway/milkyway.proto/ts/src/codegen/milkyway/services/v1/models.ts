import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** ServiceStatus defines the status of a service */
export enum ServiceStatus {
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
  UNRECOGNIZED = -1,
}
export const ServiceStatusSDKType = ServiceStatus;
export const ServiceStatusAmino = ServiceStatus;
export function serviceStatusFromJSON(object: any): ServiceStatus {
  switch (object) {
    case 0:
    case "SERVICE_STATUS_UNSPECIFIED":
      return ServiceStatus.SERVICE_STATUS_UNSPECIFIED;
    case 1:
    case "SERVICE_STATUS_CREATED":
      return ServiceStatus.SERVICE_STATUS_CREATED;
    case 2:
    case "SERVICE_STATUS_ACTIVE":
      return ServiceStatus.SERVICE_STATUS_ACTIVE;
    case 3:
    case "SERVICE_STATUS_INACTIVE":
      return ServiceStatus.SERVICE_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceStatus.UNRECOGNIZED;
  }
}
export function serviceStatusToJSON(object: ServiceStatus): string {
  switch (object) {
    case ServiceStatus.SERVICE_STATUS_UNSPECIFIED:
      return "SERVICE_STATUS_UNSPECIFIED";
    case ServiceStatus.SERVICE_STATUS_CREATED:
      return "SERVICE_STATUS_CREATED";
    case ServiceStatus.SERVICE_STATUS_ACTIVE:
      return "SERVICE_STATUS_ACTIVE";
    case ServiceStatus.SERVICE_STATUS_INACTIVE:
      return "SERVICE_STATUS_INACTIVE";
    case ServiceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseService(): Service {
  return {
    id: 0,
    status: 0,
    admin: "",
    name: "",
    description: "",
    website: "",
    pictureUrl: "",
    address: "",
    tokens: [],
    delegatorShares: [],
    accredited: false
  };
}
export const Service = {
  typeUrl: "/milkyway.services.v1.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.website !== "") {
      writer.uint32(50).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(58).string(message.pictureUrl);
    }
    if (message.address !== "") {
      writer.uint32(66).string(message.address);
    }
    for (const v of message.tokens) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.delegatorShares) {
      DecCoin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.accredited === true) {
      writer.uint32(88).bool(message.accredited);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.website = reader.string();
          break;
        case 7:
          message.pictureUrl = reader.string();
          break;
        case 8:
          message.address = reader.string();
          break;
        case 9:
          message.tokens.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.delegatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.accredited = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Service>): Service {
    const message = createBaseService();
    message.id = object.id ?? 0;
    message.status = object.status ?? 0;
    message.admin = object.admin ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    message.address = object.address ?? "";
    message.tokens = object.tokens?.map(e => Coin.fromPartial(e)) || [];
    message.delegatorShares = object.delegatorShares?.map(e => DecCoin.fromPartial(e)) || [];
    message.accredited = object.accredited ?? false;
    return message;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.picture_url !== undefined && object.picture_url !== null) {
      message.pictureUrl = object.picture_url;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.tokens = object.tokens?.map(e => Coin.fromAmino(e)) || [];
    message.delegatorShares = object.delegator_shares?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.accredited !== undefined && object.accredited !== null) {
      message.accredited = object.accredited;
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.website = message.website === "" ? undefined : message.website;
    obj.picture_url = message.pictureUrl === "" ? undefined : message.pictureUrl;
    obj.address = message.address === "" ? undefined : message.address;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    if (message.delegatorShares) {
      obj.delegator_shares = message.delegatorShares.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.delegator_shares = message.delegatorShares;
    }
    obj.accredited = message.accredited === false ? undefined : message.accredited;
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.Service",
      value: Service.encode(message).finish()
    };
  }
};
function createBaseServiceParams(): ServiceParams {
  return {
    allowedDenoms: []
  };
}
export const ServiceParams = {
  typeUrl: "/milkyway.services.v1.ServiceParams",
  encode(message: ServiceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceParams>): ServiceParams {
    const message = createBaseServiceParams();
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceParamsAmino): ServiceParams {
    const message = createBaseServiceParams();
    message.allowedDenoms = object.allowed_denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceParams): ServiceParamsAmino {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e);
    } else {
      obj.allowed_denoms = message.allowedDenoms;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceParamsAminoMsg): ServiceParams {
    return ServiceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceParamsProtoMsg): ServiceParams {
    return ServiceParams.decode(message.value);
  },
  toProto(message: ServiceParams): Uint8Array {
    return ServiceParams.encode(message).finish();
  },
  toProtoMsg(message: ServiceParams): ServiceParamsProtoMsg {
    return {
      typeUrl: "/milkyway.services.v1.ServiceParams",
      value: ServiceParams.encode(message).finish()
    };
  }
};