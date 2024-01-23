const sortingarr = (string) => {
  const newarr = string.split("").sort();
  return newarr.join("");
};
console.log(sortingarr("webmaster"));
