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

// Example Usages:

// Example 1
const numbers1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Example 1:");
console.log("Input: numbers =", numbers1, ", target =", target1);
console.log("Output:", twoSum(numbers1, target1));

// Example 2
const numbers2 = [2, 3, 4];
const target2 = 6;
console.log("\nExample 2:");
console.log("Input: numbers =", numbers2, ", target =", target2);
console.log("Output:", twoSum(numbers2, target2));

// Example 3
const numbers3 = [-1, 0];
const target3 = -1;
console.log("\nExample 3:");
console.log("Input: numbers =", numbers3, ", target =", target3);
console.log("Output:", twoSum(numbers3, target3));

// Additional example
const numbers4 = [5, 25, 75];
const target4 = 100;
console.log("\nAdditional Example:");
console.log("Input: numbers =", numbers4, ", target =", target4);
console.log("Output:", twoSum(numbers4, target4));