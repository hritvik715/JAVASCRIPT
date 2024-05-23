let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
// console.log(arr.slice(2));//slice method return a new sliced array (dusra comma kay baad arr.length maan le )
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// console.log(arr);

//imp->creating a shallow copy of given array
// console.log(arr.slice());
// console.log([...arr]);

console.log(arr.splice(2, 3));//dusre index se teen element hta do
//SPLICE METHOD
// console.log(arr.splice(2));
// arr.slice(-1);
// console.log(arr);
// console.log(arr.splice(2, 2));
// console.log(arr);

//pro coder -> for project

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);//reverse method mutate the origibal array


// //CONCAT
const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('-'));


let x = [2, 5, 6, 7, 3];
x.splice(0, 2);
// console.log(x);

// console.log(x.sort((a, b) => a - b));
// console.log(x.sort((a, b) => b - a));


