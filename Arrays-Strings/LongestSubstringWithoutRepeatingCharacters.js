/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
  // Initialize a map to store character positions
  const charMap = new Map();
  let maxLength = 0;
  let start = 0;

  // Iterate through the string
  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If character is already in map and its index is >= start
    if (charMap.has(char) && charMap.get(char) >= start) {
      // Move start to the next position after the previous occurrence
      start = charMap.get(char) + 1;
    } else {
      // Update maxLength if current substring is longer
      maxLength = Math.max(maxLength, end - start + 1);
    }

    // Update character position in map
    charMap.set(char, end);
  }

  return maxLength;
};

// Example Usages:

// Example 1
console.log("Example 1:");
console.log("Input: s = \"abcabcbb\"");
console.log("Output:", lengthOfLongestSubstring("abcabcbb"));

// Example 2
console.log("\nExample 2:");
console.log("Input: s = \"bbbbb\"");
console.log("Output:", lengthOfLongestSubstring("bbbbb"));

// Example 3
console.log("\nExample 3:");
console.log("Input: s = \"pwwkew\"");
console.log("Output:", lengthOfLongestSubstring("pwwkew"));

// Additional example
console.log("\nAdditional Example:");
console.log("Input: s = \"dvdf\"");
console.log("Output:", lengthOfLongestSubstring("dvdf"));