/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null
    // DFS
    // function dfs(n) {
    //     // 如果当前节点没有下一层的节点则结束这次
    //     if (!n.left && !n.right) return
    //     // 把当前节点下的左右节点连接起来
    //     n.left.next = n.right
    //     // 如果当前节点右侧兄弟有节点，则让当前节点的右节点了连接上当前节点右侧兄弟
    //     if (n.next) {
    //         n.right.next = n.next.left
    //     }
    //     dfs(n.left)
    //     dfs(n.right)
    // }
    // dfs(root)
    // return root
    // BFS
    // 这里面的数据具有一定规律[left,right,left,right,left]
    // 所以每次拿出头位置的数据，那么下一位必定是next连接需要的,如果当前就存在一个值,则说明当前层级就一个节点直接next为null
    const q = [root]
    while (q.length) {
        // 这一步算是记录了当前层的节点数量
        let l = q.length
        while (l--) {
            // 每次拿出首位,对其next进行和下个数据的连接
            let n = q.shift()
            // 当没有取出这个元素当时候，需要看一下队列中是否还有元素, 如果有元素则把第0位给当前元素，没有则给null
            n.next = l ? q[0] : null
            // 如果当前节点具有下一层，则放入队列中
            if (n.left) q.push(n.left,n.right)
        }
    }
    return root
};
// @lc code=end

