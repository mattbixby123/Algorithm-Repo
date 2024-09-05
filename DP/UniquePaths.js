/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export const uniquePaths = function (m, n) {
  // Create a 2D array to store the number of paths
  let dp = Array(m).fill().map(() => Array(n).fill(1));

  // Fill the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // Number of paths to current cell is sum of paths from above and left
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // Return the total number of unique paths
  return dp[m - 1][n - 1];
};

// example m = 3 n =7 output = 28

const m = 3;
const n = 7;
const result = uniquePaths(m, n)

console.log(`${result}`);
