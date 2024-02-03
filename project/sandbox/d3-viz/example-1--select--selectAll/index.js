// See also https://vizhub.com/ax-va/d5e4a7d5541f4330ade9f4e982fd2c61

d3.select("#barchart .bar").attr("style", "fill:rgb(200,100,100)");
d3.selectAll("#barL, #barM").attr("style", "fill:rgb(100,100,200");
d3.selectAll("#barchart .bar").attr("style", "fill:rgb(100,200,200");

// What can select() and selectAll() change
// d3.select("#foo").attr("id", "new-barchart");
// d3.select("#foo").style("opacity", 0.5); // CSS
// d3.select("#foo").classed("barchart", true);
// d3.select("#foo").text("some text");
// d3.select("#foo").html("<p> some <em>raw html</em></p>");
// d3.select("#foo").property("check", true); // checkbox

// change chain
d3.select("#barM")
  .classed("highlight", true)
  .attr("height", "50px")
  .style("fill", "red");

// Change the text style and
// replace "text placeholder" with
// "D3 select() and selectAll() example"
d3.select('#title')
  .classed('fancy-title', true)
  .text('D3 select() and selectAll() examples');

// Get values
// Press Ctrl+Shift+J to open the Console tab in Google Chrome to see the logs
console.log('d3.select("#barM").attr("id"):', d3.select("#barM").attr("id")); // barM
console.log('d3.select("#barM").style("fill"):', d3.select("#barM").style("fill")); // red
console.log('d3.select("#barM").classed("highlight"):', d3.select("#barM").classed("highlight")); // true
console.log('d3.select("#barM").property("nodeName"):', d3.select("#barM").property("nodeName")); // rect
console.log('d3.select("#title").attr("id"):', d3.select("#title").attr("id")); // title
console.log('d3.select("#title").style("font-family"):', d3.select("#title").style("font-family")); // sant-serif
console.log('d3.select("#title").text():', d3.select("#title").text()); // D3 select() and selectAll() example
console.log('d3.select("#barchart").html():', d3.select("#barchart").html());
/*
      <rect id="barL" class="bar" x="0" y="20" height="100" width="50" style="fill:rgb(100,200,200"></rect>
      <rect id="barM" class="bar highlight" x="55" y="30" height="50px" width="50" style="fill: red;"></rect>
      <rect id="barR" class="bar" x="110" y="40" height="100" width="50" style="fill:rgb(100,200,200"></rect>
*/

let ele = d3.select("#barchart");
// Get DOMRect
let bRect = ele.node().getBoundingClientRect();
console.log('bRect:', bRect);
/*
DOMRect {x: 8, y: 67.8125, width: 300, height: 150, top: 67.8125, …}
  bottom: 217.8125
  height: 150
  left: 8
  right: 308
  top: 67.8125
  width: 300
  x: 8
  y: 67.8125
*/
// Get SVGRect
let bBox = ele.node().getBBox();
console.log('bBox:', bBox);
/*
SVGRect {x: 0, y: 20, width: 160, height: 120}
  height: 120
  width: 160
  x: 0
  y: 20
*/
