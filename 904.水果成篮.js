/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let max = 0;
  let start = 0;
  let end = 0;

  let exist = []

  let lastPos = {};
  let lastModify = 0;

  while(end < fruits.length) {
    let cur = fruits[end];
    let prev = fruits[end - 1];
    // 已经采摘过的
    if (exist.includes(cur)) {
      // 和相邻的上一个不同
      if (cur !== prev) {
        lastPos[cur] = end;
      }

      max = Math.max(max, end - start + 1);
    } else {
      console.log('---', exist, end);
      if (exist.length < 2) {
        exist.push(cur);
        lastPos[cur] = end;
        max = Math.max(max, end - start + 1);
      } else {
        start = lastPos[prev];
        exist = exist.filter(e => e === prev);
        exist.push(cur);
        lastPos[cur] = end;
        max = Math.max(max, end - start + 1);
      }
    }

    console.log(start, end);

    end ++;
  }

  return max;
};
// @lc code=end

