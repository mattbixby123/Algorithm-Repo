// Prompt:
// Link: https://leetcode.com/problems/rotating-the-box/description/?envType=daily-question&envId=2024-11-23

// You are given an m x n matrix of characters box representing a side-view of a
// box. Each cell of the box is one of the following:

// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall
// due to gravity. Each stone falls down until it lands on an obstacle, another
// stone, or the bottom of the box. Gravity does not affect the obstacles'
// positions, and the inertia from the box's rotation does not affect the
// stones' horizontal positions.

// It is guaranteed that each stone in box rests on an obstacle, another stone,
// or the bottom of the box.

// Return an n x m matrix representing the box after the rotation described
// above.

// Example 1:

// Input: box = [["#",".","#"]]
// Output: [["."],
// ["#"],
// ["#"]]
// Example 2:

// Input: box = [["#",".","*","."],
// ["#","#","*","."]]
// Output: [["#","."],
// ["#","#"],
// ["*","*"],
// [".","."]]
// Example 3:

// Input: box = [["#","#","*",".","*","."],
// ["#","#","#","*",".","."],
// ["#","#","#",".","#","."]]
// Output: [[".","#","#"],
// [".","#","#"],
// ["#","#","*"],
// ["#","*","."],
// ["#",".","*"],
// ["#",".","."]]

// Constraints:
// m == box.length
// n == box[i].length
// 1 <= m, n <= 500
// box[i][j] is either '#', '*', or '.'.

// Solution
package Java.Matrix;

import java.util.Arrays;

class Solution {
  public char[][] rotateTheBox(char[][] box) {
    int ROWS = box.length;
    int COLS = box[0].length;

    char[][] res = new char[COLS][ROWS];
    for (char[] row : res) {
      Arrays.fill(row, '.');
    }

    for (int r = 0; r < ROWS; r++) {
      int i = COLS - 1;
      for (int c = COLS - 1; c >= 0; c--) {
        if (box[r][c] == '#') {
          res[i][ROWS - r - 1] = '#';
          i--;
        } else if (box[r][c] == '*') {
          res[c][ROWS - r - 1] = '*';
          i = c - 1;
        }
      }
    }
    return res;
  }
}