`use strict`
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};








//CHALLENEGE -1

// //1. 
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];//dono players ka ek new array bna diya
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);

// //5.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);


// //6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davis', 'Muller', 'Lewandowski', 'kimmich');
// // printGoals('Davies', 'Muller');

// printGoals(...game.scored);


// // 7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 1 is more likely to win`);




//CHALLENEG-2
//1.
// let piliyer = game.scored;
// console.log(piliyer);
// for (const item of piliyer.entries()) {//entries jo hia vo key , value pair dega individual array mey
//   console.log(`${item[0]} , ${item[1]}`);
//   console.log(`Goal ${item[0] + 1} : ${item[1]}`);
// }

// //------------OR------------
// console.log(`---------------OR----------------`);

// for (const [i, player] of piliyer.entries()) {//entries jo hai vo key , value pair dega individual array mey
//   console.log(`Goal ${i + 1} : ${player}`);
// }



//2.
// const { odds: { team1, x, team2 } } = game;
// console.log(`average is ${(team1 + x + team2) / 3}`);

//------------OR------------------

// const odds = Object.values(game.odds)
// let sum = 0;
// for (const item of odds) {
//   console.log(item);
//   sum += item;
// }
// console.log(sum / odds.length);


// ------------------OR---------------

// const a = game.odds;
// const k = Object.entries(a);
// // console.log(k);
// let avg = 0;
// for (const [team, score] of k) {
//   // console.log(team);
//   // console.log(score);
//   avg += score;
//   // console.log(``)
// }

// avg /=odds.length;
// console.log(avg );



// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them 
//   (except for "draw").Hint: Note how the odds and the game objects have the 
// same property names �

// for (const [team, odd] of Object.entries(game.odds)) {
//   // console.log(team, odd);
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);

// }



















// Let's continue with our football betting app! This time, we have a map called 
// 'gameEvents' (see below) with a log of the events that happened during the 
// game. The values are the events themselves, and the keys are the minutes in which 
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no 
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on 
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking 
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL



const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],//UNFAIR
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);


//1
const arrayOfEvents = [...gameEvents.values()];
// console.log(arrayOfEvents);
//but to get unique values we need sets

const events = [...new Set(gameEvents.values())];//spread karke array may daal diya
// console.log(events);



//2.
// console.log(gameEvents.get(64));

gameEvents.delete(64);
// console.log(gameEvents.get(64));



//3.


const time = [...gameEvents.keys()].pop();
console.log(time);


// console.log(`An event happend, on average, every ${time / gameEvents.size} minutes`);



//4.



for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}