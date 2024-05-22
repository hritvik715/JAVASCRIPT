'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent;
// document.querySelector('.score').textContent = 10;




// console.log(document.querySelector('.guess').value);//input vaale elements mey value se karte hai instead of text content
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);











let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
    // const andaaja = document.querySelector('.guess').value;
    // console.log(andaaja);
    // console.log(typeof andaaja);

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = `No Number ⛔`;
        displayMessage('No Number ⛔')

    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'correct number';
        displayMessage('correct number');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector(".number").style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 0) {//1>0 = true => toh 1 pe click hoga
            // document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : 'too low';
            displayMessage(guess > secretNumber ? 'too high' : 'too low')
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            // document.querySelector('.message').textContent = `you lost the game`;
            displayMessage(`you lost the game`);
            document.querySelector('.score').textContent = 0;
        }

    }

    // else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     }
    //     else {
    //         document.querySelector('.message').textContent = `you lost the game`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }

    // else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;

    //     }
    //     else {
    //         document.querySelector('.message').textContent = `you lost the game`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
});




document.querySelector(`.again`).addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = 'start guessing...';
    displayMessage('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = '';//empty value inside the box ((note-> value of input is alwz a string))
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';


    // document.querySelector('.label-highscore').textContent = 

})