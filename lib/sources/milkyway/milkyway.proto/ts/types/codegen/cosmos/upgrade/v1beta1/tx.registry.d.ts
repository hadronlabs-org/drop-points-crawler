import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: MsgSoftwareUpgrade;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: MsgCancelUpgrade;
        };
    };
    fromPartial: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: MsgSoftwareUpgrade;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: MsgCancelUpgrade;
        };
    };
};
