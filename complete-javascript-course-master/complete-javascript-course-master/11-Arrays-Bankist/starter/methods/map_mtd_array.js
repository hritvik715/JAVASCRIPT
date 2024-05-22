
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



//visit -> bankist.netlify.app
// (first user- js,1111 and second user - jd,2222)



const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov, i, arr) {//map method will return a new array
    // console.log(mov);
    // console.log(arr);
    return mov * euroToUsd;
});



// //Using arrow method
// const movementsUSD = movements.map(mov => mov * euroToUsd);



console.log(movements);
console.log(movementsUSD);




// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);





// const movementsDescriptions = movements.map((mov, i, arr) =>//in map method we get acces to current element and index also the entire array
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`//abs is absolute value (without any sign)
// )

// console.log(movementsDescriptions);