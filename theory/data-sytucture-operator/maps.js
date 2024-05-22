'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};




const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};













//MAPSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

const rest = new Map();
rest.set('name', 'classico , Italiano');
rest.set(1, 'Firenze , Italy');
console.log(rest.set(2, 'Lisbon , Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are closed')

console.log(rest);
// console.log(`-------------------------------------------`);
// console.log(rest.get('name'));
// console.log(rest.get(true));


// console.log(`-----------------------------------------------`);


const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));//T1 && T2 =T2
// console.log(`------------------------------------------------`);

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);





// console.log(`-------------------------------------`);



rest.set([1, 2], 'Test');
// console.log(rest);

console.log(rest.get([1, 2]));//why it is not working ? bcz they are not the same object in heap (upper vaaala array line 129 and niche vaala line 132 )

// // to work without error we have to store array in a variable
const arr = [3, 4];//from this method , both the array refer to the same place in the memory
rest.set(arr, 'Test');
console.log(rest.get(arr));

// console.log(`------------------------------------`);


// rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);









