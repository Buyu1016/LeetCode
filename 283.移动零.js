/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(n) {
    let l = 0
    let e = n.length - 1
    while(l < e) {
        if (n[l] === 0) {
            n.push((n.splice(l,1))[0])
            e--
        } else {
            l++
        }
    }
};
// @lc code=end
