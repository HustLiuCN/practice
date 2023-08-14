/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const dict = {};
  for (let n of nums) {
    if (dict[n]) {
      return n;
    }
    dict[n] = 1;
  }
};
// @lc code=end

