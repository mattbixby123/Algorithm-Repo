/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  // Sort intervals based on start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (const interval of intervals) {
    // If result is empty or current interval doesn't overlap with previous
    if (result.length === 0 || interval[0] > result[result.length - 1][1]) {
      result.push(interval);
    } else {
      // Merge with previous interval
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
    }
  }

  return result;
};

// Example 1
console.log("Example 1:");
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(`Input: intervals = ${JSON.stringify(intervals1)}`);
console.log(`Output: ${JSON.stringify(merge(intervals1))}`);
console.log("Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].");
console.log();

// Example 2
console.log("Example 2:");
const intervals2 = [[1, 4], [4, 5]];
console.log(`Input: intervals = ${JSON.stringify(intervals2)}`);
console.log(`Output: ${JSON.stringify(merge(intervals2))}`);
console.log("Explanation: Intervals [1,4] and [4,5] are considered overlapping.");