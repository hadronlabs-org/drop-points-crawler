import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateService, MsgUpdateService, MsgActivateService, MsgDeactivateService, MsgDeleteService, MsgTransferServiceOwnership, MsgSetServiceParams, MsgUpdateParams, MsgAccreditService, MsgRevokeServiceAccreditation } from "./messages";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createService(value: MsgCreateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateService(value: MsgUpdateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        activateService(value: MsgActivateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        deactivateService(value: MsgDeactivateService): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteService(value: MsgDeleteService): {
            typeUrl: string;
            value: Uint8Array;
        };
        transferServiceOwnership(value: MsgTransferServiceOwnership): {
            typeUrl: string;
            value: Uint8Array;
        };
        setServiceParams(value: MsgSetServiceParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        accreditService(value: MsgAccreditService): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeServiceAccreditation(value: MsgRevokeServiceAccreditation): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createService(value: MsgCreateService): {
            typeUrl: string;
            value: MsgCreateService;
        };
        updateService(value: MsgUpdateService): {
            typeUrl: string;
            value: MsgUpdateService;
        };
        activateService(value: MsgActivateService): {
            typeUrl: string;
            value: MsgActivateService;
        };
        deactivateService(value: MsgDeactivateService): {
            typeUrl: string;
            value: MsgDeactivateService;
        };
        deleteService(value: MsgDeleteService): {
            typeUrl: string;
            value: MsgDeleteService;
        };
        transferServiceOwnership(value: MsgTransferServiceOwnership): {
            typeUrl: string;
            value: MsgTransferServiceOwnership;
        };
        setServiceParams(value: MsgSetServiceParams): {
            typeUrl: string;
            value: MsgSetServiceParams;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        accreditService(value: MsgAccreditService): {
            typeUrl: string;
            value: MsgAccreditService;
        };
        revokeServiceAccreditation(value: MsgRevokeServiceAccreditation): {
            typeUrl: string;
            value: MsgRevokeServiceAccreditation;
        };
    };
    fromPartial: {
        createService(value: MsgCreateService): {
            typeUrl: string;
            value: MsgCreateService;
        };
        updateService(value: MsgUpdateService): {
            typeUrl: string;
            value: MsgUpdateService;
        };
        activateService(value: MsgActivateService): {
            typeUrl: string;
            value: MsgActivateService;
        };
        deactivateService(value: MsgDeactivateService): {
            typeUrl: string;
            value: MsgDeactivateService;
        };
        deleteService(value: MsgDeleteService): {
            typeUrl: string;
            value: MsgDeleteService;
        };
        transferServiceOwnership(value: MsgTransferServiceOwnership): {
            typeUrl: string;
            value: MsgTransferServiceOwnership;
        };
        setServiceParams(value: MsgSetServiceParams): {
            typeUrl: string;
            value: MsgSetServiceParams;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        accreditService(value: MsgAccreditService): {
            typeUrl: string;
            value: MsgAccreditService;
        };
        revokeServiceAccreditation(value: MsgRevokeServiceAccreditation): {
            typeUrl: string;
            value: MsgRevokeServiceAccreditation;
        };
    };
};
