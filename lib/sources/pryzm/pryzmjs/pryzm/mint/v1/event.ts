import { Minter, MinterAmino, MinterSDKType } from "./minter";
import { DistributionProportions, DistributionProportionsAmino, DistributionProportionsSDKType, Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventMint {
  minter: Minter;
  bondedRatio: string;
  totalMinted: string;
  distributedAmounts: DistributionProportions;
  epochNumber: bigint;
}
export interface EventMintProtoMsg {
  typeUrl: "/pryzm.mint.v1.EventMint";
  value: Uint8Array;
}
export interface EventMintAmino {
  minter?: MinterAmino;
  bonded_ratio?: string;
  total_minted?: string;
  distributed_amounts?: DistributionProportionsAmino;
  epoch_number?: string;
}
export interface EventMintAminoMsg {
  type: "/pryzm.mint.v1.EventMint";
  value: EventMintAmino;
}
export interface EventMintSDKType {
  minter: MinterSDKType;
  bonded_ratio: string;
  total_minted: string;
  distributed_amounts: DistributionProportionsSDKType;
  epoch_number: bigint;
}
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.mint.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.mint.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
function createBaseEventMint(): EventMint {
  return {
    minter: Minter.fromPartial({}),
    bondedRatio: "",
    totalMinted: "",
    distributedAmounts: DistributionProportions.fromPartial({}),
    epochNumber: BigInt(0)
  };
}
export const EventMint = {
  typeUrl: "/pryzm.mint.v1.EventMint",
  is(o: any): o is EventMint {
    return o && (o.$typeUrl === EventMint.typeUrl || Minter.is(o.minter) && typeof o.bondedRatio === "string" && typeof o.totalMinted === "string" && DistributionProportions.is(o.distributedAmounts) && typeof o.epochNumber === "bigint");
  },
  isSDK(o: any): o is EventMintSDKType {
    return o && (o.$typeUrl === EventMint.typeUrl || Minter.isSDK(o.minter) && typeof o.bonded_ratio === "string" && typeof o.total_minted === "string" && DistributionProportions.isSDK(o.distributed_amounts) && typeof o.epoch_number === "bigint");
  },
  isAmino(o: any): o is EventMintAmino {
    return o && (o.$typeUrl === EventMint.typeUrl || Minter.isAmino(o.minter) && typeof o.bonded_ratio === "string" && typeof o.total_minted === "string" && DistributionProportions.isAmino(o.distributed_amounts) && typeof o.epoch_number === "bigint");
  },
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.bondedRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.bondedRatio, 18).atomics);
    }
    if (message.totalMinted !== "") {
      writer.uint32(26).string(message.totalMinted);
    }
    if (message.distributedAmounts !== undefined) {
      DistributionProportions.encode(message.distributedAmounts, writer.uint32(34).fork()).ldelim();
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.epochNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.bondedRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.totalMinted = reader.string();
          break;
        case 4:
          message.distributedAmounts = DistributionProportions.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.epochNumber = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMint {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      bondedRatio: isSet(object.bondedRatio) ? String(object.bondedRatio) : "",
      totalMinted: isSet(object.totalMinted) ? String(object.totalMinted) : "",
      distributedAmounts: isSet(object.distributedAmounts) ? DistributionProportions.fromJSON(object.distributedAmounts) : undefined,
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.bondedRatio !== undefined && (obj.bondedRatio = message.bondedRatio);
    message.totalMinted !== undefined && (obj.totalMinted = message.totalMinted);
    message.distributedAmounts !== undefined && (obj.distributedAmounts = message.distributedAmounts ? DistributionProportions.toJSON(message.distributedAmounts) : undefined);
    message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.bondedRatio = object.bondedRatio ?? "";
    message.totalMinted = object.totalMinted ?? "";
    message.distributedAmounts = object.distributedAmounts !== undefined && object.distributedAmounts !== null ? DistributionProportions.fromPartial(object.distributedAmounts) : undefined;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromAmino(object.minter);
    }
    if (object.bonded_ratio !== undefined && object.bonded_ratio !== null) {
      message.bondedRatio = object.bonded_ratio;
    }
    if (object.total_minted !== undefined && object.total_minted !== null) {
      message.totalMinted = object.total_minted;
    }
    if (object.distributed_amounts !== undefined && object.distributed_amounts !== null) {
      message.distributedAmounts = DistributionProportions.fromAmino(object.distributed_amounts);
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: EventMint, useInterfaces: boolean = true): EventMintAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter, useInterfaces) : undefined;
    obj.bonded_ratio = padDecimal(message.bondedRatio) === "" ? undefined : padDecimal(message.bondedRatio);
    obj.total_minted = message.totalMinted === "" ? undefined : message.totalMinted;
    obj.distributed_amounts = message.distributedAmounts ? DistributionProportions.toAmino(message.distributedAmounts, useInterfaces) : undefined;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintProtoMsg, useInterfaces: boolean = true): EventMint {
    return EventMint.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/pryzm.mint.v1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventMint.typeUrl, EventMint);
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.mint.v1.EventSetParams",
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
      typeUrl: "/pryzm.mint.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);