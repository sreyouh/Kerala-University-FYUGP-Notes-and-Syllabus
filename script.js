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
  if (semester === "1") {
    fileName = "chemistrys1/s1chem.html";
  } else if (semester === "2") {
    fileName = "chemistrys2/s2chem.html";
  } else if (semester === "3") {
    fileName = "chemistrys3/s3chem.html";
  } else {
    alert(" Available soon");
    return;
  }
  break;


      case "physics":
  if (semester === "1") {
    fileName = "physicss1/s1physics.html";
  } else if (semester === "2") {
    fileName = "physicss2/s2physics.html";
  } else if (semester === "3") {
    fileName = "physicss3/s3physics.html";
  } else {
    alert("Physics not available for this semester yet");
    return;
  }
  break;


        

      case "maths":
  if (semester === "1") {
    fileName = "mathss1/s1maths.html";
  } else if (semester === "2") {
    fileName = "mathss2/s2maths.html";
  } else if (semester === "3") {
    fileName = "mathss3/s3maths.html";
  } else {
    alert("Mathematics content for this semester is not available now.");
    return;
  }
  break;
        

      case "botany":
  if (semester === "1") {
    fileName = "botanys1/s1botany.html";
  } else if (semester === "2") {
    fileName = "botanys2/s2botany.html";
  } else if (semester === "3") {
    fileName = "botanys3/s3bot.html";
  } else {
    fileName = `bot${semester}.html`;
  }
  break;



        

      case "zoology":
  if (semester === "1") {
    fileName = "zoologys1/s1zoology.html";
  } else if (semester === "2") {
    fileName = "zoologys2/s2zoology.html";
  } else if (semester === "3") {
    fileName = "zoologys3/s3zoology.html";
  }
  break;

        

      case "cs":
  if (semester === "1") {
    fileName = "css1/s1cs.html";
  } else if (semester === "2") {
    fileName = "css2/s2cs.html";
  } else {
    fileName = `cs${semester}.html`;
  }
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
  if (semester === "1") {
    fileName = "economicss1/s1economics.html";
  } else if (semester === "2") {
    fileName = "economicss2/s2economics.html";
  } else {
    alert("Invalid semester selection");
    return;
  }
  break;

     case "political":
  if (semester === "1") {
    fileName = "politicals1/s1political.html";
  } else if (semester === "2") {
    fileName = "politicals2/s2political.html";
  } else {
    fileName = "politicals1/s1political.html"; // fallback safety
  }
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



















