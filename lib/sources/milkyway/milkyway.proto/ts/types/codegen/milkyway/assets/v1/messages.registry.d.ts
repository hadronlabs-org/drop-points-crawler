import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAsset, MsgDeregisterAsset } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerAsset(value: MsgRegisterAsset): {
            typeUrl: string;
            value: Uint8Array;
        };
        deregisterAsset(value: MsgDeregisterAsset): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerAsset(value: MsgRegisterAsset): {
            typeUrl: string;
            value: MsgRegisterAsset;
        };
        deregisterAsset(value: MsgDeregisterAsset): {
            typeUrl: string;
            value: MsgDeregisterAsset;
        };
    };
    fromPartial: {
        registerAsset(value: MsgRegisterAsset): {
            typeUrl: string;
            value: MsgRegisterAsset;
        };
        deregisterAsset(value: MsgDeregisterAsset): {
            typeUrl: string;
            value: MsgDeregisterAsset;
        };
    };
};
