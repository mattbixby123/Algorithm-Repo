function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

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
console.log(`Input: head = [1,2,3,4,5], n = 2`);
console.log(`Output: ${linkedListToArray(removeNthFromEnd(head1, 2))}`);
console.log();

// Example 2
console.log("Example 2:");
const head2 = createLinkedList([1]);
console.log(`Input: head = [1], n = 1`);
console.log(`Output: ${linkedListToArray(removeNthFromEnd(head2, 1))}`);
console.log();

// Example 3
console.log("Example 3:");
const head3 = createLinkedList([1, 2]);
console.log(`Input: head = [1,2], n = 1`);
console.log(`Output: ${linkedListToArray(removeNthFromEnd(head3, 1))}`);