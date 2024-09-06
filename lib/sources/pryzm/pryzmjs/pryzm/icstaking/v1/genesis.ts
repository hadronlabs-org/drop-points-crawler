import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostChain, HostChainAmino, HostChainSDKType, HostChainState, HostChainStateAmino, HostChainStateSDKType } from "./host_chain";
import { Undelegation, UndelegationAmino, UndelegationSDKType, ChannelUndelegation, ChannelUndelegationAmino, ChannelUndelegationSDKType } from "./undelegation";
import { ReplyData, ReplyDataAmino, ReplyDataSDKType, DelegateTransferSession, DelegateTransferSessionAmino, DelegateTransferSessionSDKType } from "./reply";
import { RedeemableLsm, RedeemableLsmAmino, RedeemableLsmSDKType, FailedLsmTransfer, FailedLsmTransferAmino, FailedLsmTransferSDKType } from "./lsm";
import { MultiSigConnection, MultiSigConnectionAmino, MultiSigConnectionSDKType, MultiSigPacket, MultiSigPacketAmino, MultiSigPacketSDKType } from "./multisig";
import { LoopBackPacket, LoopBackPacketAmino, LoopBackPacketSDKType } from "./loopback";
import { SweepTransfer, SweepTransferAmino, SweepTransferSDKType } from "./sweep";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisState {
  params: Params;
  hostChainList: HostChain[];
  hostChainStateList: HostChainState[];
  undelegationList: Undelegation[];
  channelUndelegationList: ChannelUndelegation[];
  replyDataList: ReplyData[];
  redeemableLsmList: RedeemableLsm[];
  failedLsmTransferList: FailedLsmTransfer[];
  multiSigConnectionList: MultiSigConnection[];
  multiSigPacketList: MultiSigPacket[];
  loopBackPacketList: LoopBackPacket[];
  loopBackPacketLastId: bigint;
  lastDelegationTimeList: HostChainEpochTime[];
  lastRedelegationTimeList: HostChainEpochTime[];
  lastLsmRedeemTimeList: HostChainEpochTime[];
  lastUndelegationTimeList: HostChainEpochTime[];
  undelegationEpochList: HostChainUndelegationEpoch[];
  delegateTransferSessionList: DelegateTransferSession[];
  sweepTransferList: SweepTransfer[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  host_chain_list?: HostChainAmino[];
  host_chain_state_list?: HostChainStateAmino[];
  undelegation_list?: UndelegationAmino[];
  channel_undelegation_list?: ChannelUndelegationAmino[];
  reply_data_list?: ReplyDataAmino[];
  redeemable_lsm_list?: RedeemableLsmAmino[];
  failed_lsm_transfer_list?: FailedLsmTransferAmino[];
  multi_sig_connection_list?: MultiSigConnectionAmino[];
  multi_sig_packet_list?: MultiSigPacketAmino[];
  loop_back_packet_list?: LoopBackPacketAmino[];
  loop_back_packet_last_id?: string;
  last_delegation_time_list?: HostChainEpochTimeAmino[];
  last_redelegation_time_list?: HostChainEpochTimeAmino[];
  last_lsm_redeem_time_list?: HostChainEpochTimeAmino[];
  last_undelegation_time_list?: HostChainEpochTimeAmino[];
  undelegation_epoch_list?: HostChainUndelegationEpochAmino[];
  delegate_transfer_session_list?: DelegateTransferSessionAmino[];
  sweep_transfer_list?: SweepTransferAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.icstaking.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the icstaking module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  host_chain_list: HostChainSDKType[];
  host_chain_state_list: HostChainStateSDKType[];
  undelegation_list: UndelegationSDKType[];
  channel_undelegation_list: ChannelUndelegationSDKType[];
  reply_data_list: ReplyDataSDKType[];
  redeemable_lsm_list: RedeemableLsmSDKType[];
  failed_lsm_transfer_list: FailedLsmTransferSDKType[];
  multi_sig_connection_list: MultiSigConnectionSDKType[];
  multi_sig_packet_list: MultiSigPacketSDKType[];
  loop_back_packet_list: LoopBackPacketSDKType[];
  loop_back_packet_last_id: bigint;
  last_delegation_time_list: HostChainEpochTimeSDKType[];
  last_redelegation_time_list: HostChainEpochTimeSDKType[];
  last_lsm_redeem_time_list: HostChainEpochTimeSDKType[];
  last_undelegation_time_list: HostChainEpochTimeSDKType[];
  undelegation_epoch_list: HostChainUndelegationEpochSDKType[];
  delegate_transfer_session_list: DelegateTransferSessionSDKType[];
  sweep_transfer_list: SweepTransferSDKType[];
}
export interface HostChainEpochTime {
  hostChainId: string;
  epochTime: Timestamp;
}
export interface HostChainEpochTimeProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostChainEpochTime";
  value: Uint8Array;
}
export interface HostChainEpochTimeAmino {
  host_chain_id?: string;
  epoch_time?: string;
}
export interface HostChainEpochTimeAminoMsg {
  type: "/pryzm.icstaking.v1.HostChainEpochTime";
  value: HostChainEpochTimeAmino;
}
export interface HostChainEpochTimeSDKType {
  host_chain_id: string;
  epoch_time: TimestampSDKType;
}
export interface HostChainUndelegationEpoch {
  hostChainId: string;
  undelegationEpoch: bigint;
}
export interface HostChainUndelegationEpochProtoMsg {
  typeUrl: "/pryzm.icstaking.v1.HostChainUndelegationEpoch";
  value: Uint8Array;
}
export interface HostChainUndelegationEpochAmino {
  host_chain_id?: string;
  undelegation_epoch?: string;
}
export interface HostChainUndelegationEpochAminoMsg {
  type: "/pryzm.icstaking.v1.HostChainUndelegationEpoch";
  value: HostChainUndelegationEpochAmino;
}
export interface HostChainUndelegationEpochSDKType {
  host_chain_id: string;
  undelegation_epoch: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    hostChainList: [],
    hostChainStateList: [],
    undelegationList: [],
    channelUndelegationList: [],
    replyDataList: [],
    redeemableLsmList: [],
    failedLsmTransferList: [],
    multiSigConnectionList: [],
    multiSigPacketList: [],
    loopBackPacketList: [],
    loopBackPacketLastId: BigInt(0),
    lastDelegationTimeList: [],
    lastRedelegationTimeList: [],
    lastLsmRedeemTimeList: [],
    lastUndelegationTimeList: [],
    undelegationEpochList: [],
    delegateTransferSessionList: [],
    sweepTransferList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.icstaking.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.hostChainList) && (!o.hostChainList.length || HostChain.is(o.hostChainList[0])) && Array.isArray(o.hostChainStateList) && (!o.hostChainStateList.length || HostChainState.is(o.hostChainStateList[0])) && Array.isArray(o.undelegationList) && (!o.undelegationList.length || Undelegation.is(o.undelegationList[0])) && Array.isArray(o.channelUndelegationList) && (!o.channelUndelegationList.length || ChannelUndelegation.is(o.channelUndelegationList[0])) && Array.isArray(o.replyDataList) && (!o.replyDataList.length || ReplyData.is(o.replyDataList[0])) && Array.isArray(o.redeemableLsmList) && (!o.redeemableLsmList.length || RedeemableLsm.is(o.redeemableLsmList[0])) && Array.isArray(o.failedLsmTransferList) && (!o.failedLsmTransferList.length || FailedLsmTransfer.is(o.failedLsmTransferList[0])) && Array.isArray(o.multiSigConnectionList) && (!o.multiSigConnectionList.length || MultiSigConnection.is(o.multiSigConnectionList[0])) && Array.isArray(o.multiSigPacketList) && (!o.multiSigPacketList.length || MultiSigPacket.is(o.multiSigPacketList[0])) && Array.isArray(o.loopBackPacketList) && (!o.loopBackPacketList.length || LoopBackPacket.is(o.loopBackPacketList[0])) && typeof o.loopBackPacketLastId === "bigint" && Array.isArray(o.lastDelegationTimeList) && (!o.lastDelegationTimeList.length || HostChainEpochTime.is(o.lastDelegationTimeList[0])) && Array.isArray(o.lastRedelegationTimeList) && (!o.lastRedelegationTimeList.length || HostChainEpochTime.is(o.lastRedelegationTimeList[0])) && Array.isArray(o.lastLsmRedeemTimeList) && (!o.lastLsmRedeemTimeList.length || HostChainEpochTime.is(o.lastLsmRedeemTimeList[0])) && Array.isArray(o.lastUndelegationTimeList) && (!o.lastUndelegationTimeList.length || HostChainEpochTime.is(o.lastUndelegationTimeList[0])) && Array.isArray(o.undelegationEpochList) && (!o.undelegationEpochList.length || HostChainUndelegationEpoch.is(o.undelegationEpochList[0])) && Array.isArray(o.delegateTransferSessionList) && (!o.delegateTransferSessionList.length || DelegateTransferSession.is(o.delegateTransferSessionList[0])) && Array.isArray(o.sweepTransferList) && (!o.sweepTransferList.length || SweepTransfer.is(o.sweepTransferList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.host_chain_list) && (!o.host_chain_list.length || HostChain.isSDK(o.host_chain_list[0])) && Array.isArray(o.host_chain_state_list) && (!o.host_chain_state_list.length || HostChainState.isSDK(o.host_chain_state_list[0])) && Array.isArray(o.undelegation_list) && (!o.undelegation_list.length || Undelegation.isSDK(o.undelegation_list[0])) && Array.isArray(o.channel_undelegation_list) && (!o.channel_undelegation_list.length || ChannelUndelegation.isSDK(o.channel_undelegation_list[0])) && Array.isArray(o.reply_data_list) && (!o.reply_data_list.length || ReplyData.isSDK(o.reply_data_list[0])) && Array.isArray(o.redeemable_lsm_list) && (!o.redeemable_lsm_list.length || RedeemableLsm.isSDK(o.redeemable_lsm_list[0])) && Array.isArray(o.failed_lsm_transfer_list) && (!o.failed_lsm_transfer_list.length || FailedLsmTransfer.isSDK(o.failed_lsm_transfer_list[0])) && Array.isArray(o.multi_sig_connection_list) && (!o.multi_sig_connection_list.length || MultiSigConnection.isSDK(o.multi_sig_connection_list[0])) && Array.isArray(o.multi_sig_packet_list) && (!o.multi_sig_packet_list.length || MultiSigPacket.isSDK(o.multi_sig_packet_list[0])) && Array.isArray(o.loop_back_packet_list) && (!o.loop_back_packet_list.length || LoopBackPacket.isSDK(o.loop_back_packet_list[0])) && typeof o.loop_back_packet_last_id === "bigint" && Array.isArray(o.last_delegation_time_list) && (!o.last_delegation_time_list.length || HostChainEpochTime.isSDK(o.last_delegation_time_list[0])) && Array.isArray(o.last_redelegation_time_list) && (!o.last_redelegation_time_list.length || HostChainEpochTime.isSDK(o.last_redelegation_time_list[0])) && Array.isArray(o.last_lsm_redeem_time_list) && (!o.last_lsm_redeem_time_list.length || HostChainEpochTime.isSDK(o.last_lsm_redeem_time_list[0])) && Array.isArray(o.last_undelegation_time_list) && (!o.last_undelegation_time_list.length || HostChainEpochTime.isSDK(o.last_undelegation_time_list[0])) && Array.isArray(o.undelegation_epoch_list) && (!o.undelegation_epoch_list.length || HostChainUndelegationEpoch.isSDK(o.undelegation_epoch_list[0])) && Array.isArray(o.delegate_transfer_session_list) && (!o.delegate_transfer_session_list.length || DelegateTransferSession.isSDK(o.delegate_transfer_session_list[0])) && Array.isArray(o.sweep_transfer_list) && (!o.sweep_transfer_list.length || SweepTransfer.isSDK(o.sweep_transfer_list[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.host_chain_list) && (!o.host_chain_list.length || HostChain.isAmino(o.host_chain_list[0])) && Array.isArray(o.host_chain_state_list) && (!o.host_chain_state_list.length || HostChainState.isAmino(o.host_chain_state_list[0])) && Array.isArray(o.undelegation_list) && (!o.undelegation_list.length || Undelegation.isAmino(o.undelegation_list[0])) && Array.isArray(o.channel_undelegation_list) && (!o.channel_undelegation_list.length || ChannelUndelegation.isAmino(o.channel_undelegation_list[0])) && Array.isArray(o.reply_data_list) && (!o.reply_data_list.length || ReplyData.isAmino(o.reply_data_list[0])) && Array.isArray(o.redeemable_lsm_list) && (!o.redeemable_lsm_list.length || RedeemableLsm.isAmino(o.redeemable_lsm_list[0])) && Array.isArray(o.failed_lsm_transfer_list) && (!o.failed_lsm_transfer_list.length || FailedLsmTransfer.isAmino(o.failed_lsm_transfer_list[0])) && Array.isArray(o.multi_sig_connection_list) && (!o.multi_sig_connection_list.length || MultiSigConnection.isAmino(o.multi_sig_connection_list[0])) && Array.isArray(o.multi_sig_packet_list) && (!o.multi_sig_packet_list.length || MultiSigPacket.isAmino(o.multi_sig_packet_list[0])) && Array.isArray(o.loop_back_packet_list) && (!o.loop_back_packet_list.length || LoopBackPacket.isAmino(o.loop_back_packet_list[0])) && typeof o.loop_back_packet_last_id === "bigint" && Array.isArray(o.last_delegation_time_list) && (!o.last_delegation_time_list.length || HostChainEpochTime.isAmino(o.last_delegation_time_list[0])) && Array.isArray(o.last_redelegation_time_list) && (!o.last_redelegation_time_list.length || HostChainEpochTime.isAmino(o.last_redelegation_time_list[0])) && Array.isArray(o.last_lsm_redeem_time_list) && (!o.last_lsm_redeem_time_list.length || HostChainEpochTime.isAmino(o.last_lsm_redeem_time_list[0])) && Array.isArray(o.last_undelegation_time_list) && (!o.last_undelegation_time_list.length || HostChainEpochTime.isAmino(o.last_undelegation_time_list[0])) && Array.isArray(o.undelegation_epoch_list) && (!o.undelegation_epoch_list.length || HostChainUndelegationEpoch.isAmino(o.undelegation_epoch_list[0])) && Array.isArray(o.delegate_transfer_session_list) && (!o.delegate_transfer_session_list.length || DelegateTransferSession.isAmino(o.delegate_transfer_session_list[0])) && Array.isArray(o.sweep_transfer_list) && (!o.sweep_transfer_list.length || SweepTransfer.isAmino(o.sweep_transfer_list[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.hostChainList) {
      HostChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.hostChainStateList) {
      HostChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.undelegationList) {
      Undelegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.channelUndelegationList) {
      ChannelUndelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.replyDataList) {
      ReplyData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.redeemableLsmList) {
      RedeemableLsm.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.failedLsmTransferList) {
      FailedLsmTransfer.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.multiSigConnectionList) {
      MultiSigConnection.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.multiSigPacketList) {
      MultiSigPacket.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.loopBackPacketList) {
      LoopBackPacket.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.loopBackPacketLastId !== BigInt(0)) {
      writer.uint32(104).uint64(message.loopBackPacketLastId);
    }
    for (const v of message.lastDelegationTimeList) {
      HostChainEpochTime.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.lastRedelegationTimeList) {
      HostChainEpochTime.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.lastLsmRedeemTimeList) {
      HostChainEpochTime.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.lastUndelegationTimeList) {
      HostChainEpochTime.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.undelegationEpochList) {
      HostChainUndelegationEpoch.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.delegateTransferSessionList) {
      DelegateTransferSession.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.sweepTransferList) {
      SweepTransfer.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.hostChainList.push(HostChain.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.hostChainStateList.push(HostChainState.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 5:
          message.undelegationList.push(Undelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 6:
          message.channelUndelegationList.push(ChannelUndelegation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.replyDataList.push(ReplyData.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 8:
          message.redeemableLsmList.push(RedeemableLsm.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.failedLsmTransferList.push(FailedLsmTransfer.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.multiSigConnectionList.push(MultiSigConnection.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 11:
          message.multiSigPacketList.push(MultiSigPacket.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 12:
          message.loopBackPacketList.push(LoopBackPacket.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 13:
          message.loopBackPacketLastId = reader.uint64();
          break;
        case 14:
          message.lastDelegationTimeList.push(HostChainEpochTime.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 15:
          message.lastRedelegationTimeList.push(HostChainEpochTime.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 16:
          message.lastLsmRedeemTimeList.push(HostChainEpochTime.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 17:
          message.lastUndelegationTimeList.push(HostChainEpochTime.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 18:
          message.undelegationEpochList.push(HostChainUndelegationEpoch.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 19:
          message.delegateTransferSessionList.push(DelegateTransferSession.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 20:
          message.sweepTransferList.push(SweepTransfer.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      hostChainList: Array.isArray(object?.hostChainList) ? object.hostChainList.map((e: any) => HostChain.fromJSON(e)) : [],
      hostChainStateList: Array.isArray(object?.hostChainStateList) ? object.hostChainStateList.map((e: any) => HostChainState.fromJSON(e)) : [],
      undelegationList: Array.isArray(object?.undelegationList) ? object.undelegationList.map((e: any) => Undelegation.fromJSON(e)) : [],
      channelUndelegationList: Array.isArray(object?.channelUndelegationList) ? object.channelUndelegationList.map((e: any) => ChannelUndelegation.fromJSON(e)) : [],
      replyDataList: Array.isArray(object?.replyDataList) ? object.replyDataList.map((e: any) => ReplyData.fromJSON(e)) : [],
      redeemableLsmList: Array.isArray(object?.redeemableLsmList) ? object.redeemableLsmList.map((e: any) => RedeemableLsm.fromJSON(e)) : [],
      failedLsmTransferList: Array.isArray(object?.failedLsmTransferList) ? object.failedLsmTransferList.map((e: any) => FailedLsmTransfer.fromJSON(e)) : [],
      multiSigConnectionList: Array.isArray(object?.multiSigConnectionList) ? object.multiSigConnectionList.map((e: any) => MultiSigConnection.fromJSON(e)) : [],
      multiSigPacketList: Array.isArray(object?.multiSigPacketList) ? object.multiSigPacketList.map((e: any) => MultiSigPacket.fromJSON(e)) : [],
      loopBackPacketList: Array.isArray(object?.loopBackPacketList) ? object.loopBackPacketList.map((e: any) => LoopBackPacket.fromJSON(e)) : [],
      loopBackPacketLastId: isSet(object.loopBackPacketLastId) ? BigInt(object.loopBackPacketLastId.toString()) : BigInt(0),
      lastDelegationTimeList: Array.isArray(object?.lastDelegationTimeList) ? object.lastDelegationTimeList.map((e: any) => HostChainEpochTime.fromJSON(e)) : [],
      lastRedelegationTimeList: Array.isArray(object?.lastRedelegationTimeList) ? object.lastRedelegationTimeList.map((e: any) => HostChainEpochTime.fromJSON(e)) : [],
      lastLsmRedeemTimeList: Array.isArray(object?.lastLsmRedeemTimeList) ? object.lastLsmRedeemTimeList.map((e: any) => HostChainEpochTime.fromJSON(e)) : [],
      lastUndelegationTimeList: Array.isArray(object?.lastUndelegationTimeList) ? object.lastUndelegationTimeList.map((e: any) => HostChainEpochTime.fromJSON(e)) : [],
      undelegationEpochList: Array.isArray(object?.undelegationEpochList) ? object.undelegationEpochList.map((e: any) => HostChainUndelegationEpoch.fromJSON(e)) : [],
      delegateTransferSessionList: Array.isArray(object?.delegateTransferSessionList) ? object.delegateTransferSessionList.map((e: any) => DelegateTransferSession.fromJSON(e)) : [],
      sweepTransferList: Array.isArray(object?.sweepTransferList) ? object.sweepTransferList.map((e: any) => SweepTransfer.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.hostChainList) {
      obj.hostChainList = message.hostChainList.map(e => e ? HostChain.toJSON(e) : undefined);
    } else {
      obj.hostChainList = [];
    }
    if (message.hostChainStateList) {
      obj.hostChainStateList = message.hostChainStateList.map(e => e ? HostChainState.toJSON(e) : undefined);
    } else {
      obj.hostChainStateList = [];
    }
    if (message.undelegationList) {
      obj.undelegationList = message.undelegationList.map(e => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegationList = [];
    }
    if (message.channelUndelegationList) {
      obj.channelUndelegationList = message.channelUndelegationList.map(e => e ? ChannelUndelegation.toJSON(e) : undefined);
    } else {
      obj.channelUndelegationList = [];
    }
    if (message.replyDataList) {
      obj.replyDataList = message.replyDataList.map(e => e ? ReplyData.toJSON(e) : undefined);
    } else {
      obj.replyDataList = [];
    }
    if (message.redeemableLsmList) {
      obj.redeemableLsmList = message.redeemableLsmList.map(e => e ? RedeemableLsm.toJSON(e) : undefined);
    } else {
      obj.redeemableLsmList = [];
    }
    if (message.failedLsmTransferList) {
      obj.failedLsmTransferList = message.failedLsmTransferList.map(e => e ? FailedLsmTransfer.toJSON(e) : undefined);
    } else {
      obj.failedLsmTransferList = [];
    }
    if (message.multiSigConnectionList) {
      obj.multiSigConnectionList = message.multiSigConnectionList.map(e => e ? MultiSigConnection.toJSON(e) : undefined);
    } else {
      obj.multiSigConnectionList = [];
    }
    if (message.multiSigPacketList) {
      obj.multiSigPacketList = message.multiSigPacketList.map(e => e ? MultiSigPacket.toJSON(e) : undefined);
    } else {
      obj.multiSigPacketList = [];
    }
    if (message.loopBackPacketList) {
      obj.loopBackPacketList = message.loopBackPacketList.map(e => e ? LoopBackPacket.toJSON(e) : undefined);
    } else {
      obj.loopBackPacketList = [];
    }
    message.loopBackPacketLastId !== undefined && (obj.loopBackPacketLastId = (message.loopBackPacketLastId || BigInt(0)).toString());
    if (message.lastDelegationTimeList) {
      obj.lastDelegationTimeList = message.lastDelegationTimeList.map(e => e ? HostChainEpochTime.toJSON(e) : undefined);
    } else {
      obj.lastDelegationTimeList = [];
    }
    if (message.lastRedelegationTimeList) {
      obj.lastRedelegationTimeList = message.lastRedelegationTimeList.map(e => e ? HostChainEpochTime.toJSON(e) : undefined);
    } else {
      obj.lastRedelegationTimeList = [];
    }
    if (message.lastLsmRedeemTimeList) {
      obj.lastLsmRedeemTimeList = message.lastLsmRedeemTimeList.map(e => e ? HostChainEpochTime.toJSON(e) : undefined);
    } else {
      obj.lastLsmRedeemTimeList = [];
    }
    if (message.lastUndelegationTimeList) {
      obj.lastUndelegationTimeList = message.lastUndelegationTimeList.map(e => e ? HostChainEpochTime.toJSON(e) : undefined);
    } else {
      obj.lastUndelegationTimeList = [];
    }
    if (message.undelegationEpochList) {
      obj.undelegationEpochList = message.undelegationEpochList.map(e => e ? HostChainUndelegationEpoch.toJSON(e) : undefined);
    } else {
      obj.undelegationEpochList = [];
    }
    if (message.delegateTransferSessionList) {
      obj.delegateTransferSessionList = message.delegateTransferSessionList.map(e => e ? DelegateTransferSession.toJSON(e) : undefined);
    } else {
      obj.delegateTransferSessionList = [];
    }
    if (message.sweepTransferList) {
      obj.sweepTransferList = message.sweepTransferList.map(e => e ? SweepTransfer.toJSON(e) : undefined);
    } else {
      obj.sweepTransferList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.hostChainList = object.hostChainList?.map(e => HostChain.fromPartial(e)) || [];
    message.hostChainStateList = object.hostChainStateList?.map(e => HostChainState.fromPartial(e)) || [];
    message.undelegationList = object.undelegationList?.map(e => Undelegation.fromPartial(e)) || [];
    message.channelUndelegationList = object.channelUndelegationList?.map(e => ChannelUndelegation.fromPartial(e)) || [];
    message.replyDataList = object.replyDataList?.map(e => ReplyData.fromPartial(e)) || [];
    message.redeemableLsmList = object.redeemableLsmList?.map(e => RedeemableLsm.fromPartial(e)) || [];
    message.failedLsmTransferList = object.failedLsmTransferList?.map(e => FailedLsmTransfer.fromPartial(e)) || [];
    message.multiSigConnectionList = object.multiSigConnectionList?.map(e => MultiSigConnection.fromPartial(e)) || [];
    message.multiSigPacketList = object.multiSigPacketList?.map(e => MultiSigPacket.fromPartial(e)) || [];
    message.loopBackPacketList = object.loopBackPacketList?.map(e => LoopBackPacket.fromPartial(e)) || [];
    message.loopBackPacketLastId = object.loopBackPacketLastId !== undefined && object.loopBackPacketLastId !== null ? BigInt(object.loopBackPacketLastId.toString()) : BigInt(0);
    message.lastDelegationTimeList = object.lastDelegationTimeList?.map(e => HostChainEpochTime.fromPartial(e)) || [];
    message.lastRedelegationTimeList = object.lastRedelegationTimeList?.map(e => HostChainEpochTime.fromPartial(e)) || [];
    message.lastLsmRedeemTimeList = object.lastLsmRedeemTimeList?.map(e => HostChainEpochTime.fromPartial(e)) || [];
    message.lastUndelegationTimeList = object.lastUndelegationTimeList?.map(e => HostChainEpochTime.fromPartial(e)) || [];
    message.undelegationEpochList = object.undelegationEpochList?.map(e => HostChainUndelegationEpoch.fromPartial(e)) || [];
    message.delegateTransferSessionList = object.delegateTransferSessionList?.map(e => DelegateTransferSession.fromPartial(e)) || [];
    message.sweepTransferList = object.sweepTransferList?.map(e => SweepTransfer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.hostChainList = object.host_chain_list?.map(e => HostChain.fromAmino(e)) || [];
    message.hostChainStateList = object.host_chain_state_list?.map(e => HostChainState.fromAmino(e)) || [];
    message.undelegationList = object.undelegation_list?.map(e => Undelegation.fromAmino(e)) || [];
    message.channelUndelegationList = object.channel_undelegation_list?.map(e => ChannelUndelegation.fromAmino(e)) || [];
    message.replyDataList = object.reply_data_list?.map(e => ReplyData.fromAmino(e)) || [];
    message.redeemableLsmList = object.redeemable_lsm_list?.map(e => RedeemableLsm.fromAmino(e)) || [];
    message.failedLsmTransferList = object.failed_lsm_transfer_list?.map(e => FailedLsmTransfer.fromAmino(e)) || [];
    message.multiSigConnectionList = object.multi_sig_connection_list?.map(e => MultiSigConnection.fromAmino(e)) || [];
    message.multiSigPacketList = object.multi_sig_packet_list?.map(e => MultiSigPacket.fromAmino(e)) || [];
    message.loopBackPacketList = object.loop_back_packet_list?.map(e => LoopBackPacket.fromAmino(e)) || [];
    if (object.loop_back_packet_last_id !== undefined && object.loop_back_packet_last_id !== null) {
      message.loopBackPacketLastId = BigInt(object.loop_back_packet_last_id);
    }
    message.lastDelegationTimeList = object.last_delegation_time_list?.map(e => HostChainEpochTime.fromAmino(e)) || [];
    message.lastRedelegationTimeList = object.last_redelegation_time_list?.map(e => HostChainEpochTime.fromAmino(e)) || [];
    message.lastLsmRedeemTimeList = object.last_lsm_redeem_time_list?.map(e => HostChainEpochTime.fromAmino(e)) || [];
    message.lastUndelegationTimeList = object.last_undelegation_time_list?.map(e => HostChainEpochTime.fromAmino(e)) || [];
    message.undelegationEpochList = object.undelegation_epoch_list?.map(e => HostChainUndelegationEpoch.fromAmino(e)) || [];
    message.delegateTransferSessionList = object.delegate_transfer_session_list?.map(e => DelegateTransferSession.fromAmino(e)) || [];
    message.sweepTransferList = object.sweep_transfer_list?.map(e => SweepTransfer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.hostChainList) {
      obj.host_chain_list = message.hostChainList.map(e => e ? HostChain.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.host_chain_list = message.hostChainList;
    }
    if (message.hostChainStateList) {
      obj.host_chain_state_list = message.hostChainStateList.map(e => e ? HostChainState.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.host_chain_state_list = message.hostChainStateList;
    }
    if (message.undelegationList) {
      obj.undelegation_list = message.undelegationList.map(e => e ? Undelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.undelegation_list = message.undelegationList;
    }
    if (message.channelUndelegationList) {
      obj.channel_undelegation_list = message.channelUndelegationList.map(e => e ? ChannelUndelegation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.channel_undelegation_list = message.channelUndelegationList;
    }
    if (message.replyDataList) {
      obj.reply_data_list = message.replyDataList.map(e => e ? ReplyData.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reply_data_list = message.replyDataList;
    }
    if (message.redeemableLsmList) {
      obj.redeemable_lsm_list = message.redeemableLsmList.map(e => e ? RedeemableLsm.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.redeemable_lsm_list = message.redeemableLsmList;
    }
    if (message.failedLsmTransferList) {
      obj.failed_lsm_transfer_list = message.failedLsmTransferList.map(e => e ? FailedLsmTransfer.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.failed_lsm_transfer_list = message.failedLsmTransferList;
    }
    if (message.multiSigConnectionList) {
      obj.multi_sig_connection_list = message.multiSigConnectionList.map(e => e ? MultiSigConnection.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.multi_sig_connection_list = message.multiSigConnectionList;
    }
    if (message.multiSigPacketList) {
      obj.multi_sig_packet_list = message.multiSigPacketList.map(e => e ? MultiSigPacket.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.multi_sig_packet_list = message.multiSigPacketList;
    }
    if (message.loopBackPacketList) {
      obj.loop_back_packet_list = message.loopBackPacketList.map(e => e ? LoopBackPacket.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.loop_back_packet_list = message.loopBackPacketList;
    }
    obj.loop_back_packet_last_id = message.loopBackPacketLastId ? message.loopBackPacketLastId.toString() : undefined;
    if (message.lastDelegationTimeList) {
      obj.last_delegation_time_list = message.lastDelegationTimeList.map(e => e ? HostChainEpochTime.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.last_delegation_time_list = message.lastDelegationTimeList;
    }
    if (message.lastRedelegationTimeList) {
      obj.last_redelegation_time_list = message.lastRedelegationTimeList.map(e => e ? HostChainEpochTime.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.last_redelegation_time_list = message.lastRedelegationTimeList;
    }
    if (message.lastLsmRedeemTimeList) {
      obj.last_lsm_redeem_time_list = message.lastLsmRedeemTimeList.map(e => e ? HostChainEpochTime.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.last_lsm_redeem_time_list = message.lastLsmRedeemTimeList;
    }
    if (message.lastUndelegationTimeList) {
      obj.last_undelegation_time_list = message.lastUndelegationTimeList.map(e => e ? HostChainEpochTime.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.last_undelegation_time_list = message.lastUndelegationTimeList;
    }
    if (message.undelegationEpochList) {
      obj.undelegation_epoch_list = message.undelegationEpochList.map(e => e ? HostChainUndelegationEpoch.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.undelegation_epoch_list = message.undelegationEpochList;
    }
    if (message.delegateTransferSessionList) {
      obj.delegate_transfer_session_list = message.delegateTransferSessionList.map(e => e ? DelegateTransferSession.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.delegate_transfer_session_list = message.delegateTransferSessionList;
    }
    if (message.sweepTransferList) {
      obj.sweep_transfer_list = message.sweepTransferList.map(e => e ? SweepTransfer.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.sweep_transfer_list = message.sweepTransferList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = true): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseHostChainEpochTime(): HostChainEpochTime {
  return {
    hostChainId: "",
    epochTime: Timestamp.fromPartial({})
  };
}
export const HostChainEpochTime = {
  typeUrl: "/pryzm.icstaking.v1.HostChainEpochTime",
  is(o: any): o is HostChainEpochTime {
    return o && (o.$typeUrl === HostChainEpochTime.typeUrl || typeof o.hostChainId === "string" && Timestamp.is(o.epochTime));
  },
  isSDK(o: any): o is HostChainEpochTimeSDKType {
    return o && (o.$typeUrl === HostChainEpochTime.typeUrl || typeof o.host_chain_id === "string" && Timestamp.isSDK(o.epoch_time));
  },
  isAmino(o: any): o is HostChainEpochTimeAmino {
    return o && (o.$typeUrl === HostChainEpochTime.typeUrl || typeof o.host_chain_id === "string" && Timestamp.isAmino(o.epoch_time));
  },
  encode(message: HostChainEpochTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.epochTime !== undefined) {
      Timestamp.encode(message.epochTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostChainEpochTime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainEpochTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.epochTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainEpochTime {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      epochTime: isSet(object.epochTime) ? fromJsonTimestamp(object.epochTime) : undefined
    };
  },
  toJSON(message: HostChainEpochTime): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.epochTime !== undefined && (obj.epochTime = fromTimestamp(message.epochTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<HostChainEpochTime>): HostChainEpochTime {
    const message = createBaseHostChainEpochTime();
    message.hostChainId = object.hostChainId ?? "";
    message.epochTime = object.epochTime !== undefined && object.epochTime !== null ? Timestamp.fromPartial(object.epochTime) : undefined;
    return message;
  },
  fromAmino(object: HostChainEpochTimeAmino): HostChainEpochTime {
    const message = createBaseHostChainEpochTime();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.epoch_time !== undefined && object.epoch_time !== null) {
      message.epochTime = Timestamp.fromAmino(object.epoch_time);
    }
    return message;
  },
  toAmino(message: HostChainEpochTime, useInterfaces: boolean = true): HostChainEpochTimeAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.epoch_time = message.epochTime ? Timestamp.toAmino(message.epochTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostChainEpochTimeAminoMsg): HostChainEpochTime {
    return HostChainEpochTime.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainEpochTimeProtoMsg, useInterfaces: boolean = true): HostChainEpochTime {
    return HostChainEpochTime.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostChainEpochTime): Uint8Array {
    return HostChainEpochTime.encode(message).finish();
  },
  toProtoMsg(message: HostChainEpochTime): HostChainEpochTimeProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostChainEpochTime",
      value: HostChainEpochTime.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostChainEpochTime.typeUrl, HostChainEpochTime);
function createBaseHostChainUndelegationEpoch(): HostChainUndelegationEpoch {
  return {
    hostChainId: "",
    undelegationEpoch: BigInt(0)
  };
}
export const HostChainUndelegationEpoch = {
  typeUrl: "/pryzm.icstaking.v1.HostChainUndelegationEpoch",
  is(o: any): o is HostChainUndelegationEpoch {
    return o && (o.$typeUrl === HostChainUndelegationEpoch.typeUrl || typeof o.hostChainId === "string" && typeof o.undelegationEpoch === "bigint");
  },
  isSDK(o: any): o is HostChainUndelegationEpochSDKType {
    return o && (o.$typeUrl === HostChainUndelegationEpoch.typeUrl || typeof o.host_chain_id === "string" && typeof o.undelegation_epoch === "bigint");
  },
  isAmino(o: any): o is HostChainUndelegationEpochAmino {
    return o && (o.$typeUrl === HostChainUndelegationEpoch.typeUrl || typeof o.host_chain_id === "string" && typeof o.undelegation_epoch === "bigint");
  },
  encode(message: HostChainUndelegationEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.undelegationEpoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.undelegationEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): HostChainUndelegationEpoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainUndelegationEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.undelegationEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostChainUndelegationEpoch {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      undelegationEpoch: isSet(object.undelegationEpoch) ? BigInt(object.undelegationEpoch.toString()) : BigInt(0)
    };
  },
  toJSON(message: HostChainUndelegationEpoch): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.undelegationEpoch !== undefined && (obj.undelegationEpoch = (message.undelegationEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<HostChainUndelegationEpoch>): HostChainUndelegationEpoch {
    const message = createBaseHostChainUndelegationEpoch();
    message.hostChainId = object.hostChainId ?? "";
    message.undelegationEpoch = object.undelegationEpoch !== undefined && object.undelegationEpoch !== null ? BigInt(object.undelegationEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HostChainUndelegationEpochAmino): HostChainUndelegationEpoch {
    const message = createBaseHostChainUndelegationEpoch();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.undelegation_epoch !== undefined && object.undelegation_epoch !== null) {
      message.undelegationEpoch = BigInt(object.undelegation_epoch);
    }
    return message;
  },
  toAmino(message: HostChainUndelegationEpoch, useInterfaces: boolean = true): HostChainUndelegationEpochAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.undelegation_epoch = message.undelegationEpoch ? message.undelegationEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HostChainUndelegationEpochAminoMsg): HostChainUndelegationEpoch {
    return HostChainUndelegationEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainUndelegationEpochProtoMsg, useInterfaces: boolean = true): HostChainUndelegationEpoch {
    return HostChainUndelegationEpoch.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: HostChainUndelegationEpoch): Uint8Array {
    return HostChainUndelegationEpoch.encode(message).finish();
  },
  toProtoMsg(message: HostChainUndelegationEpoch): HostChainUndelegationEpochProtoMsg {
    return {
      typeUrl: "/pryzm.icstaking.v1.HostChainUndelegationEpoch",
      value: HostChainUndelegationEpoch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostChainUndelegationEpoch.typeUrl, HostChainUndelegationEpoch);