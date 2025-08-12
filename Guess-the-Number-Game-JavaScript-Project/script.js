"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Hello World"; // changes the text content by selecting the class
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13; // changes the text content by selecting the class
document.querySelector(".score").textContent = 10; // changes the text content by selecting the class

document.querySelector(".guess").value = 12; // changes input value
document.querySelector(".guess").value; // gets input value
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(typeof guess); // was string then converted to num

  // When there is no guess
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number";
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number";
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When guess is not equals to secretnumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too High" : "Too Low";
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You Loss";
      displayMessage("You Lose");
      document.querySelector(".score").textContent = 0;
    } // Above We have refactor the entire code below
  }
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Loss";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Loss";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessiing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
});
