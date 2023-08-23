/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];
  // 行
  let m = matrix.length;
  // 列
  let n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i ++) {
      res.push(matrix[top][i]);
    }
    top ++;
    if (top > bottom) {
      break;
    }
    for (let i = top; i <= bottom; i ++) {
      res.push(matrix[i][right]);
    }
    right --;
    if (right < left) {
      break;
    }
    for (let i = right; i >= left; i --) {
      res.push(matrix[bottom][i]);
    }
    bottom --;
    if (bottom < top) {
      break;
    }
    for (let i = bottom; i >= top; i --) {
      res.push(matrix[i][left]);
    }
    left ++;
    if (left > right) {
      break;
    }
  }

  // console.log(res);
  return res;
};

// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
// @lc code=end

