function solution(lamps, points) {
    const result = [];
    
    for (const point of points) {
        let count = 0;
        for (const lamp of lamps) {
            if (point >= lamp[0] && point <= lamp[1]) {
                count++;
            }
        }
        result.push(count);
    }
    
    return result;
}

// Test the function with the given example
const lamps = [[1, 7], [5, 11], [7, 9]];
const points = [7, 1, 5, 10, 9, 15];
console.log(solution(lamps, points));  // Should output [3, 1, 2, 1, 2, 0]