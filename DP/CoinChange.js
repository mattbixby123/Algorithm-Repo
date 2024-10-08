/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  return dp[amount] == amount + 1 ? -1 : dp[amount]
};

// example usage:
const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount)

console.log(`${result}`);

// Output: 3
// Explanation: 11 = 5 + 5 + 1 (3 coins used)