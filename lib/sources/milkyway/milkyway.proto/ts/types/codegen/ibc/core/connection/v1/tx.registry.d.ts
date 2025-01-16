import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: Uint8Array;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: Uint8Array;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: Uint8Array;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
