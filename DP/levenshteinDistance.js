// O(n x m) time | O(min(n, m)) space - where n and m are the lneghts of the two input string
export function levenshteinDistance(str1, str2) {
  // Create a 2D array to store distances
  const dp = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0));

  // Initialize the first row and column
  for (let i = 0; i <= str1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= str2.length; j++) dp[0][j] = j;

  // Fill the dp table
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      // If characters match, no operation needed
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Take minimum of insert, delete, or substitute
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  // Return the bottom-right cell value
  return dp[str1.length][str2.length];
}

const str1 = "abcdefghij";
const str2 = "a234567890";

const result = levenshteinDistance(str1, str2);

console.log(`The value at the bottom right cell is ${result}, 
  which means that the minimum number of operations needed 
  to convert "${str1}" to "${str2}" is ${result}`);



