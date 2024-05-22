`use stict`

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const arr = [200, 300, 500, 700, 600];



console.log(movements);

//EQUALITY
console.log(movements.includes(-130));


//SOME : CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);//any value that satisfy the following condition then some method will return true
console.log(anyDeposits);





//EVERY -> it only returns true when all the elements satisfy the given condition
console.log(movements.every(mov => mov > 0));
console.log(arr.every(mov => mov > 0));



//Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
