/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function (nums1, nums2) {
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