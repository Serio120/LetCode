/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestIdealString = function(s, k) {
    let n = s.length;
    let dp = new Array(n).fill(0);
    let last_occurrence = new Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
        dp[i] = 1;
        for (let j = Math.max(0, s.charCodeAt(i) - 'a'.charCodeAt(0) - k); j <= Math.min(25, s.charCodeAt(i) - 'a'.charCodeAt(0) + k); j++) {
            if (last_occurrence[j] != -1) {
                dp[i] = Math.max(dp[i], dp[last_occurrence[j]] + 1);
            }
        }
        last_occurrence[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    return Math.max(...dp);
};
