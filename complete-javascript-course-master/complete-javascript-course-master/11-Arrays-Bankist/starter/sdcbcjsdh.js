



let arr = ['a', 'b', 'c', 'd', 'e'];
for (const [index, item] of arr.entries()) {
    // console.log(`${index}  : ${item}`);
}


let [x, ...y] = [5, 6, 7, 8, 9];
console.log(x);
console.log(x, y);