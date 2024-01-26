// See also https://vizhub.com/ax-va/1d7f9a97f4924fd991a3e5ecfa7e6568

let nobelWinners = [
  {key:'United States', value:"336", code:"USA"}, // string "336"
  {key:'United Kingdom', value:98, code:"GBR"},
  {key:'Germany', value:79, code:"DEU"},
  {key:'France', value:60, code:"FRA"},
  {key:'Sweden', value:29, code:"SWE"},
  {key:'Switzerland', value:23, code:"CHE"},
  {key:'Japan', value:21, code:"JPN"},
  {key:'Russia', value:19, code:"RUS"},
  {key:'Netherlands', value:17, code:"NLD"},
  {key:'Austria', value:14, code:"AUT"},
  {key:'Montenegro', value:0, code:"MNE"},
];

let chartHolder = d3.select('#barchart');
let margin = { top: 20, right: 20, bottom: 35, left: 40 };
let boundingRect = chartHolder.node().getBoundingClientRect();
console.log("boundingRect:", boundingRect);
/*
DOMRect
  bottom:467.8125
  height:400
  left:8
  right:608
  top:67.8125
  width:600
  x:8
  y:67.8125
*/
let width = boundingRect.width - margin.left - margin.right;
console.log("width:", width); // width: 540
let height = boundingRect.height - margin.top - margin.bottom;
console.log("height:", height); // height: 345
let xPaddingLeft = 20; // in pixels

let xScale = d3.scaleBand()
  .range([xPaddingLeft, width])
  .padding(0.1);
let yScale = d3.scaleLinear()
  .range([height, 0]);

// SVG chart group
let svgG = chartHolder
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('class', 'svg-group')
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// bars
let svgGG1 = svgG.append("g")
  .attr("class", "bars")

// axes
let xAxis = d3.axisBottom()
  .scale(xScale);
let yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(10);

let svgGG2 = svgG.append("g")
.attr("class", "axes")

svgGG2.append("g")
  .attr("class", "x-axis")
  // Translate down
  .attr("transform", `translate(0, ${height})`);

svgGG2.append("g")
  .attr("class", "y-axis")
  .append("text")
  .attr('id', 'y-axis-label')
  .attr("transform", "rotate(-90)")
  .attr("y", 8)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text('Number of winners');


function updateBarChart(data) {
  // Filter out any countries with zero prizes by value
  data = data.filter(function (d) {
    return d.value > 0;
  });

  // Change the scale domains to reflect the newly filtered data
  xScale.domain( data.map(d => d.code) );
  yScale.domain( [0, d3.max(data, d => +d.value)] );

  // Join data and make bars
  svgGG1.selectAll(".bar")
    .data(data)
    .join(
      function (enter) {
        return enter
          // Add new elements "rect .bar"
          .append('rect')
          .attr('class', 'bar');
      },
      /*
      // default:
      function (update) {
        // Make no update for existing elements ".bar"
        return update;
      },
      // default:
      function (exit) {
        // Remove old elements ".bar"
        return exit.remove();
      }
      */
    )
    // Update elements after join()
    .attr('id', d => "bar-" + d.code)
    .attr('x', d => xScale(d.code))
    .attr('width', xScale.bandwidth())
    .attr('y', d => yScale(d.value))
    .attr('height', d => height - yScale(d.value));

  // Use the axes generators with the new scale domains
  svgGG2.select('.x-axis')
    // Build the axes including ticks and tick labels
    .call(xAxis)
    // Manipulate the tick labels
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");

  svgGG2.select('.y-axis')
    .call(yAxis);

};

updateBarChart(nobelWinners);
updateBarChart(nobelWinners.slice(0, 3));
