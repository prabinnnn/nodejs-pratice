const number = (display) => {
  return display;
};

const randomnum = (num, callback) => {
  const newnum = num.Math.floor(Math.random() * 16 + 1);
  return callback(newnum);
};

const newrandomnum = () => {
  randomnum(number, (result) => {
    document.getElementById("generatedNumber").value = result;
  });
};
