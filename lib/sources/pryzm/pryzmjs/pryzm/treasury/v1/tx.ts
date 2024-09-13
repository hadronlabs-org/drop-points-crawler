import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Action, ActionAmino, ActionSDKType } from "./action";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/pryzm.treasury.v1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  authority?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "pryzm/treasury/v1/UpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/pryzm.treasury.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/pryzm.treasury.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgSetAction {
  authority: string;
  action: Action;
}
export interface MsgSetActionProtoMsg {
  typeUrl: "/pryzm.treasury.v1.MsgSetAction";
  value: Uint8Array;
}
export interface MsgSetActionAmino {
  authority?: string;
  action?: ActionAmino;
}
export interface MsgSetActionAminoMsg {
  type: "pryzm/treasury/v1/SetAction";
  value: MsgSetActionAmino;
}
export interface MsgSetActionSDKType {
  authority: string;
  action: ActionSDKType;
}
export interface MsgSetActionResponse {}
export interface MsgSetActionResponseProtoMsg {
  typeUrl: "/pryzm.treasury.v1.MsgSetActionResponse";
  value: Uint8Array;
}
export interface MsgSetActionResponseAmino {}
export interface MsgSetActionResponseAminoMsg {
  type: "/pryzm.treasury.v1.MsgSetActionResponse";
  value: MsgSetActionResponseAmino;
}
export interface MsgSetActionResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/pryzm.treasury.v1.MsgUpdateParams",
  aminoType: "pryzm/treasury/v1/UpdateParams",
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
      type: "pryzm/treasury/v1/UpdateParams",
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
      typeUrl: "/pryzm.treasury.v1.MsgUpdateParams",
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
  typeUrl: "/pryzm.treasury.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/pryzm.treasury.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgSetAction(): MsgSetAction {
  return {
    authority: "",
    action: Action.fromPartial({})
  };
}
export const MsgSetAction = {
  typeUrl: "/pryzm.treasury.v1.MsgSetAction",
  aminoType: "pryzm/treasury/v1/SetAction",
  is(o: any): o is MsgSetAction {
    return o && (o.$typeUrl === MsgSetAction.typeUrl || typeof o.authority === "string" && Action.is(o.action));
  },
  isSDK(o: any): o is MsgSetActionSDKType {
    return o && (o.$typeUrl === MsgSetAction.typeUrl || typeof o.authority === "string" && Action.isSDK(o.action));
  },
  isAmino(o: any): o is MsgSetActionAmino {
    return o && (o.$typeUrl === MsgSetAction.typeUrl || typeof o.authority === "string" && Action.isAmino(o.action));
  },
  encode(message: MsgSetAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.action = Action.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetAction {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined
    };
  },
  toJSON(message: MsgSetAction): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.action !== undefined && (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetAction>): MsgSetAction {
    const message = createBaseMsgSetAction();
    message.authority = object.authority ?? "";
    message.action = object.action !== undefined && object.action !== null ? Action.fromPartial(object.action) : undefined;
    return message;
  },
  fromAmino(object: MsgSetActionAmino): MsgSetAction {
    const message = createBaseMsgSetAction();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromAmino(object.action);
    }
    return message;
  },
  toAmino(message: MsgSetAction, useInterfaces: boolean = true): MsgSetActionAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.action = message.action ? Action.toAmino(message.action, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetActionAminoMsg): MsgSetAction {
    return MsgSetAction.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetAction, useInterfaces: boolean = true): MsgSetActionAminoMsg {
    return {
      type: "pryzm/treasury/v1/SetAction",
      value: MsgSetAction.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: MsgSetActionProtoMsg, useInterfaces: boolean = true): MsgSetAction {
    return MsgSetAction.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetAction): Uint8Array {
    return MsgSetAction.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAction): MsgSetActionProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.MsgSetAction",
      value: MsgSetAction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetAction.typeUrl, MsgSetAction);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSetAction.aminoType, MsgSetAction.typeUrl);
function createBaseMsgSetActionResponse(): MsgSetActionResponse {
  return {};
}
export const MsgSetActionResponse = {
  typeUrl: "/pryzm.treasury.v1.MsgSetActionResponse",
  is(o: any): o is MsgSetActionResponse {
    return o && o.$typeUrl === MsgSetActionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSetActionResponseSDKType {
    return o && o.$typeUrl === MsgSetActionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetActionResponseAmino {
    return o && o.$typeUrl === MsgSetActionResponse.typeUrl;
  },
  encode(_: MsgSetActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MsgSetActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActionResponse();
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
  fromJSON(_: any): MsgSetActionResponse {
    return {};
  },
  toJSON(_: MsgSetActionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetActionResponse>): MsgSetActionResponse {
    const message = createBaseMsgSetActionResponse();
    return message;
  },
  fromAmino(_: MsgSetActionResponseAmino): MsgSetActionResponse {
    const message = createBaseMsgSetActionResponse();
    return message;
  },
  toAmino(_: MsgSetActionResponse, useInterfaces: boolean = true): MsgSetActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetActionResponseAminoMsg): MsgSetActionResponse {
    return MsgSetActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetActionResponseProtoMsg, useInterfaces: boolean = true): MsgSetActionResponse {
    return MsgSetActionResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MsgSetActionResponse): Uint8Array {
    return MsgSetActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetActionResponse): MsgSetActionResponseProtoMsg {
    return {
      typeUrl: "/pryzm.treasury.v1.MsgSetActionResponse",
      value: MsgSetActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSetActionResponse.typeUrl, MsgSetActionResponse);