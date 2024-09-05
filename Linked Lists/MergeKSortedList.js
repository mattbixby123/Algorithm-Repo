function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const mergeKLists = function (lists) {
  // Helper function to merge two sorted lists
  function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
  }

  // Base cases
  if (!lists || lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  // Merge lists pair by pair
  while (lists.length > 1) {
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
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
const lists1 = [[1, 4, 5], [1, 3, 4], [2, 6]].map(createLinkedList);
console.log(`Input: lists = [[1,4,5],[1,3,4],[2,6]]`);
console.log(`Output: ${linkedListToArray(mergeKLists(lists1))}`);
console.log("Explanation: The linked-lists are:");
console.log("[");
console.log("  1 -> 4 -> 5,");
console.log("  1 -> 3 -> 4,");
console.log("  2 -> 6");
console.log("]");
console.log("merging them into one sorted list:");
console.log("1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6");
console.log();

// Example 2
console.log("Example 2:");
const lists2 = [];
console.log(`Input: lists = []`);
console.log(`Output: ${linkedListToArray(mergeKLists(lists2))}`);
console.log();

// Example 3
console.log("Example 3:");
const lists3 = [[]].map(createLinkedList);
console.log(`Input: lists = [[]]`);
console.log(`Output: ${linkedListToArray(mergeKLists(lists3))}`);