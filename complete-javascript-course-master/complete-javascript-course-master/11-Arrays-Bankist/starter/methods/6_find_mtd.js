`use strict`

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//NOTE - > 1.differnce in find and filter method is filter returns  all the elements that match the conditon and find return the first element which match the condition 
// 2. filter returns an array and find method return an only element
//3.  find method will return undefined if no element matches the condition

console.log(movements);

const filter = movements.filter(mov => mov > 0);
console.log(filter);


const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);


