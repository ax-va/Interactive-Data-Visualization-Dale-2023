let numInt = d3.interpolate(400, 0);

// The interpolate method has a default domain of [0,1]
console.log("numInt(0):", numInt(0)); // numInt(0): 400
console.log("numInt(0.5):", numInt(0.5)); // numInt(0.5): 200
console.log("numInt(1):", numInt(1)); // numInt(1): 0
