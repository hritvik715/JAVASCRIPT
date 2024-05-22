`use strict`


//MY METHOD

// const brr = [];
// let y = [];
// let humanAge = 0;
// const calcAverageHumanAge = function (arr) {
//     arr.forEach(function (value) {
//         if (value <= 2) {
//             humanAge = 2 * value;
//             return brr.push(humanAge);

//         }
//         else if (value > 2) {
//             humanAge = 16 + value * 4;
//             return brr.push(humanAge);
//         }
//     })
//     brr.forEach(function (value, index) {
//         if (value > 18) y.push(value)

//     });

//     y.forEach(function (value) {
//         let x = value
//     })

//     return y;

// }

// let list = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// console.log(list);
// console.log(`Dog age in human years ${list}`);




//JONAS METHOD
const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18)
    console.log(humanAges);
    console.log(adults);

    //first way
    // const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);//while doing dry run decimal mey answer nikaalna

    //second way
    // const average = adults.reduce((acc, age, i, arr) => acc + age, 0) / adults.length;


    //third way(mainly  the dry run of first way)
    const average = adults.reduce(function (acc, age, i, arr) {
        console.log(`${i} : ${acc}`);
        return acc + age / arr.length
        // return (acc + age) / arr.length  (isme accumulator 2 baar 5 se divide ho rah hai islie galat answer aayega)
    }, 0);
    return average;
}

// console.log(3 + 6/2)

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


// console.log(2 + 6 / 2);