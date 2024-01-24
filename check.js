const display = (solution) => {
  return solution;
};

const num1 = ["icecream", "ice", "cake", "pine"];
const num2 = ["icecream", "chocolate", "cake", "hero"];

const checktwo = (num1, num2, display) => {
  const newarr = num2.filter((value) => num1.includes(value));
  return display(newarr);
};

const newchecktwo = () => {
  const result = checktwo(num1, num2, display);
  console.log(result);
};

newchecktwo();
