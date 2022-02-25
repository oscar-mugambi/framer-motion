const fruitsToGet = ['apple', 'grape', 'pear'];

const forLoop = async () => {
  console.log('start');

  for (const key in fruitsToGet) {
    console.log(key);
  }
};

forLoop();
