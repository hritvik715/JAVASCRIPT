const Array = [
    'sophia',
    'melody',
    2003 - 2001,
    'student',
    ['heli', 'bella', 'daisy'],
    true
];
const types = [];

for (let i = 0; i < Array.length; i++) {

    //reading from array
    // console.log(Array[i] , typeof(Array[i]));


    //first way to insert elements 
    // types[i] = typeof (Array[i]);
    // same as type[0] = 'string'
    //    type[1] = 23


    //second way to insert elements
    // types[i] = types.push(typeof (Array[i]));//it will give number in output bcz push returns the length of the array ...on each iteration  it will return the length of updated array
    //  so do this instead :-
    // types.push(typeof (Array[i]));
}

// console.log(types);












const years = [1991, 2007, 2003];


const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);




