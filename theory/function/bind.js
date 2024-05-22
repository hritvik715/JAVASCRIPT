`use strict`

//just like call method bind also allows us to manually set this keyword for any function call

//difference is bind does not immediately call the function instead it returns a new fxn where the this keyword is bound


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () { }
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push(
            {
                flight: `${this.iataCode}${flightNum}`,
                name
            }
        )
    }
}




const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: []
}

const book = lufthansa.book;


// book.bind(eurowings, 23, 'Hritvik mohan');// direct it wont work bcz bind does not immediately call the function instead it returns a new fxn where the this keyword is bound

const bookEW = book.bind(eurowings);

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);



// bookEW(23, 'Hritvik mohan');


const bookEW23 = book.bind(eurowings, 23);
// bookEW23('golu pandit');
// bookEW23('mohan pandit');



// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push(
//             {
//                 flight: `${this.iataCode}${flightNum}`,
//                 name
//             }
//         )
//     }
// }





//with Evenet listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);//lufthansa aa jaayega
    this.planes++;
    console.log(this.planes);
};

lufthansa.buyPlane();



// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);//here (this) will point to eventListener  
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));//now here (this) will point to lufthansa due to bind function




//Pratial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));



const addVAT = addTax.bind(null, 0.23);//here we used null bcz we dont need to point something for (this) keyword
// console.log(addVAT(100));
// console.log(addVAT(23));





const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(23));






