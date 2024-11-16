// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
* @param {TreeNode} root
* @return {number[][]}
*/
export const levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
};

// Helper function to create a tree from an array
function createTree(arr) {
  if (arr.length === 0) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    let node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Example usage:
console.log("Example 1:");
console.log("Input: root = [3,9,20,null,null,15,7]");
let root1 = createTree([3, 9, 20, null, null, 15, 7]);
console.log("Output:", levelOrder(root1));

console.log("\nExample 2:");
console.log("Input: root = [1]");
let root2 = createTree([1]);
console.log("Output:", levelOrder(root2));

console.log("\nExample 3:");
console.log("Input: root = []");
let root3 = createTree([]);
console.log("Output:", levelOrder(root3));