const display = (solution) => {
  return solution;
};

const vowelcount = (string, callback) => {
  let vowelRegex = /[aeiouAEIOU]/g;
  let arr = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(vowelRegex)) {
      arr++;
    }
  }
  return callback(arr);
};

const newvowelcount = () => {
  console.log(vowelcount("The quick brown fox", display));
};

newvowelcount();
