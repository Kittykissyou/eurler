const myFn = () => {
  const myArr = [];

  let a = 2;
  for (let i = 2; i <= 1000; i++) {
    a = a * 2;
  }
  for (let j = 0; j < String(BigInt(a)).length; j++) {
    myArr.push(Number(String(BigInt(a))[j]));
  }
  return myArr.reduce((a, b) => a + b);
};
console.log(myFn());
