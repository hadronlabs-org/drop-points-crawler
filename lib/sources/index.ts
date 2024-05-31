import LevanaSource from './levana';
import MarsSource from './mars';
import BankModuleSource from './bank-module';

const out = {
  neutron: BankModuleSource,
  kujira: BankModuleSource,
  mars: MarsSource,
  levana: LevanaSource,
};
export default out;
