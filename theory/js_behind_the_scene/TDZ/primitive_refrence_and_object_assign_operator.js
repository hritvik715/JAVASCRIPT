
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// marriedJessica = {};


//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['alice', 'bob'],
};



const jessicaCopy = Object.assign({}, jessica2);//it will create a new object shallow copy not deep copy
jessicaCopy.lastName = 'Davis';
console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);



// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('john');

// console.log('before marriage', jessica2);
// console.log('after marriage', jessicaCopy);



