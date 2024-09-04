/**
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = function (height) {
  // Initialize two pointers, one at the start and one at the end of the array
  let left = 0;
  let right = height.length - 1;

  // Initialize the maximum area to 0
  let maxArea = 0;

  // Continue until the pointers meet
  while (left < right) {
    // Calculate the width between the two lines
    let width = right - left;

    // Calculate the height of the container (limited by the shorter line)
    let containerHeight = Math.min(height[left], height[right]);

    // Calculate the area of the current container
    let area = width * containerHeight;

    // Update maxArea if the current area is larger
    maxArea = Math.max(maxArea, area);

    // Move the pointer that points to the shorter line
    // This is because keeping the shorter line and moving the longer line
    // will never result in a larger area
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  // Return the maximum area found
  return maxArea;
};