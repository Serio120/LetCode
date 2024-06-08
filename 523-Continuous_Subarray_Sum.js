/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // Create a map to store the remainder of the cumulative sum and its index
    let remainderMap = new Map();
    // Initialize the map with a base case
    remainderMap.set(0, -1);
    
    let cumulativeSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        cumulativeSum += nums[i];
        
        // Get the remainder of the cumulative sum divided by k
        let remainder = cumulativeSum % k;
        
        // Normalize the remainder to be positive (since JavaScript handles negative mod differently)
        if (remainder < 0) {
            remainder += k;
        }
        
        // Check if the remainder is already in the map
        if (remainderMap.has(remainder)) {
            // If the subarray length is at least 2
            if (i - remainderMap.get(remainder) > 1) {
                return true;
            }
        } else {
            // Otherwise, add the remainder and its index to the map
            remainderMap.set(remainder, i);
        }
    }
    
    return false;
};
