import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { MaturityLevel, MaturityLevelAmino, MaturityLevelSDKType } from "./maturity_level";
import { RefractableAsset, RefractableAssetAmino, RefractableAssetSDKType } from "./refractable_asset";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventSetParams {
  params: Params;
}
export interface EventSetParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.EventSetParams";
  value: Uint8Array;
}
export interface EventSetParamsAmino {
  params?: ParamsAmino;
}
export interface EventSetParamsAminoMsg {
  type: "/pryzm.assets.v1.EventSetParams";
  value: EventSetParamsAmino;
}
export interface EventSetParamsSDKType {
  params: ParamsSDKType;
}
export interface EventAddMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventAddMaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.EventAddMaturityLevel";
  value: Uint8Array;
}
export interface EventAddMaturityLevelAmino {
  maturity_level?: MaturityLevelAmino;
}
export interface EventAddMaturityLevelAminoMsg {
  type: "/pryzm.assets.v1.EventAddMaturityLevel";
  value: EventAddMaturityLevelAmino;
}
export interface EventAddMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface EventDeactivateMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventDeactivateMaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.EventDeactivateMaturityLevel";
  value: Uint8Array;
}
export interface EventDeactivateMaturityLevelAmino {
  maturity_level?: MaturityLevelAmino;
}
export interface EventDeactivateMaturityLevelAminoMsg {
  type: "/pryzm.assets.v1.EventDeactivateMaturityLevel";
  value: EventDeactivateMaturityLevelAmino;
}
export interface EventDeactivateMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
export interface EventSetRefractableAsset {
  refractableAsset: RefractableAsset;
}
export interface EventSetRefractableAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.EventSetRefractableAsset";
  value: Uint8Array;
}
export interface EventSetRefractableAssetAmino {
  refractable_asset?: RefractableAssetAmino;
}
export interface EventSetRefractableAssetAminoMsg {
  type: "/pryzm.assets.v1.EventSetRefractableAsset";
  value: EventSetRefractableAssetAmino;
}
export interface EventSetRefractableAssetSDKType {
  refractable_asset: RefractableAssetSDKType;
}
export interface EventSetMaturityLevel {
  maturityLevel: MaturityLevel;
}
export interface EventSetMaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.EventSetMaturityLevel";
  value: Uint8Array;
}
export interface EventSetMaturityLevelAmino {
  maturity_level?: MaturityLevelAmino;
}
export interface EventSetMaturityLevelAminoMsg {
  type: "/pryzm.assets.v1.EventSetMaturityLevel";
  value: EventSetMaturityLevelAmino;
}
export interface EventSetMaturityLevelSDKType {
  maturity_level: MaturityLevelSDKType;
}
function createBaseEventSetParams(): EventSetParams {
  return {
    params: Params.fromPartial({})
  };
}
export const EventSetParams = {
  typeUrl: "/pryzm.assets.v1.EventSetParams",
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
      typeUrl: "/pryzm.assets.v1.EventSetParams",
      value: EventSetParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetParams.typeUrl, EventSetParams);
function createBaseEventAddMaturityLevel(): EventAddMaturityLevel {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const EventAddMaturityLevel = {
  typeUrl: "/pryzm.assets.v1.EventAddMaturityLevel",
  is(o: any): o is EventAddMaturityLevel {
    return o && (o.$typeUrl === EventAddMaturityLevel.typeUrl || MaturityLevel.is(o.maturityLevel));
  },
  isSDK(o: any): o is EventAddMaturityLevelSDKType {
    return o && (o.$typeUrl === EventAddMaturityLevel.typeUrl || MaturityLevel.isSDK(o.maturity_level));
  },
  isAmino(o: any): o is EventAddMaturityLevelAmino {
    return o && (o.$typeUrl === EventAddMaturityLevel.typeUrl || MaturityLevel.isAmino(o.maturity_level));
  },
  encode(message: EventAddMaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventAddMaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAddMaturityLevel {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventAddMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventAddMaturityLevel>): EventAddMaturityLevel {
    const message = createBaseEventAddMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  },
  fromAmino(object: EventAddMaturityLevelAmino): EventAddMaturityLevel {
    const message = createBaseEventAddMaturityLevel();
    if (object.maturity_level !== undefined && object.maturity_level !== null) {
      message.maturityLevel = MaturityLevel.fromAmino(object.maturity_level);
    }
    return message;
  },
  toAmino(message: EventAddMaturityLevel, useInterfaces: boolean = true): EventAddMaturityLevelAmino {
    const obj: any = {};
    obj.maturity_level = message.maturityLevel ? MaturityLevel.toAmino(message.maturityLevel, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAddMaturityLevelAminoMsg): EventAddMaturityLevel {
    return EventAddMaturityLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddMaturityLevelProtoMsg, useInterfaces: boolean = true): EventAddMaturityLevel {
    return EventAddMaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventAddMaturityLevel): Uint8Array {
    return EventAddMaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: EventAddMaturityLevel): EventAddMaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.EventAddMaturityLevel",
      value: EventAddMaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAddMaturityLevel.typeUrl, EventAddMaturityLevel);
function createBaseEventDeactivateMaturityLevel(): EventDeactivateMaturityLevel {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const EventDeactivateMaturityLevel = {
  typeUrl: "/pryzm.assets.v1.EventDeactivateMaturityLevel",
  is(o: any): o is EventDeactivateMaturityLevel {
    return o && (o.$typeUrl === EventDeactivateMaturityLevel.typeUrl || MaturityLevel.is(o.maturityLevel));
  },
  isSDK(o: any): o is EventDeactivateMaturityLevelSDKType {
    return o && (o.$typeUrl === EventDeactivateMaturityLevel.typeUrl || MaturityLevel.isSDK(o.maturity_level));
  },
  isAmino(o: any): o is EventDeactivateMaturityLevelAmino {
    return o && (o.$typeUrl === EventDeactivateMaturityLevel.typeUrl || MaturityLevel.isAmino(o.maturity_level));
  },
  encode(message: EventDeactivateMaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventDeactivateMaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDeactivateMaturityLevel {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventDeactivateMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventDeactivateMaturityLevel>): EventDeactivateMaturityLevel {
    const message = createBaseEventDeactivateMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  },
  fromAmino(object: EventDeactivateMaturityLevelAmino): EventDeactivateMaturityLevel {
    const message = createBaseEventDeactivateMaturityLevel();
    if (object.maturity_level !== undefined && object.maturity_level !== null) {
      message.maturityLevel = MaturityLevel.fromAmino(object.maturity_level);
    }
    return message;
  },
  toAmino(message: EventDeactivateMaturityLevel, useInterfaces: boolean = true): EventDeactivateMaturityLevelAmino {
    const obj: any = {};
    obj.maturity_level = message.maturityLevel ? MaturityLevel.toAmino(message.maturityLevel, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDeactivateMaturityLevelAminoMsg): EventDeactivateMaturityLevel {
    return EventDeactivateMaturityLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDeactivateMaturityLevelProtoMsg, useInterfaces: boolean = true): EventDeactivateMaturityLevel {
    return EventDeactivateMaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventDeactivateMaturityLevel): Uint8Array {
    return EventDeactivateMaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: EventDeactivateMaturityLevel): EventDeactivateMaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.EventDeactivateMaturityLevel",
      value: EventDeactivateMaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventDeactivateMaturityLevel.typeUrl, EventDeactivateMaturityLevel);
function createBaseEventSetRefractableAsset(): EventSetRefractableAsset {
  return {
    refractableAsset: RefractableAsset.fromPartial({})
  };
}
export const EventSetRefractableAsset = {
  typeUrl: "/pryzm.assets.v1.EventSetRefractableAsset",
  is(o: any): o is EventSetRefractableAsset {
    return o && (o.$typeUrl === EventSetRefractableAsset.typeUrl || RefractableAsset.is(o.refractableAsset));
  },
  isSDK(o: any): o is EventSetRefractableAssetSDKType {
    return o && (o.$typeUrl === EventSetRefractableAsset.typeUrl || RefractableAsset.isSDK(o.refractable_asset));
  },
  isAmino(o: any): o is EventSetRefractableAssetAmino {
    return o && (o.$typeUrl === EventSetRefractableAsset.typeUrl || RefractableAsset.isAmino(o.refractable_asset));
  },
  encode(message: EventSetRefractableAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refractableAsset !== undefined) {
      RefractableAsset.encode(message.refractableAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetRefractableAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetRefractableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refractableAsset = RefractableAsset.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetRefractableAsset {
    return {
      refractableAsset: isSet(object.refractableAsset) ? RefractableAsset.fromJSON(object.refractableAsset) : undefined
    };
  },
  toJSON(message: EventSetRefractableAsset): unknown {
    const obj: any = {};
    message.refractableAsset !== undefined && (obj.refractableAsset = message.refractableAsset ? RefractableAsset.toJSON(message.refractableAsset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetRefractableAsset>): EventSetRefractableAsset {
    const message = createBaseEventSetRefractableAsset();
    message.refractableAsset = object.refractableAsset !== undefined && object.refractableAsset !== null ? RefractableAsset.fromPartial(object.refractableAsset) : undefined;
    return message;
  },
  fromAmino(object: EventSetRefractableAssetAmino): EventSetRefractableAsset {
    const message = createBaseEventSetRefractableAsset();
    if (object.refractable_asset !== undefined && object.refractable_asset !== null) {
      message.refractableAsset = RefractableAsset.fromAmino(object.refractable_asset);
    }
    return message;
  },
  toAmino(message: EventSetRefractableAsset, useInterfaces: boolean = true): EventSetRefractableAssetAmino {
    const obj: any = {};
    obj.refractable_asset = message.refractableAsset ? RefractableAsset.toAmino(message.refractableAsset, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetRefractableAssetAminoMsg): EventSetRefractableAsset {
    return EventSetRefractableAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetRefractableAssetProtoMsg, useInterfaces: boolean = true): EventSetRefractableAsset {
    return EventSetRefractableAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetRefractableAsset): Uint8Array {
    return EventSetRefractableAsset.encode(message).finish();
  },
  toProtoMsg(message: EventSetRefractableAsset): EventSetRefractableAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.EventSetRefractableAsset",
      value: EventSetRefractableAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetRefractableAsset.typeUrl, EventSetRefractableAsset);
function createBaseEventSetMaturityLevel(): EventSetMaturityLevel {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const EventSetMaturityLevel = {
  typeUrl: "/pryzm.assets.v1.EventSetMaturityLevel",
  is(o: any): o is EventSetMaturityLevel {
    return o && (o.$typeUrl === EventSetMaturityLevel.typeUrl || MaturityLevel.is(o.maturityLevel));
  },
  isSDK(o: any): o is EventSetMaturityLevelSDKType {
    return o && (o.$typeUrl === EventSetMaturityLevel.typeUrl || MaturityLevel.isSDK(o.maturity_level));
  },
  isAmino(o: any): o is EventSetMaturityLevelAmino {
    return o && (o.$typeUrl === EventSetMaturityLevel.typeUrl || MaturityLevel.isAmino(o.maturity_level));
  },
  encode(message: EventSetMaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): EventSetMaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maturityLevel = MaturityLevel.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetMaturityLevel {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: EventSetMaturityLevel): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventSetMaturityLevel>): EventSetMaturityLevel {
    const message = createBaseEventSetMaturityLevel();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  },
  fromAmino(object: EventSetMaturityLevelAmino): EventSetMaturityLevel {
    const message = createBaseEventSetMaturityLevel();
    if (object.maturity_level !== undefined && object.maturity_level !== null) {
      message.maturityLevel = MaturityLevel.fromAmino(object.maturity_level);
    }
    return message;
  },
  toAmino(message: EventSetMaturityLevel, useInterfaces: boolean = true): EventSetMaturityLevelAmino {
    const obj: any = {};
    obj.maturity_level = message.maturityLevel ? MaturityLevel.toAmino(message.maturityLevel, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetMaturityLevelAminoMsg): EventSetMaturityLevel {
    return EventSetMaturityLevel.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetMaturityLevelProtoMsg, useInterfaces: boolean = true): EventSetMaturityLevel {
    return EventSetMaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: EventSetMaturityLevel): Uint8Array {
    return EventSetMaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: EventSetMaturityLevel): EventSetMaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.EventSetMaturityLevel",
      value: EventSetMaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetMaturityLevel.typeUrl, EventSetMaturityLevel);