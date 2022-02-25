const fruitsToGet = ['apple', 'grape', 'pear'];
const fruitBasket = {
  apple: 23,
  grape: 2,
  pear: 10,
};

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getFruitNum = (fruit) => {
  return sleep(2000).then(() => fruitBasket[fruit]);
};

const forLoop = async () => {
  console.log('start');

  for (const el of fruitsToGet) {
    await getFruitNum(el).then((num) => {
      console.log(num);
    });
  }

  console.log('end');
};

forLoop();
