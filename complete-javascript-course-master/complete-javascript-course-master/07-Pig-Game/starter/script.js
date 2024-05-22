'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;



const init = function () {
    //starting condition



    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;//player 1 =0 and player2 =1 in our code
    playing = true;

    document.querySelector('#score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    diceEl.classList.add('hidden');//dice imgae add hogi isse

    document.querySelector(`.player--0`).classList.remove('player--winner');//it remove the black color from the winner after pressing NEW GAME
    document.querySelector(`.player--1`).classList.remove('player--winner');



    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    // document.querySelector('.dice').classList.add('hidden');//to hide the image initially after pressing NEW GAME
}


init();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;//player changed here 
    player0El.classList.toggle('player--active');// it changes the color according to the player turn
    player1El.classList.toggle('player--active');//it changes the color  according to the player turn
}


//rolling dice functionality
btnRoll.addEventListener('click', function () {

    if (playing) {
        // we cant keep currentscore inside this bcz jabb bhi ham click krenege then crrentscorehar baar zero ho jaayega

        //1. generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;


        //2. display a dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./dice-${dice}.png`;

        //3. check for rolled 1: if true 
        if (dice !== 1) {
            //add dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // switch to next player
            switchPlayer();

        }

    }

});

btnHold.addEventListener('click', function () {
    if (playing) {// and when playing is false then none of this code is executed
        //1. add current score to the active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1]  + currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];



        //2. check if player's score is >=100
        if (scores[activePlayer] >= 20) {
            //finish the game
            playing = false;
            diceEl.classList.add('hidden');//add hone kay baad display none ho jaayegi
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');//isse winner vaala region black ho jaayega
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }

        else {
            //switch to  the next player
            switchPlayer();

        }




    }
});



document.querySelector('.btn--new').addEventListener('click', init);

