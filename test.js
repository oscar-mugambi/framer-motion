console.log('start');

const fruitBasket = {
  apple: 23,
  orange: 2,
  peach: 10,
};

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getFruitNum = (fruit) => {
  return sleep(2000).then(() => fruitBasket[fruit]);
};

getFruitNum('apple').then((num) => {
  console.log(num);
});

console.log('end');
