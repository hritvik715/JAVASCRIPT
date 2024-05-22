
//FUNCTION EXPRESSIOn
// const calAge2 = function (year) {
//     return 2023 - year;
// }


//ARROPW FUNCTION

const calAge3 = year => 2023 - year;
const age3 = calAge3(2003);
console.log(age3);


// const yearsUntillRetirement = year => {
//     const age = 2023 - year;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntillRetirement(1991));

//if you have multiple parameters then you have to wrap the parameter inside anonymous function

const yearsUntillRetirement = (year, name) => {
    const age = 2023 - year;
    const retirement = 65 - age;
    // return retirement;
    return `${name} retires in ${retirement}`;
}


console.log(yearsUntillRetirement(2003, 'hritvik'))
console.log(yearsUntillRetirement(1990, 'golu'));