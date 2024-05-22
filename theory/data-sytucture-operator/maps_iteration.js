`use strict`
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'C'],
    [2, 'java'],
    [3, 'javascript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again'],
]);


// console.log(question);


//CONVERT OBJECT TO MAP
// console.log((Object.entries(openingHours)));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);




//Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer '));
// console.log(answer);


// const check = question.get(question.get('correct') === answer);
// console.log(check);




//imp->  CONVERT MAP TO ARRAY
// console.log([...question]);//it will give array of array
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);