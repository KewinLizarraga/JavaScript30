const panel = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panel.forEach((p) => p.addEventListener("click", toggleOpen));
panel.forEach((p) => p.addEventListener("transitionend", toggleActive));
