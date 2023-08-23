/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1) {
    return true;
  }

  let left = 0;
  let right = 1;
  let max = 0;

  while(left < right) {
    for (let i = left; i < right; i ++) {
      max = Math.max(max, i + nums[i]);
    }
    if (max >= nums.length - 1) {
      return true;
    }

    left = right;
    right = max + 1;
  }

  return false;
};
// @lc code=end

