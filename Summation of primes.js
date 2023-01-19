const myFn = () => {
  let myArrTwo = [];
  const myArr = [];

  for (let i = 2; i < 200000; i++) {
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
  return myArr.reduce((a, b) => a + b);
};
console.log(myFn());

/*const myFn = () => {
  let myArrTwo = [];
  const myArr = [];

  for (let i = 2; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      if (Number.isInteger(i / j) && myArrTwo.length <= 1) {
        myArrTwo.push(i / j);
      }
      console.log(myArrTwo);
      if (myArrTwo[1] == 1) {
        myArr.push(i);
      }
    }
    myArrTwo = [];
  }
  return myArr;
};
*/
