const myFn = () => {
  const sumArr = [];
  const myArr = [];
  let arr = [];
  for (let i = 2; i <= 10000; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        arr.push(j);
      }
    }
    myArr.push([i, arr.reduce((a, b) => a + b)]);
    arr = [];
  }
  for (let g = 0; g < myArr.length; g++) {
    for (let h = 1; h < myArr.length; h++) {
      if (
        myArr[g][0] == myArr[h][1] &&
        myArr[g][1] == myArr[h][0] &&
        myArr[g] !== myArr[h]
      ) {
        sumArr.push(myArr[g][0]);
      }
    }
  }
  return sumArr.reduce((a, b) => a + b);
};

console.log(myFn());
