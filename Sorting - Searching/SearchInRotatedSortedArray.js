/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1; // Target is in left half
      } else {
        left = mid + 1; // Target is in right half
      }
    }
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1; // Target is in right half
      } else {
        right = mid - 1; // Target is in left half
      }
    }
  }

  return -1; // Target not found
};