import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterOperator, MsgUpdateOperator, MsgDeactivateOperator, MsgReactivateOperator, MsgDeleteOperator, MsgTransferOperatorOwnership, MsgSetOperatorParams, MsgUpdateParams } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerOperator(value: MsgRegisterOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateOperator(value: MsgUpdateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        deactivateOperator(value: MsgDeactivateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        reactivateOperator(value: MsgReactivateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteOperator(value: MsgDeleteOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferOperatorOwnership(value: MsgTransferOperatorOwnership): {
            typeUrl: string;
            value: Uint8Array;
        };
        setOperatorParams(value: MsgSetOperatorParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerOperator(value: MsgRegisterOperator): {
            typeUrl: string;
            value: MsgRegisterOperator;
        };
        updateOperator(value: MsgUpdateOperator): {
            typeUrl: string;
            value: MsgUpdateOperator;
        };
        deactivateOperator(value: MsgDeactivateOperator): {
            typeUrl: string;
            value: MsgDeactivateOperator;
        };
        reactivateOperator(value: MsgReactivateOperator): {
            typeUrl: string;
            value: MsgReactivateOperator;
        };
        deleteOperator(value: MsgDeleteOperator): {
            typeUrl: string;
            value: MsgDeleteOperator;
        };
        transferOperatorOwnership(value: MsgTransferOperatorOwnership): {
            typeUrl: string;
            value: MsgTransferOperatorOwnership;
        };
        setOperatorParams(value: MsgSetOperatorParams): {
            typeUrl: string;
            value: MsgSetOperatorParams;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerOperator(value: MsgRegisterOperator): {
            typeUrl: string;
            value: MsgRegisterOperator;
        };
        updateOperator(value: MsgUpdateOperator): {
            typeUrl: string;
            value: MsgUpdateOperator;
        };
        deactivateOperator(value: MsgDeactivateOperator): {
            typeUrl: string;
            value: MsgDeactivateOperator;
        };
        reactivateOperator(value: MsgReactivateOperator): {
            typeUrl: string;
            value: MsgReactivateOperator;
        };
        deleteOperator(value: MsgDeleteOperator): {
            typeUrl: string;
            value: MsgDeleteOperator;
        };
        transferOperatorOwnership(value: MsgTransferOperatorOwnership): {
            typeUrl: string;
            value: MsgTransferOperatorOwnership;
        };
        setOperatorParams(value: MsgSetOperatorParams): {
            typeUrl: string;
            value: MsgSetOperatorParams;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
