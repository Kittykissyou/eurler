const myFn = () => {
  let myArr = [];
  for (let i = 1; myArr.length <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
      if (i % j == 0) {
        myArr.push(true);
      } else {
        break;
      }
    }

    if (myArr.length < 20) {
      myArr = [];
    } else {
      return i;
    }
  }
};
console.log(myFn());
