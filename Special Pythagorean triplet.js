const myFn = () => {
  for (let c = 3; c < 1000; c++) {
    for (let b = 2; b < c; b++) {
      for (let a = 1; a < b; a++) {
        if (
          Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2) &&
          a + b + c == 1000
        ) {
          return a * b * c;
        }
      }
    }
  }
};
console.log(myFn());
