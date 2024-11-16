// O(d * s * t) time |O(t) space - where d is the number of throws, s is the number of sides, and t is the target
function diceThrows(numDice, numSides, target) {
  // Create a memoization table
  const memo = new Map();
  // Helper function to calculate the number of ways recursively
  function countWays(dice, sum) {
    // Base cases
    if (dice === 0) return sum === 0 ? 1 : 0;
    if (sum < 0) return 0;

    // Create a unique key for memoization
    const key = `${dice},${sum}`;

    // If we've already computed this subproblem, return the memoized result
    if (memo.has(key)) return memo.get(key);

    let ways = 0;
    // Try all possible values for the current die
    for (let i = 1; i <= numSides; i++) {
      ways += countWays(dice - 1, sum - i);
    }

    // Memoize the result
    memo.set(key, ways);

    return ways;
  }

  // Call the helper function with initial values
  return countWays(numDice, target);
}

// example usage
const numDice = 2;
const numSides = 6;
const target = 12;

const result = diceThrows(numDice, numSides, target);

console.log(`${result}`);
