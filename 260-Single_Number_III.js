/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // Step 1: XOR all numbers to get the XOR of the two unique numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a set bit (rightmost set bit)
    let mask = 1;
    while ((xor & mask) === 0) {
        mask <<= 1;
    }

    // Step 3: Partition the array into two groups and find the unique numbers
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if ((num & mask) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

// Example usage:
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // Output: [3, 5]
console.log(singleNumber([-1, 0])); // Output: [-1, 0]
console.log(singleNumber([0, 1])); // Output: [1, 0]
