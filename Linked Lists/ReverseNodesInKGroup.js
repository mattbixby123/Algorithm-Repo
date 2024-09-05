function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const reverseKGroup = function (head, k) {
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
    return [prev, curr];
  }

  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;

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

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// Example 1
console.log("Example 1:");
const head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(`Input: head = [1,2,3,4,5], k = 2`);
console.log(`Output: ${linkedListToArray(reverseKGroup(head1, 2))}`);
console.log();

// Example 2
console.log("Example 2:");
const head2 = createLinkedList([1, 2, 3, 4, 5]);
console.log(`Input: head = [1,2,3,4,5], k = 3`);
console.log(`Output: ${linkedListToArray(reverseKGroup(head2, 3))}`);