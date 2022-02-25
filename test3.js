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

const forMap = async () => {
  console.log('beginning of operation');
  const promises = await fruitsToGet.map(async (fruit) => {
    return await getFruitNum(fruit);
  });

  const number = await Promise.all(promises);
  console.log(number);
  console.log('end of operation');
};

forMap();
