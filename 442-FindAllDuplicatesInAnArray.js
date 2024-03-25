/* (Statement)********************************************************
MEDIUM
Given an integer array nums of length n where all the integers of nums are in the range [1, n]
and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.
**********************************************************************/

var findDuplicates = function (nums) {
    const duplicates = []; // Initialize array for duplicates

    for (let i = 0; i < nums.length; i++) { // Iterate over each number
        const index = Math.abs(nums[i]) - 1; // Calculate index based on absolute value

        // If the number in the calculated index is negative, it is a duplicate
        if (nums[index] < 0) {
            duplicates.push(index + 1); // Add duplicate to array
        } else {
            nums[index] = -nums[index]; // Mark number as visited
        }
    }

    return duplicates;  // Return found duplicates
};

/********
 * Runtime
 * 64ms
 * 
 * Memory
 * 57.51MB
 * 
 * This code does not work for negative numbers
 * 
 */
