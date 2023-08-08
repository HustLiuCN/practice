/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) {
    return x;
  }
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end

