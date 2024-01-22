const reverse = (num) => {
  const arr = num.toString().split();
  const newarr = arr.reverse().join();
  return newarr;
};
console.log(reverse(32243));
