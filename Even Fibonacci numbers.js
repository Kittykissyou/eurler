const myFn = () => {
  const myArr = [1, 2];
  for (let i = 2; i <= myArr.length; i++) {
    if (myArr[i - 2] + myArr[i - 1] <= 4000000) {
      myArr.push(myArr[i - 2] + myArr[i - 1]);
    }
  }
  return myArr.filter((el) => el % 2 == 0).reduce((a, b) => a + b);
};
console.log(myFn());
