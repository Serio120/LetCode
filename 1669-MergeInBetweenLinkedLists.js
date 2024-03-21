/*
Runtime
155 ms
Beats 46.91% of users with JavaScript


Memory
62.02MB
Beats 60.49% of users with JavaScript
*/

/* (Statement)********************************************************
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:
*********************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;
    for (let i = 0; i < a - 1; i++) {
        current = current.next;
    }
    let firstPartTail = current;
    
    for (let i = 0; i < b - a + 1; i++) {
        current = current.next;
    }
    let secondPartHead = current.next;
    
    firstPartTail.next = list2;
    while (list2.next !== null) {
        list2 = list2.next;
    }
    list2.next = secondPartHead;
    
    return list1;
};
