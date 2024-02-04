// See also https://vizhub.com/ax-va/0e761fff24cd4c3e82ae52111a441caf

const CATEGORIES = [
  "Physiology or Medicine",
  "Physics",
  "Peace",
  "Literature",
  "Chemistry",
];

let myData = [
  {year: 1901, name: "Wilhelm Röntgen", category: "Physics"},
  {year: 1901, name: "Jacobus Henricus van 't Hoff", category: "Chemistry"},
  {year: 1901, name: "Emil von Behring", category: "Physiology or Medicine"},
  {year: 1901, name: "Sully Prudhomme", category: "Literature"},
  {year: 1901, name: "Henry Dunant", category: "Peace"},
  {year: 1901, name: "Frédéric Passy", category: "Peace"},
  {year: 1902, name: "Hendrik Lorentz", category: "Physics"},
  {year: 1902, name: "Pieter Zeeman", category: "Physics"},
  {year: 1902, name: "Emil Fischer", category: "Chemistry"},
  {year: 1902, name: "Ronald Ross", category: "Physiology or Medicine"},
  {year: 1902, name: "Theodor Mommsen", category: "Literature"},
  {year: 1902, name: "Élie Ducommun", category: "Peace"},
  {year: 1902, name: "Charles Albert Gobat", category: "Peace"},
  {year: 1903, name: "Henri Becquerel", category: "Physics"},
  {year: 1903, name: "Pierre Curie", category: "Physics"},
  {year: 1903, name: "Marie Curie", category: "Physics"},
  {year: 1903, name: "Svante Arrhenius", category: "Chemistry"},
  {year: 1903, name: "Niels Ryberg Finsen", category: "Physiology or Medicine"},
  {year: 1903, name: "Bjørnstjerne Bjørnson", category: "Literature"},
  {year: 1903, name: "Randal Cremer", category: "Peace"},
  {year: 1904, name: "Lord Rayleigh", category: "Physics"},
  {year: 1904, name: "William Ramsay", category: "Chemistry"},
  {year: 1904, name: "Ivan Pavlov", category: "Physiology or Medicine"},
  {year: 1904, name: "Frédéric Mistral", category: "Literature"},
  {year: 1904, name: "José Echegaray", category: "Literature"},
  {year: 1905, name: "Philipp Lenard", category: "Physics"},
  {year: 1905, name: "Adolf von Baeyer", category: "Chemistry"},
  {year: 1905, name: "Robert Koch", category: "Physiology or Medicine"},
  {year: 1905, name: "Henryk Sienkiewicz", category: "Literature"},
  {year: 1901, name: "Bertha von Suttner", category: "Peace"},
];

// Get a color
let fillCategory = function(cat) {
    let i = CATEGORIES.indexOf(cat);
    return d3.schemeCategory10[i];
}

let nestDataByYear = function(entries) {
    let yearGroups = d3.group(entries, (d) => d.year);
    let yearData = Array.from(yearGroups, ([k, v]) => {
        // k for "key"
        // v for "values"
        let winnersByYear = v.sort(
            (p1, p2) => (p1.category > p2.category ? 1 : -1));
        return { yearAsKey: k, winnersByYear: winnersByYear };
    });
    return yearData;
}

let chartHolder = d3.select('#circle-barchart');
let margin = {
  top:20,
  right:20,
  bottom:30,
  left:40
};
let boundingRect = chartHolder
    .node()
    .getBoundingClientRect();
console.log("boundingRect:", boundingRect);
/*
boundingRect:
  DOMRect {x: 8, y: 67.8125, width: 600, height: 400, top: 67.8125, …}
...
*/

let width = boundingRect.width - margin.left - margin.right,
    height = boundingRect.height - margin.top - margin.bottom;
console.log("width:", width); // width: 540
console.log("height:", height); // height: 350

let svgG = chartHolder
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append('g')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

let xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(
      d3.range(1901, 1906)
    );

let yScale = d3
    .scaleBand()
    .range([height, 0])
    .domain(d3.range(15));

let xAxis = d3
    .axisBottom()
    .scale(xScale);

// Add the x-axis
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
    .attr('transform', `translate(10, 10)`)
    .attr('class', 'labels')
    .selectAll('labels')
    // Join categories with data() and join()
    .data(CATEGORIES)
    .join('g')
      // Place vertically 25px apart
      .attr('transform', (d, i) => `translate(0, ${i * 25 })`);

// Add a circular indicator and text label to the legend
categoryLabels.append('circle')
    .attr('fill', (fillCategory)) // fillCategory returns a color based on the category
    .attr('r', 10); // radius = 10px

categoryLabels.append('text')
    .text(d => d)
    .attr('dy', '0.4em')
    .attr('x', 25);

let updateTimeChart = function (yearData) {
  /*
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
                (winner) => winner.name // key function
            )
            .join(
                function (enter) {
                    return enter
                        .append('circle');
                }
            )
                .attr('fill', (winner) => fillCategory(winner.category) )
                .attr('cx', xScale.bandwidth() / 2)
                .attr('r', 10) // radius
                .attr("cy", (winner, i) => yScale(i));
  */

  svgG.selectAll('.year')
    .data(
        yearData,
        (d) => d.yearAsKey // key function
    )
    .join('g')
        .classed('year', true)
        .attr('name', (d) => d.yearAsKey)
        .attr('transform', (d) => `translate(${xScale(+d.yearAsKey)}, 0)`);

  svgG.selectAll('.year')
      .selectAll('circle') // circle marker
      .data(
          (d) => d.winnersByYear,
          (winner) => winner.name // key function
      )
      .join(
          function (enter) {
              return enter
                  .append('circle')
                  .attr('cy', height); // transition from bottom
          }
      )
        .attr('fill', (winner) => fillCategory(winner.category) )
        .attr('cx', xScale.bandwidth() / 2)
        .attr('r', 10) // radius
        .attr("cy", (winner, i) => yScale(i));
}

updateTimeChart(nestDataByYear(myData));
console.log("yScale(0)", yScale(0)); // yScale(0) 326.66666666666663
console.log("yScale(1)", yScale(1)); // yScale(1) 303.3333333333333
console.log("yScale(2)", yScale(2)); // yScale(2) 280
console.log("yScale(3)", yScale(3)); // yScale(3) 256.66666666666663
console.log("yScale(4)", yScale(4)); // yScale(4) 233.33333333333331
