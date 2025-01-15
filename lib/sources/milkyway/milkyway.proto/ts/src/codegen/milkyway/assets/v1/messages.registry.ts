import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAsset, MsgDeregisterAsset } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.assets.v1.MsgRegisterAsset", MsgRegisterAsset], ["/milkyway.assets.v1.MsgDeregisterAsset", MsgDeregisterAsset]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgRegisterAsset",
        value: MsgRegisterAsset.encode(value).finish()
      };
    },
    deregisterAsset(value: MsgDeregisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset",
        value: MsgDeregisterAsset.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgRegisterAsset",
        value
      };
    },
    deregisterAsset(value: MsgDeregisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset",
        value
      };
    }
  },
  fromPartial: {
    registerAsset(value: MsgRegisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgRegisterAsset",
        value: MsgRegisterAsset.fromPartial(value)
      };
    },
    deregisterAsset(value: MsgDeregisterAsset) {
      return {
        typeUrl: "/milkyway.assets.v1.MsgDeregisterAsset",
        value: MsgDeregisterAsset.fromPartial(value)
      };
    }
  }
};