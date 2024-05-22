'use strict'

// console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

// calcAge(1991);


const calcAgeArrow = birthYear => {
    // console.log(2037 - birthYear);
    console.log(this);
};
// calcAgeArrow(1980);





const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
// jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;//copying one object to the other (not calling)
// matilda.calcAge();


const f = jonas.calcAge;
f();

// const g = jonas.calcAge.call(jonas);
// g();