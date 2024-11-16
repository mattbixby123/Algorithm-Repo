/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let prevLength;
  
  // Continue removing until no more "AB" or "CD" substrings are found
  do {
      prevLength = s.length;
      // Remove occurrences of "AB" and "CD"
      s = s.replace(/AB|CD/g, '');
  } while (s.length < prevLength);
  
  return s.length;
};

// Example test cases
console.log(minLength("ABFCACDB")); // Output: 2
console.log(minLength("ACBBD"));    // Output: 5
