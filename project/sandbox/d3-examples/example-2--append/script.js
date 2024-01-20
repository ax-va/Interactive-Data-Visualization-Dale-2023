// See https://vizhub.com/ax-va/cf01c7cfb77b4244a22d321254c783f8

let dummyData = [
  {key:'United States', value:336},
  {key:'United Kingdom', value:98},
  {key:'Germany', value:79},
  {key:'France', value:60},
  {key:'Sweden', value:29},
  {key:'Switzerland', value:23},
  {key:'Japan', value:21},
  {key:'Russia', value:19},
  {key:'Netherlands', value:17},
  {key:'Austria', value:14},
];

let buildCrudeBarchart = function() {
  let chartHolder = d3.select("#barchart");
  let margin = {top:20, right:20, bottom:30, left:40};
  let bRect = chartHolder.node().getBoundingClientRect();
  // width and height of the barchart group
  let width = bRect.width - margin.left - margin.right;
  let height = bRect.height - margin.top - margin.bottom;

  let svg = d3.select('#barchart')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .classed('chart', true)
    // Translate on margin.left px to right and margin.top px down
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  console.log('d3.select("#barchart").html():', d3.select("#barchart").html());
  /*
  d3.select("#barchart").html():
  <svg width="600" height="400">
    <g class="chart" transform="translate(40, 20)"></g>
  </svg>
  */

  let barWidth = width / dummyData.length;
  dummyData.forEach(function(entry, index) {
    svg.append('rect')
      .classed('bar', true)
      .attr('height', entry.value)
      .attr('width', barWidth * 0.9)
      .attr('y', height - entry.value)
      .attr('x', index * (barWidth));
  });
};

buildCrudeBarchart();
