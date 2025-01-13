import { TxRpc } from "../../../types";
import { MsgRegisterAsset, MsgRegisterAssetResponse, MsgDeregisterAsset, MsgDeregisterAssetResponse } from "./messages";
/** Msg defines the assets module's gRPC message service. */
export interface Msg {
    /** RegisterAsset defines the operation for registering an asset. */
    registerAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse>;
    /**
     * DeregisterAsset defines the operation for de-registering an asset with
     * its denomination.
     */
    deregisterAsset(request: MsgDeregisterAsset): Promise<MsgDeregisterAssetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    registerAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse>;
    deregisterAsset(request: MsgDeregisterAsset): Promise<MsgDeregisterAssetResponse>;
}
