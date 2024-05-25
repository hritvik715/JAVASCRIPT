const balance2 = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;
}, 0);