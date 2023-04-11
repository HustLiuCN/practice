/** 生成 N 个随机数 */
const randomNumbers = (n) => {
  const arr = [];
  for (let i = 0; i < n; i ++) {
    arr.push(Math.floor(Math.random() * n * 10));
  }
  return arr;
}

module.exports = {
  randomNumbers,
}
