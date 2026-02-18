console.log("Kerala University FYUGP site loaded successfully");

let selectedDiscipline = "";
const program = document.body.dataset.program; // "bsc" or "ba"

if (!program) {
  console.error("data-program attribute missing on <body>");
}

const disciplineButtons = document.querySelectorAll(".discipline-btn");
const submitBtn = document.getElementById("submitBtn");
const semesterSelect = document.getElementById("semester");

/* ================= DISCIPLINE SELECTION ================= */

disciplineButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    disciplineButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    selectedDiscipline = button.dataset.discipline;
    console.log("Selected discipline:", selectedDiscipline);
  });
});

/* ================= SUBMIT HANDLER ================= */

submitBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  const semester = semesterSelect?.value;

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
        fileName = semester === "1"
          ? "mathss1/s1maths.html"
          : `math${semester}.html`;
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
  else if (program === "ba") {
    switch (selectedDiscipline) {

      case "economics":
        fileName = semester === "1"
          ? "economics1/s1economics.html"
          : `eco${semester}.html`;
        break;

      case "political":
        fileName = "politicals1/s1political.html";
        break;

      case "english":
        fileName = "englishs1/s1english.html";
        break;

      case "malayalam":
        fileName = "malayalams1/s1malayalam.html";
        break;

      default:
        alert("Invalid BA discipline");
        return;
    }
  }

  else {
    alert("Invalid program configuration");
    return;
  }

  /* ================= FINAL SAFETY CHECK ================= */

  if (!fileName) {
    alert("Routing error. File not resolved.");
    console.error("Routing failed:", { program, selectedDiscipline, semester });
    return;
  }

  console.log("Redirecting to:", fileName);
  window.location.href = fileName;
});      
