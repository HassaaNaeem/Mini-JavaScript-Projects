const panels = document.querySelectorAll(".panel");
const activePanel = document.querySelector(".active");

panels.forEach(function (panel) {
  panel.addEventListener("click", (e) => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
