import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, MsgChannelUpgradeAck, MsgChannelUpgradeConfirm, MsgChannelUpgradeOpen, MsgChannelUpgradeTimeout, MsgChannelUpgradeCancel, MsgUpdateParams, MsgPruneAcknowledgements } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: Uint8Array;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: Uint8Array;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeInit(value: MsgChannelUpgradeInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeTry(value: MsgChannelUpgradeTry): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeAck(value: MsgChannelUpgradeAck): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeConfirm(value: MsgChannelUpgradeConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeOpen(value: MsgChannelUpgradeOpen): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeTimeout(value: MsgChannelUpgradeTimeout): {
            typeUrl: string;
            value: Uint8Array;
        };
        channelUpgradeCancel(value: MsgChannelUpgradeCancel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateChannelParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        pruneAcknowledgements(value: MsgPruneAcknowledgements): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
        channelUpgradeInit(value: MsgChannelUpgradeInit): {
            typeUrl: string;
            value: MsgChannelUpgradeInit;
        };
        channelUpgradeTry(value: MsgChannelUpgradeTry): {
            typeUrl: string;
            value: MsgChannelUpgradeTry;
        };
        channelUpgradeAck(value: MsgChannelUpgradeAck): {
            typeUrl: string;
            value: MsgChannelUpgradeAck;
        };
        channelUpgradeConfirm(value: MsgChannelUpgradeConfirm): {
            typeUrl: string;
            value: MsgChannelUpgradeConfirm;
        };
        channelUpgradeOpen(value: MsgChannelUpgradeOpen): {
            typeUrl: string;
            value: MsgChannelUpgradeOpen;
        };
        channelUpgradeTimeout(value: MsgChannelUpgradeTimeout): {
            typeUrl: string;
            value: MsgChannelUpgradeTimeout;
        };
        channelUpgradeCancel(value: MsgChannelUpgradeCancel): {
            typeUrl: string;
            value: MsgChannelUpgradeCancel;
        };
        updateChannelParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        pruneAcknowledgements(value: MsgPruneAcknowledgements): {
            typeUrl: string;
            value: MsgPruneAcknowledgements;
        };
    };
    fromPartial: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
        channelUpgradeInit(value: MsgChannelUpgradeInit): {
            typeUrl: string;
            value: MsgChannelUpgradeInit;
        };
        channelUpgradeTry(value: MsgChannelUpgradeTry): {
            typeUrl: string;
            value: MsgChannelUpgradeTry;
        };
        channelUpgradeAck(value: MsgChannelUpgradeAck): {
            typeUrl: string;
            value: MsgChannelUpgradeAck;
        };
        channelUpgradeConfirm(value: MsgChannelUpgradeConfirm): {
            typeUrl: string;
            value: MsgChannelUpgradeConfirm;
        };
        channelUpgradeOpen(value: MsgChannelUpgradeOpen): {
            typeUrl: string;
            value: MsgChannelUpgradeOpen;
        };
        channelUpgradeTimeout(value: MsgChannelUpgradeTimeout): {
            typeUrl: string;
            value: MsgChannelUpgradeTimeout;
        };
        channelUpgradeCancel(value: MsgChannelUpgradeCancel): {
            typeUrl: string;
            value: MsgChannelUpgradeCancel;
        };
        updateChannelParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        pruneAcknowledgements(value: MsgPruneAcknowledgements): {
            typeUrl: string;
            value: MsgPruneAcknowledgements;
        };
    };
};
