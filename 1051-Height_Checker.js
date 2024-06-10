/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Create a copy of the heights array and sort it to get the expected order
    let expected = [...heights].sort((a, b) => a - b);
    
    // Initialize a counter for the number of mismatches
    let mismatches = 0;
    
    // Compare the original heights with the expected heights
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            mismatches++;
        }
    }
    
    // Return the number of mismatches
    return mismatches;
};

// Example usage:
console.log(heightChecker([1, 1, 4, 2, 1, 3])); // Output: 3
console.log(heightChecker([5, 1, 2, 3, 4]));    // Output: 5
console.log(heightChecker([1, 2, 3, 4, 5]));    // Output: 0
