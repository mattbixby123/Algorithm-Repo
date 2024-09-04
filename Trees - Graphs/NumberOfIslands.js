/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function (grid) {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        islandCount++;
        markIsland(grid, i, j);
      }
    }
  }

  return islandCount;
};

var markIsland = function (grid, xPos, yPos) {
  // Check to see if we are currently in the water
  if (xPos < 0 || yPos < 0 || xPos >= grid.length || yPos >= grid[0].length || grid[xPos][yPos] == "0") {
    return;
  }

  // If not, then we are on an island, so mark it as visited
  grid[xPos][yPos] = "0";

  // Explore the unvisited parts of the island in all four directions
  markIsland(grid, xPos + 1, yPos); // down
  markIsland(grid, xPos, yPos + 1); // right
  markIsland(grid, xPos - 1, yPos); // up
  markIsland(grid, xPos, yPos - 1); // left
}