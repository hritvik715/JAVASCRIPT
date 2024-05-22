`use strict`

const restaurant =
{
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDeleivery: function ({
        startIndex = 0,
        mainIndex = 0,
        time = '8:30',
        address }) {
        console.log(`order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
    },

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


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);


// const newArray = [1, 2, arr];// iss tarike se vo (arr) array iske andar aa jaayega
const newArray = [1, 2, ...arr];//it will merge  the elements with array
// console.log(newArray);
// 

// //line 10 and 11 are same thing
// console.log(...newArray);
// console.log(1, 2, 7, 8, 9);


const newMenu = [...restaurant.mainMenu, 'banana'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join  two arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);


//iterables : arrays, string , maps , sets but not objects

const str = 'hritvik';
const letters = [...str, ' ', 's.'];
// console.log(letters);

// console.log(...str);
// console.log('h', 'r');
// console.log(`${...str} einstein`);//it wont work bcz template literal is not the place that expects multiple values separated by a comma


//REAL WORLD EXAMPLE
// const ingredient = [prompt('let\'s make pasta! ingredient 1?'), prompt('let\'s make pasta! ingredient 2?'), prompt('let\'s make pasta! ingredient 3?')];
// console.log(ingredient);


// restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
// restaurant.orderPasta(...ingredient);




//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Aristotle' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };//curly braces kay andar daala hai destruct karke
console.log(restaurantCopy);
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);//new name
// console.log(restaurant.name);//old name