// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Initialize an empty stack to store the first half of the linked list.
    let stack = [];

    // Initialize two pointers: slow and fast.
    // slow moves one step at a time, while fast moves two steps at a time.
    let slow = head;
    let fast = head;

    // Traverse the linked list until the fast pointer reaches the end or the second-to-last node.
    while (fast !== null && fast.next !== null) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    // If the length of the linked list is odd, skip the middle node.
    if (fast !== null) slow = slow.next;

    // Compare each pair of nodes from
    // Traverse the second half of the linked list.
    while (slow !== null) {
        if (slow.val !== stack.pop()) return false;
        slow = slow.next;
    }

    return true;
};

// Example usage:
const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))
);
console.log(isPalindrome(head)); // Output: true
