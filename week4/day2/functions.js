console.log(document);
const numbersToCalc = [];
const calculate = () => {};
let answer = "";

const sum = (total) => {
  console.log("this is the sum", total);
};

const getButtonValue = (buttonInnertext) => {
  if (buttonInnertext.id === "addition") {
    console.log("don't make it a parse int");
    let mathSign = buttonInnertext.innerText;
    numbersToCalc.push(mathSign);
  } else {
    const innerTextToInt = parseInt(buttonInnertext.innerText);

    numbersToCalc.push(innerTextToInt);
    console.log(numbersToCalc);
  }
};
const input = document.getElementById("textbox");
const doMaff = () => {
  const firstVal = numbersToCalc[0];
  const mathSign = numbersToCalc[1];
  const secondVal = numbersToCalc[2];

  if (mathSign === "+") {
    answer = firstVal + secondVal;
    input.value = answer;
    const bigAnswer = document.createElement("h1");
    bigAnswer.innerText = "🤠";
    container.append(bigAnswer);
  }
};

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const calc = document.getElementById("calculate");
const addition = document.getElementById("addition");
const container = document.getElementById("container");

calc.onclick = doMaff;
button1.onclick = (e) => getButtonValue(e.target);
button2.onclick = (e) => getButtonValue(e.target);
addition.onclick = (e) => getButtonValue(e.target);