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
nbviz.fillCategory = function(category) {
    let i = nbviz.CATEGORIES.indexOf(category);
    // schemeCategory10 is an array of 10 color hex codes (['#1f77b4', '#ff7f0e', ...])
    return d3.schemeCategory10[i];
};

// Group by year and sort by category 
nbviz.nestDataByYear = function(entries) {
    let yearGroups = d3.group(entries, (d) => d.year);
    let yearData = Array.from(yearGroups, ([k, v]) => {
        // k for "key"
        // v for "values"
        let winnersByYear = v.sort(
            (p1, p2) => (p1.category > p2.category ? 1 : -1));
        return { yearAsKey: k, winnersByYear: winnersByYear };
    });
    return yearData;
};

// Create a Crossfilter filter and dimensions (e.g., prize category)
nbviz.makeFilterAndDimensions = function(winnersData) {
    // ADD OUR FILTER AND CREATE CATEGORY DIMENSIONS
    nbviz.filter = crossfilter(winnersData);

    // Some examples

    // // Create the gender dimension
    // nbviz.genderDim = nbviz.filter.dimension(function(o) {
    //     return o.gender;
    // });
    // // The filter can be used to return all objects with female gender as follows:
    // nbviz.genderDim.filter('female');
    // // top returns the specified number of ordered objects.
    // // Specifying Infinity returns all the filtered data objects.
    // let femaleWinners = nbviz.genderDim.top(Infinity);
    // femaleWinners.length // 47
    // // Reset a dimension
    // nbviz.genderDim.filter();
    // // Get the full array
    // nbviz.genderDim.top(Infinity)

    // // Create the category dimension
    // nbviz.categoryDim = nbviz.filter.dimension(function(o) {
    //     return o.category;
    // });

    // // Filter dimensions in sequence
    // nbviz.genderDim.filter('female');
    // nbviz.categoryDim.filter('Physics');
    // nbviz.genderDim.top(Infinity);
    // // Remove the Physics category filter
    // nbviz.categoryDim.filter();
    // nbviz.genderDim.top(Infinity);

    // nbviz.genderDim.filter(); // Reset gender dimension
    // let countryGroup = nbviz.countryDim.group(); // Group by default
    // countryGroup.all();  // Return all groups by key and value
    // // [
    // // {key:"Argentina", value:5},
    // // {key:"Australia", value:9},
    // // {key:"Austria", value:14},
    // // ...]

    nbviz.countryDim = nbviz.filter.dimension((o) => o.country);
    nbviz.categoryDim = nbviz.filter.dimension((o) => o.category);
    nbviz.genderDim = nbviz.filter.dimension((o) => o.gender);
};

nbviz.filterByCountries = function(countryNames) {
  if (!countryNames.length) {
    nbviz.countryDim.filter();
  } else {
    nbviz.countryDim.filter(function (name) {
      return countryNames.indexOf(name) > -1;
    });
  }

  if (countryNames.length === 1) {
    nbviz.activeCountry = countryNames[0];
  } else {
    nbviz.activeCountry = null;
  }
};

nbviz.filterByCategory = function(cat) {
  nbviz.activeCategory = cat;

  if (cat === nbviz.ALL_CATS) {
    nbviz.categoryDim.filter();
  } else {
    nbviz.categoryDim.filter(cat);
  }
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
            value /= cData.population;
        };

        return {
            key: c.key, // e.g., Japan
            value: value, // e.g., 19 (prizes)
            code: cData.alpha3Code, // e.g., JPN
            // population: cData.population
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
}

// The "nbviz" object is a default export for this module
export default nbviz;
