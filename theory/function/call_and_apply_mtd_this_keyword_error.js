`use strict`
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
// lufthansa.book(239, 'hritvik mohan');
// console.log(lufthansa);



const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

lufthansa.book(23, 'Hritvik mohan');//it will work fine


const book = lufthansa.book;


// book(23, ' Hritvik mohan');//does not work


//THREE METHOD FOR FUNCTIONS -> CALL , APPLY , BIND

//CALL METHOD
// book.call(eurowings, 23, 'hritvik mohan');// a functions is just an object and object has methods therefore a function can have methods too

// console.log(eurowings);


// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);



const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: []
}

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);


//APPLY METHOD  -> it is same as call method but here we need an array also
const flightData = [583, 'Hritvik mohan'];
// book.apply(swiss, flightData);
// console.log(swiss);

//we can also use call method even argument is an array by destructing them
// book.call(swiss, ...flightData);

