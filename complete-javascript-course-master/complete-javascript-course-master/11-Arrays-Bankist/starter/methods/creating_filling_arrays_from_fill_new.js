const arr = [1, 2, 3, 5, 6, 7];
console.log(new Array(1, 2, 3, 5, 6, 7));




const x = new Array(7);
console.log(x);//it create new array with 7 empty elements
console.log(x.map(() => 5));//it wont work


// x.fill(1, 3);//start filling 1 from index 3
x.fill(1, 3, 5);//start filling 1 from index 3 to index 4
// x.fill(1);
console.log(x);


arr.fill(23, 2, 6);
console.log(arr);

//note -> it mutate the original array



//Array.from
const y = Array.from({ length: 7 }, () => 1);//fill 1 at every space in array and here map funcion ki tarah callback function daal sakte hai
console.log(y);


const z = Array.from({ length: 7 }, (_, i) => i + 1);//throw away parameter (cur) ki jagah likh diya bcz uska(cur) koi kaam nhi hai
console.log(z);






