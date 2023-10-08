let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = nums.filter(x => x % 2)
    .map(x => x * x)
    // Sum out over values, the initial increment equals 0
    .reduce((total, current) => total + current, 0);

console.log("Total:" + total);
// Total:165