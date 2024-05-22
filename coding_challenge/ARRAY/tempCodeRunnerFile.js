
// for (const x of list) {
//     if (x > 18) y.push(x);
// }
// console.log(y);



let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVEXYZ';

let x = Math.trunc(Math.random() * 26) + 1;//1-26
console.log(x + 1);
console.log(alphabet[x]);
let check = Number(prompt('Enter number'));

if (check === (x + 1)) console.log('correct');
else console.log('incorrect');


