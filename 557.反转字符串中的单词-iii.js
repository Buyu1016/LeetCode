/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.split(' ')
    let i = 0
    while (i<a.length) {
        let s = a[i].split('')
        let l = 0
        let e = s.length - 1
        while (l<e) {
            let x = s[l]
            s[l] = s[e]
            s[e] = x
            l++
            e--
        }
        a[i] = s.join('')
        i++
    }
    return a.join(' ')
};
// @lc code=end
