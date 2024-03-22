/* (Statement)********************************************************
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
**********************************************************************
Runtime
105ms
Beats 93.76% of users with JavaScript

Memory
69.45 MB
Beats 87.60% of users with JavaScript


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Helper function to reverse a linked list
    const reverseLinkedList = (node) => {
        let prev = null;
        while (node !== null) {
            const next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    };
    
    let slow = head;
    let fast = head;
    
    // Find the middle of the linked list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    let reversedHead = reverseLinkedList(slow);
    
    // Compare the first half with the reversed second half
    while (reversedHead !== null) {
        if (head.val !== reversedHead.val) {
            return false;
        }
        head = head.next;
        reversedHead = reversedHead.next;
    }
    
    return true;
};
