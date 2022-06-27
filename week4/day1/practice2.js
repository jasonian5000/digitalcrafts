const totalPlusTip = (total, tipPercent) => {
  mealTotal = total + total * (tipPercent / 100);
  return mealTotal.toFixed(2);
};

// console.log(totalPlusTip(100, 20))

const totalPlusTip2 = (total) => {
  let mealTotal = 0;

  if (total >= 100) {
    mealTotal = total + total * 0.3;
  }
  if (total <= 99 && total >= 50) {
    mealTotal = total + total * 0.25;
  }
  if (total < 50) {
    mealTotal = total + total * 0.2;
  }

  return mealTotal.toFixed(2);
};

// console.log(totalPlusTip2(100.1));
// console.log(totalPlusTip2(75));
// console.log(totalPlusTip2(40));

const reservationList = [];
const vipData = [
  { number: 5, timeslot: "7:30pm" },
  { number: 3, timeslot: "5:30pm" },
  { number: 1, timeslot: "3:30pm" },
  { number: 5, timeslot: "7:30pm" },
];
const makeReservation = (status, time) => {
  // if(status => 4){
  let reservationGuest = {
    vipStatus: status,
    timeslot: time,
  };
  reservationList.push(reservationGuest);
};
for (let index = 0; index < vipData.length; index++) {
  makeReservation(vipData[index].number, vipData[index].timeslot);
}
reservationList.sort((a, b) => b.vipStatus - a.vipStatus);
// console.log(reservationList);

//Afternoon practice problems

function lvl5exercise1() {
  // Push the string "hello" into the array and return the array
  var arr = [1, "adam"];
  arr.push("hello");
  return arr;
}
console.log(lvl5exercise1());

function lvl5exercise2() {
  // Remove the last element from the array and return the array
  var arr = [1, "adam"];
  arr.pop();
  return arr;
}
console.log(lvl5exercise2());

function lvl5exercise3() {
  // Return the length of the array
  var arr = [1, "adam"];
  return arr.length;
}
console.log(lvl5exercise3());

function lvl5exercise4() {
  // Return the index of item "adam" in the array
  var arr = [1, "adam"];
  return arr.indexOf("adam");
}
console.log(lvl5exercise4());

function lvl6exercise1(num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  switch(num){
    case 1:
      return "hello";
    case 2:
      return "world";
    default:
      return "bye"  
  }
}
console.log(lvl6exercise1(1));
console.log(lvl6exercise1(2));
console.log(lvl6exercise1(3));

function lvl6exercise2() {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push("hello");
  }
  return arr.length;
}
console.log(lvl6exercise2());

function lvl6exercise3() {
  // Empty this array using a while loop and return it
  var arr = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];
  while (arr.length > 0) {
    arr.pop();
  }
  return arr;
}
console.log(lvl6exercise3());

// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

function finalFunction(num) {
  const arr = [];
  if (num > 0 && Number.isInteger(num)) {
    for (let index = 0; index < num; index++) {
      arr.push("hello");
    }
  }
  return arr;
}
console.log(finalFunction(5));
