/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // Sort the array in descending order based on string comparison
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

  // Handle the case where the largest number is 0
  if (nums[0] === 0) {
    return "0";
  }

  // Join the sorted array into a string
  return nums.join('');
};