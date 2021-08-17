/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 存储字符串
    // let a = '', m = 0
    // for (let i = 0; i < s.length; i++) {
    //     let j = a.indexOf(s[i])
    //     if (j > -1) {
    //         // 保留重复位后面的数据
    //         a = a.slice(j + 1, a.length)
    //     }
    //     a += s[i]
    //     m = Math.max(m, a.length)
    // }
    // return m

    // 双指针
    let l = 0, e = 0, m = 0
    for (let i = 0; i < s.length; i++) {
        let j = s.slice(l, e).indexOf(s[i])
        if (j > -1) {
            l = l + j + 1
        }
        e ++
        m = Math.max(m, e - l)
    }
    return m
};
// @lc code=end