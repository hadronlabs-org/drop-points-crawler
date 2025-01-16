import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: Uint8Array;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
    fromPartial: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
};
