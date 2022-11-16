import MyPromise from "./promise.js";
// func returns a 3 digit random number
const getNumber = () => Math.floor(Math.random() * 999) + 1;
const promise = new MyPromise((resolve, reject) => {
  const randomNum = getNumber();
  if (randomNum % 5 === 0) {
    console.log(`promise resolved >>> ${randomNum} is divisible by 5`);
    resolve(randomNum);
  } else {
    console.log(`promise rejected >>> ${randomNum} is Not divisible by 5`);
    reject(randomNum);
  }
});

promise.then((val) => val).catch((error) => console.log(error));
