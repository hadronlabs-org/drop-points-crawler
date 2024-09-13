import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { RefractableAsset, RefractableAssetAmino, RefractableAssetSDKType, MaturityParams, MaturityParamsAmino, MaturityParamsSDKType, FeeRatios, FeeRatiosAmino, FeeRatiosSDKType } from "./refractable_asset";
import { MaturityLevel, MaturityLevelAmino, MaturityLevelSDKType } from "./maturity_level";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgRegisterAsset {
  creator: string;
  asset: RefractableAsset;
}
export interface MsgRegisterAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAsset";
  value: Uint8Array;
}
export interface MsgRegisterAssetAmino {
  creator?: string;
  asset: RefractableAssetAmino;
}
export interface MsgRegisterAssetAminoMsg {
  type: "pryzm/assets/v1/RegisterAsset";
  value: MsgRegisterAssetAmino;
}
export interface MsgRegisterAssetSDKType {
  creator: string;
  asset: RefractableAssetSDKType;
}
export interface MsgRegisterAssetResponse {}
export interface MsgRegisterAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse";
  value: Uint8Array;
}
export interface MsgRegisterAssetResponseAmino {}
export interface MsgRegisterAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgRegisterAssetResponse";
  value: MsgRegisterAssetResponseAmino;
}
export interface MsgRegisterAssetResponseSDKType {}
export interface MsgDisableAsset {
  creator: string;
  assetId: string;
}
export interface MsgDisableAssetProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgDisableAsset";
  value: Uint8Array;
}
export interface MsgDisableAssetAmino {
  creator?: string;
  asset_id?: string;
}
export interface MsgDisableAssetAminoMsg {
  type: "pryzm/assets/v1/DisableAsset";
  value: MsgDisableAssetAmino;
}
export interface MsgDisableAssetSDKType {
  creator: string;
  asset_id: string;
}
export interface MsgDisableAssetResponse {}
export interface MsgDisableAssetResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse";
  value: Uint8Array;
}
export interface MsgDisableAssetResponseAmino {}
export interface MsgDisableAssetResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgDisableAssetResponse";
  value: MsgDisableAssetResponseAmino;
}
export interface MsgDisableAssetResponseSDKType {}
export interface MsgUpdateMaturityParams {
  authority: string;
  assetId: string;
  params: MaturityParams;
}
export interface MsgUpdateMaturityParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams";
  value: Uint8Array;
}
export interface MsgUpdateMaturityParamsAmino {
  authority?: string;
  asset_id?: string;
  params: MaturityParamsAmino;
}
export interface MsgUpdateMaturityParamsAminoMsg {
  type: "pryzm/assets/v1/UpdateMaturityParams";
  value: MsgUpdateMaturityParamsAmino;
}
export interface MsgUpdateMaturityParamsSDKType {
  authority: string;
  asset_id: string;
  params: MaturityParamsSDKType;
}
export interface MsgUpdateMaturityParamsResponse {}
export interface MsgUpdateMaturityParamsResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateMaturityParamsResponseAmino {}
export interface MsgUpdateMaturityParamsResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse";
  value: MsgUpdateMaturityParamsResponseAmino;
}
export interface MsgUpdateMaturityParamsResponseSDKType {}
export interface MsgUpdateFeeRatios {
  authority: string;
  assetId: string;
  feeRatios: FeeRatios;
}
export interface MsgUpdateFeeRatiosProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios";
  value: Uint8Array;
}
export interface MsgUpdateFeeRatiosAmino {
  authority?: string;
  asset_id?: string;
  fee_ratios: FeeRatiosAmino;
}
export interface MsgUpdateFeeRatiosAminoMsg {
  type: "pryzm/assets/v1/UpdateFeeRatios";
  value: MsgUpdateFeeRatiosAmino;
}
export interface MsgUpdateFeeRatiosSDKType {
  authority: string;
  asset_id: string;
  fee_ratios: FeeRatiosSDKType;
}
export interface MsgUpdateFeeRatiosResponse {}
export interface MsgUpdateFeeRatiosResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse";
  value: Uint8Array;
}
export interface MsgUpdateFeeRatiosResponseAmino {}
export interface MsgUpdateFeeRatiosResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse";
  value: MsgUpdateFeeRatiosResponseAmino;
}
export interface MsgUpdateFeeRatiosResponseSDKType {}
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/assets/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgIntroduceMaturityLevel {
  creator: string;
  assetId: string;
  symbol: string;
}
export interface MsgIntroduceMaturityLevelProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevel";
  value: Uint8Array;
}
export interface MsgIntroduceMaturityLevelAmino {
  creator?: string;
  asset_id?: string;
  symbol?: string;
}
export interface MsgIntroduceMaturityLevelAminoMsg {
  type: "pryzm/assets/v1/IntroduceMaturityLevel";
  value: MsgIntroduceMaturityLevelAmino;
}
export interface MsgIntroduceMaturityLevelSDKType {
  creator: string;
  asset_id: string;
  symbol: string;
}
export interface MsgIntroduceMaturityLevelResponse {
  maturityLevel: MaturityLevel;
}
export interface MsgIntroduceMaturityLevelResponseProtoMsg {
  typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevelResponse";
  value: Uint8Array;
}
export interface MsgIntroduceMaturityLevelResponseAmino {
  maturity_level?: MaturityLevelAmino;
}
export interface MsgIntroduceMaturityLevelResponseAminoMsg {
  type: "/pryzm.assets.v1.MsgIntroduceMaturityLevelResponse";
  value: MsgIntroduceMaturityLevelResponseAmino;
}
export interface MsgIntroduceMaturityLevelResponseSDKType {
  maturity_level: MaturityLevelSDKType;
}
function createBaseMsgRegisterAsset(): MsgRegisterAsset {
  return {
    creator: "",
    asset: RefractableAsset.fromPartial({})
  };
}
export const MsgRegisterAsset = {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAsset",
  aminoType: "pryzm/assets/v1/RegisterAsset",
  is(o: any): o is MsgRegisterAsset {
    return o && (o.$typeUrl === MsgRegisterAsset.typeUrl || typeof o.creator === "string" && RefractableAsset.is(o.asset));
  },
  isSDK(o: any): o is MsgRegisterAssetSDKType {
    return o && (o.$typeUrl === MsgRegisterAsset.typeUrl || typeof o.creator === "string" && RefractableAsset.isSDK(o.asset));
  },
  isAmino(o: any): o is MsgRegisterAssetAmino {
    return o && (o.$typeUrl === MsgRegisterAsset.typeUrl || typeof o.creator === "string" && RefractableAsset.isAmino(o.asset));
  },
  encode(message: MsgRegisterAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.asset !== undefined) {
      RefractableAsset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.asset = RefractableAsset.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      asset: isSet(object.asset) ? RefractableAsset.fromJSON(object.asset) : undefined
    };
  },
  toJSON(message: MsgRegisterAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.asset !== undefined && (obj.asset = message.asset ? RefractableAsset.toJSON(message.asset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterAsset>): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    message.creator = object.creator ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? RefractableAsset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterAssetAmino): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = RefractableAsset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgRegisterAsset, useInterfaces: boolean = true): MsgRegisterAssetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset = message.asset ? RefractableAsset.toAmino(message.asset, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetAminoMsg): MsgRegisterAsset {
    return MsgRegisterAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterAsset, useInterfaces: boolean = true): MsgRegisterAssetAminoMsg {
    return {
      type: "pryzm/assets/v1/RegisterAsset",
      value: MsgRegisterAsset.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgRegisterAssetProtoMsg, useInterfaces: boolean = true): MsgRegisterAsset {
    return MsgRegisterAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterAsset): Uint8Array {
    return MsgRegisterAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAsset): MsgRegisterAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgRegisterAsset",
      value: MsgRegisterAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAsset.typeUrl, MsgRegisterAsset);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterAsset.aminoType, MsgRegisterAsset.typeUrl);
function createBaseMsgRegisterAssetResponse(): MsgRegisterAssetResponse {
  return {};
}
export const MsgRegisterAssetResponse = {
  typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse",
  is(o: any): o is MsgRegisterAssetResponse {
    return o && o.$typeUrl === MsgRegisterAssetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterAssetResponseSDKType {
    return o && o.$typeUrl === MsgRegisterAssetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterAssetResponseAmino {
    return o && o.$typeUrl === MsgRegisterAssetResponse.typeUrl;
  },
  encode(_: MsgRegisterAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgRegisterAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAssetResponse();
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
  fromJSON(_: any): MsgRegisterAssetResponse {
    return {};
  },
  toJSON(_: MsgRegisterAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterAssetResponse>): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAssetResponseAmino): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  toAmino(_: MsgRegisterAssetResponse, useInterfaces: boolean = true): MsgRegisterAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetResponseAminoMsg): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAssetResponseProtoMsg, useInterfaces: boolean = true): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgRegisterAssetResponse): Uint8Array {
    return MsgRegisterAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAssetResponse): MsgRegisterAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgRegisterAssetResponse",
      value: MsgRegisterAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAssetResponse.typeUrl, MsgRegisterAssetResponse);
function createBaseMsgDisableAsset(): MsgDisableAsset {
  return {
    creator: "",
    assetId: ""
  };
}
export const MsgDisableAsset = {
  typeUrl: "/pryzm.assets.v1.MsgDisableAsset",
  aminoType: "pryzm/assets/v1/DisableAsset",
  is(o: any): o is MsgDisableAsset {
    return o && (o.$typeUrl === MsgDisableAsset.typeUrl || typeof o.creator === "string" && typeof o.assetId === "string");
  },
  isSDK(o: any): o is MsgDisableAssetSDKType {
    return o && (o.$typeUrl === MsgDisableAsset.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string");
  },
  isAmino(o: any): o is MsgDisableAssetAmino {
    return o && (o.$typeUrl === MsgDisableAsset.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string");
  },
  encode(message: MsgDisableAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDisableAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableAsset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : ""
    };
  },
  toJSON(message: MsgDisableAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },
  fromPartial(object: Partial<MsgDisableAsset>): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    message.creator = object.creator ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
  fromAmino(object: MsgDisableAssetAmino): MsgDisableAsset {
    const message = createBaseMsgDisableAsset();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    return message;
  },
  toAmino(message: MsgDisableAsset, useInterfaces: boolean = true): MsgDisableAssetAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    return obj;
  },
  fromAminoMsg(object: MsgDisableAssetAminoMsg): MsgDisableAsset {
    return MsgDisableAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableAsset, useInterfaces: boolean = true): MsgDisableAssetAminoMsg {
    return {
      type: "pryzm/assets/v1/DisableAsset",
      value: MsgDisableAsset.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgDisableAssetProtoMsg, useInterfaces: boolean = true): MsgDisableAsset {
    return MsgDisableAsset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDisableAsset): Uint8Array {
    return MsgDisableAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableAsset): MsgDisableAssetProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgDisableAsset",
      value: MsgDisableAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDisableAsset.typeUrl, MsgDisableAsset);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDisableAsset.aminoType, MsgDisableAsset.typeUrl);
function createBaseMsgDisableAssetResponse(): MsgDisableAssetResponse {
  return {};
}
export const MsgDisableAssetResponse = {
  typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse",
  is(o: any): o is MsgDisableAssetResponse {
    return o && o.$typeUrl === MsgDisableAssetResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDisableAssetResponseSDKType {
    return o && o.$typeUrl === MsgDisableAssetResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDisableAssetResponseAmino {
    return o && o.$typeUrl === MsgDisableAssetResponse.typeUrl;
  },
  encode(_: MsgDisableAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgDisableAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableAssetResponse();
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
  fromJSON(_: any): MsgDisableAssetResponse {
    return {};
  },
  toJSON(_: MsgDisableAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDisableAssetResponse>): MsgDisableAssetResponse {
    const message = createBaseMsgDisableAssetResponse();
    return message;
  },
  fromAmino(_: MsgDisableAssetResponseAmino): MsgDisableAssetResponse {
    const message = createBaseMsgDisableAssetResponse();
    return message;
  },
  toAmino(_: MsgDisableAssetResponse, useInterfaces: boolean = true): MsgDisableAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableAssetResponseAminoMsg): MsgDisableAssetResponse {
    return MsgDisableAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableAssetResponseProtoMsg, useInterfaces: boolean = true): MsgDisableAssetResponse {
    return MsgDisableAssetResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgDisableAssetResponse): Uint8Array {
    return MsgDisableAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableAssetResponse): MsgDisableAssetResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgDisableAssetResponse",
      value: MsgDisableAssetResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDisableAssetResponse.typeUrl, MsgDisableAssetResponse);
function createBaseMsgUpdateMaturityParams(): MsgUpdateMaturityParams {
  return {
    authority: "",
    assetId: "",
    params: MaturityParams.fromPartial({})
  };
}
export const MsgUpdateMaturityParams = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams",
  aminoType: "pryzm/assets/v1/UpdateMaturityParams",
  is(o: any): o is MsgUpdateMaturityParams {
    return o && (o.$typeUrl === MsgUpdateMaturityParams.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string" && MaturityParams.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateMaturityParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateMaturityParams.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string" && MaturityParams.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateMaturityParamsAmino {
    return o && (o.$typeUrl === MsgUpdateMaturityParams.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string" && MaturityParams.isAmino(o.params));
  },
  encode(message: MsgUpdateMaturityParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.params !== undefined) {
      MaturityParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateMaturityParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.params = MaturityParams.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMaturityParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      params: isSet(object.params) ? MaturityParams.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateMaturityParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.params !== undefined && (obj.params = message.params ? MaturityParams.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateMaturityParams>): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.params = object.params !== undefined && object.params !== null ? MaturityParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateMaturityParamsAmino): MsgUpdateMaturityParams {
    const message = createBaseMsgUpdateMaturityParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = MaturityParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateMaturityParams, useInterfaces: boolean = true): MsgUpdateMaturityParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.params = message.params ? MaturityParams.toAmino(message.params, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaturityParamsAminoMsg): MsgUpdateMaturityParams {
    return MsgUpdateMaturityParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateMaturityParams, useInterfaces: boolean = true): MsgUpdateMaturityParamsAminoMsg {
    return {
      type: "pryzm/assets/v1/UpdateMaturityParams",
      value: MsgUpdateMaturityParams.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateMaturityParamsProtoMsg, useInterfaces: boolean = true): MsgUpdateMaturityParams {
    return MsgUpdateMaturityParams.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateMaturityParams): Uint8Array {
    return MsgUpdateMaturityParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaturityParams): MsgUpdateMaturityParamsProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParams",
      value: MsgUpdateMaturityParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateMaturityParams.typeUrl, MsgUpdateMaturityParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateMaturityParams.aminoType, MsgUpdateMaturityParams.typeUrl);
function createBaseMsgUpdateMaturityParamsResponse(): MsgUpdateMaturityParamsResponse {
  return {};
}
export const MsgUpdateMaturityParamsResponse = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse",
  is(o: any): o is MsgUpdateMaturityParamsResponse {
    return o && o.$typeUrl === MsgUpdateMaturityParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateMaturityParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateMaturityParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateMaturityParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateMaturityParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateMaturityParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateMaturityParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaturityParamsResponse();
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
  fromJSON(_: any): MsgUpdateMaturityParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateMaturityParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateMaturityParamsResponse>): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMaturityParamsResponseAmino): MsgUpdateMaturityParamsResponse {
    const message = createBaseMsgUpdateMaturityParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateMaturityParamsResponse, useInterfaces: boolean = true): MsgUpdateMaturityParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMaturityParamsResponseAminoMsg): MsgUpdateMaturityParamsResponse {
    return MsgUpdateMaturityParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMaturityParamsResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateMaturityParamsResponse {
    return MsgUpdateMaturityParamsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateMaturityParamsResponse): Uint8Array {
    return MsgUpdateMaturityParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMaturityParamsResponse): MsgUpdateMaturityParamsResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateMaturityParamsResponse",
      value: MsgUpdateMaturityParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateMaturityParamsResponse.typeUrl, MsgUpdateMaturityParamsResponse);
function createBaseMsgUpdateFeeRatios(): MsgUpdateFeeRatios {
  return {
    authority: "",
    assetId: "",
    feeRatios: FeeRatios.fromPartial({})
  };
}
export const MsgUpdateFeeRatios = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios",
  aminoType: "pryzm/assets/v1/UpdateFeeRatios",
  is(o: any): o is MsgUpdateFeeRatios {
    return o && (o.$typeUrl === MsgUpdateFeeRatios.typeUrl || typeof o.authority === "string" && typeof o.assetId === "string" && FeeRatios.is(o.feeRatios));
  },
  isSDK(o: any): o is MsgUpdateFeeRatiosSDKType {
    return o && (o.$typeUrl === MsgUpdateFeeRatios.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string" && FeeRatios.isSDK(o.fee_ratios));
  },
  isAmino(o: any): o is MsgUpdateFeeRatiosAmino {
    return o && (o.$typeUrl === MsgUpdateFeeRatios.typeUrl || typeof o.authority === "string" && typeof o.asset_id === "string" && FeeRatios.isAmino(o.fee_ratios));
  },
  encode(message: MsgUpdateFeeRatios, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.feeRatios !== undefined) {
      FeeRatios.encode(message.feeRatios, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateFeeRatios {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatios();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.feeRatios = FeeRatios.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateFeeRatios {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      feeRatios: isSet(object.feeRatios) ? FeeRatios.fromJSON(object.feeRatios) : undefined
    };
  },
  toJSON(message: MsgUpdateFeeRatios): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.feeRatios !== undefined && (obj.feeRatios = message.feeRatios ? FeeRatios.toJSON(message.feeRatios) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateFeeRatios>): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    message.authority = object.authority ?? "";
    message.assetId = object.assetId ?? "";
    message.feeRatios = object.feeRatios !== undefined && object.feeRatios !== null ? FeeRatios.fromPartial(object.feeRatios) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateFeeRatiosAmino): MsgUpdateFeeRatios {
    const message = createBaseMsgUpdateFeeRatios();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.fee_ratios !== undefined && object.fee_ratios !== null) {
      message.feeRatios = FeeRatios.fromAmino(object.fee_ratios);
    }
    return message;
  },
  toAmino(message: MsgUpdateFeeRatios, useInterfaces: boolean = true): MsgUpdateFeeRatiosAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.fee_ratios = message.feeRatios ? FeeRatios.toAmino(message.feeRatios, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRatiosAminoMsg): MsgUpdateFeeRatios {
    return MsgUpdateFeeRatios.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateFeeRatios, useInterfaces: boolean = true): MsgUpdateFeeRatiosAminoMsg {
    return {
      type: "pryzm/assets/v1/UpdateFeeRatios",
      value: MsgUpdateFeeRatios.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgUpdateFeeRatiosProtoMsg, useInterfaces: boolean = true): MsgUpdateFeeRatios {
    return MsgUpdateFeeRatios.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateFeeRatios): Uint8Array {
    return MsgUpdateFeeRatios.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRatios): MsgUpdateFeeRatiosProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatios",
      value: MsgUpdateFeeRatios.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeeRatios.typeUrl, MsgUpdateFeeRatios);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateFeeRatios.aminoType, MsgUpdateFeeRatios.typeUrl);
function createBaseMsgUpdateFeeRatiosResponse(): MsgUpdateFeeRatiosResponse {
  return {};
}
export const MsgUpdateFeeRatiosResponse = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse",
  is(o: any): o is MsgUpdateFeeRatiosResponse {
    return o && o.$typeUrl === MsgUpdateFeeRatiosResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateFeeRatiosResponseSDKType {
    return o && o.$typeUrl === MsgUpdateFeeRatiosResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateFeeRatiosResponseAmino {
    return o && o.$typeUrl === MsgUpdateFeeRatiosResponse.typeUrl;
  },
  encode(_: MsgUpdateFeeRatiosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgUpdateFeeRatiosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFeeRatiosResponse();
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
  fromJSON(_: any): MsgUpdateFeeRatiosResponse {
    return {};
  },
  toJSON(_: MsgUpdateFeeRatiosResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateFeeRatiosResponse>): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFeeRatiosResponseAmino): MsgUpdateFeeRatiosResponse {
    const message = createBaseMsgUpdateFeeRatiosResponse();
    return message;
  },
  toAmino(_: MsgUpdateFeeRatiosResponse, useInterfaces: boolean = true): MsgUpdateFeeRatiosResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFeeRatiosResponseAminoMsg): MsgUpdateFeeRatiosResponse {
    return MsgUpdateFeeRatiosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFeeRatiosResponseProtoMsg, useInterfaces: boolean = true): MsgUpdateFeeRatiosResponse {
    return MsgUpdateFeeRatiosResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgUpdateFeeRatiosResponse): Uint8Array {
    return MsgUpdateFeeRatiosResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFeeRatiosResponse): MsgUpdateFeeRatiosResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgUpdateFeeRatiosResponse",
      value: MsgUpdateFeeRatiosResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFeeRatiosResponse.typeUrl, MsgUpdateFeeRatiosResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.assets.v1.MsgUpdateParams",
  aminoType: "pryzm/assets/v1/UpdateParams",
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
      type: "pryzm/assets/v1/UpdateParams",
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
      typeUrl: "/pryzm.assets.v1.MsgUpdateParams",
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
  typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/pryzm.assets.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgIntroduceMaturityLevel(): MsgIntroduceMaturityLevel {
  return {
    creator: "",
    assetId: "",
    symbol: ""
  };
}
export const MsgIntroduceMaturityLevel = {
  typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevel",
  aminoType: "pryzm/assets/v1/IntroduceMaturityLevel",
  is(o: any): o is MsgIntroduceMaturityLevel {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevel.typeUrl || typeof o.creator === "string" && typeof o.assetId === "string" && typeof o.symbol === "string");
  },
  isSDK(o: any): o is MsgIntroduceMaturityLevelSDKType {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevel.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string" && typeof o.symbol === "string");
  },
  isAmino(o: any): o is MsgIntroduceMaturityLevelAmino {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevel.typeUrl || typeof o.creator === "string" && typeof o.asset_id === "string" && typeof o.symbol === "string");
  },
  encode(message: MsgIntroduceMaturityLevel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceMaturityLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceMaturityLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIntroduceMaturityLevel {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  toJSON(message: MsgIntroduceMaturityLevel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceMaturityLevel>): MsgIntroduceMaturityLevel {
    const message = createBaseMsgIntroduceMaturityLevel();
    message.creator = object.creator ?? "";
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: MsgIntroduceMaturityLevelAmino): MsgIntroduceMaturityLevel {
    const message = createBaseMsgIntroduceMaturityLevel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: MsgIntroduceMaturityLevel, useInterfaces: boolean = true): MsgIntroduceMaturityLevelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceMaturityLevelAminoMsg): MsgIntroduceMaturityLevel {
    return MsgIntroduceMaturityLevel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIntroduceMaturityLevel, useInterfaces: boolean = true): MsgIntroduceMaturityLevelAminoMsg {
    return {
      type: "pryzm/assets/v1/IntroduceMaturityLevel",
      value: MsgIntroduceMaturityLevel.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgIntroduceMaturityLevelProtoMsg, useInterfaces: boolean = true): MsgIntroduceMaturityLevel {
    return MsgIntroduceMaturityLevel.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceMaturityLevel): Uint8Array {
    return MsgIntroduceMaturityLevel.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceMaturityLevel): MsgIntroduceMaturityLevelProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevel",
      value: MsgIntroduceMaturityLevel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceMaturityLevel.typeUrl, MsgIntroduceMaturityLevel);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIntroduceMaturityLevel.aminoType, MsgIntroduceMaturityLevel.typeUrl);
function createBaseMsgIntroduceMaturityLevelResponse(): MsgIntroduceMaturityLevelResponse {
  return {
    maturityLevel: MaturityLevel.fromPartial({})
  };
}
export const MsgIntroduceMaturityLevelResponse = {
  typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevelResponse",
  is(o: any): o is MsgIntroduceMaturityLevelResponse {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevelResponse.typeUrl || MaturityLevel.is(o.maturityLevel));
  },
  isSDK(o: any): o is MsgIntroduceMaturityLevelResponseSDKType {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevelResponse.typeUrl || MaturityLevel.isSDK(o.maturity_level));
  },
  isAmino(o: any): o is MsgIntroduceMaturityLevelResponseAmino {
    return o && (o.$typeUrl === MsgIntroduceMaturityLevelResponse.typeUrl || MaturityLevel.isAmino(o.maturity_level));
  },
  encode(message: MsgIntroduceMaturityLevelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maturityLevel !== undefined) {
      MaturityLevel.encode(message.maturityLevel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgIntroduceMaturityLevelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIntroduceMaturityLevelResponse();
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
  fromJSON(object: any): MsgIntroduceMaturityLevelResponse {
    return {
      maturityLevel: isSet(object.maturityLevel) ? MaturityLevel.fromJSON(object.maturityLevel) : undefined
    };
  },
  toJSON(message: MsgIntroduceMaturityLevelResponse): unknown {
    const obj: any = {};
    message.maturityLevel !== undefined && (obj.maturityLevel = message.maturityLevel ? MaturityLevel.toJSON(message.maturityLevel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgIntroduceMaturityLevelResponse>): MsgIntroduceMaturityLevelResponse {
    const message = createBaseMsgIntroduceMaturityLevelResponse();
    message.maturityLevel = object.maturityLevel !== undefined && object.maturityLevel !== null ? MaturityLevel.fromPartial(object.maturityLevel) : undefined;
    return message;
  },
  fromAmino(object: MsgIntroduceMaturityLevelResponseAmino): MsgIntroduceMaturityLevelResponse {
    const message = createBaseMsgIntroduceMaturityLevelResponse();
    if (object.maturity_level !== undefined && object.maturity_level !== null) {
      message.maturityLevel = MaturityLevel.fromAmino(object.maturity_level);
    }
    return message;
  },
  toAmino(message: MsgIntroduceMaturityLevelResponse, useInterfaces: boolean = true): MsgIntroduceMaturityLevelResponseAmino {
    const obj: any = {};
    obj.maturity_level = message.maturityLevel ? MaturityLevel.toAmino(message.maturityLevel, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgIntroduceMaturityLevelResponseAminoMsg): MsgIntroduceMaturityLevelResponse {
    return MsgIntroduceMaturityLevelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIntroduceMaturityLevelResponseProtoMsg, useInterfaces: boolean = true): MsgIntroduceMaturityLevelResponse {
    return MsgIntroduceMaturityLevelResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgIntroduceMaturityLevelResponse): Uint8Array {
    return MsgIntroduceMaturityLevelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIntroduceMaturityLevelResponse): MsgIntroduceMaturityLevelResponseProtoMsg {
    return {
      typeUrl: "/pryzm.assets.v1.MsgIntroduceMaturityLevelResponse",
      value: MsgIntroduceMaturityLevelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgIntroduceMaturityLevelResponse.typeUrl, MsgIntroduceMaturityLevelResponse);