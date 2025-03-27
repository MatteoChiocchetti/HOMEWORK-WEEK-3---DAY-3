const form = document.querySelector("form");
const inputField = document.getElementById("input-field");
// console.log(inputFields);
const container = document.getElementById("container");
const tasks = document.getElementById("tasks");

const handleClick = function (e) {
  e.currentTarget.classList.toggle("completed");
};

form.onsubmit = function (e) {
  e.preventDefault();
};
const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  //   console.log("TARGET", e.target);
  const lists = document.createElement("li");
  lists.innerText = inputField.value;
  inputField.value = "";
  tasks.appendChild(lists);
});
