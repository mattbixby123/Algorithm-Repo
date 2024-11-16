/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  // PSEUDOCODE:
  // 1. If string is empty or has one character, it's already a palindrome
  if (s.length <= 1) return s;

  // 2. Find the longest palindrome prefix
  let i = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[i] === s[j]) i++;
  }

  // If the entire string is a palindrome, return it
  if (i === s.length) return s;

  // 3. Get the remaining suffix that is not part of the palindrome prefix
  let remain = s.slice(i);

  // 4. Recursively compute the shortest palindrome for the remaining part
  // and combine it with the palindrome prefix
  return remain.split('').reverse().join('') + shortestPalindrome(s.slice(0, i)) + s.slice(i);
};