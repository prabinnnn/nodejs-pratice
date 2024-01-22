const number = (num) => {
  const arr = num.toString();
  const newarr = Math.floor(num);

  if (arr === newarr.toString()) {
    console.log("it is integer");
  } else {
    console.log("error");
  }
};

number(2);
