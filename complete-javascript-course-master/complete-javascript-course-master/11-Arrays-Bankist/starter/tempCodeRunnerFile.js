// ementsDescriptions = movements.map((mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
// )

// console.log(movementsDescriptions);





let arr = [5, 6, 3, 4, 7, 8, 96, 56, 24, 36];
let brr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1, 3));


// console.log(arr.splice(2, 3));
// console.log(arr);


// console.log(arr.splice(3, 2));


// console.log(arr.at(0));
// console.log(arr.slice(-1)[0]);


for (const i of arr.entries()) {
    console.log(i);
}
for (const [i, item] of arr.entries()) {
    console.log(`${i} : ${item}`);
}

arr.forEach(function (mov, i) {
    console.log(mov, i);
})


const [x, y] = arr;
console.log(x);
console.log(y);
