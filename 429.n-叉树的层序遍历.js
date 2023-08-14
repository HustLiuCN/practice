/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];

  if (!root) {
    return res;
  }

  res.push([]);
  const queue = [root];
  // 当前层
  let cur = 1;
  // 下一层
  let next = 0;

  while(queue.length) {
    const node = queue.shift();

    if (node.children) {
      for (const child of node.children) {
        queue.push(child);
        next ++;
      }
    }

    cur --;
    res[res.length - 1].push(node.val);
    if (cur === 0 && queue.length) {
      cur = next;
      next = 0;
      res.push([])
    }
  }

  return res;
};
// @lc code=end

