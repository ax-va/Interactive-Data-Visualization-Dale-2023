let items = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'A'];
console.log("items:", items);
// ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'A']
console.log("countBy:", _.countBy(items));
// {A: 3, B: 2, C: 1, D: 1, E: 1, …}
// A: 3
// B: 2
// C: 1
// D: 1
// E: 1
// F: 1

journeys = [
    {period:'morning', times:[44, 34, 56, 31]},
    {period:'evening', times:[35, 33],},
    {period:'morning', times:[33, 29, 35, 41]},
    {period:'evening', times:[24, 45, 27]},
    {period:'morning', times:[18, 23, 28]}
];

let groups = _.groupBy(journeys, 'period');
let mTimes = _.pluck(groups['morning'], 'times');
mTimes = _.flatten(mTimes);
let average = function(l){
    let sum = _.reduce(l, function(a, b){return a + b}, 0);
return sum/l.length;
};
console.log('Average morning time is ' + average(mTimes));