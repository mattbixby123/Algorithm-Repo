/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let result = [];
  let current = 1;

  while (result.length < n) {
    result.push(current);

    if (current * 10 <= n) {
      current *= 10;
    } else {
      while (current % 10 === 9 || current === n) {
        current = Math.floor(current / 10);
      }
      current++;
    }
  }

  return result;
};

// We generate numbers in order, starting with 1.
// When we can't multiply by 10 (would exceed n), we increment instead.
// When we hit a number ending in 9 or reach n, we "backtrack" by dividing by 10 and then incrementing.