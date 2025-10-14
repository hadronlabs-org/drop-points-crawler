import { TRPCError } from '@trpc/server';
import { Logger } from 'pino';
import {
  tRPCGetTVLRequest,
  tRPCGetTVLResponse,
} from '../../../types/tRPC/tRPCGetTVL';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { queryContractOnHeight } from '../../../lib/query';
import _ from 'lodash';
import { StargateClient } from '@cosmjs/stargate';

const getDataByWASM = async (
  rpc: string,
  contract: string,
  query: string,
  field: string,
): Promise<string> => {
  const client = await Tendermint34Client.connect(rpc);
  const result = await queryContractOnHeight<any>(
    client,
    contract,
    undefined,
    JSON.parse(query),
  );
  return _.get(result, field);
};

const getDataByBank = async (
  rpc: string,
  denom: string,
  address: string,
): Promise<string> => {
  const client = await StargateClient.connect(rpc);
  const balance = await client.getBalance(address, denom);
  return balance.amount;
};

const getTVL =
  (config: any, logger: Logger) =>
  async (req: tRPCGetTVLRequest): Promise<tRPCGetTVLResponse> => {
    const {
      input: { asset },
    } = req;

    logger.debug('Receiving request to get TVL for %s', asset);
    if (!config.tvl_collector || !config.tvl_collector[asset]) {
      logger.error('TVL for %s is not configured', asset);
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: `TVL for ${asset} is not configured`,
      });
    }
    const assetConfig = config.tvl_collector[asset];
    let total = 0n;
    for (const source of assetConfig.items) {
      switch (source.type) {
        case 'wasm':
          {
            const amount = await getDataByWASM(
              source.rpc,
              source.contract,
              source.query,
              source.field,
            );
            logger.debug(
              'Got %s %s for %s from %s',
              amount,
              source.denom,
              source.contract,
              source.rpc,
            );
            total +=
              (BigInt(amount) * BigInt(10 ** Number(source.decimals))) /
              BigInt(10 ** Number(assetConfig.decimals));
          }
          break;
        case 'cosmos-bank':
          {
            const amount = await getDataByBank(
              source.rpc,
              source.denom,
              source.address,
            );
            logger.debug(
              'Got %s %s for %s from %s',
              amount,
              source.denom,
              source.address,
              source.rpc,
            );
            total +=
              (BigInt(amount) * BigInt(10 ** Number(source.decimals))) /
              BigInt(10 ** Number(assetConfig.decimals));
          }
          break;
        default:
          logger.error('Unknown method %s for asset %s', source.type, asset);
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Unknown method ${source.method} for asset ${asset}`,
          });
      }
    }

    return total.toString();
  };

export { getTVL };
