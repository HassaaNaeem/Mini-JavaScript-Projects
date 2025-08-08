const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive >= circles.length) {
    currentActive = circles.length;
    next.disabled = true;
  }
  update();
  prev.disabled = false;
});
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive <= 1) {
    currentActive = 1;
    prev.disabled = true;
  }
  update();
  next.disabled = false;
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
