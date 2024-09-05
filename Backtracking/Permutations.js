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

// Example Usage Cases:

// Example 1
const nums1 = [1, 2, 3];
console.log("Example 1:");
console.log("Input:", nums1);
console.log("Output:", permute(nums1));

// Example 2
const nums2 = [0, 1];
console.log("\nExample 2:");
console.log("Input:", nums2);
console.log("Output:", permute(nums2));

// Example 3
const nums3 = [1];
console.log("\nExample 3:");
console.log("Input:", nums3);
console.log("Output:", permute(nums3));

// Additional example
const nums4 = [1, 2, 3, 4];
console.log("\nAdditional Example:");
console.log("Input:", nums4);
console.log("Output:", permute(nums4));