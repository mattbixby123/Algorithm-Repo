class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  // Base case
  if (root === null || root.val === p || root.val === q) {
    return root;
  }

  // Look for p and q in left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are non-null, root is the LCA
  if (left && right) {
    return root;
  }

  // Otherwise, return the non-null value
  return left ? left : right;
};

// Helper function to create a tree from an array
function createTree(arr) {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
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

// Example usage
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = createTree(arr);
const p = 5;
const q = 1;
const result = lowestCommonAncestor(root, p, q);

console.log(`The lowest common ancestor of ${p} and ${q} is: ${result.val}`);

// EXPECTED Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.