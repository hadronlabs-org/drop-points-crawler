import { TxRpc } from "../../../types";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the x/mint Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/mint module
     * parameters. The authority is defaults to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
