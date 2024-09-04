/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = function (root, p, q) {
  // Base case
  if (root === null || root === p || root === q) {
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