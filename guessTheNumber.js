const input = document.getElementById("input");
const btnSubmit = document.getElementById("btn-submit");
const btnStartGame = document.getElementById("btn-start-game");
const output = document.getElementById("output");
const guessDisplay = document.getElementById("guess-display");
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let guessArray = [];

btnStartGame.disabled = "true";
output.style.display = "none";
guessDisplay.style.display = "none";
btnSubmit.addEventListener("click", guessedResultHandler);

function guessedResultHandler() {
  if (guessArray.length === 0) {
    guessDisplay.textContent = `Your Guesses : `;
  }
  const userInput = input.value;
  guessArray.push(userInput);
  console.log(guessArray);
  guessDisplay.style.display = "block";
  guessDisplay.textContent += ` ${userInput}`;
  console.log(userInput);
  if (userInput < randomNumber) {
    output.style.display = "block";
    output.textContent = `Value is low !`;
    output.style.color = "maroon";
    input.value = "";
  } else if (userInput > randomNumber) {
    output.style.display = "block";
    output.textContent = `Value is high !`;
    output.style.color = "maroon";
    input.value = "";
  } else {
    output.style.display = "block";
    output.textContent = "Congrats! You guessed it right.";
    output.style.color = "green";
    input.value = "";
  }
  if (guessArray.length === 3) {
    output.textContent = `You lost! the number was ${randomNumber}`;
    btnSubmit.disabled = true;
    btnStartGame.disabled = false;
    input.disabled = true;
  }
}

btnStartGame.addEventListener("click", startGameHandler);
function startGameHandler() {
  btnSubmit.disabled = false;
  btnStartGame.disabled = true;
  input.disabled = false;
  output.style.display = "none";
  guessDisplay.style.display = "none";
  guessArray = [];
  guessDisplay.textContent = "";
}
