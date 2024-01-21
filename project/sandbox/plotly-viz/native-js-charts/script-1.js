let dataJSON = d3.json('data/gender-award_age.json');

dataJSON.then(function (data) {

    console.log("Genders and award ages:", data);

    let traces = [
        {
            type: 'violin',
            x: data.map(d => d.gender),
            y: data.map(d => d.award_age),
            points: 'none',
            box: {
                visible: true
            },
            line: {
                color: 'green',
            },
            meanline: {
                visible: true
            },
        }
    ];
    
    let layout = {
        title: "Nobel Prize Violin Plot",
        yaxis: {
            zeroline: false
        }
    }
    
    Plotly.newPlot('gender-award_age', traces, layout);
  });