import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** OperatorStatus defines the possible statuses of an operator */
export declare enum OperatorStatus {
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
    UNRECOGNIZED = -1
}
export declare const OperatorStatusSDKType: typeof OperatorStatus;
export declare const OperatorStatusAmino: typeof OperatorStatus;
export declare function operatorStatusFromJSON(object: any): OperatorStatus;
export declare function operatorStatusToJSON(object: OperatorStatus): string;
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
export declare const Operator: {
    typeUrl: string;
    encode(message: Operator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Operator;
    fromPartial(object: Partial<Operator>): Operator;
    fromAmino(object: OperatorAmino): Operator;
    toAmino(message: Operator): OperatorAmino;
    fromAminoMsg(object: OperatorAminoMsg): Operator;
    fromProtoMsg(message: OperatorProtoMsg): Operator;
    toProto(message: Operator): Uint8Array;
    toProtoMsg(message: Operator): OperatorProtoMsg;
};
export declare const OperatorParams: {
    typeUrl: string;
    encode(message: OperatorParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OperatorParams;
    fromPartial(object: Partial<OperatorParams>): OperatorParams;
    fromAmino(object: OperatorParamsAmino): OperatorParams;
    toAmino(message: OperatorParams): OperatorParamsAmino;
    fromAminoMsg(object: OperatorParamsAminoMsg): OperatorParams;
    fromProtoMsg(message: OperatorParamsProtoMsg): OperatorParams;
    toProto(message: OperatorParams): Uint8Array;
    toProtoMsg(message: OperatorParams): OperatorParamsProtoMsg;
};
