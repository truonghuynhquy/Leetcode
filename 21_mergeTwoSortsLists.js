/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Define ListNode constructor
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
    let nodeMerge = new ListNode(-1);
    let current = nodeMerge;

    while (list1 || list2) {
        if (list2 === null || (list1 !== null && list1.val <= list2.val)) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    return nodeMerge.next;
};

// Test the function
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

// Print the merged List
let nodeCurrent = mergedList;
while (nodeCurrent !== null) {
    console.log(nodeCurrent.val);
    nodeCurrent = nodeCurrent.next;
}
