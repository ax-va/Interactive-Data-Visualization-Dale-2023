
let data;
// Will be changed by the user in the dropdown
let selectedGroup = 'gender';
let availableGroups = ['gender', 'category'];

availableGroups.forEach((g) => {
    // Select the dropdown by ID and append an <option> tag with text and value set
    d3.select("#nobel-group")
    .append("option")
    // Ensure that the initial selection is the value of "selectedGroup" by setting the selected attribute to true
    .property("selected", g === selectedGroup)
    .attr("value", g)
    .text(g);
});

d3.json("../../data/nobel_winners_cleaned.json").then((_data) => {
    console.log(_data);
    data = _data;
    updateChart();
});


function updateChart() {
    let traces = [
        {
            type: "violin",
            x: data.map((d) => d[selectedGroup]),
            y: data.map((d) => d.award_age),
            points: "none",
            box: {
                visible: true
            },
            line: {
                color: "green"
            },
            meanline: {
                visible: true
            }
        }
    ];

    let layout = {
        title: "Age distributions of the Nobel Prize winners",
        yaxis: {
            zeroline: false,
            title: "award age",
        },
        xaxis: {
            categoryorder: 'category ascending'
        }
    };
    
    Plotly.react("violin-group", traces, layout);
};

// Use D3 to add a callback function when a selection is made
d3.select("#nobel-group").on("change", function (e) {
    selectedGroup = d3.select(this).property("value");
    updateChart();
});