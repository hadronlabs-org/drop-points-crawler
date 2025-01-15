import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgMintLockedRepresentation, MsgBurnLockedRepresentation, MsgWithdrawInsuranceFund, MsgUpdateParams } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        mintLockedRepresentation(value: MsgMintLockedRepresentation): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnLockedRepresentation(value: MsgBurnLockedRepresentation): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawInsuranceFund(value: MsgWithdrawInsuranceFund): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        mintLockedRepresentation(value: MsgMintLockedRepresentation): {
            typeUrl: string;
            value: MsgMintLockedRepresentation;
        };
        burnLockedRepresentation(value: MsgBurnLockedRepresentation): {
            typeUrl: string;
            value: MsgBurnLockedRepresentation;
        };
        withdrawInsuranceFund(value: MsgWithdrawInsuranceFund): {
            typeUrl: string;
            value: MsgWithdrawInsuranceFund;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        mintLockedRepresentation(value: MsgMintLockedRepresentation): {
            typeUrl: string;
            value: MsgMintLockedRepresentation;
        };
        burnLockedRepresentation(value: MsgBurnLockedRepresentation): {
            typeUrl: string;
            value: MsgBurnLockedRepresentation;
        };
        withdrawInsuranceFund(value: MsgWithdrawInsuranceFund): {
            typeUrl: string;
            value: MsgWithdrawInsuranceFund;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
