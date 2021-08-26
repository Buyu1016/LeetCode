/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // 记录图像的宽度
    const w = image[0].length
    // 记录图像的高度
    const h = image.length
    // 记录终点的值
    const r = image[sr][sc]
    // 判定特殊情况, 如果终点的值就是目标渲染值, 则直接返回
    if (r === newColor) return image
    // 第一种解法: 深度优先搜索(DFS)
    // 深度优先搜索在于要及时回溯到某个节点的位置上
    // function dfs(i, j) {
    //     // 如果当前i/j超出图像边界或者当前位置的值不和终点值一样, 则直接结束
    //     if (i < 0 || j < 0 || i >= h || j >= w || image[i][j] !== r ) return
    //     // 给当前位置的值改为目标渲染值
    //     image[i][j] = newColor
    //     dfs(i-1, j) // 上
    //     dfs(i+1, j) // 下
    //     dfs(i, j-1) // 左
    //     dfs(i, j+1) // 右
    // }
    // dfs(sr, sc)
    // return image
    // 第二种解法: 广度优先探索(BFS)
    const a = [[sr, sc]]
    // 当a中长度为0时说明当前已经遍历完成这个数组
    while(a.length) {
        // 始终拿到
        const [i,j] = a.pop()
        // 如果当前拿出的值和终点值相等,则渲染为渲染值,否则说明当前值已经被渲染过了或者当前位置为禁止区域
        if (image[i][j] === r) {
            image[i][j] = newColor
        } else {
            continue
        }
        if (i > 0) a.push([i-1,j])// 上
        if (i < h-1) a.push([i+1,j])// 下
        if (j > 0) a.push([i, j-1])// 左
        if (j < w-1) a.push([i, j+1])// 右
    }
    return image
};
// @lc code=end