import { MsgJoinService, MsgLeaveService, MsgAddOperatorToAllowList, MsgRemoveOperatorFromAllowlist, MsgBorrowPoolSecurity, MsgCeasePoolSecurityBorrow, MsgDelegatePool, MsgDelegateOperator, MsgDelegateService, MsgUpdateParams, MsgUndelegatePool, MsgUndelegateOperator, MsgUndelegateService, MsgSetUserPreferences } from "./messages";
export declare const AminoConverter: {
    "/milkyway.restaking.v1.MsgJoinService": {
        aminoType: string;
        toAmino: (message: MsgJoinService) => import("./messages").MsgJoinServiceAmino;
        fromAmino: (object: import("./messages").MsgJoinServiceAmino) => MsgJoinService;
    };
    "/milkyway.restaking.v1.MsgLeaveService": {
        aminoType: string;
        toAmino: (message: MsgLeaveService) => import("./messages").MsgLeaveServiceAmino;
        fromAmino: (object: import("./messages").MsgLeaveServiceAmino) => MsgLeaveService;
    };
    "/milkyway.restaking.v1.MsgAddOperatorToAllowList": {
        aminoType: string;
        toAmino: (message: MsgAddOperatorToAllowList) => import("./messages").MsgAddOperatorToAllowListAmino;
        fromAmino: (object: import("./messages").MsgAddOperatorToAllowListAmino) => MsgAddOperatorToAllowList;
    };
    "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist": {
        aminoType: string;
        toAmino: (message: MsgRemoveOperatorFromAllowlist) => import("./messages").MsgRemoveOperatorFromAllowlistAmino;
        fromAmino: (object: import("./messages").MsgRemoveOperatorFromAllowlistAmino) => MsgRemoveOperatorFromAllowlist;
    };
    "/milkyway.restaking.v1.MsgBorrowPoolSecurity": {
        aminoType: string;
        toAmino: (message: MsgBorrowPoolSecurity) => import("./messages").MsgBorrowPoolSecurityAmino;
        fromAmino: (object: import("./messages").MsgBorrowPoolSecurityAmino) => MsgBorrowPoolSecurity;
    };
    "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow": {
        aminoType: string;
        toAmino: (message: MsgCeasePoolSecurityBorrow) => import("./messages").MsgCeasePoolSecurityBorrowAmino;
        fromAmino: (object: import("./messages").MsgCeasePoolSecurityBorrowAmino) => MsgCeasePoolSecurityBorrow;
    };
    "/milkyway.restaking.v1.MsgDelegatePool": {
        aminoType: string;
        toAmino: (message: MsgDelegatePool) => import("./messages").MsgDelegatePoolAmino;
        fromAmino: (object: import("./messages").MsgDelegatePoolAmino) => MsgDelegatePool;
    };
    "/milkyway.restaking.v1.MsgDelegateOperator": {
        aminoType: string;
        toAmino: (message: MsgDelegateOperator) => import("./messages").MsgDelegateOperatorAmino;
        fromAmino: (object: import("./messages").MsgDelegateOperatorAmino) => MsgDelegateOperator;
    };
    "/milkyway.restaking.v1.MsgDelegateService": {
        aminoType: string;
        toAmino: (message: MsgDelegateService) => import("./messages").MsgDelegateServiceAmino;
        fromAmino: (object: import("./messages").MsgDelegateServiceAmino) => MsgDelegateService;
    };
    "/milkyway.restaking.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./messages").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/milkyway.restaking.v1.MsgUndelegatePool": {
        aminoType: string;
        toAmino: (message: MsgUndelegatePool) => import("./messages").MsgUndelegatePoolAmino;
        fromAmino: (object: import("./messages").MsgUndelegatePoolAmino) => MsgUndelegatePool;
    };
    "/milkyway.restaking.v1.MsgUndelegateOperator": {
        aminoType: string;
        toAmino: (message: MsgUndelegateOperator) => import("./messages").MsgUndelegateOperatorAmino;
        fromAmino: (object: import("./messages").MsgUndelegateOperatorAmino) => MsgUndelegateOperator;
    };
    "/milkyway.restaking.v1.MsgUndelegateService": {
        aminoType: string;
        toAmino: (message: MsgUndelegateService) => import("./messages").MsgUndelegateServiceAmino;
        fromAmino: (object: import("./messages").MsgUndelegateServiceAmino) => MsgUndelegateService;
    };
    "/milkyway.restaking.v1.MsgSetUserPreferences": {
        aminoType: string;
        toAmino: (message: MsgSetUserPreferences) => import("./messages").MsgSetUserPreferencesAmino;
        fromAmino: (object: import("./messages").MsgSetUserPreferencesAmino) => MsgSetUserPreferences;
    };
};
