// See also https://vizhub.com/ax-va/19322755fb004b26868fd7791c2ee827

// Use the "join" method instead of
// the "enter", "exit", and "remove" methods

let nobelWinners = [
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

function updateBars(data) {
  // Select and store the SVG bars group
  let svg = d3.select("#nobel-bar g");
  let bars = svg.selectAll(".bar").data(data);

  bars.join("rect") // Join the "bars" data to "rect" elements.
    // The join method returns all "rect" elements.
  .classed("bar", true)
  .attr("height", 10)
  .attr("width", d => d.value)
  .attr("y", function (d, i) {
    return i * 12;
  });
};

updateBars(nobelWinners.slice(0, 4));
updateBars(nobelWinners.slice(0, 2));
updateBars(nobelWinners.slice(0, 6));