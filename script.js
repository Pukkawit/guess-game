'use strict';
/*

const message = document.querySelector('.message').textContent='Correct Number🎉';
console.log(message);
const number = document.querySelector('.number').textContent= 13;
const score = document.querySelector('.score').textContent= 10;
const guess = document.querySelector('.guess').value= 23;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let currentScore = document.querySelector('.score').textContent;
const displayedMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

// TO PLAY AGAIN
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.pre-score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('.score').style.color = '#00259e';
  document.querySelector('body').style.backgroundColor = ' #747475';
  document.querySelector('.number').style.boxShadow = '2px 2px 10px #0000005a';
  document.querySelector('.message').style.fontWeight = 'normal';
  document.querySelector('.message').style.color = 'unset';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayedMessage('Start guessing...');
  document.querySelector('.message').style.fontSize = '1em';
  document.querySelector('.number').style.width = '100px';
  document.querySelector('.number').style.color = 'unset';
  document.querySelector('.number').style.fontFamily =
    "'Courier New', Courier, monospace";
  document.querySelector('.number').style.backgroundColor = '#fff';
  console.log(score);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '⛔Please Enter a Number & click Check!';
    displayedMessage('⛔Please Enter a Number & click Check!');
    document.querySelector('.message').style.color = '#610000';

    // WHEN THE PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number!🎉';
    displayedMessage('Correct Number!🎉');
    document.querySelector('.message').style.color = '#ADF802';
    document.querySelector('.message').style.fontSize = '2rem';
    document.querySelector('.message').style.fontWeight = 'bold';
    document.querySelector('body').style.backgroundColor = '#0099ff';
    // document.querySelector('.number').style.boxShadow = '2px 2px 5px #d302c1';
    document.querySelector('.number').style.width = '30vw';
    document.querySelector('.number').style.color = '#fff';
    document.querySelector('.number').style.fontFamily =
      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    document.querySelector('.number').style.backgroundColor = '#002337';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // WHEN THE GAME IS LOST
  } else if (score < 2) {
    // document.querySelector('.message').textContent = "💩You've lost the game!";
    displayedMessage("💩You've lost the game!");
    document.querySelector('.score').textContent = 0;
  }

  // WHEN GUESS IS DIFFERENT
  else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '⚡Too High' : '🪫Too Low';
    displayedMessage(guess > secretNumber ? '⚡Too High' : '🪫Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score < 5) {
    document.querySelector('.score').style.color = 'red';
  } else if (score < 10) {
    document.querySelector('.score').style.color = 'orange';
  } else if (score < 15) {
    document.querySelector('.score').style.color = 'green';
  }
  // WHEN THE GUESS IS TOO HIGH
  //   } else if (guess > secretNumber) {
  //     document.querySelector('.message').textContent = '⚡Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     //WHEN THE GUESS IS TOO LOW
  //   } else if (guess < secretNumber) {
  //     document.querySelector('.message').textContent = '🪫Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
});
