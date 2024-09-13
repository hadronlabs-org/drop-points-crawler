import { PairMatchProposal, PairMatchProposalAmino, PairMatchProposalSDKType } from "./pair_match_proposal";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgProposeMatch {
  creator: string;
  pairs: PairMatchProposal[];
  /**
   * this includes the output amount of virtual orders as well as the proposer reward
   * if the limits are not met, the transaction will fail
   */
  minAmountsOut: Coin[];
  /** is not casted to coins, to allow for zero limits */
  maxAmountsIn: Coin[];
}
export interface MsgProposeMatchProtoMsg {
  typeUrl: "/pryzm.amm.v2.MsgProposeMatch";
  value: Uint8Array;
}
export interface MsgProposeMatchAmino {
  creator?: string;
  pairs: PairMatchProposalAmino[];
  /**
   * this includes the output amount of virtual orders as well as the proposer reward
   * if the limits are not met, the transaction will fail
   */
  min_amounts_out?: CoinAmino[];
  /** is not casted to coins, to allow for zero limits */
  max_amounts_in?: CoinAmino[];
}
export interface MsgProposeMatchAminoMsg {
  type: "pryzm/amm/v2/ProposeMatch";
  value: MsgProposeMatchAmino;
}
export interface MsgProposeMatchSDKType {
  creator: string;
  pairs: PairMatchProposalSDKType[];
  min_amounts_out: CoinSDKType[];
  max_amounts_in: CoinSDKType[];
}
export interface MsgProposeMatchResponse {
  proposerReward: Coin[];
}
export interface MsgProposeMatchResponseProtoMsg {
  typeUrl: "/pryzm.amm.v2.MsgProposeMatchResponse";
  value: Uint8Array;
}
export interface MsgProposeMatchResponseAmino {
  proposer_reward?: CoinAmino[];
}
export interface MsgProposeMatchResponseAminoMsg {
  type: "/pryzm.amm.v2.MsgProposeMatchResponse";
  value: MsgProposeMatchResponseAmino;
}
export interface MsgProposeMatchResponseSDKType {
  proposer_reward: CoinSDKType[];
}
function createBaseMsgProposeMatch(): MsgProposeMatch {
  return {
    creator: "",
    pairs: [],
    minAmountsOut: [],
    maxAmountsIn: []
  };
}
export const MsgProposeMatch = {
  typeUrl: "/pryzm.amm.v2.MsgProposeMatch",
  aminoType: "pryzm/amm/v2/ProposeMatch",
  is(o: any): o is MsgProposeMatch {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.is(o.pairs[0])) && Array.isArray(o.minAmountsOut) && (!o.minAmountsOut.length || Coin.is(o.minAmountsOut[0])) && Array.isArray(o.maxAmountsIn) && (!o.maxAmountsIn.length || Coin.is(o.maxAmountsIn[0])));
  },
  isSDK(o: any): o is MsgProposeMatchSDKType {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.isSDK(o.pairs[0])) && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isSDK(o.min_amounts_out[0])) && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isSDK(o.max_amounts_in[0])));
  },
  isAmino(o: any): o is MsgProposeMatchAmino {
    return o && (o.$typeUrl === MsgProposeMatch.typeUrl || typeof o.creator === "string" && Array.isArray(o.pairs) && (!o.pairs.length || PairMatchProposal.isAmino(o.pairs[0])) && Array.isArray(o.min_amounts_out) && (!o.min_amounts_out.length || Coin.isAmino(o.min_amounts_out[0])) && Array.isArray(o.max_amounts_in) && (!o.max_amounts_in.length || Coin.isAmino(o.max_amounts_in[0])));
  },
  encode(message: MsgProposeMatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pairs) {
      PairMatchProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.minAmountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.maxAmountsIn) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgProposeMatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pairs.push(PairMatchProposal.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.minAmountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.maxAmountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PairMatchProposal.fromJSON(e)) : [],
      minAmountsOut: Array.isArray(object?.minAmountsOut) ? object.minAmountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      maxAmountsIn: Array.isArray(object?.maxAmountsIn) ? object.maxAmountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    if (message.minAmountsOut) {
      obj.minAmountsOut = message.minAmountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minAmountsOut = [];
    }
    if (message.maxAmountsIn) {
      obj.maxAmountsIn = message.maxAmountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxAmountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatch>): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    message.creator = object.creator ?? "";
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromPartial(e)) || [];
    message.minAmountsOut = object.minAmountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.maxAmountsIn = object.maxAmountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgProposeMatchAmino): MsgProposeMatch {
    const message = createBaseMsgProposeMatch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.pairs = object.pairs?.map(e => PairMatchProposal.fromAmino(e)) || [];
    message.minAmountsOut = object.min_amounts_out?.map(e => Coin.fromAmino(e)) || [];
    message.maxAmountsIn = object.max_amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatch, useInterfaces: boolean = true): MsgProposeMatchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairMatchProposal.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    if (message.minAmountsOut) {
      obj.min_amounts_out = message.minAmountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.min_amounts_out = message.minAmountsOut;
    }
    if (message.maxAmountsIn) {
      obj.max_amounts_in = message.maxAmountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.max_amounts_in = message.maxAmountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchAminoMsg): MsgProposeMatch {
    return MsgProposeMatch.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeMatch, useInterfaces: boolean = true): MsgProposeMatchAminoMsg {
    return {
      type: "pryzm/amm/v2/ProposeMatch",
      value: MsgProposeMatch.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgProposeMatchProtoMsg, useInterfaces: boolean = true): MsgProposeMatch {
    return MsgProposeMatch.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgProposeMatch): Uint8Array {
    return MsgProposeMatch.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatch): MsgProposeMatchProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v2.MsgProposeMatch",
      value: MsgProposeMatch.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProposeMatch.typeUrl, MsgProposeMatch);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgProposeMatch.aminoType, MsgProposeMatch.typeUrl);
function createBaseMsgProposeMatchResponse(): MsgProposeMatchResponse {
  return {
    proposerReward: []
  };
}
export const MsgProposeMatchResponse = {
  typeUrl: "/pryzm.amm.v2.MsgProposeMatchResponse",
  is(o: any): o is MsgProposeMatchResponse {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposerReward) && (!o.proposerReward.length || Coin.is(o.proposerReward[0])));
  },
  isSDK(o: any): o is MsgProposeMatchResponseSDKType {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isSDK(o.proposer_reward[0])));
  },
  isAmino(o: any): o is MsgProposeMatchResponseAmino {
    return o && (o.$typeUrl === MsgProposeMatchResponse.typeUrl || Array.isArray(o.proposer_reward) && (!o.proposer_reward.length || Coin.isAmino(o.proposer_reward[0])));
  },
  encode(message: MsgProposeMatchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposerReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgProposeMatchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposerReward.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeMatchResponse {
    return {
      proposerReward: Array.isArray(object?.proposerReward) ? object.proposerReward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgProposeMatchResponse): unknown {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposerReward = message.proposerReward.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.proposerReward = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgProposeMatchResponse>): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposerReward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgProposeMatchResponseAmino): MsgProposeMatchResponse {
    const message = createBaseMsgProposeMatchResponse();
    message.proposerReward = object.proposer_reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgProposeMatchResponse, useInterfaces: boolean = true): MsgProposeMatchResponseAmino {
    const obj: any = {};
    if (message.proposerReward) {
      obj.proposer_reward = message.proposerReward.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.proposer_reward = message.proposerReward;
    }
    return obj;
  },
  fromAminoMsg(object: MsgProposeMatchResponseAminoMsg): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeMatchResponseProtoMsg, useInterfaces: boolean = true): MsgProposeMatchResponse {
    return MsgProposeMatchResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgProposeMatchResponse): Uint8Array {
    return MsgProposeMatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeMatchResponse): MsgProposeMatchResponseProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v2.MsgProposeMatchResponse",
      value: MsgProposeMatchResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgProposeMatchResponse.typeUrl, MsgProposeMatchResponse);