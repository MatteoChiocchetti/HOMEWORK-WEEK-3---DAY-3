const form = document.querySelector("form");
const inputField = document.getElementById("input-field");
// console.log(inputFields);
const container = document.getElementById("container");
const tasks = document.getElementById("tasks");

form.onsumbmit = function (e) {
  e.preventDefault();
};
const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  //   console.log("TARGET", e.target);
  const lists = document.createElement("li");
  lists.innerText = inputField.value;
  tasks.appendChild(lists);
});
