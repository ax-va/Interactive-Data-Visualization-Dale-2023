// See also https://vizhub.com/ax-va/47d09f703e2a460882cc4d17f7660ef8

let myData = [
  {"year":1901,"name":"Wilhelm Conrad R\\u00f6ntgen"},
  {"year":1901,"name":"Jacobus Henricus van \'t Hoff"},
  {"year":1901,"name":"Sully Prudhomme"},
  {"year":1901,"name":"Fr\\u00e9d\\u00e9ric Passy"},
  {"year":1901,"name":"Henry Dunant"},
  {"year":1901,"name":"Emil Adolf von Behring"},
  {"year":1902,"name":"Theodor Mommsen"},
  {"year":1902,"name":"Hermann Emil Fischer"},
];

console.log("myData:", myData);
/*
myData:
  Array(8)
    0: {year: 1901, name: 'Wilhelm Conrad R\\u00f6ntgen'}
    1: {year: 1901, name: "Jacobus Henricus van 't Hoff"}
    2: {year: 1901, name: 'Sully Prudhomme'}
    3: {year: 1901, name: 'Fr\\u00e9d\\u00e9ric Passy'}
    4: {year: 1901, name: 'Henry Dunant'}
    5: {year: 1901, name: 'Emil Adolf von Behring'}
    6: {year: 1902, name: 'Theodor Mommsen'}
    7: {year: 1902, name: 'Hermann Emil Fischer'}
    length: 8
    [[Prototype]]: Array(0)
*/

let yearGroups = d3.group(myData, d => d.year);

console.log("yearGroups:", yearGroups);
/*
yearGroups:
  InternMap(2) {1901 => Array(6), 1902 => Array(2)}
    [[Entries]]
      0: {1901 => Array(6)}
        key: 1901
        value: Array(6)
          0: {year: 1901, name: 'Wilhelm Conrad R\\u00f6ntgen'}
          1: {year: 1901, name: "Jacobus Henricus van 't Hoff"}
          2: {year: 1901, name: 'Sully Prudhomme'}
          3: {year: 1901, name: 'Fr\\u00e9d\\u00e9ric Passy'}
          4: {year: 1901, name: 'Henry Dunant'}
          5: {year: 1901, name: 'Emil Adolf von Behring'}
          length: 6
          [[Prototype]]: Array(0)
      1: {1902 => Array(2)}
        key: 1902
        value: Array(2)
          0: {year: 1902, name: 'Theodor Mommsen'}
          1: {year: 1902, name: 'Hermann Emil Fischer'}
          length: 2
          [[Prototype]]: Array(0)
  _intern: Map(2) {1901 => 1901, 1902 => 1902}
  _key: ƒ N(t)
  size: 2
  [[Prototype]]: Map
*/

// destructuring assignment with [k, v]
let keyValues = Array.from(yearGroups, ([k, v]) => {
  console.log("key:", k);
  console.log("type of key:", typeof(k));
  console.log("value:", v);
  console.log("type of value:", typeof(v));
});
/*
key: 1901
value:
...
  0: {year: 1901, name: 'Wilhelm Conrad R\\u00f6ntgen'}
  1: {year: 1901, name: "Jacobus Henricus van 't Hoff"}
  2: {year: 1901, name: 'Sully Prudhomme'}
  3: {year: 1901, name: 'Fr\\u00e9d\\u00e9ric Passy'}
  4: {year: 1901, name: 'Henry Dunant'}
  5: {year: 1901, name: 'Emil Adolf von Behring'}
...
type of value: object
key: 1902
type of key: number
value:
...
  0: {year: 1902, name: 'Theodor Mommsen'}
  1: {year: 1902, name: 'Hermann Emil Fischer'}
...
type of value: object
*/