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



// //PROPERTY NAMES
// const properties = Object.keys(openingHours);//capital o must be there
// // console.log(typeof properties);
// console.log(properties);
// let openStr = `we are open on ${properties.length} days `;

// for (const day of properties) {
//     // console.log(day);
//     openStr += `${day},`;
// }
// console.log(openStr);

// console.log(`-----------------------------------------------------`);
// //PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);


// console.log(`----------------------------------------------------`);


// //ENTRIES OBJECT
// const entries = Object.entries(openingHours);

// console.log(entries);


// console.log(`--------------------------------------------------`);


// for (const x of entries) {
//     console.log(x);
// }


// console.log(`--------------------------------------------------`);

// // [KEY , VALUE]
// for (const [key, { open, close }] of entries) {//value object tha toh usse humne destruct kar diya open and close mey.........i.e pehle array ko destruct kiya then dusre vaale object(jo ki value naam se hai) usko destruct kiya
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }




// //for understanding


// // let x = {
// //     a: 1,
// //     b: 2,
// //     c: 3,
// // }
// // console.log(Object.entries(x));

// // const p = [5, 6, 8, 9, 1];
// // for (let item of p.entries()) {
// //     console.log(item);
// // }