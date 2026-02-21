console.log("Kerala University FYUGP site loaded successfully");

let selectedDiscipline = "";

/* ================= SAFE PROGRAM DETECTION ================= */
const program = document.body.dataset.program;

/* 🚨 HARD GUARD: stop script on pages without program */
if (!program) {
  console.warn("No program detected. Routing disabled on this page.");
}

/* ================= DISCIPLINE SELECTION ================= */
const disciplineButtons = document.querySelectorAll(".discipline-btn");

disciplineButtons.forEach(button => {
  button.addEventListener("click", () => {
    disciplineButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedDiscipline = button.dataset.discipline;
  });
});

/* ================= SUBMIT HANDLER ================= */
document.getElementById("submitBtn")?.addEventListener("click", () => {
  if (!program) {
    alert("Invalid program configuration");
    return;
  }

  const semester = document.getElementById("semester").value;

  if (!selectedDiscipline || !semester) {
    alert("Please select both discipline and semester");
    return;
  }

  let fileName = "";

  /* ================= BSc ROUTING ================= */
  if (program === "bsc") {
    switch (selectedDiscipline) {

      case "chemistry":
        fileName = semester === "1"
          ? "chemistrys1/s1chem.html"
          : `chem${semester}.html`;
        break;

      case "physics":
        fileName = semester === "1"
          ? "physicss1/s1physics.html"
          : `phy${semester}.html`;
        break;

      case "maths":
  if (semester === "1") {
    fileName = "mathss1/s1maths.html";
  } else if (semester === "2") {
    fileName = "mathss2/s2maths.html";
  } else {
    fileName = `math${semester}.html`;
  }
  break;

      case "botany":
        fileName = semester === "1"
          ? "botanys1/s1botany.html"
          : `bot${semester}.html`;
        break;

      case "zoology":
        fileName = semester === "1"
          ? "zoologys1/s1zoology.html"
          : `zoo${semester}.html`;
        break;

      case "cs":
        fileName = semester === "1"
          ? "css1/s1cs.html"
          : `csc${semester}.html`;
        break;

      default:
        alert("Invalid BSc discipline");
        return;
    }
  }

  /* ================= BA ROUTING ================= */
  if (program === "ba") {
    switch (selectedDiscipline) {

      case "economics":
        fileName = semester === "1"
          ? "economicss1/s1economics.html"
          : `eco${semester}.html`;
        break;

      case "political":
  fileName = semester === "1"
    ? "politicals1/s1political.html"
    : `political${semester}.html`;
  break;

     case "english":
  if (
    semester === "1" ||
    semester === "2" ||
    semester === "3" ||
    semester === "4"
  ) {
    fileName = "english/english.html";
  }
  break;

    case "malayalam":
      // SAME PAGE FOR ALL SEMESTERS
      fileName = "malayalam/malayalam.html";
      break;

      default:
        alert("Invalid BA discipline");
        return;
    }
  }

  console.log("Redirecting to:", fileName);
  window.location.href = fileName;
});



















