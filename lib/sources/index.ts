import LevanaSource from './levana';
import MarsSource from './mars';
import BankModuleSource from './bank-module';
import AstroportSource from './astroport';
import AstroportGeneratorSource from './astroport-generator';

const out = {
  neutron: BankModuleSource,
  kujira: BankModuleSource,
  mars: MarsSource,
  levana: LevanaSource,
  astroport: AstroportSource,
  generator: AstroportGeneratorSource,
};
export default out;
