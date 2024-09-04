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