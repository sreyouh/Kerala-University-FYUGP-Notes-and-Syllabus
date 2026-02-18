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
  if (semester === "1") {
    fileName = "physicss1/s1physics.html";
  } else {
    fileName = `phy${semester}.html`;
  }
  break;


    case "maths":
      if (semester === "1") {
    fileName = "mathss1/s1maths.html";
  } else {
    fileName = `math${semester}.html`;
  }
  break;
      
    case "botany":
  if (semester === "1") {
    fileName = "botanys1/s1botany.html";
  } else {
    fileName = `bot${semester}.html`;
  }
  break;   

     case "zoology":
  if (semester === "1") {
    fileName = "zoologys1/s1zoology.html";
  } else {
    fileName = `zoo${semester}.html`;
  }
  break;

  case "cs":
  if (semester === "1") {
    fileName = "css1/s1cs.html";
  } else {
    fileName = `csc${semester}.html`;
  }
  break;


if (program === "ba") {
    switch (selectedDiscipline) {
      
  case "economics":
  if (semester === "1") {
    fileName = "economics1/s1economics.html";
  } else {
    fileName = 'eco${semester}.html';
  }
  break;

case "political":
  if (semester === "1") {
    fileName = "politicals1/s1political.html";
  }
  break;

case "english":
  if (semester === "1") {
    fileName = "englishs1/s1english.html";
  }
  break;

case "malayalam":
  if (semester === "1") {
    fileName = "malayalams1/s1malayalam.html";
  }
  break;
      

    

    default:
      alert("Invalid selection");
      return;
  }

  window.location.href = fileName;
});
