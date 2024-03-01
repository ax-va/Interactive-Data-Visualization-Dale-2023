import core from './core.mjs';
import { initMenu } from './menu.mjs';
import './details.mjs';

Promise.all([
  d3.json('data/nobel_winners.json'),
]).then(ready);

function ready([winnersData]) {
  core.data.winnersData = winnersData;
  core.makeFilterAndDimensions(winnersData);
  initMenu();
  core.onDataChange();
}
