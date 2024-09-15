export function spiralTraverseSumOFIdxModulus3(matrix) {
  if (matrix.length === 0) return 0;



  let sum = 0;
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  let count = 0;

  // Continue traversing while boundaries have't crossed
  while (top <= bottom && left <= right) {
    // Traverse top row from left to right
    for (let col = left; col <= right; col++) {
      if (count % 3 === 0) {
        sum += matrix[top][col];
      }
      count++;
    }
    top++;

    // Traverse right column from top to bottom
    for (let row = top; row <= bottom; row++) {
      if (count % 3 === 0) {
        sum += matrix[row][right];
      }
      count++;
    }
    right--;

    //  Check if there are more rows to traverse
    if (top <= bottom) {
      // Traverse bottom row from right to left
      for (let col = right; col >= left; col--) {
        if (count % 3 === 0) {
          sum += matrix[bottom][col];
        }
        count++;
      }
      bottom--;
    }

    // Check if there are more columns to traverse
    if (left <= right) {
      // Traverse left column from bottom to top
      for (let row = bottom; row >= top; row--) {
        if (count % 3 === 0) {
          sum += matrix[row][left];
        }
        count++;
      }
      left++;
    }
  }

  return sum;
}

const matrix = [
  [918, 278, -533, -233, 551, -805, 353, -830, 426, -501],
  [472, -323, -893, -667, -92, -538, 120, -134, 87, -424],
  [812, -231, 461, -515, 162, -776, -66, 85, -324, 192],
  [-293, -894, 79, 394, -573, -840, 142, 53, -12, -628],
  [-494, -603, -750, -588, -92, -256, -292, -206, 723, 885],
  [76, 237, -771, -59, 415, 309, 946, 767, -791, -321],
  [-110, 6, -941, 834, -311, 547, -896, 241, 639, -890],
  [-1000, -136, 311, -555, 659, -958, -445, -335, 196, -585],
  [-696, -315, -391, 219, 395, -832, 125, -838, 420, 372],
  [223, -808, 25, -743, 607, -179, -760, -196, 987, -666]
];

const output = spiralTraverseSumOFIdxModulus3(matrix);
console.log(output);

