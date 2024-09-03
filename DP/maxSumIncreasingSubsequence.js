// O(n^2) time | O(n) space - where n is the length of the input array

export function maxSumIncreasingSubsequence(array) {
  // Initialize sums array with a copy of the input array
  // This will store the maximum sum of increasing subsequences ending at each index
  const sums = array.slice();

  // Initialize sequences array with null values
  // This will store the index of the previous element in the increasing subsequence
  const sequences = new Array(array.length).fill(null);

  // Keep track of the index with the maximum sum
  let maxSumIndex = 0;

  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, look at all previous elements
    for (let j = 0; j < i; j++) {
      // Check if we can form an increasing subsequence
      // and if including the current element increases the sum
      if (array[j] < array[i] && sums[j] + array[i] > sums[i]) {
        // Update the maximum sum for the subsequence ending at index i
        sums[i] = sums[j] + array[i];
        // Store the index of the previous element in the subsequence
        sequences[i] = j;
      }
    }
    // Update maxSumIndex if we've found a new maximum sum
    if (sums[i] > sums[maxSumIndex]) {
      maxSumIndex = i;
    }
  }

  // Return the maximum sum and the sequence that produces it
  return [sums[maxSumIndex], buildSequence(array, sequences, maxSumIndex)];
}

function buildSequence(array, sequences, currentIndex) {
  // Initialize an empty array to store the sequence
  const sequence = [];

  // Reconstruct the sequence by following the chain of indices
  while (currentIndex !== null) {
    // Add the current element to the beginning of the sequence
    sequence.unshift(array[currentIndex]);
    // Move to the previous element in the sequence
    currentIndex = sequences[currentIndex];
  }

  // Return the reconstructed sequence
  return sequence;
}

// example usage

const array = [10, 70, 20, 30, 50, 11, 30];
const [maxSum, sequence] = maxSumIncreasingSubsequence(array);
console.log(`When looking at the input array: ${array}, the maximum sum of an increasing subsequence is: ${maxSum}, and the sequence that produces it is: [${sequence}]`);
