// Original solution
const findMedianSortedArrays = function (nums1, nums2) {
  let array = [...nums1, ...nums2].sort((a, b) => a - b);

  let output;

  if (array.length % 2 === 0) {
    let val = array[(array.length) / 2 - 1] + array[(array.length) / 2];
    output = val / 2
  } else {
    output = array[(array.length - 1) / 2]
  }

  return output;
};

// Optimized solution
const findMedianSortedArraysOptimized = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
};

// Example 1
console.log("Example 1:");
const nums1_1 = [1, 3];
const nums2_1 = [2];
console.log(`Input: nums1 = [${nums1_1}], nums2 = [${nums2_1}]`);
console.log(`Output (Original): ${findMedianSortedArrays(nums1_1, nums2_1)}`);
console.log(`Output (Optimized): ${findMedianSortedArraysOptimized(nums1_1, nums2_1)}`);
console.log("Explanation: merged array = [1,2,3] and median is 2.");
console.log();

// Example 2
console.log("Example 2:");
const nums1_2 = [1, 2];
const nums2_2 = [3, 4];
console.log(`Input: nums1 = [${nums1_2}], nums2 = [${nums2_2}]`);
console.log(`Output (Original): ${findMedianSortedArrays(nums1_2, nums2_2)}`);
console.log(`Output (Optimized): ${findMedianSortedArraysOptimized(nums1_2, nums2_2)}`);
console.log("Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.");