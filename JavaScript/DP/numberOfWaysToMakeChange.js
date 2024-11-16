// O(n x d) time | O(n) space - where n is the target amount and d is the number of coin denominations

export function numberOfWaysToMakeChange(n, denoms) {
  // 1. Initialize an array to store the number of ways for each amount
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (const coin of denoms) {
    // 2. Set the base case (0 coins needed to make 0 change)
    for (let amount = 1; amount <= n; amount++) {
      // 3. Iterate through each coin denomination
      if (coin <= amount) {
        // 4. For each denomination, update the ways array
        ways[amount] += ways[amount - coin];
      }
    }
  }
  // 5. Return the number of ways to make the target amount  
  return ways[n];
}

// Example usage
const n = 10;
const denoms = [1, 5, 10, 25];
console.log(`Number of ways to make change for ${n} is: ${numberOfWaysToMakeChange(n, denoms)}`);
