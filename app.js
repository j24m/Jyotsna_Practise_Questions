const btnDecrement = document.getElementById("btn-decrement");
const btnIncrement = document.getElementById("btn-increment");
const outputDiv = document.getElementById("output");
const input = document.getElementById("input");
const btnReset = document.getElementById("btn-reset");

btnIncrement.addEventListener("click", incrementNum);
let counter = 0;
function incrementNum() {
  console.log("clicked");
  counter += Number(input.value);
  console.log("counter", counter);
  outputDiv.textContent = counter;
}

btnDecrement.addEventListener("click", decrementNum);
function decrementNum() {
  console.log("clicked");
  counter -= Number(input.value);
  outputDiv.textContent = counter;
}

btnReset.addEventListener("click", resetCounter);
function resetCounter() {
  counter = 0;
  outputDiv.textContent = 0;
  input.value = 1;
}
