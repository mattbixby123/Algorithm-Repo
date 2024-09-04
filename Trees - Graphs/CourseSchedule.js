/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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