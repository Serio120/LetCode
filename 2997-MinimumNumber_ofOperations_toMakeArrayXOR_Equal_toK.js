/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    if (xor === k) {
        return 0;
    } else {
        return (xor ^ k).toString(2).split('1').length - 1;
    }
};
