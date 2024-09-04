/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export const merge = function (intervals) {
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