const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


function bmi(mass, height) {
    let ans = mass / (height * height);
    return ans;
}

let markBmi = bmi(massMark, heightMark);
let johnBmi = bmi(massJohn, heightJohn);
const markHigherBMI = markBmi > johnBmi;

console.log(johnBmi, johnBmi, markHigherBMI);





if (markBmi > johnBmi) {
    console.log(`mark's BMI ${markBmi} is s higher than john's ${johnBmi}`);
}
else if (johnBmi > markBmi) {
    console.log(`john's  ${johnBmi} is higher than mark's BMI ${markBmi}`);
}