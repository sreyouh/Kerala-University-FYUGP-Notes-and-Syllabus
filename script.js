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

