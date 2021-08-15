/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(n, t) {
    // 简单版
    // for (let i = 0; i < n.length; i++) {
    //     for (let j = i+1; j < n.length; j++) {
    //         if (n[i]+n[j] === t) {
    //             return [i+1,j+1]
    //         }
    //     }      
    // }
    // 双指针第一版
    // let l = 0
    // let e
    // let m = n.length
    // while(l<m) {
    //     e=l+1
    //     while(e<m) {
    //         if (n[l]+n[e] === t) {
    //             return [l+1,e+1]
    //         }
    //         e++
    //     }
    //     l++
    // }
    // 双指针第二版
    // 规律: 如果n[e]+n[l]>t说明此时应该把尾指针前移，反之则头指针后移，最终就能得到等于的情况
    // 对比第一版的优势,只需要遍历一遍元素即可
    let l = 0
    let e = n.length - 1
    while(l < e) {
        let s = n[l]+n[e]
        if (s === t) {
            return [l+1,e+1]
        } else if (s > t) {
            e--
        } else {
            l++
        }
    }
};
// @lc code=end
