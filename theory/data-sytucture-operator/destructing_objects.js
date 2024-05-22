`use strict`;
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
        startIndex = 0,//here we can give default values
        mainIndex = 0,
        time = '8:30',
        address }) {
        console.log(`order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
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

// restaurant.orderDeleivery({ time: '10:30', address: 'NMIT college', mainIndex: 2, startIndex: 2, });


//ye highlighted mera experiment hai
const x = restaurant.orderDeleivery;
// x(restaurant, { time: '10:30', address: 'NMIT college', mainIndex: 2, startIndex: 2, });
// x.call(restaurant, { time: '10:30', address: 'NMIT college', mainIndex: 2, startIndex: 2, });

// restaurant.orderDeleivery({ address: 'Yehalanka', startIndex: 1, });


//in destructing objects order does not matter and we use curly brackets here 
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//we can also change variable names  
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);


//default values
const { menu = [], starterMenu: starter = [] } = restaurant;//starterMenu ka naam starter de diya and usko ek default value pakda diya
// console.log(menu, starter);



//mutating variables
let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 74
};
({ a, b } = obj);//for mutating variable we use simple brackets in whole syntax ( see it dont have any let ,const and var)
console.log(a, b);



//nested objects
const { fri } = openingHours;
console.log(fri);


const { fri: { open, close } } = openingHours;
console.log(open, close);

const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);