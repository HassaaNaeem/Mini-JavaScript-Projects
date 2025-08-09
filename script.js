"use strict";

let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    let randomNum = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (randomNum === 1) {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

// btnHold.addEventListener("click", function () {
//   scores[activePlayer] += currentScore;
//   if (activePlayer === 0) {
//     if (Number(score0El.textContent) >= 20) {
//       btnRoll.classList.add("hidden");
//     } else {
//       // score0El.textContent = Number(score0El.textContent) + currentScore;
//       activePlayer = 1;
//       currentScore = 0;
//       player0El.classList.toggle("player--active");
//       player1El.classList.toggle("player--active");
//     }
//   } else {
//     if (Number(score1El.textContent) >= 20) {
//       btnRoll.classList.add("hidden");
//     } else {
//       score1El.textContent = Number(score1El.textContent) + currentScore;
//       activePlayer = 0;
//       currentScore = 0;
//       player0El.classList.toggle("player--active");
//       player1El.classList.toggle("player--active");
//     }
//   }
// });

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer = 0;
});
