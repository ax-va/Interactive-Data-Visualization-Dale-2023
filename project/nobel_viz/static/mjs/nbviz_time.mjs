import nbviz from './nbviz_core.mjs';

let chartHolder = d3.select('#nobel-time');
let margin = {top:20, right:20, bottom:30, left:40};
let boundingRect = chartHolder
    .node()
    .getBoundingClientRect();
let width = boundingRect.width - margin.left - margin.right,
    height = boundingRect.height - margin.top - margin.bottom;

let svgG = chartHolder
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

let xScale = d3
    .scaleBand()
    .range([0, width])
    // Padding factor of 0.1 is approximately 10% of a circle's (circular indicator's) diameter
    .padding(0.1)
    .domain(
        d3.range(1901, 2015)
    );

let yScale = d3
    .scaleBand()
    .range([height, 0])
    // The domain is [0, ..., 14].
    // 14 is the historical maximum of prizes given in any one year
    .domain(d3.range(15));

let xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickValues(xScale
        .domain()
        // Decades are given by 0 after the modulo operation, 
        // ! ("not") makes "true" from 0 ("false")
        .filter( (d, i) => !(d % 10) ) 
    );

svgG.append("g") // group to hold the axis
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis) // calling xAxis to build the axis elements
    .selectAll("text") // for rotating the tick labels to place them diagonally
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");

// Create a category legend
let categoryLabels = chartHolder
    .select('svg')
    .append('g')
    .attr('transform', "translate(10, 10)")
    .attr('class', 'labels')
    .selectAll('labels')
    // Join categories with data() and join()
    .data(nbviz.CATEGORIES)
    .join('g')
    // Place vertically 10 pixels apart
    .attr('transform', (d, i) => `translate(0, ${i * 10 })`);

// Add a circular indicator and text label to the legend
categoryLabels.append('circle')
    .attr('fill', (nbviz.categoryFill)) // nbviz.categoryFill returns a color based on the category
    .attr('r', xScale.bandwidth() / 2); // bandwidth() returns the distance between two category labels

categoryLabels.append('text')
    .text(d => d)
    .attr('dy', '0.4em')
    .attr('x', 10);

let updateTimeChart = function (yearData) {
    svgG.selectAll('.year')
        .data(
            yearData, 
            (d) => d.yearAsKey // key function
        )
        .join('g')
            .classed('year', true)
            .attr('name', (d) => d.yearAsKey)
            .attr('transform', (d) => `translate(${xScale(+d.yearAsKey)}, 0)`)
            .selectAll('circle') // circle marker
            .data(
                (d) => d.winnersByYear, 
                (winnersByYearEntry) => winnersByYearEntry.name // key function
            )
            .join( 
                function (enter) {
                    return enter
                        .append('circle')
                        // Any new circles start at the bottom of the chart
                        .attr('cy', height);
                } 
            )
                .attr('fill', (winnersByYearEntry) => nbviz.categoryFill(winnersByYearEntry.category) )
                .attr('cx', xScale.bandwidth() / 2)
                .attr('r', xScale.bandwidth() / 2)
                .transition() // All circles are eased into their y position
                .duration(2000) // ms
                .attr("cy", (winnersByYearEntry, i) => yScale(i));
}

nbviz.callbacks.push( () => {
    let yearData = nbviz.nestDataByYear(nbviz.countryDim.top(Infinity));
    updateTimeChart(yearData);
});

/*
import nbviz from "./nbviz_core.mjs";

var chartHolder = d3.select("#nobel-time");

var margin = { top: 20, right: 20, bottom: 30, left: 40 };
var boundingRect = chartHolder.node().getBoundingClientRect();
var width = boundingRect.width - margin.left - margin.right,
  height = boundingRect.height - margin.top - margin.bottom;

var svg = chartHolder
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("class", "chart")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// SCALES
var xScale = d3
  .scaleBand()
  .range([0, width])
  .padding(0.1)
  .domain(d3.range(1901, 2015));

var yScale = d3.scaleBand().range([height, 0]).domain(d3.range(15));

// AXIS
var xAxis = d3
  .axisBottom()
  .scale(xScale)
  .tickValues(
    xScale.domain().filter(function (d, i) {
      return !(d % 10);
    })
  );

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", ".15em")
  .attr("transform", "rotate(-65)");

// LABELS
let catLabels = chartHolder
  .select("svg")
  .append("g")
  .attr("class", "labels")
  .attr("transform", "translate(10, 10)")
  .selectAll("label")
  .data(nbviz.CATEGORIES)
  .join("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * 10 + ")";
  });

catLabels
  .append("circle")
  .attr("fill", nbviz.categoryFill)
  .attr("r", xScale.bandwidth() / 2);

catLabels
  .append("text")
  .text((d) => d)
  .attr("dy", "0.4em")
  .attr("x", 10);

let updateTimeChart = function (data) {
  let years = svg.selectAll(".year").data(data, (d) => d.key);

  years
    .join("g")
    .classed("year", true)
    .attr("name", (d) => d.key)
    .attr("transform", function (year) {
      return "translate(" + xScale(+year.key) + ",0)";
    });

  let winners = svg
    .selectAll(".year")
    .selectAll("circle")
    .data(
      (d) => d.values,
      (d) => d.name
    );

  winners
    .join((enter) => {
      return enter.append("circle").attr("cy", height);
    })
    .attr("fill", function (d) {
      return nbviz.categoryFill(d.category);
    })
    .attr("cx", xScale.bandwidth() / 2)
    .attr("r", xScale.bandwidth() / 2)
    .transition()
    .duration(2000)
    .attr("cy", (d, i) => yScale(i));
};

nbviz.callbacks.push(() => {
  let data = nbviz.nestDataByYear(nbviz.countryDim.top(Infinity));
  updateTimeChart(data);
});
