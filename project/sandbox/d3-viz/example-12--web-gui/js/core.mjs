let core = {};
core.ALL_CATEGORIES = 'All Categories';
core.TRANSITION_DURATION = 2000;
core.COLORS = { palegold: '#E6BE8A' };
core.COLORED_TEXT_BY_CATEGORIES = "yes";

core.data = {};
core.valuePerCapita = 0;
core.activeCountry = null;
core.activeCategory = core.ALL_CATEGORIES;

core.CATEGORIES = [
  'Chemistry',
  'Economics',
  'Literature',
  'Peace',
  'Physics',
  'Physiology or Medicine',
];

core.fillCategory = function (category) {
  let i = core.CATEGORIES.indexOf(category);
  return d3.schemeCategory10[i];
};

core.nestDataByYear = function (entries) {
  let yearGroups = d3.group(entries, (d) => d.year);
  let keyValues = Array.from(
    yearGroups,
    ([key, values]) => {
      let year = key;
      let prizes = values;
      prizes = prizes.sort((p1, p2) =>
        p1.category > p2.category ? 1 : -1,
      );
      return { key: year, values: prizes };
    },
  );
  console.log(keyValues);
  return keyValues;
};

core.makeFilterAndDimensions = function (winnersData) {
  // Add the filter and create category dimensions
  core.filter = crossfilter(winnersData);

  core.countryDim = core.filter.dimension(function (o) {
    return o.country;
  });

  core.categoryDim = core.filter.dimension(function (o) {
    return o.category;
  });

  core.genderDim = core.filter.dimension(function (o) {
    return o.gender;
  });
};

core.filterByCountries = function (countryNames) {
  // Reset the filter if the countryNames array is empty,
  // the user chose "All Countries"
  if (!countryNames.length) {
    core.countryDim.filter();
  } else {
    core.countryDim.filter(function (name) {
      // Returns true if a country is in the countryNames list containing
      // either a single country or all single or double winners
      return countryNames.indexOf(name) > -1;
    });
  }

  if (countryNames.length === 1) {
    core.activeCountry = countryNames[0];
  } else {
    core.activeCountry = null;
  }
};

core.filterByCategory = function (category) {
  core.activeCategory = category;

  if (category === core.ALL_CATEGORIES) {
    core.categoryDim.filter();
  } else {
    core.categoryDim.filter(category);
  }
};

core.callbacks = [];

core.onDataChange = function () {
  core.callbacks.forEach((cb) => cb());
};

export default core;
