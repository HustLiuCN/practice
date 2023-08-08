/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return target > nums[0] ? 1 : 0;
  }

  let mid = Math.floor((nums.length - 1) / 2);
  if (target === nums[mid]) {
    return mid;
  }
  if (target > nums[mid]) {
    return mid + searchInsert(nums.slice(mid + 1), target) + 1;
  } else {
    return searchInsert(nums.slice(0, mid), target);
  }
};
// @lc code=end

