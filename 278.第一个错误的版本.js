/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let s = 1
        let e = n
        while (s < e) {
            // 取到中间位, 这里为什么不直接(e + s) / 2呢? 原因: 有可能在(e + s)的时候超过number类型限制的位数造成溢出,所以采用先拿到(e - s) / 2也就是一半的一半的值然后再加上左边的值就和(e + s) / 2的结果是一样的
            const c = Math.floor(s + (e - s) / 2)
            if (isBadVersion(c)) {
                e = c
            } else {
                s = c + 1
            }
        }
        return s
    };
};
// @lc code=end

solution()(9)