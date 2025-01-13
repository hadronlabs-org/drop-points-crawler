import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerAsset = this.registerAsset.bind(this);
    this.deregisterAsset = this.deregisterAsset.bind(this);
  }
  registerAsset(request: MsgRegisterAsset): Promise<MsgRegisterAssetResponse> {
    const data = MsgRegisterAsset.encode(request).finish();
    const promise = this.rpc.request("milkyway.assets.v1.Msg", "RegisterAsset", data);
    return promise.then(data => MsgRegisterAssetResponse.decode(new BinaryReader(data)));
  }
  deregisterAsset(request: MsgDeregisterAsset): Promise<MsgDeregisterAssetResponse> {
    const data = MsgDeregisterAsset.encode(request).finish();
    const promise = this.rpc.request("milkyway.assets.v1.Msg", "DeregisterAsset", data);
    return promise.then(data => MsgDeregisterAssetResponse.decode(new BinaryReader(data)));
  }
}