import { MsgMintLockedRepresentation, MsgBurnLockedRepresentation, MsgWithdrawInsuranceFund, MsgUpdateParams } from "./messages";
export declare const AminoConverter: {
    "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation": {
        aminoType: string;
        toAmino: (message: MsgMintLockedRepresentation) => import("./messages").MsgMintLockedRepresentationAmino;
        fromAmino: (object: import("./messages").MsgMintLockedRepresentationAmino) => MsgMintLockedRepresentation;
    };
    "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation": {
        aminoType: string;
        toAmino: (message: MsgBurnLockedRepresentation) => import("./messages").MsgBurnLockedRepresentationAmino;
        fromAmino: (object: import("./messages").MsgBurnLockedRepresentationAmino) => MsgBurnLockedRepresentation;
    };
    "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund": {
        aminoType: string;
        toAmino: (message: MsgWithdrawInsuranceFund) => import("./messages").MsgWithdrawInsuranceFundAmino;
        fromAmino: (object: import("./messages").MsgWithdrawInsuranceFundAmino) => MsgWithdrawInsuranceFund;
    };
    "/milkyway.liquidvesting.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./messages").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
