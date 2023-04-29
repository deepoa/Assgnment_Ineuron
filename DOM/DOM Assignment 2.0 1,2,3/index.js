const link = document.querySelector("li:last-child");
console.log(link);
const newItem = document.createElement("li");
newItem.innerHTML = '<a href="*">Projects</a>';
link.parentNode.replaceChild(newItem, link);

const hireMe = document.createElement("li");
hireMe.innerHTML = "Hire Me";
let list = document.querySelector("header nav ul");
list.appendChild(hireMe);

const remove = document.querySelector("footer ul");
remove.style.visibility = "hidden";

const visible = document.querySelector("footer ul");
visible.style.visibility = "visible";

document.querySelector("input").placeholder = "Search My Projects";

const text = document.querySelectorAll(".hero-left-section p span");
text[1].innerText = "Employee";
text[2].innerText = "Google";

let img = document.querySelector("img");
img.src = "./deep-removebg-preview.jpg";

const a = document.createElement("button");
a.innerHTML = "Support me";
const b = document.querySelector(".hero-right-section-btns ");
b.appendChild(a);
