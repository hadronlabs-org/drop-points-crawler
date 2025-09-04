import { Command } from 'commander';
import { getContext } from '../context';
import * as viem from 'viem';
import { Database } from 'bun:sqlite';
import { Logger } from 'pino';

const DEFAULT_STEP = 297; // approx 1 hour

const ABI_TOTAL_ASSETS = [
  {
    name: 'totalAssets',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
] as const;

type ChartDataEntry = {
  block: number;
  value: number;
  timestamp: number; // Unix timestamp in seconds
};

type StoredChart = {
  metric: 'tvl';
  contract: string;
  network: 'ethereum';
  step: number;
  assets: ChartDataEntry[];
  updatedAt: number;
};

interface Config {
  charts?: {
    rpc?: string;
    ethereum?: {
      rpc?: string;
    };
  };
}

function resolveEthRpc(config: Config, explicitRpc?: string): string {
  if (explicitRpc) return explicitRpc;
  if (typeof config.charts?.rpc === 'string') {
    return config.charts.rpc;
  }
  throw new Error(
    'Ethereum RPC endpoint not provided. Use --rpc, or set charts.rpc in config, or CHARTS_ETH_RPC/ETH_RPC environment variable.',
  );
}

async function readTVLAtBlock(
  client: viem.PublicClient,
  contract: `0x${string}`,
  blockNumber: bigint,
  logger: Logger,
): Promise<number> {
  try {
    const result = (await client.readContract({
      address: contract,
      abi: ABI_TOTAL_ASSETS,
      functionName: 'totalAssets',
      blockNumber,
    })) as bigint;

    const numberValue = Number(result);
    if (!Number.isSafeInteger(numberValue)) {
      logger.warn(
        'TVL value %s at block %s exceeds MAX_SAFE_INTEGER, precision may be lost',
        result.toString(),
        blockNumber.toString(),
      );
    }

    return numberValue;
  } catch (e) {
    logger.warn(
      'Failed to read totalAssets() at block %s: %s',
      blockNumber.toString(),
      (e as Error).message,
    );
    throw new Error(
      'totalAssets() is not available on the contract or call reverted',
    );
  }
}

async function getBlockTimestamp(
  client: viem.PublicClient,
  blockNumber: bigint,
  logger: Logger,
): Promise<number> {
  try {
    const block = await client.getBlock({ blockNumber });
    return Number(block.timestamp);
  } catch (e) {
    logger.warn(
      'Failed to get block timestamp for block %s: %s',
      blockNumber.toString(),
      (e as Error).message,
    );
    throw new Error('Failed to get block timestamp');
  }
}

function upsertKV(db: Database, key: string, value: string): void {
  db.exec(
    'INSERT INTO kvstore (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = ?;',
    [key, value, value],
  );
}

function loadKV(db: Database, key: string): string | null {
  const row = db
    .query<
      { value: string },
      [string]
    >('SELECT value FROM kvstore WHERE key = ?')
    .get(key);
  return row?.value ?? null;
}

function determineStartBlock(
  stored: StoredChart | null,
  step: number,
  explicitFromBlock: number | undefined,
  logger: Logger,
): number {
  if (explicitFromBlock !== undefined) {
    logger.info('Using explicit fromBlock: %d', explicitFromBlock);
    return explicitFromBlock;
  }

  if (!stored?.assets || stored.assets.length === 0) {
    logger.info('No existing data found, starting from block 0');
    return 0;
  }

  const latestBlock = Math.max(...stored.assets.map((asset) => asset.block));
  const startBlock = latestBlock + step;

  logger.info(
    'Found existing data up to block %d, starting incremental update from block %d (step: %d)',
    latestBlock,
    startBlock,
    step,
  );

  return startBlock;
}

export function registerChartsCli(program: Command) {
  const chartsCli = program
    .command('charts')
    .description('Charts data commands');

  chartsCli
    .command('collect')
    .description('Collect charts data from Ethereum for a contract and metric')
    .argument('<contract>', 'Ethereum contract address (0x...)')
    .argument('<metric>', 'Metric to collect (tvl)')
    .argument(
      '[fromBlock]',
      'Starting block number (optional - if not provided, continues from last collected block)',
    )
    .option('--rpc <url>', 'Ethereum RPC endpoint (overrides config/env)')
    .option('--step <n>', 'Block step size, default 1000', `${DEFAULT_STEP}`)
    .action(
      async (
        contract: string,
        metric: string,
        fromBlock?: string,
        options: { rpc?: string; step?: string } = {},
      ) => {
        const { config, logger, db } = getContext(program);

        if (!viem.isAddress(contract)) {
          logger.error('Invalid Ethereum contract address: %s', contract);
          throw new Error('Invalid contract address');
        }
        const normalized = viem.getAddress(contract);

        const normalizedMetric = metric.trim().toLowerCase();
        if (normalizedMetric !== 'tvl') {
          logger.error(
            'Unsupported metric: %s. Only "tvl" is supported for now.',
            metric,
          );
          throw new Error('Unsupported metric');
        }

        const explicitFromBlock = fromBlock
          ? parseInt(fromBlock, 10)
          : undefined;
        if (
          explicitFromBlock !== undefined &&
          (!Number.isFinite(explicitFromBlock) || explicitFromBlock < 0)
        ) {
          logger.error('Invalid fromBlock: %s', fromBlock);
          throw new Error('Invalid fromBlock');
        }

        const step = Math.max(
          1,
          parseInt(options.step || `${DEFAULT_STEP}`, 10),
        );

        let rpc: string;
        try {
          rpc = resolveEthRpc(config, options.rpc);
        } catch (e) {
          logger.error((e as Error).message);
          throw e;
        }

        const client = viem.createPublicClient({
          transport: viem.http(rpc),
        }) as viem.PublicClient;

        const kvKey = `charts:eth:${normalizedMetric}:${normalized.toLowerCase()}`;
        let stored: StoredChart | null = null;
        try {
          const raw = loadKV(db, kvKey);
          if (raw) stored = JSON.parse(raw) as StoredChart;
        } catch (e) {
          logger.warn(
            'Failed to parse existing KV value for key %s: %s. Starting fresh.',
            kvKey,
            (e as Error).message,
          );
        }

        const startBlock = determineStartBlock(
          stored,
          step,
          explicitFromBlock,
          logger,
        );

        const latest = Number((await client.getBlockNumber()).toString());
        if (startBlock > latest) {
          logger.warn(
            'Starting block %d is greater than latest %d. Nothing to collect.',
            startBlock,
            latest,
          );
          return;
        }

        logger.info(
          'Contract=%s metric=%s startBlock=%d latestBlock=%d step=%d rpc=%s',
          normalized,
          normalizedMetric,
          startBlock,
          latest,
          step,
          rpc,
        );

        const assetsMap = new Map<number, ChartDataEntry>();
        if (stored?.assets) {
          for (const asset of stored.assets) {
            assetsMap.set(asset.block, asset);
          }
          logger.info(
            'Loaded %d existing data points from KV',
            stored.assets.length,
          );
        }

        let newDataPoints = 0;
        for (let blockNum = startBlock; blockNum <= latest; blockNum += step) {
          if (assetsMap.has(blockNum)) {
            continue;
          }

          try {
            const blockBigInt = BigInt(blockNum);
            const [value, timestamp] = await Promise.all([
              readTVLAtBlock(
                client,
                normalized as `0x${string}`,
                blockBigInt,
                logger,
              ),
              getBlockTimestamp(client, blockBigInt, logger),
            ]);

            assetsMap.set(blockNum, {
              block: blockNum,
              value,
              timestamp,
            });

            newDataPoints += 1;
            logger.debug(
              'Block %d => %d (timestamp: %d)',
              blockNum,
              value,
              timestamp,
            );
          } catch (e) {
            logger.warn(
              'Failed to read TVL at block %d: %s',
              blockNum,
              (e as Error).message,
            );
          }
        }

        const mergedAssets: ChartDataEntry[] = Array.from(
          assetsMap.values(),
        ).sort((a, b) => a.block - b.block);

        const payload: StoredChart = {
          metric: 'tvl',
          contract: normalized,
          network: 'ethereum',
          step,
          assets: mergedAssets,
          updatedAt: Math.floor(Date.now() / 1000),
        };

        const json = JSON.stringify(payload);
        upsertKV(db, kvKey, json);

        if (newDataPoints > 0) {
          logger.info(
            'Charts data updated! Added %d new data points. Total: %d points, range=[%d..%d], step=%d, saved to KV key: %s',
            newDataPoints,
            mergedAssets.length,
            mergedAssets[0]?.block ?? startBlock,
            mergedAssets[mergedAssets.length - 1]?.block ?? startBlock,
            step,
            kvKey,
          );
        } else {
          logger.info(
            'No new data to collect. Data is up to date with %d points, latest block: %d',
            mergedAssets.length,
            mergedAssets[mergedAssets.length - 1]?.block ?? 0,
          );
        }
      },
    );
}
