/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  const n = s.length, dict = new Set(dictionary), memo = Array(n).fill(-1);
  function dp(i) {
    if (i === n) return 0;
    if (memo[i] !== -1) return memo[i];
    let res = 1 + dp(i + 1); // skip current char
    for (let j = i; j < n; j++) if (dict.has(s.slice(i, j + 1))) res = Math.min(res, dp(j + 1));
    return memo[i] = res;
  }
  return dp(0);
};