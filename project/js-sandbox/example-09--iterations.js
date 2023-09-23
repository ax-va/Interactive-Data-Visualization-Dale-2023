// Returns indices instead of items themselves.
// The order is not guaranteed, so the indices
// could be returned in nonconsecutive order.
for(let i in ['A', 'B', 'C', 'D', 'E', 'F']){
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5

let array = ['A0', 'B1', 'C2', 'D3', 'E4', 'F5'];
// Functional method forEach() applied to the array object.
// forEach and the functional map, reduce, and filter 
// supply the iterated item and its index to the callback function.
array.forEach(function(value, index){
  console.log(value); console.log(index);
})
// A0
// 0
// B1
// 1
// C2
// 2
// D3
// 3
// E4
// 4
// F5
// 5

// Objects are pseudodictionaries
let obj = {a:3, b:2, c:4};
// Objects could have inherited properties from the prototyping chain
for(let prop in obj) {
  if(obj.hasOwnProperty(prop)) {
    console.log("o." + prop + " = " + obj[prop]);
  }
}
// o.a = 3
// o.b = 2
// o.c = 4

// Objects are pseudodictionaries
let obj2 = {a:33, b:22, c:444};
// Iterate through the key-value pairs using the entries() method
for (const [key, value] of Object.entries(obj2)) {
  console.log(`${key}: ${value}`);
}
// a: 33
// b: 22
// c: 44