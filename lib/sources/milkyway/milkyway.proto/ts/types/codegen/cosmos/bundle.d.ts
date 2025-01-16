import * as _4 from "./app/runtime/v1alpha1/module";
import * as _5 from "./app/v1alpha1/config";
import * as _6 from "./app/v1alpha1/module";
import * as _7 from "./app/v1alpha1/query";
import * as _8 from "./auth/module/v1/module";
import * as _9 from "./auth/v1beta1/auth";
import * as _10 from "./auth/v1beta1/genesis";
import * as _11 from "./auth/v1beta1/query";
import * as _12 from "./auth/v1beta1/tx";
import * as _13 from "./authz/module/v1/module";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./autocli/v1/options";
import * as _20 from "./autocli/v1/query";
import * as _21 from "./bank/module/v1/module";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/node/v1beta1/query";
import * as _29 from "./base/query/v1beta1/pagination";
import * as _30 from "./base/reflection/v1beta1/reflection";
import * as _31 from "./base/reflection/v2alpha1/reflection";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/tendermint/v1beta1/types";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./circuit/module/v1/module";
import * as _36 from "./circuit/v1/query";
import * as _37 from "./circuit/v1/tx";
import * as _38 from "./circuit/v1/types";
import * as _39 from "./consensus/module/v1/module";
import * as _40 from "./consensus/v1/query";
import * as _41 from "./consensus/v1/tx";
import * as _42 from "./crisis/module/v1/module";
import * as _43 from "./crisis/v1beta1/genesis";
import * as _44 from "./crisis/v1beta1/tx";
import * as _45 from "./crypto/ed25519/keys";
import * as _46 from "./crypto/hd/v1/hd";
import * as _47 from "./crypto/keyring/v1/record";
import * as _48 from "./crypto/multisig/keys";
import * as _49 from "./crypto/secp256k1/keys";
import * as _50 from "./crypto/secp256r1/keys";
import * as _51 from "./distribution/module/v1/module";
import * as _52 from "./distribution/v1beta1/distribution";
import * as _53 from "./distribution/v1beta1/genesis";
import * as _54 from "./distribution/v1beta1/query";
import * as _55 from "./distribution/v1beta1/tx";
import * as _56 from "./evidence/module/v1/module";
import * as _57 from "./evidence/v1beta1/evidence";
import * as _58 from "./evidence/v1beta1/genesis";
import * as _59 from "./evidence/v1beta1/query";
import * as _60 from "./evidence/v1beta1/tx";
import * as _61 from "./feegrant/module/v1/module";
import * as _62 from "./feegrant/v1beta1/feegrant";
import * as _63 from "./feegrant/v1beta1/genesis";
import * as _64 from "./feegrant/v1beta1/query";
import * as _65 from "./feegrant/v1beta1/tx";
import * as _66 from "./genutil/module/v1/module";
import * as _67 from "./genutil/v1beta1/genesis";
import * as _68 from "./gov/module/v1/module";
import * as _69 from "./gov/v1/genesis";
import * as _70 from "./gov/v1/gov";
import * as _71 from "./gov/v1/query";
import * as _72 from "./gov/v1/tx";
import * as _73 from "./gov/v1beta1/genesis";
import * as _74 from "./gov/v1beta1/gov";
import * as _75 from "./gov/v1beta1/query";
import * as _76 from "./gov/v1beta1/tx";
import * as _77 from "./group/module/v1/module";
import * as _78 from "./group/v1/events";
import * as _79 from "./group/v1/genesis";
import * as _80 from "./group/v1/query";
import * as _81 from "./group/v1/tx";
import * as _82 from "./group/v1/types";
import * as _83 from "./ics23/v1/proofs";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _91 from "./nft/module/v1/module";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/query/v1alpha1/query";
import * as _99 from "./orm/v1/orm";
import * as _100 from "./orm/v1alpha1/schema";
import * as _101 from "./params/module/v1/module";
import * as _102 from "./params/v1beta1/params";
import * as _103 from "./params/v1beta1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/module/v1/module";
import * as _112 from "./staking/v1beta1/authz";
import * as _113 from "./staking/v1beta1/genesis";
import * as _114 from "./staking/v1beta1/query";
import * as _115 from "./staking/v1beta1/staking";
import * as _116 from "./staking/v1beta1/tx";
import * as _117 from "./store/internal/kv/v1beta1/kv";
import * as _118 from "./store/snapshots/v1/snapshot";
import * as _119 from "./store/streaming/abci/grpc";
import * as _120 from "./store/v1beta1/commit_info";
import * as _121 from "./store/v1beta1/listening";
import * as _122 from "./tx/config/v1/config";
import * as _123 from "./tx/signing/v1beta1/signing";
import * as _124 from "./tx/v1beta1/service";
import * as _125 from "./tx/v1beta1/tx";
import * as _126 from "./upgrade/module/v1/module";
import * as _127 from "./upgrade/v1beta1/query";
import * as _128 from "./upgrade/v1beta1/tx";
import * as _129 from "./upgrade/v1beta1/upgrade";
import * as _130 from "./vesting/module/v1/module";
import * as _131 from "./vesting/v1beta1/tx";
import * as _132 from "./vesting/v1beta1/vesting";
import * as _264 from "./app/v1alpha1/query.rpc.Query";
import * as _265 from "./auth/v1beta1/query.rpc.Query";
import * as _266 from "./authz/v1beta1/query.rpc.Query";
import * as _267 from "./autocli/v1/query.rpc.Query";
import * as _268 from "./bank/v1beta1/query.rpc.Query";
import * as _269 from "./base/node/v1beta1/query.rpc.Service";
import * as _270 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _271 from "./circuit/v1/query.rpc.Query";
import * as _272 from "./consensus/v1/query.rpc.Query";
import * as _273 from "./distribution/v1beta1/query.rpc.Query";
import * as _274 from "./evidence/v1beta1/query.rpc.Query";
import * as _275 from "./feegrant/v1beta1/query.rpc.Query";
import * as _276 from "./gov/v1/query.rpc.Query";
import * as _277 from "./gov/v1beta1/query.rpc.Query";
import * as _278 from "./group/v1/query.rpc.Query";
import * as _279 from "./mint/v1beta1/query.rpc.Query";
import * as _280 from "./nft/v1beta1/query.rpc.Query";
import * as _281 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _282 from "./params/v1beta1/query.rpc.Query";
import * as _283 from "./slashing/v1beta1/query.rpc.Query";
import * as _284 from "./staking/v1beta1/query.rpc.Query";
import * as _285 from "./tx/v1beta1/service.rpc.Service";
import * as _286 from "./upgrade/v1beta1/query.rpc.Query";
import * as _287 from "./auth/v1beta1/tx.rpc.msg";
import * as _288 from "./authz/v1beta1/tx.rpc.msg";
import * as _289 from "./bank/v1beta1/tx.rpc.msg";
import * as _290 from "./circuit/v1/tx.rpc.msg";
import * as _291 from "./consensus/v1/tx.rpc.msg";
import * as _292 from "./crisis/v1beta1/tx.rpc.msg";
import * as _293 from "./distribution/v1beta1/tx.rpc.msg";
import * as _294 from "./evidence/v1beta1/tx.rpc.msg";
import * as _295 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _296 from "./gov/v1/tx.rpc.msg";
import * as _297 from "./gov/v1beta1/tx.rpc.msg";
import * as _298 from "./group/v1/tx.rpc.msg";
import * as _299 from "./mint/v1beta1/tx.rpc.msg";
import * as _300 from "./nft/v1beta1/tx.rpc.msg";
import * as _301 from "./slashing/v1beta1/tx.rpc.msg";
import * as _302 from "./staking/v1beta1/tx.rpc.msg";
import * as _303 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _304 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _4.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.Module;
                    fromPartial(object: Partial<_4.Module>): _4.Module;
                    fromAmino(object: _4.ModuleAmino): _4.Module;
                    toAmino(message: _4.Module): _4.ModuleAmino;
                    fromAminoMsg(object: _4.ModuleAminoMsg): _4.Module;
                    toAminoMsg(message: _4.Module): _4.ModuleAminoMsg;
                    fromProtoMsg(message: _4.ModuleProtoMsg): _4.Module;
                    toProto(message: _4.Module): Uint8Array;
                    toProtoMsg(message: _4.Module): _4.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _4.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.StoreKeyConfig;
                    fromPartial(object: Partial<_4.StoreKeyConfig>): _4.StoreKeyConfig;
                    fromAmino(object: _4.StoreKeyConfigAmino): _4.StoreKeyConfig;
                    toAmino(message: _4.StoreKeyConfig): _4.StoreKeyConfigAmino;
                    fromAminoMsg(object: _4.StoreKeyConfigAminoMsg): _4.StoreKeyConfig;
                    toAminoMsg(message: _4.StoreKeyConfig): _4.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _4.StoreKeyConfigProtoMsg): _4.StoreKeyConfig;
                    toProto(message: _4.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _4.StoreKeyConfig): _4.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _7.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryConfigRequest;
                fromPartial(_: Partial<_7.QueryConfigRequest>): _7.QueryConfigRequest;
                fromAmino(_: _7.QueryConfigRequestAmino): _7.QueryConfigRequest;
                toAmino(_: _7.QueryConfigRequest): _7.QueryConfigRequestAmino;
                fromAminoMsg(object: _7.QueryConfigRequestAminoMsg): _7.QueryConfigRequest;
                toAminoMsg(message: _7.QueryConfigRequest): _7.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _7.QueryConfigRequestProtoMsg): _7.QueryConfigRequest;
                toProto(message: _7.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _7.QueryConfigRequest): _7.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _7.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.QueryConfigResponse;
                fromPartial(object: Partial<_7.QueryConfigResponse>): _7.QueryConfigResponse;
                fromAmino(object: _7.QueryConfigResponseAmino): _7.QueryConfigResponse;
                toAmino(message: _7.QueryConfigResponse): _7.QueryConfigResponseAmino;
                fromAminoMsg(object: _7.QueryConfigResponseAminoMsg): _7.QueryConfigResponse;
                toAminoMsg(message: _7.QueryConfigResponse): _7.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _7.QueryConfigResponseProtoMsg): _7.QueryConfigResponse;
                toProto(message: _7.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _7.QueryConfigResponse): _7.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _6.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.ModuleDescriptor;
                fromPartial(object: Partial<_6.ModuleDescriptor>): _6.ModuleDescriptor;
                fromAmino(object: _6.ModuleDescriptorAmino): _6.ModuleDescriptor;
                toAmino(message: _6.ModuleDescriptor): _6.ModuleDescriptorAmino;
                fromAminoMsg(object: _6.ModuleDescriptorAminoMsg): _6.ModuleDescriptor;
                toAminoMsg(message: _6.ModuleDescriptor): _6.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _6.ModuleDescriptorProtoMsg): _6.ModuleDescriptor;
                toProto(message: _6.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _6.ModuleDescriptor): _6.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _6.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.PackageReference;
                fromPartial(object: Partial<_6.PackageReference>): _6.PackageReference;
                fromAmino(object: _6.PackageReferenceAmino): _6.PackageReference;
                toAmino(message: _6.PackageReference): _6.PackageReferenceAmino;
                fromAminoMsg(object: _6.PackageReferenceAminoMsg): _6.PackageReference;
                toAminoMsg(message: _6.PackageReference): _6.PackageReferenceAminoMsg;
                fromProtoMsg(message: _6.PackageReferenceProtoMsg): _6.PackageReference;
                toProto(message: _6.PackageReference): Uint8Array;
                toProtoMsg(message: _6.PackageReference): _6.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _6.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.MigrateFromInfo;
                fromPartial(object: Partial<_6.MigrateFromInfo>): _6.MigrateFromInfo;
                fromAmino(object: _6.MigrateFromInfoAmino): _6.MigrateFromInfo;
                toAmino(message: _6.MigrateFromInfo): _6.MigrateFromInfoAmino;
                fromAminoMsg(object: _6.MigrateFromInfoAminoMsg): _6.MigrateFromInfo;
                toAminoMsg(message: _6.MigrateFromInfo): _6.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _6.MigrateFromInfoProtoMsg): _6.MigrateFromInfo;
                toProto(message: _6.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _6.MigrateFromInfo): _6.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _5.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.Config;
                fromPartial(object: Partial<_5.Config>): _5.Config;
                fromAmino(object: _5.ConfigAmino): _5.Config;
                toAmino(message: _5.Config): _5.ConfigAmino;
                fromAminoMsg(object: _5.ConfigAminoMsg): _5.Config;
                toAminoMsg(message: _5.Config): _5.ConfigAminoMsg;
                fromProtoMsg(message: _5.ConfigProtoMsg): _5.Config;
                toProto(message: _5.Config): Uint8Array;
                toProtoMsg(message: _5.Config): _5.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _5.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.ModuleConfig;
                fromPartial(object: Partial<_5.ModuleConfig>): _5.ModuleConfig;
                fromAmino(object: _5.ModuleConfigAmino): _5.ModuleConfig;
                toAmino(message: _5.ModuleConfig): _5.ModuleConfigAmino;
                fromAminoMsg(object: _5.ModuleConfigAminoMsg): _5.ModuleConfig;
                toAminoMsg(message: _5.ModuleConfig): _5.ModuleConfigAminoMsg;
                fromProtoMsg(message: _5.ModuleConfigProtoMsg): _5.ModuleConfig;
                toProto(message: _5.ModuleConfig): Uint8Array;
                toProtoMsg(message: _5.ModuleConfig): _5.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _5.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.GolangBinding;
                fromPartial(object: Partial<_5.GolangBinding>): _5.GolangBinding;
                fromAmino(object: _5.GolangBindingAmino): _5.GolangBinding;
                toAmino(message: _5.GolangBinding): _5.GolangBindingAmino;
                fromAminoMsg(object: _5.GolangBindingAminoMsg): _5.GolangBinding;
                toAminoMsg(message: _5.GolangBinding): _5.GolangBindingAminoMsg;
                fromProtoMsg(message: _5.GolangBindingProtoMsg): _5.GolangBinding;
                toProto(message: _5.GolangBinding): Uint8Array;
                toProtoMsg(message: _5.GolangBinding): _5.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _8.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.Module;
                    fromPartial(object: Partial<_8.Module>): _8.Module;
                    fromAmino(object: _8.ModuleAmino): _8.Module;
                    toAmino(message: _8.Module): _8.ModuleAmino;
                    fromAminoMsg(object: _8.ModuleAminoMsg): _8.Module;
                    toAminoMsg(message: _8.Module): _8.ModuleAminoMsg;
                    fromProtoMsg(message: _8.ModuleProtoMsg): _8.Module;
                    toProto(message: _8.Module): Uint8Array;
                    toProtoMsg(message: _8.Module): _8.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _8.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.ModuleAccountPermission;
                    fromPartial(object: Partial<_8.ModuleAccountPermission>): _8.ModuleAccountPermission;
                    fromAmino(object: _8.ModuleAccountPermissionAmino): _8.ModuleAccountPermission;
                    toAmino(message: _8.ModuleAccountPermission): _8.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _8.ModuleAccountPermissionAminoMsg): _8.ModuleAccountPermission;
                    toAminoMsg(message: _8.ModuleAccountPermission): _8.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _8.ModuleAccountPermissionProtoMsg): _8.ModuleAccountPermission;
                    toProto(message: _8.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _8.ModuleAccountPermission): _8.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _11.QueryAccountsRequest): Promise<_11.QueryAccountsResponse>;
                account(request: _11.QueryAccountRequest): Promise<_11.QueryAccountResponse>;
                accountAddressByID(request: _11.QueryAccountAddressByIDRequest): Promise<_11.QueryAccountAddressByIDResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                moduleAccounts(request?: _11.QueryModuleAccountsRequest): Promise<_11.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _11.QueryModuleAccountByNameRequest): Promise<_11.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _11.Bech32PrefixRequest): Promise<_11.Bech32PrefixResponse>;
                addressBytesToString(request: _11.AddressBytesToStringRequest): Promise<_11.AddressBytesToStringResponse>;
                addressStringToBytes(request: _11.AddressStringToBytesRequest): Promise<_11.AddressStringToBytesResponse>;
                accountInfo(request: _11.QueryAccountInfoRequest): Promise<_11.QueryAccountInfoResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _12.MsgUpdateParams): {
                        typeUrl: string;
                        value: _12.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _12.MsgUpdateParams) => _12.MsgUpdateParamsAmino;
                    fromAmino: (object: _12.MsgUpdateParamsAmino) => _12.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _12.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.MsgUpdateParams;
                fromPartial(object: Partial<_12.MsgUpdateParams>): _12.MsgUpdateParams;
                fromAmino(object: _12.MsgUpdateParamsAmino): _12.MsgUpdateParams;
                toAmino(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsAminoMsg): _12.MsgUpdateParams;
                toAminoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _12.MsgUpdateParamsProtoMsg): _12.MsgUpdateParams;
                toProto(message: _12.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParams): _12.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _12.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_12.MsgUpdateParamsResponse>): _12.MsgUpdateParamsResponse;
                fromAmino(_: _12.MsgUpdateParamsResponseAmino): _12.MsgUpdateParamsResponse;
                toAmino(_: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _12.MsgUpdateParamsResponseAminoMsg): _12.MsgUpdateParamsResponse;
                toAminoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _12.MsgUpdateParamsResponseProtoMsg): _12.MsgUpdateParamsResponse;
                toProto(message: _12.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _12.MsgUpdateParamsResponse): _12.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _11.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountsRequest;
                fromPartial(object: Partial<_11.QueryAccountsRequest>): _11.QueryAccountsRequest;
                fromAmino(object: _11.QueryAccountsRequestAmino): _11.QueryAccountsRequest;
                toAmino(message: _11.QueryAccountsRequest): _11.QueryAccountsRequestAmino;
                fromAminoMsg(object: _11.QueryAccountsRequestAminoMsg): _11.QueryAccountsRequest;
                toAminoMsg(message: _11.QueryAccountsRequest): _11.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAccountsRequestProtoMsg): _11.QueryAccountsRequest;
                toProto(message: _11.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAccountsRequest): _11.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _11.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountsResponse;
                fromPartial(object: Partial<_11.QueryAccountsResponse>): _11.QueryAccountsResponse;
                fromAmino(object: _11.QueryAccountsResponseAmino): _11.QueryAccountsResponse;
                toAmino(message: _11.QueryAccountsResponse): _11.QueryAccountsResponseAmino;
                fromAminoMsg(object: _11.QueryAccountsResponseAminoMsg): _11.QueryAccountsResponse;
                toAminoMsg(message: _11.QueryAccountsResponse): _11.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAccountsResponseProtoMsg): _11.QueryAccountsResponse;
                toProto(message: _11.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAccountsResponse): _11.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _11.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountRequest;
                fromPartial(object: Partial<_11.QueryAccountRequest>): _11.QueryAccountRequest;
                fromAmino(object: _11.QueryAccountRequestAmino): _11.QueryAccountRequest;
                toAmino(message: _11.QueryAccountRequest): _11.QueryAccountRequestAmino;
                fromAminoMsg(object: _11.QueryAccountRequestAminoMsg): _11.QueryAccountRequest;
                toAminoMsg(message: _11.QueryAccountRequest): _11.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAccountRequestProtoMsg): _11.QueryAccountRequest;
                toProto(message: _11.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAccountRequest): _11.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _11.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountResponse;
                fromPartial(object: Partial<_11.QueryAccountResponse>): _11.QueryAccountResponse;
                fromAmino(object: _11.QueryAccountResponseAmino): _11.QueryAccountResponse;
                toAmino(message: _11.QueryAccountResponse): _11.QueryAccountResponseAmino;
                fromAminoMsg(object: _11.QueryAccountResponseAminoMsg): _11.QueryAccountResponse;
                toAminoMsg(message: _11.QueryAccountResponse): _11.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAccountResponseProtoMsg): _11.QueryAccountResponse;
                toProto(message: _11.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAccountResponse): _11.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                toAminoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                toProto(message: _11.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                toAminoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                toProto(message: _11.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _11.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_11.QueryModuleAccountsRequest>): _11.QueryModuleAccountsRequest;
                fromAmino(_: _11.QueryModuleAccountsRequestAmino): _11.QueryModuleAccountsRequest;
                toAmino(_: _11.QueryModuleAccountsRequest): _11.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _11.QueryModuleAccountsRequestAminoMsg): _11.QueryModuleAccountsRequest;
                toAminoMsg(message: _11.QueryModuleAccountsRequest): _11.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryModuleAccountsRequestProtoMsg): _11.QueryModuleAccountsRequest;
                toProto(message: _11.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryModuleAccountsRequest): _11.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _11.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_11.QueryModuleAccountsResponse>): _11.QueryModuleAccountsResponse;
                fromAmino(object: _11.QueryModuleAccountsResponseAmino): _11.QueryModuleAccountsResponse;
                toAmino(message: _11.QueryModuleAccountsResponse): _11.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _11.QueryModuleAccountsResponseAminoMsg): _11.QueryModuleAccountsResponse;
                toAminoMsg(message: _11.QueryModuleAccountsResponse): _11.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryModuleAccountsResponseProtoMsg): _11.QueryModuleAccountsResponse;
                toProto(message: _11.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryModuleAccountsResponse): _11.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _11.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_11.QueryModuleAccountByNameRequest>): _11.QueryModuleAccountByNameRequest;
                fromAmino(object: _11.QueryModuleAccountByNameRequestAmino): _11.QueryModuleAccountByNameRequest;
                toAmino(message: _11.QueryModuleAccountByNameRequest): _11.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _11.QueryModuleAccountByNameRequestAminoMsg): _11.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _11.QueryModuleAccountByNameRequest): _11.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _11.QueryModuleAccountByNameRequestProtoMsg): _11.QueryModuleAccountByNameRequest;
                toProto(message: _11.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _11.QueryModuleAccountByNameRequest): _11.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _11.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_11.QueryModuleAccountByNameResponse>): _11.QueryModuleAccountByNameResponse;
                fromAmino(object: _11.QueryModuleAccountByNameResponseAmino): _11.QueryModuleAccountByNameResponse;
                toAmino(message: _11.QueryModuleAccountByNameResponse): _11.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _11.QueryModuleAccountByNameResponseAminoMsg): _11.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _11.QueryModuleAccountByNameResponse): _11.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _11.QueryModuleAccountByNameResponseProtoMsg): _11.QueryModuleAccountByNameResponse;
                toProto(message: _11.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _11.QueryModuleAccountByNameResponse): _11.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _11.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.Bech32PrefixRequest;
                fromPartial(_: Partial<_11.Bech32PrefixRequest>): _11.Bech32PrefixRequest;
                fromAmino(_: _11.Bech32PrefixRequestAmino): _11.Bech32PrefixRequest;
                toAmino(_: _11.Bech32PrefixRequest): _11.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _11.Bech32PrefixRequestAminoMsg): _11.Bech32PrefixRequest;
                toAminoMsg(message: _11.Bech32PrefixRequest): _11.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _11.Bech32PrefixRequestProtoMsg): _11.Bech32PrefixRequest;
                toProto(message: _11.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _11.Bech32PrefixRequest): _11.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _11.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.Bech32PrefixResponse;
                fromPartial(object: Partial<_11.Bech32PrefixResponse>): _11.Bech32PrefixResponse;
                fromAmino(object: _11.Bech32PrefixResponseAmino): _11.Bech32PrefixResponse;
                toAmino(message: _11.Bech32PrefixResponse): _11.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _11.Bech32PrefixResponseAminoMsg): _11.Bech32PrefixResponse;
                toAminoMsg(message: _11.Bech32PrefixResponse): _11.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _11.Bech32PrefixResponseProtoMsg): _11.Bech32PrefixResponse;
                toProto(message: _11.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _11.Bech32PrefixResponse): _11.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _11.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.AddressBytesToStringRequest;
                fromPartial(object: Partial<_11.AddressBytesToStringRequest>): _11.AddressBytesToStringRequest;
                fromAmino(object: _11.AddressBytesToStringRequestAmino): _11.AddressBytesToStringRequest;
                toAmino(message: _11.AddressBytesToStringRequest): _11.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _11.AddressBytesToStringRequestAminoMsg): _11.AddressBytesToStringRequest;
                toAminoMsg(message: _11.AddressBytesToStringRequest): _11.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _11.AddressBytesToStringRequestProtoMsg): _11.AddressBytesToStringRequest;
                toProto(message: _11.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _11.AddressBytesToStringRequest): _11.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _11.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.AddressBytesToStringResponse;
                fromPartial(object: Partial<_11.AddressBytesToStringResponse>): _11.AddressBytesToStringResponse;
                fromAmino(object: _11.AddressBytesToStringResponseAmino): _11.AddressBytesToStringResponse;
                toAmino(message: _11.AddressBytesToStringResponse): _11.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _11.AddressBytesToStringResponseAminoMsg): _11.AddressBytesToStringResponse;
                toAminoMsg(message: _11.AddressBytesToStringResponse): _11.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _11.AddressBytesToStringResponseProtoMsg): _11.AddressBytesToStringResponse;
                toProto(message: _11.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _11.AddressBytesToStringResponse): _11.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _11.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.AddressStringToBytesRequest;
                fromPartial(object: Partial<_11.AddressStringToBytesRequest>): _11.AddressStringToBytesRequest;
                fromAmino(object: _11.AddressStringToBytesRequestAmino): _11.AddressStringToBytesRequest;
                toAmino(message: _11.AddressStringToBytesRequest): _11.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _11.AddressStringToBytesRequestAminoMsg): _11.AddressStringToBytesRequest;
                toAminoMsg(message: _11.AddressStringToBytesRequest): _11.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _11.AddressStringToBytesRequestProtoMsg): _11.AddressStringToBytesRequest;
                toProto(message: _11.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _11.AddressStringToBytesRequest): _11.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _11.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.AddressStringToBytesResponse;
                fromPartial(object: Partial<_11.AddressStringToBytesResponse>): _11.AddressStringToBytesResponse;
                fromAmino(object: _11.AddressStringToBytesResponseAmino): _11.AddressStringToBytesResponse;
                toAmino(message: _11.AddressStringToBytesResponse): _11.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _11.AddressStringToBytesResponseAminoMsg): _11.AddressStringToBytesResponse;
                toAminoMsg(message: _11.AddressStringToBytesResponse): _11.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _11.AddressStringToBytesResponseProtoMsg): _11.AddressStringToBytesResponse;
                toProto(message: _11.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _11.AddressStringToBytesResponse): _11.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _11.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_11.QueryAccountAddressByIDRequest>): _11.QueryAccountAddressByIDRequest;
                fromAmino(object: _11.QueryAccountAddressByIDRequestAmino): _11.QueryAccountAddressByIDRequest;
                toAmino(message: _11.QueryAccountAddressByIDRequest): _11.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _11.QueryAccountAddressByIDRequestAminoMsg): _11.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _11.QueryAccountAddressByIDRequest): _11.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAccountAddressByIDRequestProtoMsg): _11.QueryAccountAddressByIDRequest;
                toProto(message: _11.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAccountAddressByIDRequest): _11.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _11.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_11.QueryAccountAddressByIDResponse>): _11.QueryAccountAddressByIDResponse;
                fromAmino(object: _11.QueryAccountAddressByIDResponseAmino): _11.QueryAccountAddressByIDResponse;
                toAmino(message: _11.QueryAccountAddressByIDResponse): _11.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _11.QueryAccountAddressByIDResponseAminoMsg): _11.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _11.QueryAccountAddressByIDResponse): _11.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAccountAddressByIDResponseProtoMsg): _11.QueryAccountAddressByIDResponse;
                toProto(message: _11.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAccountAddressByIDResponse): _11.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _11.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountInfoRequest;
                fromPartial(object: Partial<_11.QueryAccountInfoRequest>): _11.QueryAccountInfoRequest;
                fromAmino(object: _11.QueryAccountInfoRequestAmino): _11.QueryAccountInfoRequest;
                toAmino(message: _11.QueryAccountInfoRequest): _11.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _11.QueryAccountInfoRequestAminoMsg): _11.QueryAccountInfoRequest;
                toAminoMsg(message: _11.QueryAccountInfoRequest): _11.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _11.QueryAccountInfoRequestProtoMsg): _11.QueryAccountInfoRequest;
                toProto(message: _11.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAccountInfoRequest): _11.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _11.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.QueryAccountInfoResponse;
                fromPartial(object: Partial<_11.QueryAccountInfoResponse>): _11.QueryAccountInfoResponse;
                fromAmino(object: _11.QueryAccountInfoResponseAmino): _11.QueryAccountInfoResponse;
                toAmino(message: _11.QueryAccountInfoResponse): _11.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _11.QueryAccountInfoResponseAminoMsg): _11.QueryAccountInfoResponse;
                toAminoMsg(message: _11.QueryAccountInfoResponse): _11.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _11.QueryAccountInfoResponseProtoMsg): _11.QueryAccountInfoResponse;
                toProto(message: _11.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAccountInfoResponse): _11.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _9.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _9.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.GenesisState;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                toAminoMsg(message: _10.GenesisState): _10.GenesisStateAminoMsg;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _9.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.BaseAccount;
                fromPartial(object: Partial<_9.BaseAccount>): _9.BaseAccount;
                fromAmino(object: _9.BaseAccountAmino): _9.BaseAccount;
                toAmino(message: _9.BaseAccount): _9.BaseAccountAmino;
                fromAminoMsg(object: _9.BaseAccountAminoMsg): _9.BaseAccount;
                toAminoMsg(message: _9.BaseAccount): _9.BaseAccountAminoMsg;
                fromProtoMsg(message: _9.BaseAccountProtoMsg): _9.BaseAccount;
                toProto(message: _9.BaseAccount): Uint8Array;
                toProtoMsg(message: _9.BaseAccount): _9.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _9.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.ModuleAccount;
                fromPartial(object: Partial<_9.ModuleAccount>): _9.ModuleAccount;
                fromAmino(object: _9.ModuleAccountAmino): _9.ModuleAccount;
                toAmino(message: _9.ModuleAccount): _9.ModuleAccountAmino;
                fromAminoMsg(object: _9.ModuleAccountAminoMsg): _9.ModuleAccount;
                toAminoMsg(message: _9.ModuleAccount): _9.ModuleAccountAminoMsg;
                fromProtoMsg(message: _9.ModuleAccountProtoMsg): _9.ModuleAccount;
                toProto(message: _9.ModuleAccount): Uint8Array;
                toProtoMsg(message: _9.ModuleAccount): _9.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _9.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.ModuleCredential;
                fromPartial(object: Partial<_9.ModuleCredential>): _9.ModuleCredential;
                fromAmino(object: _9.ModuleCredentialAmino): _9.ModuleCredential;
                toAmino(message: _9.ModuleCredential): _9.ModuleCredentialAmino;
                fromAminoMsg(object: _9.ModuleCredentialAminoMsg): _9.ModuleCredential;
                toAminoMsg(message: _9.ModuleCredential): _9.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _9.ModuleCredentialProtoMsg): _9.ModuleCredential;
                toProto(message: _9.ModuleCredential): Uint8Array;
                toProtoMsg(message: _9.ModuleCredential): _9.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                toAminoMsg(message: _9.Params): _9.ParamsAminoMsg;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _13.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Module;
                    fromPartial(_: Partial<_13.Module>): _13.Module;
                    fromAmino(_: _13.ModuleAmino): _13.Module;
                    toAmino(_: _13.Module): _13.ModuleAmino;
                    fromAminoMsg(object: _13.ModuleAminoMsg): _13.Module;
                    toAminoMsg(message: _13.Module): _13.ModuleAminoMsg;
                    fromProtoMsg(message: _13.ModuleProtoMsg): _13.Module;
                    toProto(message: _13.Module): Uint8Array;
                    toProtoMsg(message: _13.Module): _13.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _18.MsgGrant) => _18.MsgGrantAmino;
                    fromAmino: (object: _18.MsgGrantAmino) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _18.MsgExec) => _18.MsgExecAmino;
                    fromAmino: (object: _18.MsgExecAmino) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _18.MsgRevoke) => _18.MsgRevokeAmino;
                    fromAmino: (object: _18.MsgRevokeAmino) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _18.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgGrant;
                fromPartial(object: Partial<_18.MsgGrant>): _18.MsgGrant;
                fromAmino(object: _18.MsgGrantAmino): _18.MsgGrant;
                toAmino(message: _18.MsgGrant): _18.MsgGrantAmino;
                fromAminoMsg(object: _18.MsgGrantAminoMsg): _18.MsgGrant;
                toAminoMsg(message: _18.MsgGrant): _18.MsgGrantAminoMsg;
                fromProtoMsg(message: _18.MsgGrantProtoMsg): _18.MsgGrant;
                toProto(message: _18.MsgGrant): Uint8Array;
                toProtoMsg(message: _18.MsgGrant): _18.MsgGrantProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _18.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgGrantResponse;
                fromPartial(_: Partial<_18.MsgGrantResponse>): _18.MsgGrantResponse;
                fromAmino(_: _18.MsgGrantResponseAmino): _18.MsgGrantResponse;
                toAmino(_: _18.MsgGrantResponse): _18.MsgGrantResponseAmino;
                fromAminoMsg(object: _18.MsgGrantResponseAminoMsg): _18.MsgGrantResponse;
                toAminoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _18.MsgGrantResponseProtoMsg): _18.MsgGrantResponse;
                toProto(message: _18.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _18.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgExec;
                fromPartial(object: Partial<_18.MsgExec>): _18.MsgExec;
                fromAmino(object: _18.MsgExecAmino): _18.MsgExec;
                toAmino(message: _18.MsgExec): _18.MsgExecAmino;
                fromAminoMsg(object: _18.MsgExecAminoMsg): _18.MsgExec;
                toAminoMsg(message: _18.MsgExec): _18.MsgExecAminoMsg;
                fromProtoMsg(message: _18.MsgExecProtoMsg): _18.MsgExec;
                toProto(message: _18.MsgExec): Uint8Array;
                toProtoMsg(message: _18.MsgExec): _18.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _18.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgExecResponse;
                fromPartial(object: Partial<_18.MsgExecResponse>): _18.MsgExecResponse;
                fromAmino(object: _18.MsgExecResponseAmino): _18.MsgExecResponse;
                toAmino(message: _18.MsgExecResponse): _18.MsgExecResponseAmino;
                fromAminoMsg(object: _18.MsgExecResponseAminoMsg): _18.MsgExecResponse;
                toAminoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _18.MsgExecResponseProtoMsg): _18.MsgExecResponse;
                toProto(message: _18.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _18.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgRevoke;
                fromPartial(object: Partial<_18.MsgRevoke>): _18.MsgRevoke;
                fromAmino(object: _18.MsgRevokeAmino): _18.MsgRevoke;
                toAmino(message: _18.MsgRevoke): _18.MsgRevokeAmino;
                fromAminoMsg(object: _18.MsgRevokeAminoMsg): _18.MsgRevoke;
                toAminoMsg(message: _18.MsgRevoke): _18.MsgRevokeAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeProtoMsg): _18.MsgRevoke;
                toProto(message: _18.MsgRevoke): Uint8Array;
                toProtoMsg(message: _18.MsgRevoke): _18.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _18.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgRevokeResponse;
                fromPartial(_: Partial<_18.MsgRevokeResponse>): _18.MsgRevokeResponse;
                fromAmino(_: _18.MsgRevokeResponseAmino): _18.MsgRevokeResponse;
                toAmino(_: _18.MsgRevokeResponse): _18.MsgRevokeResponseAmino;
                fromAminoMsg(object: _18.MsgRevokeResponseAminoMsg): _18.MsgRevokeResponse;
                toAminoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeResponseProtoMsg): _18.MsgRevokeResponse;
                toProto(message: _18.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGrantsRequest;
                fromPartial(object: Partial<_17.QueryGrantsRequest>): _17.QueryGrantsRequest;
                fromAmino(object: _17.QueryGrantsRequestAmino): _17.QueryGrantsRequest;
                toAmino(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGrantsRequestAminoMsg): _17.QueryGrantsRequest;
                toAminoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsRequestProtoMsg): _17.QueryGrantsRequest;
                toProto(message: _17.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGrantsResponse;
                fromPartial(object: Partial<_17.QueryGrantsResponse>): _17.QueryGrantsResponse;
                fromAmino(object: _17.QueryGrantsResponseAmino): _17.QueryGrantsResponse;
                toAmino(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGrantsResponseAminoMsg): _17.QueryGrantsResponse;
                toAminoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsResponseProtoMsg): _17.QueryGrantsResponse;
                toProto(message: _17.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranterGrantsRequest>): _17.QueryGranterGrantsRequest;
                fromAmino(object: _17.QueryGranterGrantsRequestAmino): _17.QueryGranterGrantsRequest;
                toAmino(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsRequestAminoMsg): _17.QueryGranterGrantsRequest;
                toAminoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsRequestProtoMsg): _17.QueryGranterGrantsRequest;
                toProto(message: _17.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranterGrantsResponse>): _17.QueryGranterGrantsResponse;
                fromAmino(object: _17.QueryGranterGrantsResponseAmino): _17.QueryGranterGrantsResponse;
                toAmino(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsResponseAminoMsg): _17.QueryGranterGrantsResponse;
                toAminoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsResponseProtoMsg): _17.QueryGranterGrantsResponse;
                toProto(message: _17.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_17.QueryGranteeGrantsRequest>): _17.QueryGranteeGrantsRequest;
                fromAmino(object: _17.QueryGranteeGrantsRequestAmino): _17.QueryGranteeGrantsRequest;
                toAmino(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsRequestAminoMsg): _17.QueryGranteeGrantsRequest;
                toAminoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsRequestProtoMsg): _17.QueryGranteeGrantsRequest;
                toProto(message: _17.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_17.QueryGranteeGrantsResponse>): _17.QueryGranteeGrantsResponse;
                fromAmino(object: _17.QueryGranteeGrantsResponseAmino): _17.QueryGranteeGrantsResponse;
                toAmino(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsResponseAminoMsg): _17.QueryGranteeGrantsResponse;
                toAminoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsResponseProtoMsg): _17.QueryGranteeGrantsResponse;
                toProto(message: _17.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GenesisState;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _15.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.EventGrant;
                fromPartial(object: Partial<_15.EventGrant>): _15.EventGrant;
                fromAmino(object: _15.EventGrantAmino): _15.EventGrant;
                toAmino(message: _15.EventGrant): _15.EventGrantAmino;
                fromAminoMsg(object: _15.EventGrantAminoMsg): _15.EventGrant;
                toAminoMsg(message: _15.EventGrant): _15.EventGrantAminoMsg;
                fromProtoMsg(message: _15.EventGrantProtoMsg): _15.EventGrant;
                toProto(message: _15.EventGrant): Uint8Array;
                toProtoMsg(message: _15.EventGrant): _15.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _15.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.EventRevoke;
                fromPartial(object: Partial<_15.EventRevoke>): _15.EventRevoke;
                fromAmino(object: _15.EventRevokeAmino): _15.EventRevoke;
                toAmino(message: _15.EventRevoke): _15.EventRevokeAmino;
                fromAminoMsg(object: _15.EventRevokeAminoMsg): _15.EventRevoke;
                toAminoMsg(message: _15.EventRevoke): _15.EventRevokeAminoMsg;
                fromProtoMsg(message: _15.EventRevokeProtoMsg): _15.EventRevoke;
                toProto(message: _15.EventRevoke): Uint8Array;
                toProtoMsg(message: _15.EventRevoke): _15.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _14.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.GenericAuthorization;
                fromPartial(object: Partial<_14.GenericAuthorization>): _14.GenericAuthorization;
                fromAmino(object: _14.GenericAuthorizationAmino): _14.GenericAuthorization;
                toAmino(message: _14.GenericAuthorization): _14.GenericAuthorizationAmino;
                fromAminoMsg(object: _14.GenericAuthorizationAminoMsg): _14.GenericAuthorization;
                toAminoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GenericAuthorizationProtoMsg): _14.GenericAuthorization;
                toProto(message: _14.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _14.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.Grant;
                fromPartial(object: Partial<_14.Grant>): _14.Grant;
                fromAmino(object: _14.GrantAmino): _14.Grant;
                toAmino(message: _14.Grant): _14.GrantAmino;
                fromAminoMsg(object: _14.GrantAminoMsg): _14.Grant;
                toAminoMsg(message: _14.Grant): _14.GrantAminoMsg;
                fromProtoMsg(message: _14.GrantProtoMsg): _14.Grant;
                toProto(message: _14.Grant): Uint8Array;
                toProtoMsg(message: _14.Grant): _14.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _14.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.GrantAuthorization;
                fromPartial(object: Partial<_14.GrantAuthorization>): _14.GrantAuthorization;
                fromAmino(object: _14.GrantAuthorizationAmino): _14.GrantAuthorization;
                toAmino(message: _14.GrantAuthorization): _14.GrantAuthorizationAmino;
                fromAminoMsg(object: _14.GrantAuthorizationAminoMsg): _14.GrantAuthorization;
                toAminoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GrantAuthorizationProtoMsg): _14.GrantAuthorization;
                toProto(message: _14.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _14.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.GrantQueueItem;
                fromPartial(object: Partial<_14.GrantQueueItem>): _14.GrantQueueItem;
                fromAmino(object: _14.GrantQueueItemAmino): _14.GrantQueueItem;
                toAmino(message: _14.GrantQueueItem): _14.GrantQueueItemAmino;
                fromAminoMsg(object: _14.GrantQueueItemAminoMsg): _14.GrantQueueItem;
                toAminoMsg(message: _14.GrantQueueItem): _14.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _14.GrantQueueItemProtoMsg): _14.GrantQueueItem;
                toProto(message: _14.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _14.GrantQueueItem): _14.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _22.SendAuthorization | _112.StakeAuthorization | import("../ibc/applications/transfer/v1/authz").TransferAuthorization | _14.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _20.AppOptionsRequest): Promise<_20.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _20.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.AppOptionsRequest;
                fromPartial(_: Partial<_20.AppOptionsRequest>): _20.AppOptionsRequest;
                fromAmino(_: _20.AppOptionsRequestAmino): _20.AppOptionsRequest;
                toAmino(_: _20.AppOptionsRequest): _20.AppOptionsRequestAmino;
                fromAminoMsg(object: _20.AppOptionsRequestAminoMsg): _20.AppOptionsRequest;
                toAminoMsg(message: _20.AppOptionsRequest): _20.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _20.AppOptionsRequestProtoMsg): _20.AppOptionsRequest;
                toProto(message: _20.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _20.AppOptionsRequest): _20.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _20.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_20.AppOptionsResponse_ModuleOptionsEntry>): _20.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _20.AppOptionsResponse_ModuleOptionsEntryAmino): _20.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _20.AppOptionsResponse_ModuleOptionsEntry): _20.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _20.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _20.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _20.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _20.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _20.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _20.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.AppOptionsResponse;
                fromPartial(object: Partial<_20.AppOptionsResponse>): _20.AppOptionsResponse;
                fromAmino(object: _20.AppOptionsResponseAmino): _20.AppOptionsResponse;
                toAmino(message: _20.AppOptionsResponse): _20.AppOptionsResponseAmino;
                fromAminoMsg(object: _20.AppOptionsResponseAminoMsg): _20.AppOptionsResponse;
                toAminoMsg(message: _20.AppOptionsResponse): _20.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _20.AppOptionsResponseProtoMsg): _20.AppOptionsResponse;
                toProto(message: _20.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _20.AppOptionsResponse): _20.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _19.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.ModuleOptions;
                fromPartial(object: Partial<_19.ModuleOptions>): _19.ModuleOptions;
                fromAmino(object: _19.ModuleOptionsAmino): _19.ModuleOptions;
                toAmino(message: _19.ModuleOptions): _19.ModuleOptionsAmino;
                fromAminoMsg(object: _19.ModuleOptionsAminoMsg): _19.ModuleOptions;
                toAminoMsg(message: _19.ModuleOptions): _19.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _19.ModuleOptionsProtoMsg): _19.ModuleOptions;
                toProto(message: _19.ModuleOptions): Uint8Array;
                toProtoMsg(message: _19.ModuleOptions): _19.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _19.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_19.ServiceCommandDescriptor_SubCommandsEntry>): _19.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _19.ServiceCommandDescriptor_SubCommandsEntryAmino): _19.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _19.ServiceCommandDescriptor_SubCommandsEntry): _19.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _19.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _19.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _19.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _19.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _19.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _19.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.ServiceCommandDescriptor;
                fromPartial(object: Partial<_19.ServiceCommandDescriptor>): _19.ServiceCommandDescriptor;
                fromAmino(object: _19.ServiceCommandDescriptorAmino): _19.ServiceCommandDescriptor;
                toAmino(message: _19.ServiceCommandDescriptor): _19.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _19.ServiceCommandDescriptorAminoMsg): _19.ServiceCommandDescriptor;
                toAminoMsg(message: _19.ServiceCommandDescriptor): _19.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _19.ServiceCommandDescriptorProtoMsg): _19.ServiceCommandDescriptor;
                toProto(message: _19.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _19.ServiceCommandDescriptor): _19.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _19.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_19.RpcCommandOptions_FlagOptionsEntry>): _19.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _19.RpcCommandOptions_FlagOptionsEntryAmino): _19.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _19.RpcCommandOptions_FlagOptionsEntry): _19.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _19.RpcCommandOptions_FlagOptionsEntryAminoMsg): _19.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _19.RpcCommandOptions_FlagOptionsEntryProtoMsg): _19.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _19.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _19.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.RpcCommandOptions;
                fromPartial(object: Partial<_19.RpcCommandOptions>): _19.RpcCommandOptions;
                fromAmino(object: _19.RpcCommandOptionsAmino): _19.RpcCommandOptions;
                toAmino(message: _19.RpcCommandOptions): _19.RpcCommandOptionsAmino;
                fromAminoMsg(object: _19.RpcCommandOptionsAminoMsg): _19.RpcCommandOptions;
                toAminoMsg(message: _19.RpcCommandOptions): _19.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _19.RpcCommandOptionsProtoMsg): _19.RpcCommandOptions;
                toProto(message: _19.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _19.RpcCommandOptions): _19.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _19.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.FlagOptions;
                fromPartial(object: Partial<_19.FlagOptions>): _19.FlagOptions;
                fromAmino(object: _19.FlagOptionsAmino): _19.FlagOptions;
                toAmino(message: _19.FlagOptions): _19.FlagOptionsAmino;
                fromAminoMsg(object: _19.FlagOptionsAminoMsg): _19.FlagOptions;
                toAminoMsg(message: _19.FlagOptions): _19.FlagOptionsAminoMsg;
                fromProtoMsg(message: _19.FlagOptionsProtoMsg): _19.FlagOptions;
                toProto(message: _19.FlagOptions): Uint8Array;
                toProtoMsg(message: _19.FlagOptions): _19.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _19.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.PositionalArgDescriptor;
                fromPartial(object: Partial<_19.PositionalArgDescriptor>): _19.PositionalArgDescriptor;
                fromAmino(object: _19.PositionalArgDescriptorAmino): _19.PositionalArgDescriptor;
                toAmino(message: _19.PositionalArgDescriptor): _19.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _19.PositionalArgDescriptorAminoMsg): _19.PositionalArgDescriptor;
                toAminoMsg(message: _19.PositionalArgDescriptor): _19.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _19.PositionalArgDescriptorProtoMsg): _19.PositionalArgDescriptor;
                toProto(message: _19.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _19.PositionalArgDescriptor): _19.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _21.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.Module;
                    fromPartial(object: Partial<_21.Module>): _21.Module;
                    fromAmino(object: _21.ModuleAmino): _21.Module;
                    toAmino(message: _21.Module): _21.ModuleAmino;
                    fromAminoMsg(object: _21.ModuleAminoMsg): _21.Module;
                    toAminoMsg(message: _21.Module): _21.ModuleAminoMsg;
                    fromProtoMsg(message: _21.ModuleProtoMsg): _21.Module;
                    toProto(message: _21.Module): Uint8Array;
                    toProtoMsg(message: _21.Module): _21.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _25.QuerySpendableBalanceByDenomRequest): Promise<_25.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: _25.QueryDenomMetadataByQueryStringRequest): Promise<_25.QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                denomOwners(request: _25.QueryDenomOwnersRequest): Promise<_25.QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: _25.QueryDenomOwnersByQueryRequest): Promise<_25.QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: _25.QuerySendEnabledRequest): Promise<_25.QuerySendEnabledResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _26.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _26.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                    updateParams(value: _26.MsgUpdateParams): {
                        typeUrl: string;
                        value: _26.MsgUpdateParams;
                    };
                    setSendEnabled(value: _26.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _26.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                    updateParams(value: _26.MsgUpdateParams): {
                        typeUrl: string;
                        value: _26.MsgUpdateParams;
                    };
                    setSendEnabled(value: _26.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _26.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSend) => _26.MsgSendAmino;
                    fromAmino: (object: _26.MsgSendAmino) => _26.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _26.MsgMultiSend) => _26.MsgMultiSendAmino;
                    fromAmino: (object: _26.MsgMultiSendAmino) => _26.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _26.MsgUpdateParams) => _26.MsgUpdateParamsAmino;
                    fromAmino: (object: _26.MsgUpdateParamsAmino) => _26.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSetSendEnabled) => _26.MsgSetSendEnabledAmino;
                    fromAmino: (object: _26.MsgSetSendEnabledAmino) => _26.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _26.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSend;
                fromPartial(object: Partial<_26.MsgSend>): _26.MsgSend;
                fromAmino(object: _26.MsgSendAmino): _26.MsgSend;
                toAmino(message: _26.MsgSend): _26.MsgSendAmino;
                fromAminoMsg(object: _26.MsgSendAminoMsg): _26.MsgSend;
                toAminoMsg(message: _26.MsgSend): _26.MsgSendAminoMsg;
                fromProtoMsg(message: _26.MsgSendProtoMsg): _26.MsgSend;
                toProto(message: _26.MsgSend): Uint8Array;
                toProtoMsg(message: _26.MsgSend): _26.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _26.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSendResponse;
                fromPartial(_: Partial<_26.MsgSendResponse>): _26.MsgSendResponse;
                fromAmino(_: _26.MsgSendResponseAmino): _26.MsgSendResponse;
                toAmino(_: _26.MsgSendResponse): _26.MsgSendResponseAmino;
                fromAminoMsg(object: _26.MsgSendResponseAminoMsg): _26.MsgSendResponse;
                toAminoMsg(message: _26.MsgSendResponse): _26.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSendResponseProtoMsg): _26.MsgSendResponse;
                toProto(message: _26.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSendResponse): _26.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _26.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgMultiSend;
                fromPartial(object: Partial<_26.MsgMultiSend>): _26.MsgMultiSend;
                fromAmino(object: _26.MsgMultiSendAmino): _26.MsgMultiSend;
                toAmino(message: _26.MsgMultiSend): _26.MsgMultiSendAmino;
                fromAminoMsg(object: _26.MsgMultiSendAminoMsg): _26.MsgMultiSend;
                toAminoMsg(message: _26.MsgMultiSend): _26.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _26.MsgMultiSendProtoMsg): _26.MsgMultiSend;
                toProto(message: _26.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _26.MsgMultiSend): _26.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _26.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgMultiSendResponse;
                fromPartial(_: Partial<_26.MsgMultiSendResponse>): _26.MsgMultiSendResponse;
                fromAmino(_: _26.MsgMultiSendResponseAmino): _26.MsgMultiSendResponse;
                toAmino(_: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _26.MsgMultiSendResponseAminoMsg): _26.MsgMultiSendResponse;
                toAminoMsg(message: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _26.MsgMultiSendResponseProtoMsg): _26.MsgMultiSendResponse;
                toProto(message: _26.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _26.MsgMultiSendResponse): _26.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _26.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgUpdateParams;
                fromPartial(object: Partial<_26.MsgUpdateParams>): _26.MsgUpdateParams;
                fromAmino(object: _26.MsgUpdateParamsAmino): _26.MsgUpdateParams;
                toAmino(message: _26.MsgUpdateParams): _26.MsgUpdateParamsAmino;
                fromAminoMsg(object: _26.MsgUpdateParamsAminoMsg): _26.MsgUpdateParams;
                toAminoMsg(message: _26.MsgUpdateParams): _26.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _26.MsgUpdateParamsProtoMsg): _26.MsgUpdateParams;
                toProto(message: _26.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _26.MsgUpdateParams): _26.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _26.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_26.MsgUpdateParamsResponse>): _26.MsgUpdateParamsResponse;
                fromAmino(_: _26.MsgUpdateParamsResponseAmino): _26.MsgUpdateParamsResponse;
                toAmino(_: _26.MsgUpdateParamsResponse): _26.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _26.MsgUpdateParamsResponseAminoMsg): _26.MsgUpdateParamsResponse;
                toAminoMsg(message: _26.MsgUpdateParamsResponse): _26.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _26.MsgUpdateParamsResponseProtoMsg): _26.MsgUpdateParamsResponse;
                toProto(message: _26.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _26.MsgUpdateParamsResponse): _26.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _26.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSetSendEnabled;
                fromPartial(object: Partial<_26.MsgSetSendEnabled>): _26.MsgSetSendEnabled;
                fromAmino(object: _26.MsgSetSendEnabledAmino): _26.MsgSetSendEnabled;
                toAmino(message: _26.MsgSetSendEnabled): _26.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _26.MsgSetSendEnabledAminoMsg): _26.MsgSetSendEnabled;
                toAminoMsg(message: _26.MsgSetSendEnabled): _26.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _26.MsgSetSendEnabledProtoMsg): _26.MsgSetSendEnabled;
                toProto(message: _26.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _26.MsgSetSendEnabled): _26.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _26.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_26.MsgSetSendEnabledResponse>): _26.MsgSetSendEnabledResponse;
                fromAmino(_: _26.MsgSetSendEnabledResponseAmino): _26.MsgSetSendEnabledResponse;
                toAmino(_: _26.MsgSetSendEnabledResponse): _26.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _26.MsgSetSendEnabledResponseAminoMsg): _26.MsgSetSendEnabledResponse;
                toAminoMsg(message: _26.MsgSetSendEnabledResponse): _26.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSetSendEnabledResponseProtoMsg): _26.MsgSetSendEnabledResponse;
                toProto(message: _26.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSetSendEnabledResponse): _26.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _25.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryBalanceRequest;
                fromPartial(object: Partial<_25.QueryBalanceRequest>): _25.QueryBalanceRequest;
                fromAmino(object: _25.QueryBalanceRequestAmino): _25.QueryBalanceRequest;
                toAmino(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestAmino;
                fromAminoMsg(object: _25.QueryBalanceRequestAminoMsg): _25.QueryBalanceRequest;
                toAminoMsg(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _25.QueryBalanceRequestProtoMsg): _25.QueryBalanceRequest;
                toProto(message: _25.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _25.QueryBalanceRequest): _25.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _25.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryBalanceResponse;
                fromPartial(object: Partial<_25.QueryBalanceResponse>): _25.QueryBalanceResponse;
                fromAmino(object: _25.QueryBalanceResponseAmino): _25.QueryBalanceResponse;
                toAmino(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseAmino;
                fromAminoMsg(object: _25.QueryBalanceResponseAminoMsg): _25.QueryBalanceResponse;
                toAminoMsg(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _25.QueryBalanceResponseProtoMsg): _25.QueryBalanceResponse;
                toProto(message: _25.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _25.QueryBalanceResponse): _25.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _25.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryAllBalancesRequest;
                fromPartial(object: Partial<_25.QueryAllBalancesRequest>): _25.QueryAllBalancesRequest;
                fromAmino(object: _25.QueryAllBalancesRequestAmino): _25.QueryAllBalancesRequest;
                toAmino(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _25.QueryAllBalancesRequestAminoMsg): _25.QueryAllBalancesRequest;
                toAminoMsg(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _25.QueryAllBalancesRequestProtoMsg): _25.QueryAllBalancesRequest;
                toProto(message: _25.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _25.QueryAllBalancesRequest): _25.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _25.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryAllBalancesResponse;
                fromPartial(object: Partial<_25.QueryAllBalancesResponse>): _25.QueryAllBalancesResponse;
                fromAmino(object: _25.QueryAllBalancesResponseAmino): _25.QueryAllBalancesResponse;
                toAmino(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _25.QueryAllBalancesResponseAminoMsg): _25.QueryAllBalancesResponse;
                toAminoMsg(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _25.QueryAllBalancesResponseProtoMsg): _25.QueryAllBalancesResponse;
                toProto(message: _25.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _25.QueryAllBalancesResponse): _25.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_25.QuerySpendableBalancesRequest>): _25.QuerySpendableBalancesRequest;
                fromAmino(object: _25.QuerySpendableBalancesRequestAmino): _25.QuerySpendableBalancesRequest;
                toAmino(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _25.QuerySpendableBalancesRequestAminoMsg): _25.QuerySpendableBalancesRequest;
                toAminoMsg(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalancesRequestProtoMsg): _25.QuerySpendableBalancesRequest;
                toProto(message: _25.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalancesRequest): _25.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_25.QuerySpendableBalancesResponse>): _25.QuerySpendableBalancesResponse;
                fromAmino(object: _25.QuerySpendableBalancesResponseAmino): _25.QuerySpendableBalancesResponse;
                toAmino(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _25.QuerySpendableBalancesResponseAminoMsg): _25.QuerySpendableBalancesResponse;
                toAminoMsg(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalancesResponseProtoMsg): _25.QuerySpendableBalancesResponse;
                toProto(message: _25.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalancesResponse): _25.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_25.QuerySpendableBalanceByDenomRequest>): _25.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _25.QuerySpendableBalanceByDenomRequestAmino): _25.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _25.QuerySpendableBalanceByDenomRequest): _25.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _25.QuerySpendableBalanceByDenomRequestAminoMsg): _25.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _25.QuerySpendableBalanceByDenomRequest): _25.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalanceByDenomRequestProtoMsg): _25.QuerySpendableBalanceByDenomRequest;
                toProto(message: _25.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalanceByDenomRequest): _25.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _25.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_25.QuerySpendableBalanceByDenomResponse>): _25.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _25.QuerySpendableBalanceByDenomResponseAmino): _25.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _25.QuerySpendableBalanceByDenomResponse): _25.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _25.QuerySpendableBalanceByDenomResponseAminoMsg): _25.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _25.QuerySpendableBalanceByDenomResponse): _25.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySpendableBalanceByDenomResponseProtoMsg): _25.QuerySpendableBalanceByDenomResponse;
                toProto(message: _25.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySpendableBalanceByDenomResponse): _25.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _25.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_25.QueryTotalSupplyRequest>): _25.QueryTotalSupplyRequest;
                fromAmino(object: _25.QueryTotalSupplyRequestAmino): _25.QueryTotalSupplyRequest;
                toAmino(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _25.QueryTotalSupplyRequestAminoMsg): _25.QueryTotalSupplyRequest;
                toAminoMsg(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSupplyRequestProtoMsg): _25.QueryTotalSupplyRequest;
                toProto(message: _25.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSupplyRequest): _25.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _25.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_25.QueryTotalSupplyResponse>): _25.QueryTotalSupplyResponse;
                fromAmino(object: _25.QueryTotalSupplyResponseAmino): _25.QueryTotalSupplyResponse;
                toAmino(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _25.QueryTotalSupplyResponseAminoMsg): _25.QueryTotalSupplyResponse;
                toAminoMsg(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _25.QueryTotalSupplyResponseProtoMsg): _25.QueryTotalSupplyResponse;
                toProto(message: _25.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _25.QueryTotalSupplyResponse): _25.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _25.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySupplyOfRequest;
                fromPartial(object: Partial<_25.QuerySupplyOfRequest>): _25.QuerySupplyOfRequest;
                fromAmino(object: _25.QuerySupplyOfRequestAmino): _25.QuerySupplyOfRequest;
                toAmino(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _25.QuerySupplyOfRequestAminoMsg): _25.QuerySupplyOfRequest;
                toAminoMsg(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySupplyOfRequestProtoMsg): _25.QuerySupplyOfRequest;
                toProto(message: _25.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySupplyOfRequest): _25.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _25.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySupplyOfResponse;
                fromPartial(object: Partial<_25.QuerySupplyOfResponse>): _25.QuerySupplyOfResponse;
                fromAmino(object: _25.QuerySupplyOfResponseAmino): _25.QuerySupplyOfResponse;
                toAmino(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _25.QuerySupplyOfResponseAminoMsg): _25.QuerySupplyOfResponse;
                toAminoMsg(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySupplyOfResponseProtoMsg): _25.QuerySupplyOfResponse;
                toProto(message: _25.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySupplyOfResponse): _25.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _25.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryParamsRequest;
                fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
                fromAmino(_: _25.QueryParamsRequestAmino): _25.QueryParamsRequest;
                toAmino(_: _25.QueryParamsRequest): _25.QueryParamsRequestAmino;
                fromAminoMsg(object: _25.QueryParamsRequestAminoMsg): _25.QueryParamsRequest;
                toAminoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _25.QueryParamsRequestProtoMsg): _25.QueryParamsRequest;
                toProto(message: _25.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _25.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryParamsResponse;
                fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
                fromAmino(object: _25.QueryParamsResponseAmino): _25.QueryParamsResponse;
                toAmino(message: _25.QueryParamsResponse): _25.QueryParamsResponseAmino;
                fromAminoMsg(object: _25.QueryParamsResponseAminoMsg): _25.QueryParamsResponse;
                toAminoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _25.QueryParamsResponseProtoMsg): _25.QueryParamsResponse;
                toProto(message: _25.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomsMetadataRequest>): _25.QueryDenomsMetadataRequest;
                fromAmino(object: _25.QueryDenomsMetadataRequestAmino): _25.QueryDenomsMetadataRequest;
                toAmino(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _25.QueryDenomsMetadataRequestAminoMsg): _25.QueryDenomsMetadataRequest;
                toAminoMsg(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomsMetadataRequestProtoMsg): _25.QueryDenomsMetadataRequest;
                toProto(message: _25.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomsMetadataRequest): _25.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomsMetadataResponse>): _25.QueryDenomsMetadataResponse;
                fromAmino(object: _25.QueryDenomsMetadataResponseAmino): _25.QueryDenomsMetadataResponse;
                toAmino(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _25.QueryDenomsMetadataResponseAminoMsg): _25.QueryDenomsMetadataResponse;
                toAminoMsg(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomsMetadataResponseProtoMsg): _25.QueryDenomsMetadataResponse;
                toProto(message: _25.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomsMetadataResponse): _25.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_25.QueryDenomMetadataRequest>): _25.QueryDenomMetadataRequest;
                fromAmino(object: _25.QueryDenomMetadataRequestAmino): _25.QueryDenomMetadataRequest;
                toAmino(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataRequestAminoMsg): _25.QueryDenomMetadataRequest;
                toAminoMsg(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataRequestProtoMsg): _25.QueryDenomMetadataRequest;
                toProto(message: _25.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataRequest): _25.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_25.QueryDenomMetadataResponse>): _25.QueryDenomMetadataResponse;
                fromAmino(object: _25.QueryDenomMetadataResponseAmino): _25.QueryDenomMetadataResponse;
                toAmino(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataResponseAminoMsg): _25.QueryDenomMetadataResponse;
                toAminoMsg(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataResponseProtoMsg): _25.QueryDenomMetadataResponse;
                toProto(message: _25.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataResponse): _25.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomMetadataByQueryStringRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataByQueryStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomMetadataByQueryStringRequest;
                fromPartial(object: Partial<_25.QueryDenomMetadataByQueryStringRequest>): _25.QueryDenomMetadataByQueryStringRequest;
                fromAmino(object: _25.QueryDenomMetadataByQueryStringRequestAmino): _25.QueryDenomMetadataByQueryStringRequest;
                toAmino(message: _25.QueryDenomMetadataByQueryStringRequest): _25.QueryDenomMetadataByQueryStringRequestAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataByQueryStringRequestAminoMsg): _25.QueryDenomMetadataByQueryStringRequest;
                toAminoMsg(message: _25.QueryDenomMetadataByQueryStringRequest): _25.QueryDenomMetadataByQueryStringRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataByQueryStringRequestProtoMsg): _25.QueryDenomMetadataByQueryStringRequest;
                toProto(message: _25.QueryDenomMetadataByQueryStringRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataByQueryStringRequest): _25.QueryDenomMetadataByQueryStringRequestProtoMsg;
            };
            QueryDenomMetadataByQueryStringResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomMetadataByQueryStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomMetadataByQueryStringResponse;
                fromPartial(object: Partial<_25.QueryDenomMetadataByQueryStringResponse>): _25.QueryDenomMetadataByQueryStringResponse;
                fromAmino(object: _25.QueryDenomMetadataByQueryStringResponseAmino): _25.QueryDenomMetadataByQueryStringResponse;
                toAmino(message: _25.QueryDenomMetadataByQueryStringResponse): _25.QueryDenomMetadataByQueryStringResponseAmino;
                fromAminoMsg(object: _25.QueryDenomMetadataByQueryStringResponseAminoMsg): _25.QueryDenomMetadataByQueryStringResponse;
                toAminoMsg(message: _25.QueryDenomMetadataByQueryStringResponse): _25.QueryDenomMetadataByQueryStringResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomMetadataByQueryStringResponseProtoMsg): _25.QueryDenomMetadataByQueryStringResponse;
                toProto(message: _25.QueryDenomMetadataByQueryStringResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomMetadataByQueryStringResponse): _25.QueryDenomMetadataByQueryStringResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_25.QueryDenomOwnersRequest>): _25.QueryDenomOwnersRequest;
                fromAmino(object: _25.QueryDenomOwnersRequestAmino): _25.QueryDenomOwnersRequest;
                toAmino(message: _25.QueryDenomOwnersRequest): _25.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _25.QueryDenomOwnersRequestAminoMsg): _25.QueryDenomOwnersRequest;
                toAminoMsg(message: _25.QueryDenomOwnersRequest): _25.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomOwnersRequestProtoMsg): _25.QueryDenomOwnersRequest;
                toProto(message: _25.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomOwnersRequest): _25.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _25.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.DenomOwner;
                fromPartial(object: Partial<_25.DenomOwner>): _25.DenomOwner;
                fromAmino(object: _25.DenomOwnerAmino): _25.DenomOwner;
                toAmino(message: _25.DenomOwner): _25.DenomOwnerAmino;
                fromAminoMsg(object: _25.DenomOwnerAminoMsg): _25.DenomOwner;
                toAminoMsg(message: _25.DenomOwner): _25.DenomOwnerAminoMsg;
                fromProtoMsg(message: _25.DenomOwnerProtoMsg): _25.DenomOwner;
                toProto(message: _25.DenomOwner): Uint8Array;
                toProtoMsg(message: _25.DenomOwner): _25.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_25.QueryDenomOwnersResponse>): _25.QueryDenomOwnersResponse;
                fromAmino(object: _25.QueryDenomOwnersResponseAmino): _25.QueryDenomOwnersResponse;
                toAmino(message: _25.QueryDenomOwnersResponse): _25.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _25.QueryDenomOwnersResponseAminoMsg): _25.QueryDenomOwnersResponse;
                toAminoMsg(message: _25.QueryDenomOwnersResponse): _25.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomOwnersResponseProtoMsg): _25.QueryDenomOwnersResponse;
                toProto(message: _25.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomOwnersResponse): _25.QueryDenomOwnersResponseProtoMsg;
            };
            QueryDenomOwnersByQueryRequest: {
                typeUrl: string;
                encode(message: _25.QueryDenomOwnersByQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomOwnersByQueryRequest;
                fromPartial(object: Partial<_25.QueryDenomOwnersByQueryRequest>): _25.QueryDenomOwnersByQueryRequest;
                fromAmino(object: _25.QueryDenomOwnersByQueryRequestAmino): _25.QueryDenomOwnersByQueryRequest;
                toAmino(message: _25.QueryDenomOwnersByQueryRequest): _25.QueryDenomOwnersByQueryRequestAmino;
                fromAminoMsg(object: _25.QueryDenomOwnersByQueryRequestAminoMsg): _25.QueryDenomOwnersByQueryRequest;
                toAminoMsg(message: _25.QueryDenomOwnersByQueryRequest): _25.QueryDenomOwnersByQueryRequestAminoMsg;
                fromProtoMsg(message: _25.QueryDenomOwnersByQueryRequestProtoMsg): _25.QueryDenomOwnersByQueryRequest;
                toProto(message: _25.QueryDenomOwnersByQueryRequest): Uint8Array;
                toProtoMsg(message: _25.QueryDenomOwnersByQueryRequest): _25.QueryDenomOwnersByQueryRequestProtoMsg;
            };
            QueryDenomOwnersByQueryResponse: {
                typeUrl: string;
                encode(message: _25.QueryDenomOwnersByQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QueryDenomOwnersByQueryResponse;
                fromPartial(object: Partial<_25.QueryDenomOwnersByQueryResponse>): _25.QueryDenomOwnersByQueryResponse;
                fromAmino(object: _25.QueryDenomOwnersByQueryResponseAmino): _25.QueryDenomOwnersByQueryResponse;
                toAmino(message: _25.QueryDenomOwnersByQueryResponse): _25.QueryDenomOwnersByQueryResponseAmino;
                fromAminoMsg(object: _25.QueryDenomOwnersByQueryResponseAminoMsg): _25.QueryDenomOwnersByQueryResponse;
                toAminoMsg(message: _25.QueryDenomOwnersByQueryResponse): _25.QueryDenomOwnersByQueryResponseAminoMsg;
                fromProtoMsg(message: _25.QueryDenomOwnersByQueryResponseProtoMsg): _25.QueryDenomOwnersByQueryResponse;
                toProto(message: _25.QueryDenomOwnersByQueryResponse): Uint8Array;
                toProtoMsg(message: _25.QueryDenomOwnersByQueryResponse): _25.QueryDenomOwnersByQueryResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _25.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySendEnabledRequest;
                fromPartial(object: Partial<_25.QuerySendEnabledRequest>): _25.QuerySendEnabledRequest;
                fromAmino(object: _25.QuerySendEnabledRequestAmino): _25.QuerySendEnabledRequest;
                toAmino(message: _25.QuerySendEnabledRequest): _25.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _25.QuerySendEnabledRequestAminoMsg): _25.QuerySendEnabledRequest;
                toAminoMsg(message: _25.QuerySendEnabledRequest): _25.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _25.QuerySendEnabledRequestProtoMsg): _25.QuerySendEnabledRequest;
                toProto(message: _25.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _25.QuerySendEnabledRequest): _25.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _25.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.QuerySendEnabledResponse;
                fromPartial(object: Partial<_25.QuerySendEnabledResponse>): _25.QuerySendEnabledResponse;
                fromAmino(object: _25.QuerySendEnabledResponseAmino): _25.QuerySendEnabledResponse;
                toAmino(message: _25.QuerySendEnabledResponse): _25.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _25.QuerySendEnabledResponseAminoMsg): _25.QuerySendEnabledResponse;
                toAminoMsg(message: _25.QuerySendEnabledResponse): _25.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _25.QuerySendEnabledResponseProtoMsg): _25.QuerySendEnabledResponse;
                toProto(message: _25.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _25.QuerySendEnabledResponse): _25.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _24.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
                fromAmino(object: _24.GenesisStateAmino): _24.GenesisState;
                toAmino(message: _24.GenesisState): _24.GenesisStateAmino;
                fromAminoMsg(object: _24.GenesisStateAminoMsg): _24.GenesisState;
                toAminoMsg(message: _24.GenesisState): _24.GenesisStateAminoMsg;
                fromProtoMsg(message: _24.GenesisStateProtoMsg): _24.GenesisState;
                toProto(message: _24.GenesisState): Uint8Array;
                toProtoMsg(message: _24.GenesisState): _24.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _24.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.Balance;
                fromPartial(object: Partial<_24.Balance>): _24.Balance;
                fromAmino(object: _24.BalanceAmino): _24.Balance;
                toAmino(message: _24.Balance): _24.BalanceAmino;
                fromAminoMsg(object: _24.BalanceAminoMsg): _24.Balance;
                toAminoMsg(message: _24.Balance): _24.BalanceAminoMsg;
                fromProtoMsg(message: _24.BalanceProtoMsg): _24.Balance;
                toProto(message: _24.Balance): Uint8Array;
                toProtoMsg(message: _24.Balance): _24.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Params;
                fromPartial(object: Partial<_23.Params>): _23.Params;
                fromAmino(object: _23.ParamsAmino): _23.Params;
                toAmino(message: _23.Params): _23.ParamsAmino;
                fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
                toAminoMsg(message: _23.Params): _23.ParamsAminoMsg;
                fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
                toProto(message: _23.Params): Uint8Array;
                toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _23.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.SendEnabled;
                fromPartial(object: Partial<_23.SendEnabled>): _23.SendEnabled;
                fromAmino(object: _23.SendEnabledAmino): _23.SendEnabled;
                toAmino(message: _23.SendEnabled): _23.SendEnabledAmino;
                fromAminoMsg(object: _23.SendEnabledAminoMsg): _23.SendEnabled;
                toAminoMsg(message: _23.SendEnabled): _23.SendEnabledAminoMsg;
                fromProtoMsg(message: _23.SendEnabledProtoMsg): _23.SendEnabled;
                toProto(message: _23.SendEnabled): Uint8Array;
                toProtoMsg(message: _23.SendEnabled): _23.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _23.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Input;
                fromPartial(object: Partial<_23.Input>): _23.Input;
                fromAmino(object: _23.InputAmino): _23.Input;
                toAmino(message: _23.Input): _23.InputAmino;
                fromAminoMsg(object: _23.InputAminoMsg): _23.Input;
                toAminoMsg(message: _23.Input): _23.InputAminoMsg;
                fromProtoMsg(message: _23.InputProtoMsg): _23.Input;
                toProto(message: _23.Input): Uint8Array;
                toProtoMsg(message: _23.Input): _23.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _23.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Output;
                fromPartial(object: Partial<_23.Output>): _23.Output;
                fromAmino(object: _23.OutputAmino): _23.Output;
                toAmino(message: _23.Output): _23.OutputAmino;
                fromAminoMsg(object: _23.OutputAminoMsg): _23.Output;
                toAminoMsg(message: _23.Output): _23.OutputAminoMsg;
                fromProtoMsg(message: _23.OutputProtoMsg): _23.Output;
                toProto(message: _23.Output): Uint8Array;
                toProtoMsg(message: _23.Output): _23.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _23.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Supply;
                fromPartial(object: Partial<_23.Supply>): _23.Supply;
                fromAmino(object: _23.SupplyAmino): _23.Supply;
                toAmino(message: _23.Supply): _23.SupplyAmino;
                fromAminoMsg(object: _23.SupplyAminoMsg): _23.Supply;
                toAminoMsg(message: _23.Supply): _23.SupplyAminoMsg;
                fromProtoMsg(message: _23.SupplyProtoMsg): _23.Supply;
                toProto(message: _23.Supply): Uint8Array;
                toProtoMsg(message: _23.Supply): _23.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _23.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.DenomUnit;
                fromPartial(object: Partial<_23.DenomUnit>): _23.DenomUnit;
                fromAmino(object: _23.DenomUnitAmino): _23.DenomUnit;
                toAmino(message: _23.DenomUnit): _23.DenomUnitAmino;
                fromAminoMsg(object: _23.DenomUnitAminoMsg): _23.DenomUnit;
                toAminoMsg(message: _23.DenomUnit): _23.DenomUnitAminoMsg;
                fromProtoMsg(message: _23.DenomUnitProtoMsg): _23.DenomUnit;
                toProto(message: _23.DenomUnit): Uint8Array;
                toProtoMsg(message: _23.DenomUnit): _23.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _23.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.Metadata;
                fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                fromAmino(object: _23.MetadataAmino): _23.Metadata;
                toAmino(message: _23.Metadata): _23.MetadataAmino;
                fromAminoMsg(object: _23.MetadataAminoMsg): _23.Metadata;
                toAminoMsg(message: _23.Metadata): _23.MetadataAminoMsg;
                fromProtoMsg(message: _23.MetadataProtoMsg): _23.Metadata;
                toProto(message: _23.Metadata): Uint8Array;
                toProtoMsg(message: _23.Metadata): _23.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _22.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.SendAuthorization;
                fromPartial(object: Partial<_22.SendAuthorization>): _22.SendAuthorization;
                fromAmino(object: _22.SendAuthorizationAmino): _22.SendAuthorization;
                toAmino(message: _22.SendAuthorization): _22.SendAuthorizationAmino;
                fromAminoMsg(object: _22.SendAuthorizationAminoMsg): _22.SendAuthorization;
                toAminoMsg(message: _22.SendAuthorization): _22.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _22.SendAuthorizationProtoMsg): _22.SendAuthorization;
                toProto(message: _22.SendAuthorization): Uint8Array;
                toProtoMsg(message: _22.SendAuthorization): _22.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _27.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.TxResponse;
                    fromPartial(object: Partial<_27.TxResponse>): _27.TxResponse;
                    fromAmino(object: _27.TxResponseAmino): _27.TxResponse;
                    toAmino(message: _27.TxResponse): _27.TxResponseAmino;
                    fromAminoMsg(object: _27.TxResponseAminoMsg): _27.TxResponse;
                    toAminoMsg(message: _27.TxResponse): _27.TxResponseAminoMsg;
                    fromProtoMsg(message: _27.TxResponseProtoMsg): _27.TxResponse;
                    toProto(message: _27.TxResponse): Uint8Array;
                    toProtoMsg(message: _27.TxResponse): _27.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _27.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ABCIMessageLog;
                    fromPartial(object: Partial<_27.ABCIMessageLog>): _27.ABCIMessageLog;
                    fromAmino(object: _27.ABCIMessageLogAmino): _27.ABCIMessageLog;
                    toAmino(message: _27.ABCIMessageLog): _27.ABCIMessageLogAmino;
                    fromAminoMsg(object: _27.ABCIMessageLogAminoMsg): _27.ABCIMessageLog;
                    toAminoMsg(message: _27.ABCIMessageLog): _27.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _27.ABCIMessageLogProtoMsg): _27.ABCIMessageLog;
                    toProto(message: _27.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _27.ABCIMessageLog): _27.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _27.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.StringEvent;
                    fromPartial(object: Partial<_27.StringEvent>): _27.StringEvent;
                    fromAmino(object: _27.StringEventAmino): _27.StringEvent;
                    toAmino(message: _27.StringEvent): _27.StringEventAmino;
                    fromAminoMsg(object: _27.StringEventAminoMsg): _27.StringEvent;
                    toAminoMsg(message: _27.StringEvent): _27.StringEventAminoMsg;
                    fromProtoMsg(message: _27.StringEventProtoMsg): _27.StringEvent;
                    toProto(message: _27.StringEvent): Uint8Array;
                    toProtoMsg(message: _27.StringEvent): _27.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _27.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Attribute;
                    fromPartial(object: Partial<_27.Attribute>): _27.Attribute;
                    fromAmino(object: _27.AttributeAmino): _27.Attribute;
                    toAmino(message: _27.Attribute): _27.AttributeAmino;
                    fromAminoMsg(object: _27.AttributeAminoMsg): _27.Attribute;
                    toAminoMsg(message: _27.Attribute): _27.AttributeAminoMsg;
                    fromProtoMsg(message: _27.AttributeProtoMsg): _27.Attribute;
                    toProto(message: _27.Attribute): Uint8Array;
                    toProtoMsg(message: _27.Attribute): _27.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _27.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.GasInfo;
                    fromPartial(object: Partial<_27.GasInfo>): _27.GasInfo;
                    fromAmino(object: _27.GasInfoAmino): _27.GasInfo;
                    toAmino(message: _27.GasInfo): _27.GasInfoAmino;
                    fromAminoMsg(object: _27.GasInfoAminoMsg): _27.GasInfo;
                    toAminoMsg(message: _27.GasInfo): _27.GasInfoAminoMsg;
                    fromProtoMsg(message: _27.GasInfoProtoMsg): _27.GasInfo;
                    toProto(message: _27.GasInfo): Uint8Array;
                    toProtoMsg(message: _27.GasInfo): _27.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _27.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.Result;
                    fromPartial(object: Partial<_27.Result>): _27.Result;
                    fromAmino(object: _27.ResultAmino): _27.Result;
                    toAmino(message: _27.Result): _27.ResultAmino;
                    fromAminoMsg(object: _27.ResultAminoMsg): _27.Result;
                    toAminoMsg(message: _27.Result): _27.ResultAminoMsg;
                    fromProtoMsg(message: _27.ResultProtoMsg): _27.Result;
                    toProto(message: _27.Result): Uint8Array;
                    toProtoMsg(message: _27.Result): _27.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _27.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.SimulationResponse;
                    fromPartial(object: Partial<_27.SimulationResponse>): _27.SimulationResponse;
                    fromAmino(object: _27.SimulationResponseAmino): _27.SimulationResponse;
                    toAmino(message: _27.SimulationResponse): _27.SimulationResponseAmino;
                    fromAminoMsg(object: _27.SimulationResponseAminoMsg): _27.SimulationResponse;
                    toAminoMsg(message: _27.SimulationResponse): _27.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _27.SimulationResponseProtoMsg): _27.SimulationResponse;
                    toProto(message: _27.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _27.SimulationResponse): _27.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _27.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.MsgData;
                    fromPartial(object: Partial<_27.MsgData>): _27.MsgData;
                    fromAmino(object: _27.MsgDataAmino): _27.MsgData;
                    toAmino(message: _27.MsgData): _27.MsgDataAmino;
                    fromAminoMsg(object: _27.MsgDataAminoMsg): _27.MsgData;
                    toAminoMsg(message: _27.MsgData): _27.MsgDataAminoMsg;
                    fromProtoMsg(message: _27.MsgDataProtoMsg): _27.MsgData;
                    toProto(message: _27.MsgData): Uint8Array;
                    toProtoMsg(message: _27.MsgData): _27.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _27.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.TxMsgData;
                    fromPartial(object: Partial<_27.TxMsgData>): _27.TxMsgData;
                    fromAmino(object: _27.TxMsgDataAmino): _27.TxMsgData;
                    toAmino(message: _27.TxMsgData): _27.TxMsgDataAmino;
                    fromAminoMsg(object: _27.TxMsgDataAminoMsg): _27.TxMsgData;
                    toAminoMsg(message: _27.TxMsgData): _27.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _27.TxMsgDataProtoMsg): _27.TxMsgData;
                    toProto(message: _27.TxMsgData): Uint8Array;
                    toProtoMsg(message: _27.TxMsgData): _27.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _27.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.SearchTxsResult;
                    fromPartial(object: Partial<_27.SearchTxsResult>): _27.SearchTxsResult;
                    fromAmino(object: _27.SearchTxsResultAmino): _27.SearchTxsResult;
                    toAmino(message: _27.SearchTxsResult): _27.SearchTxsResultAmino;
                    fromAminoMsg(object: _27.SearchTxsResultAminoMsg): _27.SearchTxsResult;
                    toAminoMsg(message: _27.SearchTxsResult): _27.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _27.SearchTxsResultProtoMsg): _27.SearchTxsResult;
                    toProto(message: _27.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _27.SearchTxsResult): _27.SearchTxsResultProtoMsg;
                };
                SearchBlocksResult: {
                    typeUrl: string;
                    encode(message: _27.SearchBlocksResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.SearchBlocksResult;
                    fromPartial(object: Partial<_27.SearchBlocksResult>): _27.SearchBlocksResult;
                    fromAmino(object: _27.SearchBlocksResultAmino): _27.SearchBlocksResult;
                    toAmino(message: _27.SearchBlocksResult): _27.SearchBlocksResultAmino;
                    fromAminoMsg(object: _27.SearchBlocksResultAminoMsg): _27.SearchBlocksResult;
                    toAminoMsg(message: _27.SearchBlocksResult): _27.SearchBlocksResultAminoMsg;
                    fromProtoMsg(message: _27.SearchBlocksResultProtoMsg): _27.SearchBlocksResult;
                    toProto(message: _27.SearchBlocksResult): Uint8Array;
                    toProtoMsg(message: _27.SearchBlocksResult): _27.SearchBlocksResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _269.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _28.ConfigRequest): Promise<_28.ConfigResponse>;
                    status(request?: _28.StatusRequest): Promise<_28.StatusResponse>;
                };
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _28.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ConfigRequest;
                    fromPartial(_: Partial<_28.ConfigRequest>): _28.ConfigRequest;
                    fromAmino(_: _28.ConfigRequestAmino): _28.ConfigRequest;
                    toAmino(_: _28.ConfigRequest): _28.ConfigRequestAmino;
                    fromAminoMsg(object: _28.ConfigRequestAminoMsg): _28.ConfigRequest;
                    toAminoMsg(message: _28.ConfigRequest): _28.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _28.ConfigRequestProtoMsg): _28.ConfigRequest;
                    toProto(message: _28.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _28.ConfigRequest): _28.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _28.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.ConfigResponse;
                    fromPartial(object: Partial<_28.ConfigResponse>): _28.ConfigResponse;
                    fromAmino(object: _28.ConfigResponseAmino): _28.ConfigResponse;
                    toAmino(message: _28.ConfigResponse): _28.ConfigResponseAmino;
                    fromAminoMsg(object: _28.ConfigResponseAminoMsg): _28.ConfigResponse;
                    toAminoMsg(message: _28.ConfigResponse): _28.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _28.ConfigResponseProtoMsg): _28.ConfigResponse;
                    toProto(message: _28.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _28.ConfigResponse): _28.ConfigResponseProtoMsg;
                };
                StatusRequest: {
                    typeUrl: string;
                    encode(_: _28.StatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.StatusRequest;
                    fromPartial(_: Partial<_28.StatusRequest>): _28.StatusRequest;
                    fromAmino(_: _28.StatusRequestAmino): _28.StatusRequest;
                    toAmino(_: _28.StatusRequest): _28.StatusRequestAmino;
                    fromAminoMsg(object: _28.StatusRequestAminoMsg): _28.StatusRequest;
                    toAminoMsg(message: _28.StatusRequest): _28.StatusRequestAminoMsg;
                    fromProtoMsg(message: _28.StatusRequestProtoMsg): _28.StatusRequest;
                    toProto(message: _28.StatusRequest): Uint8Array;
                    toProtoMsg(message: _28.StatusRequest): _28.StatusRequestProtoMsg;
                };
                StatusResponse: {
                    typeUrl: string;
                    encode(message: _28.StatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.StatusResponse;
                    fromPartial(object: Partial<_28.StatusResponse>): _28.StatusResponse;
                    fromAmino(object: _28.StatusResponseAmino): _28.StatusResponse;
                    toAmino(message: _28.StatusResponse): _28.StatusResponseAmino;
                    fromAminoMsg(object: _28.StatusResponseAminoMsg): _28.StatusResponse;
                    toAminoMsg(message: _28.StatusResponse): _28.StatusResponseAminoMsg;
                    fromProtoMsg(message: _28.StatusResponseProtoMsg): _28.StatusResponse;
                    toProto(message: _28.StatusResponse): Uint8Array;
                    toProtoMsg(message: _28.StatusResponse): _28.StatusResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _29.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.PageRequest;
                    fromPartial(object: Partial<_29.PageRequest>): _29.PageRequest;
                    fromAmino(object: _29.PageRequestAmino): _29.PageRequest;
                    toAmino(message: _29.PageRequest): _29.PageRequestAmino;
                    fromAminoMsg(object: _29.PageRequestAminoMsg): _29.PageRequest;
                    toAminoMsg(message: _29.PageRequest): _29.PageRequestAminoMsg;
                    fromProtoMsg(message: _29.PageRequestProtoMsg): _29.PageRequest;
                    toProto(message: _29.PageRequest): Uint8Array;
                    toProtoMsg(message: _29.PageRequest): _29.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _29.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.PageResponse;
                    fromPartial(object: Partial<_29.PageResponse>): _29.PageResponse;
                    fromAmino(object: _29.PageResponseAmino): _29.PageResponse;
                    toAmino(message: _29.PageResponse): _29.PageResponseAmino;
                    fromAminoMsg(object: _29.PageResponseAminoMsg): _29.PageResponse;
                    toAminoMsg(message: _29.PageResponse): _29.PageResponseAminoMsg;
                    fromProtoMsg(message: _29.PageResponseProtoMsg): _29.PageResponse;
                    toProto(message: _29.PageResponse): Uint8Array;
                    toProtoMsg(message: _29.PageResponse): _29.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _30.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_30.ListAllInterfacesRequest>): _30.ListAllInterfacesRequest;
                    fromAmino(_: _30.ListAllInterfacesRequestAmino): _30.ListAllInterfacesRequest;
                    toAmino(_: _30.ListAllInterfacesRequest): _30.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _30.ListAllInterfacesRequestAminoMsg): _30.ListAllInterfacesRequest;
                    toAminoMsg(message: _30.ListAllInterfacesRequest): _30.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _30.ListAllInterfacesRequestProtoMsg): _30.ListAllInterfacesRequest;
                    toProto(message: _30.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _30.ListAllInterfacesRequest): _30.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _30.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_30.ListAllInterfacesResponse>): _30.ListAllInterfacesResponse;
                    fromAmino(object: _30.ListAllInterfacesResponseAmino): _30.ListAllInterfacesResponse;
                    toAmino(message: _30.ListAllInterfacesResponse): _30.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _30.ListAllInterfacesResponseAminoMsg): _30.ListAllInterfacesResponse;
                    toAminoMsg(message: _30.ListAllInterfacesResponse): _30.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _30.ListAllInterfacesResponseProtoMsg): _30.ListAllInterfacesResponse;
                    toProto(message: _30.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _30.ListAllInterfacesResponse): _30.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _30.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ListImplementationsRequest;
                    fromPartial(object: Partial<_30.ListImplementationsRequest>): _30.ListImplementationsRequest;
                    fromAmino(object: _30.ListImplementationsRequestAmino): _30.ListImplementationsRequest;
                    toAmino(message: _30.ListImplementationsRequest): _30.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _30.ListImplementationsRequestAminoMsg): _30.ListImplementationsRequest;
                    toAminoMsg(message: _30.ListImplementationsRequest): _30.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _30.ListImplementationsRequestProtoMsg): _30.ListImplementationsRequest;
                    toProto(message: _30.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _30.ListImplementationsRequest): _30.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _30.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.ListImplementationsResponse;
                    fromPartial(object: Partial<_30.ListImplementationsResponse>): _30.ListImplementationsResponse;
                    fromAmino(object: _30.ListImplementationsResponseAmino): _30.ListImplementationsResponse;
                    toAmino(message: _30.ListImplementationsResponse): _30.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _30.ListImplementationsResponseAminoMsg): _30.ListImplementationsResponse;
                    toAminoMsg(message: _30.ListImplementationsResponse): _30.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _30.ListImplementationsResponseProtoMsg): _30.ListImplementationsResponse;
                    toProto(message: _30.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _30.ListImplementationsResponse): _30.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _31.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.AppDescriptor;
                    fromPartial(object: Partial<_31.AppDescriptor>): _31.AppDescriptor;
                    fromAmino(object: _31.AppDescriptorAmino): _31.AppDescriptor;
                    toAmino(message: _31.AppDescriptor): _31.AppDescriptorAmino;
                    fromAminoMsg(object: _31.AppDescriptorAminoMsg): _31.AppDescriptor;
                    toAminoMsg(message: _31.AppDescriptor): _31.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _31.AppDescriptorProtoMsg): _31.AppDescriptor;
                    toProto(message: _31.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _31.AppDescriptor): _31.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _31.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.TxDescriptor;
                    fromPartial(object: Partial<_31.TxDescriptor>): _31.TxDescriptor;
                    fromAmino(object: _31.TxDescriptorAmino): _31.TxDescriptor;
                    toAmino(message: _31.TxDescriptor): _31.TxDescriptorAmino;
                    fromAminoMsg(object: _31.TxDescriptorAminoMsg): _31.TxDescriptor;
                    toAminoMsg(message: _31.TxDescriptor): _31.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _31.TxDescriptorProtoMsg): _31.TxDescriptor;
                    toProto(message: _31.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _31.TxDescriptor): _31.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _31.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.AuthnDescriptor;
                    fromPartial(object: Partial<_31.AuthnDescriptor>): _31.AuthnDescriptor;
                    fromAmino(object: _31.AuthnDescriptorAmino): _31.AuthnDescriptor;
                    toAmino(message: _31.AuthnDescriptor): _31.AuthnDescriptorAmino;
                    fromAminoMsg(object: _31.AuthnDescriptorAminoMsg): _31.AuthnDescriptor;
                    toAminoMsg(message: _31.AuthnDescriptor): _31.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _31.AuthnDescriptorProtoMsg): _31.AuthnDescriptor;
                    toProto(message: _31.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _31.AuthnDescriptor): _31.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _31.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.SigningModeDescriptor;
                    fromPartial(object: Partial<_31.SigningModeDescriptor>): _31.SigningModeDescriptor;
                    fromAmino(object: _31.SigningModeDescriptorAmino): _31.SigningModeDescriptor;
                    toAmino(message: _31.SigningModeDescriptor): _31.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _31.SigningModeDescriptorAminoMsg): _31.SigningModeDescriptor;
                    toAminoMsg(message: _31.SigningModeDescriptor): _31.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _31.SigningModeDescriptorProtoMsg): _31.SigningModeDescriptor;
                    toProto(message: _31.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _31.SigningModeDescriptor): _31.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _31.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.ChainDescriptor;
                    fromPartial(object: Partial<_31.ChainDescriptor>): _31.ChainDescriptor;
                    fromAmino(object: _31.ChainDescriptorAmino): _31.ChainDescriptor;
                    toAmino(message: _31.ChainDescriptor): _31.ChainDescriptorAmino;
                    fromAminoMsg(object: _31.ChainDescriptorAminoMsg): _31.ChainDescriptor;
                    toAminoMsg(message: _31.ChainDescriptor): _31.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _31.ChainDescriptorProtoMsg): _31.ChainDescriptor;
                    toProto(message: _31.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _31.ChainDescriptor): _31.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _31.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.CodecDescriptor;
                    fromPartial(object: Partial<_31.CodecDescriptor>): _31.CodecDescriptor;
                    fromAmino(object: _31.CodecDescriptorAmino): _31.CodecDescriptor;
                    toAmino(message: _31.CodecDescriptor): _31.CodecDescriptorAmino;
                    fromAminoMsg(object: _31.CodecDescriptorAminoMsg): _31.CodecDescriptor;
                    toAminoMsg(message: _31.CodecDescriptor): _31.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _31.CodecDescriptorProtoMsg): _31.CodecDescriptor;
                    toProto(message: _31.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _31.CodecDescriptor): _31.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _31.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.InterfaceDescriptor;
                    fromPartial(object: Partial<_31.InterfaceDescriptor>): _31.InterfaceDescriptor;
                    fromAmino(object: _31.InterfaceDescriptorAmino): _31.InterfaceDescriptor;
                    toAmino(message: _31.InterfaceDescriptor): _31.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _31.InterfaceDescriptorAminoMsg): _31.InterfaceDescriptor;
                    toAminoMsg(message: _31.InterfaceDescriptor): _31.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _31.InterfaceDescriptorProtoMsg): _31.InterfaceDescriptor;
                    toProto(message: _31.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _31.InterfaceDescriptor): _31.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _31.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_31.InterfaceImplementerDescriptor>): _31.InterfaceImplementerDescriptor;
                    fromAmino(object: _31.InterfaceImplementerDescriptorAmino): _31.InterfaceImplementerDescriptor;
                    toAmino(message: _31.InterfaceImplementerDescriptor): _31.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _31.InterfaceImplementerDescriptorAminoMsg): _31.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _31.InterfaceImplementerDescriptor): _31.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _31.InterfaceImplementerDescriptorProtoMsg): _31.InterfaceImplementerDescriptor;
                    toProto(message: _31.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _31.InterfaceImplementerDescriptor): _31.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _31.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_31.InterfaceAcceptingMessageDescriptor>): _31.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _31.InterfaceAcceptingMessageDescriptorAmino): _31.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _31.InterfaceAcceptingMessageDescriptor): _31.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _31.InterfaceAcceptingMessageDescriptorAminoMsg): _31.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _31.InterfaceAcceptingMessageDescriptor): _31.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _31.InterfaceAcceptingMessageDescriptorProtoMsg): _31.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _31.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _31.InterfaceAcceptingMessageDescriptor): _31.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _31.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.ConfigurationDescriptor;
                    fromPartial(object: Partial<_31.ConfigurationDescriptor>): _31.ConfigurationDescriptor;
                    fromAmino(object: _31.ConfigurationDescriptorAmino): _31.ConfigurationDescriptor;
                    toAmino(message: _31.ConfigurationDescriptor): _31.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _31.ConfigurationDescriptorAminoMsg): _31.ConfigurationDescriptor;
                    toAminoMsg(message: _31.ConfigurationDescriptor): _31.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _31.ConfigurationDescriptorProtoMsg): _31.ConfigurationDescriptor;
                    toProto(message: _31.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _31.ConfigurationDescriptor): _31.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _31.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.MsgDescriptor;
                    fromPartial(object: Partial<_31.MsgDescriptor>): _31.MsgDescriptor;
                    fromAmino(object: _31.MsgDescriptorAmino): _31.MsgDescriptor;
                    toAmino(message: _31.MsgDescriptor): _31.MsgDescriptorAmino;
                    fromAminoMsg(object: _31.MsgDescriptorAminoMsg): _31.MsgDescriptor;
                    toAminoMsg(message: _31.MsgDescriptor): _31.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _31.MsgDescriptorProtoMsg): _31.MsgDescriptor;
                    toProto(message: _31.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _31.MsgDescriptor): _31.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_31.GetAuthnDescriptorRequest>): _31.GetAuthnDescriptorRequest;
                    fromAmino(_: _31.GetAuthnDescriptorRequestAmino): _31.GetAuthnDescriptorRequest;
                    toAmino(_: _31.GetAuthnDescriptorRequest): _31.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetAuthnDescriptorRequestAminoMsg): _31.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _31.GetAuthnDescriptorRequest): _31.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetAuthnDescriptorRequestProtoMsg): _31.GetAuthnDescriptorRequest;
                    toProto(message: _31.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetAuthnDescriptorRequest): _31.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_31.GetAuthnDescriptorResponse>): _31.GetAuthnDescriptorResponse;
                    fromAmino(object: _31.GetAuthnDescriptorResponseAmino): _31.GetAuthnDescriptorResponse;
                    toAmino(message: _31.GetAuthnDescriptorResponse): _31.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetAuthnDescriptorResponseAminoMsg): _31.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _31.GetAuthnDescriptorResponse): _31.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetAuthnDescriptorResponseProtoMsg): _31.GetAuthnDescriptorResponse;
                    toProto(message: _31.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetAuthnDescriptorResponse): _31.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_31.GetChainDescriptorRequest>): _31.GetChainDescriptorRequest;
                    fromAmino(_: _31.GetChainDescriptorRequestAmino): _31.GetChainDescriptorRequest;
                    toAmino(_: _31.GetChainDescriptorRequest): _31.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetChainDescriptorRequestAminoMsg): _31.GetChainDescriptorRequest;
                    toAminoMsg(message: _31.GetChainDescriptorRequest): _31.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetChainDescriptorRequestProtoMsg): _31.GetChainDescriptorRequest;
                    toProto(message: _31.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetChainDescriptorRequest): _31.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_31.GetChainDescriptorResponse>): _31.GetChainDescriptorResponse;
                    fromAmino(object: _31.GetChainDescriptorResponseAmino): _31.GetChainDescriptorResponse;
                    toAmino(message: _31.GetChainDescriptorResponse): _31.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetChainDescriptorResponseAminoMsg): _31.GetChainDescriptorResponse;
                    toAminoMsg(message: _31.GetChainDescriptorResponse): _31.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetChainDescriptorResponseProtoMsg): _31.GetChainDescriptorResponse;
                    toProto(message: _31.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetChainDescriptorResponse): _31.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_31.GetCodecDescriptorRequest>): _31.GetCodecDescriptorRequest;
                    fromAmino(_: _31.GetCodecDescriptorRequestAmino): _31.GetCodecDescriptorRequest;
                    toAmino(_: _31.GetCodecDescriptorRequest): _31.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetCodecDescriptorRequestAminoMsg): _31.GetCodecDescriptorRequest;
                    toAminoMsg(message: _31.GetCodecDescriptorRequest): _31.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetCodecDescriptorRequestProtoMsg): _31.GetCodecDescriptorRequest;
                    toProto(message: _31.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetCodecDescriptorRequest): _31.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_31.GetCodecDescriptorResponse>): _31.GetCodecDescriptorResponse;
                    fromAmino(object: _31.GetCodecDescriptorResponseAmino): _31.GetCodecDescriptorResponse;
                    toAmino(message: _31.GetCodecDescriptorResponse): _31.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetCodecDescriptorResponseAminoMsg): _31.GetCodecDescriptorResponse;
                    toAminoMsg(message: _31.GetCodecDescriptorResponse): _31.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetCodecDescriptorResponseProtoMsg): _31.GetCodecDescriptorResponse;
                    toProto(message: _31.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetCodecDescriptorResponse): _31.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_31.GetConfigurationDescriptorRequest>): _31.GetConfigurationDescriptorRequest;
                    fromAmino(_: _31.GetConfigurationDescriptorRequestAmino): _31.GetConfigurationDescriptorRequest;
                    toAmino(_: _31.GetConfigurationDescriptorRequest): _31.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetConfigurationDescriptorRequestAminoMsg): _31.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _31.GetConfigurationDescriptorRequest): _31.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetConfigurationDescriptorRequestProtoMsg): _31.GetConfigurationDescriptorRequest;
                    toProto(message: _31.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetConfigurationDescriptorRequest): _31.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_31.GetConfigurationDescriptorResponse>): _31.GetConfigurationDescriptorResponse;
                    fromAmino(object: _31.GetConfigurationDescriptorResponseAmino): _31.GetConfigurationDescriptorResponse;
                    toAmino(message: _31.GetConfigurationDescriptorResponse): _31.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetConfigurationDescriptorResponseAminoMsg): _31.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _31.GetConfigurationDescriptorResponse): _31.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetConfigurationDescriptorResponseProtoMsg): _31.GetConfigurationDescriptorResponse;
                    toProto(message: _31.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetConfigurationDescriptorResponse): _31.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_31.GetQueryServicesDescriptorRequest>): _31.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _31.GetQueryServicesDescriptorRequestAmino): _31.GetQueryServicesDescriptorRequest;
                    toAmino(_: _31.GetQueryServicesDescriptorRequest): _31.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetQueryServicesDescriptorRequestAminoMsg): _31.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _31.GetQueryServicesDescriptorRequest): _31.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetQueryServicesDescriptorRequestProtoMsg): _31.GetQueryServicesDescriptorRequest;
                    toProto(message: _31.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetQueryServicesDescriptorRequest): _31.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_31.GetQueryServicesDescriptorResponse>): _31.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _31.GetQueryServicesDescriptorResponseAmino): _31.GetQueryServicesDescriptorResponse;
                    toAmino(message: _31.GetQueryServicesDescriptorResponse): _31.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetQueryServicesDescriptorResponseAminoMsg): _31.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _31.GetQueryServicesDescriptorResponse): _31.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetQueryServicesDescriptorResponseProtoMsg): _31.GetQueryServicesDescriptorResponse;
                    toProto(message: _31.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetQueryServicesDescriptorResponse): _31.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _31.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_31.GetTxDescriptorRequest>): _31.GetTxDescriptorRequest;
                    fromAmino(_: _31.GetTxDescriptorRequestAmino): _31.GetTxDescriptorRequest;
                    toAmino(_: _31.GetTxDescriptorRequest): _31.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _31.GetTxDescriptorRequestAminoMsg): _31.GetTxDescriptorRequest;
                    toAminoMsg(message: _31.GetTxDescriptorRequest): _31.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _31.GetTxDescriptorRequestProtoMsg): _31.GetTxDescriptorRequest;
                    toProto(message: _31.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _31.GetTxDescriptorRequest): _31.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _31.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_31.GetTxDescriptorResponse>): _31.GetTxDescriptorResponse;
                    fromAmino(object: _31.GetTxDescriptorResponseAmino): _31.GetTxDescriptorResponse;
                    toAmino(message: _31.GetTxDescriptorResponse): _31.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _31.GetTxDescriptorResponseAminoMsg): _31.GetTxDescriptorResponse;
                    toAminoMsg(message: _31.GetTxDescriptorResponse): _31.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _31.GetTxDescriptorResponseProtoMsg): _31.GetTxDescriptorResponse;
                    toProto(message: _31.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _31.GetTxDescriptorResponse): _31.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _31.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryServicesDescriptor;
                    fromPartial(object: Partial<_31.QueryServicesDescriptor>): _31.QueryServicesDescriptor;
                    fromAmino(object: _31.QueryServicesDescriptorAmino): _31.QueryServicesDescriptor;
                    toAmino(message: _31.QueryServicesDescriptor): _31.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _31.QueryServicesDescriptorAminoMsg): _31.QueryServicesDescriptor;
                    toAminoMsg(message: _31.QueryServicesDescriptor): _31.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _31.QueryServicesDescriptorProtoMsg): _31.QueryServicesDescriptor;
                    toProto(message: _31.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _31.QueryServicesDescriptor): _31.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _31.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryServiceDescriptor;
                    fromPartial(object: Partial<_31.QueryServiceDescriptor>): _31.QueryServiceDescriptor;
                    fromAmino(object: _31.QueryServiceDescriptorAmino): _31.QueryServiceDescriptor;
                    toAmino(message: _31.QueryServiceDescriptor): _31.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _31.QueryServiceDescriptorAminoMsg): _31.QueryServiceDescriptor;
                    toAminoMsg(message: _31.QueryServiceDescriptor): _31.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _31.QueryServiceDescriptorProtoMsg): _31.QueryServiceDescriptor;
                    toProto(message: _31.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _31.QueryServiceDescriptor): _31.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _31.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.QueryMethodDescriptor;
                    fromPartial(object: Partial<_31.QueryMethodDescriptor>): _31.QueryMethodDescriptor;
                    fromAmino(object: _31.QueryMethodDescriptorAmino): _31.QueryMethodDescriptor;
                    toAmino(message: _31.QueryMethodDescriptor): _31.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _31.QueryMethodDescriptorAminoMsg): _31.QueryMethodDescriptor;
                    toAminoMsg(message: _31.QueryMethodDescriptor): _31.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _31.QueryMethodDescriptorProtoMsg): _31.QueryMethodDescriptor;
                    toProto(message: _31.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _31.QueryMethodDescriptor): _31.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _270.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                    getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                    getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                    getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _32.ABCIQueryRequest): Promise<_32.ABCIQueryResponse>;
                };
                Block: {
                    typeUrl: string;
                    encode(message: _33.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.Block;
                    fromPartial(object: Partial<_33.Block>): _33.Block;
                    fromAmino(object: _33.BlockAmino): _33.Block;
                    toAmino(message: _33.Block): _33.BlockAmino;
                    fromAminoMsg(object: _33.BlockAminoMsg): _33.Block;
                    toAminoMsg(message: _33.Block): _33.BlockAminoMsg;
                    fromProtoMsg(message: _33.BlockProtoMsg): _33.Block;
                    toProto(message: _33.Block): Uint8Array;
                    toProtoMsg(message: _33.Block): _33.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _33.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.Header;
                    fromPartial(object: Partial<_33.Header>): _33.Header;
                    fromAmino(object: _33.HeaderAmino): _33.Header;
                    toAmino(message: _33.Header): _33.HeaderAmino;
                    fromAminoMsg(object: _33.HeaderAminoMsg): _33.Header;
                    toAminoMsg(message: _33.Header): _33.HeaderAminoMsg;
                    fromProtoMsg(message: _33.HeaderProtoMsg): _33.Header;
                    toProto(message: _33.Header): Uint8Array;
                    toProtoMsg(message: _33.Header): _33.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightRequest>): _32.GetValidatorSetByHeightRequest;
                    fromAmino(object: _32.GetValidatorSetByHeightRequestAmino): _32.GetValidatorSetByHeightRequest;
                    toAmino(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightRequestAminoMsg): _32.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightRequestProtoMsg): _32.GetValidatorSetByHeightRequest;
                    toProto(message: _32.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightResponse>): _32.GetValidatorSetByHeightResponse;
                    fromAmino(object: _32.GetValidatorSetByHeightResponseAmino): _32.GetValidatorSetByHeightResponse;
                    toAmino(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightResponseAminoMsg): _32.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightResponseProtoMsg): _32.GetValidatorSetByHeightResponse;
                    toProto(message: _32.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetRequest>): _32.GetLatestValidatorSetRequest;
                    fromAmino(object: _32.GetLatestValidatorSetRequestAmino): _32.GetLatestValidatorSetRequest;
                    toAmino(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetRequestAminoMsg): _32.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetRequestProtoMsg): _32.GetLatestValidatorSetRequest;
                    toProto(message: _32.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetResponse>): _32.GetLatestValidatorSetResponse;
                    fromAmino(object: _32.GetLatestValidatorSetResponseAmino): _32.GetLatestValidatorSetResponse;
                    toAmino(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetResponseAminoMsg): _32.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetResponseProtoMsg): _32.GetLatestValidatorSetResponse;
                    toProto(message: _32.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _32.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.Validator;
                    fromPartial(object: Partial<_32.Validator>): _32.Validator;
                    fromAmino(object: _32.ValidatorAmino): _32.Validator;
                    toAmino(message: _32.Validator): _32.ValidatorAmino;
                    fromAminoMsg(object: _32.ValidatorAminoMsg): _32.Validator;
                    toAminoMsg(message: _32.Validator): _32.ValidatorAminoMsg;
                    fromProtoMsg(message: _32.ValidatorProtoMsg): _32.Validator;
                    toProto(message: _32.Validator): Uint8Array;
                    toProtoMsg(message: _32.Validator): _32.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_32.GetBlockByHeightRequest>): _32.GetBlockByHeightRequest;
                    fromAmino(object: _32.GetBlockByHeightRequestAmino): _32.GetBlockByHeightRequest;
                    toAmino(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightRequestAminoMsg): _32.GetBlockByHeightRequest;
                    toAminoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightRequestProtoMsg): _32.GetBlockByHeightRequest;
                    toProto(message: _32.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_32.GetBlockByHeightResponse>): _32.GetBlockByHeightResponse;
                    fromAmino(object: _32.GetBlockByHeightResponseAmino): _32.GetBlockByHeightResponse;
                    toAmino(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightResponseAminoMsg): _32.GetBlockByHeightResponse;
                    toAminoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightResponseProtoMsg): _32.GetBlockByHeightResponse;
                    toProto(message: _32.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _32.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetLatestBlockRequest;
                    fromPartial(_: Partial<_32.GetLatestBlockRequest>): _32.GetLatestBlockRequest;
                    fromAmino(_: _32.GetLatestBlockRequestAmino): _32.GetLatestBlockRequest;
                    toAmino(_: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _32.GetLatestBlockRequestAminoMsg): _32.GetLatestBlockRequest;
                    toAminoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockRequestProtoMsg): _32.GetLatestBlockRequest;
                    toProto(message: _32.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetLatestBlockResponse;
                    fromPartial(object: Partial<_32.GetLatestBlockResponse>): _32.GetLatestBlockResponse;
                    fromAmino(object: _32.GetLatestBlockResponseAmino): _32.GetLatestBlockResponse;
                    toAmino(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _32.GetLatestBlockResponseAminoMsg): _32.GetLatestBlockResponse;
                    toAminoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockResponseProtoMsg): _32.GetLatestBlockResponse;
                    toProto(message: _32.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _32.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetSyncingRequest;
                    fromPartial(_: Partial<_32.GetSyncingRequest>): _32.GetSyncingRequest;
                    fromAmino(_: _32.GetSyncingRequestAmino): _32.GetSyncingRequest;
                    toAmino(_: _32.GetSyncingRequest): _32.GetSyncingRequestAmino;
                    fromAminoMsg(object: _32.GetSyncingRequestAminoMsg): _32.GetSyncingRequest;
                    toAminoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingRequestProtoMsg): _32.GetSyncingRequest;
                    toProto(message: _32.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _32.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetSyncingResponse;
                    fromPartial(object: Partial<_32.GetSyncingResponse>): _32.GetSyncingResponse;
                    fromAmino(object: _32.GetSyncingResponseAmino): _32.GetSyncingResponse;
                    toAmino(message: _32.GetSyncingResponse): _32.GetSyncingResponseAmino;
                    fromAminoMsg(object: _32.GetSyncingResponseAminoMsg): _32.GetSyncingResponse;
                    toAminoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingResponseProtoMsg): _32.GetSyncingResponse;
                    toProto(message: _32.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _32.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetNodeInfoRequest;
                    fromPartial(_: Partial<_32.GetNodeInfoRequest>): _32.GetNodeInfoRequest;
                    fromAmino(_: _32.GetNodeInfoRequestAmino): _32.GetNodeInfoRequest;
                    toAmino(_: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _32.GetNodeInfoRequestAminoMsg): _32.GetNodeInfoRequest;
                    toAminoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoRequestProtoMsg): _32.GetNodeInfoRequest;
                    toProto(message: _32.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _32.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.GetNodeInfoResponse;
                    fromPartial(object: Partial<_32.GetNodeInfoResponse>): _32.GetNodeInfoResponse;
                    fromAmino(object: _32.GetNodeInfoResponseAmino): _32.GetNodeInfoResponse;
                    toAmino(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _32.GetNodeInfoResponseAminoMsg): _32.GetNodeInfoResponse;
                    toAminoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoResponseProtoMsg): _32.GetNodeInfoResponse;
                    toProto(message: _32.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _32.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.VersionInfo;
                    fromPartial(object: Partial<_32.VersionInfo>): _32.VersionInfo;
                    fromAmino(object: _32.VersionInfoAmino): _32.VersionInfo;
                    toAmino(message: _32.VersionInfo): _32.VersionInfoAmino;
                    fromAminoMsg(object: _32.VersionInfoAminoMsg): _32.VersionInfo;
                    toAminoMsg(message: _32.VersionInfo): _32.VersionInfoAminoMsg;
                    fromProtoMsg(message: _32.VersionInfoProtoMsg): _32.VersionInfo;
                    toProto(message: _32.VersionInfo): Uint8Array;
                    toProtoMsg(message: _32.VersionInfo): _32.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _32.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.Module;
                    fromPartial(object: Partial<_32.Module>): _32.Module;
                    fromAmino(object: _32.ModuleAmino): _32.Module;
                    toAmino(message: _32.Module): _32.ModuleAmino;
                    fromAminoMsg(object: _32.ModuleAminoMsg): _32.Module;
                    toAminoMsg(message: _32.Module): _32.ModuleAminoMsg;
                    fromProtoMsg(message: _32.ModuleProtoMsg): _32.Module;
                    toProto(message: _32.Module): Uint8Array;
                    toProtoMsg(message: _32.Module): _32.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _32.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ABCIQueryRequest;
                    fromPartial(object: Partial<_32.ABCIQueryRequest>): _32.ABCIQueryRequest;
                    fromAmino(object: _32.ABCIQueryRequestAmino): _32.ABCIQueryRequest;
                    toAmino(message: _32.ABCIQueryRequest): _32.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _32.ABCIQueryRequestAminoMsg): _32.ABCIQueryRequest;
                    toAminoMsg(message: _32.ABCIQueryRequest): _32.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _32.ABCIQueryRequestProtoMsg): _32.ABCIQueryRequest;
                    toProto(message: _32.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _32.ABCIQueryRequest): _32.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _32.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ABCIQueryResponse;
                    fromPartial(object: Partial<_32.ABCIQueryResponse>): _32.ABCIQueryResponse;
                    fromAmino(object: _32.ABCIQueryResponseAmino): _32.ABCIQueryResponse;
                    toAmino(message: _32.ABCIQueryResponse): _32.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _32.ABCIQueryResponseAminoMsg): _32.ABCIQueryResponse;
                    toAminoMsg(message: _32.ABCIQueryResponse): _32.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _32.ABCIQueryResponseProtoMsg): _32.ABCIQueryResponse;
                    toProto(message: _32.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _32.ABCIQueryResponse): _32.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _32.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ProofOp;
                    fromPartial(object: Partial<_32.ProofOp>): _32.ProofOp;
                    fromAmino(object: _32.ProofOpAmino): _32.ProofOp;
                    toAmino(message: _32.ProofOp): _32.ProofOpAmino;
                    fromAminoMsg(object: _32.ProofOpAminoMsg): _32.ProofOp;
                    toAminoMsg(message: _32.ProofOp): _32.ProofOpAminoMsg;
                    fromProtoMsg(message: _32.ProofOpProtoMsg): _32.ProofOp;
                    toProto(message: _32.ProofOp): Uint8Array;
                    toProtoMsg(message: _32.ProofOp): _32.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _32.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.ProofOps;
                    fromPartial(object: Partial<_32.ProofOps>): _32.ProofOps;
                    fromAmino(object: _32.ProofOpsAmino): _32.ProofOps;
                    toAmino(message: _32.ProofOps): _32.ProofOpsAmino;
                    fromAminoMsg(object: _32.ProofOpsAminoMsg): _32.ProofOps;
                    toAminoMsg(message: _32.ProofOps): _32.ProofOpsAminoMsg;
                    fromProtoMsg(message: _32.ProofOpsProtoMsg): _32.ProofOps;
                    toProto(message: _32.ProofOps): Uint8Array;
                    toProtoMsg(message: _32.ProofOps): _32.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _34.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.Coin;
                fromPartial(object: Partial<_34.Coin>): _34.Coin;
                fromAmino(object: _34.CoinAmino): _34.Coin;
                toAmino(message: _34.Coin): _34.CoinAmino;
                fromAminoMsg(object: _34.CoinAminoMsg): _34.Coin;
                toAminoMsg(message: _34.Coin): _34.CoinAminoMsg;
                fromProtoMsg(message: _34.CoinProtoMsg): _34.Coin;
                toProto(message: _34.Coin): Uint8Array;
                toProtoMsg(message: _34.Coin): _34.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _34.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DecCoin;
                fromPartial(object: Partial<_34.DecCoin>): _34.DecCoin;
                fromAmino(object: _34.DecCoinAmino): _34.DecCoin;
                toAmino(message: _34.DecCoin): _34.DecCoinAmino;
                fromAminoMsg(object: _34.DecCoinAminoMsg): _34.DecCoin;
                toAminoMsg(message: _34.DecCoin): _34.DecCoinAminoMsg;
                fromProtoMsg(message: _34.DecCoinProtoMsg): _34.DecCoin;
                toProto(message: _34.DecCoin): Uint8Array;
                toProtoMsg(message: _34.DecCoin): _34.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _34.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.IntProto;
                fromPartial(object: Partial<_34.IntProto>): _34.IntProto;
                fromAmino(object: _34.IntProtoAmino): _34.IntProto;
                toAmino(message: _34.IntProto): _34.IntProtoAmino;
                fromAminoMsg(object: _34.IntProtoAminoMsg): _34.IntProto;
                toAminoMsg(message: _34.IntProto): _34.IntProtoAminoMsg;
                fromProtoMsg(message: _34.IntProtoProtoMsg): _34.IntProto;
                toProto(message: _34.IntProto): Uint8Array;
                toProtoMsg(message: _34.IntProto): _34.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _34.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.DecProto;
                fromPartial(object: Partial<_34.DecProto>): _34.DecProto;
                fromAmino(object: _34.DecProtoAmino): _34.DecProto;
                toAmino(message: _34.DecProto): _34.DecProtoAmino;
                fromAminoMsg(object: _34.DecProtoAminoMsg): _34.DecProto;
                toAminoMsg(message: _34.DecProto): _34.DecProtoAminoMsg;
                fromProtoMsg(message: _34.DecProtoProtoMsg): _34.DecProto;
                toProto(message: _34.DecProto): Uint8Array;
                toProtoMsg(message: _34.DecProto): _34.DecProtoProtoMsg;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _35.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.Module;
                    fromPartial(object: Partial<_35.Module>): _35.Module;
                    fromAmino(object: _35.ModuleAmino): _35.Module;
                    toAmino(message: _35.Module): _35.ModuleAmino;
                    fromAminoMsg(object: _35.ModuleAminoMsg): _35.Module;
                    toAminoMsg(message: _35.Module): _35.ModuleAminoMsg;
                    fromProtoMsg(message: _35.ModuleProtoMsg): _35.Module;
                    toProto(message: _35.Module): Uint8Array;
                    toProtoMsg(message: _35.Module): _35.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _36.QueryAccountRequest): Promise<_36.AccountResponse>;
                accounts(request?: _36.QueryAccountsRequest): Promise<_36.AccountsResponse>;
                disabledList(request?: _36.QueryDisabledListRequest): Promise<_36.DisabledListResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _37.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _37.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _37.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _37.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _37.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _37.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _37.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _37.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _37.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _37.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _37.MsgAuthorizeCircuitBreaker) => _37.MsgAuthorizeCircuitBreakerAmino;
                    fromAmino: (object: _37.MsgAuthorizeCircuitBreakerAmino) => _37.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _37.MsgTripCircuitBreaker) => _37.MsgTripCircuitBreakerAmino;
                    fromAmino: (object: _37.MsgTripCircuitBreakerAmino) => _37.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _37.MsgResetCircuitBreaker) => _37.MsgResetCircuitBreakerAmino;
                    fromAmino: (object: _37.MsgResetCircuitBreakerAmino) => _37.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _38.Permissions_Level;
            permissions_LevelToJSON(object: _38.Permissions_Level): string;
            Permissions_Level: typeof _38.Permissions_Level;
            Permissions_LevelSDKType: typeof _38.Permissions_Level;
            Permissions_LevelAmino: typeof _38.Permissions_Level;
            Permissions: {
                typeUrl: string;
                encode(message: _38.Permissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.Permissions;
                fromPartial(object: Partial<_38.Permissions>): _38.Permissions;
                fromAmino(object: _38.PermissionsAmino): _38.Permissions;
                toAmino(message: _38.Permissions): _38.PermissionsAmino;
                fromAminoMsg(object: _38.PermissionsAminoMsg): _38.Permissions;
                toAminoMsg(message: _38.Permissions): _38.PermissionsAminoMsg;
                fromProtoMsg(message: _38.PermissionsProtoMsg): _38.Permissions;
                toProto(message: _38.Permissions): Uint8Array;
                toProtoMsg(message: _38.Permissions): _38.PermissionsProtoMsg;
            };
            GenesisAccountPermissions: {
                typeUrl: string;
                encode(message: _38.GenesisAccountPermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.GenesisAccountPermissions;
                fromPartial(object: Partial<_38.GenesisAccountPermissions>): _38.GenesisAccountPermissions;
                fromAmino(object: _38.GenesisAccountPermissionsAmino): _38.GenesisAccountPermissions;
                toAmino(message: _38.GenesisAccountPermissions): _38.GenesisAccountPermissionsAmino;
                fromAminoMsg(object: _38.GenesisAccountPermissionsAminoMsg): _38.GenesisAccountPermissions;
                toAminoMsg(message: _38.GenesisAccountPermissions): _38.GenesisAccountPermissionsAminoMsg;
                fromProtoMsg(message: _38.GenesisAccountPermissionsProtoMsg): _38.GenesisAccountPermissions;
                toProto(message: _38.GenesisAccountPermissions): Uint8Array;
                toProtoMsg(message: _38.GenesisAccountPermissions): _38.GenesisAccountPermissionsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _38.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
                fromAmino(object: _38.GenesisStateAmino): _38.GenesisState;
                toAmino(message: _38.GenesisState): _38.GenesisStateAmino;
                fromAminoMsg(object: _38.GenesisStateAminoMsg): _38.GenesisState;
                toAminoMsg(message: _38.GenesisState): _38.GenesisStateAminoMsg;
                fromProtoMsg(message: _38.GenesisStateProtoMsg): _38.GenesisState;
                toProto(message: _38.GenesisState): Uint8Array;
                toProtoMsg(message: _38.GenesisState): _38.GenesisStateProtoMsg;
            };
            MsgAuthorizeCircuitBreaker: {
                typeUrl: string;
                encode(message: _37.MsgAuthorizeCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgAuthorizeCircuitBreaker;
                fromPartial(object: Partial<_37.MsgAuthorizeCircuitBreaker>): _37.MsgAuthorizeCircuitBreaker;
                fromAmino(object: _37.MsgAuthorizeCircuitBreakerAmino): _37.MsgAuthorizeCircuitBreaker;
                toAmino(message: _37.MsgAuthorizeCircuitBreaker): _37.MsgAuthorizeCircuitBreakerAmino;
                fromAminoMsg(object: _37.MsgAuthorizeCircuitBreakerAminoMsg): _37.MsgAuthorizeCircuitBreaker;
                toAminoMsg(message: _37.MsgAuthorizeCircuitBreaker): _37.MsgAuthorizeCircuitBreakerAminoMsg;
                fromProtoMsg(message: _37.MsgAuthorizeCircuitBreakerProtoMsg): _37.MsgAuthorizeCircuitBreaker;
                toProto(message: _37.MsgAuthorizeCircuitBreaker): Uint8Array;
                toProtoMsg(message: _37.MsgAuthorizeCircuitBreaker): _37.MsgAuthorizeCircuitBreakerProtoMsg;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _37.MsgAuthorizeCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgAuthorizeCircuitBreakerResponse;
                fromPartial(object: Partial<_37.MsgAuthorizeCircuitBreakerResponse>): _37.MsgAuthorizeCircuitBreakerResponse;
                fromAmino(object: _37.MsgAuthorizeCircuitBreakerResponseAmino): _37.MsgAuthorizeCircuitBreakerResponse;
                toAmino(message: _37.MsgAuthorizeCircuitBreakerResponse): _37.MsgAuthorizeCircuitBreakerResponseAmino;
                fromAminoMsg(object: _37.MsgAuthorizeCircuitBreakerResponseAminoMsg): _37.MsgAuthorizeCircuitBreakerResponse;
                toAminoMsg(message: _37.MsgAuthorizeCircuitBreakerResponse): _37.MsgAuthorizeCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _37.MsgAuthorizeCircuitBreakerResponseProtoMsg): _37.MsgAuthorizeCircuitBreakerResponse;
                toProto(message: _37.MsgAuthorizeCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _37.MsgAuthorizeCircuitBreakerResponse): _37.MsgAuthorizeCircuitBreakerResponseProtoMsg;
            };
            MsgTripCircuitBreaker: {
                typeUrl: string;
                encode(message: _37.MsgTripCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgTripCircuitBreaker;
                fromPartial(object: Partial<_37.MsgTripCircuitBreaker>): _37.MsgTripCircuitBreaker;
                fromAmino(object: _37.MsgTripCircuitBreakerAmino): _37.MsgTripCircuitBreaker;
                toAmino(message: _37.MsgTripCircuitBreaker): _37.MsgTripCircuitBreakerAmino;
                fromAminoMsg(object: _37.MsgTripCircuitBreakerAminoMsg): _37.MsgTripCircuitBreaker;
                toAminoMsg(message: _37.MsgTripCircuitBreaker): _37.MsgTripCircuitBreakerAminoMsg;
                fromProtoMsg(message: _37.MsgTripCircuitBreakerProtoMsg): _37.MsgTripCircuitBreaker;
                toProto(message: _37.MsgTripCircuitBreaker): Uint8Array;
                toProtoMsg(message: _37.MsgTripCircuitBreaker): _37.MsgTripCircuitBreakerProtoMsg;
            };
            MsgTripCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _37.MsgTripCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgTripCircuitBreakerResponse;
                fromPartial(object: Partial<_37.MsgTripCircuitBreakerResponse>): _37.MsgTripCircuitBreakerResponse;
                fromAmino(object: _37.MsgTripCircuitBreakerResponseAmino): _37.MsgTripCircuitBreakerResponse;
                toAmino(message: _37.MsgTripCircuitBreakerResponse): _37.MsgTripCircuitBreakerResponseAmino;
                fromAminoMsg(object: _37.MsgTripCircuitBreakerResponseAminoMsg): _37.MsgTripCircuitBreakerResponse;
                toAminoMsg(message: _37.MsgTripCircuitBreakerResponse): _37.MsgTripCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _37.MsgTripCircuitBreakerResponseProtoMsg): _37.MsgTripCircuitBreakerResponse;
                toProto(message: _37.MsgTripCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _37.MsgTripCircuitBreakerResponse): _37.MsgTripCircuitBreakerResponseProtoMsg;
            };
            MsgResetCircuitBreaker: {
                typeUrl: string;
                encode(message: _37.MsgResetCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgResetCircuitBreaker;
                fromPartial(object: Partial<_37.MsgResetCircuitBreaker>): _37.MsgResetCircuitBreaker;
                fromAmino(object: _37.MsgResetCircuitBreakerAmino): _37.MsgResetCircuitBreaker;
                toAmino(message: _37.MsgResetCircuitBreaker): _37.MsgResetCircuitBreakerAmino;
                fromAminoMsg(object: _37.MsgResetCircuitBreakerAminoMsg): _37.MsgResetCircuitBreaker;
                toAminoMsg(message: _37.MsgResetCircuitBreaker): _37.MsgResetCircuitBreakerAminoMsg;
                fromProtoMsg(message: _37.MsgResetCircuitBreakerProtoMsg): _37.MsgResetCircuitBreaker;
                toProto(message: _37.MsgResetCircuitBreaker): Uint8Array;
                toProtoMsg(message: _37.MsgResetCircuitBreaker): _37.MsgResetCircuitBreakerProtoMsg;
            };
            MsgResetCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _37.MsgResetCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.MsgResetCircuitBreakerResponse;
                fromPartial(object: Partial<_37.MsgResetCircuitBreakerResponse>): _37.MsgResetCircuitBreakerResponse;
                fromAmino(object: _37.MsgResetCircuitBreakerResponseAmino): _37.MsgResetCircuitBreakerResponse;
                toAmino(message: _37.MsgResetCircuitBreakerResponse): _37.MsgResetCircuitBreakerResponseAmino;
                fromAminoMsg(object: _37.MsgResetCircuitBreakerResponseAminoMsg): _37.MsgResetCircuitBreakerResponse;
                toAminoMsg(message: _37.MsgResetCircuitBreakerResponse): _37.MsgResetCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _37.MsgResetCircuitBreakerResponseProtoMsg): _37.MsgResetCircuitBreakerResponse;
                toProto(message: _37.MsgResetCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _37.MsgResetCircuitBreakerResponse): _37.MsgResetCircuitBreakerResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _36.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryAccountRequest;
                fromPartial(object: Partial<_36.QueryAccountRequest>): _36.QueryAccountRequest;
                fromAmino(object: _36.QueryAccountRequestAmino): _36.QueryAccountRequest;
                toAmino(message: _36.QueryAccountRequest): _36.QueryAccountRequestAmino;
                fromAminoMsg(object: _36.QueryAccountRequestAminoMsg): _36.QueryAccountRequest;
                toAminoMsg(message: _36.QueryAccountRequest): _36.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAccountRequestProtoMsg): _36.QueryAccountRequest;
                toProto(message: _36.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAccountRequest): _36.QueryAccountRequestProtoMsg;
            };
            AccountResponse: {
                typeUrl: string;
                encode(message: _36.AccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.AccountResponse;
                fromPartial(object: Partial<_36.AccountResponse>): _36.AccountResponse;
                fromAmino(object: _36.AccountResponseAmino): _36.AccountResponse;
                toAmino(message: _36.AccountResponse): _36.AccountResponseAmino;
                fromAminoMsg(object: _36.AccountResponseAminoMsg): _36.AccountResponse;
                toAminoMsg(message: _36.AccountResponse): _36.AccountResponseAminoMsg;
                fromProtoMsg(message: _36.AccountResponseProtoMsg): _36.AccountResponse;
                toProto(message: _36.AccountResponse): Uint8Array;
                toProtoMsg(message: _36.AccountResponse): _36.AccountResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _36.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryAccountsRequest;
                fromPartial(object: Partial<_36.QueryAccountsRequest>): _36.QueryAccountsRequest;
                fromAmino(object: _36.QueryAccountsRequestAmino): _36.QueryAccountsRequest;
                toAmino(message: _36.QueryAccountsRequest): _36.QueryAccountsRequestAmino;
                fromAminoMsg(object: _36.QueryAccountsRequestAminoMsg): _36.QueryAccountsRequest;
                toAminoMsg(message: _36.QueryAccountsRequest): _36.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAccountsRequestProtoMsg): _36.QueryAccountsRequest;
                toProto(message: _36.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAccountsRequest): _36.QueryAccountsRequestProtoMsg;
            };
            AccountsResponse: {
                typeUrl: string;
                encode(message: _36.AccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.AccountsResponse;
                fromPartial(object: Partial<_36.AccountsResponse>): _36.AccountsResponse;
                fromAmino(object: _36.AccountsResponseAmino): _36.AccountsResponse;
                toAmino(message: _36.AccountsResponse): _36.AccountsResponseAmino;
                fromAminoMsg(object: _36.AccountsResponseAminoMsg): _36.AccountsResponse;
                toAminoMsg(message: _36.AccountsResponse): _36.AccountsResponseAminoMsg;
                fromProtoMsg(message: _36.AccountsResponseProtoMsg): _36.AccountsResponse;
                toProto(message: _36.AccountsResponse): Uint8Array;
                toProtoMsg(message: _36.AccountsResponse): _36.AccountsResponseProtoMsg;
            };
            QueryDisabledListRequest: {
                typeUrl: string;
                encode(_: _36.QueryDisabledListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDisabledListRequest;
                fromPartial(_: Partial<_36.QueryDisabledListRequest>): _36.QueryDisabledListRequest;
                fromAmino(_: _36.QueryDisabledListRequestAmino): _36.QueryDisabledListRequest;
                toAmino(_: _36.QueryDisabledListRequest): _36.QueryDisabledListRequestAmino;
                fromAminoMsg(object: _36.QueryDisabledListRequestAminoMsg): _36.QueryDisabledListRequest;
                toAminoMsg(message: _36.QueryDisabledListRequest): _36.QueryDisabledListRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDisabledListRequestProtoMsg): _36.QueryDisabledListRequest;
                toProto(message: _36.QueryDisabledListRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDisabledListRequest): _36.QueryDisabledListRequestProtoMsg;
            };
            DisabledListResponse: {
                typeUrl: string;
                encode(message: _36.DisabledListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.DisabledListResponse;
                fromPartial(object: Partial<_36.DisabledListResponse>): _36.DisabledListResponse;
                fromAmino(object: _36.DisabledListResponseAmino): _36.DisabledListResponse;
                toAmino(message: _36.DisabledListResponse): _36.DisabledListResponseAmino;
                fromAminoMsg(object: _36.DisabledListResponseAminoMsg): _36.DisabledListResponse;
                toAminoMsg(message: _36.DisabledListResponse): _36.DisabledListResponseAminoMsg;
                fromProtoMsg(message: _36.DisabledListResponseProtoMsg): _36.DisabledListResponse;
                toProto(message: _36.DisabledListResponse): Uint8Array;
                toProtoMsg(message: _36.DisabledListResponse): _36.DisabledListResponseProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.Module;
                    fromPartial(object: Partial<_39.Module>): _39.Module;
                    fromAmino(object: _39.ModuleAmino): _39.Module;
                    toAmino(message: _39.Module): _39.ModuleAmino;
                    fromAminoMsg(object: _39.ModuleAminoMsg): _39.Module;
                    toAminoMsg(message: _39.Module): _39.ModuleAminoMsg;
                    fromProtoMsg(message: _39.ModuleProtoMsg): _39.Module;
                    toProto(message: _39.Module): Uint8Array;
                    toProtoMsg(message: _39.Module): _39.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _41.MsgUpdateParams): {
                        typeUrl: string;
                        value: _41.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _41.MsgUpdateParams) => _41.MsgUpdateParamsAmino;
                    fromAmino: (object: _41.MsgUpdateParamsAmino) => _41.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _41.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.MsgUpdateParams;
                fromPartial(object: Partial<_41.MsgUpdateParams>): _41.MsgUpdateParams;
                fromAmino(object: _41.MsgUpdateParamsAmino): _41.MsgUpdateParams;
                toAmino(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsAminoMsg): _41.MsgUpdateParams;
                toAminoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _41.MsgUpdateParamsProtoMsg): _41.MsgUpdateParams;
                toProto(message: _41.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParams): _41.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _41.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_41.MsgUpdateParamsResponse>): _41.MsgUpdateParamsResponse;
                fromAmino(_: _41.MsgUpdateParamsResponseAmino): _41.MsgUpdateParamsResponse;
                toAmino(_: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _41.MsgUpdateParamsResponseAminoMsg): _41.MsgUpdateParamsResponse;
                toAminoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _41.MsgUpdateParamsResponseProtoMsg): _41.MsgUpdateParamsResponse;
                toProto(message: _41.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _41.MsgUpdateParamsResponse): _41.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.QueryParamsRequest;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.QueryParamsResponse;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: _44.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _44.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _44.MsgVerifyInvariant;
                    };
                    updateParams(value: _44.MsgUpdateParams): {
                        typeUrl: string;
                        value: _44.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _44.MsgVerifyInvariant) => _44.MsgVerifyInvariantAmino;
                    fromAmino: (object: _44.MsgVerifyInvariantAmino) => _44.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _44.MsgUpdateParams) => _44.MsgUpdateParamsAmino;
                    fromAmino: (object: _44.MsgUpdateParamsAmino) => _44.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _44.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.MsgVerifyInvariant;
                fromPartial(object: Partial<_44.MsgVerifyInvariant>): _44.MsgVerifyInvariant;
                fromAmino(object: _44.MsgVerifyInvariantAmino): _44.MsgVerifyInvariant;
                toAmino(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantAminoMsg): _44.MsgVerifyInvariant;
                toAminoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantProtoMsg): _44.MsgVerifyInvariant;
                toProto(message: _44.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariant): _44.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _44.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_44.MsgVerifyInvariantResponse>): _44.MsgVerifyInvariantResponse;
                fromAmino(_: _44.MsgVerifyInvariantResponseAmino): _44.MsgVerifyInvariantResponse;
                toAmino(_: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _44.MsgVerifyInvariantResponseAminoMsg): _44.MsgVerifyInvariantResponse;
                toAminoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _44.MsgVerifyInvariantResponseProtoMsg): _44.MsgVerifyInvariantResponse;
                toProto(message: _44.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _44.MsgVerifyInvariantResponse): _44.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _44.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.MsgUpdateParams;
                fromPartial(object: Partial<_44.MsgUpdateParams>): _44.MsgUpdateParams;
                fromAmino(object: _44.MsgUpdateParamsAmino): _44.MsgUpdateParams;
                toAmino(message: _44.MsgUpdateParams): _44.MsgUpdateParamsAmino;
                fromAminoMsg(object: _44.MsgUpdateParamsAminoMsg): _44.MsgUpdateParams;
                toAminoMsg(message: _44.MsgUpdateParams): _44.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _44.MsgUpdateParamsProtoMsg): _44.MsgUpdateParams;
                toProto(message: _44.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateParams): _44.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _44.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_44.MsgUpdateParamsResponse>): _44.MsgUpdateParamsResponse;
                fromAmino(_: _44.MsgUpdateParamsResponseAmino): _44.MsgUpdateParamsResponse;
                toAmino(_: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _44.MsgUpdateParamsResponseAminoMsg): _44.MsgUpdateParamsResponse;
                toAminoMsg(message: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _44.MsgUpdateParamsResponseProtoMsg): _44.MsgUpdateParamsResponse;
                toProto(message: _44.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _44.MsgUpdateParamsResponse): _44.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.GenesisState;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _45.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.PubKey;
                fromPartial(object: Partial<_45.PubKey>): _45.PubKey;
                fromAmino(object: _45.PubKeyAmino): _45.PubKey;
                toAmino(message: _45.PubKey): _45.PubKeyAmino;
                fromAminoMsg(object: _45.PubKeyAminoMsg): _45.PubKey;
                toAminoMsg(message: _45.PubKey): _45.PubKeyAminoMsg;
                fromProtoMsg(message: _45.PubKeyProtoMsg): _45.PubKey;
                toProto(message: _45.PubKey): Uint8Array;
                toProtoMsg(message: _45.PubKey): _45.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _45.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.PrivKey;
                fromPartial(object: Partial<_45.PrivKey>): _45.PrivKey;
                fromAmino(object: _45.PrivKeyAmino): _45.PrivKey;
                toAmino(message: _45.PrivKey): _45.PrivKeyAmino;
                fromAminoMsg(object: _45.PrivKeyAminoMsg): _45.PrivKey;
                toAminoMsg(message: _45.PrivKey): _45.PrivKeyAminoMsg;
                fromProtoMsg(message: _45.PrivKeyProtoMsg): _45.PrivKey;
                toProto(message: _45.PrivKey): Uint8Array;
                toProtoMsg(message: _45.PrivKey): _45.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _46.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.BIP44Params;
                    fromPartial(object: Partial<_46.BIP44Params>): _46.BIP44Params;
                    fromAmino(object: _46.BIP44ParamsAmino): _46.BIP44Params;
                    toAmino(message: _46.BIP44Params): _46.BIP44ParamsAmino;
                    fromAminoMsg(object: _46.BIP44ParamsAminoMsg): _46.BIP44Params;
                    toAminoMsg(message: _46.BIP44Params): _46.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _46.BIP44ParamsProtoMsg): _46.BIP44Params;
                    toProto(message: _46.BIP44Params): Uint8Array;
                    toProtoMsg(message: _46.BIP44Params): _46.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _47.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Record;
                    fromPartial(object: Partial<_47.Record>): _47.Record;
                    fromAmino(object: _47.RecordAmino): _47.Record;
                    toAmino(message: _47.Record): _47.RecordAmino;
                    fromAminoMsg(object: _47.RecordAminoMsg): _47.Record;
                    toAminoMsg(message: _47.Record): _47.RecordAminoMsg;
                    fromProtoMsg(message: _47.RecordProtoMsg): _47.Record;
                    toProto(message: _47.Record): Uint8Array;
                    toProtoMsg(message: _47.Record): _47.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _47.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Record_Local;
                    fromPartial(object: Partial<_47.Record_Local>): _47.Record_Local;
                    fromAmino(object: _47.Record_LocalAmino): _47.Record_Local;
                    toAmino(message: _47.Record_Local): _47.Record_LocalAmino;
                    fromAminoMsg(object: _47.Record_LocalAminoMsg): _47.Record_Local;
                    toAminoMsg(message: _47.Record_Local): _47.Record_LocalAminoMsg;
                    fromProtoMsg(message: _47.Record_LocalProtoMsg): _47.Record_Local;
                    toProto(message: _47.Record_Local): Uint8Array;
                    toProtoMsg(message: _47.Record_Local): _47.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _47.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Record_Ledger;
                    fromPartial(object: Partial<_47.Record_Ledger>): _47.Record_Ledger;
                    fromAmino(object: _47.Record_LedgerAmino): _47.Record_Ledger;
                    toAmino(message: _47.Record_Ledger): _47.Record_LedgerAmino;
                    fromAminoMsg(object: _47.Record_LedgerAminoMsg): _47.Record_Ledger;
                    toAminoMsg(message: _47.Record_Ledger): _47.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _47.Record_LedgerProtoMsg): _47.Record_Ledger;
                    toProto(message: _47.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _47.Record_Ledger): _47.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _47.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Record_Multi;
                    fromPartial(_: Partial<_47.Record_Multi>): _47.Record_Multi;
                    fromAmino(_: _47.Record_MultiAmino): _47.Record_Multi;
                    toAmino(_: _47.Record_Multi): _47.Record_MultiAmino;
                    fromAminoMsg(object: _47.Record_MultiAminoMsg): _47.Record_Multi;
                    toAminoMsg(message: _47.Record_Multi): _47.Record_MultiAminoMsg;
                    fromProtoMsg(message: _47.Record_MultiProtoMsg): _47.Record_Multi;
                    toProto(message: _47.Record_Multi): Uint8Array;
                    toProtoMsg(message: _47.Record_Multi): _47.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _47.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _47.Record_Offline;
                    fromPartial(_: Partial<_47.Record_Offline>): _47.Record_Offline;
                    fromAmino(_: _47.Record_OfflineAmino): _47.Record_Offline;
                    toAmino(_: _47.Record_Offline): _47.Record_OfflineAmino;
                    fromAminoMsg(object: _47.Record_OfflineAminoMsg): _47.Record_Offline;
                    toAminoMsg(message: _47.Record_Offline): _47.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _47.Record_OfflineProtoMsg): _47.Record_Offline;
                    toProto(message: _47.Record_Offline): Uint8Array;
                    toProtoMsg(message: _47.Record_Offline): _47.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _48.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _48.LegacyAminoPubKey;
                fromPartial(object: Partial<_48.LegacyAminoPubKey>): _48.LegacyAminoPubKey;
                fromAmino(object: _48.LegacyAminoPubKeyAmino): _48.LegacyAminoPubKey;
                toAmino(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _48.LegacyAminoPubKeyAminoMsg): _48.LegacyAminoPubKey;
                toAminoMsg(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _48.LegacyAminoPubKeyProtoMsg): _48.LegacyAminoPubKey;
                toProto(message: _48.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _48.LegacyAminoPubKey): _48.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _49.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.PubKey;
                fromPartial(object: Partial<_49.PubKey>): _49.PubKey;
                fromAmino(object: _49.PubKeyAmino): _49.PubKey;
                toAmino(message: _49.PubKey): _49.PubKeyAmino;
                fromAminoMsg(object: _49.PubKeyAminoMsg): _49.PubKey;
                toAminoMsg(message: _49.PubKey): _49.PubKeyAminoMsg;
                fromProtoMsg(message: _49.PubKeyProtoMsg): _49.PubKey;
                toProto(message: _49.PubKey): Uint8Array;
                toProtoMsg(message: _49.PubKey): _49.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _49.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _49.PrivKey;
                fromPartial(object: Partial<_49.PrivKey>): _49.PrivKey;
                fromAmino(object: _49.PrivKeyAmino): _49.PrivKey;
                toAmino(message: _49.PrivKey): _49.PrivKeyAmino;
                fromAminoMsg(object: _49.PrivKeyAminoMsg): _49.PrivKey;
                toAminoMsg(message: _49.PrivKey): _49.PrivKeyAminoMsg;
                fromProtoMsg(message: _49.PrivKeyProtoMsg): _49.PrivKey;
                toProto(message: _49.PrivKey): Uint8Array;
                toProtoMsg(message: _49.PrivKey): _49.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _50.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.PubKey;
                fromPartial(object: Partial<_50.PubKey>): _50.PubKey;
                fromAmino(object: _50.PubKeyAmino): _50.PubKey;
                toAmino(message: _50.PubKey): _50.PubKeyAmino;
                fromAminoMsg(object: _50.PubKeyAminoMsg): _50.PubKey;
                toAminoMsg(message: _50.PubKey): _50.PubKeyAminoMsg;
                fromProtoMsg(message: _50.PubKeyProtoMsg): _50.PubKey;
                toProto(message: _50.PubKey): Uint8Array;
                toProtoMsg(message: _50.PubKey): _50.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _50.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _50.PrivKey;
                fromPartial(object: Partial<_50.PrivKey>): _50.PrivKey;
                fromAmino(object: _50.PrivKeyAmino): _50.PrivKey;
                toAmino(message: _50.PrivKey): _50.PrivKeyAmino;
                fromAminoMsg(object: _50.PrivKeyAminoMsg): _50.PrivKey;
                toAminoMsg(message: _50.PrivKey): _50.PrivKeyAminoMsg;
                fromProtoMsg(message: _50.PrivKeyProtoMsg): _50.PrivKey;
                toProto(message: _50.PrivKey): Uint8Array;
                toProtoMsg(message: _50.PrivKey): _50.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _51.Module;
                    fromPartial(object: Partial<_51.Module>): _51.Module;
                    fromAmino(object: _51.ModuleAmino): _51.Module;
                    toAmino(message: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                validatorDistributionInfo(request: _54.QueryValidatorDistributionInfoRequest): Promise<_54.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _55.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: _55.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _55.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _55.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _55.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _55.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _55.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _55.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _55.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _55.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _55.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _55.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _55.MsgFundCommunityPool;
                    };
                    updateParams(value: _55.MsgUpdateParams): {
                        typeUrl: string;
                        value: _55.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _55.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _55.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _55.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _55.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _55.MsgSetWithdrawAddress) => _55.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _55.MsgSetWithdrawAddressAmino) => _55.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawDelegatorReward) => _55.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _55.MsgWithdrawDelegatorRewardAmino) => _55.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _55.MsgWithdrawValidatorCommission) => _55.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _55.MsgWithdrawValidatorCommissionAmino) => _55.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _55.MsgFundCommunityPool) => _55.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _55.MsgFundCommunityPoolAmino) => _55.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _55.MsgUpdateParams) => _55.MsgUpdateParamsAmino;
                    fromAmino: (object: _55.MsgUpdateParamsAmino) => _55.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _55.MsgCommunityPoolSpend) => _55.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _55.MsgCommunityPoolSpendAmino) => _55.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: (message: _55.MsgDepositValidatorRewardsPool) => _55.MsgDepositValidatorRewardsPoolAmino;
                    fromAmino: (object: _55.MsgDepositValidatorRewardsPoolAmino) => _55.MsgDepositValidatorRewardsPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _55.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_55.MsgSetWithdrawAddress>): _55.MsgSetWithdrawAddress;
                fromAmino(object: _55.MsgSetWithdrawAddressAmino): _55.MsgSetWithdrawAddress;
                toAmino(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressAminoMsg): _55.MsgSetWithdrawAddress;
                toAminoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressProtoMsg): _55.MsgSetWithdrawAddress;
                toProto(message: _55.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddress): _55.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _55.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_55.MsgSetWithdrawAddressResponse>): _55.MsgSetWithdrawAddressResponse;
                fromAmino(_: _55.MsgSetWithdrawAddressResponseAmino): _55.MsgSetWithdrawAddressResponse;
                toAmino(_: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _55.MsgSetWithdrawAddressResponseAminoMsg): _55.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _55.MsgSetWithdrawAddressResponseProtoMsg): _55.MsgSetWithdrawAddressResponse;
                toProto(message: _55.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _55.MsgSetWithdrawAddressResponse): _55.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorReward>): _55.MsgWithdrawDelegatorReward;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardAmino): _55.MsgWithdrawDelegatorReward;
                toAmino(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardAminoMsg): _55.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardProtoMsg): _55.MsgWithdrawDelegatorReward;
                toProto(message: _55.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorReward): _55.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_55.MsgWithdrawDelegatorRewardResponse>): _55.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _55.MsgWithdrawDelegatorRewardResponseAmino): _55.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawDelegatorRewardResponseAminoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponseProtoMsg): _55.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _55.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawDelegatorRewardResponse): _55.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommission>): _55.MsgWithdrawValidatorCommission;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionAmino): _55.MsgWithdrawValidatorCommission;
                toAmino(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionAminoMsg): _55.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionProtoMsg): _55.MsgWithdrawValidatorCommission;
                toProto(message: _55.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommission): _55.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _55.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_55.MsgWithdrawValidatorCommissionResponse>): _55.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _55.MsgWithdrawValidatorCommissionResponseAmino): _55.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _55.MsgWithdrawValidatorCommissionResponseAminoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponseProtoMsg): _55.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _55.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _55.MsgWithdrawValidatorCommissionResponse): _55.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _55.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgFundCommunityPool;
                fromPartial(object: Partial<_55.MsgFundCommunityPool>): _55.MsgFundCommunityPool;
                fromAmino(object: _55.MsgFundCommunityPoolAmino): _55.MsgFundCommunityPool;
                toAmino(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolAminoMsg): _55.MsgFundCommunityPool;
                toAminoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolProtoMsg): _55.MsgFundCommunityPool;
                toProto(message: _55.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPool): _55.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _55.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_55.MsgFundCommunityPoolResponse>): _55.MsgFundCommunityPoolResponse;
                fromAmino(_: _55.MsgFundCommunityPoolResponseAmino): _55.MsgFundCommunityPoolResponse;
                toAmino(_: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _55.MsgFundCommunityPoolResponseAminoMsg): _55.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _55.MsgFundCommunityPoolResponseProtoMsg): _55.MsgFundCommunityPoolResponse;
                toProto(message: _55.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _55.MsgFundCommunityPoolResponse): _55.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _55.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgUpdateParams;
                fromPartial(object: Partial<_55.MsgUpdateParams>): _55.MsgUpdateParams;
                fromAmino(object: _55.MsgUpdateParamsAmino): _55.MsgUpdateParams;
                toAmino(message: _55.MsgUpdateParams): _55.MsgUpdateParamsAmino;
                fromAminoMsg(object: _55.MsgUpdateParamsAminoMsg): _55.MsgUpdateParams;
                toAminoMsg(message: _55.MsgUpdateParams): _55.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _55.MsgUpdateParamsProtoMsg): _55.MsgUpdateParams;
                toProto(message: _55.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _55.MsgUpdateParams): _55.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _55.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_55.MsgUpdateParamsResponse>): _55.MsgUpdateParamsResponse;
                fromAmino(_: _55.MsgUpdateParamsResponseAmino): _55.MsgUpdateParamsResponse;
                toAmino(_: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _55.MsgUpdateParamsResponseAminoMsg): _55.MsgUpdateParamsResponse;
                toAminoMsg(message: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _55.MsgUpdateParamsResponseProtoMsg): _55.MsgUpdateParamsResponse;
                toProto(message: _55.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _55.MsgUpdateParamsResponse): _55.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _55.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_55.MsgCommunityPoolSpend>): _55.MsgCommunityPoolSpend;
                fromAmino(object: _55.MsgCommunityPoolSpendAmino): _55.MsgCommunityPoolSpend;
                toAmino(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _55.MsgCommunityPoolSpendAminoMsg): _55.MsgCommunityPoolSpend;
                toAminoMsg(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _55.MsgCommunityPoolSpendProtoMsg): _55.MsgCommunityPoolSpend;
                toProto(message: _55.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _55.MsgCommunityPoolSpend): _55.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _55.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_55.MsgCommunityPoolSpendResponse>): _55.MsgCommunityPoolSpendResponse;
                fromAmino(_: _55.MsgCommunityPoolSpendResponseAmino): _55.MsgCommunityPoolSpendResponse;
                toAmino(_: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _55.MsgCommunityPoolSpendResponseAminoMsg): _55.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _55.MsgCommunityPoolSpendResponseProtoMsg): _55.MsgCommunityPoolSpendResponse;
                toProto(message: _55.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _55.MsgCommunityPoolSpendResponse): _55.MsgCommunityPoolSpendResponseProtoMsg;
            };
            MsgDepositValidatorRewardsPool: {
                typeUrl: string;
                encode(message: _55.MsgDepositValidatorRewardsPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgDepositValidatorRewardsPool;
                fromPartial(object: Partial<_55.MsgDepositValidatorRewardsPool>): _55.MsgDepositValidatorRewardsPool;
                fromAmino(object: _55.MsgDepositValidatorRewardsPoolAmino): _55.MsgDepositValidatorRewardsPool;
                toAmino(message: _55.MsgDepositValidatorRewardsPool): _55.MsgDepositValidatorRewardsPoolAmino;
                fromAminoMsg(object: _55.MsgDepositValidatorRewardsPoolAminoMsg): _55.MsgDepositValidatorRewardsPool;
                toAminoMsg(message: _55.MsgDepositValidatorRewardsPool): _55.MsgDepositValidatorRewardsPoolAminoMsg;
                fromProtoMsg(message: _55.MsgDepositValidatorRewardsPoolProtoMsg): _55.MsgDepositValidatorRewardsPool;
                toProto(message: _55.MsgDepositValidatorRewardsPool): Uint8Array;
                toProtoMsg(message: _55.MsgDepositValidatorRewardsPool): _55.MsgDepositValidatorRewardsPoolProtoMsg;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                typeUrl: string;
                encode(_: _55.MsgDepositValidatorRewardsPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgDepositValidatorRewardsPoolResponse;
                fromPartial(_: Partial<_55.MsgDepositValidatorRewardsPoolResponse>): _55.MsgDepositValidatorRewardsPoolResponse;
                fromAmino(_: _55.MsgDepositValidatorRewardsPoolResponseAmino): _55.MsgDepositValidatorRewardsPoolResponse;
                toAmino(_: _55.MsgDepositValidatorRewardsPoolResponse): _55.MsgDepositValidatorRewardsPoolResponseAmino;
                fromAminoMsg(object: _55.MsgDepositValidatorRewardsPoolResponseAminoMsg): _55.MsgDepositValidatorRewardsPoolResponse;
                toAminoMsg(message: _55.MsgDepositValidatorRewardsPoolResponse): _55.MsgDepositValidatorRewardsPoolResponseAminoMsg;
                fromProtoMsg(message: _55.MsgDepositValidatorRewardsPoolResponseProtoMsg): _55.MsgDepositValidatorRewardsPoolResponse;
                toProto(message: _55.MsgDepositValidatorRewardsPoolResponse): Uint8Array;
                toProtoMsg(message: _55.MsgDepositValidatorRewardsPoolResponse): _55.MsgDepositValidatorRewardsPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _54.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryParamsRequest;
                fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                fromAmino(_: _54.QueryParamsRequestAmino): _54.QueryParamsRequest;
                toAmino(_: _54.QueryParamsRequest): _54.QueryParamsRequestAmino;
                fromAminoMsg(object: _54.QueryParamsRequestAminoMsg): _54.QueryParamsRequest;
                toAminoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryParamsRequestProtoMsg): _54.QueryParamsRequest;
                toProto(message: _54.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryParamsRequest): _54.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _54.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryParamsResponse;
                fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                fromAmino(object: _54.QueryParamsResponseAmino): _54.QueryParamsResponse;
                toAmino(message: _54.QueryParamsResponse): _54.QueryParamsResponseAmino;
                fromAminoMsg(object: _54.QueryParamsResponseAminoMsg): _54.QueryParamsResponse;
                toAminoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryParamsResponseProtoMsg): _54.QueryParamsResponse;
                toProto(message: _54.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryParamsResponse): _54.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_54.QueryValidatorDistributionInfoRequest>): _54.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _54.QueryValidatorDistributionInfoRequestAmino): _54.QueryValidatorDistributionInfoRequest;
                toAmino(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorDistributionInfoRequestAminoMsg): _54.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorDistributionInfoRequestProtoMsg): _54.QueryValidatorDistributionInfoRequest;
                toProto(message: _54.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorDistributionInfoRequest): _54.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_54.QueryValidatorDistributionInfoResponse>): _54.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _54.QueryValidatorDistributionInfoResponseAmino): _54.QueryValidatorDistributionInfoResponse;
                toAmino(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorDistributionInfoResponseAminoMsg): _54.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorDistributionInfoResponseProtoMsg): _54.QueryValidatorDistributionInfoResponse;
                toProto(message: _54.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorDistributionInfoResponse): _54.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsRequest>): _54.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsRequestAmino): _54.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsRequestAminoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequestProtoMsg): _54.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _54.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsRequest): _54.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_54.QueryValidatorOutstandingRewardsResponse>): _54.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _54.QueryValidatorOutstandingRewardsResponseAmino): _54.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorOutstandingRewardsResponseAminoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponseProtoMsg): _54.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _54.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorOutstandingRewardsResponse): _54.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_54.QueryValidatorCommissionRequest>): _54.QueryValidatorCommissionRequest;
                fromAmino(object: _54.QueryValidatorCommissionRequestAmino): _54.QueryValidatorCommissionRequest;
                toAmino(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionRequestAminoMsg): _54.QueryValidatorCommissionRequest;
                toAminoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionRequestProtoMsg): _54.QueryValidatorCommissionRequest;
                toProto(message: _54.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionRequest): _54.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_54.QueryValidatorCommissionResponse>): _54.QueryValidatorCommissionResponse;
                fromAmino(object: _54.QueryValidatorCommissionResponseAmino): _54.QueryValidatorCommissionResponse;
                toAmino(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorCommissionResponseAminoMsg): _54.QueryValidatorCommissionResponse;
                toAminoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorCommissionResponseProtoMsg): _54.QueryValidatorCommissionResponse;
                toProto(message: _54.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorCommissionResponse): _54.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_54.QueryValidatorSlashesRequest>): _54.QueryValidatorSlashesRequest;
                fromAmino(object: _54.QueryValidatorSlashesRequestAmino): _54.QueryValidatorSlashesRequest;
                toAmino(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesRequestAminoMsg): _54.QueryValidatorSlashesRequest;
                toAminoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesRequestProtoMsg): _54.QueryValidatorSlashesRequest;
                toProto(message: _54.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesRequest): _54.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _54.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_54.QueryValidatorSlashesResponse>): _54.QueryValidatorSlashesResponse;
                fromAmino(object: _54.QueryValidatorSlashesResponseAmino): _54.QueryValidatorSlashesResponse;
                toAmino(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorSlashesResponseAminoMsg): _54.QueryValidatorSlashesResponse;
                toAminoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorSlashesResponseProtoMsg): _54.QueryValidatorSlashesResponse;
                toProto(message: _54.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorSlashesResponse): _54.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationRewardsRequest>): _54.QueryDelegationRewardsRequest;
                fromAmino(object: _54.QueryDelegationRewardsRequestAmino): _54.QueryDelegationRewardsRequest;
                toAmino(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsRequestAminoMsg): _54.QueryDelegationRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsRequestProtoMsg): _54.QueryDelegationRewardsRequest;
                toProto(message: _54.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsRequest): _54.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationRewardsResponse>): _54.QueryDelegationRewardsResponse;
                fromAmino(object: _54.QueryDelegationRewardsResponseAmino): _54.QueryDelegationRewardsResponse;
                toAmino(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationRewardsResponseAminoMsg): _54.QueryDelegationRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationRewardsResponseProtoMsg): _54.QueryDelegationRewardsResponse;
                toProto(message: _54.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationRewardsResponse): _54.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsRequest>): _54.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _54.QueryDelegationTotalRewardsRequestAmino): _54.QueryDelegationTotalRewardsRequest;
                toAmino(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsRequestAminoMsg): _54.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsRequestProtoMsg): _54.QueryDelegationTotalRewardsRequest;
                toProto(message: _54.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsRequest): _54.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_54.QueryDelegationTotalRewardsResponse>): _54.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _54.QueryDelegationTotalRewardsResponseAmino): _54.QueryDelegationTotalRewardsResponse;
                toAmino(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegationTotalRewardsResponseAminoMsg): _54.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegationTotalRewardsResponseProtoMsg): _54.QueryDelegationTotalRewardsResponse;
                toProto(message: _54.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegationTotalRewardsResponse): _54.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsRequest>): _54.QueryDelegatorValidatorsRequest;
                fromAmino(object: _54.QueryDelegatorValidatorsRequestAmino): _54.QueryDelegatorValidatorsRequest;
                toAmino(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsRequestAminoMsg): _54.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsRequestProtoMsg): _54.QueryDelegatorValidatorsRequest;
                toProto(message: _54.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsRequest): _54.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_54.QueryDelegatorValidatorsResponse>): _54.QueryDelegatorValidatorsResponse;
                fromAmino(object: _54.QueryDelegatorValidatorsResponseAmino): _54.QueryDelegatorValidatorsResponse;
                toAmino(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorValidatorsResponseAminoMsg): _54.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorValidatorsResponseProtoMsg): _54.QueryDelegatorValidatorsResponse;
                toProto(message: _54.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorValidatorsResponse): _54.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressRequest>): _54.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressRequestAmino): _54.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressRequestAminoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequestProtoMsg): _54.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _54.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressRequest): _54.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _54.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_54.QueryDelegatorWithdrawAddressResponse>): _54.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _54.QueryDelegatorWithdrawAddressResponseAmino): _54.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _54.QueryDelegatorWithdrawAddressResponseAminoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponseProtoMsg): _54.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _54.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _54.QueryDelegatorWithdrawAddressResponse): _54.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _54.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_54.QueryCommunityPoolRequest>): _54.QueryCommunityPoolRequest;
                fromAmino(_: _54.QueryCommunityPoolRequestAmino): _54.QueryCommunityPoolRequest;
                toAmino(_: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolRequestAminoMsg): _54.QueryCommunityPoolRequest;
                toAminoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolRequestProtoMsg): _54.QueryCommunityPoolRequest;
                toProto(message: _54.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolRequest): _54.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _54.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_54.QueryCommunityPoolResponse>): _54.QueryCommunityPoolResponse;
                fromAmino(object: _54.QueryCommunityPoolResponseAmino): _54.QueryCommunityPoolResponse;
                toAmino(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _54.QueryCommunityPoolResponseAminoMsg): _54.QueryCommunityPoolResponse;
                toAminoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _54.QueryCommunityPoolResponseProtoMsg): _54.QueryCommunityPoolResponse;
                toProto(message: _54.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _54.QueryCommunityPoolResponse): _54.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _53.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_53.DelegatorWithdrawInfo>): _53.DelegatorWithdrawInfo;
                fromAmino(object: _53.DelegatorWithdrawInfoAmino): _53.DelegatorWithdrawInfo;
                toAmino(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _53.DelegatorWithdrawInfoAminoMsg): _53.DelegatorWithdrawInfo;
                toAminoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _53.DelegatorWithdrawInfoProtoMsg): _53.DelegatorWithdrawInfo;
                toProto(message: _53.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _53.DelegatorWithdrawInfo): _53.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorOutstandingRewardsRecord>): _53.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _53.ValidatorOutstandingRewardsRecordAmino): _53.ValidatorOutstandingRewardsRecord;
                toAmino(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorOutstandingRewardsRecordAminoMsg): _53.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorOutstandingRewardsRecordProtoMsg): _53.ValidatorOutstandingRewardsRecord;
                toProto(message: _53.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorOutstandingRewardsRecord): _53.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_53.ValidatorAccumulatedCommissionRecord>): _53.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _53.ValidatorAccumulatedCommissionRecordAmino): _53.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _53.ValidatorAccumulatedCommissionRecordAminoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorAccumulatedCommissionRecordProtoMsg): _53.ValidatorAccumulatedCommissionRecord;
                toProto(message: _53.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorAccumulatedCommissionRecord): _53.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorHistoricalRewardsRecord>): _53.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _53.ValidatorHistoricalRewardsRecordAmino): _53.ValidatorHistoricalRewardsRecord;
                toAmino(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorHistoricalRewardsRecordAminoMsg): _53.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorHistoricalRewardsRecordProtoMsg): _53.ValidatorHistoricalRewardsRecord;
                toProto(message: _53.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorHistoricalRewardsRecord): _53.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_53.ValidatorCurrentRewardsRecord>): _53.ValidatorCurrentRewardsRecord;
                fromAmino(object: _53.ValidatorCurrentRewardsRecordAmino): _53.ValidatorCurrentRewardsRecord;
                toAmino(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _53.ValidatorCurrentRewardsRecordAminoMsg): _53.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorCurrentRewardsRecordProtoMsg): _53.ValidatorCurrentRewardsRecord;
                toProto(message: _53.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorCurrentRewardsRecord): _53.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _53.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_53.DelegatorStartingInfoRecord>): _53.DelegatorStartingInfoRecord;
                fromAmino(object: _53.DelegatorStartingInfoRecordAmino): _53.DelegatorStartingInfoRecord;
                toAmino(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _53.DelegatorStartingInfoRecordAminoMsg): _53.DelegatorStartingInfoRecord;
                toAminoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _53.DelegatorStartingInfoRecordProtoMsg): _53.DelegatorStartingInfoRecord;
                toProto(message: _53.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _53.DelegatorStartingInfoRecord): _53.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _53.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_53.ValidatorSlashEventRecord>): _53.ValidatorSlashEventRecord;
                fromAmino(object: _53.ValidatorSlashEventRecordAmino): _53.ValidatorSlashEventRecord;
                toAmino(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _53.ValidatorSlashEventRecordAminoMsg): _53.ValidatorSlashEventRecord;
                toAminoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _53.ValidatorSlashEventRecordProtoMsg): _53.ValidatorSlashEventRecord;
                toProto(message: _53.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _53.ValidatorSlashEventRecord): _53.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _53.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.GenesisState;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _52.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.Params;
                fromPartial(object: Partial<_52.Params>): _52.Params;
                fromAmino(object: _52.ParamsAmino): _52.Params;
                toAmino(message: _52.Params): _52.ParamsAmino;
                fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
                toAminoMsg(message: _52.Params): _52.ParamsAminoMsg;
                fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
                toProto(message: _52.Params): Uint8Array;
                toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_52.ValidatorHistoricalRewards>): _52.ValidatorHistoricalRewards;
                fromAmino(object: _52.ValidatorHistoricalRewardsAmino): _52.ValidatorHistoricalRewards;
                toAmino(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _52.ValidatorHistoricalRewardsAminoMsg): _52.ValidatorHistoricalRewards;
                toAminoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorHistoricalRewardsProtoMsg): _52.ValidatorHistoricalRewards;
                toProto(message: _52.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorHistoricalRewards): _52.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorCurrentRewards;
                fromPartial(object: Partial<_52.ValidatorCurrentRewards>): _52.ValidatorCurrentRewards;
                fromAmino(object: _52.ValidatorCurrentRewardsAmino): _52.ValidatorCurrentRewards;
                toAmino(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _52.ValidatorCurrentRewardsAminoMsg): _52.ValidatorCurrentRewards;
                toAminoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorCurrentRewardsProtoMsg): _52.ValidatorCurrentRewards;
                toProto(message: _52.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorCurrentRewards): _52.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _52.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_52.ValidatorAccumulatedCommission>): _52.ValidatorAccumulatedCommission;
                fromAmino(object: _52.ValidatorAccumulatedCommissionAmino): _52.ValidatorAccumulatedCommission;
                toAmino(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _52.ValidatorAccumulatedCommissionAminoMsg): _52.ValidatorAccumulatedCommission;
                toAminoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _52.ValidatorAccumulatedCommissionProtoMsg): _52.ValidatorAccumulatedCommission;
                toProto(message: _52.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _52.ValidatorAccumulatedCommission): _52.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _52.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_52.ValidatorOutstandingRewards>): _52.ValidatorOutstandingRewards;
                fromAmino(object: _52.ValidatorOutstandingRewardsAmino): _52.ValidatorOutstandingRewards;
                toAmino(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _52.ValidatorOutstandingRewardsAminoMsg): _52.ValidatorOutstandingRewards;
                toAminoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _52.ValidatorOutstandingRewardsProtoMsg): _52.ValidatorOutstandingRewards;
                toProto(message: _52.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _52.ValidatorOutstandingRewards): _52.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorSlashEvent;
                fromPartial(object: Partial<_52.ValidatorSlashEvent>): _52.ValidatorSlashEvent;
                fromAmino(object: _52.ValidatorSlashEventAmino): _52.ValidatorSlashEvent;
                toAmino(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventAminoMsg): _52.ValidatorSlashEvent;
                toAminoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventProtoMsg): _52.ValidatorSlashEvent;
                toProto(message: _52.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvent): _52.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _52.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.ValidatorSlashEvents;
                fromPartial(object: Partial<_52.ValidatorSlashEvents>): _52.ValidatorSlashEvents;
                fromAmino(object: _52.ValidatorSlashEventsAmino): _52.ValidatorSlashEvents;
                toAmino(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _52.ValidatorSlashEventsAminoMsg): _52.ValidatorSlashEvents;
                toAminoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _52.ValidatorSlashEventsProtoMsg): _52.ValidatorSlashEvents;
                toProto(message: _52.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _52.ValidatorSlashEvents): _52.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _52.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.FeePool;
                fromPartial(object: Partial<_52.FeePool>): _52.FeePool;
                fromAmino(object: _52.FeePoolAmino): _52.FeePool;
                toAmino(message: _52.FeePool): _52.FeePoolAmino;
                fromAminoMsg(object: _52.FeePoolAminoMsg): _52.FeePool;
                toAminoMsg(message: _52.FeePool): _52.FeePoolAminoMsg;
                fromProtoMsg(message: _52.FeePoolProtoMsg): _52.FeePool;
                toProto(message: _52.FeePool): Uint8Array;
                toProtoMsg(message: _52.FeePool): _52.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposal>): _52.CommunityPoolSpendProposal;
                fromAmino(object: _52.CommunityPoolSpendProposalAmino): _52.CommunityPoolSpendProposal;
                toAmino(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalAminoMsg): _52.CommunityPoolSpendProposal;
                toAminoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalProtoMsg): _52.CommunityPoolSpendProposal;
                toProto(message: _52.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposal): _52.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _52.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.DelegatorStartingInfo;
                fromPartial(object: Partial<_52.DelegatorStartingInfo>): _52.DelegatorStartingInfo;
                fromAmino(object: _52.DelegatorStartingInfoAmino): _52.DelegatorStartingInfo;
                toAmino(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _52.DelegatorStartingInfoAminoMsg): _52.DelegatorStartingInfo;
                toAminoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _52.DelegatorStartingInfoProtoMsg): _52.DelegatorStartingInfo;
                toProto(message: _52.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _52.DelegatorStartingInfo): _52.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _52.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.DelegationDelegatorReward;
                fromPartial(object: Partial<_52.DelegationDelegatorReward>): _52.DelegationDelegatorReward;
                fromAmino(object: _52.DelegationDelegatorRewardAmino): _52.DelegationDelegatorReward;
                toAmino(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _52.DelegationDelegatorRewardAminoMsg): _52.DelegationDelegatorReward;
                toAminoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _52.DelegationDelegatorRewardProtoMsg): _52.DelegationDelegatorReward;
                toProto(message: _52.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _52.DelegationDelegatorReward): _52.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _52.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_52.CommunityPoolSpendProposalWithDeposit>): _52.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _52.CommunityPoolSpendProposalWithDepositAmino): _52.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _52.CommunityPoolSpendProposalWithDepositAminoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _52.CommunityPoolSpendProposalWithDepositProtoMsg): _52.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _52.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _52.CommunityPoolSpendProposalWithDeposit): _52.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _56.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.Module;
                    fromPartial(_: Partial<_56.Module>): _56.Module;
                    fromAmino(_: _56.ModuleAmino): _56.Module;
                    toAmino(_: _56.Module): _56.ModuleAmino;
                    fromAminoMsg(object: _56.ModuleAminoMsg): _56.Module;
                    toAminoMsg(message: _56.Module): _56.ModuleAminoMsg;
                    fromProtoMsg(message: _56.ModuleProtoMsg): _56.Module;
                    toProto(message: _56.Module): Uint8Array;
                    toProtoMsg(message: _56.Module): _56.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _60.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _60.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _60.MsgSubmitEvidence) => _60.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _60.MsgSubmitEvidenceAmino) => _60.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgSubmitEvidence;
                fromPartial(object: Partial<_60.MsgSubmitEvidence>): _60.MsgSubmitEvidence;
                fromAmino(object: _60.MsgSubmitEvidenceAmino): _60.MsgSubmitEvidence;
                toAmino(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceAminoMsg): _60.MsgSubmitEvidence;
                toAminoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceProtoMsg): _60.MsgSubmitEvidence;
                toProto(message: _60.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidence): _60.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _60.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_60.MsgSubmitEvidenceResponse>): _60.MsgSubmitEvidenceResponse;
                fromAmino(object: _60.MsgSubmitEvidenceResponseAmino): _60.MsgSubmitEvidenceResponse;
                toAmino(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _60.MsgSubmitEvidenceResponseAminoMsg): _60.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _60.MsgSubmitEvidenceResponseProtoMsg): _60.MsgSubmitEvidenceResponse;
                toProto(message: _60.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _60.MsgSubmitEvidenceResponse): _60.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryEvidenceRequest;
                fromPartial(object: Partial<_59.QueryEvidenceRequest>): _59.QueryEvidenceRequest;
                fromAmino(object: _59.QueryEvidenceRequestAmino): _59.QueryEvidenceRequest;
                toAmino(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryEvidenceRequestAminoMsg): _59.QueryEvidenceRequest;
                toAminoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceRequestProtoMsg): _59.QueryEvidenceRequest;
                toProto(message: _59.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceRequest): _59.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryEvidenceResponse;
                fromPartial(object: Partial<_59.QueryEvidenceResponse>): _59.QueryEvidenceResponse;
                fromAmino(object: _59.QueryEvidenceResponseAmino): _59.QueryEvidenceResponse;
                toAmino(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryEvidenceResponseAminoMsg): _59.QueryEvidenceResponse;
                toAminoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryEvidenceResponseProtoMsg): _59.QueryEvidenceResponse;
                toProto(message: _59.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryEvidenceResponse): _59.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_59.QueryAllEvidenceRequest>): _59.QueryAllEvidenceRequest;
                fromAmino(object: _59.QueryAllEvidenceRequestAmino): _59.QueryAllEvidenceRequest;
                toAmino(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceRequestAminoMsg): _59.QueryAllEvidenceRequest;
                toAminoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceRequestProtoMsg): _59.QueryAllEvidenceRequest;
                toProto(message: _59.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceRequest): _59.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _59.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_59.QueryAllEvidenceResponse>): _59.QueryAllEvidenceResponse;
                fromAmino(object: _59.QueryAllEvidenceResponseAmino): _59.QueryAllEvidenceResponse;
                toAmino(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _59.QueryAllEvidenceResponseAminoMsg): _59.QueryAllEvidenceResponse;
                toAminoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _59.QueryAllEvidenceResponseProtoMsg): _59.QueryAllEvidenceResponse;
                toProto(message: _59.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _59.QueryAllEvidenceResponse): _59.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GenesisState;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _57.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Equivocation;
                fromPartial(object: Partial<_57.Equivocation>): _57.Equivocation;
                fromAmino(object: _57.EquivocationAmino): _57.Equivocation;
                toAmino(message: _57.Equivocation): _57.EquivocationAmino;
                fromAminoMsg(object: _57.EquivocationAminoMsg): _57.Equivocation;
                toAminoMsg(message: _57.Equivocation): _57.EquivocationAminoMsg;
                fromProtoMsg(message: _57.EquivocationProtoMsg): _57.Equivocation;
                toProto(message: _57.Equivocation): Uint8Array;
                toProtoMsg(message: _57.Equivocation): _57.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Module;
                    fromPartial(_: Partial<_61.Module>): _61.Module;
                    fromAmino(_: _61.ModuleAmino): _61.Module;
                    toAmino(_: _61.Module): _61.ModuleAmino;
                    fromAminoMsg(object: _61.ModuleAminoMsg): _61.Module;
                    toAminoMsg(message: _61.Module): _61.ModuleAminoMsg;
                    fromProtoMsg(message: _61.ModuleProtoMsg): _61.Module;
                    toProto(message: _61.Module): Uint8Array;
                    toProtoMsg(message: _61.Module): _61.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pruneAllowances(value: _65.MsgPruneAllowances): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _65.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _65.MsgPruneAllowances;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _65.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _65.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _65.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _65.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _65.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _65.MsgPruneAllowances;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgGrantAllowance) => _65.MsgGrantAllowanceAmino;
                    fromAmino: (object: _65.MsgGrantAllowanceAmino) => _65.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _65.MsgRevokeAllowance) => _65.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _65.MsgRevokeAllowanceAmino) => _65.MsgRevokeAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
                    aminoType: string;
                    toAmino: (message: _65.MsgPruneAllowances) => _65.MsgPruneAllowancesAmino;
                    fromAmino: (object: _65.MsgPruneAllowancesAmino) => _65.MsgPruneAllowances;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _65.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgGrantAllowance;
                fromPartial(object: Partial<_65.MsgGrantAllowance>): _65.MsgGrantAllowance;
                fromAmino(object: _65.MsgGrantAllowanceAmino): _65.MsgGrantAllowance;
                toAmino(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceAminoMsg): _65.MsgGrantAllowance;
                toAminoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceProtoMsg): _65.MsgGrantAllowance;
                toProto(message: _65.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowance): _65.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_65.MsgGrantAllowanceResponse>): _65.MsgGrantAllowanceResponse;
                fromAmino(_: _65.MsgGrantAllowanceResponseAmino): _65.MsgGrantAllowanceResponse;
                toAmino(_: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgGrantAllowanceResponseAminoMsg): _65.MsgGrantAllowanceResponse;
                toAminoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgGrantAllowanceResponseProtoMsg): _65.MsgGrantAllowanceResponse;
                toProto(message: _65.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgGrantAllowanceResponse): _65.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _65.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgRevokeAllowance;
                fromPartial(object: Partial<_65.MsgRevokeAllowance>): _65.MsgRevokeAllowance;
                fromAmino(object: _65.MsgRevokeAllowanceAmino): _65.MsgRevokeAllowance;
                toAmino(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceAminoMsg): _65.MsgRevokeAllowance;
                toAminoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceProtoMsg): _65.MsgRevokeAllowance;
                toProto(message: _65.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowance): _65.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _65.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_65.MsgRevokeAllowanceResponse>): _65.MsgRevokeAllowanceResponse;
                fromAmino(_: _65.MsgRevokeAllowanceResponseAmino): _65.MsgRevokeAllowanceResponse;
                toAmino(_: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _65.MsgRevokeAllowanceResponseAminoMsg): _65.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _65.MsgRevokeAllowanceResponseProtoMsg): _65.MsgRevokeAllowanceResponse;
                toProto(message: _65.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _65.MsgRevokeAllowanceResponse): _65.MsgRevokeAllowanceResponseProtoMsg;
            };
            MsgPruneAllowances: {
                typeUrl: string;
                encode(message: _65.MsgPruneAllowances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgPruneAllowances;
                fromPartial(object: Partial<_65.MsgPruneAllowances>): _65.MsgPruneAllowances;
                fromAmino(object: _65.MsgPruneAllowancesAmino): _65.MsgPruneAllowances;
                toAmino(message: _65.MsgPruneAllowances): _65.MsgPruneAllowancesAmino;
                fromAminoMsg(object: _65.MsgPruneAllowancesAminoMsg): _65.MsgPruneAllowances;
                toAminoMsg(message: _65.MsgPruneAllowances): _65.MsgPruneAllowancesAminoMsg;
                fromProtoMsg(message: _65.MsgPruneAllowancesProtoMsg): _65.MsgPruneAllowances;
                toProto(message: _65.MsgPruneAllowances): Uint8Array;
                toProtoMsg(message: _65.MsgPruneAllowances): _65.MsgPruneAllowancesProtoMsg;
            };
            MsgPruneAllowancesResponse: {
                typeUrl: string;
                encode(_: _65.MsgPruneAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MsgPruneAllowancesResponse;
                fromPartial(_: Partial<_65.MsgPruneAllowancesResponse>): _65.MsgPruneAllowancesResponse;
                fromAmino(_: _65.MsgPruneAllowancesResponseAmino): _65.MsgPruneAllowancesResponse;
                toAmino(_: _65.MsgPruneAllowancesResponse): _65.MsgPruneAllowancesResponseAmino;
                fromAminoMsg(object: _65.MsgPruneAllowancesResponseAminoMsg): _65.MsgPruneAllowancesResponse;
                toAminoMsg(message: _65.MsgPruneAllowancesResponse): _65.MsgPruneAllowancesResponseAminoMsg;
                fromProtoMsg(message: _65.MsgPruneAllowancesResponseProtoMsg): _65.MsgPruneAllowancesResponse;
                toProto(message: _65.MsgPruneAllowancesResponse): Uint8Array;
                toProtoMsg(message: _65.MsgPruneAllowancesResponse): _65.MsgPruneAllowancesResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _62.BasicAllowance | _62.PeriodicAllowance | _62.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowanceRequest;
                fromPartial(object: Partial<_64.QueryAllowanceRequest>): _64.QueryAllowanceRequest;
                fromAmino(object: _64.QueryAllowanceRequestAmino): _64.QueryAllowanceRequest;
                toAmino(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _64.QueryAllowanceRequestAminoMsg): _64.QueryAllowanceRequest;
                toAminoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceRequestProtoMsg): _64.QueryAllowanceRequest;
                toProto(message: _64.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceRequest): _64.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowanceResponse;
                fromPartial(object: Partial<_64.QueryAllowanceResponse>): _64.QueryAllowanceResponse;
                fromAmino(object: _64.QueryAllowanceResponseAmino): _64.QueryAllowanceResponse;
                toAmino(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _64.QueryAllowanceResponseAminoMsg): _64.QueryAllowanceResponse;
                toAminoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowanceResponseProtoMsg): _64.QueryAllowanceResponse;
                toProto(message: _64.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowanceResponse): _64.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowancesRequest;
                fromPartial(object: Partial<_64.QueryAllowancesRequest>): _64.QueryAllowancesRequest;
                fromAmino(object: _64.QueryAllowancesRequestAmino): _64.QueryAllowancesRequest;
                toAmino(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesRequestAminoMsg): _64.QueryAllowancesRequest;
                toAminoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesRequestProtoMsg): _64.QueryAllowancesRequest;
                toProto(message: _64.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesRequest): _64.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowancesResponse;
                fromPartial(object: Partial<_64.QueryAllowancesResponse>): _64.QueryAllowancesResponse;
                fromAmino(object: _64.QueryAllowancesResponseAmino): _64.QueryAllowancesResponse;
                toAmino(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesResponseAminoMsg): _64.QueryAllowancesResponse;
                toAminoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesResponseProtoMsg): _64.QueryAllowancesResponse;
                toProto(message: _64.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesResponse): _64.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterRequest>): _64.QueryAllowancesByGranterRequest;
                fromAmino(object: _64.QueryAllowancesByGranterRequestAmino): _64.QueryAllowancesByGranterRequest;
                toAmino(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterRequestAminoMsg): _64.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterRequestProtoMsg): _64.QueryAllowancesByGranterRequest;
                toProto(message: _64.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterRequest): _64.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _64.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_64.QueryAllowancesByGranterResponse>): _64.QueryAllowancesByGranterResponse;
                fromAmino(object: _64.QueryAllowancesByGranterResponseAmino): _64.QueryAllowancesByGranterResponse;
                toAmino(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _64.QueryAllowancesByGranterResponseAminoMsg): _64.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _64.QueryAllowancesByGranterResponseProtoMsg): _64.QueryAllowancesByGranterResponse;
                toProto(message: _64.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _64.QueryAllowancesByGranterResponse): _64.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.GenesisState;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _62.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.BasicAllowance;
                fromPartial(object: Partial<_62.BasicAllowance>): _62.BasicAllowance;
                fromAmino(object: _62.BasicAllowanceAmino): _62.BasicAllowance;
                toAmino(message: _62.BasicAllowance): _62.BasicAllowanceAmino;
                fromAminoMsg(object: _62.BasicAllowanceAminoMsg): _62.BasicAllowance;
                toAminoMsg(message: _62.BasicAllowance): _62.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _62.BasicAllowanceProtoMsg): _62.BasicAllowance;
                toProto(message: _62.BasicAllowance): Uint8Array;
                toProtoMsg(message: _62.BasicAllowance): _62.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _62.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.PeriodicAllowance;
                fromPartial(object: Partial<_62.PeriodicAllowance>): _62.PeriodicAllowance;
                fromAmino(object: _62.PeriodicAllowanceAmino): _62.PeriodicAllowance;
                toAmino(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAmino;
                fromAminoMsg(object: _62.PeriodicAllowanceAminoMsg): _62.PeriodicAllowance;
                toAminoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _62.PeriodicAllowanceProtoMsg): _62.PeriodicAllowance;
                toProto(message: _62.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _62.PeriodicAllowance): _62.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _62.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.AllowedMsgAllowance;
                fromPartial(object: Partial<_62.AllowedMsgAllowance>): _62.AllowedMsgAllowance;
                fromAmino(object: _62.AllowedMsgAllowanceAmino): _62.AllowedMsgAllowance;
                toAmino(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _62.AllowedMsgAllowanceAminoMsg): _62.AllowedMsgAllowance;
                toAminoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _62.AllowedMsgAllowanceProtoMsg): _62.AllowedMsgAllowance;
                toProto(message: _62.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _62.AllowedMsgAllowance): _62.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _62.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.Grant;
                fromPartial(object: Partial<_62.Grant>): _62.Grant;
                fromAmino(object: _62.GrantAmino): _62.Grant;
                toAmino(message: _62.Grant): _62.GrantAmino;
                fromAminoMsg(object: _62.GrantAminoMsg): _62.Grant;
                toAminoMsg(message: _62.Grant): _62.GrantAminoMsg;
                fromProtoMsg(message: _62.GrantProtoMsg): _62.Grant;
                toProto(message: _62.Grant): Uint8Array;
                toProtoMsg(message: _62.Grant): _62.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _66.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Module;
                    fromPartial(_: Partial<_66.Module>): _66.Module;
                    fromAmino(_: _66.ModuleAmino): _66.Module;
                    toAmino(_: _66.Module): _66.ModuleAmino;
                    fromAminoMsg(object: _66.ModuleAminoMsg): _66.Module;
                    toAminoMsg(message: _66.Module): _66.ModuleAminoMsg;
                    fromProtoMsg(message: _66.ModuleProtoMsg): _66.Module;
                    toProto(message: _66.Module): Uint8Array;
                    toProtoMsg(message: _66.Module): _66.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.GenesisState;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.Module;
                    fromPartial(object: Partial<_68.Module>): _68.Module;
                    fromAmino(object: _68.ModuleAmino): _68.Module;
                    toAmino(message: _68.Module): _68.ModuleAmino;
                    fromAminoMsg(object: _68.ModuleAminoMsg): _68.Module;
                    toAminoMsg(message: _68.Module): _68.ModuleAminoMsg;
                    fromProtoMsg(message: _68.ModuleProtoMsg): _68.Module;
                    toProto(message: _68.Module): Uint8Array;
                    toProtoMsg(message: _68.Module): _68.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                constitution(request?: _71.QueryConstitutionRequest): Promise<_71.QueryConstitutionResponse>;
                proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _72.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                    cancelProposal(value: _72.MsgCancelProposal): {
                        typeUrl: string;
                        value: _72.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _72.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _72.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _72.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _72.MsgExecLegacyContent;
                    };
                    vote(value: _72.MsgVote): {
                        typeUrl: string;
                        value: _72.MsgVote;
                    };
                    voteWeighted(value: _72.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _72.MsgVoteWeighted;
                    };
                    deposit(value: _72.MsgDeposit): {
                        typeUrl: string;
                        value: _72.MsgDeposit;
                    };
                    updateParams(value: _72.MsgUpdateParams): {
                        typeUrl: string;
                        value: _72.MsgUpdateParams;
                    };
                    cancelProposal(value: _72.MsgCancelProposal): {
                        typeUrl: string;
                        value: _72.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSubmitProposal) => _72.MsgSubmitProposalAmino;
                    fromAmino: (object: _72.MsgSubmitProposalAmino) => _72.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _72.MsgExecLegacyContent) => _72.MsgExecLegacyContentAmino;
                    fromAmino: (object: _72.MsgExecLegacyContentAmino) => _72.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVote) => _72.MsgVoteAmino;
                    fromAmino: (object: _72.MsgVoteAmino) => _72.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _72.MsgVoteWeighted) => _72.MsgVoteWeightedAmino;
                    fromAmino: (object: _72.MsgVoteWeightedAmino) => _72.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _72.MsgDeposit) => _72.MsgDepositAmino;
                    fromAmino: (object: _72.MsgDepositAmino) => _72.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _72.MsgUpdateParams) => _72.MsgUpdateParamsAmino;
                    fromAmino: (object: _72.MsgUpdateParamsAmino) => _72.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: (message: _72.MsgCancelProposal) => _72.MsgCancelProposalAmino;
                    fromAmino: (object: _72.MsgCancelProposalAmino) => _72.MsgCancelProposal;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitProposal;
                fromPartial(object: Partial<_72.MsgSubmitProposal>): _72.MsgSubmitProposal;
                fromAmino(object: _72.MsgSubmitProposalAmino): _72.MsgSubmitProposal;
                toAmino(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalAminoMsg): _72.MsgSubmitProposal;
                toAminoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalProtoMsg): _72.MsgSubmitProposal;
                toProto(message: _72.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposal): _72.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _72.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_72.MsgSubmitProposalResponse>): _72.MsgSubmitProposalResponse;
                fromAmino(object: _72.MsgSubmitProposalResponseAmino): _72.MsgSubmitProposalResponse;
                toAmino(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _72.MsgSubmitProposalResponseAminoMsg): _72.MsgSubmitProposalResponse;
                toAminoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSubmitProposalResponseProtoMsg): _72.MsgSubmitProposalResponse;
                toProto(message: _72.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSubmitProposalResponse): _72.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _72.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgExecLegacyContent;
                fromPartial(object: Partial<_72.MsgExecLegacyContent>): _72.MsgExecLegacyContent;
                fromAmino(object: _72.MsgExecLegacyContentAmino): _72.MsgExecLegacyContent;
                toAmino(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _72.MsgExecLegacyContentAminoMsg): _72.MsgExecLegacyContent;
                toAminoMsg(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _72.MsgExecLegacyContentProtoMsg): _72.MsgExecLegacyContent;
                toProto(message: _72.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _72.MsgExecLegacyContent): _72.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _72.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_72.MsgExecLegacyContentResponse>): _72.MsgExecLegacyContentResponse;
                fromAmino(_: _72.MsgExecLegacyContentResponseAmino): _72.MsgExecLegacyContentResponse;
                toAmino(_: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _72.MsgExecLegacyContentResponseAminoMsg): _72.MsgExecLegacyContentResponse;
                toAminoMsg(message: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _72.MsgExecLegacyContentResponseProtoMsg): _72.MsgExecLegacyContentResponse;
                toProto(message: _72.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _72.MsgExecLegacyContentResponse): _72.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _72.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgVote;
                fromPartial(object: Partial<_72.MsgVote>): _72.MsgVote;
                fromAmino(object: _72.MsgVoteAmino): _72.MsgVote;
                toAmino(message: _72.MsgVote): _72.MsgVoteAmino;
                fromAminoMsg(object: _72.MsgVoteAminoMsg): _72.MsgVote;
                toAminoMsg(message: _72.MsgVote): _72.MsgVoteAminoMsg;
                fromProtoMsg(message: _72.MsgVoteProtoMsg): _72.MsgVote;
                toProto(message: _72.MsgVote): Uint8Array;
                toProtoMsg(message: _72.MsgVote): _72.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgVoteResponse;
                fromPartial(_: Partial<_72.MsgVoteResponse>): _72.MsgVoteResponse;
                fromAmino(_: _72.MsgVoteResponseAmino): _72.MsgVoteResponse;
                toAmino(_: _72.MsgVoteResponse): _72.MsgVoteResponseAmino;
                fromAminoMsg(object: _72.MsgVoteResponseAminoMsg): _72.MsgVoteResponse;
                toAminoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteResponseProtoMsg): _72.MsgVoteResponse;
                toProto(message: _72.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteResponse): _72.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _72.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgVoteWeighted;
                fromPartial(object: Partial<_72.MsgVoteWeighted>): _72.MsgVoteWeighted;
                fromAmino(object: _72.MsgVoteWeightedAmino): _72.MsgVoteWeighted;
                toAmino(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedAminoMsg): _72.MsgVoteWeighted;
                toAminoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedProtoMsg): _72.MsgVoteWeighted;
                toProto(message: _72.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeighted): _72.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _72.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_72.MsgVoteWeightedResponse>): _72.MsgVoteWeightedResponse;
                fromAmino(_: _72.MsgVoteWeightedResponseAmino): _72.MsgVoteWeightedResponse;
                toAmino(_: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _72.MsgVoteWeightedResponseAminoMsg): _72.MsgVoteWeightedResponse;
                toAminoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _72.MsgVoteWeightedResponseProtoMsg): _72.MsgVoteWeightedResponse;
                toProto(message: _72.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _72.MsgVoteWeightedResponse): _72.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _72.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgDeposit;
                fromPartial(object: Partial<_72.MsgDeposit>): _72.MsgDeposit;
                fromAmino(object: _72.MsgDepositAmino): _72.MsgDeposit;
                toAmino(message: _72.MsgDeposit): _72.MsgDepositAmino;
                fromAminoMsg(object: _72.MsgDepositAminoMsg): _72.MsgDeposit;
                toAminoMsg(message: _72.MsgDeposit): _72.MsgDepositAminoMsg;
                fromProtoMsg(message: _72.MsgDepositProtoMsg): _72.MsgDeposit;
                toProto(message: _72.MsgDeposit): Uint8Array;
                toProtoMsg(message: _72.MsgDeposit): _72.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _72.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgDepositResponse;
                fromPartial(_: Partial<_72.MsgDepositResponse>): _72.MsgDepositResponse;
                fromAmino(_: _72.MsgDepositResponseAmino): _72.MsgDepositResponse;
                toAmino(_: _72.MsgDepositResponse): _72.MsgDepositResponseAmino;
                fromAminoMsg(object: _72.MsgDepositResponseAminoMsg): _72.MsgDepositResponse;
                toAminoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _72.MsgDepositResponseProtoMsg): _72.MsgDepositResponse;
                toProto(message: _72.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _72.MsgDepositResponse): _72.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _72.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateParams;
                fromPartial(object: Partial<_72.MsgUpdateParams>): _72.MsgUpdateParams;
                fromAmino(object: _72.MsgUpdateParamsAmino): _72.MsgUpdateParams;
                toAmino(message: _72.MsgUpdateParams): _72.MsgUpdateParamsAmino;
                fromAminoMsg(object: _72.MsgUpdateParamsAminoMsg): _72.MsgUpdateParams;
                toAminoMsg(message: _72.MsgUpdateParams): _72.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _72.MsgUpdateParamsProtoMsg): _72.MsgUpdateParams;
                toProto(message: _72.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _72.MsgUpdateParams): _72.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _72.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_72.MsgUpdateParamsResponse>): _72.MsgUpdateParamsResponse;
                fromAmino(_: _72.MsgUpdateParamsResponseAmino): _72.MsgUpdateParamsResponse;
                toAmino(_: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _72.MsgUpdateParamsResponseAminoMsg): _72.MsgUpdateParamsResponse;
                toAminoMsg(message: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _72.MsgUpdateParamsResponseProtoMsg): _72.MsgUpdateParamsResponse;
                toProto(message: _72.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _72.MsgUpdateParamsResponse): _72.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCancelProposal: {
                typeUrl: string;
                encode(message: _72.MsgCancelProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCancelProposal;
                fromPartial(object: Partial<_72.MsgCancelProposal>): _72.MsgCancelProposal;
                fromAmino(object: _72.MsgCancelProposalAmino): _72.MsgCancelProposal;
                toAmino(message: _72.MsgCancelProposal): _72.MsgCancelProposalAmino;
                fromAminoMsg(object: _72.MsgCancelProposalAminoMsg): _72.MsgCancelProposal;
                toAminoMsg(message: _72.MsgCancelProposal): _72.MsgCancelProposalAminoMsg;
                fromProtoMsg(message: _72.MsgCancelProposalProtoMsg): _72.MsgCancelProposal;
                toProto(message: _72.MsgCancelProposal): Uint8Array;
                toProtoMsg(message: _72.MsgCancelProposal): _72.MsgCancelProposalProtoMsg;
            };
            MsgCancelProposalResponse: {
                typeUrl: string;
                encode(message: _72.MsgCancelProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCancelProposalResponse;
                fromPartial(object: Partial<_72.MsgCancelProposalResponse>): _72.MsgCancelProposalResponse;
                fromAmino(object: _72.MsgCancelProposalResponseAmino): _72.MsgCancelProposalResponse;
                toAmino(message: _72.MsgCancelProposalResponse): _72.MsgCancelProposalResponseAmino;
                fromAminoMsg(object: _72.MsgCancelProposalResponseAminoMsg): _72.MsgCancelProposalResponse;
                toAminoMsg(message: _72.MsgCancelProposalResponse): _72.MsgCancelProposalResponseAminoMsg;
                fromProtoMsg(message: _72.MsgCancelProposalResponseProtoMsg): _72.MsgCancelProposalResponse;
                toProto(message: _72.MsgCancelProposalResponse): Uint8Array;
                toProtoMsg(message: _72.MsgCancelProposalResponse): _72.MsgCancelProposalResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _52.CommunityPoolSpendProposal | _52.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _129.SoftwareUpgradeProposal | _129.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _74.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryConstitutionRequest: {
                typeUrl: string;
                encode(_: _71.QueryConstitutionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConstitutionRequest;
                fromPartial(_: Partial<_71.QueryConstitutionRequest>): _71.QueryConstitutionRequest;
                fromAmino(_: _71.QueryConstitutionRequestAmino): _71.QueryConstitutionRequest;
                toAmino(_: _71.QueryConstitutionRequest): _71.QueryConstitutionRequestAmino;
                fromAminoMsg(object: _71.QueryConstitutionRequestAminoMsg): _71.QueryConstitutionRequest;
                toAminoMsg(message: _71.QueryConstitutionRequest): _71.QueryConstitutionRequestAminoMsg;
                fromProtoMsg(message: _71.QueryConstitutionRequestProtoMsg): _71.QueryConstitutionRequest;
                toProto(message: _71.QueryConstitutionRequest): Uint8Array;
                toProtoMsg(message: _71.QueryConstitutionRequest): _71.QueryConstitutionRequestProtoMsg;
            };
            QueryConstitutionResponse: {
                typeUrl: string;
                encode(message: _71.QueryConstitutionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConstitutionResponse;
                fromPartial(object: Partial<_71.QueryConstitutionResponse>): _71.QueryConstitutionResponse;
                fromAmino(object: _71.QueryConstitutionResponseAmino): _71.QueryConstitutionResponse;
                toAmino(message: _71.QueryConstitutionResponse): _71.QueryConstitutionResponseAmino;
                fromAminoMsg(object: _71.QueryConstitutionResponseAminoMsg): _71.QueryConstitutionResponse;
                toAminoMsg(message: _71.QueryConstitutionResponse): _71.QueryConstitutionResponseAminoMsg;
                fromProtoMsg(message: _71.QueryConstitutionResponseProtoMsg): _71.QueryConstitutionResponse;
                toProto(message: _71.QueryConstitutionResponse): Uint8Array;
                toProtoMsg(message: _71.QueryConstitutionResponse): _71.QueryConstitutionResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryProposalRequest;
                fromPartial(object: Partial<_71.QueryProposalRequest>): _71.QueryProposalRequest;
                fromAmino(object: _71.QueryProposalRequestAmino): _71.QueryProposalRequest;
                toAmino(message: _71.QueryProposalRequest): _71.QueryProposalRequestAmino;
                fromAminoMsg(object: _71.QueryProposalRequestAminoMsg): _71.QueryProposalRequest;
                toAminoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalRequestProtoMsg): _71.QueryProposalRequest;
                toProto(message: _71.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalRequest): _71.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryProposalResponse;
                fromPartial(object: Partial<_71.QueryProposalResponse>): _71.QueryProposalResponse;
                fromAmino(object: _71.QueryProposalResponseAmino): _71.QueryProposalResponse;
                toAmino(message: _71.QueryProposalResponse): _71.QueryProposalResponseAmino;
                fromAminoMsg(object: _71.QueryProposalResponseAminoMsg): _71.QueryProposalResponse;
                toAminoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalResponseProtoMsg): _71.QueryProposalResponse;
                toProto(message: _71.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalResponse): _71.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _71.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryProposalsRequest;
                fromPartial(object: Partial<_71.QueryProposalsRequest>): _71.QueryProposalsRequest;
                fromAmino(object: _71.QueryProposalsRequestAmino): _71.QueryProposalsRequest;
                toAmino(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAmino;
                fromAminoMsg(object: _71.QueryProposalsRequestAminoMsg): _71.QueryProposalsRequest;
                toAminoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsRequestProtoMsg): _71.QueryProposalsRequest;
                toProto(message: _71.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsRequest): _71.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _71.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryProposalsResponse;
                fromPartial(object: Partial<_71.QueryProposalsResponse>): _71.QueryProposalsResponse;
                fromAmino(object: _71.QueryProposalsResponseAmino): _71.QueryProposalsResponse;
                toAmino(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAmino;
                fromAminoMsg(object: _71.QueryProposalsResponseAminoMsg): _71.QueryProposalsResponse;
                toAminoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryProposalsResponseProtoMsg): _71.QueryProposalsResponse;
                toProto(message: _71.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryProposalsResponse): _71.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _71.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryVoteRequest;
                fromPartial(object: Partial<_71.QueryVoteRequest>): _71.QueryVoteRequest;
                fromAmino(object: _71.QueryVoteRequestAmino): _71.QueryVoteRequest;
                toAmino(message: _71.QueryVoteRequest): _71.QueryVoteRequestAmino;
                fromAminoMsg(object: _71.QueryVoteRequestAminoMsg): _71.QueryVoteRequest;
                toAminoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVoteRequestProtoMsg): _71.QueryVoteRequest;
                toProto(message: _71.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVoteRequest): _71.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _71.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryVoteResponse;
                fromPartial(object: Partial<_71.QueryVoteResponse>): _71.QueryVoteResponse;
                fromAmino(object: _71.QueryVoteResponseAmino): _71.QueryVoteResponse;
                toAmino(message: _71.QueryVoteResponse): _71.QueryVoteResponseAmino;
                fromAminoMsg(object: _71.QueryVoteResponseAminoMsg): _71.QueryVoteResponse;
                toAminoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVoteResponseProtoMsg): _71.QueryVoteResponse;
                toProto(message: _71.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVoteResponse): _71.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _71.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryVotesRequest;
                fromPartial(object: Partial<_71.QueryVotesRequest>): _71.QueryVotesRequest;
                fromAmino(object: _71.QueryVotesRequestAmino): _71.QueryVotesRequest;
                toAmino(message: _71.QueryVotesRequest): _71.QueryVotesRequestAmino;
                fromAminoMsg(object: _71.QueryVotesRequestAminoMsg): _71.QueryVotesRequest;
                toAminoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryVotesRequestProtoMsg): _71.QueryVotesRequest;
                toProto(message: _71.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryVotesRequest): _71.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _71.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryVotesResponse;
                fromPartial(object: Partial<_71.QueryVotesResponse>): _71.QueryVotesResponse;
                fromAmino(object: _71.QueryVotesResponseAmino): _71.QueryVotesResponse;
                toAmino(message: _71.QueryVotesResponse): _71.QueryVotesResponseAmino;
                fromAminoMsg(object: _71.QueryVotesResponseAminoMsg): _71.QueryVotesResponse;
                toAminoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryVotesResponseProtoMsg): _71.QueryVotesResponse;
                toProto(message: _71.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryVotesResponse): _71.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _71.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryParamsRequest;
                fromPartial(object: Partial<_71.QueryParamsRequest>): _71.QueryParamsRequest;
                fromAmino(object: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(message: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                toAminoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _71.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryParamsResponse;
                fromPartial(object: Partial<_71.QueryParamsResponse>): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                toAminoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryDepositRequest;
                fromPartial(object: Partial<_71.QueryDepositRequest>): _71.QueryDepositRequest;
                fromAmino(object: _71.QueryDepositRequestAmino): _71.QueryDepositRequest;
                toAmino(message: _71.QueryDepositRequest): _71.QueryDepositRequestAmino;
                fromAminoMsg(object: _71.QueryDepositRequestAminoMsg): _71.QueryDepositRequest;
                toAminoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositRequestProtoMsg): _71.QueryDepositRequest;
                toProto(message: _71.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositRequest): _71.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryDepositResponse;
                fromPartial(object: Partial<_71.QueryDepositResponse>): _71.QueryDepositResponse;
                fromAmino(object: _71.QueryDepositResponseAmino): _71.QueryDepositResponse;
                toAmino(message: _71.QueryDepositResponse): _71.QueryDepositResponseAmino;
                fromAminoMsg(object: _71.QueryDepositResponseAminoMsg): _71.QueryDepositResponse;
                toAminoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositResponseProtoMsg): _71.QueryDepositResponse;
                toProto(message: _71.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositResponse): _71.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _71.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryDepositsRequest;
                fromPartial(object: Partial<_71.QueryDepositsRequest>): _71.QueryDepositsRequest;
                fromAmino(object: _71.QueryDepositsRequestAmino): _71.QueryDepositsRequest;
                toAmino(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAmino;
                fromAminoMsg(object: _71.QueryDepositsRequestAminoMsg): _71.QueryDepositsRequest;
                toAminoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsRequestProtoMsg): _71.QueryDepositsRequest;
                toProto(message: _71.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsRequest): _71.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _71.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryDepositsResponse;
                fromPartial(object: Partial<_71.QueryDepositsResponse>): _71.QueryDepositsResponse;
                fromAmino(object: _71.QueryDepositsResponseAmino): _71.QueryDepositsResponse;
                toAmino(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAmino;
                fromAminoMsg(object: _71.QueryDepositsResponseAminoMsg): _71.QueryDepositsResponse;
                toAminoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryDepositsResponseProtoMsg): _71.QueryDepositsResponse;
                toProto(message: _71.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryDepositsResponse): _71.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryTallyResultRequest;
                fromPartial(object: Partial<_71.QueryTallyResultRequest>): _71.QueryTallyResultRequest;
                fromAmino(object: _71.QueryTallyResultRequestAmino): _71.QueryTallyResultRequest;
                toAmino(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _71.QueryTallyResultRequestAminoMsg): _71.QueryTallyResultRequest;
                toAminoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultRequestProtoMsg): _71.QueryTallyResultRequest;
                toProto(message: _71.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultRequest): _71.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _71.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryTallyResultResponse;
                fromPartial(object: Partial<_71.QueryTallyResultResponse>): _71.QueryTallyResultResponse;
                fromAmino(object: _71.QueryTallyResultResponseAmino): _71.QueryTallyResultResponse;
                toAmino(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _71.QueryTallyResultResponseAminoMsg): _71.QueryTallyResultResponse;
                toAminoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _71.QueryTallyResultResponseProtoMsg): _71.QueryTallyResultResponse;
                toProto(message: _71.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTallyResultResponse): _71.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            VoteOptionAmino: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            ProposalStatusAmino: typeof _70.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _70.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.WeightedVoteOption;
                fromPartial(object: Partial<_70.WeightedVoteOption>): _70.WeightedVoteOption;
                fromAmino(object: _70.WeightedVoteOptionAmino): _70.WeightedVoteOption;
                toAmino(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAmino;
                fromAminoMsg(object: _70.WeightedVoteOptionAminoMsg): _70.WeightedVoteOption;
                toAminoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _70.WeightedVoteOptionProtoMsg): _70.WeightedVoteOption;
                toProto(message: _70.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _70.WeightedVoteOption): _70.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _70.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Deposit;
                fromPartial(object: Partial<_70.Deposit>): _70.Deposit;
                fromAmino(object: _70.DepositAmino): _70.Deposit;
                toAmino(message: _70.Deposit): _70.DepositAmino;
                fromAminoMsg(object: _70.DepositAminoMsg): _70.Deposit;
                toAminoMsg(message: _70.Deposit): _70.DepositAminoMsg;
                fromProtoMsg(message: _70.DepositProtoMsg): _70.Deposit;
                toProto(message: _70.Deposit): Uint8Array;
                toProtoMsg(message: _70.Deposit): _70.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _70.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Proposal;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
                fromAmino(object: _70.ProposalAmino): _70.Proposal;
                toAmino(message: _70.Proposal): _70.ProposalAmino;
                fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
                toAminoMsg(message: _70.Proposal): _70.ProposalAminoMsg;
                fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
                toProto(message: _70.Proposal): Uint8Array;
                toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _70.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.TallyResult;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
                fromAmino(object: _70.TallyResultAmino): _70.TallyResult;
                toAmino(message: _70.TallyResult): _70.TallyResultAmino;
                fromAminoMsg(object: _70.TallyResultAminoMsg): _70.TallyResult;
                toAminoMsg(message: _70.TallyResult): _70.TallyResultAminoMsg;
                fromProtoMsg(message: _70.TallyResultProtoMsg): _70.TallyResult;
                toProto(message: _70.TallyResult): Uint8Array;
                toProtoMsg(message: _70.TallyResult): _70.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _70.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Vote;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
                fromAmino(object: _70.VoteAmino): _70.Vote;
                toAmino(message: _70.Vote): _70.VoteAmino;
                fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
                toAminoMsg(message: _70.Vote): _70.VoteAminoMsg;
                fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
                toProto(message: _70.Vote): Uint8Array;
                toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _70.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.DepositParams;
                fromPartial(object: Partial<_70.DepositParams>): _70.DepositParams;
                fromAmino(object: _70.DepositParamsAmino): _70.DepositParams;
                toAmino(message: _70.DepositParams): _70.DepositParamsAmino;
                fromAminoMsg(object: _70.DepositParamsAminoMsg): _70.DepositParams;
                toAminoMsg(message: _70.DepositParams): _70.DepositParamsAminoMsg;
                fromProtoMsg(message: _70.DepositParamsProtoMsg): _70.DepositParams;
                toProto(message: _70.DepositParams): Uint8Array;
                toProtoMsg(message: _70.DepositParams): _70.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _70.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.VotingParams;
                fromPartial(object: Partial<_70.VotingParams>): _70.VotingParams;
                fromAmino(object: _70.VotingParamsAmino): _70.VotingParams;
                toAmino(message: _70.VotingParams): _70.VotingParamsAmino;
                fromAminoMsg(object: _70.VotingParamsAminoMsg): _70.VotingParams;
                toAminoMsg(message: _70.VotingParams): _70.VotingParamsAminoMsg;
                fromProtoMsg(message: _70.VotingParamsProtoMsg): _70.VotingParams;
                toProto(message: _70.VotingParams): Uint8Array;
                toProtoMsg(message: _70.VotingParams): _70.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _70.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.TallyParams;
                fromPartial(object: Partial<_70.TallyParams>): _70.TallyParams;
                fromAmino(object: _70.TallyParamsAmino): _70.TallyParams;
                toAmino(message: _70.TallyParams): _70.TallyParamsAmino;
                fromAminoMsg(object: _70.TallyParamsAminoMsg): _70.TallyParams;
                toAminoMsg(message: _70.TallyParams): _70.TallyParamsAminoMsg;
                fromProtoMsg(message: _70.TallyParamsProtoMsg): _70.TallyParams;
                toProto(message: _70.TallyParams): Uint8Array;
                toProtoMsg(message: _70.TallyParams): _70.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _70.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Params;
                fromPartial(object: Partial<_70.Params>): _70.Params;
                fromAmino(object: _70.ParamsAmino): _70.Params;
                toAmino(message: _70.Params): _70.ParamsAmino;
                fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                toAminoMsg(message: _70.Params): _70.ParamsAminoMsg;
                fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                toProto(message: _70.Params): Uint8Array;
                toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.GenesisState;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _76.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _76.MsgSubmitProposal;
                    };
                    vote(value: _76.MsgVote): {
                        typeUrl: string;
                        value: _76.MsgVote;
                    };
                    voteWeighted(value: _76.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _76.MsgVoteWeighted;
                    };
                    deposit(value: _76.MsgDeposit): {
                        typeUrl: string;
                        value: _76.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _76.MsgSubmitProposal) => _76.MsgSubmitProposalAmino;
                    fromAmino: (object: _76.MsgSubmitProposalAmino) => _76.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVote) => _76.MsgVoteAmino;
                    fromAmino: (object: _76.MsgVoteAmino) => _76.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVoteWeighted) => _76.MsgVoteWeightedAmino;
                    fromAmino: (object: _76.MsgVoteWeightedAmino) => _76.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _76.MsgDeposit) => _76.MsgDepositAmino;
                    fromAmino: (object: _76.MsgDepositAmino) => _76.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgSubmitProposal;
                fromPartial(object: Partial<_76.MsgSubmitProposal>): _76.MsgSubmitProposal;
                fromAmino(object: _76.MsgSubmitProposalAmino): _76.MsgSubmitProposal;
                toAmino(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalAminoMsg): _76.MsgSubmitProposal;
                toAminoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalProtoMsg): _76.MsgSubmitProposal;
                toProto(message: _76.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposal): _76.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _76.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_76.MsgSubmitProposalResponse>): _76.MsgSubmitProposalResponse;
                fromAmino(object: _76.MsgSubmitProposalResponseAmino): _76.MsgSubmitProposalResponse;
                toAmino(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _76.MsgSubmitProposalResponseAminoMsg): _76.MsgSubmitProposalResponse;
                toAminoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _76.MsgSubmitProposalResponseProtoMsg): _76.MsgSubmitProposalResponse;
                toProto(message: _76.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _76.MsgSubmitProposalResponse): _76.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _76.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgVote;
                fromPartial(object: Partial<_76.MsgVote>): _76.MsgVote;
                fromAmino(object: _76.MsgVoteAmino): _76.MsgVote;
                toAmino(message: _76.MsgVote): _76.MsgVoteAmino;
                fromAminoMsg(object: _76.MsgVoteAminoMsg): _76.MsgVote;
                toAminoMsg(message: _76.MsgVote): _76.MsgVoteAminoMsg;
                fromProtoMsg(message: _76.MsgVoteProtoMsg): _76.MsgVote;
                toProto(message: _76.MsgVote): Uint8Array;
                toProtoMsg(message: _76.MsgVote): _76.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _76.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgVoteResponse;
                fromPartial(_: Partial<_76.MsgVoteResponse>): _76.MsgVoteResponse;
                fromAmino(_: _76.MsgVoteResponseAmino): _76.MsgVoteResponse;
                toAmino(_: _76.MsgVoteResponse): _76.MsgVoteResponseAmino;
                fromAminoMsg(object: _76.MsgVoteResponseAminoMsg): _76.MsgVoteResponse;
                toAminoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVoteResponseProtoMsg): _76.MsgVoteResponse;
                toProto(message: _76.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVoteResponse): _76.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _76.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgVoteWeighted;
                fromPartial(object: Partial<_76.MsgVoteWeighted>): _76.MsgVoteWeighted;
                fromAmino(object: _76.MsgVoteWeightedAmino): _76.MsgVoteWeighted;
                toAmino(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedAmino;
                fromAminoMsg(object: _76.MsgVoteWeightedAminoMsg): _76.MsgVoteWeighted;
                toAminoMsg(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _76.MsgVoteWeightedProtoMsg): _76.MsgVoteWeighted;
                toProto(message: _76.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _76.MsgVoteWeighted): _76.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _76.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_76.MsgVoteWeightedResponse>): _76.MsgVoteWeightedResponse;
                fromAmino(_: _76.MsgVoteWeightedResponseAmino): _76.MsgVoteWeightedResponse;
                toAmino(_: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _76.MsgVoteWeightedResponseAminoMsg): _76.MsgVoteWeightedResponse;
                toAminoMsg(message: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVoteWeightedResponseProtoMsg): _76.MsgVoteWeightedResponse;
                toProto(message: _76.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVoteWeightedResponse): _76.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _76.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgDeposit;
                fromPartial(object: Partial<_76.MsgDeposit>): _76.MsgDeposit;
                fromAmino(object: _76.MsgDepositAmino): _76.MsgDeposit;
                toAmino(message: _76.MsgDeposit): _76.MsgDepositAmino;
                fromAminoMsg(object: _76.MsgDepositAminoMsg): _76.MsgDeposit;
                toAminoMsg(message: _76.MsgDeposit): _76.MsgDepositAminoMsg;
                fromProtoMsg(message: _76.MsgDepositProtoMsg): _76.MsgDeposit;
                toProto(message: _76.MsgDeposit): Uint8Array;
                toProtoMsg(message: _76.MsgDeposit): _76.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _76.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.MsgDepositResponse;
                fromPartial(_: Partial<_76.MsgDepositResponse>): _76.MsgDepositResponse;
                fromAmino(_: _76.MsgDepositResponseAmino): _76.MsgDepositResponse;
                toAmino(_: _76.MsgDepositResponse): _76.MsgDepositResponseAmino;
                fromAminoMsg(object: _76.MsgDepositResponseAminoMsg): _76.MsgDepositResponse;
                toAminoMsg(message: _76.MsgDepositResponse): _76.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _76.MsgDepositResponseProtoMsg): _76.MsgDepositResponse;
                toProto(message: _76.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _76.MsgDepositResponse): _76.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _52.CommunityPoolSpendProposal | _52.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _129.SoftwareUpgradeProposal | _129.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _74.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryProposalRequest;
                fromPartial(object: Partial<_75.QueryProposalRequest>): _75.QueryProposalRequest;
                fromAmino(object: _75.QueryProposalRequestAmino): _75.QueryProposalRequest;
                toAmino(message: _75.QueryProposalRequest): _75.QueryProposalRequestAmino;
                fromAminoMsg(object: _75.QueryProposalRequestAminoMsg): _75.QueryProposalRequest;
                toAminoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalRequestProtoMsg): _75.QueryProposalRequest;
                toProto(message: _75.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalRequest): _75.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryProposalResponse;
                fromPartial(object: Partial<_75.QueryProposalResponse>): _75.QueryProposalResponse;
                fromAmino(object: _75.QueryProposalResponseAmino): _75.QueryProposalResponse;
                toAmino(message: _75.QueryProposalResponse): _75.QueryProposalResponseAmino;
                fromAminoMsg(object: _75.QueryProposalResponseAminoMsg): _75.QueryProposalResponse;
                toAminoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalResponseProtoMsg): _75.QueryProposalResponse;
                toProto(message: _75.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalResponse): _75.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _75.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryProposalsRequest;
                fromPartial(object: Partial<_75.QueryProposalsRequest>): _75.QueryProposalsRequest;
                fromAmino(object: _75.QueryProposalsRequestAmino): _75.QueryProposalsRequest;
                toAmino(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestAmino;
                fromAminoMsg(object: _75.QueryProposalsRequestAminoMsg): _75.QueryProposalsRequest;
                toAminoMsg(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsRequestProtoMsg): _75.QueryProposalsRequest;
                toProto(message: _75.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsRequest): _75.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _75.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryProposalsResponse;
                fromPartial(object: Partial<_75.QueryProposalsResponse>): _75.QueryProposalsResponse;
                fromAmino(object: _75.QueryProposalsResponseAmino): _75.QueryProposalsResponse;
                toAmino(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseAmino;
                fromAminoMsg(object: _75.QueryProposalsResponseAminoMsg): _75.QueryProposalsResponse;
                toAminoMsg(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryProposalsResponseProtoMsg): _75.QueryProposalsResponse;
                toProto(message: _75.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryProposalsResponse): _75.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _75.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryVoteRequest;
                fromPartial(object: Partial<_75.QueryVoteRequest>): _75.QueryVoteRequest;
                fromAmino(object: _75.QueryVoteRequestAmino): _75.QueryVoteRequest;
                toAmino(message: _75.QueryVoteRequest): _75.QueryVoteRequestAmino;
                fromAminoMsg(object: _75.QueryVoteRequestAminoMsg): _75.QueryVoteRequest;
                toAminoMsg(message: _75.QueryVoteRequest): _75.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVoteRequestProtoMsg): _75.QueryVoteRequest;
                toProto(message: _75.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVoteRequest): _75.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _75.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryVoteResponse;
                fromPartial(object: Partial<_75.QueryVoteResponse>): _75.QueryVoteResponse;
                fromAmino(object: _75.QueryVoteResponseAmino): _75.QueryVoteResponse;
                toAmino(message: _75.QueryVoteResponse): _75.QueryVoteResponseAmino;
                fromAminoMsg(object: _75.QueryVoteResponseAminoMsg): _75.QueryVoteResponse;
                toAminoMsg(message: _75.QueryVoteResponse): _75.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVoteResponseProtoMsg): _75.QueryVoteResponse;
                toProto(message: _75.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVoteResponse): _75.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _75.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryVotesRequest;
                fromPartial(object: Partial<_75.QueryVotesRequest>): _75.QueryVotesRequest;
                fromAmino(object: _75.QueryVotesRequestAmino): _75.QueryVotesRequest;
                toAmino(message: _75.QueryVotesRequest): _75.QueryVotesRequestAmino;
                fromAminoMsg(object: _75.QueryVotesRequestAminoMsg): _75.QueryVotesRequest;
                toAminoMsg(message: _75.QueryVotesRequest): _75.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _75.QueryVotesRequestProtoMsg): _75.QueryVotesRequest;
                toProto(message: _75.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _75.QueryVotesRequest): _75.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _75.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryVotesResponse;
                fromPartial(object: Partial<_75.QueryVotesResponse>): _75.QueryVotesResponse;
                fromAmino(object: _75.QueryVotesResponseAmino): _75.QueryVotesResponse;
                toAmino(message: _75.QueryVotesResponse): _75.QueryVotesResponseAmino;
                fromAminoMsg(object: _75.QueryVotesResponseAminoMsg): _75.QueryVotesResponse;
                toAminoMsg(message: _75.QueryVotesResponse): _75.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _75.QueryVotesResponseProtoMsg): _75.QueryVotesResponse;
                toProto(message: _75.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _75.QueryVotesResponse): _75.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _75.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryParamsRequest;
                fromPartial(object: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                fromAmino(object: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                toAmino(message: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
                fromAminoMsg(object: _75.QueryParamsRequestAminoMsg): _75.QueryParamsRequest;
                toAminoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryParamsRequestProtoMsg): _75.QueryParamsRequest;
                toProto(message: _75.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _75.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryParamsResponse;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
                fromAmino(object: _75.QueryParamsResponseAmino): _75.QueryParamsResponse;
                toAmino(message: _75.QueryParamsResponse): _75.QueryParamsResponseAmino;
                fromAminoMsg(object: _75.QueryParamsResponseAminoMsg): _75.QueryParamsResponse;
                toAminoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryParamsResponseProtoMsg): _75.QueryParamsResponse;
                toProto(message: _75.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _75.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryDepositRequest;
                fromPartial(object: Partial<_75.QueryDepositRequest>): _75.QueryDepositRequest;
                fromAmino(object: _75.QueryDepositRequestAmino): _75.QueryDepositRequest;
                toAmino(message: _75.QueryDepositRequest): _75.QueryDepositRequestAmino;
                fromAminoMsg(object: _75.QueryDepositRequestAminoMsg): _75.QueryDepositRequest;
                toAminoMsg(message: _75.QueryDepositRequest): _75.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDepositRequestProtoMsg): _75.QueryDepositRequest;
                toProto(message: _75.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDepositRequest): _75.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _75.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryDepositResponse;
                fromPartial(object: Partial<_75.QueryDepositResponse>): _75.QueryDepositResponse;
                fromAmino(object: _75.QueryDepositResponseAmino): _75.QueryDepositResponse;
                toAmino(message: _75.QueryDepositResponse): _75.QueryDepositResponseAmino;
                fromAminoMsg(object: _75.QueryDepositResponseAminoMsg): _75.QueryDepositResponse;
                toAminoMsg(message: _75.QueryDepositResponse): _75.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDepositResponseProtoMsg): _75.QueryDepositResponse;
                toProto(message: _75.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDepositResponse): _75.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _75.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryDepositsRequest;
                fromPartial(object: Partial<_75.QueryDepositsRequest>): _75.QueryDepositsRequest;
                fromAmino(object: _75.QueryDepositsRequestAmino): _75.QueryDepositsRequest;
                toAmino(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestAmino;
                fromAminoMsg(object: _75.QueryDepositsRequestAminoMsg): _75.QueryDepositsRequest;
                toAminoMsg(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _75.QueryDepositsRequestProtoMsg): _75.QueryDepositsRequest;
                toProto(message: _75.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _75.QueryDepositsRequest): _75.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _75.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryDepositsResponse;
                fromPartial(object: Partial<_75.QueryDepositsResponse>): _75.QueryDepositsResponse;
                fromAmino(object: _75.QueryDepositsResponseAmino): _75.QueryDepositsResponse;
                toAmino(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseAmino;
                fromAminoMsg(object: _75.QueryDepositsResponseAminoMsg): _75.QueryDepositsResponse;
                toAminoMsg(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _75.QueryDepositsResponseProtoMsg): _75.QueryDepositsResponse;
                toProto(message: _75.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _75.QueryDepositsResponse): _75.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryTallyResultRequest;
                fromPartial(object: Partial<_75.QueryTallyResultRequest>): _75.QueryTallyResultRequest;
                fromAmino(object: _75.QueryTallyResultRequestAmino): _75.QueryTallyResultRequest;
                toAmino(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _75.QueryTallyResultRequestAminoMsg): _75.QueryTallyResultRequest;
                toAminoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultRequestProtoMsg): _75.QueryTallyResultRequest;
                toProto(message: _75.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultRequest): _75.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _75.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.QueryTallyResultResponse;
                fromPartial(object: Partial<_75.QueryTallyResultResponse>): _75.QueryTallyResultResponse;
                fromAmino(object: _75.QueryTallyResultResponseAmino): _75.QueryTallyResultResponse;
                toAmino(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _75.QueryTallyResultResponseAminoMsg): _75.QueryTallyResultResponse;
                toAminoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _75.QueryTallyResultResponseProtoMsg): _75.QueryTallyResultResponse;
                toProto(message: _75.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _75.QueryTallyResultResponse): _75.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _74.VoteOption;
            voteOptionToJSON(object: _74.VoteOption): string;
            proposalStatusFromJSON(object: any): _74.ProposalStatus;
            proposalStatusToJSON(object: _74.ProposalStatus): string;
            VoteOption: typeof _74.VoteOption;
            VoteOptionSDKType: typeof _74.VoteOption;
            VoteOptionAmino: typeof _74.VoteOption;
            ProposalStatus: typeof _74.ProposalStatus;
            ProposalStatusSDKType: typeof _74.ProposalStatus;
            ProposalStatusAmino: typeof _74.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _74.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.WeightedVoteOption;
                fromPartial(object: Partial<_74.WeightedVoteOption>): _74.WeightedVoteOption;
                fromAmino(object: _74.WeightedVoteOptionAmino): _74.WeightedVoteOption;
                toAmino(message: _74.WeightedVoteOption): _74.WeightedVoteOptionAmino;
                fromAminoMsg(object: _74.WeightedVoteOptionAminoMsg): _74.WeightedVoteOption;
                toAminoMsg(message: _74.WeightedVoteOption): _74.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _74.WeightedVoteOptionProtoMsg): _74.WeightedVoteOption;
                toProto(message: _74.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _74.WeightedVoteOption): _74.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _74.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.TextProposal;
                fromPartial(object: Partial<_74.TextProposal>): _74.TextProposal;
                fromAmino(object: _74.TextProposalAmino): _74.TextProposal;
                toAmino(message: _74.TextProposal): _74.TextProposalAmino;
                fromAminoMsg(object: _74.TextProposalAminoMsg): _74.TextProposal;
                toAminoMsg(message: _74.TextProposal): _74.TextProposalAminoMsg;
                fromProtoMsg(message: _74.TextProposalProtoMsg): _74.TextProposal;
                toProto(message: _74.TextProposal): Uint8Array;
                toProtoMsg(message: _74.TextProposal): _74.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _74.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Deposit;
                fromPartial(object: Partial<_74.Deposit>): _74.Deposit;
                fromAmino(object: _74.DepositAmino): _74.Deposit;
                toAmino(message: _74.Deposit): _74.DepositAmino;
                fromAminoMsg(object: _74.DepositAminoMsg): _74.Deposit;
                toAminoMsg(message: _74.Deposit): _74.DepositAminoMsg;
                fromProtoMsg(message: _74.DepositProtoMsg): _74.Deposit;
                toProto(message: _74.Deposit): Uint8Array;
                toProtoMsg(message: _74.Deposit): _74.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _74.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Proposal;
                fromPartial(object: Partial<_74.Proposal>): _74.Proposal;
                fromAmino(object: _74.ProposalAmino): _74.Proposal;
                toAmino(message: _74.Proposal): _74.ProposalAmino;
                fromAminoMsg(object: _74.ProposalAminoMsg): _74.Proposal;
                toAminoMsg(message: _74.Proposal): _74.ProposalAminoMsg;
                fromProtoMsg(message: _74.ProposalProtoMsg): _74.Proposal;
                toProto(message: _74.Proposal): Uint8Array;
                toProtoMsg(message: _74.Proposal): _74.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _74.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.TallyResult;
                fromPartial(object: Partial<_74.TallyResult>): _74.TallyResult;
                fromAmino(object: _74.TallyResultAmino): _74.TallyResult;
                toAmino(message: _74.TallyResult): _74.TallyResultAmino;
                fromAminoMsg(object: _74.TallyResultAminoMsg): _74.TallyResult;
                toAminoMsg(message: _74.TallyResult): _74.TallyResultAminoMsg;
                fromProtoMsg(message: _74.TallyResultProtoMsg): _74.TallyResult;
                toProto(message: _74.TallyResult): Uint8Array;
                toProtoMsg(message: _74.TallyResult): _74.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _74.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Vote;
                fromPartial(object: Partial<_74.Vote>): _74.Vote;
                fromAmino(object: _74.VoteAmino): _74.Vote;
                toAmino(message: _74.Vote): _74.VoteAmino;
                fromAminoMsg(object: _74.VoteAminoMsg): _74.Vote;
                toAminoMsg(message: _74.Vote): _74.VoteAminoMsg;
                fromProtoMsg(message: _74.VoteProtoMsg): _74.Vote;
                toProto(message: _74.Vote): Uint8Array;
                toProtoMsg(message: _74.Vote): _74.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _74.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.DepositParams;
                fromPartial(object: Partial<_74.DepositParams>): _74.DepositParams;
                fromAmino(object: _74.DepositParamsAmino): _74.DepositParams;
                toAmino(message: _74.DepositParams): _74.DepositParamsAmino;
                fromAminoMsg(object: _74.DepositParamsAminoMsg): _74.DepositParams;
                toAminoMsg(message: _74.DepositParams): _74.DepositParamsAminoMsg;
                fromProtoMsg(message: _74.DepositParamsProtoMsg): _74.DepositParams;
                toProto(message: _74.DepositParams): Uint8Array;
                toProtoMsg(message: _74.DepositParams): _74.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _74.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.VotingParams;
                fromPartial(object: Partial<_74.VotingParams>): _74.VotingParams;
                fromAmino(object: _74.VotingParamsAmino): _74.VotingParams;
                toAmino(message: _74.VotingParams): _74.VotingParamsAmino;
                fromAminoMsg(object: _74.VotingParamsAminoMsg): _74.VotingParams;
                toAminoMsg(message: _74.VotingParams): _74.VotingParamsAminoMsg;
                fromProtoMsg(message: _74.VotingParamsProtoMsg): _74.VotingParams;
                toProto(message: _74.VotingParams): Uint8Array;
                toProtoMsg(message: _74.VotingParams): _74.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _74.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.TallyParams;
                fromPartial(object: Partial<_74.TallyParams>): _74.TallyParams;
                fromAmino(object: _74.TallyParamsAmino): _74.TallyParams;
                toAmino(message: _74.TallyParams): _74.TallyParamsAmino;
                fromAminoMsg(object: _74.TallyParamsAminoMsg): _74.TallyParams;
                toAminoMsg(message: _74.TallyParams): _74.TallyParamsAminoMsg;
                fromProtoMsg(message: _74.TallyParamsProtoMsg): _74.TallyParams;
                toProto(message: _74.TallyParams): Uint8Array;
                toProtoMsg(message: _74.TallyParams): _74.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.GenesisState;
                fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                toProto(message: _73.GenesisState): Uint8Array;
                toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _77.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.Module;
                    fromPartial(object: Partial<_77.Module>): _77.Module;
                    fromAmino(object: _77.ModuleAmino): _77.Module;
                    toAmino(message: _77.Module): _77.ModuleAmino;
                    fromAminoMsg(object: _77.ModuleAminoMsg): _77.Module;
                    toAminoMsg(message: _77.Module): _77.ModuleAminoMsg;
                    fromProtoMsg(message: _77.ModuleProtoMsg): _77.Module;
                    toProto(message: _77.Module): Uint8Array;
                    toProtoMsg(message: _77.Module): _77.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                groups(request?: _80.QueryGroupsRequest): Promise<_80.QueryGroupsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _81.MsgCreateGroup): {
                        typeUrl: string;
                        value: _81.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _81.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _81.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _81.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _81.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _81.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _81.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _81.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _81.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _81.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _81.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _81.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _81.MsgWithdrawProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    exec(value: _81.MsgExec): {
                        typeUrl: string;
                        value: _81.MsgExec;
                    };
                    leaveGroup(value: _81.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _81.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroup) => _81.MsgCreateGroupAmino;
                    fromAmino: (object: _81.MsgCreateGroupAmino) => _81.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupMembers) => _81.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _81.MsgUpdateGroupMembersAmino) => _81.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupAdmin) => _81.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _81.MsgUpdateGroupAdminAmino) => _81.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupMetadata) => _81.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _81.MsgUpdateGroupMetadataAmino) => _81.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroupPolicy) => _81.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _81.MsgCreateGroupPolicyAmino) => _81.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgCreateGroupWithPolicy) => _81.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _81.MsgCreateGroupWithPolicyAmino) => _81.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyAdmin) => _81.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyAdminAmino) => _81.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyDecisionPolicy) => _81.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyDecisionPolicyAmino) => _81.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _81.MsgUpdateGroupPolicyMetadata) => _81.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _81.MsgUpdateGroupPolicyMetadataAmino) => _81.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSubmitProposal) => _81.MsgSubmitProposalAmino;
                    fromAmino: (object: _81.MsgSubmitProposalAmino) => _81.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgWithdrawProposal) => _81.MsgWithdrawProposalAmino;
                    fromAmino: (object: _81.MsgWithdrawProposalAmino) => _81.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVote) => _81.MsgVoteAmino;
                    fromAmino: (object: _81.MsgVoteAmino) => _81.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _81.MsgExec) => _81.MsgExecAmino;
                    fromAmino: (object: _81.MsgExecAmino) => _81.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _81.MsgLeaveGroup) => _81.MsgLeaveGroupAmino;
                    fromAmino: (object: _81.MsgLeaveGroupAmino) => _81.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _82.VoteOption;
            voteOptionToJSON(object: _82.VoteOption): string;
            proposalStatusFromJSON(object: any): _82.ProposalStatus;
            proposalStatusToJSON(object: _82.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _82.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _82.ProposalExecutorResult): string;
            VoteOption: typeof _82.VoteOption;
            VoteOptionSDKType: typeof _82.VoteOption;
            VoteOptionAmino: typeof _82.VoteOption;
            ProposalStatus: typeof _82.ProposalStatus;
            ProposalStatusSDKType: typeof _82.ProposalStatus;
            ProposalStatusAmino: typeof _82.ProposalStatus;
            ProposalExecutorResult: typeof _82.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _82.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _82.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _82.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Member;
                fromPartial(object: Partial<_82.Member>): _82.Member;
                fromAmino(object: _82.MemberAmino): _82.Member;
                toAmino(message: _82.Member): _82.MemberAmino;
                fromAminoMsg(object: _82.MemberAminoMsg): _82.Member;
                toAminoMsg(message: _82.Member): _82.MemberAminoMsg;
                fromProtoMsg(message: _82.MemberProtoMsg): _82.Member;
                toProto(message: _82.Member): Uint8Array;
                toProtoMsg(message: _82.Member): _82.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _82.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.MemberRequest;
                fromPartial(object: Partial<_82.MemberRequest>): _82.MemberRequest;
                fromAmino(object: _82.MemberRequestAmino): _82.MemberRequest;
                toAmino(message: _82.MemberRequest): _82.MemberRequestAmino;
                fromAminoMsg(object: _82.MemberRequestAminoMsg): _82.MemberRequest;
                toAminoMsg(message: _82.MemberRequest): _82.MemberRequestAminoMsg;
                fromProtoMsg(message: _82.MemberRequestProtoMsg): _82.MemberRequest;
                toProto(message: _82.MemberRequest): Uint8Array;
                toProtoMsg(message: _82.MemberRequest): _82.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_82.ThresholdDecisionPolicy>): _82.ThresholdDecisionPolicy;
                fromAmino(object: _82.ThresholdDecisionPolicyAmino): _82.ThresholdDecisionPolicy;
                toAmino(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _82.ThresholdDecisionPolicyAminoMsg): _82.ThresholdDecisionPolicy;
                toAminoMsg(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.ThresholdDecisionPolicyProtoMsg): _82.ThresholdDecisionPolicy;
                toProto(message: _82.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.ThresholdDecisionPolicy): _82.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.PercentageDecisionPolicy;
                fromPartial(object: Partial<_82.PercentageDecisionPolicy>): _82.PercentageDecisionPolicy;
                fromAmino(object: _82.PercentageDecisionPolicyAmino): _82.PercentageDecisionPolicy;
                toAmino(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _82.PercentageDecisionPolicyAminoMsg): _82.PercentageDecisionPolicy;
                toAminoMsg(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.PercentageDecisionPolicyProtoMsg): _82.PercentageDecisionPolicy;
                toProto(message: _82.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.PercentageDecisionPolicy): _82.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _82.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.DecisionPolicyWindows;
                fromPartial(object: Partial<_82.DecisionPolicyWindows>): _82.DecisionPolicyWindows;
                fromAmino(object: _82.DecisionPolicyWindowsAmino): _82.DecisionPolicyWindows;
                toAmino(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _82.DecisionPolicyWindowsAminoMsg): _82.DecisionPolicyWindows;
                toAminoMsg(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _82.DecisionPolicyWindowsProtoMsg): _82.DecisionPolicyWindows;
                toProto(message: _82.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _82.DecisionPolicyWindows): _82.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _82.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.GroupInfo;
                fromPartial(object: Partial<_82.GroupInfo>): _82.GroupInfo;
                fromAmino(object: _82.GroupInfoAmino): _82.GroupInfo;
                toAmino(message: _82.GroupInfo): _82.GroupInfoAmino;
                fromAminoMsg(object: _82.GroupInfoAminoMsg): _82.GroupInfo;
                toAminoMsg(message: _82.GroupInfo): _82.GroupInfoAminoMsg;
                fromProtoMsg(message: _82.GroupInfoProtoMsg): _82.GroupInfo;
                toProto(message: _82.GroupInfo): Uint8Array;
                toProtoMsg(message: _82.GroupInfo): _82.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _82.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.GroupMember;
                fromPartial(object: Partial<_82.GroupMember>): _82.GroupMember;
                fromAmino(object: _82.GroupMemberAmino): _82.GroupMember;
                toAmino(message: _82.GroupMember): _82.GroupMemberAmino;
                fromAminoMsg(object: _82.GroupMemberAminoMsg): _82.GroupMember;
                toAminoMsg(message: _82.GroupMember): _82.GroupMemberAminoMsg;
                fromProtoMsg(message: _82.GroupMemberProtoMsg): _82.GroupMember;
                toProto(message: _82.GroupMember): Uint8Array;
                toProtoMsg(message: _82.GroupMember): _82.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _82.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.GroupPolicyInfo;
                fromPartial(object: Partial<_82.GroupPolicyInfo>): _82.GroupPolicyInfo;
                fromAmino(object: _82.GroupPolicyInfoAmino): _82.GroupPolicyInfo;
                toAmino(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoAmino;
                fromAminoMsg(object: _82.GroupPolicyInfoAminoMsg): _82.GroupPolicyInfo;
                toAminoMsg(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _82.GroupPolicyInfoProtoMsg): _82.GroupPolicyInfo;
                toProto(message: _82.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _82.GroupPolicyInfo): _82.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _82.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Proposal;
                fromPartial(object: Partial<_82.Proposal>): _82.Proposal;
                fromAmino(object: _82.ProposalAmino): _82.Proposal;
                toAmino(message: _82.Proposal): _82.ProposalAmino;
                fromAminoMsg(object: _82.ProposalAminoMsg): _82.Proposal;
                toAminoMsg(message: _82.Proposal): _82.ProposalAminoMsg;
                fromProtoMsg(message: _82.ProposalProtoMsg): _82.Proposal;
                toProto(message: _82.Proposal): Uint8Array;
                toProtoMsg(message: _82.Proposal): _82.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _82.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.TallyResult;
                fromPartial(object: Partial<_82.TallyResult>): _82.TallyResult;
                fromAmino(object: _82.TallyResultAmino): _82.TallyResult;
                toAmino(message: _82.TallyResult): _82.TallyResultAmino;
                fromAminoMsg(object: _82.TallyResultAminoMsg): _82.TallyResult;
                toAminoMsg(message: _82.TallyResult): _82.TallyResultAminoMsg;
                fromProtoMsg(message: _82.TallyResultProtoMsg): _82.TallyResult;
                toProto(message: _82.TallyResult): Uint8Array;
                toProtoMsg(message: _82.TallyResult): _82.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _82.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Vote;
                fromPartial(object: Partial<_82.Vote>): _82.Vote;
                fromAmino(object: _82.VoteAmino): _82.Vote;
                toAmino(message: _82.Vote): _82.VoteAmino;
                fromAminoMsg(object: _82.VoteAminoMsg): _82.Vote;
                toAminoMsg(message: _82.Vote): _82.VoteAminoMsg;
                fromProtoMsg(message: _82.VoteProtoMsg): _82.Vote;
                toProto(message: _82.Vote): Uint8Array;
                toProtoMsg(message: _82.Vote): _82.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _82.ThresholdDecisionPolicy | _82.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _81.Exec;
            execToJSON(object: _81.Exec): string;
            Exec: typeof _81.Exec;
            ExecSDKType: typeof _81.Exec;
            ExecAmino: typeof _81.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroup;
                fromPartial(object: Partial<_81.MsgCreateGroup>): _81.MsgCreateGroup;
                fromAmino(object: _81.MsgCreateGroupAmino): _81.MsgCreateGroup;
                toAmino(message: _81.MsgCreateGroup): _81.MsgCreateGroupAmino;
                fromAminoMsg(object: _81.MsgCreateGroupAminoMsg): _81.MsgCreateGroup;
                toAminoMsg(message: _81.MsgCreateGroup): _81.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupProtoMsg): _81.MsgCreateGroup;
                toProto(message: _81.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroup): _81.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroupResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupResponse>): _81.MsgCreateGroupResponse;
                fromAmino(object: _81.MsgCreateGroupResponseAmino): _81.MsgCreateGroupResponse;
                toAmino(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupResponseAminoMsg): _81.MsgCreateGroupResponse;
                toAminoMsg(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupResponseProtoMsg): _81.MsgCreateGroupResponse;
                toProto(message: _81.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupResponse): _81.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_81.MsgUpdateGroupMembers>): _81.MsgUpdateGroupMembers;
                fromAmino(object: _81.MsgUpdateGroupMembersAmino): _81.MsgUpdateGroupMembers;
                toAmino(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMembersAminoMsg): _81.MsgUpdateGroupMembers;
                toAminoMsg(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMembersProtoMsg): _81.MsgUpdateGroupMembers;
                toProto(message: _81.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMembers): _81.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupMembersResponse>): _81.MsgUpdateGroupMembersResponse;
                fromAmino(_: _81.MsgUpdateGroupMembersResponseAmino): _81.MsgUpdateGroupMembersResponse;
                toAmino(_: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMembersResponseAminoMsg): _81.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMembersResponseProtoMsg): _81.MsgUpdateGroupMembersResponse;
                toProto(message: _81.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMembersResponse): _81.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_81.MsgUpdateGroupAdmin>): _81.MsgUpdateGroupAdmin;
                fromAmino(object: _81.MsgUpdateGroupAdminAmino): _81.MsgUpdateGroupAdmin;
                toAmino(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupAdminAminoMsg): _81.MsgUpdateGroupAdmin;
                toAminoMsg(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupAdminProtoMsg): _81.MsgUpdateGroupAdmin;
                toProto(message: _81.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupAdmin): _81.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupAdminResponse>): _81.MsgUpdateGroupAdminResponse;
                fromAmino(_: _81.MsgUpdateGroupAdminResponseAmino): _81.MsgUpdateGroupAdminResponse;
                toAmino(_: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupAdminResponseAminoMsg): _81.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupAdminResponseProtoMsg): _81.MsgUpdateGroupAdminResponse;
                toProto(message: _81.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupAdminResponse): _81.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_81.MsgUpdateGroupMetadata>): _81.MsgUpdateGroupMetadata;
                fromAmino(object: _81.MsgUpdateGroupMetadataAmino): _81.MsgUpdateGroupMetadata;
                toAmino(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMetadataAminoMsg): _81.MsgUpdateGroupMetadata;
                toAminoMsg(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMetadataProtoMsg): _81.MsgUpdateGroupMetadata;
                toProto(message: _81.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMetadata): _81.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupMetadataResponse>): _81.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _81.MsgUpdateGroupMetadataResponseAmino): _81.MsgUpdateGroupMetadataResponse;
                toAmino(_: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupMetadataResponseAminoMsg): _81.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupMetadataResponseProtoMsg): _81.MsgUpdateGroupMetadataResponse;
                toProto(message: _81.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupMetadataResponse): _81.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_81.MsgCreateGroupPolicy>): _81.MsgCreateGroupPolicy;
                fromAmino(object: _81.MsgCreateGroupPolicyAmino): _81.MsgCreateGroupPolicy;
                toAmino(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _81.MsgCreateGroupPolicyAminoMsg): _81.MsgCreateGroupPolicy;
                toAminoMsg(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupPolicyProtoMsg): _81.MsgCreateGroupPolicy;
                toProto(message: _81.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupPolicy): _81.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupPolicyResponse>): _81.MsgCreateGroupPolicyResponse;
                fromAmino(object: _81.MsgCreateGroupPolicyResponseAmino): _81.MsgCreateGroupPolicyResponse;
                toAmino(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupPolicyResponseAminoMsg): _81.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupPolicyResponseProtoMsg): _81.MsgCreateGroupPolicyResponse;
                toProto(message: _81.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupPolicyResponse): _81.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyAdmin>): _81.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _81.MsgUpdateGroupPolicyAdminAmino): _81.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyAdminAminoMsg): _81.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyAdminProtoMsg): _81.MsgUpdateGroupPolicyAdmin;
                toProto(message: _81.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyAdmin): _81.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyAdminResponse>): _81.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyAdminResponseAmino): _81.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyAdminResponseAminoMsg): _81.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyAdminResponseProtoMsg): _81.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _81.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyAdminResponse): _81.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_81.MsgCreateGroupWithPolicy>): _81.MsgCreateGroupWithPolicy;
                fromAmino(object: _81.MsgCreateGroupWithPolicyAmino): _81.MsgCreateGroupWithPolicy;
                toAmino(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _81.MsgCreateGroupWithPolicyAminoMsg): _81.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupWithPolicyProtoMsg): _81.MsgCreateGroupWithPolicy;
                toProto(message: _81.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupWithPolicy): _81.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _81.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_81.MsgCreateGroupWithPolicyResponse>): _81.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _81.MsgCreateGroupWithPolicyResponseAmino): _81.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgCreateGroupWithPolicyResponseAminoMsg): _81.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgCreateGroupWithPolicyResponseProtoMsg): _81.MsgCreateGroupWithPolicyResponse;
                toProto(message: _81.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgCreateGroupWithPolicyResponse): _81.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyDecisionPolicy>): _81.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _81.MsgUpdateGroupPolicyDecisionPolicyAmino): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _81.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _81.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicy): _81.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyDecisionPolicyResponse>): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _81.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyDecisionPolicyResponse): _81.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _81.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_81.MsgUpdateGroupPolicyMetadata>): _81.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _81.MsgUpdateGroupPolicyMetadataAmino): _81.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyMetadataAminoMsg): _81.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataProtoMsg): _81.MsgUpdateGroupPolicyMetadata;
                toProto(message: _81.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyMetadata): _81.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _81.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_81.MsgUpdateGroupPolicyMetadataResponse>): _81.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _81.MsgUpdateGroupPolicyMetadataResponseAmino): _81.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _81.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _81.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _81.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _81.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _81.MsgUpdateGroupPolicyMetadataResponse): _81.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgSubmitProposal;
                fromPartial(object: Partial<_81.MsgSubmitProposal>): _81.MsgSubmitProposal;
                fromAmino(object: _81.MsgSubmitProposalAmino): _81.MsgSubmitProposal;
                toAmino(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalAminoMsg): _81.MsgSubmitProposal;
                toAminoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalProtoMsg): _81.MsgSubmitProposal;
                toProto(message: _81.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_81.MsgSubmitProposalResponse>): _81.MsgSubmitProposalResponse;
                fromAmino(object: _81.MsgSubmitProposalResponseAmino): _81.MsgSubmitProposalResponse;
                toAmino(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalResponseAminoMsg): _81.MsgSubmitProposalResponse;
                toAminoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalResponseProtoMsg): _81.MsgSubmitProposalResponse;
                toProto(message: _81.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _81.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgWithdrawProposal;
                fromPartial(object: Partial<_81.MsgWithdrawProposal>): _81.MsgWithdrawProposal;
                fromAmino(object: _81.MsgWithdrawProposalAmino): _81.MsgWithdrawProposal;
                toAmino(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _81.MsgWithdrawProposalAminoMsg): _81.MsgWithdrawProposal;
                toAminoMsg(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _81.MsgWithdrawProposalProtoMsg): _81.MsgWithdrawProposal;
                toProto(message: _81.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _81.MsgWithdrawProposal): _81.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _81.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_81.MsgWithdrawProposalResponse>): _81.MsgWithdrawProposalResponse;
                fromAmino(_: _81.MsgWithdrawProposalResponseAmino): _81.MsgWithdrawProposalResponse;
                toAmino(_: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _81.MsgWithdrawProposalResponseAminoMsg): _81.MsgWithdrawProposalResponse;
                toAminoMsg(message: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgWithdrawProposalResponseProtoMsg): _81.MsgWithdrawProposalResponse;
                toProto(message: _81.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgWithdrawProposalResponse): _81.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _81.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgVote;
                fromPartial(object: Partial<_81.MsgVote>): _81.MsgVote;
                fromAmino(object: _81.MsgVoteAmino): _81.MsgVote;
                toAmino(message: _81.MsgVote): _81.MsgVoteAmino;
                fromAminoMsg(object: _81.MsgVoteAminoMsg): _81.MsgVote;
                toAminoMsg(message: _81.MsgVote): _81.MsgVoteAminoMsg;
                fromProtoMsg(message: _81.MsgVoteProtoMsg): _81.MsgVote;
                toProto(message: _81.MsgVote): Uint8Array;
                toProtoMsg(message: _81.MsgVote): _81.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgVoteResponse;
                fromPartial(_: Partial<_81.MsgVoteResponse>): _81.MsgVoteResponse;
                fromAmino(_: _81.MsgVoteResponseAmino): _81.MsgVoteResponse;
                toAmino(_: _81.MsgVoteResponse): _81.MsgVoteResponseAmino;
                fromAminoMsg(object: _81.MsgVoteResponseAminoMsg): _81.MsgVoteResponse;
                toAminoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteResponseProtoMsg): _81.MsgVoteResponse;
                toProto(message: _81.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _81.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgExec;
                fromPartial(object: Partial<_81.MsgExec>): _81.MsgExec;
                fromAmino(object: _81.MsgExecAmino): _81.MsgExec;
                toAmino(message: _81.MsgExec): _81.MsgExecAmino;
                fromAminoMsg(object: _81.MsgExecAminoMsg): _81.MsgExec;
                toAminoMsg(message: _81.MsgExec): _81.MsgExecAminoMsg;
                fromProtoMsg(message: _81.MsgExecProtoMsg): _81.MsgExec;
                toProto(message: _81.MsgExec): Uint8Array;
                toProtoMsg(message: _81.MsgExec): _81.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _81.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgExecResponse;
                fromPartial(object: Partial<_81.MsgExecResponse>): _81.MsgExecResponse;
                fromAmino(object: _81.MsgExecResponseAmino): _81.MsgExecResponse;
                toAmino(message: _81.MsgExecResponse): _81.MsgExecResponseAmino;
                fromAminoMsg(object: _81.MsgExecResponseAminoMsg): _81.MsgExecResponse;
                toAminoMsg(message: _81.MsgExecResponse): _81.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _81.MsgExecResponseProtoMsg): _81.MsgExecResponse;
                toProto(message: _81.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _81.MsgExecResponse): _81.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _81.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgLeaveGroup;
                fromPartial(object: Partial<_81.MsgLeaveGroup>): _81.MsgLeaveGroup;
                fromAmino(object: _81.MsgLeaveGroupAmino): _81.MsgLeaveGroup;
                toAmino(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupAmino;
                fromAminoMsg(object: _81.MsgLeaveGroupAminoMsg): _81.MsgLeaveGroup;
                toAminoMsg(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _81.MsgLeaveGroupProtoMsg): _81.MsgLeaveGroup;
                toProto(message: _81.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _81.MsgLeaveGroup): _81.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _81.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_81.MsgLeaveGroupResponse>): _81.MsgLeaveGroupResponse;
                fromAmino(_: _81.MsgLeaveGroupResponseAmino): _81.MsgLeaveGroupResponse;
                toAmino(_: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _81.MsgLeaveGroupResponseAminoMsg): _81.MsgLeaveGroupResponse;
                toAminoMsg(message: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _81.MsgLeaveGroupResponseProtoMsg): _81.MsgLeaveGroupResponse;
                toProto(message: _81.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _81.MsgLeaveGroupResponse): _81.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupInfoRequest;
                fromPartial(object: Partial<_80.QueryGroupInfoRequest>): _80.QueryGroupInfoRequest;
                fromAmino(object: _80.QueryGroupInfoRequestAmino): _80.QueryGroupInfoRequest;
                toAmino(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _80.QueryGroupInfoRequestAminoMsg): _80.QueryGroupInfoRequest;
                toAminoMsg(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupInfoRequestProtoMsg): _80.QueryGroupInfoRequest;
                toProto(message: _80.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupInfoRequest): _80.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupInfoResponse;
                fromPartial(object: Partial<_80.QueryGroupInfoResponse>): _80.QueryGroupInfoResponse;
                fromAmino(object: _80.QueryGroupInfoResponseAmino): _80.QueryGroupInfoResponse;
                toAmino(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _80.QueryGroupInfoResponseAminoMsg): _80.QueryGroupInfoResponse;
                toAminoMsg(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupInfoResponseProtoMsg): _80.QueryGroupInfoResponse;
                toProto(message: _80.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupInfoResponse): _80.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_80.QueryGroupPolicyInfoRequest>): _80.QueryGroupPolicyInfoRequest;
                fromAmino(object: _80.QueryGroupPolicyInfoRequestAmino): _80.QueryGroupPolicyInfoRequest;
                toAmino(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPolicyInfoRequestAminoMsg): _80.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPolicyInfoRequestProtoMsg): _80.QueryGroupPolicyInfoRequest;
                toProto(message: _80.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPolicyInfoRequest): _80.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_80.QueryGroupPolicyInfoResponse>): _80.QueryGroupPolicyInfoResponse;
                fromAmino(object: _80.QueryGroupPolicyInfoResponseAmino): _80.QueryGroupPolicyInfoResponse;
                toAmino(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPolicyInfoResponseAminoMsg): _80.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPolicyInfoResponseProtoMsg): _80.QueryGroupPolicyInfoResponse;
                toProto(message: _80.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPolicyInfoResponse): _80.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupMembersRequest;
                fromPartial(object: Partial<_80.QueryGroupMembersRequest>): _80.QueryGroupMembersRequest;
                fromAmino(object: _80.QueryGroupMembersRequestAmino): _80.QueryGroupMembersRequest;
                toAmino(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _80.QueryGroupMembersRequestAminoMsg): _80.QueryGroupMembersRequest;
                toAminoMsg(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupMembersRequestProtoMsg): _80.QueryGroupMembersRequest;
                toProto(message: _80.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupMembersRequest): _80.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupMembersResponse;
                fromPartial(object: Partial<_80.QueryGroupMembersResponse>): _80.QueryGroupMembersResponse;
                fromAmino(object: _80.QueryGroupMembersResponseAmino): _80.QueryGroupMembersResponse;
                toAmino(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _80.QueryGroupMembersResponseAminoMsg): _80.QueryGroupMembersResponse;
                toAminoMsg(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupMembersResponseProtoMsg): _80.QueryGroupMembersResponse;
                toProto(message: _80.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupMembersResponse): _80.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_80.QueryGroupsByAdminRequest>): _80.QueryGroupsByAdminRequest;
                fromAmino(object: _80.QueryGroupsByAdminRequestAmino): _80.QueryGroupsByAdminRequest;
                toAmino(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsByAdminRequestAminoMsg): _80.QueryGroupsByAdminRequest;
                toAminoMsg(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByAdminRequestProtoMsg): _80.QueryGroupsByAdminRequest;
                toProto(message: _80.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByAdminRequest): _80.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_80.QueryGroupsByAdminResponse>): _80.QueryGroupsByAdminResponse;
                fromAmino(object: _80.QueryGroupsByAdminResponseAmino): _80.QueryGroupsByAdminResponse;
                toAmino(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsByAdminResponseAminoMsg): _80.QueryGroupsByAdminResponse;
                toAminoMsg(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByAdminResponseProtoMsg): _80.QueryGroupsByAdminResponse;
                toProto(message: _80.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByAdminResponse): _80.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByGroupRequest>): _80.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _80.QueryGroupPoliciesByGroupRequestAmino): _80.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByGroupRequestAminoMsg): _80.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByGroupRequestProtoMsg): _80.QueryGroupPoliciesByGroupRequest;
                toProto(message: _80.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByGroupRequest): _80.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByGroupResponse>): _80.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _80.QueryGroupPoliciesByGroupResponseAmino): _80.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByGroupResponseAminoMsg): _80.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByGroupResponseProtoMsg): _80.QueryGroupPoliciesByGroupResponse;
                toProto(message: _80.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByGroupResponse): _80.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByAdminRequest>): _80.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _80.QueryGroupPoliciesByAdminRequestAmino): _80.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByAdminRequestAminoMsg): _80.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByAdminRequestProtoMsg): _80.QueryGroupPoliciesByAdminRequest;
                toProto(message: _80.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByAdminRequest): _80.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_80.QueryGroupPoliciesByAdminResponse>): _80.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _80.QueryGroupPoliciesByAdminResponseAmino): _80.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _80.QueryGroupPoliciesByAdminResponseAminoMsg): _80.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupPoliciesByAdminResponseProtoMsg): _80.QueryGroupPoliciesByAdminResponse;
                toProto(message: _80.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupPoliciesByAdminResponse): _80.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryProposalRequest;
                fromPartial(object: Partial<_80.QueryProposalRequest>): _80.QueryProposalRequest;
                fromAmino(object: _80.QueryProposalRequestAmino): _80.QueryProposalRequest;
                toAmino(message: _80.QueryProposalRequest): _80.QueryProposalRequestAmino;
                fromAminoMsg(object: _80.QueryProposalRequestAminoMsg): _80.QueryProposalRequest;
                toAminoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalRequestProtoMsg): _80.QueryProposalRequest;
                toProto(message: _80.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryProposalResponse;
                fromPartial(object: Partial<_80.QueryProposalResponse>): _80.QueryProposalResponse;
                fromAmino(object: _80.QueryProposalResponseAmino): _80.QueryProposalResponse;
                toAmino(message: _80.QueryProposalResponse): _80.QueryProposalResponseAmino;
                fromAminoMsg(object: _80.QueryProposalResponseAminoMsg): _80.QueryProposalResponse;
                toAminoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalResponseProtoMsg): _80.QueryProposalResponse;
                toProto(message: _80.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_80.QueryProposalsByGroupPolicyRequest>): _80.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _80.QueryProposalsByGroupPolicyRequestAmino): _80.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _80.QueryProposalsByGroupPolicyRequestAminoMsg): _80.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsByGroupPolicyRequestProtoMsg): _80.QueryProposalsByGroupPolicyRequest;
                toProto(message: _80.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsByGroupPolicyRequest): _80.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_80.QueryProposalsByGroupPolicyResponse>): _80.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _80.QueryProposalsByGroupPolicyResponseAmino): _80.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _80.QueryProposalsByGroupPolicyResponseAminoMsg): _80.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsByGroupPolicyResponseProtoMsg): _80.QueryProposalsByGroupPolicyResponse;
                toProto(message: _80.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsByGroupPolicyResponse): _80.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _80.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_80.QueryVoteByProposalVoterRequest>): _80.QueryVoteByProposalVoterRequest;
                fromAmino(object: _80.QueryVoteByProposalVoterRequestAmino): _80.QueryVoteByProposalVoterRequest;
                toAmino(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _80.QueryVoteByProposalVoterRequestAminoMsg): _80.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVoteByProposalVoterRequestProtoMsg): _80.QueryVoteByProposalVoterRequest;
                toProto(message: _80.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVoteByProposalVoterRequest): _80.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _80.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_80.QueryVoteByProposalVoterResponse>): _80.QueryVoteByProposalVoterResponse;
                fromAmino(object: _80.QueryVoteByProposalVoterResponseAmino): _80.QueryVoteByProposalVoterResponse;
                toAmino(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _80.QueryVoteByProposalVoterResponseAminoMsg): _80.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVoteByProposalVoterResponseProtoMsg): _80.QueryVoteByProposalVoterResponse;
                toProto(message: _80.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVoteByProposalVoterResponse): _80.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_80.QueryVotesByProposalRequest>): _80.QueryVotesByProposalRequest;
                fromAmino(object: _80.QueryVotesByProposalRequestAmino): _80.QueryVotesByProposalRequest;
                toAmino(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _80.QueryVotesByProposalRequestAminoMsg): _80.QueryVotesByProposalRequest;
                toAminoMsg(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByProposalRequestProtoMsg): _80.QueryVotesByProposalRequest;
                toProto(message: _80.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByProposalRequest): _80.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_80.QueryVotesByProposalResponse>): _80.QueryVotesByProposalResponse;
                fromAmino(object: _80.QueryVotesByProposalResponseAmino): _80.QueryVotesByProposalResponse;
                toAmino(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _80.QueryVotesByProposalResponseAminoMsg): _80.QueryVotesByProposalResponse;
                toAminoMsg(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByProposalResponseProtoMsg): _80.QueryVotesByProposalResponse;
                toProto(message: _80.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByProposalResponse): _80.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_80.QueryVotesByVoterRequest>): _80.QueryVotesByVoterRequest;
                fromAmino(object: _80.QueryVotesByVoterRequestAmino): _80.QueryVotesByVoterRequest;
                toAmino(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _80.QueryVotesByVoterRequestAminoMsg): _80.QueryVotesByVoterRequest;
                toAminoMsg(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByVoterRequestProtoMsg): _80.QueryVotesByVoterRequest;
                toProto(message: _80.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByVoterRequest): _80.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_80.QueryVotesByVoterResponse>): _80.QueryVotesByVoterResponse;
                fromAmino(object: _80.QueryVotesByVoterResponseAmino): _80.QueryVotesByVoterResponse;
                toAmino(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _80.QueryVotesByVoterResponseAminoMsg): _80.QueryVotesByVoterResponse;
                toAminoMsg(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesByVoterResponseProtoMsg): _80.QueryVotesByVoterResponse;
                toProto(message: _80.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesByVoterResponse): _80.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_80.QueryGroupsByMemberRequest>): _80.QueryGroupsByMemberRequest;
                fromAmino(object: _80.QueryGroupsByMemberRequestAmino): _80.QueryGroupsByMemberRequest;
                toAmino(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsByMemberRequestAminoMsg): _80.QueryGroupsByMemberRequest;
                toAminoMsg(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByMemberRequestProtoMsg): _80.QueryGroupsByMemberRequest;
                toProto(message: _80.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByMemberRequest): _80.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_80.QueryGroupsByMemberResponse>): _80.QueryGroupsByMemberResponse;
                fromAmino(object: _80.QueryGroupsByMemberResponseAmino): _80.QueryGroupsByMemberResponse;
                toAmino(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsByMemberResponseAminoMsg): _80.QueryGroupsByMemberResponse;
                toAminoMsg(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsByMemberResponseProtoMsg): _80.QueryGroupsByMemberResponse;
                toProto(message: _80.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsByMemberResponse): _80.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryTallyResultRequest;
                fromPartial(object: Partial<_80.QueryTallyResultRequest>): _80.QueryTallyResultRequest;
                fromAmino(object: _80.QueryTallyResultRequestAmino): _80.QueryTallyResultRequest;
                toAmino(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _80.QueryTallyResultRequestAminoMsg): _80.QueryTallyResultRequest;
                toAminoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultRequestProtoMsg): _80.QueryTallyResultRequest;
                toProto(message: _80.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryTallyResultResponse;
                fromPartial(object: Partial<_80.QueryTallyResultResponse>): _80.QueryTallyResultResponse;
                fromAmino(object: _80.QueryTallyResultResponseAmino): _80.QueryTallyResultResponse;
                toAmino(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _80.QueryTallyResultResponseAminoMsg): _80.QueryTallyResultResponse;
                toAminoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultResponseProtoMsg): _80.QueryTallyResultResponse;
                toProto(message: _80.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _80.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsRequest;
                fromPartial(object: Partial<_80.QueryGroupsRequest>): _80.QueryGroupsRequest;
                fromAmino(object: _80.QueryGroupsRequestAmino): _80.QueryGroupsRequest;
                toAmino(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestAmino;
                fromAminoMsg(object: _80.QueryGroupsRequestAminoMsg): _80.QueryGroupsRequest;
                toAminoMsg(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsRequestProtoMsg): _80.QueryGroupsRequest;
                toProto(message: _80.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsRequest): _80.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _80.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.QueryGroupsResponse;
                fromPartial(object: Partial<_80.QueryGroupsResponse>): _80.QueryGroupsResponse;
                fromAmino(object: _80.QueryGroupsResponseAmino): _80.QueryGroupsResponse;
                toAmino(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseAmino;
                fromAminoMsg(object: _80.QueryGroupsResponseAminoMsg): _80.QueryGroupsResponse;
                toAminoMsg(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryGroupsResponseProtoMsg): _80.QueryGroupsResponse;
                toProto(message: _80.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryGroupsResponse): _80.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _79.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.GenesisState;
                fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
                fromAmino(object: _79.GenesisStateAmino): _79.GenesisState;
                toAmino(message: _79.GenesisState): _79.GenesisStateAmino;
                fromAminoMsg(object: _79.GenesisStateAminoMsg): _79.GenesisState;
                toAminoMsg(message: _79.GenesisState): _79.GenesisStateAminoMsg;
                fromProtoMsg(message: _79.GenesisStateProtoMsg): _79.GenesisState;
                toProto(message: _79.GenesisState): Uint8Array;
                toProtoMsg(message: _79.GenesisState): _79.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _78.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventCreateGroup;
                fromPartial(object: Partial<_78.EventCreateGroup>): _78.EventCreateGroup;
                fromAmino(object: _78.EventCreateGroupAmino): _78.EventCreateGroup;
                toAmino(message: _78.EventCreateGroup): _78.EventCreateGroupAmino;
                fromAminoMsg(object: _78.EventCreateGroupAminoMsg): _78.EventCreateGroup;
                toAminoMsg(message: _78.EventCreateGroup): _78.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _78.EventCreateGroupProtoMsg): _78.EventCreateGroup;
                toProto(message: _78.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _78.EventCreateGroup): _78.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _78.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventUpdateGroup;
                fromPartial(object: Partial<_78.EventUpdateGroup>): _78.EventUpdateGroup;
                fromAmino(object: _78.EventUpdateGroupAmino): _78.EventUpdateGroup;
                toAmino(message: _78.EventUpdateGroup): _78.EventUpdateGroupAmino;
                fromAminoMsg(object: _78.EventUpdateGroupAminoMsg): _78.EventUpdateGroup;
                toAminoMsg(message: _78.EventUpdateGroup): _78.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _78.EventUpdateGroupProtoMsg): _78.EventUpdateGroup;
                toProto(message: _78.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _78.EventUpdateGroup): _78.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _78.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventCreateGroupPolicy;
                fromPartial(object: Partial<_78.EventCreateGroupPolicy>): _78.EventCreateGroupPolicy;
                fromAmino(object: _78.EventCreateGroupPolicyAmino): _78.EventCreateGroupPolicy;
                toAmino(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _78.EventCreateGroupPolicyAminoMsg): _78.EventCreateGroupPolicy;
                toAminoMsg(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _78.EventCreateGroupPolicyProtoMsg): _78.EventCreateGroupPolicy;
                toProto(message: _78.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _78.EventCreateGroupPolicy): _78.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _78.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_78.EventUpdateGroupPolicy>): _78.EventUpdateGroupPolicy;
                fromAmino(object: _78.EventUpdateGroupPolicyAmino): _78.EventUpdateGroupPolicy;
                toAmino(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _78.EventUpdateGroupPolicyAminoMsg): _78.EventUpdateGroupPolicy;
                toAminoMsg(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _78.EventUpdateGroupPolicyProtoMsg): _78.EventUpdateGroupPolicy;
                toProto(message: _78.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _78.EventUpdateGroupPolicy): _78.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _78.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventSubmitProposal;
                fromPartial(object: Partial<_78.EventSubmitProposal>): _78.EventSubmitProposal;
                fromAmino(object: _78.EventSubmitProposalAmino): _78.EventSubmitProposal;
                toAmino(message: _78.EventSubmitProposal): _78.EventSubmitProposalAmino;
                fromAminoMsg(object: _78.EventSubmitProposalAminoMsg): _78.EventSubmitProposal;
                toAminoMsg(message: _78.EventSubmitProposal): _78.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.EventSubmitProposalProtoMsg): _78.EventSubmitProposal;
                toProto(message: _78.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.EventSubmitProposal): _78.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _78.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventWithdrawProposal;
                fromPartial(object: Partial<_78.EventWithdrawProposal>): _78.EventWithdrawProposal;
                fromAmino(object: _78.EventWithdrawProposalAmino): _78.EventWithdrawProposal;
                toAmino(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalAmino;
                fromAminoMsg(object: _78.EventWithdrawProposalAminoMsg): _78.EventWithdrawProposal;
                toAminoMsg(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _78.EventWithdrawProposalProtoMsg): _78.EventWithdrawProposal;
                toProto(message: _78.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _78.EventWithdrawProposal): _78.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _78.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventVote;
                fromPartial(object: Partial<_78.EventVote>): _78.EventVote;
                fromAmino(object: _78.EventVoteAmino): _78.EventVote;
                toAmino(message: _78.EventVote): _78.EventVoteAmino;
                fromAminoMsg(object: _78.EventVoteAminoMsg): _78.EventVote;
                toAminoMsg(message: _78.EventVote): _78.EventVoteAminoMsg;
                fromProtoMsg(message: _78.EventVoteProtoMsg): _78.EventVote;
                toProto(message: _78.EventVote): Uint8Array;
                toProtoMsg(message: _78.EventVote): _78.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _78.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventExec;
                fromPartial(object: Partial<_78.EventExec>): _78.EventExec;
                fromAmino(object: _78.EventExecAmino): _78.EventExec;
                toAmino(message: _78.EventExec): _78.EventExecAmino;
                fromAminoMsg(object: _78.EventExecAminoMsg): _78.EventExec;
                toAminoMsg(message: _78.EventExec): _78.EventExecAminoMsg;
                fromProtoMsg(message: _78.EventExecProtoMsg): _78.EventExec;
                toProto(message: _78.EventExec): Uint8Array;
                toProtoMsg(message: _78.EventExec): _78.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _78.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventLeaveGroup;
                fromPartial(object: Partial<_78.EventLeaveGroup>): _78.EventLeaveGroup;
                fromAmino(object: _78.EventLeaveGroupAmino): _78.EventLeaveGroup;
                toAmino(message: _78.EventLeaveGroup): _78.EventLeaveGroupAmino;
                fromAminoMsg(object: _78.EventLeaveGroupAminoMsg): _78.EventLeaveGroup;
                toAminoMsg(message: _78.EventLeaveGroup): _78.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _78.EventLeaveGroupProtoMsg): _78.EventLeaveGroup;
                toProto(message: _78.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _78.EventLeaveGroup): _78.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _78.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.EventProposalPruned;
                fromPartial(object: Partial<_78.EventProposalPruned>): _78.EventProposalPruned;
                fromAmino(object: _78.EventProposalPrunedAmino): _78.EventProposalPruned;
                toAmino(message: _78.EventProposalPruned): _78.EventProposalPrunedAmino;
                fromAminoMsg(object: _78.EventProposalPrunedAminoMsg): _78.EventProposalPruned;
                toAminoMsg(message: _78.EventProposalPruned): _78.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _78.EventProposalPrunedProtoMsg): _78.EventProposalPruned;
                toProto(message: _78.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _78.EventProposalPruned): _78.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _83.HashOp;
            hashOpToJSON(object: _83.HashOp): string;
            lengthOpFromJSON(object: any): _83.LengthOp;
            lengthOpToJSON(object: _83.LengthOp): string;
            HashOp: typeof _83.HashOp;
            HashOpSDKType: typeof _83.HashOp;
            HashOpAmino: typeof _83.HashOp;
            LengthOp: typeof _83.LengthOp;
            LengthOpSDKType: typeof _83.LengthOp;
            LengthOpAmino: typeof _83.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _83.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.ExistenceProof;
                fromPartial(object: Partial<_83.ExistenceProof>): _83.ExistenceProof;
                fromAmino(object: _83.ExistenceProofAmino): _83.ExistenceProof;
                toAmino(message: _83.ExistenceProof): _83.ExistenceProofAmino;
                fromAminoMsg(object: _83.ExistenceProofAminoMsg): _83.ExistenceProof;
                toAminoMsg(message: _83.ExistenceProof): _83.ExistenceProofAminoMsg;
                fromProtoMsg(message: _83.ExistenceProofProtoMsg): _83.ExistenceProof;
                toProto(message: _83.ExistenceProof): Uint8Array;
                toProtoMsg(message: _83.ExistenceProof): _83.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _83.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.NonExistenceProof;
                fromPartial(object: Partial<_83.NonExistenceProof>): _83.NonExistenceProof;
                fromAmino(object: _83.NonExistenceProofAmino): _83.NonExistenceProof;
                toAmino(message: _83.NonExistenceProof): _83.NonExistenceProofAmino;
                fromAminoMsg(object: _83.NonExistenceProofAminoMsg): _83.NonExistenceProof;
                toAminoMsg(message: _83.NonExistenceProof): _83.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _83.NonExistenceProofProtoMsg): _83.NonExistenceProof;
                toProto(message: _83.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _83.NonExistenceProof): _83.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _83.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.CommitmentProof;
                fromPartial(object: Partial<_83.CommitmentProof>): _83.CommitmentProof;
                fromAmino(object: _83.CommitmentProofAmino): _83.CommitmentProof;
                toAmino(message: _83.CommitmentProof): _83.CommitmentProofAmino;
                fromAminoMsg(object: _83.CommitmentProofAminoMsg): _83.CommitmentProof;
                toAminoMsg(message: _83.CommitmentProof): _83.CommitmentProofAminoMsg;
                fromProtoMsg(message: _83.CommitmentProofProtoMsg): _83.CommitmentProof;
                toProto(message: _83.CommitmentProof): Uint8Array;
                toProtoMsg(message: _83.CommitmentProof): _83.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _83.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.LeafOp;
                fromPartial(object: Partial<_83.LeafOp>): _83.LeafOp;
                fromAmino(object: _83.LeafOpAmino): _83.LeafOp;
                toAmino(message: _83.LeafOp): _83.LeafOpAmino;
                fromAminoMsg(object: _83.LeafOpAminoMsg): _83.LeafOp;
                toAminoMsg(message: _83.LeafOp): _83.LeafOpAminoMsg;
                fromProtoMsg(message: _83.LeafOpProtoMsg): _83.LeafOp;
                toProto(message: _83.LeafOp): Uint8Array;
                toProtoMsg(message: _83.LeafOp): _83.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _83.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.InnerOp;
                fromPartial(object: Partial<_83.InnerOp>): _83.InnerOp;
                fromAmino(object: _83.InnerOpAmino): _83.InnerOp;
                toAmino(message: _83.InnerOp): _83.InnerOpAmino;
                fromAminoMsg(object: _83.InnerOpAminoMsg): _83.InnerOp;
                toAminoMsg(message: _83.InnerOp): _83.InnerOpAminoMsg;
                fromProtoMsg(message: _83.InnerOpProtoMsg): _83.InnerOp;
                toProto(message: _83.InnerOp): Uint8Array;
                toProtoMsg(message: _83.InnerOp): _83.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _83.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.ProofSpec;
                fromPartial(object: Partial<_83.ProofSpec>): _83.ProofSpec;
                fromAmino(object: _83.ProofSpecAmino): _83.ProofSpec;
                toAmino(message: _83.ProofSpec): _83.ProofSpecAmino;
                fromAminoMsg(object: _83.ProofSpecAminoMsg): _83.ProofSpec;
                toAminoMsg(message: _83.ProofSpec): _83.ProofSpecAminoMsg;
                fromProtoMsg(message: _83.ProofSpecProtoMsg): _83.ProofSpec;
                toProto(message: _83.ProofSpec): Uint8Array;
                toProtoMsg(message: _83.ProofSpec): _83.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _83.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.InnerSpec;
                fromPartial(object: Partial<_83.InnerSpec>): _83.InnerSpec;
                fromAmino(object: _83.InnerSpecAmino): _83.InnerSpec;
                toAmino(message: _83.InnerSpec): _83.InnerSpecAmino;
                fromAminoMsg(object: _83.InnerSpecAminoMsg): _83.InnerSpec;
                toAminoMsg(message: _83.InnerSpec): _83.InnerSpecAminoMsg;
                fromProtoMsg(message: _83.InnerSpecProtoMsg): _83.InnerSpec;
                toProto(message: _83.InnerSpec): Uint8Array;
                toProtoMsg(message: _83.InnerSpec): _83.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _83.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.BatchProof;
                fromPartial(object: Partial<_83.BatchProof>): _83.BatchProof;
                fromAmino(object: _83.BatchProofAmino): _83.BatchProof;
                toAmino(message: _83.BatchProof): _83.BatchProofAmino;
                fromAminoMsg(object: _83.BatchProofAminoMsg): _83.BatchProof;
                toAminoMsg(message: _83.BatchProof): _83.BatchProofAminoMsg;
                fromProtoMsg(message: _83.BatchProofProtoMsg): _83.BatchProof;
                toProto(message: _83.BatchProof): Uint8Array;
                toProtoMsg(message: _83.BatchProof): _83.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _83.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.BatchEntry;
                fromPartial(object: Partial<_83.BatchEntry>): _83.BatchEntry;
                fromAmino(object: _83.BatchEntryAmino): _83.BatchEntry;
                toAmino(message: _83.BatchEntry): _83.BatchEntryAmino;
                fromAminoMsg(object: _83.BatchEntryAminoMsg): _83.BatchEntry;
                toAminoMsg(message: _83.BatchEntry): _83.BatchEntryAminoMsg;
                fromProtoMsg(message: _83.BatchEntryProtoMsg): _83.BatchEntry;
                toProto(message: _83.BatchEntry): Uint8Array;
                toProtoMsg(message: _83.BatchEntry): _83.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _83.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.CompressedBatchProof;
                fromPartial(object: Partial<_83.CompressedBatchProof>): _83.CompressedBatchProof;
                fromAmino(object: _83.CompressedBatchProofAmino): _83.CompressedBatchProof;
                toAmino(message: _83.CompressedBatchProof): _83.CompressedBatchProofAmino;
                fromAminoMsg(object: _83.CompressedBatchProofAminoMsg): _83.CompressedBatchProof;
                toAminoMsg(message: _83.CompressedBatchProof): _83.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _83.CompressedBatchProofProtoMsg): _83.CompressedBatchProof;
                toProto(message: _83.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _83.CompressedBatchProof): _83.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _83.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.CompressedBatchEntry;
                fromPartial(object: Partial<_83.CompressedBatchEntry>): _83.CompressedBatchEntry;
                fromAmino(object: _83.CompressedBatchEntryAmino): _83.CompressedBatchEntry;
                toAmino(message: _83.CompressedBatchEntry): _83.CompressedBatchEntryAmino;
                fromAminoMsg(object: _83.CompressedBatchEntryAminoMsg): _83.CompressedBatchEntry;
                toAminoMsg(message: _83.CompressedBatchEntry): _83.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _83.CompressedBatchEntryProtoMsg): _83.CompressedBatchEntry;
                toProto(message: _83.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _83.CompressedBatchEntry): _83.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _83.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.CompressedExistenceProof;
                fromPartial(object: Partial<_83.CompressedExistenceProof>): _83.CompressedExistenceProof;
                fromAmino(object: _83.CompressedExistenceProofAmino): _83.CompressedExistenceProof;
                toAmino(message: _83.CompressedExistenceProof): _83.CompressedExistenceProofAmino;
                fromAminoMsg(object: _83.CompressedExistenceProofAminoMsg): _83.CompressedExistenceProof;
                toAminoMsg(message: _83.CompressedExistenceProof): _83.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _83.CompressedExistenceProofProtoMsg): _83.CompressedExistenceProof;
                toProto(message: _83.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _83.CompressedExistenceProof): _83.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _83.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.CompressedNonExistenceProof;
                fromPartial(object: Partial<_83.CompressedNonExistenceProof>): _83.CompressedNonExistenceProof;
                fromAmino(object: _83.CompressedNonExistenceProofAmino): _83.CompressedNonExistenceProof;
                toAmino(message: _83.CompressedNonExistenceProof): _83.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _83.CompressedNonExistenceProofAminoMsg): _83.CompressedNonExistenceProof;
                toAminoMsg(message: _83.CompressedNonExistenceProof): _83.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _83.CompressedNonExistenceProofProtoMsg): _83.CompressedNonExistenceProof;
                toProto(message: _83.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _83.CompressedNonExistenceProof): _83.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _84.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Module;
                    fromPartial(object: Partial<_84.Module>): _84.Module;
                    fromAmino(object: _84.ModuleAmino): _84.Module;
                    toAmino(message: _84.Module): _84.ModuleAmino;
                    fromAminoMsg(object: _84.ModuleAminoMsg): _84.Module;
                    toAminoMsg(message: _84.Module): _84.ModuleAminoMsg;
                    fromProtoMsg(message: _84.ModuleProtoMsg): _84.Module;
                    toProto(message: _84.Module): Uint8Array;
                    toProtoMsg(message: _84.Module): _84.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                inflation(request?: _87.QueryInflationRequest): Promise<_87.QueryInflationResponse>;
                annualProvisions(request?: _87.QueryAnnualProvisionsRequest): Promise<_87.QueryAnnualProvisionsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _88.MsgUpdateParams) => _88.MsgUpdateParamsAmino;
                    fromAmino: (object: _88.MsgUpdateParamsAmino) => _88.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _88.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgUpdateParams;
                fromPartial(object: Partial<_88.MsgUpdateParams>): _88.MsgUpdateParams;
                fromAmino(object: _88.MsgUpdateParamsAmino): _88.MsgUpdateParams;
                toAmino(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsAminoMsg): _88.MsgUpdateParams;
                toAminoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsProtoMsg): _88.MsgUpdateParams;
                toProto(message: _88.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _88.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_88.MsgUpdateParamsResponse>): _88.MsgUpdateParamsResponse;
                fromAmino(_: _88.MsgUpdateParamsResponseAmino): _88.MsgUpdateParamsResponse;
                toAmino(_: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsResponseAminoMsg): _88.MsgUpdateParamsResponse;
                toAminoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsResponseProtoMsg): _88.MsgUpdateParamsResponse;
                toProto(message: _88.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryParamsRequest;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryParamsResponse;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _87.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryInflationRequest;
                fromPartial(_: Partial<_87.QueryInflationRequest>): _87.QueryInflationRequest;
                fromAmino(_: _87.QueryInflationRequestAmino): _87.QueryInflationRequest;
                toAmino(_: _87.QueryInflationRequest): _87.QueryInflationRequestAmino;
                fromAminoMsg(object: _87.QueryInflationRequestAminoMsg): _87.QueryInflationRequest;
                toAminoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _87.QueryInflationRequestProtoMsg): _87.QueryInflationRequest;
                toProto(message: _87.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _87.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryInflationResponse;
                fromPartial(object: Partial<_87.QueryInflationResponse>): _87.QueryInflationResponse;
                fromAmino(object: _87.QueryInflationResponseAmino): _87.QueryInflationResponse;
                toAmino(message: _87.QueryInflationResponse): _87.QueryInflationResponseAmino;
                fromAminoMsg(object: _87.QueryInflationResponseAminoMsg): _87.QueryInflationResponse;
                toAminoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _87.QueryInflationResponseProtoMsg): _87.QueryInflationResponse;
                toProto(message: _87.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _87.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_87.QueryAnnualProvisionsRequest>): _87.QueryAnnualProvisionsRequest;
                fromAmino(_: _87.QueryAnnualProvisionsRequestAmino): _87.QueryAnnualProvisionsRequest;
                toAmino(_: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsRequestAminoMsg): _87.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsRequestProtoMsg): _87.QueryAnnualProvisionsRequest;
                toProto(message: _87.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _87.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_87.QueryAnnualProvisionsResponse>): _87.QueryAnnualProvisionsResponse;
                fromAmino(object: _87.QueryAnnualProvisionsResponseAmino): _87.QueryAnnualProvisionsResponse;
                toAmino(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsResponseAminoMsg): _87.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsResponseProtoMsg): _87.QueryAnnualProvisionsResponse;
                toProto(message: _87.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _86.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Minter;
                fromPartial(object: Partial<_86.Minter>): _86.Minter;
                fromAmino(object: _86.MinterAmino): _86.Minter;
                toAmino(message: _86.Minter): _86.MinterAmino;
                fromAminoMsg(object: _86.MinterAminoMsg): _86.Minter;
                toAminoMsg(message: _86.Minter): _86.MinterAminoMsg;
                fromProtoMsg(message: _86.MinterProtoMsg): _86.Minter;
                toProto(message: _86.Minter): Uint8Array;
                toProtoMsg(message: _86.Minter): _86.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _86.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Params;
                fromPartial(object: Partial<_86.Params>): _86.Params;
                fromAmino(object: _86.ParamsAmino): _86.Params;
                toAmino(message: _86.Params): _86.ParamsAmino;
                fromAminoMsg(object: _86.ParamsAminoMsg): _86.Params;
                toAminoMsg(message: _86.Params): _86.ParamsAminoMsg;
                fromProtoMsg(message: _86.ParamsProtoMsg): _86.Params;
                toProto(message: _86.Params): Uint8Array;
                toProtoMsg(message: _86.Params): _86.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Module;
                    fromPartial(_: Partial<_91.Module>): _91.Module;
                    fromAmino(_: _91.ModuleAmino): _91.Module;
                    toAmino(_: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _96.MsgSend): {
                        typeUrl: string;
                        value: _96.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _96.MsgSend) => _96.MsgSendAmino;
                    fromAmino: (object: _96.MsgSendAmino) => _96.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _96.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgSend;
                fromPartial(object: Partial<_96.MsgSend>): _96.MsgSend;
                fromAmino(object: _96.MsgSendAmino): _96.MsgSend;
                toAmino(message: _96.MsgSend): _96.MsgSendAmino;
                fromAminoMsg(object: _96.MsgSendAminoMsg): _96.MsgSend;
                toAminoMsg(message: _96.MsgSend): _96.MsgSendAminoMsg;
                fromProtoMsg(message: _96.MsgSendProtoMsg): _96.MsgSend;
                toProto(message: _96.MsgSend): Uint8Array;
                toProtoMsg(message: _96.MsgSend): _96.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _96.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgSendResponse;
                fromPartial(_: Partial<_96.MsgSendResponse>): _96.MsgSendResponse;
                fromAmino(_: _96.MsgSendResponseAmino): _96.MsgSendResponse;
                toAmino(_: _96.MsgSendResponse): _96.MsgSendResponseAmino;
                fromAminoMsg(object: _96.MsgSendResponseAminoMsg): _96.MsgSendResponse;
                toAminoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _96.MsgSendResponseProtoMsg): _96.MsgSendResponse;
                toProto(message: _96.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _96.MsgSendResponse): _96.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _95.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryBalanceRequest;
                fromPartial(object: Partial<_95.QueryBalanceRequest>): _95.QueryBalanceRequest;
                fromAmino(object: _95.QueryBalanceRequestAmino): _95.QueryBalanceRequest;
                toAmino(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAmino;
                fromAminoMsg(object: _95.QueryBalanceRequestAminoMsg): _95.QueryBalanceRequest;
                toAminoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceRequestProtoMsg): _95.QueryBalanceRequest;
                toProto(message: _95.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceRequest): _95.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _95.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryBalanceResponse;
                fromPartial(object: Partial<_95.QueryBalanceResponse>): _95.QueryBalanceResponse;
                fromAmino(object: _95.QueryBalanceResponseAmino): _95.QueryBalanceResponse;
                toAmino(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAmino;
                fromAminoMsg(object: _95.QueryBalanceResponseAminoMsg): _95.QueryBalanceResponse;
                toAminoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _95.QueryBalanceResponseProtoMsg): _95.QueryBalanceResponse;
                toProto(message: _95.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _95.QueryBalanceResponse): _95.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _95.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryOwnerRequest;
                fromPartial(object: Partial<_95.QueryOwnerRequest>): _95.QueryOwnerRequest;
                fromAmino(object: _95.QueryOwnerRequestAmino): _95.QueryOwnerRequest;
                toAmino(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAmino;
                fromAminoMsg(object: _95.QueryOwnerRequestAminoMsg): _95.QueryOwnerRequest;
                toAminoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerRequestProtoMsg): _95.QueryOwnerRequest;
                toProto(message: _95.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerRequest): _95.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _95.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryOwnerResponse;
                fromPartial(object: Partial<_95.QueryOwnerResponse>): _95.QueryOwnerResponse;
                fromAmino(object: _95.QueryOwnerResponseAmino): _95.QueryOwnerResponse;
                toAmino(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAmino;
                fromAminoMsg(object: _95.QueryOwnerResponseAminoMsg): _95.QueryOwnerResponse;
                toAminoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _95.QueryOwnerResponseProtoMsg): _95.QueryOwnerResponse;
                toProto(message: _95.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _95.QueryOwnerResponse): _95.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _95.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QuerySupplyRequest;
                fromPartial(object: Partial<_95.QuerySupplyRequest>): _95.QuerySupplyRequest;
                fromAmino(object: _95.QuerySupplyRequestAmino): _95.QuerySupplyRequest;
                toAmino(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAmino;
                fromAminoMsg(object: _95.QuerySupplyRequestAminoMsg): _95.QuerySupplyRequest;
                toAminoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyRequestProtoMsg): _95.QuerySupplyRequest;
                toProto(message: _95.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyRequest): _95.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _95.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QuerySupplyResponse;
                fromPartial(object: Partial<_95.QuerySupplyResponse>): _95.QuerySupplyResponse;
                fromAmino(object: _95.QuerySupplyResponseAmino): _95.QuerySupplyResponse;
                toAmino(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAmino;
                fromAminoMsg(object: _95.QuerySupplyResponseAminoMsg): _95.QuerySupplyResponse;
                toAminoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _95.QuerySupplyResponseProtoMsg): _95.QuerySupplyResponse;
                toProto(message: _95.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _95.QuerySupplyResponse): _95.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTsRequest;
                fromPartial(object: Partial<_95.QueryNFTsRequest>): _95.QueryNFTsRequest;
                fromAmino(object: _95.QueryNFTsRequestAmino): _95.QueryNFTsRequest;
                toAmino(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAmino;
                fromAminoMsg(object: _95.QueryNFTsRequestAminoMsg): _95.QueryNFTsRequest;
                toAminoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsRequestProtoMsg): _95.QueryNFTsRequest;
                toProto(message: _95.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsRequest): _95.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTsResponse;
                fromPartial(object: Partial<_95.QueryNFTsResponse>): _95.QueryNFTsResponse;
                fromAmino(object: _95.QueryNFTsResponseAmino): _95.QueryNFTsResponse;
                toAmino(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAmino;
                fromAminoMsg(object: _95.QueryNFTsResponseAminoMsg): _95.QueryNFTsResponse;
                toAminoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTsResponseProtoMsg): _95.QueryNFTsResponse;
                toProto(message: _95.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTsResponse): _95.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _95.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTRequest;
                fromPartial(object: Partial<_95.QueryNFTRequest>): _95.QueryNFTRequest;
                fromAmino(object: _95.QueryNFTRequestAmino): _95.QueryNFTRequest;
                toAmino(message: _95.QueryNFTRequest): _95.QueryNFTRequestAmino;
                fromAminoMsg(object: _95.QueryNFTRequestAminoMsg): _95.QueryNFTRequest;
                toAminoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _95.QueryNFTRequestProtoMsg): _95.QueryNFTRequest;
                toProto(message: _95.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _95.QueryNFTRequest): _95.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _95.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryNFTResponse;
                fromPartial(object: Partial<_95.QueryNFTResponse>): _95.QueryNFTResponse;
                fromAmino(object: _95.QueryNFTResponseAmino): _95.QueryNFTResponse;
                toAmino(message: _95.QueryNFTResponse): _95.QueryNFTResponseAmino;
                fromAminoMsg(object: _95.QueryNFTResponseAminoMsg): _95.QueryNFTResponse;
                toAminoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _95.QueryNFTResponseProtoMsg): _95.QueryNFTResponse;
                toProto(message: _95.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _95.QueryNFTResponse): _95.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassRequest;
                fromPartial(object: Partial<_95.QueryClassRequest>): _95.QueryClassRequest;
                fromAmino(object: _95.QueryClassRequestAmino): _95.QueryClassRequest;
                toAmino(message: _95.QueryClassRequest): _95.QueryClassRequestAmino;
                fromAminoMsg(object: _95.QueryClassRequestAminoMsg): _95.QueryClassRequest;
                toAminoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassRequestProtoMsg): _95.QueryClassRequest;
                toProto(message: _95.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassRequest): _95.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassResponse;
                fromPartial(object: Partial<_95.QueryClassResponse>): _95.QueryClassResponse;
                fromAmino(object: _95.QueryClassResponseAmino): _95.QueryClassResponse;
                toAmino(message: _95.QueryClassResponse): _95.QueryClassResponseAmino;
                fromAminoMsg(object: _95.QueryClassResponseAminoMsg): _95.QueryClassResponse;
                toAminoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassResponseProtoMsg): _95.QueryClassResponse;
                toProto(message: _95.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassResponse): _95.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _95.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassesRequest;
                fromPartial(object: Partial<_95.QueryClassesRequest>): _95.QueryClassesRequest;
                fromAmino(object: _95.QueryClassesRequestAmino): _95.QueryClassesRequest;
                toAmino(message: _95.QueryClassesRequest): _95.QueryClassesRequestAmino;
                fromAminoMsg(object: _95.QueryClassesRequestAminoMsg): _95.QueryClassesRequest;
                toAminoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _95.QueryClassesRequestProtoMsg): _95.QueryClassesRequest;
                toProto(message: _95.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _95.QueryClassesRequest): _95.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _95.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryClassesResponse;
                fromPartial(object: Partial<_95.QueryClassesResponse>): _95.QueryClassesResponse;
                fromAmino(object: _95.QueryClassesResponseAmino): _95.QueryClassesResponse;
                toAmino(message: _95.QueryClassesResponse): _95.QueryClassesResponseAmino;
                fromAminoMsg(object: _95.QueryClassesResponseAminoMsg): _95.QueryClassesResponse;
                toAminoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _95.QueryClassesResponseProtoMsg): _95.QueryClassesResponse;
                toProto(message: _95.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _95.QueryClassesResponse): _95.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _94.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Class;
                fromPartial(object: Partial<_94.Class>): _94.Class;
                fromAmino(object: _94.ClassAmino): _94.Class;
                toAmino(message: _94.Class): _94.ClassAmino;
                fromAminoMsg(object: _94.ClassAminoMsg): _94.Class;
                toAminoMsg(message: _94.Class): _94.ClassAminoMsg;
                fromProtoMsg(message: _94.ClassProtoMsg): _94.Class;
                toProto(message: _94.Class): Uint8Array;
                toProtoMsg(message: _94.Class): _94.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _94.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.NFT;
                fromPartial(object: Partial<_94.NFT>): _94.NFT;
                fromAmino(object: _94.NFTAmino): _94.NFT;
                toAmino(message: _94.NFT): _94.NFTAmino;
                fromAminoMsg(object: _94.NFTAminoMsg): _94.NFT;
                toAminoMsg(message: _94.NFT): _94.NFTAminoMsg;
                fromProtoMsg(message: _94.NFTProtoMsg): _94.NFT;
                toProto(message: _94.NFT): Uint8Array;
                toProtoMsg(message: _94.NFT): _94.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _93.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Entry;
                fromPartial(object: Partial<_93.Entry>): _93.Entry;
                fromAmino(object: _93.EntryAmino): _93.Entry;
                toAmino(message: _93.Entry): _93.EntryAmino;
                fromAminoMsg(object: _93.EntryAminoMsg): _93.Entry;
                toAminoMsg(message: _93.Entry): _93.EntryAminoMsg;
                fromProtoMsg(message: _93.EntryProtoMsg): _93.Entry;
                toProto(message: _93.Entry): Uint8Array;
                toProtoMsg(message: _93.Entry): _93.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _92.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventSend;
                fromPartial(object: Partial<_92.EventSend>): _92.EventSend;
                fromAmino(object: _92.EventSendAmino): _92.EventSend;
                toAmino(message: _92.EventSend): _92.EventSendAmino;
                fromAminoMsg(object: _92.EventSendAminoMsg): _92.EventSend;
                toAminoMsg(message: _92.EventSend): _92.EventSendAminoMsg;
                fromProtoMsg(message: _92.EventSendProtoMsg): _92.EventSend;
                toProto(message: _92.EventSend): Uint8Array;
                toProtoMsg(message: _92.EventSend): _92.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _92.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventMint;
                fromPartial(object: Partial<_92.EventMint>): _92.EventMint;
                fromAmino(object: _92.EventMintAmino): _92.EventMint;
                toAmino(message: _92.EventMint): _92.EventMintAmino;
                fromAminoMsg(object: _92.EventMintAminoMsg): _92.EventMint;
                toAminoMsg(message: _92.EventMint): _92.EventMintAminoMsg;
                fromProtoMsg(message: _92.EventMintProtoMsg): _92.EventMint;
                toProto(message: _92.EventMint): Uint8Array;
                toProtoMsg(message: _92.EventMint): _92.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _92.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.EventBurn;
                fromPartial(object: Partial<_92.EventBurn>): _92.EventBurn;
                fromAmino(object: _92.EventBurnAmino): _92.EventBurn;
                toAmino(message: _92.EventBurn): _92.EventBurnAmino;
                fromAminoMsg(object: _92.EventBurnAminoMsg): _92.EventBurn;
                toAminoMsg(message: _92.EventBurn): _92.EventBurnAminoMsg;
                fromProtoMsg(message: _92.EventBurnProtoMsg): _92.EventBurn;
                toProto(message: _92.EventBurn): Uint8Array;
                toProtoMsg(message: _92.EventBurn): _92.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _97.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Module;
                    fromPartial(_: Partial<_97.Module>): _97.Module;
                    fromAmino(_: _97.ModuleAmino): _97.Module;
                    toAmino(_: _97.Module): _97.ModuleAmino;
                    fromAminoMsg(object: _97.ModuleAminoMsg): _97.Module;
                    toAminoMsg(message: _97.Module): _97.ModuleAminoMsg;
                    fromProtoMsg(message: _97.ModuleProtoMsg): _97.Module;
                    toProto(message: _97.Module): Uint8Array;
                    toProtoMsg(message: _97.Module): _97.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _281.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _98.GetRequest): Promise<_98.GetResponse>;
                    list(request: _98.ListRequest): Promise<_98.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _98.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.GetRequest;
                    fromPartial(object: Partial<_98.GetRequest>): _98.GetRequest;
                    fromAmino(object: _98.GetRequestAmino): _98.GetRequest;
                    toAmino(message: _98.GetRequest): _98.GetRequestAmino;
                    fromAminoMsg(object: _98.GetRequestAminoMsg): _98.GetRequest;
                    toAminoMsg(message: _98.GetRequest): _98.GetRequestAminoMsg;
                    fromProtoMsg(message: _98.GetRequestProtoMsg): _98.GetRequest;
                    toProto(message: _98.GetRequest): Uint8Array;
                    toProtoMsg(message: _98.GetRequest): _98.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _98.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.GetResponse;
                    fromPartial(object: Partial<_98.GetResponse>): _98.GetResponse;
                    fromAmino(object: _98.GetResponseAmino): _98.GetResponse;
                    toAmino(message: _98.GetResponse): _98.GetResponseAmino;
                    fromAminoMsg(object: _98.GetResponseAminoMsg): _98.GetResponse;
                    toAminoMsg(message: _98.GetResponse): _98.GetResponseAminoMsg;
                    fromProtoMsg(message: _98.GetResponseProtoMsg): _98.GetResponse;
                    toProto(message: _98.GetResponse): Uint8Array;
                    toProtoMsg(message: _98.GetResponse): _98.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _98.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest;
                    fromPartial(object: Partial<_98.ListRequest>): _98.ListRequest;
                    fromAmino(object: _98.ListRequestAmino): _98.ListRequest;
                    toAmino(message: _98.ListRequest): _98.ListRequestAmino;
                    fromAminoMsg(object: _98.ListRequestAminoMsg): _98.ListRequest;
                    toAminoMsg(message: _98.ListRequest): _98.ListRequestAminoMsg;
                    fromProtoMsg(message: _98.ListRequestProtoMsg): _98.ListRequest;
                    toProto(message: _98.ListRequest): Uint8Array;
                    toProtoMsg(message: _98.ListRequest): _98.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _98.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest_Prefix;
                    fromPartial(object: Partial<_98.ListRequest_Prefix>): _98.ListRequest_Prefix;
                    fromAmino(object: _98.ListRequest_PrefixAmino): _98.ListRequest_Prefix;
                    toAmino(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _98.ListRequest_PrefixAminoMsg): _98.ListRequest_Prefix;
                    toAminoMsg(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _98.ListRequest_PrefixProtoMsg): _98.ListRequest_Prefix;
                    toProto(message: _98.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _98.ListRequest_Prefix): _98.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _98.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListRequest_Range;
                    fromPartial(object: Partial<_98.ListRequest_Range>): _98.ListRequest_Range;
                    fromAmino(object: _98.ListRequest_RangeAmino): _98.ListRequest_Range;
                    toAmino(message: _98.ListRequest_Range): _98.ListRequest_RangeAmino;
                    fromAminoMsg(object: _98.ListRequest_RangeAminoMsg): _98.ListRequest_Range;
                    toAminoMsg(message: _98.ListRequest_Range): _98.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _98.ListRequest_RangeProtoMsg): _98.ListRequest_Range;
                    toProto(message: _98.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _98.ListRequest_Range): _98.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _98.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ListResponse;
                    fromPartial(object: Partial<_98.ListResponse>): _98.ListResponse;
                    fromAmino(object: _98.ListResponseAmino): _98.ListResponse;
                    toAmino(message: _98.ListResponse): _98.ListResponseAmino;
                    fromAminoMsg(object: _98.ListResponseAminoMsg): _98.ListResponse;
                    toAminoMsg(message: _98.ListResponse): _98.ListResponseAminoMsg;
                    fromProtoMsg(message: _98.ListResponseProtoMsg): _98.ListResponse;
                    toProto(message: _98.ListResponse): Uint8Array;
                    toProtoMsg(message: _98.ListResponse): _98.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _98.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.IndexValue;
                    fromPartial(object: Partial<_98.IndexValue>): _98.IndexValue;
                    fromAmino(object: _98.IndexValueAmino): _98.IndexValue;
                    toAmino(message: _98.IndexValue): _98.IndexValueAmino;
                    fromAminoMsg(object: _98.IndexValueAminoMsg): _98.IndexValue;
                    toAminoMsg(message: _98.IndexValue): _98.IndexValueAminoMsg;
                    fromProtoMsg(message: _98.IndexValueProtoMsg): _98.IndexValue;
                    toProto(message: _98.IndexValue): Uint8Array;
                    toProtoMsg(message: _98.IndexValue): _98.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _99.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.TableDescriptor;
                fromPartial(object: Partial<_99.TableDescriptor>): _99.TableDescriptor;
                fromAmino(object: _99.TableDescriptorAmino): _99.TableDescriptor;
                toAmino(message: _99.TableDescriptor): _99.TableDescriptorAmino;
                fromAminoMsg(object: _99.TableDescriptorAminoMsg): _99.TableDescriptor;
                toAminoMsg(message: _99.TableDescriptor): _99.TableDescriptorAminoMsg;
                fromProtoMsg(message: _99.TableDescriptorProtoMsg): _99.TableDescriptor;
                toProto(message: _99.TableDescriptor): Uint8Array;
                toProtoMsg(message: _99.TableDescriptor): _99.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _99.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_99.PrimaryKeyDescriptor>): _99.PrimaryKeyDescriptor;
                fromAmino(object: _99.PrimaryKeyDescriptorAmino): _99.PrimaryKeyDescriptor;
                toAmino(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _99.PrimaryKeyDescriptorAminoMsg): _99.PrimaryKeyDescriptor;
                toAminoMsg(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _99.PrimaryKeyDescriptorProtoMsg): _99.PrimaryKeyDescriptor;
                toProto(message: _99.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _99.PrimaryKeyDescriptor): _99.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _99.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_99.SecondaryIndexDescriptor>): _99.SecondaryIndexDescriptor;
                fromAmino(object: _99.SecondaryIndexDescriptorAmino): _99.SecondaryIndexDescriptor;
                toAmino(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _99.SecondaryIndexDescriptorAminoMsg): _99.SecondaryIndexDescriptor;
                toAminoMsg(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _99.SecondaryIndexDescriptorProtoMsg): _99.SecondaryIndexDescriptor;
                toProto(message: _99.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _99.SecondaryIndexDescriptor): _99.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _99.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SingletonDescriptor;
                fromPartial(object: Partial<_99.SingletonDescriptor>): _99.SingletonDescriptor;
                fromAmino(object: _99.SingletonDescriptorAmino): _99.SingletonDescriptor;
                toAmino(message: _99.SingletonDescriptor): _99.SingletonDescriptorAmino;
                fromAminoMsg(object: _99.SingletonDescriptorAminoMsg): _99.SingletonDescriptor;
                toAminoMsg(message: _99.SingletonDescriptor): _99.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _99.SingletonDescriptorProtoMsg): _99.SingletonDescriptor;
                toProto(message: _99.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _99.SingletonDescriptor): _99.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _100.StorageType;
            storageTypeToJSON(object: _100.StorageType): string;
            StorageType: typeof _100.StorageType;
            StorageTypeSDKType: typeof _100.StorageType;
            StorageTypeAmino: typeof _100.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _100.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_100.ModuleSchemaDescriptor>): _100.ModuleSchemaDescriptor;
                fromAmino(object: _100.ModuleSchemaDescriptorAmino): _100.ModuleSchemaDescriptor;
                toAmino(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _100.ModuleSchemaDescriptorAminoMsg): _100.ModuleSchemaDescriptor;
                toAminoMsg(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _100.ModuleSchemaDescriptorProtoMsg): _100.ModuleSchemaDescriptor;
                toProto(message: _100.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _100.ModuleSchemaDescriptor): _100.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _100.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_100.ModuleSchemaDescriptor_FileEntry>): _100.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _100.ModuleSchemaDescriptor_FileEntryAmino): _100.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _100.ModuleSchemaDescriptor_FileEntryAminoMsg): _100.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _100.ModuleSchemaDescriptor_FileEntryProtoMsg): _100.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _100.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _100.ModuleSchemaDescriptor_FileEntry): _100.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Module;
                    fromPartial(_: Partial<_101.Module>): _101.Module;
                    fromAmino(_: _101.ModuleAmino): _101.Module;
                    toAmino(_: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                subspaces(request?: _103.QuerySubspacesRequest): Promise<_103.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QueryParamsRequest;
                fromPartial(object: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(object: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(message: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _103.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QuerySubspacesRequest;
                fromPartial(_: Partial<_103.QuerySubspacesRequest>): _103.QuerySubspacesRequest;
                fromAmino(_: _103.QuerySubspacesRequestAmino): _103.QuerySubspacesRequest;
                toAmino(_: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _103.QuerySubspacesRequestAminoMsg): _103.QuerySubspacesRequest;
                toAminoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesRequestProtoMsg): _103.QuerySubspacesRequest;
                toProto(message: _103.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _103.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.QuerySubspacesResponse;
                fromPartial(object: Partial<_103.QuerySubspacesResponse>): _103.QuerySubspacesResponse;
                fromAmino(object: _103.QuerySubspacesResponseAmino): _103.QuerySubspacesResponse;
                toAmino(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _103.QuerySubspacesResponseAminoMsg): _103.QuerySubspacesResponse;
                toAminoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesResponseProtoMsg): _103.QuerySubspacesResponse;
                toProto(message: _103.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _103.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Subspace;
                fromPartial(object: Partial<_103.Subspace>): _103.Subspace;
                fromAmino(object: _103.SubspaceAmino): _103.Subspace;
                toAmino(message: _103.Subspace): _103.SubspaceAmino;
                fromAminoMsg(object: _103.SubspaceAminoMsg): _103.Subspace;
                toAminoMsg(message: _103.Subspace): _103.SubspaceAminoMsg;
                fromProtoMsg(message: _103.SubspaceProtoMsg): _103.Subspace;
                toProto(message: _103.Subspace): Uint8Array;
                toProtoMsg(message: _103.Subspace): _103.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _102.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ParameterChangeProposal;
                fromPartial(object: Partial<_102.ParameterChangeProposal>): _102.ParameterChangeProposal;
                fromAmino(object: _102.ParameterChangeProposalAmino): _102.ParameterChangeProposal;
                toAmino(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAmino;
                fromAminoMsg(object: _102.ParameterChangeProposalAminoMsg): _102.ParameterChangeProposal;
                toAminoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _102.ParameterChangeProposalProtoMsg): _102.ParameterChangeProposal;
                toProto(message: _102.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _102.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.ParamChange;
                fromPartial(object: Partial<_102.ParamChange>): _102.ParamChange;
                fromAmino(object: _102.ParamChangeAmino): _102.ParamChange;
                toAmino(message: _102.ParamChange): _102.ParamChangeAmino;
                fromAminoMsg(object: _102.ParamChangeAminoMsg): _102.ParamChange;
                toAminoMsg(message: _102.ParamChange): _102.ParamChangeAminoMsg;
                fromProtoMsg(message: _102.ParamChangeProtoMsg): _102.ParamChange;
                toProto(message: _102.ParamChange): Uint8Array;
                toProtoMsg(message: _102.ParamChange): _102.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _105.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.FileDescriptorsRequest;
                fromPartial(_: Partial<_105.FileDescriptorsRequest>): _105.FileDescriptorsRequest;
                fromAmino(_: _105.FileDescriptorsRequestAmino): _105.FileDescriptorsRequest;
                toAmino(_: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _105.FileDescriptorsRequestAminoMsg): _105.FileDescriptorsRequest;
                toAminoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsRequestProtoMsg): _105.FileDescriptorsRequest;
                toProto(message: _105.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _105.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.FileDescriptorsResponse;
                fromPartial(object: Partial<_105.FileDescriptorsResponse>): _105.FileDescriptorsResponse;
                fromAmino(object: _105.FileDescriptorsResponseAmino): _105.FileDescriptorsResponse;
                toAmino(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _105.FileDescriptorsResponseAminoMsg): _105.FileDescriptorsResponse;
                toAminoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsResponseProtoMsg): _105.FileDescriptorsResponse;
                toProto(message: _105.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _106.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Module;
                    fromPartial(object: Partial<_106.Module>): _106.Module;
                    fromAmino(object: _106.ModuleAmino): _106.Module;
                    toAmino(message: _106.Module): _106.ModuleAmino;
                    fromAminoMsg(object: _106.ModuleAminoMsg): _106.Module;
                    toAminoMsg(message: _106.Module): _106.ModuleAminoMsg;
                    fromProtoMsg(message: _106.ModuleProtoMsg): _106.Module;
                    toProto(message: _106.Module): Uint8Array;
                    toProtoMsg(message: _106.Module): _106.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: _110.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _110.MsgUnjail): {
                        typeUrl: string;
                        value: _110.MsgUnjail;
                    };
                    updateParams(value: _110.MsgUpdateParams): {
                        typeUrl: string;
                        value: _110.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUnjail) => _110.MsgUnjailAmino;
                    fromAmino: (object: _110.MsgUnjailAmino) => _110.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _110.MsgUpdateParams) => _110.MsgUpdateParamsAmino;
                    fromAmino: (object: _110.MsgUpdateParamsAmino) => _110.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _110.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUnjail;
                fromPartial(object: Partial<_110.MsgUnjail>): _110.MsgUnjail;
                fromAmino(object: _110.MsgUnjailAmino): _110.MsgUnjail;
                toAmino(message: _110.MsgUnjail): _110.MsgUnjailAmino;
                fromAminoMsg(object: _110.MsgUnjailAminoMsg): _110.MsgUnjail;
                toAminoMsg(message: _110.MsgUnjail): _110.MsgUnjailAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailProtoMsg): _110.MsgUnjail;
                toProto(message: _110.MsgUnjail): Uint8Array;
                toProtoMsg(message: _110.MsgUnjail): _110.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _110.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUnjailResponse;
                fromPartial(_: Partial<_110.MsgUnjailResponse>): _110.MsgUnjailResponse;
                fromAmino(_: _110.MsgUnjailResponseAmino): _110.MsgUnjailResponse;
                toAmino(_: _110.MsgUnjailResponse): _110.MsgUnjailResponseAmino;
                fromAminoMsg(object: _110.MsgUnjailResponseAminoMsg): _110.MsgUnjailResponse;
                toAminoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUnjailResponseProtoMsg): _110.MsgUnjailResponse;
                toProto(message: _110.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUnjailResponse): _110.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _110.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUpdateParams;
                fromPartial(object: Partial<_110.MsgUpdateParams>): _110.MsgUpdateParams;
                fromAmino(object: _110.MsgUpdateParamsAmino): _110.MsgUpdateParams;
                toAmino(message: _110.MsgUpdateParams): _110.MsgUpdateParamsAmino;
                fromAminoMsg(object: _110.MsgUpdateParamsAminoMsg): _110.MsgUpdateParams;
                toAminoMsg(message: _110.MsgUpdateParams): _110.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateParamsProtoMsg): _110.MsgUpdateParams;
                toProto(message: _110.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateParams): _110.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _110.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_110.MsgUpdateParamsResponse>): _110.MsgUpdateParamsResponse;
                fromAmino(_: _110.MsgUpdateParamsResponseAmino): _110.MsgUpdateParamsResponse;
                toAmino(_: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _110.MsgUpdateParamsResponseAminoMsg): _110.MsgUpdateParamsResponse;
                toAminoMsg(message: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _110.MsgUpdateParamsResponseProtoMsg): _110.MsgUpdateParamsResponse;
                toProto(message: _110.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _110.MsgUpdateParamsResponse): _110.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _109.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ValidatorSigningInfo;
                fromPartial(object: Partial<_109.ValidatorSigningInfo>): _109.ValidatorSigningInfo;
                fromAmino(object: _109.ValidatorSigningInfoAmino): _109.ValidatorSigningInfo;
                toAmino(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _109.ValidatorSigningInfoAminoMsg): _109.ValidatorSigningInfo;
                toAminoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _109.ValidatorSigningInfoProtoMsg): _109.ValidatorSigningInfo;
                toProto(message: _109.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _109.ValidatorSigningInfo): _109.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Params;
                fromPartial(object: Partial<_109.Params>): _109.Params;
                fromAmino(object: _109.ParamsAmino): _109.Params;
                toAmino(message: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _108.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryParamsRequest;
                fromPartial(_: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
                fromAmino(_: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(_: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                toAminoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QueryParamsResponse;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                toAminoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfoRequest;
                fromPartial(object: Partial<_108.QuerySigningInfoRequest>): _108.QuerySigningInfoRequest;
                fromAmino(object: _108.QuerySigningInfoRequestAmino): _108.QuerySigningInfoRequest;
                toAmino(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfoRequestAminoMsg): _108.QuerySigningInfoRequest;
                toAminoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoRequestProtoMsg): _108.QuerySigningInfoRequest;
                toProto(message: _108.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoRequest): _108.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfoResponse;
                fromPartial(object: Partial<_108.QuerySigningInfoResponse>): _108.QuerySigningInfoResponse;
                fromAmino(object: _108.QuerySigningInfoResponseAmino): _108.QuerySigningInfoResponse;
                toAmino(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfoResponseAminoMsg): _108.QuerySigningInfoResponse;
                toAminoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfoResponseProtoMsg): _108.QuerySigningInfoResponse;
                toProto(message: _108.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfoResponse): _108.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfosRequest;
                fromPartial(object: Partial<_108.QuerySigningInfosRequest>): _108.QuerySigningInfosRequest;
                fromAmino(object: _108.QuerySigningInfosRequestAmino): _108.QuerySigningInfosRequest;
                toAmino(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _108.QuerySigningInfosRequestAminoMsg): _108.QuerySigningInfosRequest;
                toAminoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosRequestProtoMsg): _108.QuerySigningInfosRequest;
                toProto(message: _108.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosRequest): _108.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _108.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.QuerySigningInfosResponse;
                fromPartial(object: Partial<_108.QuerySigningInfosResponse>): _108.QuerySigningInfosResponse;
                fromAmino(object: _108.QuerySigningInfosResponseAmino): _108.QuerySigningInfosResponse;
                toAmino(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _108.QuerySigningInfosResponseAminoMsg): _108.QuerySigningInfosResponse;
                toAminoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _108.QuerySigningInfosResponseProtoMsg): _108.QuerySigningInfosResponse;
                toProto(message: _108.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _108.QuerySigningInfosResponse): _108.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.GenesisState;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                toProto(message: _107.GenesisState): Uint8Array;
                toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _107.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.SigningInfo;
                fromPartial(object: Partial<_107.SigningInfo>): _107.SigningInfo;
                fromAmino(object: _107.SigningInfoAmino): _107.SigningInfo;
                toAmino(message: _107.SigningInfo): _107.SigningInfoAmino;
                fromAminoMsg(object: _107.SigningInfoAminoMsg): _107.SigningInfo;
                toAminoMsg(message: _107.SigningInfo): _107.SigningInfoAminoMsg;
                fromProtoMsg(message: _107.SigningInfoProtoMsg): _107.SigningInfo;
                toProto(message: _107.SigningInfo): Uint8Array;
                toProtoMsg(message: _107.SigningInfo): _107.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _107.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.ValidatorMissedBlocks;
                fromPartial(object: Partial<_107.ValidatorMissedBlocks>): _107.ValidatorMissedBlocks;
                fromAmino(object: _107.ValidatorMissedBlocksAmino): _107.ValidatorMissedBlocks;
                toAmino(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _107.ValidatorMissedBlocksAminoMsg): _107.ValidatorMissedBlocks;
                toAminoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _107.ValidatorMissedBlocksProtoMsg): _107.ValidatorMissedBlocks;
                toProto(message: _107.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _107.ValidatorMissedBlocks): _107.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _107.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.MissedBlock;
                fromPartial(object: Partial<_107.MissedBlock>): _107.MissedBlock;
                fromAmino(object: _107.MissedBlockAmino): _107.MissedBlock;
                toAmino(message: _107.MissedBlock): _107.MissedBlockAmino;
                fromAminoMsg(object: _107.MissedBlockAminoMsg): _107.MissedBlock;
                toAminoMsg(message: _107.MissedBlock): _107.MissedBlockAminoMsg;
                fromProtoMsg(message: _107.MissedBlockProtoMsg): _107.MissedBlock;
                toProto(message: _107.MissedBlock): Uint8Array;
                toProtoMsg(message: _107.MissedBlock): _107.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _111.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Module;
                    fromPartial(object: Partial<_111.Module>): _111.Module;
                    fromAmino(object: _111.ModuleAmino): _111.Module;
                    toAmino(message: _111.Module): _111.ModuleAmino;
                    fromAminoMsg(object: _111.ModuleAminoMsg): _111.Module;
                    toAminoMsg(message: _111.Module): _111.ModuleAminoMsg;
                    fromProtoMsg(message: _111.ModuleProtoMsg): _111.Module;
                    toProto(message: _111.Module): Uint8Array;
                    toProtoMsg(message: _111.Module): _111.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _114.QueryValidatorsRequest): Promise<_114.QueryValidatorsResponse>;
                validator(request: _114.QueryValidatorRequest): Promise<_114.QueryValidatorResponse>;
                validatorDelegations(request: _114.QueryValidatorDelegationsRequest): Promise<_114.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _114.QueryValidatorUnbondingDelegationsRequest): Promise<_114.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _114.QueryDelegationRequest): Promise<_114.QueryDelegationResponse>;
                unbondingDelegation(request: _114.QueryUnbondingDelegationRequest): Promise<_114.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _114.QueryDelegatorDelegationsRequest): Promise<_114.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _114.QueryDelegatorUnbondingDelegationsRequest): Promise<_114.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _114.QueryRedelegationsRequest): Promise<_114.QueryRedelegationsResponse>;
                delegatorValidators(request: _114.QueryDelegatorValidatorsRequest): Promise<_114.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _114.QueryDelegatorValidatorRequest): Promise<_114.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _114.QueryHistoricalInfoRequest): Promise<_114.QueryHistoricalInfoResponse>;
                pool(request?: _114.QueryPoolRequest): Promise<_114.QueryPoolResponse>;
                params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: _116.MsgCreateValidator;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: _116.MsgEditValidator;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: _116.MsgDelegate;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _116.MsgBeginRedelegate;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: _116.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _116.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _116.MsgCreateValidator): {
                        typeUrl: string;
                        value: _116.MsgCreateValidator;
                    };
                    editValidator(value: _116.MsgEditValidator): {
                        typeUrl: string;
                        value: _116.MsgEditValidator;
                    };
                    delegate(value: _116.MsgDelegate): {
                        typeUrl: string;
                        value: _116.MsgDelegate;
                    };
                    beginRedelegate(value: _116.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _116.MsgBeginRedelegate;
                    };
                    undelegate(value: _116.MsgUndelegate): {
                        typeUrl: string;
                        value: _116.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _116.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _116.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _116.MsgUpdateParams): {
                        typeUrl: string;
                        value: _116.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _116.MsgCreateValidator) => _116.MsgCreateValidatorAmino;
                    fromAmino: (object: _116.MsgCreateValidatorAmino) => _116.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _116.MsgEditValidator) => _116.MsgEditValidatorAmino;
                    fromAmino: (object: _116.MsgEditValidatorAmino) => _116.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgDelegate) => _116.MsgDelegateAmino;
                    fromAmino: (object: _116.MsgDelegateAmino) => _116.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgBeginRedelegate) => _116.MsgBeginRedelegateAmino;
                    fromAmino: (object: _116.MsgBeginRedelegateAmino) => _116.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUndelegate) => _116.MsgUndelegateAmino;
                    fromAmino: (object: _116.MsgUndelegateAmino) => _116.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _116.MsgCancelUnbondingDelegation) => _116.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _116.MsgCancelUnbondingDelegationAmino) => _116.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                    fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _116.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateValidator;
                fromPartial(object: Partial<_116.MsgCreateValidator>): _116.MsgCreateValidator;
                fromAmino(object: _116.MsgCreateValidatorAmino): _116.MsgCreateValidator;
                toAmino(message: _116.MsgCreateValidator): _116.MsgCreateValidatorAmino;
                fromAminoMsg(object: _116.MsgCreateValidatorAminoMsg): _116.MsgCreateValidator;
                toAminoMsg(message: _116.MsgCreateValidator): _116.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _116.MsgCreateValidatorProtoMsg): _116.MsgCreateValidator;
                toProto(message: _116.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _116.MsgCreateValidator): _116.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _116.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_116.MsgCreateValidatorResponse>): _116.MsgCreateValidatorResponse;
                fromAmino(_: _116.MsgCreateValidatorResponseAmino): _116.MsgCreateValidatorResponse;
                toAmino(_: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _116.MsgCreateValidatorResponseAminoMsg): _116.MsgCreateValidatorResponse;
                toAminoMsg(message: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.MsgCreateValidatorResponseProtoMsg): _116.MsgCreateValidatorResponse;
                toProto(message: _116.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.MsgCreateValidatorResponse): _116.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _116.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgEditValidator;
                fromPartial(object: Partial<_116.MsgEditValidator>): _116.MsgEditValidator;
                fromAmino(object: _116.MsgEditValidatorAmino): _116.MsgEditValidator;
                toAmino(message: _116.MsgEditValidator): _116.MsgEditValidatorAmino;
                fromAminoMsg(object: _116.MsgEditValidatorAminoMsg): _116.MsgEditValidator;
                toAminoMsg(message: _116.MsgEditValidator): _116.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _116.MsgEditValidatorProtoMsg): _116.MsgEditValidator;
                toProto(message: _116.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _116.MsgEditValidator): _116.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _116.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgEditValidatorResponse;
                fromPartial(_: Partial<_116.MsgEditValidatorResponse>): _116.MsgEditValidatorResponse;
                fromAmino(_: _116.MsgEditValidatorResponseAmino): _116.MsgEditValidatorResponse;
                toAmino(_: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _116.MsgEditValidatorResponseAminoMsg): _116.MsgEditValidatorResponse;
                toAminoMsg(message: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _116.MsgEditValidatorResponseProtoMsg): _116.MsgEditValidatorResponse;
                toProto(message: _116.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _116.MsgEditValidatorResponse): _116.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _116.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgDelegate;
                fromPartial(object: Partial<_116.MsgDelegate>): _116.MsgDelegate;
                fromAmino(object: _116.MsgDelegateAmino): _116.MsgDelegate;
                toAmino(message: _116.MsgDelegate): _116.MsgDelegateAmino;
                fromAminoMsg(object: _116.MsgDelegateAminoMsg): _116.MsgDelegate;
                toAminoMsg(message: _116.MsgDelegate): _116.MsgDelegateAminoMsg;
                fromProtoMsg(message: _116.MsgDelegateProtoMsg): _116.MsgDelegate;
                toProto(message: _116.MsgDelegate): Uint8Array;
                toProtoMsg(message: _116.MsgDelegate): _116.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _116.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgDelegateResponse;
                fromPartial(_: Partial<_116.MsgDelegateResponse>): _116.MsgDelegateResponse;
                fromAmino(_: _116.MsgDelegateResponseAmino): _116.MsgDelegateResponse;
                toAmino(_: _116.MsgDelegateResponse): _116.MsgDelegateResponseAmino;
                fromAminoMsg(object: _116.MsgDelegateResponseAminoMsg): _116.MsgDelegateResponse;
                toAminoMsg(message: _116.MsgDelegateResponse): _116.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgDelegateResponseProtoMsg): _116.MsgDelegateResponse;
                toProto(message: _116.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgDelegateResponse): _116.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _116.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgBeginRedelegate;
                fromPartial(object: Partial<_116.MsgBeginRedelegate>): _116.MsgBeginRedelegate;
                fromAmino(object: _116.MsgBeginRedelegateAmino): _116.MsgBeginRedelegate;
                toAmino(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _116.MsgBeginRedelegateAminoMsg): _116.MsgBeginRedelegate;
                toAminoMsg(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _116.MsgBeginRedelegateProtoMsg): _116.MsgBeginRedelegate;
                toProto(message: _116.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _116.MsgBeginRedelegate): _116.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _116.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_116.MsgBeginRedelegateResponse>): _116.MsgBeginRedelegateResponse;
                fromAmino(object: _116.MsgBeginRedelegateResponseAmino): _116.MsgBeginRedelegateResponse;
                toAmino(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _116.MsgBeginRedelegateResponseAminoMsg): _116.MsgBeginRedelegateResponse;
                toAminoMsg(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgBeginRedelegateResponseProtoMsg): _116.MsgBeginRedelegateResponse;
                toProto(message: _116.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgBeginRedelegateResponse): _116.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _116.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUndelegate;
                fromPartial(object: Partial<_116.MsgUndelegate>): _116.MsgUndelegate;
                fromAmino(object: _116.MsgUndelegateAmino): _116.MsgUndelegate;
                toAmino(message: _116.MsgUndelegate): _116.MsgUndelegateAmino;
                fromAminoMsg(object: _116.MsgUndelegateAminoMsg): _116.MsgUndelegate;
                toAminoMsg(message: _116.MsgUndelegate): _116.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _116.MsgUndelegateProtoMsg): _116.MsgUndelegate;
                toProto(message: _116.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _116.MsgUndelegate): _116.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _116.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUndelegateResponse;
                fromPartial(object: Partial<_116.MsgUndelegateResponse>): _116.MsgUndelegateResponse;
                fromAmino(object: _116.MsgUndelegateResponseAmino): _116.MsgUndelegateResponse;
                toAmino(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _116.MsgUndelegateResponseAminoMsg): _116.MsgUndelegateResponse;
                toAminoMsg(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _116.MsgUndelegateResponseProtoMsg): _116.MsgUndelegateResponse;
                toProto(message: _116.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _116.MsgUndelegateResponse): _116.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _116.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_116.MsgCancelUnbondingDelegation>): _116.MsgCancelUnbondingDelegation;
                fromAmino(object: _116.MsgCancelUnbondingDelegationAmino): _116.MsgCancelUnbondingDelegation;
                toAmino(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _116.MsgCancelUnbondingDelegationAminoMsg): _116.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _116.MsgCancelUnbondingDelegationProtoMsg): _116.MsgCancelUnbondingDelegation;
                toProto(message: _116.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _116.MsgCancelUnbondingDelegation): _116.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _116.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_116.MsgCancelUnbondingDelegationResponse>): _116.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _116.MsgCancelUnbondingDelegationResponseAmino): _116.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _116.MsgCancelUnbondingDelegationResponseAminoMsg): _116.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _116.MsgCancelUnbondingDelegationResponseProtoMsg): _116.MsgCancelUnbondingDelegationResponse;
                toProto(message: _116.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _116.MsgCancelUnbondingDelegationResponse): _116.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _116.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParams;
                fromPartial(object: Partial<_116.MsgUpdateParams>): _116.MsgUpdateParams;
                fromAmino(object: _116.MsgUpdateParamsAmino): _116.MsgUpdateParams;
                toAmino(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsAminoMsg): _116.MsgUpdateParams;
                toAminoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsProtoMsg): _116.MsgUpdateParams;
                toProto(message: _116.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _116.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_116.MsgUpdateParamsResponse>): _116.MsgUpdateParamsResponse;
                fromAmino(_: _116.MsgUpdateParamsResponseAmino): _116.MsgUpdateParamsResponse;
                toAmino(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _116.MsgUpdateParamsResponseAminoMsg): _116.MsgUpdateParamsResponse;
                toAminoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _116.MsgUpdateParamsResponseProtoMsg): _116.MsgUpdateParamsResponse;
                toProto(message: _116.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _115.BondStatus;
            bondStatusToJSON(object: _115.BondStatus): string;
            infractionFromJSON(object: any): _115.Infraction;
            infractionToJSON(object: _115.Infraction): string;
            BondStatus: typeof _115.BondStatus;
            BondStatusSDKType: typeof _115.BondStatus;
            BondStatusAmino: typeof _115.BondStatus;
            Infraction: typeof _115.Infraction;
            InfractionSDKType: typeof _115.Infraction;
            InfractionAmino: typeof _115.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _115.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.HistoricalInfo;
                fromPartial(object: Partial<_115.HistoricalInfo>): _115.HistoricalInfo;
                fromAmino(object: _115.HistoricalInfoAmino): _115.HistoricalInfo;
                toAmino(message: _115.HistoricalInfo): _115.HistoricalInfoAmino;
                fromAminoMsg(object: _115.HistoricalInfoAminoMsg): _115.HistoricalInfo;
                toAminoMsg(message: _115.HistoricalInfo): _115.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _115.HistoricalInfoProtoMsg): _115.HistoricalInfo;
                toProto(message: _115.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _115.HistoricalInfo): _115.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _115.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.CommissionRates;
                fromPartial(object: Partial<_115.CommissionRates>): _115.CommissionRates;
                fromAmino(object: _115.CommissionRatesAmino): _115.CommissionRates;
                toAmino(message: _115.CommissionRates): _115.CommissionRatesAmino;
                fromAminoMsg(object: _115.CommissionRatesAminoMsg): _115.CommissionRates;
                toAminoMsg(message: _115.CommissionRates): _115.CommissionRatesAminoMsg;
                fromProtoMsg(message: _115.CommissionRatesProtoMsg): _115.CommissionRates;
                toProto(message: _115.CommissionRates): Uint8Array;
                toProtoMsg(message: _115.CommissionRates): _115.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _115.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Commission;
                fromPartial(object: Partial<_115.Commission>): _115.Commission;
                fromAmino(object: _115.CommissionAmino): _115.Commission;
                toAmino(message: _115.Commission): _115.CommissionAmino;
                fromAminoMsg(object: _115.CommissionAminoMsg): _115.Commission;
                toAminoMsg(message: _115.Commission): _115.CommissionAminoMsg;
                fromProtoMsg(message: _115.CommissionProtoMsg): _115.Commission;
                toProto(message: _115.Commission): Uint8Array;
                toProtoMsg(message: _115.Commission): _115.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _115.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Description;
                fromPartial(object: Partial<_115.Description>): _115.Description;
                fromAmino(object: _115.DescriptionAmino): _115.Description;
                toAmino(message: _115.Description): _115.DescriptionAmino;
                fromAminoMsg(object: _115.DescriptionAminoMsg): _115.Description;
                toAminoMsg(message: _115.Description): _115.DescriptionAminoMsg;
                fromProtoMsg(message: _115.DescriptionProtoMsg): _115.Description;
                toProto(message: _115.Description): Uint8Array;
                toProtoMsg(message: _115.Description): _115.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _115.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Validator;
                fromPartial(object: Partial<_115.Validator>): _115.Validator;
                fromAmino(object: _115.ValidatorAmino): _115.Validator;
                toAmino(message: _115.Validator): _115.ValidatorAmino;
                fromAminoMsg(object: _115.ValidatorAminoMsg): _115.Validator;
                toAminoMsg(message: _115.Validator): _115.ValidatorAminoMsg;
                fromProtoMsg(message: _115.ValidatorProtoMsg): _115.Validator;
                toProto(message: _115.Validator): Uint8Array;
                toProtoMsg(message: _115.Validator): _115.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _115.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ValAddresses;
                fromPartial(object: Partial<_115.ValAddresses>): _115.ValAddresses;
                fromAmino(object: _115.ValAddressesAmino): _115.ValAddresses;
                toAmino(message: _115.ValAddresses): _115.ValAddressesAmino;
                fromAminoMsg(object: _115.ValAddressesAminoMsg): _115.ValAddresses;
                toAminoMsg(message: _115.ValAddresses): _115.ValAddressesAminoMsg;
                fromProtoMsg(message: _115.ValAddressesProtoMsg): _115.ValAddresses;
                toProto(message: _115.ValAddresses): Uint8Array;
                toProtoMsg(message: _115.ValAddresses): _115.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _115.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVPair;
                fromPartial(object: Partial<_115.DVPair>): _115.DVPair;
                fromAmino(object: _115.DVPairAmino): _115.DVPair;
                toAmino(message: _115.DVPair): _115.DVPairAmino;
                fromAminoMsg(object: _115.DVPairAminoMsg): _115.DVPair;
                toAminoMsg(message: _115.DVPair): _115.DVPairAminoMsg;
                fromProtoMsg(message: _115.DVPairProtoMsg): _115.DVPair;
                toProto(message: _115.DVPair): Uint8Array;
                toProtoMsg(message: _115.DVPair): _115.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _115.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVPairs;
                fromPartial(object: Partial<_115.DVPairs>): _115.DVPairs;
                fromAmino(object: _115.DVPairsAmino): _115.DVPairs;
                toAmino(message: _115.DVPairs): _115.DVPairsAmino;
                fromAminoMsg(object: _115.DVPairsAminoMsg): _115.DVPairs;
                toAminoMsg(message: _115.DVPairs): _115.DVPairsAminoMsg;
                fromProtoMsg(message: _115.DVPairsProtoMsg): _115.DVPairs;
                toProto(message: _115.DVPairs): Uint8Array;
                toProtoMsg(message: _115.DVPairs): _115.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _115.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVVTriplet;
                fromPartial(object: Partial<_115.DVVTriplet>): _115.DVVTriplet;
                fromAmino(object: _115.DVVTripletAmino): _115.DVVTriplet;
                toAmino(message: _115.DVVTriplet): _115.DVVTripletAmino;
                fromAminoMsg(object: _115.DVVTripletAminoMsg): _115.DVVTriplet;
                toAminoMsg(message: _115.DVVTriplet): _115.DVVTripletAminoMsg;
                fromProtoMsg(message: _115.DVVTripletProtoMsg): _115.DVVTriplet;
                toProto(message: _115.DVVTriplet): Uint8Array;
                toProtoMsg(message: _115.DVVTriplet): _115.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _115.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DVVTriplets;
                fromPartial(object: Partial<_115.DVVTriplets>): _115.DVVTriplets;
                fromAmino(object: _115.DVVTripletsAmino): _115.DVVTriplets;
                toAmino(message: _115.DVVTriplets): _115.DVVTripletsAmino;
                fromAminoMsg(object: _115.DVVTripletsAminoMsg): _115.DVVTriplets;
                toAminoMsg(message: _115.DVVTriplets): _115.DVVTripletsAminoMsg;
                fromProtoMsg(message: _115.DVVTripletsProtoMsg): _115.DVVTriplets;
                toProto(message: _115.DVVTriplets): Uint8Array;
                toProtoMsg(message: _115.DVVTriplets): _115.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _115.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Delegation;
                fromPartial(object: Partial<_115.Delegation>): _115.Delegation;
                fromAmino(object: _115.DelegationAmino): _115.Delegation;
                toAmino(message: _115.Delegation): _115.DelegationAmino;
                fromAminoMsg(object: _115.DelegationAminoMsg): _115.Delegation;
                toAminoMsg(message: _115.Delegation): _115.DelegationAminoMsg;
                fromProtoMsg(message: _115.DelegationProtoMsg): _115.Delegation;
                toProto(message: _115.Delegation): Uint8Array;
                toProtoMsg(message: _115.Delegation): _115.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _115.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UnbondingDelegation;
                fromPartial(object: Partial<_115.UnbondingDelegation>): _115.UnbondingDelegation;
                fromAmino(object: _115.UnbondingDelegationAmino): _115.UnbondingDelegation;
                toAmino(message: _115.UnbondingDelegation): _115.UnbondingDelegationAmino;
                fromAminoMsg(object: _115.UnbondingDelegationAminoMsg): _115.UnbondingDelegation;
                toAminoMsg(message: _115.UnbondingDelegation): _115.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _115.UnbondingDelegationProtoMsg): _115.UnbondingDelegation;
                toProto(message: _115.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _115.UnbondingDelegation): _115.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _115.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.UnbondingDelegationEntry;
                fromPartial(object: Partial<_115.UnbondingDelegationEntry>): _115.UnbondingDelegationEntry;
                fromAmino(object: _115.UnbondingDelegationEntryAmino): _115.UnbondingDelegationEntry;
                toAmino(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _115.UnbondingDelegationEntryAminoMsg): _115.UnbondingDelegationEntry;
                toAminoMsg(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _115.UnbondingDelegationEntryProtoMsg): _115.UnbondingDelegationEntry;
                toProto(message: _115.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _115.UnbondingDelegationEntry): _115.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _115.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationEntry;
                fromPartial(object: Partial<_115.RedelegationEntry>): _115.RedelegationEntry;
                fromAmino(object: _115.RedelegationEntryAmino): _115.RedelegationEntry;
                toAmino(message: _115.RedelegationEntry): _115.RedelegationEntryAmino;
                fromAminoMsg(object: _115.RedelegationEntryAminoMsg): _115.RedelegationEntry;
                toAminoMsg(message: _115.RedelegationEntry): _115.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _115.RedelegationEntryProtoMsg): _115.RedelegationEntry;
                toProto(message: _115.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _115.RedelegationEntry): _115.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _115.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Redelegation;
                fromPartial(object: Partial<_115.Redelegation>): _115.Redelegation;
                fromAmino(object: _115.RedelegationAmino): _115.Redelegation;
                toAmino(message: _115.Redelegation): _115.RedelegationAmino;
                fromAminoMsg(object: _115.RedelegationAminoMsg): _115.Redelegation;
                toAminoMsg(message: _115.Redelegation): _115.RedelegationAminoMsg;
                fromProtoMsg(message: _115.RedelegationProtoMsg): _115.Redelegation;
                toProto(message: _115.Redelegation): Uint8Array;
                toProtoMsg(message: _115.Redelegation): _115.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _115.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Params;
                fromPartial(object: Partial<_115.Params>): _115.Params;
                fromAmino(object: _115.ParamsAmino): _115.Params;
                toAmino(message: _115.Params): _115.ParamsAmino;
                fromAminoMsg(object: _115.ParamsAminoMsg): _115.Params;
                toAminoMsg(message: _115.Params): _115.ParamsAminoMsg;
                fromProtoMsg(message: _115.ParamsProtoMsg): _115.Params;
                toProto(message: _115.Params): Uint8Array;
                toProtoMsg(message: _115.Params): _115.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _115.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.DelegationResponse;
                fromPartial(object: Partial<_115.DelegationResponse>): _115.DelegationResponse;
                fromAmino(object: _115.DelegationResponseAmino): _115.DelegationResponse;
                toAmino(message: _115.DelegationResponse): _115.DelegationResponseAmino;
                fromAminoMsg(object: _115.DelegationResponseAminoMsg): _115.DelegationResponse;
                toAminoMsg(message: _115.DelegationResponse): _115.DelegationResponseAminoMsg;
                fromProtoMsg(message: _115.DelegationResponseProtoMsg): _115.DelegationResponse;
                toProto(message: _115.DelegationResponse): Uint8Array;
                toProtoMsg(message: _115.DelegationResponse): _115.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _115.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationEntryResponse;
                fromPartial(object: Partial<_115.RedelegationEntryResponse>): _115.RedelegationEntryResponse;
                fromAmino(object: _115.RedelegationEntryResponseAmino): _115.RedelegationEntryResponse;
                toAmino(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _115.RedelegationEntryResponseAminoMsg): _115.RedelegationEntryResponse;
                toAminoMsg(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _115.RedelegationEntryResponseProtoMsg): _115.RedelegationEntryResponse;
                toProto(message: _115.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _115.RedelegationEntryResponse): _115.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _115.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.RedelegationResponse;
                fromPartial(object: Partial<_115.RedelegationResponse>): _115.RedelegationResponse;
                fromAmino(object: _115.RedelegationResponseAmino): _115.RedelegationResponse;
                toAmino(message: _115.RedelegationResponse): _115.RedelegationResponseAmino;
                fromAminoMsg(object: _115.RedelegationResponseAminoMsg): _115.RedelegationResponse;
                toAminoMsg(message: _115.RedelegationResponse): _115.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _115.RedelegationResponseProtoMsg): _115.RedelegationResponse;
                toProto(message: _115.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _115.RedelegationResponse): _115.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _115.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.Pool;
                fromPartial(object: Partial<_115.Pool>): _115.Pool;
                fromAmino(object: _115.PoolAmino): _115.Pool;
                toAmino(message: _115.Pool): _115.PoolAmino;
                fromAminoMsg(object: _115.PoolAminoMsg): _115.Pool;
                toAminoMsg(message: _115.Pool): _115.PoolAminoMsg;
                fromProtoMsg(message: _115.PoolProtoMsg): _115.Pool;
                toProto(message: _115.Pool): Uint8Array;
                toProtoMsg(message: _115.Pool): _115.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _115.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.ValidatorUpdates;
                fromPartial(object: Partial<_115.ValidatorUpdates>): _115.ValidatorUpdates;
                fromAmino(object: _115.ValidatorUpdatesAmino): _115.ValidatorUpdates;
                toAmino(message: _115.ValidatorUpdates): _115.ValidatorUpdatesAmino;
                fromAminoMsg(object: _115.ValidatorUpdatesAminoMsg): _115.ValidatorUpdates;
                toAminoMsg(message: _115.ValidatorUpdates): _115.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _115.ValidatorUpdatesProtoMsg): _115.ValidatorUpdates;
                toProto(message: _115.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _115.ValidatorUpdates): _115.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorsRequest;
                fromPartial(object: Partial<_114.QueryValidatorsRequest>): _114.QueryValidatorsRequest;
                fromAmino(object: _114.QueryValidatorsRequestAmino): _114.QueryValidatorsRequest;
                toAmino(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorsRequestAminoMsg): _114.QueryValidatorsRequest;
                toAminoMsg(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorsRequestProtoMsg): _114.QueryValidatorsRequest;
                toProto(message: _114.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorsRequest): _114.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorsResponse;
                fromPartial(object: Partial<_114.QueryValidatorsResponse>): _114.QueryValidatorsResponse;
                fromAmino(object: _114.QueryValidatorsResponseAmino): _114.QueryValidatorsResponse;
                toAmino(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorsResponseAminoMsg): _114.QueryValidatorsResponse;
                toAminoMsg(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorsResponseProtoMsg): _114.QueryValidatorsResponse;
                toProto(message: _114.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorsResponse): _114.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorRequest;
                fromPartial(object: Partial<_114.QueryValidatorRequest>): _114.QueryValidatorRequest;
                fromAmino(object: _114.QueryValidatorRequestAmino): _114.QueryValidatorRequest;
                toAmino(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorRequestAminoMsg): _114.QueryValidatorRequest;
                toAminoMsg(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorRequestProtoMsg): _114.QueryValidatorRequest;
                toProto(message: _114.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorRequest): _114.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorResponse;
                fromPartial(object: Partial<_114.QueryValidatorResponse>): _114.QueryValidatorResponse;
                fromAmino(object: _114.QueryValidatorResponseAmino): _114.QueryValidatorResponse;
                toAmino(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorResponseAminoMsg): _114.QueryValidatorResponse;
                toAminoMsg(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorResponseProtoMsg): _114.QueryValidatorResponse;
                toProto(message: _114.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorResponse): _114.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_114.QueryValidatorDelegationsRequest>): _114.QueryValidatorDelegationsRequest;
                fromAmino(object: _114.QueryValidatorDelegationsRequestAmino): _114.QueryValidatorDelegationsRequest;
                toAmino(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorDelegationsRequestAminoMsg): _114.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorDelegationsRequestProtoMsg): _114.QueryValidatorDelegationsRequest;
                toProto(message: _114.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorDelegationsRequest): _114.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_114.QueryValidatorDelegationsResponse>): _114.QueryValidatorDelegationsResponse;
                fromAmino(object: _114.QueryValidatorDelegationsResponseAmino): _114.QueryValidatorDelegationsResponse;
                toAmino(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorDelegationsResponseAminoMsg): _114.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorDelegationsResponseProtoMsg): _114.QueryValidatorDelegationsResponse;
                toProto(message: _114.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorDelegationsResponse): _114.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_114.QueryValidatorUnbondingDelegationsRequest>): _114.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _114.QueryValidatorUnbondingDelegationsRequestAmino): _114.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryValidatorUnbondingDelegationsRequestAminoMsg): _114.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorUnbondingDelegationsRequestProtoMsg): _114.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _114.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorUnbondingDelegationsRequest): _114.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_114.QueryValidatorUnbondingDelegationsResponse>): _114.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _114.QueryValidatorUnbondingDelegationsResponseAmino): _114.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryValidatorUnbondingDelegationsResponseAminoMsg): _114.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryValidatorUnbondingDelegationsResponseProtoMsg): _114.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _114.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryValidatorUnbondingDelegationsResponse): _114.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegationRequest;
                fromPartial(object: Partial<_114.QueryDelegationRequest>): _114.QueryDelegationRequest;
                fromAmino(object: _114.QueryDelegationRequestAmino): _114.QueryDelegationRequest;
                toAmino(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestAmino;
                fromAminoMsg(object: _114.QueryDelegationRequestAminoMsg): _114.QueryDelegationRequest;
                toAminoMsg(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegationRequestProtoMsg): _114.QueryDelegationRequest;
                toProto(message: _114.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegationRequest): _114.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegationResponse;
                fromPartial(object: Partial<_114.QueryDelegationResponse>): _114.QueryDelegationResponse;
                fromAmino(object: _114.QueryDelegationResponseAmino): _114.QueryDelegationResponse;
                toAmino(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseAmino;
                fromAminoMsg(object: _114.QueryDelegationResponseAminoMsg): _114.QueryDelegationResponse;
                toAminoMsg(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegationResponseProtoMsg): _114.QueryDelegationResponse;
                toProto(message: _114.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegationResponse): _114.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _114.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_114.QueryUnbondingDelegationRequest>): _114.QueryUnbondingDelegationRequest;
                fromAmino(object: _114.QueryUnbondingDelegationRequestAmino): _114.QueryUnbondingDelegationRequest;
                toAmino(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _114.QueryUnbondingDelegationRequestAminoMsg): _114.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _114.QueryUnbondingDelegationRequestProtoMsg): _114.QueryUnbondingDelegationRequest;
                toProto(message: _114.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _114.QueryUnbondingDelegationRequest): _114.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _114.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_114.QueryUnbondingDelegationResponse>): _114.QueryUnbondingDelegationResponse;
                fromAmino(object: _114.QueryUnbondingDelegationResponseAmino): _114.QueryUnbondingDelegationResponse;
                toAmino(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _114.QueryUnbondingDelegationResponseAminoMsg): _114.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.QueryUnbondingDelegationResponseProtoMsg): _114.QueryUnbondingDelegationResponse;
                toProto(message: _114.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.QueryUnbondingDelegationResponse): _114.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorDelegationsRequest>): _114.QueryDelegatorDelegationsRequest;
                fromAmino(object: _114.QueryDelegatorDelegationsRequestAmino): _114.QueryDelegatorDelegationsRequest;
                toAmino(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorDelegationsRequestAminoMsg): _114.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorDelegationsRequestProtoMsg): _114.QueryDelegatorDelegationsRequest;
                toProto(message: _114.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorDelegationsRequest): _114.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorDelegationsResponse>): _114.QueryDelegatorDelegationsResponse;
                fromAmino(object: _114.QueryDelegatorDelegationsResponseAmino): _114.QueryDelegatorDelegationsResponse;
                toAmino(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorDelegationsResponseAminoMsg): _114.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorDelegationsResponseProtoMsg): _114.QueryDelegatorDelegationsResponse;
                toProto(message: _114.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorDelegationsResponse): _114.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorUnbondingDelegationsRequest>): _114.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _114.QueryDelegatorUnbondingDelegationsRequestAmino): _114.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _114.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _114.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _114.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsRequest): _114.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorUnbondingDelegationsResponse>): _114.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _114.QueryDelegatorUnbondingDelegationsResponseAmino): _114.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _114.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _114.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _114.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorUnbondingDelegationsResponse): _114.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _114.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryRedelegationsRequest;
                fromPartial(object: Partial<_114.QueryRedelegationsRequest>): _114.QueryRedelegationsRequest;
                fromAmino(object: _114.QueryRedelegationsRequestAmino): _114.QueryRedelegationsRequest;
                toAmino(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _114.QueryRedelegationsRequestAminoMsg): _114.QueryRedelegationsRequest;
                toAminoMsg(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryRedelegationsRequestProtoMsg): _114.QueryRedelegationsRequest;
                toProto(message: _114.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryRedelegationsRequest): _114.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _114.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryRedelegationsResponse;
                fromPartial(object: Partial<_114.QueryRedelegationsResponse>): _114.QueryRedelegationsResponse;
                fromAmino(object: _114.QueryRedelegationsResponseAmino): _114.QueryRedelegationsResponse;
                toAmino(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _114.QueryRedelegationsResponseAminoMsg): _114.QueryRedelegationsResponse;
                toAminoMsg(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryRedelegationsResponseProtoMsg): _114.QueryRedelegationsResponse;
                toProto(message: _114.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryRedelegationsResponse): _114.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorsRequest>): _114.QueryDelegatorValidatorsRequest;
                fromAmino(object: _114.QueryDelegatorValidatorsRequestAmino): _114.QueryDelegatorValidatorsRequest;
                toAmino(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorsRequestAminoMsg): _114.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorsRequestProtoMsg): _114.QueryDelegatorValidatorsRequest;
                toProto(message: _114.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorsRequest): _114.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorsResponse>): _114.QueryDelegatorValidatorsResponse;
                fromAmino(object: _114.QueryDelegatorValidatorsResponseAmino): _114.QueryDelegatorValidatorsResponse;
                toAmino(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorsResponseAminoMsg): _114.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorsResponseProtoMsg): _114.QueryDelegatorValidatorsResponse;
                toProto(message: _114.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorsResponse): _114.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorRequest>): _114.QueryDelegatorValidatorRequest;
                fromAmino(object: _114.QueryDelegatorValidatorRequestAmino): _114.QueryDelegatorValidatorRequest;
                toAmino(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorRequestAminoMsg): _114.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorRequestProtoMsg): _114.QueryDelegatorValidatorRequest;
                toProto(message: _114.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorRequest): _114.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _114.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_114.QueryDelegatorValidatorResponse>): _114.QueryDelegatorValidatorResponse;
                fromAmino(object: _114.QueryDelegatorValidatorResponseAmino): _114.QueryDelegatorValidatorResponse;
                toAmino(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _114.QueryDelegatorValidatorResponseAminoMsg): _114.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDelegatorValidatorResponseProtoMsg): _114.QueryDelegatorValidatorResponse;
                toProto(message: _114.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDelegatorValidatorResponse): _114.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _114.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_114.QueryHistoricalInfoRequest>): _114.QueryHistoricalInfoRequest;
                fromAmino(object: _114.QueryHistoricalInfoRequestAmino): _114.QueryHistoricalInfoRequest;
                toAmino(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _114.QueryHistoricalInfoRequestAminoMsg): _114.QueryHistoricalInfoRequest;
                toAminoMsg(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _114.QueryHistoricalInfoRequestProtoMsg): _114.QueryHistoricalInfoRequest;
                toProto(message: _114.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _114.QueryHistoricalInfoRequest): _114.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _114.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_114.QueryHistoricalInfoResponse>): _114.QueryHistoricalInfoResponse;
                fromAmino(object: _114.QueryHistoricalInfoResponseAmino): _114.QueryHistoricalInfoResponse;
                toAmino(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _114.QueryHistoricalInfoResponseAminoMsg): _114.QueryHistoricalInfoResponse;
                toAminoMsg(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _114.QueryHistoricalInfoResponseProtoMsg): _114.QueryHistoricalInfoResponse;
                toProto(message: _114.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _114.QueryHistoricalInfoResponse): _114.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _114.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryPoolRequest;
                fromPartial(_: Partial<_114.QueryPoolRequest>): _114.QueryPoolRequest;
                fromAmino(_: _114.QueryPoolRequestAmino): _114.QueryPoolRequest;
                toAmino(_: _114.QueryPoolRequest): _114.QueryPoolRequestAmino;
                fromAminoMsg(object: _114.QueryPoolRequestAminoMsg): _114.QueryPoolRequest;
                toAminoMsg(message: _114.QueryPoolRequest): _114.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _114.QueryPoolRequestProtoMsg): _114.QueryPoolRequest;
                toProto(message: _114.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _114.QueryPoolRequest): _114.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _114.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryPoolResponse;
                fromPartial(object: Partial<_114.QueryPoolResponse>): _114.QueryPoolResponse;
                fromAmino(object: _114.QueryPoolResponseAmino): _114.QueryPoolResponse;
                toAmino(message: _114.QueryPoolResponse): _114.QueryPoolResponseAmino;
                fromAminoMsg(object: _114.QueryPoolResponseAminoMsg): _114.QueryPoolResponse;
                toAminoMsg(message: _114.QueryPoolResponse): _114.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _114.QueryPoolResponseProtoMsg): _114.QueryPoolResponse;
                toProto(message: _114.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _114.QueryPoolResponse): _114.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _114.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryParamsRequest;
                fromPartial(_: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
                fromAmino(_: _114.QueryParamsRequestAmino): _114.QueryParamsRequest;
                toAmino(_: _114.QueryParamsRequest): _114.QueryParamsRequestAmino;
                fromAminoMsg(object: _114.QueryParamsRequestAminoMsg): _114.QueryParamsRequest;
                toAminoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryParamsRequestProtoMsg): _114.QueryParamsRequest;
                toProto(message: _114.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _114.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
                fromAmino(object: _114.QueryParamsResponseAmino): _114.QueryParamsResponse;
                toAmino(message: _114.QueryParamsResponse): _114.QueryParamsResponseAmino;
                fromAminoMsg(object: _114.QueryParamsResponseAminoMsg): _114.QueryParamsResponse;
                toAminoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryParamsResponseProtoMsg): _114.QueryParamsResponse;
                toProto(message: _114.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _113.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.GenesisState;
                fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                fromAmino(object: _113.GenesisStateAmino): _113.GenesisState;
                toAmino(message: _113.GenesisState): _113.GenesisStateAmino;
                fromAminoMsg(object: _113.GenesisStateAminoMsg): _113.GenesisState;
                toAminoMsg(message: _113.GenesisState): _113.GenesisStateAminoMsg;
                fromProtoMsg(message: _113.GenesisStateProtoMsg): _113.GenesisState;
                toProto(message: _113.GenesisState): Uint8Array;
                toProtoMsg(message: _113.GenesisState): _113.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _113.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.LastValidatorPower;
                fromPartial(object: Partial<_113.LastValidatorPower>): _113.LastValidatorPower;
                fromAmino(object: _113.LastValidatorPowerAmino): _113.LastValidatorPower;
                toAmino(message: _113.LastValidatorPower): _113.LastValidatorPowerAmino;
                fromAminoMsg(object: _113.LastValidatorPowerAminoMsg): _113.LastValidatorPower;
                toAminoMsg(message: _113.LastValidatorPower): _113.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _113.LastValidatorPowerProtoMsg): _113.LastValidatorPower;
                toProto(message: _113.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _113.LastValidatorPower): _113.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _112.AuthorizationType;
            authorizationTypeToJSON(object: _112.AuthorizationType): string;
            AuthorizationType: typeof _112.AuthorizationType;
            AuthorizationTypeSDKType: typeof _112.AuthorizationType;
            AuthorizationTypeAmino: typeof _112.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _112.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.StakeAuthorization;
                fromPartial(object: Partial<_112.StakeAuthorization>): _112.StakeAuthorization;
                fromAmino(object: _112.StakeAuthorizationAmino): _112.StakeAuthorization;
                toAmino(message: _112.StakeAuthorization): _112.StakeAuthorizationAmino;
                fromAminoMsg(object: _112.StakeAuthorizationAminoMsg): _112.StakeAuthorization;
                toAminoMsg(message: _112.StakeAuthorization): _112.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _112.StakeAuthorizationProtoMsg): _112.StakeAuthorization;
                toProto(message: _112.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _112.StakeAuthorization): _112.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _112.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.StakeAuthorization_Validators;
                fromPartial(object: Partial<_112.StakeAuthorization_Validators>): _112.StakeAuthorization_Validators;
                fromAmino(object: _112.StakeAuthorization_ValidatorsAmino): _112.StakeAuthorization_Validators;
                toAmino(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _112.StakeAuthorization_ValidatorsAminoMsg): _112.StakeAuthorization_Validators;
                toAminoMsg(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _112.StakeAuthorization_ValidatorsProtoMsg): _112.StakeAuthorization_Validators;
                toProto(message: _112.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _112.StakeAuthorization_Validators): _112.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        typeUrl: string;
                        encode(message: _117.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Pairs;
                        fromPartial(object: Partial<_117.Pairs>): _117.Pairs;
                        fromAmino(object: _117.PairsAmino): _117.Pairs;
                        toAmino(message: _117.Pairs): _117.PairsAmino;
                        fromAminoMsg(object: _117.PairsAminoMsg): _117.Pairs;
                        toAminoMsg(message: _117.Pairs): _117.PairsAminoMsg;
                        fromProtoMsg(message: _117.PairsProtoMsg): _117.Pairs;
                        toProto(message: _117.Pairs): Uint8Array;
                        toProtoMsg(message: _117.Pairs): _117.PairsProtoMsg;
                    };
                    Pair: {
                        typeUrl: string;
                        encode(message: _117.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Pair;
                        fromPartial(object: Partial<_117.Pair>): _117.Pair;
                        fromAmino(object: _117.PairAmino): _117.Pair;
                        toAmino(message: _117.Pair): _117.PairAmino;
                        fromAminoMsg(object: _117.PairAminoMsg): _117.Pair;
                        toAminoMsg(message: _117.Pair): _117.PairAminoMsg;
                        fromProtoMsg(message: _117.PairProtoMsg): _117.Pair;
                        toProto(message: _117.Pair): Uint8Array;
                        toProtoMsg(message: _117.Pair): _117.PairProtoMsg;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _118.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Snapshot;
                    fromPartial(object: Partial<_118.Snapshot>): _118.Snapshot;
                    fromAmino(object: _118.SnapshotAmino): _118.Snapshot;
                    toAmino(message: _118.Snapshot): _118.SnapshotAmino;
                    fromAminoMsg(object: _118.SnapshotAminoMsg): _118.Snapshot;
                    toAminoMsg(message: _118.Snapshot): _118.SnapshotAminoMsg;
                    fromProtoMsg(message: _118.SnapshotProtoMsg): _118.Snapshot;
                    toProto(message: _118.Snapshot): Uint8Array;
                    toProtoMsg(message: _118.Snapshot): _118.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _118.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Metadata;
                    fromPartial(object: Partial<_118.Metadata>): _118.Metadata;
                    fromAmino(object: _118.MetadataAmino): _118.Metadata;
                    toAmino(message: _118.Metadata): _118.MetadataAmino;
                    fromAminoMsg(object: _118.MetadataAminoMsg): _118.Metadata;
                    toAminoMsg(message: _118.Metadata): _118.MetadataAminoMsg;
                    fromProtoMsg(message: _118.MetadataProtoMsg): _118.Metadata;
                    toProto(message: _118.Metadata): Uint8Array;
                    toProtoMsg(message: _118.Metadata): _118.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _118.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SnapshotItem;
                    fromPartial(object: Partial<_118.SnapshotItem>): _118.SnapshotItem;
                    fromAmino(object: _118.SnapshotItemAmino): _118.SnapshotItem;
                    toAmino(message: _118.SnapshotItem): _118.SnapshotItemAmino;
                    fromAminoMsg(object: _118.SnapshotItemAminoMsg): _118.SnapshotItem;
                    toAminoMsg(message: _118.SnapshotItem): _118.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _118.SnapshotItemProtoMsg): _118.SnapshotItem;
                    toProto(message: _118.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _118.SnapshotItem): _118.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _118.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SnapshotStoreItem;
                    fromPartial(object: Partial<_118.SnapshotStoreItem>): _118.SnapshotStoreItem;
                    fromAmino(object: _118.SnapshotStoreItemAmino): _118.SnapshotStoreItem;
                    toAmino(message: _118.SnapshotStoreItem): _118.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _118.SnapshotStoreItemAminoMsg): _118.SnapshotStoreItem;
                    toAminoMsg(message: _118.SnapshotStoreItem): _118.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _118.SnapshotStoreItemProtoMsg): _118.SnapshotStoreItem;
                    toProto(message: _118.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _118.SnapshotStoreItem): _118.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _118.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SnapshotIAVLItem;
                    fromPartial(object: Partial<_118.SnapshotIAVLItem>): _118.SnapshotIAVLItem;
                    fromAmino(object: _118.SnapshotIAVLItemAmino): _118.SnapshotIAVLItem;
                    toAmino(message: _118.SnapshotIAVLItem): _118.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _118.SnapshotIAVLItemAminoMsg): _118.SnapshotIAVLItem;
                    toAminoMsg(message: _118.SnapshotIAVLItem): _118.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _118.SnapshotIAVLItemProtoMsg): _118.SnapshotIAVLItem;
                    toProto(message: _118.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _118.SnapshotIAVLItem): _118.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _118.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_118.SnapshotExtensionMeta>): _118.SnapshotExtensionMeta;
                    fromAmino(object: _118.SnapshotExtensionMetaAmino): _118.SnapshotExtensionMeta;
                    toAmino(message: _118.SnapshotExtensionMeta): _118.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _118.SnapshotExtensionMetaAminoMsg): _118.SnapshotExtensionMeta;
                    toAminoMsg(message: _118.SnapshotExtensionMeta): _118.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _118.SnapshotExtensionMetaProtoMsg): _118.SnapshotExtensionMeta;
                    toProto(message: _118.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _118.SnapshotExtensionMeta): _118.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _118.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_118.SnapshotExtensionPayload>): _118.SnapshotExtensionPayload;
                    fromAmino(object: _118.SnapshotExtensionPayloadAmino): _118.SnapshotExtensionPayload;
                    toAmino(message: _118.SnapshotExtensionPayload): _118.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _118.SnapshotExtensionPayloadAminoMsg): _118.SnapshotExtensionPayload;
                    toAminoMsg(message: _118.SnapshotExtensionPayload): _118.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _118.SnapshotExtensionPayloadProtoMsg): _118.SnapshotExtensionPayload;
                    toProto(message: _118.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _118.SnapshotExtensionPayload): _118.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenFinalizeBlockRequest: {
                    typeUrl: string;
                    encode(message: _119.ListenFinalizeBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ListenFinalizeBlockRequest;
                    fromPartial(object: Partial<_119.ListenFinalizeBlockRequest>): _119.ListenFinalizeBlockRequest;
                    fromAmino(object: _119.ListenFinalizeBlockRequestAmino): _119.ListenFinalizeBlockRequest;
                    toAmino(message: _119.ListenFinalizeBlockRequest): _119.ListenFinalizeBlockRequestAmino;
                    fromAminoMsg(object: _119.ListenFinalizeBlockRequestAminoMsg): _119.ListenFinalizeBlockRequest;
                    toAminoMsg(message: _119.ListenFinalizeBlockRequest): _119.ListenFinalizeBlockRequestAminoMsg;
                    fromProtoMsg(message: _119.ListenFinalizeBlockRequestProtoMsg): _119.ListenFinalizeBlockRequest;
                    toProto(message: _119.ListenFinalizeBlockRequest): Uint8Array;
                    toProtoMsg(message: _119.ListenFinalizeBlockRequest): _119.ListenFinalizeBlockRequestProtoMsg;
                };
                ListenFinalizeBlockResponse: {
                    typeUrl: string;
                    encode(_: _119.ListenFinalizeBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ListenFinalizeBlockResponse;
                    fromPartial(_: Partial<_119.ListenFinalizeBlockResponse>): _119.ListenFinalizeBlockResponse;
                    fromAmino(_: _119.ListenFinalizeBlockResponseAmino): _119.ListenFinalizeBlockResponse;
                    toAmino(_: _119.ListenFinalizeBlockResponse): _119.ListenFinalizeBlockResponseAmino;
                    fromAminoMsg(object: _119.ListenFinalizeBlockResponseAminoMsg): _119.ListenFinalizeBlockResponse;
                    toAminoMsg(message: _119.ListenFinalizeBlockResponse): _119.ListenFinalizeBlockResponseAminoMsg;
                    fromProtoMsg(message: _119.ListenFinalizeBlockResponseProtoMsg): _119.ListenFinalizeBlockResponse;
                    toProto(message: _119.ListenFinalizeBlockResponse): Uint8Array;
                    toProtoMsg(message: _119.ListenFinalizeBlockResponse): _119.ListenFinalizeBlockResponseProtoMsg;
                };
                ListenCommitRequest: {
                    typeUrl: string;
                    encode(message: _119.ListenCommitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ListenCommitRequest;
                    fromPartial(object: Partial<_119.ListenCommitRequest>): _119.ListenCommitRequest;
                    fromAmino(object: _119.ListenCommitRequestAmino): _119.ListenCommitRequest;
                    toAmino(message: _119.ListenCommitRequest): _119.ListenCommitRequestAmino;
                    fromAminoMsg(object: _119.ListenCommitRequestAminoMsg): _119.ListenCommitRequest;
                    toAminoMsg(message: _119.ListenCommitRequest): _119.ListenCommitRequestAminoMsg;
                    fromProtoMsg(message: _119.ListenCommitRequestProtoMsg): _119.ListenCommitRequest;
                    toProto(message: _119.ListenCommitRequest): Uint8Array;
                    toProtoMsg(message: _119.ListenCommitRequest): _119.ListenCommitRequestProtoMsg;
                };
                ListenCommitResponse: {
                    typeUrl: string;
                    encode(_: _119.ListenCommitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ListenCommitResponse;
                    fromPartial(_: Partial<_119.ListenCommitResponse>): _119.ListenCommitResponse;
                    fromAmino(_: _119.ListenCommitResponseAmino): _119.ListenCommitResponse;
                    toAmino(_: _119.ListenCommitResponse): _119.ListenCommitResponseAmino;
                    fromAminoMsg(object: _119.ListenCommitResponseAminoMsg): _119.ListenCommitResponse;
                    toAminoMsg(message: _119.ListenCommitResponse): _119.ListenCommitResponseAminoMsg;
                    fromProtoMsg(message: _119.ListenCommitResponseProtoMsg): _119.ListenCommitResponse;
                    toProto(message: _119.ListenCommitResponse): Uint8Array;
                    toProtoMsg(message: _119.ListenCommitResponse): _119.ListenCommitResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                typeUrl: string;
                encode(message: _121.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.StoreKVPair;
                fromPartial(object: Partial<_121.StoreKVPair>): _121.StoreKVPair;
                fromAmino(object: _121.StoreKVPairAmino): _121.StoreKVPair;
                toAmino(message: _121.StoreKVPair): _121.StoreKVPairAmino;
                fromAminoMsg(object: _121.StoreKVPairAminoMsg): _121.StoreKVPair;
                toAminoMsg(message: _121.StoreKVPair): _121.StoreKVPairAminoMsg;
                fromProtoMsg(message: _121.StoreKVPairProtoMsg): _121.StoreKVPair;
                toProto(message: _121.StoreKVPair): Uint8Array;
                toProtoMsg(message: _121.StoreKVPair): _121.StoreKVPairProtoMsg;
            };
            BlockMetadata: {
                typeUrl: string;
                encode(message: _121.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.BlockMetadata;
                fromPartial(object: Partial<_121.BlockMetadata>): _121.BlockMetadata;
                fromAmino(object: _121.BlockMetadataAmino): _121.BlockMetadata;
                toAmino(message: _121.BlockMetadata): _121.BlockMetadataAmino;
                fromAminoMsg(object: _121.BlockMetadataAminoMsg): _121.BlockMetadata;
                toAminoMsg(message: _121.BlockMetadata): _121.BlockMetadataAminoMsg;
                fromProtoMsg(message: _121.BlockMetadataProtoMsg): _121.BlockMetadata;
                toProto(message: _121.BlockMetadata): Uint8Array;
                toProtoMsg(message: _121.BlockMetadata): _121.BlockMetadataProtoMsg;
            };
            CommitInfo: {
                typeUrl: string;
                encode(message: _120.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.CommitInfo;
                fromPartial(object: Partial<_120.CommitInfo>): _120.CommitInfo;
                fromAmino(object: _120.CommitInfoAmino): _120.CommitInfo;
                toAmino(message: _120.CommitInfo): _120.CommitInfoAmino;
                fromAminoMsg(object: _120.CommitInfoAminoMsg): _120.CommitInfo;
                toAminoMsg(message: _120.CommitInfo): _120.CommitInfoAminoMsg;
                fromProtoMsg(message: _120.CommitInfoProtoMsg): _120.CommitInfo;
                toProto(message: _120.CommitInfo): Uint8Array;
                toProtoMsg(message: _120.CommitInfo): _120.CommitInfoProtoMsg;
            };
            StoreInfo: {
                typeUrl: string;
                encode(message: _120.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.StoreInfo;
                fromPartial(object: Partial<_120.StoreInfo>): _120.StoreInfo;
                fromAmino(object: _120.StoreInfoAmino): _120.StoreInfo;
                toAmino(message: _120.StoreInfo): _120.StoreInfoAmino;
                fromAminoMsg(object: _120.StoreInfoAminoMsg): _120.StoreInfo;
                toAminoMsg(message: _120.StoreInfo): _120.StoreInfoAminoMsg;
                fromProtoMsg(message: _120.StoreInfoProtoMsg): _120.StoreInfo;
                toProto(message: _120.StoreInfo): Uint8Array;
                toProtoMsg(message: _120.StoreInfo): _120.StoreInfoProtoMsg;
            };
            CommitID: {
                typeUrl: string;
                encode(message: _120.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.CommitID;
                fromPartial(object: Partial<_120.CommitID>): _120.CommitID;
                fromAmino(object: _120.CommitIDAmino): _120.CommitID;
                toAmino(message: _120.CommitID): _120.CommitIDAmino;
                fromAminoMsg(object: _120.CommitIDAminoMsg): _120.CommitID;
                toAminoMsg(message: _120.CommitID): _120.CommitIDAminoMsg;
                fromProtoMsg(message: _120.CommitIDProtoMsg): _120.CommitID;
                toProto(message: _120.CommitID): Uint8Array;
                toProtoMsg(message: _120.CommitID): _120.CommitIDProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _122.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Config;
                    fromPartial(object: Partial<_122.Config>): _122.Config;
                    fromAmino(object: _122.ConfigAmino): _122.Config;
                    toAmino(message: _122.Config): _122.ConfigAmino;
                    fromAminoMsg(object: _122.ConfigAminoMsg): _122.Config;
                    toAminoMsg(message: _122.Config): _122.ConfigAminoMsg;
                    fromProtoMsg(message: _122.ConfigProtoMsg): _122.Config;
                    toProto(message: _122.Config): Uint8Array;
                    toProtoMsg(message: _122.Config): _122.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _123.SignMode;
                signModeToJSON(object: _123.SignMode): string;
                SignMode: typeof _123.SignMode;
                SignModeSDKType: typeof _123.SignMode;
                SignModeAmino: typeof _123.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _123.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SignatureDescriptors;
                    fromPartial(object: Partial<_123.SignatureDescriptors>): _123.SignatureDescriptors;
                    fromAmino(object: _123.SignatureDescriptorsAmino): _123.SignatureDescriptors;
                    toAmino(message: _123.SignatureDescriptors): _123.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _123.SignatureDescriptorsAminoMsg): _123.SignatureDescriptors;
                    toAminoMsg(message: _123.SignatureDescriptors): _123.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _123.SignatureDescriptorsProtoMsg): _123.SignatureDescriptors;
                    toProto(message: _123.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _123.SignatureDescriptors): _123.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _123.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SignatureDescriptor;
                    fromPartial(object: Partial<_123.SignatureDescriptor>): _123.SignatureDescriptor;
                    fromAmino(object: _123.SignatureDescriptorAmino): _123.SignatureDescriptor;
                    toAmino(message: _123.SignatureDescriptor): _123.SignatureDescriptorAmino;
                    fromAminoMsg(object: _123.SignatureDescriptorAminoMsg): _123.SignatureDescriptor;
                    toAminoMsg(message: _123.SignatureDescriptor): _123.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _123.SignatureDescriptorProtoMsg): _123.SignatureDescriptor;
                    toProto(message: _123.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _123.SignatureDescriptor): _123.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _123.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_123.SignatureDescriptor_Data>): _123.SignatureDescriptor_Data;
                    fromAmino(object: _123.SignatureDescriptor_DataAmino): _123.SignatureDescriptor_Data;
                    toAmino(message: _123.SignatureDescriptor_Data): _123.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _123.SignatureDescriptor_DataAminoMsg): _123.SignatureDescriptor_Data;
                    toAminoMsg(message: _123.SignatureDescriptor_Data): _123.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _123.SignatureDescriptor_DataProtoMsg): _123.SignatureDescriptor_Data;
                    toProto(message: _123.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _123.SignatureDescriptor_Data): _123.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _123.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_123.SignatureDescriptor_Data_Single>): _123.SignatureDescriptor_Data_Single;
                    fromAmino(object: _123.SignatureDescriptor_Data_SingleAmino): _123.SignatureDescriptor_Data_Single;
                    toAmino(message: _123.SignatureDescriptor_Data_Single): _123.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _123.SignatureDescriptor_Data_SingleAminoMsg): _123.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _123.SignatureDescriptor_Data_Single): _123.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _123.SignatureDescriptor_Data_SingleProtoMsg): _123.SignatureDescriptor_Data_Single;
                    toProto(message: _123.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _123.SignatureDescriptor_Data_Single): _123.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _123.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_123.SignatureDescriptor_Data_Multi>): _123.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _123.SignatureDescriptor_Data_MultiAmino): _123.SignatureDescriptor_Data_Multi;
                    toAmino(message: _123.SignatureDescriptor_Data_Multi): _123.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _123.SignatureDescriptor_Data_MultiAminoMsg): _123.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _123.SignatureDescriptor_Data_Multi): _123.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _123.SignatureDescriptor_Data_MultiProtoMsg): _123.SignatureDescriptor_Data_Multi;
                    toProto(message: _123.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _123.SignatureDescriptor_Data_Multi): _123.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _285.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _124.SimulateRequest): Promise<_124.SimulateResponse>;
                getTx(request: _124.GetTxRequest): Promise<_124.GetTxResponse>;
                broadcastTx(request: _124.BroadcastTxRequest): Promise<_124.BroadcastTxResponse>;
                getTxsEvent(request: _124.GetTxsEventRequest): Promise<_124.GetTxsEventResponse>;
                getBlockWithTxs(request: _124.GetBlockWithTxsRequest): Promise<_124.GetBlockWithTxsResponse>;
                txDecode(request: _124.TxDecodeRequest): Promise<_124.TxDecodeResponse>;
                txEncode(request: _124.TxEncodeRequest): Promise<_124.TxEncodeResponse>;
                txEncodeAmino(request: _124.TxEncodeAminoRequest): Promise<_124.TxEncodeAminoResponse>;
                txDecodeAmino(request: _124.TxDecodeAminoRequest): Promise<_124.TxDecodeAminoResponse>;
            };
            Tx: {
                typeUrl: string;
                encode(message: _125.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Tx;
                fromPartial(object: Partial<_125.Tx>): _125.Tx;
                fromAmino(object: _125.TxAmino): _125.Tx;
                toAmino(message: _125.Tx): _125.TxAmino;
                fromAminoMsg(object: _125.TxAminoMsg): _125.Tx;
                toAminoMsg(message: _125.Tx): _125.TxAminoMsg;
                fromProtoMsg(message: _125.TxProtoMsg): _125.Tx;
                toProto(message: _125.Tx): Uint8Array;
                toProtoMsg(message: _125.Tx): _125.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _125.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.TxRaw;
                fromPartial(object: Partial<_125.TxRaw>): _125.TxRaw;
                fromAmino(object: _125.TxRawAmino): _125.TxRaw;
                toAmino(message: _125.TxRaw): _125.TxRawAmino;
                fromAminoMsg(object: _125.TxRawAminoMsg): _125.TxRaw;
                toAminoMsg(message: _125.TxRaw): _125.TxRawAminoMsg;
                fromProtoMsg(message: _125.TxRawProtoMsg): _125.TxRaw;
                toProto(message: _125.TxRaw): Uint8Array;
                toProtoMsg(message: _125.TxRaw): _125.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _125.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.SignDoc;
                fromPartial(object: Partial<_125.SignDoc>): _125.SignDoc;
                fromAmino(object: _125.SignDocAmino): _125.SignDoc;
                toAmino(message: _125.SignDoc): _125.SignDocAmino;
                fromAminoMsg(object: _125.SignDocAminoMsg): _125.SignDoc;
                toAminoMsg(message: _125.SignDoc): _125.SignDocAminoMsg;
                fromProtoMsg(message: _125.SignDocProtoMsg): _125.SignDoc;
                toProto(message: _125.SignDoc): Uint8Array;
                toProtoMsg(message: _125.SignDoc): _125.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _125.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.SignDocDirectAux;
                fromPartial(object: Partial<_125.SignDocDirectAux>): _125.SignDocDirectAux;
                fromAmino(object: _125.SignDocDirectAuxAmino): _125.SignDocDirectAux;
                toAmino(message: _125.SignDocDirectAux): _125.SignDocDirectAuxAmino;
                fromAminoMsg(object: _125.SignDocDirectAuxAminoMsg): _125.SignDocDirectAux;
                toAminoMsg(message: _125.SignDocDirectAux): _125.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _125.SignDocDirectAuxProtoMsg): _125.SignDocDirectAux;
                toProto(message: _125.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _125.SignDocDirectAux): _125.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _125.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.TxBody;
                fromPartial(object: Partial<_125.TxBody>): _125.TxBody;
                fromAmino(object: _125.TxBodyAmino): _125.TxBody;
                toAmino(message: _125.TxBody): _125.TxBodyAmino;
                fromAminoMsg(object: _125.TxBodyAminoMsg): _125.TxBody;
                toAminoMsg(message: _125.TxBody): _125.TxBodyAminoMsg;
                fromProtoMsg(message: _125.TxBodyProtoMsg): _125.TxBody;
                toProto(message: _125.TxBody): Uint8Array;
                toProtoMsg(message: _125.TxBody): _125.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _125.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.AuthInfo;
                fromPartial(object: Partial<_125.AuthInfo>): _125.AuthInfo;
                fromAmino(object: _125.AuthInfoAmino): _125.AuthInfo;
                toAmino(message: _125.AuthInfo): _125.AuthInfoAmino;
                fromAminoMsg(object: _125.AuthInfoAminoMsg): _125.AuthInfo;
                toAminoMsg(message: _125.AuthInfo): _125.AuthInfoAminoMsg;
                fromProtoMsg(message: _125.AuthInfoProtoMsg): _125.AuthInfo;
                toProto(message: _125.AuthInfo): Uint8Array;
                toProtoMsg(message: _125.AuthInfo): _125.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _125.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.SignerInfo;
                fromPartial(object: Partial<_125.SignerInfo>): _125.SignerInfo;
                fromAmino(object: _125.SignerInfoAmino): _125.SignerInfo;
                toAmino(message: _125.SignerInfo): _125.SignerInfoAmino;
                fromAminoMsg(object: _125.SignerInfoAminoMsg): _125.SignerInfo;
                toAminoMsg(message: _125.SignerInfo): _125.SignerInfoAminoMsg;
                fromProtoMsg(message: _125.SignerInfoProtoMsg): _125.SignerInfo;
                toProto(message: _125.SignerInfo): Uint8Array;
                toProtoMsg(message: _125.SignerInfo): _125.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _125.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.ModeInfo;
                fromPartial(object: Partial<_125.ModeInfo>): _125.ModeInfo;
                fromAmino(object: _125.ModeInfoAmino): _125.ModeInfo;
                toAmino(message: _125.ModeInfo): _125.ModeInfoAmino;
                fromAminoMsg(object: _125.ModeInfoAminoMsg): _125.ModeInfo;
                toAminoMsg(message: _125.ModeInfo): _125.ModeInfoAminoMsg;
                fromProtoMsg(message: _125.ModeInfoProtoMsg): _125.ModeInfo;
                toProto(message: _125.ModeInfo): Uint8Array;
                toProtoMsg(message: _125.ModeInfo): _125.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _125.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.ModeInfo_Single;
                fromPartial(object: Partial<_125.ModeInfo_Single>): _125.ModeInfo_Single;
                fromAmino(object: _125.ModeInfo_SingleAmino): _125.ModeInfo_Single;
                toAmino(message: _125.ModeInfo_Single): _125.ModeInfo_SingleAmino;
                fromAminoMsg(object: _125.ModeInfo_SingleAminoMsg): _125.ModeInfo_Single;
                toAminoMsg(message: _125.ModeInfo_Single): _125.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _125.ModeInfo_SingleProtoMsg): _125.ModeInfo_Single;
                toProto(message: _125.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _125.ModeInfo_Single): _125.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _125.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.ModeInfo_Multi;
                fromPartial(object: Partial<_125.ModeInfo_Multi>): _125.ModeInfo_Multi;
                fromAmino(object: _125.ModeInfo_MultiAmino): _125.ModeInfo_Multi;
                toAmino(message: _125.ModeInfo_Multi): _125.ModeInfo_MultiAmino;
                fromAminoMsg(object: _125.ModeInfo_MultiAminoMsg): _125.ModeInfo_Multi;
                toAminoMsg(message: _125.ModeInfo_Multi): _125.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _125.ModeInfo_MultiProtoMsg): _125.ModeInfo_Multi;
                toProto(message: _125.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _125.ModeInfo_Multi): _125.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _125.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Fee;
                fromPartial(object: Partial<_125.Fee>): _125.Fee;
                fromAmino(object: _125.FeeAmino): _125.Fee;
                toAmino(message: _125.Fee): _125.FeeAmino;
                fromAminoMsg(object: _125.FeeAminoMsg): _125.Fee;
                toAminoMsg(message: _125.Fee): _125.FeeAminoMsg;
                fromProtoMsg(message: _125.FeeProtoMsg): _125.Fee;
                toProto(message: _125.Fee): Uint8Array;
                toProtoMsg(message: _125.Fee): _125.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _125.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.Tip;
                fromPartial(object: Partial<_125.Tip>): _125.Tip;
                fromAmino(object: _125.TipAmino): _125.Tip;
                toAmino(message: _125.Tip): _125.TipAmino;
                fromAminoMsg(object: _125.TipAminoMsg): _125.Tip;
                toAminoMsg(message: _125.Tip): _125.TipAminoMsg;
                fromProtoMsg(message: _125.TipProtoMsg): _125.Tip;
                toProto(message: _125.Tip): Uint8Array;
                toProtoMsg(message: _125.Tip): _125.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _125.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.AuxSignerData;
                fromPartial(object: Partial<_125.AuxSignerData>): _125.AuxSignerData;
                fromAmino(object: _125.AuxSignerDataAmino): _125.AuxSignerData;
                toAmino(message: _125.AuxSignerData): _125.AuxSignerDataAmino;
                fromAminoMsg(object: _125.AuxSignerDataAminoMsg): _125.AuxSignerData;
                toAminoMsg(message: _125.AuxSignerData): _125.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _125.AuxSignerDataProtoMsg): _125.AuxSignerData;
                toProto(message: _125.AuxSignerData): Uint8Array;
                toProtoMsg(message: _125.AuxSignerData): _125.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _124.OrderBy;
            orderByToJSON(object: _124.OrderBy): string;
            broadcastModeFromJSON(object: any): _124.BroadcastMode;
            broadcastModeToJSON(object: _124.BroadcastMode): string;
            OrderBy: typeof _124.OrderBy;
            OrderBySDKType: typeof _124.OrderBy;
            OrderByAmino: typeof _124.OrderBy;
            BroadcastMode: typeof _124.BroadcastMode;
            BroadcastModeSDKType: typeof _124.BroadcastMode;
            BroadcastModeAmino: typeof _124.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _124.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetTxsEventRequest;
                fromPartial(object: Partial<_124.GetTxsEventRequest>): _124.GetTxsEventRequest;
                fromAmino(object: _124.GetTxsEventRequestAmino): _124.GetTxsEventRequest;
                toAmino(message: _124.GetTxsEventRequest): _124.GetTxsEventRequestAmino;
                fromAminoMsg(object: _124.GetTxsEventRequestAminoMsg): _124.GetTxsEventRequest;
                toAminoMsg(message: _124.GetTxsEventRequest): _124.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _124.GetTxsEventRequestProtoMsg): _124.GetTxsEventRequest;
                toProto(message: _124.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _124.GetTxsEventRequest): _124.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _124.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetTxsEventResponse;
                fromPartial(object: Partial<_124.GetTxsEventResponse>): _124.GetTxsEventResponse;
                fromAmino(object: _124.GetTxsEventResponseAmino): _124.GetTxsEventResponse;
                toAmino(message: _124.GetTxsEventResponse): _124.GetTxsEventResponseAmino;
                fromAminoMsg(object: _124.GetTxsEventResponseAminoMsg): _124.GetTxsEventResponse;
                toAminoMsg(message: _124.GetTxsEventResponse): _124.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _124.GetTxsEventResponseProtoMsg): _124.GetTxsEventResponse;
                toProto(message: _124.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _124.GetTxsEventResponse): _124.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _124.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.BroadcastTxRequest;
                fromPartial(object: Partial<_124.BroadcastTxRequest>): _124.BroadcastTxRequest;
                fromAmino(object: _124.BroadcastTxRequestAmino): _124.BroadcastTxRequest;
                toAmino(message: _124.BroadcastTxRequest): _124.BroadcastTxRequestAmino;
                fromAminoMsg(object: _124.BroadcastTxRequestAminoMsg): _124.BroadcastTxRequest;
                toAminoMsg(message: _124.BroadcastTxRequest): _124.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _124.BroadcastTxRequestProtoMsg): _124.BroadcastTxRequest;
                toProto(message: _124.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _124.BroadcastTxRequest): _124.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _124.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.BroadcastTxResponse;
                fromPartial(object: Partial<_124.BroadcastTxResponse>): _124.BroadcastTxResponse;
                fromAmino(object: _124.BroadcastTxResponseAmino): _124.BroadcastTxResponse;
                toAmino(message: _124.BroadcastTxResponse): _124.BroadcastTxResponseAmino;
                fromAminoMsg(object: _124.BroadcastTxResponseAminoMsg): _124.BroadcastTxResponse;
                toAminoMsg(message: _124.BroadcastTxResponse): _124.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _124.BroadcastTxResponseProtoMsg): _124.BroadcastTxResponse;
                toProto(message: _124.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _124.BroadcastTxResponse): _124.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _124.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.SimulateRequest;
                fromPartial(object: Partial<_124.SimulateRequest>): _124.SimulateRequest;
                fromAmino(object: _124.SimulateRequestAmino): _124.SimulateRequest;
                toAmino(message: _124.SimulateRequest): _124.SimulateRequestAmino;
                fromAminoMsg(object: _124.SimulateRequestAminoMsg): _124.SimulateRequest;
                toAminoMsg(message: _124.SimulateRequest): _124.SimulateRequestAminoMsg;
                fromProtoMsg(message: _124.SimulateRequestProtoMsg): _124.SimulateRequest;
                toProto(message: _124.SimulateRequest): Uint8Array;
                toProtoMsg(message: _124.SimulateRequest): _124.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _124.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.SimulateResponse;
                fromPartial(object: Partial<_124.SimulateResponse>): _124.SimulateResponse;
                fromAmino(object: _124.SimulateResponseAmino): _124.SimulateResponse;
                toAmino(message: _124.SimulateResponse): _124.SimulateResponseAmino;
                fromAminoMsg(object: _124.SimulateResponseAminoMsg): _124.SimulateResponse;
                toAminoMsg(message: _124.SimulateResponse): _124.SimulateResponseAminoMsg;
                fromProtoMsg(message: _124.SimulateResponseProtoMsg): _124.SimulateResponse;
                toProto(message: _124.SimulateResponse): Uint8Array;
                toProtoMsg(message: _124.SimulateResponse): _124.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _124.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetTxRequest;
                fromPartial(object: Partial<_124.GetTxRequest>): _124.GetTxRequest;
                fromAmino(object: _124.GetTxRequestAmino): _124.GetTxRequest;
                toAmino(message: _124.GetTxRequest): _124.GetTxRequestAmino;
                fromAminoMsg(object: _124.GetTxRequestAminoMsg): _124.GetTxRequest;
                toAminoMsg(message: _124.GetTxRequest): _124.GetTxRequestAminoMsg;
                fromProtoMsg(message: _124.GetTxRequestProtoMsg): _124.GetTxRequest;
                toProto(message: _124.GetTxRequest): Uint8Array;
                toProtoMsg(message: _124.GetTxRequest): _124.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _124.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetTxResponse;
                fromPartial(object: Partial<_124.GetTxResponse>): _124.GetTxResponse;
                fromAmino(object: _124.GetTxResponseAmino): _124.GetTxResponse;
                toAmino(message: _124.GetTxResponse): _124.GetTxResponseAmino;
                fromAminoMsg(object: _124.GetTxResponseAminoMsg): _124.GetTxResponse;
                toAminoMsg(message: _124.GetTxResponse): _124.GetTxResponseAminoMsg;
                fromProtoMsg(message: _124.GetTxResponseProtoMsg): _124.GetTxResponse;
                toProto(message: _124.GetTxResponse): Uint8Array;
                toProtoMsg(message: _124.GetTxResponse): _124.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _124.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_124.GetBlockWithTxsRequest>): _124.GetBlockWithTxsRequest;
                fromAmino(object: _124.GetBlockWithTxsRequestAmino): _124.GetBlockWithTxsRequest;
                toAmino(message: _124.GetBlockWithTxsRequest): _124.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _124.GetBlockWithTxsRequestAminoMsg): _124.GetBlockWithTxsRequest;
                toAminoMsg(message: _124.GetBlockWithTxsRequest): _124.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _124.GetBlockWithTxsRequestProtoMsg): _124.GetBlockWithTxsRequest;
                toProto(message: _124.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _124.GetBlockWithTxsRequest): _124.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _124.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_124.GetBlockWithTxsResponse>): _124.GetBlockWithTxsResponse;
                fromAmino(object: _124.GetBlockWithTxsResponseAmino): _124.GetBlockWithTxsResponse;
                toAmino(message: _124.GetBlockWithTxsResponse): _124.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _124.GetBlockWithTxsResponseAminoMsg): _124.GetBlockWithTxsResponse;
                toAminoMsg(message: _124.GetBlockWithTxsResponse): _124.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _124.GetBlockWithTxsResponseProtoMsg): _124.GetBlockWithTxsResponse;
                toProto(message: _124.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _124.GetBlockWithTxsResponse): _124.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _124.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxDecodeRequest;
                fromPartial(object: Partial<_124.TxDecodeRequest>): _124.TxDecodeRequest;
                fromAmino(object: _124.TxDecodeRequestAmino): _124.TxDecodeRequest;
                toAmino(message: _124.TxDecodeRequest): _124.TxDecodeRequestAmino;
                fromAminoMsg(object: _124.TxDecodeRequestAminoMsg): _124.TxDecodeRequest;
                toAminoMsg(message: _124.TxDecodeRequest): _124.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _124.TxDecodeRequestProtoMsg): _124.TxDecodeRequest;
                toProto(message: _124.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _124.TxDecodeRequest): _124.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _124.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxDecodeResponse;
                fromPartial(object: Partial<_124.TxDecodeResponse>): _124.TxDecodeResponse;
                fromAmino(object: _124.TxDecodeResponseAmino): _124.TxDecodeResponse;
                toAmino(message: _124.TxDecodeResponse): _124.TxDecodeResponseAmino;
                fromAminoMsg(object: _124.TxDecodeResponseAminoMsg): _124.TxDecodeResponse;
                toAminoMsg(message: _124.TxDecodeResponse): _124.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _124.TxDecodeResponseProtoMsg): _124.TxDecodeResponse;
                toProto(message: _124.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _124.TxDecodeResponse): _124.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _124.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxEncodeRequest;
                fromPartial(object: Partial<_124.TxEncodeRequest>): _124.TxEncodeRequest;
                fromAmino(object: _124.TxEncodeRequestAmino): _124.TxEncodeRequest;
                toAmino(message: _124.TxEncodeRequest): _124.TxEncodeRequestAmino;
                fromAminoMsg(object: _124.TxEncodeRequestAminoMsg): _124.TxEncodeRequest;
                toAminoMsg(message: _124.TxEncodeRequest): _124.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _124.TxEncodeRequestProtoMsg): _124.TxEncodeRequest;
                toProto(message: _124.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _124.TxEncodeRequest): _124.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _124.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxEncodeResponse;
                fromPartial(object: Partial<_124.TxEncodeResponse>): _124.TxEncodeResponse;
                fromAmino(object: _124.TxEncodeResponseAmino): _124.TxEncodeResponse;
                toAmino(message: _124.TxEncodeResponse): _124.TxEncodeResponseAmino;
                fromAminoMsg(object: _124.TxEncodeResponseAminoMsg): _124.TxEncodeResponse;
                toAminoMsg(message: _124.TxEncodeResponse): _124.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _124.TxEncodeResponseProtoMsg): _124.TxEncodeResponse;
                toProto(message: _124.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _124.TxEncodeResponse): _124.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _124.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxEncodeAminoRequest;
                fromPartial(object: Partial<_124.TxEncodeAminoRequest>): _124.TxEncodeAminoRequest;
                fromAmino(object: _124.TxEncodeAminoRequestAmino): _124.TxEncodeAminoRequest;
                toAmino(message: _124.TxEncodeAminoRequest): _124.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _124.TxEncodeAminoRequestAminoMsg): _124.TxEncodeAminoRequest;
                toAminoMsg(message: _124.TxEncodeAminoRequest): _124.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _124.TxEncodeAminoRequestProtoMsg): _124.TxEncodeAminoRequest;
                toProto(message: _124.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _124.TxEncodeAminoRequest): _124.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _124.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxEncodeAminoResponse;
                fromPartial(object: Partial<_124.TxEncodeAminoResponse>): _124.TxEncodeAminoResponse;
                fromAmino(object: _124.TxEncodeAminoResponseAmino): _124.TxEncodeAminoResponse;
                toAmino(message: _124.TxEncodeAminoResponse): _124.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _124.TxEncodeAminoResponseAminoMsg): _124.TxEncodeAminoResponse;
                toAminoMsg(message: _124.TxEncodeAminoResponse): _124.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _124.TxEncodeAminoResponseProtoMsg): _124.TxEncodeAminoResponse;
                toProto(message: _124.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _124.TxEncodeAminoResponse): _124.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _124.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxDecodeAminoRequest;
                fromPartial(object: Partial<_124.TxDecodeAminoRequest>): _124.TxDecodeAminoRequest;
                fromAmino(object: _124.TxDecodeAminoRequestAmino): _124.TxDecodeAminoRequest;
                toAmino(message: _124.TxDecodeAminoRequest): _124.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _124.TxDecodeAminoRequestAminoMsg): _124.TxDecodeAminoRequest;
                toAminoMsg(message: _124.TxDecodeAminoRequest): _124.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _124.TxDecodeAminoRequestProtoMsg): _124.TxDecodeAminoRequest;
                toProto(message: _124.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _124.TxDecodeAminoRequest): _124.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _124.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TxDecodeAminoResponse;
                fromPartial(object: Partial<_124.TxDecodeAminoResponse>): _124.TxDecodeAminoResponse;
                fromAmino(object: _124.TxDecodeAminoResponseAmino): _124.TxDecodeAminoResponse;
                toAmino(message: _124.TxDecodeAminoResponse): _124.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _124.TxDecodeAminoResponseAminoMsg): _124.TxDecodeAminoResponse;
                toAminoMsg(message: _124.TxDecodeAminoResponse): _124.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _124.TxDecodeAminoResponseProtoMsg): _124.TxDecodeAminoResponse;
                toProto(message: _124.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _124.TxDecodeAminoResponse): _124.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _126.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.Module;
                    fromPartial(object: Partial<_126.Module>): _126.Module;
                    fromAmino(object: _126.ModuleAmino): _126.Module;
                    toAmino(message: _126.Module): _126.ModuleAmino;
                    fromAminoMsg(object: _126.ModuleAminoMsg): _126.Module;
                    toAminoMsg(message: _126.Module): _126.ModuleAminoMsg;
                    fromProtoMsg(message: _126.ModuleProtoMsg): _126.Module;
                    toProto(message: _126.Module): Uint8Array;
                    toProtoMsg(message: _126.Module): _126.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _127.QueryCurrentPlanRequest): Promise<_127.QueryCurrentPlanResponse>;
                appliedPlan(request: _127.QueryAppliedPlanRequest): Promise<_127.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _127.QueryUpgradedConsensusStateRequest): Promise<_127.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _127.QueryModuleVersionsRequest): Promise<_127.QueryModuleVersionsResponse>;
                authority(request?: _127.QueryAuthorityRequest): Promise<_127.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _128.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _128.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _128.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _128.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _128.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _128.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _128.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _128.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _128.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _128.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _128.MsgSoftwareUpgrade) => _128.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _128.MsgSoftwareUpgradeAmino) => _128.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _128.MsgCancelUpgrade) => _128.MsgCancelUpgradeAmino;
                    fromAmino: (object: _128.MsgCancelUpgradeAmino) => _128.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _129.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Plan;
                fromPartial(object: Partial<_129.Plan>): _129.Plan;
                fromAmino(object: _129.PlanAmino): _129.Plan;
                toAmino(message: _129.Plan): _129.PlanAmino;
                fromAminoMsg(object: _129.PlanAminoMsg): _129.Plan;
                toAminoMsg(message: _129.Plan): _129.PlanAminoMsg;
                fromProtoMsg(message: _129.PlanProtoMsg): _129.Plan;
                toProto(message: _129.Plan): Uint8Array;
                toProtoMsg(message: _129.Plan): _129.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _129.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_129.SoftwareUpgradeProposal>): _129.SoftwareUpgradeProposal;
                fromAmino(object: _129.SoftwareUpgradeProposalAmino): _129.SoftwareUpgradeProposal;
                toAmino(message: _129.SoftwareUpgradeProposal): _129.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _129.SoftwareUpgradeProposalAminoMsg): _129.SoftwareUpgradeProposal;
                toAminoMsg(message: _129.SoftwareUpgradeProposal): _129.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _129.SoftwareUpgradeProposalProtoMsg): _129.SoftwareUpgradeProposal;
                toProto(message: _129.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _129.SoftwareUpgradeProposal): _129.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _129.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_129.CancelSoftwareUpgradeProposal>): _129.CancelSoftwareUpgradeProposal;
                fromAmino(object: _129.CancelSoftwareUpgradeProposalAmino): _129.CancelSoftwareUpgradeProposal;
                toAmino(message: _129.CancelSoftwareUpgradeProposal): _129.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _129.CancelSoftwareUpgradeProposalAminoMsg): _129.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _129.CancelSoftwareUpgradeProposal): _129.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _129.CancelSoftwareUpgradeProposalProtoMsg): _129.CancelSoftwareUpgradeProposal;
                toProto(message: _129.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _129.CancelSoftwareUpgradeProposal): _129.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _129.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ModuleVersion;
                fromPartial(object: Partial<_129.ModuleVersion>): _129.ModuleVersion;
                fromAmino(object: _129.ModuleVersionAmino): _129.ModuleVersion;
                toAmino(message: _129.ModuleVersion): _129.ModuleVersionAmino;
                fromAminoMsg(object: _129.ModuleVersionAminoMsg): _129.ModuleVersion;
                toAminoMsg(message: _129.ModuleVersion): _129.ModuleVersionAminoMsg;
                fromProtoMsg(message: _129.ModuleVersionProtoMsg): _129.ModuleVersion;
                toProto(message: _129.ModuleVersion): Uint8Array;
                toProtoMsg(message: _129.ModuleVersion): _129.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _128.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_128.MsgSoftwareUpgrade>): _128.MsgSoftwareUpgrade;
                fromAmino(object: _128.MsgSoftwareUpgradeAmino): _128.MsgSoftwareUpgrade;
                toAmino(message: _128.MsgSoftwareUpgrade): _128.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _128.MsgSoftwareUpgradeAminoMsg): _128.MsgSoftwareUpgrade;
                toAminoMsg(message: _128.MsgSoftwareUpgrade): _128.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _128.MsgSoftwareUpgradeProtoMsg): _128.MsgSoftwareUpgrade;
                toProto(message: _128.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _128.MsgSoftwareUpgrade): _128.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _128.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_128.MsgSoftwareUpgradeResponse>): _128.MsgSoftwareUpgradeResponse;
                fromAmino(_: _128.MsgSoftwareUpgradeResponseAmino): _128.MsgSoftwareUpgradeResponse;
                toAmino(_: _128.MsgSoftwareUpgradeResponse): _128.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _128.MsgSoftwareUpgradeResponseAminoMsg): _128.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _128.MsgSoftwareUpgradeResponse): _128.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _128.MsgSoftwareUpgradeResponseProtoMsg): _128.MsgSoftwareUpgradeResponse;
                toProto(message: _128.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _128.MsgSoftwareUpgradeResponse): _128.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _128.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgCancelUpgrade;
                fromPartial(object: Partial<_128.MsgCancelUpgrade>): _128.MsgCancelUpgrade;
                fromAmino(object: _128.MsgCancelUpgradeAmino): _128.MsgCancelUpgrade;
                toAmino(message: _128.MsgCancelUpgrade): _128.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _128.MsgCancelUpgradeAminoMsg): _128.MsgCancelUpgrade;
                toAminoMsg(message: _128.MsgCancelUpgrade): _128.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _128.MsgCancelUpgradeProtoMsg): _128.MsgCancelUpgrade;
                toProto(message: _128.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _128.MsgCancelUpgrade): _128.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _128.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_128.MsgCancelUpgradeResponse>): _128.MsgCancelUpgradeResponse;
                fromAmino(_: _128.MsgCancelUpgradeResponseAmino): _128.MsgCancelUpgradeResponse;
                toAmino(_: _128.MsgCancelUpgradeResponse): _128.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _128.MsgCancelUpgradeResponseAminoMsg): _128.MsgCancelUpgradeResponse;
                toAminoMsg(message: _128.MsgCancelUpgradeResponse): _128.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _128.MsgCancelUpgradeResponseProtoMsg): _128.MsgCancelUpgradeResponse;
                toProto(message: _128.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _128.MsgCancelUpgradeResponse): _128.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _127.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_127.QueryCurrentPlanRequest>): _127.QueryCurrentPlanRequest;
                fromAmino(_: _127.QueryCurrentPlanRequestAmino): _127.QueryCurrentPlanRequest;
                toAmino(_: _127.QueryCurrentPlanRequest): _127.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _127.QueryCurrentPlanRequestAminoMsg): _127.QueryCurrentPlanRequest;
                toAminoMsg(message: _127.QueryCurrentPlanRequest): _127.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _127.QueryCurrentPlanRequestProtoMsg): _127.QueryCurrentPlanRequest;
                toProto(message: _127.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _127.QueryCurrentPlanRequest): _127.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _127.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_127.QueryCurrentPlanResponse>): _127.QueryCurrentPlanResponse;
                fromAmino(object: _127.QueryCurrentPlanResponseAmino): _127.QueryCurrentPlanResponse;
                toAmino(message: _127.QueryCurrentPlanResponse): _127.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _127.QueryCurrentPlanResponseAminoMsg): _127.QueryCurrentPlanResponse;
                toAminoMsg(message: _127.QueryCurrentPlanResponse): _127.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _127.QueryCurrentPlanResponseProtoMsg): _127.QueryCurrentPlanResponse;
                toProto(message: _127.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _127.QueryCurrentPlanResponse): _127.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _127.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_127.QueryAppliedPlanRequest>): _127.QueryAppliedPlanRequest;
                fromAmino(object: _127.QueryAppliedPlanRequestAmino): _127.QueryAppliedPlanRequest;
                toAmino(message: _127.QueryAppliedPlanRequest): _127.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _127.QueryAppliedPlanRequestAminoMsg): _127.QueryAppliedPlanRequest;
                toAminoMsg(message: _127.QueryAppliedPlanRequest): _127.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _127.QueryAppliedPlanRequestProtoMsg): _127.QueryAppliedPlanRequest;
                toProto(message: _127.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _127.QueryAppliedPlanRequest): _127.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _127.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_127.QueryAppliedPlanResponse>): _127.QueryAppliedPlanResponse;
                fromAmino(object: _127.QueryAppliedPlanResponseAmino): _127.QueryAppliedPlanResponse;
                toAmino(message: _127.QueryAppliedPlanResponse): _127.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _127.QueryAppliedPlanResponseAminoMsg): _127.QueryAppliedPlanResponse;
                toAminoMsg(message: _127.QueryAppliedPlanResponse): _127.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _127.QueryAppliedPlanResponseProtoMsg): _127.QueryAppliedPlanResponse;
                toProto(message: _127.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _127.QueryAppliedPlanResponse): _127.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _127.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_127.QueryUpgradedConsensusStateRequest>): _127.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _127.QueryUpgradedConsensusStateRequestAmino): _127.QueryUpgradedConsensusStateRequest;
                toAmino(message: _127.QueryUpgradedConsensusStateRequest): _127.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _127.QueryUpgradedConsensusStateRequestAminoMsg): _127.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _127.QueryUpgradedConsensusStateRequest): _127.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _127.QueryUpgradedConsensusStateRequestProtoMsg): _127.QueryUpgradedConsensusStateRequest;
                toProto(message: _127.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _127.QueryUpgradedConsensusStateRequest): _127.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _127.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_127.QueryUpgradedConsensusStateResponse>): _127.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _127.QueryUpgradedConsensusStateResponseAmino): _127.QueryUpgradedConsensusStateResponse;
                toAmino(message: _127.QueryUpgradedConsensusStateResponse): _127.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _127.QueryUpgradedConsensusStateResponseAminoMsg): _127.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _127.QueryUpgradedConsensusStateResponse): _127.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _127.QueryUpgradedConsensusStateResponseProtoMsg): _127.QueryUpgradedConsensusStateResponse;
                toProto(message: _127.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _127.QueryUpgradedConsensusStateResponse): _127.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _127.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_127.QueryModuleVersionsRequest>): _127.QueryModuleVersionsRequest;
                fromAmino(object: _127.QueryModuleVersionsRequestAmino): _127.QueryModuleVersionsRequest;
                toAmino(message: _127.QueryModuleVersionsRequest): _127.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _127.QueryModuleVersionsRequestAminoMsg): _127.QueryModuleVersionsRequest;
                toAminoMsg(message: _127.QueryModuleVersionsRequest): _127.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryModuleVersionsRequestProtoMsg): _127.QueryModuleVersionsRequest;
                toProto(message: _127.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryModuleVersionsRequest): _127.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _127.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_127.QueryModuleVersionsResponse>): _127.QueryModuleVersionsResponse;
                fromAmino(object: _127.QueryModuleVersionsResponseAmino): _127.QueryModuleVersionsResponse;
                toAmino(message: _127.QueryModuleVersionsResponse): _127.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _127.QueryModuleVersionsResponseAminoMsg): _127.QueryModuleVersionsResponse;
                toAminoMsg(message: _127.QueryModuleVersionsResponse): _127.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryModuleVersionsResponseProtoMsg): _127.QueryModuleVersionsResponse;
                toProto(message: _127.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryModuleVersionsResponse): _127.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _127.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryAuthorityRequest;
                fromPartial(_: Partial<_127.QueryAuthorityRequest>): _127.QueryAuthorityRequest;
                fromAmino(_: _127.QueryAuthorityRequestAmino): _127.QueryAuthorityRequest;
                toAmino(_: _127.QueryAuthorityRequest): _127.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _127.QueryAuthorityRequestAminoMsg): _127.QueryAuthorityRequest;
                toAminoMsg(message: _127.QueryAuthorityRequest): _127.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _127.QueryAuthorityRequestProtoMsg): _127.QueryAuthorityRequest;
                toProto(message: _127.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _127.QueryAuthorityRequest): _127.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _127.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.QueryAuthorityResponse;
                fromPartial(object: Partial<_127.QueryAuthorityResponse>): _127.QueryAuthorityResponse;
                fromAmino(object: _127.QueryAuthorityResponseAmino): _127.QueryAuthorityResponse;
                toAmino(message: _127.QueryAuthorityResponse): _127.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _127.QueryAuthorityResponseAminoMsg): _127.QueryAuthorityResponse;
                toAminoMsg(message: _127.QueryAuthorityResponse): _127.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _127.QueryAuthorityResponseProtoMsg): _127.QueryAuthorityResponse;
                toProto(message: _127.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _127.QueryAuthorityResponse): _127.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _130.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Module;
                    fromPartial(_: Partial<_130.Module>): _130.Module;
                    fromAmino(_: _130.ModuleAmino): _130.Module;
                    toAmino(_: _130.Module): _130.ModuleAmino;
                    fromAminoMsg(object: _130.ModuleAminoMsg): _130.Module;
                    toAminoMsg(message: _130.Module): _130.ModuleAminoMsg;
                    fromProtoMsg(message: _130.ModuleProtoMsg): _130.Module;
                    toProto(message: _130.Module): Uint8Array;
                    toProtoMsg(message: _130.Module): _130.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _131.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _131.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _131.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _131.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreateVestingAccount) => _131.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _131.MsgCreateVestingAccountAmino) => _131.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreatePermanentLockedAccount) => _131.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _131.MsgCreatePermanentLockedAccountAmino) => _131.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _131.MsgCreatePeriodicVestingAccount) => _131.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _131.MsgCreatePeriodicVestingAccountAmino) => _131.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _132.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.BaseVestingAccount;
                fromPartial(object: Partial<_132.BaseVestingAccount>): _132.BaseVestingAccount;
                fromAmino(object: _132.BaseVestingAccountAmino): _132.BaseVestingAccount;
                toAmino(message: _132.BaseVestingAccount): _132.BaseVestingAccountAmino;
                fromAminoMsg(object: _132.BaseVestingAccountAminoMsg): _132.BaseVestingAccount;
                toAminoMsg(message: _132.BaseVestingAccount): _132.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _132.BaseVestingAccountProtoMsg): _132.BaseVestingAccount;
                toProto(message: _132.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _132.BaseVestingAccount): _132.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _132.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ContinuousVestingAccount;
                fromPartial(object: Partial<_132.ContinuousVestingAccount>): _132.ContinuousVestingAccount;
                fromAmino(object: _132.ContinuousVestingAccountAmino): _132.ContinuousVestingAccount;
                toAmino(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _132.ContinuousVestingAccountAminoMsg): _132.ContinuousVestingAccount;
                toAminoMsg(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _132.ContinuousVestingAccountProtoMsg): _132.ContinuousVestingAccount;
                toProto(message: _132.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _132.ContinuousVestingAccount): _132.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _132.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.DelayedVestingAccount;
                fromPartial(object: Partial<_132.DelayedVestingAccount>): _132.DelayedVestingAccount;
                fromAmino(object: _132.DelayedVestingAccountAmino): _132.DelayedVestingAccount;
                toAmino(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountAmino;
                fromAminoMsg(object: _132.DelayedVestingAccountAminoMsg): _132.DelayedVestingAccount;
                toAminoMsg(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _132.DelayedVestingAccountProtoMsg): _132.DelayedVestingAccount;
                toProto(message: _132.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _132.DelayedVestingAccount): _132.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _132.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.Period;
                fromPartial(object: Partial<_132.Period>): _132.Period;
                fromAmino(object: _132.PeriodAmino): _132.Period;
                toAmino(message: _132.Period): _132.PeriodAmino;
                fromAminoMsg(object: _132.PeriodAminoMsg): _132.Period;
                toAminoMsg(message: _132.Period): _132.PeriodAminoMsg;
                fromProtoMsg(message: _132.PeriodProtoMsg): _132.Period;
                toProto(message: _132.Period): Uint8Array;
                toProtoMsg(message: _132.Period): _132.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _132.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.PeriodicVestingAccount;
                fromPartial(object: Partial<_132.PeriodicVestingAccount>): _132.PeriodicVestingAccount;
                fromAmino(object: _132.PeriodicVestingAccountAmino): _132.PeriodicVestingAccount;
                toAmino(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _132.PeriodicVestingAccountAminoMsg): _132.PeriodicVestingAccount;
                toAminoMsg(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _132.PeriodicVestingAccountProtoMsg): _132.PeriodicVestingAccount;
                toProto(message: _132.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _132.PeriodicVestingAccount): _132.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _132.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.PermanentLockedAccount;
                fromPartial(object: Partial<_132.PermanentLockedAccount>): _132.PermanentLockedAccount;
                fromAmino(object: _132.PermanentLockedAccountAmino): _132.PermanentLockedAccount;
                toAmino(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountAmino;
                fromAminoMsg(object: _132.PermanentLockedAccountAminoMsg): _132.PermanentLockedAccount;
                toAminoMsg(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _132.PermanentLockedAccountProtoMsg): _132.PermanentLockedAccount;
                toProto(message: _132.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _132.PermanentLockedAccount): _132.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreateVestingAccount;
                fromPartial(object: Partial<_131.MsgCreateVestingAccount>): _131.MsgCreateVestingAccount;
                fromAmino(object: _131.MsgCreateVestingAccountAmino): _131.MsgCreateVestingAccount;
                toAmino(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _131.MsgCreateVestingAccountAminoMsg): _131.MsgCreateVestingAccount;
                toAminoMsg(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreateVestingAccountProtoMsg): _131.MsgCreateVestingAccount;
                toProto(message: _131.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreateVestingAccount): _131.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_131.MsgCreateVestingAccountResponse>): _131.MsgCreateVestingAccountResponse;
                fromAmino(_: _131.MsgCreateVestingAccountResponseAmino): _131.MsgCreateVestingAccountResponse;
                toAmino(_: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreateVestingAccountResponseAminoMsg): _131.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreateVestingAccountResponseProtoMsg): _131.MsgCreateVestingAccountResponse;
                toProto(message: _131.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreateVestingAccountResponse): _131.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_131.MsgCreatePermanentLockedAccount>): _131.MsgCreatePermanentLockedAccount;
                fromAmino(object: _131.MsgCreatePermanentLockedAccountAmino): _131.MsgCreatePermanentLockedAccount;
                toAmino(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _131.MsgCreatePermanentLockedAccountAminoMsg): _131.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePermanentLockedAccountProtoMsg): _131.MsgCreatePermanentLockedAccount;
                toProto(message: _131.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePermanentLockedAccount): _131.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_131.MsgCreatePermanentLockedAccountResponse>): _131.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _131.MsgCreatePermanentLockedAccountResponseAmino): _131.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreatePermanentLockedAccountResponseAminoMsg): _131.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePermanentLockedAccountResponseProtoMsg): _131.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _131.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePermanentLockedAccountResponse): _131.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _131.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_131.MsgCreatePeriodicVestingAccount>): _131.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _131.MsgCreatePeriodicVestingAccountAmino): _131.MsgCreatePeriodicVestingAccount;
                toAmino(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _131.MsgCreatePeriodicVestingAccountAminoMsg): _131.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePeriodicVestingAccountProtoMsg): _131.MsgCreatePeriodicVestingAccount;
                toProto(message: _131.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePeriodicVestingAccount): _131.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _131.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_131.MsgCreatePeriodicVestingAccountResponse>): _131.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _131.MsgCreatePeriodicVestingAccountResponseAmino): _131.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _131.MsgCreatePeriodicVestingAccountResponseAminoMsg): _131.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _131.MsgCreatePeriodicVestingAccountResponseProtoMsg): _131.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _131.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _131.MsgCreatePeriodicVestingAccountResponse): _131.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _287.MsgClientImpl;
                };
                authz: {
                    v1beta1: _288.MsgClientImpl;
                };
                bank: {
                    v1beta1: _289.MsgClientImpl;
                };
                circuit: {
                    v1: _290.MsgClientImpl;
                };
                consensus: {
                    v1: _291.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _292.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _293.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _294.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _295.MsgClientImpl;
                };
                gov: {
                    v1: _296.MsgClientImpl;
                    v1beta1: _297.MsgClientImpl;
                };
                group: {
                    v1: _298.MsgClientImpl;
                };
                mint: {
                    v1beta1: _299.MsgClientImpl;
                };
                nft: {
                    v1beta1: _300.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _301.MsgClientImpl;
                };
                staking: {
                    v1beta1: _302.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _303.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _304.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _7.QueryConfigRequest): Promise<_7.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _11.QueryAccountsRequest): Promise<_11.QueryAccountsResponse>;
                        account(request: _11.QueryAccountRequest): Promise<_11.QueryAccountResponse>;
                        accountAddressByID(request: _11.QueryAccountAddressByIDRequest): Promise<_11.QueryAccountAddressByIDResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        moduleAccounts(request?: _11.QueryModuleAccountsRequest): Promise<_11.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _11.QueryModuleAccountByNameRequest): Promise<_11.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _11.Bech32PrefixRequest): Promise<_11.Bech32PrefixResponse>;
                        addressBytesToString(request: _11.AddressBytesToStringRequest): Promise<_11.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _11.AddressStringToBytesRequest): Promise<_11.AddressStringToBytesResponse>;
                        accountInfo(request: _11.QueryAccountInfoRequest): Promise<_11.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                        granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                        granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _20.AppOptionsRequest): Promise<_20.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                        allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                        spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _25.QuerySpendableBalanceByDenomRequest): Promise<_25.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                        supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: _25.QueryDenomMetadataByQueryStringRequest): Promise<_25.QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                        denomOwners(request: _25.QueryDenomOwnersRequest): Promise<_25.QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: _25.QueryDenomOwnersByQueryRequest): Promise<_25.QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: _25.QuerySendEnabledRequest): Promise<_25.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _28.ConfigRequest): Promise<_28.ConfigResponse>;
                            status(request?: _28.StatusRequest): Promise<_28.StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                            getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                            getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                            getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _32.ABCIQueryRequest): Promise<_32.ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: _36.QueryAccountRequest): Promise<_36.AccountResponse>;
                        accounts(request?: _36.QueryAccountsRequest): Promise<_36.AccountsResponse>;
                        disabledList(request?: _36.QueryDisabledListRequest): Promise<_36.DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                        validatorDistributionInfo(request: _54.QueryValidatorDistributionInfoRequest): Promise<_54.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _54.QueryValidatorOutstandingRewardsRequest): Promise<_54.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _54.QueryValidatorCommissionRequest): Promise<_54.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _54.QueryValidatorSlashesRequest): Promise<_54.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _54.QueryDelegationRewardsRequest): Promise<_54.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _54.QueryDelegationTotalRewardsRequest): Promise<_54.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _54.QueryDelegatorValidatorsRequest): Promise<_54.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _54.QueryDelegatorWithdrawAddressRequest): Promise<_54.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _54.QueryCommunityPoolRequest): Promise<_54.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _59.QueryEvidenceRequest): Promise<_59.QueryEvidenceResponse>;
                        allEvidence(request?: _59.QueryAllEvidenceRequest): Promise<_59.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _64.QueryAllowanceRequest): Promise<_64.QueryAllowanceResponse>;
                        allowances(request: _64.QueryAllowancesRequest): Promise<_64.QueryAllowancesResponse>;
                        allowancesByGranter(request: _64.QueryAllowancesByGranterRequest): Promise<_64.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: _71.QueryConstitutionRequest): Promise<_71.QueryConstitutionResponse>;
                        proposal(request: _71.QueryProposalRequest): Promise<_71.QueryProposalResponse>;
                        proposals(request: _71.QueryProposalsRequest): Promise<_71.QueryProposalsResponse>;
                        vote(request: _71.QueryVoteRequest): Promise<_71.QueryVoteResponse>;
                        votes(request: _71.QueryVotesRequest): Promise<_71.QueryVotesResponse>;
                        params(request: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        deposit(request: _71.QueryDepositRequest): Promise<_71.QueryDepositResponse>;
                        deposits(request: _71.QueryDepositsRequest): Promise<_71.QueryDepositsResponse>;
                        tallyResult(request: _71.QueryTallyResultRequest): Promise<_71.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _75.QueryProposalRequest): Promise<_75.QueryProposalResponse>;
                        proposals(request: _75.QueryProposalsRequest): Promise<_75.QueryProposalsResponse>;
                        vote(request: _75.QueryVoteRequest): Promise<_75.QueryVoteResponse>;
                        votes(request: _75.QueryVotesRequest): Promise<_75.QueryVotesResponse>;
                        params(request: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        deposit(request: _75.QueryDepositRequest): Promise<_75.QueryDepositResponse>;
                        deposits(request: _75.QueryDepositsRequest): Promise<_75.QueryDepositsResponse>;
                        tallyResult(request: _75.QueryTallyResultRequest): Promise<_75.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _80.QueryGroupInfoRequest): Promise<_80.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _80.QueryGroupPolicyInfoRequest): Promise<_80.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _80.QueryGroupMembersRequest): Promise<_80.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _80.QueryGroupsByAdminRequest): Promise<_80.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _80.QueryGroupPoliciesByGroupRequest): Promise<_80.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _80.QueryGroupPoliciesByAdminRequest): Promise<_80.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _80.QueryProposalRequest): Promise<_80.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _80.QueryProposalsByGroupPolicyRequest): Promise<_80.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _80.QueryVoteByProposalVoterRequest): Promise<_80.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _80.QueryVotesByProposalRequest): Promise<_80.QueryVotesByProposalResponse>;
                        votesByVoter(request: _80.QueryVotesByVoterRequest): Promise<_80.QueryVotesByVoterResponse>;
                        groupsByMember(request: _80.QueryGroupsByMemberRequest): Promise<_80.QueryGroupsByMemberResponse>;
                        tallyResult(request: _80.QueryTallyResultRequest): Promise<_80.QueryTallyResultResponse>;
                        groups(request?: _80.QueryGroupsRequest): Promise<_80.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        inflation(request?: _87.QueryInflationRequest): Promise<_87.QueryInflationResponse>;
                        annualProvisions(request?: _87.QueryAnnualProvisionsRequest): Promise<_87.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _95.QueryBalanceRequest): Promise<_95.QueryBalanceResponse>;
                        owner(request: _95.QueryOwnerRequest): Promise<_95.QueryOwnerResponse>;
                        supply(request: _95.QuerySupplyRequest): Promise<_95.QuerySupplyResponse>;
                        nFTs(request: _95.QueryNFTsRequest): Promise<_95.QueryNFTsResponse>;
                        nFT(request: _95.QueryNFTRequest): Promise<_95.QueryNFTResponse>;
                        class(request: _95.QueryClassRequest): Promise<_95.QueryClassResponse>;
                        classes(request?: _95.QueryClassesRequest): Promise<_95.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _98.GetRequest): Promise<_98.GetResponse>;
                            list(request: _98.ListRequest): Promise<_98.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        subspaces(request?: _103.QuerySubspacesRequest): Promise<_103.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        signingInfo(request: _108.QuerySigningInfoRequest): Promise<_108.QuerySigningInfoResponse>;
                        signingInfos(request?: _108.QuerySigningInfosRequest): Promise<_108.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _114.QueryValidatorsRequest): Promise<_114.QueryValidatorsResponse>;
                        validator(request: _114.QueryValidatorRequest): Promise<_114.QueryValidatorResponse>;
                        validatorDelegations(request: _114.QueryValidatorDelegationsRequest): Promise<_114.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _114.QueryValidatorUnbondingDelegationsRequest): Promise<_114.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _114.QueryDelegationRequest): Promise<_114.QueryDelegationResponse>;
                        unbondingDelegation(request: _114.QueryUnbondingDelegationRequest): Promise<_114.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _114.QueryDelegatorDelegationsRequest): Promise<_114.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _114.QueryDelegatorUnbondingDelegationsRequest): Promise<_114.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _114.QueryRedelegationsRequest): Promise<_114.QueryRedelegationsResponse>;
                        delegatorValidators(request: _114.QueryDelegatorValidatorsRequest): Promise<_114.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _114.QueryDelegatorValidatorRequest): Promise<_114.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _114.QueryHistoricalInfoRequest): Promise<_114.QueryHistoricalInfoResponse>;
                        pool(request?: _114.QueryPoolRequest): Promise<_114.QueryPoolResponse>;
                        params(request?: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _124.SimulateRequest): Promise<_124.SimulateResponse>;
                        getTx(request: _124.GetTxRequest): Promise<_124.GetTxResponse>;
                        broadcastTx(request: _124.BroadcastTxRequest): Promise<_124.BroadcastTxResponse>;
                        getTxsEvent(request: _124.GetTxsEventRequest): Promise<_124.GetTxsEventResponse>;
                        getBlockWithTxs(request: _124.GetBlockWithTxsRequest): Promise<_124.GetBlockWithTxsResponse>;
                        txDecode(request: _124.TxDecodeRequest): Promise<_124.TxDecodeResponse>;
                        txEncode(request: _124.TxEncodeRequest): Promise<_124.TxEncodeResponse>;
                        txEncodeAmino(request: _124.TxEncodeAminoRequest): Promise<_124.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _124.TxDecodeAminoRequest): Promise<_124.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _127.QueryCurrentPlanRequest): Promise<_127.QueryCurrentPlanResponse>;
                        appliedPlan(request: _127.QueryAppliedPlanRequest): Promise<_127.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _127.QueryUpgradedConsensusStateRequest): Promise<_127.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _127.QueryModuleVersionsRequest): Promise<_127.QueryModuleVersionsResponse>;
                        authority(request?: _127.QueryAuthorityRequest): Promise<_127.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
