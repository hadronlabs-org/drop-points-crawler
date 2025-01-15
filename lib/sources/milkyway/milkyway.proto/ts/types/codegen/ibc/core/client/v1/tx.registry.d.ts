import { TelescopeGeneratedType } from "../../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: Uint8Array;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: MsgRecoverClient;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: MsgIBCSoftwareUpgrade;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createClient(value: MsgCreateClient): {
            typeUrl: string;
            value: MsgCreateClient;
        };
        updateClient(value: MsgUpdateClient): {
            typeUrl: string;
            value: MsgUpdateClient;
        };
        upgradeClient(value: MsgUpgradeClient): {
            typeUrl: string;
            value: MsgUpgradeClient;
        };
        submitMisbehaviour(value: MsgSubmitMisbehaviour): {
            typeUrl: string;
            value: MsgSubmitMisbehaviour;
        };
        recoverClient(value: MsgRecoverClient): {
            typeUrl: string;
            value: MsgRecoverClient;
        };
        iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade): {
            typeUrl: string;
            value: MsgIBCSoftwareUpgrade;
        };
        updateClientParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
