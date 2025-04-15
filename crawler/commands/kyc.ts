import { Command } from 'commander';
import { getContext } from '../context';
import { insertKYCRecord } from '../../lib/kyc';
import { neutronAddress } from '../../types/tRPC/neutronAddress';

export function registerKycCli(program: Command) {
  const kycCli = program.command('kyc').description('KYC commands');

  kycCli
    .command('add')
    .argument('<address>', 'Address')
    .option('-p --provider <provider>', 'KYC provider')
    .option('-i --id <kyc_id>', 'KYC id')
    .option('-c --code <code>', 'Referral code')
    .action((address, options) => {
      const { logger, db } = getContext(program);

      address = neutronAddress.parse(address).toString();
      const kycId = options.id || `local_${address}`;
      const kycProvider = options.provider || 'local';
      const userCode = options.code as string | undefined;

      logger.info(
        'Adding KYC for address %s, kyc id: %s, kyc provider: %s',
        address,
        kycId,
        kycProvider,
      );

      const code = insertKYCRecord(
        db,
        logger,
        address,
        kycId,
        kycProvider,
        userCode,
      );
      logger.info('Referral code: %s', code);
    });

  kycCli
    .command('get')
    .argument('<address>', 'Address')
    .action((address) => {
      const { logger, db } = getContext(program);

      address = neutronAddress.parse(address).toString();
      const query = db.query<
        { kyc_id: string; kyc_provider: string; ts: number },
        string
      >('SELECT kyc_id, kyc_provider, ts FROM user_kyc WHERE address = ?');

      const row = query.get(address);
      if (!row) {
        logger.info('No KYC found for address %s', address);
      } else {
        logger.info(
          'KYC id: %s, provider: %s, ts: %s',
          row.kyc_id,
          row.kyc_provider,
          new Date(row.ts * 1000).toISOString(),
        );
      }
    });
}
