import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: Uint8Array;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: MsgRemoveChecksum;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: MsgRemoveChecksum;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
    };
};
