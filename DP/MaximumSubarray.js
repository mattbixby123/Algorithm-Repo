/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Choose between starting a new subarray or extending the existing one
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum if necessary
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

//expected output 6