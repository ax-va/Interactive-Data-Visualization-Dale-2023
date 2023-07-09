import api from './libs/foo-module-exports.mjs'
import { findOdds } from './libs/foo-module-exports.mjs'

let odds = findOdds([2, 4, 24, 33, 5, 66, 24])
console.log('Odd numbers (mjs script): ', odds)

odds = api.findOdds([12, 43, 22, 39, 52, 21])
console.log('Odd numbers (mjs script): ', odds)

// import api as foo from './libs/foo-module-exports.mjs'
// import { findOdds as odds } from './libs/foo-module-exports.mjs'