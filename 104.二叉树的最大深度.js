/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  let max = 0;

  const find = (node, depth) => {
    if (!node) {
      return;
    }
    max = Math.max(max, depth);
    find(node.left, depth + 1);
    find(node.right, depth + 1);
  }

  find(root, 1);

  return max;
};
// @lc code=end

