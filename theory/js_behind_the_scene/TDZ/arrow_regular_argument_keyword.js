// const jonas = {
//     firstName: 'jonas',
//     year: 1991,

// }


//argument keyword
// const addExpr = function (a, b) {
//     console.log(arguments);//argument keyword only exist in regular fxns
//     return;
// };

// // addExpr(2, 5);
// addExpr(2, 5, 8, 9, 25);
// console.log(addExpr(5, 6, 7));

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 5, 8);//error bcz argument keyword doesnot exist for arrow fxn it only exist for regular fxns


