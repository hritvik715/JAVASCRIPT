`use strict`

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant =
{
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // order: function (startIndex, mainIndex) {
    //     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    // },
    // orderDeleivery: function ({
    //     startIndex = 0,
    //     mainIndex = 0,
    //     time = '8:30',
    //     address }) {
    //     console.log(`order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    // },
    // orderPasta: function (ing1, ing2, ing3) {
    //     console.log(`here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
    // },
    // orderPizza: function (mainIngredient, ...otherIngredients) {
    //     console.log(mainIngredient);
    //     console.log(otherIngredients);
    // },




    // openingHours: openingHours,
    //ES6 enhanced object literals and also we can get rid of function expression
    openingHours, //instead of line 44 it will also work 


    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderDeleivery({
        startIndex = 0,
        mainIndex = 0,
        time = '8:30',
        address }) {
        console.log(`order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

};

