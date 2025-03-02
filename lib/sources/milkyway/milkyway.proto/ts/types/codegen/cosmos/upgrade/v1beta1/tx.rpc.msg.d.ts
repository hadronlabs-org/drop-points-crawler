import { TxRpc } from "../../../types";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse } from "./tx";
/** Msg defines the upgrade Msg service. */
export interface Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approved software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
