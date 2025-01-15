import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: MsgAuthorizeCircuitBreaker;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: MsgTripCircuitBreaker;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: MsgResetCircuitBreaker;
        };
    };
    fromPartial: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: MsgAuthorizeCircuitBreaker;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: MsgTripCircuitBreaker;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: MsgResetCircuitBreaker;
        };
    };
};
