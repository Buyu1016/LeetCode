/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n = new ListNode()
    let c = n
    let o = 0
    while (l1 || l2 ) {
        // 原因有可能l1比l2大一位或者相反
        // 多的一位要用0进行填充
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        // 计算当前位的值
        let sum = n1 + n2 + o
        // 查看是否需要进一位, 最极限的可能就是9 + 9这种情况
        o = sum > 9 ? 1 : 0;
        // 最开始自己想陷入误区的地方,没理解透彻链表
        c.next = new ListNode(sum % 10);
        // 指针指向到新链表上
        c = c.next;
        // 进行到两个链表下一位，如果有则进行到，没有则取自身的null
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    // 最后一次的进制添加到链表到末尾
    if (o === 1) {
        c.next = new ListNode(1)
    }
    return n.next
};
// @lc code=end

