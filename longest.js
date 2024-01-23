const result = (solution) => {
  return solution;
};

const longeststr = (string, callback) => {
  const arr = string.split(" ");
  let long = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > long.length) {
      long = arr[i];
    }
  }
  return callback(long);
};

const newlongstr = () => {
  console.log(longeststr("web development tutorial", result));
};

newlongstr();
