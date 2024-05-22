const calAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`);
    }
    else {
        return -1;
        console.log(`${firstName} has already retired `);
    }

}


console.log(yearsUntillRetirement(1991, "hritvik"));