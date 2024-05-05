'use strict';
/*

const message = document.querySelector('.message').textContent='Correct Number🎉';
console.log(message);
const number = document.querySelector('.number').textContent= 13;
const score = document.querySelector('.score').textContent= 10;
const guess = document.querySelector('.guess').value= 23;

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let currentScore = document.querySelector('.score').textContent;

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.pre-score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    score = 20;
    document.querySelector('body').style.backgroundColor = ' #747475';
    document.querySelector('.number').style.boxShadow = '2px 2px 5px #000000';
    console.log(score);
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // WHEN THERE IS NO INPUT
    if (!guess) {
        document.querySelector('.message').textContent = '⛔Please Enter a Number & click Check!'
        // WHEN THE PLAYER WINS
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor = 'blue';
        document.querySelector('.number').style.boxShadow = '2px 2px 5px #d302c1';
        // WHEN THE GAME IS LOST
    } else if (score < 2) {
        document.querySelector('.message').textContent = '💩You\'ve lost the game!';
        document.querySelector('.score').textContent = 0;
        // WHEN THE GUESS IS TOO HIGH
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '⚡Too High';
        score--
        document.querySelector('.score').textContent = score;
        //WHEN THE GUESS IS TOO LOW
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '🪫Too Low';
        score--
        document.querySelector('.score').textContent = score;
    }
})
console.log(currentScore);
