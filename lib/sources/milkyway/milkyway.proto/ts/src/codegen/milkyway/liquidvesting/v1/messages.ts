import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentation {
  /** User that want to trigger the tokens mint. */
  sender: string;
  /** User that will receive the minted tokens. */
  receiver: string;
  /** The amount of tokens that will be minted */
  amount: Coin[];
}
export interface MsgMintLockedRepresentationProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation";
  value: Uint8Array;
}
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentationAmino {
  /** User that want to trigger the tokens mint. */
  sender?: string;
  /** User that will receive the minted tokens. */
  receiver?: string;
  /** The amount of tokens that will be minted */
  amount?: CoinAmino[];
}
export interface MsgMintLockedRepresentationAminoMsg {
  type: "milkyway/MsgMintLockedRepresentation";
  value: MsgMintLockedRepresentationAmino;
}
/**
 * MsgMintLockedRepresentation defines the message structure for the
 * MintLockedRepresentation gRPC service method. It allows an authorized
 * account to mint a user's staked locked tokens representation that can be
 * used in the liquid vesting module.
 */
export interface MsgMintLockedRepresentationSDKType {
  sender: string;
  receiver: string;
  amount: CoinSDKType[];
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponse {}
export interface MsgMintLockedRepresentationResponseProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse";
  value: Uint8Array;
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponseAmino {}
export interface MsgMintLockedRepresentationResponseAminoMsg {
  type: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse";
  value: MsgMintLockedRepresentationResponseAmino;
}
/**
 * MsgMintLockedRepresentationResponse is the return value of
 * MsgMintLockedRepresentation.
 */
export interface MsgMintLockedRepresentationResponseSDKType {}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentation {
  /** User that want to trigger the tokens burn. */
  sender: string;
  /** User from which we want to burn the tokens. */
  user: string;
  /** The amount of tokens that will be burned from the user's balance. */
  amount: Coin[];
}
export interface MsgBurnLockedRepresentationProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation";
  value: Uint8Array;
}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentationAmino {
  /** User that want to trigger the tokens burn. */
  sender?: string;
  /** User from which we want to burn the tokens. */
  user?: string;
  /** The amount of tokens that will be burned from the user's balance. */
  amount?: CoinAmino[];
}
export interface MsgBurnLockedRepresentationAminoMsg {
  type: "milkyway/MsgBurnLockedRepresentation";
  value: MsgBurnLockedRepresentationAmino;
}
/**
 * MsgBurnLockedRepresentation defines the message structure for the
 * BurnLockedRepresentation gRPC service method. It allows an authorized
 * account to burn a user's staked locked tokens representation.
 */
export interface MsgBurnLockedRepresentationSDKType {
  sender: string;
  user: string;
  amount: CoinSDKType[];
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponse {}
export interface MsgBurnLockedRepresentationResponseProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse";
  value: Uint8Array;
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponseAmino {}
export interface MsgBurnLockedRepresentationResponseAminoMsg {
  type: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse";
  value: MsgBurnLockedRepresentationResponseAmino;
}
/**
 * MsgBurnLockedRepresentationResponse is the return value of
 * MsgBurnLockedRepresentation.
 */
export interface MsgBurnLockedRepresentationResponseSDKType {}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFund {
  /** User that want to withdraw the tokens. */
  sender: string;
  /** The amount of tokens that will be withdrawn from the user's insurance fund. */
  amount: Coin[];
}
export interface MsgWithdrawInsuranceFundProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund";
  value: Uint8Array;
}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFundAmino {
  /** User that want to withdraw the tokens. */
  sender?: string;
  /** The amount of tokens that will be withdrawn from the user's insurance fund. */
  amount?: CoinAmino[];
}
export interface MsgWithdrawInsuranceFundAminoMsg {
  type: "milkyway/MsgWithdrawInsuranceFund";
  value: MsgWithdrawInsuranceFundAmino;
}
/**
 * MsgWithdrawInsuranceFund defines the message structure for the
 * WithdrawInsuranceFund gRPC service method.
 */
export interface MsgWithdrawInsuranceFundSDKType {
  sender: string;
  amount: CoinSDKType[];
}
export interface MsgWithdrawInsuranceFundResponse {}
export interface MsgWithdrawInsuranceFundResponseProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse";
  value: Uint8Array;
}
export interface MsgWithdrawInsuranceFundResponseAmino {}
export interface MsgWithdrawInsuranceFundResponseAminoMsg {
  type: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse";
  value: MsgWithdrawInsuranceFundResponseAmino;
}
export interface MsgWithdrawInsuranceFundResponseSDKType {}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParams {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * Params define the parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsAmino {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * Params define the parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "milkyway/liquidvesting/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams defines the message structure for the UpdateParams gRPC
 * service method. It allows the authority to update the module parameters.
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the return value of MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgMintLockedRepresentation(): MsgMintLockedRepresentation {
  return {
    sender: "",
    receiver: "",
    amount: []
  };
}
export const MsgMintLockedRepresentation = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation",
  encode(message: MsgMintLockedRepresentation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintLockedRepresentation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintLockedRepresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMintLockedRepresentation>): MsgMintLockedRepresentation {
    const message = createBaseMsgMintLockedRepresentation();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMintLockedRepresentationAmino): MsgMintLockedRepresentation {
    const message = createBaseMsgMintLockedRepresentation();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMintLockedRepresentationAminoMsg): MsgMintLockedRepresentation {
    return MsgMintLockedRepresentation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationAminoMsg {
    return {
      type: "milkyway/MsgMintLockedRepresentation",
      value: MsgMintLockedRepresentation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintLockedRepresentationProtoMsg): MsgMintLockedRepresentation {
    return MsgMintLockedRepresentation.decode(message.value);
  },
  toProto(message: MsgMintLockedRepresentation): Uint8Array {
    return MsgMintLockedRepresentation.encode(message).finish();
  },
  toProtoMsg(message: MsgMintLockedRepresentation): MsgMintLockedRepresentationProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation",
      value: MsgMintLockedRepresentation.encode(message).finish()
    };
  }
};
function createBaseMsgMintLockedRepresentationResponse(): MsgMintLockedRepresentationResponse {
  return {};
}
export const MsgMintLockedRepresentationResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse",
  encode(_: MsgMintLockedRepresentationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintLockedRepresentationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintLockedRepresentationResponse();
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
  fromPartial(_: Partial<MsgMintLockedRepresentationResponse>): MsgMintLockedRepresentationResponse {
    const message = createBaseMsgMintLockedRepresentationResponse();
    return message;
  },
  fromAmino(_: MsgMintLockedRepresentationResponseAmino): MsgMintLockedRepresentationResponse {
    const message = createBaseMsgMintLockedRepresentationResponse();
    return message;
  },
  toAmino(_: MsgMintLockedRepresentationResponse): MsgMintLockedRepresentationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintLockedRepresentationResponseAminoMsg): MsgMintLockedRepresentationResponse {
    return MsgMintLockedRepresentationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintLockedRepresentationResponseProtoMsg): MsgMintLockedRepresentationResponse {
    return MsgMintLockedRepresentationResponse.decode(message.value);
  },
  toProto(message: MsgMintLockedRepresentationResponse): Uint8Array {
    return MsgMintLockedRepresentationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintLockedRepresentationResponse): MsgMintLockedRepresentationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgMintLockedRepresentationResponse",
      value: MsgMintLockedRepresentationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnLockedRepresentation(): MsgBurnLockedRepresentation {
  return {
    sender: "",
    user: "",
    amount: []
  };
}
export const MsgBurnLockedRepresentation = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation",
  encode(message: MsgBurnLockedRepresentation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnLockedRepresentation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnLockedRepresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnLockedRepresentation>): MsgBurnLockedRepresentation {
    const message = createBaseMsgBurnLockedRepresentation();
    message.sender = object.sender ?? "";
    message.user = object.user ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBurnLockedRepresentationAmino): MsgBurnLockedRepresentation {
    const message = createBaseMsgBurnLockedRepresentation();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.user = message.user === "" ? undefined : message.user;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBurnLockedRepresentationAminoMsg): MsgBurnLockedRepresentation {
    return MsgBurnLockedRepresentation.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationAminoMsg {
    return {
      type: "milkyway/MsgBurnLockedRepresentation",
      value: MsgBurnLockedRepresentation.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnLockedRepresentationProtoMsg): MsgBurnLockedRepresentation {
    return MsgBurnLockedRepresentation.decode(message.value);
  },
  toProto(message: MsgBurnLockedRepresentation): Uint8Array {
    return MsgBurnLockedRepresentation.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnLockedRepresentation): MsgBurnLockedRepresentationProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation",
      value: MsgBurnLockedRepresentation.encode(message).finish()
    };
  }
};
function createBaseMsgBurnLockedRepresentationResponse(): MsgBurnLockedRepresentationResponse {
  return {};
}
export const MsgBurnLockedRepresentationResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse",
  encode(_: MsgBurnLockedRepresentationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnLockedRepresentationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnLockedRepresentationResponse();
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
  fromPartial(_: Partial<MsgBurnLockedRepresentationResponse>): MsgBurnLockedRepresentationResponse {
    const message = createBaseMsgBurnLockedRepresentationResponse();
    return message;
  },
  fromAmino(_: MsgBurnLockedRepresentationResponseAmino): MsgBurnLockedRepresentationResponse {
    const message = createBaseMsgBurnLockedRepresentationResponse();
    return message;
  },
  toAmino(_: MsgBurnLockedRepresentationResponse): MsgBurnLockedRepresentationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnLockedRepresentationResponseAminoMsg): MsgBurnLockedRepresentationResponse {
    return MsgBurnLockedRepresentationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnLockedRepresentationResponseProtoMsg): MsgBurnLockedRepresentationResponse {
    return MsgBurnLockedRepresentationResponse.decode(message.value);
  },
  toProto(message: MsgBurnLockedRepresentationResponse): Uint8Array {
    return MsgBurnLockedRepresentationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnLockedRepresentationResponse): MsgBurnLockedRepresentationResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentationResponse",
      value: MsgBurnLockedRepresentationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawInsuranceFund(): MsgWithdrawInsuranceFund {
  return {
    sender: "",
    amount: []
  };
}
export const MsgWithdrawInsuranceFund = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund",
  encode(message: MsgWithdrawInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgWithdrawInsuranceFund>): MsgWithdrawInsuranceFund {
    const message = createBaseMsgWithdrawInsuranceFund();
    message.sender = object.sender ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawInsuranceFundAmino): MsgWithdrawInsuranceFund {
    const message = createBaseMsgWithdrawInsuranceFund();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawInsuranceFundAminoMsg): MsgWithdrawInsuranceFund {
    return MsgWithdrawInsuranceFund.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundAminoMsg {
    return {
      type: "milkyway/MsgWithdrawInsuranceFund",
      value: MsgWithdrawInsuranceFund.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawInsuranceFundProtoMsg): MsgWithdrawInsuranceFund {
    return MsgWithdrawInsuranceFund.decode(message.value);
  },
  toProto(message: MsgWithdrawInsuranceFund): Uint8Array {
    return MsgWithdrawInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawInsuranceFund): MsgWithdrawInsuranceFundProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund",
      value: MsgWithdrawInsuranceFund.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawInsuranceFundResponse(): MsgWithdrawInsuranceFundResponse {
  return {};
}
export const MsgWithdrawInsuranceFundResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse",
  encode(_: MsgWithdrawInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawInsuranceFundResponse();
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
  fromPartial(_: Partial<MsgWithdrawInsuranceFundResponse>): MsgWithdrawInsuranceFundResponse {
    const message = createBaseMsgWithdrawInsuranceFundResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawInsuranceFundResponseAmino): MsgWithdrawInsuranceFundResponse {
    const message = createBaseMsgWithdrawInsuranceFundResponse();
    return message;
  },
  toAmino(_: MsgWithdrawInsuranceFundResponse): MsgWithdrawInsuranceFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawInsuranceFundResponseAminoMsg): MsgWithdrawInsuranceFundResponse {
    return MsgWithdrawInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawInsuranceFundResponseProtoMsg): MsgWithdrawInsuranceFundResponse {
    return MsgWithdrawInsuranceFundResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawInsuranceFundResponse): Uint8Array {
    return MsgWithdrawInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawInsuranceFundResponse): MsgWithdrawInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFundResponse",
      value: MsgWithdrawInsuranceFundResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "milkyway/liquidvesting/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/milkyway.liquidvesting.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};