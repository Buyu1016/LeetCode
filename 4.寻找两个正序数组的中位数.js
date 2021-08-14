/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(n1, n2) {
    // 拼接数组并排序
    const a = (n1.concat(n2)).sort((p, n) => p - n), l = a.length, m = l / 2
    if (l % 2 === 0) { // 说明是偶数个,取中位数要拿到正中心的两个的平均值
        return (a[m] + a[m - 1]) / 2
    } else { // 奇数个取正中心的数据即可
        return a[m - 0.5]
    }
};
// @lc code=end
