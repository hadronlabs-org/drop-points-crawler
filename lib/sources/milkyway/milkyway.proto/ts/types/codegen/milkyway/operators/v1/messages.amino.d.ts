import { MsgRegisterOperator, MsgUpdateOperator, MsgDeactivateOperator, MsgReactivateOperator, MsgDeleteOperator, MsgTransferOperatorOwnership, MsgSetOperatorParams, MsgUpdateParams } from "./messages";
export declare const AminoConverter: {
    "/milkyway.operators.v1.MsgRegisterOperator": {
        aminoType: string;
        toAmino: (message: MsgRegisterOperator) => import("./messages").MsgRegisterOperatorAmino;
        fromAmino: (object: import("./messages").MsgRegisterOperatorAmino) => MsgRegisterOperator;
    };
    "/milkyway.operators.v1.MsgUpdateOperator": {
        aminoType: string;
        toAmino: (message: MsgUpdateOperator) => import("./messages").MsgUpdateOperatorAmino;
        fromAmino: (object: import("./messages").MsgUpdateOperatorAmino) => MsgUpdateOperator;
    };
    "/milkyway.operators.v1.MsgDeactivateOperator": {
        aminoType: string;
        toAmino: (message: MsgDeactivateOperator) => import("./messages").MsgDeactivateOperatorAmino;
        fromAmino: (object: import("./messages").MsgDeactivateOperatorAmino) => MsgDeactivateOperator;
    };
    "/milkyway.operators.v1.MsgReactivateOperator": {
        aminoType: string;
        toAmino: (message: MsgReactivateOperator) => import("./messages").MsgReactivateOperatorAmino;
        fromAmino: (object: import("./messages").MsgReactivateOperatorAmino) => MsgReactivateOperator;
    };
    "/milkyway.operators.v1.MsgDeleteOperator": {
        aminoType: string;
        toAmino: (message: MsgDeleteOperator) => import("./messages").MsgDeleteOperatorAmino;
        fromAmino: (object: import("./messages").MsgDeleteOperatorAmino) => MsgDeleteOperator;
    };
    "/milkyway.operators.v1.MsgTransferOperatorOwnership": {
        aminoType: string;
        toAmino: (message: MsgTransferOperatorOwnership) => import("./messages").MsgTransferOperatorOwnershipAmino;
        fromAmino: (object: import("./messages").MsgTransferOperatorOwnershipAmino) => MsgTransferOperatorOwnership;
    };
    "/milkyway.operators.v1.MsgSetOperatorParams": {
        aminoType: string;
        toAmino: (message: MsgSetOperatorParams) => import("./messages").MsgSetOperatorParamsAmino;
        fromAmino: (object: import("./messages").MsgSetOperatorParamsAmino) => MsgSetOperatorParams;
    };
    "/milkyway.operators.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./messages").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
