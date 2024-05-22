// const bills = [22, 295, 176 ,440 , 37, 105 , 10 , 1100 , 86 , 52];
// const tip =[];
// const total =[];


// const calcTip = bill_value => bill_value >= 50 && bill_value<=300 ? 0.15*bill_value : 0.2*bill_value;



// for(let i = 0 ; i<bills.length ; i++){
//     tip.push(calcTip(bills[i]));
//     total.push(tip[i] + bills[i]);
// }

// console.log(tip);
// console.log(total)



//BONUS
function calcAverage(arr){
    let sum = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    console.log(avg);
}

let arr= [1,2,3,4,5];
calcAverage(arr);