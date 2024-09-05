// Definition for a binary tree node.
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
export const serialize = function (root) {
  if (!root) return 'null';
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
export const deserialize = function (data) {
  let values = data.split(',');
  let index = 0;

  function dfs() {
    if (index >= values.length || values[index] === 'null') {
      index++;
      return null;
    }

    let node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }

  return dfs();
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

// Helper function to convert tree back to array
function treeToArray(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left || null);
      queue.push(node.right || null);
    }
  }
  // Remove trailing nulls
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

// Example usage
const input = [1, 2, 3, null, null, 4, 5];
const root = createTree(input);
const serialized = serialize(root);
const deserialized = deserialize(serialized);
const output = treeToArray(deserialized);

console.log('Input:', input);
console.log('Output:', output);