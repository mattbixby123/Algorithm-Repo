// O(n^3 + m) | O(n + m) space - where n is the number of digits in Pi and m is the number of favorite numbers

function numbersInPi(pi, numbers) {
  // Convert numbers array to Set for faster lookup
  const numberSet = new Set(numbers);

  // Initialize memoization array
  const memo = new Array(pi.length).fill(-1);

  // Helper function to find minimum spaces recursively
  function minSpaces(index) {
    // Base case: if we've reached the end of pi, return 0
    if (index === pi.length) return 0;

    // If we've already computed this subproblem, return the memoized result
    if (memo[index] !== -1) return memo[index];

    // Initialize minSpaces to a large number
    let minSpacesValue = Infinity;

    // Try all possible substrings starting from the current index
    for (let i = index; i < pi.length; i++) {
      const currentNumber = pi.slice(index, i + 1);
      // If the current substring is in our number set
      if (numberSet.has(currentNumber)) {
        // Recursively find the min spaces for the rest of the string
        const spaces = minSpaces(i + 1);
        // If a valid solution is found, update minSpaces
        if (spaces !== Infinity) {
          minSpacesValue = Math.min(minSpacesValue, 1 + spaces);
        }
      }
    }

    // Memoize the result for this index
    memo[index] = minSpacesValue;

    return minSpacesValue;
  }

  // Call the helper function starting from index 0
  const result = minSpaces(0);

  // Return -1 if no valid solution is found, otherwise return result - 1
  return result === Infinity ? -1 : result - 1;
}
