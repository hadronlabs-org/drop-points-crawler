import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export declare const AminoConverter: {
    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: MsgStoreCode) => import("./tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./tx").MsgStoreCodeAmino) => MsgStoreCode;
    };
    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
        aminoType: string;
        toAmino: (message: MsgRemoveChecksum) => import("./tx").MsgRemoveChecksumAmino;
        fromAmino: (object: import("./tx").MsgRemoveChecksumAmino) => MsgRemoveChecksum;
    };
    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: MsgMigrateContract) => import("./tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./tx").MsgMigrateContractAmino) => MsgMigrateContract;
    };
};
