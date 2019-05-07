/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0);
    let result = head;
    while (!!l1 && !!l2) {
        if (l1.val <= l2.val) {
            result.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            result.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        result = result.next;
    }
    while (!!l1) {
        result.next = new ListNode(l1.val);
        l1 = l1.next;
        result = result.next;
    }
    while (!!l2) {
        result.next = new ListNode(l2.val);
        l2 = l2.next;
        result = result.next;
    }
    return head.next;
};

