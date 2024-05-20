/**
 * @param {number[]} nums
 * @return {number}
 */


function subsetXORSum(nums) {
  let total = 0;
  const n = nums.length;

  for (let mask = 0; mask < (1 << n); mask++) {
    let xor = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        xor ^= nums[i];
      }
    }
    total += xor;
  }

  return total;
}
