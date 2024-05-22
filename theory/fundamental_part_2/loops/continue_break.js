const Array = [
    'sophia',
    'melody',
    2003 - 2001,
    'student',
    ['heli', 'bella', 'daisy'],
    true
];


console.log('----ONLY STRINGS----')

for (let i = 0; i < Array.length; i++) {


    if (typeof (Array[i]) !== 'string') continue;



    console.log(Array[i], typeof (Array[i]));



}

console.log('---BREAK WITH NUMBER---');

for (let i = 0; i < Array.length; i++) {


    if (typeof (Array[i]) === 'number') break;



    console.log(Array[i], typeof (Array[i]));

}


