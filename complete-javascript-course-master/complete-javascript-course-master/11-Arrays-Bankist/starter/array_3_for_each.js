const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {//in for of loop first value is index and second  value is value
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    }
    else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);//imp->math.abs will take the absolute value i.e. it remove the sign
    }
}


//diffrencee in these two loops is we can not use continue and break statement in (for each) loop


console.log(`--------------------`);

movements.forEach(function (movement, i, arr) {//in for each first value is current value and second value is index
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`)
    }
    else {
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
    }
});
//0:function(200);
//1: function(450);
//2: function(400) and so on


let x = [5, 8, 6, 7, 1, 2];
x.forEach(function (value, key) {
    console.log(`${key} : ${value}`);
})

for (const a of x.entries()) {
    console.log(a);
}





