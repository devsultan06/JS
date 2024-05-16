const panels = document.querySelectorAll(".image");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassName();
    panel.classList.add("active");
  });
});

function removeClassName() {
  panels.forEach((panel,index) => {
    panel.classList.remove("active");
  });
}
