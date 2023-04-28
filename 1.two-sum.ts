/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number) {
  const dict: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i ++) {
    const cur = nums[i];
    const res = target - cur;
    if (dict.has(res)) {
      return [i, dict.get(res)!]
    }
    dict.set(cur, i);
  }
};
// @lc code=end

