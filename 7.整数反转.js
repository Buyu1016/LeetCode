/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 自己写的垃圾版
    // if (x < 0) {
    //     let c = +('-'+((Math.abs(x)+'').split('').reverse().join('')))
    //     if (c < (-2)**31) return 0
    //     return c
    // } else {
    //     let c = +((x+'').split('').reverse().join(''))
    //     if (c > 2**31 - 1) return 0
    //     return c
    // }
    // 稍微优质的解法
    // let c = +((Math.abs(x)+'').split('').reverse().join(''))
    // if (x < 0) {
    //     c = - c
    // }
    // if (c>2**31-1 || c<(-2)**31) {
    //     return 0
    // }
    // return c
    // 看过题解的优质解法
};
// @lc code=end

// console.log(reverse(0))