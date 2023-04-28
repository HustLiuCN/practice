/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }

  let tmp = '';
  let i = 0;
  let max = 0;
  for (let j = i; j < s.length; j ++) {
    const cur = s.substring(j, j + 1);
    const existIndex = tmp.indexOf(cur);
    if (existIndex > -1) {
      i += existIndex + 1;
    }
    tmp = s.substring(i, j + 1);
    max = Math.max(max, tmp.length);
  }
  return max;
};
// @lc code=end

