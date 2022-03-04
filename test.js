const fruitBasket = {
  apple: 23,
  orange: 21,
  peach: 23,
};

console.log('start');

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getNumFruit = (fruit) => {
  return sleep(2000).then(() => fruitBasket[fruit]);
};

getNumFruit('apple').then((num) => {
  console.log(num);
});

// console.log(getNumFruit('apple'));
// console.log(getNumFruit('orange'));
// console.log(getNumFruit('peach'));

console.log('end');
