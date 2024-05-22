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
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
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



//1. Destructing


//in array remaining objects will collect in array


// SPREAD , BCZ RIGHT SIDE OF EQUAL SIGN
const arr = [1, 2, ...[3, 4]];
//REST , bcz on left side of equal sign

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const [pizza, , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu,];

// console.log(pizza, risotto, otherfood);



//objects --> here remaining elements will be collect into objects 
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// console.log(x, weekdays);



//2. Rest parameter on Functions
const add = function (...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

// add(2, 3);//uss function mey ghus kay array mey convert ho jaayega
// add(5, 3, 7, 2);

const x = [23, 5, 7];
// console.log(...x);
// add(...x);



// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mushrooms');










