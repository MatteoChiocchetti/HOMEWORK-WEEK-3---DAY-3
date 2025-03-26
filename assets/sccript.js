const inputField = document.getElementById("input-field");
// console.log(inputFields);
const cantainer = document.getElementById("container");
const form = document.querySelector("form");
form.onsumbmit = function (e) {
  e.preventDefault();
};
const btn = document.getElementById("button");
btn.addEventListener("click", function () {
  //   console.log("TARGET", e.target);
  const lists = document.createElement("p");
  lists.innerText = inputField.value;
  cantainer.appendChild(lists);
});
