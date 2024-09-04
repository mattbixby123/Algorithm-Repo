/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export function topKFrequent(nums, k) {
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