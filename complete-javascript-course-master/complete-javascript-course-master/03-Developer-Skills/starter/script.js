// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];



const calcTempAmplitude = function (temp) {
    let max = temp[0];
    let min = temp[0];
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;//jabb error vaala element aayega then loop uss iteration se exit ho jaayega next iteration me chla jaayega
        if (temp[i] > max) max = temp[i];
        if (temp[i] < min) min = temp[i];

    }
    console.log(max, min);
    return `amplitude is ${max - min}`;
};



const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);



//problem 2(if two array is there)
//fxn should now receive two array of temperatures

const calcTempAmplitudeNew = function (t1, t2) {




    // const array1 = ['a', 'b', 'c'];
    // const array2 = ['d', 'e', 'f'];
    // const array3 = array1.concat(array2);


    const temps = t1.concat(t2);
    console.log(`concatenated array is -> ${temps}`);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;//jabb error vaala element aayega then loop uss iteration se exit ho jaayega
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];

    }
    console.log(max, min);
    return `amplitude is ${max - min}`;
};



const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
