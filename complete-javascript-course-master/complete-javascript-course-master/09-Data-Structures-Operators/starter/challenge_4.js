// const input = [prompt('enter first name with underscore'), prompt('enter second name with underscore'), prompt('eneter second name with underscore'), prompt('enter fourth name with underscore')];






// for (const item of input) {
//     // item.remove('_', '');
//     console.log(item);
// }


// const x = ['a', 'b', 'c'];
// console.log(x.length);









document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure



document.querySelector('button').addEventListener('click', function () {
    // const rows = 
    const text = document.querySelector('textarea').value;
    // console.log(text);
    const rows = text.split('\n');//split('\n) -> it will remove the new line character and split jo hai vo sabko ek array mey daal dega
    // console.log(rows);


    // let tick = '✅'//you can not use const here bcz const variable kbhi badalta hi nhi hai toh tick ka addition nhi hoga yha
    // for (const row of rows) {
    //     // console.log(row);
    //     const [first, second] = row.toLowerCase().trim().split('_');
    //     // console.log(row, first, second);
    //     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    //     // console.log(output + `          ${tick}`);
    //     // console.log(output.padEnd(20, ' '));
    //     //if we want empty spaces then we can call without quote with space
    //     console.log(output.padEnd(20) + tick);

    //     tick = tick + '✅';

    // }


    //second way of for loop
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        // console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);



    }
});

