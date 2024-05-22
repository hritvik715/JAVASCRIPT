`use strict`
const restaurant = {
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu.entries()) {
    // console.log(item);
    // console.log(item[1]);
    // console.log(`${item[0] + 1}: ${item[1]}`);
}





// for (const item of menu) console.log(item);


const betichod = [1, 2, 3, 4, 5, 6];
// console.log(betichod.entries());//array mey aise nhi kar sakte but in object we can do the same i.e. Object.entries()
// for (const x of betichod.entries()) console.log(x);


//NOTE--> (a)In JavaScript, when you use the entries() method on an array, it returns an iterator object where each element is an array containing the index and the value of the original array. So, when you iterate over this iterator using a for...of loop, each item is an array where item[0] represents the index and item[1] represents the value.

// for (const item of menu.entries()) {
//     // console.log(item);
//     console.log(item[1]);
//     // console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
    // console.log(`${i + 1}: ${el}`);
}
// console.log(menu);
// console.log([...menu]);