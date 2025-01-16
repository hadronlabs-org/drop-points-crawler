import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export declare const AminoConverter: {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenInit) => import("./tx").MsgChannelOpenInitAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenInitAmino) => MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenTry) => import("./tx").MsgChannelOpenTryAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenTryAmino) => MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenAck) => import("./tx").MsgChannelOpenAckAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenAckAmino) => MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: (message: MsgChannelOpenConfirm) => import("./tx").MsgChannelOpenConfirmAmino;
        fromAmino: (object: import("./tx").MsgChannelOpenConfirmAmino) => MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: (message: MsgChannelCloseInit) => import("./tx").MsgChannelCloseInitAmino;
        fromAmino: (object: import("./tx").MsgChannelCloseInitAmino) => MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: (message: MsgChannelCloseConfirm) => import("./tx").MsgChannelCloseConfirmAmino;
        fromAmino: (object: import("./tx").MsgChannelCloseConfirmAmino) => MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: (message: MsgRecvPacket) => import("./tx").MsgRecvPacketAmino;
        fromAmino: (object: import("./tx").MsgRecvPacketAmino) => MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: (message: MsgTimeout) => import("./tx").MsgTimeoutAmino;
        fromAmino: (object: import("./tx").MsgTimeoutAmino) => MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: (message: MsgTimeoutOnClose) => import("./tx").MsgTimeoutOnCloseAmino;
        fromAmino: (object: import("./tx").MsgTimeoutOnCloseAmino) => MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: (message: MsgAcknowledgement) => import("./tx").MsgAcknowledgementAmino;
        fromAmino: (object: import("./tx").MsgAcknowledgementAmino) => MsgAcknowledgement;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeInit) => import("./tx").MsgChannelUpgradeInitAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeInitAmino) => MsgChannelUpgradeInit;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeTry) => import("./tx").MsgChannelUpgradeTryAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeTryAmino) => MsgChannelUpgradeTry;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeAck) => import("./tx").MsgChannelUpgradeAckAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeAckAmino) => MsgChannelUpgradeAck;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeConfirm) => import("./tx").MsgChannelUpgradeConfirmAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeConfirmAmino) => MsgChannelUpgradeConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeOpen) => import("./tx").MsgChannelUpgradeOpenAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeOpenAmino) => MsgChannelUpgradeOpen;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeTimeout) => import("./tx").MsgChannelUpgradeTimeoutAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeTimeoutAmino) => MsgChannelUpgradeTimeout;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
        aminoType: string;
        toAmino: (message: MsgChannelUpgradeCancel) => import("./tx").MsgChannelUpgradeCancelAmino;
        fromAmino: (object: import("./tx").MsgChannelUpgradeCancelAmino) => MsgChannelUpgradeCancel;
    };
    "/ibc.core.channel.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
        aminoType: string;
        toAmino: (message: MsgPruneAcknowledgements) => import("./tx").MsgPruneAcknowledgementsAmino;
        fromAmino: (object: import("./tx").MsgPruneAcknowledgementsAmino) => MsgPruneAcknowledgements;
    };
};
