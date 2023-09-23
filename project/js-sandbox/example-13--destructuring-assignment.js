// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a, b, rest;
[a, b] = [1, 2];

// Swap variables
[a, b] = [b, a];
console.log("Swap: " + a + " " +b);

// Use the spread operator "..."
[a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log("Use the speard operaror: " + a + " " + b + " " + rest);