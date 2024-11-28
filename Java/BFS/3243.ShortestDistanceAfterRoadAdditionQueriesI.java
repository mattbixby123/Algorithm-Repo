package Java.BFS;

// link for images:
// https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/description/?envType=daily-question&envId=2024-11-27

// Prompt:
// You are given an integer n and a 2D integer array queries.

// There are n cities numbered from 0 to n - 1. Initially, there is a
// unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.

// queries[i] = [ui, vi] represents the addition of a new unidirectional road
// from city ui to city vi. After each query, you need to find the length of the
// shortest path from city 0 to city n - 1.

// Return an array answer where for each i in the range [0, queries.length - 1],
// answer[i] is the length of the shortest path from city 0 to city n - 1 after
// processing the first i + 1 queries.

// Example 1:

// Input: n = 5, queries = [[2,4],[0,2],[0,4]]

// Output: [3,2,1]

// Explanation:

// After the addition of the road from 2 to 4, the length of the shortest path
// from 0 to 4 is 3.

// After the addition of the road from 0 to 2, the length of the shortest path
// from 0 to 4 is 2.

// After the addition of the road from 0 to 4, the length of the shortest path
// from 0 to 4 is 1.

// Example 2:

// Input: n = 4, queries = [[0,3],[0,2]]

// Output: [1,1]

// Explanation:

// After the addition of the road from 0 to 3, the length of the shortest path
// from 0 to 3 is 1.

// After the addition of the road from 0 to 2, the length of the shortest path
// remains 1.

// Constraints:

// 3 <= n <= 500
// 1 <= queries.length <= 500
// queries[i].length == 2
// 0 <= queries[i][0] < queries[i][1] < n
// 1 < queries[i][1] - queries[i][0]
// There are no repeated roads among the queries.

// Solution:

import java.util.Map;
import java.util.Queue;
import java.util.List;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.LinkedList;

class Solution {
  private int BFS(int n, int[][] qureies, Map<Integer, List<Integer>> adV) {
    Queue<Integer> q = new LinkedList<>();
    q.add(0);
    boolean[] visited = new boolean[n];
    visited[0] = true;
    int d = 0;
    while (!q.isEmpty()) {
      int l = q.size();
      for (int i = 0; i < l; i++) {
        int node = q.poll();
        for (int j : adV.get(node)) {
          if (!visited[j]) {
            q.add(j);
            visited[j] = true;
          }
        }
      }
      d++;
      if (q.contains(n - 1)) {
        return d;
      }
    }
    return -1;
  }

  public int[] shortestDistanceAfterQueries(int n, int[][] queries) {
    Map<Integer, List<Integer>> adV = new HashMap<>();
    for (int i = 0; i < n; i++) {
      adV.put(i, new ArrayList<>());
      if (i < n - 1) {
        adV.get(i).add(i + 1);
      }
    }
    List<Integer> result = new ArrayList<>();
    for (int[] query : queries) {
      int u = query[0], v = query[1];
      adV.get(u).add(v);
      result.add(BFS(n, queries, adV));
    }
    int[] intArray = new int[result.size()];
    for (int i = 0; i < result.size(); i++) {
      intArray[i] = result.get(i);
    }
    return intArray;
  }
}