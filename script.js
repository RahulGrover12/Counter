let number = document.querySelector(".numb");
let plus = document.querySelector(".increment");
let sub = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let input = document.querySelector("input");

plus.addEventListener("click", add);
sub.addEventListener("click", minus);
reset.addEventListener("click", resetN);

function add() {
  let val = parseInt(number.innerText);
  let inputValue = parseInt(input.value);
  let num = val + inputValue;
  number.innerText = num;
}
function minus() {
  let val = parseInt(number.innerText);
  let inputValue = parseInt(input.value);
  let num = val - inputValue;
  if (num < 0) {
    number.innerText = "0";
  } else number.innerText = num;
}
function resetN() {
  number.innerText = "0";
}
