/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  let d;
  const find = (node, depth) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      d = d ? Math.min(d, depth) : depth;
    }
    find(node.left, depth + 1);
    find(node.right, depth + 1);
  }

  find(root, 1);

  return d;
};
// @lc code=end

