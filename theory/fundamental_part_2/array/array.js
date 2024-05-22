//two ways of arrays representation


const friends = ['habib', 'golu', 'mohan'];


const years = new Array(2001, 9663, 2005);


console.log(friends[2]);
console.log(friends[1]);


console.log(friends.length);

console.log(friends.length - 1);

friends[2] = 'tannu';
console.log(friends);

// friends = ['bob' , 'alice'];//we cant change the whole array
// console.log(friends);




const firstName = 'hritivk';
const hritvik = [firstName, 'pandit', 2001 - 2005, 'teacher', friends];
console.log(hritvik);
console.log(hritvik[hritvik.length - 1]);













const calAge = function (birthYear) {
    return 2037 - birthYear;
}
const y = [1991, 1986, 2003];

const age1 = calAge(y[0]);
const age2 = calAge(y[y.length - 1]);
console.log(age1, age2);




const ages = [calAge(y[0]), calAge(y[1]), calAge(y[y.length - 1])];//we can keep function calls inside the Array
console.log(ages);


