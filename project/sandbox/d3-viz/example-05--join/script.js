// See also https://vizhub.com/ax-va/19322755fb004b26868fd7791c2ee827

// Use the "join" method instead of using
// the "enter", "update", "exit", methods separately

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
  let svgG = d3.select("#nobel-bar g");
  let bar = svgG.selectAll(".bars .bar");

  bar
  .data(data) // Pass data into the section.
  .join("rect") // Append "rect".
    // Make for each "rect":
    .classed("bar", true)
    .attr("height", 10)
    .attr("opacity", 0.5)
    // Arguments (d, i) are for the datum and the index, respectively
    .attr("width", (d) => d.value)
    .attr("y", function (d, i) {
      return i * 12;
    })
    .attr('name', function (d, i) {
      let sane_key = d.key.replace(/ /g, '_'); // regular expression
      console.log('__data__ is: ' + JSON.stringify(d));
      console.log('index is is: ' + JSON.stringify(i));
      return 'bar__' + sane_key;
    });
}

updateBars(nobelWinners);
updateBars(nobelWinners.slice(0, 4));
updateBars(nobelWinners.slice(0, 2));

