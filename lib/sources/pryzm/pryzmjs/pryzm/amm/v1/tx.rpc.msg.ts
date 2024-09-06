import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSingleSwap, MsgSingleSwapResponse, MsgJoinAllTokensExactLpt, MsgJoinAllTokensExactLptResponse, MsgJoinTokenExactLpt, MsgJoinTokenExactLptResponse, MsgJoinExactTokens, MsgJoinExactTokensResponse, MsgZeroImpactJoinYamm, MsgZeroImpactJoinYammResponse, MsgExitExactTokens, MsgExitExactTokensResponse, MsgExitTokenExactLpt, MsgExitTokenExactLptResponse, MsgExitAllTokensExactLpt, MsgExitAllTokensExactLptResponse, MsgCreateWeightedPool, MsgCreateWeightedPoolResponse, MsgUpdateSwapFee, MsgUpdateSwapFeeResponse, MsgInitializePool, MsgInitializePoolResponse, MsgUpdateWeights, MsgUpdateWeightsResponse, MsgBatchSwap, MsgBatchSwapResponse, MsgSetYammConfiguration, MsgSetYammConfigurationResponse, MsgWhitelistRoute, MsgWhitelistRouteResponse, MsgSetWhitelistedRouteEnabled, MsgSetWhitelistedRouteEnabledResponse, MsgSubmitOrder, MsgSubmitOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgProposeMatch, MsgProposeMatchResponse, MsgSetCircuitBreakers, MsgSetCircuitBreakersResponse, MsgSetRecoveryMode, MsgSetRecoveryModeResponse, MsgRecoveryExit, MsgRecoveryExitResponse, MsgSetPauseMode, MsgSetPauseModeResponse, MsgSetVaultPauseMode, MsgSetVaultPauseModeResponse, MsgCreateOraclePricePair, MsgCreateOraclePricePairResponse, MsgUpdateOraclePricePair, MsgUpdateOraclePricePairResponse, MsgDeleteOraclePricePair, MsgDeleteOraclePricePairResponse, MsgSetSwapProtocolFee, MsgSetSwapProtocolFeeResponse, MsgSetJoinExitProtocolFee, MsgSetJoinExitProtocolFeeResponse, MsgIntroduceYammLpToWeightedPool, MsgIntroduceYammLpToWeightedPoolResponse, MsgIntroduceAssetBaseTokenToWeightedPool, MsgIntroduceAssetBaseTokenToWeightedPoolResponse, MsgCancelPendingTokenIntroduction, MsgCancelPendingTokenIntroductionResponse, MsgRemoveTokenFromWeightedPool, MsgRemoveTokenFromWeightedPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgAddMaturityToYamm, MsgAddMaturityToYammResponse, MsgSetInitializationAllowList, MsgSetInitializationAllowListResponse, MsgSetPoolAdmins, MsgSetPoolAdminsResponse, MsgSetPauseAllowList, MsgSetPauseAllowListResponse, MsgSetPauseWindow, MsgSetPauseWindowResponse, MsgSetOrderPairDisabled, MsgSetOrderPairDisabledResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  singleSwap(request: DeepPartial<MsgSingleSwap>, metadata?: grpc.Metadata): Promise<MsgSingleSwapResponse>;
  joinAllTokensExactLpt(request: DeepPartial<MsgJoinAllTokensExactLpt>, metadata?: grpc.Metadata): Promise<MsgJoinAllTokensExactLptResponse>;
  joinTokenExactLpt(request: DeepPartial<MsgJoinTokenExactLpt>, metadata?: grpc.Metadata): Promise<MsgJoinTokenExactLptResponse>;
  joinExactTokens(request: DeepPartial<MsgJoinExactTokens>, metadata?: grpc.Metadata): Promise<MsgJoinExactTokensResponse>;
  zeroImpactJoinYamm(request: DeepPartial<MsgZeroImpactJoinYamm>, metadata?: grpc.Metadata): Promise<MsgZeroImpactJoinYammResponse>;
  exitExactTokens(request: DeepPartial<MsgExitExactTokens>, metadata?: grpc.Metadata): Promise<MsgExitExactTokensResponse>;
  exitTokenExactLpt(request: DeepPartial<MsgExitTokenExactLpt>, metadata?: grpc.Metadata): Promise<MsgExitTokenExactLptResponse>;
  exitAllTokensExactLpt(request: DeepPartial<MsgExitAllTokensExactLpt>, metadata?: grpc.Metadata): Promise<MsgExitAllTokensExactLptResponse>;
  createWeightedPool(request: DeepPartial<MsgCreateWeightedPool>, metadata?: grpc.Metadata): Promise<MsgCreateWeightedPoolResponse>;
  updateSwapFee(request: DeepPartial<MsgUpdateSwapFee>, metadata?: grpc.Metadata): Promise<MsgUpdateSwapFeeResponse>;
  initializePool(request: DeepPartial<MsgInitializePool>, metadata?: grpc.Metadata): Promise<MsgInitializePoolResponse>;
  updateWeights(request: DeepPartial<MsgUpdateWeights>, metadata?: grpc.Metadata): Promise<MsgUpdateWeightsResponse>;
  batchSwap(request: DeepPartial<MsgBatchSwap>, metadata?: grpc.Metadata): Promise<MsgBatchSwapResponse>;
  setYammConfiguration(request: DeepPartial<MsgSetYammConfiguration>, metadata?: grpc.Metadata): Promise<MsgSetYammConfigurationResponse>;
  whitelistRoute(request: DeepPartial<MsgWhitelistRoute>, metadata?: grpc.Metadata): Promise<MsgWhitelistRouteResponse>;
  setWhitelistedRouteEnabled(request: DeepPartial<MsgSetWhitelistedRouteEnabled>, metadata?: grpc.Metadata): Promise<MsgSetWhitelistedRouteEnabledResponse>;
  submitOrder(request: DeepPartial<MsgSubmitOrder>, metadata?: grpc.Metadata): Promise<MsgSubmitOrderResponse>;
  cancelOrder(request: DeepPartial<MsgCancelOrder>, metadata?: grpc.Metadata): Promise<MsgCancelOrderResponse>;
  proposeMatch(request: DeepPartial<MsgProposeMatch>, metadata?: grpc.Metadata): Promise<MsgProposeMatchResponse>;
  setCircuitBreakers(request: DeepPartial<MsgSetCircuitBreakers>, metadata?: grpc.Metadata): Promise<MsgSetCircuitBreakersResponse>;
  setRecoveryMode(request: DeepPartial<MsgSetRecoveryMode>, metadata?: grpc.Metadata): Promise<MsgSetRecoveryModeResponse>;
  recoveryExit(request: DeepPartial<MsgRecoveryExit>, metadata?: grpc.Metadata): Promise<MsgRecoveryExitResponse>;
  setPauseMode(request: DeepPartial<MsgSetPauseMode>, metadata?: grpc.Metadata): Promise<MsgSetPauseModeResponse>;
  setVaultPauseMode(request: DeepPartial<MsgSetVaultPauseMode>, metadata?: grpc.Metadata): Promise<MsgSetVaultPauseModeResponse>;
  createOraclePricePair(request: DeepPartial<MsgCreateOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgCreateOraclePricePairResponse>;
  updateOraclePricePair(request: DeepPartial<MsgUpdateOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgUpdateOraclePricePairResponse>;
  deleteOraclePricePair(request: DeepPartial<MsgDeleteOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgDeleteOraclePricePairResponse>;
  setSwapProtocolFee(request: DeepPartial<MsgSetSwapProtocolFee>, metadata?: grpc.Metadata): Promise<MsgSetSwapProtocolFeeResponse>;
  setJoinExitProtocolFee(request: DeepPartial<MsgSetJoinExitProtocolFee>, metadata?: grpc.Metadata): Promise<MsgSetJoinExitProtocolFeeResponse>;
  introduceYammLpToWeightedPool(request: DeepPartial<MsgIntroduceYammLpToWeightedPool>, metadata?: grpc.Metadata): Promise<MsgIntroduceYammLpToWeightedPoolResponse>;
  introduceAssetBaseTokenToWeightedPool(request: DeepPartial<MsgIntroduceAssetBaseTokenToWeightedPool>, metadata?: grpc.Metadata): Promise<MsgIntroduceAssetBaseTokenToWeightedPoolResponse>;
  cancelPendingTokenIntroduction(request: DeepPartial<MsgCancelPendingTokenIntroduction>, metadata?: grpc.Metadata): Promise<MsgCancelPendingTokenIntroductionResponse>;
  removeTokenFromWeightedPool(request: DeepPartial<MsgRemoveTokenFromWeightedPool>, metadata?: grpc.Metadata): Promise<MsgRemoveTokenFromWeightedPoolResponse>;
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse>;
  addMaturityToYamm(request: DeepPartial<MsgAddMaturityToYamm>, metadata?: grpc.Metadata): Promise<MsgAddMaturityToYammResponse>;
  setInitializationAllowList(request: DeepPartial<MsgSetInitializationAllowList>, metadata?: grpc.Metadata): Promise<MsgSetInitializationAllowListResponse>;
  setPoolAdmins(request: DeepPartial<MsgSetPoolAdmins>, metadata?: grpc.Metadata): Promise<MsgSetPoolAdminsResponse>;
  setPauseAllowList(request: DeepPartial<MsgSetPauseAllowList>, metadata?: grpc.Metadata): Promise<MsgSetPauseAllowListResponse>;
  setPauseWindow(request: DeepPartial<MsgSetPauseWindow>, metadata?: grpc.Metadata): Promise<MsgSetPauseWindowResponse>;
  setOrderPairDisabled(request: DeepPartial<MsgSetOrderPairDisabled>, metadata?: grpc.Metadata): Promise<MsgSetOrderPairDisabledResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.singleSwap = this.singleSwap.bind(this);
    this.joinAllTokensExactLpt = this.joinAllTokensExactLpt.bind(this);
    this.joinTokenExactLpt = this.joinTokenExactLpt.bind(this);
    this.joinExactTokens = this.joinExactTokens.bind(this);
    this.zeroImpactJoinYamm = this.zeroImpactJoinYamm.bind(this);
    this.exitExactTokens = this.exitExactTokens.bind(this);
    this.exitTokenExactLpt = this.exitTokenExactLpt.bind(this);
    this.exitAllTokensExactLpt = this.exitAllTokensExactLpt.bind(this);
    this.createWeightedPool = this.createWeightedPool.bind(this);
    this.updateSwapFee = this.updateSwapFee.bind(this);
    this.initializePool = this.initializePool.bind(this);
    this.updateWeights = this.updateWeights.bind(this);
    this.batchSwap = this.batchSwap.bind(this);
    this.setYammConfiguration = this.setYammConfiguration.bind(this);
    this.whitelistRoute = this.whitelistRoute.bind(this);
    this.setWhitelistedRouteEnabled = this.setWhitelistedRouteEnabled.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.proposeMatch = this.proposeMatch.bind(this);
    this.setCircuitBreakers = this.setCircuitBreakers.bind(this);
    this.setRecoveryMode = this.setRecoveryMode.bind(this);
    this.recoveryExit = this.recoveryExit.bind(this);
    this.setPauseMode = this.setPauseMode.bind(this);
    this.setVaultPauseMode = this.setVaultPauseMode.bind(this);
    this.createOraclePricePair = this.createOraclePricePair.bind(this);
    this.updateOraclePricePair = this.updateOraclePricePair.bind(this);
    this.deleteOraclePricePair = this.deleteOraclePricePair.bind(this);
    this.setSwapProtocolFee = this.setSwapProtocolFee.bind(this);
    this.setJoinExitProtocolFee = this.setJoinExitProtocolFee.bind(this);
    this.introduceYammLpToWeightedPool = this.introduceYammLpToWeightedPool.bind(this);
    this.introduceAssetBaseTokenToWeightedPool = this.introduceAssetBaseTokenToWeightedPool.bind(this);
    this.cancelPendingTokenIntroduction = this.cancelPendingTokenIntroduction.bind(this);
    this.removeTokenFromWeightedPool = this.removeTokenFromWeightedPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.addMaturityToYamm = this.addMaturityToYamm.bind(this);
    this.setInitializationAllowList = this.setInitializationAllowList.bind(this);
    this.setPoolAdmins = this.setPoolAdmins.bind(this);
    this.setPauseAllowList = this.setPauseAllowList.bind(this);
    this.setPauseWindow = this.setPauseWindow.bind(this);
    this.setOrderPairDisabled = this.setOrderPairDisabled.bind(this);
  }
  singleSwap(request: DeepPartial<MsgSingleSwap>, metadata?: grpc.Metadata): Promise<MsgSingleSwapResponse> {
    return this.rpc.unary(MsgSingleSwapDesc, MsgSingleSwap.fromPartial(request as any), metadata);
  }
  joinAllTokensExactLpt(request: DeepPartial<MsgJoinAllTokensExactLpt>, metadata?: grpc.Metadata): Promise<MsgJoinAllTokensExactLptResponse> {
    return this.rpc.unary(MsgJoinAllTokensExactLptDesc, MsgJoinAllTokensExactLpt.fromPartial(request as any), metadata);
  }
  joinTokenExactLpt(request: DeepPartial<MsgJoinTokenExactLpt>, metadata?: grpc.Metadata): Promise<MsgJoinTokenExactLptResponse> {
    return this.rpc.unary(MsgJoinTokenExactLptDesc, MsgJoinTokenExactLpt.fromPartial(request as any), metadata);
  }
  joinExactTokens(request: DeepPartial<MsgJoinExactTokens>, metadata?: grpc.Metadata): Promise<MsgJoinExactTokensResponse> {
    return this.rpc.unary(MsgJoinExactTokensDesc, MsgJoinExactTokens.fromPartial(request as any), metadata);
  }
  zeroImpactJoinYamm(request: DeepPartial<MsgZeroImpactJoinYamm>, metadata?: grpc.Metadata): Promise<MsgZeroImpactJoinYammResponse> {
    return this.rpc.unary(MsgZeroImpactJoinYammDesc, MsgZeroImpactJoinYamm.fromPartial(request as any), metadata);
  }
  exitExactTokens(request: DeepPartial<MsgExitExactTokens>, metadata?: grpc.Metadata): Promise<MsgExitExactTokensResponse> {
    return this.rpc.unary(MsgExitExactTokensDesc, MsgExitExactTokens.fromPartial(request as any), metadata);
  }
  exitTokenExactLpt(request: DeepPartial<MsgExitTokenExactLpt>, metadata?: grpc.Metadata): Promise<MsgExitTokenExactLptResponse> {
    return this.rpc.unary(MsgExitTokenExactLptDesc, MsgExitTokenExactLpt.fromPartial(request as any), metadata);
  }
  exitAllTokensExactLpt(request: DeepPartial<MsgExitAllTokensExactLpt>, metadata?: grpc.Metadata): Promise<MsgExitAllTokensExactLptResponse> {
    return this.rpc.unary(MsgExitAllTokensExactLptDesc, MsgExitAllTokensExactLpt.fromPartial(request as any), metadata);
  }
  createWeightedPool(request: DeepPartial<MsgCreateWeightedPool>, metadata?: grpc.Metadata): Promise<MsgCreateWeightedPoolResponse> {
    return this.rpc.unary(MsgCreateWeightedPoolDesc, MsgCreateWeightedPool.fromPartial(request as any), metadata);
  }
  updateSwapFee(request: DeepPartial<MsgUpdateSwapFee>, metadata?: grpc.Metadata): Promise<MsgUpdateSwapFeeResponse> {
    return this.rpc.unary(MsgUpdateSwapFeeDesc, MsgUpdateSwapFee.fromPartial(request as any), metadata);
  }
  initializePool(request: DeepPartial<MsgInitializePool>, metadata?: grpc.Metadata): Promise<MsgInitializePoolResponse> {
    return this.rpc.unary(MsgInitializePoolDesc, MsgInitializePool.fromPartial(request as any), metadata);
  }
  updateWeights(request: DeepPartial<MsgUpdateWeights>, metadata?: grpc.Metadata): Promise<MsgUpdateWeightsResponse> {
    return this.rpc.unary(MsgUpdateWeightsDesc, MsgUpdateWeights.fromPartial(request as any), metadata);
  }
  batchSwap(request: DeepPartial<MsgBatchSwap>, metadata?: grpc.Metadata): Promise<MsgBatchSwapResponse> {
    return this.rpc.unary(MsgBatchSwapDesc, MsgBatchSwap.fromPartial(request as any), metadata);
  }
  setYammConfiguration(request: DeepPartial<MsgSetYammConfiguration>, metadata?: grpc.Metadata): Promise<MsgSetYammConfigurationResponse> {
    return this.rpc.unary(MsgSetYammConfigurationDesc, MsgSetYammConfiguration.fromPartial(request as any), metadata);
  }
  whitelistRoute(request: DeepPartial<MsgWhitelistRoute>, metadata?: grpc.Metadata): Promise<MsgWhitelistRouteResponse> {
    return this.rpc.unary(MsgWhitelistRouteDesc, MsgWhitelistRoute.fromPartial(request as any), metadata);
  }
  setWhitelistedRouteEnabled(request: DeepPartial<MsgSetWhitelistedRouteEnabled>, metadata?: grpc.Metadata): Promise<MsgSetWhitelistedRouteEnabledResponse> {
    return this.rpc.unary(MsgSetWhitelistedRouteEnabledDesc, MsgSetWhitelistedRouteEnabled.fromPartial(request as any), metadata);
  }
  submitOrder(request: DeepPartial<MsgSubmitOrder>, metadata?: grpc.Metadata): Promise<MsgSubmitOrderResponse> {
    return this.rpc.unary(MsgSubmitOrderDesc, MsgSubmitOrder.fromPartial(request as any), metadata);
  }
  cancelOrder(request: DeepPartial<MsgCancelOrder>, metadata?: grpc.Metadata): Promise<MsgCancelOrderResponse> {
    return this.rpc.unary(MsgCancelOrderDesc, MsgCancelOrder.fromPartial(request as any), metadata);
  }
  proposeMatch(request: DeepPartial<MsgProposeMatch>, metadata?: grpc.Metadata): Promise<MsgProposeMatchResponse> {
    return this.rpc.unary(MsgProposeMatchDesc, MsgProposeMatch.fromPartial(request as any), metadata);
  }
  setCircuitBreakers(request: DeepPartial<MsgSetCircuitBreakers>, metadata?: grpc.Metadata): Promise<MsgSetCircuitBreakersResponse> {
    return this.rpc.unary(MsgSetCircuitBreakersDesc, MsgSetCircuitBreakers.fromPartial(request as any), metadata);
  }
  setRecoveryMode(request: DeepPartial<MsgSetRecoveryMode>, metadata?: grpc.Metadata): Promise<MsgSetRecoveryModeResponse> {
    return this.rpc.unary(MsgSetRecoveryModeDesc, MsgSetRecoveryMode.fromPartial(request as any), metadata);
  }
  recoveryExit(request: DeepPartial<MsgRecoveryExit>, metadata?: grpc.Metadata): Promise<MsgRecoveryExitResponse> {
    return this.rpc.unary(MsgRecoveryExitDesc, MsgRecoveryExit.fromPartial(request as any), metadata);
  }
  setPauseMode(request: DeepPartial<MsgSetPauseMode>, metadata?: grpc.Metadata): Promise<MsgSetPauseModeResponse> {
    return this.rpc.unary(MsgSetPauseModeDesc, MsgSetPauseMode.fromPartial(request as any), metadata);
  }
  setVaultPauseMode(request: DeepPartial<MsgSetVaultPauseMode>, metadata?: grpc.Metadata): Promise<MsgSetVaultPauseModeResponse> {
    return this.rpc.unary(MsgSetVaultPauseModeDesc, MsgSetVaultPauseMode.fromPartial(request as any), metadata);
  }
  createOraclePricePair(request: DeepPartial<MsgCreateOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgCreateOraclePricePairResponse> {
    return this.rpc.unary(MsgCreateOraclePricePairDesc, MsgCreateOraclePricePair.fromPartial(request as any), metadata);
  }
  updateOraclePricePair(request: DeepPartial<MsgUpdateOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgUpdateOraclePricePairResponse> {
    return this.rpc.unary(MsgUpdateOraclePricePairDesc, MsgUpdateOraclePricePair.fromPartial(request as any), metadata);
  }
  deleteOraclePricePair(request: DeepPartial<MsgDeleteOraclePricePair>, metadata?: grpc.Metadata): Promise<MsgDeleteOraclePricePairResponse> {
    return this.rpc.unary(MsgDeleteOraclePricePairDesc, MsgDeleteOraclePricePair.fromPartial(request as any), metadata);
  }
  setSwapProtocolFee(request: DeepPartial<MsgSetSwapProtocolFee>, metadata?: grpc.Metadata): Promise<MsgSetSwapProtocolFeeResponse> {
    return this.rpc.unary(MsgSetSwapProtocolFeeDesc, MsgSetSwapProtocolFee.fromPartial(request as any), metadata);
  }
  setJoinExitProtocolFee(request: DeepPartial<MsgSetJoinExitProtocolFee>, metadata?: grpc.Metadata): Promise<MsgSetJoinExitProtocolFeeResponse> {
    return this.rpc.unary(MsgSetJoinExitProtocolFeeDesc, MsgSetJoinExitProtocolFee.fromPartial(request as any), metadata);
  }
  introduceYammLpToWeightedPool(request: DeepPartial<MsgIntroduceYammLpToWeightedPool>, metadata?: grpc.Metadata): Promise<MsgIntroduceYammLpToWeightedPoolResponse> {
    return this.rpc.unary(MsgIntroduceYammLpToWeightedPoolDesc, MsgIntroduceYammLpToWeightedPool.fromPartial(request as any), metadata);
  }
  introduceAssetBaseTokenToWeightedPool(request: DeepPartial<MsgIntroduceAssetBaseTokenToWeightedPool>, metadata?: grpc.Metadata): Promise<MsgIntroduceAssetBaseTokenToWeightedPoolResponse> {
    return this.rpc.unary(MsgIntroduceAssetBaseTokenToWeightedPoolDesc, MsgIntroduceAssetBaseTokenToWeightedPool.fromPartial(request as any), metadata);
  }
  cancelPendingTokenIntroduction(request: DeepPartial<MsgCancelPendingTokenIntroduction>, metadata?: grpc.Metadata): Promise<MsgCancelPendingTokenIntroductionResponse> {
    return this.rpc.unary(MsgCancelPendingTokenIntroductionDesc, MsgCancelPendingTokenIntroduction.fromPartial(request as any), metadata);
  }
  removeTokenFromWeightedPool(request: DeepPartial<MsgRemoveTokenFromWeightedPool>, metadata?: grpc.Metadata): Promise<MsgRemoveTokenFromWeightedPoolResponse> {
    return this.rpc.unary(MsgRemoveTokenFromWeightedPoolDesc, MsgRemoveTokenFromWeightedPool.fromPartial(request as any), metadata);
  }
  updateParams(request: DeepPartial<MsgUpdateParams>, metadata?: grpc.Metadata): Promise<MsgUpdateParamsResponse> {
    return this.rpc.unary(MsgUpdateParamsDesc, MsgUpdateParams.fromPartial(request as any), metadata);
  }
  addMaturityToYamm(request: DeepPartial<MsgAddMaturityToYamm>, metadata?: grpc.Metadata): Promise<MsgAddMaturityToYammResponse> {
    return this.rpc.unary(MsgAddMaturityToYammDesc, MsgAddMaturityToYamm.fromPartial(request as any), metadata);
  }
  setInitializationAllowList(request: DeepPartial<MsgSetInitializationAllowList>, metadata?: grpc.Metadata): Promise<MsgSetInitializationAllowListResponse> {
    return this.rpc.unary(MsgSetInitializationAllowListDesc, MsgSetInitializationAllowList.fromPartial(request as any), metadata);
  }
  setPoolAdmins(request: DeepPartial<MsgSetPoolAdmins>, metadata?: grpc.Metadata): Promise<MsgSetPoolAdminsResponse> {
    return this.rpc.unary(MsgSetPoolAdminsDesc, MsgSetPoolAdmins.fromPartial(request as any), metadata);
  }
  setPauseAllowList(request: DeepPartial<MsgSetPauseAllowList>, metadata?: grpc.Metadata): Promise<MsgSetPauseAllowListResponse> {
    return this.rpc.unary(MsgSetPauseAllowListDesc, MsgSetPauseAllowList.fromPartial(request as any), metadata);
  }
  setPauseWindow(request: DeepPartial<MsgSetPauseWindow>, metadata?: grpc.Metadata): Promise<MsgSetPauseWindowResponse> {
    return this.rpc.unary(MsgSetPauseWindowDesc, MsgSetPauseWindow.fromPartial(request as any), metadata);
  }
  setOrderPairDisabled(request: DeepPartial<MsgSetOrderPairDisabled>, metadata?: grpc.Metadata): Promise<MsgSetOrderPairDisabledResponse> {
    return this.rpc.unary(MsgSetOrderPairDisabledDesc, MsgSetOrderPairDisabled.fromPartial(request as any), metadata);
  }
}
export const MsgDesc = {
  serviceName: "pryzm.amm.v1.Msg"
};
export const MsgSingleSwapDesc: UnaryMethodDefinitionish = {
  methodName: "SingleSwap",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSingleSwap.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSingleSwapResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgJoinAllTokensExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "JoinAllTokensExactLpt",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgJoinAllTokensExactLpt.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinAllTokensExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgJoinTokenExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "JoinTokenExactLpt",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgJoinTokenExactLpt.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinTokenExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgJoinExactTokensDesc: UnaryMethodDefinitionish = {
  methodName: "JoinExactTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgJoinExactTokens.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgJoinExactTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgZeroImpactJoinYammDesc: UnaryMethodDefinitionish = {
  methodName: "ZeroImpactJoinYamm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgZeroImpactJoinYamm.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgZeroImpactJoinYammResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgExitExactTokensDesc: UnaryMethodDefinitionish = {
  methodName: "ExitExactTokens",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExitExactTokens.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitExactTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgExitTokenExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "ExitTokenExactLpt",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExitTokenExactLpt.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitTokenExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgExitAllTokensExactLptDesc: UnaryMethodDefinitionish = {
  methodName: "ExitAllTokensExactLpt",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExitAllTokensExactLpt.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExitAllTokensExactLptResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCreateWeightedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreateWeightedPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateWeightedPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateWeightedPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateSwapFeeDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateSwapFee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateSwapFee.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateSwapFeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgInitializePoolDesc: UnaryMethodDefinitionish = {
  methodName: "InitializePool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgInitializePool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgInitializePoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateWeightsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateWeights",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateWeights.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateWeightsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgBatchSwapDesc: UnaryMethodDefinitionish = {
  methodName: "BatchSwap",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBatchSwap.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgBatchSwapResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetYammConfigurationDesc: UnaryMethodDefinitionish = {
  methodName: "SetYammConfiguration",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetYammConfiguration.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetYammConfigurationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgWhitelistRouteDesc: UnaryMethodDefinitionish = {
  methodName: "WhitelistRoute",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgWhitelistRoute.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgWhitelistRouteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetWhitelistedRouteEnabledDesc: UnaryMethodDefinitionish = {
  methodName: "SetWhitelistedRouteEnabled",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetWhitelistedRouteEnabled.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetWhitelistedRouteEnabledResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSubmitOrderDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitOrder",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitOrder.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCancelOrderDesc: UnaryMethodDefinitionish = {
  methodName: "CancelOrder",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelOrder.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgProposeMatchDesc: UnaryMethodDefinitionish = {
  methodName: "ProposeMatch",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgProposeMatch.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgProposeMatchResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetCircuitBreakersDesc: UnaryMethodDefinitionish = {
  methodName: "SetCircuitBreakers",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetCircuitBreakers.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetCircuitBreakersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetRecoveryModeDesc: UnaryMethodDefinitionish = {
  methodName: "SetRecoveryMode",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetRecoveryMode.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetRecoveryModeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgRecoveryExitDesc: UnaryMethodDefinitionish = {
  methodName: "RecoveryExit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRecoveryExit.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRecoveryExitResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetPauseModeDesc: UnaryMethodDefinitionish = {
  methodName: "SetPauseMode",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetPauseMode.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetPauseModeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetVaultPauseModeDesc: UnaryMethodDefinitionish = {
  methodName: "SetVaultPauseMode",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetVaultPauseMode.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetVaultPauseModeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCreateOraclePricePairDesc: UnaryMethodDefinitionish = {
  methodName: "CreateOraclePricePair",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreateOraclePricePair.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateOraclePricePairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateOraclePricePairDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateOraclePricePair",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateOraclePricePair.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateOraclePricePairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgDeleteOraclePricePairDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteOraclePricePair",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeleteOraclePricePair.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteOraclePricePairResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetSwapProtocolFeeDesc: UnaryMethodDefinitionish = {
  methodName: "SetSwapProtocolFee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetSwapProtocolFee.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetSwapProtocolFeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetJoinExitProtocolFeeDesc: UnaryMethodDefinitionish = {
  methodName: "SetJoinExitProtocolFee",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetJoinExitProtocolFee.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetJoinExitProtocolFeeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgIntroduceYammLpToWeightedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "IntroduceYammLpToWeightedPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIntroduceYammLpToWeightedPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIntroduceYammLpToWeightedPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgIntroduceAssetBaseTokenToWeightedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "IntroduceAssetBaseTokenToWeightedPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgIntroduceAssetBaseTokenToWeightedPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgIntroduceAssetBaseTokenToWeightedPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgCancelPendingTokenIntroductionDesc: UnaryMethodDefinitionish = {
  methodName: "CancelPendingTokenIntroduction",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelPendingTokenIntroduction.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCancelPendingTokenIntroductionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgRemoveTokenFromWeightedPoolDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveTokenFromWeightedPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRemoveTokenFromWeightedPool.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRemoveTokenFromWeightedPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgUpdateParamsDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateParams",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateParams.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgAddMaturityToYammDesc: UnaryMethodDefinitionish = {
  methodName: "AddMaturityToYamm",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddMaturityToYamm.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgAddMaturityToYammResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetInitializationAllowListDesc: UnaryMethodDefinitionish = {
  methodName: "SetInitializationAllowList",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetInitializationAllowList.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetInitializationAllowListResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetPoolAdminsDesc: UnaryMethodDefinitionish = {
  methodName: "SetPoolAdmins",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetPoolAdmins.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetPoolAdminsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetPauseAllowListDesc: UnaryMethodDefinitionish = {
  methodName: "SetPauseAllowList",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetPauseAllowList.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetPauseAllowListResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetPauseWindowDesc: UnaryMethodDefinitionish = {
  methodName: "SetPauseWindow",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetPauseWindow.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetPauseWindowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export const MsgSetOrderPairDisabledDesc: UnaryMethodDefinitionish = {
  methodName: "SetOrderPairDisabled",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSetOrderPairDisabled.encode(this).finish();
    }
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSetOrderPairDisabledResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}