// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greeterHey = greet(`Hey`);
// greeterHey('hritvik');
// greeterHey('mohan');

// greet('Hello')('Golu');  












//challenge

const greet = greeting => name => console.log(`${greeting} ${name}`);//one arrow fxn returning another arrow fxn (NOT ADVISABLE TO USE THIS KIND OF FUNCTION)

greet('hi')('hritvik');