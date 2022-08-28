// if a number is divisble by 3, return fizz
// by 5, return buzz
// by 3 and 5, return fizz buzz

const fizzBuzz = (num1: number): string => {
  if (num1 % 5 === 0 && num1 % 3 === 0) return "fizz buzz";
  if (num1 % 3 === 0) return "fizz";
  if (num1 % 5 === 0) return "buzz";
  return "no fizzes or buzzes";
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
