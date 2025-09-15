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
import AstroportCWSource from './astroport-cw';
import StargazeNFT from './stargaze';
import MilkyWaySource from './milkyway';
import OsmoStakedSource from './osmo-staked';
import FlameSource from './flame';
import ETHNFT from './eth-nft';
import AgoricSource from './agoric';
import LevanaTradeSource from './levana-trade';
import InitiaSource from './initia';
import EchelonSource from './echelon';
import RaveSource from './rave';
import EthERC20Source from './eth-erc20';
import SupervaultSource from './supervault';

const out = {
  neutron: BankModuleSource,
  initia: InitiaSource,
  kujira: BankModuleSource,
  mars: MarsSource,
  levana: LevanaSource,
  osmosis: SubqueryIndexerSource,
  secret: SubqueryIndexerSource,
  astroport: AstroportSource,
  'astroport-cw': AstroportCWSource,
  generator: AstroportGeneratorSource,
  apollo: ApolloSource,
  nolus: NolusSource,
  demex: DemexSource,
  milkyway: MilkyWaySource,
  pryzm: PryzmSource,
  stargaze: StargazeNFT,
  flame: FlameSource,
  inter: AgoricSource,
  'osmosis-lp': OsmosisLPSource,
  'neutron-amulet': AmuletSource,
  'liquidity-alliance': LiquidityAllianceSource,
  'liquidity-alliance-compounder': LiquidityAllianceCompounderSource,
  'eth-nft': ETHNFT,
  'levana-trade': LevanaTradeSource,
  'osmo-staked': OsmoStakedSource,
  echelon: EchelonSource,
  rave: RaveSource,
  'eth-erc20': EthERC20Source,
  supervault: SupervaultSource,
};
export default out;
