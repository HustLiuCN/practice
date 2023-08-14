/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  let i = 0;
  while(i < k) {
    nums.push(nums[nums.length - 1])
    nums[nums.length - i - 1] = nums[nums.length - i - 2]
    i ++;
  }
};
// @lc code=end

