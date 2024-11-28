// s = "cat"
// t = "tac"

// // First check lengths - they're both 3, so continue
// // Create array: count = new int[26] (all initialized to 0)
// // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// // First iteration (i=0):
// s.charAt(0) is 'c': 'c'-'a' = 2
// count[2]++ // increment for 'c'
// t.charAt(0) is 't': 't'-'a' = 19
// count[19]-- // decrement for 't'
// // Array is now:
// // [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0]

// // Second iteration (i=1):
// s.charAt(1) is 'a': 'a'-'a' = 0
// count[0]++ // increment for 'a'
// t.charAt(1) is 'a': 'a'-'a' = 0
// count[0]-- // decrement for 'a'
// // Array is still:
// // [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0]

// // Third iteration (i=2):
// s.charAt(2) is 't': 't'-'a' = 19
// count[19]++ // increment for 't'
// t.charAt(2) is 'c': 'c'-'a' = 2
// count[2]-- // decrement for 'c'
// // Final array:
// // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// // Check if all values are 0 - they are, so return true
class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }

    int[] count = new int[26];
    for (int i = 0; i < s.length(); i++) {
      count[s.charAt(i) - 'a']++;
      count[t.charAt(i) - 'a']--;
    }

    for (int val : count) {
      if (val != 0) {
        return false;
      }
    }
    return true;
  }
}
