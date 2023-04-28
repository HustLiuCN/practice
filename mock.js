/** 生成 N 个随机数 */
const randomNumbers = (n) => {
  const arr = [];
  for (let i = 0; i < n; i ++) {
    arr.push(Math.floor(Math.random() * n * 10));
  }
  return arr;
}

/** 二叉树 */
const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
      },
      right: {
        val: 5,
      },
    },
    right: {
      val: 6,
    }
  },
  right: {
    val: 7,
    left: {
      val: 8,
    },
    right: {
      val: 9,
    }
  },
}

module.exports = {
  randomNumbers,
  binaryTree,
}
