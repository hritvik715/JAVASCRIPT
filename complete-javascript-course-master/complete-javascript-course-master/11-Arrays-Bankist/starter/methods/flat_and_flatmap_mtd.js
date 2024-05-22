//flat 
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());


const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());//it goes only one level deep


console.log(arrDeep.flat(2));//it goes two level deep











//FlatMap( flat map goes only one level deep (and we can not change it ) so agar orr deep jaana hai toh only flat use karna hi hoga)
console.log(arr.flatMap(acc => acc));
