const link = document.querySelector("li:last-child");
const newItem = document.createElement("li");
newItem.innerHTML = '<a href="*">Projects</a>';
link.parentNode.replaceChild(newItem, link);

const hireMe = document.createElement("li");
hireMe.innerHTML = "Hire Me";
let list = document.querySelector("header nav ul");
list.appendChild(hireMe);

const remove = document.querySelector("footer ul").remove();

document.querySelector("input").placeholder = "Search My Projects";
