const fruitInfo = {
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
  return fruitInfo[fruit];
};

sleep(2000).getNumFruit(() => {
  console.log('here we are');
});

console.log(getNumFruit('apple'));
console.log(getNumFruit('orange'));
console.log(getNumFruit('peach'));

console.log('end');
