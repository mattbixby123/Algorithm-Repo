// Given a string s, return the maximum number of unique substrings that the given string can be split into.

// You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: s = "ababccc"
// Output: 5
// Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
// Example 2:

// Input: s = "aba"
// Output: 2
// Explanation: One way to split maximally is ['a', 'ba'].
// Example 3:

// Input: s = "aa"
// Output: 1
// Explanation: It is impossible to split the string any further.
 

// Constraints:

// 1 <= s.length <= 16

// s contains only lower case English letters.

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  // Set to keep track of used substrings
  const seen = new Set();
  
  // Recursive helper function
  const backtrack = (start) => {
      // Base case: if we've reached the end of string
      if (start >= s.length) {
          return 0;
      }
      
      let maxCount = -Infinity;
      // Try all possible substrings starting at 'start'
      for (let end = start + 1; end <= s.length; end++) {
          const substring = s.substring(start, end);
          // Only proceed if substring is unique
          if (!seen.has(substring)) {
              seen.add(substring);
              // Recursively try rest of string & add 1 for current substring
              maxCount = Math.max(maxCount, 1 + backtrack(end));
              seen.delete(substring);
          }
      }
      return maxCount;
  };
  
  return backtrack(0);
};