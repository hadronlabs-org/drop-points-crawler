import { TxRpc } from "../../../types";
import { MsgSend, MsgSendResponse } from "./tx";
/** Msg defines the nft Msg service. */
export interface Msg {
    /** Send defines a method to send a nft from one account to another account. */
    send(request: MsgSend): Promise<MsgSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    send(request: MsgSend): Promise<MsgSendResponse>;
}
