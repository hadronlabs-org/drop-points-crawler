import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterOperator, MsgUpdateOperator, MsgDeactivateOperator, MsgReactivateOperator, MsgDeleteOperator, MsgTransferOperatorOwnership, MsgSetOperatorParams, MsgUpdateParams } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.operators.v1.MsgRegisterOperator", MsgRegisterOperator], ["/milkyway.operators.v1.MsgUpdateOperator", MsgUpdateOperator], ["/milkyway.operators.v1.MsgDeactivateOperator", MsgDeactivateOperator], ["/milkyway.operators.v1.MsgReactivateOperator", MsgReactivateOperator], ["/milkyway.operators.v1.MsgDeleteOperator", MsgDeleteOperator], ["/milkyway.operators.v1.MsgTransferOperatorOwnership", MsgTransferOperatorOwnership], ["/milkyway.operators.v1.MsgSetOperatorParams", MsgSetOperatorParams], ["/milkyway.operators.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgRegisterOperator",
        value: MsgRegisterOperator.encode(value).finish()
      };
    },
    updateOperator(value: MsgUpdateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateOperator",
        value: MsgUpdateOperator.encode(value).finish()
      };
    },
    deactivateOperator(value: MsgDeactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator",
        value: MsgDeactivateOperator.encode(value).finish()
      };
    },
    reactivateOperator(value: MsgReactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgReactivateOperator",
        value: MsgReactivateOperator.encode(value).finish()
      };
    },
    deleteOperator(value: MsgDeleteOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeleteOperator",
        value: MsgDeleteOperator.encode(value).finish()
      };
    },
    transferOperatorOwnership(value: MsgTransferOperatorOwnership) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership",
        value: MsgTransferOperatorOwnership.encode(value).finish()
      };
    },
    setOperatorParams(value: MsgSetOperatorParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams",
        value: MsgSetOperatorParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgRegisterOperator",
        value
      };
    },
    updateOperator(value: MsgUpdateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateOperator",
        value
      };
    },
    deactivateOperator(value: MsgDeactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator",
        value
      };
    },
    reactivateOperator(value: MsgReactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgReactivateOperator",
        value
      };
    },
    deleteOperator(value: MsgDeleteOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeleteOperator",
        value
      };
    },
    transferOperatorOwnership(value: MsgTransferOperatorOwnership) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership",
        value
      };
    },
    setOperatorParams(value: MsgSetOperatorParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerOperator(value: MsgRegisterOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgRegisterOperator",
        value: MsgRegisterOperator.fromPartial(value)
      };
    },
    updateOperator(value: MsgUpdateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateOperator",
        value: MsgUpdateOperator.fromPartial(value)
      };
    },
    deactivateOperator(value: MsgDeactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeactivateOperator",
        value: MsgDeactivateOperator.fromPartial(value)
      };
    },
    reactivateOperator(value: MsgReactivateOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgReactivateOperator",
        value: MsgReactivateOperator.fromPartial(value)
      };
    },
    deleteOperator(value: MsgDeleteOperator) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgDeleteOperator",
        value: MsgDeleteOperator.fromPartial(value)
      };
    },
    transferOperatorOwnership(value: MsgTransferOperatorOwnership) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgTransferOperatorOwnership",
        value: MsgTransferOperatorOwnership.fromPartial(value)
      };
    },
    setOperatorParams(value: MsgSetOperatorParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgSetOperatorParams",
        value: MsgSetOperatorParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.operators.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};