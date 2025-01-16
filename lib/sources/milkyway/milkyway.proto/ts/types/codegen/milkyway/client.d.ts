import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const milkywayAminoConverters: {
    "/milkyway.services.v1.MsgCreateService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgCreateService) => import("./services/v1/messages").MsgCreateServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgCreateServiceAmino) => import("./services/v1/messages").MsgCreateService;
    };
    "/milkyway.services.v1.MsgUpdateService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgUpdateService) => import("./services/v1/messages").MsgUpdateServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgUpdateServiceAmino) => import("./services/v1/messages").MsgUpdateService;
    };
    "/milkyway.services.v1.MsgActivateService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgActivateService) => import("./services/v1/messages").MsgActivateServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgActivateServiceAmino) => import("./services/v1/messages").MsgActivateService;
    };
    "/milkyway.services.v1.MsgDeactivateService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgDeactivateService) => import("./services/v1/messages").MsgDeactivateServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgDeactivateServiceAmino) => import("./services/v1/messages").MsgDeactivateService;
    };
    "/milkyway.services.v1.MsgDeleteService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgDeleteService) => import("./services/v1/messages").MsgDeleteServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgDeleteServiceAmino) => import("./services/v1/messages").MsgDeleteService;
    };
    "/milkyway.services.v1.MsgTransferServiceOwnership": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgTransferServiceOwnership) => import("./services/v1/messages").MsgTransferServiceOwnershipAmino;
        fromAmino: (object: import("./services/v1/messages").MsgTransferServiceOwnershipAmino) => import("./services/v1/messages").MsgTransferServiceOwnership;
    };
    "/milkyway.services.v1.MsgSetServiceParams": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgSetServiceParams) => import("./services/v1/messages").MsgSetServiceParamsAmino;
        fromAmino: (object: import("./services/v1/messages").MsgSetServiceParamsAmino) => import("./services/v1/messages").MsgSetServiceParams;
    };
    "/milkyway.services.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgUpdateParams) => import("./services/v1/messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./services/v1/messages").MsgUpdateParamsAmino) => import("./services/v1/messages").MsgUpdateParams;
    };
    "/milkyway.services.v1.MsgAccreditService": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgAccreditService) => import("./services/v1/messages").MsgAccreditServiceAmino;
        fromAmino: (object: import("./services/v1/messages").MsgAccreditServiceAmino) => import("./services/v1/messages").MsgAccreditService;
    };
    "/milkyway.services.v1.MsgRevokeServiceAccreditation": {
        aminoType: string;
        toAmino: (message: import("./services/v1/messages").MsgRevokeServiceAccreditation) => import("./services/v1/messages").MsgRevokeServiceAccreditationAmino;
        fromAmino: (object: import("./services/v1/messages").MsgRevokeServiceAccreditationAmino) => import("./services/v1/messages").MsgRevokeServiceAccreditation;
    };
    "/milkyway.rewards.v1.MsgCreateRewardsPlan": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgCreateRewardsPlan) => import("./rewards/v1/messages").MsgCreateRewardsPlanAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgCreateRewardsPlanAmino) => import("./rewards/v1/messages").MsgCreateRewardsPlan;
    };
    "/milkyway.rewards.v1.MsgEditRewardsPlan": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgEditRewardsPlan) => import("./rewards/v1/messages").MsgEditRewardsPlanAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgEditRewardsPlanAmino) => import("./rewards/v1/messages").MsgEditRewardsPlan;
    };
    "/milkyway.rewards.v1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgSetWithdrawAddress) => import("./rewards/v1/messages").MsgSetWithdrawAddressAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgSetWithdrawAddressAmino) => import("./rewards/v1/messages").MsgSetWithdrawAddress;
    };
    "/milkyway.rewards.v1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgWithdrawDelegatorReward) => import("./rewards/v1/messages").MsgWithdrawDelegatorRewardAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgWithdrawDelegatorRewardAmino) => import("./rewards/v1/messages").MsgWithdrawDelegatorReward;
    };
    "/milkyway.rewards.v1.MsgWithdrawOperatorCommission": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgWithdrawOperatorCommission) => import("./rewards/v1/messages").MsgWithdrawOperatorCommissionAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgWithdrawOperatorCommissionAmino) => import("./rewards/v1/messages").MsgWithdrawOperatorCommission;
    };
    "/milkyway.rewards.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./rewards/v1/messages").MsgUpdateParams) => import("./rewards/v1/messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./rewards/v1/messages").MsgUpdateParamsAmino) => import("./rewards/v1/messages").MsgUpdateParams;
    };
    "/milkyway.restaking.v1.MsgJoinService": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgJoinService) => import("./restaking/v1/messages").MsgJoinServiceAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgJoinServiceAmino) => import("./restaking/v1/messages").MsgJoinService;
    };
    "/milkyway.restaking.v1.MsgLeaveService": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgLeaveService) => import("./restaking/v1/messages").MsgLeaveServiceAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgLeaveServiceAmino) => import("./restaking/v1/messages").MsgLeaveService;
    };
    "/milkyway.restaking.v1.MsgAddOperatorToAllowList": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgAddOperatorToAllowList) => import("./restaking/v1/messages").MsgAddOperatorToAllowListAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgAddOperatorToAllowListAmino) => import("./restaking/v1/messages").MsgAddOperatorToAllowList;
    };
    "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgRemoveOperatorFromAllowlist) => import("./restaking/v1/messages").MsgRemoveOperatorFromAllowlistAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgRemoveOperatorFromAllowlistAmino) => import("./restaking/v1/messages").MsgRemoveOperatorFromAllowlist;
    };
    "/milkyway.restaking.v1.MsgBorrowPoolSecurity": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgBorrowPoolSecurity) => import("./restaking/v1/messages").MsgBorrowPoolSecurityAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgBorrowPoolSecurityAmino) => import("./restaking/v1/messages").MsgBorrowPoolSecurity;
    };
    "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgCeasePoolSecurityBorrow) => import("./restaking/v1/messages").MsgCeasePoolSecurityBorrowAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgCeasePoolSecurityBorrowAmino) => import("./restaking/v1/messages").MsgCeasePoolSecurityBorrow;
    };
    "/milkyway.restaking.v1.MsgDelegatePool": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgDelegatePool) => import("./restaking/v1/messages").MsgDelegatePoolAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgDelegatePoolAmino) => import("./restaking/v1/messages").MsgDelegatePool;
    };
    "/milkyway.restaking.v1.MsgDelegateOperator": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgDelegateOperator) => import("./restaking/v1/messages").MsgDelegateOperatorAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgDelegateOperatorAmino) => import("./restaking/v1/messages").MsgDelegateOperator;
    };
    "/milkyway.restaking.v1.MsgDelegateService": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgDelegateService) => import("./restaking/v1/messages").MsgDelegateServiceAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgDelegateServiceAmino) => import("./restaking/v1/messages").MsgDelegateService;
    };
    "/milkyway.restaking.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgUpdateParams) => import("./restaking/v1/messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgUpdateParamsAmino) => import("./restaking/v1/messages").MsgUpdateParams;
    };
    "/milkyway.restaking.v1.MsgUndelegatePool": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgUndelegatePool) => import("./restaking/v1/messages").MsgUndelegatePoolAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgUndelegatePoolAmino) => import("./restaking/v1/messages").MsgUndelegatePool;
    };
    "/milkyway.restaking.v1.MsgUndelegateOperator": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgUndelegateOperator) => import("./restaking/v1/messages").MsgUndelegateOperatorAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgUndelegateOperatorAmino) => import("./restaking/v1/messages").MsgUndelegateOperator;
    };
    "/milkyway.restaking.v1.MsgUndelegateService": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgUndelegateService) => import("./restaking/v1/messages").MsgUndelegateServiceAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgUndelegateServiceAmino) => import("./restaking/v1/messages").MsgUndelegateService;
    };
    "/milkyway.restaking.v1.MsgSetUserPreferences": {
        aminoType: string;
        toAmino: (message: import("./restaking/v1/messages").MsgSetUserPreferences) => import("./restaking/v1/messages").MsgSetUserPreferencesAmino;
        fromAmino: (object: import("./restaking/v1/messages").MsgSetUserPreferencesAmino) => import("./restaking/v1/messages").MsgSetUserPreferences;
    };
    "/milkyway.operators.v1.MsgRegisterOperator": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgRegisterOperator) => import("./operators/v1/messages").MsgRegisterOperatorAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgRegisterOperatorAmino) => import("./operators/v1/messages").MsgRegisterOperator;
    };
    "/milkyway.operators.v1.MsgUpdateOperator": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgUpdateOperator) => import("./operators/v1/messages").MsgUpdateOperatorAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgUpdateOperatorAmino) => import("./operators/v1/messages").MsgUpdateOperator;
    };
    "/milkyway.operators.v1.MsgDeactivateOperator": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgDeactivateOperator) => import("./operators/v1/messages").MsgDeactivateOperatorAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgDeactivateOperatorAmino) => import("./operators/v1/messages").MsgDeactivateOperator;
    };
    "/milkyway.operators.v1.MsgReactivateOperator": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgReactivateOperator) => import("./operators/v1/messages").MsgReactivateOperatorAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgReactivateOperatorAmino) => import("./operators/v1/messages").MsgReactivateOperator;
    };
    "/milkyway.operators.v1.MsgDeleteOperator": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgDeleteOperator) => import("./operators/v1/messages").MsgDeleteOperatorAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgDeleteOperatorAmino) => import("./operators/v1/messages").MsgDeleteOperator;
    };
    "/milkyway.operators.v1.MsgTransferOperatorOwnership": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgTransferOperatorOwnership) => import("./operators/v1/messages").MsgTransferOperatorOwnershipAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgTransferOperatorOwnershipAmino) => import("./operators/v1/messages").MsgTransferOperatorOwnership;
    };
    "/milkyway.operators.v1.MsgSetOperatorParams": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgSetOperatorParams) => import("./operators/v1/messages").MsgSetOperatorParamsAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgSetOperatorParamsAmino) => import("./operators/v1/messages").MsgSetOperatorParams;
    };
    "/milkyway.operators.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./operators/v1/messages").MsgUpdateParams) => import("./operators/v1/messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./operators/v1/messages").MsgUpdateParamsAmino) => import("./operators/v1/messages").MsgUpdateParams;
    };
    "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation": {
        aminoType: string;
        toAmino: (message: import("./liquidvesting/v1/messages").MsgMintLockedRepresentation) => import("./liquidvesting/v1/messages").MsgMintLockedRepresentationAmino;
        fromAmino: (object: import("./liquidvesting/v1/messages").MsgMintLockedRepresentationAmino) => import("./liquidvesting/v1/messages").MsgMintLockedRepresentation;
    };
    "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation": {
        aminoType: string;
        toAmino: (message: import("./liquidvesting/v1/messages").MsgBurnLockedRepresentation) => import("./liquidvesting/v1/messages").MsgBurnLockedRepresentationAmino;
        fromAmino: (object: import("./liquidvesting/v1/messages").MsgBurnLockedRepresentationAmino) => import("./liquidvesting/v1/messages").MsgBurnLockedRepresentation;
    };
    "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund": {
        aminoType: string;
        toAmino: (message: import("./liquidvesting/v1/messages").MsgWithdrawInsuranceFund) => import("./liquidvesting/v1/messages").MsgWithdrawInsuranceFundAmino;
        fromAmino: (object: import("./liquidvesting/v1/messages").MsgWithdrawInsuranceFundAmino) => import("./liquidvesting/v1/messages").MsgWithdrawInsuranceFund;
    };
    "/milkyway.liquidvesting.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./liquidvesting/v1/messages").MsgUpdateParams) => import("./liquidvesting/v1/messages").MsgUpdateParamsAmino;
        fromAmino: (object: import("./liquidvesting/v1/messages").MsgUpdateParamsAmino) => import("./liquidvesting/v1/messages").MsgUpdateParams;
    };
    "/milkyway.assets.v1.MsgRegisterAsset": {
        aminoType: string;
        toAmino: (message: import("./assets/v1/messages").MsgRegisterAsset) => import("./assets/v1/messages").MsgRegisterAssetAmino;
        fromAmino: (object: import("./assets/v1/messages").MsgRegisterAssetAmino) => import("./assets/v1/messages").MsgRegisterAsset;
    };
    "/milkyway.assets.v1.MsgDeregisterAsset": {
        aminoType: string;
        toAmino: (message: import("./assets/v1/messages").MsgDeregisterAsset) => import("./assets/v1/messages").MsgDeregisterAssetAmino;
        fromAmino: (object: import("./assets/v1/messages").MsgDeregisterAssetAmino) => import("./assets/v1/messages").MsgDeregisterAsset;
    };
};
export declare const milkywayProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningMilkywayClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningMilkywayClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
