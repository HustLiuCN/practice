/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let str = '';
  for (let i = 0; i < s.length; i ++) {
    let a = checkAsMid(i, s);
    let b = checkAsRange(i, s);
    let longer = a.length > b.length ? a : b;
    str = str.length > longer.length ? str : longer;
  }
  return str;
};
// 以 i 为中心点
function checkAsMid(i, s) {
  let left = i - 1;
  let right = i + 1;
  let str = s.substring(i, i + 1);
  while (left >= 0 && right < s.length && s.substring(left, left + 1) === s.substring(right, right + 1)) {
    str = `${s.substring(left, left + 1)}${str}${s.substring(right, right + 1)}`;
    left --;
    right ++;
  }
  return str;
}
// 以 [i, i + 1] 为中心
function checkAsRange(i, s) {
  let left = i;
  let right = i + 1;
  let str = '';
  while (left >= 0 && right < s.length && s.substring(left, left + 1) === s.substring(right, right + 1)) {
    str = `${s.substring(left, left + 1)}${str}${s.substring(right, right + 1)}`;
    left --;
    right ++;
  }
  return str;
}
// @lc code=end

