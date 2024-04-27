/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const n = ring.length;
    const m = key.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n).fill(0));
    
    // Store the positions of each character in the ring
    const positions = new Map();
    for (let i = 0; i < n; i++) {
        const c = ring[i];
        if (!positions.has(c)) positions.set(c, []);
        positions.get(c).push(i);
    }
    
    // Helper function to calculate the minimum steps to spell the key starting from index i on the ring
    const dfs = (i, j) => {
        if (dp[i][j] > 0) return dp[i][j];
        if (i === m) return 0; // Base case: all characters in the key have been spelled
        
        const c = key[i];
        const nextPositions = positions.get(c);
        let minSteps = Infinity;
        for (const next of nextPositions) {
            const d = Math.abs(j - next);
            const steps = Math.min(d, n - d) + 1; // Steps to rotate and press the center button
            minSteps = Math.min(minSteps, steps + dfs(i + 1, next));
        }
        dp[i][j] = minSteps;
        return minSteps;
    };
    
    // Start from the first character of the key, which is at index 0 in the ring
    return dfs(0, 0);
};

// Test cases
console.log(findRotateSteps("godding", "gd")); // Output: 4
console.log(findRotateSteps("godding", "godding")); // Output: 13
