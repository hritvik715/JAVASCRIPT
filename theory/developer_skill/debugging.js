const measurKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degree celcius')),
    };

    console.log(measurement);
    console.table(measurement);

    // console.log(measurement.value);
    // console.log(typeof measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);


    const kelvin = measurement.value + 273;
    return `temperature in kelivin is ${kelvin}`;
}

console.log(measurKelvin());


