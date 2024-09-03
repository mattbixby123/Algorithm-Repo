export function maxSubsetSumNoAdjacent(array) {
  // Step 1: Handle edge cases
  // If the array is empty, the maximum sum is 0
  if (array.length === 0) return 0;
  // If the array has only one element, the maximum sum is that element
  if (array.length === 1) return array[0];

  // Step 2: Initialize variables to keep track of the maximum sum
  // 'prevMax' stores the maximum sum up to the previous element
  let prevMax = array[0];
  // 'currMax' stores the maximum sum up to the current element
  let currMax = Math.max(array[0], array[1]);

  // Step 3: Iterate through the array, starting from the third element
  for (let i = 2; i < array.length; i++) {
    // Temporarily store the current max to update 'prevMax' later
    const temp = currMax;
    // Update 'currMax' to be the maximum of:
    currMax = Math.max(currMax, prevMax + array[i]);
    // Update 'prevMax' to the previous 'currMax'
    prevMax = temp;
  }

  // Step 4: Return the final maximum sum
  return currMax;
}

//Sample Input
const array = [75, 105, 120, 75, 90, 135];
console.log(`The Maximum Subset Sum (non-adjacent) for ${array} is ${maxSubsetSumNoAdjacent(array)}`);
