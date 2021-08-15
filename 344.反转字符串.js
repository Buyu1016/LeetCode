/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = 0
    let e = s.length - 1
    while(l<=e) {
        let x = s[l]
        s[l] = s[e]
        s[e] = x
        l++
        e--
    }
    console.log(s)
};
// @lc code=end
