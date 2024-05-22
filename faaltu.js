'use strict'

// let arr = [5, 6, 3, 7, 8, 2];

// arr.forEach((value, key) =>
//     console.log(value, key)
// );


// for (const [x, y] of arr.entries()) {
//     console.log(x, y);
// }


// const brr = [5, 2];
// let [a, b] = brr;
// [b, a] = [a, b];
// console.log(a, b);

// let arr = [9, 6];
// let [x, y] = arr;
// [y, x] = [x, y];
// console.log(x, y);


let a = 5;
let b = 7;
let k = a + b;
a = k - a;
b = k - b;
console.log(a, b);