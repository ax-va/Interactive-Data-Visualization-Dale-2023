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
    // ...
};

nbviz.callbacks = [];
nbviz.onDataChange = function () {
    // This function is called if the user changes something.
    // The updates are in the "callbacks" array.
    nbviz.callbacks.forEach((cb) => cb())
};

// The "nbviz" object is a default export for this module
export default nbviz;
