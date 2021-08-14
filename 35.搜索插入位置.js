/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(n, t) {
    // 二分法
    // let s = 0
    // let e = n.length - 1
    // while (s <= e) {
    //     const c = Math.floor(s + (e - s) / 2)
    //     if (n[c] > t) { // 表示范围确定在[s, c - 1]
    //         e = c - 1
    //     } else if (n[c] < t) { // 表示范围在[c + 1, e]
    //         s = c + 1
    //     } else { // 表示刚好是正中心元素等于t
    //         return c
    //     }
    // }
    // return s
    // 暴力法
    const l = n.length
    for (let i = 0; i < l; i++) {
        if (n[i] >= t) {
            return i
        }
    }
    return l
};
// @lc code=end
