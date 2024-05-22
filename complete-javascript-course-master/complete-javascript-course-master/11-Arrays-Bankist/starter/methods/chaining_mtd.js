`use strict`


const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov < 0)
    // .map(mov => mov * euroToUsd)
    .map((mov, i, arr) => {
        console.log(i);
        console.log(arr);
        return mov * euroToUsd;
    })
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);




