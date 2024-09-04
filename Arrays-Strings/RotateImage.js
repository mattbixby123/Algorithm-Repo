/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function (matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix (swap elements across the main diagonal)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const result = rotate(matrix)

console.log(`${matrix}`);
