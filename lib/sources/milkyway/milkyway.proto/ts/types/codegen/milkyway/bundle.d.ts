import * as _185 from "./assets/v1/genesis";
import * as _186 from "./assets/v1/messages";
import * as _187 from "./assets/v1/models";
import * as _188 from "./assets/v1/query";
import * as _189 from "./liquidvesting/v1/genesis";
import * as _190 from "./liquidvesting/v1/messages";
import * as _191 from "./liquidvesting/v1/models";
import * as _192 from "./liquidvesting/v1/params";
import * as _193 from "./liquidvesting/v1/query";
import * as _194 from "./operators/v1/genesis";
import * as _195 from "./operators/v1/messages";
import * as _196 from "./operators/v1/models";
import * as _197 from "./operators/v1/params";
import * as _198 from "./operators/v1/query";
import * as _199 from "./pools/v1/genesis";
import * as _200 from "./pools/v1/models";
import * as _201 from "./pools/v1/query";
import * as _202 from "./restaking/v1/genesis";
import * as _203 from "./restaking/v1/messages";
import * as _204 from "./restaking/v1/models";
import * as _205 from "./restaking/v1/params";
import * as _206 from "./restaking/v1/query";
import * as _207 from "./rewards/v1/genesis";
import * as _208 from "./rewards/v1/messages";
import * as _209 from "./rewards/v1/models";
import * as _210 from "./rewards/v1/params";
import * as _211 from "./rewards/v1/query";
import * as _212 from "./services/v1/genesis";
import * as _213 from "./services/v1/messages";
import * as _214 from "./services/v1/models";
import * as _215 from "./services/v1/params";
import * as _216 from "./services/v1/query";
import * as _349 from "./assets/v1/query.rpc.Query";
import * as _350 from "./liquidvesting/v1/query.rpc.Query";
import * as _351 from "./operators/v1/query.rpc.Query";
import * as _352 from "./pools/v1/query.rpc.Query";
import * as _353 from "./restaking/v1/query.rpc.Query";
import * as _354 from "./rewards/v1/query.rpc.Query";
import * as _355 from "./services/v1/query.rpc.Query";
import * as _356 from "./assets/v1/messages.rpc.msg";
import * as _357 from "./liquidvesting/v1/messages.rpc.msg";
import * as _358 from "./operators/v1/messages.rpc.msg";
import * as _359 from "./restaking/v1/messages.rpc.msg";
import * as _360 from "./rewards/v1/messages.rpc.msg";
import * as _361 from "./services/v1/messages.rpc.msg";
export declare namespace milkyway {
    namespace assets {
        const v1: {
            MsgClientImpl: typeof _356.MsgClientImpl;
            QueryClientImpl: typeof _349.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                assets(request: _188.QueryAssetsRequest): Promise<_188.QueryAssetsResponse>;
                asset(request: _188.QueryAssetRequest): Promise<_188.QueryAssetResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAsset(value: _186.MsgRegisterAsset): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregisterAsset(value: _186.MsgDeregisterAsset): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAsset(value: _186.MsgRegisterAsset): {
                        typeUrl: string;
                        value: _186.MsgRegisterAsset;
                    };
                    deregisterAsset(value: _186.MsgDeregisterAsset): {
                        typeUrl: string;
                        value: _186.MsgDeregisterAsset;
                    };
                };
                fromPartial: {
                    registerAsset(value: _186.MsgRegisterAsset): {
                        typeUrl: string;
                        value: _186.MsgRegisterAsset;
                    };
                    deregisterAsset(value: _186.MsgDeregisterAsset): {
                        typeUrl: string;
                        value: _186.MsgDeregisterAsset;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.assets.v1.MsgRegisterAsset": {
                    aminoType: string;
                    toAmino: (message: _186.MsgRegisterAsset) => _186.MsgRegisterAssetAmino;
                    fromAmino: (object: _186.MsgRegisterAssetAmino) => _186.MsgRegisterAsset;
                };
                "/milkyway.assets.v1.MsgDeregisterAsset": {
                    aminoType: string;
                    toAmino: (message: _186.MsgDeregisterAsset) => _186.MsgDeregisterAssetAmino;
                    fromAmino: (object: _186.MsgDeregisterAssetAmino) => _186.MsgDeregisterAsset;
                };
            };
            QueryAssetsRequest: {
                typeUrl: string;
                encode(message: _188.QueryAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryAssetsRequest;
                fromPartial(object: Partial<_188.QueryAssetsRequest>): _188.QueryAssetsRequest;
                fromAmino(object: _188.QueryAssetsRequestAmino): _188.QueryAssetsRequest;
                toAmino(message: _188.QueryAssetsRequest): _188.QueryAssetsRequestAmino;
                fromAminoMsg(object: _188.QueryAssetsRequestAminoMsg): _188.QueryAssetsRequest;
                fromProtoMsg(message: _188.QueryAssetsRequestProtoMsg): _188.QueryAssetsRequest;
                toProto(message: _188.QueryAssetsRequest): Uint8Array;
                toProtoMsg(message: _188.QueryAssetsRequest): _188.QueryAssetsRequestProtoMsg;
            };
            QueryAssetsResponse: {
                typeUrl: string;
                encode(message: _188.QueryAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryAssetsResponse;
                fromPartial(object: Partial<_188.QueryAssetsResponse>): _188.QueryAssetsResponse;
                fromAmino(object: _188.QueryAssetsResponseAmino): _188.QueryAssetsResponse;
                toAmino(message: _188.QueryAssetsResponse): _188.QueryAssetsResponseAmino;
                fromAminoMsg(object: _188.QueryAssetsResponseAminoMsg): _188.QueryAssetsResponse;
                fromProtoMsg(message: _188.QueryAssetsResponseProtoMsg): _188.QueryAssetsResponse;
                toProto(message: _188.QueryAssetsResponse): Uint8Array;
                toProtoMsg(message: _188.QueryAssetsResponse): _188.QueryAssetsResponseProtoMsg;
            };
            QueryAssetRequest: {
                typeUrl: string;
                encode(message: _188.QueryAssetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryAssetRequest;
                fromPartial(object: Partial<_188.QueryAssetRequest>): _188.QueryAssetRequest;
                fromAmino(object: _188.QueryAssetRequestAmino): _188.QueryAssetRequest;
                toAmino(message: _188.QueryAssetRequest): _188.QueryAssetRequestAmino;
                fromAminoMsg(object: _188.QueryAssetRequestAminoMsg): _188.QueryAssetRequest;
                fromProtoMsg(message: _188.QueryAssetRequestProtoMsg): _188.QueryAssetRequest;
                toProto(message: _188.QueryAssetRequest): Uint8Array;
                toProtoMsg(message: _188.QueryAssetRequest): _188.QueryAssetRequestProtoMsg;
            };
            QueryAssetResponse: {
                typeUrl: string;
                encode(message: _188.QueryAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryAssetResponse;
                fromPartial(object: Partial<_188.QueryAssetResponse>): _188.QueryAssetResponse;
                fromAmino(object: _188.QueryAssetResponseAmino): _188.QueryAssetResponse;
                toAmino(message: _188.QueryAssetResponse): _188.QueryAssetResponseAmino;
                fromAminoMsg(object: _188.QueryAssetResponseAminoMsg): _188.QueryAssetResponse;
                fromProtoMsg(message: _188.QueryAssetResponseProtoMsg): _188.QueryAssetResponse;
                toProto(message: _188.QueryAssetResponse): Uint8Array;
                toProtoMsg(message: _188.QueryAssetResponse): _188.QueryAssetResponseProtoMsg;
            };
            Asset: {
                typeUrl: string;
                encode(message: _187.Asset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Asset;
                fromPartial(object: Partial<_187.Asset>): _187.Asset;
                fromAmino(object: _187.AssetAmino): _187.Asset;
                toAmino(message: _187.Asset): _187.AssetAmino;
                fromAminoMsg(object: _187.AssetAminoMsg): _187.Asset;
                fromProtoMsg(message: _187.AssetProtoMsg): _187.Asset;
                toProto(message: _187.Asset): Uint8Array;
                toProtoMsg(message: _187.Asset): _187.AssetProtoMsg;
            };
            MsgRegisterAsset: {
                typeUrl: string;
                encode(message: _186.MsgRegisterAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgRegisterAsset;
                fromPartial(object: Partial<_186.MsgRegisterAsset>): _186.MsgRegisterAsset;
                fromAmino(object: _186.MsgRegisterAssetAmino): _186.MsgRegisterAsset;
                toAmino(message: _186.MsgRegisterAsset): _186.MsgRegisterAssetAmino;
                fromAminoMsg(object: _186.MsgRegisterAssetAminoMsg): _186.MsgRegisterAsset;
                toAminoMsg(message: _186.MsgRegisterAsset): _186.MsgRegisterAssetAminoMsg;
                fromProtoMsg(message: _186.MsgRegisterAssetProtoMsg): _186.MsgRegisterAsset;
                toProto(message: _186.MsgRegisterAsset): Uint8Array;
                toProtoMsg(message: _186.MsgRegisterAsset): _186.MsgRegisterAssetProtoMsg;
            };
            MsgRegisterAssetResponse: {
                typeUrl: string;
                encode(_: _186.MsgRegisterAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgRegisterAssetResponse;
                fromPartial(_: Partial<_186.MsgRegisterAssetResponse>): _186.MsgRegisterAssetResponse;
                fromAmino(_: _186.MsgRegisterAssetResponseAmino): _186.MsgRegisterAssetResponse;
                toAmino(_: _186.MsgRegisterAssetResponse): _186.MsgRegisterAssetResponseAmino;
                fromAminoMsg(object: _186.MsgRegisterAssetResponseAminoMsg): _186.MsgRegisterAssetResponse;
                fromProtoMsg(message: _186.MsgRegisterAssetResponseProtoMsg): _186.MsgRegisterAssetResponse;
                toProto(message: _186.MsgRegisterAssetResponse): Uint8Array;
                toProtoMsg(message: _186.MsgRegisterAssetResponse): _186.MsgRegisterAssetResponseProtoMsg;
            };
            MsgDeregisterAsset: {
                typeUrl: string;
                encode(message: _186.MsgDeregisterAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgDeregisterAsset;
                fromPartial(object: Partial<_186.MsgDeregisterAsset>): _186.MsgDeregisterAsset;
                fromAmino(object: _186.MsgDeregisterAssetAmino): _186.MsgDeregisterAsset;
                toAmino(message: _186.MsgDeregisterAsset): _186.MsgDeregisterAssetAmino;
                fromAminoMsg(object: _186.MsgDeregisterAssetAminoMsg): _186.MsgDeregisterAsset;
                toAminoMsg(message: _186.MsgDeregisterAsset): _186.MsgDeregisterAssetAminoMsg;
                fromProtoMsg(message: _186.MsgDeregisterAssetProtoMsg): _186.MsgDeregisterAsset;
                toProto(message: _186.MsgDeregisterAsset): Uint8Array;
                toProtoMsg(message: _186.MsgDeregisterAsset): _186.MsgDeregisterAssetProtoMsg;
            };
            MsgDeregisterAssetResponse: {
                typeUrl: string;
                encode(_: _186.MsgDeregisterAssetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.MsgDeregisterAssetResponse;
                fromPartial(_: Partial<_186.MsgDeregisterAssetResponse>): _186.MsgDeregisterAssetResponse;
                fromAmino(_: _186.MsgDeregisterAssetResponseAmino): _186.MsgDeregisterAssetResponse;
                toAmino(_: _186.MsgDeregisterAssetResponse): _186.MsgDeregisterAssetResponseAmino;
                fromAminoMsg(object: _186.MsgDeregisterAssetResponseAminoMsg): _186.MsgDeregisterAssetResponse;
                fromProtoMsg(message: _186.MsgDeregisterAssetResponseProtoMsg): _186.MsgDeregisterAssetResponse;
                toProto(message: _186.MsgDeregisterAssetResponse): Uint8Array;
                toProtoMsg(message: _186.MsgDeregisterAssetResponse): _186.MsgDeregisterAssetResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _185.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.GenesisState;
                fromPartial(object: Partial<_185.GenesisState>): _185.GenesisState;
                fromAmino(object: _185.GenesisStateAmino): _185.GenesisState;
                toAmino(message: _185.GenesisState): _185.GenesisStateAmino;
                fromAminoMsg(object: _185.GenesisStateAminoMsg): _185.GenesisState;
                fromProtoMsg(message: _185.GenesisStateProtoMsg): _185.GenesisState;
                toProto(message: _185.GenesisState): Uint8Array;
                toProtoMsg(message: _185.GenesisState): _185.GenesisStateProtoMsg;
            };
        };
    }
    namespace liquidvesting {
        const v1: {
            MsgClientImpl: typeof _357.MsgClientImpl;
            QueryClientImpl: typeof _350.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userInsuranceFund(request: _193.QueryUserInsuranceFundRequest): Promise<_193.QueryUserInsuranceFundResponse>;
                userInsuranceFunds(request?: _193.QueryUserInsuranceFundsRequest): Promise<_193.QueryUserInsuranceFundsResponse>;
                userRestakableAssets(request: _193.QueryUserRestakableAssetsRequest): Promise<_193.QueryUserRestakableAssetsResponse>;
                insuranceFund(request?: _193.QueryInsuranceFundRequest): Promise<_193.QueryInsuranceFundResponse>;
                params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintLockedRepresentation(value: _190.MsgMintLockedRepresentation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnLockedRepresentation(value: _190.MsgBurnLockedRepresentation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawInsuranceFund(value: _190.MsgWithdrawInsuranceFund): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintLockedRepresentation(value: _190.MsgMintLockedRepresentation): {
                        typeUrl: string;
                        value: _190.MsgMintLockedRepresentation;
                    };
                    burnLockedRepresentation(value: _190.MsgBurnLockedRepresentation): {
                        typeUrl: string;
                        value: _190.MsgBurnLockedRepresentation;
                    };
                    withdrawInsuranceFund(value: _190.MsgWithdrawInsuranceFund): {
                        typeUrl: string;
                        value: _190.MsgWithdrawInsuranceFund;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: _190.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    mintLockedRepresentation(value: _190.MsgMintLockedRepresentation): {
                        typeUrl: string;
                        value: _190.MsgMintLockedRepresentation;
                    };
                    burnLockedRepresentation(value: _190.MsgBurnLockedRepresentation): {
                        typeUrl: string;
                        value: _190.MsgBurnLockedRepresentation;
                    };
                    withdrawInsuranceFund(value: _190.MsgWithdrawInsuranceFund): {
                        typeUrl: string;
                        value: _190.MsgWithdrawInsuranceFund;
                    };
                    updateParams(value: _190.MsgUpdateParams): {
                        typeUrl: string;
                        value: _190.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.liquidvesting.v1.MsgMintLockedRepresentation": {
                    aminoType: string;
                    toAmino: (message: _190.MsgMintLockedRepresentation) => _190.MsgMintLockedRepresentationAmino;
                    fromAmino: (object: _190.MsgMintLockedRepresentationAmino) => _190.MsgMintLockedRepresentation;
                };
                "/milkyway.liquidvesting.v1.MsgBurnLockedRepresentation": {
                    aminoType: string;
                    toAmino: (message: _190.MsgBurnLockedRepresentation) => _190.MsgBurnLockedRepresentationAmino;
                    fromAmino: (object: _190.MsgBurnLockedRepresentationAmino) => _190.MsgBurnLockedRepresentation;
                };
                "/milkyway.liquidvesting.v1.MsgWithdrawInsuranceFund": {
                    aminoType: string;
                    toAmino: (message: _190.MsgWithdrawInsuranceFund) => _190.MsgWithdrawInsuranceFundAmino;
                    fromAmino: (object: _190.MsgWithdrawInsuranceFundAmino) => _190.MsgWithdrawInsuranceFund;
                };
                "/milkyway.liquidvesting.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _190.MsgUpdateParams) => _190.MsgUpdateParamsAmino;
                    fromAmino: (object: _190.MsgUpdateParamsAmino) => _190.MsgUpdateParams;
                };
            };
            QueryUserInsuranceFundRequest: {
                typeUrl: string;
                encode(message: _193.QueryUserInsuranceFundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserInsuranceFundRequest;
                fromPartial(object: Partial<_193.QueryUserInsuranceFundRequest>): _193.QueryUserInsuranceFundRequest;
                fromAmino(object: _193.QueryUserInsuranceFundRequestAmino): _193.QueryUserInsuranceFundRequest;
                toAmino(message: _193.QueryUserInsuranceFundRequest): _193.QueryUserInsuranceFundRequestAmino;
                fromAminoMsg(object: _193.QueryUserInsuranceFundRequestAminoMsg): _193.QueryUserInsuranceFundRequest;
                fromProtoMsg(message: _193.QueryUserInsuranceFundRequestProtoMsg): _193.QueryUserInsuranceFundRequest;
                toProto(message: _193.QueryUserInsuranceFundRequest): Uint8Array;
                toProtoMsg(message: _193.QueryUserInsuranceFundRequest): _193.QueryUserInsuranceFundRequestProtoMsg;
            };
            QueryUserInsuranceFundResponse: {
                typeUrl: string;
                encode(message: _193.QueryUserInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserInsuranceFundResponse;
                fromPartial(object: Partial<_193.QueryUserInsuranceFundResponse>): _193.QueryUserInsuranceFundResponse;
                fromAmino(object: _193.QueryUserInsuranceFundResponseAmino): _193.QueryUserInsuranceFundResponse;
                toAmino(message: _193.QueryUserInsuranceFundResponse): _193.QueryUserInsuranceFundResponseAmino;
                fromAminoMsg(object: _193.QueryUserInsuranceFundResponseAminoMsg): _193.QueryUserInsuranceFundResponse;
                fromProtoMsg(message: _193.QueryUserInsuranceFundResponseProtoMsg): _193.QueryUserInsuranceFundResponse;
                toProto(message: _193.QueryUserInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _193.QueryUserInsuranceFundResponse): _193.QueryUserInsuranceFundResponseProtoMsg;
            };
            QueryUserInsuranceFundsRequest: {
                typeUrl: string;
                encode(message: _193.QueryUserInsuranceFundsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserInsuranceFundsRequest;
                fromPartial(object: Partial<_193.QueryUserInsuranceFundsRequest>): _193.QueryUserInsuranceFundsRequest;
                fromAmino(object: _193.QueryUserInsuranceFundsRequestAmino): _193.QueryUserInsuranceFundsRequest;
                toAmino(message: _193.QueryUserInsuranceFundsRequest): _193.QueryUserInsuranceFundsRequestAmino;
                fromAminoMsg(object: _193.QueryUserInsuranceFundsRequestAminoMsg): _193.QueryUserInsuranceFundsRequest;
                fromProtoMsg(message: _193.QueryUserInsuranceFundsRequestProtoMsg): _193.QueryUserInsuranceFundsRequest;
                toProto(message: _193.QueryUserInsuranceFundsRequest): Uint8Array;
                toProtoMsg(message: _193.QueryUserInsuranceFundsRequest): _193.QueryUserInsuranceFundsRequestProtoMsg;
            };
            UserInsuranceFundData: {
                typeUrl: string;
                encode(message: _193.UserInsuranceFundData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.UserInsuranceFundData;
                fromPartial(object: Partial<_193.UserInsuranceFundData>): _193.UserInsuranceFundData;
                fromAmino(object: _193.UserInsuranceFundDataAmino): _193.UserInsuranceFundData;
                toAmino(message: _193.UserInsuranceFundData): _193.UserInsuranceFundDataAmino;
                fromAminoMsg(object: _193.UserInsuranceFundDataAminoMsg): _193.UserInsuranceFundData;
                fromProtoMsg(message: _193.UserInsuranceFundDataProtoMsg): _193.UserInsuranceFundData;
                toProto(message: _193.UserInsuranceFundData): Uint8Array;
                toProtoMsg(message: _193.UserInsuranceFundData): _193.UserInsuranceFundDataProtoMsg;
            };
            QueryUserInsuranceFundsResponse: {
                typeUrl: string;
                encode(message: _193.QueryUserInsuranceFundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserInsuranceFundsResponse;
                fromPartial(object: Partial<_193.QueryUserInsuranceFundsResponse>): _193.QueryUserInsuranceFundsResponse;
                fromAmino(object: _193.QueryUserInsuranceFundsResponseAmino): _193.QueryUserInsuranceFundsResponse;
                toAmino(message: _193.QueryUserInsuranceFundsResponse): _193.QueryUserInsuranceFundsResponseAmino;
                fromAminoMsg(object: _193.QueryUserInsuranceFundsResponseAminoMsg): _193.QueryUserInsuranceFundsResponse;
                fromProtoMsg(message: _193.QueryUserInsuranceFundsResponseProtoMsg): _193.QueryUserInsuranceFundsResponse;
                toProto(message: _193.QueryUserInsuranceFundsResponse): Uint8Array;
                toProtoMsg(message: _193.QueryUserInsuranceFundsResponse): _193.QueryUserInsuranceFundsResponseProtoMsg;
            };
            QueryUserRestakableAssetsRequest: {
                typeUrl: string;
                encode(message: _193.QueryUserRestakableAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserRestakableAssetsRequest;
                fromPartial(object: Partial<_193.QueryUserRestakableAssetsRequest>): _193.QueryUserRestakableAssetsRequest;
                fromAmino(object: _193.QueryUserRestakableAssetsRequestAmino): _193.QueryUserRestakableAssetsRequest;
                toAmino(message: _193.QueryUserRestakableAssetsRequest): _193.QueryUserRestakableAssetsRequestAmino;
                fromAminoMsg(object: _193.QueryUserRestakableAssetsRequestAminoMsg): _193.QueryUserRestakableAssetsRequest;
                fromProtoMsg(message: _193.QueryUserRestakableAssetsRequestProtoMsg): _193.QueryUserRestakableAssetsRequest;
                toProto(message: _193.QueryUserRestakableAssetsRequest): Uint8Array;
                toProtoMsg(message: _193.QueryUserRestakableAssetsRequest): _193.QueryUserRestakableAssetsRequestProtoMsg;
            };
            QueryUserRestakableAssetsResponse: {
                typeUrl: string;
                encode(message: _193.QueryUserRestakableAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryUserRestakableAssetsResponse;
                fromPartial(object: Partial<_193.QueryUserRestakableAssetsResponse>): _193.QueryUserRestakableAssetsResponse;
                fromAmino(object: _193.QueryUserRestakableAssetsResponseAmino): _193.QueryUserRestakableAssetsResponse;
                toAmino(message: _193.QueryUserRestakableAssetsResponse): _193.QueryUserRestakableAssetsResponseAmino;
                fromAminoMsg(object: _193.QueryUserRestakableAssetsResponseAminoMsg): _193.QueryUserRestakableAssetsResponse;
                fromProtoMsg(message: _193.QueryUserRestakableAssetsResponseProtoMsg): _193.QueryUserRestakableAssetsResponse;
                toProto(message: _193.QueryUserRestakableAssetsResponse): Uint8Array;
                toProtoMsg(message: _193.QueryUserRestakableAssetsResponse): _193.QueryUserRestakableAssetsResponseProtoMsg;
            };
            QueryInsuranceFundRequest: {
                typeUrl: string;
                encode(_: _193.QueryInsuranceFundRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryInsuranceFundRequest;
                fromPartial(_: Partial<_193.QueryInsuranceFundRequest>): _193.QueryInsuranceFundRequest;
                fromAmino(_: _193.QueryInsuranceFundRequestAmino): _193.QueryInsuranceFundRequest;
                toAmino(_: _193.QueryInsuranceFundRequest): _193.QueryInsuranceFundRequestAmino;
                fromAminoMsg(object: _193.QueryInsuranceFundRequestAminoMsg): _193.QueryInsuranceFundRequest;
                fromProtoMsg(message: _193.QueryInsuranceFundRequestProtoMsg): _193.QueryInsuranceFundRequest;
                toProto(message: _193.QueryInsuranceFundRequest): Uint8Array;
                toProtoMsg(message: _193.QueryInsuranceFundRequest): _193.QueryInsuranceFundRequestProtoMsg;
            };
            QueryInsuranceFundResponse: {
                typeUrl: string;
                encode(message: _193.QueryInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryInsuranceFundResponse;
                fromPartial(object: Partial<_193.QueryInsuranceFundResponse>): _193.QueryInsuranceFundResponse;
                fromAmino(object: _193.QueryInsuranceFundResponseAmino): _193.QueryInsuranceFundResponse;
                toAmino(message: _193.QueryInsuranceFundResponse): _193.QueryInsuranceFundResponseAmino;
                fromAminoMsg(object: _193.QueryInsuranceFundResponseAminoMsg): _193.QueryInsuranceFundResponse;
                fromProtoMsg(message: _193.QueryInsuranceFundResponseProtoMsg): _193.QueryInsuranceFundResponse;
                toProto(message: _193.QueryInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _193.QueryInsuranceFundResponse): _193.QueryInsuranceFundResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _193.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryParamsRequest;
                fromPartial(_: Partial<_193.QueryParamsRequest>): _193.QueryParamsRequest;
                fromAmino(_: _193.QueryParamsRequestAmino): _193.QueryParamsRequest;
                toAmino(_: _193.QueryParamsRequest): _193.QueryParamsRequestAmino;
                fromAminoMsg(object: _193.QueryParamsRequestAminoMsg): _193.QueryParamsRequest;
                fromProtoMsg(message: _193.QueryParamsRequestProtoMsg): _193.QueryParamsRequest;
                toProto(message: _193.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _193.QueryParamsRequest): _193.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _193.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.QueryParamsResponse;
                fromPartial(object: Partial<_193.QueryParamsResponse>): _193.QueryParamsResponse;
                fromAmino(object: _193.QueryParamsResponseAmino): _193.QueryParamsResponse;
                toAmino(message: _193.QueryParamsResponse): _193.QueryParamsResponseAmino;
                fromAminoMsg(object: _193.QueryParamsResponseAminoMsg): _193.QueryParamsResponse;
                fromProtoMsg(message: _193.QueryParamsResponseProtoMsg): _193.QueryParamsResponse;
                toProto(message: _193.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _193.QueryParamsResponse): _193.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _192.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Params;
                fromPartial(object: Partial<_192.Params>): _192.Params;
                fromAmino(object: _192.ParamsAmino): _192.Params;
                toAmino(message: _192.Params): _192.ParamsAmino;
                fromAminoMsg(object: _192.ParamsAminoMsg): _192.Params;
                fromProtoMsg(message: _192.ParamsProtoMsg): _192.Params;
                toProto(message: _192.Params): Uint8Array;
                toProtoMsg(message: _192.Params): _192.ParamsProtoMsg;
            };
            UserInsuranceFund: {
                typeUrl: string;
                encode(message: _191.UserInsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.UserInsuranceFund;
                fromPartial(object: Partial<_191.UserInsuranceFund>): _191.UserInsuranceFund;
                fromAmino(object: _191.UserInsuranceFundAmino): _191.UserInsuranceFund;
                toAmino(message: _191.UserInsuranceFund): _191.UserInsuranceFundAmino;
                fromAminoMsg(object: _191.UserInsuranceFundAminoMsg): _191.UserInsuranceFund;
                fromProtoMsg(message: _191.UserInsuranceFundProtoMsg): _191.UserInsuranceFund;
                toProto(message: _191.UserInsuranceFund): Uint8Array;
                toProtoMsg(message: _191.UserInsuranceFund): _191.UserInsuranceFundProtoMsg;
            };
            BurnCoins: {
                typeUrl: string;
                encode(message: _191.BurnCoins, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.BurnCoins;
                fromPartial(object: Partial<_191.BurnCoins>): _191.BurnCoins;
                fromAmino(object: _191.BurnCoinsAmino): _191.BurnCoins;
                toAmino(message: _191.BurnCoins): _191.BurnCoinsAmino;
                fromAminoMsg(object: _191.BurnCoinsAminoMsg): _191.BurnCoins;
                fromProtoMsg(message: _191.BurnCoinsProtoMsg): _191.BurnCoins;
                toProto(message: _191.BurnCoins): Uint8Array;
                toProtoMsg(message: _191.BurnCoins): _191.BurnCoinsProtoMsg;
            };
            BurnCoinsList: {
                typeUrl: string;
                encode(message: _191.BurnCoinsList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.BurnCoinsList;
                fromPartial(object: Partial<_191.BurnCoinsList>): _191.BurnCoinsList;
                fromAmino(object: _191.BurnCoinsListAmino): _191.BurnCoinsList;
                toAmino(message: _191.BurnCoinsList): _191.BurnCoinsListAmino;
                fromAminoMsg(object: _191.BurnCoinsListAminoMsg): _191.BurnCoinsList;
                fromProtoMsg(message: _191.BurnCoinsListProtoMsg): _191.BurnCoinsList;
                toProto(message: _191.BurnCoinsList): Uint8Array;
                toProtoMsg(message: _191.BurnCoinsList): _191.BurnCoinsListProtoMsg;
            };
            UserInsuranceFundEntry: {
                typeUrl: string;
                encode(message: _191.UserInsuranceFundEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.UserInsuranceFundEntry;
                fromPartial(object: Partial<_191.UserInsuranceFundEntry>): _191.UserInsuranceFundEntry;
                fromAmino(object: _191.UserInsuranceFundEntryAmino): _191.UserInsuranceFundEntry;
                toAmino(message: _191.UserInsuranceFundEntry): _191.UserInsuranceFundEntryAmino;
                fromAminoMsg(object: _191.UserInsuranceFundEntryAminoMsg): _191.UserInsuranceFundEntry;
                fromProtoMsg(message: _191.UserInsuranceFundEntryProtoMsg): _191.UserInsuranceFundEntry;
                toProto(message: _191.UserInsuranceFundEntry): Uint8Array;
                toProtoMsg(message: _191.UserInsuranceFundEntry): _191.UserInsuranceFundEntryProtoMsg;
            };
            MsgMintLockedRepresentation: {
                typeUrl: string;
                encode(message: _190.MsgMintLockedRepresentation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgMintLockedRepresentation;
                fromPartial(object: Partial<_190.MsgMintLockedRepresentation>): _190.MsgMintLockedRepresentation;
                fromAmino(object: _190.MsgMintLockedRepresentationAmino): _190.MsgMintLockedRepresentation;
                toAmino(message: _190.MsgMintLockedRepresentation): _190.MsgMintLockedRepresentationAmino;
                fromAminoMsg(object: _190.MsgMintLockedRepresentationAminoMsg): _190.MsgMintLockedRepresentation;
                toAminoMsg(message: _190.MsgMintLockedRepresentation): _190.MsgMintLockedRepresentationAminoMsg;
                fromProtoMsg(message: _190.MsgMintLockedRepresentationProtoMsg): _190.MsgMintLockedRepresentation;
                toProto(message: _190.MsgMintLockedRepresentation): Uint8Array;
                toProtoMsg(message: _190.MsgMintLockedRepresentation): _190.MsgMintLockedRepresentationProtoMsg;
            };
            MsgMintLockedRepresentationResponse: {
                typeUrl: string;
                encode(_: _190.MsgMintLockedRepresentationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgMintLockedRepresentationResponse;
                fromPartial(_: Partial<_190.MsgMintLockedRepresentationResponse>): _190.MsgMintLockedRepresentationResponse;
                fromAmino(_: _190.MsgMintLockedRepresentationResponseAmino): _190.MsgMintLockedRepresentationResponse;
                toAmino(_: _190.MsgMintLockedRepresentationResponse): _190.MsgMintLockedRepresentationResponseAmino;
                fromAminoMsg(object: _190.MsgMintLockedRepresentationResponseAminoMsg): _190.MsgMintLockedRepresentationResponse;
                fromProtoMsg(message: _190.MsgMintLockedRepresentationResponseProtoMsg): _190.MsgMintLockedRepresentationResponse;
                toProto(message: _190.MsgMintLockedRepresentationResponse): Uint8Array;
                toProtoMsg(message: _190.MsgMintLockedRepresentationResponse): _190.MsgMintLockedRepresentationResponseProtoMsg;
            };
            MsgBurnLockedRepresentation: {
                typeUrl: string;
                encode(message: _190.MsgBurnLockedRepresentation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgBurnLockedRepresentation;
                fromPartial(object: Partial<_190.MsgBurnLockedRepresentation>): _190.MsgBurnLockedRepresentation;
                fromAmino(object: _190.MsgBurnLockedRepresentationAmino): _190.MsgBurnLockedRepresentation;
                toAmino(message: _190.MsgBurnLockedRepresentation): _190.MsgBurnLockedRepresentationAmino;
                fromAminoMsg(object: _190.MsgBurnLockedRepresentationAminoMsg): _190.MsgBurnLockedRepresentation;
                toAminoMsg(message: _190.MsgBurnLockedRepresentation): _190.MsgBurnLockedRepresentationAminoMsg;
                fromProtoMsg(message: _190.MsgBurnLockedRepresentationProtoMsg): _190.MsgBurnLockedRepresentation;
                toProto(message: _190.MsgBurnLockedRepresentation): Uint8Array;
                toProtoMsg(message: _190.MsgBurnLockedRepresentation): _190.MsgBurnLockedRepresentationProtoMsg;
            };
            MsgBurnLockedRepresentationResponse: {
                typeUrl: string;
                encode(_: _190.MsgBurnLockedRepresentationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgBurnLockedRepresentationResponse;
                fromPartial(_: Partial<_190.MsgBurnLockedRepresentationResponse>): _190.MsgBurnLockedRepresentationResponse;
                fromAmino(_: _190.MsgBurnLockedRepresentationResponseAmino): _190.MsgBurnLockedRepresentationResponse;
                toAmino(_: _190.MsgBurnLockedRepresentationResponse): _190.MsgBurnLockedRepresentationResponseAmino;
                fromAminoMsg(object: _190.MsgBurnLockedRepresentationResponseAminoMsg): _190.MsgBurnLockedRepresentationResponse;
                fromProtoMsg(message: _190.MsgBurnLockedRepresentationResponseProtoMsg): _190.MsgBurnLockedRepresentationResponse;
                toProto(message: _190.MsgBurnLockedRepresentationResponse): Uint8Array;
                toProtoMsg(message: _190.MsgBurnLockedRepresentationResponse): _190.MsgBurnLockedRepresentationResponseProtoMsg;
            };
            MsgWithdrawInsuranceFund: {
                typeUrl: string;
                encode(message: _190.MsgWithdrawInsuranceFund, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgWithdrawInsuranceFund;
                fromPartial(object: Partial<_190.MsgWithdrawInsuranceFund>): _190.MsgWithdrawInsuranceFund;
                fromAmino(object: _190.MsgWithdrawInsuranceFundAmino): _190.MsgWithdrawInsuranceFund;
                toAmino(message: _190.MsgWithdrawInsuranceFund): _190.MsgWithdrawInsuranceFundAmino;
                fromAminoMsg(object: _190.MsgWithdrawInsuranceFundAminoMsg): _190.MsgWithdrawInsuranceFund;
                toAminoMsg(message: _190.MsgWithdrawInsuranceFund): _190.MsgWithdrawInsuranceFundAminoMsg;
                fromProtoMsg(message: _190.MsgWithdrawInsuranceFundProtoMsg): _190.MsgWithdrawInsuranceFund;
                toProto(message: _190.MsgWithdrawInsuranceFund): Uint8Array;
                toProtoMsg(message: _190.MsgWithdrawInsuranceFund): _190.MsgWithdrawInsuranceFundProtoMsg;
            };
            MsgWithdrawInsuranceFundResponse: {
                typeUrl: string;
                encode(_: _190.MsgWithdrawInsuranceFundResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgWithdrawInsuranceFundResponse;
                fromPartial(_: Partial<_190.MsgWithdrawInsuranceFundResponse>): _190.MsgWithdrawInsuranceFundResponse;
                fromAmino(_: _190.MsgWithdrawInsuranceFundResponseAmino): _190.MsgWithdrawInsuranceFundResponse;
                toAmino(_: _190.MsgWithdrawInsuranceFundResponse): _190.MsgWithdrawInsuranceFundResponseAmino;
                fromAminoMsg(object: _190.MsgWithdrawInsuranceFundResponseAminoMsg): _190.MsgWithdrawInsuranceFundResponse;
                fromProtoMsg(message: _190.MsgWithdrawInsuranceFundResponseProtoMsg): _190.MsgWithdrawInsuranceFundResponse;
                toProto(message: _190.MsgWithdrawInsuranceFundResponse): Uint8Array;
                toProtoMsg(message: _190.MsgWithdrawInsuranceFundResponse): _190.MsgWithdrawInsuranceFundResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _190.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgUpdateParams;
                fromPartial(object: Partial<_190.MsgUpdateParams>): _190.MsgUpdateParams;
                fromAmino(object: _190.MsgUpdateParamsAmino): _190.MsgUpdateParams;
                toAmino(message: _190.MsgUpdateParams): _190.MsgUpdateParamsAmino;
                fromAminoMsg(object: _190.MsgUpdateParamsAminoMsg): _190.MsgUpdateParams;
                toAminoMsg(message: _190.MsgUpdateParams): _190.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _190.MsgUpdateParamsProtoMsg): _190.MsgUpdateParams;
                toProto(message: _190.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _190.MsgUpdateParams): _190.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _190.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_190.MsgUpdateParamsResponse>): _190.MsgUpdateParamsResponse;
                fromAmino(_: _190.MsgUpdateParamsResponseAmino): _190.MsgUpdateParamsResponse;
                toAmino(_: _190.MsgUpdateParamsResponse): _190.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _190.MsgUpdateParamsResponseAminoMsg): _190.MsgUpdateParamsResponse;
                fromProtoMsg(message: _190.MsgUpdateParamsResponseProtoMsg): _190.MsgUpdateParamsResponse;
                toProto(message: _190.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _190.MsgUpdateParamsResponse): _190.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _189.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.GenesisState;
                fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
                fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
                toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
                fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
                fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
                toProto(message: _189.GenesisState): Uint8Array;
                toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
            };
        };
    }
    namespace operators {
        const v1: {
            MsgClientImpl: typeof _358.MsgClientImpl;
            QueryClientImpl: typeof _351.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                operator(request: _198.QueryOperatorRequest): Promise<_198.QueryOperatorResponse>;
                operatorParams(request: _198.QueryOperatorParamsRequest): Promise<_198.QueryOperatorParamsResponse>;
                operators(request?: _198.QueryOperatorsRequest): Promise<_198.QueryOperatorsResponse>;
                params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerOperator(value: _195.MsgRegisterOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateOperator(value: _195.MsgUpdateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deactivateOperator(value: _195.MsgDeactivateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reactivateOperator(value: _195.MsgReactivateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteOperator(value: _195.MsgDeleteOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferOperatorOwnership(value: _195.MsgTransferOperatorOwnership): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setOperatorParams(value: _195.MsgSetOperatorParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerOperator(value: _195.MsgRegisterOperator): {
                        typeUrl: string;
                        value: _195.MsgRegisterOperator;
                    };
                    updateOperator(value: _195.MsgUpdateOperator): {
                        typeUrl: string;
                        value: _195.MsgUpdateOperator;
                    };
                    deactivateOperator(value: _195.MsgDeactivateOperator): {
                        typeUrl: string;
                        value: _195.MsgDeactivateOperator;
                    };
                    reactivateOperator(value: _195.MsgReactivateOperator): {
                        typeUrl: string;
                        value: _195.MsgReactivateOperator;
                    };
                    deleteOperator(value: _195.MsgDeleteOperator): {
                        typeUrl: string;
                        value: _195.MsgDeleteOperator;
                    };
                    transferOperatorOwnership(value: _195.MsgTransferOperatorOwnership): {
                        typeUrl: string;
                        value: _195.MsgTransferOperatorOwnership;
                    };
                    setOperatorParams(value: _195.MsgSetOperatorParams): {
                        typeUrl: string;
                        value: _195.MsgSetOperatorParams;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerOperator(value: _195.MsgRegisterOperator): {
                        typeUrl: string;
                        value: _195.MsgRegisterOperator;
                    };
                    updateOperator(value: _195.MsgUpdateOperator): {
                        typeUrl: string;
                        value: _195.MsgUpdateOperator;
                    };
                    deactivateOperator(value: _195.MsgDeactivateOperator): {
                        typeUrl: string;
                        value: _195.MsgDeactivateOperator;
                    };
                    reactivateOperator(value: _195.MsgReactivateOperator): {
                        typeUrl: string;
                        value: _195.MsgReactivateOperator;
                    };
                    deleteOperator(value: _195.MsgDeleteOperator): {
                        typeUrl: string;
                        value: _195.MsgDeleteOperator;
                    };
                    transferOperatorOwnership(value: _195.MsgTransferOperatorOwnership): {
                        typeUrl: string;
                        value: _195.MsgTransferOperatorOwnership;
                    };
                    setOperatorParams(value: _195.MsgSetOperatorParams): {
                        typeUrl: string;
                        value: _195.MsgSetOperatorParams;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.operators.v1.MsgRegisterOperator": {
                    aminoType: string;
                    toAmino: (message: _195.MsgRegisterOperator) => _195.MsgRegisterOperatorAmino;
                    fromAmino: (object: _195.MsgRegisterOperatorAmino) => _195.MsgRegisterOperator;
                };
                "/milkyway.operators.v1.MsgUpdateOperator": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUpdateOperator) => _195.MsgUpdateOperatorAmino;
                    fromAmino: (object: _195.MsgUpdateOperatorAmino) => _195.MsgUpdateOperator;
                };
                "/milkyway.operators.v1.MsgDeactivateOperator": {
                    aminoType: string;
                    toAmino: (message: _195.MsgDeactivateOperator) => _195.MsgDeactivateOperatorAmino;
                    fromAmino: (object: _195.MsgDeactivateOperatorAmino) => _195.MsgDeactivateOperator;
                };
                "/milkyway.operators.v1.MsgReactivateOperator": {
                    aminoType: string;
                    toAmino: (message: _195.MsgReactivateOperator) => _195.MsgReactivateOperatorAmino;
                    fromAmino: (object: _195.MsgReactivateOperatorAmino) => _195.MsgReactivateOperator;
                };
                "/milkyway.operators.v1.MsgDeleteOperator": {
                    aminoType: string;
                    toAmino: (message: _195.MsgDeleteOperator) => _195.MsgDeleteOperatorAmino;
                    fromAmino: (object: _195.MsgDeleteOperatorAmino) => _195.MsgDeleteOperator;
                };
                "/milkyway.operators.v1.MsgTransferOperatorOwnership": {
                    aminoType: string;
                    toAmino: (message: _195.MsgTransferOperatorOwnership) => _195.MsgTransferOperatorOwnershipAmino;
                    fromAmino: (object: _195.MsgTransferOperatorOwnershipAmino) => _195.MsgTransferOperatorOwnership;
                };
                "/milkyway.operators.v1.MsgSetOperatorParams": {
                    aminoType: string;
                    toAmino: (message: _195.MsgSetOperatorParams) => _195.MsgSetOperatorParamsAmino;
                    fromAmino: (object: _195.MsgSetOperatorParamsAmino) => _195.MsgSetOperatorParams;
                };
                "/milkyway.operators.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUpdateParams) => _195.MsgUpdateParamsAmino;
                    fromAmino: (object: _195.MsgUpdateParamsAmino) => _195.MsgUpdateParams;
                };
            };
            QueryOperatorRequest: {
                typeUrl: string;
                encode(message: _198.QueryOperatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorRequest;
                fromPartial(object: Partial<_198.QueryOperatorRequest>): _198.QueryOperatorRequest;
                fromAmino(object: _198.QueryOperatorRequestAmino): _198.QueryOperatorRequest;
                toAmino(message: _198.QueryOperatorRequest): _198.QueryOperatorRequestAmino;
                fromAminoMsg(object: _198.QueryOperatorRequestAminoMsg): _198.QueryOperatorRequest;
                fromProtoMsg(message: _198.QueryOperatorRequestProtoMsg): _198.QueryOperatorRequest;
                toProto(message: _198.QueryOperatorRequest): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorRequest): _198.QueryOperatorRequestProtoMsg;
            };
            QueryOperatorResponse: {
                typeUrl: string;
                encode(message: _198.QueryOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorResponse;
                fromPartial(object: Partial<_198.QueryOperatorResponse>): _198.QueryOperatorResponse;
                fromAmino(object: _198.QueryOperatorResponseAmino): _198.QueryOperatorResponse;
                toAmino(message: _198.QueryOperatorResponse): _198.QueryOperatorResponseAmino;
                fromAminoMsg(object: _198.QueryOperatorResponseAminoMsg): _198.QueryOperatorResponse;
                fromProtoMsg(message: _198.QueryOperatorResponseProtoMsg): _198.QueryOperatorResponse;
                toProto(message: _198.QueryOperatorResponse): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorResponse): _198.QueryOperatorResponseProtoMsg;
            };
            QueryOperatorParamsRequest: {
                typeUrl: string;
                encode(message: _198.QueryOperatorParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorParamsRequest;
                fromPartial(object: Partial<_198.QueryOperatorParamsRequest>): _198.QueryOperatorParamsRequest;
                fromAmino(object: _198.QueryOperatorParamsRequestAmino): _198.QueryOperatorParamsRequest;
                toAmino(message: _198.QueryOperatorParamsRequest): _198.QueryOperatorParamsRequestAmino;
                fromAminoMsg(object: _198.QueryOperatorParamsRequestAminoMsg): _198.QueryOperatorParamsRequest;
                fromProtoMsg(message: _198.QueryOperatorParamsRequestProtoMsg): _198.QueryOperatorParamsRequest;
                toProto(message: _198.QueryOperatorParamsRequest): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorParamsRequest): _198.QueryOperatorParamsRequestProtoMsg;
            };
            QueryOperatorParamsResponse: {
                typeUrl: string;
                encode(message: _198.QueryOperatorParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorParamsResponse;
                fromPartial(object: Partial<_198.QueryOperatorParamsResponse>): _198.QueryOperatorParamsResponse;
                fromAmino(object: _198.QueryOperatorParamsResponseAmino): _198.QueryOperatorParamsResponse;
                toAmino(message: _198.QueryOperatorParamsResponse): _198.QueryOperatorParamsResponseAmino;
                fromAminoMsg(object: _198.QueryOperatorParamsResponseAminoMsg): _198.QueryOperatorParamsResponse;
                fromProtoMsg(message: _198.QueryOperatorParamsResponseProtoMsg): _198.QueryOperatorParamsResponse;
                toProto(message: _198.QueryOperatorParamsResponse): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorParamsResponse): _198.QueryOperatorParamsResponseProtoMsg;
            };
            QueryOperatorsRequest: {
                typeUrl: string;
                encode(message: _198.QueryOperatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorsRequest;
                fromPartial(object: Partial<_198.QueryOperatorsRequest>): _198.QueryOperatorsRequest;
                fromAmino(object: _198.QueryOperatorsRequestAmino): _198.QueryOperatorsRequest;
                toAmino(message: _198.QueryOperatorsRequest): _198.QueryOperatorsRequestAmino;
                fromAminoMsg(object: _198.QueryOperatorsRequestAminoMsg): _198.QueryOperatorsRequest;
                fromProtoMsg(message: _198.QueryOperatorsRequestProtoMsg): _198.QueryOperatorsRequest;
                toProto(message: _198.QueryOperatorsRequest): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorsRequest): _198.QueryOperatorsRequestProtoMsg;
            };
            QueryOperatorsResponse: {
                typeUrl: string;
                encode(message: _198.QueryOperatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryOperatorsResponse;
                fromPartial(object: Partial<_198.QueryOperatorsResponse>): _198.QueryOperatorsResponse;
                fromAmino(object: _198.QueryOperatorsResponseAmino): _198.QueryOperatorsResponse;
                toAmino(message: _198.QueryOperatorsResponse): _198.QueryOperatorsResponseAmino;
                fromAminoMsg(object: _198.QueryOperatorsResponseAminoMsg): _198.QueryOperatorsResponse;
                fromProtoMsg(message: _198.QueryOperatorsResponseProtoMsg): _198.QueryOperatorsResponse;
                toProto(message: _198.QueryOperatorsResponse): Uint8Array;
                toProtoMsg(message: _198.QueryOperatorsResponse): _198.QueryOperatorsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _198.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryParamsRequest;
                fromPartial(_: Partial<_198.QueryParamsRequest>): _198.QueryParamsRequest;
                fromAmino(_: _198.QueryParamsRequestAmino): _198.QueryParamsRequest;
                toAmino(_: _198.QueryParamsRequest): _198.QueryParamsRequestAmino;
                fromAminoMsg(object: _198.QueryParamsRequestAminoMsg): _198.QueryParamsRequest;
                fromProtoMsg(message: _198.QueryParamsRequestProtoMsg): _198.QueryParamsRequest;
                toProto(message: _198.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _198.QueryParamsRequest): _198.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _198.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.QueryParamsResponse;
                fromPartial(object: Partial<_198.QueryParamsResponse>): _198.QueryParamsResponse;
                fromAmino(object: _198.QueryParamsResponseAmino): _198.QueryParamsResponse;
                toAmino(message: _198.QueryParamsResponse): _198.QueryParamsResponseAmino;
                fromAminoMsg(object: _198.QueryParamsResponseAminoMsg): _198.QueryParamsResponse;
                fromProtoMsg(message: _198.QueryParamsResponseProtoMsg): _198.QueryParamsResponse;
                toProto(message: _198.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _198.QueryParamsResponse): _198.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _197.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.Params;
                fromPartial(object: Partial<_197.Params>): _197.Params;
                fromAmino(object: _197.ParamsAmino): _197.Params;
                toAmino(message: _197.Params): _197.ParamsAmino;
                fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
                fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
                toProto(message: _197.Params): Uint8Array;
                toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
            };
            operatorStatusFromJSON(object: any): _196.OperatorStatus;
            operatorStatusToJSON(object: _196.OperatorStatus): string;
            OperatorStatus: typeof _196.OperatorStatus;
            OperatorStatusSDKType: typeof _196.OperatorStatus;
            OperatorStatusAmino: typeof _196.OperatorStatus;
            Operator: {
                typeUrl: string;
                encode(message: _196.Operator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.Operator;
                fromPartial(object: Partial<_196.Operator>): _196.Operator;
                fromAmino(object: _196.OperatorAmino): _196.Operator;
                toAmino(message: _196.Operator): _196.OperatorAmino;
                fromAminoMsg(object: _196.OperatorAminoMsg): _196.Operator;
                fromProtoMsg(message: _196.OperatorProtoMsg): _196.Operator;
                toProto(message: _196.Operator): Uint8Array;
                toProtoMsg(message: _196.Operator): _196.OperatorProtoMsg;
            };
            OperatorParams: {
                typeUrl: string;
                encode(message: _196.OperatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.OperatorParams;
                fromPartial(object: Partial<_196.OperatorParams>): _196.OperatorParams;
                fromAmino(object: _196.OperatorParamsAmino): _196.OperatorParams;
                toAmino(message: _196.OperatorParams): _196.OperatorParamsAmino;
                fromAminoMsg(object: _196.OperatorParamsAminoMsg): _196.OperatorParams;
                fromProtoMsg(message: _196.OperatorParamsProtoMsg): _196.OperatorParams;
                toProto(message: _196.OperatorParams): Uint8Array;
                toProtoMsg(message: _196.OperatorParams): _196.OperatorParamsProtoMsg;
            };
            MsgRegisterOperator: {
                typeUrl: string;
                encode(message: _195.MsgRegisterOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgRegisterOperator;
                fromPartial(object: Partial<_195.MsgRegisterOperator>): _195.MsgRegisterOperator;
                fromAmino(object: _195.MsgRegisterOperatorAmino): _195.MsgRegisterOperator;
                toAmino(message: _195.MsgRegisterOperator): _195.MsgRegisterOperatorAmino;
                fromAminoMsg(object: _195.MsgRegisterOperatorAminoMsg): _195.MsgRegisterOperator;
                toAminoMsg(message: _195.MsgRegisterOperator): _195.MsgRegisterOperatorAminoMsg;
                fromProtoMsg(message: _195.MsgRegisterOperatorProtoMsg): _195.MsgRegisterOperator;
                toProto(message: _195.MsgRegisterOperator): Uint8Array;
                toProtoMsg(message: _195.MsgRegisterOperator): _195.MsgRegisterOperatorProtoMsg;
            };
            MsgRegisterOperatorResponse: {
                typeUrl: string;
                encode(message: _195.MsgRegisterOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgRegisterOperatorResponse;
                fromPartial(object: Partial<_195.MsgRegisterOperatorResponse>): _195.MsgRegisterOperatorResponse;
                fromAmino(object: _195.MsgRegisterOperatorResponseAmino): _195.MsgRegisterOperatorResponse;
                toAmino(message: _195.MsgRegisterOperatorResponse): _195.MsgRegisterOperatorResponseAmino;
                fromAminoMsg(object: _195.MsgRegisterOperatorResponseAminoMsg): _195.MsgRegisterOperatorResponse;
                fromProtoMsg(message: _195.MsgRegisterOperatorResponseProtoMsg): _195.MsgRegisterOperatorResponse;
                toProto(message: _195.MsgRegisterOperatorResponse): Uint8Array;
                toProtoMsg(message: _195.MsgRegisterOperatorResponse): _195.MsgRegisterOperatorResponseProtoMsg;
            };
            MsgUpdateOperator: {
                typeUrl: string;
                encode(message: _195.MsgUpdateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgUpdateOperator;
                fromPartial(object: Partial<_195.MsgUpdateOperator>): _195.MsgUpdateOperator;
                fromAmino(object: _195.MsgUpdateOperatorAmino): _195.MsgUpdateOperator;
                toAmino(message: _195.MsgUpdateOperator): _195.MsgUpdateOperatorAmino;
                fromAminoMsg(object: _195.MsgUpdateOperatorAminoMsg): _195.MsgUpdateOperator;
                toAminoMsg(message: _195.MsgUpdateOperator): _195.MsgUpdateOperatorAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateOperatorProtoMsg): _195.MsgUpdateOperator;
                toProto(message: _195.MsgUpdateOperator): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateOperator): _195.MsgUpdateOperatorProtoMsg;
            };
            MsgUpdateOperatorResponse: {
                typeUrl: string;
                encode(_: _195.MsgUpdateOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgUpdateOperatorResponse;
                fromPartial(_: Partial<_195.MsgUpdateOperatorResponse>): _195.MsgUpdateOperatorResponse;
                fromAmino(_: _195.MsgUpdateOperatorResponseAmino): _195.MsgUpdateOperatorResponse;
                toAmino(_: _195.MsgUpdateOperatorResponse): _195.MsgUpdateOperatorResponseAmino;
                fromAminoMsg(object: _195.MsgUpdateOperatorResponseAminoMsg): _195.MsgUpdateOperatorResponse;
                fromProtoMsg(message: _195.MsgUpdateOperatorResponseProtoMsg): _195.MsgUpdateOperatorResponse;
                toProto(message: _195.MsgUpdateOperatorResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateOperatorResponse): _195.MsgUpdateOperatorResponseProtoMsg;
            };
            MsgDeactivateOperator: {
                typeUrl: string;
                encode(message: _195.MsgDeactivateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgDeactivateOperator;
                fromPartial(object: Partial<_195.MsgDeactivateOperator>): _195.MsgDeactivateOperator;
                fromAmino(object: _195.MsgDeactivateOperatorAmino): _195.MsgDeactivateOperator;
                toAmino(message: _195.MsgDeactivateOperator): _195.MsgDeactivateOperatorAmino;
                fromAminoMsg(object: _195.MsgDeactivateOperatorAminoMsg): _195.MsgDeactivateOperator;
                toAminoMsg(message: _195.MsgDeactivateOperator): _195.MsgDeactivateOperatorAminoMsg;
                fromProtoMsg(message: _195.MsgDeactivateOperatorProtoMsg): _195.MsgDeactivateOperator;
                toProto(message: _195.MsgDeactivateOperator): Uint8Array;
                toProtoMsg(message: _195.MsgDeactivateOperator): _195.MsgDeactivateOperatorProtoMsg;
            };
            MsgDeactivateOperatorResponse: {
                typeUrl: string;
                encode(_: _195.MsgDeactivateOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgDeactivateOperatorResponse;
                fromPartial(_: Partial<_195.MsgDeactivateOperatorResponse>): _195.MsgDeactivateOperatorResponse;
                fromAmino(_: _195.MsgDeactivateOperatorResponseAmino): _195.MsgDeactivateOperatorResponse;
                toAmino(_: _195.MsgDeactivateOperatorResponse): _195.MsgDeactivateOperatorResponseAmino;
                fromAminoMsg(object: _195.MsgDeactivateOperatorResponseAminoMsg): _195.MsgDeactivateOperatorResponse;
                fromProtoMsg(message: _195.MsgDeactivateOperatorResponseProtoMsg): _195.MsgDeactivateOperatorResponse;
                toProto(message: _195.MsgDeactivateOperatorResponse): Uint8Array;
                toProtoMsg(message: _195.MsgDeactivateOperatorResponse): _195.MsgDeactivateOperatorResponseProtoMsg;
            };
            MsgReactivateOperator: {
                typeUrl: string;
                encode(message: _195.MsgReactivateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgReactivateOperator;
                fromPartial(object: Partial<_195.MsgReactivateOperator>): _195.MsgReactivateOperator;
                fromAmino(object: _195.MsgReactivateOperatorAmino): _195.MsgReactivateOperator;
                toAmino(message: _195.MsgReactivateOperator): _195.MsgReactivateOperatorAmino;
                fromAminoMsg(object: _195.MsgReactivateOperatorAminoMsg): _195.MsgReactivateOperator;
                toAminoMsg(message: _195.MsgReactivateOperator): _195.MsgReactivateOperatorAminoMsg;
                fromProtoMsg(message: _195.MsgReactivateOperatorProtoMsg): _195.MsgReactivateOperator;
                toProto(message: _195.MsgReactivateOperator): Uint8Array;
                toProtoMsg(message: _195.MsgReactivateOperator): _195.MsgReactivateOperatorProtoMsg;
            };
            MsgReactivateOperatorResponse: {
                typeUrl: string;
                encode(_: _195.MsgReactivateOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgReactivateOperatorResponse;
                fromPartial(_: Partial<_195.MsgReactivateOperatorResponse>): _195.MsgReactivateOperatorResponse;
                fromAmino(_: _195.MsgReactivateOperatorResponseAmino): _195.MsgReactivateOperatorResponse;
                toAmino(_: _195.MsgReactivateOperatorResponse): _195.MsgReactivateOperatorResponseAmino;
                fromAminoMsg(object: _195.MsgReactivateOperatorResponseAminoMsg): _195.MsgReactivateOperatorResponse;
                fromProtoMsg(message: _195.MsgReactivateOperatorResponseProtoMsg): _195.MsgReactivateOperatorResponse;
                toProto(message: _195.MsgReactivateOperatorResponse): Uint8Array;
                toProtoMsg(message: _195.MsgReactivateOperatorResponse): _195.MsgReactivateOperatorResponseProtoMsg;
            };
            MsgDeleteOperator: {
                typeUrl: string;
                encode(message: _195.MsgDeleteOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgDeleteOperator;
                fromPartial(object: Partial<_195.MsgDeleteOperator>): _195.MsgDeleteOperator;
                fromAmino(object: _195.MsgDeleteOperatorAmino): _195.MsgDeleteOperator;
                toAmino(message: _195.MsgDeleteOperator): _195.MsgDeleteOperatorAmino;
                fromAminoMsg(object: _195.MsgDeleteOperatorAminoMsg): _195.MsgDeleteOperator;
                toAminoMsg(message: _195.MsgDeleteOperator): _195.MsgDeleteOperatorAminoMsg;
                fromProtoMsg(message: _195.MsgDeleteOperatorProtoMsg): _195.MsgDeleteOperator;
                toProto(message: _195.MsgDeleteOperator): Uint8Array;
                toProtoMsg(message: _195.MsgDeleteOperator): _195.MsgDeleteOperatorProtoMsg;
            };
            MsgDeleteOperatorResponse: {
                typeUrl: string;
                encode(_: _195.MsgDeleteOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgDeleteOperatorResponse;
                fromPartial(_: Partial<_195.MsgDeleteOperatorResponse>): _195.MsgDeleteOperatorResponse;
                fromAmino(_: _195.MsgDeleteOperatorResponseAmino): _195.MsgDeleteOperatorResponse;
                toAmino(_: _195.MsgDeleteOperatorResponse): _195.MsgDeleteOperatorResponseAmino;
                fromAminoMsg(object: _195.MsgDeleteOperatorResponseAminoMsg): _195.MsgDeleteOperatorResponse;
                fromProtoMsg(message: _195.MsgDeleteOperatorResponseProtoMsg): _195.MsgDeleteOperatorResponse;
                toProto(message: _195.MsgDeleteOperatorResponse): Uint8Array;
                toProtoMsg(message: _195.MsgDeleteOperatorResponse): _195.MsgDeleteOperatorResponseProtoMsg;
            };
            MsgSetOperatorParams: {
                typeUrl: string;
                encode(message: _195.MsgSetOperatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgSetOperatorParams;
                fromPartial(object: Partial<_195.MsgSetOperatorParams>): _195.MsgSetOperatorParams;
                fromAmino(object: _195.MsgSetOperatorParamsAmino): _195.MsgSetOperatorParams;
                toAmino(message: _195.MsgSetOperatorParams): _195.MsgSetOperatorParamsAmino;
                fromAminoMsg(object: _195.MsgSetOperatorParamsAminoMsg): _195.MsgSetOperatorParams;
                toAminoMsg(message: _195.MsgSetOperatorParams): _195.MsgSetOperatorParamsAminoMsg;
                fromProtoMsg(message: _195.MsgSetOperatorParamsProtoMsg): _195.MsgSetOperatorParams;
                toProto(message: _195.MsgSetOperatorParams): Uint8Array;
                toProtoMsg(message: _195.MsgSetOperatorParams): _195.MsgSetOperatorParamsProtoMsg;
            };
            MsgSetOperatorParamsResponse: {
                typeUrl: string;
                encode(_: _195.MsgSetOperatorParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgSetOperatorParamsResponse;
                fromPartial(_: Partial<_195.MsgSetOperatorParamsResponse>): _195.MsgSetOperatorParamsResponse;
                fromAmino(_: _195.MsgSetOperatorParamsResponseAmino): _195.MsgSetOperatorParamsResponse;
                toAmino(_: _195.MsgSetOperatorParamsResponse): _195.MsgSetOperatorParamsResponseAmino;
                fromAminoMsg(object: _195.MsgSetOperatorParamsResponseAminoMsg): _195.MsgSetOperatorParamsResponse;
                fromProtoMsg(message: _195.MsgSetOperatorParamsResponseProtoMsg): _195.MsgSetOperatorParamsResponse;
                toProto(message: _195.MsgSetOperatorParamsResponse): Uint8Array;
                toProtoMsg(message: _195.MsgSetOperatorParamsResponse): _195.MsgSetOperatorParamsResponseProtoMsg;
            };
            MsgTransferOperatorOwnership: {
                typeUrl: string;
                encode(message: _195.MsgTransferOperatorOwnership, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgTransferOperatorOwnership;
                fromPartial(object: Partial<_195.MsgTransferOperatorOwnership>): _195.MsgTransferOperatorOwnership;
                fromAmino(object: _195.MsgTransferOperatorOwnershipAmino): _195.MsgTransferOperatorOwnership;
                toAmino(message: _195.MsgTransferOperatorOwnership): _195.MsgTransferOperatorOwnershipAmino;
                fromAminoMsg(object: _195.MsgTransferOperatorOwnershipAminoMsg): _195.MsgTransferOperatorOwnership;
                toAminoMsg(message: _195.MsgTransferOperatorOwnership): _195.MsgTransferOperatorOwnershipAminoMsg;
                fromProtoMsg(message: _195.MsgTransferOperatorOwnershipProtoMsg): _195.MsgTransferOperatorOwnership;
                toProto(message: _195.MsgTransferOperatorOwnership): Uint8Array;
                toProtoMsg(message: _195.MsgTransferOperatorOwnership): _195.MsgTransferOperatorOwnershipProtoMsg;
            };
            MsgTransferOperatorOwnershipResponse: {
                typeUrl: string;
                encode(_: _195.MsgTransferOperatorOwnershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgTransferOperatorOwnershipResponse;
                fromPartial(_: Partial<_195.MsgTransferOperatorOwnershipResponse>): _195.MsgTransferOperatorOwnershipResponse;
                fromAmino(_: _195.MsgTransferOperatorOwnershipResponseAmino): _195.MsgTransferOperatorOwnershipResponse;
                toAmino(_: _195.MsgTransferOperatorOwnershipResponse): _195.MsgTransferOperatorOwnershipResponseAmino;
                fromAminoMsg(object: _195.MsgTransferOperatorOwnershipResponseAminoMsg): _195.MsgTransferOperatorOwnershipResponse;
                fromProtoMsg(message: _195.MsgTransferOperatorOwnershipResponseProtoMsg): _195.MsgTransferOperatorOwnershipResponse;
                toProto(message: _195.MsgTransferOperatorOwnershipResponse): Uint8Array;
                toProtoMsg(message: _195.MsgTransferOperatorOwnershipResponse): _195.MsgTransferOperatorOwnershipResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _195.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgUpdateParams;
                fromPartial(object: Partial<_195.MsgUpdateParams>): _195.MsgUpdateParams;
                fromAmino(object: _195.MsgUpdateParamsAmino): _195.MsgUpdateParams;
                toAmino(message: _195.MsgUpdateParams): _195.MsgUpdateParamsAmino;
                fromAminoMsg(object: _195.MsgUpdateParamsAminoMsg): _195.MsgUpdateParams;
                toAminoMsg(message: _195.MsgUpdateParams): _195.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateParamsProtoMsg): _195.MsgUpdateParams;
                toProto(message: _195.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateParams): _195.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _195.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_195.MsgUpdateParamsResponse>): _195.MsgUpdateParamsResponse;
                fromAmino(_: _195.MsgUpdateParamsResponseAmino): _195.MsgUpdateParamsResponse;
                toAmino(_: _195.MsgUpdateParamsResponse): _195.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _195.MsgUpdateParamsResponseAminoMsg): _195.MsgUpdateParamsResponse;
                fromProtoMsg(message: _195.MsgUpdateParamsResponseProtoMsg): _195.MsgUpdateParamsResponse;
                toProto(message: _195.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateParamsResponse): _195.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _194.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.GenesisState;
                fromPartial(object: Partial<_194.GenesisState>): _194.GenesisState;
                fromAmino(object: _194.GenesisStateAmino): _194.GenesisState;
                toAmino(message: _194.GenesisState): _194.GenesisStateAmino;
                fromAminoMsg(object: _194.GenesisStateAminoMsg): _194.GenesisState;
                fromProtoMsg(message: _194.GenesisStateProtoMsg): _194.GenesisState;
                toProto(message: _194.GenesisState): Uint8Array;
                toProtoMsg(message: _194.GenesisState): _194.GenesisStateProtoMsg;
            };
            UnbondingOperator: {
                typeUrl: string;
                encode(message: _194.UnbondingOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.UnbondingOperator;
                fromPartial(object: Partial<_194.UnbondingOperator>): _194.UnbondingOperator;
                fromAmino(object: _194.UnbondingOperatorAmino): _194.UnbondingOperator;
                toAmino(message: _194.UnbondingOperator): _194.UnbondingOperatorAmino;
                fromAminoMsg(object: _194.UnbondingOperatorAminoMsg): _194.UnbondingOperator;
                fromProtoMsg(message: _194.UnbondingOperatorProtoMsg): _194.UnbondingOperator;
                toProto(message: _194.UnbondingOperator): Uint8Array;
                toProtoMsg(message: _194.UnbondingOperator): _194.UnbondingOperatorProtoMsg;
            };
            OperatorParamsRecord: {
                typeUrl: string;
                encode(message: _194.OperatorParamsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.OperatorParamsRecord;
                fromPartial(object: Partial<_194.OperatorParamsRecord>): _194.OperatorParamsRecord;
                fromAmino(object: _194.OperatorParamsRecordAmino): _194.OperatorParamsRecord;
                toAmino(message: _194.OperatorParamsRecord): _194.OperatorParamsRecordAmino;
                fromAminoMsg(object: _194.OperatorParamsRecordAminoMsg): _194.OperatorParamsRecord;
                fromProtoMsg(message: _194.OperatorParamsRecordProtoMsg): _194.OperatorParamsRecord;
                toProto(message: _194.OperatorParamsRecord): Uint8Array;
                toProtoMsg(message: _194.OperatorParamsRecord): _194.OperatorParamsRecordProtoMsg;
            };
        };
    }
    namespace pools {
        const v1: {
            QueryClientImpl: typeof _352.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                poolByID(request: _201.QueryPoolByIdRequest): Promise<_201.QueryPoolResponse>;
                poolByDenom(request: _201.QueryPoolByDenomRequest): Promise<_201.QueryPoolResponse>;
                pools(request?: _201.QueryPoolsRequest): Promise<_201.QueryPoolsResponse>;
            };
            QueryPoolByIdRequest: {
                typeUrl: string;
                encode(message: _201.QueryPoolByIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryPoolByIdRequest;
                fromPartial(object: Partial<_201.QueryPoolByIdRequest>): _201.QueryPoolByIdRequest;
                fromAmino(object: _201.QueryPoolByIdRequestAmino): _201.QueryPoolByIdRequest;
                toAmino(message: _201.QueryPoolByIdRequest): _201.QueryPoolByIdRequestAmino;
                fromAminoMsg(object: _201.QueryPoolByIdRequestAminoMsg): _201.QueryPoolByIdRequest;
                fromProtoMsg(message: _201.QueryPoolByIdRequestProtoMsg): _201.QueryPoolByIdRequest;
                toProto(message: _201.QueryPoolByIdRequest): Uint8Array;
                toProtoMsg(message: _201.QueryPoolByIdRequest): _201.QueryPoolByIdRequestProtoMsg;
            };
            QueryPoolByDenomRequest: {
                typeUrl: string;
                encode(message: _201.QueryPoolByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryPoolByDenomRequest;
                fromPartial(object: Partial<_201.QueryPoolByDenomRequest>): _201.QueryPoolByDenomRequest;
                fromAmino(object: _201.QueryPoolByDenomRequestAmino): _201.QueryPoolByDenomRequest;
                toAmino(message: _201.QueryPoolByDenomRequest): _201.QueryPoolByDenomRequestAmino;
                fromAminoMsg(object: _201.QueryPoolByDenomRequestAminoMsg): _201.QueryPoolByDenomRequest;
                fromProtoMsg(message: _201.QueryPoolByDenomRequestProtoMsg): _201.QueryPoolByDenomRequest;
                toProto(message: _201.QueryPoolByDenomRequest): Uint8Array;
                toProtoMsg(message: _201.QueryPoolByDenomRequest): _201.QueryPoolByDenomRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _201.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryPoolResponse;
                fromPartial(object: Partial<_201.QueryPoolResponse>): _201.QueryPoolResponse;
                fromAmino(object: _201.QueryPoolResponseAmino): _201.QueryPoolResponse;
                toAmino(message: _201.QueryPoolResponse): _201.QueryPoolResponseAmino;
                fromAminoMsg(object: _201.QueryPoolResponseAminoMsg): _201.QueryPoolResponse;
                fromProtoMsg(message: _201.QueryPoolResponseProtoMsg): _201.QueryPoolResponse;
                toProto(message: _201.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _201.QueryPoolResponse): _201.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _201.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryPoolsRequest;
                fromPartial(object: Partial<_201.QueryPoolsRequest>): _201.QueryPoolsRequest;
                fromAmino(object: _201.QueryPoolsRequestAmino): _201.QueryPoolsRequest;
                toAmino(message: _201.QueryPoolsRequest): _201.QueryPoolsRequestAmino;
                fromAminoMsg(object: _201.QueryPoolsRequestAminoMsg): _201.QueryPoolsRequest;
                fromProtoMsg(message: _201.QueryPoolsRequestProtoMsg): _201.QueryPoolsRequest;
                toProto(message: _201.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _201.QueryPoolsRequest): _201.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _201.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _201.QueryPoolsResponse;
                fromPartial(object: Partial<_201.QueryPoolsResponse>): _201.QueryPoolsResponse;
                fromAmino(object: _201.QueryPoolsResponseAmino): _201.QueryPoolsResponse;
                toAmino(message: _201.QueryPoolsResponse): _201.QueryPoolsResponseAmino;
                fromAminoMsg(object: _201.QueryPoolsResponseAminoMsg): _201.QueryPoolsResponse;
                fromProtoMsg(message: _201.QueryPoolsResponseProtoMsg): _201.QueryPoolsResponse;
                toProto(message: _201.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _201.QueryPoolsResponse): _201.QueryPoolsResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _200.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _200.Pool;
                fromPartial(object: Partial<_200.Pool>): _200.Pool;
                fromAmino(object: _200.PoolAmino): _200.Pool;
                toAmino(message: _200.Pool): _200.PoolAmino;
                fromAminoMsg(object: _200.PoolAminoMsg): _200.Pool;
                fromProtoMsg(message: _200.PoolProtoMsg): _200.Pool;
                toProto(message: _200.Pool): Uint8Array;
                toProtoMsg(message: _200.Pool): _200.PoolProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _199.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.GenesisState;
                fromPartial(object: Partial<_199.GenesisState>): _199.GenesisState;
                fromAmino(object: _199.GenesisStateAmino): _199.GenesisState;
                toAmino(message: _199.GenesisState): _199.GenesisStateAmino;
                fromAminoMsg(object: _199.GenesisStateAminoMsg): _199.GenesisState;
                fromProtoMsg(message: _199.GenesisStateProtoMsg): _199.GenesisState;
                toProto(message: _199.GenesisState): Uint8Array;
                toProtoMsg(message: _199.GenesisState): _199.GenesisStateProtoMsg;
            };
        };
    }
    namespace restaking {
        const v1: {
            MsgClientImpl: typeof _359.MsgClientImpl;
            QueryClientImpl: typeof _353.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                operatorJoinedServices(request: _206.QueryOperatorJoinedServicesRequest): Promise<_206.QueryOperatorJoinedServicesResponse>;
                serviceAllowedOperators(request: _206.QueryServiceAllowedOperatorsRequest): Promise<_206.QueryServiceAllowedOperatorsResponse>;
                serviceSecuringPools(request: _206.QueryServiceSecuringPoolsRequest): Promise<_206.QueryServiceSecuringPoolsResponse>;
                serviceOperators(request: _206.QueryServiceOperatorsRequest): Promise<_206.QueryServiceOperatorsResponse>;
                poolDelegations(request: _206.QueryPoolDelegationsRequest): Promise<_206.QueryPoolDelegationsResponse>;
                poolDelegation(request: _206.QueryPoolDelegationRequest): Promise<_206.QueryPoolDelegationResponse>;
                poolUnbondingDelegations(request: _206.QueryPoolUnbondingDelegationsRequest): Promise<_206.QueryPoolUnbondingDelegationsResponse>;
                poolUnbondingDelegation(request: _206.QueryPoolUnbondingDelegationRequest): Promise<_206.QueryPoolUnbondingDelegationResponse>;
                operatorDelegations(request: _206.QueryOperatorDelegationsRequest): Promise<_206.QueryOperatorDelegationsResponse>;
                operatorDelegation(request: _206.QueryOperatorDelegationRequest): Promise<_206.QueryOperatorDelegationResponse>;
                operatorUnbondingDelegations(request: _206.QueryOperatorUnbondingDelegationsRequest): Promise<_206.QueryOperatorUnbondingDelegationsResponse>;
                operatorUnbondingDelegation(request: _206.QueryOperatorUnbondingDelegationRequest): Promise<_206.QueryOperatorUnbondingDelegationResponse>;
                serviceDelegations(request: _206.QueryServiceDelegationsRequest): Promise<_206.QueryServiceDelegationsResponse>;
                serviceDelegation(request: _206.QueryServiceDelegationRequest): Promise<_206.QueryServiceDelegationResponse>;
                serviceUnbondingDelegations(request: _206.QueryServiceUnbondingDelegationsRequest): Promise<_206.QueryServiceUnbondingDelegationsResponse>;
                serviceUnbondingDelegation(request: _206.QueryServiceUnbondingDelegationRequest): Promise<_206.QueryServiceUnbondingDelegationResponse>;
                delegatorPoolDelegations(request: _206.QueryDelegatorPoolDelegationsRequest): Promise<_206.QueryDelegatorPoolDelegationsResponse>;
                delegatorPoolUnbondingDelegations(request: _206.QueryDelegatorPoolUnbondingDelegationsRequest): Promise<_206.QueryDelegatorPoolUnbondingDelegationsResponse>;
                delegatorOperatorDelegations(request: _206.QueryDelegatorOperatorDelegationsRequest): Promise<_206.QueryDelegatorOperatorDelegationsResponse>;
                delegatorOperatorUnbondingDelegations(request: _206.QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<_206.QueryDelegatorOperatorUnbondingDelegationsResponse>;
                delegatorServiceDelegations(request: _206.QueryDelegatorServiceDelegationsRequest): Promise<_206.QueryDelegatorServiceDelegationsResponse>;
                delegatorServiceUnbondingDelegations(request: _206.QueryDelegatorServiceUnbondingDelegationsRequest): Promise<_206.QueryDelegatorServiceUnbondingDelegationsResponse>;
                delegatorPools(request: _206.QueryDelegatorPoolsRequest): Promise<_206.QueryDelegatorPoolsResponse>;
                delegatorPool(request: _206.QueryDelegatorPoolRequest): Promise<_206.QueryDelegatorPoolResponse>;
                delegatorOperators(request: _206.QueryDelegatorOperatorsRequest): Promise<_206.QueryDelegatorOperatorsResponse>;
                delegatorOperator(request: _206.QueryDelegatorOperatorRequest): Promise<_206.QueryDelegatorOperatorResponse>;
                delegatorServices(request: _206.QueryDelegatorServicesRequest): Promise<_206.QueryDelegatorServicesResponse>;
                delegatorService(request: _206.QueryDelegatorServiceRequest): Promise<_206.QueryDelegatorServiceResponse>;
                userPreferences(request: _206.QueryUserPreferencesRequest): Promise<_206.QueryUserPreferencesResponse>;
                params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinService(value: _203.MsgJoinService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveService(value: _203.MsgLeaveService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addOperatorToAllowList(value: _203.MsgAddOperatorToAllowList): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeOperatorFromAllowlist(value: _203.MsgRemoveOperatorFromAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrowPoolSecurity(value: _203.MsgBorrowPoolSecurity): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    ceasePoolSecurityBorrow(value: _203.MsgCeasePoolSecurityBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegatePool(value: _203.MsgDelegatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateOperator(value: _203.MsgDelegateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateService(value: _203.MsgDelegateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _203.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegatePool(value: _203.MsgUndelegatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateOperator(value: _203.MsgUndelegateOperator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateService(value: _203.MsgUndelegateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUserPreferences(value: _203.MsgSetUserPreferences): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinService(value: _203.MsgJoinService): {
                        typeUrl: string;
                        value: _203.MsgJoinService;
                    };
                    leaveService(value: _203.MsgLeaveService): {
                        typeUrl: string;
                        value: _203.MsgLeaveService;
                    };
                    addOperatorToAllowList(value: _203.MsgAddOperatorToAllowList): {
                        typeUrl: string;
                        value: _203.MsgAddOperatorToAllowList;
                    };
                    removeOperatorFromAllowlist(value: _203.MsgRemoveOperatorFromAllowlist): {
                        typeUrl: string;
                        value: _203.MsgRemoveOperatorFromAllowlist;
                    };
                    borrowPoolSecurity(value: _203.MsgBorrowPoolSecurity): {
                        typeUrl: string;
                        value: _203.MsgBorrowPoolSecurity;
                    };
                    ceasePoolSecurityBorrow(value: _203.MsgCeasePoolSecurityBorrow): {
                        typeUrl: string;
                        value: _203.MsgCeasePoolSecurityBorrow;
                    };
                    delegatePool(value: _203.MsgDelegatePool): {
                        typeUrl: string;
                        value: _203.MsgDelegatePool;
                    };
                    delegateOperator(value: _203.MsgDelegateOperator): {
                        typeUrl: string;
                        value: _203.MsgDelegateOperator;
                    };
                    delegateService(value: _203.MsgDelegateService): {
                        typeUrl: string;
                        value: _203.MsgDelegateService;
                    };
                    updateParams(value: _203.MsgUpdateParams): {
                        typeUrl: string;
                        value: _203.MsgUpdateParams;
                    };
                    undelegatePool(value: _203.MsgUndelegatePool): {
                        typeUrl: string;
                        value: _203.MsgUndelegatePool;
                    };
                    undelegateOperator(value: _203.MsgUndelegateOperator): {
                        typeUrl: string;
                        value: _203.MsgUndelegateOperator;
                    };
                    undelegateService(value: _203.MsgUndelegateService): {
                        typeUrl: string;
                        value: _203.MsgUndelegateService;
                    };
                    setUserPreferences(value: _203.MsgSetUserPreferences): {
                        typeUrl: string;
                        value: _203.MsgSetUserPreferences;
                    };
                };
                fromPartial: {
                    joinService(value: _203.MsgJoinService): {
                        typeUrl: string;
                        value: _203.MsgJoinService;
                    };
                    leaveService(value: _203.MsgLeaveService): {
                        typeUrl: string;
                        value: _203.MsgLeaveService;
                    };
                    addOperatorToAllowList(value: _203.MsgAddOperatorToAllowList): {
                        typeUrl: string;
                        value: _203.MsgAddOperatorToAllowList;
                    };
                    removeOperatorFromAllowlist(value: _203.MsgRemoveOperatorFromAllowlist): {
                        typeUrl: string;
                        value: _203.MsgRemoveOperatorFromAllowlist;
                    };
                    borrowPoolSecurity(value: _203.MsgBorrowPoolSecurity): {
                        typeUrl: string;
                        value: _203.MsgBorrowPoolSecurity;
                    };
                    ceasePoolSecurityBorrow(value: _203.MsgCeasePoolSecurityBorrow): {
                        typeUrl: string;
                        value: _203.MsgCeasePoolSecurityBorrow;
                    };
                    delegatePool(value: _203.MsgDelegatePool): {
                        typeUrl: string;
                        value: _203.MsgDelegatePool;
                    };
                    delegateOperator(value: _203.MsgDelegateOperator): {
                        typeUrl: string;
                        value: _203.MsgDelegateOperator;
                    };
                    delegateService(value: _203.MsgDelegateService): {
                        typeUrl: string;
                        value: _203.MsgDelegateService;
                    };
                    updateParams(value: _203.MsgUpdateParams): {
                        typeUrl: string;
                        value: _203.MsgUpdateParams;
                    };
                    undelegatePool(value: _203.MsgUndelegatePool): {
                        typeUrl: string;
                        value: _203.MsgUndelegatePool;
                    };
                    undelegateOperator(value: _203.MsgUndelegateOperator): {
                        typeUrl: string;
                        value: _203.MsgUndelegateOperator;
                    };
                    undelegateService(value: _203.MsgUndelegateService): {
                        typeUrl: string;
                        value: _203.MsgUndelegateService;
                    };
                    setUserPreferences(value: _203.MsgSetUserPreferences): {
                        typeUrl: string;
                        value: _203.MsgSetUserPreferences;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.restaking.v1.MsgJoinService": {
                    aminoType: string;
                    toAmino: (message: _203.MsgJoinService) => _203.MsgJoinServiceAmino;
                    fromAmino: (object: _203.MsgJoinServiceAmino) => _203.MsgJoinService;
                };
                "/milkyway.restaking.v1.MsgLeaveService": {
                    aminoType: string;
                    toAmino: (message: _203.MsgLeaveService) => _203.MsgLeaveServiceAmino;
                    fromAmino: (object: _203.MsgLeaveServiceAmino) => _203.MsgLeaveService;
                };
                "/milkyway.restaking.v1.MsgAddOperatorToAllowList": {
                    aminoType: string;
                    toAmino: (message: _203.MsgAddOperatorToAllowList) => _203.MsgAddOperatorToAllowListAmino;
                    fromAmino: (object: _203.MsgAddOperatorToAllowListAmino) => _203.MsgAddOperatorToAllowList;
                };
                "/milkyway.restaking.v1.MsgRemoveOperatorFromAllowlist": {
                    aminoType: string;
                    toAmino: (message: _203.MsgRemoveOperatorFromAllowlist) => _203.MsgRemoveOperatorFromAllowlistAmino;
                    fromAmino: (object: _203.MsgRemoveOperatorFromAllowlistAmino) => _203.MsgRemoveOperatorFromAllowlist;
                };
                "/milkyway.restaking.v1.MsgBorrowPoolSecurity": {
                    aminoType: string;
                    toAmino: (message: _203.MsgBorrowPoolSecurity) => _203.MsgBorrowPoolSecurityAmino;
                    fromAmino: (object: _203.MsgBorrowPoolSecurityAmino) => _203.MsgBorrowPoolSecurity;
                };
                "/milkyway.restaking.v1.MsgCeasePoolSecurityBorrow": {
                    aminoType: string;
                    toAmino: (message: _203.MsgCeasePoolSecurityBorrow) => _203.MsgCeasePoolSecurityBorrowAmino;
                    fromAmino: (object: _203.MsgCeasePoolSecurityBorrowAmino) => _203.MsgCeasePoolSecurityBorrow;
                };
                "/milkyway.restaking.v1.MsgDelegatePool": {
                    aminoType: string;
                    toAmino: (message: _203.MsgDelegatePool) => _203.MsgDelegatePoolAmino;
                    fromAmino: (object: _203.MsgDelegatePoolAmino) => _203.MsgDelegatePool;
                };
                "/milkyway.restaking.v1.MsgDelegateOperator": {
                    aminoType: string;
                    toAmino: (message: _203.MsgDelegateOperator) => _203.MsgDelegateOperatorAmino;
                    fromAmino: (object: _203.MsgDelegateOperatorAmino) => _203.MsgDelegateOperator;
                };
                "/milkyway.restaking.v1.MsgDelegateService": {
                    aminoType: string;
                    toAmino: (message: _203.MsgDelegateService) => _203.MsgDelegateServiceAmino;
                    fromAmino: (object: _203.MsgDelegateServiceAmino) => _203.MsgDelegateService;
                };
                "/milkyway.restaking.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _203.MsgUpdateParams) => _203.MsgUpdateParamsAmino;
                    fromAmino: (object: _203.MsgUpdateParamsAmino) => _203.MsgUpdateParams;
                };
                "/milkyway.restaking.v1.MsgUndelegatePool": {
                    aminoType: string;
                    toAmino: (message: _203.MsgUndelegatePool) => _203.MsgUndelegatePoolAmino;
                    fromAmino: (object: _203.MsgUndelegatePoolAmino) => _203.MsgUndelegatePool;
                };
                "/milkyway.restaking.v1.MsgUndelegateOperator": {
                    aminoType: string;
                    toAmino: (message: _203.MsgUndelegateOperator) => _203.MsgUndelegateOperatorAmino;
                    fromAmino: (object: _203.MsgUndelegateOperatorAmino) => _203.MsgUndelegateOperator;
                };
                "/milkyway.restaking.v1.MsgUndelegateService": {
                    aminoType: string;
                    toAmino: (message: _203.MsgUndelegateService) => _203.MsgUndelegateServiceAmino;
                    fromAmino: (object: _203.MsgUndelegateServiceAmino) => _203.MsgUndelegateService;
                };
                "/milkyway.restaking.v1.MsgSetUserPreferences": {
                    aminoType: string;
                    toAmino: (message: _203.MsgSetUserPreferences) => _203.MsgSetUserPreferencesAmino;
                    fromAmino: (object: _203.MsgSetUserPreferencesAmino) => _203.MsgSetUserPreferences;
                };
            };
            QueryOperatorJoinedServicesRequest: {
                typeUrl: string;
                encode(message: _206.QueryOperatorJoinedServicesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorJoinedServicesRequest;
                fromPartial(object: Partial<_206.QueryOperatorJoinedServicesRequest>): _206.QueryOperatorJoinedServicesRequest;
                fromAmino(object: _206.QueryOperatorJoinedServicesRequestAmino): _206.QueryOperatorJoinedServicesRequest;
                toAmino(message: _206.QueryOperatorJoinedServicesRequest): _206.QueryOperatorJoinedServicesRequestAmino;
                fromAminoMsg(object: _206.QueryOperatorJoinedServicesRequestAminoMsg): _206.QueryOperatorJoinedServicesRequest;
                fromProtoMsg(message: _206.QueryOperatorJoinedServicesRequestProtoMsg): _206.QueryOperatorJoinedServicesRequest;
                toProto(message: _206.QueryOperatorJoinedServicesRequest): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorJoinedServicesRequest): _206.QueryOperatorJoinedServicesRequestProtoMsg;
            };
            QueryOperatorJoinedServicesResponse: {
                typeUrl: string;
                encode(message: _206.QueryOperatorJoinedServicesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorJoinedServicesResponse;
                fromPartial(object: Partial<_206.QueryOperatorJoinedServicesResponse>): _206.QueryOperatorJoinedServicesResponse;
                fromAmino(object: _206.QueryOperatorJoinedServicesResponseAmino): _206.QueryOperatorJoinedServicesResponse;
                toAmino(message: _206.QueryOperatorJoinedServicesResponse): _206.QueryOperatorJoinedServicesResponseAmino;
                fromAminoMsg(object: _206.QueryOperatorJoinedServicesResponseAminoMsg): _206.QueryOperatorJoinedServicesResponse;
                fromProtoMsg(message: _206.QueryOperatorJoinedServicesResponseProtoMsg): _206.QueryOperatorJoinedServicesResponse;
                toProto(message: _206.QueryOperatorJoinedServicesResponse): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorJoinedServicesResponse): _206.QueryOperatorJoinedServicesResponseProtoMsg;
            };
            QueryServiceAllowedOperatorsRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceAllowedOperatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceAllowedOperatorsRequest;
                fromPartial(object: Partial<_206.QueryServiceAllowedOperatorsRequest>): _206.QueryServiceAllowedOperatorsRequest;
                fromAmino(object: _206.QueryServiceAllowedOperatorsRequestAmino): _206.QueryServiceAllowedOperatorsRequest;
                toAmino(message: _206.QueryServiceAllowedOperatorsRequest): _206.QueryServiceAllowedOperatorsRequestAmino;
                fromAminoMsg(object: _206.QueryServiceAllowedOperatorsRequestAminoMsg): _206.QueryServiceAllowedOperatorsRequest;
                fromProtoMsg(message: _206.QueryServiceAllowedOperatorsRequestProtoMsg): _206.QueryServiceAllowedOperatorsRequest;
                toProto(message: _206.QueryServiceAllowedOperatorsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceAllowedOperatorsRequest): _206.QueryServiceAllowedOperatorsRequestProtoMsg;
            };
            QueryServiceAllowedOperatorsResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceAllowedOperatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceAllowedOperatorsResponse;
                fromPartial(object: Partial<_206.QueryServiceAllowedOperatorsResponse>): _206.QueryServiceAllowedOperatorsResponse;
                fromAmino(object: _206.QueryServiceAllowedOperatorsResponseAmino): _206.QueryServiceAllowedOperatorsResponse;
                toAmino(message: _206.QueryServiceAllowedOperatorsResponse): _206.QueryServiceAllowedOperatorsResponseAmino;
                fromAminoMsg(object: _206.QueryServiceAllowedOperatorsResponseAminoMsg): _206.QueryServiceAllowedOperatorsResponse;
                fromProtoMsg(message: _206.QueryServiceAllowedOperatorsResponseProtoMsg): _206.QueryServiceAllowedOperatorsResponse;
                toProto(message: _206.QueryServiceAllowedOperatorsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceAllowedOperatorsResponse): _206.QueryServiceAllowedOperatorsResponseProtoMsg;
            };
            QueryServiceSecuringPoolsRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceSecuringPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceSecuringPoolsRequest;
                fromPartial(object: Partial<_206.QueryServiceSecuringPoolsRequest>): _206.QueryServiceSecuringPoolsRequest;
                fromAmino(object: _206.QueryServiceSecuringPoolsRequestAmino): _206.QueryServiceSecuringPoolsRequest;
                toAmino(message: _206.QueryServiceSecuringPoolsRequest): _206.QueryServiceSecuringPoolsRequestAmino;
                fromAminoMsg(object: _206.QueryServiceSecuringPoolsRequestAminoMsg): _206.QueryServiceSecuringPoolsRequest;
                fromProtoMsg(message: _206.QueryServiceSecuringPoolsRequestProtoMsg): _206.QueryServiceSecuringPoolsRequest;
                toProto(message: _206.QueryServiceSecuringPoolsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceSecuringPoolsRequest): _206.QueryServiceSecuringPoolsRequestProtoMsg;
            };
            QueryServiceSecuringPoolsResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceSecuringPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceSecuringPoolsResponse;
                fromPartial(object: Partial<_206.QueryServiceSecuringPoolsResponse>): _206.QueryServiceSecuringPoolsResponse;
                fromAmino(object: _206.QueryServiceSecuringPoolsResponseAmino): _206.QueryServiceSecuringPoolsResponse;
                toAmino(message: _206.QueryServiceSecuringPoolsResponse): _206.QueryServiceSecuringPoolsResponseAmino;
                fromAminoMsg(object: _206.QueryServiceSecuringPoolsResponseAminoMsg): _206.QueryServiceSecuringPoolsResponse;
                fromProtoMsg(message: _206.QueryServiceSecuringPoolsResponseProtoMsg): _206.QueryServiceSecuringPoolsResponse;
                toProto(message: _206.QueryServiceSecuringPoolsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceSecuringPoolsResponse): _206.QueryServiceSecuringPoolsResponseProtoMsg;
            };
            QueryServiceOperatorsRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceOperatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceOperatorsRequest;
                fromPartial(object: Partial<_206.QueryServiceOperatorsRequest>): _206.QueryServiceOperatorsRequest;
                fromAmino(object: _206.QueryServiceOperatorsRequestAmino): _206.QueryServiceOperatorsRequest;
                toAmino(message: _206.QueryServiceOperatorsRequest): _206.QueryServiceOperatorsRequestAmino;
                fromAminoMsg(object: _206.QueryServiceOperatorsRequestAminoMsg): _206.QueryServiceOperatorsRequest;
                fromProtoMsg(message: _206.QueryServiceOperatorsRequestProtoMsg): _206.QueryServiceOperatorsRequest;
                toProto(message: _206.QueryServiceOperatorsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceOperatorsRequest): _206.QueryServiceOperatorsRequestProtoMsg;
            };
            QueryServiceOperatorsResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceOperatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceOperatorsResponse;
                fromPartial(object: Partial<_206.QueryServiceOperatorsResponse>): _206.QueryServiceOperatorsResponse;
                fromAmino(object: _206.QueryServiceOperatorsResponseAmino): _206.QueryServiceOperatorsResponse;
                toAmino(message: _206.QueryServiceOperatorsResponse): _206.QueryServiceOperatorsResponseAmino;
                fromAminoMsg(object: _206.QueryServiceOperatorsResponseAminoMsg): _206.QueryServiceOperatorsResponse;
                fromProtoMsg(message: _206.QueryServiceOperatorsResponseProtoMsg): _206.QueryServiceOperatorsResponse;
                toProto(message: _206.QueryServiceOperatorsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceOperatorsResponse): _206.QueryServiceOperatorsResponseProtoMsg;
            };
            QueryPoolDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryPoolDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolDelegationsRequest;
                fromPartial(object: Partial<_206.QueryPoolDelegationsRequest>): _206.QueryPoolDelegationsRequest;
                fromAmino(object: _206.QueryPoolDelegationsRequestAmino): _206.QueryPoolDelegationsRequest;
                toAmino(message: _206.QueryPoolDelegationsRequest): _206.QueryPoolDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryPoolDelegationsRequestAminoMsg): _206.QueryPoolDelegationsRequest;
                fromProtoMsg(message: _206.QueryPoolDelegationsRequestProtoMsg): _206.QueryPoolDelegationsRequest;
                toProto(message: _206.QueryPoolDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryPoolDelegationsRequest): _206.QueryPoolDelegationsRequestProtoMsg;
            };
            QueryPoolDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryPoolDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolDelegationsResponse;
                fromPartial(object: Partial<_206.QueryPoolDelegationsResponse>): _206.QueryPoolDelegationsResponse;
                fromAmino(object: _206.QueryPoolDelegationsResponseAmino): _206.QueryPoolDelegationsResponse;
                toAmino(message: _206.QueryPoolDelegationsResponse): _206.QueryPoolDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryPoolDelegationsResponseAminoMsg): _206.QueryPoolDelegationsResponse;
                fromProtoMsg(message: _206.QueryPoolDelegationsResponseProtoMsg): _206.QueryPoolDelegationsResponse;
                toProto(message: _206.QueryPoolDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryPoolDelegationsResponse): _206.QueryPoolDelegationsResponseProtoMsg;
            };
            QueryPoolDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryPoolDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolDelegationRequest;
                fromPartial(object: Partial<_206.QueryPoolDelegationRequest>): _206.QueryPoolDelegationRequest;
                fromAmino(object: _206.QueryPoolDelegationRequestAmino): _206.QueryPoolDelegationRequest;
                toAmino(message: _206.QueryPoolDelegationRequest): _206.QueryPoolDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryPoolDelegationRequestAminoMsg): _206.QueryPoolDelegationRequest;
                fromProtoMsg(message: _206.QueryPoolDelegationRequestProtoMsg): _206.QueryPoolDelegationRequest;
                toProto(message: _206.QueryPoolDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryPoolDelegationRequest): _206.QueryPoolDelegationRequestProtoMsg;
            };
            QueryPoolDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryPoolDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolDelegationResponse;
                fromPartial(object: Partial<_206.QueryPoolDelegationResponse>): _206.QueryPoolDelegationResponse;
                fromAmino(object: _206.QueryPoolDelegationResponseAmino): _206.QueryPoolDelegationResponse;
                toAmino(message: _206.QueryPoolDelegationResponse): _206.QueryPoolDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryPoolDelegationResponseAminoMsg): _206.QueryPoolDelegationResponse;
                fromProtoMsg(message: _206.QueryPoolDelegationResponseProtoMsg): _206.QueryPoolDelegationResponse;
                toProto(message: _206.QueryPoolDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryPoolDelegationResponse): _206.QueryPoolDelegationResponseProtoMsg;
            };
            QueryPoolUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryPoolUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryPoolUnbondingDelegationsRequest>): _206.QueryPoolUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryPoolUnbondingDelegationsRequestAmino): _206.QueryPoolUnbondingDelegationsRequest;
                toAmino(message: _206.QueryPoolUnbondingDelegationsRequest): _206.QueryPoolUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryPoolUnbondingDelegationsRequestAminoMsg): _206.QueryPoolUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryPoolUnbondingDelegationsRequestProtoMsg): _206.QueryPoolUnbondingDelegationsRequest;
                toProto(message: _206.QueryPoolUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryPoolUnbondingDelegationsRequest): _206.QueryPoolUnbondingDelegationsRequestProtoMsg;
            };
            QueryPoolUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryPoolUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryPoolUnbondingDelegationsResponse>): _206.QueryPoolUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryPoolUnbondingDelegationsResponseAmino): _206.QueryPoolUnbondingDelegationsResponse;
                toAmino(message: _206.QueryPoolUnbondingDelegationsResponse): _206.QueryPoolUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryPoolUnbondingDelegationsResponseAminoMsg): _206.QueryPoolUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryPoolUnbondingDelegationsResponseProtoMsg): _206.QueryPoolUnbondingDelegationsResponse;
                toProto(message: _206.QueryPoolUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryPoolUnbondingDelegationsResponse): _206.QueryPoolUnbondingDelegationsResponseProtoMsg;
            };
            QueryPoolUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryPoolUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolUnbondingDelegationRequest;
                fromPartial(object: Partial<_206.QueryPoolUnbondingDelegationRequest>): _206.QueryPoolUnbondingDelegationRequest;
                fromAmino(object: _206.QueryPoolUnbondingDelegationRequestAmino): _206.QueryPoolUnbondingDelegationRequest;
                toAmino(message: _206.QueryPoolUnbondingDelegationRequest): _206.QueryPoolUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryPoolUnbondingDelegationRequestAminoMsg): _206.QueryPoolUnbondingDelegationRequest;
                fromProtoMsg(message: _206.QueryPoolUnbondingDelegationRequestProtoMsg): _206.QueryPoolUnbondingDelegationRequest;
                toProto(message: _206.QueryPoolUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryPoolUnbondingDelegationRequest): _206.QueryPoolUnbondingDelegationRequestProtoMsg;
            };
            QueryPoolUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryPoolUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryPoolUnbondingDelegationResponse;
                fromPartial(object: Partial<_206.QueryPoolUnbondingDelegationResponse>): _206.QueryPoolUnbondingDelegationResponse;
                fromAmino(object: _206.QueryPoolUnbondingDelegationResponseAmino): _206.QueryPoolUnbondingDelegationResponse;
                toAmino(message: _206.QueryPoolUnbondingDelegationResponse): _206.QueryPoolUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryPoolUnbondingDelegationResponseAminoMsg): _206.QueryPoolUnbondingDelegationResponse;
                fromProtoMsg(message: _206.QueryPoolUnbondingDelegationResponseProtoMsg): _206.QueryPoolUnbondingDelegationResponse;
                toProto(message: _206.QueryPoolUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryPoolUnbondingDelegationResponse): _206.QueryPoolUnbondingDelegationResponseProtoMsg;
            };
            QueryOperatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryOperatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorDelegationsRequest;
                fromPartial(object: Partial<_206.QueryOperatorDelegationsRequest>): _206.QueryOperatorDelegationsRequest;
                fromAmino(object: _206.QueryOperatorDelegationsRequestAmino): _206.QueryOperatorDelegationsRequest;
                toAmino(message: _206.QueryOperatorDelegationsRequest): _206.QueryOperatorDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryOperatorDelegationsRequestAminoMsg): _206.QueryOperatorDelegationsRequest;
                fromProtoMsg(message: _206.QueryOperatorDelegationsRequestProtoMsg): _206.QueryOperatorDelegationsRequest;
                toProto(message: _206.QueryOperatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorDelegationsRequest): _206.QueryOperatorDelegationsRequestProtoMsg;
            };
            QueryOperatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryOperatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorDelegationsResponse;
                fromPartial(object: Partial<_206.QueryOperatorDelegationsResponse>): _206.QueryOperatorDelegationsResponse;
                fromAmino(object: _206.QueryOperatorDelegationsResponseAmino): _206.QueryOperatorDelegationsResponse;
                toAmino(message: _206.QueryOperatorDelegationsResponse): _206.QueryOperatorDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryOperatorDelegationsResponseAminoMsg): _206.QueryOperatorDelegationsResponse;
                fromProtoMsg(message: _206.QueryOperatorDelegationsResponseProtoMsg): _206.QueryOperatorDelegationsResponse;
                toProto(message: _206.QueryOperatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorDelegationsResponse): _206.QueryOperatorDelegationsResponseProtoMsg;
            };
            QueryOperatorDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryOperatorDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorDelegationRequest;
                fromPartial(object: Partial<_206.QueryOperatorDelegationRequest>): _206.QueryOperatorDelegationRequest;
                fromAmino(object: _206.QueryOperatorDelegationRequestAmino): _206.QueryOperatorDelegationRequest;
                toAmino(message: _206.QueryOperatorDelegationRequest): _206.QueryOperatorDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryOperatorDelegationRequestAminoMsg): _206.QueryOperatorDelegationRequest;
                fromProtoMsg(message: _206.QueryOperatorDelegationRequestProtoMsg): _206.QueryOperatorDelegationRequest;
                toProto(message: _206.QueryOperatorDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorDelegationRequest): _206.QueryOperatorDelegationRequestProtoMsg;
            };
            QueryOperatorDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryOperatorDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorDelegationResponse;
                fromPartial(object: Partial<_206.QueryOperatorDelegationResponse>): _206.QueryOperatorDelegationResponse;
                fromAmino(object: _206.QueryOperatorDelegationResponseAmino): _206.QueryOperatorDelegationResponse;
                toAmino(message: _206.QueryOperatorDelegationResponse): _206.QueryOperatorDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryOperatorDelegationResponseAminoMsg): _206.QueryOperatorDelegationResponse;
                fromProtoMsg(message: _206.QueryOperatorDelegationResponseProtoMsg): _206.QueryOperatorDelegationResponse;
                toProto(message: _206.QueryOperatorDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorDelegationResponse): _206.QueryOperatorDelegationResponseProtoMsg;
            };
            QueryOperatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryOperatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryOperatorUnbondingDelegationsRequest>): _206.QueryOperatorUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryOperatorUnbondingDelegationsRequestAmino): _206.QueryOperatorUnbondingDelegationsRequest;
                toAmino(message: _206.QueryOperatorUnbondingDelegationsRequest): _206.QueryOperatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryOperatorUnbondingDelegationsRequestAminoMsg): _206.QueryOperatorUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryOperatorUnbondingDelegationsRequestProtoMsg): _206.QueryOperatorUnbondingDelegationsRequest;
                toProto(message: _206.QueryOperatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorUnbondingDelegationsRequest): _206.QueryOperatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryOperatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryOperatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryOperatorUnbondingDelegationsResponse>): _206.QueryOperatorUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryOperatorUnbondingDelegationsResponseAmino): _206.QueryOperatorUnbondingDelegationsResponse;
                toAmino(message: _206.QueryOperatorUnbondingDelegationsResponse): _206.QueryOperatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryOperatorUnbondingDelegationsResponseAminoMsg): _206.QueryOperatorUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryOperatorUnbondingDelegationsResponseProtoMsg): _206.QueryOperatorUnbondingDelegationsResponse;
                toProto(message: _206.QueryOperatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorUnbondingDelegationsResponse): _206.QueryOperatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryOperatorUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryOperatorUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorUnbondingDelegationRequest;
                fromPartial(object: Partial<_206.QueryOperatorUnbondingDelegationRequest>): _206.QueryOperatorUnbondingDelegationRequest;
                fromAmino(object: _206.QueryOperatorUnbondingDelegationRequestAmino): _206.QueryOperatorUnbondingDelegationRequest;
                toAmino(message: _206.QueryOperatorUnbondingDelegationRequest): _206.QueryOperatorUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryOperatorUnbondingDelegationRequestAminoMsg): _206.QueryOperatorUnbondingDelegationRequest;
                fromProtoMsg(message: _206.QueryOperatorUnbondingDelegationRequestProtoMsg): _206.QueryOperatorUnbondingDelegationRequest;
                toProto(message: _206.QueryOperatorUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorUnbondingDelegationRequest): _206.QueryOperatorUnbondingDelegationRequestProtoMsg;
            };
            QueryOperatorUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryOperatorUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryOperatorUnbondingDelegationResponse;
                fromPartial(object: Partial<_206.QueryOperatorUnbondingDelegationResponse>): _206.QueryOperatorUnbondingDelegationResponse;
                fromAmino(object: _206.QueryOperatorUnbondingDelegationResponseAmino): _206.QueryOperatorUnbondingDelegationResponse;
                toAmino(message: _206.QueryOperatorUnbondingDelegationResponse): _206.QueryOperatorUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryOperatorUnbondingDelegationResponseAminoMsg): _206.QueryOperatorUnbondingDelegationResponse;
                fromProtoMsg(message: _206.QueryOperatorUnbondingDelegationResponseProtoMsg): _206.QueryOperatorUnbondingDelegationResponse;
                toProto(message: _206.QueryOperatorUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryOperatorUnbondingDelegationResponse): _206.QueryOperatorUnbondingDelegationResponseProtoMsg;
            };
            QueryServiceDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceDelegationsRequest;
                fromPartial(object: Partial<_206.QueryServiceDelegationsRequest>): _206.QueryServiceDelegationsRequest;
                fromAmino(object: _206.QueryServiceDelegationsRequestAmino): _206.QueryServiceDelegationsRequest;
                toAmino(message: _206.QueryServiceDelegationsRequest): _206.QueryServiceDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryServiceDelegationsRequestAminoMsg): _206.QueryServiceDelegationsRequest;
                fromProtoMsg(message: _206.QueryServiceDelegationsRequestProtoMsg): _206.QueryServiceDelegationsRequest;
                toProto(message: _206.QueryServiceDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceDelegationsRequest): _206.QueryServiceDelegationsRequestProtoMsg;
            };
            QueryServiceDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceDelegationsResponse;
                fromPartial(object: Partial<_206.QueryServiceDelegationsResponse>): _206.QueryServiceDelegationsResponse;
                fromAmino(object: _206.QueryServiceDelegationsResponseAmino): _206.QueryServiceDelegationsResponse;
                toAmino(message: _206.QueryServiceDelegationsResponse): _206.QueryServiceDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryServiceDelegationsResponseAminoMsg): _206.QueryServiceDelegationsResponse;
                fromProtoMsg(message: _206.QueryServiceDelegationsResponseProtoMsg): _206.QueryServiceDelegationsResponse;
                toProto(message: _206.QueryServiceDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceDelegationsResponse): _206.QueryServiceDelegationsResponseProtoMsg;
            };
            QueryServiceDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceDelegationRequest;
                fromPartial(object: Partial<_206.QueryServiceDelegationRequest>): _206.QueryServiceDelegationRequest;
                fromAmino(object: _206.QueryServiceDelegationRequestAmino): _206.QueryServiceDelegationRequest;
                toAmino(message: _206.QueryServiceDelegationRequest): _206.QueryServiceDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryServiceDelegationRequestAminoMsg): _206.QueryServiceDelegationRequest;
                fromProtoMsg(message: _206.QueryServiceDelegationRequestProtoMsg): _206.QueryServiceDelegationRequest;
                toProto(message: _206.QueryServiceDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceDelegationRequest): _206.QueryServiceDelegationRequestProtoMsg;
            };
            QueryServiceDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceDelegationResponse;
                fromPartial(object: Partial<_206.QueryServiceDelegationResponse>): _206.QueryServiceDelegationResponse;
                fromAmino(object: _206.QueryServiceDelegationResponseAmino): _206.QueryServiceDelegationResponse;
                toAmino(message: _206.QueryServiceDelegationResponse): _206.QueryServiceDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryServiceDelegationResponseAminoMsg): _206.QueryServiceDelegationResponse;
                fromProtoMsg(message: _206.QueryServiceDelegationResponseProtoMsg): _206.QueryServiceDelegationResponse;
                toProto(message: _206.QueryServiceDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceDelegationResponse): _206.QueryServiceDelegationResponseProtoMsg;
            };
            QueryServiceUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryServiceUnbondingDelegationsRequest>): _206.QueryServiceUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryServiceUnbondingDelegationsRequestAmino): _206.QueryServiceUnbondingDelegationsRequest;
                toAmino(message: _206.QueryServiceUnbondingDelegationsRequest): _206.QueryServiceUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryServiceUnbondingDelegationsRequestAminoMsg): _206.QueryServiceUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryServiceUnbondingDelegationsRequestProtoMsg): _206.QueryServiceUnbondingDelegationsRequest;
                toProto(message: _206.QueryServiceUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceUnbondingDelegationsRequest): _206.QueryServiceUnbondingDelegationsRequestProtoMsg;
            };
            QueryServiceUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryServiceUnbondingDelegationsResponse>): _206.QueryServiceUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryServiceUnbondingDelegationsResponseAmino): _206.QueryServiceUnbondingDelegationsResponse;
                toAmino(message: _206.QueryServiceUnbondingDelegationsResponse): _206.QueryServiceUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryServiceUnbondingDelegationsResponseAminoMsg): _206.QueryServiceUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryServiceUnbondingDelegationsResponseProtoMsg): _206.QueryServiceUnbondingDelegationsResponse;
                toProto(message: _206.QueryServiceUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceUnbondingDelegationsResponse): _206.QueryServiceUnbondingDelegationsResponseProtoMsg;
            };
            QueryServiceUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _206.QueryServiceUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceUnbondingDelegationRequest;
                fromPartial(object: Partial<_206.QueryServiceUnbondingDelegationRequest>): _206.QueryServiceUnbondingDelegationRequest;
                fromAmino(object: _206.QueryServiceUnbondingDelegationRequestAmino): _206.QueryServiceUnbondingDelegationRequest;
                toAmino(message: _206.QueryServiceUnbondingDelegationRequest): _206.QueryServiceUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _206.QueryServiceUnbondingDelegationRequestAminoMsg): _206.QueryServiceUnbondingDelegationRequest;
                fromProtoMsg(message: _206.QueryServiceUnbondingDelegationRequestProtoMsg): _206.QueryServiceUnbondingDelegationRequest;
                toProto(message: _206.QueryServiceUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _206.QueryServiceUnbondingDelegationRequest): _206.QueryServiceUnbondingDelegationRequestProtoMsg;
            };
            QueryServiceUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _206.QueryServiceUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryServiceUnbondingDelegationResponse;
                fromPartial(object: Partial<_206.QueryServiceUnbondingDelegationResponse>): _206.QueryServiceUnbondingDelegationResponse;
                fromAmino(object: _206.QueryServiceUnbondingDelegationResponseAmino): _206.QueryServiceUnbondingDelegationResponse;
                toAmino(message: _206.QueryServiceUnbondingDelegationResponse): _206.QueryServiceUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _206.QueryServiceUnbondingDelegationResponseAminoMsg): _206.QueryServiceUnbondingDelegationResponse;
                fromProtoMsg(message: _206.QueryServiceUnbondingDelegationResponseProtoMsg): _206.QueryServiceUnbondingDelegationResponse;
                toProto(message: _206.QueryServiceUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _206.QueryServiceUnbondingDelegationResponse): _206.QueryServiceUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorPoolDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorPoolDelegationsRequest>): _206.QueryDelegatorPoolDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorPoolDelegationsRequestAmino): _206.QueryDelegatorPoolDelegationsRequest;
                toAmino(message: _206.QueryDelegatorPoolDelegationsRequest): _206.QueryDelegatorPoolDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolDelegationsRequestAminoMsg): _206.QueryDelegatorPoolDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorPoolDelegationsRequestProtoMsg): _206.QueryDelegatorPoolDelegationsRequest;
                toProto(message: _206.QueryDelegatorPoolDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolDelegationsRequest): _206.QueryDelegatorPoolDelegationsRequestProtoMsg;
            };
            QueryDelegatorPoolDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorPoolDelegationsResponse>): _206.QueryDelegatorPoolDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorPoolDelegationsResponseAmino): _206.QueryDelegatorPoolDelegationsResponse;
                toAmino(message: _206.QueryDelegatorPoolDelegationsResponse): _206.QueryDelegatorPoolDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolDelegationsResponseAminoMsg): _206.QueryDelegatorPoolDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorPoolDelegationsResponseProtoMsg): _206.QueryDelegatorPoolDelegationsResponse;
                toProto(message: _206.QueryDelegatorPoolDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolDelegationsResponse): _206.QueryDelegatorPoolDelegationsResponseProtoMsg;
            };
            QueryDelegatorPoolUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorPoolUnbondingDelegationsRequest>): _206.QueryDelegatorPoolUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorPoolUnbondingDelegationsRequestAmino): _206.QueryDelegatorPoolUnbondingDelegationsRequest;
                toAmino(message: _206.QueryDelegatorPoolUnbondingDelegationsRequest): _206.QueryDelegatorPoolUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolUnbondingDelegationsRequestAminoMsg): _206.QueryDelegatorPoolUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg): _206.QueryDelegatorPoolUnbondingDelegationsRequest;
                toProto(message: _206.QueryDelegatorPoolUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolUnbondingDelegationsRequest): _206.QueryDelegatorPoolUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorPoolUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorPoolUnbondingDelegationsResponse>): _206.QueryDelegatorPoolUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorPoolUnbondingDelegationsResponseAmino): _206.QueryDelegatorPoolUnbondingDelegationsResponse;
                toAmino(message: _206.QueryDelegatorPoolUnbondingDelegationsResponse): _206.QueryDelegatorPoolUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolUnbondingDelegationsResponseAminoMsg): _206.QueryDelegatorPoolUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg): _206.QueryDelegatorPoolUnbondingDelegationsResponse;
                toProto(message: _206.QueryDelegatorPoolUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolUnbondingDelegationsResponse): _206.QueryDelegatorPoolUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegatorOperatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorDelegationsRequest>): _206.QueryDelegatorOperatorDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorOperatorDelegationsRequestAmino): _206.QueryDelegatorOperatorDelegationsRequest;
                toAmino(message: _206.QueryDelegatorOperatorDelegationsRequest): _206.QueryDelegatorOperatorDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorDelegationsRequestAminoMsg): _206.QueryDelegatorOperatorDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorOperatorDelegationsRequestProtoMsg): _206.QueryDelegatorOperatorDelegationsRequest;
                toProto(message: _206.QueryDelegatorOperatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorDelegationsRequest): _206.QueryDelegatorOperatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorOperatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorDelegationsResponse>): _206.QueryDelegatorOperatorDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorOperatorDelegationsResponseAmino): _206.QueryDelegatorOperatorDelegationsResponse;
                toAmino(message: _206.QueryDelegatorOperatorDelegationsResponse): _206.QueryDelegatorOperatorDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorDelegationsResponseAminoMsg): _206.QueryDelegatorOperatorDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorOperatorDelegationsResponseProtoMsg): _206.QueryDelegatorOperatorDelegationsResponse;
                toProto(message: _206.QueryDelegatorOperatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorDelegationsResponse): _206.QueryDelegatorOperatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorOperatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorUnbondingDelegationsRequest>): _206.QueryDelegatorOperatorUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorOperatorUnbondingDelegationsRequestAmino): _206.QueryDelegatorOperatorUnbondingDelegationsRequest;
                toAmino(message: _206.QueryDelegatorOperatorUnbondingDelegationsRequest): _206.QueryDelegatorOperatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorUnbondingDelegationsRequestAminoMsg): _206.QueryDelegatorOperatorUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg): _206.QueryDelegatorOperatorUnbondingDelegationsRequest;
                toProto(message: _206.QueryDelegatorOperatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorUnbondingDelegationsRequest): _206.QueryDelegatorOperatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorOperatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorUnbondingDelegationsResponse>): _206.QueryDelegatorOperatorUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorOperatorUnbondingDelegationsResponseAmino): _206.QueryDelegatorOperatorUnbondingDelegationsResponse;
                toAmino(message: _206.QueryDelegatorOperatorUnbondingDelegationsResponse): _206.QueryDelegatorOperatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorUnbondingDelegationsResponseAminoMsg): _206.QueryDelegatorOperatorUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg): _206.QueryDelegatorOperatorUnbondingDelegationsResponse;
                toProto(message: _206.QueryDelegatorOperatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorUnbondingDelegationsResponse): _206.QueryDelegatorOperatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegatorServiceDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorServiceDelegationsRequest>): _206.QueryDelegatorServiceDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorServiceDelegationsRequestAmino): _206.QueryDelegatorServiceDelegationsRequest;
                toAmino(message: _206.QueryDelegatorServiceDelegationsRequest): _206.QueryDelegatorServiceDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceDelegationsRequestAminoMsg): _206.QueryDelegatorServiceDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorServiceDelegationsRequestProtoMsg): _206.QueryDelegatorServiceDelegationsRequest;
                toProto(message: _206.QueryDelegatorServiceDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceDelegationsRequest): _206.QueryDelegatorServiceDelegationsRequestProtoMsg;
            };
            QueryDelegatorServiceDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorServiceDelegationsResponse>): _206.QueryDelegatorServiceDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorServiceDelegationsResponseAmino): _206.QueryDelegatorServiceDelegationsResponse;
                toAmino(message: _206.QueryDelegatorServiceDelegationsResponse): _206.QueryDelegatorServiceDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceDelegationsResponseAminoMsg): _206.QueryDelegatorServiceDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorServiceDelegationsResponseProtoMsg): _206.QueryDelegatorServiceDelegationsResponse;
                toProto(message: _206.QueryDelegatorServiceDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceDelegationsResponse): _206.QueryDelegatorServiceDelegationsResponseProtoMsg;
            };
            QueryDelegatorServiceUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceUnbondingDelegationsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorServiceUnbondingDelegationsRequest>): _206.QueryDelegatorServiceUnbondingDelegationsRequest;
                fromAmino(object: _206.QueryDelegatorServiceUnbondingDelegationsRequestAmino): _206.QueryDelegatorServiceUnbondingDelegationsRequest;
                toAmino(message: _206.QueryDelegatorServiceUnbondingDelegationsRequest): _206.QueryDelegatorServiceUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceUnbondingDelegationsRequestAminoMsg): _206.QueryDelegatorServiceUnbondingDelegationsRequest;
                fromProtoMsg(message: _206.QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg): _206.QueryDelegatorServiceUnbondingDelegationsRequest;
                toProto(message: _206.QueryDelegatorServiceUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceUnbondingDelegationsRequest): _206.QueryDelegatorServiceUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorServiceUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceUnbondingDelegationsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorServiceUnbondingDelegationsResponse>): _206.QueryDelegatorServiceUnbondingDelegationsResponse;
                fromAmino(object: _206.QueryDelegatorServiceUnbondingDelegationsResponseAmino): _206.QueryDelegatorServiceUnbondingDelegationsResponse;
                toAmino(message: _206.QueryDelegatorServiceUnbondingDelegationsResponse): _206.QueryDelegatorServiceUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceUnbondingDelegationsResponseAminoMsg): _206.QueryDelegatorServiceUnbondingDelegationsResponse;
                fromProtoMsg(message: _206.QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg): _206.QueryDelegatorServiceUnbondingDelegationsResponse;
                toProto(message: _206.QueryDelegatorServiceUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceUnbondingDelegationsResponse): _206.QueryDelegatorServiceUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegatorPoolsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorPoolsRequest>): _206.QueryDelegatorPoolsRequest;
                fromAmino(object: _206.QueryDelegatorPoolsRequestAmino): _206.QueryDelegatorPoolsRequest;
                toAmino(message: _206.QueryDelegatorPoolsRequest): _206.QueryDelegatorPoolsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolsRequestAminoMsg): _206.QueryDelegatorPoolsRequest;
                fromProtoMsg(message: _206.QueryDelegatorPoolsRequestProtoMsg): _206.QueryDelegatorPoolsRequest;
                toProto(message: _206.QueryDelegatorPoolsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolsRequest): _206.QueryDelegatorPoolsRequestProtoMsg;
            };
            QueryDelegatorPoolsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorPoolsResponse>): _206.QueryDelegatorPoolsResponse;
                fromAmino(object: _206.QueryDelegatorPoolsResponseAmino): _206.QueryDelegatorPoolsResponse;
                toAmino(message: _206.QueryDelegatorPoolsResponse): _206.QueryDelegatorPoolsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolsResponseAminoMsg): _206.QueryDelegatorPoolsResponse;
                fromProtoMsg(message: _206.QueryDelegatorPoolsResponseProtoMsg): _206.QueryDelegatorPoolsResponse;
                toProto(message: _206.QueryDelegatorPoolsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolsResponse): _206.QueryDelegatorPoolsResponseProtoMsg;
            };
            QueryDelegatorPoolRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolRequest;
                fromPartial(object: Partial<_206.QueryDelegatorPoolRequest>): _206.QueryDelegatorPoolRequest;
                fromAmino(object: _206.QueryDelegatorPoolRequestAmino): _206.QueryDelegatorPoolRequest;
                toAmino(message: _206.QueryDelegatorPoolRequest): _206.QueryDelegatorPoolRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolRequestAminoMsg): _206.QueryDelegatorPoolRequest;
                fromProtoMsg(message: _206.QueryDelegatorPoolRequestProtoMsg): _206.QueryDelegatorPoolRequest;
                toProto(message: _206.QueryDelegatorPoolRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolRequest): _206.QueryDelegatorPoolRequestProtoMsg;
            };
            QueryDelegatorPoolResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorPoolResponse;
                fromPartial(object: Partial<_206.QueryDelegatorPoolResponse>): _206.QueryDelegatorPoolResponse;
                fromAmino(object: _206.QueryDelegatorPoolResponseAmino): _206.QueryDelegatorPoolResponse;
                toAmino(message: _206.QueryDelegatorPoolResponse): _206.QueryDelegatorPoolResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorPoolResponseAminoMsg): _206.QueryDelegatorPoolResponse;
                fromProtoMsg(message: _206.QueryDelegatorPoolResponseProtoMsg): _206.QueryDelegatorPoolResponse;
                toProto(message: _206.QueryDelegatorPoolResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorPoolResponse): _206.QueryDelegatorPoolResponseProtoMsg;
            };
            QueryDelegatorOperatorsRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorsRequest;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorsRequest>): _206.QueryDelegatorOperatorsRequest;
                fromAmino(object: _206.QueryDelegatorOperatorsRequestAmino): _206.QueryDelegatorOperatorsRequest;
                toAmino(message: _206.QueryDelegatorOperatorsRequest): _206.QueryDelegatorOperatorsRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorsRequestAminoMsg): _206.QueryDelegatorOperatorsRequest;
                fromProtoMsg(message: _206.QueryDelegatorOperatorsRequestProtoMsg): _206.QueryDelegatorOperatorsRequest;
                toProto(message: _206.QueryDelegatorOperatorsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorsRequest): _206.QueryDelegatorOperatorsRequestProtoMsg;
            };
            QueryDelegatorOperatorsResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorsResponse;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorsResponse>): _206.QueryDelegatorOperatorsResponse;
                fromAmino(object: _206.QueryDelegatorOperatorsResponseAmino): _206.QueryDelegatorOperatorsResponse;
                toAmino(message: _206.QueryDelegatorOperatorsResponse): _206.QueryDelegatorOperatorsResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorsResponseAminoMsg): _206.QueryDelegatorOperatorsResponse;
                fromProtoMsg(message: _206.QueryDelegatorOperatorsResponseProtoMsg): _206.QueryDelegatorOperatorsResponse;
                toProto(message: _206.QueryDelegatorOperatorsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorsResponse): _206.QueryDelegatorOperatorsResponseProtoMsg;
            };
            QueryDelegatorOperatorRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorRequest;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorRequest>): _206.QueryDelegatorOperatorRequest;
                fromAmino(object: _206.QueryDelegatorOperatorRequestAmino): _206.QueryDelegatorOperatorRequest;
                toAmino(message: _206.QueryDelegatorOperatorRequest): _206.QueryDelegatorOperatorRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorRequestAminoMsg): _206.QueryDelegatorOperatorRequest;
                fromProtoMsg(message: _206.QueryDelegatorOperatorRequestProtoMsg): _206.QueryDelegatorOperatorRequest;
                toProto(message: _206.QueryDelegatorOperatorRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorRequest): _206.QueryDelegatorOperatorRequestProtoMsg;
            };
            QueryDelegatorOperatorResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorOperatorResponse;
                fromPartial(object: Partial<_206.QueryDelegatorOperatorResponse>): _206.QueryDelegatorOperatorResponse;
                fromAmino(object: _206.QueryDelegatorOperatorResponseAmino): _206.QueryDelegatorOperatorResponse;
                toAmino(message: _206.QueryDelegatorOperatorResponse): _206.QueryDelegatorOperatorResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorOperatorResponseAminoMsg): _206.QueryDelegatorOperatorResponse;
                fromProtoMsg(message: _206.QueryDelegatorOperatorResponseProtoMsg): _206.QueryDelegatorOperatorResponse;
                toProto(message: _206.QueryDelegatorOperatorResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorOperatorResponse): _206.QueryDelegatorOperatorResponseProtoMsg;
            };
            QueryDelegatorServicesRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServicesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServicesRequest;
                fromPartial(object: Partial<_206.QueryDelegatorServicesRequest>): _206.QueryDelegatorServicesRequest;
                fromAmino(object: _206.QueryDelegatorServicesRequestAmino): _206.QueryDelegatorServicesRequest;
                toAmino(message: _206.QueryDelegatorServicesRequest): _206.QueryDelegatorServicesRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorServicesRequestAminoMsg): _206.QueryDelegatorServicesRequest;
                fromProtoMsg(message: _206.QueryDelegatorServicesRequestProtoMsg): _206.QueryDelegatorServicesRequest;
                toProto(message: _206.QueryDelegatorServicesRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServicesRequest): _206.QueryDelegatorServicesRequestProtoMsg;
            };
            QueryDelegatorServicesResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServicesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServicesResponse;
                fromPartial(object: Partial<_206.QueryDelegatorServicesResponse>): _206.QueryDelegatorServicesResponse;
                fromAmino(object: _206.QueryDelegatorServicesResponseAmino): _206.QueryDelegatorServicesResponse;
                toAmino(message: _206.QueryDelegatorServicesResponse): _206.QueryDelegatorServicesResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorServicesResponseAminoMsg): _206.QueryDelegatorServicesResponse;
                fromProtoMsg(message: _206.QueryDelegatorServicesResponseProtoMsg): _206.QueryDelegatorServicesResponse;
                toProto(message: _206.QueryDelegatorServicesResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServicesResponse): _206.QueryDelegatorServicesResponseProtoMsg;
            };
            QueryDelegatorServiceRequest: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceRequest;
                fromPartial(object: Partial<_206.QueryDelegatorServiceRequest>): _206.QueryDelegatorServiceRequest;
                fromAmino(object: _206.QueryDelegatorServiceRequestAmino): _206.QueryDelegatorServiceRequest;
                toAmino(message: _206.QueryDelegatorServiceRequest): _206.QueryDelegatorServiceRequestAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceRequestAminoMsg): _206.QueryDelegatorServiceRequest;
                fromProtoMsg(message: _206.QueryDelegatorServiceRequestProtoMsg): _206.QueryDelegatorServiceRequest;
                toProto(message: _206.QueryDelegatorServiceRequest): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceRequest): _206.QueryDelegatorServiceRequestProtoMsg;
            };
            QueryDelegatorServiceResponse: {
                typeUrl: string;
                encode(message: _206.QueryDelegatorServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryDelegatorServiceResponse;
                fromPartial(object: Partial<_206.QueryDelegatorServiceResponse>): _206.QueryDelegatorServiceResponse;
                fromAmino(object: _206.QueryDelegatorServiceResponseAmino): _206.QueryDelegatorServiceResponse;
                toAmino(message: _206.QueryDelegatorServiceResponse): _206.QueryDelegatorServiceResponseAmino;
                fromAminoMsg(object: _206.QueryDelegatorServiceResponseAminoMsg): _206.QueryDelegatorServiceResponse;
                fromProtoMsg(message: _206.QueryDelegatorServiceResponseProtoMsg): _206.QueryDelegatorServiceResponse;
                toProto(message: _206.QueryDelegatorServiceResponse): Uint8Array;
                toProtoMsg(message: _206.QueryDelegatorServiceResponse): _206.QueryDelegatorServiceResponseProtoMsg;
            };
            QueryUserPreferencesRequest: {
                typeUrl: string;
                encode(message: _206.QueryUserPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryUserPreferencesRequest;
                fromPartial(object: Partial<_206.QueryUserPreferencesRequest>): _206.QueryUserPreferencesRequest;
                fromAmino(object: _206.QueryUserPreferencesRequestAmino): _206.QueryUserPreferencesRequest;
                toAmino(message: _206.QueryUserPreferencesRequest): _206.QueryUserPreferencesRequestAmino;
                fromAminoMsg(object: _206.QueryUserPreferencesRequestAminoMsg): _206.QueryUserPreferencesRequest;
                fromProtoMsg(message: _206.QueryUserPreferencesRequestProtoMsg): _206.QueryUserPreferencesRequest;
                toProto(message: _206.QueryUserPreferencesRequest): Uint8Array;
                toProtoMsg(message: _206.QueryUserPreferencesRequest): _206.QueryUserPreferencesRequestProtoMsg;
            };
            QueryUserPreferencesResponse: {
                typeUrl: string;
                encode(message: _206.QueryUserPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryUserPreferencesResponse;
                fromPartial(object: Partial<_206.QueryUserPreferencesResponse>): _206.QueryUserPreferencesResponse;
                fromAmino(object: _206.QueryUserPreferencesResponseAmino): _206.QueryUserPreferencesResponse;
                toAmino(message: _206.QueryUserPreferencesResponse): _206.QueryUserPreferencesResponseAmino;
                fromAminoMsg(object: _206.QueryUserPreferencesResponseAminoMsg): _206.QueryUserPreferencesResponse;
                fromProtoMsg(message: _206.QueryUserPreferencesResponseProtoMsg): _206.QueryUserPreferencesResponse;
                toProto(message: _206.QueryUserPreferencesResponse): Uint8Array;
                toProtoMsg(message: _206.QueryUserPreferencesResponse): _206.QueryUserPreferencesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _206.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryParamsRequest;
                fromPartial(_: Partial<_206.QueryParamsRequest>): _206.QueryParamsRequest;
                fromAmino(_: _206.QueryParamsRequestAmino): _206.QueryParamsRequest;
                toAmino(_: _206.QueryParamsRequest): _206.QueryParamsRequestAmino;
                fromAminoMsg(object: _206.QueryParamsRequestAminoMsg): _206.QueryParamsRequest;
                fromProtoMsg(message: _206.QueryParamsRequestProtoMsg): _206.QueryParamsRequest;
                toProto(message: _206.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _206.QueryParamsRequest): _206.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _206.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.QueryParamsResponse;
                fromPartial(object: Partial<_206.QueryParamsResponse>): _206.QueryParamsResponse;
                fromAmino(object: _206.QueryParamsResponseAmino): _206.QueryParamsResponse;
                toAmino(message: _206.QueryParamsResponse): _206.QueryParamsResponseAmino;
                fromAminoMsg(object: _206.QueryParamsResponseAminoMsg): _206.QueryParamsResponse;
                fromProtoMsg(message: _206.QueryParamsResponseProtoMsg): _206.QueryParamsResponse;
                toProto(message: _206.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _206.QueryParamsResponse): _206.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _205.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _205.Params;
                fromPartial(object: Partial<_205.Params>): _205.Params;
                fromAmino(object: _205.ParamsAmino): _205.Params;
                toAmino(message: _205.Params): _205.ParamsAmino;
                fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                toProto(message: _205.Params): Uint8Array;
                toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
            };
            delegationTypeFromJSON(object: any): _204.DelegationType;
            delegationTypeToJSON(object: _204.DelegationType): string;
            DelegationType: typeof _204.DelegationType;
            DelegationTypeSDKType: typeof _204.DelegationType;
            DelegationTypeAmino: typeof _204.DelegationType;
            Delegation: {
                typeUrl: string;
                encode(message: _204.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.Delegation;
                fromPartial(object: Partial<_204.Delegation>): _204.Delegation;
                fromAmino(object: _204.DelegationAmino): _204.Delegation;
                toAmino(message: _204.Delegation): _204.DelegationAmino;
                fromAminoMsg(object: _204.DelegationAminoMsg): _204.Delegation;
                fromProtoMsg(message: _204.DelegationProtoMsg): _204.Delegation;
                toProto(message: _204.Delegation): Uint8Array;
                toProtoMsg(message: _204.Delegation): _204.DelegationProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _204.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.DelegationResponse;
                fromPartial(object: Partial<_204.DelegationResponse>): _204.DelegationResponse;
                fromAmino(object: _204.DelegationResponseAmino): _204.DelegationResponse;
                toAmino(message: _204.DelegationResponse): _204.DelegationResponseAmino;
                fromAminoMsg(object: _204.DelegationResponseAminoMsg): _204.DelegationResponse;
                fromProtoMsg(message: _204.DelegationResponseProtoMsg): _204.DelegationResponse;
                toProto(message: _204.DelegationResponse): Uint8Array;
                toProtoMsg(message: _204.DelegationResponse): _204.DelegationResponseProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _204.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.UnbondingDelegation;
                fromPartial(object: Partial<_204.UnbondingDelegation>): _204.UnbondingDelegation;
                fromAmino(object: _204.UnbondingDelegationAmino): _204.UnbondingDelegation;
                toAmino(message: _204.UnbondingDelegation): _204.UnbondingDelegationAmino;
                fromAminoMsg(object: _204.UnbondingDelegationAminoMsg): _204.UnbondingDelegation;
                fromProtoMsg(message: _204.UnbondingDelegationProtoMsg): _204.UnbondingDelegation;
                toProto(message: _204.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _204.UnbondingDelegation): _204.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _204.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.UnbondingDelegationEntry;
                fromPartial(object: Partial<_204.UnbondingDelegationEntry>): _204.UnbondingDelegationEntry;
                fromAmino(object: _204.UnbondingDelegationEntryAmino): _204.UnbondingDelegationEntry;
                toAmino(message: _204.UnbondingDelegationEntry): _204.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _204.UnbondingDelegationEntryAminoMsg): _204.UnbondingDelegationEntry;
                fromProtoMsg(message: _204.UnbondingDelegationEntryProtoMsg): _204.UnbondingDelegationEntry;
                toProto(message: _204.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _204.UnbondingDelegationEntry): _204.UnbondingDelegationEntryProtoMsg;
            };
            DTData: {
                typeUrl: string;
                encode(message: _204.DTData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.DTData;
                fromPartial(object: Partial<_204.DTData>): _204.DTData;
                fromAmino(object: _204.DTDataAmino): _204.DTData;
                toAmino(message: _204.DTData): _204.DTDataAmino;
                fromAminoMsg(object: _204.DTDataAminoMsg): _204.DTData;
                fromProtoMsg(message: _204.DTDataProtoMsg): _204.DTData;
                toProto(message: _204.DTData): Uint8Array;
                toProtoMsg(message: _204.DTData): _204.DTDataProtoMsg;
            };
            DTDataList: {
                typeUrl: string;
                encode(message: _204.DTDataList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.DTDataList;
                fromPartial(object: Partial<_204.DTDataList>): _204.DTDataList;
                fromAmino(object: _204.DTDataListAmino): _204.DTDataList;
                toAmino(message: _204.DTDataList): _204.DTDataListAmino;
                fromAminoMsg(object: _204.DTDataListAminoMsg): _204.DTDataList;
                fromProtoMsg(message: _204.DTDataListProtoMsg): _204.DTDataList;
                toProto(message: _204.DTDataList): Uint8Array;
                toProtoMsg(message: _204.DTDataList): _204.DTDataListProtoMsg;
            };
            UserPreferences: {
                typeUrl: string;
                encode(message: _204.UserPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _204.UserPreferences;
                fromPartial(object: Partial<_204.UserPreferences>): _204.UserPreferences;
                fromAmino(object: _204.UserPreferencesAmino): _204.UserPreferences;
                toAmino(message: _204.UserPreferences): _204.UserPreferencesAmino;
                fromAminoMsg(object: _204.UserPreferencesAminoMsg): _204.UserPreferences;
                fromProtoMsg(message: _204.UserPreferencesProtoMsg): _204.UserPreferences;
                toProto(message: _204.UserPreferences): Uint8Array;
                toProtoMsg(message: _204.UserPreferences): _204.UserPreferencesProtoMsg;
            };
            MsgJoinService: {
                typeUrl: string;
                encode(message: _203.MsgJoinService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgJoinService;
                fromPartial(object: Partial<_203.MsgJoinService>): _203.MsgJoinService;
                fromAmino(object: _203.MsgJoinServiceAmino): _203.MsgJoinService;
                toAmino(message: _203.MsgJoinService): _203.MsgJoinServiceAmino;
                fromAminoMsg(object: _203.MsgJoinServiceAminoMsg): _203.MsgJoinService;
                toAminoMsg(message: _203.MsgJoinService): _203.MsgJoinServiceAminoMsg;
                fromProtoMsg(message: _203.MsgJoinServiceProtoMsg): _203.MsgJoinService;
                toProto(message: _203.MsgJoinService): Uint8Array;
                toProtoMsg(message: _203.MsgJoinService): _203.MsgJoinServiceProtoMsg;
            };
            MsgJoinServiceResponse: {
                typeUrl: string;
                encode(_: _203.MsgJoinServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgJoinServiceResponse;
                fromPartial(_: Partial<_203.MsgJoinServiceResponse>): _203.MsgJoinServiceResponse;
                fromAmino(_: _203.MsgJoinServiceResponseAmino): _203.MsgJoinServiceResponse;
                toAmino(_: _203.MsgJoinServiceResponse): _203.MsgJoinServiceResponseAmino;
                fromAminoMsg(object: _203.MsgJoinServiceResponseAminoMsg): _203.MsgJoinServiceResponse;
                fromProtoMsg(message: _203.MsgJoinServiceResponseProtoMsg): _203.MsgJoinServiceResponse;
                toProto(message: _203.MsgJoinServiceResponse): Uint8Array;
                toProtoMsg(message: _203.MsgJoinServiceResponse): _203.MsgJoinServiceResponseProtoMsg;
            };
            MsgLeaveService: {
                typeUrl: string;
                encode(message: _203.MsgLeaveService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgLeaveService;
                fromPartial(object: Partial<_203.MsgLeaveService>): _203.MsgLeaveService;
                fromAmino(object: _203.MsgLeaveServiceAmino): _203.MsgLeaveService;
                toAmino(message: _203.MsgLeaveService): _203.MsgLeaveServiceAmino;
                fromAminoMsg(object: _203.MsgLeaveServiceAminoMsg): _203.MsgLeaveService;
                toAminoMsg(message: _203.MsgLeaveService): _203.MsgLeaveServiceAminoMsg;
                fromProtoMsg(message: _203.MsgLeaveServiceProtoMsg): _203.MsgLeaveService;
                toProto(message: _203.MsgLeaveService): Uint8Array;
                toProtoMsg(message: _203.MsgLeaveService): _203.MsgLeaveServiceProtoMsg;
            };
            MsgLeaveServiceResponse: {
                typeUrl: string;
                encode(_: _203.MsgLeaveServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgLeaveServiceResponse;
                fromPartial(_: Partial<_203.MsgLeaveServiceResponse>): _203.MsgLeaveServiceResponse;
                fromAmino(_: _203.MsgLeaveServiceResponseAmino): _203.MsgLeaveServiceResponse;
                toAmino(_: _203.MsgLeaveServiceResponse): _203.MsgLeaveServiceResponseAmino;
                fromAminoMsg(object: _203.MsgLeaveServiceResponseAminoMsg): _203.MsgLeaveServiceResponse;
                fromProtoMsg(message: _203.MsgLeaveServiceResponseProtoMsg): _203.MsgLeaveServiceResponse;
                toProto(message: _203.MsgLeaveServiceResponse): Uint8Array;
                toProtoMsg(message: _203.MsgLeaveServiceResponse): _203.MsgLeaveServiceResponseProtoMsg;
            };
            MsgAddOperatorToAllowList: {
                typeUrl: string;
                encode(message: _203.MsgAddOperatorToAllowList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgAddOperatorToAllowList;
                fromPartial(object: Partial<_203.MsgAddOperatorToAllowList>): _203.MsgAddOperatorToAllowList;
                fromAmino(object: _203.MsgAddOperatorToAllowListAmino): _203.MsgAddOperatorToAllowList;
                toAmino(message: _203.MsgAddOperatorToAllowList): _203.MsgAddOperatorToAllowListAmino;
                fromAminoMsg(object: _203.MsgAddOperatorToAllowListAminoMsg): _203.MsgAddOperatorToAllowList;
                toAminoMsg(message: _203.MsgAddOperatorToAllowList): _203.MsgAddOperatorToAllowListAminoMsg;
                fromProtoMsg(message: _203.MsgAddOperatorToAllowListProtoMsg): _203.MsgAddOperatorToAllowList;
                toProto(message: _203.MsgAddOperatorToAllowList): Uint8Array;
                toProtoMsg(message: _203.MsgAddOperatorToAllowList): _203.MsgAddOperatorToAllowListProtoMsg;
            };
            MsgAddOperatorToAllowListResponse: {
                typeUrl: string;
                encode(_: _203.MsgAddOperatorToAllowListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgAddOperatorToAllowListResponse;
                fromPartial(_: Partial<_203.MsgAddOperatorToAllowListResponse>): _203.MsgAddOperatorToAllowListResponse;
                fromAmino(_: _203.MsgAddOperatorToAllowListResponseAmino): _203.MsgAddOperatorToAllowListResponse;
                toAmino(_: _203.MsgAddOperatorToAllowListResponse): _203.MsgAddOperatorToAllowListResponseAmino;
                fromAminoMsg(object: _203.MsgAddOperatorToAllowListResponseAminoMsg): _203.MsgAddOperatorToAllowListResponse;
                fromProtoMsg(message: _203.MsgAddOperatorToAllowListResponseProtoMsg): _203.MsgAddOperatorToAllowListResponse;
                toProto(message: _203.MsgAddOperatorToAllowListResponse): Uint8Array;
                toProtoMsg(message: _203.MsgAddOperatorToAllowListResponse): _203.MsgAddOperatorToAllowListResponseProtoMsg;
            };
            MsgRemoveOperatorFromAllowlist: {
                typeUrl: string;
                encode(message: _203.MsgRemoveOperatorFromAllowlist, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgRemoveOperatorFromAllowlist;
                fromPartial(object: Partial<_203.MsgRemoveOperatorFromAllowlist>): _203.MsgRemoveOperatorFromAllowlist;
                fromAmino(object: _203.MsgRemoveOperatorFromAllowlistAmino): _203.MsgRemoveOperatorFromAllowlist;
                toAmino(message: _203.MsgRemoveOperatorFromAllowlist): _203.MsgRemoveOperatorFromAllowlistAmino;
                fromAminoMsg(object: _203.MsgRemoveOperatorFromAllowlistAminoMsg): _203.MsgRemoveOperatorFromAllowlist;
                toAminoMsg(message: _203.MsgRemoveOperatorFromAllowlist): _203.MsgRemoveOperatorFromAllowlistAminoMsg;
                fromProtoMsg(message: _203.MsgRemoveOperatorFromAllowlistProtoMsg): _203.MsgRemoveOperatorFromAllowlist;
                toProto(message: _203.MsgRemoveOperatorFromAllowlist): Uint8Array;
                toProtoMsg(message: _203.MsgRemoveOperatorFromAllowlist): _203.MsgRemoveOperatorFromAllowlistProtoMsg;
            };
            MsgRemoveOperatorFromAllowlistResponse: {
                typeUrl: string;
                encode(_: _203.MsgRemoveOperatorFromAllowlistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgRemoveOperatorFromAllowlistResponse;
                fromPartial(_: Partial<_203.MsgRemoveOperatorFromAllowlistResponse>): _203.MsgRemoveOperatorFromAllowlistResponse;
                fromAmino(_: _203.MsgRemoveOperatorFromAllowlistResponseAmino): _203.MsgRemoveOperatorFromAllowlistResponse;
                toAmino(_: _203.MsgRemoveOperatorFromAllowlistResponse): _203.MsgRemoveOperatorFromAllowlistResponseAmino;
                fromAminoMsg(object: _203.MsgRemoveOperatorFromAllowlistResponseAminoMsg): _203.MsgRemoveOperatorFromAllowlistResponse;
                fromProtoMsg(message: _203.MsgRemoveOperatorFromAllowlistResponseProtoMsg): _203.MsgRemoveOperatorFromAllowlistResponse;
                toProto(message: _203.MsgRemoveOperatorFromAllowlistResponse): Uint8Array;
                toProtoMsg(message: _203.MsgRemoveOperatorFromAllowlistResponse): _203.MsgRemoveOperatorFromAllowlistResponseProtoMsg;
            };
            MsgBorrowPoolSecurity: {
                typeUrl: string;
                encode(message: _203.MsgBorrowPoolSecurity, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgBorrowPoolSecurity;
                fromPartial(object: Partial<_203.MsgBorrowPoolSecurity>): _203.MsgBorrowPoolSecurity;
                fromAmino(object: _203.MsgBorrowPoolSecurityAmino): _203.MsgBorrowPoolSecurity;
                toAmino(message: _203.MsgBorrowPoolSecurity): _203.MsgBorrowPoolSecurityAmino;
                fromAminoMsg(object: _203.MsgBorrowPoolSecurityAminoMsg): _203.MsgBorrowPoolSecurity;
                toAminoMsg(message: _203.MsgBorrowPoolSecurity): _203.MsgBorrowPoolSecurityAminoMsg;
                fromProtoMsg(message: _203.MsgBorrowPoolSecurityProtoMsg): _203.MsgBorrowPoolSecurity;
                toProto(message: _203.MsgBorrowPoolSecurity): Uint8Array;
                toProtoMsg(message: _203.MsgBorrowPoolSecurity): _203.MsgBorrowPoolSecurityProtoMsg;
            };
            MsgBorrowPoolSecurityResponse: {
                typeUrl: string;
                encode(_: _203.MsgBorrowPoolSecurityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgBorrowPoolSecurityResponse;
                fromPartial(_: Partial<_203.MsgBorrowPoolSecurityResponse>): _203.MsgBorrowPoolSecurityResponse;
                fromAmino(_: _203.MsgBorrowPoolSecurityResponseAmino): _203.MsgBorrowPoolSecurityResponse;
                toAmino(_: _203.MsgBorrowPoolSecurityResponse): _203.MsgBorrowPoolSecurityResponseAmino;
                fromAminoMsg(object: _203.MsgBorrowPoolSecurityResponseAminoMsg): _203.MsgBorrowPoolSecurityResponse;
                fromProtoMsg(message: _203.MsgBorrowPoolSecurityResponseProtoMsg): _203.MsgBorrowPoolSecurityResponse;
                toProto(message: _203.MsgBorrowPoolSecurityResponse): Uint8Array;
                toProtoMsg(message: _203.MsgBorrowPoolSecurityResponse): _203.MsgBorrowPoolSecurityResponseProtoMsg;
            };
            MsgCeasePoolSecurityBorrow: {
                typeUrl: string;
                encode(message: _203.MsgCeasePoolSecurityBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgCeasePoolSecurityBorrow;
                fromPartial(object: Partial<_203.MsgCeasePoolSecurityBorrow>): _203.MsgCeasePoolSecurityBorrow;
                fromAmino(object: _203.MsgCeasePoolSecurityBorrowAmino): _203.MsgCeasePoolSecurityBorrow;
                toAmino(message: _203.MsgCeasePoolSecurityBorrow): _203.MsgCeasePoolSecurityBorrowAmino;
                fromAminoMsg(object: _203.MsgCeasePoolSecurityBorrowAminoMsg): _203.MsgCeasePoolSecurityBorrow;
                toAminoMsg(message: _203.MsgCeasePoolSecurityBorrow): _203.MsgCeasePoolSecurityBorrowAminoMsg;
                fromProtoMsg(message: _203.MsgCeasePoolSecurityBorrowProtoMsg): _203.MsgCeasePoolSecurityBorrow;
                toProto(message: _203.MsgCeasePoolSecurityBorrow): Uint8Array;
                toProtoMsg(message: _203.MsgCeasePoolSecurityBorrow): _203.MsgCeasePoolSecurityBorrowProtoMsg;
            };
            MsgCeasePoolSecurityBorrowResponse: {
                typeUrl: string;
                encode(_: _203.MsgCeasePoolSecurityBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgCeasePoolSecurityBorrowResponse;
                fromPartial(_: Partial<_203.MsgCeasePoolSecurityBorrowResponse>): _203.MsgCeasePoolSecurityBorrowResponse;
                fromAmino(_: _203.MsgCeasePoolSecurityBorrowResponseAmino): _203.MsgCeasePoolSecurityBorrowResponse;
                toAmino(_: _203.MsgCeasePoolSecurityBorrowResponse): _203.MsgCeasePoolSecurityBorrowResponseAmino;
                fromAminoMsg(object: _203.MsgCeasePoolSecurityBorrowResponseAminoMsg): _203.MsgCeasePoolSecurityBorrowResponse;
                fromProtoMsg(message: _203.MsgCeasePoolSecurityBorrowResponseProtoMsg): _203.MsgCeasePoolSecurityBorrowResponse;
                toProto(message: _203.MsgCeasePoolSecurityBorrowResponse): Uint8Array;
                toProtoMsg(message: _203.MsgCeasePoolSecurityBorrowResponse): _203.MsgCeasePoolSecurityBorrowResponseProtoMsg;
            };
            MsgDelegatePool: {
                typeUrl: string;
                encode(message: _203.MsgDelegatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegatePool;
                fromPartial(object: Partial<_203.MsgDelegatePool>): _203.MsgDelegatePool;
                fromAmino(object: _203.MsgDelegatePoolAmino): _203.MsgDelegatePool;
                toAmino(message: _203.MsgDelegatePool): _203.MsgDelegatePoolAmino;
                fromAminoMsg(object: _203.MsgDelegatePoolAminoMsg): _203.MsgDelegatePool;
                toAminoMsg(message: _203.MsgDelegatePool): _203.MsgDelegatePoolAminoMsg;
                fromProtoMsg(message: _203.MsgDelegatePoolProtoMsg): _203.MsgDelegatePool;
                toProto(message: _203.MsgDelegatePool): Uint8Array;
                toProtoMsg(message: _203.MsgDelegatePool): _203.MsgDelegatePoolProtoMsg;
            };
            MsgDelegatePoolResponse: {
                typeUrl: string;
                encode(_: _203.MsgDelegatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegatePoolResponse;
                fromPartial(_: Partial<_203.MsgDelegatePoolResponse>): _203.MsgDelegatePoolResponse;
                fromAmino(_: _203.MsgDelegatePoolResponseAmino): _203.MsgDelegatePoolResponse;
                toAmino(_: _203.MsgDelegatePoolResponse): _203.MsgDelegatePoolResponseAmino;
                fromAminoMsg(object: _203.MsgDelegatePoolResponseAminoMsg): _203.MsgDelegatePoolResponse;
                fromProtoMsg(message: _203.MsgDelegatePoolResponseProtoMsg): _203.MsgDelegatePoolResponse;
                toProto(message: _203.MsgDelegatePoolResponse): Uint8Array;
                toProtoMsg(message: _203.MsgDelegatePoolResponse): _203.MsgDelegatePoolResponseProtoMsg;
            };
            MsgDelegateOperator: {
                typeUrl: string;
                encode(message: _203.MsgDelegateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegateOperator;
                fromPartial(object: Partial<_203.MsgDelegateOperator>): _203.MsgDelegateOperator;
                fromAmino(object: _203.MsgDelegateOperatorAmino): _203.MsgDelegateOperator;
                toAmino(message: _203.MsgDelegateOperator): _203.MsgDelegateOperatorAmino;
                fromAminoMsg(object: _203.MsgDelegateOperatorAminoMsg): _203.MsgDelegateOperator;
                toAminoMsg(message: _203.MsgDelegateOperator): _203.MsgDelegateOperatorAminoMsg;
                fromProtoMsg(message: _203.MsgDelegateOperatorProtoMsg): _203.MsgDelegateOperator;
                toProto(message: _203.MsgDelegateOperator): Uint8Array;
                toProtoMsg(message: _203.MsgDelegateOperator): _203.MsgDelegateOperatorProtoMsg;
            };
            MsgDelegateOperatorResponse: {
                typeUrl: string;
                encode(_: _203.MsgDelegateOperatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegateOperatorResponse;
                fromPartial(_: Partial<_203.MsgDelegateOperatorResponse>): _203.MsgDelegateOperatorResponse;
                fromAmino(_: _203.MsgDelegateOperatorResponseAmino): _203.MsgDelegateOperatorResponse;
                toAmino(_: _203.MsgDelegateOperatorResponse): _203.MsgDelegateOperatorResponseAmino;
                fromAminoMsg(object: _203.MsgDelegateOperatorResponseAminoMsg): _203.MsgDelegateOperatorResponse;
                fromProtoMsg(message: _203.MsgDelegateOperatorResponseProtoMsg): _203.MsgDelegateOperatorResponse;
                toProto(message: _203.MsgDelegateOperatorResponse): Uint8Array;
                toProtoMsg(message: _203.MsgDelegateOperatorResponse): _203.MsgDelegateOperatorResponseProtoMsg;
            };
            MsgDelegateService: {
                typeUrl: string;
                encode(message: _203.MsgDelegateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegateService;
                fromPartial(object: Partial<_203.MsgDelegateService>): _203.MsgDelegateService;
                fromAmino(object: _203.MsgDelegateServiceAmino): _203.MsgDelegateService;
                toAmino(message: _203.MsgDelegateService): _203.MsgDelegateServiceAmino;
                fromAminoMsg(object: _203.MsgDelegateServiceAminoMsg): _203.MsgDelegateService;
                toAminoMsg(message: _203.MsgDelegateService): _203.MsgDelegateServiceAminoMsg;
                fromProtoMsg(message: _203.MsgDelegateServiceProtoMsg): _203.MsgDelegateService;
                toProto(message: _203.MsgDelegateService): Uint8Array;
                toProtoMsg(message: _203.MsgDelegateService): _203.MsgDelegateServiceProtoMsg;
            };
            MsgDelegateServiceResponse: {
                typeUrl: string;
                encode(_: _203.MsgDelegateServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgDelegateServiceResponse;
                fromPartial(_: Partial<_203.MsgDelegateServiceResponse>): _203.MsgDelegateServiceResponse;
                fromAmino(_: _203.MsgDelegateServiceResponseAmino): _203.MsgDelegateServiceResponse;
                toAmino(_: _203.MsgDelegateServiceResponse): _203.MsgDelegateServiceResponseAmino;
                fromAminoMsg(object: _203.MsgDelegateServiceResponseAminoMsg): _203.MsgDelegateServiceResponse;
                fromProtoMsg(message: _203.MsgDelegateServiceResponseProtoMsg): _203.MsgDelegateServiceResponse;
                toProto(message: _203.MsgDelegateServiceResponse): Uint8Array;
                toProtoMsg(message: _203.MsgDelegateServiceResponse): _203.MsgDelegateServiceResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _203.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateParams;
                fromPartial(object: Partial<_203.MsgUpdateParams>): _203.MsgUpdateParams;
                fromAmino(object: _203.MsgUpdateParamsAmino): _203.MsgUpdateParams;
                toAmino(message: _203.MsgUpdateParams): _203.MsgUpdateParamsAmino;
                fromAminoMsg(object: _203.MsgUpdateParamsAminoMsg): _203.MsgUpdateParams;
                toAminoMsg(message: _203.MsgUpdateParams): _203.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _203.MsgUpdateParamsProtoMsg): _203.MsgUpdateParams;
                toProto(message: _203.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _203.MsgUpdateParams): _203.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _203.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_203.MsgUpdateParamsResponse>): _203.MsgUpdateParamsResponse;
                fromAmino(_: _203.MsgUpdateParamsResponseAmino): _203.MsgUpdateParamsResponse;
                toAmino(_: _203.MsgUpdateParamsResponse): _203.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _203.MsgUpdateParamsResponseAminoMsg): _203.MsgUpdateParamsResponse;
                fromProtoMsg(message: _203.MsgUpdateParamsResponseProtoMsg): _203.MsgUpdateParamsResponse;
                toProto(message: _203.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _203.MsgUpdateParamsResponse): _203.MsgUpdateParamsResponseProtoMsg;
            };
            MsgUndelegatePool: {
                typeUrl: string;
                encode(message: _203.MsgUndelegatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUndelegatePool;
                fromPartial(object: Partial<_203.MsgUndelegatePool>): _203.MsgUndelegatePool;
                fromAmino(object: _203.MsgUndelegatePoolAmino): _203.MsgUndelegatePool;
                toAmino(message: _203.MsgUndelegatePool): _203.MsgUndelegatePoolAmino;
                fromAminoMsg(object: _203.MsgUndelegatePoolAminoMsg): _203.MsgUndelegatePool;
                toAminoMsg(message: _203.MsgUndelegatePool): _203.MsgUndelegatePoolAminoMsg;
                fromProtoMsg(message: _203.MsgUndelegatePoolProtoMsg): _203.MsgUndelegatePool;
                toProto(message: _203.MsgUndelegatePool): Uint8Array;
                toProtoMsg(message: _203.MsgUndelegatePool): _203.MsgUndelegatePoolProtoMsg;
            };
            MsgUndelegateOperator: {
                typeUrl: string;
                encode(message: _203.MsgUndelegateOperator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUndelegateOperator;
                fromPartial(object: Partial<_203.MsgUndelegateOperator>): _203.MsgUndelegateOperator;
                fromAmino(object: _203.MsgUndelegateOperatorAmino): _203.MsgUndelegateOperator;
                toAmino(message: _203.MsgUndelegateOperator): _203.MsgUndelegateOperatorAmino;
                fromAminoMsg(object: _203.MsgUndelegateOperatorAminoMsg): _203.MsgUndelegateOperator;
                toAminoMsg(message: _203.MsgUndelegateOperator): _203.MsgUndelegateOperatorAminoMsg;
                fromProtoMsg(message: _203.MsgUndelegateOperatorProtoMsg): _203.MsgUndelegateOperator;
                toProto(message: _203.MsgUndelegateOperator): Uint8Array;
                toProtoMsg(message: _203.MsgUndelegateOperator): _203.MsgUndelegateOperatorProtoMsg;
            };
            MsgUndelegateService: {
                typeUrl: string;
                encode(message: _203.MsgUndelegateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUndelegateService;
                fromPartial(object: Partial<_203.MsgUndelegateService>): _203.MsgUndelegateService;
                fromAmino(object: _203.MsgUndelegateServiceAmino): _203.MsgUndelegateService;
                toAmino(message: _203.MsgUndelegateService): _203.MsgUndelegateServiceAmino;
                fromAminoMsg(object: _203.MsgUndelegateServiceAminoMsg): _203.MsgUndelegateService;
                toAminoMsg(message: _203.MsgUndelegateService): _203.MsgUndelegateServiceAminoMsg;
                fromProtoMsg(message: _203.MsgUndelegateServiceProtoMsg): _203.MsgUndelegateService;
                toProto(message: _203.MsgUndelegateService): Uint8Array;
                toProtoMsg(message: _203.MsgUndelegateService): _203.MsgUndelegateServiceProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _203.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgUndelegateResponse;
                fromPartial(object: Partial<_203.MsgUndelegateResponse>): _203.MsgUndelegateResponse;
                fromAmino(object: _203.MsgUndelegateResponseAmino): _203.MsgUndelegateResponse;
                toAmino(message: _203.MsgUndelegateResponse): _203.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _203.MsgUndelegateResponseAminoMsg): _203.MsgUndelegateResponse;
                fromProtoMsg(message: _203.MsgUndelegateResponseProtoMsg): _203.MsgUndelegateResponse;
                toProto(message: _203.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _203.MsgUndelegateResponse): _203.MsgUndelegateResponseProtoMsg;
            };
            MsgSetUserPreferences: {
                typeUrl: string;
                encode(message: _203.MsgSetUserPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgSetUserPreferences;
                fromPartial(object: Partial<_203.MsgSetUserPreferences>): _203.MsgSetUserPreferences;
                fromAmino(object: _203.MsgSetUserPreferencesAmino): _203.MsgSetUserPreferences;
                toAmino(message: _203.MsgSetUserPreferences): _203.MsgSetUserPreferencesAmino;
                fromAminoMsg(object: _203.MsgSetUserPreferencesAminoMsg): _203.MsgSetUserPreferences;
                toAminoMsg(message: _203.MsgSetUserPreferences): _203.MsgSetUserPreferencesAminoMsg;
                fromProtoMsg(message: _203.MsgSetUserPreferencesProtoMsg): _203.MsgSetUserPreferences;
                toProto(message: _203.MsgSetUserPreferences): Uint8Array;
                toProtoMsg(message: _203.MsgSetUserPreferences): _203.MsgSetUserPreferencesProtoMsg;
            };
            MsgSetUserPreferencesResponse: {
                typeUrl: string;
                encode(_: _203.MsgSetUserPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _203.MsgSetUserPreferencesResponse;
                fromPartial(_: Partial<_203.MsgSetUserPreferencesResponse>): _203.MsgSetUserPreferencesResponse;
                fromAmino(_: _203.MsgSetUserPreferencesResponseAmino): _203.MsgSetUserPreferencesResponse;
                toAmino(_: _203.MsgSetUserPreferencesResponse): _203.MsgSetUserPreferencesResponseAmino;
                fromAminoMsg(object: _203.MsgSetUserPreferencesResponseAminoMsg): _203.MsgSetUserPreferencesResponse;
                fromProtoMsg(message: _203.MsgSetUserPreferencesResponseProtoMsg): _203.MsgSetUserPreferencesResponse;
                toProto(message: _203.MsgSetUserPreferencesResponse): Uint8Array;
                toProtoMsg(message: _203.MsgSetUserPreferencesResponse): _203.MsgSetUserPreferencesResponseProtoMsg;
            };
            OperatorJoinedServices: {
                typeUrl: string;
                encode(message: _202.OperatorJoinedServices, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.OperatorJoinedServices;
                fromPartial(object: Partial<_202.OperatorJoinedServices>): _202.OperatorJoinedServices;
                fromAmino(object: _202.OperatorJoinedServicesAmino): _202.OperatorJoinedServices;
                toAmino(message: _202.OperatorJoinedServices): _202.OperatorJoinedServicesAmino;
                fromAminoMsg(object: _202.OperatorJoinedServicesAminoMsg): _202.OperatorJoinedServices;
                fromProtoMsg(message: _202.OperatorJoinedServicesProtoMsg): _202.OperatorJoinedServices;
                toProto(message: _202.OperatorJoinedServices): Uint8Array;
                toProtoMsg(message: _202.OperatorJoinedServices): _202.OperatorJoinedServicesProtoMsg;
            };
            ServiceAllowedOperators: {
                typeUrl: string;
                encode(message: _202.ServiceAllowedOperators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.ServiceAllowedOperators;
                fromPartial(object: Partial<_202.ServiceAllowedOperators>): _202.ServiceAllowedOperators;
                fromAmino(object: _202.ServiceAllowedOperatorsAmino): _202.ServiceAllowedOperators;
                toAmino(message: _202.ServiceAllowedOperators): _202.ServiceAllowedOperatorsAmino;
                fromAminoMsg(object: _202.ServiceAllowedOperatorsAminoMsg): _202.ServiceAllowedOperators;
                fromProtoMsg(message: _202.ServiceAllowedOperatorsProtoMsg): _202.ServiceAllowedOperators;
                toProto(message: _202.ServiceAllowedOperators): Uint8Array;
                toProtoMsg(message: _202.ServiceAllowedOperators): _202.ServiceAllowedOperatorsProtoMsg;
            };
            ServiceSecuringPools: {
                typeUrl: string;
                encode(message: _202.ServiceSecuringPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.ServiceSecuringPools;
                fromPartial(object: Partial<_202.ServiceSecuringPools>): _202.ServiceSecuringPools;
                fromAmino(object: _202.ServiceSecuringPoolsAmino): _202.ServiceSecuringPools;
                toAmino(message: _202.ServiceSecuringPools): _202.ServiceSecuringPoolsAmino;
                fromAminoMsg(object: _202.ServiceSecuringPoolsAminoMsg): _202.ServiceSecuringPools;
                fromProtoMsg(message: _202.ServiceSecuringPoolsProtoMsg): _202.ServiceSecuringPools;
                toProto(message: _202.ServiceSecuringPools): Uint8Array;
                toProtoMsg(message: _202.ServiceSecuringPools): _202.ServiceSecuringPoolsProtoMsg;
            };
            UserPreferencesEntry: {
                typeUrl: string;
                encode(message: _202.UserPreferencesEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.UserPreferencesEntry;
                fromPartial(object: Partial<_202.UserPreferencesEntry>): _202.UserPreferencesEntry;
                fromAmino(object: _202.UserPreferencesEntryAmino): _202.UserPreferencesEntry;
                toAmino(message: _202.UserPreferencesEntry): _202.UserPreferencesEntryAmino;
                fromAminoMsg(object: _202.UserPreferencesEntryAminoMsg): _202.UserPreferencesEntry;
                fromProtoMsg(message: _202.UserPreferencesEntryProtoMsg): _202.UserPreferencesEntry;
                toProto(message: _202.UserPreferencesEntry): Uint8Array;
                toProtoMsg(message: _202.UserPreferencesEntry): _202.UserPreferencesEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _202.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _202.GenesisState;
                fromPartial(object: Partial<_202.GenesisState>): _202.GenesisState;
                fromAmino(object: _202.GenesisStateAmino): _202.GenesisState;
                toAmino(message: _202.GenesisState): _202.GenesisStateAmino;
                fromAminoMsg(object: _202.GenesisStateAminoMsg): _202.GenesisState;
                fromProtoMsg(message: _202.GenesisStateProtoMsg): _202.GenesisState;
                toProto(message: _202.GenesisState): Uint8Array;
                toProtoMsg(message: _202.GenesisState): _202.GenesisStateProtoMsg;
            };
        };
    }
    namespace rewards {
        const v1: {
            MsgClientImpl: typeof _360.MsgClientImpl;
            QueryClientImpl: typeof _354.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                rewardsPlans(request?: _211.QueryRewardsPlansRequest): Promise<_211.QueryRewardsPlansResponse>;
                rewardsPlan(request: _211.QueryRewardsPlanRequest): Promise<_211.QueryRewardsPlanResponse>;
                poolOutstandingRewards(request: _211.QueryPoolOutstandingRewardsRequest): Promise<_211.QueryPoolOutstandingRewardsResponse>;
                operatorOutstandingRewards(request: _211.QueryOperatorOutstandingRewardsRequest): Promise<_211.QueryOperatorOutstandingRewardsResponse>;
                serviceOutstandingRewards(request: _211.QueryServiceOutstandingRewardsRequest): Promise<_211.QueryServiceOutstandingRewardsResponse>;
                operatorCommission(request: _211.QueryOperatorCommissionRequest): Promise<_211.QueryOperatorCommissionResponse>;
                poolDelegationRewards(request: _211.QueryPoolDelegationRewardsRequest): Promise<_211.QueryPoolDelegationRewardsResponse>;
                operatorDelegationRewards(request: _211.QueryOperatorDelegationRewardsRequest): Promise<_211.QueryOperatorDelegationRewardsResponse>;
                serviceDelegationRewards(request: _211.QueryServiceDelegationRewardsRequest): Promise<_211.QueryServiceDelegationRewardsResponse>;
                delegatorTotalRewards(request: _211.QueryDelegatorTotalRewardsRequest): Promise<_211.QueryDelegatorTotalRewardsResponse>;
                delegatorWithdrawAddress(request: _211.QueryDelegatorWithdrawAddressRequest): Promise<_211.QueryDelegatorWithdrawAddressResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRewardsPlan(value: _208.MsgCreateRewardsPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRewardsPlan(value: _208.MsgEditRewardsPlan): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setWithdrawAddress(value: _208.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _208.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawOperatorCommission(value: _208.MsgWithdrawOperatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _208.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRewardsPlan(value: _208.MsgCreateRewardsPlan): {
                        typeUrl: string;
                        value: _208.MsgCreateRewardsPlan;
                    };
                    editRewardsPlan(value: _208.MsgEditRewardsPlan): {
                        typeUrl: string;
                        value: _208.MsgEditRewardsPlan;
                    };
                    setWithdrawAddress(value: _208.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _208.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _208.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _208.MsgWithdrawDelegatorReward;
                    };
                    withdrawOperatorCommission(value: _208.MsgWithdrawOperatorCommission): {
                        typeUrl: string;
                        value: _208.MsgWithdrawOperatorCommission;
                    };
                    updateParams(value: _208.MsgUpdateParams): {
                        typeUrl: string;
                        value: _208.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createRewardsPlan(value: _208.MsgCreateRewardsPlan): {
                        typeUrl: string;
                        value: _208.MsgCreateRewardsPlan;
                    };
                    editRewardsPlan(value: _208.MsgEditRewardsPlan): {
                        typeUrl: string;
                        value: _208.MsgEditRewardsPlan;
                    };
                    setWithdrawAddress(value: _208.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _208.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _208.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _208.MsgWithdrawDelegatorReward;
                    };
                    withdrawOperatorCommission(value: _208.MsgWithdrawOperatorCommission): {
                        typeUrl: string;
                        value: _208.MsgWithdrawOperatorCommission;
                    };
                    updateParams(value: _208.MsgUpdateParams): {
                        typeUrl: string;
                        value: _208.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.rewards.v1.MsgCreateRewardsPlan": {
                    aminoType: string;
                    toAmino: (message: _208.MsgCreateRewardsPlan) => _208.MsgCreateRewardsPlanAmino;
                    fromAmino: (object: _208.MsgCreateRewardsPlanAmino) => _208.MsgCreateRewardsPlan;
                };
                "/milkyway.rewards.v1.MsgEditRewardsPlan": {
                    aminoType: string;
                    toAmino: (message: _208.MsgEditRewardsPlan) => _208.MsgEditRewardsPlanAmino;
                    fromAmino: (object: _208.MsgEditRewardsPlanAmino) => _208.MsgEditRewardsPlan;
                };
                "/milkyway.rewards.v1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _208.MsgSetWithdrawAddress) => _208.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _208.MsgSetWithdrawAddressAmino) => _208.MsgSetWithdrawAddress;
                };
                "/milkyway.rewards.v1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _208.MsgWithdrawDelegatorReward) => _208.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _208.MsgWithdrawDelegatorRewardAmino) => _208.MsgWithdrawDelegatorReward;
                };
                "/milkyway.rewards.v1.MsgWithdrawOperatorCommission": {
                    aminoType: string;
                    toAmino: (message: _208.MsgWithdrawOperatorCommission) => _208.MsgWithdrawOperatorCommissionAmino;
                    fromAmino: (object: _208.MsgWithdrawOperatorCommissionAmino) => _208.MsgWithdrawOperatorCommission;
                };
                "/milkyway.rewards.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _208.MsgUpdateParams) => _208.MsgUpdateParamsAmino;
                    fromAmino: (object: _208.MsgUpdateParamsAmino) => _208.MsgUpdateParams;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _211.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryParamsRequest;
                fromPartial(_: Partial<_211.QueryParamsRequest>): _211.QueryParamsRequest;
                fromAmino(_: _211.QueryParamsRequestAmino): _211.QueryParamsRequest;
                toAmino(_: _211.QueryParamsRequest): _211.QueryParamsRequestAmino;
                fromAminoMsg(object: _211.QueryParamsRequestAminoMsg): _211.QueryParamsRequest;
                fromProtoMsg(message: _211.QueryParamsRequestProtoMsg): _211.QueryParamsRequest;
                toProto(message: _211.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryParamsRequest): _211.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _211.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryParamsResponse;
                fromPartial(object: Partial<_211.QueryParamsResponse>): _211.QueryParamsResponse;
                fromAmino(object: _211.QueryParamsResponseAmino): _211.QueryParamsResponse;
                toAmino(message: _211.QueryParamsResponse): _211.QueryParamsResponseAmino;
                fromAminoMsg(object: _211.QueryParamsResponseAminoMsg): _211.QueryParamsResponse;
                fromProtoMsg(message: _211.QueryParamsResponseProtoMsg): _211.QueryParamsResponse;
                toProto(message: _211.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryParamsResponse): _211.QueryParamsResponseProtoMsg;
            };
            QueryRewardsPlansRequest: {
                typeUrl: string;
                encode(message: _211.QueryRewardsPlansRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryRewardsPlansRequest;
                fromPartial(object: Partial<_211.QueryRewardsPlansRequest>): _211.QueryRewardsPlansRequest;
                fromAmino(object: _211.QueryRewardsPlansRequestAmino): _211.QueryRewardsPlansRequest;
                toAmino(message: _211.QueryRewardsPlansRequest): _211.QueryRewardsPlansRequestAmino;
                fromAminoMsg(object: _211.QueryRewardsPlansRequestAminoMsg): _211.QueryRewardsPlansRequest;
                fromProtoMsg(message: _211.QueryRewardsPlansRequestProtoMsg): _211.QueryRewardsPlansRequest;
                toProto(message: _211.QueryRewardsPlansRequest): Uint8Array;
                toProtoMsg(message: _211.QueryRewardsPlansRequest): _211.QueryRewardsPlansRequestProtoMsg;
            };
            QueryRewardsPlansResponse: {
                typeUrl: string;
                encode(message: _211.QueryRewardsPlansResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryRewardsPlansResponse;
                fromPartial(object: Partial<_211.QueryRewardsPlansResponse>): _211.QueryRewardsPlansResponse;
                fromAmino(object: _211.QueryRewardsPlansResponseAmino): _211.QueryRewardsPlansResponse;
                toAmino(message: _211.QueryRewardsPlansResponse): _211.QueryRewardsPlansResponseAmino;
                fromAminoMsg(object: _211.QueryRewardsPlansResponseAminoMsg): _211.QueryRewardsPlansResponse;
                fromProtoMsg(message: _211.QueryRewardsPlansResponseProtoMsg): _211.QueryRewardsPlansResponse;
                toProto(message: _211.QueryRewardsPlansResponse): Uint8Array;
                toProtoMsg(message: _211.QueryRewardsPlansResponse): _211.QueryRewardsPlansResponseProtoMsg;
            };
            QueryRewardsPlanRequest: {
                typeUrl: string;
                encode(message: _211.QueryRewardsPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryRewardsPlanRequest;
                fromPartial(object: Partial<_211.QueryRewardsPlanRequest>): _211.QueryRewardsPlanRequest;
                fromAmino(object: _211.QueryRewardsPlanRequestAmino): _211.QueryRewardsPlanRequest;
                toAmino(message: _211.QueryRewardsPlanRequest): _211.QueryRewardsPlanRequestAmino;
                fromAminoMsg(object: _211.QueryRewardsPlanRequestAminoMsg): _211.QueryRewardsPlanRequest;
                fromProtoMsg(message: _211.QueryRewardsPlanRequestProtoMsg): _211.QueryRewardsPlanRequest;
                toProto(message: _211.QueryRewardsPlanRequest): Uint8Array;
                toProtoMsg(message: _211.QueryRewardsPlanRequest): _211.QueryRewardsPlanRequestProtoMsg;
            };
            QueryRewardsPlanResponse: {
                typeUrl: string;
                encode(message: _211.QueryRewardsPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryRewardsPlanResponse;
                fromPartial(object: Partial<_211.QueryRewardsPlanResponse>): _211.QueryRewardsPlanResponse;
                fromAmino(object: _211.QueryRewardsPlanResponseAmino): _211.QueryRewardsPlanResponse;
                toAmino(message: _211.QueryRewardsPlanResponse): _211.QueryRewardsPlanResponseAmino;
                fromAminoMsg(object: _211.QueryRewardsPlanResponseAminoMsg): _211.QueryRewardsPlanResponse;
                fromProtoMsg(message: _211.QueryRewardsPlanResponseProtoMsg): _211.QueryRewardsPlanResponse;
                toProto(message: _211.QueryRewardsPlanResponse): Uint8Array;
                toProtoMsg(message: _211.QueryRewardsPlanResponse): _211.QueryRewardsPlanResponseProtoMsg;
            };
            QueryPoolOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryPoolOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPoolOutstandingRewardsRequest;
                fromPartial(object: Partial<_211.QueryPoolOutstandingRewardsRequest>): _211.QueryPoolOutstandingRewardsRequest;
                fromAmino(object: _211.QueryPoolOutstandingRewardsRequestAmino): _211.QueryPoolOutstandingRewardsRequest;
                toAmino(message: _211.QueryPoolOutstandingRewardsRequest): _211.QueryPoolOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryPoolOutstandingRewardsRequestAminoMsg): _211.QueryPoolOutstandingRewardsRequest;
                fromProtoMsg(message: _211.QueryPoolOutstandingRewardsRequestProtoMsg): _211.QueryPoolOutstandingRewardsRequest;
                toProto(message: _211.QueryPoolOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryPoolOutstandingRewardsRequest): _211.QueryPoolOutstandingRewardsRequestProtoMsg;
            };
            QueryPoolOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryPoolOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPoolOutstandingRewardsResponse;
                fromPartial(object: Partial<_211.QueryPoolOutstandingRewardsResponse>): _211.QueryPoolOutstandingRewardsResponse;
                fromAmino(object: _211.QueryPoolOutstandingRewardsResponseAmino): _211.QueryPoolOutstandingRewardsResponse;
                toAmino(message: _211.QueryPoolOutstandingRewardsResponse): _211.QueryPoolOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryPoolOutstandingRewardsResponseAminoMsg): _211.QueryPoolOutstandingRewardsResponse;
                fromProtoMsg(message: _211.QueryPoolOutstandingRewardsResponseProtoMsg): _211.QueryPoolOutstandingRewardsResponse;
                toProto(message: _211.QueryPoolOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryPoolOutstandingRewardsResponse): _211.QueryPoolOutstandingRewardsResponseProtoMsg;
            };
            QueryOperatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryOperatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_211.QueryOperatorOutstandingRewardsRequest>): _211.QueryOperatorOutstandingRewardsRequest;
                fromAmino(object: _211.QueryOperatorOutstandingRewardsRequestAmino): _211.QueryOperatorOutstandingRewardsRequest;
                toAmino(message: _211.QueryOperatorOutstandingRewardsRequest): _211.QueryOperatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryOperatorOutstandingRewardsRequestAminoMsg): _211.QueryOperatorOutstandingRewardsRequest;
                fromProtoMsg(message: _211.QueryOperatorOutstandingRewardsRequestProtoMsg): _211.QueryOperatorOutstandingRewardsRequest;
                toProto(message: _211.QueryOperatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorOutstandingRewardsRequest): _211.QueryOperatorOutstandingRewardsRequestProtoMsg;
            };
            QueryOperatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryOperatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_211.QueryOperatorOutstandingRewardsResponse>): _211.QueryOperatorOutstandingRewardsResponse;
                fromAmino(object: _211.QueryOperatorOutstandingRewardsResponseAmino): _211.QueryOperatorOutstandingRewardsResponse;
                toAmino(message: _211.QueryOperatorOutstandingRewardsResponse): _211.QueryOperatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryOperatorOutstandingRewardsResponseAminoMsg): _211.QueryOperatorOutstandingRewardsResponse;
                fromProtoMsg(message: _211.QueryOperatorOutstandingRewardsResponseProtoMsg): _211.QueryOperatorOutstandingRewardsResponse;
                toProto(message: _211.QueryOperatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorOutstandingRewardsResponse): _211.QueryOperatorOutstandingRewardsResponseProtoMsg;
            };
            QueryServiceOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryServiceOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryServiceOutstandingRewardsRequest;
                fromPartial(object: Partial<_211.QueryServiceOutstandingRewardsRequest>): _211.QueryServiceOutstandingRewardsRequest;
                fromAmino(object: _211.QueryServiceOutstandingRewardsRequestAmino): _211.QueryServiceOutstandingRewardsRequest;
                toAmino(message: _211.QueryServiceOutstandingRewardsRequest): _211.QueryServiceOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryServiceOutstandingRewardsRequestAminoMsg): _211.QueryServiceOutstandingRewardsRequest;
                fromProtoMsg(message: _211.QueryServiceOutstandingRewardsRequestProtoMsg): _211.QueryServiceOutstandingRewardsRequest;
                toProto(message: _211.QueryServiceOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryServiceOutstandingRewardsRequest): _211.QueryServiceOutstandingRewardsRequestProtoMsg;
            };
            QueryServiceOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryServiceOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryServiceOutstandingRewardsResponse;
                fromPartial(object: Partial<_211.QueryServiceOutstandingRewardsResponse>): _211.QueryServiceOutstandingRewardsResponse;
                fromAmino(object: _211.QueryServiceOutstandingRewardsResponseAmino): _211.QueryServiceOutstandingRewardsResponse;
                toAmino(message: _211.QueryServiceOutstandingRewardsResponse): _211.QueryServiceOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryServiceOutstandingRewardsResponseAminoMsg): _211.QueryServiceOutstandingRewardsResponse;
                fromProtoMsg(message: _211.QueryServiceOutstandingRewardsResponseProtoMsg): _211.QueryServiceOutstandingRewardsResponse;
                toProto(message: _211.QueryServiceOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryServiceOutstandingRewardsResponse): _211.QueryServiceOutstandingRewardsResponseProtoMsg;
            };
            QueryOperatorCommissionRequest: {
                typeUrl: string;
                encode(message: _211.QueryOperatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorCommissionRequest;
                fromPartial(object: Partial<_211.QueryOperatorCommissionRequest>): _211.QueryOperatorCommissionRequest;
                fromAmino(object: _211.QueryOperatorCommissionRequestAmino): _211.QueryOperatorCommissionRequest;
                toAmino(message: _211.QueryOperatorCommissionRequest): _211.QueryOperatorCommissionRequestAmino;
                fromAminoMsg(object: _211.QueryOperatorCommissionRequestAminoMsg): _211.QueryOperatorCommissionRequest;
                fromProtoMsg(message: _211.QueryOperatorCommissionRequestProtoMsg): _211.QueryOperatorCommissionRequest;
                toProto(message: _211.QueryOperatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorCommissionRequest): _211.QueryOperatorCommissionRequestProtoMsg;
            };
            QueryOperatorCommissionResponse: {
                typeUrl: string;
                encode(message: _211.QueryOperatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorCommissionResponse;
                fromPartial(object: Partial<_211.QueryOperatorCommissionResponse>): _211.QueryOperatorCommissionResponse;
                fromAmino(object: _211.QueryOperatorCommissionResponseAmino): _211.QueryOperatorCommissionResponse;
                toAmino(message: _211.QueryOperatorCommissionResponse): _211.QueryOperatorCommissionResponseAmino;
                fromAminoMsg(object: _211.QueryOperatorCommissionResponseAminoMsg): _211.QueryOperatorCommissionResponse;
                fromProtoMsg(message: _211.QueryOperatorCommissionResponseProtoMsg): _211.QueryOperatorCommissionResponse;
                toProto(message: _211.QueryOperatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorCommissionResponse): _211.QueryOperatorCommissionResponseProtoMsg;
            };
            QueryPoolDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryPoolDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPoolDelegationRewardsRequest;
                fromPartial(object: Partial<_211.QueryPoolDelegationRewardsRequest>): _211.QueryPoolDelegationRewardsRequest;
                fromAmino(object: _211.QueryPoolDelegationRewardsRequestAmino): _211.QueryPoolDelegationRewardsRequest;
                toAmino(message: _211.QueryPoolDelegationRewardsRequest): _211.QueryPoolDelegationRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryPoolDelegationRewardsRequestAminoMsg): _211.QueryPoolDelegationRewardsRequest;
                fromProtoMsg(message: _211.QueryPoolDelegationRewardsRequestProtoMsg): _211.QueryPoolDelegationRewardsRequest;
                toProto(message: _211.QueryPoolDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryPoolDelegationRewardsRequest): _211.QueryPoolDelegationRewardsRequestProtoMsg;
            };
            QueryPoolDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryPoolDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryPoolDelegationRewardsResponse;
                fromPartial(object: Partial<_211.QueryPoolDelegationRewardsResponse>): _211.QueryPoolDelegationRewardsResponse;
                fromAmino(object: _211.QueryPoolDelegationRewardsResponseAmino): _211.QueryPoolDelegationRewardsResponse;
                toAmino(message: _211.QueryPoolDelegationRewardsResponse): _211.QueryPoolDelegationRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryPoolDelegationRewardsResponseAminoMsg): _211.QueryPoolDelegationRewardsResponse;
                fromProtoMsg(message: _211.QueryPoolDelegationRewardsResponseProtoMsg): _211.QueryPoolDelegationRewardsResponse;
                toProto(message: _211.QueryPoolDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryPoolDelegationRewardsResponse): _211.QueryPoolDelegationRewardsResponseProtoMsg;
            };
            QueryOperatorDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryOperatorDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorDelegationRewardsRequest;
                fromPartial(object: Partial<_211.QueryOperatorDelegationRewardsRequest>): _211.QueryOperatorDelegationRewardsRequest;
                fromAmino(object: _211.QueryOperatorDelegationRewardsRequestAmino): _211.QueryOperatorDelegationRewardsRequest;
                toAmino(message: _211.QueryOperatorDelegationRewardsRequest): _211.QueryOperatorDelegationRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryOperatorDelegationRewardsRequestAminoMsg): _211.QueryOperatorDelegationRewardsRequest;
                fromProtoMsg(message: _211.QueryOperatorDelegationRewardsRequestProtoMsg): _211.QueryOperatorDelegationRewardsRequest;
                toProto(message: _211.QueryOperatorDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorDelegationRewardsRequest): _211.QueryOperatorDelegationRewardsRequestProtoMsg;
            };
            QueryOperatorDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryOperatorDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryOperatorDelegationRewardsResponse;
                fromPartial(object: Partial<_211.QueryOperatorDelegationRewardsResponse>): _211.QueryOperatorDelegationRewardsResponse;
                fromAmino(object: _211.QueryOperatorDelegationRewardsResponseAmino): _211.QueryOperatorDelegationRewardsResponse;
                toAmino(message: _211.QueryOperatorDelegationRewardsResponse): _211.QueryOperatorDelegationRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryOperatorDelegationRewardsResponseAminoMsg): _211.QueryOperatorDelegationRewardsResponse;
                fromProtoMsg(message: _211.QueryOperatorDelegationRewardsResponseProtoMsg): _211.QueryOperatorDelegationRewardsResponse;
                toProto(message: _211.QueryOperatorDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryOperatorDelegationRewardsResponse): _211.QueryOperatorDelegationRewardsResponseProtoMsg;
            };
            QueryServiceDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryServiceDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryServiceDelegationRewardsRequest;
                fromPartial(object: Partial<_211.QueryServiceDelegationRewardsRequest>): _211.QueryServiceDelegationRewardsRequest;
                fromAmino(object: _211.QueryServiceDelegationRewardsRequestAmino): _211.QueryServiceDelegationRewardsRequest;
                toAmino(message: _211.QueryServiceDelegationRewardsRequest): _211.QueryServiceDelegationRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryServiceDelegationRewardsRequestAminoMsg): _211.QueryServiceDelegationRewardsRequest;
                fromProtoMsg(message: _211.QueryServiceDelegationRewardsRequestProtoMsg): _211.QueryServiceDelegationRewardsRequest;
                toProto(message: _211.QueryServiceDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryServiceDelegationRewardsRequest): _211.QueryServiceDelegationRewardsRequestProtoMsg;
            };
            QueryServiceDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryServiceDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryServiceDelegationRewardsResponse;
                fromPartial(object: Partial<_211.QueryServiceDelegationRewardsResponse>): _211.QueryServiceDelegationRewardsResponse;
                fromAmino(object: _211.QueryServiceDelegationRewardsResponseAmino): _211.QueryServiceDelegationRewardsResponse;
                toAmino(message: _211.QueryServiceDelegationRewardsResponse): _211.QueryServiceDelegationRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryServiceDelegationRewardsResponseAminoMsg): _211.QueryServiceDelegationRewardsResponse;
                fromProtoMsg(message: _211.QueryServiceDelegationRewardsResponseProtoMsg): _211.QueryServiceDelegationRewardsResponse;
                toProto(message: _211.QueryServiceDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryServiceDelegationRewardsResponse): _211.QueryServiceDelegationRewardsResponseProtoMsg;
            };
            QueryDelegatorTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _211.QueryDelegatorTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDelegatorTotalRewardsRequest;
                fromPartial(object: Partial<_211.QueryDelegatorTotalRewardsRequest>): _211.QueryDelegatorTotalRewardsRequest;
                fromAmino(object: _211.QueryDelegatorTotalRewardsRequestAmino): _211.QueryDelegatorTotalRewardsRequest;
                toAmino(message: _211.QueryDelegatorTotalRewardsRequest): _211.QueryDelegatorTotalRewardsRequestAmino;
                fromAminoMsg(object: _211.QueryDelegatorTotalRewardsRequestAminoMsg): _211.QueryDelegatorTotalRewardsRequest;
                fromProtoMsg(message: _211.QueryDelegatorTotalRewardsRequestProtoMsg): _211.QueryDelegatorTotalRewardsRequest;
                toProto(message: _211.QueryDelegatorTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryDelegatorTotalRewardsRequest): _211.QueryDelegatorTotalRewardsRequestProtoMsg;
            };
            QueryDelegatorTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _211.QueryDelegatorTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDelegatorTotalRewardsResponse;
                fromPartial(object: Partial<_211.QueryDelegatorTotalRewardsResponse>): _211.QueryDelegatorTotalRewardsResponse;
                fromAmino(object: _211.QueryDelegatorTotalRewardsResponseAmino): _211.QueryDelegatorTotalRewardsResponse;
                toAmino(message: _211.QueryDelegatorTotalRewardsResponse): _211.QueryDelegatorTotalRewardsResponseAmino;
                fromAminoMsg(object: _211.QueryDelegatorTotalRewardsResponseAminoMsg): _211.QueryDelegatorTotalRewardsResponse;
                fromProtoMsg(message: _211.QueryDelegatorTotalRewardsResponseProtoMsg): _211.QueryDelegatorTotalRewardsResponse;
                toProto(message: _211.QueryDelegatorTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryDelegatorTotalRewardsResponse): _211.QueryDelegatorTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _211.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_211.QueryDelegatorWithdrawAddressRequest>): _211.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _211.QueryDelegatorWithdrawAddressRequestAmino): _211.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _211.QueryDelegatorWithdrawAddressRequest): _211.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _211.QueryDelegatorWithdrawAddressRequestAminoMsg): _211.QueryDelegatorWithdrawAddressRequest;
                fromProtoMsg(message: _211.QueryDelegatorWithdrawAddressRequestProtoMsg): _211.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _211.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _211.QueryDelegatorWithdrawAddressRequest): _211.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _211.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_211.QueryDelegatorWithdrawAddressResponse>): _211.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _211.QueryDelegatorWithdrawAddressResponseAmino): _211.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _211.QueryDelegatorWithdrawAddressResponse): _211.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _211.QueryDelegatorWithdrawAddressResponseAminoMsg): _211.QueryDelegatorWithdrawAddressResponse;
                fromProtoMsg(message: _211.QueryDelegatorWithdrawAddressResponseProtoMsg): _211.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _211.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _211.QueryDelegatorWithdrawAddressResponse): _211.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _210.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.Params;
                fromPartial(object: Partial<_210.Params>): _210.Params;
                fromAmino(object: _210.ParamsAmino): _210.Params;
                toAmino(message: _210.Params): _210.ParamsAmino;
                fromAminoMsg(object: _210.ParamsAminoMsg): _210.Params;
                fromProtoMsg(message: _210.ParamsProtoMsg): _210.Params;
                toProto(message: _210.Params): Uint8Array;
                toProtoMsg(message: _210.Params): _210.ParamsProtoMsg;
            };
            RewardsPlan: {
                typeUrl: string;
                encode(message: _209.RewardsPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.RewardsPlan;
                fromPartial(object: Partial<_209.RewardsPlan>): _209.RewardsPlan;
                fromAmino(object: _209.RewardsPlanAmino): _209.RewardsPlan;
                toAmino(message: _209.RewardsPlan): _209.RewardsPlanAmino;
                fromAminoMsg(object: _209.RewardsPlanAminoMsg): _209.RewardsPlan;
                fromProtoMsg(message: _209.RewardsPlanProtoMsg): _209.RewardsPlan;
                toProto(message: _209.RewardsPlan): Uint8Array;
                toProtoMsg(message: _209.RewardsPlan): _209.RewardsPlanProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _209.Distribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.Distribution;
                fromPartial(object: Partial<_209.Distribution>): _209.Distribution;
                fromAmino(object: _209.DistributionAmino): _209.Distribution;
                toAmino(message: _209.Distribution): _209.DistributionAmino;
                fromAminoMsg(object: _209.DistributionAminoMsg): _209.Distribution;
                fromProtoMsg(message: _209.DistributionProtoMsg): _209.Distribution;
                toProto(message: _209.Distribution): Uint8Array;
                toProtoMsg(message: _209.Distribution): _209.DistributionProtoMsg;
            };
            DistributionTypeBasic: {
                typeUrl: string;
                encode(_: _209.DistributionTypeBasic, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DistributionTypeBasic;
                fromPartial(_: Partial<_209.DistributionTypeBasic>): _209.DistributionTypeBasic;
                fromAmino(_: _209.DistributionTypeBasicAmino): _209.DistributionTypeBasic;
                toAmino(_: _209.DistributionTypeBasic): _209.DistributionTypeBasicAmino;
                fromAminoMsg(object: _209.DistributionTypeBasicAminoMsg): _209.DistributionTypeBasic;
                fromProtoMsg(message: _209.DistributionTypeBasicProtoMsg): _209.DistributionTypeBasic;
                toProto(message: _209.DistributionTypeBasic): Uint8Array;
                toProtoMsg(message: _209.DistributionTypeBasic): _209.DistributionTypeBasicProtoMsg;
            };
            DistributionTypeWeighted: {
                typeUrl: string;
                encode(message: _209.DistributionTypeWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DistributionTypeWeighted;
                fromPartial(object: Partial<_209.DistributionTypeWeighted>): _209.DistributionTypeWeighted;
                fromAmino(object: _209.DistributionTypeWeightedAmino): _209.DistributionTypeWeighted;
                toAmino(message: _209.DistributionTypeWeighted): _209.DistributionTypeWeightedAmino;
                fromAminoMsg(object: _209.DistributionTypeWeightedAminoMsg): _209.DistributionTypeWeighted;
                fromProtoMsg(message: _209.DistributionTypeWeightedProtoMsg): _209.DistributionTypeWeighted;
                toProto(message: _209.DistributionTypeWeighted): Uint8Array;
                toProtoMsg(message: _209.DistributionTypeWeighted): _209.DistributionTypeWeightedProtoMsg;
            };
            DistributionWeight: {
                typeUrl: string;
                encode(message: _209.DistributionWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DistributionWeight;
                fromPartial(object: Partial<_209.DistributionWeight>): _209.DistributionWeight;
                fromAmino(object: _209.DistributionWeightAmino): _209.DistributionWeight;
                toAmino(message: _209.DistributionWeight): _209.DistributionWeightAmino;
                fromAminoMsg(object: _209.DistributionWeightAminoMsg): _209.DistributionWeight;
                fromProtoMsg(message: _209.DistributionWeightProtoMsg): _209.DistributionWeight;
                toProto(message: _209.DistributionWeight): Uint8Array;
                toProtoMsg(message: _209.DistributionWeight): _209.DistributionWeightProtoMsg;
            };
            DistributionTypeEgalitarian: {
                typeUrl: string;
                encode(_: _209.DistributionTypeEgalitarian, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DistributionTypeEgalitarian;
                fromPartial(_: Partial<_209.DistributionTypeEgalitarian>): _209.DistributionTypeEgalitarian;
                fromAmino(_: _209.DistributionTypeEgalitarianAmino): _209.DistributionTypeEgalitarian;
                toAmino(_: _209.DistributionTypeEgalitarian): _209.DistributionTypeEgalitarianAmino;
                fromAminoMsg(object: _209.DistributionTypeEgalitarianAminoMsg): _209.DistributionTypeEgalitarian;
                fromProtoMsg(message: _209.DistributionTypeEgalitarianProtoMsg): _209.DistributionTypeEgalitarian;
                toProto(message: _209.DistributionTypeEgalitarian): Uint8Array;
                toProtoMsg(message: _209.DistributionTypeEgalitarian): _209.DistributionTypeEgalitarianProtoMsg;
            };
            UsersDistribution: {
                typeUrl: string;
                encode(message: _209.UsersDistribution, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.UsersDistribution;
                fromPartial(object: Partial<_209.UsersDistribution>): _209.UsersDistribution;
                fromAmino(object: _209.UsersDistributionAmino): _209.UsersDistribution;
                toAmino(message: _209.UsersDistribution): _209.UsersDistributionAmino;
                fromAminoMsg(object: _209.UsersDistributionAminoMsg): _209.UsersDistribution;
                fromProtoMsg(message: _209.UsersDistributionProtoMsg): _209.UsersDistribution;
                toProto(message: _209.UsersDistribution): Uint8Array;
                toProtoMsg(message: _209.UsersDistribution): _209.UsersDistributionProtoMsg;
            };
            UsersDistributionTypeBasic: {
                typeUrl: string;
                encode(_: _209.UsersDistributionTypeBasic, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.UsersDistributionTypeBasic;
                fromPartial(_: Partial<_209.UsersDistributionTypeBasic>): _209.UsersDistributionTypeBasic;
                fromAmino(_: _209.UsersDistributionTypeBasicAmino): _209.UsersDistributionTypeBasic;
                toAmino(_: _209.UsersDistributionTypeBasic): _209.UsersDistributionTypeBasicAmino;
                fromAminoMsg(object: _209.UsersDistributionTypeBasicAminoMsg): _209.UsersDistributionTypeBasic;
                fromProtoMsg(message: _209.UsersDistributionTypeBasicProtoMsg): _209.UsersDistributionTypeBasic;
                toProto(message: _209.UsersDistributionTypeBasic): Uint8Array;
                toProtoMsg(message: _209.UsersDistributionTypeBasic): _209.UsersDistributionTypeBasicProtoMsg;
            };
            HistoricalRewards: {
                typeUrl: string;
                encode(message: _209.HistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.HistoricalRewards;
                fromPartial(object: Partial<_209.HistoricalRewards>): _209.HistoricalRewards;
                fromAmino(object: _209.HistoricalRewardsAmino): _209.HistoricalRewards;
                toAmino(message: _209.HistoricalRewards): _209.HistoricalRewardsAmino;
                fromAminoMsg(object: _209.HistoricalRewardsAminoMsg): _209.HistoricalRewards;
                fromProtoMsg(message: _209.HistoricalRewardsProtoMsg): _209.HistoricalRewards;
                toProto(message: _209.HistoricalRewards): Uint8Array;
                toProtoMsg(message: _209.HistoricalRewards): _209.HistoricalRewardsProtoMsg;
            };
            CurrentRewards: {
                typeUrl: string;
                encode(message: _209.CurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.CurrentRewards;
                fromPartial(object: Partial<_209.CurrentRewards>): _209.CurrentRewards;
                fromAmino(object: _209.CurrentRewardsAmino): _209.CurrentRewards;
                toAmino(message: _209.CurrentRewards): _209.CurrentRewardsAmino;
                fromAminoMsg(object: _209.CurrentRewardsAminoMsg): _209.CurrentRewards;
                fromProtoMsg(message: _209.CurrentRewardsProtoMsg): _209.CurrentRewards;
                toProto(message: _209.CurrentRewards): Uint8Array;
                toProtoMsg(message: _209.CurrentRewards): _209.CurrentRewardsProtoMsg;
            };
            OutstandingRewards: {
                typeUrl: string;
                encode(message: _209.OutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.OutstandingRewards;
                fromPartial(object: Partial<_209.OutstandingRewards>): _209.OutstandingRewards;
                fromAmino(object: _209.OutstandingRewardsAmino): _209.OutstandingRewards;
                toAmino(message: _209.OutstandingRewards): _209.OutstandingRewardsAmino;
                fromAminoMsg(object: _209.OutstandingRewardsAminoMsg): _209.OutstandingRewards;
                fromProtoMsg(message: _209.OutstandingRewardsProtoMsg): _209.OutstandingRewards;
                toProto(message: _209.OutstandingRewards): Uint8Array;
                toProtoMsg(message: _209.OutstandingRewards): _209.OutstandingRewardsProtoMsg;
            };
            AccumulatedCommission: {
                typeUrl: string;
                encode(message: _209.AccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.AccumulatedCommission;
                fromPartial(object: Partial<_209.AccumulatedCommission>): _209.AccumulatedCommission;
                fromAmino(object: _209.AccumulatedCommissionAmino): _209.AccumulatedCommission;
                toAmino(message: _209.AccumulatedCommission): _209.AccumulatedCommissionAmino;
                fromAminoMsg(object: _209.AccumulatedCommissionAminoMsg): _209.AccumulatedCommission;
                fromProtoMsg(message: _209.AccumulatedCommissionProtoMsg): _209.AccumulatedCommission;
                toProto(message: _209.AccumulatedCommission): Uint8Array;
                toProtoMsg(message: _209.AccumulatedCommission): _209.AccumulatedCommissionProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _209.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DelegatorStartingInfo;
                fromPartial(object: Partial<_209.DelegatorStartingInfo>): _209.DelegatorStartingInfo;
                fromAmino(object: _209.DelegatorStartingInfoAmino): _209.DelegatorStartingInfo;
                toAmino(message: _209.DelegatorStartingInfo): _209.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _209.DelegatorStartingInfoAminoMsg): _209.DelegatorStartingInfo;
                fromProtoMsg(message: _209.DelegatorStartingInfoProtoMsg): _209.DelegatorStartingInfo;
                toProto(message: _209.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _209.DelegatorStartingInfo): _209.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _209.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DelegationDelegatorReward;
                fromPartial(object: Partial<_209.DelegationDelegatorReward>): _209.DelegationDelegatorReward;
                fromAmino(object: _209.DelegationDelegatorRewardAmino): _209.DelegationDelegatorReward;
                toAmino(message: _209.DelegationDelegatorReward): _209.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _209.DelegationDelegatorRewardAminoMsg): _209.DelegationDelegatorReward;
                fromProtoMsg(message: _209.DelegationDelegatorRewardProtoMsg): _209.DelegationDelegatorReward;
                toProto(message: _209.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _209.DelegationDelegatorReward): _209.DelegationDelegatorRewardProtoMsg;
            };
            PoolServiceTotalDelegatorShares: {
                typeUrl: string;
                encode(message: _209.PoolServiceTotalDelegatorShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.PoolServiceTotalDelegatorShares;
                fromPartial(object: Partial<_209.PoolServiceTotalDelegatorShares>): _209.PoolServiceTotalDelegatorShares;
                fromAmino(object: _209.PoolServiceTotalDelegatorSharesAmino): _209.PoolServiceTotalDelegatorShares;
                toAmino(message: _209.PoolServiceTotalDelegatorShares): _209.PoolServiceTotalDelegatorSharesAmino;
                fromAminoMsg(object: _209.PoolServiceTotalDelegatorSharesAminoMsg): _209.PoolServiceTotalDelegatorShares;
                fromProtoMsg(message: _209.PoolServiceTotalDelegatorSharesProtoMsg): _209.PoolServiceTotalDelegatorShares;
                toProto(message: _209.PoolServiceTotalDelegatorShares): Uint8Array;
                toProtoMsg(message: _209.PoolServiceTotalDelegatorShares): _209.PoolServiceTotalDelegatorSharesProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _209.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.Pool;
                fromPartial(object: Partial<_209.Pool>): _209.Pool;
                fromAmino(object: _209.PoolAmino): _209.Pool;
                toAmino(message: _209.Pool): _209.PoolAmino;
                fromAminoMsg(object: _209.PoolAminoMsg): _209.Pool;
                fromProtoMsg(message: _209.PoolProtoMsg): _209.Pool;
                toProto(message: _209.Pool): Uint8Array;
                toProtoMsg(message: _209.Pool): _209.PoolProtoMsg;
            };
            DecPool: {
                typeUrl: string;
                encode(message: _209.DecPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.DecPool;
                fromPartial(object: Partial<_209.DecPool>): _209.DecPool;
                fromAmino(object: _209.DecPoolAmino): _209.DecPool;
                toAmino(message: _209.DecPool): _209.DecPoolAmino;
                fromAminoMsg(object: _209.DecPoolAminoMsg): _209.DecPool;
                fromProtoMsg(message: _209.DecPoolProtoMsg): _209.DecPool;
                toProto(message: _209.DecPool): Uint8Array;
                toProtoMsg(message: _209.DecPool): _209.DecPoolProtoMsg;
            };
            ServicePool: {
                typeUrl: string;
                encode(message: _209.ServicePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _209.ServicePool;
                fromPartial(object: Partial<_209.ServicePool>): _209.ServicePool;
                fromAmino(object: _209.ServicePoolAmino): _209.ServicePool;
                toAmino(message: _209.ServicePool): _209.ServicePoolAmino;
                fromAminoMsg(object: _209.ServicePoolAminoMsg): _209.ServicePool;
                fromProtoMsg(message: _209.ServicePoolProtoMsg): _209.ServicePool;
                toProto(message: _209.ServicePool): Uint8Array;
                toProtoMsg(message: _209.ServicePool): _209.ServicePoolProtoMsg;
            };
            Milkyway_rewardsv1DistributionType_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _209.DistributionTypeBasic | _209.DistributionTypeWeighted | _209.DistributionTypeEgalitarian;
            Milkyway_rewardsv1DistributionType_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Milkyway_rewardsv1DistributionType_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Milkyway_rewardsv1UsersDistributionType_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _209.UsersDistributionTypeBasic;
            Milkyway_rewardsv1UsersDistributionType_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Milkyway_rewardsv1UsersDistributionType_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgCreateRewardsPlan: {
                typeUrl: string;
                encode(message: _208.MsgCreateRewardsPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgCreateRewardsPlan;
                fromPartial(object: Partial<_208.MsgCreateRewardsPlan>): _208.MsgCreateRewardsPlan;
                fromAmino(object: _208.MsgCreateRewardsPlanAmino): _208.MsgCreateRewardsPlan;
                toAmino(message: _208.MsgCreateRewardsPlan): _208.MsgCreateRewardsPlanAmino;
                fromAminoMsg(object: _208.MsgCreateRewardsPlanAminoMsg): _208.MsgCreateRewardsPlan;
                toAminoMsg(message: _208.MsgCreateRewardsPlan): _208.MsgCreateRewardsPlanAminoMsg;
                fromProtoMsg(message: _208.MsgCreateRewardsPlanProtoMsg): _208.MsgCreateRewardsPlan;
                toProto(message: _208.MsgCreateRewardsPlan): Uint8Array;
                toProtoMsg(message: _208.MsgCreateRewardsPlan): _208.MsgCreateRewardsPlanProtoMsg;
            };
            MsgCreateRewardsPlanResponse: {
                typeUrl: string;
                encode(message: _208.MsgCreateRewardsPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgCreateRewardsPlanResponse;
                fromPartial(object: Partial<_208.MsgCreateRewardsPlanResponse>): _208.MsgCreateRewardsPlanResponse;
                fromAmino(object: _208.MsgCreateRewardsPlanResponseAmino): _208.MsgCreateRewardsPlanResponse;
                toAmino(message: _208.MsgCreateRewardsPlanResponse): _208.MsgCreateRewardsPlanResponseAmino;
                fromAminoMsg(object: _208.MsgCreateRewardsPlanResponseAminoMsg): _208.MsgCreateRewardsPlanResponse;
                fromProtoMsg(message: _208.MsgCreateRewardsPlanResponseProtoMsg): _208.MsgCreateRewardsPlanResponse;
                toProto(message: _208.MsgCreateRewardsPlanResponse): Uint8Array;
                toProtoMsg(message: _208.MsgCreateRewardsPlanResponse): _208.MsgCreateRewardsPlanResponseProtoMsg;
            };
            MsgEditRewardsPlan: {
                typeUrl: string;
                encode(message: _208.MsgEditRewardsPlan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgEditRewardsPlan;
                fromPartial(object: Partial<_208.MsgEditRewardsPlan>): _208.MsgEditRewardsPlan;
                fromAmino(object: _208.MsgEditRewardsPlanAmino): _208.MsgEditRewardsPlan;
                toAmino(message: _208.MsgEditRewardsPlan): _208.MsgEditRewardsPlanAmino;
                fromAminoMsg(object: _208.MsgEditRewardsPlanAminoMsg): _208.MsgEditRewardsPlan;
                toAminoMsg(message: _208.MsgEditRewardsPlan): _208.MsgEditRewardsPlanAminoMsg;
                fromProtoMsg(message: _208.MsgEditRewardsPlanProtoMsg): _208.MsgEditRewardsPlan;
                toProto(message: _208.MsgEditRewardsPlan): Uint8Array;
                toProtoMsg(message: _208.MsgEditRewardsPlan): _208.MsgEditRewardsPlanProtoMsg;
            };
            MsgEditRewardsPlanResponse: {
                typeUrl: string;
                encode(_: _208.MsgEditRewardsPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgEditRewardsPlanResponse;
                fromPartial(_: Partial<_208.MsgEditRewardsPlanResponse>): _208.MsgEditRewardsPlanResponse;
                fromAmino(_: _208.MsgEditRewardsPlanResponseAmino): _208.MsgEditRewardsPlanResponse;
                toAmino(_: _208.MsgEditRewardsPlanResponse): _208.MsgEditRewardsPlanResponseAmino;
                fromAminoMsg(object: _208.MsgEditRewardsPlanResponseAminoMsg): _208.MsgEditRewardsPlanResponse;
                fromProtoMsg(message: _208.MsgEditRewardsPlanResponseProtoMsg): _208.MsgEditRewardsPlanResponse;
                toProto(message: _208.MsgEditRewardsPlanResponse): Uint8Array;
                toProtoMsg(message: _208.MsgEditRewardsPlanResponse): _208.MsgEditRewardsPlanResponseProtoMsg;
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _208.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_208.MsgSetWithdrawAddress>): _208.MsgSetWithdrawAddress;
                fromAmino(object: _208.MsgSetWithdrawAddressAmino): _208.MsgSetWithdrawAddress;
                toAmino(message: _208.MsgSetWithdrawAddress): _208.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _208.MsgSetWithdrawAddressAminoMsg): _208.MsgSetWithdrawAddress;
                toAminoMsg(message: _208.MsgSetWithdrawAddress): _208.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _208.MsgSetWithdrawAddressProtoMsg): _208.MsgSetWithdrawAddress;
                toProto(message: _208.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _208.MsgSetWithdrawAddress): _208.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _208.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_208.MsgSetWithdrawAddressResponse>): _208.MsgSetWithdrawAddressResponse;
                fromAmino(_: _208.MsgSetWithdrawAddressResponseAmino): _208.MsgSetWithdrawAddressResponse;
                toAmino(_: _208.MsgSetWithdrawAddressResponse): _208.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _208.MsgSetWithdrawAddressResponseAminoMsg): _208.MsgSetWithdrawAddressResponse;
                fromProtoMsg(message: _208.MsgSetWithdrawAddressResponseProtoMsg): _208.MsgSetWithdrawAddressResponse;
                toProto(message: _208.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _208.MsgSetWithdrawAddressResponse): _208.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _208.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_208.MsgWithdrawDelegatorReward>): _208.MsgWithdrawDelegatorReward;
                fromAmino(object: _208.MsgWithdrawDelegatorRewardAmino): _208.MsgWithdrawDelegatorReward;
                toAmino(message: _208.MsgWithdrawDelegatorReward): _208.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _208.MsgWithdrawDelegatorRewardAminoMsg): _208.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _208.MsgWithdrawDelegatorReward): _208.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _208.MsgWithdrawDelegatorRewardProtoMsg): _208.MsgWithdrawDelegatorReward;
                toProto(message: _208.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawDelegatorReward): _208.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _208.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_208.MsgWithdrawDelegatorRewardResponse>): _208.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _208.MsgWithdrawDelegatorRewardResponseAmino): _208.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _208.MsgWithdrawDelegatorRewardResponse): _208.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _208.MsgWithdrawDelegatorRewardResponseAminoMsg): _208.MsgWithdrawDelegatorRewardResponse;
                fromProtoMsg(message: _208.MsgWithdrawDelegatorRewardResponseProtoMsg): _208.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _208.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawDelegatorRewardResponse): _208.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawOperatorCommission: {
                typeUrl: string;
                encode(message: _208.MsgWithdrawOperatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgWithdrawOperatorCommission;
                fromPartial(object: Partial<_208.MsgWithdrawOperatorCommission>): _208.MsgWithdrawOperatorCommission;
                fromAmino(object: _208.MsgWithdrawOperatorCommissionAmino): _208.MsgWithdrawOperatorCommission;
                toAmino(message: _208.MsgWithdrawOperatorCommission): _208.MsgWithdrawOperatorCommissionAmino;
                fromAminoMsg(object: _208.MsgWithdrawOperatorCommissionAminoMsg): _208.MsgWithdrawOperatorCommission;
                toAminoMsg(message: _208.MsgWithdrawOperatorCommission): _208.MsgWithdrawOperatorCommissionAminoMsg;
                fromProtoMsg(message: _208.MsgWithdrawOperatorCommissionProtoMsg): _208.MsgWithdrawOperatorCommission;
                toProto(message: _208.MsgWithdrawOperatorCommission): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawOperatorCommission): _208.MsgWithdrawOperatorCommissionProtoMsg;
            };
            MsgWithdrawOperatorCommissionResponse: {
                typeUrl: string;
                encode(message: _208.MsgWithdrawOperatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgWithdrawOperatorCommissionResponse;
                fromPartial(object: Partial<_208.MsgWithdrawOperatorCommissionResponse>): _208.MsgWithdrawOperatorCommissionResponse;
                fromAmino(object: _208.MsgWithdrawOperatorCommissionResponseAmino): _208.MsgWithdrawOperatorCommissionResponse;
                toAmino(message: _208.MsgWithdrawOperatorCommissionResponse): _208.MsgWithdrawOperatorCommissionResponseAmino;
                fromAminoMsg(object: _208.MsgWithdrawOperatorCommissionResponseAminoMsg): _208.MsgWithdrawOperatorCommissionResponse;
                fromProtoMsg(message: _208.MsgWithdrawOperatorCommissionResponseProtoMsg): _208.MsgWithdrawOperatorCommissionResponse;
                toProto(message: _208.MsgWithdrawOperatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _208.MsgWithdrawOperatorCommissionResponse): _208.MsgWithdrawOperatorCommissionResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _208.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgUpdateParams;
                fromPartial(object: Partial<_208.MsgUpdateParams>): _208.MsgUpdateParams;
                fromAmino(object: _208.MsgUpdateParamsAmino): _208.MsgUpdateParams;
                toAmino(message: _208.MsgUpdateParams): _208.MsgUpdateParamsAmino;
                fromAminoMsg(object: _208.MsgUpdateParamsAminoMsg): _208.MsgUpdateParams;
                toAminoMsg(message: _208.MsgUpdateParams): _208.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _208.MsgUpdateParamsProtoMsg): _208.MsgUpdateParams;
                toProto(message: _208.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _208.MsgUpdateParams): _208.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _208.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _208.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_208.MsgUpdateParamsResponse>): _208.MsgUpdateParamsResponse;
                fromAmino(_: _208.MsgUpdateParamsResponseAmino): _208.MsgUpdateParamsResponse;
                toAmino(_: _208.MsgUpdateParamsResponse): _208.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _208.MsgUpdateParamsResponseAminoMsg): _208.MsgUpdateParamsResponse;
                fromProtoMsg(message: _208.MsgUpdateParamsResponseProtoMsg): _208.MsgUpdateParamsResponse;
                toProto(message: _208.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _208.MsgUpdateParamsResponse): _208.MsgUpdateParamsResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _207.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_207.DelegatorWithdrawInfo>): _207.DelegatorWithdrawInfo;
                fromAmino(object: _207.DelegatorWithdrawInfoAmino): _207.DelegatorWithdrawInfo;
                toAmino(message: _207.DelegatorWithdrawInfo): _207.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _207.DelegatorWithdrawInfoAminoMsg): _207.DelegatorWithdrawInfo;
                fromProtoMsg(message: _207.DelegatorWithdrawInfoProtoMsg): _207.DelegatorWithdrawInfo;
                toProto(message: _207.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _207.DelegatorWithdrawInfo): _207.DelegatorWithdrawInfoProtoMsg;
            };
            OutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _207.OutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.OutstandingRewardsRecord;
                fromPartial(object: Partial<_207.OutstandingRewardsRecord>): _207.OutstandingRewardsRecord;
                fromAmino(object: _207.OutstandingRewardsRecordAmino): _207.OutstandingRewardsRecord;
                toAmino(message: _207.OutstandingRewardsRecord): _207.OutstandingRewardsRecordAmino;
                fromAminoMsg(object: _207.OutstandingRewardsRecordAminoMsg): _207.OutstandingRewardsRecord;
                fromProtoMsg(message: _207.OutstandingRewardsRecordProtoMsg): _207.OutstandingRewardsRecord;
                toProto(message: _207.OutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _207.OutstandingRewardsRecord): _207.OutstandingRewardsRecordProtoMsg;
            };
            HistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _207.HistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.HistoricalRewardsRecord;
                fromPartial(object: Partial<_207.HistoricalRewardsRecord>): _207.HistoricalRewardsRecord;
                fromAmino(object: _207.HistoricalRewardsRecordAmino): _207.HistoricalRewardsRecord;
                toAmino(message: _207.HistoricalRewardsRecord): _207.HistoricalRewardsRecordAmino;
                fromAminoMsg(object: _207.HistoricalRewardsRecordAminoMsg): _207.HistoricalRewardsRecord;
                fromProtoMsg(message: _207.HistoricalRewardsRecordProtoMsg): _207.HistoricalRewardsRecord;
                toProto(message: _207.HistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _207.HistoricalRewardsRecord): _207.HistoricalRewardsRecordProtoMsg;
            };
            CurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _207.CurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.CurrentRewardsRecord;
                fromPartial(object: Partial<_207.CurrentRewardsRecord>): _207.CurrentRewardsRecord;
                fromAmino(object: _207.CurrentRewardsRecordAmino): _207.CurrentRewardsRecord;
                toAmino(message: _207.CurrentRewardsRecord): _207.CurrentRewardsRecordAmino;
                fromAminoMsg(object: _207.CurrentRewardsRecordAminoMsg): _207.CurrentRewardsRecord;
                fromProtoMsg(message: _207.CurrentRewardsRecordProtoMsg): _207.CurrentRewardsRecord;
                toProto(message: _207.CurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _207.CurrentRewardsRecord): _207.CurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _207.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_207.DelegatorStartingInfoRecord>): _207.DelegatorStartingInfoRecord;
                fromAmino(object: _207.DelegatorStartingInfoRecordAmino): _207.DelegatorStartingInfoRecord;
                toAmino(message: _207.DelegatorStartingInfoRecord): _207.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _207.DelegatorStartingInfoRecordAminoMsg): _207.DelegatorStartingInfoRecord;
                fromProtoMsg(message: _207.DelegatorStartingInfoRecordProtoMsg): _207.DelegatorStartingInfoRecord;
                toProto(message: _207.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _207.DelegatorStartingInfoRecord): _207.DelegatorStartingInfoRecordProtoMsg;
            };
            OperatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _207.OperatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.OperatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_207.OperatorAccumulatedCommissionRecord>): _207.OperatorAccumulatedCommissionRecord;
                fromAmino(object: _207.OperatorAccumulatedCommissionRecordAmino): _207.OperatorAccumulatedCommissionRecord;
                toAmino(message: _207.OperatorAccumulatedCommissionRecord): _207.OperatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _207.OperatorAccumulatedCommissionRecordAminoMsg): _207.OperatorAccumulatedCommissionRecord;
                fromProtoMsg(message: _207.OperatorAccumulatedCommissionRecordProtoMsg): _207.OperatorAccumulatedCommissionRecord;
                toProto(message: _207.OperatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _207.OperatorAccumulatedCommissionRecord): _207.OperatorAccumulatedCommissionRecordProtoMsg;
            };
            DelegationTypeRecords: {
                typeUrl: string;
                encode(message: _207.DelegationTypeRecords, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.DelegationTypeRecords;
                fromPartial(object: Partial<_207.DelegationTypeRecords>): _207.DelegationTypeRecords;
                fromAmino(object: _207.DelegationTypeRecordsAmino): _207.DelegationTypeRecords;
                toAmino(message: _207.DelegationTypeRecords): _207.DelegationTypeRecordsAmino;
                fromAminoMsg(object: _207.DelegationTypeRecordsAminoMsg): _207.DelegationTypeRecords;
                fromProtoMsg(message: _207.DelegationTypeRecordsProtoMsg): _207.DelegationTypeRecords;
                toProto(message: _207.DelegationTypeRecords): Uint8Array;
                toProtoMsg(message: _207.DelegationTypeRecords): _207.DelegationTypeRecordsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _207.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.GenesisState;
                fromPartial(object: Partial<_207.GenesisState>): _207.GenesisState;
                fromAmino(object: _207.GenesisStateAmino): _207.GenesisState;
                toAmino(message: _207.GenesisState): _207.GenesisStateAmino;
                fromAminoMsg(object: _207.GenesisStateAminoMsg): _207.GenesisState;
                fromProtoMsg(message: _207.GenesisStateProtoMsg): _207.GenesisState;
                toProto(message: _207.GenesisState): Uint8Array;
                toProtoMsg(message: _207.GenesisState): _207.GenesisStateProtoMsg;
            };
        };
    }
    namespace services {
        const v1: {
            MsgClientImpl: typeof _361.MsgClientImpl;
            QueryClientImpl: typeof _355.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                service(request: _216.QueryServiceRequest): Promise<_216.QueryServiceResponse>;
                services(request?: _216.QueryServicesRequest): Promise<_216.QueryServicesResponse>;
                serviceParams(request: _216.QueryServiceParamsRequest): Promise<_216.QueryServiceParamsResponse>;
                params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createService(value: _213.MsgCreateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateService(value: _213.MsgUpdateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateService(value: _213.MsgActivateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deactivateService(value: _213.MsgDeactivateService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteService(value: _213.MsgDeleteService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    transferServiceOwnership(value: _213.MsgTransferServiceOwnership): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setServiceParams(value: _213.MsgSetServiceParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _213.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    accreditService(value: _213.MsgAccreditService): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeServiceAccreditation(value: _213.MsgRevokeServiceAccreditation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createService(value: _213.MsgCreateService): {
                        typeUrl: string;
                        value: _213.MsgCreateService;
                    };
                    updateService(value: _213.MsgUpdateService): {
                        typeUrl: string;
                        value: _213.MsgUpdateService;
                    };
                    activateService(value: _213.MsgActivateService): {
                        typeUrl: string;
                        value: _213.MsgActivateService;
                    };
                    deactivateService(value: _213.MsgDeactivateService): {
                        typeUrl: string;
                        value: _213.MsgDeactivateService;
                    };
                    deleteService(value: _213.MsgDeleteService): {
                        typeUrl: string;
                        value: _213.MsgDeleteService;
                    };
                    transferServiceOwnership(value: _213.MsgTransferServiceOwnership): {
                        typeUrl: string;
                        value: _213.MsgTransferServiceOwnership;
                    };
                    setServiceParams(value: _213.MsgSetServiceParams): {
                        typeUrl: string;
                        value: _213.MsgSetServiceParams;
                    };
                    updateParams(value: _213.MsgUpdateParams): {
                        typeUrl: string;
                        value: _213.MsgUpdateParams;
                    };
                    accreditService(value: _213.MsgAccreditService): {
                        typeUrl: string;
                        value: _213.MsgAccreditService;
                    };
                    revokeServiceAccreditation(value: _213.MsgRevokeServiceAccreditation): {
                        typeUrl: string;
                        value: _213.MsgRevokeServiceAccreditation;
                    };
                };
                fromPartial: {
                    createService(value: _213.MsgCreateService): {
                        typeUrl: string;
                        value: _213.MsgCreateService;
                    };
                    updateService(value: _213.MsgUpdateService): {
                        typeUrl: string;
                        value: _213.MsgUpdateService;
                    };
                    activateService(value: _213.MsgActivateService): {
                        typeUrl: string;
                        value: _213.MsgActivateService;
                    };
                    deactivateService(value: _213.MsgDeactivateService): {
                        typeUrl: string;
                        value: _213.MsgDeactivateService;
                    };
                    deleteService(value: _213.MsgDeleteService): {
                        typeUrl: string;
                        value: _213.MsgDeleteService;
                    };
                    transferServiceOwnership(value: _213.MsgTransferServiceOwnership): {
                        typeUrl: string;
                        value: _213.MsgTransferServiceOwnership;
                    };
                    setServiceParams(value: _213.MsgSetServiceParams): {
                        typeUrl: string;
                        value: _213.MsgSetServiceParams;
                    };
                    updateParams(value: _213.MsgUpdateParams): {
                        typeUrl: string;
                        value: _213.MsgUpdateParams;
                    };
                    accreditService(value: _213.MsgAccreditService): {
                        typeUrl: string;
                        value: _213.MsgAccreditService;
                    };
                    revokeServiceAccreditation(value: _213.MsgRevokeServiceAccreditation): {
                        typeUrl: string;
                        value: _213.MsgRevokeServiceAccreditation;
                    };
                };
            };
            AminoConverter: {
                "/milkyway.services.v1.MsgCreateService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgCreateService) => _213.MsgCreateServiceAmino;
                    fromAmino: (object: _213.MsgCreateServiceAmino) => _213.MsgCreateService;
                };
                "/milkyway.services.v1.MsgUpdateService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgUpdateService) => _213.MsgUpdateServiceAmino;
                    fromAmino: (object: _213.MsgUpdateServiceAmino) => _213.MsgUpdateService;
                };
                "/milkyway.services.v1.MsgActivateService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgActivateService) => _213.MsgActivateServiceAmino;
                    fromAmino: (object: _213.MsgActivateServiceAmino) => _213.MsgActivateService;
                };
                "/milkyway.services.v1.MsgDeactivateService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgDeactivateService) => _213.MsgDeactivateServiceAmino;
                    fromAmino: (object: _213.MsgDeactivateServiceAmino) => _213.MsgDeactivateService;
                };
                "/milkyway.services.v1.MsgDeleteService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgDeleteService) => _213.MsgDeleteServiceAmino;
                    fromAmino: (object: _213.MsgDeleteServiceAmino) => _213.MsgDeleteService;
                };
                "/milkyway.services.v1.MsgTransferServiceOwnership": {
                    aminoType: string;
                    toAmino: (message: _213.MsgTransferServiceOwnership) => _213.MsgTransferServiceOwnershipAmino;
                    fromAmino: (object: _213.MsgTransferServiceOwnershipAmino) => _213.MsgTransferServiceOwnership;
                };
                "/milkyway.services.v1.MsgSetServiceParams": {
                    aminoType: string;
                    toAmino: (message: _213.MsgSetServiceParams) => _213.MsgSetServiceParamsAmino;
                    fromAmino: (object: _213.MsgSetServiceParamsAmino) => _213.MsgSetServiceParams;
                };
                "/milkyway.services.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _213.MsgUpdateParams) => _213.MsgUpdateParamsAmino;
                    fromAmino: (object: _213.MsgUpdateParamsAmino) => _213.MsgUpdateParams;
                };
                "/milkyway.services.v1.MsgAccreditService": {
                    aminoType: string;
                    toAmino: (message: _213.MsgAccreditService) => _213.MsgAccreditServiceAmino;
                    fromAmino: (object: _213.MsgAccreditServiceAmino) => _213.MsgAccreditService;
                };
                "/milkyway.services.v1.MsgRevokeServiceAccreditation": {
                    aminoType: string;
                    toAmino: (message: _213.MsgRevokeServiceAccreditation) => _213.MsgRevokeServiceAccreditationAmino;
                    fromAmino: (object: _213.MsgRevokeServiceAccreditationAmino) => _213.MsgRevokeServiceAccreditation;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _216.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryParamsRequest;
                fromPartial(_: Partial<_216.QueryParamsRequest>): _216.QueryParamsRequest;
                fromAmino(_: _216.QueryParamsRequestAmino): _216.QueryParamsRequest;
                toAmino(_: _216.QueryParamsRequest): _216.QueryParamsRequestAmino;
                fromAminoMsg(object: _216.QueryParamsRequestAminoMsg): _216.QueryParamsRequest;
                fromProtoMsg(message: _216.QueryParamsRequestProtoMsg): _216.QueryParamsRequest;
                toProto(message: _216.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _216.QueryParamsRequest): _216.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _216.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryParamsResponse;
                fromPartial(object: Partial<_216.QueryParamsResponse>): _216.QueryParamsResponse;
                fromAmino(object: _216.QueryParamsResponseAmino): _216.QueryParamsResponse;
                toAmino(message: _216.QueryParamsResponse): _216.QueryParamsResponseAmino;
                fromAminoMsg(object: _216.QueryParamsResponseAminoMsg): _216.QueryParamsResponse;
                fromProtoMsg(message: _216.QueryParamsResponseProtoMsg): _216.QueryParamsResponse;
                toProto(message: _216.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _216.QueryParamsResponse): _216.QueryParamsResponseProtoMsg;
            };
            QueryServicesRequest: {
                typeUrl: string;
                encode(message: _216.QueryServicesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServicesRequest;
                fromPartial(object: Partial<_216.QueryServicesRequest>): _216.QueryServicesRequest;
                fromAmino(object: _216.QueryServicesRequestAmino): _216.QueryServicesRequest;
                toAmino(message: _216.QueryServicesRequest): _216.QueryServicesRequestAmino;
                fromAminoMsg(object: _216.QueryServicesRequestAminoMsg): _216.QueryServicesRequest;
                fromProtoMsg(message: _216.QueryServicesRequestProtoMsg): _216.QueryServicesRequest;
                toProto(message: _216.QueryServicesRequest): Uint8Array;
                toProtoMsg(message: _216.QueryServicesRequest): _216.QueryServicesRequestProtoMsg;
            };
            QueryServicesResponse: {
                typeUrl: string;
                encode(message: _216.QueryServicesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServicesResponse;
                fromPartial(object: Partial<_216.QueryServicesResponse>): _216.QueryServicesResponse;
                fromAmino(object: _216.QueryServicesResponseAmino): _216.QueryServicesResponse;
                toAmino(message: _216.QueryServicesResponse): _216.QueryServicesResponseAmino;
                fromAminoMsg(object: _216.QueryServicesResponseAminoMsg): _216.QueryServicesResponse;
                fromProtoMsg(message: _216.QueryServicesResponseProtoMsg): _216.QueryServicesResponse;
                toProto(message: _216.QueryServicesResponse): Uint8Array;
                toProtoMsg(message: _216.QueryServicesResponse): _216.QueryServicesResponseProtoMsg;
            };
            QueryServiceRequest: {
                typeUrl: string;
                encode(message: _216.QueryServiceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServiceRequest;
                fromPartial(object: Partial<_216.QueryServiceRequest>): _216.QueryServiceRequest;
                fromAmino(object: _216.QueryServiceRequestAmino): _216.QueryServiceRequest;
                toAmino(message: _216.QueryServiceRequest): _216.QueryServiceRequestAmino;
                fromAminoMsg(object: _216.QueryServiceRequestAminoMsg): _216.QueryServiceRequest;
                fromProtoMsg(message: _216.QueryServiceRequestProtoMsg): _216.QueryServiceRequest;
                toProto(message: _216.QueryServiceRequest): Uint8Array;
                toProtoMsg(message: _216.QueryServiceRequest): _216.QueryServiceRequestProtoMsg;
            };
            QueryServiceResponse: {
                typeUrl: string;
                encode(message: _216.QueryServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServiceResponse;
                fromPartial(object: Partial<_216.QueryServiceResponse>): _216.QueryServiceResponse;
                fromAmino(object: _216.QueryServiceResponseAmino): _216.QueryServiceResponse;
                toAmino(message: _216.QueryServiceResponse): _216.QueryServiceResponseAmino;
                fromAminoMsg(object: _216.QueryServiceResponseAminoMsg): _216.QueryServiceResponse;
                fromProtoMsg(message: _216.QueryServiceResponseProtoMsg): _216.QueryServiceResponse;
                toProto(message: _216.QueryServiceResponse): Uint8Array;
                toProtoMsg(message: _216.QueryServiceResponse): _216.QueryServiceResponseProtoMsg;
            };
            QueryServiceParamsRequest: {
                typeUrl: string;
                encode(message: _216.QueryServiceParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServiceParamsRequest;
                fromPartial(object: Partial<_216.QueryServiceParamsRequest>): _216.QueryServiceParamsRequest;
                fromAmino(object: _216.QueryServiceParamsRequestAmino): _216.QueryServiceParamsRequest;
                toAmino(message: _216.QueryServiceParamsRequest): _216.QueryServiceParamsRequestAmino;
                fromAminoMsg(object: _216.QueryServiceParamsRequestAminoMsg): _216.QueryServiceParamsRequest;
                fromProtoMsg(message: _216.QueryServiceParamsRequestProtoMsg): _216.QueryServiceParamsRequest;
                toProto(message: _216.QueryServiceParamsRequest): Uint8Array;
                toProtoMsg(message: _216.QueryServiceParamsRequest): _216.QueryServiceParamsRequestProtoMsg;
            };
            QueryServiceParamsResponse: {
                typeUrl: string;
                encode(message: _216.QueryServiceParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _216.QueryServiceParamsResponse;
                fromPartial(object: Partial<_216.QueryServiceParamsResponse>): _216.QueryServiceParamsResponse;
                fromAmino(object: _216.QueryServiceParamsResponseAmino): _216.QueryServiceParamsResponse;
                toAmino(message: _216.QueryServiceParamsResponse): _216.QueryServiceParamsResponseAmino;
                fromAminoMsg(object: _216.QueryServiceParamsResponseAminoMsg): _216.QueryServiceParamsResponse;
                fromProtoMsg(message: _216.QueryServiceParamsResponseProtoMsg): _216.QueryServiceParamsResponse;
                toProto(message: _216.QueryServiceParamsResponse): Uint8Array;
                toProtoMsg(message: _216.QueryServiceParamsResponse): _216.QueryServiceParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _215.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _215.Params;
                fromPartial(object: Partial<_215.Params>): _215.Params;
                fromAmino(object: _215.ParamsAmino): _215.Params;
                toAmino(message: _215.Params): _215.ParamsAmino;
                fromAminoMsg(object: _215.ParamsAminoMsg): _215.Params;
                fromProtoMsg(message: _215.ParamsProtoMsg): _215.Params;
                toProto(message: _215.Params): Uint8Array;
                toProtoMsg(message: _215.Params): _215.ParamsProtoMsg;
            };
            serviceStatusFromJSON(object: any): _214.ServiceStatus;
            serviceStatusToJSON(object: _214.ServiceStatus): string;
            ServiceStatus: typeof _214.ServiceStatus;
            ServiceStatusSDKType: typeof _214.ServiceStatus;
            ServiceStatusAmino: typeof _214.ServiceStatus;
            Service: {
                typeUrl: string;
                encode(message: _214.Service, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.Service;
                fromPartial(object: Partial<_214.Service>): _214.Service;
                fromAmino(object: _214.ServiceAmino): _214.Service;
                toAmino(message: _214.Service): _214.ServiceAmino;
                fromAminoMsg(object: _214.ServiceAminoMsg): _214.Service;
                fromProtoMsg(message: _214.ServiceProtoMsg): _214.Service;
                toProto(message: _214.Service): Uint8Array;
                toProtoMsg(message: _214.Service): _214.ServiceProtoMsg;
            };
            ServiceParams: {
                typeUrl: string;
                encode(message: _214.ServiceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.ServiceParams;
                fromPartial(object: Partial<_214.ServiceParams>): _214.ServiceParams;
                fromAmino(object: _214.ServiceParamsAmino): _214.ServiceParams;
                toAmino(message: _214.ServiceParams): _214.ServiceParamsAmino;
                fromAminoMsg(object: _214.ServiceParamsAminoMsg): _214.ServiceParams;
                fromProtoMsg(message: _214.ServiceParamsProtoMsg): _214.ServiceParams;
                toProto(message: _214.ServiceParams): Uint8Array;
                toProtoMsg(message: _214.ServiceParams): _214.ServiceParamsProtoMsg;
            };
            MsgCreateService: {
                typeUrl: string;
                encode(message: _213.MsgCreateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgCreateService;
                fromPartial(object: Partial<_213.MsgCreateService>): _213.MsgCreateService;
                fromAmino(object: _213.MsgCreateServiceAmino): _213.MsgCreateService;
                toAmino(message: _213.MsgCreateService): _213.MsgCreateServiceAmino;
                fromAminoMsg(object: _213.MsgCreateServiceAminoMsg): _213.MsgCreateService;
                toAminoMsg(message: _213.MsgCreateService): _213.MsgCreateServiceAminoMsg;
                fromProtoMsg(message: _213.MsgCreateServiceProtoMsg): _213.MsgCreateService;
                toProto(message: _213.MsgCreateService): Uint8Array;
                toProtoMsg(message: _213.MsgCreateService): _213.MsgCreateServiceProtoMsg;
            };
            MsgCreateServiceResponse: {
                typeUrl: string;
                encode(message: _213.MsgCreateServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgCreateServiceResponse;
                fromPartial(object: Partial<_213.MsgCreateServiceResponse>): _213.MsgCreateServiceResponse;
                fromAmino(object: _213.MsgCreateServiceResponseAmino): _213.MsgCreateServiceResponse;
                toAmino(message: _213.MsgCreateServiceResponse): _213.MsgCreateServiceResponseAmino;
                fromAminoMsg(object: _213.MsgCreateServiceResponseAminoMsg): _213.MsgCreateServiceResponse;
                fromProtoMsg(message: _213.MsgCreateServiceResponseProtoMsg): _213.MsgCreateServiceResponse;
                toProto(message: _213.MsgCreateServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgCreateServiceResponse): _213.MsgCreateServiceResponseProtoMsg;
            };
            MsgUpdateService: {
                typeUrl: string;
                encode(message: _213.MsgUpdateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgUpdateService;
                fromPartial(object: Partial<_213.MsgUpdateService>): _213.MsgUpdateService;
                fromAmino(object: _213.MsgUpdateServiceAmino): _213.MsgUpdateService;
                toAmino(message: _213.MsgUpdateService): _213.MsgUpdateServiceAmino;
                fromAminoMsg(object: _213.MsgUpdateServiceAminoMsg): _213.MsgUpdateService;
                toAminoMsg(message: _213.MsgUpdateService): _213.MsgUpdateServiceAminoMsg;
                fromProtoMsg(message: _213.MsgUpdateServiceProtoMsg): _213.MsgUpdateService;
                toProto(message: _213.MsgUpdateService): Uint8Array;
                toProtoMsg(message: _213.MsgUpdateService): _213.MsgUpdateServiceProtoMsg;
            };
            MsgUpdateServiceResponse: {
                typeUrl: string;
                encode(_: _213.MsgUpdateServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgUpdateServiceResponse;
                fromPartial(_: Partial<_213.MsgUpdateServiceResponse>): _213.MsgUpdateServiceResponse;
                fromAmino(_: _213.MsgUpdateServiceResponseAmino): _213.MsgUpdateServiceResponse;
                toAmino(_: _213.MsgUpdateServiceResponse): _213.MsgUpdateServiceResponseAmino;
                fromAminoMsg(object: _213.MsgUpdateServiceResponseAminoMsg): _213.MsgUpdateServiceResponse;
                fromProtoMsg(message: _213.MsgUpdateServiceResponseProtoMsg): _213.MsgUpdateServiceResponse;
                toProto(message: _213.MsgUpdateServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgUpdateServiceResponse): _213.MsgUpdateServiceResponseProtoMsg;
            };
            MsgActivateService: {
                typeUrl: string;
                encode(message: _213.MsgActivateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgActivateService;
                fromPartial(object: Partial<_213.MsgActivateService>): _213.MsgActivateService;
                fromAmino(object: _213.MsgActivateServiceAmino): _213.MsgActivateService;
                toAmino(message: _213.MsgActivateService): _213.MsgActivateServiceAmino;
                fromAminoMsg(object: _213.MsgActivateServiceAminoMsg): _213.MsgActivateService;
                toAminoMsg(message: _213.MsgActivateService): _213.MsgActivateServiceAminoMsg;
                fromProtoMsg(message: _213.MsgActivateServiceProtoMsg): _213.MsgActivateService;
                toProto(message: _213.MsgActivateService): Uint8Array;
                toProtoMsg(message: _213.MsgActivateService): _213.MsgActivateServiceProtoMsg;
            };
            MsgActivateServiceResponse: {
                typeUrl: string;
                encode(_: _213.MsgActivateServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgActivateServiceResponse;
                fromPartial(_: Partial<_213.MsgActivateServiceResponse>): _213.MsgActivateServiceResponse;
                fromAmino(_: _213.MsgActivateServiceResponseAmino): _213.MsgActivateServiceResponse;
                toAmino(_: _213.MsgActivateServiceResponse): _213.MsgActivateServiceResponseAmino;
                fromAminoMsg(object: _213.MsgActivateServiceResponseAminoMsg): _213.MsgActivateServiceResponse;
                fromProtoMsg(message: _213.MsgActivateServiceResponseProtoMsg): _213.MsgActivateServiceResponse;
                toProto(message: _213.MsgActivateServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgActivateServiceResponse): _213.MsgActivateServiceResponseProtoMsg;
            };
            MsgDeactivateService: {
                typeUrl: string;
                encode(message: _213.MsgDeactivateService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgDeactivateService;
                fromPartial(object: Partial<_213.MsgDeactivateService>): _213.MsgDeactivateService;
                fromAmino(object: _213.MsgDeactivateServiceAmino): _213.MsgDeactivateService;
                toAmino(message: _213.MsgDeactivateService): _213.MsgDeactivateServiceAmino;
                fromAminoMsg(object: _213.MsgDeactivateServiceAminoMsg): _213.MsgDeactivateService;
                toAminoMsg(message: _213.MsgDeactivateService): _213.MsgDeactivateServiceAminoMsg;
                fromProtoMsg(message: _213.MsgDeactivateServiceProtoMsg): _213.MsgDeactivateService;
                toProto(message: _213.MsgDeactivateService): Uint8Array;
                toProtoMsg(message: _213.MsgDeactivateService): _213.MsgDeactivateServiceProtoMsg;
            };
            MsgDeactivateServiceResponse: {
                typeUrl: string;
                encode(_: _213.MsgDeactivateServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgDeactivateServiceResponse;
                fromPartial(_: Partial<_213.MsgDeactivateServiceResponse>): _213.MsgDeactivateServiceResponse;
                fromAmino(_: _213.MsgDeactivateServiceResponseAmino): _213.MsgDeactivateServiceResponse;
                toAmino(_: _213.MsgDeactivateServiceResponse): _213.MsgDeactivateServiceResponseAmino;
                fromAminoMsg(object: _213.MsgDeactivateServiceResponseAminoMsg): _213.MsgDeactivateServiceResponse;
                fromProtoMsg(message: _213.MsgDeactivateServiceResponseProtoMsg): _213.MsgDeactivateServiceResponse;
                toProto(message: _213.MsgDeactivateServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgDeactivateServiceResponse): _213.MsgDeactivateServiceResponseProtoMsg;
            };
            MsgDeleteService: {
                typeUrl: string;
                encode(message: _213.MsgDeleteService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgDeleteService;
                fromPartial(object: Partial<_213.MsgDeleteService>): _213.MsgDeleteService;
                fromAmino(object: _213.MsgDeleteServiceAmino): _213.MsgDeleteService;
                toAmino(message: _213.MsgDeleteService): _213.MsgDeleteServiceAmino;
                fromAminoMsg(object: _213.MsgDeleteServiceAminoMsg): _213.MsgDeleteService;
                toAminoMsg(message: _213.MsgDeleteService): _213.MsgDeleteServiceAminoMsg;
                fromProtoMsg(message: _213.MsgDeleteServiceProtoMsg): _213.MsgDeleteService;
                toProto(message: _213.MsgDeleteService): Uint8Array;
                toProtoMsg(message: _213.MsgDeleteService): _213.MsgDeleteServiceProtoMsg;
            };
            MsgDeleteServiceResponse: {
                typeUrl: string;
                encode(_: _213.MsgDeleteServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgDeleteServiceResponse;
                fromPartial(_: Partial<_213.MsgDeleteServiceResponse>): _213.MsgDeleteServiceResponse;
                fromAmino(_: _213.MsgDeleteServiceResponseAmino): _213.MsgDeleteServiceResponse;
                toAmino(_: _213.MsgDeleteServiceResponse): _213.MsgDeleteServiceResponseAmino;
                fromAminoMsg(object: _213.MsgDeleteServiceResponseAminoMsg): _213.MsgDeleteServiceResponse;
                fromProtoMsg(message: _213.MsgDeleteServiceResponseProtoMsg): _213.MsgDeleteServiceResponse;
                toProto(message: _213.MsgDeleteServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgDeleteServiceResponse): _213.MsgDeleteServiceResponseProtoMsg;
            };
            MsgTransferServiceOwnership: {
                typeUrl: string;
                encode(message: _213.MsgTransferServiceOwnership, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgTransferServiceOwnership;
                fromPartial(object: Partial<_213.MsgTransferServiceOwnership>): _213.MsgTransferServiceOwnership;
                fromAmino(object: _213.MsgTransferServiceOwnershipAmino): _213.MsgTransferServiceOwnership;
                toAmino(message: _213.MsgTransferServiceOwnership): _213.MsgTransferServiceOwnershipAmino;
                fromAminoMsg(object: _213.MsgTransferServiceOwnershipAminoMsg): _213.MsgTransferServiceOwnership;
                toAminoMsg(message: _213.MsgTransferServiceOwnership): _213.MsgTransferServiceOwnershipAminoMsg;
                fromProtoMsg(message: _213.MsgTransferServiceOwnershipProtoMsg): _213.MsgTransferServiceOwnership;
                toProto(message: _213.MsgTransferServiceOwnership): Uint8Array;
                toProtoMsg(message: _213.MsgTransferServiceOwnership): _213.MsgTransferServiceOwnershipProtoMsg;
            };
            MsgTransferServiceOwnershipResponse: {
                typeUrl: string;
                encode(_: _213.MsgTransferServiceOwnershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgTransferServiceOwnershipResponse;
                fromPartial(_: Partial<_213.MsgTransferServiceOwnershipResponse>): _213.MsgTransferServiceOwnershipResponse;
                fromAmino(_: _213.MsgTransferServiceOwnershipResponseAmino): _213.MsgTransferServiceOwnershipResponse;
                toAmino(_: _213.MsgTransferServiceOwnershipResponse): _213.MsgTransferServiceOwnershipResponseAmino;
                fromAminoMsg(object: _213.MsgTransferServiceOwnershipResponseAminoMsg): _213.MsgTransferServiceOwnershipResponse;
                fromProtoMsg(message: _213.MsgTransferServiceOwnershipResponseProtoMsg): _213.MsgTransferServiceOwnershipResponse;
                toProto(message: _213.MsgTransferServiceOwnershipResponse): Uint8Array;
                toProtoMsg(message: _213.MsgTransferServiceOwnershipResponse): _213.MsgTransferServiceOwnershipResponseProtoMsg;
            };
            MsgSetServiceParams: {
                typeUrl: string;
                encode(message: _213.MsgSetServiceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgSetServiceParams;
                fromPartial(object: Partial<_213.MsgSetServiceParams>): _213.MsgSetServiceParams;
                fromAmino(object: _213.MsgSetServiceParamsAmino): _213.MsgSetServiceParams;
                toAmino(message: _213.MsgSetServiceParams): _213.MsgSetServiceParamsAmino;
                fromAminoMsg(object: _213.MsgSetServiceParamsAminoMsg): _213.MsgSetServiceParams;
                toAminoMsg(message: _213.MsgSetServiceParams): _213.MsgSetServiceParamsAminoMsg;
                fromProtoMsg(message: _213.MsgSetServiceParamsProtoMsg): _213.MsgSetServiceParams;
                toProto(message: _213.MsgSetServiceParams): Uint8Array;
                toProtoMsg(message: _213.MsgSetServiceParams): _213.MsgSetServiceParamsProtoMsg;
            };
            MsgSetServiceParamsResponse: {
                typeUrl: string;
                encode(_: _213.MsgSetServiceParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgSetServiceParamsResponse;
                fromPartial(_: Partial<_213.MsgSetServiceParamsResponse>): _213.MsgSetServiceParamsResponse;
                fromAmino(_: _213.MsgSetServiceParamsResponseAmino): _213.MsgSetServiceParamsResponse;
                toAmino(_: _213.MsgSetServiceParamsResponse): _213.MsgSetServiceParamsResponseAmino;
                fromAminoMsg(object: _213.MsgSetServiceParamsResponseAminoMsg): _213.MsgSetServiceParamsResponse;
                fromProtoMsg(message: _213.MsgSetServiceParamsResponseProtoMsg): _213.MsgSetServiceParamsResponse;
                toProto(message: _213.MsgSetServiceParamsResponse): Uint8Array;
                toProtoMsg(message: _213.MsgSetServiceParamsResponse): _213.MsgSetServiceParamsResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _213.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgUpdateParams;
                fromPartial(object: Partial<_213.MsgUpdateParams>): _213.MsgUpdateParams;
                fromAmino(object: _213.MsgUpdateParamsAmino): _213.MsgUpdateParams;
                toAmino(message: _213.MsgUpdateParams): _213.MsgUpdateParamsAmino;
                fromAminoMsg(object: _213.MsgUpdateParamsAminoMsg): _213.MsgUpdateParams;
                toAminoMsg(message: _213.MsgUpdateParams): _213.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _213.MsgUpdateParamsProtoMsg): _213.MsgUpdateParams;
                toProto(message: _213.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _213.MsgUpdateParams): _213.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _213.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_213.MsgUpdateParamsResponse>): _213.MsgUpdateParamsResponse;
                fromAmino(_: _213.MsgUpdateParamsResponseAmino): _213.MsgUpdateParamsResponse;
                toAmino(_: _213.MsgUpdateParamsResponse): _213.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _213.MsgUpdateParamsResponseAminoMsg): _213.MsgUpdateParamsResponse;
                fromProtoMsg(message: _213.MsgUpdateParamsResponseProtoMsg): _213.MsgUpdateParamsResponse;
                toProto(message: _213.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _213.MsgUpdateParamsResponse): _213.MsgUpdateParamsResponseProtoMsg;
            };
            MsgAccreditService: {
                typeUrl: string;
                encode(message: _213.MsgAccreditService, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgAccreditService;
                fromPartial(object: Partial<_213.MsgAccreditService>): _213.MsgAccreditService;
                fromAmino(object: _213.MsgAccreditServiceAmino): _213.MsgAccreditService;
                toAmino(message: _213.MsgAccreditService): _213.MsgAccreditServiceAmino;
                fromAminoMsg(object: _213.MsgAccreditServiceAminoMsg): _213.MsgAccreditService;
                toAminoMsg(message: _213.MsgAccreditService): _213.MsgAccreditServiceAminoMsg;
                fromProtoMsg(message: _213.MsgAccreditServiceProtoMsg): _213.MsgAccreditService;
                toProto(message: _213.MsgAccreditService): Uint8Array;
                toProtoMsg(message: _213.MsgAccreditService): _213.MsgAccreditServiceProtoMsg;
            };
            MsgAccreditServiceResponse: {
                typeUrl: string;
                encode(_: _213.MsgAccreditServiceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgAccreditServiceResponse;
                fromPartial(_: Partial<_213.MsgAccreditServiceResponse>): _213.MsgAccreditServiceResponse;
                fromAmino(_: _213.MsgAccreditServiceResponseAmino): _213.MsgAccreditServiceResponse;
                toAmino(_: _213.MsgAccreditServiceResponse): _213.MsgAccreditServiceResponseAmino;
                fromAminoMsg(object: _213.MsgAccreditServiceResponseAminoMsg): _213.MsgAccreditServiceResponse;
                fromProtoMsg(message: _213.MsgAccreditServiceResponseProtoMsg): _213.MsgAccreditServiceResponse;
                toProto(message: _213.MsgAccreditServiceResponse): Uint8Array;
                toProtoMsg(message: _213.MsgAccreditServiceResponse): _213.MsgAccreditServiceResponseProtoMsg;
            };
            MsgRevokeServiceAccreditation: {
                typeUrl: string;
                encode(message: _213.MsgRevokeServiceAccreditation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRevokeServiceAccreditation;
                fromPartial(object: Partial<_213.MsgRevokeServiceAccreditation>): _213.MsgRevokeServiceAccreditation;
                fromAmino(object: _213.MsgRevokeServiceAccreditationAmino): _213.MsgRevokeServiceAccreditation;
                toAmino(message: _213.MsgRevokeServiceAccreditation): _213.MsgRevokeServiceAccreditationAmino;
                fromAminoMsg(object: _213.MsgRevokeServiceAccreditationAminoMsg): _213.MsgRevokeServiceAccreditation;
                toAminoMsg(message: _213.MsgRevokeServiceAccreditation): _213.MsgRevokeServiceAccreditationAminoMsg;
                fromProtoMsg(message: _213.MsgRevokeServiceAccreditationProtoMsg): _213.MsgRevokeServiceAccreditation;
                toProto(message: _213.MsgRevokeServiceAccreditation): Uint8Array;
                toProtoMsg(message: _213.MsgRevokeServiceAccreditation): _213.MsgRevokeServiceAccreditationProtoMsg;
            };
            MsgRevokeServiceAccreditationResponse: {
                typeUrl: string;
                encode(_: _213.MsgRevokeServiceAccreditationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.MsgRevokeServiceAccreditationResponse;
                fromPartial(_: Partial<_213.MsgRevokeServiceAccreditationResponse>): _213.MsgRevokeServiceAccreditationResponse;
                fromAmino(_: _213.MsgRevokeServiceAccreditationResponseAmino): _213.MsgRevokeServiceAccreditationResponse;
                toAmino(_: _213.MsgRevokeServiceAccreditationResponse): _213.MsgRevokeServiceAccreditationResponseAmino;
                fromAminoMsg(object: _213.MsgRevokeServiceAccreditationResponseAminoMsg): _213.MsgRevokeServiceAccreditationResponse;
                fromProtoMsg(message: _213.MsgRevokeServiceAccreditationResponseProtoMsg): _213.MsgRevokeServiceAccreditationResponse;
                toProto(message: _213.MsgRevokeServiceAccreditationResponse): Uint8Array;
                toProtoMsg(message: _213.MsgRevokeServiceAccreditationResponse): _213.MsgRevokeServiceAccreditationResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _212.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.GenesisState;
                fromPartial(object: Partial<_212.GenesisState>): _212.GenesisState;
                fromAmino(object: _212.GenesisStateAmino): _212.GenesisState;
                toAmino(message: _212.GenesisState): _212.GenesisStateAmino;
                fromAminoMsg(object: _212.GenesisStateAminoMsg): _212.GenesisState;
                fromProtoMsg(message: _212.GenesisStateProtoMsg): _212.GenesisState;
                toProto(message: _212.GenesisState): Uint8Array;
                toProtoMsg(message: _212.GenesisState): _212.GenesisStateProtoMsg;
            };
            ServiceParamsRecord: {
                typeUrl: string;
                encode(message: _212.ServiceParamsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.ServiceParamsRecord;
                fromPartial(object: Partial<_212.ServiceParamsRecord>): _212.ServiceParamsRecord;
                fromAmino(object: _212.ServiceParamsRecordAmino): _212.ServiceParamsRecord;
                toAmino(message: _212.ServiceParamsRecord): _212.ServiceParamsRecordAmino;
                fromAminoMsg(object: _212.ServiceParamsRecordAminoMsg): _212.ServiceParamsRecord;
                fromProtoMsg(message: _212.ServiceParamsRecordProtoMsg): _212.ServiceParamsRecord;
                toProto(message: _212.ServiceParamsRecord): Uint8Array;
                toProtoMsg(message: _212.ServiceParamsRecord): _212.ServiceParamsRecordProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            milkyway: {
                assets: {
                    v1: _356.MsgClientImpl;
                };
                liquidvesting: {
                    v1: _357.MsgClientImpl;
                };
                operators: {
                    v1: _358.MsgClientImpl;
                };
                restaking: {
                    v1: _359.MsgClientImpl;
                };
                rewards: {
                    v1: _360.MsgClientImpl;
                };
                services: {
                    v1: _361.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            milkyway: {
                assets: {
                    v1: {
                        assets(request: _188.QueryAssetsRequest): Promise<_188.QueryAssetsResponse>;
                        asset(request: _188.QueryAssetRequest): Promise<_188.QueryAssetResponse>;
                    };
                };
                liquidvesting: {
                    v1: {
                        userInsuranceFund(request: _193.QueryUserInsuranceFundRequest): Promise<_193.QueryUserInsuranceFundResponse>;
                        userInsuranceFunds(request?: _193.QueryUserInsuranceFundsRequest): Promise<_193.QueryUserInsuranceFundsResponse>;
                        userRestakableAssets(request: _193.QueryUserRestakableAssetsRequest): Promise<_193.QueryUserRestakableAssetsResponse>;
                        insuranceFund(request?: _193.QueryInsuranceFundRequest): Promise<_193.QueryInsuranceFundResponse>;
                        params(request?: _193.QueryParamsRequest): Promise<_193.QueryParamsResponse>;
                    };
                };
                operators: {
                    v1: {
                        operator(request: _198.QueryOperatorRequest): Promise<_198.QueryOperatorResponse>;
                        operatorParams(request: _198.QueryOperatorParamsRequest): Promise<_198.QueryOperatorParamsResponse>;
                        operators(request?: _198.QueryOperatorsRequest): Promise<_198.QueryOperatorsResponse>;
                        params(request?: _198.QueryParamsRequest): Promise<_198.QueryParamsResponse>;
                    };
                };
                pools: {
                    v1: {
                        poolByID(request: _201.QueryPoolByIdRequest): Promise<_201.QueryPoolResponse>;
                        poolByDenom(request: _201.QueryPoolByDenomRequest): Promise<_201.QueryPoolResponse>;
                        pools(request?: _201.QueryPoolsRequest): Promise<_201.QueryPoolsResponse>;
                    };
                };
                restaking: {
                    v1: {
                        operatorJoinedServices(request: _206.QueryOperatorJoinedServicesRequest): Promise<_206.QueryOperatorJoinedServicesResponse>;
                        serviceAllowedOperators(request: _206.QueryServiceAllowedOperatorsRequest): Promise<_206.QueryServiceAllowedOperatorsResponse>;
                        serviceSecuringPools(request: _206.QueryServiceSecuringPoolsRequest): Promise<_206.QueryServiceSecuringPoolsResponse>;
                        serviceOperators(request: _206.QueryServiceOperatorsRequest): Promise<_206.QueryServiceOperatorsResponse>;
                        poolDelegations(request: _206.QueryPoolDelegationsRequest): Promise<_206.QueryPoolDelegationsResponse>;
                        poolDelegation(request: _206.QueryPoolDelegationRequest): Promise<_206.QueryPoolDelegationResponse>;
                        poolUnbondingDelegations(request: _206.QueryPoolUnbondingDelegationsRequest): Promise<_206.QueryPoolUnbondingDelegationsResponse>;
                        poolUnbondingDelegation(request: _206.QueryPoolUnbondingDelegationRequest): Promise<_206.QueryPoolUnbondingDelegationResponse>;
                        operatorDelegations(request: _206.QueryOperatorDelegationsRequest): Promise<_206.QueryOperatorDelegationsResponse>;
                        operatorDelegation(request: _206.QueryOperatorDelegationRequest): Promise<_206.QueryOperatorDelegationResponse>;
                        operatorUnbondingDelegations(request: _206.QueryOperatorUnbondingDelegationsRequest): Promise<_206.QueryOperatorUnbondingDelegationsResponse>;
                        operatorUnbondingDelegation(request: _206.QueryOperatorUnbondingDelegationRequest): Promise<_206.QueryOperatorUnbondingDelegationResponse>;
                        serviceDelegations(request: _206.QueryServiceDelegationsRequest): Promise<_206.QueryServiceDelegationsResponse>;
                        serviceDelegation(request: _206.QueryServiceDelegationRequest): Promise<_206.QueryServiceDelegationResponse>;
                        serviceUnbondingDelegations(request: _206.QueryServiceUnbondingDelegationsRequest): Promise<_206.QueryServiceUnbondingDelegationsResponse>;
                        serviceUnbondingDelegation(request: _206.QueryServiceUnbondingDelegationRequest): Promise<_206.QueryServiceUnbondingDelegationResponse>;
                        delegatorPoolDelegations(request: _206.QueryDelegatorPoolDelegationsRequest): Promise<_206.QueryDelegatorPoolDelegationsResponse>;
                        delegatorPoolUnbondingDelegations(request: _206.QueryDelegatorPoolUnbondingDelegationsRequest): Promise<_206.QueryDelegatorPoolUnbondingDelegationsResponse>;
                        delegatorOperatorDelegations(request: _206.QueryDelegatorOperatorDelegationsRequest): Promise<_206.QueryDelegatorOperatorDelegationsResponse>;
                        delegatorOperatorUnbondingDelegations(request: _206.QueryDelegatorOperatorUnbondingDelegationsRequest): Promise<_206.QueryDelegatorOperatorUnbondingDelegationsResponse>;
                        delegatorServiceDelegations(request: _206.QueryDelegatorServiceDelegationsRequest): Promise<_206.QueryDelegatorServiceDelegationsResponse>;
                        delegatorServiceUnbondingDelegations(request: _206.QueryDelegatorServiceUnbondingDelegationsRequest): Promise<_206.QueryDelegatorServiceUnbondingDelegationsResponse>;
                        delegatorPools(request: _206.QueryDelegatorPoolsRequest): Promise<_206.QueryDelegatorPoolsResponse>;
                        delegatorPool(request: _206.QueryDelegatorPoolRequest): Promise<_206.QueryDelegatorPoolResponse>;
                        delegatorOperators(request: _206.QueryDelegatorOperatorsRequest): Promise<_206.QueryDelegatorOperatorsResponse>;
                        delegatorOperator(request: _206.QueryDelegatorOperatorRequest): Promise<_206.QueryDelegatorOperatorResponse>;
                        delegatorServices(request: _206.QueryDelegatorServicesRequest): Promise<_206.QueryDelegatorServicesResponse>;
                        delegatorService(request: _206.QueryDelegatorServiceRequest): Promise<_206.QueryDelegatorServiceResponse>;
                        userPreferences(request: _206.QueryUserPreferencesRequest): Promise<_206.QueryUserPreferencesResponse>;
                        params(request?: _206.QueryParamsRequest): Promise<_206.QueryParamsResponse>;
                    };
                };
                rewards: {
                    v1: {
                        params(request?: _211.QueryParamsRequest): Promise<_211.QueryParamsResponse>;
                        rewardsPlans(request?: _211.QueryRewardsPlansRequest): Promise<_211.QueryRewardsPlansResponse>;
                        rewardsPlan(request: _211.QueryRewardsPlanRequest): Promise<_211.QueryRewardsPlanResponse>;
                        poolOutstandingRewards(request: _211.QueryPoolOutstandingRewardsRequest): Promise<_211.QueryPoolOutstandingRewardsResponse>;
                        operatorOutstandingRewards(request: _211.QueryOperatorOutstandingRewardsRequest): Promise<_211.QueryOperatorOutstandingRewardsResponse>;
                        serviceOutstandingRewards(request: _211.QueryServiceOutstandingRewardsRequest): Promise<_211.QueryServiceOutstandingRewardsResponse>;
                        operatorCommission(request: _211.QueryOperatorCommissionRequest): Promise<_211.QueryOperatorCommissionResponse>;
                        poolDelegationRewards(request: _211.QueryPoolDelegationRewardsRequest): Promise<_211.QueryPoolDelegationRewardsResponse>;
                        operatorDelegationRewards(request: _211.QueryOperatorDelegationRewardsRequest): Promise<_211.QueryOperatorDelegationRewardsResponse>;
                        serviceDelegationRewards(request: _211.QueryServiceDelegationRewardsRequest): Promise<_211.QueryServiceDelegationRewardsResponse>;
                        delegatorTotalRewards(request: _211.QueryDelegatorTotalRewardsRequest): Promise<_211.QueryDelegatorTotalRewardsResponse>;
                        delegatorWithdrawAddress(request: _211.QueryDelegatorWithdrawAddressRequest): Promise<_211.QueryDelegatorWithdrawAddressResponse>;
                    };
                };
                services: {
                    v1: {
                        service(request: _216.QueryServiceRequest): Promise<_216.QueryServiceResponse>;
                        services(request?: _216.QueryServicesRequest): Promise<_216.QueryServicesResponse>;
                        serviceParams(request: _216.QueryServiceParamsRequest): Promise<_216.QueryServiceParamsResponse>;
                        params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
                    };
                };
            };
        }>;
    };
}
