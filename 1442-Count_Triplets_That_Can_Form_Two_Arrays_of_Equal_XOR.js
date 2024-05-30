/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let n = arr.length;
    let prefixXor = new Array(n + 1).fill(0);

    // Compute the prefix XOR array
    for (let i = 0; i < n; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }

    let count = 0;

    // Iterate over all possible pairs (i, k) and find j such that prefixXor[i] == prefixXor[k + 1]
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (prefixXor[i] == prefixXor[k + 1]) {
                // If prefixXor[i] == prefixXor[k + 1], it means the XOR from i to k is 0
                count += (k - i);
            }
        }
    }

    return count;
};
