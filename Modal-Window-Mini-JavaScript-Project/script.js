"use strict";

let btns = document.getElementsByClassName("show-modal");
console.log(btns);

let closeBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

if (modal.classList.contains("hidden")) {
  overlay.addEventListener("click", closeModal);
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Backspace") {
      closeModal();
    }
  });
}
