

function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        // console.log(`${array[i]}  °c in ${i + 1} days`);
        str = str + `${arr[i]}°c in ${i + 1} days.......`;
    }
    console.log(`...` + str);
}


printForecast([17, 21, 23]);
// printForecast([17, 21, 23]);