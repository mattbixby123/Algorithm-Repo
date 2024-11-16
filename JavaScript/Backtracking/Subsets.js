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

// Example Usage Cases:
// Example 1
const nums1 = [1, 2, 3];
console.log("Example 1:");
console.log("Input:", nums1);
console.log("Output:", subsets(nums1));

// Example 2
const nums2 = [0];
console.log("\nExample 2:");
console.log("Input:", nums2);
console.log("Output:", subsets(nums2));

// Additional example
const nums3 = [1, 2, 3, 4];
console.log("\nAdditional Example:");
console.log("Input:", nums3);
console.log("Output:", subsets(nums3));