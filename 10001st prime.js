const myFn = () => {
  let myArrTwo = [];
  const myArr = [];

  for (let i = 2; myArr.length <= 10000; i++) {
    for (let j = 1; j <= i; j++) {
      if (Number.isInteger(i / j) && myArrTwo.length <= 1) {
        if (myArrTwo[0] !== undefined && (i / j) % myArrTwo[0] !== 1) {
          break;
        } else {
          myArrTwo.push(i / j);
        }
      } else {
        continue;
      }

      if (myArrTwo.length == 2) {
        myArr.push(i);
      }
    }
    myArrTwo = [];
  }
  return myArr[10000];
};
console.log(myFn());
