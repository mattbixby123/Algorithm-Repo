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
export const removeNthFromEnd = function (head, n) {
  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head;

  // Use two pointers: fast and slow
  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
};