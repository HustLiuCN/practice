const { binaryTree } = require('./mock');

/** 右视图遍历 */
const scan = (root) => {
  // 深度优先
  const listDeepFirst = [];
  const dig = (r, depth = 0) => {
    if (!r) {
      return;
    }
    const { val, left, right } = r;

    listDeepFirst[depth] = val;

    if (left) {
      dig(left, depth + 1);
    }

    if (right) {
      dig(right, depth + 1);
    }
  }
  dig(root);
  console.log(listDeepFirst);

  // 广度优先
  const listWideFirst = [];
  const queue = [];
  queue.push(root);
  let cur = 1;
  let next = 0;

  while (queue.length) {
    const head = queue.splice(0, 1)[0];
    const { val, left, right } = head;

    if (left) {
      queue.push(left);
      next ++;
    }
    if (right) {
      queue.push(right);
      next ++;
    }

    cur --;
    if (cur === 0) {
      cur = next;
      next = 0;
      listWideFirst.push(val);
    }
  }

  console.log(listWideFirst);
}

scan(binaryTree);
