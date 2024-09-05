/**
 * @param {number} n
 * @return {string[][]}
 */
export const solveNQueens = function (n) {
  let mat = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    mat[i] = new Array(n).fill('.');
  }

  function nQueen(mat, row) {
    if (row === mat.length) {
      res.push([]);
      for (let i = 0; i < mat.length; i++) {
        res[res.length - 1].push(mat[i].join(''));
      } 0.00
      return;
    }

    for (let i = 0; i < mat.length; i++) {
      if (isSafe(mat, row, i)) {
        mat[row][i] = 'Q';
        nQueen(mat, row + 1);
        mat[row][i] = '.';
      }
    }
  }

  function isSafe(mat, row, col) {
    for (let i = row - 1; i >= 0; i--) {
      if (mat[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (mat[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < mat.length; i--, j++) {
      if (mat[i][j] === 'Q') return false;
    }
    return true;
  }

  nQueen(mat, 0);
  return res;
};

// Example Usages:
// Example 1
console.log("Example 1:");
console.log("Input: n = 4");
console.log("Output:", solveNQueens(4));

// Example 2
console.log("\nExample 2:");
console.log("Input: n = 1");
console.log("Output:", solveNQueens(1));

// Additional example
console.log("\nAdditional Example:");
console.log("Input: n = 5");
console.log("Output:", solveNQueens(5));

// Function to print the chessboard
// function printChessboard(solution) {
//   for (let row of solution) {
//     console.log(row);
//   }
//   console.log(); // Empty line for separation
// }

// // Print the first solution for n = 4 in a more visual way
// console.log("\nVisual representation of first solution for n = 4:");
// printChessboard(solveNQueens(4)[0]);