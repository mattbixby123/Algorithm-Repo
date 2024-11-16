/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
export const canFinish = function (numCourses, prerequisites) {
  // Create adjacency list
  const graph = Array(numCourses).fill().map(() => []);
  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  // Create visited array
  const visited = Array(numCourses).fill(0);

  // DFS function to detect cycle
  function dfs(course) {
    // If this node is being visited, we have a cycle
    if (visited[course] === 1) return false;
    // If this node has been visited and processed, it's safe
    if (visited[course] === 2) return true;

    // Mark node as being visited
    visited[course] = 1;

    // Visit all prerequisites
    for (const prereq of graph[course]) {
      if (!dfs(prereq)) return false;
    }

    // Mark node as processed
    visited[course] = 2;
    return true;
  }

  // Check each course
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

// Example usage:
console.log("Example 1:");
console.log("Input: numCourses = 2, prerequisites = [[1,0]]");
console.log("Output:", canFinish(2, [[1, 0]]));
console.log("Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.");

console.log("\nExample 2:");
console.log("Input: numCourses = 2, prerequisites = [[1,0],[0,1]]");
console.log("Output:", canFinish(2, [[1, 0], [0, 1]]));
console.log("Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.");