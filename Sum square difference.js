const myFn = () => {
  const myArr = [];
  for (let i = 1; i <= 100; i++) {
    myArr.push(i);
  }
  return (
    Math.pow(
      myArr.reduce((a, b) => a + b),
      2
    ) - myArr.reduce((a, b) => a + Math.pow(b, 2))
  );
};
console.log(myFn());
