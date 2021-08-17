/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // 第一次思路为: 找出s1的所有排列方式，然后再在s2.indexOf里面找
    // 停写原因，没想到怎么能遍历出所有排列方式
    // 看过题解的思路的想法
    // 先统计s1中每个值所出现的次数,在s2中遍历,每次看s1.length长度的数据，查看双指针内容，如果元素出现次数刚好相等s1的次数，则true，反之则false
    // let o = {}
    // // 统计次数
    // for (const i of s1) {
    //     if (o[i]) {
    //         o[i]++
    //     } else {
    //         o[i] = 1
    //     }
    // }
    // let l = 0
    // let e = s1.length
    // while(e <= s2.length) {
    //     let m = {}
    //     for (const i of s2.slice(l,e)) {
    //         if (m[i]) {
    //             m[i]++
    //         } else {
    //             m[i] = 1
    //         }
    //     }
    //     if (isEqual(m)) {
    //         return true
    //     }
    //     l++
    //     e++
    // }
    // return false
    // function isEqual (obj) {
    //     // 判断两个对象是否相等
    //     var a = Object.keys(obj);
    //     var b = Object.keys(o);
    //     for (var i = 0; i < a.length; i++) {
    //         var v = a[i];
    //         var p1 = obj[v];
    //         var p2 = o[v];
    //         if (p1 !== p2) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // 真正借鉴LeetCode解题的方式
    // 精髓点: 利用sort默认会用uniCode进行默认排序
    // let t1 = s1.split('').sort().toString(), l1 = s1.length, l2 = s2.length - l1
    // for(let i=0; i<=l2; i++){
    //     // 按照目标子串的长度进行取值
    //     let c = s2.slice(i, i + l1)
    //     // sort默认排序,此时和s1的sort后的数据一样就可以认为是相同的,数组然后toString()就会把数组变为字符串
    //     if(t1 === c.split('').sort().toString()) return true
    // }
    // return false
    // 优化版
    // 减少执行api的次数
    // ************重点优化处: 最终判断的时候先看两者的chartCodeAt是否相同然后在进行比较，节省了非常多的运行时间
    let t1 = s1.split('').sort().toString()
    let sm1 = 0
    let l1 = s1.length
    let l2 = s2.length - l1
    for (const it of s1) {
        sm1 += it.charCodeAt()
    }
    for(let i=0; i<=l2; i++){
        let c = s2.slice(i, i + l1)
        let sm2 = 0
        for (const it of c) {
            sm2 += it.charCodeAt()
        }
        if(sm1 === sm2 && t1 === c.split('').sort().toString()) return true
    }
    return false
};
// @lc code=end
