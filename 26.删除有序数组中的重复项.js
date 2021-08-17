/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(n) {
    // 双指针
    let f = 0
    let s = 0
    let m = n.length
    while (f < m) {
        if (n[s] === n[f]) {
            f++
        } else {
            s++
            n[s] = n[f]
        }
    }
    return s + 1
};
// @lc code=end

removeDuplicates([1,2,2,3,3,4,5,6,6,6])