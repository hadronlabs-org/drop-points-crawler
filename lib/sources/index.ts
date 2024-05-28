import NeutronSource from './neutron';
import KujiraSource from './kujira';
import LevanaSource from './osmosis-levana';
import MarsSource from './osmosis-mars';

const out = {
  neutron: NeutronSource,
  kujira: KujiraSource,
  'osmosis-mars': MarsSource,
  'osmosis-levana': LevanaSource,
};
export default out;
