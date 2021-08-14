/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let j = ''
    for (let i = s.length - 1; i >= 0; i--) {
        j += s[i]
    }
    let r = ''
    for (var i = j.length;i > 0;i--){
        for (var k = 0;k < s.length; k++){
            a = s.substring(k, i)
            b = j.substring(k, i + k)
            console.log(k, i)
            console.log('>', a, b)
            if (a === b) {
                if (a.length >= r.length) {
                    r = a
                }
            }
        }
    }
    console.log(r)
    return r
};
// @lc code=end

longestPalindrome('abacd')