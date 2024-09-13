import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StakedPAsset, StakedPAssetAmino, StakedPAssetSDKType } from "./staked_p_asset";
import { Proposal, ProposalAmino, ProposalSDKType } from "./proposal";
import { Vote, VoteAmino, VoteSDKType } from "./vote";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState defines the pgov module's genesis state. */
export interface GenesisState {
  params: Params;
  stakedPAssetList: StakedPAsset[];
  proposalList: Proposal[];
  voteList: Vote[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pryzm.pgov.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pgov module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  staked_p_asset_list?: StakedPAssetAmino[];
  proposal_list?: ProposalAmino[];
  vote_list?: VoteAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pryzm.pgov.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pgov module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  staked_p_asset_list: StakedPAssetSDKType[];
  proposal_list: ProposalSDKType[];
  vote_list: VoteSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakedPAssetList: [],
    proposalList: [],
    voteList: []
  };
}
export const GenesisState = {
  typeUrl: "/pryzm.pgov.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.stakedPAssetList) && (!o.stakedPAssetList.length || StakedPAsset.is(o.stakedPAssetList[0])) && Array.isArray(o.proposalList) && (!o.proposalList.length || Proposal.is(o.proposalList[0])) && Array.isArray(o.voteList) && (!o.voteList.length || Vote.is(o.voteList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.staked_p_asset_list) && (!o.staked_p_asset_list.length || StakedPAsset.isSDK(o.staked_p_asset_list[0])) && Array.isArray(o.proposal_list) && (!o.proposal_list.length || Proposal.isSDK(o.proposal_list[0])) && Array.isArray(o.vote_list) && (!o.vote_list.length || Vote.isSDK(o.vote_list[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.staked_p_asset_list) && (!o.staked_p_asset_list.length || StakedPAsset.isAmino(o.staked_p_asset_list[0])) && Array.isArray(o.proposal_list) && (!o.proposal_list.length || Proposal.isAmino(o.proposal_list[0])) && Array.isArray(o.vote_list) && (!o.vote_list.length || Vote.isAmino(o.vote_list[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakedPAssetList) {
      StakedPAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.proposalList) {
      Proposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 2:
          message.stakedPAssetList.push(StakedPAsset.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.proposalList.push(Proposal.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.voteList.push(Vote.decode(reader, reader.uint32(), useInterfaces));
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
      stakedPAssetList: Array.isArray(object?.stakedPAssetList) ? object.stakedPAssetList.map((e: any) => StakedPAsset.fromJSON(e)) : [],
      proposalList: Array.isArray(object?.proposalList) ? object.proposalList.map((e: any) => Proposal.fromJSON(e)) : [],
      voteList: Array.isArray(object?.voteList) ? object.voteList.map((e: any) => Vote.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.stakedPAssetList) {
      obj.stakedPAssetList = message.stakedPAssetList.map(e => e ? StakedPAsset.toJSON(e) : undefined);
    } else {
      obj.stakedPAssetList = [];
    }
    if (message.proposalList) {
      obj.proposalList = message.proposalList.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposalList = [];
    }
    if (message.voteList) {
      obj.voteList = message.voteList.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.voteList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakedPAssetList = object.stakedPAssetList?.map(e => StakedPAsset.fromPartial(e)) || [];
    message.proposalList = object.proposalList?.map(e => Proposal.fromPartial(e)) || [];
    message.voteList = object.voteList?.map(e => Vote.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakedPAssetList = object.staked_p_asset_list?.map(e => StakedPAsset.fromAmino(e)) || [];
    message.proposalList = object.proposal_list?.map(e => Proposal.fromAmino(e)) || [];
    message.voteList = object.vote_list?.map(e => Vote.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = true): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params, useInterfaces) : undefined;
    if (message.stakedPAssetList) {
      obj.staked_p_asset_list = message.stakedPAssetList.map(e => e ? StakedPAsset.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.staked_p_asset_list = message.stakedPAssetList;
    }
    if (message.proposalList) {
      obj.proposal_list = message.proposalList.map(e => e ? Proposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposal_list = message.proposalList;
    }
    if (message.voteList) {
      obj.vote_list = message.voteList.map(e => e ? Vote.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.vote_list = message.voteList;
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
      typeUrl: "/pryzm.pgov.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);