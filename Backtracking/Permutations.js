/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = function (nums) {
  const result = [];

  // Helper function to generate permutations
  function backtrack(current) {
    // If current permutation is complete, add it to result
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    // Try adding each number to the current permutation
    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) continue; // Skip if number is already used
      current.push(nums[i]);
      backtrack(current);
      current.pop(); // Backtrack
    }
  }

  backtrack([]);
  return result;
};