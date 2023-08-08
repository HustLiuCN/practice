/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  for (let i = 0; i < strs[0].length; i ++) {
    let s = strs[0][i];
    let j = 0;
    while (j < strs.length) {
      let t = strs[j][i];
      if (t !== s) {
        return prefix;
      }
      if (j === strs.length - 1) {
        prefix += t;
      }
      j ++;
    }
  }
  return prefix;
};
// @lc code=end

