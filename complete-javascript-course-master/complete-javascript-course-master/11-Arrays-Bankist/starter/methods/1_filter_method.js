`use strict`

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//imp->filter method return an array 
//TO GET POSITIVE NUMBER FROM THE ARRAY
const deposits = movements.filter(function (mov, i, arr) {
    // console.log(arr);
    return mov > 0;
})

console.log(deposits);










const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);




//TO GET NEGATIVE NUMBER FROM THE ARRAY

const withdrawals = movements.filter(wid => wid < 0);

// console.log(withdrawals);


