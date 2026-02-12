let selectedDiscipline = null;
let selectedSemester = null;

/* discipline buttons */
document.querySelectorAll(".discipline-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".discipline-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    selectedDiscipline = btn.dataset.discipline;
  });
});

/* semester buttons */
document.querySelectorAll(".semester-btn").forEach(btn => {
  if (btn.classList.contains("disabled")) return;

  btn.addEventListener("click", () => {
    document.querySelectorAll(".semester-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    selectedSemester = btn.dataset.semester;
  });
});

/* submit */
document.getElementById("submitBtn").addEventListener("click", () => {
  if (!selectedDiscipline || !selectedSemester) {
    alert("Please select both discipline and semester");
    return;
  }

  const url = `${selectedDiscipline}-sem${selectedSemester}.html`;
  window.location.href = url;
});
/* ================================
   BSc Selection Logic
   ================================ */

let selectedDiscipline = null;
let selectedSemester = null;

function selectDiscipline(button, discipline) {
  selectedDiscipline = discipline;

  document
    .querySelectorAll("#disciplineGroup button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
}

function selectSemester(button, semester) {
  if (button.classList.contains("disabled")) return;

  selectedSemester = semester;

  document
    .querySelectorAll("#semesterGroup button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");
}

function submitSelection() {
  if (!selectedDiscipline || !selectedSemester) {
    alert("Please select both discipline and semester");
    return;
  }

  const url = `${selectedDiscipline}-sem${selectedSemester}.html`;
  window.location.href = url;
}
