import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: (message: MsgVerifyInvariant) => import("./tx").MsgVerifyInvariantAmino;
        fromAmino: (object: import("./tx").MsgVerifyInvariantAmino) => MsgVerifyInvariant;
    };
    "/cosmos.crisis.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
