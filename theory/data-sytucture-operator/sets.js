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

const orderSet = new Set([
    'pasta',
    'pizza',
    'Risotto',
    'pasta',
    'pizza'
]);
// console.log(orderSet);
// console.log(new Set('hritvik'));
// console.log(orderSet.size);


// has method is similar to includes method in array
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);
// orderSet.clear();//all the elements will be deleted
// console.log(orderSet);


// for (const order of orderSet) {
//     console.log(order);
// }


//EXAMPLE
const staff = ['waiter', 'chef', 'waiter', 'mainager', 'chef', 'waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
// console.log(`--------------------------------------------`);
// const staffUniquesss = [...new Set(staff)];
// console.log(staffUniquesss);


// console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);


// console.log(new Set('hritvikmohanpandit').size);//NOTE -> it give number of different letter not the total number of letter



























