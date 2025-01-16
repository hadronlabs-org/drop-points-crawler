import { TxRpc } from "../../../types";
import { MsgMintLockedRepresentation, MsgMintLockedRepresentationResponse, MsgBurnLockedRepresentation, MsgBurnLockedRepresentationResponse, MsgWithdrawInsuranceFund, MsgWithdrawInsuranceFundResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./messages";
/** Msg defines the services module's gRPC message service. */
export interface Msg {
    /**
     * MintLockedRepresentation defines the operation to mint a user's staked
     * locked tokens representation that can be used in the liquid vesting module.
     */
    mintLockedRepresentation(request: MsgMintLockedRepresentation): Promise<MsgMintLockedRepresentationResponse>;
    /**
     * BurnLockedRepresentation defines the operation to burn a user's staked
     * locked tokens representation.
     */
    burnLockedRepresentation(request: MsgBurnLockedRepresentation): Promise<MsgBurnLockedRepresentationResponse>;
    /**
     * WithdrawInsuranceFund defines the operation to withdraw an amount
     * of tokens from the user's insurance fund.
     * This can be used from the user to withdraw their funds after
     * some of their staking representations have been burned or if the
     * balance in the insurance fund is more than the required to cover all
     * their staking representations.
     */
    withdrawInsuranceFund(request: MsgWithdrawInsuranceFund): Promise<MsgWithdrawInsuranceFundResponse>;
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters.
     * The authority defaults to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    mintLockedRepresentation(request: MsgMintLockedRepresentation): Promise<MsgMintLockedRepresentationResponse>;
    burnLockedRepresentation(request: MsgBurnLockedRepresentation): Promise<MsgBurnLockedRepresentationResponse>;
    withdrawInsuranceFund(request: MsgWithdrawInsuranceFund): Promise<MsgWithdrawInsuranceFundResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
