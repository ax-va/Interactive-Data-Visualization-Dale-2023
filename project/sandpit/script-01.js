// script.js
let data = [3, 7, 2, 9, 1, 11];
let sum = 0;
data.forEach(function(d){
    sum += d;
});

console.log('Sum = ' + sum);
// Sum = 33

// 'use strict' directive
(function(foo){
  'use strict';
  // ...
}(window.foo = window.foo || {}));
