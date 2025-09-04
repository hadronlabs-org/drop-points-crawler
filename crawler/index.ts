import { Command } from 'commander';
import { registerPrepareCommand } from './commands/prepare';
import { registerCrawlCommand } from './commands/crawl';
import { registerFinishCommand } from './commands/finish';
import { registerPublishCommand } from './commands/publish';
import { registerCrawlAllParallelCommand } from './commands/crawl-all';
import { registerScheduleCli } from './commands/schedule';
import { registerReferralCli } from './commands/referrals';
import { registerKycCli } from './commands/kyc';
import { registerRecalcCli } from './commands/recalc';
import { registerDebugCli } from './commands/debug';
import { registerChartsCli } from './commands/charts';

const program = new Command();
program.name('crawl').description('CLI tool for droplets processing');

program.option('--config <path>', 'Path to config file', 'config.toml');
program.option('--log_level <level>', 'Log level');

registerPrepareCommand(program);
registerCrawlCommand(program);
registerFinishCommand(program);
registerPublishCommand(program);
registerCrawlAllParallelCommand(program);
registerScheduleCli(program);
registerReferralCli(program);
registerKycCli(program);
registerRecalcCli(program);
registerDebugCli(program);
registerChartsCli(program);

program.parseAsync(process.argv);
