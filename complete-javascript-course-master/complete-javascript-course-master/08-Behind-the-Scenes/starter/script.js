'use strict';

function clacAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        const output = `${firstName} , you are ${age} , born in ${birthYear}`;
        console.log(output);


        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `oh ,and you are a millenial , ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);//it will not work bcz const and let are blocked scope 
        console.log(millenial);
        const x = add(2, 3);//in strict mode it wont work bcz fxn are blocked scope in strict mode
        console.log(x)
    }

    printAge();

    // console.log(firstName);//firstName is global scope so it will be accessable here too
    return age;
}

const firstName = 'herry';//global variable
clacAge(1991);
// console.log(age);//can not acces outside the scope

// printAge();//it will not work bcz of scope