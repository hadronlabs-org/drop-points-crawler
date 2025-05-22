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

const USD_TICKER = 'USD';

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

  async getPricefeedOnChain(
    assetId: string,
    height: number,
  ): Promise<PriceFeedResponse> {
    const client = await this.#getClient();
    const assetKey = assetId.split('_')[0];
    const pythId = this.params.assets[assetKey].pyth_id;
    return queryContractOnHeight<PriceFeedResponse>(
      client,
      this.params.contract,
      height,
      {
        price_feed: {
          id: pythId,
        },
      },
    );
  }

  async getPriceFeedOffChain(assetId: string, ts: number) {
    const assetKey = assetId.split('_')[0];
    const pythId = this.params.assets[assetKey].pyth_id;
    const url = `https://hermes.pyth.network/v2/updates/price/${ts}?ids%5B%5D=0x${pythId}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.parsed) || data.parsed.length === 0) {
      throw new Error('No parsed price data returned');
    }

    const feed = data.parsed[0];

    return {
      price_feed: {
        id: feed.id,
        price: feed.price,
        price_ema: feed.ema_price,
      },
    };
  }

  async getPrice(assetId: string, height: number, ts: number): Promise<number> {
    this.logger.debug(`Getting price for %s at height %d`, assetId, height);

    if (assetId === USD_TICKER) {
      this.logger.debug(`Price for %s is 1`, USD_TICKER);
      return 1;
    }

    const assetKey = assetId.split('_')[0];

    const client = await this.#getClient();

    const pythPriceResult = this.params.assets[assetKey].offchain
      ? await this.getPriceFeedOffChain(assetId, ts)
      : await this.getPricefeedOnChain(assetId, height);
    const pythPrice =
      parseInt(pythPriceResult.price_feed.price.price, 10) *
      10 ** pythPriceResult.price_feed.price.expo;
    this.logger.debug(`Got PYTH price for %s: %d`, assetId, pythPrice);

    const dropExchangeRateResult = await queryContractOnHeight<string>(
      client,
      this.params.assets[assetKey].core_contract,
      height,
      {
        exchange_rate: {},
      },
    );
    const dropExchangeRate = parseFloat(dropExchangeRateResult);
    this.logger.debug(
      `Got DROP exchange rate for %s: %d`,
      assetId,
      dropExchangeRate,
    );

    const modifyAssetPrice = this.params.assets[assetKey].usd_part
      ? (x: number) => {
          const usdPart = this.params.assets[assetKey].usd_part;
          return (x * (1 - usdPart) + usdPart) * dropExchangeRate;
        }
      : (x: number) => x;

    const result = modifyAssetPrice(pythPrice) * dropExchangeRate;
    this.logger.debug(`Result price for %s: %d`, assetId, result);
    return result;
  }
}
