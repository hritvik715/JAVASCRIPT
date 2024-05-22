const airline = 'Tap Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));//first occurence of r
// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('Portugel'));

// console.log(airline.slice(4));//from index 4 to till end
// console.log(airline.slice(4, 9));



// console.log(`----------------------------`);

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));//from the end se start hoga
// console.log(airline.slice(1, -1));


// console.log(`---------------------------`);



const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('you got the middle seat');
    }
    else {
        console.log('you got lucky');
    }
}
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Tyagiji'));
// console.log(typeof new String('tyagiji'));
// console.log(typeof new String('tyagiji').slice(1));//slice hone kay baad typeof apna kam krega

// console.log(`-----------------------------------------------`);

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('hritvik'.toUpperCase());

// const passenger = 'hRiTviK';//Hritvik
// const passenegerLower = passenger.toLowerCase();
// const passengerCorrect = passenegerLower[0].toUpperCase() + passenegerLower.slice(1);
// console.log(passengerCorrect);


// console.log(`----------------------------------`);


// //compairing email
const email = 'hello@hritvik.io';
const loginEmail = ' Hello@hritvik.Io  \n';
const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();//it remove the white space
// console.log(trimEmail);


const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// console.log(`---------------------------------------`);



// //replacing
const priceFlight = '288,97$';
const priceUS = priceFlight.replace('$', '@').replace(',', '.');//replace create a brand new string it does not mutate the original one
// console.log(priceUS);


const announcement = 'All passenegers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));



// console.log(announcement.replace(/door/g, 'gate'));//in place of line number 92 you can also use line numebr 95 (g stand for global)





// //Booleans
const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Aib'));


// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//     console.log('Part of the new Airbus family');
// }


// console.log(`--------------------------------------`);


// //practice excercise
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board');
//     }
//     else {
//         console.log('Welcome aboard');
//     }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');







// console.log(`--------------------split-------------------`);

// //SPLIT AND JOIN
// console.log('a+very+nice+string'.split('+'));
// console.log('hritvik mohan'.split(' '));


// const [firstName, lastName] = 'Tyagi ji'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join('---');
// console.log(newName);


// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpper = [];
//     for (const n of names) {
//         //1st way to conver first word of letter in upper case
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//         //2nd way to conver first word of letter in upper case
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join('~'));

// };

// capitalizeName('hritvik mohan pandit');


// console.log(`----------------------`);

// //PADDING A STRING
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('hritvik'.padStart(20, '+').padEnd(30, '+'));



// //APPLICATION OF A STRING
// const maskCreditCard = function (number) {
//     //1st way to conver that number into a string
//     // const str = String(number);
//     //2nd way to convert that numberf into a string(by type coercion of +)
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');

// };

// console.log(maskCreditCard(54646134684613));
// maskCreditCard('313164984132132165468484');//it will also work if  input is already a string




// //REAPEAT METHOD
// const message2 = 'Bad weateher.... All Departires Delayed....';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };


// planesInLine(5);
// planesInLine(3);
// planesInLine(12);



// console.log(['hritvik', 'mohan'].join('6'));



// console.log('hritvik'.repeat(5));



