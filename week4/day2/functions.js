const numbersToCalc = [];
const calculate = () => {};

const sum = (total) => {
  console.log("this is the sum", total);
};

const getButtonValue = (buttonInnerText) => {
  const innerTextToInt = parseInt(buttonInnerText);
  numbersToCalc.push(innerTextToInt);
  console.log(numbersToCalc);
};

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const addition = document.getElementById("addition");
const calc = document.getElementById("calculate");
const input = document.getElementById("textbox");

input.value = answer
calc.onclick = calculate;
addition.onclick = sum;
button1.onclick = (e) => getButtonValue(e.target);
button2.onclick = (e) => getButtonValue(e.target);
addition.onclick = (e) => getButtonValue(e.target);
