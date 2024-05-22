// let dolphin_avg = (96 + 108 + 89)/3;
// let koalas_avg = (88+91+110)/3;

// if(dolphin_avg> koalas_avg){
//     console.log("dolphins wins");
// }
// else if(koalas_avg>dolphin_avg){
//     console.log("koala wins");
// }
// else if(dolphin_avg === koalas_avg){
//     console.log("both wins");
// }





//BONUS 1

// let dolphin_avg = (97+112+101)/3;
// let koalas_avg = (109+95+123)/3;

// if(dolphin_avg> koalas_avg && dolphin_avg >=100){
//     console.log("dolphins wins");
// }
// else if(koalas_avg>dolphin_avg && koalas_avg >= 100){
//     console.log("koala wins");
// }
// else if(dolphin_avg === koalas_avg  ){
//     console.log("both wins");
// }

//BONUS 2

let dolphin_avg = (97+112+101)/3;
let koalas_avg = (109+95+106)/3;
console.log(dolphin_avg , koalas_avg);

if(dolphin_avg> koalas_avg && dolphin_avg >=100){
    console.log("dolphins wins");
}
else if(koalas_avg>dolphin_avg && koalas_avg >= 100){
    console.log("koala wins");
}
else if(dolphin_avg === koalas_avg && dolphin_avg>=100 && koalas_avg>=100 ){
    console.log("both wins");
}
else{
    console.log("no one wins");
}