/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        // Check for increasing subarray starting at i
        let increasingLength = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[j - 1]) {
                increasingLength++;
            } else {
                break;
            }
        }
        maxLength = Math.max(maxLength, increasingLength);

        // Check for decreasing subarray starting at i
        let decreasingLength = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[j - 1]) {
                decreasingLength++;
            } else {
                break;
            }
        }
        maxLength = Math.max(maxLength, decreasingLength);
    }

    return maxLength;
};
