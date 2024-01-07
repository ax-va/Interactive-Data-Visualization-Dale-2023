function makeChart(data) {
    // Rollup to an object like {'male':  {'Chemistry': 185, 'Physiology or Medicine': 216, 'Physics': 223, ...
    let cat_groups = d3.rollup(data, v => v.length, d=>d.gender, d=>d.category);
    console.log("Groups:", cat_groups);

    let male = cat_groups.get('male');
    let female = cat_groups.get('female');
    // Get an array from the category keys using the spread operator ...
    let categories = [...male.keys()].sort();

    let traceM = {
        y: categories,
        x: categories.map(c => male.get(c)),
        name: "male prize total",
        type: 'bar',
        orientation: 'h'
    };

    let traceF= {
        y: categories,
        x: categories.map(c => female.get(c)),
        name: "female prize total",
        type: 'bar',
        orientation: 'h'
    };

    let traces = [traceM, traceF];
    let layout = {
        barmode: 'group', 
        margin: {l:160}  // Increase the left margin for our horizontal bar chart to accommodate long labels
    };

    Plotly.newPlot('gender-category', traces, layout);
};

d3.json('data/gender-category.json').then(data => {
    console.log("Dataset:", data);
    makeChart(data);
});
