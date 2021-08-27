/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(r1, r2) {
    // 如果其中任何一个树不存在为null,则直接返回另外一个树
    if (!r1) return r2
    if (!r2) return r1
    // 深度优先搜索(DFS)
    // r1.val += r2.val
    // r1.left = mergeTrees(r1.left,r2.left)
    // r1.right = mergeTrees(r1.right,r2.right)
    // return r1
    // 广度优先搜索(BFS)
    const q = [[r1, r2]]
    while (q.length) {
        let [t1,t2] = q.shift()
        // 值给集中在r1上
        t1.val += t2.val
        if (t1.left && t2.left) {
            q.push([t1.left,t2.left])
        } else if (!t1.left && t2.left) {
            t1.left = t2.left
        }
        if (t1.right && t2.right) {
            q.push([t1.right,t2.right])
        } else if (!t1.right && t2.right) {
            t1.right = t2.right
        }
    }
    return r1
};
// @lc code=end
