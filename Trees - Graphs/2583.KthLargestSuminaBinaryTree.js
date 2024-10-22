/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  // If tree is empty, return -1
  if (!root) return -1;
  
  // Use BFS to traverse the tree level by level
  let queue = [root];
  // Array to store sum of each level
  let levelSums = [];
  
  // Process each level
  while (queue.length > 0) {
      let levelSize = queue.length;
      let levelSum = 0;
      
      // Process all nodes at current level
      for (let i = 0; i < levelSize; i++) {
          let node = queue.shift();
          levelSum += node.val;
          
          // Add children to queue for next level processing
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      
      // Store sum of current level
      levelSums.push(levelSum);
  }
  
  // If k is greater than number of levels, return -1
  if (k > levelSums.length) return -1;
  
  // Sort level sums in descending order
  levelSums.sort((a, b) => b - a);
  
  // Return kth largest sum (k is 1-indexed)
  return levelSums[k - 1];
};