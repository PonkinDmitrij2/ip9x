'use strict';

// Use for loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

// ========== For version ==========
// const sum = (...args) => {
//   let result = 0;

//   for (let i = 0; i < args.length; i++) {
//     result += args[i];
//   }

//   return result;
// };

// ========== For of version ==========
// const sum = (...args) => {
//   let result = 0;

//   for (const num of args) {
//     result += num;
//   }

//   return result;
// };

// ========== While version ==========
// const sum = (...args) => {
//   let result = 0;
//   let i = 0;

//   while (i < args.length) {
//     result += args[i];
//     i++;
//   }

//   return result;
// };

// ========== Do while version ==========
// const sum = (...args) => {
//   let result = 0;
//   let i = 0;

//   do {
//     result += args[i];
//     i++;
//   } while (i < args.length);

//   return result;
// };

// ========== Array.prototype.reduce() version ==========
const sum = (...args) => args.reduce((acc, num) => acc + num, 0);

module.exports = { sum };
