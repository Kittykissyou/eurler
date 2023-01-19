const myFn = () => {
  let myArr = [];
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (
        i * j ==
        String(i * j)
          .split('')
          .reverse()
          .join('')
      ) {
        myArr.push(i * j);
      }
    }
  }
  return Math.max(...myArr);
};
console.log(myFn());
