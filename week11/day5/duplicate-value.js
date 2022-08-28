let array = [2, 1, 5, 2, 3, 3, 4];

const findDuplicate = (array) => {
  // use a Set object
  let checkSet = new Set();
  // loop through array to check against set and add new values
  for (let index = 0; index < array.length; index++) {
    if (checkSet.has(array[index])) {
      return array[index];
    } else {
      checkSet.add(array[index]);
    }
  }
  return -1;
};

console.log(findDuplicate(array))
