
//fxn declaration
const age1 = calAge1(1991);//if we call declaration upper of that function then it will work

function calAge1(year) {
    return 2037 - year;
}


//function expression
const age2 = calAge2(1991);//if we call expression uper of that function then it wont work

const calAge2 = function (year) {
    return 2037 - year;
}
//imp->agar curly braces diya function mey then return karna padega

console.log(age1, age2);


function x(a) {
    return a * a;
}

const y = function (a) {
    return a * a;
}


console.log(y(3));
