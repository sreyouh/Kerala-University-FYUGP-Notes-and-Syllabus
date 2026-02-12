// Prevent scroll lag on mobile
document.addEventListener("touchmove", function () {}, { passive: true });
let selectedDiscipline = null;
let selectedSemester = null;

function selectDiscipline(btn, value) {
  document.querySelectorAll('#disciplineGroup button')
    .forEach(b => b.classList.remove('active'));

  btn.classList.add('active');
  selectedDiscipline = value;
}

function selectSemester(btn, value) {
  document.querySelectorAll('#semesterGroup button')
    .forEach(b => b.classList.remove('active'));

  btn.classList.add('active');
  selectedSemester = value;
}

function submitSelection() {
  if (!selectedDiscipline || !selectedSemester) {
    alert("Please select both discipline and semester.");
    return;
  }

  window.location.href =
    `results.html?course=bsc&discipline=${selectedDiscipline}&sem=${selectedSemester}`;
}
