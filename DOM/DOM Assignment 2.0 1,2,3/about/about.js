let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    console.log(para);
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// const projects = document.querySelector("nav ul");
// projects.lastElementChild.innerHTML = "Projects";

const heading = document.querySelectorAll("h3");

for (let i = 0; i < heading.length; i++) {
  heading[i].style.backgroundColor = "#dadaf8";
}

// const newPara = document.querySelector("accordian-wrapper");

const element = document.querySelector(".accordian-wrapper");
const newdiv = document.createElement("div");
newdiv.classList.add("accordian");
element.appendChild(newdiv);

const a = document.createElement("h3");
a.innerText = "Skills";
a.style.backgroundColor = "#dadaf8";
newdiv.appendChild(a);

const p = document.createElement("p");
p.innerHTML =
  "Worked in an agile environment with weekly stand-ups, kept track of userStories/bugs in JIRA and  participated in sprint planning and sprint retrospective. Pair programmed with developers to meet the requirements, reviewed code to provide additional perspective or solutions";
newdiv.appendChild(p);

let lastaccordian = document.querySelectorAll(".accordian:last-child h3");

lastaccordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
