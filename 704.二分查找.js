/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(n, t) {
    let e = n.length - 1
    let l = 0
    while(true) {
        if (n[l] === t) {
            return l
        } else {
            l ++
        }
        if (n[e] === t) {
            return e
        } else {
            e --
        }
        if (l > e || e < l) {
            return -1
        }
    }
};
// @lc code=end
