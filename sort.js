const { randomNumbers } = require('./mock');

/** 冒泡 */
const bubble = (arr) => {
  console.time('冒泡');
  let count = 0;
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - 1 - i; j ++) {
      count ++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.timeEnd('冒泡');
  console.log(count);
}

/** 选择 */


const numbers = randomNumbers(1000);
// const numbers = [1,2,3,4,5,6,7,8,9]
bubble(numbers.slice());
