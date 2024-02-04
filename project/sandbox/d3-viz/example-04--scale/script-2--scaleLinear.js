// for mapping a continuous domain to a continuous range

// Read JSON and then handle the promise
d3.json("data/nobel-winners.json").then((nobelWinners) => {
  // Handle the promise
  console.log("Nobel winners:", nobelWinners);
  /*
  nobelWinners is an array of dictionaries:
    [
      {key: 'United States', value: '336'}, // The value is a string
      {key: 'United Kingdom', value: 98},
      {key: 'Germany', value: 79},
      {key: 'France', value: 60},
      {key: 'Sweden', value: 29},
      {key: 'Switzerland', value: 23},
      {key: 'Japan', value: 21},
      {key: 'Russia', value: 19},
      {key: 'Netherlands', value: 17},
      {key: 'Austria', value: 14},
    ]
  */

  // Get max value
  let maxWinners = d3.max(nobelWinners, function(dict) {
    return +dict.value; // Make a number from a sring by prefexing +
  });
  console.log("maxWinners:", maxWinners); // maxWinners: 336

  let height = 400;

  let yScale = d3.scaleLinear()
    .domain([0, maxWinners]) /* [0, 336] */
    .range([height, 0]);
});
