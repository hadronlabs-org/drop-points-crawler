import { MsgCreateService, MsgUpdateService, MsgActivateService, MsgDeactivateService, MsgDeleteService, MsgTransferServiceOwnership, MsgSetServiceParams, MsgUpdateParams, MsgAccreditService, MsgRevokeServiceAccreditation } from "./messages";
export const AminoConverter = {
  "/milkyway.services.v1.MsgCreateService": {
    aminoType: "milkyway/services/MsgCreateService",
    toAmino: MsgCreateService.toAmino,
    fromAmino: MsgCreateService.fromAmino
  },
  "/milkyway.services.v1.MsgUpdateService": {
    aminoType: "milkyway/services/MsgUpdateService",
    toAmino: MsgUpdateService.toAmino,
    fromAmino: MsgUpdateService.fromAmino
  },
  "/milkyway.services.v1.MsgActivateService": {
    aminoType: "milkyway/MsgActivateService",
    toAmino: MsgActivateService.toAmino,
    fromAmino: MsgActivateService.fromAmino
  },
  "/milkyway.services.v1.MsgDeactivateService": {
    aminoType: "milkyway/MsgDeactivateService",
    toAmino: MsgDeactivateService.toAmino,
    fromAmino: MsgDeactivateService.fromAmino
  },
  "/milkyway.services.v1.MsgDeleteService": {
    aminoType: "milkyway/MsgDeleteService",
    toAmino: MsgDeleteService.toAmino,
    fromAmino: MsgDeleteService.fromAmino
  },
  "/milkyway.services.v1.MsgTransferServiceOwnership": {
    aminoType: "milkyway/MsgTransferServiceOwnership",
    toAmino: MsgTransferServiceOwnership.toAmino,
    fromAmino: MsgTransferServiceOwnership.fromAmino
  },
  "/milkyway.services.v1.MsgSetServiceParams": {
    aminoType: "milkyway/MsgSetServiceParams",
    toAmino: MsgSetServiceParams.toAmino,
    fromAmino: MsgSetServiceParams.fromAmino
  },
  "/milkyway.services.v1.MsgUpdateParams": {
    aminoType: "milkyway/services/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/milkyway.services.v1.MsgAccreditService": {
    aminoType: "milkyway/MsgAccreditService",
    toAmino: MsgAccreditService.toAmino,
    fromAmino: MsgAccreditService.fromAmino
  },
  "/milkyway.services.v1.MsgRevokeServiceAccreditation": {
    aminoType: "milkyway/MsgRevokeServiceAccreditation",
    toAmino: MsgRevokeServiceAccreditation.toAmino,
    fromAmino: MsgRevokeServiceAccreditation.fromAmino
  }
};