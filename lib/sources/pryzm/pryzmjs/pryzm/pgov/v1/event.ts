import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Proposal, ProposalAmino, ProposalSDKType } from "./proposal";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Vote, VoteAmino, VoteSDKType } from "./vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.pgov.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventSetProposal {
  proposal: Proposal;
}
export interface EventSetProposalProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventSetProposal";
  value: Uint8Array;
}
export interface EventSetProposalAmino {
  proposal?: ProposalAmino;
}
export interface EventSetProposalAminoMsg {
  type: "/pryzm.pgov.v1.EventSetProposal";
  value: EventSetProposalAmino;
}
export interface EventSetProposalSDKType {
  proposal: ProposalSDKType;
}
export interface EventPAssetStake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}
export interface EventPAssetStakeProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventPAssetStake";
  value: Uint8Array;
}
export interface EventPAssetStakeAmino {
  address?: string;
  asset?: string;
  amount?: CoinAmino[];
  total_staked_p_asset?: string;
}
export interface EventPAssetStakeAminoMsg {
  type: "/pryzm.pgov.v1.EventPAssetStake";
  value: EventPAssetStakeAmino;
}
export interface EventPAssetStakeSDKType {
  address: string;
  asset: string;
  amount: CoinSDKType[];
  total_staked_p_asset: string;
}
export interface EventPAssetUnstake {
  address: string;
  asset: string;
  amount: Coin[];
  totalStakedPAsset: string;
}
export interface EventPAssetUnstakeProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake";
  value: Uint8Array;
}
export interface EventPAssetUnstakeAmino {
  address?: string;
  asset?: string;
  amount?: CoinAmino[];
  total_staked_p_asset?: string;
}
export interface EventPAssetUnstakeAminoMsg {
  type: "/pryzm.pgov.v1.EventPAssetUnstake";
  value: EventPAssetUnstakeAmino;
}
export interface EventPAssetUnstakeSDKType {
  address: string;
  asset: string;
  amount: CoinSDKType[];
  total_staked_p_asset: string;
}
export interface EventVoteSubmit {
  vote?: Vote;
}
export interface EventVoteSubmitProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteSubmit";
  value: Uint8Array;
}
export interface EventVoteSubmitAmino {
  vote?: VoteAmino;
}
export interface EventVoteSubmitAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteSubmit";
  value: EventVoteSubmitAmino;
}
export interface EventVoteSubmitSDKType {
  vote?: VoteSDKType;
}
export interface EventProposalEnd {
  proposal?: Proposal;
}
export interface EventProposalEndProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventProposalEnd";
  value: Uint8Array;
}
export interface EventProposalEndAmino {
  proposal?: ProposalAmino;
}
export interface EventProposalEndAminoMsg {
  type: "/pryzm.pgov.v1.EventProposalEnd";
  value: EventProposalEndAmino;
}
export interface EventProposalEndSDKType {
  proposal?: ProposalSDKType;
}
export interface EventVoteTransmit {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteTransmitProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmit";
  value: Uint8Array;
}
export interface EventVoteTransmitAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteTransmitAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTransmit";
  value: EventVoteTransmitAmino;
}
export interface EventVoteTransmitSDKType {
  proposal_id: bigint;
  asset: string;
}
export interface EventVoteTransmitFailure {
  proposalId: bigint;
  asset: string;
  error: string;
}
export interface EventVoteTransmitFailureProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure";
  value: Uint8Array;
}
export interface EventVoteTransmitFailureAmino {
  proposal_id?: string;
  asset?: string;
  error?: string;
}
export interface EventVoteTransmitFailureAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTransmitFailure";
  value: EventVoteTransmitFailureAmino;
}
export interface EventVoteTransmitFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteAckSuccess {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteAckSuccessProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess";
  value: Uint8Array;
}
export interface EventVoteAckSuccessAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteAckSuccessAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteAckSuccess";
  value: EventVoteAckSuccessAmino;
}
export interface EventVoteAckSuccessSDKType {
  proposal_id: bigint;
  asset: string;
}
export interface EventVoteAckFailure {
  proposalId: bigint;
  asset: string;
  error: string;
}
export interface EventVoteAckFailureProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure";
  value: Uint8Array;
}
export interface EventVoteAckFailureAmino {
  proposal_id?: string;
  asset?: string;
  error?: string;
}
export interface EventVoteAckFailureAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteAckFailure";
  value: EventVoteAckFailureAmino;
}
export interface EventVoteAckFailureSDKType {
  proposal_id: bigint;
  asset: string;
  error: string;
}
export interface EventVoteTimeout {
  proposalId: bigint;
  asset: string;
}
export interface EventVoteTimeoutProtoMsg {
  typeUrl: "/pryzm.pgov.v1.EventVoteTimeout";
  value: Uint8Array;
}
export interface EventVoteTimeoutAmino {
  proposal_id?: string;
  asset?: string;
}
export interface EventVoteTimeoutAminoMsg {
  type: "/pryzm.pgov.v1.EventVoteTimeout";
  value: EventVoteTimeoutAmino;
}
export interface EventVoteTimeoutSDKType {
  proposal_id: bigint;
  asset: string;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.pgov.v1.EventSetParams",
  is(o: any): o is EventSetParams {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is EventSetParamsSDKType {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is EventSetParamsAmino {
    return o && (o.$typeUrl === EventSetParams.typeUrl || Params.isAmino(o.params));
  },
  encode(message: EventSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetParams {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: EventSetParams): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetParams>): EventSetParams {
    const message = createBaseEventSetParams();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: EventSetParamsAmino): EventSetParams {
    const message = createBaseEventSetParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: EventSetParams, useInterfaces: boolean = true): EventSetParamsAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetParamsAminoMsg): EventSetParams {
    return EventSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetParamsProtoMsg, useInterfaces: boolean = true): EventSetParams {
    return EventSetParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetParams): Uint8Array {
    return EventSetParams.encode(message).finish();
  },
  toProtoMsg(message: EventSetParams): EventSetParamsProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);
function createBaseEventSetProposal(): EventSetProposal {
  return {
    proposal: Proposal.fromPartial({})
  };
}
export const EventSetProposal = {
  typeUrl: "/pryzm.pgov.v1.EventSetProposal",
  is(o: any): o is EventSetProposal {
    return o && (o.$typeUrl === EventSetProposal.typeUrl || Proposal.is(o.proposal));
  },
  isSDK(o: any): o is EventSetProposalSDKType {
    return o && (o.$typeUrl === EventSetProposal.typeUrl || Proposal.isSDK(o.proposal));
  },
  isAmino(o: any): o is EventSetProposalAmino {
    return o && (o.$typeUrl === EventSetProposal.typeUrl || Proposal.isAmino(o.proposal));
  },
  encode(message: EventSetProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetProposal {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: EventSetProposal): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetProposal>): EventSetProposal {
    const message = createBaseEventSetProposal();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: EventSetProposalAmino): EventSetProposal {
    const message = createBaseEventSetProposal();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: EventSetProposal, useInterfaces: boolean = true): EventSetProposalAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetProposalAminoMsg): EventSetProposal {
    return EventSetProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetProposalProtoMsg, useInterfaces: boolean = true): EventSetProposal {
    return EventSetProposal.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetProposal): Uint8Array {
    return EventSetProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSetProposal): EventSetProposalProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventSetProposal",
      value: EventSetProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetProposal.typeUrl, EventSetProposal);
function createBaseEventPAssetStake(): EventPAssetStake {
  return {
    address: "",
    asset: "",
    amount: [],
    totalStakedPAsset: ""
  };
}
export const EventPAssetStake = {
  typeUrl: "/pryzm.pgov.v1.EventPAssetStake",
  is(o: any): o is EventPAssetStake {
    return o && (o.$typeUrl === EventPAssetStake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.totalStakedPAsset === "string");
  },
  isSDK(o: any): o is EventPAssetStakeSDKType {
    return o && (o.$typeUrl === EventPAssetStake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.total_staked_p_asset === "string");
  },
  isAmino(o: any): o is EventPAssetStakeAmino {
    return o && (o.$typeUrl === EventPAssetStake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.total_staked_p_asset === "string");
  },
  encode(message: EventPAssetStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventPAssetStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPAssetStake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : ""
    };
  },
  toJSON(message: EventPAssetStake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },
  fromPartial(object: Partial<EventPAssetStake>): EventPAssetStake {
    const message = createBaseEventPAssetStake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
  fromAmino(object: EventPAssetStakeAmino): EventPAssetStake {
    const message = createBaseEventPAssetStake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_staked_p_asset !== undefined && object.total_staked_p_asset !== null) {
      message.totalStakedPAsset = object.total_staked_p_asset;
    }
    return message;
  },
  toAmino(message: EventPAssetStake, useInterfaces: boolean = true): EventPAssetStakeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset = message.asset === "" ? undefined : message.asset;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.total_staked_p_asset = message.totalStakedPAsset === "" ? undefined : message.totalStakedPAsset;
    return obj;
  },
  fromAminoMsg(object: EventPAssetStakeAminoMsg): EventPAssetStake {
    return EventPAssetStake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPAssetStakeProtoMsg, useInterfaces: boolean = true): EventPAssetStake {
    return EventPAssetStake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventPAssetStake): Uint8Array {
    return EventPAssetStake.encode(message).finish();
  },
  toProtoMsg(message: EventPAssetStake): EventPAssetStakeProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventPAssetStake",
      value: EventPAssetStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventPAssetStake.typeUrl, EventPAssetStake);
function createBaseEventPAssetUnstake(): EventPAssetUnstake {
  return {
    address: "",
    asset: "",
    amount: [],
    totalStakedPAsset: ""
  };
}
export const EventPAssetUnstake = {
  typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake",
  is(o: any): o is EventPAssetUnstake {
    return o && (o.$typeUrl === EventPAssetUnstake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.totalStakedPAsset === "string");
  },
  isSDK(o: any): o is EventPAssetUnstakeSDKType {
    return o && (o.$typeUrl === EventPAssetUnstake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.total_staked_p_asset === "string");
  },
  isAmino(o: any): o is EventPAssetUnstakeAmino {
    return o && (o.$typeUrl === EventPAssetUnstake.typeUrl || typeof o.address === "string" && typeof o.asset === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.total_staked_p_asset === "string");
  },
  encode(message: EventPAssetUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalStakedPAsset !== "") {
      writer.uint32(34).string(message.totalStakedPAsset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventPAssetUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPAssetUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.totalStakedPAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPAssetUnstake {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      totalStakedPAsset: isSet(object.totalStakedPAsset) ? String(object.totalStakedPAsset) : ""
    };
  },
  toJSON(message: EventPAssetUnstake): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.totalStakedPAsset !== undefined && (obj.totalStakedPAsset = message.totalStakedPAsset);
    return obj;
  },
  fromPartial(object: Partial<EventPAssetUnstake>): EventPAssetUnstake {
    const message = createBaseEventPAssetUnstake();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.totalStakedPAsset = object.totalStakedPAsset ?? "";
    return message;
  },
  fromAmino(object: EventPAssetUnstakeAmino): EventPAssetUnstake {
    const message = createBaseEventPAssetUnstake();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_staked_p_asset !== undefined && object.total_staked_p_asset !== null) {
      message.totalStakedPAsset = object.total_staked_p_asset;
    }
    return message;
  },
  toAmino(message: EventPAssetUnstake, useInterfaces: boolean = true): EventPAssetUnstakeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.asset = message.asset === "" ? undefined : message.asset;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.total_staked_p_asset = message.totalStakedPAsset === "" ? undefined : message.totalStakedPAsset;
    return obj;
  },
  fromAminoMsg(object: EventPAssetUnstakeAminoMsg): EventPAssetUnstake {
    return EventPAssetUnstake.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPAssetUnstakeProtoMsg, useInterfaces: boolean = true): EventPAssetUnstake {
    return EventPAssetUnstake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventPAssetUnstake): Uint8Array {
    return EventPAssetUnstake.encode(message).finish();
  },
  toProtoMsg(message: EventPAssetUnstake): EventPAssetUnstakeProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventPAssetUnstake",
      value: EventPAssetUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventPAssetUnstake.typeUrl, EventPAssetUnstake);
function createBaseEventVoteSubmit(): EventVoteSubmit {
  return {
    vote: undefined
  };
}
export const EventVoteSubmit = {
  typeUrl: "/pryzm.pgov.v1.EventVoteSubmit",
  is(o: any): o is EventVoteSubmit {
    return o && o.$typeUrl === EventVoteSubmit.typeUrl;
  },
  isSDK(o: any): o is EventVoteSubmitSDKType {
    return o && o.$typeUrl === EventVoteSubmit.typeUrl;
  },
  isAmino(o: any): o is EventVoteSubmitAmino {
    return o && o.$typeUrl === EventVoteSubmit.typeUrl;
  },
  encode(message: EventVoteSubmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteSubmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteSubmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteSubmit {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },
  toJSON(message: EventVoteSubmit): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventVoteSubmit>): EventVoteSubmit {
    const message = createBaseEventVoteSubmit();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },
  fromAmino(object: EventVoteSubmitAmino): EventVoteSubmit {
    const message = createBaseEventVoteSubmit();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: EventVoteSubmit, useInterfaces: boolean = true): EventVoteSubmitAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteSubmitAminoMsg): EventVoteSubmit {
    return EventVoteSubmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteSubmitProtoMsg, useInterfaces: boolean = true): EventVoteSubmit {
    return EventVoteSubmit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteSubmit): Uint8Array {
    return EventVoteSubmit.encode(message).finish();
  },
  toProtoMsg(message: EventVoteSubmit): EventVoteSubmitProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteSubmit",
      value: EventVoteSubmit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteSubmit.typeUrl, EventVoteSubmit);
function createBaseEventProposalEnd(): EventProposalEnd {
  return {
    proposal: undefined
  };
}
export const EventProposalEnd = {
  typeUrl: "/pryzm.pgov.v1.EventProposalEnd",
  is(o: any): o is EventProposalEnd {
    return o && o.$typeUrl === EventProposalEnd.typeUrl;
  },
  isSDK(o: any): o is EventProposalEndSDKType {
    return o && o.$typeUrl === EventProposalEnd.typeUrl;
  },
  isAmino(o: any): o is EventProposalEndAmino {
    return o && o.$typeUrl === EventProposalEnd.typeUrl;
  },
  encode(message: EventProposalEnd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventProposalEnd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProposalEnd {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },
  toJSON(message: EventProposalEnd): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventProposalEnd>): EventProposalEnd {
    const message = createBaseEventProposalEnd();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },
  fromAmino(object: EventProposalEndAmino): EventProposalEnd {
    const message = createBaseEventProposalEnd();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: EventProposalEnd, useInterfaces: boolean = true): EventProposalEndAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalEndAminoMsg): EventProposalEnd {
    return EventProposalEnd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProposalEndProtoMsg, useInterfaces: boolean = true): EventProposalEnd {
    return EventProposalEnd.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventProposalEnd): Uint8Array {
    return EventProposalEnd.encode(message).finish();
  },
  toProtoMsg(message: EventProposalEnd): EventProposalEndProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventProposalEnd",
      value: EventProposalEnd.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventProposalEnd.typeUrl, EventProposalEnd);
function createBaseEventVoteTransmit(): EventVoteTransmit {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTransmit = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmit",
  is(o: any): o is EventVoteTransmit {
    return o && (o.$typeUrl === EventVoteTransmit.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string");
  },
  isSDK(o: any): o is EventVoteTransmitSDKType {
    return o && (o.$typeUrl === EventVoteTransmit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  isAmino(o: any): o is EventVoteTransmitAmino {
    return o && (o.$typeUrl === EventVoteTransmit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  encode(message: EventVoteTransmit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteTransmit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteTransmit {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteTransmit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTransmit>): EventVoteTransmit {
    const message = createBaseEventVoteTransmit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteTransmitAmino): EventVoteTransmit {
    const message = createBaseEventVoteTransmit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteTransmit, useInterfaces: boolean = true): EventVoteTransmitAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteTransmitAminoMsg): EventVoteTransmit {
    return EventVoteTransmit.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTransmitProtoMsg, useInterfaces: boolean = true): EventVoteTransmit {
    return EventVoteTransmit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteTransmit): Uint8Array {
    return EventVoteTransmit.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTransmit): EventVoteTransmitProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTransmit",
      value: EventVoteTransmit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteTransmit.typeUrl, EventVoteTransmit);
function createBaseEventVoteTransmitFailure(): EventVoteTransmitFailure {
  return {
    proposalId: BigInt(0),
    asset: "",
    error: ""
  };
}
export const EventVoteTransmitFailure = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure",
  is(o: any): o is EventVoteTransmitFailure {
    return o && (o.$typeUrl === EventVoteTransmitFailure.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  isSDK(o: any): o is EventVoteTransmitFailureSDKType {
    return o && (o.$typeUrl === EventVoteTransmitFailure.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  isAmino(o: any): o is EventVoteTransmitFailureAmino {
    return o && (o.$typeUrl === EventVoteTransmitFailure.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  encode(message: EventVoteTransmitFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteTransmitFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTransmitFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteTransmitFailure {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: EventVoteTransmitFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTransmitFailure>): EventVoteTransmitFailure {
    const message = createBaseEventVoteTransmitFailure();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventVoteTransmitFailureAmino): EventVoteTransmitFailure {
    const message = createBaseEventVoteTransmitFailure();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventVoteTransmitFailure, useInterfaces: boolean = true): EventVoteTransmitFailureAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventVoteTransmitFailureAminoMsg): EventVoteTransmitFailure {
    return EventVoteTransmitFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTransmitFailureProtoMsg, useInterfaces: boolean = true): EventVoteTransmitFailure {
    return EventVoteTransmitFailure.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteTransmitFailure): Uint8Array {
    return EventVoteTransmitFailure.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTransmitFailure): EventVoteTransmitFailureProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTransmitFailure",
      value: EventVoteTransmitFailure.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteTransmitFailure.typeUrl, EventVoteTransmitFailure);
function createBaseEventVoteAckSuccess(): EventVoteAckSuccess {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteAckSuccess = {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess",
  is(o: any): o is EventVoteAckSuccess {
    return o && (o.$typeUrl === EventVoteAckSuccess.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string");
  },
  isSDK(o: any): o is EventVoteAckSuccessSDKType {
    return o && (o.$typeUrl === EventVoteAckSuccess.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  isAmino(o: any): o is EventVoteAckSuccessAmino {
    return o && (o.$typeUrl === EventVoteAckSuccess.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  encode(message: EventVoteAckSuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteAckSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteAckSuccess {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteAckSuccess): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteAckSuccess>): EventVoteAckSuccess {
    const message = createBaseEventVoteAckSuccess();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteAckSuccessAmino): EventVoteAckSuccess {
    const message = createBaseEventVoteAckSuccess();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteAckSuccess, useInterfaces: boolean = true): EventVoteAckSuccessAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteAckSuccessAminoMsg): EventVoteAckSuccess {
    return EventVoteAckSuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteAckSuccessProtoMsg, useInterfaces: boolean = true): EventVoteAckSuccess {
    return EventVoteAckSuccess.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteAckSuccess): Uint8Array {
    return EventVoteAckSuccess.encode(message).finish();
  },
  toProtoMsg(message: EventVoteAckSuccess): EventVoteAckSuccessProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteAckSuccess",
      value: EventVoteAckSuccess.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteAckSuccess.typeUrl, EventVoteAckSuccess);
function createBaseEventVoteAckFailure(): EventVoteAckFailure {
  return {
    proposalId: BigInt(0),
    asset: "",
    error: ""
  };
}
export const EventVoteAckFailure = {
  typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure",
  is(o: any): o is EventVoteAckFailure {
    return o && (o.$typeUrl === EventVoteAckFailure.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  isSDK(o: any): o is EventVoteAckFailureSDKType {
    return o && (o.$typeUrl === EventVoteAckFailure.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  isAmino(o: any): o is EventVoteAckFailureAmino {
    return o && (o.$typeUrl === EventVoteAckFailure.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string" && typeof o.error === "string");
  },
  encode(message: EventVoteAckFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteAckFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteAckFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteAckFailure {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : "",
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: EventVoteAckFailure): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<EventVoteAckFailure>): EventVoteAckFailure {
    const message = createBaseEventVoteAckFailure();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: EventVoteAckFailureAmino): EventVoteAckFailure {
    const message = createBaseEventVoteAckFailure();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: EventVoteAckFailure, useInterfaces: boolean = true): EventVoteAckFailureAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: EventVoteAckFailureAminoMsg): EventVoteAckFailure {
    return EventVoteAckFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteAckFailureProtoMsg, useInterfaces: boolean = true): EventVoteAckFailure {
    return EventVoteAckFailure.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteAckFailure): Uint8Array {
    return EventVoteAckFailure.encode(message).finish();
  },
  toProtoMsg(message: EventVoteAckFailure): EventVoteAckFailureProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteAckFailure",
      value: EventVoteAckFailure.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteAckFailure.typeUrl, EventVoteAckFailure);
function createBaseEventVoteTimeout(): EventVoteTimeout {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const EventVoteTimeout = {
  typeUrl: "/pryzm.pgov.v1.EventVoteTimeout",
  is(o: any): o is EventVoteTimeout {
    return o && (o.$typeUrl === EventVoteTimeout.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string");
  },
  isSDK(o: any): o is EventVoteTimeoutSDKType {
    return o && (o.$typeUrl === EventVoteTimeout.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  isAmino(o: any): o is EventVoteTimeoutAmino {
    return o && (o.$typeUrl === EventVoteTimeout.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  encode(message: EventVoteTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventVoteTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVoteTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVoteTimeout {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: EventVoteTimeout): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<EventVoteTimeout>): EventVoteTimeout {
    const message = createBaseEventVoteTimeout();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: EventVoteTimeoutAmino): EventVoteTimeout {
    const message = createBaseEventVoteTimeout();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: EventVoteTimeout, useInterfaces: boolean = true): EventVoteTimeoutAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    return obj;
  },
  fromAminoMsg(object: EventVoteTimeoutAminoMsg): EventVoteTimeout {
    return EventVoteTimeout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteTimeoutProtoMsg, useInterfaces: boolean = true): EventVoteTimeout {
    return EventVoteTimeout.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventVoteTimeout): Uint8Array {
    return EventVoteTimeout.encode(message).finish();
  },
  toProtoMsg(message: EventVoteTimeout): EventVoteTimeoutProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.EventVoteTimeout",
      value: EventVoteTimeout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventVoteTimeout.typeUrl, EventVoteTimeout);