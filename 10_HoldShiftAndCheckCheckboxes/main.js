const selectAll = document.querySelector('.inbox input[id="all"]');
const checks = document.querySelectorAll('.inbox input[class="check"]');

function handleCheckAll() {
  checks.forEach((check) => {
    this.checked ? (check.checked = true) : (check.checked = false);
  });
}

function handleCheck(e) {
  checks.forEach((check) => {
    if (!this.checked) {
      selectAll.checked = false;
    }
    console.log(check);
  });
}

selectAll.addEventListener("click", handleCheckAll);
checks.forEach((check) => check.addEventListener("click", handleCheck));
