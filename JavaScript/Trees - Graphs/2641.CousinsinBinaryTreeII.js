/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var replaceValueInTree = function(root) {
  if (!root) return null;
  
  // Set root's value to 0 since it has no cousins
  root.val = 0;
  
  // Initialize queue with root's children and their parent's value
  let queue = [];
  if (root.left) queue.push([root.left, root]);
  if (root.right) queue.push([root.right, root]);
  
  while (queue.length > 0) {
      // Get all nodes at current level
      const levelSize = queue.length;
      const nextLevel = [];
      let levelSum = 0;
      
      // Calculate total sum of this level
      for (let i = 0; i < levelSize; i++) {
          const [node] = queue[i];
          levelSum += node.val;
      }
      
      // Group nodes by parent
      const parentSums = new Map();
      for (let i = 0; i < levelSize; i++) {
          const [node, parent] = queue[i];
          if (!parentSums.has(parent)) {
              parentSums.set(parent, 0);
          }
          parentSums.set(parent, parentSums.get(parent) + node.val);
      }
      
      // Process current level and prepare next level
      for (let i = 0; i < levelSize; i++) {
          const [node, parent] = queue[i];
          
          // Queue up next level
          if (node.left) nextLevel.push([node.left, node]);
          if (node.right) nextLevel.push([node.right, node]);
          
          // Update current node's value (levelSum - sum of nodes with same parent)
          node.val = levelSum - parentSums.get(parent);
      }
      
      queue = nextLevel;
  }
  
  return root;
};