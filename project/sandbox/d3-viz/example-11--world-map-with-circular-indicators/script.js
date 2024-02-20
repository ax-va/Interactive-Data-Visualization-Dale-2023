// See also https://vizhub.com/ax-va/c4f1b70d57cb4f1ab079e310d6380a7f

const MIN_CENTROID_RADIUS = 2;
const MAX_CENTROID_RADIUS = 30;

let mapContainer = d3.select('#nobel-map');
let boundingRect = mapContainer
  .node()
  .getBoundingClientRect();
let width = boundingRect.width;
let height = boundingRect.height;

console.log('width:', width); // width: 800
console.log('height:', height); // height: 400

let svg = mapContainer
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let projection = d3
  .geoEquirectangular() // equirectangular projection
  .scale((193 * height) / 480)
  .center([15, 15])
  .translate([width / 2, height / 2])
  .precision(0.1);

let path = d3.geoPath().projection(projection);

// Add graticule (map grid)
let graticule = d3.geoGraticule().step([20, 20]); // grid spacing of 20 degrees

svg
  .append('path')
  // The grid will overlay the map paths
  .datum(graticule) // shorthand for data([graticule])
  .attr('class', 'graticule')
  // Generate the d attribute to an SVG path using GeoJSON data
  .attr('d', path);

// Use scaleSqrt for value indicators
let radiusScale = d3
  .scaleSqrt()
  // Set "range". "domain" will be set later.
  .range([MIN_CENTROID_RADIUS, MAX_CENTROID_RADIUS]);

// Transform longitude and latitude to [x, y] pixel positions
let getCentroid = function (d) {
  return projection([d.longitude, d.latitude]);
};

let tooltip = d3.select('#map-tooltip');

Promise.all([
  d3.json('data/world-topojson-110m.json'),
  d3.csv('data/countries.csv'),
]).then(function ([worldMap, countryData]) {
  let land = topojson.feature(
    worldMap,
    worldMap.objects.land,
  );

  let countries = topojson.feature(
    worldMap,
    worldMap.objects.countries,
  ).features;

  let borders = topojson.mesh(
    worldMap,
    worldMap.objects.countries,
    function (a, b) {
      // Filter for only internal borders shared between countries
      return a !== b;
    },
  );

  console.log('typeof(countries):', typeof countries); // typeof(countries): object

  // Insert the land map
  svg
    // Insert before .graticule to keep the grid below
    .insert('path', '.graticule')
    .datum(land)
    .attr('class', 'land')
    .attr('d', path);

  // Insert winning countries after the land map.
  // Overwise, the land map overlays the winning countries map.
  svg.insert('g', '.graticule').attr('class', 'countries');

  // Insert border lines
  svg
    .insert('path', '.graticule')
    .datum(borders)
    .attr('class', 'country-border')
    .attr('d', path);

  // Insert counties value-indicators
  svg.insert('g').attr('class', 'centroids');

  // Associate country ids with to GeoJSON data
  let idToCountry = {};

  countries.forEach(function (c) {
    idToCountry[c.id] = c;
  });

  console.log('idToCountry:', idToCountry);

  let mapData = countryData.map(function (d) {
    return {
      geoObj: idToCountry[d.id], // GeoJSON data associated with a country
      name: d.name,
      number: d.number,
      latitude: d.latitude,
      longitude: d.longitude,
    };
  });

  console.log('mapData:', mapData);

  let maxWinners = d3.max(mapData.map((d) => d.number));

  // Set "domain"
  radiusScale.domain([0, maxWinners]);

  // Use a data-join to make bound countries visible
  let svgGroupCountries = svg
    .select('.countries')
    .selectAll('.country')
    .data(mapData, (d) => d.name);

  svgGroupCountries
    .join(
      (enter) => {
        return enter
          .append('path')
          .attr('class', 'country')

          .attr('name', (d) => d.name)
          .on('mouseenter', function (event, d) {
            // "this" is available only in "function", not by arrow "=>"
            let country = d3
              .select(this)
              .classed('active', true);

            // Don't do anything if the country is not visible
            if (!country.classed('visible')) {
              return;
            }

            let prizeString =
              d.number === 1 ? 'winner' : 'winners';
            prizeString =
              d.number + ' Nobel Prize ' + prizeString;

            // Set the header and text of the tooltip
            tooltip.select('h2').text(d.name);
            tooltip.select('p').text(prizeString);

            // Get the mouse coordinates relative to the parent map group in pixels
            let mouseCoords = d3.pointer(event);
            tooltip.style('top', mouseCoords[1] + 'px');
            tooltip.style('left', mouseCoords[0] + 'px');
          })
          .on('mouseout', function (d) {
            // Hide the tooltip by placing it to the far left of the map
            tooltip.style('left', '-9999px');
            // "this" is available only in "function", not by arrow "=>"
            d3.select(this).classed('active', false);
          });
      },
      (update) => update,
      (exit) => {
        return exit
          .classed('visible', false)
          .style('opacity', 0);
      },
    )
    .classed('visible', true)
    .style('opacity', 1)
    // Add the data associated with the winning countries
    .attr('d', (d) => path(d.geoObj));

  // circular value indicators
  let svgGroupCentroids = svg
    .select('.centroids')
    .selectAll('.centroid')
    .data(mapData, (d) => d.name);

  svgGroupCentroids
    .join(
      (enter) => {
        return enter
          .append('circle')
          .attr('class', 'centroid')
          .attr('name', (d) => d.name)
          .attr('cx', (d) => getCentroid(d)[0])
          .attr('cy', (d) => getCentroid(d)[1]);
      },
      (update) => update,
      (exit) => exit.style('opacity', 0),
    )
    .style('opacity', 1)
    .attr('r', (d) => radiusScale(+d.number) * 0.25);
});
