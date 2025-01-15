import { BinaryReader, BinaryWriter } from "../../../binary";
/** Pool defines the structure of a restaking pool */
export interface Pool {
    /** ID is the auto-generated unique identifier for the pool */
    id: number;
    /** Denom represents the denomination of the tokens that are staked in the pool */
    denom: string;
    /**
     * Address represents the address of the account that is associated with this
     * pool. This will be used to store tokens that users delegate to this pool.
     */
    address: string;
    /** Tokens define the delegated tokens. */
    tokens: string;
    /** DelegatorShares defines total shares issued to a pool's delegators. */
    delegatorShares: string;
}
export interface PoolProtoMsg {
    typeUrl: "/milkyway.pools.v1.Pool";
    value: Uint8Array;
}
/** Pool defines the structure of a restaking pool */
export interface PoolAmino {
    /** ID is the auto-generated unique identifier for the pool */
    id?: number;
    /** Denom represents the denomination of the tokens that are staked in the pool */
    denom?: string;
    /**
     * Address represents the address of the account that is associated with this
     * pool. This will be used to store tokens that users delegate to this pool.
     */
    address?: string;
    /** Tokens define the delegated tokens. */
    tokens?: string;
    /** DelegatorShares defines total shares issued to a pool's delegators. */
    delegator_shares?: string;
}
export interface PoolAminoMsg {
    type: "/milkyway.pools.v1.Pool";
    value: PoolAmino;
}
/** Pool defines the structure of a restaking pool */
export interface PoolSDKType {
    id: number;
    denom: string;
    address: string;
    tokens: string;
    delegator_shares: string;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
