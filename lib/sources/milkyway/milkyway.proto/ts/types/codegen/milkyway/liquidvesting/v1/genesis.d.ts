import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnCoins, BurnCoinsAmino, BurnCoinsSDKType, UserInsuranceFundEntry, UserInsuranceFundEntryAmino, UserInsuranceFundEntrySDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisState {
    /** Params defines the parameters of the module. */
    params: Params;
    /**
     * BurnCoins represents the list of coins that should be burned from the
     * users' balances
     */
    burnCoins: BurnCoins[];
    /** UserInsuranceFunds represents the users' insurance fund. */
    userInsuranceFunds: UserInsuranceFundEntry[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/milkyway.liquidvesting.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisStateAmino {
    /** Params defines the parameters of the module. */
    params?: ParamsAmino;
    /**
     * BurnCoins represents the list of coins that should be burned from the
     * users' balances
     */
    burn_coins?: BurnCoinsAmino[];
    /** UserInsuranceFunds represents the users' insurance fund. */
    user_insurance_funds?: UserInsuranceFundEntryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/milkyway.liquidvesting.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the liquidvesting module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    burn_coins: BurnCoinsSDKType[];
    user_insurance_funds: UserInsuranceFundEntrySDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
