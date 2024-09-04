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