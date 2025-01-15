import { MsgRegisterAsset, MsgDeregisterAsset } from "./messages";
export declare const AminoConverter: {
    "/milkyway.assets.v1.MsgRegisterAsset": {
        aminoType: string;
        toAmino: (message: MsgRegisterAsset) => import("./messages").MsgRegisterAssetAmino;
        fromAmino: (object: import("./messages").MsgRegisterAssetAmino) => MsgRegisterAsset;
    };
    "/milkyway.assets.v1.MsgDeregisterAsset": {
        aminoType: string;
        toAmino: (message: MsgDeregisterAsset) => import("./messages").MsgDeregisterAssetAmino;
        fromAmino: (object: import("./messages").MsgDeregisterAssetAmino) => MsgDeregisterAsset;
    };
};
