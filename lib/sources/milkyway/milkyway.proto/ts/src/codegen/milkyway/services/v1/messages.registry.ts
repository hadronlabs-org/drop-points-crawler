import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgCreateService, MsgUpdateService, MsgActivateService, MsgDeactivateService, MsgDeleteService, MsgTransferServiceOwnership, MsgSetServiceParams, MsgUpdateParams, MsgAccreditService, MsgRevokeServiceAccreditation } from "./messages";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/milkyway.services.v1.MsgCreateService", MsgCreateService], ["/milkyway.services.v1.MsgUpdateService", MsgUpdateService], ["/milkyway.services.v1.MsgActivateService", MsgActivateService], ["/milkyway.services.v1.MsgDeactivateService", MsgDeactivateService], ["/milkyway.services.v1.MsgDeleteService", MsgDeleteService], ["/milkyway.services.v1.MsgTransferServiceOwnership", MsgTransferServiceOwnership], ["/milkyway.services.v1.MsgSetServiceParams", MsgSetServiceParams], ["/milkyway.services.v1.MsgUpdateParams", MsgUpdateParams], ["/milkyway.services.v1.MsgAccreditService", MsgAccreditService], ["/milkyway.services.v1.MsgRevokeServiceAccreditation", MsgRevokeServiceAccreditation]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createService(value: MsgCreateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgCreateService",
        value: MsgCreateService.encode(value).finish()
      };
    },
    updateService(value: MsgUpdateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateService",
        value: MsgUpdateService.encode(value).finish()
      };
    },
    activateService(value: MsgActivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgActivateService",
        value: MsgActivateService.encode(value).finish()
      };
    },
    deactivateService(value: MsgDeactivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeactivateService",
        value: MsgDeactivateService.encode(value).finish()
      };
    },
    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeleteService",
        value: MsgDeleteService.encode(value).finish()
      };
    },
    transferServiceOwnership(value: MsgTransferServiceOwnership) {
      return {
        typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership",
        value: MsgTransferServiceOwnership.encode(value).finish()
      };
    },
    setServiceParams(value: MsgSetServiceParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgSetServiceParams",
        value: MsgSetServiceParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    accreditService(value: MsgAccreditService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgAccreditService",
        value: MsgAccreditService.encode(value).finish()
      };
    },
    revokeServiceAccreditation(value: MsgRevokeServiceAccreditation) {
      return {
        typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation",
        value: MsgRevokeServiceAccreditation.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createService(value: MsgCreateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgCreateService",
        value
      };
    },
    updateService(value: MsgUpdateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateService",
        value
      };
    },
    activateService(value: MsgActivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgActivateService",
        value
      };
    },
    deactivateService(value: MsgDeactivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeactivateService",
        value
      };
    },
    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeleteService",
        value
      };
    },
    transferServiceOwnership(value: MsgTransferServiceOwnership) {
      return {
        typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership",
        value
      };
    },
    setServiceParams(value: MsgSetServiceParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgSetServiceParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateParams",
        value
      };
    },
    accreditService(value: MsgAccreditService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgAccreditService",
        value
      };
    },
    revokeServiceAccreditation(value: MsgRevokeServiceAccreditation) {
      return {
        typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation",
        value
      };
    }
  },
  fromPartial: {
    createService(value: MsgCreateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgCreateService",
        value: MsgCreateService.fromPartial(value)
      };
    },
    updateService(value: MsgUpdateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateService",
        value: MsgUpdateService.fromPartial(value)
      };
    },
    activateService(value: MsgActivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgActivateService",
        value: MsgActivateService.fromPartial(value)
      };
    },
    deactivateService(value: MsgDeactivateService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeactivateService",
        value: MsgDeactivateService.fromPartial(value)
      };
    },
    deleteService(value: MsgDeleteService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgDeleteService",
        value: MsgDeleteService.fromPartial(value)
      };
    },
    transferServiceOwnership(value: MsgTransferServiceOwnership) {
      return {
        typeUrl: "/milkyway.services.v1.MsgTransferServiceOwnership",
        value: MsgTransferServiceOwnership.fromPartial(value)
      };
    },
    setServiceParams(value: MsgSetServiceParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgSetServiceParams",
        value: MsgSetServiceParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/milkyway.services.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    accreditService(value: MsgAccreditService) {
      return {
        typeUrl: "/milkyway.services.v1.MsgAccreditService",
        value: MsgAccreditService.fromPartial(value)
      };
    },
    revokeServiceAccreditation(value: MsgRevokeServiceAccreditation) {
      return {
        typeUrl: "/milkyway.services.v1.MsgRevokeServiceAccreditation",
        value: MsgRevokeServiceAccreditation.fromPartial(value)
      };
    }
  }
};