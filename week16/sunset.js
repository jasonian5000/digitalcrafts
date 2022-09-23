height = [2, 3, 4, 5];

const sunset = (height) => {
  let count = 0;
  for (let index = height.length; index > 0; index--) {
    index = height.indexOf(Math.max(...height.slice(index, height.length)));
    console.log(index)
    count += 1;
  }
  return count;
};

const oceanView = (height) => {
  let count = 0;
  for (let index = 0; index < height.length; index++) {
    index = height.indexOf(Math.max(...height.slice(index, height.length)));
    count += 1;
  }
  return count;
};

// console.log("ocean views: ", oceanView(height));
console.log("sunsets: ", sunset(height));

