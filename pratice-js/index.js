const checkarr = (arr) => {
  const filteredArray = arr.filter((item) => {
    return item.string === true;
  });

  return filteredArray;
};

// Example usage
const inputArray = [
  { string: true, otherProperty: "value1" },
  { string: false, otherProperty: "value2" },
  { string: true, otherProperty: "value3" },
];

const result = checkarr(inputArray);
console.log(result);
