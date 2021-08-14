/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(n) {
    // 偷懒法
    // return (n.map(i => i*i)).sort((a,b) => a - b)
    // 双指针法
    let l = 0
    let s = n.length - 1
    let a = []
    while(l <= s) {
        if (n[l]**2 > n[s]**2) {
            a.unshift(n[l]**2)
            l++
        } else {
            a.unshift(n[s]**2)
            s--
        }
    }
    return a
};
// @lc code=end
