import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as milkywayAssetsV1MessagesRegistry from "./assets/v1/messages.registry";
import * as milkywayLiquidvestingV1MessagesRegistry from "./liquidvesting/v1/messages.registry";
import * as milkywayOperatorsV1MessagesRegistry from "./operators/v1/messages.registry";
import * as milkywayRestakingV1MessagesRegistry from "./restaking/v1/messages.registry";
import * as milkywayRewardsV1MessagesRegistry from "./rewards/v1/messages.registry";
import * as milkywayServicesV1MessagesRegistry from "./services/v1/messages.registry";
import * as milkywayAssetsV1MessagesAmino from "./assets/v1/messages.amino";
import * as milkywayLiquidvestingV1MessagesAmino from "./liquidvesting/v1/messages.amino";
import * as milkywayOperatorsV1MessagesAmino from "./operators/v1/messages.amino";
import * as milkywayRestakingV1MessagesAmino from "./restaking/v1/messages.amino";
import * as milkywayRewardsV1MessagesAmino from "./rewards/v1/messages.amino";
import * as milkywayServicesV1MessagesAmino from "./services/v1/messages.amino";
export const milkywayAminoConverters = {
  ...milkywayAssetsV1MessagesAmino.AminoConverter,
  ...milkywayLiquidvestingV1MessagesAmino.AminoConverter,
  ...milkywayOperatorsV1MessagesAmino.AminoConverter,
  ...milkywayRestakingV1MessagesAmino.AminoConverter,
  ...milkywayRewardsV1MessagesAmino.AminoConverter,
  ...milkywayServicesV1MessagesAmino.AminoConverter
};
export const milkywayProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...milkywayAssetsV1MessagesRegistry.registry, ...milkywayLiquidvestingV1MessagesRegistry.registry, ...milkywayOperatorsV1MessagesRegistry.registry, ...milkywayRestakingV1MessagesRegistry.registry, ...milkywayRewardsV1MessagesRegistry.registry, ...milkywayServicesV1MessagesRegistry.registry];
export const getSigningMilkywayClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...milkywayProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...milkywayAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMilkywayClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMilkywayClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};