// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean({}));//empty object/
// console.log(Boolean(NaN));
// console.log(Boolean(null));

//imp->in js we have five falsy values 

const money = 0;//0 is a falsy value
if (money) {//here js try to convert any value into a boolean if it is not a boolean
    console.log("don't spend it all;");
}
else {
    console.log('you should get a job');
}

const paisa = 100;//100 is a truthy value
if (paisa) {
    console.log("don't spend it all;");
}
else {
    console.log('you should get a job');
}



let height;//height is undefined and as u know UNDEFINED is a falsy value/
if (height) {
    console.log("yay height is defined");
}
else {
    console.log("height is UNDEFINED")
}


