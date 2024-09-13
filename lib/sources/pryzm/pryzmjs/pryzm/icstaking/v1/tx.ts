import { Params, ParamsAmino, ParamsSDKType, Height, HeightAmino, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { HostChain, HostChainAmino, HostChainSDKType, Validator, ValidatorAmino, ValidatorSDKType } from "./host_chain";
import { StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import { BoolValue, BoolValueAmino, BoolValueSDKType } from "../../../google/protobuf/wrappers";
import { Acknowledgement, AcknowledgementAmino, AcknowledgementSDKType } from "./multisig";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ICARegistrationType {
  /** DELEGATION - register delegation interchain account */
  DELEGATION = 0,
  /** REWARD - register reward interchain account */
  REWARD = 1,
  /** SWEEP - register sweep interchain account */
  SWEEP = 2,
  /** REWARD_CLAIMING - registration of reward account as the withdraw address on the host chain */
  REWARD_CLAIMING = 3,
  UNRECOGNIZED = -1,
}
export const ICARegistrationTypeSDKType = ICARegistrationType;
export const ICARegistrationTypeAmino = ICARegistrationType;
export function iCARegistrationTypeFromJSON(object: any): ICARegistrationType {
  switch (object) {
    case 0:
    case "DELEGATION":
      return ICARegistrationType.DELEGATION;
    case 1:
    case "REWARD":
      return ICARegistrationType.REWARD;
    case 2:
    case "SWEEP":
      return ICARegistrationType.SWEEP;
    case 3:
    case "REWARD_CLAIMING":
      return ICARegistrationType.REWARD_CLAIMING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ICARegistrationType.UNRECOGNIZED;
  }
}
export function iCARegistrationTypeToJSON(object: ICARegistrationType): string {
  switch (object) {
    case ICARegistrationType.DELEGATION:
      return "DELEGATION";
    case ICARegistrationType.REWARD:
      return "REWARD";
    case ICARegistrationType.SWEEP:
      return "SWEEP";
    case ICARegistrationType.REWARD_CLAIMING:
      return "REWARD_CLAIMING";
    case ICARegistrationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/icstaking/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgRegisterHostChain {
  creator: string;
  hostChain: HostChain;
}
export interface MsgRegisterHostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain";
  value: Uint8Array;
}
export interface MsgRegisterHostChainAmino {
  creator?: string;
  host_chain: HostChainAmino;
}
export interface MsgRegisterHostChainAminoMsg {
  type: "pryzm/icstaking/v1/RegisterHostChain";
  value: MsgRegisterHostChainAmino;
}
export interface MsgRegisterHostChainSDKType {
  creator: string;
  host_chain: HostChainSDKType;
}
export interface MsgRegisterHostChainResponse {}
export interface MsgRegisterHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse";
  value: Uint8Array;
}
export interface MsgRegisterHostChainResponseAmino {}
export interface MsgRegisterHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse";
  value: MsgRegisterHostChainResponseAmino;
}
export interface MsgRegisterHostChainResponseSDKType {}
export interface MsgUpdateHostChain {
  creator: string;
  hostChainId: string;
  validators: Validator[];
  params?: StakingParams;
  allowLsmShares?: BoolValue;
}
export interface MsgUpdateHostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain";
  value: Uint8Array;
}
export interface MsgUpdateHostChainAmino {
  creator?: string;
  host_chain_id?: string;
  validators: ValidatorAmino[];
  params: StakingParamsAmino;
  allow_lsm_shares?: BoolValueAmino;
}
export interface MsgUpdateHostChainAminoMsg {
  type: "pryzm/icstaking/v1/UpdateHostChain";
  value: MsgUpdateHostChainAmino;
}
export interface MsgUpdateHostChainSDKType {
  creator: string;
  host_chain_id: string;
  validators: ValidatorSDKType[];
  params?: StakingParamsSDKType;
  allow_lsm_shares?: BoolValueSDKType;
}
export interface MsgUpdateHostChainResponse {}
export interface MsgUpdateHostChainResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse";
  value: Uint8Array;
}
export interface MsgUpdateHostChainResponseAmino {}
export interface MsgUpdateHostChainResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse";
  value: MsgUpdateHostChainResponseAmino;
}
export interface MsgUpdateHostChainResponseSDKType {}
export interface MsgStake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  amount: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStake";
  value: Uint8Array;
}
export interface MsgStakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  amount: string;
}
export interface MsgStakeAminoMsg {
  type: "pryzm/icstaking/v1/Stake";
  value: MsgStakeAmino;
}
export interface MsgStakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  amount: string;
}
export interface MsgStakeResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse";
  value: Uint8Array;
}
export interface MsgStakeResponseAmino {
  c_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgStakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
export interface MsgStakeResponseSDKType {
  c_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgStakeLsmShares {
  creator: string;
  hostChain: string;
  transferChannel: string;
  lsmDenom: string;
  amount: string;
}
export interface MsgStakeLsmSharesProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmShares";
  value: Uint8Array;
}
export interface MsgStakeLsmSharesAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  lsm_denom?: string;
  amount: string;
}
export interface MsgStakeLsmSharesAminoMsg {
  type: "pryzm/icstaking/v1/StakeLsmShares";
  value: MsgStakeLsmSharesAmino;
}
export interface MsgStakeLsmSharesSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  lsm_denom: string;
  amount: string;
}
export interface MsgStakeLsmSharesResponse {
  cAmount: Coin;
  fee: Coin;
}
export interface MsgStakeLsmSharesResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmSharesResponse";
  value: Uint8Array;
}
export interface MsgStakeLsmSharesResponseAmino {
  c_amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgStakeLsmSharesResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgStakeLsmSharesResponse";
  value: MsgStakeLsmSharesResponseAmino;
}
export interface MsgStakeLsmSharesResponseSDKType {
  c_amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  cAmount: string;
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstake";
  value: Uint8Array;
}
export interface MsgUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  c_amount: string;
}
export interface MsgUnstakeAminoMsg {
  type: "pryzm/icstaking/v1/Unstake";
  value: MsgUnstakeAmino;
}
export interface MsgUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  c_amount: string;
}
export interface MsgUnstakeResponse {
  uAmount: Coin;
}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse";
  value: Uint8Array;
}
export interface MsgUnstakeResponseAmino {
  u_amount?: CoinAmino;
}
export interface MsgUnstakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
export interface MsgUnstakeResponseSDKType {
  u_amount: CoinSDKType;
}
export interface MsgRedeemUnstaked {
  creator: string;
  hostChain: string;
  transferChannel: string;
  uAmount: string;
  epoch: bigint;
}
export interface MsgRedeemUnstakedProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked";
  value: Uint8Array;
}
export interface MsgRedeemUnstakedAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  u_amount: string;
  epoch: string;
}
export interface MsgRedeemUnstakedAminoMsg {
  type: "pryzm/icstaking/v1/RedeemUnstaked";
  value: MsgRedeemUnstakedAmino;
}
export interface MsgRedeemUnstakedSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  u_amount: string;
  epoch: bigint;
}
export interface MsgRedeemUnstakedResponse {
  amount: Coin;
  fee: Coin;
}
export interface MsgRedeemUnstakedResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse";
  value: Uint8Array;
}
export interface MsgRedeemUnstakedResponseAmino {
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgRedeemUnstakedResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse";
  value: MsgRedeemUnstakedResponseAmino;
}
export interface MsgRedeemUnstakedResponseSDKType {
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgInstantUnstake {
  creator: string;
  hostChain: string;
  transferChannel: string;
  minCAmount: string;
  maxCAmount: string;
}
export interface MsgInstantUnstakeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake";
  value: Uint8Array;
}
export interface MsgInstantUnstakeAmino {
  creator?: string;
  host_chain?: string;
  transfer_channel?: string;
  min_c_amount: string;
  max_c_amount: string;
}
export interface MsgInstantUnstakeAminoMsg {
  type: "pryzm/icstaking/v1/InstantUnstake";
  value: MsgInstantUnstakeAmino;
}
export interface MsgInstantUnstakeSDKType {
  creator: string;
  host_chain: string;
  transfer_channel: string;
  min_c_amount: string;
  max_c_amount: string;
}
export interface MsgInstantUnstakeResponse {
  amount: Coin;
  fee: Coin;
}
export interface MsgInstantUnstakeResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse";
  value: Uint8Array;
}
export interface MsgInstantUnstakeResponseAmino {
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface MsgInstantUnstakeResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse";
  value: MsgInstantUnstakeResponseAmino;
}
export interface MsgInstantUnstakeResponseSDKType {
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface MsgRebalanceDelegations {
  creator: string;
  hostChain: string;
}
export interface MsgRebalanceDelegationsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations";
  value: Uint8Array;
}
export interface MsgRebalanceDelegationsAmino {
  creator?: string;
  host_chain?: string;
}
export interface MsgRebalanceDelegationsAminoMsg {
  type: "pryzm/icstaking/v1/RebalanceDelegations";
  value: MsgRebalanceDelegationsAmino;
}
export interface MsgRebalanceDelegationsSDKType {
  creator: string;
  host_chain: string;
}
export interface MsgRebalanceDelegationsResponse {}
export interface MsgRebalanceDelegationsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse";
  value: Uint8Array;
}
export interface MsgRebalanceDelegationsResponseAmino {}
export interface MsgRebalanceDelegationsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse";
  value: MsgRebalanceDelegationsResponseAmino;
}
export interface MsgRebalanceDelegationsResponseSDKType {}
export interface MsgRegisterInterchainAccount {
  creator: string;
  hostChain: string;
  registrationType: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount";
  value: Uint8Array;
}
export interface MsgRegisterInterchainAccountAmino {
  creator?: string;
  host_chain?: string;
  registration_type: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountAminoMsg {
  type: "pryzm/icstaking/v1/RegInterchainAccount";
  value: MsgRegisterInterchainAccountAmino;
}
export interface MsgRegisterInterchainAccountSDKType {
  creator: string;
  host_chain: string;
  registration_type: ICARegistrationType;
}
export interface MsgRegisterInterchainAccountResponse {}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse";
  value: Uint8Array;
}
export interface MsgRegisterInterchainAccountResponseAmino {}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse";
  value: MsgRegisterInterchainAccountResponseAmino;
}
export interface MsgRegisterInterchainAccountResponseSDKType {}
export interface MsgCreateMultiSigConnection {
  creator: string;
  id: string;
  operator: string;
}
export interface MsgCreateMultiSigConnectionProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnection";
  value: Uint8Array;
}
export interface MsgCreateMultiSigConnectionAmino {
  creator?: string;
  id?: string;
  operator?: string;
}
export interface MsgCreateMultiSigConnectionAminoMsg {
  type: "pryzm/icstaking/v1/CreateMultiSigConn";
  value: MsgCreateMultiSigConnectionAmino;
}
export interface MsgCreateMultiSigConnectionSDKType {
  creator: string;
  id: string;
  operator: string;
}
export interface MsgCreateMultiSigConnectionResponse {}
export interface MsgCreateMultiSigConnectionResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnectionResponse";
  value: Uint8Array;
}
export interface MsgCreateMultiSigConnectionResponseAmino {}
export interface MsgCreateMultiSigConnectionResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgCreateMultiSigConnectionResponse";
  value: MsgCreateMultiSigConnectionResponseAmino;
}
export interface MsgCreateMultiSigConnectionResponseSDKType {}
export interface MsgUpdateMultiSigConnection {
  creator: string;
  id: string;
  operator: string;
}
export interface MsgUpdateMultiSigConnectionProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnection";
  value: Uint8Array;
}
export interface MsgUpdateMultiSigConnectionAmino {
  creator?: string;
  id?: string;
  operator?: string;
}
export interface MsgUpdateMultiSigConnectionAminoMsg {
  type: "pryzm/icstaking/v1/UpdateMultiSigConn";
  value: MsgUpdateMultiSigConnectionAmino;
}
export interface MsgUpdateMultiSigConnectionSDKType {
  creator: string;
  id: string;
  operator: string;
}
export interface MsgUpdateMultiSigConnectionResponse {}
export interface MsgUpdateMultiSigConnectionResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnectionResponse";
  value: Uint8Array;
}
export interface MsgUpdateMultiSigConnectionResponseAmino {}
export interface MsgUpdateMultiSigConnectionResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnectionResponse";
  value: MsgUpdateMultiSigConnectionResponseAmino;
}
export interface MsgUpdateMultiSigConnectionResponseSDKType {}
export interface MsgAcknowledgeMultiSigPacket {
  creator: string;
  connectionId: string;
  sequence: bigint;
  ack: Acknowledgement;
  height: Height;
  txHash: string;
}
export interface MsgAcknowledgeMultiSigPacketProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacket";
  value: Uint8Array;
}
export interface MsgAcknowledgeMultiSigPacketAmino {
  creator?: string;
  connection_id?: string;
  sequence?: string;
  ack?: AcknowledgementAmino;
  height?: HeightAmino;
  tx_hash?: string;
}
export interface MsgAcknowledgeMultiSigPacketAminoMsg {
  type: "pryzm/icstaking/v1/AckMultiSigPacket";
  value: MsgAcknowledgeMultiSigPacketAmino;
}
export interface MsgAcknowledgeMultiSigPacketSDKType {
  creator: string;
  connection_id: string;
  sequence: bigint;
  ack: AcknowledgementSDKType;
  height: HeightSDKType;
  tx_hash: string;
}
export interface MsgAcknowledgeMultiSigPacketResponse {}
export interface MsgAcknowledgeMultiSigPacketResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacketResponse";
  value: Uint8Array;
}
export interface MsgAcknowledgeMultiSigPacketResponseAmino {}
export interface MsgAcknowledgeMultiSigPacketResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacketResponse";
  value: MsgAcknowledgeMultiSigPacketResponseAmino;
}
export interface MsgAcknowledgeMultiSigPacketResponseSDKType {}
export interface MsgRegisterHostAccounts {
  creator: string;
  hostChain: string;
  delegationAddress: string;
  rewardAddress: string;
  sweepAddress: string;
}
export interface MsgRegisterHostAccountsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccounts";
  value: Uint8Array;
}
export interface MsgRegisterHostAccountsAmino {
  creator?: string;
  host_chain?: string;
  delegation_address?: string;
  reward_address?: string;
  sweep_address?: string;
}
export interface MsgRegisterHostAccountsAminoMsg {
  type: "pryzm/icstaking/v1/RegisterHostAccounts";
  value: MsgRegisterHostAccountsAmino;
}
export interface MsgRegisterHostAccountsSDKType {
  creator: string;
  host_chain: string;
  delegation_address: string;
  reward_address: string;
  sweep_address: string;
}
export interface MsgRegisterHostAccountsResponse {}
export interface MsgRegisterHostAccountsResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccountsResponse";
  value: Uint8Array;
}
export interface MsgRegisterHostAccountsResponseAmino {}
export interface MsgRegisterHostAccountsResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRegisterHostAccountsResponse";
  value: MsgRegisterHostAccountsResponseAmino;
}
export interface MsgRegisterHostAccountsResponseSDKType {}
export interface MsgRetryFailedLsmTransfer {
  creator: string;
  hostChain: string;
  lsmDenom: string;
  transferChannel: string;
}
export interface MsgRetryFailedLsmTransferProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransfer";
  value: Uint8Array;
}
export interface MsgRetryFailedLsmTransferAmino {
  creator?: string;
  host_chain?: string;
  lsm_denom?: string;
  transfer_channel?: string;
}
export interface MsgRetryFailedLsmTransferAminoMsg {
  type: "pryzm/icstaking/v1/RetryFailLsmTransfer";
  value: MsgRetryFailedLsmTransferAmino;
}
export interface MsgRetryFailedLsmTransferSDKType {
  creator: string;
  host_chain: string;
  lsm_denom: string;
  transfer_channel: string;
}
export interface MsgRetryFailedLsmTransferResponse {}
export interface MsgRetryFailedLsmTransferResponseProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransferResponse";
  value: Uint8Array;
}
export interface MsgRetryFailedLsmTransferResponseAmino {}
export interface MsgRetryFailedLsmTransferResponseAminoMsg {
  type: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransferResponse";
  value: MsgRetryFailedLsmTransferResponseAmino;
}
export interface MsgRetryFailedLsmTransferResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams",
  aminoType: "pryzm/icstaking/v1/UpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams, useInterfaces: boolean = true): MsgUpdateParamsAminoMsg {
    return {
      type: "pryzm/icstaking/v1/UpdateParams",
      value: MsgUpdateParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse, useInterfaces: boolean = true): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgRegisterHostChain(): MsgRegisterHostChain {
  return {
    creator: "",
    hostChain: HostChain.fromPartial({})
  };
}
export const MsgRegisterHostChain = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain",
  aminoType: "pryzm/icstaking/v1/RegisterHostChain",
  is(o: any): o is MsgRegisterHostChain {
    return o && (o.$typeUrl === MsgRegisterHostChain.typeUrl || typeof o.creator === "string" && HostChain.is(o.hostChain));
  },
  isSDK(o: any): o is MsgRegisterHostChainSDKType {
    return o && (o.$typeUrl === MsgRegisterHostChain.typeUrl || typeof o.creator === "string" && HostChain.isSDK(o.host_chain));
  },
  isAmino(o: any): o is MsgRegisterHostChainAmino {
    return o && (o.$typeUrl === MsgRegisterHostChain.typeUrl || typeof o.creator === "string" && HostChain.isAmino(o.host_chain));
  },
  encode(message: MsgRegisterHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== undefined) {
      HostChain.encode(message.hostChain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = HostChain.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterHostChain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? HostChain.fromJSON(object.hostChain) : undefined
    };
  },
  toJSON(message: MsgRegisterHostChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain ? HostChain.toJSON(message.hostChain) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterHostChain>): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain !== undefined && object.hostChain !== null ? HostChain.fromPartial(object.hostChain) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterHostChainAmino): MsgRegisterHostChain {
    const message = createBaseMsgRegisterHostChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = HostChain.fromAmino(object.host_chain);
    }
    return message;
  },
  toAmino(message: MsgRegisterHostChain, useInterfaces: boolean = true): MsgRegisterHostChainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain ? HostChain.toAmino(message.hostChain, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostChainAminoMsg): MsgRegisterHostChain {
    return MsgRegisterHostChain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterHostChain, useInterfaces: boolean = true): MsgRegisterHostChainAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RegisterHostChain",
      value: MsgRegisterHostChain.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRegisterHostChainProtoMsg, useInterfaces: boolean = true): MsgRegisterHostChain {
    return MsgRegisterHostChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterHostChain): Uint8Array {
    return MsgRegisterHostChain.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostChain): MsgRegisterHostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChain",
      value: MsgRegisterHostChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterHostChain.typeUrl, MsgRegisterHostChain);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterHostChain.aminoType, MsgRegisterHostChain.typeUrl);
function createBaseMsgRegisterHostChainResponse(): MsgRegisterHostChainResponse {
  return {};
}
export const MsgRegisterHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse",
  is(o: any): o is MsgRegisterHostChainResponse {
    return o && o.$typeUrl === MsgRegisterHostChainResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterHostChainResponseSDKType {
    return o && o.$typeUrl === MsgRegisterHostChainResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterHostChainResponseAmino {
    return o && o.$typeUrl === MsgRegisterHostChainResponse.typeUrl;
  },
  encode(_: MsgRegisterHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterHostChainResponse {
    return {};
  },
  toJSON(_: MsgRegisterHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterHostChainResponse>): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
  fromAmino(_: MsgRegisterHostChainResponseAmino): MsgRegisterHostChainResponse {
    const message = createBaseMsgRegisterHostChainResponse();
    return message;
  },
  toAmino(_: MsgRegisterHostChainResponse, useInterfaces: boolean = true): MsgRegisterHostChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostChainResponseAminoMsg): MsgRegisterHostChainResponse {
    return MsgRegisterHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostChainResponseProtoMsg, useInterfaces: boolean = true): MsgRegisterHostChainResponse {
    return MsgRegisterHostChainResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterHostChainResponse): Uint8Array {
    return MsgRegisterHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostChainResponse): MsgRegisterHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostChainResponse",
      value: MsgRegisterHostChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterHostChainResponse.typeUrl, MsgRegisterHostChainResponse);
function createBaseMsgUpdateHostChain(): MsgUpdateHostChain {
  return {
    creator: "",
    hostChainId: "",
    validators: [],
    params: undefined,
    allowLsmShares: undefined
  };
}
export const MsgUpdateHostChain = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain",
  aminoType: "pryzm/icstaking/v1/UpdateHostChain",
  is(o: any): o is MsgUpdateHostChain {
    return o && (o.$typeUrl === MsgUpdateHostChain.typeUrl || typeof o.creator === "string" && typeof o.hostChainId === "string" && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isSDK(o: any): o is MsgUpdateHostChainSDKType {
    return o && (o.$typeUrl === MsgUpdateHostChain.typeUrl || typeof o.creator === "string" && typeof o.host_chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])));
  },
  isAmino(o: any): o is MsgUpdateHostChainAmino {
    return o && (o.$typeUrl === MsgUpdateHostChain.typeUrl || typeof o.creator === "string" && typeof o.host_chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: MsgUpdateHostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChainId !== "") {
      writer.uint32(18).string(message.hostChainId);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.allowLsmShares !== undefined) {
      BoolValue.encode(message.allowLsmShares, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateHostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChainId = reader.string();
          break;
        case 3:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.params = StakingParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.allowLsmShares = BoolValue.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateHostChain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined,
      allowLsmShares: isSet(object.allowLsmShares) ? BoolValue.fromJSON(object.allowLsmShares) : undefined
    };
  },
  toJSON(message: MsgUpdateHostChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    message.allowLsmShares !== undefined && (obj.allowLsmShares = message.allowLsmShares ? BoolValue.toJSON(message.allowLsmShares) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateHostChain>): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    message.creator = object.creator ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? StakingParams.fromPartial(object.params) : undefined;
    message.allowLsmShares = object.allowLsmShares !== undefined && object.allowLsmShares !== null ? BoolValue.fromPartial(object.allowLsmShares) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateHostChainAmino): MsgUpdateHostChain {
    const message = createBaseMsgUpdateHostChain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = StakingParams.fromAmino(object.params);
    }
    if (object.allow_lsm_shares !== undefined && object.allow_lsm_shares !== null) {
      message.allowLsmShares = BoolValue.fromAmino(object.allow_lsm_shares);
    }
    return message;
  },
  toAmino(message: MsgUpdateHostChain, useInterfaces: boolean = true): MsgUpdateHostChainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.params = message.params ? StakingParams.toAmino(message.params, useInterfaces) : undefined;
    obj.allow_lsm_shares = message.allowLsmShares ? BoolValue.toAmino(message.allowLsmShares, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostChainAminoMsg): MsgUpdateHostChain {
    return MsgUpdateHostChain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateHostChain, useInterfaces: boolean = true): MsgUpdateHostChainAminoMsg {
    return {
      type: "pryzm/icstaking/v1/UpdateHostChain",
      value: MsgUpdateHostChain.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateHostChainProtoMsg, useInterfaces: boolean = true): MsgUpdateHostChain {
    return MsgUpdateHostChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateHostChain): Uint8Array {
    return MsgUpdateHostChain.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostChain): MsgUpdateHostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChain",
      value: MsgUpdateHostChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHostChain.typeUrl, MsgUpdateHostChain);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateHostChain.aminoType, MsgUpdateHostChain.typeUrl);
function createBaseMsgUpdateHostChainResponse(): MsgUpdateHostChainResponse {
  return {};
}
export const MsgUpdateHostChainResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse",
  is(o: any): o is MsgUpdateHostChainResponse {
    return o && o.$typeUrl === MsgUpdateHostChainResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateHostChainResponseSDKType {
    return o && o.$typeUrl === MsgUpdateHostChainResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateHostChainResponseAmino {
    return o && o.$typeUrl === MsgUpdateHostChainResponse.typeUrl;
  },
  encode(_: MsgUpdateHostChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateHostChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateHostChainResponse {
    return {};
  },
  toJSON(_: MsgUpdateHostChainResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateHostChainResponse>): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
  fromAmino(_: MsgUpdateHostChainResponseAmino): MsgUpdateHostChainResponse {
    const message = createBaseMsgUpdateHostChainResponse();
    return message;
  },
  toAmino(_: MsgUpdateHostChainResponse, useInterfaces: boolean = true): MsgUpdateHostChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostChainResponseAminoMsg): MsgUpdateHostChainResponse {
    return MsgUpdateHostChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostChainResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateHostChainResponse {
    return MsgUpdateHostChainResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateHostChainResponse): Uint8Array {
    return MsgUpdateHostChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostChainResponse): MsgUpdateHostChainResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateHostChainResponse",
      value: MsgUpdateHostChainResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHostChainResponse.typeUrl, MsgUpdateHostChainResponse);
function createBaseMsgStake(): MsgStake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    amount: ""
  };
}
export const MsgStake = {
  typeUrl: "/pryzm.icstaking.v1.MsgStake",
  aminoType: "pryzm/icstaking/v1/Stake",
  is(o: any): o is MsgStake {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgStakeSDKType {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgStakeAmino {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.amount === "string");
  },
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStake, useInterfaces: boolean = true): MsgStakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStake, useInterfaces: boolean = true): MsgStakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/Stake",
      value: MsgStake.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStakeProtoMsg, useInterfaces: boolean = true): MsgStake {
    return MsgStake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStake.typeUrl, MsgStake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStake.aminoType, MsgStake.typeUrl);
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgStakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse",
  is(o: any): o is MsgStakeResponse {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || Coin.is(o.cAmount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgStakeResponseSDKType {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || Coin.isSDK(o.c_amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgStakeResponseAmino {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || Coin.isAmino(o.c_amount) && Coin.isAmino(o.fee));
  },
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgStakeResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgStakeResponse, useInterfaces: boolean = true): MsgStakeResponseAmino {
    const obj: any = {};
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg, useInterfaces: boolean = true): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeResponse.typeUrl, MsgStakeResponse);
function createBaseMsgStakeLsmShares(): MsgStakeLsmShares {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    lsmDenom: "",
    amount: ""
  };
}
export const MsgStakeLsmShares = {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmShares",
  aminoType: "pryzm/icstaking/v1/StakeLsmShares",
  is(o: any): o is MsgStakeLsmShares {
    return o && (o.$typeUrl === MsgStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.lsmDenom === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is MsgStakeLsmSharesSDKType {
    return o && (o.$typeUrl === MsgStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.lsm_denom === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is MsgStakeLsmSharesAmino {
    return o && (o.$typeUrl === MsgStakeLsmShares.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.lsm_denom === "string" && typeof o.amount === "string");
  },
  encode(message: MsgStakeLsmShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.lsmDenom !== "") {
      writer.uint32(34).string(message.lsmDenom);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStakeLsmShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeLsmShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.lsmDenom = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeLsmShares {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      lsmDenom: isSet(object.lsmDenom) ? String(object.lsmDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: MsgStakeLsmShares): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.lsmDenom !== undefined && (obj.lsmDenom = message.lsmDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeLsmShares>): MsgStakeLsmShares {
    const message = createBaseMsgStakeLsmShares();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.lsmDenom = object.lsmDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgStakeLsmSharesAmino): MsgStakeLsmShares {
    const message = createBaseMsgStakeLsmShares();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.lsm_denom !== undefined && object.lsm_denom !== null) {
      message.lsmDenom = object.lsm_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgStakeLsmShares, useInterfaces: boolean = true): MsgStakeLsmSharesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.lsm_denom = message.lsmDenom === "" ? undefined : message.lsmDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgStakeLsmSharesAminoMsg): MsgStakeLsmShares {
    return MsgStakeLsmShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStakeLsmShares, useInterfaces: boolean = true): MsgStakeLsmSharesAminoMsg {
    return {
      type: "pryzm/icstaking/v1/StakeLsmShares",
      value: MsgStakeLsmShares.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgStakeLsmSharesProtoMsg, useInterfaces: boolean = true): MsgStakeLsmShares {
    return MsgStakeLsmShares.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStakeLsmShares): Uint8Array {
    return MsgStakeLsmShares.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeLsmShares): MsgStakeLsmSharesProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmShares",
      value: MsgStakeLsmShares.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeLsmShares.typeUrl, MsgStakeLsmShares);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStakeLsmShares.aminoType, MsgStakeLsmShares.typeUrl);
function createBaseMsgStakeLsmSharesResponse(): MsgStakeLsmSharesResponse {
  return {
    cAmount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgStakeLsmSharesResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmSharesResponse",
  is(o: any): o is MsgStakeLsmSharesResponse {
    return o && (o.$typeUrl === MsgStakeLsmSharesResponse.typeUrl || Coin.is(o.cAmount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgStakeLsmSharesResponseSDKType {
    return o && (o.$typeUrl === MsgStakeLsmSharesResponse.typeUrl || Coin.isSDK(o.c_amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgStakeLsmSharesResponseAmino {
    return o && (o.$typeUrl === MsgStakeLsmSharesResponse.typeUrl || Coin.isAmino(o.c_amount) && Coin.isAmino(o.fee));
  },
  encode(message: MsgStakeLsmSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cAmount !== undefined) {
      Coin.encode(message.cAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgStakeLsmSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeLsmSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeLsmSharesResponse {
    return {
      cAmount: isSet(object.cAmount) ? Coin.fromJSON(object.cAmount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgStakeLsmSharesResponse): unknown {
    const obj: any = {};
    message.cAmount !== undefined && (obj.cAmount = message.cAmount ? Coin.toJSON(message.cAmount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeLsmSharesResponse>): MsgStakeLsmSharesResponse {
    const message = createBaseMsgStakeLsmSharesResponse();
    message.cAmount = object.cAmount !== undefined && object.cAmount !== null ? Coin.fromPartial(object.cAmount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgStakeLsmSharesResponseAmino): MsgStakeLsmSharesResponse {
    const message = createBaseMsgStakeLsmSharesResponse();
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = Coin.fromAmino(object.c_amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgStakeLsmSharesResponse, useInterfaces: boolean = true): MsgStakeLsmSharesResponseAmino {
    const obj: any = {};
    obj.c_amount = message.cAmount ? Coin.toAmino(message.cAmount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStakeLsmSharesResponseAminoMsg): MsgStakeLsmSharesResponse {
    return MsgStakeLsmSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeLsmSharesResponseProtoMsg, useInterfaces: boolean = true): MsgStakeLsmSharesResponse {
    return MsgStakeLsmSharesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgStakeLsmSharesResponse): Uint8Array {
    return MsgStakeLsmSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeLsmSharesResponse): MsgStakeLsmSharesResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgStakeLsmSharesResponse",
      value: MsgStakeLsmSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeLsmSharesResponse.typeUrl, MsgStakeLsmSharesResponse);
function createBaseMsgUnstake(): MsgUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    cAmount: ""
  };
}
export const MsgUnstake = {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstake",
  aminoType: "pryzm/icstaking/v1/Unstake",
  is(o: any): o is MsgUnstake {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.cAmount === "string");
  },
  isSDK(o: any): o is MsgUnstakeSDKType {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.c_amount === "string");
  },
  isAmino(o: any): o is MsgUnstakeAmino {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.c_amount === "string");
  },
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.cAmount !== "") {
      writer.uint32(34).string(message.cAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.cAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      cAmount: isSet(object.cAmount) ? String(object.cAmount) : ""
    };
  },
  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.cAmount !== undefined && (obj.cAmount = message.cAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.cAmount = object.cAmount ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    const message = createBaseMsgUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.c_amount !== undefined && object.c_amount !== null) {
      message.cAmount = object.c_amount;
    }
    return message;
  },
  toAmino(message: MsgUnstake, useInterfaces: boolean = true): MsgUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.c_amount = message.cAmount === "" ? undefined : message.cAmount;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstake, useInterfaces: boolean = true): MsgUnstakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/Unstake",
      value: MsgUnstake.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg, useInterfaces: boolean = true): MsgUnstake {
    return MsgUnstake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstake.typeUrl, MsgUnstake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnstake.aminoType, MsgUnstake.typeUrl);
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {
    uAmount: Coin.fromPartial({})
  };
}
export const MsgUnstakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse",
  is(o: any): o is MsgUnstakeResponse {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || Coin.is(o.uAmount));
  },
  isSDK(o: any): o is MsgUnstakeResponseSDKType {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || Coin.isSDK(o.u_amount));
  },
  isAmino(o: any): o is MsgUnstakeResponseAmino {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || Coin.isAmino(o.u_amount));
  },
  encode(message: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uAmount !== undefined) {
      Coin.encode(message.uAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uAmount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeResponse {
    return {
      uAmount: isSet(object.uAmount) ? Coin.fromJSON(object.uAmount) : undefined
    };
  },
  toJSON(message: MsgUnstakeResponse): unknown {
    const obj: any = {};
    message.uAmount !== undefined && (obj.uAmount = message.uAmount ? Coin.toJSON(message.uAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.uAmount = object.uAmount !== undefined && object.uAmount !== null ? Coin.fromPartial(object.uAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = Coin.fromAmino(object.u_amount);
    }
    return message;
  },
  toAmino(message: MsgUnstakeResponse, useInterfaces: boolean = true): MsgUnstakeResponseAmino {
    const obj: any = {};
    obj.u_amount = message.uAmount ? Coin.toAmino(message.uAmount, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg, useInterfaces: boolean = true): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakeResponse.typeUrl, MsgUnstakeResponse);
function createBaseMsgRedeemUnstaked(): MsgRedeemUnstaked {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    uAmount: "",
    epoch: BigInt(0)
  };
}
export const MsgRedeemUnstaked = {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked",
  aminoType: "pryzm/icstaking/v1/RedeemUnstaked",
  is(o: any): o is MsgRedeemUnstaked {
    return o && (o.$typeUrl === MsgRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.uAmount === "string" && typeof o.epoch === "bigint");
  },
  isSDK(o: any): o is MsgRedeemUnstakedSDKType {
    return o && (o.$typeUrl === MsgRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.u_amount === "string" && typeof o.epoch === "bigint");
  },
  isAmino(o: any): o is MsgRedeemUnstakedAmino {
    return o && (o.$typeUrl === MsgRedeemUnstaked.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.u_amount === "string" && typeof o.epoch === "bigint");
  },
  encode(message: MsgRedeemUnstaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.uAmount !== "") {
      writer.uint32(34).string(message.uAmount);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedeemUnstaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.uAmount = reader.string();
          break;
        case 5:
          message.epoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemUnstaked {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      uAmount: isSet(object.uAmount) ? String(object.uAmount) : "",
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgRedeemUnstaked): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.uAmount !== undefined && (obj.uAmount = message.uAmount);
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemUnstaked>): MsgRedeemUnstaked {
    const message = createBaseMsgRedeemUnstaked();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.uAmount = object.uAmount ?? "";
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRedeemUnstakedAmino): MsgRedeemUnstaked {
    const message = createBaseMsgRedeemUnstaked();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.u_amount !== undefined && object.u_amount !== null) {
      message.uAmount = object.u_amount;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch);
    }
    return message;
  },
  toAmino(message: MsgRedeemUnstaked, useInterfaces: boolean = true): MsgRedeemUnstakedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.u_amount = message.uAmount === "" ? undefined : message.uAmount;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemUnstakedAminoMsg): MsgRedeemUnstaked {
    return MsgRedeemUnstaked.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemUnstaked, useInterfaces: boolean = true): MsgRedeemUnstakedAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RedeemUnstaked",
      value: MsgRedeemUnstaked.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRedeemUnstakedProtoMsg, useInterfaces: boolean = true): MsgRedeemUnstaked {
    return MsgRedeemUnstaked.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedeemUnstaked): Uint8Array {
    return MsgRedeemUnstaked.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemUnstaked): MsgRedeemUnstakedProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstaked",
      value: MsgRedeemUnstaked.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedeemUnstaked.typeUrl, MsgRedeemUnstaked);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRedeemUnstaked.aminoType, MsgRedeemUnstaked.typeUrl);
function createBaseMsgRedeemUnstakedResponse(): MsgRedeemUnstakedResponse {
  return {
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgRedeemUnstakedResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse",
  is(o: any): o is MsgRedeemUnstakedResponse {
    return o && (o.$typeUrl === MsgRedeemUnstakedResponse.typeUrl || Coin.is(o.amount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgRedeemUnstakedResponseSDKType {
    return o && (o.$typeUrl === MsgRedeemUnstakedResponse.typeUrl || Coin.isSDK(o.amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgRedeemUnstakedResponseAmino {
    return o && (o.$typeUrl === MsgRedeemUnstakedResponse.typeUrl || Coin.isAmino(o.amount) && Coin.isAmino(o.fee));
  },
  encode(message: MsgRedeemUnstakedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRedeemUnstakedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemUnstakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemUnstakedResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgRedeemUnstakedResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRedeemUnstakedResponse>): MsgRedeemUnstakedResponse {
    const message = createBaseMsgRedeemUnstakedResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemUnstakedResponseAmino): MsgRedeemUnstakedResponse {
    const message = createBaseMsgRedeemUnstakedResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgRedeemUnstakedResponse, useInterfaces: boolean = true): MsgRedeemUnstakedResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemUnstakedResponseAminoMsg): MsgRedeemUnstakedResponse {
    return MsgRedeemUnstakedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemUnstakedResponseProtoMsg, useInterfaces: boolean = true): MsgRedeemUnstakedResponse {
    return MsgRedeemUnstakedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRedeemUnstakedResponse): Uint8Array {
    return MsgRedeemUnstakedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemUnstakedResponse): MsgRedeemUnstakedResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRedeemUnstakedResponse",
      value: MsgRedeemUnstakedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRedeemUnstakedResponse.typeUrl, MsgRedeemUnstakedResponse);
function createBaseMsgInstantUnstake(): MsgInstantUnstake {
  return {
    creator: "",
    hostChain: "",
    transferChannel: "",
    minCAmount: "",
    maxCAmount: ""
  };
}
export const MsgInstantUnstake = {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake",
  aminoType: "pryzm/icstaking/v1/InstantUnstake",
  is(o: any): o is MsgInstantUnstake {
    return o && (o.$typeUrl === MsgInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.transferChannel === "string" && typeof o.minCAmount === "string" && typeof o.maxCAmount === "string");
  },
  isSDK(o: any): o is MsgInstantUnstakeSDKType {
    return o && (o.$typeUrl === MsgInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.min_c_amount === "string" && typeof o.max_c_amount === "string");
  },
  isAmino(o: any): o is MsgInstantUnstakeAmino {
    return o && (o.$typeUrl === MsgInstantUnstake.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.transfer_channel === "string" && typeof o.min_c_amount === "string" && typeof o.max_c_amount === "string");
  },
  encode(message: MsgInstantUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.transferChannel !== "") {
      writer.uint32(26).string(message.transferChannel);
    }
    if (message.minCAmount !== "") {
      writer.uint32(34).string(message.minCAmount);
    }
    if (message.maxCAmount !== "") {
      writer.uint32(42).string(message.maxCAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgInstantUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.transferChannel = reader.string();
          break;
        case 4:
          message.minCAmount = reader.string();
          break;
        case 5:
          message.maxCAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : "",
      minCAmount: isSet(object.minCAmount) ? String(object.minCAmount) : "",
      maxCAmount: isSet(object.maxCAmount) ? String(object.maxCAmount) : ""
    };
  },
  toJSON(message: MsgInstantUnstake): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    message.minCAmount !== undefined && (obj.minCAmount = message.minCAmount);
    message.maxCAmount !== undefined && (obj.maxCAmount = message.maxCAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgInstantUnstake>): MsgInstantUnstake {
    const message = createBaseMsgInstantUnstake();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.transferChannel = object.transferChannel ?? "";
    message.minCAmount = object.minCAmount ?? "";
    message.maxCAmount = object.maxCAmount ?? "";
    return message;
  },
  fromAmino(object: MsgInstantUnstakeAmino): MsgInstantUnstake {
    const message = createBaseMsgInstantUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    if (object.min_c_amount !== undefined && object.min_c_amount !== null) {
      message.minCAmount = object.min_c_amount;
    }
    if (object.max_c_amount !== undefined && object.max_c_amount !== null) {
      message.maxCAmount = object.max_c_amount;
    }
    return message;
  },
  toAmino(message: MsgInstantUnstake, useInterfaces: boolean = true): MsgInstantUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    obj.min_c_amount = message.minCAmount === "" ? undefined : message.minCAmount;
    obj.max_c_amount = message.maxCAmount === "" ? undefined : message.maxCAmount;
    return obj;
  },
  fromAminoMsg(object: MsgInstantUnstakeAminoMsg): MsgInstantUnstake {
    return MsgInstantUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgInstantUnstake, useInterfaces: boolean = true): MsgInstantUnstakeAminoMsg {
    return {
      type: "pryzm/icstaking/v1/InstantUnstake",
      value: MsgInstantUnstake.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgInstantUnstakeProtoMsg, useInterfaces: boolean = true): MsgInstantUnstake {
    return MsgInstantUnstake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgInstantUnstake): Uint8Array {
    return MsgInstantUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantUnstake): MsgInstantUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstake",
      value: MsgInstantUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantUnstake.typeUrl, MsgInstantUnstake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgInstantUnstake.aminoType, MsgInstantUnstake.typeUrl);
function createBaseMsgInstantUnstakeResponse(): MsgInstantUnstakeResponse {
  return {
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const MsgInstantUnstakeResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse",
  is(o: any): o is MsgInstantUnstakeResponse {
    return o && (o.$typeUrl === MsgInstantUnstakeResponse.typeUrl || Coin.is(o.amount) && Coin.is(o.fee));
  },
  isSDK(o: any): o is MsgInstantUnstakeResponseSDKType {
    return o && (o.$typeUrl === MsgInstantUnstakeResponse.typeUrl || Coin.isSDK(o.amount) && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is MsgInstantUnstakeResponseAmino {
    return o && (o.$typeUrl === MsgInstantUnstakeResponse.typeUrl || Coin.isAmino(o.amount) && Coin.isAmino(o.fee));
  },
  encode(message: MsgInstantUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgInstantUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInstantUnstakeResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgInstantUnstakeResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgInstantUnstakeResponse>): MsgInstantUnstakeResponse {
    const message = createBaseMsgInstantUnstakeResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgInstantUnstakeResponseAmino): MsgInstantUnstakeResponse {
    const message = createBaseMsgInstantUnstakeResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgInstantUnstakeResponse, useInterfaces: boolean = true): MsgInstantUnstakeResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInstantUnstakeResponseAminoMsg): MsgInstantUnstakeResponse {
    return MsgInstantUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInstantUnstakeResponseProtoMsg, useInterfaces: boolean = true): MsgInstantUnstakeResponse {
    return MsgInstantUnstakeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgInstantUnstakeResponse): Uint8Array {
    return MsgInstantUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInstantUnstakeResponse): MsgInstantUnstakeResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgInstantUnstakeResponse",
      value: MsgInstantUnstakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgInstantUnstakeResponse.typeUrl, MsgInstantUnstakeResponse);
function createBaseMsgRebalanceDelegations(): MsgRebalanceDelegations {
  return {
    creator: "",
    hostChain: ""
  };
}
export const MsgRebalanceDelegations = {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations",
  aminoType: "pryzm/icstaking/v1/RebalanceDelegations",
  is(o: any): o is MsgRebalanceDelegations {
    return o && (o.$typeUrl === MsgRebalanceDelegations.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string");
  },
  isSDK(o: any): o is MsgRebalanceDelegationsSDKType {
    return o && (o.$typeUrl === MsgRebalanceDelegations.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string");
  },
  isAmino(o: any): o is MsgRebalanceDelegationsAmino {
    return o && (o.$typeUrl === MsgRebalanceDelegations.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string");
  },
  encode(message: MsgRebalanceDelegations, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRebalanceDelegations {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRebalanceDelegations {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : ""
    };
  },
  toJSON(message: MsgRebalanceDelegations): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    return obj;
  },
  fromPartial(object: Partial<MsgRebalanceDelegations>): MsgRebalanceDelegations {
    const message = createBaseMsgRebalanceDelegations();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    return message;
  },
  fromAmino(object: MsgRebalanceDelegationsAmino): MsgRebalanceDelegations {
    const message = createBaseMsgRebalanceDelegations();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    return message;
  },
  toAmino(message: MsgRebalanceDelegations, useInterfaces: boolean = true): MsgRebalanceDelegationsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceDelegationsAminoMsg): MsgRebalanceDelegations {
    return MsgRebalanceDelegations.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRebalanceDelegations, useInterfaces: boolean = true): MsgRebalanceDelegationsAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RebalanceDelegations",
      value: MsgRebalanceDelegations.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRebalanceDelegationsProtoMsg, useInterfaces: boolean = true): MsgRebalanceDelegations {
    return MsgRebalanceDelegations.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRebalanceDelegations): Uint8Array {
    return MsgRebalanceDelegations.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceDelegations): MsgRebalanceDelegationsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegations",
      value: MsgRebalanceDelegations.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRebalanceDelegations.typeUrl, MsgRebalanceDelegations);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRebalanceDelegations.aminoType, MsgRebalanceDelegations.typeUrl);
function createBaseMsgRebalanceDelegationsResponse(): MsgRebalanceDelegationsResponse {
  return {};
}
export const MsgRebalanceDelegationsResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse",
  is(o: any): o is MsgRebalanceDelegationsResponse {
    return o && o.$typeUrl === MsgRebalanceDelegationsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRebalanceDelegationsResponseSDKType {
    return o && o.$typeUrl === MsgRebalanceDelegationsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRebalanceDelegationsResponseAmino {
    return o && o.$typeUrl === MsgRebalanceDelegationsResponse.typeUrl;
  },
  encode(_: MsgRebalanceDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRebalanceDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRebalanceDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRebalanceDelegationsResponse {
    return {};
  },
  toJSON(_: MsgRebalanceDelegationsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRebalanceDelegationsResponse>): MsgRebalanceDelegationsResponse {
    const message = createBaseMsgRebalanceDelegationsResponse();
    return message;
  },
  fromAmino(_: MsgRebalanceDelegationsResponseAmino): MsgRebalanceDelegationsResponse {
    const message = createBaseMsgRebalanceDelegationsResponse();
    return message;
  },
  toAmino(_: MsgRebalanceDelegationsResponse, useInterfaces: boolean = true): MsgRebalanceDelegationsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRebalanceDelegationsResponseAminoMsg): MsgRebalanceDelegationsResponse {
    return MsgRebalanceDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRebalanceDelegationsResponseProtoMsg, useInterfaces: boolean = true): MsgRebalanceDelegationsResponse {
    return MsgRebalanceDelegationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRebalanceDelegationsResponse): Uint8Array {
    return MsgRebalanceDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRebalanceDelegationsResponse): MsgRebalanceDelegationsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRebalanceDelegationsResponse",
      value: MsgRebalanceDelegationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRebalanceDelegationsResponse.typeUrl, MsgRebalanceDelegationsResponse);
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    creator: "",
    hostChain: "",
    registrationType: 0
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount",
  aminoType: "pryzm/icstaking/v1/RegInterchainAccount",
  is(o: any): o is MsgRegisterInterchainAccount {
    return o && (o.$typeUrl === MsgRegisterInterchainAccount.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && isSet(o.registrationType));
  },
  isSDK(o: any): o is MsgRegisterInterchainAccountSDKType {
    return o && (o.$typeUrl === MsgRegisterInterchainAccount.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && isSet(o.registration_type));
  },
  isAmino(o: any): o is MsgRegisterInterchainAccountAmino {
    return o && (o.$typeUrl === MsgRegisterInterchainAccount.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && isSet(o.registration_type));
  },
  encode(message: MsgRegisterInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.registrationType !== 0) {
      writer.uint32(24).int32(message.registrationType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.registrationType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      registrationType: isSet(object.registrationType) ? iCARegistrationTypeFromJSON(object.registrationType) : -1
    };
  },
  toJSON(message: MsgRegisterInterchainAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.registrationType !== undefined && (obj.registrationType = iCARegistrationTypeToJSON(message.registrationType));
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.registrationType = object.registrationType ?? 0;
    return message;
  },
  fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.registration_type !== undefined && object.registration_type !== null) {
      message.registrationType = object.registration_type;
    }
    return message;
  },
  toAmino(message: MsgRegisterInterchainAccount, useInterfaces: boolean = true): MsgRegisterInterchainAccountAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.registration_type = message.registrationType === 0 ? undefined : message.registrationType;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterInterchainAccount, useInterfaces: boolean = true): MsgRegisterInterchainAccountAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RegInterchainAccount",
      value: MsgRegisterInterchainAccount.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg, useInterfaces: boolean = true): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterInterchainAccount): Uint8Array {
    return MsgRegisterInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterInterchainAccount.typeUrl, MsgRegisterInterchainAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterInterchainAccount.aminoType, MsgRegisterInterchainAccount.typeUrl);
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse",
  is(o: any): o is MsgRegisterInterchainAccountResponse {
    return o && o.$typeUrl === MsgRegisterInterchainAccountResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterInterchainAccountResponseSDKType {
    return o && o.$typeUrl === MsgRegisterInterchainAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterInterchainAccountResponseAmino {
    return o && o.$typeUrl === MsgRegisterInterchainAccountResponse.typeUrl;
  },
  encode(_: MsgRegisterInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },
  toJSON(_: MsgRegisterInterchainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  toAmino(_: MsgRegisterInterchainAccountResponse, useInterfaces: boolean = true): MsgRegisterInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg, useInterfaces: boolean = true): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array {
    return MsgRegisterInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterInterchainAccountResponse.typeUrl, MsgRegisterInterchainAccountResponse);
function createBaseMsgCreateMultiSigConnection(): MsgCreateMultiSigConnection {
  return {
    creator: "",
    id: "",
    operator: ""
  };
}
export const MsgCreateMultiSigConnection = {
  typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnection",
  aminoType: "pryzm/icstaking/v1/CreateMultiSigConn",
  is(o: any): o is MsgCreateMultiSigConnection {
    return o && (o.$typeUrl === MsgCreateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  isSDK(o: any): o is MsgCreateMultiSigConnectionSDKType {
    return o && (o.$typeUrl === MsgCreateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  isAmino(o: any): o is MsgCreateMultiSigConnectionAmino {
    return o && (o.$typeUrl === MsgCreateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  encode(message: MsgCreateMultiSigConnection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateMultiSigConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiSigConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateMultiSigConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  toJSON(message: MsgCreateMultiSigConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateMultiSigConnection>): MsgCreateMultiSigConnection {
    const message = createBaseMsgCreateMultiSigConnection();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMultiSigConnectionAmino): MsgCreateMultiSigConnection {
    const message = createBaseMsgCreateMultiSigConnection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgCreateMultiSigConnection, useInterfaces: boolean = true): MsgCreateMultiSigConnectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiSigConnectionAminoMsg): MsgCreateMultiSigConnection {
    return MsgCreateMultiSigConnection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMultiSigConnection, useInterfaces: boolean = true): MsgCreateMultiSigConnectionAminoMsg {
    return {
      type: "pryzm/icstaking/v1/CreateMultiSigConn",
      value: MsgCreateMultiSigConnection.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgCreateMultiSigConnectionProtoMsg, useInterfaces: boolean = true): MsgCreateMultiSigConnection {
    return MsgCreateMultiSigConnection.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateMultiSigConnection): Uint8Array {
    return MsgCreateMultiSigConnection.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiSigConnection): MsgCreateMultiSigConnectionProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnection",
      value: MsgCreateMultiSigConnection.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateMultiSigConnection.typeUrl, MsgCreateMultiSigConnection);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateMultiSigConnection.aminoType, MsgCreateMultiSigConnection.typeUrl);
function createBaseMsgCreateMultiSigConnectionResponse(): MsgCreateMultiSigConnectionResponse {
  return {};
}
export const MsgCreateMultiSigConnectionResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnectionResponse",
  is(o: any): o is MsgCreateMultiSigConnectionResponse {
    return o && o.$typeUrl === MsgCreateMultiSigConnectionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateMultiSigConnectionResponseSDKType {
    return o && o.$typeUrl === MsgCreateMultiSigConnectionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateMultiSigConnectionResponseAmino {
    return o && o.$typeUrl === MsgCreateMultiSigConnectionResponse.typeUrl;
  },
  encode(_: MsgCreateMultiSigConnectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgCreateMultiSigConnectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMultiSigConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateMultiSigConnectionResponse {
    return {};
  },
  toJSON(_: MsgCreateMultiSigConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateMultiSigConnectionResponse>): MsgCreateMultiSigConnectionResponse {
    const message = createBaseMsgCreateMultiSigConnectionResponse();
    return message;
  },
  fromAmino(_: MsgCreateMultiSigConnectionResponseAmino): MsgCreateMultiSigConnectionResponse {
    const message = createBaseMsgCreateMultiSigConnectionResponse();
    return message;
  },
  toAmino(_: MsgCreateMultiSigConnectionResponse, useInterfaces: boolean = true): MsgCreateMultiSigConnectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateMultiSigConnectionResponseAminoMsg): MsgCreateMultiSigConnectionResponse {
    return MsgCreateMultiSigConnectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMultiSigConnectionResponseProtoMsg, useInterfaces: boolean = true): MsgCreateMultiSigConnectionResponse {
    return MsgCreateMultiSigConnectionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgCreateMultiSigConnectionResponse): Uint8Array {
    return MsgCreateMultiSigConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMultiSigConnectionResponse): MsgCreateMultiSigConnectionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgCreateMultiSigConnectionResponse",
      value: MsgCreateMultiSigConnectionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateMultiSigConnectionResponse.typeUrl, MsgCreateMultiSigConnectionResponse);
function createBaseMsgUpdateMultiSigConnection(): MsgUpdateMultiSigConnection {
  return {
    creator: "",
    id: "",
    operator: ""
  };
}
export const MsgUpdateMultiSigConnection = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnection",
  aminoType: "pryzm/icstaking/v1/UpdateMultiSigConn",
  is(o: any): o is MsgUpdateMultiSigConnection {
    return o && (o.$typeUrl === MsgUpdateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  isSDK(o: any): o is MsgUpdateMultiSigConnectionSDKType {
    return o && (o.$typeUrl === MsgUpdateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  isAmino(o: any): o is MsgUpdateMultiSigConnectionAmino {
    return o && (o.$typeUrl === MsgUpdateMultiSigConnection.typeUrl || typeof o.creator === "string" && typeof o.id === "string" && typeof o.operator === "string");
  },
  encode(message: MsgUpdateMultiSigConnection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateMultiSigConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMultiSigConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.operator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMultiSigConnection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      operator: isSet(object.operator) ? String(object.operator) : ""
    };
  },
  toJSON(message: MsgUpdateMultiSigConnection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.operator !== undefined && (obj.operator = message.operator);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateMultiSigConnection>): MsgUpdateMultiSigConnection {
    const message = createBaseMsgUpdateMultiSigConnection();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.operator = object.operator ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateMultiSigConnectionAmino): MsgUpdateMultiSigConnection {
    const message = createBaseMsgUpdateMultiSigConnection();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    return message;
  },
  toAmino(message: MsgUpdateMultiSigConnection, useInterfaces: boolean = true): MsgUpdateMultiSigConnectionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.operator = message.operator === "" ? undefined : message.operator;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMultiSigConnectionAminoMsg): MsgUpdateMultiSigConnection {
    return MsgUpdateMultiSigConnection.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMultiSigConnection, useInterfaces: boolean = true): MsgUpdateMultiSigConnectionAminoMsg {
    return {
      type: "pryzm/icstaking/v1/UpdateMultiSigConn",
      value: MsgUpdateMultiSigConnection.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateMultiSigConnectionProtoMsg, useInterfaces: boolean = true): MsgUpdateMultiSigConnection {
    return MsgUpdateMultiSigConnection.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateMultiSigConnection): Uint8Array {
    return MsgUpdateMultiSigConnection.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMultiSigConnection): MsgUpdateMultiSigConnectionProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnection",
      value: MsgUpdateMultiSigConnection.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateMultiSigConnection.typeUrl, MsgUpdateMultiSigConnection);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateMultiSigConnection.aminoType, MsgUpdateMultiSigConnection.typeUrl);
function createBaseMsgUpdateMultiSigConnectionResponse(): MsgUpdateMultiSigConnectionResponse {
  return {};
}
export const MsgUpdateMultiSigConnectionResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnectionResponse",
  is(o: any): o is MsgUpdateMultiSigConnectionResponse {
    return o && o.$typeUrl === MsgUpdateMultiSigConnectionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateMultiSigConnectionResponseSDKType {
    return o && o.$typeUrl === MsgUpdateMultiSigConnectionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateMultiSigConnectionResponseAmino {
    return o && o.$typeUrl === MsgUpdateMultiSigConnectionResponse.typeUrl;
  },
  encode(_: MsgUpdateMultiSigConnectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateMultiSigConnectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMultiSigConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateMultiSigConnectionResponse {
    return {};
  },
  toJSON(_: MsgUpdateMultiSigConnectionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateMultiSigConnectionResponse>): MsgUpdateMultiSigConnectionResponse {
    const message = createBaseMsgUpdateMultiSigConnectionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMultiSigConnectionResponseAmino): MsgUpdateMultiSigConnectionResponse {
    const message = createBaseMsgUpdateMultiSigConnectionResponse();
    return message;
  },
  toAmino(_: MsgUpdateMultiSigConnectionResponse, useInterfaces: boolean = true): MsgUpdateMultiSigConnectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMultiSigConnectionResponseAminoMsg): MsgUpdateMultiSigConnectionResponse {
    return MsgUpdateMultiSigConnectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMultiSigConnectionResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateMultiSigConnectionResponse {
    return MsgUpdateMultiSigConnectionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateMultiSigConnectionResponse): Uint8Array {
    return MsgUpdateMultiSigConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMultiSigConnectionResponse): MsgUpdateMultiSigConnectionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgUpdateMultiSigConnectionResponse",
      value: MsgUpdateMultiSigConnectionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateMultiSigConnectionResponse.typeUrl, MsgUpdateMultiSigConnectionResponse);
function createBaseMsgAcknowledgeMultiSigPacket(): MsgAcknowledgeMultiSigPacket {
  return {
    creator: "",
    connectionId: "",
    sequence: BigInt(0),
    ack: Acknowledgement.fromPartial({}),
    height: Height.fromPartial({}),
    txHash: ""
  };
}
export const MsgAcknowledgeMultiSigPacket = {
  typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacket",
  aminoType: "pryzm/icstaking/v1/AckMultiSigPacket",
  is(o: any): o is MsgAcknowledgeMultiSigPacket {
    return o && (o.$typeUrl === MsgAcknowledgeMultiSigPacket.typeUrl || typeof o.creator === "string" && typeof o.connectionId === "string" && typeof o.sequence === "bigint" && Acknowledgement.is(o.ack) && Height.is(o.height) && typeof o.txHash === "string");
  },
  isSDK(o: any): o is MsgAcknowledgeMultiSigPacketSDKType {
    return o && (o.$typeUrl === MsgAcknowledgeMultiSigPacket.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.sequence === "bigint" && Acknowledgement.isSDK(o.ack) && Height.isSDK(o.height) && typeof o.tx_hash === "string");
  },
  isAmino(o: any): o is MsgAcknowledgeMultiSigPacketAmino {
    return o && (o.$typeUrl === MsgAcknowledgeMultiSigPacket.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.sequence === "bigint" && Acknowledgement.isAmino(o.ack) && Height.isAmino(o.height) && typeof o.tx_hash === "string");
  },
  encode(message: MsgAcknowledgeMultiSigPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.ack !== undefined) {
      Acknowledgement.encode(message.ack, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(42).fork()).ldelim();
    }
    if (message.txHash !== "") {
      writer.uint32(50).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgeMultiSigPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        case 4:
          message.ack = Acknowledgement.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.height = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgeMultiSigPacket {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      ack: isSet(object.ack) ? Acknowledgement.fromJSON(object.ack) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      txHash: isSet(object.txHash) ? String(object.txHash) : ""
    };
  },
  toJSON(message: MsgAcknowledgeMultiSigPacket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.ack !== undefined && (obj.ack = message.ack ? Acknowledgement.toJSON(message.ack) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },
  fromPartial(object: Partial<MsgAcknowledgeMultiSigPacket>): MsgAcknowledgeMultiSigPacket {
    const message = createBaseMsgAcknowledgeMultiSigPacket();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.ack = object.ack !== undefined && object.ack !== null ? Acknowledgement.fromPartial(object.ack) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: MsgAcknowledgeMultiSigPacketAmino): MsgAcknowledgeMultiSigPacket {
    const message = createBaseMsgAcknowledgeMultiSigPacket();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.ack !== undefined && object.ack !== null) {
      message.ack = Acknowledgement.fromAmino(object.ack);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgeMultiSigPacket, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacketAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.ack = message.ack ? Acknowledgement.toAmino(message.ack, useInterfaces) : undefined;
    obj.height = message.height ? Height.toAmino(message.height, useInterfaces) : {};
    obj.tx_hash = message.txHash === "" ? undefined : message.txHash;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgeMultiSigPacketAminoMsg): MsgAcknowledgeMultiSigPacket {
    return MsgAcknowledgeMultiSigPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgeMultiSigPacket, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacketAminoMsg {
    return {
      type: "pryzm/icstaking/v1/AckMultiSigPacket",
      value: MsgAcknowledgeMultiSigPacket.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgAcknowledgeMultiSigPacketProtoMsg, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacket {
    return MsgAcknowledgeMultiSigPacket.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAcknowledgeMultiSigPacket): Uint8Array {
    return MsgAcknowledgeMultiSigPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgeMultiSigPacket): MsgAcknowledgeMultiSigPacketProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacket",
      value: MsgAcknowledgeMultiSigPacket.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcknowledgeMultiSigPacket.typeUrl, MsgAcknowledgeMultiSigPacket);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAcknowledgeMultiSigPacket.aminoType, MsgAcknowledgeMultiSigPacket.typeUrl);
function createBaseMsgAcknowledgeMultiSigPacketResponse(): MsgAcknowledgeMultiSigPacketResponse {
  return {};
}
export const MsgAcknowledgeMultiSigPacketResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacketResponse",
  is(o: any): o is MsgAcknowledgeMultiSigPacketResponse {
    return o && o.$typeUrl === MsgAcknowledgeMultiSigPacketResponse.typeUrl;
  },
  isSDK(o: any): o is MsgAcknowledgeMultiSigPacketResponseSDKType {
    return o && o.$typeUrl === MsgAcknowledgeMultiSigPacketResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAcknowledgeMultiSigPacketResponseAmino {
    return o && o.$typeUrl === MsgAcknowledgeMultiSigPacketResponse.typeUrl;
  },
  encode(_: MsgAcknowledgeMultiSigPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgeMultiSigPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAcknowledgeMultiSigPacketResponse {
    return {};
  },
  toJSON(_: MsgAcknowledgeMultiSigPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAcknowledgeMultiSigPacketResponse>): MsgAcknowledgeMultiSigPacketResponse {
    const message = createBaseMsgAcknowledgeMultiSigPacketResponse();
    return message;
  },
  fromAmino(_: MsgAcknowledgeMultiSigPacketResponseAmino): MsgAcknowledgeMultiSigPacketResponse {
    const message = createBaseMsgAcknowledgeMultiSigPacketResponse();
    return message;
  },
  toAmino(_: MsgAcknowledgeMultiSigPacketResponse, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgeMultiSigPacketResponseAminoMsg): MsgAcknowledgeMultiSigPacketResponse {
    return MsgAcknowledgeMultiSigPacketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAcknowledgeMultiSigPacketResponseProtoMsg, useInterfaces: boolean = true): MsgAcknowledgeMultiSigPacketResponse {
    return MsgAcknowledgeMultiSigPacketResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgAcknowledgeMultiSigPacketResponse): Uint8Array {
    return MsgAcknowledgeMultiSigPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgeMultiSigPacketResponse): MsgAcknowledgeMultiSigPacketResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgAcknowledgeMultiSigPacketResponse",
      value: MsgAcknowledgeMultiSigPacketResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAcknowledgeMultiSigPacketResponse.typeUrl, MsgAcknowledgeMultiSigPacketResponse);
function createBaseMsgRegisterHostAccounts(): MsgRegisterHostAccounts {
  return {
    creator: "",
    hostChain: "",
    delegationAddress: "",
    rewardAddress: "",
    sweepAddress: ""
  };
}
export const MsgRegisterHostAccounts = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccounts",
  aminoType: "pryzm/icstaking/v1/RegisterHostAccounts",
  is(o: any): o is MsgRegisterHostAccounts {
    return o && (o.$typeUrl === MsgRegisterHostAccounts.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.delegationAddress === "string" && typeof o.rewardAddress === "string" && typeof o.sweepAddress === "string");
  },
  isSDK(o: any): o is MsgRegisterHostAccountsSDKType {
    return o && (o.$typeUrl === MsgRegisterHostAccounts.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.delegation_address === "string" && typeof o.reward_address === "string" && typeof o.sweep_address === "string");
  },
  isAmino(o: any): o is MsgRegisterHostAccountsAmino {
    return o && (o.$typeUrl === MsgRegisterHostAccounts.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.delegation_address === "string" && typeof o.reward_address === "string" && typeof o.sweep_address === "string");
  },
  encode(message: MsgRegisterHostAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.delegationAddress !== "") {
      writer.uint32(26).string(message.delegationAddress);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(34).string(message.rewardAddress);
    }
    if (message.sweepAddress !== "") {
      writer.uint32(42).string(message.sweepAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterHostAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.delegationAddress = reader.string();
          break;
        case 4:
          message.rewardAddress = reader.string();
          break;
        case 5:
          message.sweepAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterHostAccounts {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      delegationAddress: isSet(object.delegationAddress) ? String(object.delegationAddress) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      sweepAddress: isSet(object.sweepAddress) ? String(object.sweepAddress) : ""
    };
  },
  toJSON(message: MsgRegisterHostAccounts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.delegationAddress !== undefined && (obj.delegationAddress = message.delegationAddress);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.sweepAddress !== undefined && (obj.sweepAddress = message.sweepAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterHostAccounts>): MsgRegisterHostAccounts {
    const message = createBaseMsgRegisterHostAccounts();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.delegationAddress = object.delegationAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.sweepAddress = object.sweepAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterHostAccountsAmino): MsgRegisterHostAccounts {
    const message = createBaseMsgRegisterHostAccounts();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.delegation_address !== undefined && object.delegation_address !== null) {
      message.delegationAddress = object.delegation_address;
    }
    if (object.reward_address !== undefined && object.reward_address !== null) {
      message.rewardAddress = object.reward_address;
    }
    if (object.sweep_address !== undefined && object.sweep_address !== null) {
      message.sweepAddress = object.sweep_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterHostAccounts, useInterfaces: boolean = true): MsgRegisterHostAccountsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.delegation_address = message.delegationAddress === "" ? undefined : message.delegationAddress;
    obj.reward_address = message.rewardAddress === "" ? undefined : message.rewardAddress;
    obj.sweep_address = message.sweepAddress === "" ? undefined : message.sweepAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostAccountsAminoMsg): MsgRegisterHostAccounts {
    return MsgRegisterHostAccounts.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterHostAccounts, useInterfaces: boolean = true): MsgRegisterHostAccountsAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RegisterHostAccounts",
      value: MsgRegisterHostAccounts.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRegisterHostAccountsProtoMsg, useInterfaces: boolean = true): MsgRegisterHostAccounts {
    return MsgRegisterHostAccounts.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterHostAccounts): Uint8Array {
    return MsgRegisterHostAccounts.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostAccounts): MsgRegisterHostAccountsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccounts",
      value: MsgRegisterHostAccounts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterHostAccounts.typeUrl, MsgRegisterHostAccounts);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterHostAccounts.aminoType, MsgRegisterHostAccounts.typeUrl);
function createBaseMsgRegisterHostAccountsResponse(): MsgRegisterHostAccountsResponse {
  return {};
}
export const MsgRegisterHostAccountsResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccountsResponse",
  is(o: any): o is MsgRegisterHostAccountsResponse {
    return o && o.$typeUrl === MsgRegisterHostAccountsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterHostAccountsResponseSDKType {
    return o && o.$typeUrl === MsgRegisterHostAccountsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterHostAccountsResponseAmino {
    return o && o.$typeUrl === MsgRegisterHostAccountsResponse.typeUrl;
  },
  encode(_: MsgRegisterHostAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterHostAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterHostAccountsResponse {
    return {};
  },
  toJSON(_: MsgRegisterHostAccountsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterHostAccountsResponse>): MsgRegisterHostAccountsResponse {
    const message = createBaseMsgRegisterHostAccountsResponse();
    return message;
  },
  fromAmino(_: MsgRegisterHostAccountsResponseAmino): MsgRegisterHostAccountsResponse {
    const message = createBaseMsgRegisterHostAccountsResponse();
    return message;
  },
  toAmino(_: MsgRegisterHostAccountsResponse, useInterfaces: boolean = true): MsgRegisterHostAccountsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterHostAccountsResponseAminoMsg): MsgRegisterHostAccountsResponse {
    return MsgRegisterHostAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterHostAccountsResponseProtoMsg, useInterfaces: boolean = true): MsgRegisterHostAccountsResponse {
    return MsgRegisterHostAccountsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterHostAccountsResponse): Uint8Array {
    return MsgRegisterHostAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterHostAccountsResponse): MsgRegisterHostAccountsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRegisterHostAccountsResponse",
      value: MsgRegisterHostAccountsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterHostAccountsResponse.typeUrl, MsgRegisterHostAccountsResponse);
function createBaseMsgRetryFailedLsmTransfer(): MsgRetryFailedLsmTransfer {
  return {
    creator: "",
    hostChain: "",
    lsmDenom: "",
    transferChannel: ""
  };
}
export const MsgRetryFailedLsmTransfer = {
  typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransfer",
  aminoType: "pryzm/icstaking/v1/RetryFailLsmTransfer",
  is(o: any): o is MsgRetryFailedLsmTransfer {
    return o && (o.$typeUrl === MsgRetryFailedLsmTransfer.typeUrl || typeof o.creator === "string" && typeof o.hostChain === "string" && typeof o.lsmDenom === "string" && typeof o.transferChannel === "string");
  },
  isSDK(o: any): o is MsgRetryFailedLsmTransferSDKType {
    return o && (o.$typeUrl === MsgRetryFailedLsmTransfer.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.lsm_denom === "string" && typeof o.transfer_channel === "string");
  },
  isAmino(o: any): o is MsgRetryFailedLsmTransferAmino {
    return o && (o.$typeUrl === MsgRetryFailedLsmTransfer.typeUrl || typeof o.creator === "string" && typeof o.host_chain === "string" && typeof o.lsm_denom === "string" && typeof o.transfer_channel === "string");
  },
  encode(message: MsgRetryFailedLsmTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hostChain !== "") {
      writer.uint32(18).string(message.hostChain);
    }
    if (message.lsmDenom !== "") {
      writer.uint32(26).string(message.lsmDenom);
    }
    if (message.transferChannel !== "") {
      writer.uint32(34).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRetryFailedLsmTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryFailedLsmTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hostChain = reader.string();
          break;
        case 3:
          message.lsmDenom = reader.string();
          break;
        case 4:
          message.transferChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRetryFailedLsmTransfer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hostChain: isSet(object.hostChain) ? String(object.hostChain) : "",
      lsmDenom: isSet(object.lsmDenom) ? String(object.lsmDenom) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : ""
    };
  },
  toJSON(message: MsgRetryFailedLsmTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hostChain !== undefined && (obj.hostChain = message.hostChain);
    message.lsmDenom !== undefined && (obj.lsmDenom = message.lsmDenom);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    return obj;
  },
  fromPartial(object: Partial<MsgRetryFailedLsmTransfer>): MsgRetryFailedLsmTransfer {
    const message = createBaseMsgRetryFailedLsmTransfer();
    message.creator = object.creator ?? "";
    message.hostChain = object.hostChain ?? "";
    message.lsmDenom = object.lsmDenom ?? "";
    message.transferChannel = object.transferChannel ?? "";
    return message;
  },
  fromAmino(object: MsgRetryFailedLsmTransferAmino): MsgRetryFailedLsmTransfer {
    const message = createBaseMsgRetryFailedLsmTransfer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.host_chain !== undefined && object.host_chain !== null) {
      message.hostChain = object.host_chain;
    }
    if (object.lsm_denom !== undefined && object.lsm_denom !== null) {
      message.lsmDenom = object.lsm_denom;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    return message;
  },
  toAmino(message: MsgRetryFailedLsmTransfer, useInterfaces: boolean = true): MsgRetryFailedLsmTransferAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.host_chain = message.hostChain === "" ? undefined : message.hostChain;
    obj.lsm_denom = message.lsmDenom === "" ? undefined : message.lsmDenom;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    return obj;
  },
  fromAminoMsg(object: MsgRetryFailedLsmTransferAminoMsg): MsgRetryFailedLsmTransfer {
    return MsgRetryFailedLsmTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRetryFailedLsmTransfer, useInterfaces: boolean = true): MsgRetryFailedLsmTransferAminoMsg {
    return {
      type: "pryzm/icstaking/v1/RetryFailLsmTransfer",
      value: MsgRetryFailedLsmTransfer.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRetryFailedLsmTransferProtoMsg, useInterfaces: boolean = true): MsgRetryFailedLsmTransfer {
    return MsgRetryFailedLsmTransfer.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRetryFailedLsmTransfer): Uint8Array {
    return MsgRetryFailedLsmTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryFailedLsmTransfer): MsgRetryFailedLsmTransferProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransfer",
      value: MsgRetryFailedLsmTransfer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRetryFailedLsmTransfer.typeUrl, MsgRetryFailedLsmTransfer);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRetryFailedLsmTransfer.aminoType, MsgRetryFailedLsmTransfer.typeUrl);
function createBaseMsgRetryFailedLsmTransferResponse(): MsgRetryFailedLsmTransferResponse {
  return {};
}
export const MsgRetryFailedLsmTransferResponse = {
  typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransferResponse",
  is(o: any): o is MsgRetryFailedLsmTransferResponse {
    return o && o.$typeUrl === MsgRetryFailedLsmTransferResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRetryFailedLsmTransferResponseSDKType {
    return o && o.$typeUrl === MsgRetryFailedLsmTransferResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRetryFailedLsmTransferResponseAmino {
    return o && o.$typeUrl === MsgRetryFailedLsmTransferResponse.typeUrl;
  },
  encode(_: MsgRetryFailedLsmTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRetryFailedLsmTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetryFailedLsmTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRetryFailedLsmTransferResponse {
    return {};
  },
  toJSON(_: MsgRetryFailedLsmTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRetryFailedLsmTransferResponse>): MsgRetryFailedLsmTransferResponse {
    const message = createBaseMsgRetryFailedLsmTransferResponse();
    return message;
  },
  fromAmino(_: MsgRetryFailedLsmTransferResponseAmino): MsgRetryFailedLsmTransferResponse {
    const message = createBaseMsgRetryFailedLsmTransferResponse();
    return message;
  },
  toAmino(_: MsgRetryFailedLsmTransferResponse, useInterfaces: boolean = true): MsgRetryFailedLsmTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRetryFailedLsmTransferResponseAminoMsg): MsgRetryFailedLsmTransferResponse {
    return MsgRetryFailedLsmTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRetryFailedLsmTransferResponseProtoMsg, useInterfaces: boolean = true): MsgRetryFailedLsmTransferResponse {
    return MsgRetryFailedLsmTransferResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRetryFailedLsmTransferResponse): Uint8Array {
    return MsgRetryFailedLsmTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRetryFailedLsmTransferResponse): MsgRetryFailedLsmTransferResponseProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.MsgRetryFailedLsmTransferResponse",
      value: MsgRetryFailedLsmTransferResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRetryFailedLsmTransferResponse.typeUrl, MsgRetryFailedLsmTransferResponse);