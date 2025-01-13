import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
