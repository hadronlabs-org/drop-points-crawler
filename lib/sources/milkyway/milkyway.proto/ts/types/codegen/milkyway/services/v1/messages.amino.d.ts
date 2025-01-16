import { MsgCreateService, MsgUpdateService, MsgActivateService, MsgDeactivateService, MsgDeleteService, MsgTransferServiceOwnership, MsgSetServiceParams, MsgUpdateParams, MsgAccreditService, MsgRevokeServiceAccreditation } from "./messages";
export declare const AminoConverter: {
    "/milkyway.services.v1.MsgCreateService": {
        aminoType: string;
        toAmino: (message: MsgCreateService) => import("./messages").MsgCreateServiceAmino;
        fromAmino: (object: import("./messages").MsgCreateServiceAmino) => MsgCreateService;
    };
    "/milkyway.services.v1.MsgUpdateService": {
        aminoType: string;
        toAmino: (message: MsgUpdateService) => import("./messages").MsgUpdateServiceAmino;
        fromAmino: (object: import("./messages").MsgUpdateServiceAmino) => MsgUpdateService;
    };
    "/milkyway.services.v1.MsgActivateService": {
        aminoType: string;
        toAmino: (message: MsgActivateService) => import("./messages").MsgActivateServiceAmino;
        fromAmino: (object: import("./messages").MsgActivateServiceAmino) => MsgActivateService;
    };
    "/milkyway.services.v1.MsgDeactivateService": {
        aminoType: string;
        toAmino: (message: MsgDeactivateService) => import("./messages").MsgDeactivateServiceAmino;
        fromAmino: (object: import("./messages").MsgDeactivateServiceAmino) => MsgDeactivateService;
    };
    "/milkyway.services.v1.MsgDeleteService": {
        aminoType: string;
        toAmino: (message: MsgDeleteService) => import("./messages").MsgDeleteServiceAmino;
        fromAmino: (object: import("./messages").MsgDeleteServiceAmino) => MsgDeleteService;
    };
    "/milkyway.services.v1.MsgTransferServiceOwnership": {
        aminoType: string;
        toAmino: (message: MsgTransferServiceOwnership) => import("./messages").MsgTransferServiceOwnershipAmino;
        fromAmino: (object: import("./messages").MsgTransferServiceOwnershipAmino) => MsgTransferServiceOwnership;
    };
    "/milkyway.services.v1.MsgSetServiceParams": {
        aminoType: string;
        toAmino: (message: MsgSetServiceParams) => import("./messages").MsgSetServiceParamsAmino;
        fromAmino: (object: import("./messages").MsgSetServiceParamsAmino) => MsgSetServiceParams;
    };
    "/milkyway.services.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./messages").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/milkyway.services.v1.MsgAccreditService": {
        aminoType: string;
        toAmino: (message: MsgAccreditService) => import("./messages").MsgAccreditServiceAmino;
        fromAmino: (object: import("./messages").MsgAccreditServiceAmino) => MsgAccreditService;
    };
    "/milkyway.services.v1.MsgRevokeServiceAccreditation": {
        aminoType: string;
        toAmino: (message: MsgRevokeServiceAccreditation) => import("./messages").MsgRevokeServiceAccreditationAmino;
        fromAmino: (object: import("./messages").MsgRevokeServiceAccreditationAmino) => MsgRevokeServiceAccreditation;
    };
};
