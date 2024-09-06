//@ts-nocheck
import { MsgRefract, MsgRedeem } from "./tx";
export const AminoConverter = {
  "/pryzm.refractor.v1.MsgRefract": {
    aminoType: "pryzm/refractor/v1/Refract",
    toAmino: MsgRefract.toAmino,
    fromAmino: MsgRefract.fromAmino
  },
  "/pryzm.refractor.v1.MsgRedeem": {
    aminoType: "pryzm/refractor/v1/Redeem",
    toAmino: MsgRedeem.toAmino,
    fromAmino: MsgRedeem.fromAmino
  }
};