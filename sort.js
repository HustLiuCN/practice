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
}

/** 插入 */
const insert = (arr) => {
  console.time('插入');
  for (let i = 1; i < arr.length; i ++) {
    const compare = arr[i];
    let j = i - 1;
    // arr[i] 左侧的元素都是已经排好序的
    while (j >= 0 && arr[j] > compare) {
      // 已排序的元素大于当前要插入元素, 则已排序的元素后移
      arr[j + 1] = arr[j];
      j --;
    }
    // 所有的后移完成后, 即 arr[j] < compare, 则把 compare 插入到 arr[j] 之后
    arr[j + 1] = compare;
  }
  console.timeEnd('插入');
}

/** 快排 */
const quick = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2);
  const midValue = arr.splice(midIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < midValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick(left).concat([midValue], quick(right));
}

const numbers = randomNumbers(1000);
// const numbers = [1,2,3,4,5,6,7,8,9]
bubble(numbers.slice());
insert(numbers.slice());

console.time('快排');
quick(numbers.slice());
console.timeEnd('快排');
