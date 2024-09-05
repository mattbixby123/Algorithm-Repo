/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
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

// Example 1
console.log("Example 1:");
const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
console.log(`Input: nums = [${nums1}], target = ${target1}`);
console.log(`Output: ${search(nums1, target1)}`);
console.log();

// Example 2
console.log("Example 2:");
const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
console.log(`Input: nums = [${nums2}], target = ${target2}`);
console.log(`Output: ${search(nums2, target2)}`);
console.log();

// Example 3
console.log("Example 3:");
const nums3 = [1];
const target3 = 0;
console.log(`Input: nums = [${nums3}], target = ${target3}`);
console.log(`Output: ${search(nums3, target3)}`);