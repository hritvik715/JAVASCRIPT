//this method return the index of that element not the element iteself



//1. FIND INDEX METHOD
//E.G - A
let arr = [2, 5, 6, 34, 7];

const y = arr.findIndex(x => x === 6);
console.log(y);






//E.G -B

let brr = [3, 5, 6, 7, 8];
console.log(brr.findIndex(x => x > 6));







//2. INDEX OF METHOD

let krr = [23, 69, 58, 41, 75];
console.log(krr.indexOf(41));



// Differnece is --> in find index methd we can create complex condition which return a specific value and in indexof only search for a value in the array