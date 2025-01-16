import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: (message: MsgCreateClient) => import("./tx").MsgCreateClientAmino;
        fromAmino: (object: import("./tx").MsgCreateClientAmino) => MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: (message: MsgUpdateClient) => import("./tx").MsgUpdateClientAmino;
        fromAmino: (object: import("./tx").MsgUpdateClientAmino) => MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: (message: MsgUpgradeClient) => import("./tx").MsgUpgradeClientAmino;
        fromAmino: (object: import("./tx").MsgUpgradeClientAmino) => MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: (message: MsgSubmitMisbehaviour) => import("./tx").MsgSubmitMisbehaviourAmino;
        fromAmino: (object: import("./tx").MsgSubmitMisbehaviourAmino) => MsgSubmitMisbehaviour;
    };
    "/ibc.core.client.v1.MsgRecoverClient": {
        aminoType: string;
        toAmino: (message: MsgRecoverClient) => import("./tx").MsgRecoverClientAmino;
        fromAmino: (object: import("./tx").MsgRecoverClientAmino) => MsgRecoverClient;
    };
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: string;
        toAmino: (message: MsgIBCSoftwareUpgrade) => import("./tx").MsgIBCSoftwareUpgradeAmino;
        fromAmino: (object: import("./tx").MsgIBCSoftwareUpgradeAmino) => MsgIBCSoftwareUpgrade;
    };
    "/ibc.core.client.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
