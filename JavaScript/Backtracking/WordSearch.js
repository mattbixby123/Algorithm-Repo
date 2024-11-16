/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== word[index]) return false;
    const temp = board[row][col];
    board[row][col] = '#'; // Mark as visited

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    board[row][col] = temp; //backtrack
    return found;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;

};

// Example Usage Cases:

// Import the exist function (assuming it's in the same file or properly imported)
// import { exist } from './wordSearch.js';

// Example 1
const board1 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word1 = "ABCCED";
console.log("Example 1:");
console.log("Board:", board1);
console.log("Word:", word1);
console.log("Output:", exist(board1, word1));

// Example 2
const board2 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word2 = "SEE";
console.log("\nExample 2:");
console.log("Board:", board2);
console.log("Word:", word2);
console.log("Output:", exist(board2, word2));

// Example 3
const board3 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word3 = "ABCB";
console.log("\nExample 3:");
console.log("Board:", board3);
console.log("Word:", word3);
console.log("Output:", exist(board3, word3));

// Additional example
const board4 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
const word4 = "ABCESCFS";
console.log("\nAdditional Example:");
console.log("Board:", board4);
console.log("Word:", word4);
console.log("Output:", exist(board4, word4));