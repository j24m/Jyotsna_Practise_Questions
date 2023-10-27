const input = document.getElementById("input");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const camelcase = document.getElementById("camelcase");
const pascalcase = document.getElementById("pascalcase");
const snakecase = document.getElementById("snakecase");
const kebabcase = document.getElementById("kebabcase");
const trim = document.getElementById("trim");

input.addEventListener("input", onChangeHandler);

const toSnakeCase = (str) => {
  let splittedStrArr = str.split(" ");
  let joinedStr = splittedStrArr.join("_");
  let finalStr = joinedStr.toLowerCase();
  return finalStr;
};

const toKebabCase = (str) => {
  let splittedStrArr = str.split(" ");
  let joinedStr = splittedStrArr.join("-");
  let finalStr = joinedStr.toLowerCase();
  return finalStr;
};
function onChangeHandler() {
  lowercase.textContent = input.value.toLowerCase();
  uppercase.textContent = input.value.toUpperCase();
  camelcase.textContent = input.value;
  pascalcase.textContent = input.value;
  snakecase.textContent = toSnakeCase(input.value);
  kebabcase.textContent = toKebabCase(input.value);
  trim.textContent = input.value.trim();
}
