// O(n x d) time | O(n) space - where n is the target amount and d is the number of coin denominations

export function minNumberOfCoinsForChange(n, denoms) {

  // 1. Initialize an array to store the minimum coins needed for each amount
  const minCoins = new Array(n + 1).fill(Infinity);
  minCoins[0] = 0;

  for (let amount = 1; amount <= n; amount++) {
    // 2. Set the base case (0 coins needed to make 0 change)
    for (const coin of denoms) {
      // 3. Iterate through each amount from 1 to n
      if (coin <= amount) {
        // 4. For each amount, try all coin denominations and update the minimum
        minCoins[amount] = Math.min(minCoins[amount], minCoins[amount - coin] + 1);
      }
    }
  }
  // 5. Return the minimum coins needed for the target amount or -1 if impossible
  return minCoins[n] !== Infinity ? minCoins[n] : -1;
}

// Example usage:
const n = 24;
const denoms = [1, 5, 10]
console.log(`The minimum number of coins for change of amount ${n} is ${minNumberOfCoinsForChange(n, denoms)}`);
