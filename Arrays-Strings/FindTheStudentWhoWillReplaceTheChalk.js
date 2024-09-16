/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  // Calculate the total chalk used in one round
  const totalChalk = chalk.reduce((sum, pieces) => sum + pieces, 0);

  // Optimize by skipping full rounds
  k = k % totalChalk;

  // Simulate the process
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) {
      return i;
    }
    k -= chalk[i];
  }

  // This line should never be reached if the input is valid
  return 0;
};