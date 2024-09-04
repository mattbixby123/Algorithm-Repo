/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return 'null';

  // Use preorder traversal to serialize
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

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/