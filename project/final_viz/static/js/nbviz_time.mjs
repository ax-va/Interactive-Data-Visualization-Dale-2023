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

// SCALES
let xScale = d3
    .scaleBand()
    .range([0, width])
    // Padding factor of 0.1 is approximately 10% of a circle's (circular indicator's) diameter
    .padding(0.1)
    .domain(
        d3.range(1901, 2016) // [1901, ..., 2015]
    );

let yScale = d3
    .scaleBand()
    .range([height, 0])
    // The domain is [0, ..., 14].
    // 14 is the historical maximum of prizes given in any one year
    .domain(d3.range(15));

// AXIS
let xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickValues(
        xScale.domain()
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

// LABELS
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
    .attr('fill', nbviz.fillCategory) // nbviz.fillCategory returns a color based on the category
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
            .attr('fill', (winner) => nbviz.fillCategory(winner.category) )
            .attr('cx', xScale.bandwidth() / 2)
            .attr('r', xScale.bandwidth() / 2)
            .transition() // All circles are eased into their y position
            .duration(2000) // ms
            .attr("cy", (winner, i) => yScale(i));
}

nbviz.callbacks.push( () => {
    let yearData = nbviz.nestDataByYear(nbviz.countryDim.top(Infinity));
    updateTimeChart(yearData);
});
