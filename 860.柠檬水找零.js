/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const rest = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let bill of bills) {

    rest[bill] ++;

    if (bill === 10) {
      if (rest[5] > 0) {
        rest[5] --;
      } else {
        return false;
      }
    }

    if (bill === 20) {
      if (rest[5] >= 3) {
        if (rest[10] >= 1) {
          rest[10] --;
          rest[5] --;
        } else {
          rest[5] -= 3;
        }
      } else if (rest[5] >= 1) {
        if (rest[10] < 1) {
          return false;
        } else {
          rest[10] --;
          rest[5] --;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end

