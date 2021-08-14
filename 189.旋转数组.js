/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} kclear
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(n, k) {
    // k规律: 当k===n.length时，就相当于数组没移动
    k = k % n.length
    if (k) n.unshift(...n.splice(-k))
};
// @lc code=end
