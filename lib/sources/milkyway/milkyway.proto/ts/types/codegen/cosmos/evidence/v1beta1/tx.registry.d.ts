import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitEvidence } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitEvidence(value: MsgSubmitEvidence): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitEvidence(value: MsgSubmitEvidence): {
            typeUrl: string;
            value: MsgSubmitEvidence;
        };
    };
    fromPartial: {
        submitEvidence(value: MsgSubmitEvidence): {
            typeUrl: string;
            value: MsgSubmitEvidence;
        };
    };
};
