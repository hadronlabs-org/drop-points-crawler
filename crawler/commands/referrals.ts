import { Command } from 'commander';
import { getContext } from '../context';
import { updateReferralData } from '../../lib/referral';

export function registerReferralCli(program: Command) {
  const referralCli = program
    .command('referral')
    .description('Referral commands');

  referralCli
    .command('add')
    .argument('<referrer>', 'Address')
    .argument('<referral>', 'Address of the referral')
    .description('Add a referral')
    .action((referrer, referral) => {
      const { logger, db } = getContext(program);

      logger.info('Adding referral %s -> %s', referrer, referral);
      db.prepare<null, [string, string]>(
        'INSERT INTO referrals (referrer, referral, ts) VALUES (?, ?, 0)'
      ).run(referrer, referral);
    });

  referralCli
    .command('list')
    .argument('<address>', 'Address')
    .description('List referrals')
    .action((address) => {
      const { logger, db } = getContext(program);

      logger.info('Referral list');
      const query = db.query<{ address: string; referral: string }, string>(
        'SELECT * FROM referrals WHERE address = ?'
      );
      for (const row of query.all(address)) {
        logger.info('Address: %s\t Referral: %s', row.address, row.referral);
      }
    });

  referralCli
    .command('sync')
    .description('Retrieve last referral data')
    .action(async () => {
      const { config, logger, db } = getContext(program);
      await updateReferralData(db, config, logger);
    });
}