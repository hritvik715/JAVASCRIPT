let piliyer = game.scored;
console.log(piliyer);
for (const item of piliyer.entries()) {//entries jo hia vo key , value pair dega individual array mey
  // console.log(`${item[0]} , ${item[1]}`);
  console.log(`Goal ${item[0] + 1} : ${item[1]}`);
}
