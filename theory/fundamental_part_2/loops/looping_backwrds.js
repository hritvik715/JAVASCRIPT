const array = [
    'handy',
    'sophia',
    2006 - 2003,
    'student',
    ['kolu', 'molu', 'tolu'],

];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(i, array[i]);
}


for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`-----starting excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise} : lifting weight repetition ${rep}`);
    }
}