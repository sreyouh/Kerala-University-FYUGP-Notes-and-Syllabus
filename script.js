// Reserved for future enhancements
// Example: animations, analytics, dynamic syllabus loading
console.log("Kerala University FYUGP site loaded successfully");
let selectedDiscipline = "";

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

  switch (selectedDiscipline) {
    case "chemistry":
  if (semester === "1") {
    fileName = "chemistrys1/s1chem.html";
  } else {
    fileName = `chem${semester}.html`;
  }
  break;

    case "physics":
      fileName = `phy${semester}.html`;
      break;

    case "maths":
      if (semester === "1") {
    fileName = "mathss1/s1maths.html";
  } else {
    fileName = `math${semester}.html`;
  }
  break;
      
    case "botany":
      fileName = `bot${semester}.html`;
      break;

    case "zoology":
      fileName = `zoo${semester}.html`;
      break;

    case "cs":
      fileName = `csc${semester}.html`;
      break;

    default:
      alert("Invalid selection");
      return;
  }

  window.location.href = fileName;
});
