/**
 * @param {string[]} folder
 * @return {string[]}
 */
function removeSubfolders(folder) {
  // Sort the folders lexicographically so that parent folders 
  // always come before their subfolders
  // e.g., "/a" comes before "/a/b" which comes before "/a/b/c"
  folder.sort();
  
  // Initialize result array with the first folder
  const result = [folder[0]];
  
  // Iterate through remaining folders starting from index 1
  for (let i = 1; i < folder.length; i++) {
      const currentPath = folder[i];
      const lastAddedPath = result[result.length - 1];
      
      // Check if current folder is a subfolder of the last added folder
      // A folder is a subfolder if:
      // 1. It starts with the parent folder path
      // 2. The next character after parent path length is '/'
      const isSubfolder = currentPath.startsWith(lastAddedPath) && 
                         currentPath[lastAddedPath.length] === '/';
      
      // If it's not a subfolder, add it to result
      if (!isSubfolder) {
          result.push(currentPath);
      }
  }
  
  return result;
}

// Example usage:
// Example 1
console.log(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]));
// Output: ["/a","/c/d","/c/f"]

// Example 2
console.log(removeSubfolders(["/a","/a/b/c","/a/b/d"]));
// Output: ["/a"]

// Example 3
console.log(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]));
// Output: ["/a/b/c","/a/b/ca","/a/b/d"]