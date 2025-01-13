import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Logger } from 'pino';
import { queryContractOnHeight } from './query';

/**
 * PriceFeed is a class that provides a common interface for PYTH price feed.
 * It is used to get the price of an asset at a given height, multiplied by the
 * exchange rate of the asset.
 * https://pyth.network/blog/pyth-launches-price-oracles-on-neutron
 * https://pyth.network/developers/price-feed-ids#cosmwasm-stable
 * https://docs.pyth.network/price-feeds/contract-addresses/cosmwasm
 */

interface PriceFeedResponse {
  price_feed: {
    id: string;
    price: {
      conf: string;
      expo: number;
      price: string;
      publish_time: number;
    };
    price_ema: {
      conf: string;
      expo: number;
      price: string;
      publish_time: number;
    };
  };
}

export default class PriceFeed {
  rpc: string;
  logger: Logger<never>;
  sourceName: string;
  client: Tendermint34Client | undefined;
  params: any;

  #getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;
    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.sourceName = params.source;
    this.rpc = rpc;
    this.params = params;
  }

  async getLastHeight(): Promise<number> {
    const client = await this.#getClient();
    const result = await client.block();
    return result.block.header.height;
  }

  async getPrice(assetId: string, height: number): Promise<number> {
    this.logger.debug(`Getting price for %s at height %d`, assetId, height);
    const client = await this.#getClient();
    const pythPriceResult = await queryContractOnHeight<PriceFeedResponse>(
      client,
      this.params.contract,
      height,
      {
        price_feed: {
          id: this.params.assets[assetId.split('_')[0]].pyth_id,
        },
      },
    );
    const pythPrice =
      parseInt(pythPriceResult.price_feed.price.price, 10) *
      10 ** pythPriceResult.price_feed.price.expo;
    this.logger.debug(`Got PYTH price for %s: %d`, assetId, pythPrice);
    const coreContract =
      this.params.assets[assetId.split('_')[0]].core_contract;
    let dropExchangeRate = 1;
    if (coreContract) {
      const dropExchangeRateResult = await queryContractOnHeight<string>(
        client,
        coreContract,
        height,
        {
          exchange_rate: {},
        },
      );
      dropExchangeRate = parseFloat(dropExchangeRateResult);
    }
    this.logger.debug(
      `Got DROP exchange rate for %s: %d`,
      assetId,
      dropExchangeRate,
    );
    const result = pythPrice * dropExchangeRate;
    this.logger.debug(`Result price for %s: %d`, assetId, result);
    return result;
  }
}
