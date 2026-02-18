console.log("Kerala University FYUGP site loaded successfully");

let selectedDiscipline = "";
const program = document.body.dataset.program;

const disciplineButtons = document.querySelectorAll(".discipline-btn");

disciplineButtons.forEach(button => {
  button.addEventListener("click", () => {
    disciplineButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedDiscipline = button.dataset.discipline;
  });
});

document.getElementById("submitBtn")?.addEventListener("click", () => {
  const semester = document.getElementById("semester").value;

  if (!selectedDiscipline || !semester) {
    alert("Please select both discipline and semester");
    return;
  }

  let fileName = "";

  /* ================= BSc ================= */
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

  /* ================= BA ================= */
  if (program === "ba") {
    switch (selectedDiscipline) {

      case "economics":
        fileName = semester === "1"
          ? "economicss1/s1economics.html"
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

  window.location.href = fileName;
});
