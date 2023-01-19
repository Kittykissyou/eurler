const myFn = () => {
  const myArr = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      myArr.push(i);
    }
  }
  return myArr.reduce((a, b) => a + b);
};
console.log(myFn());
