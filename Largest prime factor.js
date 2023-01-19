const myFn = () => {
  let a = 600851475143;
  const myArr = [];
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
      a = a / i;
      myArr.push(i);
    }
  }
  return Math.max(...myArr);
};
console.log(myFn());
