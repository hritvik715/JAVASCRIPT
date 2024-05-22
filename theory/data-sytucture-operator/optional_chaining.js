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


    openingHours,


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


// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// instead of if statement we can also do with optional chaining
// console.log(restaurant.openingHours.mon.open);
//WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);//only if (restaurant.openingHours.mon) exist then only (.open) will be read
// console.log(restaurant.openingHours?.mon?.open);

//EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//     // console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);

// }


//METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//ARRAYS
const user = [
    // { name: 'jonas', email: 'hello@gmail.com' }
];
console.log(user[0]?.name) ?? 'users array empty';//question mark se pehle agar true hai then aage proceed hoga else aage proceed nhi hoga
// OR
if (user.length > 0) console.log(user[0].name);
else console.log('user array empty'); 