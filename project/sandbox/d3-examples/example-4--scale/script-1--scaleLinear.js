// Create a linear scale
let scale = d3.scaleLinear();
// Map 0 -> 1 to 0 -> 100
scale.domain([0, 1]).range([0, 100]);
console.log("scale(0.5):", scale(0.5)); // scale(0.5): 50

// scaleLinear for colors
let color = d3.scaleLinear()
  .domain([-1, 0, 1])
  .range(["red", "green", "blue"]);

let green = color(0); // "#008000" green's hex code
console.log("green:", green); // green: rgb(0, 128, 0)
let slateBlue = color(0.5); // "#004080" slate blue
console.log("slateBlue:", slateBlue); // slateBlue: rgb(0, 64, 128)
