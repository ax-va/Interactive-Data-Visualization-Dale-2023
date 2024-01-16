// Import to initialize update callbacks
import nbviz from './nbviz_core.mjs';
import { initMenu } from './nbviz_menu.mjs';
import { initMap } from './nbviz_map.mjs';
import './nbviz_bar.mjs';
import './nbviz_details.mjs';
import './nbviz_time.mjs';

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.all([
    d3.json('static/data/nobel_winners_biopic.json'),
    d3.json('static/data/winning_country_data.json'),
    d3.json('static/data/world-110m.json'), // a world map with 110m resolution, source?
    d3.csv('static/data/world-country-names-nobel.csv'),    
]).then(ready);
    
function ready([
    winnersData, 
    countryData, 
    worldMap, 
    countryNames,
]) {
    // STORE OUR COUNTRY-DATA DATASET
    nbviz.data.countryData = countryData
    nbviz.data.winnersData = winnersData
    // MAKE OUR FILTER AND ITS DIMENSIONS
    nbviz.makeFilterAndDimensions(winnersData) // Allow the user to select subsets of the data
    // INITIALIZE MENU AND MAP
    initMenu()
    initMap(worldMap, countryNames)
    // TRIGGER UPDATE WITH
}

