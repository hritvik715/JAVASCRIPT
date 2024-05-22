
// let rep = 1 ; 

//  while (rep <= 10){
//     console.log(`lifting weights repetition ${rep}`);
//     rep++;
//  }




let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


while (dice !== 6) {
   console.log(`you rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;//this keep creating new dice value
   if (dice === 6) console.log('loop is about to end');
}


