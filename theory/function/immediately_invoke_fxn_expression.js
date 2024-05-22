// a fxn that dissapear right after called once



const runOnce = function () {
    console.log(`This will never run again`);
}
runOnce();


//IIFE
// (function () {
//     console.log(`This will never run again`);
//     const isPrivaet = 23;
// })();






(() => console.log(`This will never run again`))();





{
    const isPrivaet = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
// console.log(notPrivate);