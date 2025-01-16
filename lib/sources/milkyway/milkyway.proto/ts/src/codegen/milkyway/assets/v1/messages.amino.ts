import { MsgRegisterAsset, MsgDeregisterAsset } from "./messages";
export const AminoConverter = {
  "/milkyway.assets.v1.MsgRegisterAsset": {
    aminoType: "milkyway/MsgRegisterAsset",
    toAmino: MsgRegisterAsset.toAmino,
    fromAmino: MsgRegisterAsset.fromAmino
  },
  "/milkyway.assets.v1.MsgDeregisterAsset": {
    aminoType: "milkyway/MsgDeregisterAsset",
    toAmino: MsgDeregisterAsset.toAmino,
    fromAmino: MsgDeregisterAsset.fromAmino
  }
};