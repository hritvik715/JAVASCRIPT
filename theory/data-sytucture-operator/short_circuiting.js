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







// console.log('------------------OR------------------');

//use ANY data type ,  return ANY data type , they do short-circuiting
// console.log(3 || 'jonas');//js will see the truthy value only
// console.log('' || 'jonas');//first one is falsy value so second operator will also be evaluated
// console.log(true || 0);
// console.log(undefined || null);//both are falsy values

// console.log(undefined || 0 || '' || 'hello' || 23 || null);//hello is the first truthy value in this chain of OR operator


// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;//teranry operator
// console.log(guests1);


// const guest2 = restaurant.numGuests || 50;//here (restaurnt.numguest) is a falsy value (if you comment out restaurant.numguests so it does not exist) and 2nd is truthy value
// console.log(guest2);






// console.log('-----------------AND----------------');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');
// console.log('hello' && 23 && null && 'jonas');


//Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom ', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanish');





