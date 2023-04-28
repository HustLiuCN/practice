/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let flag = 0;
  let l3;

  const add = (a, b) => {
    if (!a && !b) {
      return flag ? { val: 1, next: null } : null;
    }

    let sum = (a?.val ?? 0) + (b?.val ?? 0) + flag;
    if (sum >= 10) {
      sum -= 10;
      flag = 1;
    } else {
      flag = 0;
    }

    return {
      val: sum,
      next: add(a?.next, b?.next),
    }
  }

  return add(l1, l2);
};
// @lc code=end

