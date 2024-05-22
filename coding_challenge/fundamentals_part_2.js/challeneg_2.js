//NORMAL FXN
// function calcTip(bill_value){
//     const tip = bill_value >= 50 && bill_value<=300 ? 0.15*bill_value : 0.2*bill_value;

//     // console.log(`tip is ${tip}`);
//     // return `tip is ${tip}`;
//     return tip;
// }


//ARRAY FUNCTION
const calcTip = bill_value => bill_value >= 50 && bill_value<=300 ? 0.15*bill_value : 0.2*bill_value;


// calcTip(500);
// console.log(calcTip(500));


const billArray = [125 , 555 , 44];

const tipArray = [ calcTip(billArray[0]) , calcTip(billArray[1]) , calcTip(billArray[billArray.length -1 ]) ];

console.log(tipArray);

const total = [billArray[0]+ tipArray[0] ,   billArray[1]+ tipArray[1] ,billArray[2]+ tipArray[2] ];
console.log(total); 
