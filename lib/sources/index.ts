import LevanaSource from './levana';
import MarsSource from './mars';
import BankModuleSource from './bank-module';
import SubqueryIndexerSource from './subquery-indexer';
import AstroportSource from './astroport';
import AstroportGeneratorSource from './astroport-generator';
import ApolloSource from './apollo';
import OsmosisLPSource from './osmosis-lp';
import NolusSource from './nolus';
import DemexSource from './demex';
import PryzmSource from './pryzm';
import AmuletSource from './amulet';
import LiquidityAllianceCompounderSource from './liquidity-alliance-compounder';
import LiquidityAllianceSource from './liquidity-alliance';

const out = {
  neutron: BankModuleSource,
  kujira: BankModuleSource,
  mars: MarsSource,
  levana: LevanaSource,
  osmosis: SubqueryIndexerSource,
  secret: SubqueryIndexerSource,
  astroport: AstroportSource,
  generator: AstroportGeneratorSource,
  apollo: ApolloSource,
  nolus: NolusSource,
  demex: DemexSource,
  pryzm: PryzmSource,
  'osmosis-lp': OsmosisLPSource,
  'neutron-amulet': AmuletSource,
  'liquidity-alliance': LiquidityAllianceSource,
  'liquidity-alliance-compounder': LiquidityAllianceCompounderSource,
};
export default out;
