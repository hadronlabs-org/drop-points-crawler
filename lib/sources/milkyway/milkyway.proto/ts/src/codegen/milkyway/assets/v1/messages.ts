import { Asset, AssetAmino, AssetSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAsset {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** Asset represents the asset to be registered. */
  asset: Asset;
}
export interface MsgRegisterAssetProtoMsg {
  typeUrl: "/milkyway.assets.v1.MsgRegisterAsset";
  value: Uint8Array;
}
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAssetAmino {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** Asset represents the asset to be registered. */
  asset?: AssetAmino;
}
export interface MsgRegisterAssetAminoMsg {
  type: "milkyway/MsgRegisterAsset";
  value: MsgRegisterAssetAmino;
}
/**
 * MsgRegisterAsset defines the message structure for the RegisterAsset
 * gRPC service method. It allows the authority to register an asset.
 */
export interface MsgRegisterAssetSDKType {
  authority: string;
  asset: AssetSDKType;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponse {}
export interface MsgRegisterAssetResponseProtoMsg {
  typeUrl: "/milkyway.assets.v1.MsgRegisterAssetResponse";
  value: Uint8Array;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponseAmino {}
export interface MsgRegisterAssetResponseAminoMsg {
  type: "/milkyway.assets.v1.MsgRegisterAssetResponse";
  value: MsgRegisterAssetResponseAmino;
}
/** MsgRegisterAssetResponse is the return value of MsgRegisterAsset. */
export interface MsgRegisterAssetResponseSDKType {}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAsset {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** Denom represents the denomination of the token associated with the asset. */
  denom: string;
}
export interface MsgDeregisterAssetProtoMsg {
  typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset";
  value: Uint8Array;
}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAssetAmino {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** Denom represents the denomination of the token associated with the asset. */
  denom?: string;
}
export interface MsgDeregisterAssetAminoMsg {
  type: "milkyway/MsgDeregisterAsset";
  value: MsgDeregisterAssetAmino;
}
/**
 * MsgDeregisterAsset defines the message structure for the DeregisterAsset
 * gRPC service method. It allows the authority to de-register an asset with
 * the token denomination.
 */
export interface MsgDeregisterAssetSDKType {
  authority: string;
  denom: string;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponse {}
export interface MsgDeregisterAssetResponseProtoMsg {
  typeUrl: "/milkyway.assets.v1.MsgDeregisterAssetResponse";
  value: Uint8Array;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponseAmino {}
export interface MsgDeregisterAssetResponseAminoMsg {
  type: "/milkyway.assets.v1.MsgDeregisterAssetResponse";
  value: MsgDeregisterAssetResponseAmino;
}
/** MsgRegisterAssetResponse is the return value of MsgDeregisterAsset. */
export interface MsgDeregisterAssetResponseSDKType {}
function createBaseMsgRegisterAsset(): MsgRegisterAsset {
  return {
    authority: "",
    asset: Asset.fromPartial({})
  };
}
export const MsgRegisterAsset = {
  typeUrl: "/milkyway.assets.v1.MsgRegisterAsset",
  encode(message: MsgRegisterAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAsset>): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    message.authority = object.authority ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterAssetAmino): MsgRegisterAsset {
    const message = createBaseMsgRegisterAsset();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MsgRegisterAsset): MsgRegisterAssetAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetAminoMsg): MsgRegisterAsset {
    return MsgRegisterAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterAsset): MsgRegisterAssetAminoMsg {
    return {
      type: "milkyway/MsgRegisterAsset",
      value: MsgRegisterAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterAssetProtoMsg): MsgRegisterAsset {
    return MsgRegisterAsset.decode(message.value);
  },
  toProto(message: MsgRegisterAsset): Uint8Array {
    return MsgRegisterAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAsset): MsgRegisterAssetProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.MsgRegisterAsset",
      value: MsgRegisterAsset.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAssetResponse(): MsgRegisterAssetResponse {
  return {};
}
export const MsgRegisterAssetResponse = {
  typeUrl: "/milkyway.assets.v1.MsgRegisterAssetResponse",
  encode(_: MsgRegisterAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAssetResponse {
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
  fromPartial(_: Partial<MsgRegisterAssetResponse>): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAssetResponseAmino): MsgRegisterAssetResponse {
    const message = createBaseMsgRegisterAssetResponse();
    return message;
  },
  toAmino(_: MsgRegisterAssetResponse): MsgRegisterAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAssetResponseAminoMsg): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAssetResponseProtoMsg): MsgRegisterAssetResponse {
    return MsgRegisterAssetResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAssetResponse): Uint8Array {
    return MsgRegisterAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAssetResponse): MsgRegisterAssetResponseProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.MsgRegisterAssetResponse",
      value: MsgRegisterAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeregisterAsset(): MsgDeregisterAsset {
  return {
    authority: "",
    denom: ""
  };
}
export const MsgDeregisterAsset = {
  typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset",
  encode(message: MsgDeregisterAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeregisterAsset>): MsgDeregisterAsset {
    const message = createBaseMsgDeregisterAsset();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDeregisterAssetAmino): MsgDeregisterAsset {
    const message = createBaseMsgDeregisterAsset();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDeregisterAsset): MsgDeregisterAssetAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterAssetAminoMsg): MsgDeregisterAsset {
    return MsgDeregisterAsset.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeregisterAsset): MsgDeregisterAssetAminoMsg {
    return {
      type: "milkyway/MsgDeregisterAsset",
      value: MsgDeregisterAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeregisterAssetProtoMsg): MsgDeregisterAsset {
    return MsgDeregisterAsset.decode(message.value);
  },
  toProto(message: MsgDeregisterAsset): Uint8Array {
    return MsgDeregisterAsset.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregisterAsset): MsgDeregisterAssetProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset",
      value: MsgDeregisterAsset.encode(message).finish()
    };
  }
};
function createBaseMsgDeregisterAssetResponse(): MsgDeregisterAssetResponse {
  return {};
}
export const MsgDeregisterAssetResponse = {
  typeUrl: "/milkyway.assets.v1.MsgDeregisterAssetResponse",
  encode(_: MsgDeregisterAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeregisterAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterAssetResponse();
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
  fromPartial(_: Partial<MsgDeregisterAssetResponse>): MsgDeregisterAssetResponse {
    const message = createBaseMsgDeregisterAssetResponse();
    return message;
  },
  fromAmino(_: MsgDeregisterAssetResponseAmino): MsgDeregisterAssetResponse {
    const message = createBaseMsgDeregisterAssetResponse();
    return message;
  },
  toAmino(_: MsgDeregisterAssetResponse): MsgDeregisterAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterAssetResponseAminoMsg): MsgDeregisterAssetResponse {
    return MsgDeregisterAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeregisterAssetResponseProtoMsg): MsgDeregisterAssetResponse {
    return MsgDeregisterAssetResponse.decode(message.value);
  },
  toProto(message: MsgDeregisterAssetResponse): Uint8Array {
    return MsgDeregisterAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregisterAssetResponse): MsgDeregisterAssetResponseProtoMsg {
    return {
      typeUrl: "/milkyway.assets.v1.MsgDeregisterAssetResponse",
      value: MsgDeregisterAssetResponse.encode(message).finish()
    };
  }
};