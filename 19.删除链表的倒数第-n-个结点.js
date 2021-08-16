/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 该题也是快慢指针的一种用法
    // 规律: 末指针先移动n位，这时在同时移动头指针和尾指针，
    //    这是当莫指针的next为null时说明头指针现在位于删除元素的前一位元素，
    //    这时进行赋值操作
    let m = new ListNode(0, head)
    let l = m, e = m
    // 先移动末指针，向前移动n位
    while (n--) {
        e = e.next
    }
    // 同时移动头尾指针
    while(e.next) {
        e = e.next
        l = l.next
    }
    // 删除第n位的数据就相当于不让该元素与之前的元素产生关联
    l.next = l.next.next
    // 最后舍弃到初始化的链表头，从链表头的next开始读
    return m.next
};
// @lc code=end

