import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: import("./lightclients/wasm/v1/tx").MsgStoreCode) => import("./lightclients/wasm/v1/tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./lightclients/wasm/v1/tx").MsgStoreCodeAmino) => import("./lightclients/wasm/v1/tx").MsgStoreCode;
    };
    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
        aminoType: string;
        toAmino: (message: import("./lightclients/wasm/v1/tx").MsgRemoveChecksum) => import("./lightclients/wasm/v1/tx").MsgRemoveChecksumAmino;
        fromAmino: (object: import("./lightclients/wasm/v1/tx").MsgRemoveChecksumAmino) => import("./lightclients/wasm/v1/tx").MsgRemoveChecksum;
    };
    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: import("./lightclients/wasm/v1/tx").MsgMigrateContract) => import("./lightclients/wasm/v1/tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./lightclients/wasm/v1/tx").MsgMigrateContractAmino) => import("./lightclients/wasm/v1/tx").MsgMigrateContract;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenInit) => import("./core/connection/v1/tx").MsgConnectionOpenInitAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenInitAmino) => import("./core/connection/v1/tx").MsgConnectionOpenInit;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenTry) => import("./core/connection/v1/tx").MsgConnectionOpenTryAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenTryAmino) => import("./core/connection/v1/tx").MsgConnectionOpenTry;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenAck) => import("./core/connection/v1/tx").MsgConnectionOpenAckAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenAckAmino) => import("./core/connection/v1/tx").MsgConnectionOpenAck;
    };
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgConnectionOpenConfirm) => import("./core/connection/v1/tx").MsgConnectionOpenConfirmAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgConnectionOpenConfirmAmino) => import("./core/connection/v1/tx").MsgConnectionOpenConfirm;
    };
    "/ibc.core.connection.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./core/connection/v1/tx").MsgUpdateParams) => import("./core/connection/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./core/connection/v1/tx").MsgUpdateParamsAmino) => import("./core/connection/v1/tx").MsgUpdateParams;
    };
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgCreateClient) => import("./core/client/v1/tx").MsgCreateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgCreateClientAmino) => import("./core/client/v1/tx").MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpdateClient) => import("./core/client/v1/tx").MsgUpdateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpdateClientAmino) => import("./core/client/v1/tx").MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpgradeClient) => import("./core/client/v1/tx").MsgUpgradeClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpgradeClientAmino) => import("./core/client/v1/tx").MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgSubmitMisbehaviour) => import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino) => import("./core/client/v1/tx").MsgSubmitMisbehaviour;
    };
    "/ibc.core.client.v1.MsgRecoverClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgRecoverClient) => import("./core/client/v1/tx").MsgRecoverClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgRecoverClientAmino) => import("./core/client/v1/tx").MsgRecoverClient;
    };
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgIBCSoftwareUpgrade) => import("./core/client/v1/tx").MsgIBCSoftwareUpgradeAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgIBCSoftwareUpgradeAmino) => import("./core/client/v1/tx").MsgIBCSoftwareUpgrade;
    };
    "/ibc.core.client.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpdateParams) => import("./core/client/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpdateParamsAmino) => import("./core/client/v1/tx").MsgUpdateParams;
    };
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenInit) => import("./core/channel/v1/tx").MsgChannelOpenInitAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenInitAmino) => import("./core/channel/v1/tx").MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenTry) => import("./core/channel/v1/tx").MsgChannelOpenTryAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenTryAmino) => import("./core/channel/v1/tx").MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenAck) => import("./core/channel/v1/tx").MsgChannelOpenAckAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenAckAmino) => import("./core/channel/v1/tx").MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelOpenConfirm) => import("./core/channel/v1/tx").MsgChannelOpenConfirmAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelOpenConfirmAmino) => import("./core/channel/v1/tx").MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelCloseInit) => import("./core/channel/v1/tx").MsgChannelCloseInitAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelCloseInitAmino) => import("./core/channel/v1/tx").MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelCloseConfirm) => import("./core/channel/v1/tx").MsgChannelCloseConfirmAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelCloseConfirmAmino) => import("./core/channel/v1/tx").MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgRecvPacket) => import("./core/channel/v1/tx").MsgRecvPacketAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgRecvPacketAmino) => import("./core/channel/v1/tx").MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgTimeout) => import("./core/channel/v1/tx").MsgTimeoutAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgTimeoutAmino) => import("./core/channel/v1/tx").MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgTimeoutOnClose) => import("./core/channel/v1/tx").MsgTimeoutOnCloseAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgTimeoutOnCloseAmino) => import("./core/channel/v1/tx").MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgAcknowledgement) => import("./core/channel/v1/tx").MsgAcknowledgementAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgAcknowledgementAmino) => import("./core/channel/v1/tx").MsgAcknowledgement;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeInit) => import("./core/channel/v1/tx").MsgChannelUpgradeInitAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeInitAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeInit;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeTry) => import("./core/channel/v1/tx").MsgChannelUpgradeTryAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeTryAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeTry;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeAck) => import("./core/channel/v1/tx").MsgChannelUpgradeAckAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeAckAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeAck;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeConfirm) => import("./core/channel/v1/tx").MsgChannelUpgradeConfirmAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeConfirmAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeOpen) => import("./core/channel/v1/tx").MsgChannelUpgradeOpenAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeOpenAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeOpen;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeTimeout) => import("./core/channel/v1/tx").MsgChannelUpgradeTimeoutAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeTimeoutAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeTimeout;
    };
    "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgChannelUpgradeCancel) => import("./core/channel/v1/tx").MsgChannelUpgradeCancelAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgChannelUpgradeCancelAmino) => import("./core/channel/v1/tx").MsgChannelUpgradeCancel;
    };
    "/ibc.core.channel.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgUpdateParams) => import("./core/channel/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgUpdateParamsAmino) => import("./core/channel/v1/tx").MsgUpdateParams;
    };
    "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
        aminoType: string;
        toAmino: (message: import("./core/channel/v1/tx").MsgPruneAcknowledgements) => import("./core/channel/v1/tx").MsgPruneAcknowledgementsAmino;
        fromAmino: (object: import("./core/channel/v1/tx").MsgPruneAcknowledgementsAmino) => import("./core/channel/v1/tx").MsgPruneAcknowledgements;
    };
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("./applications/transfer/v1/tx").MsgTransfer) => import("./applications/transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("./applications/transfer/v1/tx").MsgTransferAmino) => import("./applications/transfer/v1/tx").MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./applications/transfer/v1/tx").MsgUpdateParams) => import("./applications/transfer/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./applications/transfer/v1/tx").MsgUpdateParamsAmino) => import("./applications/transfer/v1/tx").MsgUpdateParams;
    };
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./applications/interchain_accounts/host/v1/tx").MsgUpdateParams) => import("./applications/interchain_accounts/host/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./applications/interchain_accounts/host/v1/tx").MsgUpdateParamsAmino) => import("./applications/interchain_accounts/host/v1/tx").MsgUpdateParams;
    };
    "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
        aminoType: string;
        toAmino: (message: import("./applications/interchain_accounts/host/v1/tx").MsgModuleQuerySafe) => import("./applications/interchain_accounts/host/v1/tx").MsgModuleQuerySafeAmino;
        fromAmino: (object: import("./applications/interchain_accounts/host/v1/tx").MsgModuleQuerySafeAmino) => import("./applications/interchain_accounts/host/v1/tx").MsgModuleQuerySafe;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: (message: import("./applications/interchain_accounts/controller/v1/tx").MsgRegisterInterchainAccount) => import("./applications/interchain_accounts/controller/v1/tx").MsgRegisterInterchainAccountAmino;
        fromAmino: (object: import("./applications/interchain_accounts/controller/v1/tx").MsgRegisterInterchainAccountAmino) => import("./applications/interchain_accounts/controller/v1/tx").MsgRegisterInterchainAccount;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: string;
        toAmino: (message: import("./applications/interchain_accounts/controller/v1/tx").MsgSendTx) => import("./applications/interchain_accounts/controller/v1/tx").MsgSendTxAmino;
        fromAmino: (object: import("./applications/interchain_accounts/controller/v1/tx").MsgSendTxAmino) => import("./applications/interchain_accounts/controller/v1/tx").MsgSendTx;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./applications/interchain_accounts/controller/v1/tx").MsgUpdateParams) => import("./applications/interchain_accounts/controller/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./applications/interchain_accounts/controller/v1/tx").MsgUpdateParamsAmino) => import("./applications/interchain_accounts/controller/v1/tx").MsgUpdateParams;
    };
    "/ibc.applications.fee.v1.MsgRegisterPayee": {
        aminoType: string;
        toAmino: (message: import("./applications/fee/v1/tx").MsgRegisterPayee) => import("./applications/fee/v1/tx").MsgRegisterPayeeAmino;
        fromAmino: (object: import("./applications/fee/v1/tx").MsgRegisterPayeeAmino) => import("./applications/fee/v1/tx").MsgRegisterPayee;
    };
    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
        aminoType: string;
        toAmino: (message: import("./applications/fee/v1/tx").MsgRegisterCounterpartyPayee) => import("./applications/fee/v1/tx").MsgRegisterCounterpartyPayeeAmino;
        fromAmino: (object: import("./applications/fee/v1/tx").MsgRegisterCounterpartyPayeeAmino) => import("./applications/fee/v1/tx").MsgRegisterCounterpartyPayee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFee": {
        aminoType: string;
        toAmino: (message: import("./applications/fee/v1/tx").MsgPayPacketFee) => import("./applications/fee/v1/tx").MsgPayPacketFeeAmino;
        fromAmino: (object: import("./applications/fee/v1/tx").MsgPayPacketFeeAmino) => import("./applications/fee/v1/tx").MsgPayPacketFee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
        aminoType: string;
        toAmino: (message: import("./applications/fee/v1/tx").MsgPayPacketFeeAsync) => import("./applications/fee/v1/tx").MsgPayPacketFeeAsyncAmino;
        fromAmino: (object: import("./applications/fee/v1/tx").MsgPayPacketFeeAsyncAmino) => import("./applications/fee/v1/tx").MsgPayPacketFeeAsync;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
