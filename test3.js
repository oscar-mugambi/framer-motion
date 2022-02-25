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

  const promises = await fruitsToGet.map(async (fruit) => {
    return await getFruitNum(fruit);
  });
  const numFruits = await Promise.all(promises);
  console.log(numFruits);
  console.log('end');
};

forLoop();
