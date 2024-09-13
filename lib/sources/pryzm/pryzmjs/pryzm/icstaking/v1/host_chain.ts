import { StakingParams, StakingParamsAmino, StakingParamsSDKType } from "./params";
import { Height, HeightAmino, HeightSDKType } from "../../../ibc/core/client/v1/client";
import { isSet, padDecimal } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
/** The types of available connection protocols */
export enum ConnectionType {
  /** ConnectionType_ICA - interchain account connection using ibc-go ICS-27 */
  ConnectionType_ICA = 0,
  /** ConnectionType_MULTI_SIG - connecting to the host chain using a trusted multi-sig account */
  ConnectionType_MULTI_SIG = 1,
  /** ConnectionType_LOOP_BACK - connection to the Pryzm itself */
  ConnectionType_LOOP_BACK = 2,
  UNRECOGNIZED = -1,
}
export const ConnectionTypeSDKType = ConnectionType;
export const ConnectionTypeAmino = ConnectionType;
export function connectionTypeFromJSON(object: any): ConnectionType {
  switch (object) {
    case 0:
    case "ConnectionType_ICA":
      return ConnectionType.ConnectionType_ICA;
    case 1:
    case "ConnectionType_MULTI_SIG":
      return ConnectionType.ConnectionType_MULTI_SIG;
    case 2:
    case "ConnectionType_LOOP_BACK":
      return ConnectionType.ConnectionType_LOOP_BACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionType.UNRECOGNIZED;
  }
}
export function connectionTypeToJSON(object: ConnectionType): string {
  switch (object) {
    case ConnectionType.ConnectionType_ICA:
      return "ConnectionType_ICA";
    case ConnectionType.ConnectionType_MULTI_SIG:
      return "ConnectionType_MULTI_SIG";
    case ConnectionType.ConnectionType_LOOP_BACK:
      return "ConnectionType_LOOP_BACK";
    case ConnectionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Types of transfer channels */
export enum TransferChannelType {
  /** TransferChannelType_IBC - IBC transfer */
  TransferChannelType_IBC = 0,
  /** TransferChannelType_LOOP_BACK - transfer to Pryzm itself */
  TransferChannelType_LOOP_BACK = 1,
  UNRECOGNIZED = -1,
}
export const TransferChannelTypeSDKType = TransferChannelType;
export const TransferChannelTypeAmino = TransferChannelType;
export function transferChannelTypeFromJSON(object: any): TransferChannelType {
  switch (object) {
    case 0:
    case "TransferChannelType_IBC":
      return TransferChannelType.TransferChannelType_IBC;
    case 1:
    case "TransferChannelType_LOOP_BACK":
      return TransferChannelType.TransferChannelType_LOOP_BACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferChannelType.UNRECOGNIZED;
  }
}
export function transferChannelTypeToJSON(object: TransferChannelType): string {
  switch (object) {
    case TransferChannelType.TransferChannelType_IBC:
      return "TransferChannelType_IBC";
    case TransferChannelType.TransferChannelType_LOOP_BACK:
      return "TransferChannelType_LOOP_BACK";
    case TransferChannelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum AccountState {
  NOT_REGISTERED = 0,
  REGISTERING = 1,
  REGISTERED = 2,
  UNRECOGNIZED = -1,
}
export const AccountStateSDKType = AccountState;
export const AccountStateAmino = AccountState;
export function accountStateFromJSON(object: any): AccountState {
  switch (object) {
    case 0:
    case "NOT_REGISTERED":
      return AccountState.NOT_REGISTERED;
    case 1:
    case "REGISTERING":
      return AccountState.REGISTERING;
    case 2:
    case "REGISTERED":
      return AccountState.REGISTERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountState.UNRECOGNIZED;
  }
}
export function accountStateToJSON(object: AccountState): string {
  switch (object) {
    case AccountState.NOT_REGISTERED:
      return "NOT_REGISTERED";
    case AccountState.REGISTERING:
      return "REGISTERING";
    case AccountState.REGISTERED:
      return "REGISTERED";
    case AccountState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum State {
  INITIALIZING = 0,
  IDLE = 1,
  TRANSFERRING = 2,
  DELEGATING = 3,
  UNDELEGATING = 4,
  REDELEGATING = 5,
  COMPOUNDING = 6,
  COLLECTING = 7,
  SWEEPING = 8,
  LSM_REDEEMING = 9,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "INITIALIZING":
      return State.INITIALIZING;
    case 1:
    case "IDLE":
      return State.IDLE;
    case 2:
    case "TRANSFERRING":
      return State.TRANSFERRING;
    case 3:
    case "DELEGATING":
      return State.DELEGATING;
    case 4:
    case "UNDELEGATING":
      return State.UNDELEGATING;
    case 5:
    case "REDELEGATING":
      return State.REDELEGATING;
    case 6:
    case "COMPOUNDING":
      return State.COMPOUNDING;
    case 7:
    case "COLLECTING":
      return State.COLLECTING;
    case 8:
    case "SWEEPING":
      return State.SWEEPING;
    case 9:
    case "LSM_REDEEMING":
      return State.LSM_REDEEMING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.INITIALIZING:
      return "INITIALIZING";
    case State.IDLE:
      return "IDLE";
    case State.TRANSFERRING:
      return "TRANSFERRING";
    case State.DELEGATING:
      return "DELEGATING";
    case State.UNDELEGATING:
      return "UNDELEGATING";
    case State.REDELEGATING:
      return "REDELEGATING";
    case State.COMPOUNDING:
      return "COMPOUNDING";
    case State.COLLECTING:
      return "COLLECTING";
    case State.SWEEPING:
      return "SWEEPING";
    case State.LSM_REDEEMING:
      return "LSM_REDEEMING";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The properties of the target chain for staking */
export interface HostChain {
  /** A unique user-provided identifier. Is used in the cToken denom */
  id: string;
  /** connection type. connection type and connection id are unique together */
  connectionType: ConnectionType;
  /** the identifier for connection. connection id and connection type are unique together */
  connectionId: string;
  /** the base denom of the token to be staked on the target chain */
  baseDenom: string;
  /** list of supported transfer channels for transferring the base_denom tokens between the host chain and Pryzm */
  transferChannels: TransferChannel[];
  /** Parameters for staking/unstaking on the host chain */
  params: StakingParams;
  /** list of whitelisted validators to which Pryzm sends the staked funds. */
  validators: Validator[];
  /** If true, Pryzm will allow users to stake using the LSM shares minted on the host chain. */
  allowLsmShares: boolean;
}
export interface HostChainProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostChain";
  value: Uint8Array;
}
/** The properties of the target chain for staking */
export interface HostChainAmino {
  /** A unique user-provided identifier. Is used in the cToken denom */
  id?: string;
  /** connection type. connection type and connection id are unique together */
  connection_type?: ConnectionType;
  /** the identifier for connection. connection id and connection type are unique together */
  connection_id?: string;
  /** the base denom of the token to be staked on the target chain */
  base_denom?: string;
  /** list of supported transfer channels for transferring the base_denom tokens between the host chain and Pryzm */
  transfer_channels?: TransferChannelAmino[];
  /** Parameters for staking/unstaking on the host chain */
  params: StakingParamsAmino;
  /** list of whitelisted validators to which Pryzm sends the staked funds. */
  validators?: ValidatorAmino[];
  /** If true, Pryzm will allow users to stake using the LSM shares minted on the host chain. */
  allow_lsm_shares?: boolean;
}
export interface HostChainAminoMsg {
  type: "/pryzm.icstaking.v1.HostChain";
  value: HostChainAmino;
}
/** The properties of the target chain for staking */
export interface HostChainSDKType {
  id: string;
  connection_type: ConnectionType;
  connection_id: string;
  base_denom: string;
  transfer_channels: TransferChannelSDKType[];
  params: StakingParamsSDKType;
  validators: ValidatorSDKType[];
  allow_lsm_shares: boolean;
}
/** Properties of a transfer channel */
export interface TransferChannel {
  /** the type of the channel */
  type: TransferChannelType;
  /** the id of the channel. in the case of IBC channel type, this is the channel name. */
  id: string;
  /**
   * Optional. This is the name of the token on the receiving chain.
   * This is useful when a bridge is being used and the underlying asset is wrapped on the bridge, like axlWETH.
   */
  wrappedDenom: string;
  /**
   * Optional. This is the name of the target chain.
   * This is useful when a bridge is being used and the host chain is different with the receiving chain.
   */
  destinationChain: string;
}
export interface TransferChannelProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.TransferChannel";
  value: Uint8Array;
}
/** Properties of a transfer channel */
export interface TransferChannelAmino {
  /** the type of the channel */
  type?: TransferChannelType;
  /** the id of the channel. in the case of IBC channel type, this is the channel name. */
  id?: string;
  /**
   * Optional. This is the name of the token on the receiving chain.
   * This is useful when a bridge is being used and the underlying asset is wrapped on the bridge, like axlWETH.
   */
  wrapped_denom?: string;
  /**
   * Optional. This is the name of the target chain.
   * This is useful when a bridge is being used and the host chain is different with the receiving chain.
   */
  destination_chain?: string;
}
export interface TransferChannelAminoMsg {
  type: "/pryzm.icstaking.v1.TransferChannel";
  value: TransferChannelAmino;
}
/** Properties of a transfer channel */
export interface TransferChannelSDKType {
  type: TransferChannelType;
  id: string;
  wrapped_denom: string;
  destination_chain: string;
}
export interface Validator {
  /** validator's address on the host chain */
  address: string;
  /** The weight of delegation to the validator. Total weight of all validators per host chain must be equal to 1. */
  weight: string;
  /** whether users can stake the lsm shares minted from this validator */
  allowLsmShares: boolean;
}
export interface ValidatorProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  /** validator's address on the host chain */
  address?: string;
  /** The weight of delegation to the validator. Total weight of all validators per host chain must be equal to 1. */
  weight?: string;
  /** whether users can stake the lsm shares minted from this validator */
  allow_lsm_shares?: boolean;
}
export interface ValidatorAminoMsg {
  type: "/pryzm.icstaking.v1.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  address: string;
  weight: string;
  allow_lsm_shares: boolean;
}
/** A subset of state on the host chain needed by Pryzm */
export interface HostChainState {
  /** The id of the chain */
  hostChainId: string;
  /** Information about the interchain accounts */
  hostAccounts: HostAccounts;
  /** list of validators and their state containing the delegation amount */
  validatorStates: ValidatorState[];
  /** The amount of assets that are in the delegation account and ready to be delegated */
  amountToBeDelegated: string;
  /** The amount of undelegated assets that are currently in the delegation account waiting to be collected */
  undelegatedAmountToCollect: string;
  /** The current exchange rate of cToken to the host chain staking token */
  exchangeRate: string;
  /** The current state of interchain operations state machine */
  state: State;
  /**
   * The last host chain's block height in which PRYZM's state is changed to IDLE
   * setting state to IDLE happens when an ack/timeout received for an interchain operation,
   * so this is the height of the last received ack from host chain
   */
  lastIdleStateHostHeight: Height;
  /** The amount of LSM tokens that are in queue to be transferred and redeemed on the host chain */
  lockedLsmValue: string;
  /** The amount of fee taken from rewards that is collected and waiting to be transferred from host chain to treasury */
  collectedFee: string;
}
export interface HostChainStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostChainState";
  value: Uint8Array;
}
/** A subset of state on the host chain needed by Pryzm */
export interface HostChainStateAmino {
  /** The id of the chain */
  host_chain_id?: string;
  /** Information about the interchain accounts */
  host_accounts?: HostAccountsAmino;
  /** list of validators and their state containing the delegation amount */
  validator_states?: ValidatorStateAmino[];
  /** The amount of assets that are in the delegation account and ready to be delegated */
  amount_to_be_delegated?: string;
  /** The amount of undelegated assets that are currently in the delegation account waiting to be collected */
  undelegated_amount_to_collect?: string;
  /** The current exchange rate of cToken to the host chain staking token */
  exchange_rate?: string;
  /** The current state of interchain operations state machine */
  state?: State;
  /**
   * The last host chain's block height in which PRYZM's state is changed to IDLE
   * setting state to IDLE happens when an ack/timeout received for an interchain operation,
   * so this is the height of the last received ack from host chain
   */
  last_idle_state_host_height?: HeightAmino;
  /** The amount of LSM tokens that are in queue to be transferred and redeemed on the host chain */
  locked_lsm_value?: string;
  /** The amount of fee taken from rewards that is collected and waiting to be transferred from host chain to treasury */
  collected_fee?: string;
}
export interface HostChainStateAminoMsg {
  type: "/pryzm.icstaking.v1.HostChainState";
  value: HostChainStateAmino;
}
/** A subset of state on the host chain needed by Pryzm */
export interface HostChainStateSDKType {
  host_chain_id: string;
  host_accounts: HostAccountsSDKType;
  validator_states: ValidatorStateSDKType[];
  amount_to_be_delegated: string;
  undelegated_amount_to_collect: string;
  exchange_rate: string;
  state: State;
  last_idle_state_host_height: HeightSDKType;
  locked_lsm_value: string;
  collected_fee: string;
}
/** The interchain accounts */
export interface HostAccounts {
  delegation: HostAccount;
  reward: HostAccount;
  sweep: HostAccount;
  /**
   * This is the state of setting the reward account as the account which receives the staking rewards on host chain.
   * On cosmos based chains, the reward account is registered using MsgSetWithdrawAddress in distribution module.
   */
  rewardAccountClaimingState: AccountState;
}
export interface HostAccountsProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostAccounts";
  value: Uint8Array;
}
/** The interchain accounts */
export interface HostAccountsAmino {
  delegation?: HostAccountAmino;
  reward?: HostAccountAmino;
  sweep?: HostAccountAmino;
  /**
   * This is the state of setting the reward account as the account which receives the staking rewards on host chain.
   * On cosmos based chains, the reward account is registered using MsgSetWithdrawAddress in distribution module.
   */
  reward_account_claiming_state?: AccountState;
}
export interface HostAccountsAminoMsg {
  type: "/pryzm.icstaking.v1.HostAccounts";
  value: HostAccountsAmino;
}
/** The interchain accounts */
export interface HostAccountsSDKType {
  delegation: HostAccountSDKType;
  reward: HostAccountSDKType;
  sweep: HostAccountSDKType;
  reward_account_claiming_state: AccountState;
}
export interface HostAccount {
  address: string;
  balance: string;
  state: AccountState;
}
export interface HostAccountProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostAccount";
  value: Uint8Array;
}
export interface HostAccountAmino {
  address?: string;
  balance?: string;
  state?: AccountState;
}
export interface HostAccountAminoMsg {
  type: "/pryzm.icstaking.v1.HostAccount";
  value: HostAccountAmino;
}
export interface HostAccountSDKType {
  address: string;
  balance: string;
  state: AccountState;
}
export interface ValidatorState {
  /** the address of the validator */
  validatorAddress: string;
  /** the amount of tokens delegated to the validator by PRYZM */
  delegatedAmount: string;
  /**
   * total tokens delegated to the validator by all delegators
   * this is used to calculate the value of the validator's lsm share
   */
  totalTokens: string;
  /**
   * total shares issued to the validator's delegators
   * this is used to calculate the value of the validator's lsm share
   */
  totalShares: string;
}
export interface ValidatorStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.ValidatorState";
  value: Uint8Array;
}
export interface ValidatorStateAmino {
  /** the address of the validator */
  validator_address?: string;
  /** the amount of tokens delegated to the validator by PRYZM */
  delegated_amount?: string;
  /**
   * total tokens delegated to the validator by all delegators
   * this is used to calculate the value of the validator's lsm share
   */
  total_tokens?: string;
  /**
   * total shares issued to the validator's delegators
   * this is used to calculate the value of the validator's lsm share
   */
  total_shares?: string;
}
export interface ValidatorStateAminoMsg {
  type: "/pryzm.icstaking.v1.ValidatorState";
  value: ValidatorStateAmino;
}
export interface ValidatorStateSDKType {
  validator_address: string;
  delegated_amount: string;
  total_tokens: string;
  total_shares: string;
}
function createBaseHostChain(): HostChain {
  return {
    id: "",
    connectionType: 0,
    connectionId: "",
    baseDenom: "",
    transferChannels: [],
    params: StakingParams.fromPartial({}),
    validators: [],
    allowLsmShares: false
  };
}
export const HostChain = {
  typeUrl: "/pryzm.icstaking.v1.HostChain",
  is(o: any): o is HostChain {
    return o && (o.$typeUrl === HostChain.typeUrl || typeof o.id === "string" && isSet(o.connectionType) && typeof o.connectionId === "string" && typeof o.baseDenom === "string" && Array.isArray(o.transferChannels) && (!o.transferChannels.length || TransferChannel.is(o.transferChannels[0])) && StakingParams.is(o.params) && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])) && typeof o.allowLsmShares === "boolean");
  },
  isSDK(o: any): o is HostChainSDKType {
    return o && (o.$typeUrl === HostChain.typeUrl || typeof o.id === "string" && isSet(o.connection_type) && typeof o.connection_id === "string" && typeof o.base_denom === "string" && Array.isArray(o.transfer_channels) && (!o.transfer_channels.length || TransferChannel.isSDK(o.transfer_channels[0])) && StakingParams.isSDK(o.params) && Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])) && typeof o.allow_lsm_shares === "boolean");
  },
  isAmino(o: any): o is HostChainAmino {
    return o && (o.$typeUrl === HostChain.typeUrl || typeof o.id === "string" && isSet(o.connection_type) && typeof o.connection_id === "string" && typeof o.base_denom === "string" && Array.isArray(o.transfer_channels) && (!o.transfer_channels.length || TransferChannel.isAmino(o.transfer_channels[0])) && StakingParams.isAmino(o.params) && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])) && typeof o.allow_lsm_shares === "boolean");
  },
  encode(message: HostChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.connectionType !== 0) {
      writer.uint32(16).int32(message.connectionType);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.baseDenom !== "") {
      writer.uint32(34).string(message.baseDenom);
    }
    for (const v of message.transferChannels) {
      TransferChannel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      StakingParams.encode(message.params, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.allowLsmShares === true) {
      writer.uint32(64).bool(message.allowLsmShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.connectionType = reader.int32() as any;
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.baseDenom = reader.string();
          break;
        case 5:
          message.transferChannels.push(TransferChannel.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.params = StakingParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.validators.push(Validator.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.allowLsmShares = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChain {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      connectionType: isSet(object.connectionType) ? connectionTypeFromJSON(object.connectionType) : -1,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      transferChannels: Array.isArray(object?.transferChannels) ? object.transferChannels.map((e: any) => TransferChannel.fromJSON(e)) : [],
      params: isSet(object.params) ? StakingParams.fromJSON(object.params) : undefined,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      allowLsmShares: isSet(object.allowLsmShares) ? Boolean(object.allowLsmShares) : false
    };
  },
  toJSON(message: HostChain): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.connectionType !== undefined && (obj.connectionType = connectionTypeToJSON(message.connectionType));
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    if (message.transferChannels) {
      obj.transferChannels = message.transferChannels.map(e => e ? TransferChannel.toJSON(e) : undefined);
    } else {
      obj.transferChannels = [];
    }
    message.params !== undefined && (obj.params = message.params ? StakingParams.toJSON(message.params) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.allowLsmShares !== undefined && (obj.allowLsmShares = message.allowLsmShares);
    return obj;
  },
  fromPartial(object: Partial<HostChain>): HostChain {
    const message = createBaseHostChain();
    message.id = object.id ?? "";
    message.connectionType = object.connectionType ?? 0;
    message.connectionId = object.connectionId ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.transferChannels = object.transferChannels?.map(e => TransferChannel.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? StakingParams.fromPartial(object.params) : undefined;
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.allowLsmShares = object.allowLsmShares ?? false;
    return message;
  },
  fromAmino(object: HostChainAmino): HostChain {
    const message = createBaseHostChain();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.connection_type !== undefined && object.connection_type !== null) {
      message.connectionType = object.connection_type;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    message.transferChannels = object.transfer_channels?.map(e => TransferChannel.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = StakingParams.fromAmino(object.params);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.allow_lsm_shares !== undefined && object.allow_lsm_shares !== null) {
      message.allowLsmShares = object.allow_lsm_shares;
    }
    return message;
  },
  toAmino(message: HostChain, useInterfaces: boolean = true): HostChainAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.connection_type = message.connectionType === 0 ? undefined : message.connectionType;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    if (message.transferChannels) {
      obj.transfer_channels = message.transferChannels.map(e => e ? TransferChannel.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.transfer_channels = message.transferChannels;
    }
    obj.params = message.params ? StakingParams.toAmino(message.params, useInterfaces) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.allow_lsm_shares = message.allowLsmShares === false ? undefined : message.allowLsmShares;
    return obj;
  },
  fromAminoMsg(object: HostChainAminoMsg): HostChain {
    return HostChain.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainProtoMsg, useInterfaces: boolean = true): HostChain {
    return HostChain.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostChain): Uint8Array {
    return HostChain.encode(message).finish();
  },
  toProtoMsg(message: HostChain): HostChainProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostChain",
      value: HostChain.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostChain.typeUrl, HostChain);
function createBaseTransferChannel(): TransferChannel {
  return {
    type: 0,
    id: "",
    wrappedDenom: "",
    destinationChain: ""
  };
}
export const TransferChannel = {
  typeUrl: "/pryzm.icstaking.v1.TransferChannel",
  is(o: any): o is TransferChannel {
    return o && (o.$typeUrl === TransferChannel.typeUrl || isSet(o.type) && typeof o.id === "string" && typeof o.wrappedDenom === "string" && typeof o.destinationChain === "string");
  },
  isSDK(o: any): o is TransferChannelSDKType {
    return o && (o.$typeUrl === TransferChannel.typeUrl || isSet(o.type) && typeof o.id === "string" && typeof o.wrapped_denom === "string" && typeof o.destination_chain === "string");
  },
  isAmino(o: any): o is TransferChannelAmino {
    return o && (o.$typeUrl === TransferChannel.typeUrl || isSet(o.type) && typeof o.id === "string" && typeof o.wrapped_denom === "string" && typeof o.destination_chain === "string");
  },
  encode(message: TransferChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.wrappedDenom !== "") {
      writer.uint32(26).string(message.wrappedDenom);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): TransferChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.wrappedDenom = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferChannel {
    return {
      type: isSet(object.type) ? transferChannelTypeFromJSON(object.type) : -1,
      id: isSet(object.id) ? String(object.id) : "",
      wrappedDenom: isSet(object.wrappedDenom) ? String(object.wrappedDenom) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : ""
    };
  },
  toJSON(message: TransferChannel): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = transferChannelTypeToJSON(message.type));
    message.id !== undefined && (obj.id = message.id);
    message.wrappedDenom !== undefined && (obj.wrappedDenom = message.wrappedDenom);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    return obj;
  },
  fromPartial(object: Partial<TransferChannel>): TransferChannel {
    const message = createBaseTransferChannel();
    message.type = object.type ?? 0;
    message.id = object.id ?? "";
    message.wrappedDenom = object.wrappedDenom ?? "";
    message.destinationChain = object.destinationChain ?? "";
    return message;
  },
  fromAmino(object: TransferChannelAmino): TransferChannel {
    const message = createBaseTransferChannel();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.wrapped_denom !== undefined && object.wrapped_denom !== null) {
      message.wrappedDenom = object.wrapped_denom;
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    return message;
  },
  toAmino(message: TransferChannel, useInterfaces: boolean = true): TransferChannelAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.id = message.id === "" ? undefined : message.id;
    obj.wrapped_denom = message.wrappedDenom === "" ? undefined : message.wrappedDenom;
    obj.destination_chain = message.destinationChain === "" ? undefined : message.destinationChain;
    return obj;
  },
  fromAminoMsg(object: TransferChannelAminoMsg): TransferChannel {
    return TransferChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferChannelProtoMsg, useInterfaces: boolean = true): TransferChannel {
    return TransferChannel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TransferChannel): Uint8Array {
    return TransferChannel.encode(message).finish();
  },
  toProtoMsg(message: TransferChannel): TransferChannelProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.TransferChannel",
      value: TransferChannel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransferChannel.typeUrl, TransferChannel);
function createBaseValidator(): Validator {
  return {
    address: "",
    weight: "",
    allowLsmShares: false
  };
}
export const Validator = {
  typeUrl: "/pryzm.icstaking.v1.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.allowLsmShares === "boolean");
  },
  isSDK(o: any): o is ValidatorSDKType {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.allow_lsm_shares === "boolean");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.allow_lsm_shares === "boolean");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    if (message.allowLsmShares === true) {
      writer.uint32(24).bool(message.allowLsmShares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.allowLsmShares = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      allowLsmShares: isSet(object.allowLsmShares) ? Boolean(object.allowLsmShares) : false
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.allowLsmShares !== undefined && (obj.allowLsmShares = message.allowLsmShares);
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.allowLsmShares = object.allowLsmShares ?? false;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.allow_lsm_shares !== undefined && object.allow_lsm_shares !== null) {
      message.allowLsmShares = object.allow_lsm_shares;
    }
    return message;
  },
  toAmino(message: Validator, useInterfaces: boolean = true): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = padDecimal(message.weight) === "" ? undefined : padDecimal(message.weight);
    obj.allow_lsm_shares = message.allowLsmShares === false ? undefined : message.allowLsmShares;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg, useInterfaces: boolean = true): Validator {
    return Validator.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
function createBaseHostChainState(): HostChainState {
  return {
    hostChainId: "",
    hostAccounts: HostAccounts.fromPartial({}),
    validatorStates: [],
    amountToBeDelegated: "",
    undelegatedAmountToCollect: "",
    exchangeRate: "",
    state: 0,
    lastIdleStateHostHeight: Height.fromPartial({}),
    lockedLsmValue: "",
    collectedFee: ""
  };
}
export const HostChainState = {
  typeUrl: "/pryzm.icstaking.v1.HostChainState",
  is(o: any): o is HostChainState {
    return o && (o.$typeUrl === HostChainState.typeUrl || typeof o.hostChainId === "string" && HostAccounts.is(o.hostAccounts) && Array.isArray(o.validatorStates) && (!o.validatorStates.length || ValidatorState.is(o.validatorStates[0])) && typeof o.amountToBeDelegated === "string" && typeof o.undelegatedAmountToCollect === "string" && typeof o.exchangeRate === "string" && isSet(o.state) && Height.is(o.lastIdleStateHostHeight) && typeof o.lockedLsmValue === "string" && typeof o.collectedFee === "string");
  },
  isSDK(o: any): o is HostChainStateSDKType {
    return o && (o.$typeUrl === HostChainState.typeUrl || typeof o.host_chain_id === "string" && HostAccounts.isSDK(o.host_accounts) && Array.isArray(o.validator_states) && (!o.validator_states.length || ValidatorState.isSDK(o.validator_states[0])) && typeof o.amount_to_be_delegated === "string" && typeof o.undelegated_amount_to_collect === "string" && typeof o.exchange_rate === "string" && isSet(o.state) && Height.isSDK(o.last_idle_state_host_height) && typeof o.locked_lsm_value === "string" && typeof o.collected_fee === "string");
  },
  isAmino(o: any): o is HostChainStateAmino {
    return o && (o.$typeUrl === HostChainState.typeUrl || typeof o.host_chain_id === "string" && HostAccounts.isAmino(o.host_accounts) && Array.isArray(o.validator_states) && (!o.validator_states.length || ValidatorState.isAmino(o.validator_states[0])) && typeof o.amount_to_be_delegated === "string" && typeof o.undelegated_amount_to_collect === "string" && typeof o.exchange_rate === "string" && isSet(o.state) && Height.isAmino(o.last_idle_state_host_height) && typeof o.locked_lsm_value === "string" && typeof o.collected_fee === "string");
  },
  encode(message: HostChainState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.hostAccounts !== undefined) {
      HostAccounts.encode(message.hostAccounts, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validatorStates) {
      ValidatorState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountToBeDelegated !== "") {
      writer.uint32(34).string(message.amountToBeDelegated);
    }
    if (message.undelegatedAmountToCollect !== "") {
      writer.uint32(42).string(message.undelegatedAmountToCollect);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }
    if (message.lastIdleStateHostHeight !== undefined) {
      Height.encode(message.lastIdleStateHostHeight, writer.uint32(66).fork()).ldelim();
    }
    if (message.lockedLsmValue !== "") {
      writer.uint32(74).string(message.lockedLsmValue);
    }
    if (message.collectedFee !== "") {
      writer.uint32(82).string(message.collectedFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostChainState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.hostAccounts = HostAccounts.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.validatorStates.push(ValidatorState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.amountToBeDelegated = reader.string();
          break;
        case 5:
          message.undelegatedAmountToCollect = reader.string();
          break;
        case 6:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.state = reader.int32() as any;
          break;
        case 8:
          message.lastIdleStateHostHeight = Height.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.lockedLsmValue = reader.string();
          break;
        case 10:
          message.collectedFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainState {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      hostAccounts: isSet(object.hostAccounts) ? HostAccounts.fromJSON(object.hostAccounts) : undefined,
      validatorStates: Array.isArray(object?.validatorStates) ? object.validatorStates.map((e: any) => ValidatorState.fromJSON(e)) : [],
      amountToBeDelegated: isSet(object.amountToBeDelegated) ? String(object.amountToBeDelegated) : "",
      undelegatedAmountToCollect: isSet(object.undelegatedAmountToCollect) ? String(object.undelegatedAmountToCollect) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      lastIdleStateHostHeight: isSet(object.lastIdleStateHostHeight) ? Height.fromJSON(object.lastIdleStateHostHeight) : undefined,
      lockedLsmValue: isSet(object.lockedLsmValue) ? String(object.lockedLsmValue) : "",
      collectedFee: isSet(object.collectedFee) ? String(object.collectedFee) : ""
    };
  },
  toJSON(message: HostChainState): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.hostAccounts !== undefined && (obj.hostAccounts = message.hostAccounts ? HostAccounts.toJSON(message.hostAccounts) : undefined);
    if (message.validatorStates) {
      obj.validatorStates = message.validatorStates.map(e => e ? ValidatorState.toJSON(e) : undefined);
    } else {
      obj.validatorStates = [];
    }
    message.amountToBeDelegated !== undefined && (obj.amountToBeDelegated = message.amountToBeDelegated);
    message.undelegatedAmountToCollect !== undefined && (obj.undelegatedAmountToCollect = message.undelegatedAmountToCollect);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.lastIdleStateHostHeight !== undefined && (obj.lastIdleStateHostHeight = message.lastIdleStateHostHeight ? Height.toJSON(message.lastIdleStateHostHeight) : undefined);
    message.lockedLsmValue !== undefined && (obj.lockedLsmValue = message.lockedLsmValue);
    message.collectedFee !== undefined && (obj.collectedFee = message.collectedFee);
    return obj;
  },
  fromPartial(object: Partial<HostChainState>): HostChainState {
    const message = createBaseHostChainState();
    message.hostChainId = object.hostChainId ?? "";
    message.hostAccounts = object.hostAccounts !== undefined && object.hostAccounts !== null ? HostAccounts.fromPartial(object.hostAccounts) : undefined;
    message.validatorStates = object.validatorStates?.map(e => ValidatorState.fromPartial(e)) || [];
    message.amountToBeDelegated = object.amountToBeDelegated ?? "";
    message.undelegatedAmountToCollect = object.undelegatedAmountToCollect ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    message.state = object.state ?? 0;
    message.lastIdleStateHostHeight = object.lastIdleStateHostHeight !== undefined && object.lastIdleStateHostHeight !== null ? Height.fromPartial(object.lastIdleStateHostHeight) : undefined;
    message.lockedLsmValue = object.lockedLsmValue ?? "";
    message.collectedFee = object.collectedFee ?? "";
    return message;
  },
  fromAmino(object: HostChainStateAmino): HostChainState {
    const message = createBaseHostChainState();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.host_accounts !== undefined && object.host_accounts !== null) {
      message.hostAccounts = HostAccounts.fromAmino(object.host_accounts);
    }
    message.validatorStates = object.validator_states?.map(e => ValidatorState.fromAmino(e)) || [];
    if (object.amount_to_be_delegated !== undefined && object.amount_to_be_delegated !== null) {
      message.amountToBeDelegated = object.amount_to_be_delegated;
    }
    if (object.undelegated_amount_to_collect !== undefined && object.undelegated_amount_to_collect !== null) {
      message.undelegatedAmountToCollect = object.undelegated_amount_to_collect;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.last_idle_state_host_height !== undefined && object.last_idle_state_host_height !== null) {
      message.lastIdleStateHostHeight = Height.fromAmino(object.last_idle_state_host_height);
    }
    if (object.locked_lsm_value !== undefined && object.locked_lsm_value !== null) {
      message.lockedLsmValue = object.locked_lsm_value;
    }
    if (object.collected_fee !== undefined && object.collected_fee !== null) {
      message.collectedFee = object.collected_fee;
    }
    return message;
  },
  toAmino(message: HostChainState, useInterfaces: boolean = true): HostChainStateAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.host_accounts = message.hostAccounts ? HostAccounts.toAmino(message.hostAccounts, useInterfaces) : undefined;
    if (message.validatorStates) {
      obj.validator_states = message.validatorStates.map(e => e ? ValidatorState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.validator_states = message.validatorStates;
    }
    obj.amount_to_be_delegated = message.amountToBeDelegated === "" ? undefined : message.amountToBeDelegated;
    obj.undelegated_amount_to_collect = message.undelegatedAmountToCollect === "" ? undefined : message.undelegatedAmountToCollect;
    obj.exchange_rate = padDecimal(message.exchangeRate) === "" ? undefined : padDecimal(message.exchangeRate);
    obj.state = message.state === 0 ? undefined : message.state;
    obj.last_idle_state_host_height = message.lastIdleStateHostHeight ? Height.toAmino(message.lastIdleStateHostHeight, useInterfaces) : {};
    obj.locked_lsm_value = message.lockedLsmValue === "" ? undefined : message.lockedLsmValue;
    obj.collected_fee = message.collectedFee === "" ? undefined : message.collectedFee;
    return obj;
  },
  fromAminoMsg(object: HostChainStateAminoMsg): HostChainState {
    return HostChainState.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainStateProtoMsg, useInterfaces: boolean = true): HostChainState {
    return HostChainState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostChainState): Uint8Array {
    return HostChainState.encode(message).finish();
  },
  toProtoMsg(message: HostChainState): HostChainStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostChainState",
      value: HostChainState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostChainState.typeUrl, HostChainState);
function createBaseHostAccounts(): HostAccounts {
  return {
    delegation: HostAccount.fromPartial({}),
    reward: HostAccount.fromPartial({}),
    sweep: HostAccount.fromPartial({}),
    rewardAccountClaimingState: 0
  };
}
export const HostAccounts = {
  typeUrl: "/pryzm.icstaking.v1.HostAccounts",
  is(o: any): o is HostAccounts {
    return o && (o.$typeUrl === HostAccounts.typeUrl || HostAccount.is(o.delegation) && HostAccount.is(o.reward) && HostAccount.is(o.sweep) && isSet(o.rewardAccountClaimingState));
  },
  isSDK(o: any): o is HostAccountsSDKType {
    return o && (o.$typeUrl === HostAccounts.typeUrl || HostAccount.isSDK(o.delegation) && HostAccount.isSDK(o.reward) && HostAccount.isSDK(o.sweep) && isSet(o.reward_account_claiming_state));
  },
  isAmino(o: any): o is HostAccountsAmino {
    return o && (o.$typeUrl === HostAccounts.typeUrl || HostAccount.isAmino(o.delegation) && HostAccount.isAmino(o.reward) && HostAccount.isAmino(o.sweep) && isSet(o.reward_account_claiming_state));
  },
  encode(message: HostAccounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegation !== undefined) {
      HostAccount.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.reward !== undefined) {
      HostAccount.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    if (message.sweep !== undefined) {
      HostAccount.encode(message.sweep, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewardAccountClaimingState !== 0) {
      writer.uint32(32).int32(message.rewardAccountClaimingState);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostAccounts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = HostAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.reward = HostAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.sweep = HostAccount.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.rewardAccountClaimingState = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostAccounts {
    return {
      delegation: isSet(object.delegation) ? HostAccount.fromJSON(object.delegation) : undefined,
      reward: isSet(object.reward) ? HostAccount.fromJSON(object.reward) : undefined,
      sweep: isSet(object.sweep) ? HostAccount.fromJSON(object.sweep) : undefined,
      rewardAccountClaimingState: isSet(object.rewardAccountClaimingState) ? accountStateFromJSON(object.rewardAccountClaimingState) : -1
    };
  },
  toJSON(message: HostAccounts): unknown {
    const obj: any = {};
    message.delegation !== undefined && (obj.delegation = message.delegation ? HostAccount.toJSON(message.delegation) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? HostAccount.toJSON(message.reward) : undefined);
    message.sweep !== undefined && (obj.sweep = message.sweep ? HostAccount.toJSON(message.sweep) : undefined);
    message.rewardAccountClaimingState !== undefined && (obj.rewardAccountClaimingState = accountStateToJSON(message.rewardAccountClaimingState));
    return obj;
  },
  fromPartial(object: Partial<HostAccounts>): HostAccounts {
    const message = createBaseHostAccounts();
    message.delegation = object.delegation !== undefined && object.delegation !== null ? HostAccount.fromPartial(object.delegation) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? HostAccount.fromPartial(object.reward) : undefined;
    message.sweep = object.sweep !== undefined && object.sweep !== null ? HostAccount.fromPartial(object.sweep) : undefined;
    message.rewardAccountClaimingState = object.rewardAccountClaimingState ?? 0;
    return message;
  },
  fromAmino(object: HostAccountsAmino): HostAccounts {
    const message = createBaseHostAccounts();
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = HostAccount.fromAmino(object.delegation);
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = HostAccount.fromAmino(object.reward);
    }
    if (object.sweep !== undefined && object.sweep !== null) {
      message.sweep = HostAccount.fromAmino(object.sweep);
    }
    if (object.reward_account_claiming_state !== undefined && object.reward_account_claiming_state !== null) {
      message.rewardAccountClaimingState = object.reward_account_claiming_state;
    }
    return message;
  },
  toAmino(message: HostAccounts, useInterfaces: boolean = true): HostAccountsAmino {
    const obj: any = {};
    obj.delegation = message.delegation ? HostAccount.toAmino(message.delegation, useInterfaces) : undefined;
    obj.reward = message.reward ? HostAccount.toAmino(message.reward, useInterfaces) : undefined;
    obj.sweep = message.sweep ? HostAccount.toAmino(message.sweep, useInterfaces) : undefined;
    obj.reward_account_claiming_state = message.rewardAccountClaimingState === 0 ? undefined : message.rewardAccountClaimingState;
    return obj;
  },
  fromAminoMsg(object: HostAccountsAminoMsg): HostAccounts {
    return HostAccounts.fromAmino(object.value);
  },
  fromProtoMsg(message: HostAccountsProtoMsg, useInterfaces: boolean = true): HostAccounts {
    return HostAccounts.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostAccounts): Uint8Array {
    return HostAccounts.encode(message).finish();
  },
  toProtoMsg(message: HostAccounts): HostAccountsProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostAccounts",
      value: HostAccounts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostAccounts.typeUrl, HostAccounts);
function createBaseHostAccount(): HostAccount {
  return {
    address: "",
    balance: "",
    state: 0
  };
}
export const HostAccount = {
  typeUrl: "/pryzm.icstaking.v1.HostAccount",
  is(o: any): o is HostAccount {
    return o && (o.$typeUrl === HostAccount.typeUrl || typeof o.address === "string" && typeof o.balance === "string" && isSet(o.state));
  },
  isSDK(o: any): o is HostAccountSDKType {
    return o && (o.$typeUrl === HostAccount.typeUrl || typeof o.address === "string" && typeof o.balance === "string" && isSet(o.state));
  },
  isAmino(o: any): o is HostAccountAmino {
    return o && (o.$typeUrl === HostAccount.typeUrl || typeof o.address === "string" && typeof o.balance === "string" && isSet(o.state));
  },
  encode(message: HostAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      state: isSet(object.state) ? accountStateFromJSON(object.state) : -1
    };
  },
  toJSON(message: HostAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined && (obj.balance = message.balance);
    message.state !== undefined && (obj.state = accountStateToJSON(message.state));
    return obj;
  },
  fromPartial(object: Partial<HostAccount>): HostAccount {
    const message = createBaseHostAccount();
    message.address = object.address ?? "";
    message.balance = object.balance ?? "";
    message.state = object.state ?? 0;
    return message;
  },
  fromAmino(object: HostAccountAmino): HostAccount {
    const message = createBaseHostAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: HostAccount, useInterfaces: boolean = true): HostAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.state = message.state === 0 ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: HostAccountAminoMsg): HostAccount {
    return HostAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: HostAccountProtoMsg, useInterfaces: boolean = true): HostAccount {
    return HostAccount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostAccount): Uint8Array {
    return HostAccount.encode(message).finish();
  },
  toProtoMsg(message: HostAccount): HostAccountProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostAccount",
      value: HostAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostAccount.typeUrl, HostAccount);
function createBaseValidatorState(): ValidatorState {
  return {
    validatorAddress: "",
    delegatedAmount: "",
    totalTokens: "",
    totalShares: ""
  };
}
export const ValidatorState = {
  typeUrl: "/pryzm.icstaking.v1.ValidatorState",
  is(o: any): o is ValidatorState {
    return o && (o.$typeUrl === ValidatorState.typeUrl || typeof o.validatorAddress === "string" && typeof o.delegatedAmount === "string" && typeof o.totalTokens === "string" && typeof o.totalShares === "string");
  },
  isSDK(o: any): o is ValidatorStateSDKType {
    return o && (o.$typeUrl === ValidatorState.typeUrl || typeof o.validator_address === "string" && typeof o.delegated_amount === "string" && typeof o.total_tokens === "string" && typeof o.total_shares === "string");
  },
  isAmino(o: any): o is ValidatorStateAmino {
    return o && (o.$typeUrl === ValidatorState.typeUrl || typeof o.validator_address === "string" && typeof o.delegated_amount === "string" && typeof o.total_tokens === "string" && typeof o.total_shares === "string");
  },
  encode(message: ValidatorState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.delegatedAmount !== "") {
      writer.uint32(18).string(message.delegatedAmount);
    }
    if (message.totalTokens !== "") {
      writer.uint32(26).string(message.totalTokens);
    }
    if (message.totalShares !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.totalShares, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ValidatorState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.delegatedAmount = reader.string();
          break;
        case 3:
          message.totalTokens = reader.string();
          break;
        case 4:
          message.totalShares = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorState {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      delegatedAmount: isSet(object.delegatedAmount) ? String(object.delegatedAmount) : "",
      totalTokens: isSet(object.totalTokens) ? String(object.totalTokens) : "",
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  toJSON(message: ValidatorState): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.delegatedAmount !== undefined && (obj.delegatedAmount = message.delegatedAmount);
    message.totalTokens !== undefined && (obj.totalTokens = message.totalTokens);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },
  fromPartial(object: Partial<ValidatorState>): ValidatorState {
    const message = createBaseValidatorState();
    message.validatorAddress = object.validatorAddress ?? "";
    message.delegatedAmount = object.delegatedAmount ?? "";
    message.totalTokens = object.totalTokens ?? "";
    message.totalShares = object.totalShares ?? "";
    return message;
  },
  fromAmino(object: ValidatorStateAmino): ValidatorState {
    const message = createBaseValidatorState();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.delegated_amount !== undefined && object.delegated_amount !== null) {
      message.delegatedAmount = object.delegated_amount;
    }
    if (object.total_tokens !== undefined && object.total_tokens !== null) {
      message.totalTokens = object.total_tokens;
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = object.total_shares;
    }
    return message;
  },
  toAmino(message: ValidatorState, useInterfaces: boolean = true): ValidatorStateAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.delegated_amount = message.delegatedAmount === "" ? undefined : message.delegatedAmount;
    obj.total_tokens = message.totalTokens === "" ? undefined : message.totalTokens;
    obj.total_shares = padDecimal(message.totalShares) === "" ? undefined : padDecimal(message.totalShares);
    return obj;
  },
  fromAminoMsg(object: ValidatorStateAminoMsg): ValidatorState {
    return ValidatorState.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorStateProtoMsg, useInterfaces: boolean = true): ValidatorState {
    return ValidatorState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ValidatorState): Uint8Array {
    return ValidatorState.encode(message).finish();
  },
  toProtoMsg(message: ValidatorState): ValidatorStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.ValidatorState",
      value: ValidatorState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorState.typeUrl, ValidatorState);