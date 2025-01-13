import * as _140 from "./applications/fee/v1/ack";
import * as _141 from "./applications/fee/v1/fee";
import * as _142 from "./applications/fee/v1/genesis";
import * as _143 from "./applications/fee/v1/metadata";
import * as _144 from "./applications/fee/v1/query";
import * as _145 from "./applications/fee/v1/tx";
import * as _146 from "./applications/interchain_accounts/controller/v1/controller";
import * as _147 from "./applications/interchain_accounts/controller/v1/query";
import * as _148 from "./applications/interchain_accounts/controller/v1/tx";
import * as _149 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _150 from "./applications/interchain_accounts/host/v1/host";
import * as _151 from "./applications/interchain_accounts/host/v1/query";
import * as _152 from "./applications/interchain_accounts/host/v1/tx";
import * as _153 from "./applications/interchain_accounts/v1/account";
import * as _154 from "./applications/interchain_accounts/v1/metadata";
import * as _155 from "./applications/interchain_accounts/v1/packet";
import * as _156 from "./applications/transfer/v1/authz";
import * as _157 from "./applications/transfer/v1/genesis";
import * as _158 from "./applications/transfer/v1/query";
import * as _159 from "./applications/transfer/v1/transfer";
import * as _160 from "./applications/transfer/v1/tx";
import * as _161 from "./applications/transfer/v2/packet";
import * as _162 from "./core/channel/v1/channel";
import * as _163 from "./core/channel/v1/genesis";
import * as _164 from "./core/channel/v1/query";
import * as _165 from "./core/channel/v1/tx";
import * as _166 from "./core/channel/v1/upgrade";
import * as _167 from "./core/client/v1/client";
import * as _168 from "./core/client/v1/genesis";
import * as _169 from "./core/client/v1/query";
import * as _170 from "./core/client/v1/tx";
import * as _171 from "./core/commitment/v1/commitment";
import * as _172 from "./core/connection/v1/connection";
import * as _173 from "./core/connection/v1/genesis";
import * as _174 from "./core/connection/v1/query";
import * as _175 from "./core/connection/v1/tx";
import * as _176 from "./core/types/v1/genesis";
import * as _177 from "./lightclients/localhost/v2/localhost";
import * as _178 from "./lightclients/solomachine/v2/solomachine";
import * as _179 from "./lightclients/solomachine/v3/solomachine";
import * as _180 from "./lightclients/tendermint/v1/tendermint";
import * as _181 from "./lightclients/wasm/v1/genesis";
import * as _182 from "./lightclients/wasm/v1/query";
import * as _183 from "./lightclients/wasm/v1/tx";
import * as _184 from "./lightclients/wasm/v1/wasm";
import * as _321 from "./applications/fee/v1/query.rpc.Query";
import * as _322 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _323 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _324 from "./applications/transfer/v1/query.rpc.Query";
import * as _325 from "./core/channel/v1/query.rpc.Query";
import * as _326 from "./core/client/v1/query.rpc.Query";
import * as _327 from "./core/connection/v1/query.rpc.Query";
import * as _328 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _329 from "./applications/fee/v1/tx.rpc.msg";
import * as _330 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _331 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _332 from "./applications/transfer/v1/tx.rpc.msg";
import * as _333 from "./core/channel/v1/tx.rpc.msg";
import * as _334 from "./core/client/v1/tx.rpc.msg";
import * as _335 from "./core/connection/v1/tx.rpc.msg";
import * as _336 from "./lightclients/wasm/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _329.MsgClientImpl;
                QueryClientImpl: typeof _321.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _144.QueryIncentivizedPacketsRequest): Promise<_144.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _144.QueryIncentivizedPacketRequest): Promise<_144.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _144.QueryIncentivizedPacketsForChannelRequest): Promise<_144.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _144.QueryTotalRecvFeesRequest): Promise<_144.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _144.QueryTotalAckFeesRequest): Promise<_144.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _144.QueryTotalTimeoutFeesRequest): Promise<_144.QueryTotalTimeoutFeesResponse>;
                    payee(request: _144.QueryPayeeRequest): Promise<_144.QueryPayeeResponse>;
                    counterpartyPayee(request: _144.QueryCounterpartyPayeeRequest): Promise<_144.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _144.QueryFeeEnabledChannelsRequest): Promise<_144.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _144.QueryFeeEnabledChannelRequest): Promise<_144.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _145.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _145.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _145.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _145.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _145.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _145.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _145.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _145.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _145.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _145.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _145.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _145.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _145.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _145.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _145.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _145.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _145.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _145.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _145.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _145.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _145.MsgRegisterPayee) => _145.MsgRegisterPayeeAmino;
                        fromAmino: (object: _145.MsgRegisterPayeeAmino) => _145.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _145.MsgRegisterCounterpartyPayee) => _145.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _145.MsgRegisterCounterpartyPayeeAmino) => _145.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _145.MsgPayPacketFee) => _145.MsgPayPacketFeeAmino;
                        fromAmino: (object: _145.MsgPayPacketFeeAmino) => _145.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _145.MsgPayPacketFeeAsync) => _145.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _145.MsgPayPacketFeeAsyncAmino) => _145.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _145.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRegisterPayee;
                    fromPartial(object: Partial<_145.MsgRegisterPayee>): _145.MsgRegisterPayee;
                    fromAmino(object: _145.MsgRegisterPayeeAmino): _145.MsgRegisterPayee;
                    toAmino(message: _145.MsgRegisterPayee): _145.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _145.MsgRegisterPayeeAminoMsg): _145.MsgRegisterPayee;
                    toAminoMsg(message: _145.MsgRegisterPayee): _145.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _145.MsgRegisterPayeeProtoMsg): _145.MsgRegisterPayee;
                    toProto(message: _145.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _145.MsgRegisterPayee): _145.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _145.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_145.MsgRegisterPayeeResponse>): _145.MsgRegisterPayeeResponse;
                    fromAmino(_: _145.MsgRegisterPayeeResponseAmino): _145.MsgRegisterPayeeResponse;
                    toAmino(_: _145.MsgRegisterPayeeResponse): _145.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _145.MsgRegisterPayeeResponseAminoMsg): _145.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _145.MsgRegisterPayeeResponse): _145.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _145.MsgRegisterPayeeResponseProtoMsg): _145.MsgRegisterPayeeResponse;
                    toProto(message: _145.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _145.MsgRegisterPayeeResponse): _145.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _145.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_145.MsgRegisterCounterpartyPayee>): _145.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _145.MsgRegisterCounterpartyPayeeAmino): _145.MsgRegisterCounterpartyPayee;
                    toAmino(message: _145.MsgRegisterCounterpartyPayee): _145.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _145.MsgRegisterCounterpartyPayeeAminoMsg): _145.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _145.MsgRegisterCounterpartyPayee): _145.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _145.MsgRegisterCounterpartyPayeeProtoMsg): _145.MsgRegisterCounterpartyPayee;
                    toProto(message: _145.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _145.MsgRegisterCounterpartyPayee): _145.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _145.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_145.MsgRegisterCounterpartyPayeeResponse>): _145.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _145.MsgRegisterCounterpartyPayeeResponseAmino): _145.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _145.MsgRegisterCounterpartyPayeeResponse): _145.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _145.MsgRegisterCounterpartyPayeeResponseAminoMsg): _145.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _145.MsgRegisterCounterpartyPayeeResponse): _145.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _145.MsgRegisterCounterpartyPayeeResponseProtoMsg): _145.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _145.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _145.MsgRegisterCounterpartyPayeeResponse): _145.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _145.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgPayPacketFee;
                    fromPartial(object: Partial<_145.MsgPayPacketFee>): _145.MsgPayPacketFee;
                    fromAmino(object: _145.MsgPayPacketFeeAmino): _145.MsgPayPacketFee;
                    toAmino(message: _145.MsgPayPacketFee): _145.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _145.MsgPayPacketFeeAminoMsg): _145.MsgPayPacketFee;
                    toAminoMsg(message: _145.MsgPayPacketFee): _145.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _145.MsgPayPacketFeeProtoMsg): _145.MsgPayPacketFee;
                    toProto(message: _145.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _145.MsgPayPacketFee): _145.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _145.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_145.MsgPayPacketFeeResponse>): _145.MsgPayPacketFeeResponse;
                    fromAmino(_: _145.MsgPayPacketFeeResponseAmino): _145.MsgPayPacketFeeResponse;
                    toAmino(_: _145.MsgPayPacketFeeResponse): _145.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _145.MsgPayPacketFeeResponseAminoMsg): _145.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _145.MsgPayPacketFeeResponse): _145.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _145.MsgPayPacketFeeResponseProtoMsg): _145.MsgPayPacketFeeResponse;
                    toProto(message: _145.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _145.MsgPayPacketFeeResponse): _145.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _145.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_145.MsgPayPacketFeeAsync>): _145.MsgPayPacketFeeAsync;
                    fromAmino(object: _145.MsgPayPacketFeeAsyncAmino): _145.MsgPayPacketFeeAsync;
                    toAmino(message: _145.MsgPayPacketFeeAsync): _145.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _145.MsgPayPacketFeeAsyncAminoMsg): _145.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _145.MsgPayPacketFeeAsync): _145.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _145.MsgPayPacketFeeAsyncProtoMsg): _145.MsgPayPacketFeeAsync;
                    toProto(message: _145.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _145.MsgPayPacketFeeAsync): _145.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _145.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_145.MsgPayPacketFeeAsyncResponse>): _145.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _145.MsgPayPacketFeeAsyncResponseAmino): _145.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _145.MsgPayPacketFeeAsyncResponse): _145.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _145.MsgPayPacketFeeAsyncResponseAminoMsg): _145.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _145.MsgPayPacketFeeAsyncResponse): _145.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _145.MsgPayPacketFeeAsyncResponseProtoMsg): _145.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _145.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _145.MsgPayPacketFeeAsyncResponse): _145.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketsRequest>): _144.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _144.QueryIncentivizedPacketsRequestAmino): _144.QueryIncentivizedPacketsRequest;
                    toAmino(message: _144.QueryIncentivizedPacketsRequest): _144.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketsRequestAminoMsg): _144.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _144.QueryIncentivizedPacketsRequest): _144.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketsRequestProtoMsg): _144.QueryIncentivizedPacketsRequest;
                    toProto(message: _144.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketsRequest): _144.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketsResponse>): _144.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _144.QueryIncentivizedPacketsResponseAmino): _144.QueryIncentivizedPacketsResponse;
                    toAmino(message: _144.QueryIncentivizedPacketsResponse): _144.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketsResponseAminoMsg): _144.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _144.QueryIncentivizedPacketsResponse): _144.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketsResponseProtoMsg): _144.QueryIncentivizedPacketsResponse;
                    toProto(message: _144.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketsResponse): _144.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketRequest>): _144.QueryIncentivizedPacketRequest;
                    fromAmino(object: _144.QueryIncentivizedPacketRequestAmino): _144.QueryIncentivizedPacketRequest;
                    toAmino(message: _144.QueryIncentivizedPacketRequest): _144.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketRequestAminoMsg): _144.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _144.QueryIncentivizedPacketRequest): _144.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketRequestProtoMsg): _144.QueryIncentivizedPacketRequest;
                    toProto(message: _144.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketRequest): _144.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketResponse>): _144.QueryIncentivizedPacketResponse;
                    fromAmino(object: _144.QueryIncentivizedPacketResponseAmino): _144.QueryIncentivizedPacketResponse;
                    toAmino(message: _144.QueryIncentivizedPacketResponse): _144.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketResponseAminoMsg): _144.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _144.QueryIncentivizedPacketResponse): _144.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketResponseProtoMsg): _144.QueryIncentivizedPacketResponse;
                    toProto(message: _144.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketResponse): _144.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketsForChannelRequest>): _144.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _144.QueryIncentivizedPacketsForChannelRequestAmino): _144.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _144.QueryIncentivizedPacketsForChannelRequest): _144.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketsForChannelRequestAminoMsg): _144.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _144.QueryIncentivizedPacketsForChannelRequest): _144.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketsForChannelRequestProtoMsg): _144.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _144.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketsForChannelRequest): _144.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_144.QueryIncentivizedPacketsForChannelResponse>): _144.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _144.QueryIncentivizedPacketsForChannelResponseAmino): _144.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _144.QueryIncentivizedPacketsForChannelResponse): _144.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _144.QueryIncentivizedPacketsForChannelResponseAminoMsg): _144.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _144.QueryIncentivizedPacketsForChannelResponse): _144.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryIncentivizedPacketsForChannelResponseProtoMsg): _144.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _144.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryIncentivizedPacketsForChannelResponse): _144.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_144.QueryTotalRecvFeesRequest>): _144.QueryTotalRecvFeesRequest;
                    fromAmino(object: _144.QueryTotalRecvFeesRequestAmino): _144.QueryTotalRecvFeesRequest;
                    toAmino(message: _144.QueryTotalRecvFeesRequest): _144.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _144.QueryTotalRecvFeesRequestAminoMsg): _144.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _144.QueryTotalRecvFeesRequest): _144.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalRecvFeesRequestProtoMsg): _144.QueryTotalRecvFeesRequest;
                    toProto(message: _144.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalRecvFeesRequest): _144.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_144.QueryTotalRecvFeesResponse>): _144.QueryTotalRecvFeesResponse;
                    fromAmino(object: _144.QueryTotalRecvFeesResponseAmino): _144.QueryTotalRecvFeesResponse;
                    toAmino(message: _144.QueryTotalRecvFeesResponse): _144.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _144.QueryTotalRecvFeesResponseAminoMsg): _144.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _144.QueryTotalRecvFeesResponse): _144.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalRecvFeesResponseProtoMsg): _144.QueryTotalRecvFeesResponse;
                    toProto(message: _144.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalRecvFeesResponse): _144.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_144.QueryTotalAckFeesRequest>): _144.QueryTotalAckFeesRequest;
                    fromAmino(object: _144.QueryTotalAckFeesRequestAmino): _144.QueryTotalAckFeesRequest;
                    toAmino(message: _144.QueryTotalAckFeesRequest): _144.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _144.QueryTotalAckFeesRequestAminoMsg): _144.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _144.QueryTotalAckFeesRequest): _144.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalAckFeesRequestProtoMsg): _144.QueryTotalAckFeesRequest;
                    toProto(message: _144.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalAckFeesRequest): _144.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_144.QueryTotalAckFeesResponse>): _144.QueryTotalAckFeesResponse;
                    fromAmino(object: _144.QueryTotalAckFeesResponseAmino): _144.QueryTotalAckFeesResponse;
                    toAmino(message: _144.QueryTotalAckFeesResponse): _144.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _144.QueryTotalAckFeesResponseAminoMsg): _144.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _144.QueryTotalAckFeesResponse): _144.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalAckFeesResponseProtoMsg): _144.QueryTotalAckFeesResponse;
                    toProto(message: _144.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalAckFeesResponse): _144.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_144.QueryTotalTimeoutFeesRequest>): _144.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _144.QueryTotalTimeoutFeesRequestAmino): _144.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _144.QueryTotalTimeoutFeesRequest): _144.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _144.QueryTotalTimeoutFeesRequestAminoMsg): _144.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _144.QueryTotalTimeoutFeesRequest): _144.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalTimeoutFeesRequestProtoMsg): _144.QueryTotalTimeoutFeesRequest;
                    toProto(message: _144.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalTimeoutFeesRequest): _144.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_144.QueryTotalTimeoutFeesResponse>): _144.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _144.QueryTotalTimeoutFeesResponseAmino): _144.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _144.QueryTotalTimeoutFeesResponse): _144.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _144.QueryTotalTimeoutFeesResponseAminoMsg): _144.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _144.QueryTotalTimeoutFeesResponse): _144.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryTotalTimeoutFeesResponseProtoMsg): _144.QueryTotalTimeoutFeesResponse;
                    toProto(message: _144.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryTotalTimeoutFeesResponse): _144.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryPayeeRequest;
                    fromPartial(object: Partial<_144.QueryPayeeRequest>): _144.QueryPayeeRequest;
                    fromAmino(object: _144.QueryPayeeRequestAmino): _144.QueryPayeeRequest;
                    toAmino(message: _144.QueryPayeeRequest): _144.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _144.QueryPayeeRequestAminoMsg): _144.QueryPayeeRequest;
                    toAminoMsg(message: _144.QueryPayeeRequest): _144.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryPayeeRequestProtoMsg): _144.QueryPayeeRequest;
                    toProto(message: _144.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryPayeeRequest): _144.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryPayeeResponse;
                    fromPartial(object: Partial<_144.QueryPayeeResponse>): _144.QueryPayeeResponse;
                    fromAmino(object: _144.QueryPayeeResponseAmino): _144.QueryPayeeResponse;
                    toAmino(message: _144.QueryPayeeResponse): _144.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _144.QueryPayeeResponseAminoMsg): _144.QueryPayeeResponse;
                    toAminoMsg(message: _144.QueryPayeeResponse): _144.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryPayeeResponseProtoMsg): _144.QueryPayeeResponse;
                    toProto(message: _144.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryPayeeResponse): _144.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_144.QueryCounterpartyPayeeRequest>): _144.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _144.QueryCounterpartyPayeeRequestAmino): _144.QueryCounterpartyPayeeRequest;
                    toAmino(message: _144.QueryCounterpartyPayeeRequest): _144.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _144.QueryCounterpartyPayeeRequestAminoMsg): _144.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _144.QueryCounterpartyPayeeRequest): _144.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryCounterpartyPayeeRequestProtoMsg): _144.QueryCounterpartyPayeeRequest;
                    toProto(message: _144.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryCounterpartyPayeeRequest): _144.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_144.QueryCounterpartyPayeeResponse>): _144.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _144.QueryCounterpartyPayeeResponseAmino): _144.QueryCounterpartyPayeeResponse;
                    toAmino(message: _144.QueryCounterpartyPayeeResponse): _144.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _144.QueryCounterpartyPayeeResponseAminoMsg): _144.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _144.QueryCounterpartyPayeeResponse): _144.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryCounterpartyPayeeResponseProtoMsg): _144.QueryCounterpartyPayeeResponse;
                    toProto(message: _144.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryCounterpartyPayeeResponse): _144.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_144.QueryFeeEnabledChannelsRequest>): _144.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _144.QueryFeeEnabledChannelsRequestAmino): _144.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _144.QueryFeeEnabledChannelsRequest): _144.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _144.QueryFeeEnabledChannelsRequestAminoMsg): _144.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _144.QueryFeeEnabledChannelsRequest): _144.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryFeeEnabledChannelsRequestProtoMsg): _144.QueryFeeEnabledChannelsRequest;
                    toProto(message: _144.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryFeeEnabledChannelsRequest): _144.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_144.QueryFeeEnabledChannelsResponse>): _144.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _144.QueryFeeEnabledChannelsResponseAmino): _144.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _144.QueryFeeEnabledChannelsResponse): _144.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _144.QueryFeeEnabledChannelsResponseAminoMsg): _144.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _144.QueryFeeEnabledChannelsResponse): _144.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryFeeEnabledChannelsResponseProtoMsg): _144.QueryFeeEnabledChannelsResponse;
                    toProto(message: _144.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryFeeEnabledChannelsResponse): _144.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _144.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_144.QueryFeeEnabledChannelRequest>): _144.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _144.QueryFeeEnabledChannelRequestAmino): _144.QueryFeeEnabledChannelRequest;
                    toAmino(message: _144.QueryFeeEnabledChannelRequest): _144.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _144.QueryFeeEnabledChannelRequestAminoMsg): _144.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _144.QueryFeeEnabledChannelRequest): _144.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _144.QueryFeeEnabledChannelRequestProtoMsg): _144.QueryFeeEnabledChannelRequest;
                    toProto(message: _144.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _144.QueryFeeEnabledChannelRequest): _144.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _144.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_144.QueryFeeEnabledChannelResponse>): _144.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _144.QueryFeeEnabledChannelResponseAmino): _144.QueryFeeEnabledChannelResponse;
                    toAmino(message: _144.QueryFeeEnabledChannelResponse): _144.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _144.QueryFeeEnabledChannelResponseAminoMsg): _144.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _144.QueryFeeEnabledChannelResponse): _144.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _144.QueryFeeEnabledChannelResponseProtoMsg): _144.QueryFeeEnabledChannelResponse;
                    toProto(message: _144.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _144.QueryFeeEnabledChannelResponse): _144.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _143.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.Metadata;
                    fromPartial(object: Partial<_143.Metadata>): _143.Metadata;
                    fromAmino(object: _143.MetadataAmino): _143.Metadata;
                    toAmino(message: _143.Metadata): _143.MetadataAmino;
                    fromAminoMsg(object: _143.MetadataAminoMsg): _143.Metadata;
                    toAminoMsg(message: _143.Metadata): _143.MetadataAminoMsg;
                    fromProtoMsg(message: _143.MetadataProtoMsg): _143.Metadata;
                    toProto(message: _143.Metadata): Uint8Array;
                    toProtoMsg(message: _143.Metadata): _143.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _142.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.GenesisState;
                    fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
                    fromAmino(object: _142.GenesisStateAmino): _142.GenesisState;
                    toAmino(message: _142.GenesisState): _142.GenesisStateAmino;
                    fromAminoMsg(object: _142.GenesisStateAminoMsg): _142.GenesisState;
                    toAminoMsg(message: _142.GenesisState): _142.GenesisStateAminoMsg;
                    fromProtoMsg(message: _142.GenesisStateProtoMsg): _142.GenesisState;
                    toProto(message: _142.GenesisState): Uint8Array;
                    toProtoMsg(message: _142.GenesisState): _142.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _142.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.FeeEnabledChannel;
                    fromPartial(object: Partial<_142.FeeEnabledChannel>): _142.FeeEnabledChannel;
                    fromAmino(object: _142.FeeEnabledChannelAmino): _142.FeeEnabledChannel;
                    toAmino(message: _142.FeeEnabledChannel): _142.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _142.FeeEnabledChannelAminoMsg): _142.FeeEnabledChannel;
                    toAminoMsg(message: _142.FeeEnabledChannel): _142.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _142.FeeEnabledChannelProtoMsg): _142.FeeEnabledChannel;
                    toProto(message: _142.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _142.FeeEnabledChannel): _142.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _142.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RegisteredPayee;
                    fromPartial(object: Partial<_142.RegisteredPayee>): _142.RegisteredPayee;
                    fromAmino(object: _142.RegisteredPayeeAmino): _142.RegisteredPayee;
                    toAmino(message: _142.RegisteredPayee): _142.RegisteredPayeeAmino;
                    fromAminoMsg(object: _142.RegisteredPayeeAminoMsg): _142.RegisteredPayee;
                    toAminoMsg(message: _142.RegisteredPayee): _142.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _142.RegisteredPayeeProtoMsg): _142.RegisteredPayee;
                    toProto(message: _142.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _142.RegisteredPayee): _142.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _142.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_142.RegisteredCounterpartyPayee>): _142.RegisteredCounterpartyPayee;
                    fromAmino(object: _142.RegisteredCounterpartyPayeeAmino): _142.RegisteredCounterpartyPayee;
                    toAmino(message: _142.RegisteredCounterpartyPayee): _142.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _142.RegisteredCounterpartyPayeeAminoMsg): _142.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _142.RegisteredCounterpartyPayee): _142.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _142.RegisteredCounterpartyPayeeProtoMsg): _142.RegisteredCounterpartyPayee;
                    toProto(message: _142.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _142.RegisteredCounterpartyPayee): _142.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _142.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.ForwardRelayerAddress;
                    fromPartial(object: Partial<_142.ForwardRelayerAddress>): _142.ForwardRelayerAddress;
                    fromAmino(object: _142.ForwardRelayerAddressAmino): _142.ForwardRelayerAddress;
                    toAmino(message: _142.ForwardRelayerAddress): _142.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _142.ForwardRelayerAddressAminoMsg): _142.ForwardRelayerAddress;
                    toAminoMsg(message: _142.ForwardRelayerAddress): _142.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _142.ForwardRelayerAddressProtoMsg): _142.ForwardRelayerAddress;
                    toProto(message: _142.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _142.ForwardRelayerAddress): _142.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _141.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Fee;
                    fromPartial(object: Partial<_141.Fee>): _141.Fee;
                    fromAmino(object: _141.FeeAmino): _141.Fee;
                    toAmino(message: _141.Fee): _141.FeeAmino;
                    fromAminoMsg(object: _141.FeeAminoMsg): _141.Fee;
                    toAminoMsg(message: _141.Fee): _141.FeeAminoMsg;
                    fromProtoMsg(message: _141.FeeProtoMsg): _141.Fee;
                    toProto(message: _141.Fee): Uint8Array;
                    toProtoMsg(message: _141.Fee): _141.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _141.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PacketFee;
                    fromPartial(object: Partial<_141.PacketFee>): _141.PacketFee;
                    fromAmino(object: _141.PacketFeeAmino): _141.PacketFee;
                    toAmino(message: _141.PacketFee): _141.PacketFeeAmino;
                    fromAminoMsg(object: _141.PacketFeeAminoMsg): _141.PacketFee;
                    toAminoMsg(message: _141.PacketFee): _141.PacketFeeAminoMsg;
                    fromProtoMsg(message: _141.PacketFeeProtoMsg): _141.PacketFee;
                    toProto(message: _141.PacketFee): Uint8Array;
                    toProtoMsg(message: _141.PacketFee): _141.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _141.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PacketFees;
                    fromPartial(object: Partial<_141.PacketFees>): _141.PacketFees;
                    fromAmino(object: _141.PacketFeesAmino): _141.PacketFees;
                    toAmino(message: _141.PacketFees): _141.PacketFeesAmino;
                    fromAminoMsg(object: _141.PacketFeesAminoMsg): _141.PacketFees;
                    toAminoMsg(message: _141.PacketFees): _141.PacketFeesAminoMsg;
                    fromProtoMsg(message: _141.PacketFeesProtoMsg): _141.PacketFees;
                    toProto(message: _141.PacketFees): Uint8Array;
                    toProtoMsg(message: _141.PacketFees): _141.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _141.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.IdentifiedPacketFees;
                    fromPartial(object: Partial<_141.IdentifiedPacketFees>): _141.IdentifiedPacketFees;
                    fromAmino(object: _141.IdentifiedPacketFeesAmino): _141.IdentifiedPacketFees;
                    toAmino(message: _141.IdentifiedPacketFees): _141.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _141.IdentifiedPacketFeesAminoMsg): _141.IdentifiedPacketFees;
                    toAminoMsg(message: _141.IdentifiedPacketFees): _141.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _141.IdentifiedPacketFeesProtoMsg): _141.IdentifiedPacketFees;
                    toProto(message: _141.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _141.IdentifiedPacketFees): _141.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _140.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_140.IncentivizedAcknowledgement>): _140.IncentivizedAcknowledgement;
                    fromAmino(object: _140.IncentivizedAcknowledgementAmino): _140.IncentivizedAcknowledgement;
                    toAmino(message: _140.IncentivizedAcknowledgement): _140.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _140.IncentivizedAcknowledgementAminoMsg): _140.IncentivizedAcknowledgement;
                    toAminoMsg(message: _140.IncentivizedAcknowledgement): _140.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _140.IncentivizedAcknowledgementProtoMsg): _140.IncentivizedAcknowledgement;
                    toProto(message: _140.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _140.IncentivizedAcknowledgement): _140.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _330.MsgClientImpl;
                    QueryClientImpl: typeof _322.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _147.QueryInterchainAccountRequest): Promise<_147.QueryInterchainAccountResponse>;
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _148.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _148.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _148.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _148.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _148.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _148.MsgSendTx): {
                                typeUrl: string;
                                value: _148.MsgSendTx;
                            };
                            updateParams(value: _148.MsgUpdateParams): {
                                typeUrl: string;
                                value: _148.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _148.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _148.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _148.MsgSendTx): {
                                typeUrl: string;
                                value: _148.MsgSendTx;
                            };
                            updateParams(value: _148.MsgUpdateParams): {
                                typeUrl: string;
                                value: _148.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _148.MsgRegisterInterchainAccount) => _148.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _148.MsgRegisterInterchainAccountAmino) => _148.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _148.MsgSendTx) => _148.MsgSendTxAmino;
                            fromAmino: (object: _148.MsgSendTxAmino) => _148.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _148.MsgUpdateParams) => _148.MsgUpdateParamsAmino;
                            fromAmino: (object: _148.MsgUpdateParamsAmino) => _148.MsgUpdateParams;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _148.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_148.MsgRegisterInterchainAccount>): _148.MsgRegisterInterchainAccount;
                        fromAmino(object: _148.MsgRegisterInterchainAccountAmino): _148.MsgRegisterInterchainAccount;
                        toAmino(message: _148.MsgRegisterInterchainAccount): _148.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _148.MsgRegisterInterchainAccountAminoMsg): _148.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _148.MsgRegisterInterchainAccount): _148.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _148.MsgRegisterInterchainAccountProtoMsg): _148.MsgRegisterInterchainAccount;
                        toProto(message: _148.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _148.MsgRegisterInterchainAccount): _148.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _148.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_148.MsgRegisterInterchainAccountResponse>): _148.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _148.MsgRegisterInterchainAccountResponseAmino): _148.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _148.MsgRegisterInterchainAccountResponse): _148.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _148.MsgRegisterInterchainAccountResponseAminoMsg): _148.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _148.MsgRegisterInterchainAccountResponse): _148.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _148.MsgRegisterInterchainAccountResponseProtoMsg): _148.MsgRegisterInterchainAccountResponse;
                        toProto(message: _148.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _148.MsgRegisterInterchainAccountResponse): _148.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _148.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgSendTx;
                        fromPartial(object: Partial<_148.MsgSendTx>): _148.MsgSendTx;
                        fromAmino(object: _148.MsgSendTxAmino): _148.MsgSendTx;
                        toAmino(message: _148.MsgSendTx): _148.MsgSendTxAmino;
                        fromAminoMsg(object: _148.MsgSendTxAminoMsg): _148.MsgSendTx;
                        toAminoMsg(message: _148.MsgSendTx): _148.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _148.MsgSendTxProtoMsg): _148.MsgSendTx;
                        toProto(message: _148.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _148.MsgSendTx): _148.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _148.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgSendTxResponse;
                        fromPartial(object: Partial<_148.MsgSendTxResponse>): _148.MsgSendTxResponse;
                        fromAmino(object: _148.MsgSendTxResponseAmino): _148.MsgSendTxResponse;
                        toAmino(message: _148.MsgSendTxResponse): _148.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _148.MsgSendTxResponseAminoMsg): _148.MsgSendTxResponse;
                        toAminoMsg(message: _148.MsgSendTxResponse): _148.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _148.MsgSendTxResponseProtoMsg): _148.MsgSendTxResponse;
                        toProto(message: _148.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _148.MsgSendTxResponse): _148.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _148.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgUpdateParams;
                        fromPartial(object: Partial<_148.MsgUpdateParams>): _148.MsgUpdateParams;
                        fromAmino(object: _148.MsgUpdateParamsAmino): _148.MsgUpdateParams;
                        toAmino(message: _148.MsgUpdateParams): _148.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _148.MsgUpdateParamsAminoMsg): _148.MsgUpdateParams;
                        toAminoMsg(message: _148.MsgUpdateParams): _148.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _148.MsgUpdateParamsProtoMsg): _148.MsgUpdateParams;
                        toProto(message: _148.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _148.MsgUpdateParams): _148.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _148.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_148.MsgUpdateParamsResponse>): _148.MsgUpdateParamsResponse;
                        fromAmino(_: _148.MsgUpdateParamsResponseAmino): _148.MsgUpdateParamsResponse;
                        toAmino(_: _148.MsgUpdateParamsResponse): _148.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _148.MsgUpdateParamsResponseAminoMsg): _148.MsgUpdateParamsResponse;
                        toAminoMsg(message: _148.MsgUpdateParamsResponse): _148.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _148.MsgUpdateParamsResponseProtoMsg): _148.MsgUpdateParamsResponse;
                        toProto(message: _148.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _148.MsgUpdateParamsResponse): _148.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _147.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_147.QueryInterchainAccountRequest>): _147.QueryInterchainAccountRequest;
                        fromAmino(object: _147.QueryInterchainAccountRequestAmino): _147.QueryInterchainAccountRequest;
                        toAmino(message: _147.QueryInterchainAccountRequest): _147.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _147.QueryInterchainAccountRequestAminoMsg): _147.QueryInterchainAccountRequest;
                        toAminoMsg(message: _147.QueryInterchainAccountRequest): _147.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _147.QueryInterchainAccountRequestProtoMsg): _147.QueryInterchainAccountRequest;
                        toProto(message: _147.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _147.QueryInterchainAccountRequest): _147.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _147.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_147.QueryInterchainAccountResponse>): _147.QueryInterchainAccountResponse;
                        fromAmino(object: _147.QueryInterchainAccountResponseAmino): _147.QueryInterchainAccountResponse;
                        toAmino(message: _147.QueryInterchainAccountResponse): _147.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _147.QueryInterchainAccountResponseAminoMsg): _147.QueryInterchainAccountResponse;
                        toAminoMsg(message: _147.QueryInterchainAccountResponse): _147.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _147.QueryInterchainAccountResponseProtoMsg): _147.QueryInterchainAccountResponse;
                        toProto(message: _147.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _147.QueryInterchainAccountResponse): _147.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _147.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryParamsRequest;
                        fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                        fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                        toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                        fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                        toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                        toProto(message: _147.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _147.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryParamsResponse;
                        fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                        fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                        toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                        fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                        toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                        toProto(message: _147.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _146.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Params;
                        fromPartial(object: Partial<_146.Params>): _146.Params;
                        fromAmino(object: _146.ParamsAmino): _146.Params;
                        toAmino(message: _146.Params): _146.ParamsAmino;
                        fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
                        toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
                        fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
                        toProto(message: _146.Params): Uint8Array;
                        toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.GenesisState;
                        fromPartial(object: Partial<_149.GenesisState>): _149.GenesisState;
                        fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
                        toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
                        fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
                        toAminoMsg(message: _149.GenesisState): _149.GenesisStateAminoMsg;
                        fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
                        toProto(message: _149.GenesisState): Uint8Array;
                        toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _149.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.ControllerGenesisState;
                        fromPartial(object: Partial<_149.ControllerGenesisState>): _149.ControllerGenesisState;
                        fromAmino(object: _149.ControllerGenesisStateAmino): _149.ControllerGenesisState;
                        toAmino(message: _149.ControllerGenesisState): _149.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _149.ControllerGenesisStateAminoMsg): _149.ControllerGenesisState;
                        toAminoMsg(message: _149.ControllerGenesisState): _149.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _149.ControllerGenesisStateProtoMsg): _149.ControllerGenesisState;
                        toProto(message: _149.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _149.ControllerGenesisState): _149.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _149.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.HostGenesisState;
                        fromPartial(object: Partial<_149.HostGenesisState>): _149.HostGenesisState;
                        fromAmino(object: _149.HostGenesisStateAmino): _149.HostGenesisState;
                        toAmino(message: _149.HostGenesisState): _149.HostGenesisStateAmino;
                        fromAminoMsg(object: _149.HostGenesisStateAminoMsg): _149.HostGenesisState;
                        toAminoMsg(message: _149.HostGenesisState): _149.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _149.HostGenesisStateProtoMsg): _149.HostGenesisState;
                        toProto(message: _149.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _149.HostGenesisState): _149.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _149.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.ActiveChannel;
                        fromPartial(object: Partial<_149.ActiveChannel>): _149.ActiveChannel;
                        fromAmino(object: _149.ActiveChannelAmino): _149.ActiveChannel;
                        toAmino(message: _149.ActiveChannel): _149.ActiveChannelAmino;
                        fromAminoMsg(object: _149.ActiveChannelAminoMsg): _149.ActiveChannel;
                        toAminoMsg(message: _149.ActiveChannel): _149.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _149.ActiveChannelProtoMsg): _149.ActiveChannel;
                        toProto(message: _149.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _149.ActiveChannel): _149.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _149.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_149.RegisteredInterchainAccount>): _149.RegisteredInterchainAccount;
                        fromAmino(object: _149.RegisteredInterchainAccountAmino): _149.RegisteredInterchainAccount;
                        toAmino(message: _149.RegisteredInterchainAccount): _149.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _149.RegisteredInterchainAccountAminoMsg): _149.RegisteredInterchainAccount;
                        toAminoMsg(message: _149.RegisteredInterchainAccount): _149.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _149.RegisteredInterchainAccountProtoMsg): _149.RegisteredInterchainAccount;
                        toProto(message: _149.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _149.RegisteredInterchainAccount): _149.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _331.MsgClientImpl;
                    QueryClientImpl: typeof _323.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _151.QueryParamsRequest): Promise<_151.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _152.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            moduleQuerySafe(value: _152.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _152.MsgUpdateParams): {
                                typeUrl: string;
                                value: _152.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _152.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _152.MsgModuleQuerySafe;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _152.MsgUpdateParams): {
                                typeUrl: string;
                                value: _152.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _152.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _152.MsgModuleQuerySafe;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _152.MsgUpdateParams) => _152.MsgUpdateParamsAmino;
                            fromAmino: (object: _152.MsgUpdateParamsAmino) => _152.MsgUpdateParams;
                        };
                        "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
                            aminoType: string;
                            toAmino: (message: _152.MsgModuleQuerySafe) => _152.MsgModuleQuerySafeAmino;
                            fromAmino: (object: _152.MsgModuleQuerySafeAmino) => _152.MsgModuleQuerySafe;
                        };
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _152.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgUpdateParams;
                        fromPartial(object: Partial<_152.MsgUpdateParams>): _152.MsgUpdateParams;
                        fromAmino(object: _152.MsgUpdateParamsAmino): _152.MsgUpdateParams;
                        toAmino(message: _152.MsgUpdateParams): _152.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _152.MsgUpdateParamsAminoMsg): _152.MsgUpdateParams;
                        toAminoMsg(message: _152.MsgUpdateParams): _152.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _152.MsgUpdateParamsProtoMsg): _152.MsgUpdateParams;
                        toProto(message: _152.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _152.MsgUpdateParams): _152.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _152.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_152.MsgUpdateParamsResponse>): _152.MsgUpdateParamsResponse;
                        fromAmino(_: _152.MsgUpdateParamsResponseAmino): _152.MsgUpdateParamsResponse;
                        toAmino(_: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _152.MsgUpdateParamsResponseAminoMsg): _152.MsgUpdateParamsResponse;
                        toAminoMsg(message: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _152.MsgUpdateParamsResponseProtoMsg): _152.MsgUpdateParamsResponse;
                        toProto(message: _152.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _152.MsgUpdateParamsResponse): _152.MsgUpdateParamsResponseProtoMsg;
                    };
                    MsgModuleQuerySafe: {
                        typeUrl: string;
                        encode(message: _152.MsgModuleQuerySafe, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgModuleQuerySafe;
                        fromPartial(object: Partial<_152.MsgModuleQuerySafe>): _152.MsgModuleQuerySafe;
                        fromAmino(object: _152.MsgModuleQuerySafeAmino): _152.MsgModuleQuerySafe;
                        toAmino(message: _152.MsgModuleQuerySafe): _152.MsgModuleQuerySafeAmino;
                        fromAminoMsg(object: _152.MsgModuleQuerySafeAminoMsg): _152.MsgModuleQuerySafe;
                        toAminoMsg(message: _152.MsgModuleQuerySafe): _152.MsgModuleQuerySafeAminoMsg;
                        fromProtoMsg(message: _152.MsgModuleQuerySafeProtoMsg): _152.MsgModuleQuerySafe;
                        toProto(message: _152.MsgModuleQuerySafe): Uint8Array;
                        toProtoMsg(message: _152.MsgModuleQuerySafe): _152.MsgModuleQuerySafeProtoMsg;
                    };
                    MsgModuleQuerySafeResponse: {
                        typeUrl: string;
                        encode(message: _152.MsgModuleQuerySafeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgModuleQuerySafeResponse;
                        fromPartial(object: Partial<_152.MsgModuleQuerySafeResponse>): _152.MsgModuleQuerySafeResponse;
                        fromAmino(object: _152.MsgModuleQuerySafeResponseAmino): _152.MsgModuleQuerySafeResponse;
                        toAmino(message: _152.MsgModuleQuerySafeResponse): _152.MsgModuleQuerySafeResponseAmino;
                        fromAminoMsg(object: _152.MsgModuleQuerySafeResponseAminoMsg): _152.MsgModuleQuerySafeResponse;
                        toAminoMsg(message: _152.MsgModuleQuerySafeResponse): _152.MsgModuleQuerySafeResponseAminoMsg;
                        fromProtoMsg(message: _152.MsgModuleQuerySafeResponseProtoMsg): _152.MsgModuleQuerySafeResponse;
                        toProto(message: _152.MsgModuleQuerySafeResponse): Uint8Array;
                        toProtoMsg(message: _152.MsgModuleQuerySafeResponse): _152.MsgModuleQuerySafeResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _151.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryParamsRequest;
                        fromPartial(_: Partial<_151.QueryParamsRequest>): _151.QueryParamsRequest;
                        fromAmino(_: _151.QueryParamsRequestAmino): _151.QueryParamsRequest;
                        toAmino(_: _151.QueryParamsRequest): _151.QueryParamsRequestAmino;
                        fromAminoMsg(object: _151.QueryParamsRequestAminoMsg): _151.QueryParamsRequest;
                        toAminoMsg(message: _151.QueryParamsRequest): _151.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _151.QueryParamsRequestProtoMsg): _151.QueryParamsRequest;
                        toProto(message: _151.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _151.QueryParamsRequest): _151.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _151.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryParamsResponse;
                        fromPartial(object: Partial<_151.QueryParamsResponse>): _151.QueryParamsResponse;
                        fromAmino(object: _151.QueryParamsResponseAmino): _151.QueryParamsResponse;
                        toAmino(message: _151.QueryParamsResponse): _151.QueryParamsResponseAmino;
                        fromAminoMsg(object: _151.QueryParamsResponseAminoMsg): _151.QueryParamsResponse;
                        toAminoMsg(message: _151.QueryParamsResponse): _151.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _151.QueryParamsResponseProtoMsg): _151.QueryParamsResponse;
                        toProto(message: _151.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _151.QueryParamsResponse): _151.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _150.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Params;
                        fromPartial(object: Partial<_150.Params>): _150.Params;
                        fromAmino(object: _150.ParamsAmino): _150.Params;
                        toAmino(message: _150.Params): _150.ParamsAmino;
                        fromAminoMsg(object: _150.ParamsAminoMsg): _150.Params;
                        toAminoMsg(message: _150.Params): _150.ParamsAminoMsg;
                        fromProtoMsg(message: _150.ParamsProtoMsg): _150.Params;
                        toProto(message: _150.Params): Uint8Array;
                        toProtoMsg(message: _150.Params): _150.ParamsProtoMsg;
                    };
                    QueryRequest: {
                        typeUrl: string;
                        encode(message: _150.QueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryRequest;
                        fromPartial(object: Partial<_150.QueryRequest>): _150.QueryRequest;
                        fromAmino(object: _150.QueryRequestAmino): _150.QueryRequest;
                        toAmino(message: _150.QueryRequest): _150.QueryRequestAmino;
                        fromAminoMsg(object: _150.QueryRequestAminoMsg): _150.QueryRequest;
                        toAminoMsg(message: _150.QueryRequest): _150.QueryRequestAminoMsg;
                        fromProtoMsg(message: _150.QueryRequestProtoMsg): _150.QueryRequest;
                        toProto(message: _150.QueryRequest): Uint8Array;
                        toProtoMsg(message: _150.QueryRequest): _150.QueryRequestProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _155.Type;
                typeToJSON(object: _155.Type): string;
                Type: typeof _155.Type;
                TypeSDKType: typeof _155.Type;
                TypeAmino: typeof _155.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _155.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.InterchainAccountPacketData;
                    fromPartial(object: Partial<_155.InterchainAccountPacketData>): _155.InterchainAccountPacketData;
                    fromAmino(object: _155.InterchainAccountPacketDataAmino): _155.InterchainAccountPacketData;
                    toAmino(message: _155.InterchainAccountPacketData): _155.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _155.InterchainAccountPacketDataAminoMsg): _155.InterchainAccountPacketData;
                    toAminoMsg(message: _155.InterchainAccountPacketData): _155.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _155.InterchainAccountPacketDataProtoMsg): _155.InterchainAccountPacketData;
                    toProto(message: _155.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _155.InterchainAccountPacketData): _155.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _155.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CosmosTx;
                    fromPartial(object: Partial<_155.CosmosTx>): _155.CosmosTx;
                    fromAmino(object: _155.CosmosTxAmino): _155.CosmosTx;
                    toAmino(message: _155.CosmosTx): _155.CosmosTxAmino;
                    fromAminoMsg(object: _155.CosmosTxAminoMsg): _155.CosmosTx;
                    toAminoMsg(message: _155.CosmosTx): _155.CosmosTxAminoMsg;
                    fromProtoMsg(message: _155.CosmosTxProtoMsg): _155.CosmosTx;
                    toProto(message: _155.CosmosTx): Uint8Array;
                    toProtoMsg(message: _155.CosmosTx): _155.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _154.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Metadata;
                    fromPartial(object: Partial<_154.Metadata>): _154.Metadata;
                    fromAmino(object: _154.MetadataAmino): _154.Metadata;
                    toAmino(message: _154.Metadata): _154.MetadataAmino;
                    fromAminoMsg(object: _154.MetadataAminoMsg): _154.Metadata;
                    toAminoMsg(message: _154.Metadata): _154.MetadataAminoMsg;
                    fromProtoMsg(message: _154.MetadataProtoMsg): _154.Metadata;
                    toProto(message: _154.Metadata): Uint8Array;
                    toProtoMsg(message: _154.Metadata): _154.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _153.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.InterchainAccount;
                    fromPartial(object: Partial<_153.InterchainAccount>): _153.InterchainAccount;
                    fromAmino(object: _153.InterchainAccountAmino): _153.InterchainAccount;
                    toAmino(message: _153.InterchainAccount): _153.InterchainAccountAmino;
                    fromAminoMsg(object: _153.InterchainAccountAminoMsg): _153.InterchainAccount;
                    toAminoMsg(message: _153.InterchainAccount): _153.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _153.InterchainAccountProtoMsg): _153.InterchainAccount;
                    toProto(message: _153.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _153.InterchainAccount): _153.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _332.MsgClientImpl;
                QueryClientImpl: typeof _324.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _158.QueryDenomTracesRequest): Promise<_158.QueryDenomTracesResponse>;
                    denomTrace(request: _158.QueryDenomTraceRequest): Promise<_158.QueryDenomTraceResponse>;
                    params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                    denomHash(request: _158.QueryDenomHashRequest): Promise<_158.QueryDenomHashResponse>;
                    escrowAddress(request: _158.QueryEscrowAddressRequest): Promise<_158.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _158.QueryTotalEscrowForDenomRequest): Promise<_158.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: _160.MsgTransfer;
                        };
                        updateParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: _160.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: _160.MsgTransfer;
                        };
                        updateParams(value: _160.MsgUpdateParams): {
                            typeUrl: string;
                            value: _160.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _160.MsgTransfer) => _160.MsgTransferAmino;
                        fromAmino: (object: _160.MsgTransferAmino) => _160.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _160.MsgUpdateParams) => _160.MsgUpdateParamsAmino;
                        fromAmino: (object: _160.MsgUpdateParamsAmino) => _160.MsgUpdateParams;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _160.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTransfer;
                    fromPartial(object: Partial<_160.MsgTransfer>): _160.MsgTransfer;
                    fromAmino(object: _160.MsgTransferAmino): _160.MsgTransfer;
                    toAmino(message: _160.MsgTransfer): _160.MsgTransferAmino;
                    fromAminoMsg(object: _160.MsgTransferAminoMsg): _160.MsgTransfer;
                    toAminoMsg(message: _160.MsgTransfer): _160.MsgTransferAminoMsg;
                    fromProtoMsg(message: _160.MsgTransferProtoMsg): _160.MsgTransfer;
                    toProto(message: _160.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _160.MsgTransfer): _160.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTransferResponse;
                    fromPartial(object: Partial<_160.MsgTransferResponse>): _160.MsgTransferResponse;
                    fromAmino(object: _160.MsgTransferResponseAmino): _160.MsgTransferResponse;
                    toAmino(message: _160.MsgTransferResponse): _160.MsgTransferResponseAmino;
                    fromAminoMsg(object: _160.MsgTransferResponseAminoMsg): _160.MsgTransferResponse;
                    toAminoMsg(message: _160.MsgTransferResponse): _160.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgTransferResponseProtoMsg): _160.MsgTransferResponse;
                    toProto(message: _160.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgTransferResponse): _160.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _160.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgUpdateParams;
                    fromPartial(object: Partial<_160.MsgUpdateParams>): _160.MsgUpdateParams;
                    fromAmino(object: _160.MsgUpdateParamsAmino): _160.MsgUpdateParams;
                    toAmino(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _160.MsgUpdateParamsAminoMsg): _160.MsgUpdateParams;
                    toAminoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateParamsProtoMsg): _160.MsgUpdateParams;
                    toProto(message: _160.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_160.MsgUpdateParamsResponse>): _160.MsgUpdateParamsResponse;
                    fromAmino(_: _160.MsgUpdateParamsResponseAmino): _160.MsgUpdateParamsResponse;
                    toAmino(_: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _160.MsgUpdateParamsResponseAminoMsg): _160.MsgUpdateParamsResponse;
                    toAminoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgUpdateParamsResponseProtoMsg): _160.MsgUpdateParamsResponse;
                    toProto(message: _160.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _159.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.DenomTrace;
                    fromPartial(object: Partial<_159.DenomTrace>): _159.DenomTrace;
                    fromAmino(object: _159.DenomTraceAmino): _159.DenomTrace;
                    toAmino(message: _159.DenomTrace): _159.DenomTraceAmino;
                    fromAminoMsg(object: _159.DenomTraceAminoMsg): _159.DenomTrace;
                    toAminoMsg(message: _159.DenomTrace): _159.DenomTraceAminoMsg;
                    fromProtoMsg(message: _159.DenomTraceProtoMsg): _159.DenomTrace;
                    toProto(message: _159.DenomTrace): Uint8Array;
                    toProtoMsg(message: _159.DenomTrace): _159.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _159.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Params;
                    fromPartial(object: Partial<_159.Params>): _159.Params;
                    fromAmino(object: _159.ParamsAmino): _159.Params;
                    toAmino(message: _159.Params): _159.ParamsAmino;
                    fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                    toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                    fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                    toProto(message: _159.Params): Uint8Array;
                    toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_158.QueryDenomTraceRequest>): _158.QueryDenomTraceRequest;
                    fromAmino(object: _158.QueryDenomTraceRequestAmino): _158.QueryDenomTraceRequest;
                    toAmino(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomTraceRequestAminoMsg): _158.QueryDenomTraceRequest;
                    toAminoMsg(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTraceRequestProtoMsg): _158.QueryDenomTraceRequest;
                    toProto(message: _158.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_158.QueryDenomTraceResponse>): _158.QueryDenomTraceResponse;
                    fromAmino(object: _158.QueryDenomTraceResponseAmino): _158.QueryDenomTraceResponse;
                    toAmino(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomTraceResponseAminoMsg): _158.QueryDenomTraceResponse;
                    toAminoMsg(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTraceResponseProtoMsg): _158.QueryDenomTraceResponse;
                    toProto(message: _158.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_158.QueryDenomTracesRequest>): _158.QueryDenomTracesRequest;
                    fromAmino(object: _158.QueryDenomTracesRequestAmino): _158.QueryDenomTracesRequest;
                    toAmino(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomTracesRequestAminoMsg): _158.QueryDenomTracesRequest;
                    toAminoMsg(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTracesRequestProtoMsg): _158.QueryDenomTracesRequest;
                    toProto(message: _158.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_158.QueryDenomTracesResponse>): _158.QueryDenomTracesResponse;
                    fromAmino(object: _158.QueryDenomTracesResponseAmino): _158.QueryDenomTracesResponse;
                    toAmino(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomTracesResponseAminoMsg): _158.QueryDenomTracesResponse;
                    toAminoMsg(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTracesResponseProtoMsg): _158.QueryDenomTracesResponse;
                    toProto(message: _158.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _158.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryParamsRequest;
                    fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
                    fromAmino(_: _158.QueryParamsRequestAmino): _158.QueryParamsRequest;
                    toAmino(_: _158.QueryParamsRequest): _158.QueryParamsRequestAmino;
                    fromAminoMsg(object: _158.QueryParamsRequestAminoMsg): _158.QueryParamsRequest;
                    toAminoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryParamsRequestProtoMsg): _158.QueryParamsRequest;
                    toProto(message: _158.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryParamsResponse;
                    fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
                    fromAmino(object: _158.QueryParamsResponseAmino): _158.QueryParamsResponse;
                    toAmino(message: _158.QueryParamsResponse): _158.QueryParamsResponseAmino;
                    fromAminoMsg(object: _158.QueryParamsResponseAminoMsg): _158.QueryParamsResponse;
                    toAminoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryParamsResponseProtoMsg): _158.QueryParamsResponse;
                    toProto(message: _158.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomHashRequest;
                    fromPartial(object: Partial<_158.QueryDenomHashRequest>): _158.QueryDenomHashRequest;
                    fromAmino(object: _158.QueryDenomHashRequestAmino): _158.QueryDenomHashRequest;
                    toAmino(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomHashRequestAminoMsg): _158.QueryDenomHashRequest;
                    toAminoMsg(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomHashRequestProtoMsg): _158.QueryDenomHashRequest;
                    toProto(message: _158.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryDenomHashResponse;
                    fromPartial(object: Partial<_158.QueryDenomHashResponse>): _158.QueryDenomHashResponse;
                    fromAmino(object: _158.QueryDenomHashResponseAmino): _158.QueryDenomHashResponse;
                    toAmino(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomHashResponseAminoMsg): _158.QueryDenomHashResponse;
                    toAminoMsg(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomHashResponseProtoMsg): _158.QueryDenomHashResponse;
                    toProto(message: _158.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_158.QueryEscrowAddressRequest>): _158.QueryEscrowAddressRequest;
                    fromAmino(object: _158.QueryEscrowAddressRequestAmino): _158.QueryEscrowAddressRequest;
                    toAmino(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _158.QueryEscrowAddressRequestAminoMsg): _158.QueryEscrowAddressRequest;
                    toAminoMsg(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryEscrowAddressRequestProtoMsg): _158.QueryEscrowAddressRequest;
                    toProto(message: _158.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_158.QueryEscrowAddressResponse>): _158.QueryEscrowAddressResponse;
                    fromAmino(object: _158.QueryEscrowAddressResponseAmino): _158.QueryEscrowAddressResponse;
                    toAmino(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _158.QueryEscrowAddressResponseAminoMsg): _158.QueryEscrowAddressResponse;
                    toAminoMsg(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryEscrowAddressResponseProtoMsg): _158.QueryEscrowAddressResponse;
                    toProto(message: _158.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_158.QueryTotalEscrowForDenomRequest>): _158.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _158.QueryTotalEscrowForDenomRequestAmino): _158.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _158.QueryTotalEscrowForDenomRequest): _158.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _158.QueryTotalEscrowForDenomRequestAminoMsg): _158.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _158.QueryTotalEscrowForDenomRequest): _158.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalEscrowForDenomRequestProtoMsg): _158.QueryTotalEscrowForDenomRequest;
                    toProto(message: _158.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalEscrowForDenomRequest): _158.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_158.QueryTotalEscrowForDenomResponse>): _158.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _158.QueryTotalEscrowForDenomResponseAmino): _158.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _158.QueryTotalEscrowForDenomResponse): _158.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _158.QueryTotalEscrowForDenomResponseAminoMsg): _158.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _158.QueryTotalEscrowForDenomResponse): _158.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalEscrowForDenomResponseProtoMsg): _158.QueryTotalEscrowForDenomResponse;
                    toProto(message: _158.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalEscrowForDenomResponse): _158.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisState;
                    fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                    fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                    toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                    fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                    toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                    fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                    toProto(message: _157.GenesisState): Uint8Array;
                    toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _156.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.Allocation;
                    fromPartial(object: Partial<_156.Allocation>): _156.Allocation;
                    fromAmino(object: _156.AllocationAmino): _156.Allocation;
                    toAmino(message: _156.Allocation): _156.AllocationAmino;
                    fromAminoMsg(object: _156.AllocationAminoMsg): _156.Allocation;
                    toAminoMsg(message: _156.Allocation): _156.AllocationAminoMsg;
                    fromProtoMsg(message: _156.AllocationProtoMsg): _156.Allocation;
                    toProto(message: _156.Allocation): Uint8Array;
                    toProtoMsg(message: _156.Allocation): _156.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _156.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.TransferAuthorization;
                    fromPartial(object: Partial<_156.TransferAuthorization>): _156.TransferAuthorization;
                    fromAmino(object: _156.TransferAuthorizationAmino): _156.TransferAuthorization;
                    toAmino(message: _156.TransferAuthorization): _156.TransferAuthorizationAmino;
                    fromAminoMsg(object: _156.TransferAuthorizationAminoMsg): _156.TransferAuthorization;
                    toAminoMsg(message: _156.TransferAuthorization): _156.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _156.TransferAuthorizationProtoMsg): _156.TransferAuthorization;
                    toProto(message: _156.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _156.TransferAuthorization): _156.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _161.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FungibleTokenPacketData;
                    fromPartial(object: Partial<_161.FungibleTokenPacketData>): _161.FungibleTokenPacketData;
                    fromAmino(object: _161.FungibleTokenPacketDataAmino): _161.FungibleTokenPacketData;
                    toAmino(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _161.FungibleTokenPacketDataAminoMsg): _161.FungibleTokenPacketData;
                    toAminoMsg(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _161.FungibleTokenPacketDataProtoMsg): _161.FungibleTokenPacketData;
                    toProto(message: _161.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _333.MsgClientImpl;
                QueryClientImpl: typeof _325.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _164.QueryChannelRequest): Promise<_164.QueryChannelResponse>;
                    channels(request?: _164.QueryChannelsRequest): Promise<_164.QueryChannelsResponse>;
                    connectionChannels(request: _164.QueryConnectionChannelsRequest): Promise<_164.QueryConnectionChannelsResponse>;
                    channelClientState(request: _164.QueryChannelClientStateRequest): Promise<_164.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _164.QueryChannelConsensusStateRequest): Promise<_164.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _164.QueryPacketCommitmentRequest): Promise<_164.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _164.QueryPacketCommitmentsRequest): Promise<_164.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _164.QueryPacketReceiptRequest): Promise<_164.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _164.QueryPacketAcknowledgementRequest): Promise<_164.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _164.QueryPacketAcknowledgementsRequest): Promise<_164.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _164.QueryUnreceivedPacketsRequest): Promise<_164.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _164.QueryUnreceivedAcksRequest): Promise<_164.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _164.QueryNextSequenceReceiveRequest): Promise<_164.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _164.QueryNextSequenceSendRequest): Promise<_164.QueryNextSequenceSendResponse>;
                    upgradeError(request: _164.QueryUpgradeErrorRequest): Promise<_164.QueryUpgradeErrorResponse>;
                    upgrade(request: _164.QueryUpgradeRequest): Promise<_164.QueryUpgradeResponse>;
                    channelParams(request?: _164.QueryChannelParamsRequest): Promise<_164.QueryChannelParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeInit(value: _165.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTry(value: _165.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeAck(value: _165.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeConfirm(value: _165.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeOpen(value: _165.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTimeout(value: _165.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeCancel(value: _165.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateChannelParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        pruneAcknowledgements(value: _165.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: _165.MsgRecvPacket;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: _165.MsgTimeout;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _165.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _165.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _165.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _165.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _165.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _165.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _165.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _165.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _165.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: _165.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _165.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _165.MsgPruneAcknowledgements;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: _165.MsgRecvPacket;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: _165.MsgTimeout;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _165.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _165.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _165.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _165.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _165.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _165.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _165.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _165.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _165.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _165.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _165.MsgUpdateParams): {
                            typeUrl: string;
                            value: _165.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _165.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _165.MsgPruneAcknowledgements;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenInit) => _165.MsgChannelOpenInitAmino;
                        fromAmino: (object: _165.MsgChannelOpenInitAmino) => _165.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenTry) => _165.MsgChannelOpenTryAmino;
                        fromAmino: (object: _165.MsgChannelOpenTryAmino) => _165.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenAck) => _165.MsgChannelOpenAckAmino;
                        fromAmino: (object: _165.MsgChannelOpenAckAmino) => _165.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenConfirm) => _165.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _165.MsgChannelOpenConfirmAmino) => _165.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelCloseInit) => _165.MsgChannelCloseInitAmino;
                        fromAmino: (object: _165.MsgChannelCloseInitAmino) => _165.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelCloseConfirm) => _165.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _165.MsgChannelCloseConfirmAmino) => _165.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _165.MsgRecvPacket) => _165.MsgRecvPacketAmino;
                        fromAmino: (object: _165.MsgRecvPacketAmino) => _165.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _165.MsgTimeout) => _165.MsgTimeoutAmino;
                        fromAmino: (object: _165.MsgTimeoutAmino) => _165.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _165.MsgTimeoutOnClose) => _165.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _165.MsgTimeoutOnCloseAmino) => _165.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _165.MsgAcknowledgement) => _165.MsgAcknowledgementAmino;
                        fromAmino: (object: _165.MsgAcknowledgementAmino) => _165.MsgAcknowledgement;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeInit) => _165.MsgChannelUpgradeInitAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeInitAmino) => _165.MsgChannelUpgradeInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeTry) => _165.MsgChannelUpgradeTryAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeTryAmino) => _165.MsgChannelUpgradeTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeAck) => _165.MsgChannelUpgradeAckAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeAckAmino) => _165.MsgChannelUpgradeAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeConfirm) => _165.MsgChannelUpgradeConfirmAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeConfirmAmino) => _165.MsgChannelUpgradeConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeOpen) => _165.MsgChannelUpgradeOpenAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeOpenAmino) => _165.MsgChannelUpgradeOpen;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeTimeout) => _165.MsgChannelUpgradeTimeoutAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeTimeoutAmino) => _165.MsgChannelUpgradeTimeout;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelUpgradeCancel) => _165.MsgChannelUpgradeCancelAmino;
                        fromAmino: (object: _165.MsgChannelUpgradeCancelAmino) => _165.MsgChannelUpgradeCancel;
                    };
                    "/ibc.core.channel.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _165.MsgUpdateParams) => _165.MsgUpdateParamsAmino;
                        fromAmino: (object: _165.MsgUpdateParamsAmino) => _165.MsgUpdateParams;
                    };
                    "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
                        aminoType: string;
                        toAmino: (message: _165.MsgPruneAcknowledgements) => _165.MsgPruneAcknowledgementsAmino;
                        fromAmino: (object: _165.MsgPruneAcknowledgementsAmino) => _165.MsgPruneAcknowledgements;
                    };
                };
                Upgrade: {
                    typeUrl: string;
                    encode(message: _166.Upgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Upgrade;
                    fromPartial(object: Partial<_166.Upgrade>): _166.Upgrade;
                    fromAmino(object: _166.UpgradeAmino): _166.Upgrade;
                    toAmino(message: _166.Upgrade): _166.UpgradeAmino;
                    fromAminoMsg(object: _166.UpgradeAminoMsg): _166.Upgrade;
                    toAminoMsg(message: _166.Upgrade): _166.UpgradeAminoMsg;
                    fromProtoMsg(message: _166.UpgradeProtoMsg): _166.Upgrade;
                    toProto(message: _166.Upgrade): Uint8Array;
                    toProtoMsg(message: _166.Upgrade): _166.UpgradeProtoMsg;
                };
                UpgradeFields: {
                    typeUrl: string;
                    encode(message: _166.UpgradeFields, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.UpgradeFields;
                    fromPartial(object: Partial<_166.UpgradeFields>): _166.UpgradeFields;
                    fromAmino(object: _166.UpgradeFieldsAmino): _166.UpgradeFields;
                    toAmino(message: _166.UpgradeFields): _166.UpgradeFieldsAmino;
                    fromAminoMsg(object: _166.UpgradeFieldsAminoMsg): _166.UpgradeFields;
                    toAminoMsg(message: _166.UpgradeFields): _166.UpgradeFieldsAminoMsg;
                    fromProtoMsg(message: _166.UpgradeFieldsProtoMsg): _166.UpgradeFields;
                    toProto(message: _166.UpgradeFields): Uint8Array;
                    toProtoMsg(message: _166.UpgradeFields): _166.UpgradeFieldsProtoMsg;
                };
                ErrorReceipt: {
                    typeUrl: string;
                    encode(message: _166.ErrorReceipt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ErrorReceipt;
                    fromPartial(object: Partial<_166.ErrorReceipt>): _166.ErrorReceipt;
                    fromAmino(object: _166.ErrorReceiptAmino): _166.ErrorReceipt;
                    toAmino(message: _166.ErrorReceipt): _166.ErrorReceiptAmino;
                    fromAminoMsg(object: _166.ErrorReceiptAminoMsg): _166.ErrorReceipt;
                    toAminoMsg(message: _166.ErrorReceipt): _166.ErrorReceiptAminoMsg;
                    fromProtoMsg(message: _166.ErrorReceiptProtoMsg): _166.ErrorReceipt;
                    toProto(message: _166.ErrorReceipt): Uint8Array;
                    toProtoMsg(message: _166.ErrorReceipt): _166.ErrorReceiptProtoMsg;
                };
                responseResultTypeFromJSON(object: any): _165.ResponseResultType;
                responseResultTypeToJSON(object: _165.ResponseResultType): string;
                ResponseResultType: typeof _165.ResponseResultType;
                ResponseResultTypeSDKType: typeof _165.ResponseResultType;
                ResponseResultTypeAmino: typeof _165.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenInit;
                    fromPartial(object: Partial<_165.MsgChannelOpenInit>): _165.MsgChannelOpenInit;
                    fromAmino(object: _165.MsgChannelOpenInitAmino): _165.MsgChannelOpenInit;
                    toAmino(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenInitAminoMsg): _165.MsgChannelOpenInit;
                    toAminoMsg(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenInitProtoMsg): _165.MsgChannelOpenInit;
                    toProto(message: _165.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_165.MsgChannelOpenInitResponse>): _165.MsgChannelOpenInitResponse;
                    fromAmino(object: _165.MsgChannelOpenInitResponseAmino): _165.MsgChannelOpenInitResponse;
                    toAmino(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenInitResponseAminoMsg): _165.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenInitResponseProtoMsg): _165.MsgChannelOpenInitResponse;
                    toProto(message: _165.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenTry;
                    fromPartial(object: Partial<_165.MsgChannelOpenTry>): _165.MsgChannelOpenTry;
                    fromAmino(object: _165.MsgChannelOpenTryAmino): _165.MsgChannelOpenTry;
                    toAmino(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenTryAminoMsg): _165.MsgChannelOpenTry;
                    toAminoMsg(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenTryProtoMsg): _165.MsgChannelOpenTry;
                    toProto(message: _165.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_165.MsgChannelOpenTryResponse>): _165.MsgChannelOpenTryResponse;
                    fromAmino(object: _165.MsgChannelOpenTryResponseAmino): _165.MsgChannelOpenTryResponse;
                    toAmino(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenTryResponseAminoMsg): _165.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenTryResponseProtoMsg): _165.MsgChannelOpenTryResponse;
                    toProto(message: _165.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenAck;
                    fromPartial(object: Partial<_165.MsgChannelOpenAck>): _165.MsgChannelOpenAck;
                    fromAmino(object: _165.MsgChannelOpenAckAmino): _165.MsgChannelOpenAck;
                    toAmino(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenAckAminoMsg): _165.MsgChannelOpenAck;
                    toAminoMsg(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenAckProtoMsg): _165.MsgChannelOpenAck;
                    toProto(message: _165.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_165.MsgChannelOpenAckResponse>): _165.MsgChannelOpenAckResponse;
                    fromAmino(_: _165.MsgChannelOpenAckResponseAmino): _165.MsgChannelOpenAckResponse;
                    toAmino(_: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenAckResponseAminoMsg): _165.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenAckResponseProtoMsg): _165.MsgChannelOpenAckResponse;
                    toProto(message: _165.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_165.MsgChannelOpenConfirm>): _165.MsgChannelOpenConfirm;
                    fromAmino(object: _165.MsgChannelOpenConfirmAmino): _165.MsgChannelOpenConfirm;
                    toAmino(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenConfirmAminoMsg): _165.MsgChannelOpenConfirm;
                    toAminoMsg(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenConfirmProtoMsg): _165.MsgChannelOpenConfirm;
                    toProto(message: _165.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_165.MsgChannelOpenConfirmResponse>): _165.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _165.MsgChannelOpenConfirmResponseAmino): _165.MsgChannelOpenConfirmResponse;
                    toAmino(_: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenConfirmResponseAminoMsg): _165.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenConfirmResponseProtoMsg): _165.MsgChannelOpenConfirmResponse;
                    toProto(message: _165.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelCloseInit;
                    fromPartial(object: Partial<_165.MsgChannelCloseInit>): _165.MsgChannelCloseInit;
                    fromAmino(object: _165.MsgChannelCloseInitAmino): _165.MsgChannelCloseInit;
                    toAmino(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseInitAminoMsg): _165.MsgChannelCloseInit;
                    toAminoMsg(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseInitProtoMsg): _165.MsgChannelCloseInit;
                    toProto(message: _165.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_165.MsgChannelCloseInitResponse>): _165.MsgChannelCloseInitResponse;
                    fromAmino(_: _165.MsgChannelCloseInitResponseAmino): _165.MsgChannelCloseInitResponse;
                    toAmino(_: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseInitResponseAminoMsg): _165.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseInitResponseProtoMsg): _165.MsgChannelCloseInitResponse;
                    toProto(message: _165.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_165.MsgChannelCloseConfirm>): _165.MsgChannelCloseConfirm;
                    fromAmino(object: _165.MsgChannelCloseConfirmAmino): _165.MsgChannelCloseConfirm;
                    toAmino(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseConfirmAminoMsg): _165.MsgChannelCloseConfirm;
                    toAminoMsg(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseConfirmProtoMsg): _165.MsgChannelCloseConfirm;
                    toProto(message: _165.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_165.MsgChannelCloseConfirmResponse>): _165.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _165.MsgChannelCloseConfirmResponseAmino): _165.MsgChannelCloseConfirmResponse;
                    toAmino(_: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseConfirmResponseAminoMsg): _165.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseConfirmResponseProtoMsg): _165.MsgChannelCloseConfirmResponse;
                    toProto(message: _165.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _165.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgRecvPacket;
                    fromPartial(object: Partial<_165.MsgRecvPacket>): _165.MsgRecvPacket;
                    fromAmino(object: _165.MsgRecvPacketAmino): _165.MsgRecvPacket;
                    toAmino(message: _165.MsgRecvPacket): _165.MsgRecvPacketAmino;
                    fromAminoMsg(object: _165.MsgRecvPacketAminoMsg): _165.MsgRecvPacket;
                    toAminoMsg(message: _165.MsgRecvPacket): _165.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _165.MsgRecvPacketProtoMsg): _165.MsgRecvPacket;
                    toProto(message: _165.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _165.MsgRecvPacket): _165.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_165.MsgRecvPacketResponse>): _165.MsgRecvPacketResponse;
                    fromAmino(object: _165.MsgRecvPacketResponseAmino): _165.MsgRecvPacketResponse;
                    toAmino(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _165.MsgRecvPacketResponseAminoMsg): _165.MsgRecvPacketResponse;
                    toAminoMsg(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgRecvPacketResponseProtoMsg): _165.MsgRecvPacketResponse;
                    toProto(message: _165.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgTimeout;
                    fromPartial(object: Partial<_165.MsgTimeout>): _165.MsgTimeout;
                    fromAmino(object: _165.MsgTimeoutAmino): _165.MsgTimeout;
                    toAmino(message: _165.MsgTimeout): _165.MsgTimeoutAmino;
                    fromAminoMsg(object: _165.MsgTimeoutAminoMsg): _165.MsgTimeout;
                    toAminoMsg(message: _165.MsgTimeout): _165.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutProtoMsg): _165.MsgTimeout;
                    toProto(message: _165.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeout): _165.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgTimeoutResponse;
                    fromPartial(object: Partial<_165.MsgTimeoutResponse>): _165.MsgTimeoutResponse;
                    fromAmino(object: _165.MsgTimeoutResponseAmino): _165.MsgTimeoutResponse;
                    toAmino(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutResponseAminoMsg): _165.MsgTimeoutResponse;
                    toAminoMsg(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutResponseProtoMsg): _165.MsgTimeoutResponse;
                    toProto(message: _165.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_165.MsgTimeoutOnClose>): _165.MsgTimeoutOnClose;
                    fromAmino(object: _165.MsgTimeoutOnCloseAmino): _165.MsgTimeoutOnClose;
                    toAmino(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutOnCloseAminoMsg): _165.MsgTimeoutOnClose;
                    toAminoMsg(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutOnCloseProtoMsg): _165.MsgTimeoutOnClose;
                    toProto(message: _165.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_165.MsgTimeoutOnCloseResponse>): _165.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _165.MsgTimeoutOnCloseResponseAmino): _165.MsgTimeoutOnCloseResponse;
                    toAmino(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutOnCloseResponseAminoMsg): _165.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutOnCloseResponseProtoMsg): _165.MsgTimeoutOnCloseResponse;
                    toProto(message: _165.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _165.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgAcknowledgement;
                    fromPartial(object: Partial<_165.MsgAcknowledgement>): _165.MsgAcknowledgement;
                    fromAmino(object: _165.MsgAcknowledgementAmino): _165.MsgAcknowledgement;
                    toAmino(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _165.MsgAcknowledgementAminoMsg): _165.MsgAcknowledgement;
                    toAminoMsg(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _165.MsgAcknowledgementProtoMsg): _165.MsgAcknowledgement;
                    toProto(message: _165.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_165.MsgAcknowledgementResponse>): _165.MsgAcknowledgementResponse;
                    fromAmino(object: _165.MsgAcknowledgementResponseAmino): _165.MsgAcknowledgementResponse;
                    toAmino(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _165.MsgAcknowledgementResponseAminoMsg): _165.MsgAcknowledgementResponse;
                    toAminoMsg(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgAcknowledgementResponseProtoMsg): _165.MsgAcknowledgementResponse;
                    toProto(message: _165.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseProtoMsg;
                };
                MsgChannelUpgradeInit: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeInit;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeInit>): _165.MsgChannelUpgradeInit;
                    fromAmino(object: _165.MsgChannelUpgradeInitAmino): _165.MsgChannelUpgradeInit;
                    toAmino(message: _165.MsgChannelUpgradeInit): _165.MsgChannelUpgradeInitAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeInitAminoMsg): _165.MsgChannelUpgradeInit;
                    toAminoMsg(message: _165.MsgChannelUpgradeInit): _165.MsgChannelUpgradeInitAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeInitProtoMsg): _165.MsgChannelUpgradeInit;
                    toProto(message: _165.MsgChannelUpgradeInit): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeInit): _165.MsgChannelUpgradeInitProtoMsg;
                };
                MsgChannelUpgradeInitResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeInitResponse;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeInitResponse>): _165.MsgChannelUpgradeInitResponse;
                    fromAmino(object: _165.MsgChannelUpgradeInitResponseAmino): _165.MsgChannelUpgradeInitResponse;
                    toAmino(message: _165.MsgChannelUpgradeInitResponse): _165.MsgChannelUpgradeInitResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeInitResponseAminoMsg): _165.MsgChannelUpgradeInitResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeInitResponse): _165.MsgChannelUpgradeInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeInitResponseProtoMsg): _165.MsgChannelUpgradeInitResponse;
                    toProto(message: _165.MsgChannelUpgradeInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeInitResponse): _165.MsgChannelUpgradeInitResponseProtoMsg;
                };
                MsgChannelUpgradeTry: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeTry;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeTry>): _165.MsgChannelUpgradeTry;
                    fromAmino(object: _165.MsgChannelUpgradeTryAmino): _165.MsgChannelUpgradeTry;
                    toAmino(message: _165.MsgChannelUpgradeTry): _165.MsgChannelUpgradeTryAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeTryAminoMsg): _165.MsgChannelUpgradeTry;
                    toAminoMsg(message: _165.MsgChannelUpgradeTry): _165.MsgChannelUpgradeTryAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeTryProtoMsg): _165.MsgChannelUpgradeTry;
                    toProto(message: _165.MsgChannelUpgradeTry): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeTry): _165.MsgChannelUpgradeTryProtoMsg;
                };
                MsgChannelUpgradeTryResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeTryResponse;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeTryResponse>): _165.MsgChannelUpgradeTryResponse;
                    fromAmino(object: _165.MsgChannelUpgradeTryResponseAmino): _165.MsgChannelUpgradeTryResponse;
                    toAmino(message: _165.MsgChannelUpgradeTryResponse): _165.MsgChannelUpgradeTryResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeTryResponseAminoMsg): _165.MsgChannelUpgradeTryResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeTryResponse): _165.MsgChannelUpgradeTryResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeTryResponseProtoMsg): _165.MsgChannelUpgradeTryResponse;
                    toProto(message: _165.MsgChannelUpgradeTryResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeTryResponse): _165.MsgChannelUpgradeTryResponseProtoMsg;
                };
                MsgChannelUpgradeAck: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeAck;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeAck>): _165.MsgChannelUpgradeAck;
                    fromAmino(object: _165.MsgChannelUpgradeAckAmino): _165.MsgChannelUpgradeAck;
                    toAmino(message: _165.MsgChannelUpgradeAck): _165.MsgChannelUpgradeAckAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeAckAminoMsg): _165.MsgChannelUpgradeAck;
                    toAminoMsg(message: _165.MsgChannelUpgradeAck): _165.MsgChannelUpgradeAckAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeAckProtoMsg): _165.MsgChannelUpgradeAck;
                    toProto(message: _165.MsgChannelUpgradeAck): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeAck): _165.MsgChannelUpgradeAckProtoMsg;
                };
                MsgChannelUpgradeAckResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeAckResponse;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeAckResponse>): _165.MsgChannelUpgradeAckResponse;
                    fromAmino(object: _165.MsgChannelUpgradeAckResponseAmino): _165.MsgChannelUpgradeAckResponse;
                    toAmino(message: _165.MsgChannelUpgradeAckResponse): _165.MsgChannelUpgradeAckResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeAckResponseAminoMsg): _165.MsgChannelUpgradeAckResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeAckResponse): _165.MsgChannelUpgradeAckResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeAckResponseProtoMsg): _165.MsgChannelUpgradeAckResponse;
                    toProto(message: _165.MsgChannelUpgradeAckResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeAckResponse): _165.MsgChannelUpgradeAckResponseProtoMsg;
                };
                MsgChannelUpgradeConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeConfirm;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeConfirm>): _165.MsgChannelUpgradeConfirm;
                    fromAmino(object: _165.MsgChannelUpgradeConfirmAmino): _165.MsgChannelUpgradeConfirm;
                    toAmino(message: _165.MsgChannelUpgradeConfirm): _165.MsgChannelUpgradeConfirmAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeConfirmAminoMsg): _165.MsgChannelUpgradeConfirm;
                    toAminoMsg(message: _165.MsgChannelUpgradeConfirm): _165.MsgChannelUpgradeConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeConfirmProtoMsg): _165.MsgChannelUpgradeConfirm;
                    toProto(message: _165.MsgChannelUpgradeConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeConfirm): _165.MsgChannelUpgradeConfirmProtoMsg;
                };
                MsgChannelUpgradeConfirmResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeConfirmResponse;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeConfirmResponse>): _165.MsgChannelUpgradeConfirmResponse;
                    fromAmino(object: _165.MsgChannelUpgradeConfirmResponseAmino): _165.MsgChannelUpgradeConfirmResponse;
                    toAmino(message: _165.MsgChannelUpgradeConfirmResponse): _165.MsgChannelUpgradeConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeConfirmResponseAminoMsg): _165.MsgChannelUpgradeConfirmResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeConfirmResponse): _165.MsgChannelUpgradeConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeConfirmResponseProtoMsg): _165.MsgChannelUpgradeConfirmResponse;
                    toProto(message: _165.MsgChannelUpgradeConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeConfirmResponse): _165.MsgChannelUpgradeConfirmResponseProtoMsg;
                };
                MsgChannelUpgradeOpen: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeOpen, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeOpen;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeOpen>): _165.MsgChannelUpgradeOpen;
                    fromAmino(object: _165.MsgChannelUpgradeOpenAmino): _165.MsgChannelUpgradeOpen;
                    toAmino(message: _165.MsgChannelUpgradeOpen): _165.MsgChannelUpgradeOpenAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeOpenAminoMsg): _165.MsgChannelUpgradeOpen;
                    toAminoMsg(message: _165.MsgChannelUpgradeOpen): _165.MsgChannelUpgradeOpenAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeOpenProtoMsg): _165.MsgChannelUpgradeOpen;
                    toProto(message: _165.MsgChannelUpgradeOpen): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeOpen): _165.MsgChannelUpgradeOpenProtoMsg;
                };
                MsgChannelUpgradeOpenResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelUpgradeOpenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeOpenResponse;
                    fromPartial(_: Partial<_165.MsgChannelUpgradeOpenResponse>): _165.MsgChannelUpgradeOpenResponse;
                    fromAmino(_: _165.MsgChannelUpgradeOpenResponseAmino): _165.MsgChannelUpgradeOpenResponse;
                    toAmino(_: _165.MsgChannelUpgradeOpenResponse): _165.MsgChannelUpgradeOpenResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeOpenResponseAminoMsg): _165.MsgChannelUpgradeOpenResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeOpenResponse): _165.MsgChannelUpgradeOpenResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeOpenResponseProtoMsg): _165.MsgChannelUpgradeOpenResponse;
                    toProto(message: _165.MsgChannelUpgradeOpenResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeOpenResponse): _165.MsgChannelUpgradeOpenResponseProtoMsg;
                };
                MsgChannelUpgradeTimeout: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeTimeout;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeTimeout>): _165.MsgChannelUpgradeTimeout;
                    fromAmino(object: _165.MsgChannelUpgradeTimeoutAmino): _165.MsgChannelUpgradeTimeout;
                    toAmino(message: _165.MsgChannelUpgradeTimeout): _165.MsgChannelUpgradeTimeoutAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeTimeoutAminoMsg): _165.MsgChannelUpgradeTimeout;
                    toAminoMsg(message: _165.MsgChannelUpgradeTimeout): _165.MsgChannelUpgradeTimeoutAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeTimeoutProtoMsg): _165.MsgChannelUpgradeTimeout;
                    toProto(message: _165.MsgChannelUpgradeTimeout): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeTimeout): _165.MsgChannelUpgradeTimeoutProtoMsg;
                };
                MsgChannelUpgradeTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelUpgradeTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeTimeoutResponse;
                    fromPartial(_: Partial<_165.MsgChannelUpgradeTimeoutResponse>): _165.MsgChannelUpgradeTimeoutResponse;
                    fromAmino(_: _165.MsgChannelUpgradeTimeoutResponseAmino): _165.MsgChannelUpgradeTimeoutResponse;
                    toAmino(_: _165.MsgChannelUpgradeTimeoutResponse): _165.MsgChannelUpgradeTimeoutResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeTimeoutResponseAminoMsg): _165.MsgChannelUpgradeTimeoutResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeTimeoutResponse): _165.MsgChannelUpgradeTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeTimeoutResponseProtoMsg): _165.MsgChannelUpgradeTimeoutResponse;
                    toProto(message: _165.MsgChannelUpgradeTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeTimeoutResponse): _165.MsgChannelUpgradeTimeoutResponseProtoMsg;
                };
                MsgChannelUpgradeCancel: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelUpgradeCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeCancel;
                    fromPartial(object: Partial<_165.MsgChannelUpgradeCancel>): _165.MsgChannelUpgradeCancel;
                    fromAmino(object: _165.MsgChannelUpgradeCancelAmino): _165.MsgChannelUpgradeCancel;
                    toAmino(message: _165.MsgChannelUpgradeCancel): _165.MsgChannelUpgradeCancelAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeCancelAminoMsg): _165.MsgChannelUpgradeCancel;
                    toAminoMsg(message: _165.MsgChannelUpgradeCancel): _165.MsgChannelUpgradeCancelAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeCancelProtoMsg): _165.MsgChannelUpgradeCancel;
                    toProto(message: _165.MsgChannelUpgradeCancel): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeCancel): _165.MsgChannelUpgradeCancelProtoMsg;
                };
                MsgChannelUpgradeCancelResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelUpgradeCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgChannelUpgradeCancelResponse;
                    fromPartial(_: Partial<_165.MsgChannelUpgradeCancelResponse>): _165.MsgChannelUpgradeCancelResponse;
                    fromAmino(_: _165.MsgChannelUpgradeCancelResponseAmino): _165.MsgChannelUpgradeCancelResponse;
                    toAmino(_: _165.MsgChannelUpgradeCancelResponse): _165.MsgChannelUpgradeCancelResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelUpgradeCancelResponseAminoMsg): _165.MsgChannelUpgradeCancelResponse;
                    toAminoMsg(message: _165.MsgChannelUpgradeCancelResponse): _165.MsgChannelUpgradeCancelResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelUpgradeCancelResponseProtoMsg): _165.MsgChannelUpgradeCancelResponse;
                    toProto(message: _165.MsgChannelUpgradeCancelResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelUpgradeCancelResponse): _165.MsgChannelUpgradeCancelResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _165.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgUpdateParams;
                    fromPartial(object: Partial<_165.MsgUpdateParams>): _165.MsgUpdateParams;
                    fromAmino(object: _165.MsgUpdateParamsAmino): _165.MsgUpdateParams;
                    toAmino(message: _165.MsgUpdateParams): _165.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _165.MsgUpdateParamsAminoMsg): _165.MsgUpdateParams;
                    toAminoMsg(message: _165.MsgUpdateParams): _165.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _165.MsgUpdateParamsProtoMsg): _165.MsgUpdateParams;
                    toProto(message: _165.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _165.MsgUpdateParams): _165.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_165.MsgUpdateParamsResponse>): _165.MsgUpdateParamsResponse;
                    fromAmino(_: _165.MsgUpdateParamsResponseAmino): _165.MsgUpdateParamsResponse;
                    toAmino(_: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _165.MsgUpdateParamsResponseAminoMsg): _165.MsgUpdateParamsResponse;
                    toAminoMsg(message: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgUpdateParamsResponseProtoMsg): _165.MsgUpdateParamsResponse;
                    toProto(message: _165.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgUpdateParamsResponse): _165.MsgUpdateParamsResponseProtoMsg;
                };
                MsgPruneAcknowledgements: {
                    typeUrl: string;
                    encode(message: _165.MsgPruneAcknowledgements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgPruneAcknowledgements;
                    fromPartial(object: Partial<_165.MsgPruneAcknowledgements>): _165.MsgPruneAcknowledgements;
                    fromAmino(object: _165.MsgPruneAcknowledgementsAmino): _165.MsgPruneAcknowledgements;
                    toAmino(message: _165.MsgPruneAcknowledgements): _165.MsgPruneAcknowledgementsAmino;
                    fromAminoMsg(object: _165.MsgPruneAcknowledgementsAminoMsg): _165.MsgPruneAcknowledgements;
                    toAminoMsg(message: _165.MsgPruneAcknowledgements): _165.MsgPruneAcknowledgementsAminoMsg;
                    fromProtoMsg(message: _165.MsgPruneAcknowledgementsProtoMsg): _165.MsgPruneAcknowledgements;
                    toProto(message: _165.MsgPruneAcknowledgements): Uint8Array;
                    toProtoMsg(message: _165.MsgPruneAcknowledgements): _165.MsgPruneAcknowledgementsProtoMsg;
                };
                MsgPruneAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgPruneAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MsgPruneAcknowledgementsResponse;
                    fromPartial(object: Partial<_165.MsgPruneAcknowledgementsResponse>): _165.MsgPruneAcknowledgementsResponse;
                    fromAmino(object: _165.MsgPruneAcknowledgementsResponseAmino): _165.MsgPruneAcknowledgementsResponse;
                    toAmino(message: _165.MsgPruneAcknowledgementsResponse): _165.MsgPruneAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _165.MsgPruneAcknowledgementsResponseAminoMsg): _165.MsgPruneAcknowledgementsResponse;
                    toAminoMsg(message: _165.MsgPruneAcknowledgementsResponse): _165.MsgPruneAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgPruneAcknowledgementsResponseProtoMsg): _165.MsgPruneAcknowledgementsResponse;
                    toProto(message: _165.MsgPruneAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgPruneAcknowledgementsResponse): _165.MsgPruneAcknowledgementsResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelRequest;
                    fromPartial(object: Partial<_164.QueryChannelRequest>): _164.QueryChannelRequest;
                    fromAmino(object: _164.QueryChannelRequestAmino): _164.QueryChannelRequest;
                    toAmino(message: _164.QueryChannelRequest): _164.QueryChannelRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelRequestAminoMsg): _164.QueryChannelRequest;
                    toAminoMsg(message: _164.QueryChannelRequest): _164.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelRequestProtoMsg): _164.QueryChannelRequest;
                    toProto(message: _164.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelRequest): _164.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelResponse;
                    fromPartial(object: Partial<_164.QueryChannelResponse>): _164.QueryChannelResponse;
                    fromAmino(object: _164.QueryChannelResponseAmino): _164.QueryChannelResponse;
                    toAmino(message: _164.QueryChannelResponse): _164.QueryChannelResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelResponseAminoMsg): _164.QueryChannelResponse;
                    toAminoMsg(message: _164.QueryChannelResponse): _164.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelResponseProtoMsg): _164.QueryChannelResponse;
                    toProto(message: _164.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelResponse): _164.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelsRequest;
                    fromPartial(object: Partial<_164.QueryChannelsRequest>): _164.QueryChannelsRequest;
                    fromAmino(object: _164.QueryChannelsRequestAmino): _164.QueryChannelsRequest;
                    toAmino(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelsRequestAminoMsg): _164.QueryChannelsRequest;
                    toAminoMsg(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelsRequestProtoMsg): _164.QueryChannelsRequest;
                    toProto(message: _164.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelsResponse;
                    fromPartial(object: Partial<_164.QueryChannelsResponse>): _164.QueryChannelsResponse;
                    fromAmino(object: _164.QueryChannelsResponseAmino): _164.QueryChannelsResponse;
                    toAmino(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelsResponseAminoMsg): _164.QueryChannelsResponse;
                    toAminoMsg(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelsResponseProtoMsg): _164.QueryChannelsResponse;
                    toProto(message: _164.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_164.QueryConnectionChannelsRequest>): _164.QueryConnectionChannelsRequest;
                    fromAmino(object: _164.QueryConnectionChannelsRequestAmino): _164.QueryConnectionChannelsRequest;
                    toAmino(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionChannelsRequestAminoMsg): _164.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionChannelsRequestProtoMsg): _164.QueryConnectionChannelsRequest;
                    toProto(message: _164.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_164.QueryConnectionChannelsResponse>): _164.QueryConnectionChannelsResponse;
                    fromAmino(object: _164.QueryConnectionChannelsResponseAmino): _164.QueryConnectionChannelsResponse;
                    toAmino(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionChannelsResponseAminoMsg): _164.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionChannelsResponseProtoMsg): _164.QueryConnectionChannelsResponse;
                    toProto(message: _164.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_164.QueryChannelClientStateRequest>): _164.QueryChannelClientStateRequest;
                    fromAmino(object: _164.QueryChannelClientStateRequestAmino): _164.QueryChannelClientStateRequest;
                    toAmino(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelClientStateRequestAminoMsg): _164.QueryChannelClientStateRequest;
                    toAminoMsg(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelClientStateRequestProtoMsg): _164.QueryChannelClientStateRequest;
                    toProto(message: _164.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_164.QueryChannelClientStateResponse>): _164.QueryChannelClientStateResponse;
                    fromAmino(object: _164.QueryChannelClientStateResponseAmino): _164.QueryChannelClientStateResponse;
                    toAmino(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelClientStateResponseAminoMsg): _164.QueryChannelClientStateResponse;
                    toAminoMsg(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelClientStateResponseProtoMsg): _164.QueryChannelClientStateResponse;
                    toProto(message: _164.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_164.QueryChannelConsensusStateRequest>): _164.QueryChannelConsensusStateRequest;
                    fromAmino(object: _164.QueryChannelConsensusStateRequestAmino): _164.QueryChannelConsensusStateRequest;
                    toAmino(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelConsensusStateRequestAminoMsg): _164.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelConsensusStateRequestProtoMsg): _164.QueryChannelConsensusStateRequest;
                    toProto(message: _164.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_164.QueryChannelConsensusStateResponse>): _164.QueryChannelConsensusStateResponse;
                    fromAmino(object: _164.QueryChannelConsensusStateResponseAmino): _164.QueryChannelConsensusStateResponse;
                    toAmino(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelConsensusStateResponseAminoMsg): _164.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelConsensusStateResponseProtoMsg): _164.QueryChannelConsensusStateResponse;
                    toProto(message: _164.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentRequest>): _164.QueryPacketCommitmentRequest;
                    fromAmino(object: _164.QueryPacketCommitmentRequestAmino): _164.QueryPacketCommitmentRequest;
                    toAmino(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentRequestAminoMsg): _164.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentRequestProtoMsg): _164.QueryPacketCommitmentRequest;
                    toProto(message: _164.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentResponse>): _164.QueryPacketCommitmentResponse;
                    fromAmino(object: _164.QueryPacketCommitmentResponseAmino): _164.QueryPacketCommitmentResponse;
                    toAmino(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentResponseAminoMsg): _164.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentResponseProtoMsg): _164.QueryPacketCommitmentResponse;
                    toProto(message: _164.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentsRequest>): _164.QueryPacketCommitmentsRequest;
                    fromAmino(object: _164.QueryPacketCommitmentsRequestAmino): _164.QueryPacketCommitmentsRequest;
                    toAmino(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentsRequestAminoMsg): _164.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentsRequestProtoMsg): _164.QueryPacketCommitmentsRequest;
                    toProto(message: _164.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentsResponse>): _164.QueryPacketCommitmentsResponse;
                    fromAmino(object: _164.QueryPacketCommitmentsResponseAmino): _164.QueryPacketCommitmentsResponse;
                    toAmino(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentsResponseAminoMsg): _164.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentsResponseProtoMsg): _164.QueryPacketCommitmentsResponse;
                    toProto(message: _164.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_164.QueryPacketReceiptRequest>): _164.QueryPacketReceiptRequest;
                    fromAmino(object: _164.QueryPacketReceiptRequestAmino): _164.QueryPacketReceiptRequest;
                    toAmino(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketReceiptRequestAminoMsg): _164.QueryPacketReceiptRequest;
                    toAminoMsg(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketReceiptRequestProtoMsg): _164.QueryPacketReceiptRequest;
                    toProto(message: _164.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_164.QueryPacketReceiptResponse>): _164.QueryPacketReceiptResponse;
                    fromAmino(object: _164.QueryPacketReceiptResponseAmino): _164.QueryPacketReceiptResponse;
                    toAmino(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketReceiptResponseAminoMsg): _164.QueryPacketReceiptResponse;
                    toAminoMsg(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketReceiptResponseProtoMsg): _164.QueryPacketReceiptResponse;
                    toProto(message: _164.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementRequest>): _164.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _164.QueryPacketAcknowledgementRequestAmino): _164.QueryPacketAcknowledgementRequest;
                    toAmino(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementRequestAminoMsg): _164.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementRequestProtoMsg): _164.QueryPacketAcknowledgementRequest;
                    toProto(message: _164.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementResponse>): _164.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _164.QueryPacketAcknowledgementResponseAmino): _164.QueryPacketAcknowledgementResponse;
                    toAmino(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementResponseAminoMsg): _164.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementResponseProtoMsg): _164.QueryPacketAcknowledgementResponse;
                    toProto(message: _164.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementsRequest>): _164.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _164.QueryPacketAcknowledgementsRequestAmino): _164.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementsRequestAminoMsg): _164.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementsRequestProtoMsg): _164.QueryPacketAcknowledgementsRequest;
                    toProto(message: _164.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementsResponse>): _164.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _164.QueryPacketAcknowledgementsResponseAmino): _164.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementsResponseAminoMsg): _164.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementsResponseProtoMsg): _164.QueryPacketAcknowledgementsResponse;
                    toProto(message: _164.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_164.QueryUnreceivedPacketsRequest>): _164.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _164.QueryUnreceivedPacketsRequestAmino): _164.QueryUnreceivedPacketsRequest;
                    toAmino(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedPacketsRequestAminoMsg): _164.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedPacketsRequestProtoMsg): _164.QueryUnreceivedPacketsRequest;
                    toProto(message: _164.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_164.QueryUnreceivedPacketsResponse>): _164.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _164.QueryUnreceivedPacketsResponseAmino): _164.QueryUnreceivedPacketsResponse;
                    toAmino(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedPacketsResponseAminoMsg): _164.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedPacketsResponseProtoMsg): _164.QueryUnreceivedPacketsResponse;
                    toProto(message: _164.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_164.QueryUnreceivedAcksRequest>): _164.QueryUnreceivedAcksRequest;
                    fromAmino(object: _164.QueryUnreceivedAcksRequestAmino): _164.QueryUnreceivedAcksRequest;
                    toAmino(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedAcksRequestAminoMsg): _164.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedAcksRequestProtoMsg): _164.QueryUnreceivedAcksRequest;
                    toProto(message: _164.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_164.QueryUnreceivedAcksResponse>): _164.QueryUnreceivedAcksResponse;
                    fromAmino(object: _164.QueryUnreceivedAcksResponseAmino): _164.QueryUnreceivedAcksResponse;
                    toAmino(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedAcksResponseAminoMsg): _164.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedAcksResponseProtoMsg): _164.QueryUnreceivedAcksResponse;
                    toProto(message: _164.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_164.QueryNextSequenceReceiveRequest>): _164.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _164.QueryNextSequenceReceiveRequestAmino): _164.QueryNextSequenceReceiveRequest;
                    toAmino(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceReceiveRequestAminoMsg): _164.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceReceiveRequestProtoMsg): _164.QueryNextSequenceReceiveRequest;
                    toProto(message: _164.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_164.QueryNextSequenceReceiveResponse>): _164.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _164.QueryNextSequenceReceiveResponseAmino): _164.QueryNextSequenceReceiveResponse;
                    toAmino(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceReceiveResponseAminoMsg): _164.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceReceiveResponseProtoMsg): _164.QueryNextSequenceReceiveResponse;
                    toProto(message: _164.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryNextSequenceSendRequest;
                    fromPartial(object: Partial<_164.QueryNextSequenceSendRequest>): _164.QueryNextSequenceSendRequest;
                    fromAmino(object: _164.QueryNextSequenceSendRequestAmino): _164.QueryNextSequenceSendRequest;
                    toAmino(message: _164.QueryNextSequenceSendRequest): _164.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceSendRequestAminoMsg): _164.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _164.QueryNextSequenceSendRequest): _164.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceSendRequestProtoMsg): _164.QueryNextSequenceSendRequest;
                    toProto(message: _164.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceSendRequest): _164.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryNextSequenceSendResponse;
                    fromPartial(object: Partial<_164.QueryNextSequenceSendResponse>): _164.QueryNextSequenceSendResponse;
                    fromAmino(object: _164.QueryNextSequenceSendResponseAmino): _164.QueryNextSequenceSendResponse;
                    toAmino(message: _164.QueryNextSequenceSendResponse): _164.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceSendResponseAminoMsg): _164.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _164.QueryNextSequenceSendResponse): _164.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceSendResponseProtoMsg): _164.QueryNextSequenceSendResponse;
                    toProto(message: _164.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceSendResponse): _164.QueryNextSequenceSendResponseProtoMsg;
                };
                QueryUpgradeErrorRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUpgradeErrorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUpgradeErrorRequest;
                    fromPartial(object: Partial<_164.QueryUpgradeErrorRequest>): _164.QueryUpgradeErrorRequest;
                    fromAmino(object: _164.QueryUpgradeErrorRequestAmino): _164.QueryUpgradeErrorRequest;
                    toAmino(message: _164.QueryUpgradeErrorRequest): _164.QueryUpgradeErrorRequestAmino;
                    fromAminoMsg(object: _164.QueryUpgradeErrorRequestAminoMsg): _164.QueryUpgradeErrorRequest;
                    toAminoMsg(message: _164.QueryUpgradeErrorRequest): _164.QueryUpgradeErrorRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUpgradeErrorRequestProtoMsg): _164.QueryUpgradeErrorRequest;
                    toProto(message: _164.QueryUpgradeErrorRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUpgradeErrorRequest): _164.QueryUpgradeErrorRequestProtoMsg;
                };
                QueryUpgradeErrorResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUpgradeErrorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUpgradeErrorResponse;
                    fromPartial(object: Partial<_164.QueryUpgradeErrorResponse>): _164.QueryUpgradeErrorResponse;
                    fromAmino(object: _164.QueryUpgradeErrorResponseAmino): _164.QueryUpgradeErrorResponse;
                    toAmino(message: _164.QueryUpgradeErrorResponse): _164.QueryUpgradeErrorResponseAmino;
                    fromAminoMsg(object: _164.QueryUpgradeErrorResponseAminoMsg): _164.QueryUpgradeErrorResponse;
                    toAminoMsg(message: _164.QueryUpgradeErrorResponse): _164.QueryUpgradeErrorResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUpgradeErrorResponseProtoMsg): _164.QueryUpgradeErrorResponse;
                    toProto(message: _164.QueryUpgradeErrorResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUpgradeErrorResponse): _164.QueryUpgradeErrorResponseProtoMsg;
                };
                QueryUpgradeRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUpgradeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUpgradeRequest;
                    fromPartial(object: Partial<_164.QueryUpgradeRequest>): _164.QueryUpgradeRequest;
                    fromAmino(object: _164.QueryUpgradeRequestAmino): _164.QueryUpgradeRequest;
                    toAmino(message: _164.QueryUpgradeRequest): _164.QueryUpgradeRequestAmino;
                    fromAminoMsg(object: _164.QueryUpgradeRequestAminoMsg): _164.QueryUpgradeRequest;
                    toAminoMsg(message: _164.QueryUpgradeRequest): _164.QueryUpgradeRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUpgradeRequestProtoMsg): _164.QueryUpgradeRequest;
                    toProto(message: _164.QueryUpgradeRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUpgradeRequest): _164.QueryUpgradeRequestProtoMsg;
                };
                QueryUpgradeResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUpgradeResponse;
                    fromPartial(object: Partial<_164.QueryUpgradeResponse>): _164.QueryUpgradeResponse;
                    fromAmino(object: _164.QueryUpgradeResponseAmino): _164.QueryUpgradeResponse;
                    toAmino(message: _164.QueryUpgradeResponse): _164.QueryUpgradeResponseAmino;
                    fromAminoMsg(object: _164.QueryUpgradeResponseAminoMsg): _164.QueryUpgradeResponse;
                    toAminoMsg(message: _164.QueryUpgradeResponse): _164.QueryUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUpgradeResponseProtoMsg): _164.QueryUpgradeResponse;
                    toProto(message: _164.QueryUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUpgradeResponse): _164.QueryUpgradeResponseProtoMsg;
                };
                QueryChannelParamsRequest: {
                    typeUrl: string;
                    encode(_: _164.QueryChannelParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelParamsRequest;
                    fromPartial(_: Partial<_164.QueryChannelParamsRequest>): _164.QueryChannelParamsRequest;
                    fromAmino(_: _164.QueryChannelParamsRequestAmino): _164.QueryChannelParamsRequest;
                    toAmino(_: _164.QueryChannelParamsRequest): _164.QueryChannelParamsRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelParamsRequestAminoMsg): _164.QueryChannelParamsRequest;
                    toAminoMsg(message: _164.QueryChannelParamsRequest): _164.QueryChannelParamsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelParamsRequestProtoMsg): _164.QueryChannelParamsRequest;
                    toProto(message: _164.QueryChannelParamsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelParamsRequest): _164.QueryChannelParamsRequestProtoMsg;
                };
                QueryChannelParamsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryChannelParamsResponse;
                    fromPartial(object: Partial<_164.QueryChannelParamsResponse>): _164.QueryChannelParamsResponse;
                    fromAmino(object: _164.QueryChannelParamsResponseAmino): _164.QueryChannelParamsResponse;
                    toAmino(message: _164.QueryChannelParamsResponse): _164.QueryChannelParamsResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelParamsResponseAminoMsg): _164.QueryChannelParamsResponse;
                    toAminoMsg(message: _164.QueryChannelParamsResponse): _164.QueryChannelParamsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelParamsResponseProtoMsg): _164.QueryChannelParamsResponse;
                    toProto(message: _164.QueryChannelParamsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelParamsResponse): _164.QueryChannelParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.GenesisState;
                    fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                    fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                    toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                    fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                    toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                    fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                    toProto(message: _163.GenesisState): Uint8Array;
                    toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _163.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.PacketSequence;
                    fromPartial(object: Partial<_163.PacketSequence>): _163.PacketSequence;
                    fromAmino(object: _163.PacketSequenceAmino): _163.PacketSequence;
                    toAmino(message: _163.PacketSequence): _163.PacketSequenceAmino;
                    fromAminoMsg(object: _163.PacketSequenceAminoMsg): _163.PacketSequence;
                    toAminoMsg(message: _163.PacketSequence): _163.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _163.PacketSequenceProtoMsg): _163.PacketSequence;
                    toProto(message: _163.PacketSequence): Uint8Array;
                    toProtoMsg(message: _163.PacketSequence): _163.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _162.State;
                stateToJSON(object: _162.State): string;
                orderFromJSON(object: any): _162.Order;
                orderToJSON(object: _162.Order): string;
                State: typeof _162.State;
                StateSDKType: typeof _162.State;
                StateAmino: typeof _162.State;
                Order: typeof _162.Order;
                OrderSDKType: typeof _162.Order;
                OrderAmino: typeof _162.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _162.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Channel;
                    fromPartial(object: Partial<_162.Channel>): _162.Channel;
                    fromAmino(object: _162.ChannelAmino): _162.Channel;
                    toAmino(message: _162.Channel): _162.ChannelAmino;
                    fromAminoMsg(object: _162.ChannelAminoMsg): _162.Channel;
                    toAminoMsg(message: _162.Channel): _162.ChannelAminoMsg;
                    fromProtoMsg(message: _162.ChannelProtoMsg): _162.Channel;
                    toProto(message: _162.Channel): Uint8Array;
                    toProtoMsg(message: _162.Channel): _162.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _162.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.IdentifiedChannel;
                    fromPartial(object: Partial<_162.IdentifiedChannel>): _162.IdentifiedChannel;
                    fromAmino(object: _162.IdentifiedChannelAmino): _162.IdentifiedChannel;
                    toAmino(message: _162.IdentifiedChannel): _162.IdentifiedChannelAmino;
                    fromAminoMsg(object: _162.IdentifiedChannelAminoMsg): _162.IdentifiedChannel;
                    toAminoMsg(message: _162.IdentifiedChannel): _162.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _162.IdentifiedChannelProtoMsg): _162.IdentifiedChannel;
                    toProto(message: _162.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _162.IdentifiedChannel): _162.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _162.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Counterparty;
                    fromPartial(object: Partial<_162.Counterparty>): _162.Counterparty;
                    fromAmino(object: _162.CounterpartyAmino): _162.Counterparty;
                    toAmino(message: _162.Counterparty): _162.CounterpartyAmino;
                    fromAminoMsg(object: _162.CounterpartyAminoMsg): _162.Counterparty;
                    toAminoMsg(message: _162.Counterparty): _162.CounterpartyAminoMsg;
                    fromProtoMsg(message: _162.CounterpartyProtoMsg): _162.Counterparty;
                    toProto(message: _162.Counterparty): Uint8Array;
                    toProtoMsg(message: _162.Counterparty): _162.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _162.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Packet;
                    fromPartial(object: Partial<_162.Packet>): _162.Packet;
                    fromAmino(object: _162.PacketAmino): _162.Packet;
                    toAmino(message: _162.Packet): _162.PacketAmino;
                    fromAminoMsg(object: _162.PacketAminoMsg): _162.Packet;
                    toAminoMsg(message: _162.Packet): _162.PacketAminoMsg;
                    fromProtoMsg(message: _162.PacketProtoMsg): _162.Packet;
                    toProto(message: _162.Packet): Uint8Array;
                    toProtoMsg(message: _162.Packet): _162.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _162.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.PacketState;
                    fromPartial(object: Partial<_162.PacketState>): _162.PacketState;
                    fromAmino(object: _162.PacketStateAmino): _162.PacketState;
                    toAmino(message: _162.PacketState): _162.PacketStateAmino;
                    fromAminoMsg(object: _162.PacketStateAminoMsg): _162.PacketState;
                    toAminoMsg(message: _162.PacketState): _162.PacketStateAminoMsg;
                    fromProtoMsg(message: _162.PacketStateProtoMsg): _162.PacketState;
                    toProto(message: _162.PacketState): Uint8Array;
                    toProtoMsg(message: _162.PacketState): _162.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _162.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.PacketId;
                    fromPartial(object: Partial<_162.PacketId>): _162.PacketId;
                    fromAmino(object: _162.PacketIdAmino): _162.PacketId;
                    toAmino(message: _162.PacketId): _162.PacketIdAmino;
                    fromAminoMsg(object: _162.PacketIdAminoMsg): _162.PacketId;
                    toAminoMsg(message: _162.PacketId): _162.PacketIdAminoMsg;
                    fromProtoMsg(message: _162.PacketIdProtoMsg): _162.PacketId;
                    toProto(message: _162.PacketId): Uint8Array;
                    toProtoMsg(message: _162.PacketId): _162.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _162.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Acknowledgement;
                    fromPartial(object: Partial<_162.Acknowledgement>): _162.Acknowledgement;
                    fromAmino(object: _162.AcknowledgementAmino): _162.Acknowledgement;
                    toAmino(message: _162.Acknowledgement): _162.AcknowledgementAmino;
                    fromAminoMsg(object: _162.AcknowledgementAminoMsg): _162.Acknowledgement;
                    toAminoMsg(message: _162.Acknowledgement): _162.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _162.AcknowledgementProtoMsg): _162.Acknowledgement;
                    toProto(message: _162.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _162.Acknowledgement): _162.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _162.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Timeout;
                    fromPartial(object: Partial<_162.Timeout>): _162.Timeout;
                    fromAmino(object: _162.TimeoutAmino): _162.Timeout;
                    toAmino(message: _162.Timeout): _162.TimeoutAmino;
                    fromAminoMsg(object: _162.TimeoutAminoMsg): _162.Timeout;
                    toAminoMsg(message: _162.Timeout): _162.TimeoutAminoMsg;
                    fromProtoMsg(message: _162.TimeoutProtoMsg): _162.Timeout;
                    toProto(message: _162.Timeout): Uint8Array;
                    toProtoMsg(message: _162.Timeout): _162.TimeoutProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Params;
                    fromPartial(object: Partial<_162.Params>): _162.Params;
                    fromAmino(object: _162.ParamsAmino): _162.Params;
                    toAmino(message: _162.Params): _162.ParamsAmino;
                    fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                    toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                    fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                    toProto(message: _162.Params): Uint8Array;
                    toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _334.MsgClientImpl;
                QueryClientImpl: typeof _326.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _169.QueryClientStateRequest): Promise<_169.QueryClientStateResponse>;
                    clientStates(request?: _169.QueryClientStatesRequest): Promise<_169.QueryClientStatesResponse>;
                    consensusState(request: _169.QueryConsensusStateRequest): Promise<_169.QueryConsensusStateResponse>;
                    consensusStates(request: _169.QueryConsensusStatesRequest): Promise<_169.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _169.QueryConsensusStateHeightsRequest): Promise<_169.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _169.QueryClientStatusRequest): Promise<_169.QueryClientStatusResponse>;
                    clientParams(request?: _169.QueryClientParamsRequest): Promise<_169.QueryClientParamsResponse>;
                    upgradedClientState(request?: _169.QueryUpgradedClientStateRequest): Promise<_169.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _169.QueryUpgradedConsensusStateRequest): Promise<_169.QueryUpgradedConsensusStateResponse>;
                    verifyMembership(request: _169.QueryVerifyMembershipRequest): Promise<_169.QueryVerifyMembershipResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _170.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _170.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _170.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _170.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recoverClient(value: _170.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _170.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _170.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _170.MsgCreateClient): {
                            typeUrl: string;
                            value: _170.MsgCreateClient;
                        };
                        updateClient(value: _170.MsgUpdateClient): {
                            typeUrl: string;
                            value: _170.MsgUpdateClient;
                        };
                        upgradeClient(value: _170.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _170.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _170.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _170.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _170.MsgRecoverClient): {
                            typeUrl: string;
                            value: _170.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _170.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _170.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _170.MsgUpdateParams): {
                            typeUrl: string;
                            value: _170.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _170.MsgCreateClient): {
                            typeUrl: string;
                            value: _170.MsgCreateClient;
                        };
                        updateClient(value: _170.MsgUpdateClient): {
                            typeUrl: string;
                            value: _170.MsgUpdateClient;
                        };
                        upgradeClient(value: _170.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _170.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _170.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _170.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _170.MsgRecoverClient): {
                            typeUrl: string;
                            value: _170.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _170.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _170.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _170.MsgUpdateParams): {
                            typeUrl: string;
                            value: _170.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _170.MsgCreateClient) => _170.MsgCreateClientAmino;
                        fromAmino: (object: _170.MsgCreateClientAmino) => _170.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _170.MsgUpdateClient) => _170.MsgUpdateClientAmino;
                        fromAmino: (object: _170.MsgUpdateClientAmino) => _170.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _170.MsgUpgradeClient) => _170.MsgUpgradeClientAmino;
                        fromAmino: (object: _170.MsgUpgradeClientAmino) => _170.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _170.MsgSubmitMisbehaviour) => _170.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _170.MsgSubmitMisbehaviourAmino) => _170.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _170.MsgRecoverClient) => _170.MsgRecoverClientAmino;
                        fromAmino: (object: _170.MsgRecoverClientAmino) => _170.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _170.MsgIBCSoftwareUpgrade) => _170.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _170.MsgIBCSoftwareUpgradeAmino) => _170.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _170.MsgUpdateParams) => _170.MsgUpdateParamsAmino;
                        fromAmino: (object: _170.MsgUpdateParamsAmino) => _170.MsgUpdateParams;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _170.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgCreateClient;
                    fromPartial(object: Partial<_170.MsgCreateClient>): _170.MsgCreateClient;
                    fromAmino(object: _170.MsgCreateClientAmino): _170.MsgCreateClient;
                    toAmino(message: _170.MsgCreateClient): _170.MsgCreateClientAmino;
                    fromAminoMsg(object: _170.MsgCreateClientAminoMsg): _170.MsgCreateClient;
                    toAminoMsg(message: _170.MsgCreateClient): _170.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _170.MsgCreateClientProtoMsg): _170.MsgCreateClient;
                    toProto(message: _170.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _170.MsgCreateClient): _170.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgCreateClientResponse;
                    fromPartial(_: Partial<_170.MsgCreateClientResponse>): _170.MsgCreateClientResponse;
                    fromAmino(_: _170.MsgCreateClientResponseAmino): _170.MsgCreateClientResponse;
                    toAmino(_: _170.MsgCreateClientResponse): _170.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _170.MsgCreateClientResponseAminoMsg): _170.MsgCreateClientResponse;
                    toAminoMsg(message: _170.MsgCreateClientResponse): _170.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgCreateClientResponseProtoMsg): _170.MsgCreateClientResponse;
                    toProto(message: _170.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgCreateClientResponse): _170.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _170.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpdateClient;
                    fromPartial(object: Partial<_170.MsgUpdateClient>): _170.MsgUpdateClient;
                    fromAmino(object: _170.MsgUpdateClientAmino): _170.MsgUpdateClient;
                    toAmino(message: _170.MsgUpdateClient): _170.MsgUpdateClientAmino;
                    fromAminoMsg(object: _170.MsgUpdateClientAminoMsg): _170.MsgUpdateClient;
                    toAminoMsg(message: _170.MsgUpdateClient): _170.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _170.MsgUpdateClientProtoMsg): _170.MsgUpdateClient;
                    toProto(message: _170.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _170.MsgUpdateClient): _170.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_170.MsgUpdateClientResponse>): _170.MsgUpdateClientResponse;
                    fromAmino(_: _170.MsgUpdateClientResponseAmino): _170.MsgUpdateClientResponse;
                    toAmino(_: _170.MsgUpdateClientResponse): _170.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _170.MsgUpdateClientResponseAminoMsg): _170.MsgUpdateClientResponse;
                    toAminoMsg(message: _170.MsgUpdateClientResponse): _170.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgUpdateClientResponseProtoMsg): _170.MsgUpdateClientResponse;
                    toProto(message: _170.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgUpdateClientResponse): _170.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _170.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpgradeClient;
                    fromPartial(object: Partial<_170.MsgUpgradeClient>): _170.MsgUpgradeClient;
                    fromAmino(object: _170.MsgUpgradeClientAmino): _170.MsgUpgradeClient;
                    toAmino(message: _170.MsgUpgradeClient): _170.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _170.MsgUpgradeClientAminoMsg): _170.MsgUpgradeClient;
                    toAminoMsg(message: _170.MsgUpgradeClient): _170.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _170.MsgUpgradeClientProtoMsg): _170.MsgUpgradeClient;
                    toProto(message: _170.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _170.MsgUpgradeClient): _170.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_170.MsgUpgradeClientResponse>): _170.MsgUpgradeClientResponse;
                    fromAmino(_: _170.MsgUpgradeClientResponseAmino): _170.MsgUpgradeClientResponse;
                    toAmino(_: _170.MsgUpgradeClientResponse): _170.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _170.MsgUpgradeClientResponseAminoMsg): _170.MsgUpgradeClientResponse;
                    toAminoMsg(message: _170.MsgUpgradeClientResponse): _170.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgUpgradeClientResponseProtoMsg): _170.MsgUpgradeClientResponse;
                    toProto(message: _170.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgUpgradeClientResponse): _170.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _170.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_170.MsgSubmitMisbehaviour>): _170.MsgSubmitMisbehaviour;
                    fromAmino(object: _170.MsgSubmitMisbehaviourAmino): _170.MsgSubmitMisbehaviour;
                    toAmino(message: _170.MsgSubmitMisbehaviour): _170.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _170.MsgSubmitMisbehaviourAminoMsg): _170.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _170.MsgSubmitMisbehaviour): _170.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _170.MsgSubmitMisbehaviourProtoMsg): _170.MsgSubmitMisbehaviour;
                    toProto(message: _170.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _170.MsgSubmitMisbehaviour): _170.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_170.MsgSubmitMisbehaviourResponse>): _170.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _170.MsgSubmitMisbehaviourResponseAmino): _170.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _170.MsgSubmitMisbehaviourResponse): _170.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _170.MsgSubmitMisbehaviourResponseAminoMsg): _170.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _170.MsgSubmitMisbehaviourResponse): _170.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgSubmitMisbehaviourResponseProtoMsg): _170.MsgSubmitMisbehaviourResponse;
                    toProto(message: _170.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgSubmitMisbehaviourResponse): _170.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _170.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgRecoverClient;
                    fromPartial(object: Partial<_170.MsgRecoverClient>): _170.MsgRecoverClient;
                    fromAmino(object: _170.MsgRecoverClientAmino): _170.MsgRecoverClient;
                    toAmino(message: _170.MsgRecoverClient): _170.MsgRecoverClientAmino;
                    fromAminoMsg(object: _170.MsgRecoverClientAminoMsg): _170.MsgRecoverClient;
                    toAminoMsg(message: _170.MsgRecoverClient): _170.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _170.MsgRecoverClientProtoMsg): _170.MsgRecoverClient;
                    toProto(message: _170.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _170.MsgRecoverClient): _170.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgRecoverClientResponse;
                    fromPartial(_: Partial<_170.MsgRecoverClientResponse>): _170.MsgRecoverClientResponse;
                    fromAmino(_: _170.MsgRecoverClientResponseAmino): _170.MsgRecoverClientResponse;
                    toAmino(_: _170.MsgRecoverClientResponse): _170.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _170.MsgRecoverClientResponseAminoMsg): _170.MsgRecoverClientResponse;
                    toAminoMsg(message: _170.MsgRecoverClientResponse): _170.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgRecoverClientResponseProtoMsg): _170.MsgRecoverClientResponse;
                    toProto(message: _170.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgRecoverClientResponse): _170.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _170.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgIBCSoftwareUpgrade;
                    fromPartial(object: Partial<_170.MsgIBCSoftwareUpgrade>): _170.MsgIBCSoftwareUpgrade;
                    fromAmino(object: _170.MsgIBCSoftwareUpgradeAmino): _170.MsgIBCSoftwareUpgrade;
                    toAmino(message: _170.MsgIBCSoftwareUpgrade): _170.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _170.MsgIBCSoftwareUpgradeAminoMsg): _170.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _170.MsgIBCSoftwareUpgrade): _170.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _170.MsgIBCSoftwareUpgradeProtoMsg): _170.MsgIBCSoftwareUpgrade;
                    toProto(message: _170.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _170.MsgIBCSoftwareUpgrade): _170.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgIBCSoftwareUpgradeResponse;
                    fromPartial(_: Partial<_170.MsgIBCSoftwareUpgradeResponse>): _170.MsgIBCSoftwareUpgradeResponse;
                    fromAmino(_: _170.MsgIBCSoftwareUpgradeResponseAmino): _170.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _170.MsgIBCSoftwareUpgradeResponse): _170.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _170.MsgIBCSoftwareUpgradeResponseAminoMsg): _170.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _170.MsgIBCSoftwareUpgradeResponse): _170.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgIBCSoftwareUpgradeResponseProtoMsg): _170.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _170.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgIBCSoftwareUpgradeResponse): _170.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _170.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpdateParams;
                    fromPartial(object: Partial<_170.MsgUpdateParams>): _170.MsgUpdateParams;
                    fromAmino(object: _170.MsgUpdateParamsAmino): _170.MsgUpdateParams;
                    toAmino(message: _170.MsgUpdateParams): _170.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _170.MsgUpdateParamsAminoMsg): _170.MsgUpdateParams;
                    toAminoMsg(message: _170.MsgUpdateParams): _170.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _170.MsgUpdateParamsProtoMsg): _170.MsgUpdateParams;
                    toProto(message: _170.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _170.MsgUpdateParams): _170.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _170.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_170.MsgUpdateParamsResponse>): _170.MsgUpdateParamsResponse;
                    fromAmino(_: _170.MsgUpdateParamsResponseAmino): _170.MsgUpdateParamsResponse;
                    toAmino(_: _170.MsgUpdateParamsResponse): _170.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _170.MsgUpdateParamsResponseAminoMsg): _170.MsgUpdateParamsResponse;
                    toAminoMsg(message: _170.MsgUpdateParamsResponse): _170.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _170.MsgUpdateParamsResponseProtoMsg): _170.MsgUpdateParamsResponse;
                    toProto(message: _170.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _170.MsgUpdateParamsResponse): _170.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStateRequest;
                    fromPartial(object: Partial<_169.QueryClientStateRequest>): _169.QueryClientStateRequest;
                    fromAmino(object: _169.QueryClientStateRequestAmino): _169.QueryClientStateRequest;
                    toAmino(message: _169.QueryClientStateRequest): _169.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _169.QueryClientStateRequestAminoMsg): _169.QueryClientStateRequest;
                    toAminoMsg(message: _169.QueryClientStateRequest): _169.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStateRequestProtoMsg): _169.QueryClientStateRequest;
                    toProto(message: _169.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStateRequest): _169.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStateResponse;
                    fromPartial(object: Partial<_169.QueryClientStateResponse>): _169.QueryClientStateResponse;
                    fromAmino(object: _169.QueryClientStateResponseAmino): _169.QueryClientStateResponse;
                    toAmino(message: _169.QueryClientStateResponse): _169.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _169.QueryClientStateResponseAminoMsg): _169.QueryClientStateResponse;
                    toAminoMsg(message: _169.QueryClientStateResponse): _169.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStateResponseProtoMsg): _169.QueryClientStateResponse;
                    toProto(message: _169.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStateResponse): _169.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStatesRequest;
                    fromPartial(object: Partial<_169.QueryClientStatesRequest>): _169.QueryClientStatesRequest;
                    fromAmino(object: _169.QueryClientStatesRequestAmino): _169.QueryClientStatesRequest;
                    toAmino(message: _169.QueryClientStatesRequest): _169.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _169.QueryClientStatesRequestAminoMsg): _169.QueryClientStatesRequest;
                    toAminoMsg(message: _169.QueryClientStatesRequest): _169.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStatesRequestProtoMsg): _169.QueryClientStatesRequest;
                    toProto(message: _169.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStatesRequest): _169.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStatesResponse;
                    fromPartial(object: Partial<_169.QueryClientStatesResponse>): _169.QueryClientStatesResponse;
                    fromAmino(object: _169.QueryClientStatesResponseAmino): _169.QueryClientStatesResponse;
                    toAmino(message: _169.QueryClientStatesResponse): _169.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _169.QueryClientStatesResponseAminoMsg): _169.QueryClientStatesResponse;
                    toAminoMsg(message: _169.QueryClientStatesResponse): _169.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStatesResponseProtoMsg): _169.QueryClientStatesResponse;
                    toProto(message: _169.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStatesResponse): _169.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_169.QueryConsensusStateRequest>): _169.QueryConsensusStateRequest;
                    fromAmino(object: _169.QueryConsensusStateRequestAmino): _169.QueryConsensusStateRequest;
                    toAmino(message: _169.QueryConsensusStateRequest): _169.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _169.QueryConsensusStateRequestAminoMsg): _169.QueryConsensusStateRequest;
                    toAminoMsg(message: _169.QueryConsensusStateRequest): _169.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStateRequestProtoMsg): _169.QueryConsensusStateRequest;
                    toProto(message: _169.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStateRequest): _169.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_169.QueryConsensusStateResponse>): _169.QueryConsensusStateResponse;
                    fromAmino(object: _169.QueryConsensusStateResponseAmino): _169.QueryConsensusStateResponse;
                    toAmino(message: _169.QueryConsensusStateResponse): _169.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _169.QueryConsensusStateResponseAminoMsg): _169.QueryConsensusStateResponse;
                    toAminoMsg(message: _169.QueryConsensusStateResponse): _169.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStateResponseProtoMsg): _169.QueryConsensusStateResponse;
                    toProto(message: _169.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStateResponse): _169.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_169.QueryConsensusStatesRequest>): _169.QueryConsensusStatesRequest;
                    fromAmino(object: _169.QueryConsensusStatesRequestAmino): _169.QueryConsensusStatesRequest;
                    toAmino(message: _169.QueryConsensusStatesRequest): _169.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _169.QueryConsensusStatesRequestAminoMsg): _169.QueryConsensusStatesRequest;
                    toAminoMsg(message: _169.QueryConsensusStatesRequest): _169.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStatesRequestProtoMsg): _169.QueryConsensusStatesRequest;
                    toProto(message: _169.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStatesRequest): _169.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_169.QueryConsensusStatesResponse>): _169.QueryConsensusStatesResponse;
                    fromAmino(object: _169.QueryConsensusStatesResponseAmino): _169.QueryConsensusStatesResponse;
                    toAmino(message: _169.QueryConsensusStatesResponse): _169.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _169.QueryConsensusStatesResponseAminoMsg): _169.QueryConsensusStatesResponse;
                    toAminoMsg(message: _169.QueryConsensusStatesResponse): _169.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStatesResponseProtoMsg): _169.QueryConsensusStatesResponse;
                    toProto(message: _169.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStatesResponse): _169.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_169.QueryConsensusStateHeightsRequest>): _169.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _169.QueryConsensusStateHeightsRequestAmino): _169.QueryConsensusStateHeightsRequest;
                    toAmino(message: _169.QueryConsensusStateHeightsRequest): _169.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _169.QueryConsensusStateHeightsRequestAminoMsg): _169.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _169.QueryConsensusStateHeightsRequest): _169.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStateHeightsRequestProtoMsg): _169.QueryConsensusStateHeightsRequest;
                    toProto(message: _169.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStateHeightsRequest): _169.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_169.QueryConsensusStateHeightsResponse>): _169.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _169.QueryConsensusStateHeightsResponseAmino): _169.QueryConsensusStateHeightsResponse;
                    toAmino(message: _169.QueryConsensusStateHeightsResponse): _169.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _169.QueryConsensusStateHeightsResponseAminoMsg): _169.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _169.QueryConsensusStateHeightsResponse): _169.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryConsensusStateHeightsResponseProtoMsg): _169.QueryConsensusStateHeightsResponse;
                    toProto(message: _169.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryConsensusStateHeightsResponse): _169.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStatusRequest;
                    fromPartial(object: Partial<_169.QueryClientStatusRequest>): _169.QueryClientStatusRequest;
                    fromAmino(object: _169.QueryClientStatusRequestAmino): _169.QueryClientStatusRequest;
                    toAmino(message: _169.QueryClientStatusRequest): _169.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _169.QueryClientStatusRequestAminoMsg): _169.QueryClientStatusRequest;
                    toAminoMsg(message: _169.QueryClientStatusRequest): _169.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStatusRequestProtoMsg): _169.QueryClientStatusRequest;
                    toProto(message: _169.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStatusRequest): _169.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientStatusResponse;
                    fromPartial(object: Partial<_169.QueryClientStatusResponse>): _169.QueryClientStatusResponse;
                    fromAmino(object: _169.QueryClientStatusResponseAmino): _169.QueryClientStatusResponse;
                    toAmino(message: _169.QueryClientStatusResponse): _169.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _169.QueryClientStatusResponseAminoMsg): _169.QueryClientStatusResponse;
                    toAminoMsg(message: _169.QueryClientStatusResponse): _169.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryClientStatusResponseProtoMsg): _169.QueryClientStatusResponse;
                    toProto(message: _169.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryClientStatusResponse): _169.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _169.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientParamsRequest;
                    fromPartial(_: Partial<_169.QueryClientParamsRequest>): _169.QueryClientParamsRequest;
                    fromAmino(_: _169.QueryClientParamsRequestAmino): _169.QueryClientParamsRequest;
                    toAmino(_: _169.QueryClientParamsRequest): _169.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _169.QueryClientParamsRequestAminoMsg): _169.QueryClientParamsRequest;
                    toAminoMsg(message: _169.QueryClientParamsRequest): _169.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryClientParamsRequestProtoMsg): _169.QueryClientParamsRequest;
                    toProto(message: _169.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryClientParamsRequest): _169.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryClientParamsResponse;
                    fromPartial(object: Partial<_169.QueryClientParamsResponse>): _169.QueryClientParamsResponse;
                    fromAmino(object: _169.QueryClientParamsResponseAmino): _169.QueryClientParamsResponse;
                    toAmino(message: _169.QueryClientParamsResponse): _169.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _169.QueryClientParamsResponseAminoMsg): _169.QueryClientParamsResponse;
                    toAminoMsg(message: _169.QueryClientParamsResponse): _169.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryClientParamsResponseProtoMsg): _169.QueryClientParamsResponse;
                    toProto(message: _169.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryClientParamsResponse): _169.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _169.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_169.QueryUpgradedClientStateRequest>): _169.QueryUpgradedClientStateRequest;
                    fromAmino(_: _169.QueryUpgradedClientStateRequestAmino): _169.QueryUpgradedClientStateRequest;
                    toAmino(_: _169.QueryUpgradedClientStateRequest): _169.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _169.QueryUpgradedClientStateRequestAminoMsg): _169.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _169.QueryUpgradedClientStateRequest): _169.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryUpgradedClientStateRequestProtoMsg): _169.QueryUpgradedClientStateRequest;
                    toProto(message: _169.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryUpgradedClientStateRequest): _169.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_169.QueryUpgradedClientStateResponse>): _169.QueryUpgradedClientStateResponse;
                    fromAmino(object: _169.QueryUpgradedClientStateResponseAmino): _169.QueryUpgradedClientStateResponse;
                    toAmino(message: _169.QueryUpgradedClientStateResponse): _169.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _169.QueryUpgradedClientStateResponseAminoMsg): _169.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _169.QueryUpgradedClientStateResponse): _169.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryUpgradedClientStateResponseProtoMsg): _169.QueryUpgradedClientStateResponse;
                    toProto(message: _169.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryUpgradedClientStateResponse): _169.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _169.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_169.QueryUpgradedConsensusStateRequest>): _169.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _169.QueryUpgradedConsensusStateRequestAmino): _169.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _169.QueryUpgradedConsensusStateRequestAminoMsg): _169.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryUpgradedConsensusStateRequestProtoMsg): _169.QueryUpgradedConsensusStateRequest;
                    toProto(message: _169.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryUpgradedConsensusStateRequest): _169.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_169.QueryUpgradedConsensusStateResponse>): _169.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _169.QueryUpgradedConsensusStateResponseAmino): _169.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _169.QueryUpgradedConsensusStateResponseAminoMsg): _169.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryUpgradedConsensusStateResponseProtoMsg): _169.QueryUpgradedConsensusStateResponse;
                    toProto(message: _169.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryUpgradedConsensusStateResponse): _169.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                QueryVerifyMembershipRequest: {
                    typeUrl: string;
                    encode(message: _169.QueryVerifyMembershipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryVerifyMembershipRequest;
                    fromPartial(object: Partial<_169.QueryVerifyMembershipRequest>): _169.QueryVerifyMembershipRequest;
                    fromAmino(object: _169.QueryVerifyMembershipRequestAmino): _169.QueryVerifyMembershipRequest;
                    toAmino(message: _169.QueryVerifyMembershipRequest): _169.QueryVerifyMembershipRequestAmino;
                    fromAminoMsg(object: _169.QueryVerifyMembershipRequestAminoMsg): _169.QueryVerifyMembershipRequest;
                    toAminoMsg(message: _169.QueryVerifyMembershipRequest): _169.QueryVerifyMembershipRequestAminoMsg;
                    fromProtoMsg(message: _169.QueryVerifyMembershipRequestProtoMsg): _169.QueryVerifyMembershipRequest;
                    toProto(message: _169.QueryVerifyMembershipRequest): Uint8Array;
                    toProtoMsg(message: _169.QueryVerifyMembershipRequest): _169.QueryVerifyMembershipRequestProtoMsg;
                };
                QueryVerifyMembershipResponse: {
                    typeUrl: string;
                    encode(message: _169.QueryVerifyMembershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryVerifyMembershipResponse;
                    fromPartial(object: Partial<_169.QueryVerifyMembershipResponse>): _169.QueryVerifyMembershipResponse;
                    fromAmino(object: _169.QueryVerifyMembershipResponseAmino): _169.QueryVerifyMembershipResponse;
                    toAmino(message: _169.QueryVerifyMembershipResponse): _169.QueryVerifyMembershipResponseAmino;
                    fromAminoMsg(object: _169.QueryVerifyMembershipResponseAminoMsg): _169.QueryVerifyMembershipResponse;
                    toAminoMsg(message: _169.QueryVerifyMembershipResponse): _169.QueryVerifyMembershipResponseAminoMsg;
                    fromProtoMsg(message: _169.QueryVerifyMembershipResponseProtoMsg): _169.QueryVerifyMembershipResponse;
                    toProto(message: _169.QueryVerifyMembershipResponse): Uint8Array;
                    toProtoMsg(message: _169.QueryVerifyMembershipResponse): _169.QueryVerifyMembershipResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _168.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisState;
                    fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
                    fromAmino(object: _168.GenesisStateAmino): _168.GenesisState;
                    toAmino(message: _168.GenesisState): _168.GenesisStateAmino;
                    fromAminoMsg(object: _168.GenesisStateAminoMsg): _168.GenesisState;
                    toAminoMsg(message: _168.GenesisState): _168.GenesisStateAminoMsg;
                    fromProtoMsg(message: _168.GenesisStateProtoMsg): _168.GenesisState;
                    toProto(message: _168.GenesisState): Uint8Array;
                    toProtoMsg(message: _168.GenesisState): _168.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _168.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisMetadata;
                    fromPartial(object: Partial<_168.GenesisMetadata>): _168.GenesisMetadata;
                    fromAmino(object: _168.GenesisMetadataAmino): _168.GenesisMetadata;
                    toAmino(message: _168.GenesisMetadata): _168.GenesisMetadataAmino;
                    fromAminoMsg(object: _168.GenesisMetadataAminoMsg): _168.GenesisMetadata;
                    toAminoMsg(message: _168.GenesisMetadata): _168.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _168.GenesisMetadataProtoMsg): _168.GenesisMetadata;
                    toProto(message: _168.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _168.GenesisMetadata): _168.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _168.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_168.IdentifiedGenesisMetadata>): _168.IdentifiedGenesisMetadata;
                    fromAmino(object: _168.IdentifiedGenesisMetadataAmino): _168.IdentifiedGenesisMetadata;
                    toAmino(message: _168.IdentifiedGenesisMetadata): _168.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _168.IdentifiedGenesisMetadataAminoMsg): _168.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _168.IdentifiedGenesisMetadata): _168.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _168.IdentifiedGenesisMetadataProtoMsg): _168.IdentifiedGenesisMetadata;
                    toProto(message: _168.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _168.IdentifiedGenesisMetadata): _168.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _167.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.IdentifiedClientState;
                    fromPartial(object: Partial<_167.IdentifiedClientState>): _167.IdentifiedClientState;
                    fromAmino(object: _167.IdentifiedClientStateAmino): _167.IdentifiedClientState;
                    toAmino(message: _167.IdentifiedClientState): _167.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _167.IdentifiedClientStateAminoMsg): _167.IdentifiedClientState;
                    toAminoMsg(message: _167.IdentifiedClientState): _167.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _167.IdentifiedClientStateProtoMsg): _167.IdentifiedClientState;
                    toProto(message: _167.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _167.IdentifiedClientState): _167.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _167.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_167.ConsensusStateWithHeight>): _167.ConsensusStateWithHeight;
                    fromAmino(object: _167.ConsensusStateWithHeightAmino): _167.ConsensusStateWithHeight;
                    toAmino(message: _167.ConsensusStateWithHeight): _167.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _167.ConsensusStateWithHeightAminoMsg): _167.ConsensusStateWithHeight;
                    toAminoMsg(message: _167.ConsensusStateWithHeight): _167.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _167.ConsensusStateWithHeightProtoMsg): _167.ConsensusStateWithHeight;
                    toProto(message: _167.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _167.ConsensusStateWithHeight): _167.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _167.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.ClientConsensusStates;
                    fromPartial(object: Partial<_167.ClientConsensusStates>): _167.ClientConsensusStates;
                    fromAmino(object: _167.ClientConsensusStatesAmino): _167.ClientConsensusStates;
                    toAmino(message: _167.ClientConsensusStates): _167.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _167.ClientConsensusStatesAminoMsg): _167.ClientConsensusStates;
                    toAminoMsg(message: _167.ClientConsensusStates): _167.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _167.ClientConsensusStatesProtoMsg): _167.ClientConsensusStates;
                    toProto(message: _167.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _167.ClientConsensusStates): _167.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _167.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.Height;
                    fromPartial(object: Partial<_167.Height>): _167.Height;
                    fromAmino(object: _167.HeightAmino): _167.Height;
                    toAmino(message: _167.Height): _167.HeightAmino;
                    fromAminoMsg(object: _167.HeightAminoMsg): _167.Height;
                    toAminoMsg(message: _167.Height): _167.HeightAminoMsg;
                    fromProtoMsg(message: _167.HeightProtoMsg): _167.Height;
                    toProto(message: _167.Height): Uint8Array;
                    toProtoMsg(message: _167.Height): _167.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _167.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.Params;
                    fromPartial(object: Partial<_167.Params>): _167.Params;
                    fromAmino(object: _167.ParamsAmino): _167.Params;
                    toAmino(message: _167.Params): _167.ParamsAmino;
                    fromAminoMsg(object: _167.ParamsAminoMsg): _167.Params;
                    toAminoMsg(message: _167.Params): _167.ParamsAminoMsg;
                    fromProtoMsg(message: _167.ParamsProtoMsg): _167.Params;
                    toProto(message: _167.Params): Uint8Array;
                    toProtoMsg(message: _167.Params): _167.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _167.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.ClientUpdateProposal;
                    fromPartial(object: Partial<_167.ClientUpdateProposal>): _167.ClientUpdateProposal;
                    fromAmino(object: _167.ClientUpdateProposalAmino): _167.ClientUpdateProposal;
                    toAmino(message: _167.ClientUpdateProposal): _167.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _167.ClientUpdateProposalAminoMsg): _167.ClientUpdateProposal;
                    toAminoMsg(message: _167.ClientUpdateProposal): _167.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _167.ClientUpdateProposalProtoMsg): _167.ClientUpdateProposal;
                    toProto(message: _167.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _167.ClientUpdateProposal): _167.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _167.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.UpgradeProposal;
                    fromPartial(object: Partial<_167.UpgradeProposal>): _167.UpgradeProposal;
                    fromAmino(object: _167.UpgradeProposalAmino): _167.UpgradeProposal;
                    toAmino(message: _167.UpgradeProposal): _167.UpgradeProposalAmino;
                    fromAminoMsg(object: _167.UpgradeProposalAminoMsg): _167.UpgradeProposal;
                    toAminoMsg(message: _167.UpgradeProposal): _167.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _167.UpgradeProposalProtoMsg): _167.UpgradeProposal;
                    toProto(message: _167.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _167.UpgradeProposal): _167.UpgradeProposalProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _171.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MerkleRoot;
                    fromPartial(object: Partial<_171.MerkleRoot>): _171.MerkleRoot;
                    fromAmino(object: _171.MerkleRootAmino): _171.MerkleRoot;
                    toAmino(message: _171.MerkleRoot): _171.MerkleRootAmino;
                    fromAminoMsg(object: _171.MerkleRootAminoMsg): _171.MerkleRoot;
                    toAminoMsg(message: _171.MerkleRoot): _171.MerkleRootAminoMsg;
                    fromProtoMsg(message: _171.MerkleRootProtoMsg): _171.MerkleRoot;
                    toProto(message: _171.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _171.MerkleRoot): _171.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _171.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MerklePrefix;
                    fromPartial(object: Partial<_171.MerklePrefix>): _171.MerklePrefix;
                    fromAmino(object: _171.MerklePrefixAmino): _171.MerklePrefix;
                    toAmino(message: _171.MerklePrefix): _171.MerklePrefixAmino;
                    fromAminoMsg(object: _171.MerklePrefixAminoMsg): _171.MerklePrefix;
                    toAminoMsg(message: _171.MerklePrefix): _171.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _171.MerklePrefixProtoMsg): _171.MerklePrefix;
                    toProto(message: _171.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _171.MerklePrefix): _171.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _171.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MerklePath;
                    fromPartial(object: Partial<_171.MerklePath>): _171.MerklePath;
                    fromAmino(object: _171.MerklePathAmino): _171.MerklePath;
                    toAmino(message: _171.MerklePath): _171.MerklePathAmino;
                    fromAminoMsg(object: _171.MerklePathAminoMsg): _171.MerklePath;
                    toAminoMsg(message: _171.MerklePath): _171.MerklePathAminoMsg;
                    fromProtoMsg(message: _171.MerklePathProtoMsg): _171.MerklePath;
                    toProto(message: _171.MerklePath): Uint8Array;
                    toProtoMsg(message: _171.MerklePath): _171.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _171.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MerkleProof;
                    fromPartial(object: Partial<_171.MerkleProof>): _171.MerkleProof;
                    fromAmino(object: _171.MerkleProofAmino): _171.MerkleProof;
                    toAmino(message: _171.MerkleProof): _171.MerkleProofAmino;
                    fromAminoMsg(object: _171.MerkleProofAminoMsg): _171.MerkleProof;
                    toAminoMsg(message: _171.MerkleProof): _171.MerkleProofAminoMsg;
                    fromProtoMsg(message: _171.MerkleProofProtoMsg): _171.MerkleProof;
                    toProto(message: _171.MerkleProof): Uint8Array;
                    toProtoMsg(message: _171.MerkleProof): _171.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _335.MsgClientImpl;
                QueryClientImpl: typeof _327.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _174.QueryConnectionRequest): Promise<_174.QueryConnectionResponse>;
                    connections(request?: _174.QueryConnectionsRequest): Promise<_174.QueryConnectionsResponse>;
                    clientConnections(request: _174.QueryClientConnectionsRequest): Promise<_174.QueryClientConnectionsResponse>;
                    connectionClientState(request: _174.QueryConnectionClientStateRequest): Promise<_174.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _174.QueryConnectionConsensusStateRequest): Promise<_174.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _174.QueryConnectionParamsRequest): Promise<_174.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _175.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _175.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _175.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _175.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _175.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _175.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _175.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _175.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _175.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _175.MsgUpdateParams): {
                            typeUrl: string;
                            value: _175.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _175.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _175.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _175.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _175.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _175.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _175.MsgUpdateParams): {
                            typeUrl: string;
                            value: _175.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _175.MsgConnectionOpenInit) => _175.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _175.MsgConnectionOpenInitAmino) => _175.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _175.MsgConnectionOpenTry) => _175.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _175.MsgConnectionOpenTryAmino) => _175.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _175.MsgConnectionOpenAck) => _175.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _175.MsgConnectionOpenAckAmino) => _175.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _175.MsgConnectionOpenConfirm) => _175.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _175.MsgConnectionOpenConfirmAmino) => _175.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _175.MsgUpdateParams) => _175.MsgUpdateParamsAmino;
                        fromAmino: (object: _175.MsgUpdateParamsAmino) => _175.MsgUpdateParams;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _175.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_175.MsgConnectionOpenInit>): _175.MsgConnectionOpenInit;
                    fromAmino(object: _175.MsgConnectionOpenInitAmino): _175.MsgConnectionOpenInit;
                    toAmino(message: _175.MsgConnectionOpenInit): _175.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenInitAminoMsg): _175.MsgConnectionOpenInit;
                    toAminoMsg(message: _175.MsgConnectionOpenInit): _175.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenInitProtoMsg): _175.MsgConnectionOpenInit;
                    toProto(message: _175.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenInit): _175.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _175.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_175.MsgConnectionOpenInitResponse>): _175.MsgConnectionOpenInitResponse;
                    fromAmino(_: _175.MsgConnectionOpenInitResponseAmino): _175.MsgConnectionOpenInitResponse;
                    toAmino(_: _175.MsgConnectionOpenInitResponse): _175.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenInitResponseAminoMsg): _175.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _175.MsgConnectionOpenInitResponse): _175.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenInitResponseProtoMsg): _175.MsgConnectionOpenInitResponse;
                    toProto(message: _175.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenInitResponse): _175.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _175.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_175.MsgConnectionOpenTry>): _175.MsgConnectionOpenTry;
                    fromAmino(object: _175.MsgConnectionOpenTryAmino): _175.MsgConnectionOpenTry;
                    toAmino(message: _175.MsgConnectionOpenTry): _175.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenTryAminoMsg): _175.MsgConnectionOpenTry;
                    toAminoMsg(message: _175.MsgConnectionOpenTry): _175.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenTryProtoMsg): _175.MsgConnectionOpenTry;
                    toProto(message: _175.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenTry): _175.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _175.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_175.MsgConnectionOpenTryResponse>): _175.MsgConnectionOpenTryResponse;
                    fromAmino(_: _175.MsgConnectionOpenTryResponseAmino): _175.MsgConnectionOpenTryResponse;
                    toAmino(_: _175.MsgConnectionOpenTryResponse): _175.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenTryResponseAminoMsg): _175.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _175.MsgConnectionOpenTryResponse): _175.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenTryResponseProtoMsg): _175.MsgConnectionOpenTryResponse;
                    toProto(message: _175.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenTryResponse): _175.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _175.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_175.MsgConnectionOpenAck>): _175.MsgConnectionOpenAck;
                    fromAmino(object: _175.MsgConnectionOpenAckAmino): _175.MsgConnectionOpenAck;
                    toAmino(message: _175.MsgConnectionOpenAck): _175.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenAckAminoMsg): _175.MsgConnectionOpenAck;
                    toAminoMsg(message: _175.MsgConnectionOpenAck): _175.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenAckProtoMsg): _175.MsgConnectionOpenAck;
                    toProto(message: _175.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenAck): _175.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _175.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_175.MsgConnectionOpenAckResponse>): _175.MsgConnectionOpenAckResponse;
                    fromAmino(_: _175.MsgConnectionOpenAckResponseAmino): _175.MsgConnectionOpenAckResponse;
                    toAmino(_: _175.MsgConnectionOpenAckResponse): _175.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenAckResponseAminoMsg): _175.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _175.MsgConnectionOpenAckResponse): _175.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenAckResponseProtoMsg): _175.MsgConnectionOpenAckResponse;
                    toProto(message: _175.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenAckResponse): _175.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _175.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_175.MsgConnectionOpenConfirm>): _175.MsgConnectionOpenConfirm;
                    fromAmino(object: _175.MsgConnectionOpenConfirmAmino): _175.MsgConnectionOpenConfirm;
                    toAmino(message: _175.MsgConnectionOpenConfirm): _175.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenConfirmAminoMsg): _175.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _175.MsgConnectionOpenConfirm): _175.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenConfirmProtoMsg): _175.MsgConnectionOpenConfirm;
                    toProto(message: _175.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenConfirm): _175.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _175.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_175.MsgConnectionOpenConfirmResponse>): _175.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _175.MsgConnectionOpenConfirmResponseAmino): _175.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _175.MsgConnectionOpenConfirmResponse): _175.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _175.MsgConnectionOpenConfirmResponseAminoMsg): _175.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _175.MsgConnectionOpenConfirmResponse): _175.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _175.MsgConnectionOpenConfirmResponseProtoMsg): _175.MsgConnectionOpenConfirmResponse;
                    toProto(message: _175.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _175.MsgConnectionOpenConfirmResponse): _175.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _175.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateParams;
                    fromPartial(object: Partial<_175.MsgUpdateParams>): _175.MsgUpdateParams;
                    fromAmino(object: _175.MsgUpdateParamsAmino): _175.MsgUpdateParams;
                    toAmino(message: _175.MsgUpdateParams): _175.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _175.MsgUpdateParamsAminoMsg): _175.MsgUpdateParams;
                    toAminoMsg(message: _175.MsgUpdateParams): _175.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _175.MsgUpdateParamsProtoMsg): _175.MsgUpdateParams;
                    toProto(message: _175.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _175.MsgUpdateParams): _175.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _175.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_175.MsgUpdateParamsResponse>): _175.MsgUpdateParamsResponse;
                    fromAmino(_: _175.MsgUpdateParamsResponseAmino): _175.MsgUpdateParamsResponse;
                    toAmino(_: _175.MsgUpdateParamsResponse): _175.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _175.MsgUpdateParamsResponseAminoMsg): _175.MsgUpdateParamsResponse;
                    toAminoMsg(message: _175.MsgUpdateParamsResponse): _175.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _175.MsgUpdateParamsResponseProtoMsg): _175.MsgUpdateParamsResponse;
                    toProto(message: _175.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _175.MsgUpdateParamsResponse): _175.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionRequest;
                    fromPartial(object: Partial<_174.QueryConnectionRequest>): _174.QueryConnectionRequest;
                    fromAmino(object: _174.QueryConnectionRequestAmino): _174.QueryConnectionRequest;
                    toAmino(message: _174.QueryConnectionRequest): _174.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _174.QueryConnectionRequestAminoMsg): _174.QueryConnectionRequest;
                    toAminoMsg(message: _174.QueryConnectionRequest): _174.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionRequestProtoMsg): _174.QueryConnectionRequest;
                    toProto(message: _174.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionRequest): _174.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionResponse;
                    fromPartial(object: Partial<_174.QueryConnectionResponse>): _174.QueryConnectionResponse;
                    fromAmino(object: _174.QueryConnectionResponseAmino): _174.QueryConnectionResponse;
                    toAmino(message: _174.QueryConnectionResponse): _174.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _174.QueryConnectionResponseAminoMsg): _174.QueryConnectionResponse;
                    toAminoMsg(message: _174.QueryConnectionResponse): _174.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionResponseProtoMsg): _174.QueryConnectionResponse;
                    toProto(message: _174.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionResponse): _174.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionsRequest;
                    fromPartial(object: Partial<_174.QueryConnectionsRequest>): _174.QueryConnectionsRequest;
                    fromAmino(object: _174.QueryConnectionsRequestAmino): _174.QueryConnectionsRequest;
                    toAmino(message: _174.QueryConnectionsRequest): _174.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _174.QueryConnectionsRequestAminoMsg): _174.QueryConnectionsRequest;
                    toAminoMsg(message: _174.QueryConnectionsRequest): _174.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionsRequestProtoMsg): _174.QueryConnectionsRequest;
                    toProto(message: _174.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionsRequest): _174.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionsResponse;
                    fromPartial(object: Partial<_174.QueryConnectionsResponse>): _174.QueryConnectionsResponse;
                    fromAmino(object: _174.QueryConnectionsResponseAmino): _174.QueryConnectionsResponse;
                    toAmino(message: _174.QueryConnectionsResponse): _174.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _174.QueryConnectionsResponseAminoMsg): _174.QueryConnectionsResponse;
                    toAminoMsg(message: _174.QueryConnectionsResponse): _174.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionsResponseProtoMsg): _174.QueryConnectionsResponse;
                    toProto(message: _174.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionsResponse): _174.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _174.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_174.QueryClientConnectionsRequest>): _174.QueryClientConnectionsRequest;
                    fromAmino(object: _174.QueryClientConnectionsRequestAmino): _174.QueryClientConnectionsRequest;
                    toAmino(message: _174.QueryClientConnectionsRequest): _174.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _174.QueryClientConnectionsRequestAminoMsg): _174.QueryClientConnectionsRequest;
                    toAminoMsg(message: _174.QueryClientConnectionsRequest): _174.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryClientConnectionsRequestProtoMsg): _174.QueryClientConnectionsRequest;
                    toProto(message: _174.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryClientConnectionsRequest): _174.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_174.QueryClientConnectionsResponse>): _174.QueryClientConnectionsResponse;
                    fromAmino(object: _174.QueryClientConnectionsResponseAmino): _174.QueryClientConnectionsResponse;
                    toAmino(message: _174.QueryClientConnectionsResponse): _174.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _174.QueryClientConnectionsResponseAminoMsg): _174.QueryClientConnectionsResponse;
                    toAminoMsg(message: _174.QueryClientConnectionsResponse): _174.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryClientConnectionsResponseProtoMsg): _174.QueryClientConnectionsResponse;
                    toProto(message: _174.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryClientConnectionsResponse): _174.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_174.QueryConnectionClientStateRequest>): _174.QueryConnectionClientStateRequest;
                    fromAmino(object: _174.QueryConnectionClientStateRequestAmino): _174.QueryConnectionClientStateRequest;
                    toAmino(message: _174.QueryConnectionClientStateRequest): _174.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _174.QueryConnectionClientStateRequestAminoMsg): _174.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _174.QueryConnectionClientStateRequest): _174.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionClientStateRequestProtoMsg): _174.QueryConnectionClientStateRequest;
                    toProto(message: _174.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionClientStateRequest): _174.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_174.QueryConnectionClientStateResponse>): _174.QueryConnectionClientStateResponse;
                    fromAmino(object: _174.QueryConnectionClientStateResponseAmino): _174.QueryConnectionClientStateResponse;
                    toAmino(message: _174.QueryConnectionClientStateResponse): _174.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _174.QueryConnectionClientStateResponseAminoMsg): _174.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _174.QueryConnectionClientStateResponse): _174.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionClientStateResponseProtoMsg): _174.QueryConnectionClientStateResponse;
                    toProto(message: _174.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionClientStateResponse): _174.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_174.QueryConnectionConsensusStateRequest>): _174.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _174.QueryConnectionConsensusStateRequestAmino): _174.QueryConnectionConsensusStateRequest;
                    toAmino(message: _174.QueryConnectionConsensusStateRequest): _174.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _174.QueryConnectionConsensusStateRequestAminoMsg): _174.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _174.QueryConnectionConsensusStateRequest): _174.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionConsensusStateRequestProtoMsg): _174.QueryConnectionConsensusStateRequest;
                    toProto(message: _174.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionConsensusStateRequest): _174.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_174.QueryConnectionConsensusStateResponse>): _174.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _174.QueryConnectionConsensusStateResponseAmino): _174.QueryConnectionConsensusStateResponse;
                    toAmino(message: _174.QueryConnectionConsensusStateResponse): _174.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _174.QueryConnectionConsensusStateResponseAminoMsg): _174.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _174.QueryConnectionConsensusStateResponse): _174.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionConsensusStateResponseProtoMsg): _174.QueryConnectionConsensusStateResponse;
                    toProto(message: _174.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionConsensusStateResponse): _174.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _174.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_174.QueryConnectionParamsRequest>): _174.QueryConnectionParamsRequest;
                    fromAmino(_: _174.QueryConnectionParamsRequestAmino): _174.QueryConnectionParamsRequest;
                    toAmino(_: _174.QueryConnectionParamsRequest): _174.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _174.QueryConnectionParamsRequestAminoMsg): _174.QueryConnectionParamsRequest;
                    toAminoMsg(message: _174.QueryConnectionParamsRequest): _174.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionParamsRequestProtoMsg): _174.QueryConnectionParamsRequest;
                    toProto(message: _174.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionParamsRequest): _174.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _174.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_174.QueryConnectionParamsResponse>): _174.QueryConnectionParamsResponse;
                    fromAmino(object: _174.QueryConnectionParamsResponseAmino): _174.QueryConnectionParamsResponse;
                    toAmino(message: _174.QueryConnectionParamsResponse): _174.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _174.QueryConnectionParamsResponseAminoMsg): _174.QueryConnectionParamsResponse;
                    toAminoMsg(message: _174.QueryConnectionParamsResponse): _174.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _174.QueryConnectionParamsResponseProtoMsg): _174.QueryConnectionParamsResponse;
                    toProto(message: _174.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _174.QueryConnectionParamsResponse): _174.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _173.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.GenesisState;
                    fromPartial(object: Partial<_173.GenesisState>): _173.GenesisState;
                    fromAmino(object: _173.GenesisStateAmino): _173.GenesisState;
                    toAmino(message: _173.GenesisState): _173.GenesisStateAmino;
                    fromAminoMsg(object: _173.GenesisStateAminoMsg): _173.GenesisState;
                    toAminoMsg(message: _173.GenesisState): _173.GenesisStateAminoMsg;
                    fromProtoMsg(message: _173.GenesisStateProtoMsg): _173.GenesisState;
                    toProto(message: _173.GenesisState): Uint8Array;
                    toProtoMsg(message: _173.GenesisState): _173.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _172.State;
                stateToJSON(object: _172.State): string;
                State: typeof _172.State;
                StateSDKType: typeof _172.State;
                StateAmino: typeof _172.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _172.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ConnectionEnd;
                    fromPartial(object: Partial<_172.ConnectionEnd>): _172.ConnectionEnd;
                    fromAmino(object: _172.ConnectionEndAmino): _172.ConnectionEnd;
                    toAmino(message: _172.ConnectionEnd): _172.ConnectionEndAmino;
                    fromAminoMsg(object: _172.ConnectionEndAminoMsg): _172.ConnectionEnd;
                    toAminoMsg(message: _172.ConnectionEnd): _172.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _172.ConnectionEndProtoMsg): _172.ConnectionEnd;
                    toProto(message: _172.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _172.ConnectionEnd): _172.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _172.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.IdentifiedConnection;
                    fromPartial(object: Partial<_172.IdentifiedConnection>): _172.IdentifiedConnection;
                    fromAmino(object: _172.IdentifiedConnectionAmino): _172.IdentifiedConnection;
                    toAmino(message: _172.IdentifiedConnection): _172.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _172.IdentifiedConnectionAminoMsg): _172.IdentifiedConnection;
                    toAminoMsg(message: _172.IdentifiedConnection): _172.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _172.IdentifiedConnectionProtoMsg): _172.IdentifiedConnection;
                    toProto(message: _172.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _172.IdentifiedConnection): _172.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _172.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Counterparty;
                    fromPartial(object: Partial<_172.Counterparty>): _172.Counterparty;
                    fromAmino(object: _172.CounterpartyAmino): _172.Counterparty;
                    toAmino(message: _172.Counterparty): _172.CounterpartyAmino;
                    fromAminoMsg(object: _172.CounterpartyAminoMsg): _172.Counterparty;
                    toAminoMsg(message: _172.Counterparty): _172.CounterpartyAminoMsg;
                    fromProtoMsg(message: _172.CounterpartyProtoMsg): _172.Counterparty;
                    toProto(message: _172.Counterparty): Uint8Array;
                    toProtoMsg(message: _172.Counterparty): _172.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _172.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ClientPaths;
                    fromPartial(object: Partial<_172.ClientPaths>): _172.ClientPaths;
                    fromAmino(object: _172.ClientPathsAmino): _172.ClientPaths;
                    toAmino(message: _172.ClientPaths): _172.ClientPathsAmino;
                    fromAminoMsg(object: _172.ClientPathsAminoMsg): _172.ClientPaths;
                    toAminoMsg(message: _172.ClientPaths): _172.ClientPathsAminoMsg;
                    fromProtoMsg(message: _172.ClientPathsProtoMsg): _172.ClientPaths;
                    toProto(message: _172.ClientPaths): Uint8Array;
                    toProtoMsg(message: _172.ClientPaths): _172.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _172.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ConnectionPaths;
                    fromPartial(object: Partial<_172.ConnectionPaths>): _172.ConnectionPaths;
                    fromAmino(object: _172.ConnectionPathsAmino): _172.ConnectionPaths;
                    toAmino(message: _172.ConnectionPaths): _172.ConnectionPathsAmino;
                    fromAminoMsg(object: _172.ConnectionPathsAminoMsg): _172.ConnectionPaths;
                    toAminoMsg(message: _172.ConnectionPaths): _172.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _172.ConnectionPathsProtoMsg): _172.ConnectionPaths;
                    toProto(message: _172.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _172.ConnectionPaths): _172.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _172.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Version;
                    fromPartial(object: Partial<_172.Version>): _172.Version;
                    fromAmino(object: _172.VersionAmino): _172.Version;
                    toAmino(message: _172.Version): _172.VersionAmino;
                    fromAminoMsg(object: _172.VersionAminoMsg): _172.Version;
                    toAminoMsg(message: _172.Version): _172.VersionAminoMsg;
                    fromProtoMsg(message: _172.VersionProtoMsg): _172.Version;
                    toProto(message: _172.Version): Uint8Array;
                    toProtoMsg(message: _172.Version): _172.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _172.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Params;
                    fromPartial(object: Partial<_172.Params>): _172.Params;
                    fromAmino(object: _172.ParamsAmino): _172.Params;
                    toAmino(message: _172.Params): _172.ParamsAmino;
                    fromAminoMsg(object: _172.ParamsAminoMsg): _172.Params;
                    toAminoMsg(message: _172.Params): _172.ParamsAminoMsg;
                    fromProtoMsg(message: _172.ParamsProtoMsg): _172.Params;
                    toProto(message: _172.Params): Uint8Array;
                    toProtoMsg(message: _172.Params): _172.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _176.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.GenesisState;
                    fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
                    fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
                    toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
                    fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
                    toAminoMsg(message: _176.GenesisState): _176.GenesisStateAminoMsg;
                    fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
                    toProto(message: _176.GenesisState): Uint8Array;
                    toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _177.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.ClientState;
                    fromPartial(object: Partial<_177.ClientState>): _177.ClientState;
                    fromAmino(object: _177.ClientStateAmino): _177.ClientState;
                    toAmino(message: _177.ClientState): _177.ClientStateAmino;
                    fromAminoMsg(object: _177.ClientStateAminoMsg): _177.ClientState;
                    toAminoMsg(message: _177.ClientState): _177.ClientStateAminoMsg;
                    fromProtoMsg(message: _177.ClientStateProtoMsg): _177.ClientState;
                    toProto(message: _177.ClientState): Uint8Array;
                    toProtoMsg(message: _177.ClientState): _177.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _178.DataType;
                dataTypeToJSON(object: _178.DataType): string;
                DataType: typeof _178.DataType;
                DataTypeSDKType: typeof _178.DataType;
                DataTypeAmino: typeof _178.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _178.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ClientState;
                    fromPartial(object: Partial<_178.ClientState>): _178.ClientState;
                    fromAmino(object: _178.ClientStateAmino): _178.ClientState;
                    toAmino(message: _178.ClientState): _178.ClientStateAmino;
                    fromAminoMsg(object: _178.ClientStateAminoMsg): _178.ClientState;
                    toAminoMsg(message: _178.ClientState): _178.ClientStateAminoMsg;
                    fromProtoMsg(message: _178.ClientStateProtoMsg): _178.ClientState;
                    toProto(message: _178.ClientState): Uint8Array;
                    toProtoMsg(message: _178.ClientState): _178.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _178.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ConsensusState;
                    fromPartial(object: Partial<_178.ConsensusState>): _178.ConsensusState;
                    fromAmino(object: _178.ConsensusStateAmino): _178.ConsensusState;
                    toAmino(message: _178.ConsensusState): _178.ConsensusStateAmino;
                    fromAminoMsg(object: _178.ConsensusStateAminoMsg): _178.ConsensusState;
                    toAminoMsg(message: _178.ConsensusState): _178.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _178.ConsensusStateProtoMsg): _178.ConsensusState;
                    toProto(message: _178.ConsensusState): Uint8Array;
                    toProtoMsg(message: _178.ConsensusState): _178.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _178.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.Header;
                    fromPartial(object: Partial<_178.Header>): _178.Header;
                    fromAmino(object: _178.HeaderAmino): _178.Header;
                    toAmino(message: _178.Header): _178.HeaderAmino;
                    fromAminoMsg(object: _178.HeaderAminoMsg): _178.Header;
                    toAminoMsg(message: _178.Header): _178.HeaderAminoMsg;
                    fromProtoMsg(message: _178.HeaderProtoMsg): _178.Header;
                    toProto(message: _178.Header): Uint8Array;
                    toProtoMsg(message: _178.Header): _178.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _178.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.Misbehaviour;
                    fromPartial(object: Partial<_178.Misbehaviour>): _178.Misbehaviour;
                    fromAmino(object: _178.MisbehaviourAmino): _178.Misbehaviour;
                    toAmino(message: _178.Misbehaviour): _178.MisbehaviourAmino;
                    fromAminoMsg(object: _178.MisbehaviourAminoMsg): _178.Misbehaviour;
                    toAminoMsg(message: _178.Misbehaviour): _178.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _178.MisbehaviourProtoMsg): _178.Misbehaviour;
                    toProto(message: _178.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _178.Misbehaviour): _178.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _178.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.SignatureAndData;
                    fromPartial(object: Partial<_178.SignatureAndData>): _178.SignatureAndData;
                    fromAmino(object: _178.SignatureAndDataAmino): _178.SignatureAndData;
                    toAmino(message: _178.SignatureAndData): _178.SignatureAndDataAmino;
                    fromAminoMsg(object: _178.SignatureAndDataAminoMsg): _178.SignatureAndData;
                    toAminoMsg(message: _178.SignatureAndData): _178.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _178.SignatureAndDataProtoMsg): _178.SignatureAndData;
                    toProto(message: _178.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _178.SignatureAndData): _178.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _178.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.TimestampedSignatureData;
                    fromPartial(object: Partial<_178.TimestampedSignatureData>): _178.TimestampedSignatureData;
                    fromAmino(object: _178.TimestampedSignatureDataAmino): _178.TimestampedSignatureData;
                    toAmino(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _178.TimestampedSignatureDataAminoMsg): _178.TimestampedSignatureData;
                    toAminoMsg(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _178.TimestampedSignatureDataProtoMsg): _178.TimestampedSignatureData;
                    toProto(message: _178.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _178.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.SignBytes;
                    fromPartial(object: Partial<_178.SignBytes>): _178.SignBytes;
                    fromAmino(object: _178.SignBytesAmino): _178.SignBytes;
                    toAmino(message: _178.SignBytes): _178.SignBytesAmino;
                    fromAminoMsg(object: _178.SignBytesAminoMsg): _178.SignBytes;
                    toAminoMsg(message: _178.SignBytes): _178.SignBytesAminoMsg;
                    fromProtoMsg(message: _178.SignBytesProtoMsg): _178.SignBytes;
                    toProto(message: _178.SignBytes): Uint8Array;
                    toProtoMsg(message: _178.SignBytes): _178.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _178.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.HeaderData;
                    fromPartial(object: Partial<_178.HeaderData>): _178.HeaderData;
                    fromAmino(object: _178.HeaderDataAmino): _178.HeaderData;
                    toAmino(message: _178.HeaderData): _178.HeaderDataAmino;
                    fromAminoMsg(object: _178.HeaderDataAminoMsg): _178.HeaderData;
                    toAminoMsg(message: _178.HeaderData): _178.HeaderDataAminoMsg;
                    fromProtoMsg(message: _178.HeaderDataProtoMsg): _178.HeaderData;
                    toProto(message: _178.HeaderData): Uint8Array;
                    toProtoMsg(message: _178.HeaderData): _178.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _178.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ClientStateData;
                    fromPartial(object: Partial<_178.ClientStateData>): _178.ClientStateData;
                    fromAmino(object: _178.ClientStateDataAmino): _178.ClientStateData;
                    toAmino(message: _178.ClientStateData): _178.ClientStateDataAmino;
                    fromAminoMsg(object: _178.ClientStateDataAminoMsg): _178.ClientStateData;
                    toAminoMsg(message: _178.ClientStateData): _178.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _178.ClientStateDataProtoMsg): _178.ClientStateData;
                    toProto(message: _178.ClientStateData): Uint8Array;
                    toProtoMsg(message: _178.ClientStateData): _178.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _178.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ConsensusStateData;
                    fromPartial(object: Partial<_178.ConsensusStateData>): _178.ConsensusStateData;
                    fromAmino(object: _178.ConsensusStateDataAmino): _178.ConsensusStateData;
                    toAmino(message: _178.ConsensusStateData): _178.ConsensusStateDataAmino;
                    fromAminoMsg(object: _178.ConsensusStateDataAminoMsg): _178.ConsensusStateData;
                    toAminoMsg(message: _178.ConsensusStateData): _178.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _178.ConsensusStateDataProtoMsg): _178.ConsensusStateData;
                    toProto(message: _178.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _178.ConsensusStateData): _178.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _178.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ConnectionStateData;
                    fromPartial(object: Partial<_178.ConnectionStateData>): _178.ConnectionStateData;
                    fromAmino(object: _178.ConnectionStateDataAmino): _178.ConnectionStateData;
                    toAmino(message: _178.ConnectionStateData): _178.ConnectionStateDataAmino;
                    fromAminoMsg(object: _178.ConnectionStateDataAminoMsg): _178.ConnectionStateData;
                    toAminoMsg(message: _178.ConnectionStateData): _178.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _178.ConnectionStateDataProtoMsg): _178.ConnectionStateData;
                    toProto(message: _178.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _178.ConnectionStateData): _178.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _178.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ChannelStateData;
                    fromPartial(object: Partial<_178.ChannelStateData>): _178.ChannelStateData;
                    fromAmino(object: _178.ChannelStateDataAmino): _178.ChannelStateData;
                    toAmino(message: _178.ChannelStateData): _178.ChannelStateDataAmino;
                    fromAminoMsg(object: _178.ChannelStateDataAminoMsg): _178.ChannelStateData;
                    toAminoMsg(message: _178.ChannelStateData): _178.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _178.ChannelStateDataProtoMsg): _178.ChannelStateData;
                    toProto(message: _178.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _178.ChannelStateData): _178.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _178.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.PacketCommitmentData;
                    fromPartial(object: Partial<_178.PacketCommitmentData>): _178.PacketCommitmentData;
                    fromAmino(object: _178.PacketCommitmentDataAmino): _178.PacketCommitmentData;
                    toAmino(message: _178.PacketCommitmentData): _178.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _178.PacketCommitmentDataAminoMsg): _178.PacketCommitmentData;
                    toAminoMsg(message: _178.PacketCommitmentData): _178.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _178.PacketCommitmentDataProtoMsg): _178.PacketCommitmentData;
                    toProto(message: _178.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _178.PacketCommitmentData): _178.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _178.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.PacketAcknowledgementData;
                    fromPartial(object: Partial<_178.PacketAcknowledgementData>): _178.PacketAcknowledgementData;
                    fromAmino(object: _178.PacketAcknowledgementDataAmino): _178.PacketAcknowledgementData;
                    toAmino(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _178.PacketAcknowledgementDataAminoMsg): _178.PacketAcknowledgementData;
                    toAminoMsg(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _178.PacketAcknowledgementDataProtoMsg): _178.PacketAcknowledgementData;
                    toProto(message: _178.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _178.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_178.PacketReceiptAbsenceData>): _178.PacketReceiptAbsenceData;
                    fromAmino(object: _178.PacketReceiptAbsenceDataAmino): _178.PacketReceiptAbsenceData;
                    toAmino(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _178.PacketReceiptAbsenceDataAminoMsg): _178.PacketReceiptAbsenceData;
                    toAminoMsg(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _178.PacketReceiptAbsenceDataProtoMsg): _178.PacketReceiptAbsenceData;
                    toProto(message: _178.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _178.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.NextSequenceRecvData;
                    fromPartial(object: Partial<_178.NextSequenceRecvData>): _178.NextSequenceRecvData;
                    fromAmino(object: _178.NextSequenceRecvDataAmino): _178.NextSequenceRecvData;
                    toAmino(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _178.NextSequenceRecvDataAminoMsg): _178.NextSequenceRecvData;
                    toAminoMsg(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _178.NextSequenceRecvDataProtoMsg): _178.NextSequenceRecvData;
                    toProto(message: _178.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _179.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ClientState;
                    fromPartial(object: Partial<_179.ClientState>): _179.ClientState;
                    fromAmino(object: _179.ClientStateAmino): _179.ClientState;
                    toAmino(message: _179.ClientState): _179.ClientStateAmino;
                    fromAminoMsg(object: _179.ClientStateAminoMsg): _179.ClientState;
                    toAminoMsg(message: _179.ClientState): _179.ClientStateAminoMsg;
                    fromProtoMsg(message: _179.ClientStateProtoMsg): _179.ClientState;
                    toProto(message: _179.ClientState): Uint8Array;
                    toProtoMsg(message: _179.ClientState): _179.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _179.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ConsensusState;
                    fromPartial(object: Partial<_179.ConsensusState>): _179.ConsensusState;
                    fromAmino(object: _179.ConsensusStateAmino): _179.ConsensusState;
                    toAmino(message: _179.ConsensusState): _179.ConsensusStateAmino;
                    fromAminoMsg(object: _179.ConsensusStateAminoMsg): _179.ConsensusState;
                    toAminoMsg(message: _179.ConsensusState): _179.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _179.ConsensusStateProtoMsg): _179.ConsensusState;
                    toProto(message: _179.ConsensusState): Uint8Array;
                    toProtoMsg(message: _179.ConsensusState): _179.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _179.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Header;
                    fromPartial(object: Partial<_179.Header>): _179.Header;
                    fromAmino(object: _179.HeaderAmino): _179.Header;
                    toAmino(message: _179.Header): _179.HeaderAmino;
                    fromAminoMsg(object: _179.HeaderAminoMsg): _179.Header;
                    toAminoMsg(message: _179.Header): _179.HeaderAminoMsg;
                    fromProtoMsg(message: _179.HeaderProtoMsg): _179.Header;
                    toProto(message: _179.Header): Uint8Array;
                    toProtoMsg(message: _179.Header): _179.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _179.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Misbehaviour;
                    fromPartial(object: Partial<_179.Misbehaviour>): _179.Misbehaviour;
                    fromAmino(object: _179.MisbehaviourAmino): _179.Misbehaviour;
                    toAmino(message: _179.Misbehaviour): _179.MisbehaviourAmino;
                    fromAminoMsg(object: _179.MisbehaviourAminoMsg): _179.Misbehaviour;
                    toAminoMsg(message: _179.Misbehaviour): _179.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _179.MisbehaviourProtoMsg): _179.Misbehaviour;
                    toProto(message: _179.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _179.Misbehaviour): _179.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _179.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.SignatureAndData;
                    fromPartial(object: Partial<_179.SignatureAndData>): _179.SignatureAndData;
                    fromAmino(object: _179.SignatureAndDataAmino): _179.SignatureAndData;
                    toAmino(message: _179.SignatureAndData): _179.SignatureAndDataAmino;
                    fromAminoMsg(object: _179.SignatureAndDataAminoMsg): _179.SignatureAndData;
                    toAminoMsg(message: _179.SignatureAndData): _179.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _179.SignatureAndDataProtoMsg): _179.SignatureAndData;
                    toProto(message: _179.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _179.SignatureAndData): _179.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _179.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.TimestampedSignatureData;
                    fromPartial(object: Partial<_179.TimestampedSignatureData>): _179.TimestampedSignatureData;
                    fromAmino(object: _179.TimestampedSignatureDataAmino): _179.TimestampedSignatureData;
                    toAmino(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _179.TimestampedSignatureDataAminoMsg): _179.TimestampedSignatureData;
                    toAminoMsg(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _179.TimestampedSignatureDataProtoMsg): _179.TimestampedSignatureData;
                    toProto(message: _179.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _179.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.SignBytes;
                    fromPartial(object: Partial<_179.SignBytes>): _179.SignBytes;
                    fromAmino(object: _179.SignBytesAmino): _179.SignBytes;
                    toAmino(message: _179.SignBytes): _179.SignBytesAmino;
                    fromAminoMsg(object: _179.SignBytesAminoMsg): _179.SignBytes;
                    toAminoMsg(message: _179.SignBytes): _179.SignBytesAminoMsg;
                    fromProtoMsg(message: _179.SignBytesProtoMsg): _179.SignBytes;
                    toProto(message: _179.SignBytes): Uint8Array;
                    toProtoMsg(message: _179.SignBytes): _179.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _179.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.HeaderData;
                    fromPartial(object: Partial<_179.HeaderData>): _179.HeaderData;
                    fromAmino(object: _179.HeaderDataAmino): _179.HeaderData;
                    toAmino(message: _179.HeaderData): _179.HeaderDataAmino;
                    fromAminoMsg(object: _179.HeaderDataAminoMsg): _179.HeaderData;
                    toAminoMsg(message: _179.HeaderData): _179.HeaderDataAminoMsg;
                    fromProtoMsg(message: _179.HeaderDataProtoMsg): _179.HeaderData;
                    toProto(message: _179.HeaderData): Uint8Array;
                    toProtoMsg(message: _179.HeaderData): _179.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _180.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ClientState;
                    fromPartial(object: Partial<_180.ClientState>): _180.ClientState;
                    fromAmino(object: _180.ClientStateAmino): _180.ClientState;
                    toAmino(message: _180.ClientState): _180.ClientStateAmino;
                    fromAminoMsg(object: _180.ClientStateAminoMsg): _180.ClientState;
                    toAminoMsg(message: _180.ClientState): _180.ClientStateAminoMsg;
                    fromProtoMsg(message: _180.ClientStateProtoMsg): _180.ClientState;
                    toProto(message: _180.ClientState): Uint8Array;
                    toProtoMsg(message: _180.ClientState): _180.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _180.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConsensusState;
                    fromPartial(object: Partial<_180.ConsensusState>): _180.ConsensusState;
                    fromAmino(object: _180.ConsensusStateAmino): _180.ConsensusState;
                    toAmino(message: _180.ConsensusState): _180.ConsensusStateAmino;
                    fromAminoMsg(object: _180.ConsensusStateAminoMsg): _180.ConsensusState;
                    toAminoMsg(message: _180.ConsensusState): _180.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _180.ConsensusStateProtoMsg): _180.ConsensusState;
                    toProto(message: _180.ConsensusState): Uint8Array;
                    toProtoMsg(message: _180.ConsensusState): _180.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _180.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Misbehaviour;
                    fromPartial(object: Partial<_180.Misbehaviour>): _180.Misbehaviour;
                    fromAmino(object: _180.MisbehaviourAmino): _180.Misbehaviour;
                    toAmino(message: _180.Misbehaviour): _180.MisbehaviourAmino;
                    fromAminoMsg(object: _180.MisbehaviourAminoMsg): _180.Misbehaviour;
                    toAminoMsg(message: _180.Misbehaviour): _180.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _180.MisbehaviourProtoMsg): _180.Misbehaviour;
                    toProto(message: _180.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _180.Misbehaviour): _180.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _180.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Header;
                    fromPartial(object: Partial<_180.Header>): _180.Header;
                    fromAmino(object: _180.HeaderAmino): _180.Header;
                    toAmino(message: _180.Header): _180.HeaderAmino;
                    fromAminoMsg(object: _180.HeaderAminoMsg): _180.Header;
                    toAminoMsg(message: _180.Header): _180.HeaderAminoMsg;
                    fromProtoMsg(message: _180.HeaderProtoMsg): _180.Header;
                    toProto(message: _180.Header): Uint8Array;
                    toProtoMsg(message: _180.Header): _180.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _180.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Fraction;
                    fromPartial(object: Partial<_180.Fraction>): _180.Fraction;
                    fromAmino(object: _180.FractionAmino): _180.Fraction;
                    toAmino(message: _180.Fraction): _180.FractionAmino;
                    fromAminoMsg(object: _180.FractionAminoMsg): _180.Fraction;
                    toAminoMsg(message: _180.Fraction): _180.FractionAminoMsg;
                    fromProtoMsg(message: _180.FractionProtoMsg): _180.Fraction;
                    toProto(message: _180.Fraction): Uint8Array;
                    toProtoMsg(message: _180.Fraction): _180.FractionProtoMsg;
                };
            };
        }
        namespace wasm {
            const v1: {
                MsgClientImpl: typeof _336.MsgClientImpl;
                QueryClientImpl: typeof _328.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    checksums(request?: _182.QueryChecksumsRequest): Promise<_182.QueryChecksumsResponse>;
                    code(request: _182.QueryCodeRequest): Promise<_182.QueryCodeResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        storeCode(value: _183.MsgStoreCode): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeChecksum(value: _183.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        migrateContract(value: _183.MsgMigrateContract): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        storeCode(value: _183.MsgStoreCode): {
                            typeUrl: string;
                            value: _183.MsgStoreCode;
                        };
                        removeChecksum(value: _183.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _183.MsgRemoveChecksum;
                        };
                        migrateContract(value: _183.MsgMigrateContract): {
                            typeUrl: string;
                            value: _183.MsgMigrateContract;
                        };
                    };
                    fromPartial: {
                        storeCode(value: _183.MsgStoreCode): {
                            typeUrl: string;
                            value: _183.MsgStoreCode;
                        };
                        removeChecksum(value: _183.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _183.MsgRemoveChecksum;
                        };
                        migrateContract(value: _183.MsgMigrateContract): {
                            typeUrl: string;
                            value: _183.MsgMigrateContract;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
                        aminoType: string;
                        toAmino: (message: _183.MsgStoreCode) => _183.MsgStoreCodeAmino;
                        fromAmino: (object: _183.MsgStoreCodeAmino) => _183.MsgStoreCode;
                    };
                    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
                        aminoType: string;
                        toAmino: (message: _183.MsgRemoveChecksum) => _183.MsgRemoveChecksumAmino;
                        fromAmino: (object: _183.MsgRemoveChecksumAmino) => _183.MsgRemoveChecksum;
                    };
                    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
                        aminoType: string;
                        toAmino: (message: _183.MsgMigrateContract) => _183.MsgMigrateContractAmino;
                        fromAmino: (object: _183.MsgMigrateContractAmino) => _183.MsgMigrateContract;
                    };
                };
                ClientState: {
                    typeUrl: string;
                    encode(message: _184.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.ClientState;
                    fromPartial(object: Partial<_184.ClientState>): _184.ClientState;
                    fromAmino(object: _184.ClientStateAmino): _184.ClientState;
                    toAmino(message: _184.ClientState): _184.ClientStateAmino;
                    fromAminoMsg(object: _184.ClientStateAminoMsg): _184.ClientState;
                    toAminoMsg(message: _184.ClientState): _184.ClientStateAminoMsg;
                    fromProtoMsg(message: _184.ClientStateProtoMsg): _184.ClientState;
                    toProto(message: _184.ClientState): Uint8Array;
                    toProtoMsg(message: _184.ClientState): _184.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _184.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.ConsensusState;
                    fromPartial(object: Partial<_184.ConsensusState>): _184.ConsensusState;
                    fromAmino(object: _184.ConsensusStateAmino): _184.ConsensusState;
                    toAmino(message: _184.ConsensusState): _184.ConsensusStateAmino;
                    fromAminoMsg(object: _184.ConsensusStateAminoMsg): _184.ConsensusState;
                    toAminoMsg(message: _184.ConsensusState): _184.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _184.ConsensusStateProtoMsg): _184.ConsensusState;
                    toProto(message: _184.ConsensusState): Uint8Array;
                    toProtoMsg(message: _184.ConsensusState): _184.ConsensusStateProtoMsg;
                };
                ClientMessage: {
                    typeUrl: string;
                    encode(message: _184.ClientMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.ClientMessage;
                    fromPartial(object: Partial<_184.ClientMessage>): _184.ClientMessage;
                    fromAmino(object: _184.ClientMessageAmino): _184.ClientMessage;
                    toAmino(message: _184.ClientMessage): _184.ClientMessageAmino;
                    fromAminoMsg(object: _184.ClientMessageAminoMsg): _184.ClientMessage;
                    toAminoMsg(message: _184.ClientMessage): _184.ClientMessageAminoMsg;
                    fromProtoMsg(message: _184.ClientMessageProtoMsg): _184.ClientMessage;
                    toProto(message: _184.ClientMessage): Uint8Array;
                    toProtoMsg(message: _184.ClientMessage): _184.ClientMessageProtoMsg;
                };
                Checksums: {
                    typeUrl: string;
                    encode(message: _184.Checksums, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.Checksums;
                    fromPartial(object: Partial<_184.Checksums>): _184.Checksums;
                    fromAmino(object: _184.ChecksumsAmino): _184.Checksums;
                    toAmino(message: _184.Checksums): _184.ChecksumsAmino;
                    fromAminoMsg(object: _184.ChecksumsAminoMsg): _184.Checksums;
                    toAminoMsg(message: _184.Checksums): _184.ChecksumsAminoMsg;
                    fromProtoMsg(message: _184.ChecksumsProtoMsg): _184.Checksums;
                    toProto(message: _184.Checksums): Uint8Array;
                    toProtoMsg(message: _184.Checksums): _184.ChecksumsProtoMsg;
                };
                MsgStoreCode: {
                    typeUrl: string;
                    encode(message: _183.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgStoreCode;
                    fromPartial(object: Partial<_183.MsgStoreCode>): _183.MsgStoreCode;
                    fromAmino(object: _183.MsgStoreCodeAmino): _183.MsgStoreCode;
                    toAmino(message: _183.MsgStoreCode): _183.MsgStoreCodeAmino;
                    fromAminoMsg(object: _183.MsgStoreCodeAminoMsg): _183.MsgStoreCode;
                    toAminoMsg(message: _183.MsgStoreCode): _183.MsgStoreCodeAminoMsg;
                    fromProtoMsg(message: _183.MsgStoreCodeProtoMsg): _183.MsgStoreCode;
                    toProto(message: _183.MsgStoreCode): Uint8Array;
                    toProtoMsg(message: _183.MsgStoreCode): _183.MsgStoreCodeProtoMsg;
                };
                MsgStoreCodeResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgStoreCodeResponse;
                    fromPartial(object: Partial<_183.MsgStoreCodeResponse>): _183.MsgStoreCodeResponse;
                    fromAmino(object: _183.MsgStoreCodeResponseAmino): _183.MsgStoreCodeResponse;
                    toAmino(message: _183.MsgStoreCodeResponse): _183.MsgStoreCodeResponseAmino;
                    fromAminoMsg(object: _183.MsgStoreCodeResponseAminoMsg): _183.MsgStoreCodeResponse;
                    toAminoMsg(message: _183.MsgStoreCodeResponse): _183.MsgStoreCodeResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgStoreCodeResponseProtoMsg): _183.MsgStoreCodeResponse;
                    toProto(message: _183.MsgStoreCodeResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgStoreCodeResponse): _183.MsgStoreCodeResponseProtoMsg;
                };
                MsgRemoveChecksum: {
                    typeUrl: string;
                    encode(message: _183.MsgRemoveChecksum, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRemoveChecksum;
                    fromPartial(object: Partial<_183.MsgRemoveChecksum>): _183.MsgRemoveChecksum;
                    fromAmino(object: _183.MsgRemoveChecksumAmino): _183.MsgRemoveChecksum;
                    toAmino(message: _183.MsgRemoveChecksum): _183.MsgRemoveChecksumAmino;
                    fromAminoMsg(object: _183.MsgRemoveChecksumAminoMsg): _183.MsgRemoveChecksum;
                    toAminoMsg(message: _183.MsgRemoveChecksum): _183.MsgRemoveChecksumAminoMsg;
                    fromProtoMsg(message: _183.MsgRemoveChecksumProtoMsg): _183.MsgRemoveChecksum;
                    toProto(message: _183.MsgRemoveChecksum): Uint8Array;
                    toProtoMsg(message: _183.MsgRemoveChecksum): _183.MsgRemoveChecksumProtoMsg;
                };
                MsgRemoveChecksumResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgRemoveChecksumResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRemoveChecksumResponse;
                    fromPartial(_: Partial<_183.MsgRemoveChecksumResponse>): _183.MsgRemoveChecksumResponse;
                    fromAmino(_: _183.MsgRemoveChecksumResponseAmino): _183.MsgRemoveChecksumResponse;
                    toAmino(_: _183.MsgRemoveChecksumResponse): _183.MsgRemoveChecksumResponseAmino;
                    fromAminoMsg(object: _183.MsgRemoveChecksumResponseAminoMsg): _183.MsgRemoveChecksumResponse;
                    toAminoMsg(message: _183.MsgRemoveChecksumResponse): _183.MsgRemoveChecksumResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgRemoveChecksumResponseProtoMsg): _183.MsgRemoveChecksumResponse;
                    toProto(message: _183.MsgRemoveChecksumResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgRemoveChecksumResponse): _183.MsgRemoveChecksumResponseProtoMsg;
                };
                MsgMigrateContract: {
                    typeUrl: string;
                    encode(message: _183.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgMigrateContract;
                    fromPartial(object: Partial<_183.MsgMigrateContract>): _183.MsgMigrateContract;
                    fromAmino(object: _183.MsgMigrateContractAmino): _183.MsgMigrateContract;
                    toAmino(message: _183.MsgMigrateContract): _183.MsgMigrateContractAmino;
                    fromAminoMsg(object: _183.MsgMigrateContractAminoMsg): _183.MsgMigrateContract;
                    toAminoMsg(message: _183.MsgMigrateContract): _183.MsgMigrateContractAminoMsg;
                    fromProtoMsg(message: _183.MsgMigrateContractProtoMsg): _183.MsgMigrateContract;
                    toProto(message: _183.MsgMigrateContract): Uint8Array;
                    toProtoMsg(message: _183.MsgMigrateContract): _183.MsgMigrateContractProtoMsg;
                };
                MsgMigrateContractResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgMigrateContractResponse;
                    fromPartial(_: Partial<_183.MsgMigrateContractResponse>): _183.MsgMigrateContractResponse;
                    fromAmino(_: _183.MsgMigrateContractResponseAmino): _183.MsgMigrateContractResponse;
                    toAmino(_: _183.MsgMigrateContractResponse): _183.MsgMigrateContractResponseAmino;
                    fromAminoMsg(object: _183.MsgMigrateContractResponseAminoMsg): _183.MsgMigrateContractResponse;
                    toAminoMsg(message: _183.MsgMigrateContractResponse): _183.MsgMigrateContractResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgMigrateContractResponseProtoMsg): _183.MsgMigrateContractResponse;
                    toProto(message: _183.MsgMigrateContractResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgMigrateContractResponse): _183.MsgMigrateContractResponseProtoMsg;
                };
                QueryChecksumsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryChecksumsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryChecksumsRequest;
                    fromPartial(object: Partial<_182.QueryChecksumsRequest>): _182.QueryChecksumsRequest;
                    fromAmino(object: _182.QueryChecksumsRequestAmino): _182.QueryChecksumsRequest;
                    toAmino(message: _182.QueryChecksumsRequest): _182.QueryChecksumsRequestAmino;
                    fromAminoMsg(object: _182.QueryChecksumsRequestAminoMsg): _182.QueryChecksumsRequest;
                    toAminoMsg(message: _182.QueryChecksumsRequest): _182.QueryChecksumsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryChecksumsRequestProtoMsg): _182.QueryChecksumsRequest;
                    toProto(message: _182.QueryChecksumsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryChecksumsRequest): _182.QueryChecksumsRequestProtoMsg;
                };
                QueryChecksumsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryChecksumsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryChecksumsResponse;
                    fromPartial(object: Partial<_182.QueryChecksumsResponse>): _182.QueryChecksumsResponse;
                    fromAmino(object: _182.QueryChecksumsResponseAmino): _182.QueryChecksumsResponse;
                    toAmino(message: _182.QueryChecksumsResponse): _182.QueryChecksumsResponseAmino;
                    fromAminoMsg(object: _182.QueryChecksumsResponseAminoMsg): _182.QueryChecksumsResponse;
                    toAminoMsg(message: _182.QueryChecksumsResponse): _182.QueryChecksumsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryChecksumsResponseProtoMsg): _182.QueryChecksumsResponse;
                    toProto(message: _182.QueryChecksumsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryChecksumsResponse): _182.QueryChecksumsResponseProtoMsg;
                };
                QueryCodeRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryCodeRequest;
                    fromPartial(object: Partial<_182.QueryCodeRequest>): _182.QueryCodeRequest;
                    fromAmino(object: _182.QueryCodeRequestAmino): _182.QueryCodeRequest;
                    toAmino(message: _182.QueryCodeRequest): _182.QueryCodeRequestAmino;
                    fromAminoMsg(object: _182.QueryCodeRequestAminoMsg): _182.QueryCodeRequest;
                    toAminoMsg(message: _182.QueryCodeRequest): _182.QueryCodeRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryCodeRequestProtoMsg): _182.QueryCodeRequest;
                    toProto(message: _182.QueryCodeRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryCodeRequest): _182.QueryCodeRequestProtoMsg;
                };
                QueryCodeResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryCodeResponse;
                    fromPartial(object: Partial<_182.QueryCodeResponse>): _182.QueryCodeResponse;
                    fromAmino(object: _182.QueryCodeResponseAmino): _182.QueryCodeResponse;
                    toAmino(message: _182.QueryCodeResponse): _182.QueryCodeResponseAmino;
                    fromAminoMsg(object: _182.QueryCodeResponseAminoMsg): _182.QueryCodeResponse;
                    toAminoMsg(message: _182.QueryCodeResponse): _182.QueryCodeResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryCodeResponseProtoMsg): _182.QueryCodeResponse;
                    toProto(message: _182.QueryCodeResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryCodeResponse): _182.QueryCodeResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _181.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.GenesisState;
                    fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                    fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
                    toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
                    fromAminoMsg(object: _181.GenesisStateAminoMsg): _181.GenesisState;
                    toAminoMsg(message: _181.GenesisState): _181.GenesisStateAminoMsg;
                    fromProtoMsg(message: _181.GenesisStateProtoMsg): _181.GenesisState;
                    toProto(message: _181.GenesisState): Uint8Array;
                    toProtoMsg(message: _181.GenesisState): _181.GenesisStateProtoMsg;
                };
                Contract: {
                    typeUrl: string;
                    encode(message: _181.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Contract;
                    fromPartial(object: Partial<_181.Contract>): _181.Contract;
                    fromAmino(object: _181.ContractAmino): _181.Contract;
                    toAmino(message: _181.Contract): _181.ContractAmino;
                    fromAminoMsg(object: _181.ContractAminoMsg): _181.Contract;
                    toAminoMsg(message: _181.Contract): _181.ContractAminoMsg;
                    fromProtoMsg(message: _181.ContractProtoMsg): _181.Contract;
                    toProto(message: _181.Contract): Uint8Array;
                    toProtoMsg(message: _181.Contract): _181.ContractProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _329.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _330.MsgClientImpl;
                        };
                        host: {
                            v1: _331.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _332.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _333.MsgClientImpl;
                    };
                    client: {
                        v1: _334.MsgClientImpl;
                    };
                    connection: {
                        v1: _335.MsgClientImpl;
                    };
                };
                lightclients: {
                    wasm: {
                        v1: _336.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _144.QueryIncentivizedPacketsRequest): Promise<_144.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _144.QueryIncentivizedPacketRequest): Promise<_144.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _144.QueryIncentivizedPacketsForChannelRequest): Promise<_144.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _144.QueryTotalRecvFeesRequest): Promise<_144.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _144.QueryTotalAckFeesRequest): Promise<_144.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _144.QueryTotalTimeoutFeesRequest): Promise<_144.QueryTotalTimeoutFeesResponse>;
                            payee(request: _144.QueryPayeeRequest): Promise<_144.QueryPayeeResponse>;
                            counterpartyPayee(request: _144.QueryCounterpartyPayeeRequest): Promise<_144.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _144.QueryFeeEnabledChannelsRequest): Promise<_144.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _144.QueryFeeEnabledChannelRequest): Promise<_144.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _147.QueryInterchainAccountRequest): Promise<_147.QueryInterchainAccountResponse>;
                                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _151.QueryParamsRequest): Promise<_151.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _158.QueryDenomTracesRequest): Promise<_158.QueryDenomTracesResponse>;
                            denomTrace(request: _158.QueryDenomTraceRequest): Promise<_158.QueryDenomTraceResponse>;
                            params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                            denomHash(request: _158.QueryDenomHashRequest): Promise<_158.QueryDenomHashResponse>;
                            escrowAddress(request: _158.QueryEscrowAddressRequest): Promise<_158.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _158.QueryTotalEscrowForDenomRequest): Promise<_158.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _164.QueryChannelRequest): Promise<_164.QueryChannelResponse>;
                            channels(request?: _164.QueryChannelsRequest): Promise<_164.QueryChannelsResponse>;
                            connectionChannels(request: _164.QueryConnectionChannelsRequest): Promise<_164.QueryConnectionChannelsResponse>;
                            channelClientState(request: _164.QueryChannelClientStateRequest): Promise<_164.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _164.QueryChannelConsensusStateRequest): Promise<_164.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _164.QueryPacketCommitmentRequest): Promise<_164.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _164.QueryPacketCommitmentsRequest): Promise<_164.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _164.QueryPacketReceiptRequest): Promise<_164.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _164.QueryPacketAcknowledgementRequest): Promise<_164.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _164.QueryPacketAcknowledgementsRequest): Promise<_164.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _164.QueryUnreceivedPacketsRequest): Promise<_164.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _164.QueryUnreceivedAcksRequest): Promise<_164.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _164.QueryNextSequenceReceiveRequest): Promise<_164.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _164.QueryNextSequenceSendRequest): Promise<_164.QueryNextSequenceSendResponse>;
                            upgradeError(request: _164.QueryUpgradeErrorRequest): Promise<_164.QueryUpgradeErrorResponse>;
                            upgrade(request: _164.QueryUpgradeRequest): Promise<_164.QueryUpgradeResponse>;
                            channelParams(request?: _164.QueryChannelParamsRequest): Promise<_164.QueryChannelParamsResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _169.QueryClientStateRequest): Promise<_169.QueryClientStateResponse>;
                            clientStates(request?: _169.QueryClientStatesRequest): Promise<_169.QueryClientStatesResponse>;
                            consensusState(request: _169.QueryConsensusStateRequest): Promise<_169.QueryConsensusStateResponse>;
                            consensusStates(request: _169.QueryConsensusStatesRequest): Promise<_169.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _169.QueryConsensusStateHeightsRequest): Promise<_169.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _169.QueryClientStatusRequest): Promise<_169.QueryClientStatusResponse>;
                            clientParams(request?: _169.QueryClientParamsRequest): Promise<_169.QueryClientParamsResponse>;
                            upgradedClientState(request?: _169.QueryUpgradedClientStateRequest): Promise<_169.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _169.QueryUpgradedConsensusStateRequest): Promise<_169.QueryUpgradedConsensusStateResponse>;
                            verifyMembership(request: _169.QueryVerifyMembershipRequest): Promise<_169.QueryVerifyMembershipResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _174.QueryConnectionRequest): Promise<_174.QueryConnectionResponse>;
                            connections(request?: _174.QueryConnectionsRequest): Promise<_174.QueryConnectionsResponse>;
                            clientConnections(request: _174.QueryClientConnectionsRequest): Promise<_174.QueryClientConnectionsResponse>;
                            connectionClientState(request: _174.QueryConnectionClientStateRequest): Promise<_174.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _174.QueryConnectionConsensusStateRequest): Promise<_174.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _174.QueryConnectionParamsRequest): Promise<_174.QueryConnectionParamsResponse>;
                        };
                    };
                };
                lightclients: {
                    wasm: {
                        v1: {
                            checksums(request?: _182.QueryChecksumsRequest): Promise<_182.QueryChecksumsResponse>;
                            code(request: _182.QueryCodeRequest): Promise<_182.QueryCodeResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
