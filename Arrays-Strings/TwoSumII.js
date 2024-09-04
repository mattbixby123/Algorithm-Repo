/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (numbers, target) {
  let left = 1;  // Start from index 1 (1-indexed array)
  let right = numbers.length;

  while (left < right) {
    const sum = numbers[left - 1] + numbers[right - 1];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // No solution found (although the problem guarantees one exists)
  return [];
};

