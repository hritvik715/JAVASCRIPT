//type conversion
const inputYear = '2001';
console.log(Number(inputYear), inputYear);

console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('hritvik'));//it wont work , i.e it wont convert
console.log(typeof NaN);

console.log(String(23));
console.log(String(23), 23);


//type coercion
console.log(' i am ' + 19 + ' years old ');
console.log(' i am ' + '19' + ' years old')
console.log('23' + 2);
console.log('23' - 2);
console.log(23 + "2");
console.log(23 + +"3");




console.log("23" == 23);
console.log("23" === 23);

