import { Logger } from 'pino';
import { SourceInterface } from '../../../types/sources/source';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import _ from 'lodash';
import {
  getContractStateKeys,
  getContractStateRaw,
  queryContractOnHeight,
} from '../../query';
import { CbOnUserBalances } from '../../../types/sources/cbOnUserBalances';
import { UserBalance } from '../../../types/sources/userBalance';

export default class NolusSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { leasers: string[]; ticker: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.pagination_limit || '30', 10);
  }

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };

  async getUsersBalances(
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> {
    for (const [asset, { leasers, ticker }] of Object.entries(this.assets)) {
      this.logger.info('Processing asset: %s', asset);
      for (const leaser of leasers) {
        const users = [];
        const out: UserBalance[] = [];
        this.logger.info('Processing leaser: %s', leaser);
        let nextKey: Uint8Array | undefined = undefined;
        while (true) {
          const out = await getContractStateKeys(
            await this.getClient(),
            height,
            leaser,
            nextKey,
          );
          nextKey = out.pagination?.nextKey;
          this.logger.debug('Next key: %s', nextKey);
          const accounts = out.models
            .map((x) => Buffer.from(x.key).toString())
            .filter((x) => x.includes('loansnolus'))
            .map((x) => x.replace(/.*(nolus[0-9a-z]+)$/gi, '$1'));
          users.push(...accounts);
          this.logger.info('Found %d accounts', accounts.length);
          if (!nextKey?.length) {
            this.logger.info('No more keys, breaking');
            break;
          }
        }

        for (const [i, user] of Object.entries(users)) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          this.logger.info(
            'Processing user: %s %d/%d to go',
            user,
            i,
            users.length,
          );
          const leases = await queryContractOnHeight<string[]>(
            await this.getClient(),
            leaser,
            height,
            {
              leases: {
                owner: user,
              },
            },
          );
          const client = await this.getClient();
          const responses = await Promise.all(
            leases.map((lease) =>
              getContractStateRaw(client, height, lease, Buffer.from('state')),
            ),
          );
          let amount = 0;
          this.logger.debug('Found %d responses', responses.length);
          this.logger.trace('Responses: %o', responses);
          for (const response of responses) {
            const position = _.get(
              response,
              'OpenedActive.lease.lease.position.amount',
              {},
            );
            if (position.ticker === ticker) {
              amount += Number(position.amount);
            }
          }
          if (amount) {
            out.push({
              address: user,
              balance: (amount * multipliers[asset]).toString(),
              asset,
            });
          }
        }
        cb(out);
        this.logger.info('Found %d users', users.length);
      }
    }
  }
}
