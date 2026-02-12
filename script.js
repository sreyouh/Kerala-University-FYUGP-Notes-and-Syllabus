// Reserved for future enhancements
// Example: animations, analytics, dynamic syllabus loading
console.log("Kerala University FYUGP site loaded successfully");
let selectedDiscipline = "";

const disciplineButtons = document.querySelectorAll(".discipline-btn");

disciplineButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    disciplineButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    selectedDiscipline = btn.dataset.discipline;
  });
});

document.getElementById("submitBtn")?.addEventListener("click", () => {
  const semester = document.getElementById("semester").value;

  if (!selectedDiscipline || !semester) {
    alert("Please select both discipline and semester");
    return;
  }

  // Example: chemistry + sem2 → chemsem2.html
  let pageName = "";

  if (selectedDiscipline === "chemistry") {
    pageName = `chem${semester}.html`;
  }

  // (You will later extend this logic for other disciplines)

  window.location.href = pageName;
});
