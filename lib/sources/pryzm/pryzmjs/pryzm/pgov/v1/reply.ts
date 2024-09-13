import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** the reply data used in the VoteBridge */
export interface VoteReplyData {
  /** the id of proposal on the host chain */
  proposalId: bigint;
  /** the asset ID */
  asset: string;
}
export interface VoteReplyDataProtoMsg {
  typeUrl: "/pryzm.pgov.v1.VoteReplyData";
  value: Uint8Array;
}
/** the reply data used in the VoteBridge */
export interface VoteReplyDataAmino {
  /** the id of proposal on the host chain */
  proposal_id?: string;
  /** the asset ID */
  asset?: string;
}
export interface VoteReplyDataAminoMsg {
  type: "/pryzm.pgov.v1.VoteReplyData";
  value: VoteReplyDataAmino;
}
/** the reply data used in the VoteBridge */
export interface VoteReplyDataSDKType {
  proposal_id: bigint;
  asset: string;
}
function createBaseVoteReplyData(): VoteReplyData {
  return {
    proposalId: BigInt(0),
    asset: ""
  };
}
export const VoteReplyData = {
  typeUrl: "/pryzm.pgov.v1.VoteReplyData",
  is(o: any): o is VoteReplyData {
    return o && (o.$typeUrl === VoteReplyData.typeUrl || typeof o.proposalId === "bigint" && typeof o.asset === "string");
  },
  isSDK(o: any): o is VoteReplyDataSDKType {
    return o && (o.$typeUrl === VoteReplyData.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  isAmino(o: any): o is VoteReplyDataAmino {
    return o && (o.$typeUrl === VoteReplyData.typeUrl || typeof o.proposal_id === "bigint" && typeof o.asset === "string");
  },
  encode(message: VoteReplyData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteReplyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteReplyData();
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
  fromJSON(object: any): VoteReplyData {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  toJSON(message: VoteReplyData): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial(object: Partial<VoteReplyData>): VoteReplyData {
    const message = createBaseVoteReplyData();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: VoteReplyDataAmino): VoteReplyData {
    const message = createBaseVoteReplyData();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: VoteReplyData, useInterfaces: boolean = true): VoteReplyDataAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.asset = message.asset === "" ? undefined : message.asset;
    return obj;
  },
  fromAminoMsg(object: VoteReplyDataAminoMsg): VoteReplyData {
    return VoteReplyData.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteReplyDataProtoMsg, useInterfaces: boolean = true): VoteReplyData {
    return VoteReplyData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteReplyData): Uint8Array {
    return VoteReplyData.encode(message).finish();
  },
  toProtoMsg(message: VoteReplyData): VoteReplyDataProtoMsg {
    return {
      typeUrl: "/pryzm.pgov.v1.VoteReplyData",
      value: VoteReplyData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteReplyData.typeUrl, VoteReplyData);