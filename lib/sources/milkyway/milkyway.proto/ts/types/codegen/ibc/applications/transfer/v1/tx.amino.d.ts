import { MsgTransfer, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: MsgTransfer) => import("./tx").MsgTransferAmino;
        fromAmino: (object: import("./tx").MsgTransferAmino) => MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
