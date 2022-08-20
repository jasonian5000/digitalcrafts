let string = "abaxyzzyxf";

const checkPal = (string) => {
  let array = Array.from(string);
  // first loop will set the size of window
  for (let window = array.length - 1; window > 0; window--) {
    // second loop will move window and check for palindrome
    for (let index = 0; index + window < array.length; index++) {
      let subArray = array.slice(index, index + window);
      if (subArray.toString() === subArray.reverse().toString()) {
        return subArray.join("");
      }
    }
  }
  return "no palindromes";
};

console.log(checkPal(string));
