const age = 23;
// age >=18 ? console.log('i like to drink wine') : console.log(' i like to drink water');



const drink = age >= 18 ? 'wine🍷' : 'water💧';//it is a expression not a statement bcz it return a value
console.log(drink);


let drink2;
if (age >= 18) {
    drink2 = 'i like to drink wine';
}
else {
    drink2 = 'i like to drink water';
}
console.log(drink2);

console.log(`i like to drink ${drink}`);
console.log(`i like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);