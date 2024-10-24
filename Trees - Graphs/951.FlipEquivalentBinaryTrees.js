// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
// }

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  // Base case: If both trees are empty, they are flip equivalent
  if (!root1 && !root2) return true;

  // Base case: If one is empty and the other is not, they are not flip equivalent
  if (!root1 || !root2) return false;

  // If the values at the roots don't match, they are not flip equivalent
  if (root1.val !== root2.val) return false;

  // Recursively check both non-flipped and flipped cases
  return (
      // Check if the trees are identical without any flips
      (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
      // Check if the trees are flip equivalent by flipping
      (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  );
};
