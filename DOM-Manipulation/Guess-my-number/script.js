'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const elements = {
  score: document.querySelector('.score'),
  highscore: document.querySelector('.highscore'),
  body: document.querySelector('body'),
  number: document.querySelector('.number'),
  guess: document.querySelector('.guess'),
};

elements.score.textContent = score;
elements.highscore.textContent = highScore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (message) {};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(elements.guess.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number!');

    // when guess is correct
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      elements.highscore.textContent = highScore;
    }

    elements.number.textContent = secretNumber;
    displayMessage('Correct!');
    elements.body.style.backgroundColor = '#60b347';
    elements.number.style.width = '30rem';

    // when guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      elements.score.textContent = score;
    } else {
      score = 0;
      elements.score.textContent = score;
      displayMessage('You have lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  elements.body.style.backgroundColor = '#222';
  elements.number.style.width = '15pem';
  elements.number.textContent = '?';

  displayMessage('Start guessing...');
  elements.score.textContent = score;
  elements.guess.value = '';
});
