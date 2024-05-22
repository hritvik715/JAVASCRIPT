'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,//enhanced object literals
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);

// createBooking('LH123', undefined, 1000);
















const flight = 'LH234';
const hritvik = {
    name: 'hritvik mohan',
    passport: 256348956127,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 256348956127) {
        // alert('Check in');
        console.log(`check in`);
    }
    else {
        // alert('wrong passport');
        console.log(`wrong passport`);
    }
}

// checkIn(flight, hritvik);
// console.log(flight);
// console.log(hritvik);







const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(hritvik);
checkIn(flight, hritvik);