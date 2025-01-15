import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Operator, OperatorAmino, OperatorSDKType, OperatorParams, OperatorParamsAmino, OperatorParamsSDKType } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the operators module's genesis state. */
export interface GenesisState {
    /** Params defines the parameters of the module. */
    params: Params;
    /**
     * NextOperatorID defines the ID that will be assigned to the
     * next operator that gets created.
     */
    nextOperatorId: number;
    /** Operators defines the list of operators. */
    operators: Operator[];
    /**
     * UnbondingOperators defines the list of operators that are currently being
     * unbonded.
     */
    unbondingOperators: UnbondingOperator[];
    /** OperatorsParams defines the list of operators params. */
    operatorsParams: OperatorParamsRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/milkyway.operators.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the operators module's genesis state. */
export interface GenesisStateAmino {
    /** Params defines the parameters of the module. */
    params?: ParamsAmino;
    /**
     * NextOperatorID defines the ID that will be assigned to the
     * next operator that gets created.
     */
    next_operator_id?: number;
    /** Operators defines the list of operators. */
    operators?: OperatorAmino[];
    /**
     * UnbondingOperators defines the list of operators that are currently being
     * unbonded.
     */
    unbonding_operators?: UnbondingOperatorAmino[];
    /** OperatorsParams defines the list of operators params. */
    operators_params?: OperatorParamsRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/milkyway.operators.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the operators module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    next_operator_id: number;
    operators: OperatorSDKType[];
    unbonding_operators: UnbondingOperatorSDKType[];
    operators_params: OperatorParamsRecordSDKType[];
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperator {
    /** OperatorID is the ID of the operator that is being unbonded. */
    operatorId: number;
    /**
     * UnbondingCompletionTime is the time at which the unbonding of the operator
     * will be completed
     */
    unbondingCompletionTime: Date;
}
export interface UnbondingOperatorProtoMsg {
    typeUrl: "/milkyway.operators.v1.UnbondingOperator";
    value: Uint8Array;
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperatorAmino {
    /** OperatorID is the ID of the operator that is being unbonded. */
    operator_id?: number;
    /**
     * UnbondingCompletionTime is the time at which the unbonding of the operator
     * will be completed
     */
    unbonding_completion_time?: string;
}
export interface UnbondingOperatorAminoMsg {
    type: "/milkyway.operators.v1.UnbondingOperator";
    value: UnbondingOperatorAmino;
}
/**
 * UnbondingOperator contains the data about an operator that is currently being
 * unbonded.
 */
export interface UnbondingOperatorSDKType {
    operator_id: number;
    unbonding_completion_time: Date;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecord {
    /** OperatorID is the ID of the operator. */
    operatorId: number;
    /** Params defines the parameters for the operators module. */
    params: OperatorParams;
}
export interface OperatorParamsRecordProtoMsg {
    typeUrl: "/milkyway.operators.v1.OperatorParamsRecord";
    value: Uint8Array;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecordAmino {
    /** OperatorID is the ID of the operator. */
    operator_id?: number;
    /** Params defines the parameters for the operators module. */
    params?: OperatorParamsAmino;
}
export interface OperatorParamsRecordAminoMsg {
    type: "/milkyway.operators.v1.OperatorParamsRecord";
    value: OperatorParamsRecordAmino;
}
/**
 * OperatorParamsRecord represents the params that have been set for an
 * individual operator.
 */
export interface OperatorParamsRecordSDKType {
    operator_id: number;
    params: OperatorParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const UnbondingOperator: {
    typeUrl: string;
    encode(message: UnbondingOperator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingOperator;
    fromPartial(object: Partial<UnbondingOperator>): UnbondingOperator;
    fromAmino(object: UnbondingOperatorAmino): UnbondingOperator;
    toAmino(message: UnbondingOperator): UnbondingOperatorAmino;
    fromAminoMsg(object: UnbondingOperatorAminoMsg): UnbondingOperator;
    fromProtoMsg(message: UnbondingOperatorProtoMsg): UnbondingOperator;
    toProto(message: UnbondingOperator): Uint8Array;
    toProtoMsg(message: UnbondingOperator): UnbondingOperatorProtoMsg;
};
export declare const OperatorParamsRecord: {
    typeUrl: string;
    encode(message: OperatorParamsRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OperatorParamsRecord;
    fromPartial(object: Partial<OperatorParamsRecord>): OperatorParamsRecord;
    fromAmino(object: OperatorParamsRecordAmino): OperatorParamsRecord;
    toAmino(message: OperatorParamsRecord): OperatorParamsRecordAmino;
    fromAminoMsg(object: OperatorParamsRecordAminoMsg): OperatorParamsRecord;
    fromProtoMsg(message: OperatorParamsRecordProtoMsg): OperatorParamsRecord;
    toProto(message: OperatorParamsRecord): Uint8Array;
    toProtoMsg(message: OperatorParamsRecord): OperatorParamsRecordProtoMsg;
};
