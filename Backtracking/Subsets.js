/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const subsets = function (nums) {
  const result = [];

  // Helper function to generate subsets
  function backtrack(start, currentSubset) {
    // Add the current subset to the result
    result.push([...currentSubset]);

    // Explore further subsets
    for (let i = start; i < nums.length; i++) {
      // Include the current number
      currentSubset.push(nums[i]);
      // Recursively generate subsets starting from the next index
      backtrack(i + 1, currentSubset);
      // Backtrack: remove the last added number
      currentSubset.pop();
    }
  }

  // Start the backtracking process
  backtrack(0, []);

  return result;
};