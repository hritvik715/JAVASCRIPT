//ARRAY
const jonasArray = [
    'jonas',
    'hritvik',
    2003 - 2001,
    ['golu', 'molu', 'tolu']
];

//OBJECTS
const jonas = {
    firstName: 'hritvik',
    lastName: 'mohan',
    age: 2024 - 2003,
    job: ' student',
    friends: ['golu', 'molu', 'tolu']
};//each of keys is  also called property so this object has five properties






console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);






// console.log(jonas.'last' + nameKey)// you cant do this with dot operator





// const interestedIn = prompt('what do you want to  know about jonas ? choose between firstName , lastName , age ,job , friends ');//prompt give back a string

// console.log(jonas.interestedIn);//it will not work bcz prompt returns a string
// console.log(jonas[interestedIn]);//it will work




// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }
// else {
//     console.log('wrong request what do you want to  know about jonas ? choose between firstName , lastName , age ,job , friends ')
// }



jonas.location = 'Delhi';
jonas['twitter'] = '@hritvik715';//line 59 and line 58 we can insert anything in both way
console.log(jonas);



//challenege
//code for this output ->hritvik has 3 friend and his best friend is called golu
console.log(`${jonas['firstName']} has ${jonas['friends'].length} friend and his best friend is called ${jonas['friends'][0]}`);

//OR

console.log(`${jonas.firstName} has ${jonas.friends.length} friend and his best friend is called ${jonas.friends[0]}`);







//imp->filling properties in object
const x = {

};
x.a = "hey";
x.b = "hi";
console.log(x);



