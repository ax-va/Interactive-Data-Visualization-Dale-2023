import core from './core.mjs';

let categoryList = [core.ALL_CATEGORIES].concat(
  core.CATEGORIES,
);

let categorySelect = d3.select('#category-select select');

categorySelect
  .selectAll('option')
  .data(categoryList)
  .join('option')
  .attr('value', (d) => d)
  .html((d) => d);

categorySelect.on('change', function (d) {
  let category = d3.select(this).property('value');
  core.filterByCategory(category);
  core.onDataChange();
});

d3.select('#gender-select select').on(
  'change',
  function (d) {
    let gender = d3.select(this).property('value');
    if (gender === 'All') {
      // Reset the filter to all genders
      core.genderDim.filter();
    } else {
      core.genderDim.filter(gender);
    }
    core.onDataChange();
  },
);

// Country selector

export let initMenu = function () {
  let ALL_WINNERS = 'All Countries';
  let SINGLE_WINNERS = 'Single Winning Countries';
  let DOUBLE_WINNERS = 'Double Winning Countries';

  let nats = (core.countrySelectGroups = core.countryDim
    .group()
    .all() // group array of form [{key:"United States", value:336}, ...]
    .sort(function (a, b) {
      return b.value - a.value; // descending
    }));

  let fewWinners = { 1: [], 2: [] }; // for single and double winners
  let selectData = [ALL_WINNERS];

  nats.forEach(function (o) {
    if (o.value > 2) {
      selectData.push(o.key);
    } else {
      fewWinners[o.value].push(o.key);
    }
  });

  selectData.push(DOUBLE_WINNERS, SINGLE_WINNERS);

  let countrySelect = d3.select('#country-select select');

  countrySelect
    .selectAll('option')
    .data(selectData)
    .join('option') // Append an option for each catList member
    // Set the option’s value attribute and text to a category,
    // e.g., <option value="Peace">Peace</option>
    .attr('value', (d) => d)
    .html((d) => d);

  // event-handler callback function
  countrySelect.on('change', function (d) {
    let countries;
    let country = d3.select(this).property('value');

    if (country === ALL_WINNERS) {
      countries = [];
    } else if (country === DOUBLE_WINNERS) {
      countries = fewWinners[2];
    } else if (country === SINGLE_WINNERS) {
      countries = fewWinners[1];
    } else {
      countries = [country];
    }
    core.filterByCountries(countries);
    core.onDataChange();
  });

  d3.selectAll('#metric-radio input').on(
    'change', function () {
      let val = d3.select(this).property("value");
      if (parseInt(val) == 0) {
        core.COLORED_TEXT_BY_CATEGORIES = "yes";
      }
      else {
        core.COLORED_TEXT_BY_CATEGORIES = "no";
      }
      core.onDataChange();
    },
  );
};
