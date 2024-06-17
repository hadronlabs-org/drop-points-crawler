import LevanaSource from './levana';
import MarsSource from './mars';
import BankModuleSource from './bank-module';
import SubqueryIndexerSource from './subquery-indexer';
import AstroportSource from './astroport';
import AstroportGeneratorSource from './astroport-generator';
import ApolloSource from './apollo';

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
};
export default out;
