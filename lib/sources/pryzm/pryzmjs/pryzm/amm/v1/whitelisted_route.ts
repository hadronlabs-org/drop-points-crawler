import { RouteStep, RouteStepAmino, RouteStepSDKType } from "./route_step";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface WhitelistedRoute {
  steps: RouteStep[];
  enabled: boolean;
}
export interface WhitelistedRouteProtoMsg {
  typeUrl: "/pryzm.amm.v1.WhitelistedRoute";
  value: Uint8Array;
}
export interface WhitelistedRouteAmino {
  steps?: RouteStepAmino[];
  enabled: boolean;
}
export interface WhitelistedRouteAminoMsg {
  type: "/pryzm.amm.v1.WhitelistedRoute";
  value: WhitelistedRouteAmino;
}
export interface WhitelistedRouteSDKType {
  steps: RouteStepSDKType[];
  enabled: boolean;
}
function createBaseWhitelistedRoute(): WhitelistedRoute {
  return {
    steps: [],
    enabled: false
  };
}
export const WhitelistedRoute = {
  typeUrl: "/pryzm.amm.v1.WhitelistedRoute",
  is(o: any): o is WhitelistedRoute {
    return o && (o.$typeUrl === WhitelistedRoute.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.is(o.steps[0])) && typeof o.enabled === "boolean");
  },
  isSDK(o: any): o is WhitelistedRouteSDKType {
    return o && (o.$typeUrl === WhitelistedRoute.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.isSDK(o.steps[0])) && typeof o.enabled === "boolean");
  },
  isAmino(o: any): o is WhitelistedRouteAmino {
    return o && (o.$typeUrl === WhitelistedRoute.typeUrl || Array.isArray(o.steps) && (!o.steps.length || RouteStep.isAmino(o.steps[0])) && typeof o.enabled === "boolean");
  },
  encode(message: WhitelistedRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.steps) {
      RouteStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): WhitelistedRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steps.push(RouteStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhitelistedRoute {
    return {
      steps: Array.isArray(object?.steps) ? object.steps.map((e: any) => RouteStep.fromJSON(e)) : [],
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: WhitelistedRoute): unknown {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toJSON(e) : undefined);
    } else {
      obj.steps = [];
    }
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<WhitelistedRoute>): WhitelistedRoute {
    const message = createBaseWhitelistedRoute();
    message.steps = object.steps?.map(e => RouteStep.fromPartial(e)) || [];
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: WhitelistedRouteAmino): WhitelistedRoute {
    const message = createBaseWhitelistedRoute();
    message.steps = object.steps?.map(e => RouteStep.fromAmino(e)) || [];
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: WhitelistedRoute, useInterfaces: boolean = true): WhitelistedRouteAmino {
    const obj: any = {};
    if (message.steps) {
      obj.steps = message.steps.map(e => e ? RouteStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.steps = message.steps;
    }
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: WhitelistedRouteAminoMsg): WhitelistedRoute {
    return WhitelistedRoute.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistedRouteProtoMsg, useInterfaces: boolean = true): WhitelistedRoute {
    return WhitelistedRoute.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: WhitelistedRoute): Uint8Array {
    return WhitelistedRoute.encode(message).finish();
  },
  toProtoMsg(message: WhitelistedRoute): WhitelistedRouteProtoMsg {
    return {
      typeUrl: "/pryzm.amm.v1.WhitelistedRoute",
      value: WhitelistedRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WhitelistedRoute.typeUrl, WhitelistedRoute);