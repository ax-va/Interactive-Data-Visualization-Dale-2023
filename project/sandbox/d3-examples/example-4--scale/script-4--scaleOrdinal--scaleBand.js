// for mapping an array of values to discrete or continuous ranges

// one-to-one mapping
let oScale = d3.scaleOrdinal()
  .domain(['a', 'b', 'c', 'd', 'e'])
  .range(['e', 'd', 'c', 'b', 'a']);

console.log("oScale('b'):", oScale('b')); // oScale('b'): d
console.log("oScale('e'):", oScale('e')); // oScale('e'): a

// Map an array of numbers to a continuous range
// rounding to integer pixel values
oScale = d3.scaleBand()
  .domain([0, 1, 2, 3])
  .rangeRound([0, 400]);

console.log("oScale(0):", oScale(0)); // oScale(0): 0
console.log("oScale(1):", oScale(1)); // oScale(1): 100
console.log("oScale(2):", oScale(2)); // oScale(2): 200
console.log("oScale(3):", oScale(3)); // oScale(3): 300
console.log("oScale(4):", oScale(4)); // oScale(4): undefined

oScale = d3.scaleBand()
  .domain([0, 1, 2, 3]);

console.log("oScale(0):", oScale(0)); // oScale(0): 0
console.log("oScale(1):", oScale(1)); // oScale(1): 0.25
console.log("oScale(2):", oScale(2)); // oScale(2): 0.5
console.log("oScale(3):", oScale(3)); // oScale(3): 0.75
console.log("oScale(4):", oScale(4)); // oScale(4): undefined

oScale = d3.scaleBand()
  .domain([1, 2]);
oScale.rangeRound([0, 100]);

console.log("oScale(2):", oScale(2)); // oScale(2): 50
console.log("oScale.bandwidth():", oScale.bandwidth()); // oScale.bandwidth(): 50
// | 50 | 50 |

// Specify a padding factor of 0.1
oScale.padding(0.2);
console.log("oScale(1):", oScale(1)); // oScale(1): 10
console.log("oScale(2):", oScale(2)); // oScale(2): 55
console.log("oScale.bandwidth():", oScale.bandwidth()); // oScale.bandwidth(): 36
// | 10 | 36 | 9 | 36 | 9 |

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

  let width = 600;

  let xScale = d3.scaleBand()
    .domain(d3.range(nobelWinners.length))
    .rangeRound([0, width])
    .padding(0.1);
});
