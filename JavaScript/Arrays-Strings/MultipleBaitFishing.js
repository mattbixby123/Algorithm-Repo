function solution(fish, baits) {
  if (baits.length >= fish.length) {
    return "Error: Number of baits must be less than the number of fish";
  }

  let fishCaught = 0;
  let baitUsesLeft = new Array(baits.length).fill(3);  // Each bait starts with 3 uses
  fish.sort((a, b) => a - b);  // Sort fish by size

  for (let i = 0; i < fish.length; i++) {
    for (let j = 0; j < baits.length; j++) {
      if (i < baits[j] && baitUsesLeft[j] > 0) {
        fishCaught++;
        baitUsesLeft[j]--;
        break;  // Move to next fish once caught
      }
    }
  }

  return {
    fishCaught: fishCaught,
    remainingFish: fish.length - fishCaught,
    baitUsesLeft: baitUsesLeft
  };
}

// Test the function
console.log(solution([3, 5, 1, 4, 2], [2, 3]));
console.log(solution([5, 3, 4, 2, 1, 6], [3, 2, 4]));
console.log(solution([1, 2, 3], [3, 2, 1]));  // This should return an error message