/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = new Array(n);
  for (let i = 0; i < n; i ++) {
    res[i] = [];
  }

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let x = 1;

  while(x <= n * n) {
    for (let i = left; i <= right; i ++) {
      res[top][i] = x;
      x ++;
    }
    top ++;
    if (top > bottom) {
      break;
    }
    for (let i = top; i <= bottom; i ++) {
      res[i][right] = x;
      x ++;
    }
    right --;
    if (right < left) {
      break;
    }
    for (let i = right; i >= left; i --) {
      res[bottom][i] = x;
      x ++;
    }
    bottom --;
    if (bottom < top) {
      break;
    }
    for (let i = bottom; i >= top; i --) {
      res[i][left] = x;
      x ++;
    }
    left ++;
    if (left > right) {
      break;
    }
  }

  return res;
};
// @lc code=end

