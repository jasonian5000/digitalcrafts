// print in python
// console.log("hello world");

// how to define variables in js
//  let, var, const
let object = {
  name: "Joe",
  height: "5:8",
  age: "42",
  weight: "55kg",
};
// console.table(object);

const formerTas = ["rayleight", "jason", "west", "stacy"];
// console.table(formerTas);

// for loops
// var will exist outside of the block
// let will only exist in the block
// use let to prevent conflict of scope
for (var index = 0; index < formerTas.length; index++) {
  // const element = array[index];
  // console.log("first for loop", index);
}
// console.log(index);

for (let letIndex = 0; index < formerTas.length; letIndex++) {
  // const element = array[letIndex];
  // console.log(letIndex);
}
// console.log(letIndex);

// functions - remember D.R.Y.
// Don't Repeat Yourself

// using the keyword function, is how we can defire a function (the old way)
function functionName(argument = 0) {
  //function body
  return ++argument;
}
console.log(functionName());

// ES6 way of writing a function
//fat arrow function, arrow function, or ES6 function
const functionName2 = (argument = 0) => {
  return ++argument;
};
console.log(functionName());

console.log(typeof "string");

//a function by reference
//palindrome;
//a function by invocation
//plaindrome()

