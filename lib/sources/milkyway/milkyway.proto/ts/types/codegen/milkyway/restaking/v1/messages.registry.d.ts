import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgJoinService, MsgLeaveService, MsgAddOperatorToAllowList, MsgRemoveOperatorFromAllowlist, MsgBorrowPoolSecurity, MsgCeasePoolSecurityBorrow, MsgDelegatePool, MsgDelegateOperator, MsgDelegateService, MsgUpdateParams, MsgUndelegatePool, MsgUndelegateOperator, MsgUndelegateService, MsgSetUserPreferences } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        joinService(value: MsgJoinService): {
            typeUrl: string;
            value: Uint8Array;
        };
        leaveService(value: MsgLeaveService): {
            typeUrl: string;
            value: Uint8Array;
        };
        addOperatorToAllowList(value: MsgAddOperatorToAllowList): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist): {
            typeUrl: string;
            value: Uint8Array;
        };
        borrowPoolSecurity(value: MsgBorrowPoolSecurity): {
            typeUrl: string;
            value: Uint8Array;
        };
        ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegatePool(value: MsgDelegatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateOperator(value: MsgDelegateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateService(value: MsgDelegateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegatePool(value: MsgUndelegatePool): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegateOperator(value: MsgUndelegateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegateService(value: MsgUndelegateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        setUserPreferences(value: MsgSetUserPreferences): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        joinService(value: MsgJoinService): {
            typeUrl: string;
            value: MsgJoinService;
        };
        leaveService(value: MsgLeaveService): {
            typeUrl: string;
            value: MsgLeaveService;
        };
        addOperatorToAllowList(value: MsgAddOperatorToAllowList): {
            typeUrl: string;
            value: MsgAddOperatorToAllowList;
        };
        removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist): {
            typeUrl: string;
            value: MsgRemoveOperatorFromAllowlist;
        };
        borrowPoolSecurity(value: MsgBorrowPoolSecurity): {
            typeUrl: string;
            value: MsgBorrowPoolSecurity;
        };
        ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow): {
            typeUrl: string;
            value: MsgCeasePoolSecurityBorrow;
        };
        delegatePool(value: MsgDelegatePool): {
            typeUrl: string;
            value: MsgDelegatePool;
        };
        delegateOperator(value: MsgDelegateOperator): {
            typeUrl: string;
            value: MsgDelegateOperator;
        };
        delegateService(value: MsgDelegateService): {
            typeUrl: string;
            value: MsgDelegateService;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        undelegatePool(value: MsgUndelegatePool): {
            typeUrl: string;
            value: MsgUndelegatePool;
        };
        undelegateOperator(value: MsgUndelegateOperator): {
            typeUrl: string;
            value: MsgUndelegateOperator;
        };
        undelegateService(value: MsgUndelegateService): {
            typeUrl: string;
            value: MsgUndelegateService;
        };
        setUserPreferences(value: MsgSetUserPreferences): {
            typeUrl: string;
            value: MsgSetUserPreferences;
        };
    };
    fromPartial: {
        joinService(value: MsgJoinService): {
            typeUrl: string;
            value: MsgJoinService;
        };
        leaveService(value: MsgLeaveService): {
            typeUrl: string;
            value: MsgLeaveService;
        };
        addOperatorToAllowList(value: MsgAddOperatorToAllowList): {
            typeUrl: string;
            value: MsgAddOperatorToAllowList;
        };
        removeOperatorFromAllowlist(value: MsgRemoveOperatorFromAllowlist): {
            typeUrl: string;
            value: MsgRemoveOperatorFromAllowlist;
        };
        borrowPoolSecurity(value: MsgBorrowPoolSecurity): {
            typeUrl: string;
            value: MsgBorrowPoolSecurity;
        };
        ceasePoolSecurityBorrow(value: MsgCeasePoolSecurityBorrow): {
            typeUrl: string;
            value: MsgCeasePoolSecurityBorrow;
        };
        delegatePool(value: MsgDelegatePool): {
            typeUrl: string;
            value: MsgDelegatePool;
        };
        delegateOperator(value: MsgDelegateOperator): {
            typeUrl: string;
            value: MsgDelegateOperator;
        };
        delegateService(value: MsgDelegateService): {
            typeUrl: string;
            value: MsgDelegateService;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        undelegatePool(value: MsgUndelegatePool): {
            typeUrl: string;
            value: MsgUndelegatePool;
        };
        undelegateOperator(value: MsgUndelegateOperator): {
            typeUrl: string;
            value: MsgUndelegateOperator;
        };
        undelegateService(value: MsgUndelegateService): {
            typeUrl: string;
            value: MsgUndelegateService;
        };
        setUserPreferences(value: MsgSetUserPreferences): {
            typeUrl: string;
            value: MsgSetUserPreferences;
        };
    };
};
