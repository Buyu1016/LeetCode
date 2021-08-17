/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // 快慢指针解法
    // 规律: 每次快指针走两步，慢指针走一步，当快指针为null或者快指针的下一个元素为null当时候应当终止
    // 快指针
    let f = head
    // 慢指针
    let s = head
    // 停止的条件: 当快指针当前为null或者快指针.next为null说明走到尽头
    while (f && f.next) {
        // 慢走一步
        s = s.next
        // 快走两步
        f = f.next.next
    }
}
// @lc code=end

