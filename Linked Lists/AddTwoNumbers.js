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
export const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Traverse both lists simultaneously
  while (l1 !== null || l2 !== null) {
    // Get values of current nodes (0 if list ended)
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    // Calculate sum and carry
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);

    // Create new node with ones digit of sum
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to next nodes if available
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Add final carry if exists
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};