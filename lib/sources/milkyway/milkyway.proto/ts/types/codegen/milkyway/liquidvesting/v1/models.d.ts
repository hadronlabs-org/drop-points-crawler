import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFund {
    /** Amount of coins deposited into the user's insurance fund. */
    balance: Coin[];
}
export interface UserInsuranceFundProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFund";
    value: Uint8Array;
}
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFundAmino {
    /** Amount of coins deposited into the user's insurance fund. */
    balance?: CoinAmino[];
}
export interface UserInsuranceFundAminoMsg {
    type: "/milkyway.liquidvesting.v1.UserInsuranceFund";
    value: UserInsuranceFundAmino;
}
/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFundSDKType {
    balance: CoinSDKType[];
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoins {
    /** Address of who has delegated the coins. */
    delegatorAddress: string;
    /** CompletionTime is the unix time for unbonding completion. */
    completionTime: Date;
    /** Amount of coins to be burned from the delegator address. */
    amount: Coin[];
}
export interface BurnCoinsProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.BurnCoins";
    value: Uint8Array;
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoinsAmino {
    /** Address of who has delegated the coins. */
    delegator_address?: string;
    /** CompletionTime is the unix time for unbonding completion. */
    completion_time: string;
    /** Amount of coins to be burned from the delegator address. */
    amount?: CoinAmino[];
}
export interface BurnCoinsAminoMsg {
    type: "/milkyway.liquidvesting.v1.BurnCoins";
    value: BurnCoinsAmino;
}
/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the locked representation tokens ends.
 */
export interface BurnCoinsSDKType {
    delegator_address: string;
    completion_time: Date;
    amount: CoinSDKType[];
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsList {
    data: BurnCoins[];
}
export interface BurnCoinsListProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.BurnCoinsList";
    value: Uint8Array;
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsListAmino {
    data: BurnCoinsAmino[];
}
export interface BurnCoinsListAminoMsg {
    type: "/milkyway.liquidvesting.v1.BurnCoinsList";
    value: BurnCoinsListAmino;
}
/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsListSDKType {
    data: BurnCoinsSDKType[];
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntry {
    /** Address of who owns the insurance fund. */
    userAddress: string;
    /** Amount of coins deposited into the user's insurance fund. */
    balance: Coin[];
}
export interface UserInsuranceFundEntryProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry";
    value: Uint8Array;
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntryAmino {
    /** Address of who owns the insurance fund. */
    user_address?: string;
    /** Amount of coins deposited into the user's insurance fund. */
    balance?: CoinAmino[];
}
export interface UserInsuranceFundEntryAminoMsg {
    type: "/milkyway.liquidvesting.v1.UserInsuranceFundEntry";
    value: UserInsuranceFundEntryAmino;
}
/**
 * UserInsuranceFundEntry represents an entry containing the data of a user
 * insurance fund.
 */
export interface UserInsuranceFundEntrySDKType {
    user_address: string;
    balance: CoinSDKType[];
}
export declare const UserInsuranceFund: {
    typeUrl: string;
    encode(message: UserInsuranceFund, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFund;
    fromPartial(object: Partial<UserInsuranceFund>): UserInsuranceFund;
    fromAmino(object: UserInsuranceFundAmino): UserInsuranceFund;
    toAmino(message: UserInsuranceFund): UserInsuranceFundAmino;
    fromAminoMsg(object: UserInsuranceFundAminoMsg): UserInsuranceFund;
    fromProtoMsg(message: UserInsuranceFundProtoMsg): UserInsuranceFund;
    toProto(message: UserInsuranceFund): Uint8Array;
    toProtoMsg(message: UserInsuranceFund): UserInsuranceFundProtoMsg;
};
export declare const BurnCoins: {
    typeUrl: string;
    encode(message: BurnCoins, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BurnCoins;
    fromPartial(object: Partial<BurnCoins>): BurnCoins;
    fromAmino(object: BurnCoinsAmino): BurnCoins;
    toAmino(message: BurnCoins): BurnCoinsAmino;
    fromAminoMsg(object: BurnCoinsAminoMsg): BurnCoins;
    fromProtoMsg(message: BurnCoinsProtoMsg): BurnCoins;
    toProto(message: BurnCoins): Uint8Array;
    toProtoMsg(message: BurnCoins): BurnCoinsProtoMsg;
};
export declare const BurnCoinsList: {
    typeUrl: string;
    encode(message: BurnCoinsList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BurnCoinsList;
    fromPartial(object: Partial<BurnCoinsList>): BurnCoinsList;
    fromAmino(object: BurnCoinsListAmino): BurnCoinsList;
    toAmino(message: BurnCoinsList): BurnCoinsListAmino;
    fromAminoMsg(object: BurnCoinsListAminoMsg): BurnCoinsList;
    fromProtoMsg(message: BurnCoinsListProtoMsg): BurnCoinsList;
    toProto(message: BurnCoinsList): Uint8Array;
    toProtoMsg(message: BurnCoinsList): BurnCoinsListProtoMsg;
};
export declare const UserInsuranceFundEntry: {
    typeUrl: string;
    encode(message: UserInsuranceFundEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFundEntry;
    fromPartial(object: Partial<UserInsuranceFundEntry>): UserInsuranceFundEntry;
    fromAmino(object: UserInsuranceFundEntryAmino): UserInsuranceFundEntry;
    toAmino(message: UserInsuranceFundEntry): UserInsuranceFundEntryAmino;
    fromAminoMsg(object: UserInsuranceFundEntryAminoMsg): UserInsuranceFundEntry;
    fromProtoMsg(message: UserInsuranceFundEntryProtoMsg): UserInsuranceFundEntry;
    toProto(message: UserInsuranceFundEntry): Uint8Array;
    toProtoMsg(message: UserInsuranceFundEntry): UserInsuranceFundEntryProtoMsg;
};
