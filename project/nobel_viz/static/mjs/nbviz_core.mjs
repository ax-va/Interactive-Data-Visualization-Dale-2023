let nbviz = {};
nbviz.ALL_CATS = 'All Categories';
nbviz.TRANS_DURATION = 2000; // time in ms for visual transitions
nbviz.MAX_CENTROID_RADIUS = 30;
nbviz.MIN_CENTROID_RADIUS = 2;
nbviz.COLORS = { palegold: '#E6BE8A' }; // any named colors used

nbviz.data = {}; // main data store
nbviz.valuePerCapita = 0; // metric flag
nbviz.activeCountry = null;
nbviz.activeCategory = nbviz.ALL_CATS;

nbviz.CATEGORIES = [
    "Chemistry", 
    "Economics", 
    "Literature", 
    "Peace",
    "Physics", 
    "Physiology or Medicine",
];

// Take a category like Physics and returns a color
nbviz.categoryFill = function(category){
    let i = nbviz.CATEGORIES.indexOf(category);
    // schemeCategory10 is an array of 10 color hex codes (['#1f77b4', '#ff7f0e',...])
    return d3.schemeCategory10[i];
};


let nestDataByYear = function(entries) {
    //...
};

nbviz.makeFilterAndDimensions = function(winnersData){
    //...
};

nbviz.filterByCountries = function(countryNames) {
    //...
};

nbviz.filterByCategory = function(cat) {
    //...
};

nbviz.getCountryData = function() {
    // countryDim is Crossfilter dimensions with key-values items like {key:Argentina, value:5}
    let countryGroups = nbviz.countryDim.group().all();
    // Use the array’s map method to create a new array with added components from the country dataset
    let data = countryGroups.map( function(c) {
        let cData = nbviz.data.countryData[c.key]; // c.key is e.g. 'Australia'
        let value = c.value;
        // If per capita value then divide by ppopulation size
        if(nbviz.valuePerCapita) {
            value = value / cData.population;
        };

        return {
            key: c.key, // e.g., Japan
            value: value, // e.g., 19 (prizes)
            code: cData.alpha3Code, // e.g., JPN
        };
    })
    // Use the array’s sort method to make the array descending by value
    .sort( function(a, b) {
        return b.value - a.value; // descending
    });

    return data;
};

// The array consists of component modules that need updating
nbviz.callbacks = [];
// This function is called if the user changes something.
nbviz.onDataChange = function () {
    nbviz.callbacks.forEach((cb) => cb())
};

// The "nbviz" object is a default export for this module
export default nbviz;
