/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const reverseKGroup = function (head, k) {
  // Helper function to reverse a portion of the linked list
  function reverseGroup(start, k) {
    let prev = null;
    let curr = start;
    let next = null;
    for (let i = 0; i < k && curr; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return [prev, curr]; // Return new start and end of reversed group
  }

  // Count the number of nodes
  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;

  // Reverse k nodes at a time
  while (count >= k) {
    let start = prevGroupEnd.next;
    let [newStart, newEnd] = reverseGroup(start, k);
    prevGroupEnd.next = newStart;
    start.next = newEnd;
    prevGroupEnd = start;
    count -= k;
  }

  return dummy.next;
};