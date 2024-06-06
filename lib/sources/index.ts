import LevanaSource from './levana';
import MarsSource from './mars';
import BankModuleSource from './bank-module';
import AstroportSource from './astroport';

const out = {
  neutron: BankModuleSource,
  kujira: BankModuleSource,
  mars: MarsSource,
  levana: LevanaSource,
  astroport: AstroportSource,
};
export default out;
