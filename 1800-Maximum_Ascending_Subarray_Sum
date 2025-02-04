/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i]; // Start a new subarray
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
