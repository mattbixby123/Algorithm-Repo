function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = carry + x + y;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
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
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
console.log(`Input: l1 = [2,4,3], l2 = [5,6,4]`);
console.log(`Output: ${linkedListToArray(addTwoNumbers(l1, l2))}`);
console.log("Explanation: 342 + 465 = 807.");
console.log();

// Example 2
console.log("Example 2:");
const l3 = createLinkedList([0]);
const l4 = createLinkedList([0]);
console.log(`Input: l1 = [0], l2 = [0]`);
console.log(`Output: ${linkedListToArray(addTwoNumbers(l3, l4))}`);
console.log();

// Example 3
console.log("Example 3:");
const l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createLinkedList([9, 9, 9, 9]);
console.log(`Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`);
console.log(`Output: ${linkedListToArray(addTwoNumbers(l5, l6))}`);