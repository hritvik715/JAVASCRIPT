const avg = (s_1 , s_2 ,s_3)=> (s_1 + s_2 + s_3)/3;


const check = function checkWinner( avgDolhins ,avgKoalas){
    const winner = avgDolhins > avgKoalas*2 ? 'Dolhins win' : 'Koalas wins';
    console.log(` ${winner} (${avgDolhins} vs ${avgKoalas})`);
 }

 let  avg1 = avg(44 , 23 , 71);
 
 let avg2 = avg(65 , 54 , 49);
 console.log(avg1 ,avg2);
 check(avg1 , avg2); 





 avg1 = avg(85 , 54 , 41);
 avg2 = avg(23 , 34 ,27);
 console.log(avg1 , avg2);
 check(avg1 , avg2);