import { TelescopeGeneratedType } from "../../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
};
