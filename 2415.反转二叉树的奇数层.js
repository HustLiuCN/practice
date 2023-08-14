/*
 * @lc app=leetcode.cn id=2415 lang=javascript
 *
 * [2415] 反转二叉树的奇数层
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  if (!root) {
    return root;
  }

  const queue = [root];
  let level = 0;
  let cur = 1;
  let next = 0;

  let oddLevel = [];

  while(queue.length) {
    const node = queue.shift();
    cur --;

    if (node.left) {
      queue.push(node.left);
      if ((level + 1) % 2) {
        oddLevel.push(node.left);
      }
      next ++;
    }
    if (node.right) {
      queue.push(node.right);
      if ((level + 1) % 2) {
        oddLevel.push(node.right);
      }
      next ++;
    }

    if (cur === 0) {
      if (level % 2) {
        for (let i = 0, j = oddLevel.length - 1; i < j; i ++, j --) {
          [oddLevel[i].val, oddLevel[j].val] = [oddLevel[j].val, oddLevel[i].val]
        }
        oddLevel = [];
      }

      level ++;
      cur = next;
      next = 0;
    }
  }

  return root;
};
// @lc code=end

