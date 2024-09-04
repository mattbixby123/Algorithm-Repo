/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function (nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  const result = [];

  // Iterate through the array, using the current number as the first number of the triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    // Use two pointers to find the other two numbers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Found a triplet, add to result
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for the second number
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate values for the third number
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        // Sum is too small, move left pointer to increase sum
        left++;
      } else {
        // Sum is too large, move right pointer to decrease sum
        right--;
      }
    }
  }

  return result;
};