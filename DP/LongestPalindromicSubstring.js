/**
 * @param {string} s
 * @return {string}
 */

export const longestPalindrome = function (s) {
  // Edge case: if string is empty or has only one character, it's already a palindrome
  if (s.length < 2) return s;

  let start = 0, maxLength = 1;

  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Expand the potential palindrome
      left--;
      right++;
    }
    // Return the length of palindrome
    return right - left - 1;
  }

  // Iterate through each character as a potential center
  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes
    let len1 = expandAroundCenter(i, i);
    // Check for even-length palindromes
    let len2 = expandAroundCenter(i, i + 1);

    // Update the longest palindrome if a longer one is found
    let len = Math.max(len1, len2);
    if (len > maxLength) {
      start = i - Math.floor((len - 1) / 2);
      maxLength = len;
    }
  }

  // Return the longest palindromic substring
  return s.substring(start, start + maxLength);
};