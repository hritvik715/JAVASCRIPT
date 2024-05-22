`use strict`
//variables
// console.log(me);


// var me = 'hrtvik';


//functions
// function addDecl(a, b) {
//     return a + b;
// }

var x = 1;//variable declare with var will create a property on the global window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// console.log(window.x);