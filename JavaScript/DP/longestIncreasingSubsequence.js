// O(n log n) time | O(n) space - where n is the lnegth of the input array

function longestIncreasingSubsequence(array) {
  const n = array.length;

  // Initialize an array to store the length of LIS ending at each index
  const lis = Array(n).fill(1);

  // Initialize an array to store the previous index in the LIS
  const prev = Array(n).fill(-1);

  // Variable to keep track of the index of the longest LIS
  let maxLenIndex = 0;

  // Iterate through the array
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // If current element is greater and LIS length can be increased
      if (array[i] > array[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
        prev[i] = j;
      }
    }

    // Update maxLenIndex if necessary
    if (lis[i] > lis[maxLenIndex]) {
      maxLenIndex = i;
    }
  }

  // Reconstruct the longest increasing subsequence
  const result = [];
  while (maxLenIndex !== -1) {
    result.unshift(array[maxLenIndex]);
    maxLenIndex = prev[maxLenIndex];
  }

  return result;
}

// example usage
const array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
const result = longestIncreasingSubsequence(array);
console.log(`Given the following array: ${array}, the longest increasing subsequence would be: ${result}`);
