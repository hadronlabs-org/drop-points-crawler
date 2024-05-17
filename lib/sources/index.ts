import * as NeutronSource from './neutron';
import * as KujiraSource from './kujira';
import * as OsmosisLevanaSource from './osmosis-levana';
import * as OsmosisMarsSource from './osmosis-mars';

const out = {
  neutron: NeutronSource,
  kujira: KujiraSource,
  'osmosis-mars': OsmosisMarsSource,
  'osmosis-levana': OsmosisLevanaSource,
};
export default out;
