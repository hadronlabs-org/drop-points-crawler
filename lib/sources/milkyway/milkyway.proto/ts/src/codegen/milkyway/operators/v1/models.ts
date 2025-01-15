import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** OperatorStatus defines the possible statuses of an operator */
export enum OperatorStatus {
  /** OPERATOR_STATUS_UNSPECIFIED - OPERATOR_STATUS_UNSPECIFIED defines an unspecified status */
  OPERATOR_STATUS_UNSPECIFIED = 0,
  /**
   * OPERATOR_STATUS_ACTIVE - OPERATOR_STATUS_ACTIVE identifies an active operator which is providing
   * services
   */
  OPERATOR_STATUS_ACTIVE = 1,
  /**
   * OPERATOR_STATUS_INACTIVATING - OPERATOR_STATUS_INACTIVATING identifies an operator that is in the process
   * of becoming inactive
   */
  OPERATOR_STATUS_INACTIVATING = 2,
  /**
   * OPERATOR_STATUS_INACTIVE - OPERATOR_STATUS_INACTIVE defines an inactive operator that is not providing
   * services
   */
  OPERATOR_STATUS_INACTIVE = 3,
  UNRECOGNIZED = -1,
}
export const OperatorStatusSDKType = OperatorStatus;
export const OperatorStatusAmino = OperatorStatus;
export function operatorStatusFromJSON(object: any): OperatorStatus {
  switch (object) {
    case 0:
    case "OPERATOR_STATUS_UNSPECIFIED":
      return OperatorStatus.OPERATOR_STATUS_UNSPECIFIED;
    case 1:
    case "OPERATOR_STATUS_ACTIVE":
      return OperatorStatus.OPERATOR_STATUS_ACTIVE;
    case 2:
    case "OPERATOR_STATUS_INACTIVATING":
      return OperatorStatus.OPERATOR_STATUS_INACTIVATING;
    case 3:
    case "OPERATOR_STATUS_INACTIVE":
      return OperatorStatus.OPERATOR_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperatorStatus.UNRECOGNIZED;
  }
}
export function operatorStatusToJSON(object: OperatorStatus): string {
  switch (object) {
    case OperatorStatus.OPERATOR_STATUS_UNSPECIFIED:
      return "OPERATOR_STATUS_UNSPECIFIED";
    case OperatorStatus.OPERATOR_STATUS_ACTIVE:
      return "OPERATOR_STATUS_ACTIVE";
    case OperatorStatus.OPERATOR_STATUS_INACTIVATING:
      return "OPERATOR_STATUS_INACTIVATING";
    case OperatorStatus.OPERATOR_STATUS_INACTIVE:
      return "OPERATOR_STATUS_INACTIVE";
    case OperatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Operator defines the fields of an operator */
export interface Operator {
  /** ID is the auto-generated unique identifier for the operator */
  id: number;
  /** Status is the status of the operator */
  status: OperatorStatus;
  /** Admin is the address of the user that can manage the operator */
  admin: string;
  /** Moniker is the identifier of the operator */
  moniker: string;
  /** Website is the website of the operator */
  website: string;
  /** PictureURL is the URL of the picture of the operator */
  pictureUrl: string;
  /**
   * Address is the address of the account associated to the operator.
   * This will be used to store tokens that are delegated to this operator.
   */
  address: string;
  /** Tokens define the delegated tokens. */
  tokens: Coin[];
  /** DelegatorShares define the total shares issued to an operator's delegators. */
  delegatorShares: DecCoin[];
}
export interface OperatorProtoMsg {
  typeUrl: "/milkyway.operators.v1.Operator";
  value: Uint8Array;
}
/** Operator defines the fields of an operator */
export interface OperatorAmino {
  /** ID is the auto-generated unique identifier for the operator */
  id?: number;
  /** Status is the status of the operator */
  status?: OperatorStatus;
  /** Admin is the address of the user that can manage the operator */
  admin?: string;
  /** Moniker is the identifier of the operator */
  moniker?: string;
  /** Website is the website of the operator */
  website?: string;
  /** PictureURL is the URL of the picture of the operator */
  picture_url?: string;
  /**
   * Address is the address of the account associated to the operator.
   * This will be used to store tokens that are delegated to this operator.
   */
  address?: string;
  /** Tokens define the delegated tokens. */
  tokens?: CoinAmino[];
  /** DelegatorShares define the total shares issued to an operator's delegators. */
  delegator_shares?: DecCoinAmino[];
}
export interface OperatorAminoMsg {
  type: "/milkyway.operators.v1.Operator";
  value: OperatorAmino;
}
/** Operator defines the fields of an operator */
export interface OperatorSDKType {
  id: number;
  status: OperatorStatus;
  admin: string;
  moniker: string;
  website: string;
  picture_url: string;
  address: string;
  tokens: CoinSDKType[];
  delegator_shares: DecCoinSDKType[];
}
/**
 * OperatorParams represent the params that have been set for an individual
 * operator.
 */
export interface OperatorParams {
  /**
   * CommissionRate defines the commission rate charged to delegators, as a
   * fraction.
   */
  commissionRate: string;
}
export interface OperatorParamsProtoMsg {
  typeUrl: "/milkyway.operators.v1.OperatorParams";
  value: Uint8Array;
}
/**
 * OperatorParams represent the params that have been set for an individual
 * operator.
 */
export interface OperatorParamsAmino {
  /**
   * CommissionRate defines the commission rate charged to delegators, as a
   * fraction.
   */
  commission_rate?: string;
}
export interface OperatorParamsAminoMsg {
  type: "/milkyway.operators.v1.OperatorParams";
  value: OperatorParamsAmino;
}
/**
 * OperatorParams represent the params that have been set for an individual
 * operator.
 */
export interface OperatorParamsSDKType {
  commission_rate: string;
}
function createBaseOperator(): Operator {
  return {
    id: 0,
    status: 0,
    admin: "",
    moniker: "",
    website: "",
    pictureUrl: "",
    address: "",
    tokens: [],
    delegatorShares: []
  };
}
export const Operator = {
  typeUrl: "/milkyway.operators.v1.Operator",
  encode(message: Operator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.moniker !== "") {
      writer.uint32(34).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(42).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(50).string(message.pictureUrl);
    }
    if (message.address !== "") {
      writer.uint32(58).string(message.address);
    }
    for (const v of message.tokens) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorShares) {
      DecCoin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Operator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperator();
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
          message.moniker = reader.string();
          break;
        case 5:
          message.website = reader.string();
          break;
        case 6:
          message.pictureUrl = reader.string();
          break;
        case 7:
          message.address = reader.string();
          break;
        case 8:
          message.tokens.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorShares.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Operator>): Operator {
    const message = createBaseOperator();
    message.id = object.id ?? 0;
    message.status = object.status ?? 0;
    message.admin = object.admin ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    message.address = object.address ?? "";
    message.tokens = object.tokens?.map(e => Coin.fromPartial(e)) || [];
    message.delegatorShares = object.delegatorShares?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OperatorAmino): Operator {
    const message = createBaseOperator();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
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
    return message;
  },
  toAmino(message: Operator): OperatorAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
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
    return obj;
  },
  fromAminoMsg(object: OperatorAminoMsg): Operator {
    return Operator.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorProtoMsg): Operator {
    return Operator.decode(message.value);
  },
  toProto(message: Operator): Uint8Array {
    return Operator.encode(message).finish();
  },
  toProtoMsg(message: Operator): OperatorProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.Operator",
      value: Operator.encode(message).finish()
    };
  }
};
function createBaseOperatorParams(): OperatorParams {
  return {
    commissionRate: ""
  };
}
export const OperatorParams = {
  typeUrl: "/milkyway.operators.v1.OperatorParams",
  encode(message: OperatorParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commissionRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OperatorParams>): OperatorParams {
    const message = createBaseOperatorParams();
    message.commissionRate = object.commissionRate ?? "";
    return message;
  },
  fromAmino(object: OperatorParamsAmino): OperatorParams {
    const message = createBaseOperatorParams();
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    return message;
  },
  toAmino(message: OperatorParams): OperatorParamsAmino {
    const obj: any = {};
    obj.commission_rate = message.commissionRate === "" ? undefined : message.commissionRate;
    return obj;
  },
  fromAminoMsg(object: OperatorParamsAminoMsg): OperatorParams {
    return OperatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorParamsProtoMsg): OperatorParams {
    return OperatorParams.decode(message.value);
  },
  toProto(message: OperatorParams): Uint8Array {
    return OperatorParams.encode(message).finish();
  },
  toProtoMsg(message: OperatorParams): OperatorParamsProtoMsg {
    return {
      typeUrl: "/milkyway.operators.v1.OperatorParams",
      value: OperatorParams.encode(message).finish()
    };
  }
};