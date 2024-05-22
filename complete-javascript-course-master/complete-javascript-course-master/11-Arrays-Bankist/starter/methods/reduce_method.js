`use strict`

const movements = [-5, 8, -9, 6, 3];

// console.log(movements);


//accumulator is like a SNOW BALL
const balance = movements.reduce(function (acc, cur, i, arr) {
    // console.log(`----------acc is ${acc}----------`)
    // console.log(`curr is ${cur}`);
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;
}, movements[0]);

console.log(`------------------------------------`);


const balance2 = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;
}, 0);


// using arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);//experminet by changing 0 to 100

// console.log(balance);
// console.log(balance2);


//same thing using for loop
// let balance3 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance3)


console.log(`------------------------------------`);


//MAXIMUM VALUE of an array
const max = movements.reduce((acc, mov) => {
    // console.log(`acc is========= ${acc}`);
    // console.log(`mov is ${mov}`);
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);//dont put zero here (max may sayad kaam kar jaae lekin min mey error aa jaaeyga)
console.log(max);

