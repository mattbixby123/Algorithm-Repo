/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const freq = new Map()
  const res = []

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }

  const sortedArr = [...freq.entries()].sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    res.push(sortedArr[i][0])
  }
  return res
};

// Example 1
console.log("Example 1:");
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
console.log(`Input: nums = [${nums1}], k = ${k1}`);
console.log(`Output: [${topKFrequent(nums1, k1)}]`);
console.log();

// Example 2
console.log("Example 2:");
const nums2 = [1];
const k2 = 1;
console.log(`Input: nums = [${nums2}], k = ${k2}`);
console.log(`Output: [${topKFrequent(nums2, k2)}]`);