/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

export const minDistance = (word1, word2) => {
  // Lengths of strings
  const m = word1.length;
  const n = word2.length;
  // Lookup table to store minimum characters required
  const lookup = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  // Base initialization
  for (let i = 0; i <= m; i++) {
    lookup[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    lookup[0][j] = j;
  }
  // Populate the remaining table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // If both characters are same, we don't have to do anything
      const cost = word1.charAt(i - 1) === word2.charAt(j - 1) ? 0 : 1;
      lookup[i][j] = Math.min(cost + lookup[i - 1][j - 1], 1 + Math.min(lookup[i - 1][j], lookup[i][j - 1]));
    }
  }
  return lookup[m][n];
};

// example usage - output should be 3
const word1 = "horse";
const word2 = "ros";

const result = minDistance(word1, word2);

console.log(`${result}`);
