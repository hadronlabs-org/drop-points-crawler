import { MsgUnjail, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: (message: MsgUnjail) => import("./tx").MsgUnjailAmino;
        fromAmino: (object: import("./tx").MsgUnjailAmino) => MsgUnjail;
    };
    "/cosmos.slashing.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
